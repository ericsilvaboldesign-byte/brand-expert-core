# Civarro Website Evidence Input — AMD/HPE Agentic AI POC Deck

Status: **STAKEHOLDER-PROVIDED REFERENCE — INTERNAL PARTNER MATERIAL**

This is NOT a Civarro corporate deck and NOT approved website copy. It is
evidence of how Civarro is being positioned inside a larger partner
architecture, recorded here to inform Civarro website design and wording.
The deck contains a commercial ask to a named partner; treat the document
and the stored source file as internal, not for public distribution.

Date received: 2026-09-07 (stakeholder upload)
Source file: [`evidence/amd-hpe-agentic-ai-poc.pptx`](evidence/amd-hpe-agentic-ai-poc.pptx)
(sha256 `f895315ae6823a4ebc32fef66e8febc5eda880cbce0dc9b7d48513b20bd09167`)

## Access level

**FULL PRIMARY.** The complete deck file was read in this project: all nine
slides text-extracted; package media inspected directly. Embedded media are
AMD template branding only (white AMD wordmark, AMD arrow mark on dark
ground, one blank image) — the deck contains **no content diagrams**, so the
verbatim text below is its complete substantive content. Slide 5 is a
title-only "Demo" divider; slide 7 contains no shapes.

## Provenance

- Title/topic: AMD and HPE Agentic AI (POC pitch), 9 slides, AMD-templated.
- Presenter attribution (slide 2): Clinton France, Director, Software System
  Design, DC Ecosys & Appl Eng — an AMD role as stated on the slide, not
  independently verified.
- Slide 1 quotes diginomica commentary on Lisa Su's AMD Advancing AI 2026
  keynote (July 23, 2026).
- Purpose/audience: a partner pitch asking HP to commit Market Development
  Funds to co-market the POC (slide 6). **This is advocacy material with a
  commercial motive; wording is persuasion, not neutral description.**

## Full text record (verbatim extraction, per slide)

Spelling and punctuation preserved, including apparent inconsistencies
("Ciarro Analyzer", "DC Ecosys &Appl Eng").

**Slide 1** — "The harsh reality of tokenomics isn't just something that the
unwary end user organization is having to get their fiscal heads around,
it's also an issue that AI vendors are having to deal with as well."
(diginomica.com/tokenomics-amd-worldview-models-get-better-ai-compute-gets-more-complicated —
commentary on Lisa Su's AMD Advancing AI 2026 keynote on July 23, 2026.)

**Slide 2** — ANCHORING AGENTIC AI on EDGE COMPUTE. Clinton France,
Director, Software System Design, DC Ecosys &Appl Eng.

**Slide 3 — Why this POC, Why Now?**
- "It's the one scenario that exercises the full cross-partner attestation
  chain end-to-end — handset (Samsung) → edge (AMD secure compute) →
  hospital server (HPE/Red Hat) — with no unattested hop in the path. That's
  the Attestable, Auditable claim"
- "It's dramatic and legible to a non-technical audience. 'An ambulance crew
  needs a patient's records verified and released in real time, across five
  companies' infrastructure, without a human in the loop deciding whether to
  trust each handoff'"

**Slide 4 — Fundamentals of this POC: Security becomes revenue, not just
Risk Reduction**
- "Hybrid Authority Agentic AI with tamper evident auditability (Civarro,
  Chronovault) – Covering consumer-to-agent, agent-to-provider, and
  provider-to-agent exchanges, built on patent-pending technology from
  Chronovault, Community Access Security Model (CASM) as embedded as the
  'chain user', roots authority in the individual."
- "Agentic AI Anchor for global dynamic placement (AMD, Civarro) –
  Initiation that resolves which sovereignty governs before the agent acts:
  the individual's own direction (self-sovereign), the law of where they are
  (governed sovereignty), or the role they're acting in (corporate
  sovereignty) — then applies the Security, Policy, and Control that follow
  from it."
- "Settlement and revenue attribution (Civarro) — Fabric records which
  operator's compute served which unit of work, at what volume and under
  what conditions, producing an attestable multi-party agreement and
  settlement record."
- "Secure Compute Attestation Chain (AMD, Red Hat, HPE, Civarro) – Ecosystem
  wide transparent visibility into end to end execution pathways for
  validation in an Agentic AI ephemeral world"

**Slide 5** — Demo (title only).

**Slide 6 — Ask of HP** — "We are asking HP to commit Market Development
Funds to Co-Market this POC at the Open Source Summit in Prague this
October, and at MWC in Barcelona in March 2027. HPE will be providing the
base of the trust chain on HP Edge hardware"

**Slide 7** — (empty).

**Slide 8** — Appendix (title only).

**Slide 9 — 7 Layers of this POC**
1. "Users: End User + EMT, each device bound to identity of user"
2. "Client Application: Samsung Phone (Panic, Break Glass) + AV Glasses"
3. "Communications: 6G, Samsung 6G Fabric, hosted on operator owned HPE Edge
   Servers"
4. "Edge Mesh: Civarro Consensus Fabric across operator + Edge"
5. "System Software: Red Hat RHEL/KVM/OpenShift + Civarro Dispatcher and
   Orchestration"
6. "Trusted Silicon: AMD SEV-SNP root, Hybrid Authority, Attestation"
7. "CASM / Ledger: Chronovault Tamper-Evident records, Ciarro Analyzer for
   audit"

## Civarro's role as positioned in the deck

