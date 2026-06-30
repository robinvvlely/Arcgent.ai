"""
find_leads.py — entry point for the lead-qualification agent.

SCAFFOLD ONLY. No logic is implemented yet. The functions below define the
intended pipeline so the structure is clear; each one is a stub that should be
filled in later.

Pipeline (ICP in -> qualified, drafted leads out):

    icp.md  ->  source  ->  enrich/verify  ->  score  ->  draft  ->  output/

There is no input lead list. The agent sources prospects itself from the ICP.
"""

from __future__ import annotations


# --- Config -----------------------------------------------------------------

def load_icp(path: str = "icp.md") -> dict:
    """Parse icp.md into a structured config (criteria, weights, threshold)."""
    raise NotImplementedError


# --- 1. Source --------------------------------------------------------------

def source_prospects(icp: dict) -> list[dict]:
    """Find candidate B2B companies/people matching the ICP firmographics.

    No existing list — discover prospects from scratch (search APIs,
    data providers, web). Returns raw, unverified candidate records.
    """
    raise NotImplementedError


# --- 2. Enrich & verify -----------------------------------------------------

def enrich_and_verify(prospects: list[dict]) -> list[dict]:
    """Attach contact details and verify each email is deliverable.

    Drops prospects without a verified email.
    """
    raise NotImplementedError


# --- 3. Score ---------------------------------------------------------------

def score_lead(lead: dict, icp: dict) -> float:
    """Score a single lead 0-100 against the ICP using its scoring weights."""
    raise NotImplementedError


def score_leads(leads: list[dict], icp: dict) -> list[dict]:
    """Score every lead and attach the fit score."""
    raise NotImplementedError


# --- 4. Draft outreach ------------------------------------------------------

def draft_outreach(lead: dict, icp: dict) -> str:
    """Write a personalized outreach message for a good-fit lead."""
    raise NotImplementedError


# --- 5. Output --------------------------------------------------------------

def write_output(leads: list[dict], out_dir: str = "output") -> None:
    """Persist scored leads and drafts to the output/ folder."""
    raise NotImplementedError


# --- Orchestration ----------------------------------------------------------

def run(icp_path: str = "icp.md") -> None:
    """Run the full pipeline end to end."""
    icp = load_icp(icp_path)
    prospects = source_prospects(icp)
    leads = enrich_and_verify(prospects)
    scored = score_leads(leads, icp)

    threshold = icp.get("qualification_threshold", 70)
    good_fit = [lead for lead in scored if lead.get("score", 0) >= threshold]

    for lead in good_fit:
        lead["outreach"] = draft_outreach(lead, icp)

    write_output(scored)


if __name__ == "__main__":
    run()
