# Civarro Landing Page — Content + Scroll Architecture v2 (Merged)

Status: **MERGED WORKING DRAFT — INTERNAL, NOT APPROVED COPY**

This document merges the two v1 efforts into one page definition:

- **Internal v1** — [`LANDING-PAGE-ARCHITECTURE.md`](LANDING-PAGE-ARCHITECTURE.md)
  + [`LANDING-PAGE-CONTENT.md`](LANDING-PAGE-CONTENT.md): strategy-traced
  narrative, per-block verification tags, task-loop centerpiece.
- **Stakeholder v1** — [`evidence/civarro-landing-page-content-architecture-v1.docx`](evidence/civarro-landing-page-content-architecture-v1.docx):
  nine-beat marketing path, CTA-by-intent system, motion grammar.

For narrative and copy, **this v2 supersedes both v1 documents.** The
technical architecture (Astro stack, copy-as-data, verification build gate,
repo structure) in `LANDING-PAGE-ARCHITECTURE.md` §5 remains current.

Grounding: brand strategy definitions PDF; the evidence constraints in
`AMD-HPE-POC-WEBSITE-EVIDENCE.md` and `TOKENOMICS-CONTEXT-EVIDENCE.md`;
stakeholder direction (Sal, 2026-09-14): agentic AI at the center —
security, user-centric authority, information gathered then released, AI
in the physical world, strongly visual.

**Verification tags** on every copy block: `CLEARED-BY-STRATEGY` (from or
directly derived from the approved strategy; still subject to final copy
approval) · `PENDING (Vn)` (blocked until the named gate in §6 resolves) ·
`SAFE-CONTEXT` (publicly documentable market context, no Civarro claim).

---

## 1 · Merge decisions

**Adopted from the stakeholder draft:**

1. The homepage works as **digital marketing first** — clarity, relevance,
   differentiation, credibility, action — not as a web version of the
   brand deck; no deck construct labels appear as section titles.
2. The **nine-beat marketing path** and the premise of **one continuous
   information organism**: independent elements come together under
   conditions, perform work, leave proof, and separate again.
3. The **CTA-by-intent system** (§5 below) replacing a single generic CTA.
4. The **motion grammar**: productivity as visible state change
   (available → eligible → authorized → allocated → executing → metered →
   released); conditions as animated gates; **meaningful node exclusion**
   (not all nodes participate — excluded resources prove that conditions
   and control matter); figurative anchors show consequences, abstraction
   explains mechanism; the robot is never the agent.

**Restored from internal v1:**

5. The **brand tension (strategy §03)** — "the work is temporary; the
   participation models aren't" — as the opening move of the problem beat.
   It is the approved intellectual hook and the safest claim on the page.
6. The **user-centric authority frame** — *whose authority governs the
   task* (the person's own direction, the law of the place, the role being
   performed) — carried by the Authorize gate and seeded in Why Now.
   Gated on V3; never expressed through CASM / "chain user" / "Hybrid
   Authority" (Chronovault's terms, V5).
7. **Place carries three things: an owner, a jurisdiction, and a cost** —
   the physical-world direction with its legal dimension intact.
8. **Per-block verification tags** and the gate system.

**New in v2:**

9. The category-gap claim is **softened for public use**: "the operating
   layer is missing" is an absolute whitespace claim resting on the
   unverified 10-Sept benchmark (gate V7); the shippable wording claims
   the need, not the absence.
10. The hero's frame shift ("**the** operations layer" vs the approved
    "AI compute infrastructure operations company") is surfaced as an
    explicit sign-off decision (gate V8a), with both candidates recorded.
11. **Accessibility and performance rules** for a scroll-driven page (§7,
    rules 8–10).
12. NuCompute.ai / NCX registered as a **NOT ACCESSED** benchmark source
    ([`NUCOMPUTE-BENCHMARK-EVIDENCE.md`](NUCOMPUTE-BENCHMARK-EVIDENCE.md));
    pattern borrowing only, gate V8c.
13. "Request technical overview" creates an **asset dependency** (V8b): the
    overview must exist before launch.

---

## 2 · The page in one line

One continuous simulation, nine beats: **orient → why now → mismatch &
gap → value → mechanism → conditions → audiences → proof → act.** The
recurring transition is join-and-separate: independent → aligned →
coordinated → executed → proven → released. The visual resting state,
everywhere, is independence.

---

## 3 · The nine beats — copy and scroll direction

### Beat 1 — Hero / immediate positioning

*Role: orient the visitor in the first screen, before the scrollytelling
starts.*

**H1 — decision pending (V8a):**

- Candidate A (stakeholder draft, sharper, shifts frame): —
  `PENDING (V8a)`
  > The operations layer for agentic AI compute.
