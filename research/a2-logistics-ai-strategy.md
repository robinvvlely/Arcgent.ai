# A2 Logistics — AI Implementation Strategy

> Meeting prep brief for ArcGent. Source: https://www.a2logistics.com (researched 2026-05-06).

---

## 1. Company Snapshot

**Who they are.** A2 Logistics is a Dutch international freight forwarder ("expediteur") based in 's-Hertogenbosch (Den Bosch), in business 15+ years, ~35 employees. They run an **asset-light** model — no own fleet — coordinating shipments through a network of contracted carriers and short-sea operators.

**What they sell.**

| Service | Notes |
|---|---|
| Road freight (FTL) | General + exceptional (oversized) cargo |
| Groupage | Consolidated LTL via own DC at Koenendelseweg, Den Bosch |
| Short Sea Shipping | Multimodal sea+road, e.g. Italy → Scandinavia |
| Hazardous (ADR) | Full ADR-compliant handling |
| Temperature-controlled | "Frost-free" and refrigerated, esp. Norway |
| Door-to-door + customs/CMR docs | Full forwarding incl. POD, customs, FENEX terms |

**Where they sell.** Specialist on lanes that big carriers under-serve:

- **Ireland** — described as their "specialty"; team led by Arjan Pastoors, sales: Remon Boons, Tom van den Hurk, Raphaël Timmermans.
- **Finland, Norway, Sweden, Scandinavia** — high-frequency runs; sales: Jason Sloekers, Sebastiaan Ploeger, Jaco van den Beuken.
- **Europe Mainland** as origin (collection across all of Europe).

**How they sell.**

- Quote SLA: **non-binding offer within 30 minutes** on weekdays.
- Planning desk staffed **24/7**.
- Multilingual: **NL, EN, DE, ES, IT** (5 languages).
- Channels: phone + email + contact form (no customer portal visible).
- Compliance: CMR insurance throughout Europe, FENEX (Dutch forwarding) terms.

**Org structure (relevant for AI rollout).**

- General mgmt: Sander Vos, Dave van der Loo
- Sales (per region) — Ireland team + Scandinavia team
- Customer Service: Margarita Florez, Larissa Doomernik (Ireland)
- Planning: split into Ireland desk, Scandinavia desk, Europe Mainland desk (~10 planners total)
- Accounting: Kelly Coort, Martijn Kuppens, Henry van den Boogaard

---

## 2. Where AI Bites — Pain Map

Reading their site against a typical asset-light forwarder operating model, the friction is concentrated in five workflows:

1. **Quote-to-offer.** "30-min response" = humans typing. At ~35 staff with multiple sales people across two regions, quoting is a meaningful chunk of headcount. Every quote needs: parsing the inbound email, matching cargo to a lane/mode, looking up rates from contractor network, drafting in the right language.

2. **Carrier selection from a network.** They don't own trucks — every load is matched to a contractor. That's a structured decision (lane, equipment, ADR, temp, history, price) repeated daily. Today: planner judgment + Rolodex.

3. **Customer service in 5 languages.** Status questions, POD requests, ETA changes, claims. High-volume, repetitive, low-margin work currently absorbed by planners and customer service.

4. **Documentation.** CMR, packing lists, customs paperwork, PODs. Mostly PDF/scan. Manual data re-entry into TMS / spreadsheets / accounting.

5. **24/7 planning desk.** Off-hours coverage is expensive; most off-hours requests are status checks and standard quotes — exactly what an agent can do alone.

**Strategic angle for the pitch:** in an asset-light forwarder, **labour is the cost of goods sold**. Margin lives in (a) quote speed × hit rate, (b) carrier rate buy vs. customer sell, (c) ops staff productivity. AI moves all three at once.

---

## 3. Quick Wins — 30 to 90 Days

Ranked by ROI / effort. These are pilot-sized, with clear before/after metrics.