Lens A only (primary case account per `phase-2/EVIDENCE-ROUTER.md` §3): this
is what the deck *says* Civarro's role is. Nothing here is verified product
capability.

| Theme | Deck evidence | Slide |
|---|---|---|
| **Consensus Fabric** | Named as the Edge Mesh layer: "Civarro Consensus Fabric across operator + Edge" | 9 |
| **Dispatcher and Orchestration** | System-software layer alongside Red Hat RHEL/KVM/OpenShift | 9 |
| **Global dynamic placement** | "Agentic AI Anchor for global dynamic placement (AMD, Civarro)" | 4 |
| **Policy / sovereignty-aware execution** | Resolves which sovereignty governs before the agent acts: self-sovereign, governed sovereignty, corporate sovereignty — then applies Security, Policy, Control | 4 |
| **Attestation and auditable execution** | Co-attributed on "Hybrid Authority Agentic AI with tamper evident auditability" (with Chronovault) and on the "Secure Compute Attestation Chain" (with AMD, Red Hat, HPE); the POC's headline claim is an unbroken cross-partner attestation chain | 3, 4 |
| **Settlement and revenue attribution** | Sole-attributed: the Fabric "records which operator's compute served which unit of work… producing an attestable multi-party agreement and settlement record" | 4 |
| **Audit tooling** | "Ciarro Analyzer for audit" at the CASM/Ledger layer (spelling as in deck — presumed "Civarro", unconfirmed) | 9 |

Structural observations for positioning work:

- Civarro is the **only party named at four of the seven layers' worth of
  functions** (fabric, orchestration, placement/sovereignty, settlement) —
  the deck positions it as the connective/coordination tissue of the
  architecture, while AMD holds silicon trust, Red Hat holds the OS,
  HPE holds hardware, Samsung holds devices, Chronovault holds the ledger.
- Settlement/revenue attribution is the one capability attributed to Civarro
  **alone** — in a deck whose stated frame is "Security becomes revenue, not
  just Risk Reduction." That frame is where a silicon vendor sees Civarro's
  commercial meaning.
- The deck's legibility device (slide 3) is a concrete actor-scenario, not a
  feature list: five companies' infrastructure, real time, no human deciding
  trust per hop. That is a *communication pattern* worth learning from, even
  though the scenario itself is unusable as public copy (below).

## What this evidence may inform on the website

Conceptual / product-role language — usable as **strategy input**, not as
copy to lift:

- Positioning territory: Civarro as the coordination and trust layer that
  lets agentic work execute across organizational boundaries — placement,
  policy/sovereignty resolution, attestation visibility, and settlement.
- Vocabulary candidates observed in third-party use: "Consensus Fabric",
  "Dispatcher", "global dynamic placement", "sovereignty-aware",
  "attestable", "settlement and revenue attribution". That a silicon
  partner's own deck uses these terms is evidence the vocabulary is legible
  outside Civarro — subject to confirming which names are actually
  Civarro's own (see verification items).
- Message hypothesis: the "security becomes revenue" reframe, and the
  three-sovereignty model (self-sovereign / governed / corporate) as an
  explainable structure for policy-aware execution.
- Audience insight: the deck sells Civarro's function to a non-technical
  audience through a cross-organization trust scenario — supports a
  scenario-led rather than feature-led narrative approach.

## What may NOT appear in public copy without verification

Per the stakeholder brief and `phase-2/EVIDENCE-ROUTER.md` §9 (first-party
claims) — none of the following may be inferred, implied, or converted:

- **Partner or customer relationships.** AMD, HPE/HP, Red Hat, Samsung, and
  Chronovault appear as participants in a *proposed POC pitch*. Naming any
  of them on the website as partner, customer, or deployment is prohibited
  without direct verification and permission.
- **The POC itself.** It is a proposal (the deck is the ask for co-marketing
  funds). No deployment, pilot, or "in production with" claim exists here.
  The ambulance/EMT break-glass scenario is not a case study.
- **Events.** Open Source Summit Prague (October 2026) and MWC Barcelona
  (March 2027) are the *requested* co-marketing venues, not commitments.
- **"Patent-pending."** Attributed in the deck to Chronovault's technology,
  not Civarro's. Never transfer it.
- **Future/roadmap capability as current.** 6G, Samsung 6G Fabric, AV
  glasses, the end-to-end SEV-SNP attestation chain — all POC-proposed. Do
  not infer current production capability from a proposed POC.
- **Third-party endorsement.** The diginomica quote and Lisa Su keynote
  reference contextualize AMD's market view; neither mentions Civarro.

## Open verification items before any public use

1. Which product names are Civarro's own registered/used names (Consensus
   Fabric, Dispatcher, Analyzer) versus deck-coined descriptions.
2. Canonical spellings: "Ciarro Analyzer" (slide 9) vs "Civarro";
   "Chronovault" casing; "CASM" expansion ("Community Access Security
   Model") as Chronovault's term vs shared.
3. Whether the POC and any partner participation are announceable at all,
   and under whose approval.
4. Civarro's own approved articulation of the three sovereignty modes.
5. Whether "settlement and revenue attribution" is a shipped capability, a
   POC scope, or a roadmap claim.

## Routing note

Under the corpus grading this source is **C-grade advocacy from a partner
practitioner** with FULL PRIMARY access: reliable evidence of *how Civarro
is being positioned and described by a major partner*, unreliable as
evidence of capability, relationships, or effectiveness. Use it for
positioning vocabulary and narrative strategy; route every factual claim
through the verification items above before it reaches public copy.