- Candidate B (approved positioning, verbatim, safe default): —
  `CLEARED-BY-STRATEGY (§06)`
  > Civarro makes independently controlled AI compute usable across
  > owners, locations and workloads.

**Subhead** (when A is chosen, B becomes the subhead) —
`CLEARED-BY-STRATEGY (§06)`

**Support line** — `CLEARED-BY-STRATEGY (§05/§07 derivation)`
> Independent infrastructure. Coordinated for the task. Released when the
> work is done.

**CTAs:** Primary **Discuss infrastructure participation** · Secondary
**Request technical overview** `(asset dependency V8b)`

**Visual.** An operational topology, not a decorative globe: regions,
sites, systems, application signals, autonomous work emerging across the
map. Every node visibly its own — different owners, different places.
*Scroll transition:* signals begin to converge, then **pause before fully
connecting** — potential coordination without loss of independence.

---

### Beat 2 — Why now / the agentic shift

*Role: make the market change obvious. Agentic AI is not just more demand
for compute; it changes execution requirements.*

**H2** — `CLEARED-BY-STRATEGY (§01, adapted)`
> Agentic AI changes the job of infrastructure.

**Copy** — `SAFE-CONTEXT` (agent behavior per public trade-press framing)
> Agents don't just request compute. They execute: they reason, retrieve,
> invoke tools, hand work onward — and each step can land on
> infrastructure that belongs to a different party.
>
> Each step raises questions that used to be answered once, in advance:
> where should this run, on whose authority, under whose rules, at whose
> cost — and how will anyone know what happened?

**Condition labels:** Placement · Authority · Policy · Economics · Proof —
`CLEARED-BY-STRATEGY (§06 RTB dimensions)`

**Optional data strip** — `PENDING (V4)`: AMD keynote figures only with
"AMD reports…" attribution, re-verified at publication, never implying
endorsement.

**Visual.** A few application consequences, not one literal metaphor: a
physical operation, a digital workflow, an AI-native run, a
transaction/event. Each becomes a **work packet**. The robot is one
consequence, never the agent. *Scroll transition:* the figurative layer
collapses into abstract work packets — the invisible workload made
legible; packets begin to encounter invisible conditions.

---

### Beat 3 — The mismatch and the gap

*Role: the problem Civarro exists for, in two moments — first the approved
brand tension, then the category gap.*

**Moment A — the mismatch** — `CLEARED-BY-STRATEGY (§03)`
> **The work is temporary. The participation models aren't.**
>
> An agent may need compute for a specific task, under specific rules,
> across infrastructure controlled by different parties. But most ways for
> an owner to participate mean joining another network, marketplace or
> platform — on that platform's terms, for as long as they stay.

**Moment B — the gap** — shippable wording `SAFE-CONTEXT`; absolute
wording `PENDING (V7)`
> Orchestration. Authorization. Attestation. Settlement. Estate
> management. The parts exist — agentic execution needs them to work
> together across independent infrastructure.

*(Reserved, V7: "The parts exist. The operating layer is missing." — an
absolute whitespace claim resting on the unverified 10-Sept benchmark. Do
not ship until the benchmark survives primary-source verification.)*

**Visual.** Moment A: a task that flares and ends against a lattice that,
once joined, never lets go. Moment B: the work packet meets separated
layers that each work alone but fail to align across the execution path —
misalignment, not a static diagram. *Scroll transition:* the misaligned
layers bend toward a seam; the seam becomes an **active membrane**, never
a box labeled "Civarro."

---

### Beat 4 — Value / product outcome

*Role: state the value plainly once the problem is understood.*

**H2** — `CLEARED-BY-STRATEGY (§07 derivation)`
> Distributed compute, made productive.

**Copy** — `CLEARED-BY-STRATEGY (§07 proposition, verbatim)`
> Civarro turns independently controlled, distributed compute into
> productive capacity for AI workloads.

**Physical line** — `CLEARED-BY-STRATEGY (§04)` + `SAFE-CONTEXT`
> These estates are physical: data centers, clusters, edge sites, towers,
> enterprise racks. Each place carries an owner, a jurisdiction and a
> cost — and participation answers to all three.

**CTA:** Explore how coordination works → Beat 5.

**Visual.** Compute estates become visible, each with boundary, owner
logic and state. Productivity appears as **state change** — available →
eligible → authorized → allocated → executing → metered → released — never
as growth arrows. **Some nodes stay out**: selection is meaningful,
exclusion makes governance visible and prevents any impression of total
absorption. *(The "metered" state as public vocabulary rides gate V2.)*

---

### Beat 5 — How it works / Consensus Fabric

*Role: the memorable mechanism and the distinctive behavior.*

**H2** — `CLEARED-BY-STRATEGY (§05 derivation)`
> Independent. Coordinated. Released.

