# Civarro Landing Page — Draft Content (v1)

Status: **SUPERSEDED** by
[`LANDING-PAGE-CONTENT-ARCHITECTURE-V2.md`](LANDING-PAGE-CONTENT-ARCHITECTURE-V2.md)
(merge of this draft with the stakeholder content-architecture document).
Kept for lineage.

Section-by-section draft copy and visual specification for the landing
page defined in [`LANDING-PAGE-ARCHITECTURE.md`](LANDING-PAGE-ARCHITECTURE.md).
Written to the strategy document's voice rules (plain with warmth, specific
before adjectives, present tense, estate as subject, operator fluency) and
weighted per the stakeholder direction of 2026-09-14: agentic AI at the
center; the implications of agents — security, user-centric authority,
information gathered and then released; AI in the physical world; strongly
visual treatment.

Every block carries a verification tag:

- `CLEARED-BY-STRATEGY` — wording taken from or directly derived from the
  approved strategy definitions (still subject to final copy approval).
- `PENDING (Vn)` — usable only after the named gate in
  `LANDING-PAGE-ARCHITECTURE.md` §6 resolves.
- `SAFE-CONTEXT` — publicly documented market context, no Civarro claim.

Site language: English. Nothing below may ship while any tag other than
final approval stands.

---

## 0 · Header

- Wordmark: CIVARRO (identity parked — placeholder type).
- Anchor nav: The shift · Physical · The mismatch · How a task runs ·
  Fabric · Who · Proof.
- CTA button: **Talk to us** → `#contact`.

---

## 1 · Hero

**Eyebrow** — `CLEARED-BY-STRATEGY (§06 frame of reference)`
> AI compute infrastructure operations

**Headline** — `CLEARED-BY-STRATEGY (§06 positioning, verbatim)`
> Civarro makes independently controlled AI compute usable across owners,
> locations and workloads.

**Support** — `CLEARED-BY-STRATEGY (§01 + §07 promise)`
> AI agents are beginning to execute work across infrastructure owned and
> operated by different parties. Civarro coordinates the conditions that
> execution needs — placement, authority, policy, economics — while control
> over participation stays with each owner.
>
> **Productive compute, without surrendering control.**

**Visual.** The resting state of the whole page's world: a quiet field of
independent nodes, each clearly its own — different shapes/weights implying
different owners and places. Nothing is connected yet. (Independence is
the default condition; the page will connect and release them later.)
Subtle idle motion only; respects `prefers-reduced-motion`.

---

## 2 · Agents change the job — `#agents`

**Headline** — `CLEARED-BY-STRATEGY (§01, verbatim)`
> Agentic AI changes what infrastructure has to do.

**Body** — `SAFE-CONTEXT` (agent-behavior description per trade-press
coverage; no Civarro claim)
> An AI agent doesn't make one model call. It runs a sequence: it reasons,
> retrieves, invokes tools, hands work onward — and each step can land on
> compute that belongs to a different party.
>
> That changes the questions infrastructure has to answer. Not just *is
> there capacity?* but: Where should this step run? Under whose authority?
> By what policy? At whose cost? And afterwards — what actually happened?
>
> The challenge is no longer only access to compute. It is coordinating
> execution across independent infrastructure — and leaving a verifiable
> record of it. `(closing two sentences CLEARED-BY-STRATEGY §01)`

**Optional data strip** — `PENDING (V4)` — only with attribution, never
implying endorsement:
> AMD reports that in 2026, for the first time, more AI compute runs models
> than trains them — and that agentic workloads are driving token
> consumption up an order of magnitude.

**Security framing note (copy discipline).** Security appears here as
runtime questions an agent's execution must answer (authority, policy,
verification, record) — not as perimeter/threat language. No padlocks, no
fear copy. This is the "security as a property of execution" angle the
direction asks for, kept within what problem-framing allows.

**Visual.** One agent task drawn as a path of 4–5 hops across nodes of
visibly different ownership. At each hop, an open question mark resolves
into a verified mark as the reader scrolls. Introduces the
unbroken-path motif that returns in §5.

---

## 3 · AI runs somewhere real — `#physical`

**Headline** — draft
> Every agent runs on someone's infrastructure, somewhere.

**Body** — `SAFE-CONTEXT` / `CLEARED-BY-STRATEGY (§04 owner audience)`
> Compute is physical. It sits in data centers and clusters, at the edge of
> networks, in towers, on devices — owned by telcos, tower companies,
> operators and enterprises, each with their own estate.
>
> And increasingly, the work is physical too: agents acting on live
> situations — a site, a network, a vehicle, a device — where the right
> compute is compute near the moment, not compute in general.
>
> Place carries three things at once: an owner, a jurisdiction, and a cost.
> Agentic execution has to respect all three — before it acts, not after.

