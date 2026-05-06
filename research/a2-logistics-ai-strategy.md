# A2 Logistics — AI-implementatiestrategie

> Voorbereidingsdocument voor het ArcGent-gesprek met A2 Logistics. Bron: https://www.a2logistics.com (onderzocht op 2026-05-06).

---

## 1. Bedrijfsprofiel

**Wie ze zijn.** A2 Logistics is een Nederlandse internationale expediteur, gevestigd in 's-Hertogenbosch (Den Bosch), 15+ jaar actief, ~35 medewerkers. Ze werken **asset-light** — geen eigen wagenpark — en coördineren zendingen via een netwerk van vaste vervoerders en short-sea operators.

**Wat ze verkopen.**

| Dienst | Toelichting |
|---|---|
| Wegtransport (FTL) | Reguliere én exceptionele (oversize) lading |
| Groupage | Geconsolideerde LTL via eigen DC aan de Koenendelseweg, Den Bosch |
| Short Sea Shipping | Multimodaal sea+road, bv. Italië → Scandinavië |
| Gevaarlijke stoffen (ADR) | Volledig ADR-conform |
| Geconditioneerd vervoer | "Vorstvrij" en gekoeld, vooral richting Noorwegen |
| Deur-tot-deur incl. douane/CMR | Volledige expeditie incl. POD, douane, FENEX-condities |

**Waar ze actief zijn.** Specialist op trajecten waar de grote vervoerders het laten afweten:

- **Ierland** — door henzelf benoemd als specialiteit; teamlead Arjan Pastoors, sales: Remon Boons, Tom van den Hurk, Raphaël Timmermans.
- **Finland, Noorwegen, Zweden, Scandinavië** — hoogfrequente ritten; sales: Jason Sloekers, Sebastiaan Ploeger, Jaco van den Beuken.
- **Europa-mainland** als oorsprong (collectie door heel Europa).

**Hoe ze verkopen.**

- Offerte-SLA: **vrijblijvende offerte binnen 30 minuten** op werkdagen.
- Planningsdesk **24/7 bemand**.
- Meertalig: **NL, EN, DE, ES, IT** (5 talen).
- Kanalen: telefoon + e-mail + contactformulier (geen klantportaal zichtbaar).
- Compliance: CMR-verzekering binnen heel Europa, FENEX-condities.

**Organisatiestructuur (relevant voor AI-uitrol).**

- Algemeen management: Sander Vos, Dave van der Loo
- Sales (per regio) — Ierland-team + Scandinavië-team
- Klantenservice: Margarita Florez, Larissa Doomernik (Ierland)
- Planning: gesplitst in Ierland-desk, Scandinavië-desk, Europa-mainland-desk (~10 planners totaal)
- Boekhouding: Kelly Coort, Martijn Kuppens, Henry van den Boogaard

---

## 2. Waar AI bijt — pijnpuntenoverzicht

Als we hun website tegen het standaard operating model van een asset-light expediteur leggen, zit de wrijving in vijf workflows:

1. **Offerte-tot-aanbod.** "Reactie binnen 30 min" = mensen die typen. Met ~35 medewerkers en meerdere salesmensen over twee regio's, kost offreren een serieus stuk van de FTE-capaciteit. Iedere offerte vereist: inkomende mail lezen, lading koppelen aan traject/modaliteit, tarieven opzoeken bij contractanten, opstellen in de juiste taal.

2. **Vervoerderkeuze uit het netwerk.** Geen eigen vrachtwagens — elke lading wordt aan een contractant gekoppeld. Dat is een **gestructureerde beslissing** (traject, materieel, ADR, temperatuur, historie, prijs) die dagelijks honderden keren wordt herhaald. Vandaag: planner-intuïtie + Rolodex.

3. **Klantenservice in 5 talen.** Statusvragen, POD-verzoeken, ETA-wijzigingen, claims. Hoog volume, repetitief, lage marge — werk dat nu door planners en customer service wordt opgevangen.

4. **Documentenstroom.** CMR's, paklijsten, douanepapieren, POD's. Veelal PDF/scan. Handmatig overtypen naar TMS / Excel / boekhouding.

5. **24/7 planningsdesk.** Avond- en weekenddekking is duur, terwijl het meeste avondvolume bestaat uit statusvragen en standaard-offertes — exact het type werk dat een agent zelfstandig kan afhandelen.

**Strategische framing voor het gesprek:** bij een asset-light expediteur is **arbeid de kostprijs van de dienst**. De marge zit in (a) offerte-snelheid × hit rate, (b) inkooptarief vs. verkooptarief van vervoerders, (c) productiviteit van het ops-team. AI verschuift alle drie tegelijk.

---

## 3. Quick wins — 30 tot 90 dagen

Gerangschikt op ROI / inspanning. Pilot-grootte met heldere voor/na-meetwaarden.

