---
# ─────────────────────────────────────────────────────────────────────────
# MACHINE-READABLE SEARCH CONFIG (consumed by find_leads.py)
# This YAML front-matter holds the firmographic + persona filters used to
# SOURCE leads from the Ark AI API. The human-readable rubric below is used to
# SCORE them. Edit the values here to retarget sourcing — no code changes.
# Ark enums: seniority = founder|c_suite|head|manager|senior|mid-level|junior
#            department = sales|marketing|engineering|product_management|
#                         operations|finance|hr|...
# ─────────────────────────────────────────────────────────────────────────
search:
  batch_size: 20            # stop after this many verified leads are written
  companies_per_page: 25    # company-search page size (1–100)
  people_per_company: 5     # decision-maker candidates to pull per company

  company:                  # → Ark Company Search (firmographics)
    industries: []          # e.g. ["software", "logistics"]; [] = any
    keywords: []            # e.g. ["manual process", "back office"]; [] = any
    locations:              # account.location matches (NL + EU)
      - Netherlands
      - Belgium
      - Germany
      - France
      - Spain
      - Italy
      - Ireland
      - Sweden
      - Denmark
      - Poland
    employee_size:          # ICP floor: 10+ employees
      min: 10
      max: 10000

  persona:                  # → Ark People Search (decision-maker)
    seniority:              # ops decision-maker or founder
      - founder
      - c_suite
      - head
      - manager
    departments:
      - operations
    titles: []              # optional title keywords to prefer when picking,
                            # e.g. ["operations", "COO", "founder"]; [] = any
---

# Ideal Customer Profile (ICP) & Scoring Rubric

This file is the single source of truth for what a "good" lead looks like.
The agent reads it before sourcing, scoring, and drafting outreach. Each lead
is scored **0–100** by summing the criteria below. Edit anything here to
retarget the agent — no code changes required.

---

## How the rubric works

- There are **5 criteria**. Each is worth a fixed number of points (its
  **weight**). The weights sum to **100**.
- For every lead, the agent rates each criterion **Strong / Medium / Weak** and
  awards points from that criterion's band.
- The final score is the sum of the five awarded values (0–100).
- Leads scoring **≥ 70** are **good-fit** and move on to outreach drafting.

```
final_score = pain_fit + decision_maker + company_size + geography + b2b_model
```

### Point bands per rating

Each criterion awards **100% / 60% / 20%** of its weight for
**Strong / Medium / Weak**. A hard disqualifier (see below) zeroes the whole
score regardless of the bands.

| Criterion (weight)            | Strong (100%) | Medium (60%) | Weak (20%) |
| ----------------------------- | ------------- | ------------ | ---------- |
| Repetitive manual processes (30) | 30 | 18 | 6 |
| Decision-maker access (25)       | 25 | 15 | 5 |
| Company size (20)                | 20 | 12 | 4 |
| Geography (15)                   | 15 | 9  | 3 |
| B2B business model (10)          | 10 | 6  | 2 |
| **Total**                        | **100** | — | — |

> To retarget: change the weights (keep them summing to 100), rewrite the
> signal bullets, or add/remove a whole criterion block. The agent reads the
> signals as the definition of each rating.

---

## Criterion 1 — Repetitive manual processes  ·  weight 30

*The core pain we automate. The strongest predictor of fit.*

- **Strong (30):** Clear, visible repetitive manual work — manual data entry,
  copy-paste between tools, spreadsheet-driven ops, manual invoicing/onboarding,
  a back office or ops team doing the same task daily. Job posts for "operations
  coordinator", "data entry", or many ops/admin headcount relative to size.
- **Medium (18):** Some manual workflows likely but not obvious; uses a few
  disconnected SaaS tools with no integration layer; growing fast (process debt
  forming) but not yet visibly painful.
- **Weak (6):** Already heavily automated, engineering-led, or product is itself
  a workflow-automation tool; little sign of repetitive manual work.

## Criterion 2 — Decision-maker access  ·  weight 25

*We sell to the person who owns the process and can say yes.*

- **Strong (25):** A reachable **founder/owner** (small co.) **or** an **ops
  decision-maker** — Head/Director/VP of Operations, COO, Operations Manager —
  with a verified email.
- **Medium (15):** Relevant person exists but is one level off (e.g. ops analyst,
  office manager, or a founder at a larger company who delegates), or contact
  found but email not yet verified.
- **Weak (5):** No clear process owner identifiable; only generic role inboxes
  (info@, sales@) or gatekept enterprise org with no reachable ops lead.

## Criterion 3 — Company size  ·  weight 20

*Big enough to feel the pain, small enough to move fast. Floor: 10 employees.*

- **Strong (20):** **10–200 employees** — large enough to have repetitive
  process volume, small enough for a fast buying decision.
- **Medium (12):** **200–500 employees**, or **5–9 employees** (just under the
  floor but plausibly scaling into it).
- **Weak (4):** **500+ employees** (long sales cycles) — still B2B but harder.

## Criterion 4 — Geography  ·  weight 15

*Where we can sell and support effectively.*

- **Strong (15):** Based in the **Netherlands (NL)**.
- **Medium (9):** Based elsewhere in the **EU / EEA**.
- **Weak (3):** Outside the EU but in a supportable timezone/market (e.g. UK).

## Criterion 5 — B2B business model  ·  weight 10

*We sell to businesses, not consumers.*

- **Strong (10):** Clearly **B2B** — sells products/services to other businesses.
- **Medium (6):** **B2B2C or hybrid** with a meaningful B2B operations side.
- **Weak (2):** Primarily **B2C**, but with internal ops we could still help.

---

## Hard disqualifiers (score → 0, drop immediately)

A lead matching any of these is removed regardless of its rubric score:

- Pure **B2C** with no business operations to automate
- **Fewer than 5 employees** (below even the medium band)
- Outside supported geographies (neither EU/EEA nor an explicitly allowed market)
- **Competitor** (builds automation/agent tooling) or **existing customer**
- No reachable contact and no verifiable company information

---

## Qualification threshold

- **≥ 70** → good-fit → draft personalized outreach
- **50–69** → borderline → hold for review / lighter-touch sequence
- **< 50** → skip

Adjust this threshold to tighten or loosen the funnel.

---

## Value proposition & outreach context

Used by the drafting step to personalize messages to good-fit leads.

- **What we sell:** AI agents that automate repetitive, manual business
  operations.
- **Core pain we solve:** Teams losing hours to manual data entry, copy-paste,
  and spreadsheet-driven workflows.
- **Proof points:** _add case studies / metrics / notable customers_
- **Call to action:** _e.g. book a 20-min intro call_
- **Tone:** concise, direct, no fluff.

---

## Swapping in your own ICP

1. Rewrite the **weight** and **signal bullets** for each criterion to match
   your market. Keep the weights summing to 100.
2. Add or delete whole criterion blocks as needed (and update the point-band
   table and the `final_score` formula comment to match).
3. Update the **hard disqualifiers** and **threshold**.
4. Update the **value proposition** block so outreach reflects what you sell.