**Visual.** The abstract node-field from the hero gains a ground plane:
the same nodes now anchored to recognizable-but-generic physical settings
(a data hall, an edge cabinet, a tower, a handheld device). No named
places, no named companies, no map of real geography. This is where the
"AI in the physical world" direction is made literal.

---

## 4 · The mismatch — `#tension`

**Headline** — `CLEARED-BY-STRATEGY (§03)`
> The work is temporary. The participation models aren't.

**Body** — `CLEARED-BY-STRATEGY (§03, lightly edited)`
> An agent may need compute for a specific task, under specific rules,
> across infrastructure controlled by different parties. But most ways for
> an owner to participate mean joining another network, marketplace or
> platform — on that platform's terms, for as long as they stay.
>
> The mismatch is structural: the work can be temporary; the participation
> model often is not.

**Visual.** Split state: on one side, a task that flares and ends (a brief
pulse); on the other, a lattice that, once joined, never lets go. Static
contrast is enough — this section should feel like an observation, not a
performance.

---

## 5 · How a task runs — `#loop` (centerpiece)

The page's expressive moment: one continuous scroll-driven scene in five
frames. This is where the direction's themes — user-centric authority,
security, information gathered then released — live as *behavior shown*,
not claims listed. Framed as **how Civarro coordinates a task**
(`CLEARED-BY-STRATEGY §05` for the coordination framing; individual frames
carry their own gates).

**Section intro** — `CLEARED-BY-STRATEGY (§05/§08)`
> One task, start to finish: resources come together under the right
> conditions, do the work, and return to independent operation.

### Frame 1 — RESOLVE — `PENDING (V3)`
> Before the agent acts, execution resolves whose authority governs this
> task — the person's own direction, the law of the place, or the role
> being performed — and the placement, policy and terms that follow from it.

*Visual:* three authority sources converge on the task token; one
illuminates. (The three-mode articulation is the V3 gate; if V3 fails,
fallback copy: "…resolves whose authority governs this task, and the
placement, policy and terms that follow from it.")

*User-centric note:* this frame is where "authority starts with the
person" is expressed — through the sovereignty question, not through
CASM/"chain user"/"Hybrid Authority" wording (Chronovault's terms —
blocked, V5).

### Frame 2 — GATHER — `CLEARED-BY-STRATEGY (§05/§07)`
> The task draws in only what it needs — compute, data, permissions — from
> infrastructure that stays under its owner's control, on conditions each
> owner sets.

*Visual:* a small constellation of nodes leans in and links to the task;
every link visibly labeled by its owner's terms (drawn as differing link
styles, not fake legal text).

### Frame 3 — EXECUTE — `PENDING (V2/V5 for attestation wording)`
> The work runs where it should, and every step of the path is verified —
> no link in the chain is taken on trust.

