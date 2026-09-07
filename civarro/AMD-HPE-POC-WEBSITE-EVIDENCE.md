# Civarro Website Evidence Input — AMD/HPE Agentic AI POC Deck

Status: **STAKEHOLDER-PROVIDED REFERENCE — INTERNAL PARTNER MATERIAL**

This is NOT a Civarro corporate deck and NOT approved website copy. It is
evidence of how Civarro is represented inside a larger multi-company POC
architecture in this AMD-authored proposal, recorded to inform Civarro
website design and wording. The deck is evidence that AMD's presentation
assigns Civarro these roles; it is NOT, by itself, evidence of a formal
partnership between Civarro and any named company. The
deck contains a commercial ask to a named company; treat this document and
the stored source file as internal, not for public distribution.

No website changes have been made from this input. This document is the
evidence/knowledge layer only.

Every finding below sits in exactly one of four bands, per the corpus rule
that a source account, our inference, a design consequence, and an
unverified claim must never blur (`phase-2/EVIDENCE-ROUTER.md` §3):

- **EVIDENCE** — what the deck itself says, verbatim-anchored.
- **INTERPRETATION** — our analyst inference from that evidence.
- **WEBSITE IMPLICATION** — what the interpretation suggests for the
  Civarro website, still subject to verification.
- **VERIFICATION REQUIRED** — claims that may not reach public use without
  explicit confirmation.

---

## EVIDENCE

### Provenance

- Deck: AMD-authored, AMD-templated POC pitch, "Anchoring Agentic AI on Edge Compute"
  (AMD and HPE Agentic AI POC), 9 slides. Received 2026-09-07 as a
  stakeholder upload.
- Source file: [`evidence/amd-hpe-agentic-ai-poc.pptx`](evidence/amd-hpe-agentic-ai-poc.pptx)
  (sha256 `f895315ae6823a4ebc32fef66e8febc5eda880cbce0dc9b7d48513b20bd09167`).
- Access level: **FULL PRIMARY.** All nine slides text-extracted; package
  media inspected directly. Embedded media are AMD template branding only
  (white AMD wordmark, AMD arrow mark on dark ground, one blank image) — no
  content diagrams, so the verbatim text below is the deck's complete
  substantive content. Slide 5 is a title-only "Demo" divider; slide 7 is
  empty; slide 8 is an "Appendix" divider.
- Presenter attribution (slide 2): Clinton France, Director, Software System
  Design, DC Ecosys & Appl Eng — an AMD role as stated on the slide, not
  independently verified.
- Slide 1 quotes diginomica commentary on Lisa Su's AMD Advancing AI 2026
  keynote (July 23, 2026). Neither mentions Civarro.
- Purpose/audience (slide 6): asks HP to commit Market Development Funds to
  co-market the POC. The deck is advocacy with a commercial motive.

### Full text record (verbatim, per slide)

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

### What the deck explicitly says Civarro does

Extraction only — each row is the deck's claim, not verified capability:

| Function attributed to Civarro | Attribution | Slide |
|---|---|---|
| Consensus Fabric — the Edge Mesh layer "across operator + Edge" | Civarro alone | 9 |
| Dispatcher and Orchestration — at the system-software layer, alongside Red Hat RHEL/KVM/OpenShift | Civarro alone (Red Hat holds the adjacent OS role) | 9 |
| "Agentic AI Anchor for global dynamic placement" — resolves which sovereignty governs before the agent acts (self-sovereign / governed / corporate), then applies the Security, Policy, and Control that follow | AMD + Civarro | 4 |
| "Hybrid Authority Agentic AI with tamper evident auditability" across consumer-to-agent, agent-to-provider, provider-to-agent exchanges | Civarro + Chronovault (the patent-pending technology and CASM are Chronovault's) | 4 |
| Settlement and revenue attribution — "Fabric records which operator's compute served which unit of work, at what volume and under what conditions, producing an attestable multi-party agreement and settlement record" | **Civarro alone — the only sole attribution in the deck** | 4 |
| Participant in the "Secure Compute Attestation Chain" | AMD + Red Hat + HPE + Civarro | 4 |
| "Ciarro Analyzer for audit" at the CASM/Ledger layer | spelling as in deck; presumed Civarro, unconfirmed | 9 |

### Terminology appearing in the deck (raw list)

Civarro-attributed or Civarro-adjacent terms, as written: *Consensus
Fabric; Dispatcher and Orchestration; Agentic AI Anchor; global dynamic
placement; self-sovereign / governed sovereignty / corporate sovereignty;
Hybrid Authority; tamper evident auditability; attestable; Secure Compute
Attestation Chain; settlement and revenue attribution; Analyzer; "Security
becomes revenue, not just Risk Reduction"; "no unattested hop in the path";
"Attestable, Auditable"; "chain user"; break glass.*

---

## INTERPRETATION

Analyst inference (Lens D). Nothing here upgrades the evidence above.

1. **Civarro is positioned as the connective tissue, not a box in the
   stack.** Every other named party owns one bounded layer (Samsung
   devices, AMD silicon, Red Hat OS, HPE hardware, Chronovault ledger);
   Civarro appears at four functions spanning layers — fabric,
   orchestration, placement/sovereignty, settlement. A silicon vendor's own
   architecture drawing treats Civarro as what makes the layers work
   *together*.
2. **The commercial meaning this AMD-authored proposal assigns to Civarro is settlement.** The
   deck's frame is "Security becomes revenue, not just Risk Reduction," and
   settlement/revenue attribution is the one capability attributed to
   Civarro alone. In AMD's telling, Civarro is where the trust architecture
   turns into money flows between operators.
3. **The vocabulary already survives third-party use.** "Consensus Fabric,"
   "Dispatcher," "global dynamic placement," "sovereignty," "attestable"
   are used in this AMD-authored proposal without gloss — evidence the terms are legible
   outside Civarro. (Legible ≠ owned: see VERIFICATION REQUIRED.)
4. **The deck's persuasion device is a scenario, not a feature list.** Its
   own justification for the POC (slide 3) is that a concrete
   life-or-death handoff story is "dramatic and legible to a non-technical
   audience." That is a communication finding about *how this category is
   best explained*, independent of the scenario's own usability.
5. **The three-sovereignty model is an explainable structure.** Self /
   place / role is a complete, teachable triad — rare in
   security-infrastructure language, which usually stays abstract.
6. **The deck aesthetic is AMD's, not Civarro's.** All visual material in
   the file is AMD template branding. The deck carries zero evidence about
   Civarro's visual identity, and its dark-silicon aesthetic must not be
   mistaken for a Civarro art direction input.

---

## WEBSITE IMPLICATION

Design/wording consequences of the interpretation — strategy input, not
approved copy, all contingent on the verification items below.

### Positioning

- Candidate territory: **the coordination and trust layer that lets agentic
  work execute across organizational boundaries** — placement, sovereignty
  resolution, attestation visibility, settlement. The website should
  express a role *between and across* other parties' infrastructure, not a
  product slotted into someone's stack.
- The "security becomes revenue" reframe is a message hypothesis worth
  testing for the website: Civarro not as risk reduction but as the thing
  that makes multi-party agentic work billable and attributable.
- Ecosystem framing: the deck shows Civarro's story is strongest
  when told inside a heterogeneous ecosystem. A website narrative that
  assumes a single-vendor world would throw away the evidence's central
  structure. (Ecosystem framing must still be expressed generically —
  named companies are blocked pending verification.)

### Terminology worth considering

- Strong candidates (already legible in a third-party, AMD-authored source): **Consensus Fabric**,
  **Dispatcher**, **global dynamic placement**, **sovereignty-aware
  execution**, **attestable / auditable execution**, **settlement and
  revenue attribution**.
- The triad **self-sovereign / governed / corporate sovereignty** is a
  candidate explanatory device for a "how it works" page.
- "Hybrid Authority" and "CASM"/"chain user" should be treated cautiously:
  in the deck they attach to Chronovault's technology, so adopting them as
  Civarro website vocabulary risks claiming another company's terms.

### Visual storytelling

- **Chain/path continuity is the natural motif.** The deck's core claim is
  a path with "no unattested hop" — handset → edge → server. That suggests
  visual language of an unbroken path across heterogeneous nodes, where
  the viewer can see that every link is verified. Breaking/unbroken
  states are inherently animatable (a motion-signature candidate, per the
  corpus's motion-as-brand-behavior findings in `MOTION-DIGITAL.md`).
- **Fabric/mesh spanning others' territory, not a layer cake.** If Civarro
  is drawn as one stripe in a stack diagram, the positioning evidence is
  lost; the architecture evidence supports drawing Civarro as the mesh or
  weave that runs across boxes owned by others.
- **Scenario-led storytelling over feature grids.** The deck's own
  legibility argument supports a website narrative built on concrete
  cross-organization moments (a handoff resolved in real time across
  multiple companies' infrastructure) rather than capability lists — with
  the specific ambulance/EMT scenario itself unusable (see below), the
  *pattern* transfers, the *story* does not.
- **A triadic device for sovereignty.** The three-mode model invites a
  simple three-state diagram or interactive toggle (self / place / role)
  as an explanatory visual.
- **Settlement invites ledger/metering visual language** — units of work,
  attribution, records — distinct from the padlock-and-shield clichés of
  security marketing, and consistent with the "revenue, not risk" frame.
- **Anti-implication:** nothing in the deck's own look (AMD dark-silicon
  template) is evidence for Civarro's palette, type, or art direction. Do
  not let the AMD deck's aesthetic leak into the identity.

---

## VERIFICATION REQUIRED

None of the following may appear in, or be implied by, public website
content without explicit confirmation. Participation in a *proposed POC
pitch* converts into no public claim of any kind.

1. **Partner or customer relationships.** AMD, HPE/HP, Red Hat, Samsung,
   Chronovault appear only as proposed POC participants. Naming any of
   them as partner, customer, or deployment requires direct verification
   and permission.
2. **The POC itself.** It is a proposal — the deck *asks* for co-marketing
   funds. No deployment, pilot, or "in production" claim exists. The
   ambulance/EMT break-glass scenario is not a case study and may not be
   presented as one.
3. **Events.** Open Source Summit Prague (October 2026) and MWC Barcelona
   (March 2027) are requested venues, not commitments.
4. **"Patent-pending."** Attributed to Chronovault's technology, not
   Civarro's. Never transfer it.
5. **Current capability.** 6G, Samsung 6G Fabric, AV glasses, the
   end-to-end SEV-SNP attestation chain, and any impression that the POC
   architecture is shipping — all proposed/future. Do not infer current
   production capability from a proposed POC.
6. **Whether "settlement and revenue attribution" is shipped capability,
   POC scope, or roadmap** — the sole-attributed claim is also the one most
   in need of grounding before it anchors positioning.
7. **Name ownership.** Which of Consensus Fabric / Dispatcher / Analyzer /
   Agentic AI Anchor are Civarro's own product names versus deck-coined
   descriptions; whether "Hybrid Authority" is Civarro's term or
   Chronovault's.
8. **Spellings and terms.** "Ciarro Analyzer" (slide 9) vs "Civarro";
   Chronovault casing; CASM expansion ("Community Access Security Model")
   ownership.
9. **Civarro's approved articulation of the sovereignty modes** before the
   triad is used as public explanatory copy.
10. **Third-party references.** The diginomica quote and Lisa Su keynote
    contextualize AMD's market view and never mention Civarro; they may not
    be used to imply endorsement.

---

## Routing note

Under the corpus grading this source is **C-grade advocacy from an
AMD-authored stakeholder/POC source** with FULL PRIMARY access: reliable
evidence of *how Civarro is represented in this AMD-authored POC proposal*
(third-party ecosystem positioning), unreliable as
evidence of capability, relationships, or effectiveness. Use the
INTERPRETATION and WEBSITE IMPLICATION bands as strategy input only; every
factual claim routes through VERIFICATION REQUIRED before it reaches
public copy.