### QW1 — AI Quote Assistant *(recommended pilot)*
- **What.** Inbound quote emails parsed → shipment fields extracted (origin, dest, dims, weight, cargo, ADR, temp, ready date) → matched to lane → draft offer pre-filled in customer's language for planner approval.
- **Before.** 30-min response, planner-typed.
- **After.** Draft ready in <60 sec; planner edits + sends. Target: **median response 2 min, after-hours coverage with no humans**.
- **KPI.** Time-to-quote, quotes-per-planner-per-day, after-hours response rate, hit rate (quote → booking).
- **Effort.** 4–6 weeks. Connect to a shared inbox + their rate sheet/TMS.
- **Why this first.** Highest visibility, clear metric, human stays in approval loop, and the "30-min promise" is *already on their homepage* — easy to tell the win story.

### QW2 — Multilingual Customer-Service Agent
- **What.** Answers FAQ, status, POD, ETA-change, invoice questions in NL/EN/DE/ES/IT. Pulls live status from carrier emails / EDI / portals.
- **After.** Deflects 50–70% of inbound service email; the rest gets routed pre-summarised to the right desk (Ireland / Scandinavia / Mainland).
- **KPI.** % auto-resolved, avg handle time on remaining tickets, after-hours deflection.

### QW3 — Document Extraction Agent
- **What.** OCR + LLM extraction from CMR, packing lists, customs docs, signed PODs. Pushes structured data into TMS + accounting.
- **After.** Eliminates manual re-typing; speeds invoice cycle; auto-flags missing/illegible PODs.
- **KPI.** Docs/day automated, days-to-invoice, error rate vs. manual.

### QW4 — Email Triage & Routing
- **What.** Inbound mail classified (quote / status / claim / invoice / spam) and routed to the right desk with a 1-line summary.
- **After.** Planners spend less time triaging shared inboxes.
- **KPI.** Time-to-first-touch, mis-route rate.

---

## 4. Autonomous Agents — 90 to 180 Days

Once quick wins are live and the team trusts the system, escalate from "draft for human" to "act, then notify."

### A1 — Autonomous Quoting Agent
End-to-end: parse → price → send offer → follow up on no-reply, with **human approval thresholds** (e.g. agent auto-sends below €X / standard lane / standard equipment; planner approves ADR, oversized, exception lanes).

### A2 — Carrier-Matching & Dispatch Agent
Given a confirmed load, picks the best carrier from the contractor network based on:
- Lane fit (history on Ireland/Nordic routes)
- Equipment + ADR / temp capability
- Last 90-day price + on-time performance
- Capacity availability
Sends rate request, books, generates rate confirmation. Planner sees a queue of "agent decisions" rather than building each one.

### A3 — Track-and-Trace Concierge
Polls carrier status (email parsing, EDI, portal scraping), detects delays vs. promised ETA, **proactively** notifies the customer in their language with a new ETA and the reason. Reduces inbound "where's my truck?" volume to near zero.

### A4 — Groupage Load-Planning Agent
Optimises the daily Den Bosch consolidation: bin-packing, weight distribution, drop sequence on each Nordic / Ireland trailer. Suggests when to hold a shipment for tomorrow vs. dispatch today.

### A5 — Sales-Prospecting Agent (growth play)
For the Ireland and Scandinavia sales teams: continuously identifies shippers in NL / DE / IT / ES with cargo flow toward A2's specialty lanes (using web signals, registry data, freight indices), drafts a personalised outreach in target language, hands off warm leads.

### A6 — Claims & Exception Agent
Detects delays / damage signals from driver and customer comms, pre-drafts the CMR claim, gathers POD + photos, routes to ops.

### A7 — Finance / AR Agent
Matches POD → invoice → payment, flags discrepancies, chases late payers in their own language with appropriate tone (formal DE, direct NL, etc.).

---

## 5. The Recommended Pilot

