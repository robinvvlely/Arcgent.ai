"""
find_leads.py — source a B2B lead list from scratch using the Ark AI API.

There is no input list. Given the ICP in icp.md, this:

  1. Company Search  — find companies matching the ICP firmographics
                       (industries/keywords, employee size, location).
  2. People Search   — for each company, find the decision-maker matching the
                       persona (seniority/department/titles).
  3. Export single   — reveal + verify that person's email.

Verified leads are written to leads.csv:
  name, title, company, domain, linkedin_url, email

The run stops once `search.batch_size` verified leads are collected, and prints
how many Ark credits the email reveals consumed.

Setup:
  export ARK_API_TOKEN=<your token>
  python find_leads.py

Notes:
  - Auth header is X-TOKEN.
  - Requests go through `curl` (subprocess), NOT urllib/requests — Ark's TLS
    stack rejects Python's default client.
  - Email reveals cost ~1 credit each on success, 0 when no email is found.
    Company/People Search calls are not credit-billed. We can only count
    reveals locally; the API does not return a running credit balance.
"""

from __future__ import annotations

import csv
import json
import os
import subprocess
import sys
import time
from pathlib import Path

import yaml

# --- Constants --------------------------------------------------------------

BASE_URL = "https://api.ai-ark.com/api/developer-portal"
COMPANIES_ENDPOINT = "/v1/companies"
PEOPLE_ENDPOINT = "/v1/people"
EXPORT_SINGLE_ENDPOINT = "/v1/people/export/single"

CREDITS_PER_EMAIL = 1.0  # 0.5 profile + 0.5 verification, per Ark docs

ICP_PATH = Path(__file__).with_name("icp.md")
OUTPUT_CSV = Path(__file__).with_name("output") / "leads.csv"
CSV_COLUMNS = ["name", "title", "company", "domain", "linkedin_url", "email"]

# Politeness delay between API calls (Ark limit is 5 req/sec).
REQUEST_DELAY_SECONDS = 0.25


# --- Config -----------------------------------------------------------------

def load_search_config(path: Path = ICP_PATH) -> dict:
    """Read the YAML front-matter `search:` block from icp.md."""
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        raise SystemExit(f"{path} has no YAML front-matter (expected leading '---').")
    # front-matter is between the first and second '---' lines
    _, frontmatter, _ = text.split("---", 2)
    config = yaml.safe_load(frontmatter) or {}
    search = config.get("search")
    if not search:
        raise SystemExit(f"No `search:` block found in {path} front-matter.")
    return search


def get_token() -> str:
    token = os.environ.get("ARK_API_TOKEN")
    if not token:
        raise SystemExit("ARK_API_TOKEN is not set. `export ARK_API_TOKEN=<token>`")
    return token


# --- HTTP (via curl) --------------------------------------------------------