*Visual:* the unbroken-path motif at full size: the task moves hop by hop,
each hop sealing as it passes. (If attestation-as-capability cannot clear
verification, reframe as design intent: "built so that every step of the
path can be verified" — still requires sign-off on "built so that.")

### Frame 4 — RELEASE — `CLEARED-BY-STRATEGY (§05/§08/§11)`
> When the task ends, everything returns. Compute goes back to its owner's
> control. Access granted for the task closes with the task. Nothing keeps
> participating by default.
>
> Independence isn't what you give up to take part. It's the state
> everything returns to.

*Visual:* the constellation visibly disbands — links retract, nodes settle
back to the hero's resting field. This frame is mandatory and must be as
articulate as the gathering (UNITY IS AN EVENT). This is also where the
"information gathered, then released" direction lands: access closing is
shown with the same weight as access opening.

### Frame 5 — RECORD — `PENDING (V2)`
> What remains is the record: which infrastructure served which unit of
> work, at what volume, under what conditions — attributable to every party
> that took part.

*Visual:* ledger/metering language — discrete entries settling into a
register — not charts, not dashboards. Per PROOF IS A READING, nothing
here may look like a measurement of real data; it is explicitly a
schematic of *what gets recorded*, and should read as such. (If V2
resolves to roadmap-only, this frame moves to future-intent wording or is
cut; the loop still works as four frames.)

---

## 6 · Consensus Fabric — `#fabric` — `PENDING (V1 for the name)`

**Headline** — `CLEARED-BY-STRATEGY (§05, verbatim)` + `PENDING (V1)`
> Consensus Fabric coordinates independent infrastructure for agentic
> execution.

**Body** — `CLEARED-BY-STRATEGY (§05/§06)`
> Through Consensus Fabric, Civarro coordinates compute across owners and
> locations — resolving the conditions execution requires while preserving
> independent control over participation.
>
> The coordination is the capability. The return to independence is the
> distinctive behavior.

**Status line** — `CLEARED-BY-STRATEGY (§06 RTB — "building")`
> Consensus Fabric is being built in the open with the operators it serves.
> *(Exact status wording to be approved with V2; never imply shipping
> capability the verification doesn't support.)*

**Visual.** The mesh motif: a weave running *across* boxes owned by others
— never a stripe in a stack. The loop from §5 replays here in miniature as
a single continuous figure, now labeled with the capability name.

---

## 7 · Two sides — `#who`

**Headline** — `CLEARED-BY-STRATEGY (§04, verbatim)`
> Civarro sits between two sides of agentic AI execution.

**Column A — For infrastructure owners and operators** —
`CLEARED-BY-STRATEGY (§04/§07/§08)`
> Telcos, tower companies, data center and cluster operators, enterprises
> with their own estates. Your compute serves AI work when the conditions
> are right — allocated when needed, released when done, governed on your
> terms throughout. Your estate stays yours.

**Column B — For agent and workload operators** —
`CLEARED-BY-STRATEGY (§04/§06)`
> Organizations deploying agents and AI workloads. Your work runs where it
> should — with placement, policy, authority and economics resolved before
> execution, and a verifiable account of what ran, where, under what terms.

**Closing line** — `CLEARED-BY-STRATEGY (§04, verbatim)`
> Civarro operates and coordinates the infrastructure between capacity and
> execution.

**Visual.** The two audiences as the two ends of the §5 loop — capacity on
one side, execution on the other, the loop between them. No new imagery;
reuse establishes the system.

---

## 8 · What's real today — `#proof`

**Headline** — draft (personality: DEMANDS PROOF)
> What's real today — and what's still being built.

**Body** — `CLEARED-BY-STRATEGY (§06 RTBs)` + `PENDING (V2 for status
accuracy)`
> **Operating estates now.** Civarro runs AI compute infrastructure
> operations today — the unglamorous discipline the rest depends on.
>
> **Building Consensus Fabric.** The coordination layer — placement,
> policy, authority, attribution, release — is in active development.
> We'd rather show it running than describe it; when a piece works, we'll
> show that piece.
>
> No customer logos here yet, and no numbers we can't stand behind. When
> they're real, they'll be here.

**Visual.** Typographic, quiet, two-state list (RUNNING / BUILDING) set in
plain text — explicitly *not* styled as a status dashboard or metric tiles
(PROOF IS A READING: nothing decorative may look like measurement).

---

## 9 · CTA — `#contact`

**Headline** — draft (verbal identity: "would rather show it running")
> If you own compute — or run agents — let's talk.

**Body** — draft
> We're working with infrastructure owners and workload operators to shape
> how independent compute participates in agentic AI. If that's the
> problem you're holding, we'd like to compare notes — and show you what's
> running.

**Action:** single email link or minimal form (name, organization, which
side of the loop they're on: *I own infrastructure / I run agents & workloads / both*).
No newsletter, no gated PDF.

---

## 10 · Footer

Company legal name, contact, privacy notice, © year. No partner logos, no
event badges, no certifications (blocked, V5). Optional one-line reprise:
**Productive compute, without surrendering control.**

---

## Copy rules checklist (applies to every block above)

1. Estate as subject, Civarro as instrument (INDEPENDENCE).
2. Present tense about what is changing; no destiny language (THE SHIFT).
3. Every coming-together shown with its coming-apart (UNITY IS AN EVENT).
4. Nothing decorative that looks like measurement (PROOF IS A READING).
5. Mechanisms before adjectives; "seamless/secure/scalable" banned.
6. Operator vocabulary unglossed: estate, placement, attestation,
   settlement, unit of work.
7. No partner/customer names, no POC/pilot/production claims, no ambulance
   scenario, no "patent-pending", no event commitments (V5).
8. Security written as runtime questions and verifiable behavior, never as
   threat/fear framing.
9. User-centricity expressed via the authority/sovereignty question only;
   CASM, "chain user", "Hybrid Authority" never appear.
10. Market figures only with first-party attribution ("AMD reports…"),
    re-verified at publication (V4).