**Project:** Multilingual AI Quote Assistant (QW1)
**Duration:** 4–6 weeks
**Scope:** Ireland + Scandinavia inbound quote email — the two flagship lanes.
**Deliverable:**
- Inbox-integrated agent, planner-in-the-loop UI
- Extracts shipment fields, drafts offer in customer's language, pre-fills against their rate matrix
- Dashboard: response time, volume, hit rate
**Success criteria:**
- Median response time ≤ 2 min (vs. 30-min SLA)
- ≥ 60% of inbound quote requests fully drafted by agent
- 100% off-hours coverage with no extra headcount

This is the "easy yes": the metric they advertise on their homepage, improved by an order of magnitude, with humans still approving every offer. After 6 weeks of evidence, the conversation about A2 (autonomous quoting) becomes much easier.

---

## 6. Discovery Questions — Bring to the Meeting

Get these answered before scoping anything serious.

**Stack & data**
1. Which TMS / planning system do you use? (key — integration is what gates speed of rollout, per industry data)
2. Where do contractor rates live today? (TMS, Excel, planner head?)
3. Customer portal — is one on the roadmap, or do you prefer to stay email-first?
4. Do carriers send status via EDI, email, portal, or phone?

**Volume & money**
5. Quote requests per day across both desks? Quote-to-booking conversion?
6. What % of inbound email is repetitive (status / POD / ETA) vs. revenue-generating?
7. After-hours volume — what's the cost of staffing 24/7 vs. the missed-quote cost?
8. Average gross margin on a groupage shipment vs. FTL — where do you actually make money?

**Strategy & people**
9. Where do you lose deals — price, speed, capacity, language?
10. Headcount split: planners / sales / customer service / accounting?
11. Growth plan — more lanes, more volume on existing lanes, or both?
12. Any AI projects already attempted? What worked / didn't?

---

## 7. Pitch Frame for the Meeting

Three sentences to anchor the conversation:

> **"You already promise a 30-minute quote and a personal touch in 5 languages. AI doesn't replace either — it lets you keep both at 10× the volume, 24/7, without hiring."**

> **"Asset-light forwarders make money on quote speed, carrier-buy intelligence, and ops productivity. We can move all three with a single pilot in 4–6 weeks."**

> **"Start with quoting because it's measurable on day one. Then we layer carrier-matching, track-and-trace, and finance — building toward an autonomous Ireland desk and an autonomous Scandinavia desk that the human team supervises rather than operates."**

---

## 8. Industry Benchmarks Worth Quoting

From 2026 3PL / freight-brokerage AI research (sources below):

- **Exception handling / quote response** offers fastest ROI: **30–60 day payback**.
- Mid-market 3PLs deploying AI across the five core workflows (orchestration, carrier allocation, exception handling, customer-portal automation, WMS↔TMS sync) see **60–120 day payback**, **$700K–$2.4M annualised savings**.
- Real broker case: rate-quote response went from 60–65% answered (in up to 20 min) → **100% answered in 32 sec**.
- Critical success factor across deployments is **clean integration between TMS and surrounding systems**, not the AI model itself.

**Sources**
- [AI for 3PLs: The Complete 2026 Operator's Playbook — Debales AI](https://debales.ai/blog/ai-for-3pls-the-complete-2026-operator-s-playbook)
- [Best AI Tools for Freight Brokers in 2026 — Lunapath](https://www.lunapath.ai/post/best-ai-tools-freight-brokers-2026)
- [Transportation Trends 2026: The 3PL Broker Advantage — WSI](https://www.wsinc.com/blog/transportation-trends-2026-part-three)
- [Inside the next era of motor freight — Supply Chain Management Review](https://www.scmr.com/article/inside-the-next-era-of-motor-freight-how-ai-and-automation-are-redefining-performance)
- [3PL Services Accelerate Automation and Agentic AI — Daily Oil Futures](https://www.dailyoilfutures.com/archives/12626)