def ark_post(path: str, payload: dict, token: str) -> tuple[int, dict | None]:
    """POST `payload` to an Ark endpoint via curl. Returns (status_code, json).

    json is None when the body is empty or not JSON (e.g. some error pages).
    """
    url = BASE_URL + path
    cmd = [
        "curl", "-sS", "-X", "POST", url,
        "-H", f"X-TOKEN: {token}",
        "-H", "Content-Type: application/json",
        "-d", json.dumps(payload),
        "-w", "\n%{http_code}",          # append status code on its own line
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        raise RuntimeError(f"curl failed ({proc.returncode}): {proc.stderr.strip()}")

    body, _, status = proc.stdout.rpartition("\n")
    try:
        status_code = int(status.strip())
    except ValueError:
        raise RuntimeError(f"Unexpected curl output: {proc.stdout[:500]!r}")

    parsed = None
    body = body.strip()
    if body:
        try:
            parsed = json.loads(body)
        except json.JSONDecodeError:
            parsed = None

    time.sleep(REQUEST_DELAY_SECONDS)
    return status_code, parsed


# --- Filter builders --------------------------------------------------------

def build_company_filter(company_cfg: dict, page: int, size: int) -> dict:
    """Map the ICP company config to an Ark Company Search request body."""
    account: dict = {}

    locations = company_cfg.get("locations") or []
    if locations:
        account["location"] = {"any": {"include": locations}}

    industries = company_cfg.get("industries") or []
    if industries:
        account["industries"] = {"any": {"include": {"mode": "SMART", "content": industries}}}

    keywords = company_cfg.get("keywords") or []
    if keywords:
        account["keyword"] = {
            "any": {"include": {
                "sources": [{"mode": "SMART", "source": "KEYWORD"}],
                "content": keywords,
            }}
        }

    size_cfg = company_cfg.get("employee_size") or {}
    if size_cfg:
        account["employeeSize"] = {
            "type": "RANGE",
            "range": [{"start": size_cfg.get("min", 0), "end": size_cfg.get("max", 1_000_000)}],
        }

    return {"page": page, "size": size, "account": account}


def build_people_filter(company_id: str, persona_cfg: dict, size: int) -> dict:
    """Map the ICP persona config to an Ark People Search request body,
    scoped to a single company by its Ark id."""
    contact: dict = {"company": {"current": {"any": {"include": [company_id]}}}}

    seniority = persona_cfg.get("seniority") or []
    if seniority:
        contact["seniority"] = {"any": {"include": seniority}}

    departments = persona_cfg.get("departments") or []
    if departments:
        contact["departmentAndFunction"] = {"any": {"include": departments}}

    return {"page": 0, "size": size, "contact": contact}


# --- Response helpers -------------------------------------------------------

def pick_decision_maker(people: list[dict], title_prefs: list[str]) -> dict | None:
    """Choose the best persona match. Prefer a person whose title contains one
    of the configured title keywords; otherwise take the first result."""
    if not people:
        return None
    if title_prefs:
        lowered = [t.lower() for t in title_prefs]
        for person in people:
            title = (person.get("profile", {}).get("title") or "").lower()
            if any(pref in title for pref in lowered):
                return person
    return people[0]


def extract_verified_email(export_response: dict) -> str | None:
    """Return the first VALID email address from an export/single response."""
    outputs = (export_response.get("email") or {}).get("output") or []
    for entry in outputs:
        if entry.get("status") == "VALID" and entry.get("address"):
            return entry["address"]
    # fall back to any returned address
    for entry in outputs:
        if entry.get("address"):
            return entry["address"]
    return None


# --- Pipeline ---------------------------------------------------------------

def reveal_email(person_id: str, token: str) -> tuple[str | None, float]:
    """Reveal a person's verified email. Returns (email, credits_spent)."""
    status, data = ark_post(EXPORT_SINGLE_ENDPOINT, {"id": person_id}, token)
    if status == 404:          # documented: "no email found" → 0 credits
        return None, 0.0
    if status != 200 or not data:
        print(f"    ! export/single returned HTTP {status}", file=sys.stderr)
        return None, 0.0
    email = extract_verified_email(data)
    return (email, CREDITS_PER_EMAIL) if email else (None, 0.0)


def run(icp_path: Path = ICP_PATH) -> None:
    token = get_token()
    cfg = load_search_config(icp_path)

    batch_size = int(cfg.get("batch_size", 20))
    companies_per_page = int(cfg.get("companies_per_page", 25))
    people_per_company = int(cfg.get("people_per_company", 5))
    company_cfg = cfg.get("company") or {}
    persona_cfg = cfg.get("persona") or {}
    title_prefs = persona_cfg.get("titles") or []

    print(f"Target: {batch_size} verified leads")
    print(f"ICP locations: {', '.join(company_cfg.get('locations', [])) or 'any'}")
    print(f"Persona: {', '.join(persona_cfg.get('seniority', [])) or 'any'} "
          f"in {', '.join(persona_cfg.get('departments', [])) or 'any dept'}\n")

    leads: list[dict] = []
    credits_used = 0.0
    companies_seen = 0
    page = 0

    while len(leads) < batch_size:
        # 1) Company Search ---------------------------------------------------
        company_req = build_company_filter(company_cfg, page, companies_per_page)
        status, data = ark_post(COMPANIES_ENDPOINT, company_req, token)
        if status != 200 or not data:
            print(f"Company Search failed (HTTP {status}). Stopping.", file=sys.stderr)
            break

        companies = data.get("content") or []
        if not companies:
            print("No more companies match the ICP. Stopping.")
            break

        for company in companies:
            if len(leads) >= batch_size:
                break
            companies_seen += 1

            company_id = company.get("id")
            summary = company.get("summary") or {}
            link = company.get("link") or {}
            company_name = summary.get("name", "")
            domain = link.get("domain", "")
            if not company_id:
                continue

            # 2) People Search (scoped to this company) -----------------------
            people_req = build_people_filter(company_id, persona_cfg, people_per_company)
            p_status, p_data = ark_post(PEOPLE_ENDPOINT, people_req, token)
            if p_status != 200 or not p_data:
                continue
            person = pick_decision_maker(p_data.get("content") or [], title_prefs)
            if not person:
                continue

            person_id = person.get("id")
            profile = person.get("profile") or {}
            name = profile.get("full_name", "")
            title = profile.get("title") or profile.get("headline", "")
            linkedin_url = (person.get("link") or {}).get("linkedin", "")
            if not person_id:
                continue

            # 3) Reveal + verify email ---------------------------------------
            email, spent = reveal_email(person_id, token)
            credits_used += spent
            if not email:
                continue

            leads.append({
                "name": name,
                "title": title,
                "company": company_name,
                "domain": domain,
                "linkedin_url": linkedin_url,
                "email": email,
            })
            print(f"  [{len(leads)}/{batch_size}] {name} — {title} @ {company_name} <{email}>")

        if data.get("last"):
            print("Reached the last page of company results. Stopping.")
            break
        page += 1

    write_output(leads)

    print(f"\nDone. Wrote {len(leads)} leads to {OUTPUT_CSV}")
    print(f"Companies scanned: {companies_seen}")
    print(f"Credits used (email reveals): {credits_used:g} "
          f"({int(credits_used / CREDITS_PER_EMAIL) if CREDITS_PER_EMAIL else 0} verified emails)")


def write_output(leads: list[dict], path: Path = OUTPUT_CSV) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        writer.writeheader()
        writer.writerows(leads)


if __name__ == "__main__":
    run()