**Copy** — `CLEARED-BY-STRATEGY (§05, verbatim)` · name `PENDING (V1)`
> Consensus Fabric coordinates independent infrastructure for agentic
> execution. Resources work together for the task, then return to
> independent operation.
>
> The coordination is the capability. The return to independence is the
> distinctive behavior.

**CTA:** Request technical overview `(V8b)`

**Visual.** The main animation moment. Selected resources form a temporary
structure — organic, mathematical, information-dense; closer to swarm
behavior and field logic than to a network diagram. *Scroll transition:*
converge → align → bind → pulse execution → write trace → release. **The
release must be as visible as the coordination.** *(Trace/attestation
wording as present capability rides gates V2/V5; if unclear, express as
design intent with sign-off.)*

---

### Beat 6 — Conditions before execution

*Role: technical comprehension without overloading the page; the
security and user-centric themes live here as behavior.*

**H2** — `SAFE-CONTEXT`
> Before execution, conditions have to align.

**Modules:** Place · Authorize · Govern · Account · Prove · Release

Gate-by-gate copy (one line each, learning happens through motion):

- **Place** — `CLEARED-BY-STRATEGY (§04/§06)`: "Where the work runs —
  chosen for the task, within each owner's bounds. A place is an owner, a
  jurisdiction and a cost."
- **Authorize** — `PENDING (V3)`: "Whose authority governs the task — the
  person's own direction, the law of the place, or the role being
  performed — resolved before the agent acts." *(V3 fallback: "Whose
  authority governs the task, resolved before the agent acts." Never
  CASM / "chain user" / "Hybrid Authority" — Chronovault's terms, V5.)*
- **Govern** — `CLEARED-BY-STRATEGY (§06)`: "The policy that follows:
  what this task may touch, and on what terms."
- **Account** — `PENDING (V2)`: "Which infrastructure serves which unit
  of work, at what volume, under what conditions."
- **Prove** — `PENDING (V2/V5)`: "A verifiable record of what ran, where,
  under whose authority."
- **Release** — `CLEARED-BY-STRATEGY (§05/§08/§11)`: "When the task ends,
  everything returns. Access granted for the task closes with the task.
  Nothing keeps participating by default."

**Visual.** A selected task moves through six animated gates/fields;
invalid paths dim, valid paths continue. Each condition briefly becomes
the active visual grammar: spatial field (Place), signature gate
(Authorize), boundary/rule field (Govern), ledger pulse (Account), trace
(Prove), dissolution (Release). The Release gate carries the
gathered-then-released theme: access closing shown with the same weight
as access opening.

---

### Beat 7 — Audience paths

*Role: relevance for both sides without splitting the page.*

**H2** — `CLEARED-BY-STRATEGY (§04)`
> Built for both sides of agentic execution.

**Owner line** — `CLEARED-BY-STRATEGY (§07/§08 derivation)`
> More from your compute. Control still yours.

**Workload line** — `CLEARED-BY-STRATEGY (§04/§06)`
> Compute under the right conditions — placement, policy, authority and
> economics resolved before execution.

**CTAs:** Owner — **Discuss infrastructure participation** · Workload —
**Discuss agentic workload requirements**

**Visual.** Same system, two lenses: the owner lens highlights estate
boundary, participation terms and metering; the workload lens highlights
placement, policy, authority and execution path. A lens/split view shifts
emphasis without changing the underlying system — Civarro sits between
capacity and execution.

---

### Beat 8 — Proof / maturity

*Role: build trust and protect against overclaiming.*

**H2** — `CLEARED-BY-STRATEGY (§06 RTBs)` · status wording `PENDING (V2)`
> Built on operations. Extending into coordination.

**Copy** — `CLEARED-BY-STRATEGY (§06)`
> **Foundation:** estate operations today — the unglamorous discipline the
> rest depends on.
> **Capability:** Consensus Fabric, building. We'd rather show it running
> than describe it; when a piece works, we'll show that piece.
>
> No customer logos here yet, and no numbers we can't stand behind. When
> they're real, they'll be here.

**CTA:** Request technical overview `(V8b)`

**Visual.** The simulation calms into a blueprint/data reading: two
planes — foundation operations and coordination capability. Evidence-led,
not finished-everything. Per PROOF IS A READING, traces and readings must
look like verifiable schematics of *what gets recorded*, never like
measurements of real data. No metrics, deployment scale, latency,
throughput, ROI, partner or stack claims (V5).

---

### Beat 9 — Closing CTA

*Role: end with a clean action and repeat the signature behavior.*

**H2** — `CLEARED-BY-STRATEGY (§06/§08 derivation)`
> Make independent compute work for agentic AI.

**Line** — `CLEARED-BY-STRATEGY (§05/§07 derivation)`
> Coordinated for the task. Released when the work is done.