### QW1 — AI Offerte-Assistent *(aanbevolen pilot)*
- **Wat.** Inkomende offerteaanvragen worden geparseerd → ladingvelden geëxtraheerd (oorsprong, bestemming, afmetingen, gewicht, ladingtype, ADR, temperatuur, ophaaldatum) → gematcht aan traject → conceptofferte voorbereid in de taal van de klant ter goedkeuring door de planner.
- **Voor.** 30 min reactietijd, getypt door een planner.
- **Na.** Concept klaar binnen <60 sec; planner past aan + verstuurt. Doel: **mediane reactietijd 2 min, avond/nacht-dekking zonder mensen**.
- **KPI.** Tijd-tot-offerte, offertes-per-planner-per-dag, dekking buiten kantooruren, hit rate (offerte → boeking).
- **Inspanning.** 4–6 weken. Koppeling met gedeelde mailbox + tarievenlijst/TMS.
- **Waarom als eerste.** Hoogste zichtbaarheid, helder meetbaar, mens blijft in de goedkeuringslus, en de "30-minutenbelofte" staat **al op hun homepage** — het verhaal van de winst is direct uit te leggen.

### QW2 — Meertalige Klantenservice-Agent
- **Wat.** Beantwoordt FAQ, status, POD, ETA-wijziging, factuurvragen in NL/EN/DE/ES/IT. Trekt live status uit vervoerder-mail / EDI / portalen.
- **Na.** Vangt 50–70% van inkomende servicemail af; de rest wordt vooraf samengevat doorgezet naar de juiste desk (Ierland / Scandinavië / Mainland).
- **KPI.** % automatisch opgelost, gemiddelde afhandeltijd op overige tickets, deflectie buiten kantooruren.

### QW3 — Documentextractie-Agent
- **Wat.** OCR + LLM-extractie uit CMR, paklijsten, douanepapieren, getekende POD's. Pusht gestructureerde data naar TMS + boekhouding.
- **Na.** Geen handmatig overtypen meer; snellere factuurcyclus; automatische signalering van ontbrekende of onleesbare POD's.
- **KPI.** Documenten/dag geautomatiseerd, dagen-tot-factuur, foutmarge t.o.v. handmatig.

### QW4 — Mailtriage & Routing
- **Wat.** Inkomende mail wordt geclassificeerd (offerte / status / claim / factuur / spam) en gerouteerd naar de juiste desk met een 1-regelige samenvatting.
- **Na.** Planners besteden minder tijd aan triage van gedeelde inboxen.
- **KPI.** Tijd-tot-eerste-respons, mis-routing percentage.

---

## 4. Autonome agents — 90 tot 180 dagen

Zodra de quick wins live zijn en het team het systeem vertrouwt, schalen we op van "concept voor mens" naar "handelen, daarna melden".

### A1 — Autonome Offerte-Agent
End-to-end: lezen → prijzen → aanbod versturen → opvolgen bij geen reactie, met **goedkeuringsdrempels** (bv. agent verstuurt zelf onder €X / standaardtraject / standaardmaterieel; planner keurt ADR, oversize en uitzonderingstrajecten goed).

### A2 — Vervoerder-matching & Dispatch-Agent
Bij een bevestigde boeking selecteert de agent de beste vervoerder uit het netwerk op basis van:
- Trajectfit (historie op Ierland-/Nordic-routes)
- Materieel + ADR / temperatuur-capability
- Tarief + on-time performance laatste 90 dagen
- Beschikbare capaciteit
Stuurt vrachtaanvraag, boekt, genereert rate confirmation. De planner ziet een wachtrij van "agent-beslissingen" in plaats van elke boeking zelf op te bouwen.

### A3 — Track-and-Trace Concierge
Pollt vervoerderstatus (e-mail-parsing, EDI, portal-scraping), detecteert vertragingen t.o.v. beloofde ETA en stuurt de klant **proactief** een nieuwe ETA + reden in zijn taal. Reduceert inkomende "waar is mijn truck?"-vragen tot bijna nul.

### A4 — Groupage Load-Planning Agent
Optimaliseert de dagelijkse Den Bosch-consolidatie: bin-packing, gewichtsverdeling, droplaadvolgorde per Nordic-/Ierland-trailer. Geeft advies wanneer een zending vandaag mee moet of beter morgen kan.

### A5 — Sales-Prospecting Agent (groei-play)
Voor de Ierland- en Scandinavië-salesteams: identificeert continu verladers in NL / DE / IT / ES met goederenstroom richting A2's specialiteitstrajecten (via webdata, registratiedata, freight-indices), stelt een gepersonaliseerd outreach-bericht op in de taal van de prospect, draagt warme leads over.

### A6 — Claims & Exception Agent
Detecteert vertragings- of schadesignalen uit chauffeurs- en klant-communicatie, stelt vooraf de CMR-claim op, verzamelt POD + foto's, routeert naar ops.

### A7 — Finance / AR-Agent
Matcht POD → factuur → betaling, signaleert verschillen, herinnert openstaande klanten in hun eigen taal en passende toon (formeel DE, direct NL, etc.).

---

