# Lead Qualification Agent

An agent that starts from nothing but an **ideal customer profile (ICP)** and
produces a list of qualified, ready-to-contact B2B leads.

There is no input lead list. The agent sources prospects itself, verifies their
emails, scores each one against the ICP, and drafts personalized outreach for
the good-fit ones.

> **Status: scaffold only.** The folder structure and pipeline shape are in
> place, but no logic has been implemented yet.

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

## Usage

```bash
python find_leads.py
```

Edit `icp.md` to retarget the agent — no code changes needed.

## Next steps

- Implement the stubs in `find_leads.py` (sourcing, verification, scoring,
  drafting, output).
- Decide on data sources for prospecting and email verification.
- Choose an output format (CSV / JSON / Markdown) for `output/`.