**CTAs:** Primary **Contact Civarro** · Secondary **Request technical
overview**

**Visual.** Return to the hero's world. One final task appears,
coordinates, executes, leaves proof and releases — the
convergence-release loop as the Civarro signature. The world remains
independent, now legible as productive capacity. Inevitable, not
ornamental.

---

## 4 · Footer

Company legal name, contact, privacy, © year. No partner logos, event
badges or certifications (V5). Optional reprise —
`CLEARED-BY-STRATEGY (§07)`: **Productive compute, without surrendering
control.**

---

## 5 · CTA system (by intent, not "Learn more")

| CTA | Primary use | Audience | Caution |
|---|---|---|---|
| Discuss infrastructure participation | Hero primary / owner path | Infrastructure owners & operators | Don't imply instant onboarding unless ready. |
| Request technical overview | Hero secondary / Beats 5, 8, 9 | Technical evaluators, partners | Asset must exist before launch (V8b). |
| Discuss agentic workload requirements | Workload path (Beat 7) | Agent & workload operators | Use if demand-side leads are wanted now. |
| Explore strategic partnerships | Footer / secondary route | Ecosystem partners, telcos | No white-label/platform promises unless approved. |
| Contact Civarro | Final CTA | All visitors | Simple fallback. |

Contact form fields: name, organization, and which side of the loop —
*I own infrastructure / I run agents & workloads / both.* No newsletter,
no gated PDF.

---

## 6 · Verification gates

Inherited (defined in `LANDING-PAGE-ARCHITECTURE.md` §6): **V1** Consensus
Fabric name ownership · **V2** settlement/metering/trace status (shipped /
POC / roadmap) · **V3** approved articulation of the sovereignty triad ·
**V4** market figures full-text check + attribution · **V5** absolute
blocks (partner names, POC/pilot/production claims, ambulance scenario,
"patent-pending", event commitments, Chronovault terms) · **V6** status of
the proposed "Make the future concrete" voice principle · **V7**
category-landscape benchmark verification before any competitive claim.

New in v2:

- **V8a — Hero frame sign-off.** "The operations layer for agentic AI
  compute" shifts the frame of reference from *operations company* to *the
  layer*. Explicit stakeholder approval required; Candidate B ships
  otherwise.
- **V8b — Technical overview asset.** The "Request technical overview" CTA
  requires the document to exist and be cleared before launch.
- **V8c — Benchmark evidence.** No further NuCompute/NCX cues beyond the
  CTA-by-intent pattern until the sources are recorded per
  `NUCOMPUTE-BENCHMARK-EVIDENCE.md`.

---

## 7 · Motion and representation rules

1. **One simulation, many readings.** One continuous system across the
   page, never separate illustrations per section.
2. **Figurative anchors consequence; abstraction explains mechanism.**
   Physical/digital/AI-native moments show what agentic work does; fields,
   gates, traces, states, membranes and fabric structures explain
   coordination, policy, authority, economics and proof. The robot is
   never the agent.
3. **Release must be visible.** The return to independent operation is the
   distinctive behavior — always shown, with the same articulacy as the
   gathering (UNITY IS AN EVENT).
4. **Not all nodes participate.** Exclusion is meaningful: it proves that
   conditions and control matter.
5. **Proof is a reading.** Traces and ledgers look like verifiable
   schematics, never decorative charts; nothing decorative may look like
   measurement.
6. **No deck labels.** "Brand Proposition", "Territory",
   "Differentiation" govern the page but never appear on it.
7. **Independence is the resting state.** Every scene's default frame is
   the released, independent world.
8. **Reduced motion is a first-class rendering.** Every scroll scene has a
   designed static frame (the released state) served under
   `prefers-reduced-motion`; all copy and meaning survive without motion —
   learning may be *reinforced* by animation, never *dependent* on it.
9. **Performance budget.** One continuous simulation must degrade
   gracefully on mobile: capped canvas work, no scroll-jacking, anchor
   navigation always functional, text rendered as text (never baked into
   canvas).
10. **Identity-agnostic build.** Visual identity remains parked; all
    scenes are built on placeholder design tokens, swappable when the
    identity lands.

---

## 8 · Build order (updated)

1. Stakeholder sign-off on this merge — especially V8a (hero frame) and
   the Beat 3 two-moment structure.
2. Scaffold `civarro-site/` (per `LANDING-PAGE-ARCHITECTURE.md` §5) with
   the nine beats as content blocks, tags machine-readable, build gate
   blocking non-cleared copy.
3. Grey-box the continuous simulation: static frames first (the ten rules
   above), then scroll transitions, then the Beat 5 centerpiece.
4. Produce the technical overview asset (V8b) in parallel with copy
   clearance (V1–V7).
5. Copy clearance pass → identity drop-in → launch.