## 5. De aanbevolen pilot

**Project:** Meertalige AI Offerte-Assistent (QW1)
**Looptijd:** 4–6 weken
**Scope:** Inkomende offertes voor Ierland + Scandinavië — de twee speerpunttrajecten.
**Oplevering:**
- Inbox-geïntegreerde agent met planner-in-the-loop UI
- Extraheert ladingvelden, stelt offerte op in taal van klant, vult vooraf in tegen tarievenmatrix
- Dashboard: reactietijd, volume, hit rate
**Succescriteria:**
- Mediane reactietijd ≤ 2 min (vs. de 30-min SLA)
- ≥ 60% van inkomende offerteaanvragen volledig opgesteld door de agent
- 100% dekking buiten kantooruren zonder extra FTE

Dit is de "makkelijke ja": de KPI die ze zelf op hun homepage adverteren, met een orde van grootte verbetering, terwijl mensen elke offerte blijven goedkeuren. Na 6 weken bewijs is het gesprek over A2 (autonoom offreren) een stuk eenvoudiger te voeren.

---

## 6. Discovery-vragen — meenemen naar het gesprek

Krijg deze beantwoord vóórdat je iets serieus scope.

**Stack & data**
1. Welk TMS / planningssysteem gebruiken jullie? (cruciaal — integratie bepaalt de uitrolsnelheid, blijkt uit de branche-data)
2. Waar staan de tarieven van vervoerders vandaag? (TMS, Excel, planner-hoofd?)
3. Klantportaal — staat dat op de roadmap, of blijven jullie liever e-mail-first?
4. Sturen vervoerders status via EDI, e-mail, portaal of telefoon?

**Volume & geld**
5. Aantal offerteaanvragen per dag over beide desks? Conversie offerte → boeking?
6. Welk percentage van inkomende mail is repetitief (status / POD / ETA) vs. omzetgenererend?
7. Buiten-kantooruren-volume — wat kost 24/7-bezetting vs. de gemiste-offerte-kost?
8. Gemiddelde brutomarge op een groupage-zending vs. een FTL — waar wordt het geld écht verdiend?

**Strategie & mensen**
9. Waar verliezen jullie deals — op prijs, snelheid, capaciteit of taal?
10. FTE-verdeling: planning / sales / klantenservice / boekhouding?
11. Groeiplan — meer trajecten, meer volume op bestaande trajecten, of allebei?
12. Eerdere AI-projecten geprobeerd? Wat werkte / wat niet?

---

## 7. Pitch-framing voor het gesprek

Drie zinnen om het gesprek mee te ankeren:

> **"Jullie beloven al een offerte binnen 30 minuten en persoonlijk contact in 5 talen. AI vervangt geen van beide — het zorgt dat jullie beide kunnen vasthouden bij 10× het volume, 24/7, zonder bij te hoeven nemen."**

> **"Asset-light expediteurs verdienen op offerte-snelheid, vervoerder-inkoopintelligentie en ops-productiviteit. Met één pilot van 4–6 weken bewegen we alle drie."**

> **"Begin bij offreren, want het is vanaf dag één meetbaar. Daarna stapelen we vervoerder-matching, track-and-trace en finance erbovenop — toewerkend naar een autonome Ierland-desk en autonome Scandinavië-desk die het menselijke team superviseert in plaats van zelf draait."**

---

## 8. Branchecijfers om te citeren

Uit het 2026 3PL-/freight-brokerage-AI-onderzoek (bronnen onderaan):

- **Exception handling / offerte-respons** levert de snelste ROI: **30–60 dagen terugverdientijd**.
- Mid-market 3PL's die AI uitrollen over de vijf kernworkflows (orderorkestratie, vervoerderallocatie, exception handling, klantportaalautomatisering, WMS↔TMS-sync) zien **60–120 dagen terugverdientijd**, **$700K–$2.4M jaarlijkse besparing**.
- Concrete broker-case: offerte-respons ging van 60–65% beantwoord (binnen tot 20 min) → **100% beantwoord in 32 sec**.
- Kritieke succesfactor in alle implementaties is een **schone integratie tussen TMS en omliggende systemen**, niet het AI-model zelf.

**Bronnen**
- [AI for 3PLs: The Complete 2026 Operator's Playbook — Debales AI](https://debales.ai/blog/ai-for-3pls-the-complete-2026-operator-s-playbook)
- [Best AI Tools for Freight Brokers in 2026 — Lunapath](https://www.lunapath.ai/post/best-ai-tools-freight-brokers-2026)
- [Transportation Trends 2026: The 3PL Broker Advantage — WSI](https://www.wsinc.com/blog/transportation-trends-2026-part-three)
- [Inside the next era of motor freight — Supply Chain Management Review](https://www.scmr.com/article/inside-the-next-era-of-motor-freight-how-ai-and-automation-are-redefining-performance)
- [3PL Services Accelerate Automation and Agentic AI — Daily Oil Futures](https://www.dailyoilfutures.com/archives/12626)
