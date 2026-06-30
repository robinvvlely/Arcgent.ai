# Ideal Customer Profile (ICP)

This file is the single source of truth for what a "good" lead looks like.
The agent reads it before sourcing, scoring, and drafting outreach. Edit the
values below to retarget the agent — no code changes required.

> Everything here is a placeholder. Fill in the real targeting criteria for
> your campaign.

---

## 1. Company firmographics

- **Industry / vertical:** _e.g. B2B SaaS, fintech, healthcare IT_
- **Sub-verticals to include:** _..._
- **Sub-verticals to exclude:** _..._
- **Company size (headcount):** _e.g. 50–500 employees_
- **Annual revenue:** _e.g. $5M–$100M ARR_
- **Funding stage:** _e.g. Seed to Series B_
- **Geographies:** _e.g. US, UK, EU; exclude APAC_
- **Tech stack signals:** _e.g. uses Salesforce, runs on AWS, has a React frontend_

## 2. Buying triggers (nice-to-have signals)

- _Recently raised funding_
- _Hiring for relevant roles_
- _Launched a new product line_
- _Leadership change in target department_

## 3. Target personas (who we sell to)

| Persona | Titles | Department | Seniority |
| ------- | ------ | ---------- | --------- |
| Primary | _VP Sales, Head of Growth_ | Sales | VP / Director |
| Secondary | _RevOps Manager_ | Operations | Manager |

## 4. Disqualifiers (hard filters — drop immediately)

- _Competitors_
- _Existing customers_
- _Companies below minimum size_
- _Regions we cannot sell to_

## 5. Scoring weights

How much each dimension contributes to the final fit score (0–100).
Weights should sum to 100.

| Dimension            | Weight |
| -------------------- | ------ |
| Industry match       | 25     |
| Company size match   | 20     |
| Persona / title match| 25     |
| Buying triggers      | 15     |
| Geography match      | 15     |

**Qualification threshold:** leads scoring **≥ 70** are considered good-fit and
move on to outreach drafting.

## 6. Value proposition & outreach context

- **What we sell:** _one-line description_
- **Core pain we solve:** _..._
- **Proof points / social proof:** _case studies, notable customers, metrics_
- **Call to action:** _e.g. book a 20-min intro call_
- **Tone:** _e.g. concise, friendly, no fluff_
