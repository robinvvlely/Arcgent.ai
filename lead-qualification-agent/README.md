# Lead Qualification Agent

An agent that starts from nothing but an **ideal customer profile (ICP)** and
produces a list of qualified, ready-to-contact B2B leads.

There is no input lead list. The agent sources prospects itself, verifies their
emails, scores each one against the ICP, and drafts personalized outreach for
the good-fit ones.

> **Status: sourcing implemented.** `find_leads.py` now builds a verified lead
> list from the ICP using the Ark AI API. Scoring and outreach drafting are
> still stubs.

## How it works

```
icp.md  ->  source  ->  enrich/verify  ->  score  ->  draft  ->  output/
```

1. **Define** — `icp.md` describes who you want to reach (firmographics,
   personas, disqualifiers, scoring weights, value prop).
2. **Source** — the agent finds matching B2B prospects from scratch.
3. **Enrich & verify** — it attaches contact info and verifies each email is
   deliverable; prospects without a verified email are dropped.
4. **Score** — each lead is scored 0–100 against the ICP using the weights in
   `icp.md`.
5. **Draft** — leads above the qualification threshold get a personalized
   outreach message.
6. **Output** — results are written to `output/`.

## Project structure

```
lead-qualification-agent/
├── icp.md          # Ideal customer profile — the agent's targeting config
├── find_leads.py   # Pipeline entry point (source -> verify -> score -> draft)
├── output/         # Generated leads, scores, and outreach drafts
└── README.md       # This file
```

## Sourcing with the Ark AI API

`find_leads.py` has no input list — it builds one from the ICP in three calls
to the [Ark AI API](https://docs.ai-ark.com):

1. **Company Search** (`POST /v1/companies`) — companies matching the ICP
   firmographics (locations, employee size, industries/keywords).
2. **People Search** (`POST /v1/people`) — for each company, the decision-maker
   matching the persona (seniority / department / preferred titles), scoped to
   that company's Ark id.
3. **Export single** (`POST /v1/people/export/single`) — reveals and verifies
   that person's email.

The firmographic and persona filters live in the **YAML front-matter at the top
of `icp.md`** (the `search:` block). Edit those to retarget sourcing — no code
changes. The prose rubric below the front-matter is for scoring.

Implementation notes:

- Auth is the `X-TOKEN` header; the token is read from `ARK_API_TOKEN`.
- Requests use `curl` via `subprocess` (not urllib/requests) — Ark's TLS stack
  rejects Python's default HTTP client.
- Email reveals cost ~1 Ark credit each on success, 0 when no email is found
  (Company/People Search are not credit-billed). The run prints the reveal
  credits consumed; the API returns no running balance, so this is counted
  locally.

## Usage

```bash
export ARK_API_TOKEN=<your token>
python find_leads.py
```

By default it collects a small batch (`batch_size: 20` in `icp.md`) of verified
leads and writes them to **`output/leads.csv`** with columns:

```
name, title, company, domain, linkedin_url, email
```

Edit `icp.md` to retarget the agent — no code changes needed.

## Next steps

- Implement scoring (`score_leads`) against the rubric in `icp.md`.
- Implement outreach drafting (`draft_outreach`) for good-fit leads.
- Optionally batch email reveals via the async export + webhook endpoint for
  larger runs.
