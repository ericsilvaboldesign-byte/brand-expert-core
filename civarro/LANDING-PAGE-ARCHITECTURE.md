# Civarro Landing Page — Initial Architecture Proposal

Status: **PROPOSAL — INTERNAL WORKING MATERIAL, NOT APPROVED COPY**

Initial information architecture, narrative structure, and technical
architecture for the Civarro landing page ("Civarro Item 11"). Grounded in:

- **Brand foundation:** the Civarro Brand Strategy definitions document
  ([`evidence/civarro-brand-strategy-definitions.pdf`](evidence/civarro-brand-strategy-definitions.pdf),
  received 2026-09-14) — positioning, audience, differentiation,
  proposition/promise, territory, personality, voice, and the four brand
  principles.
- **Evidence constraints:** the banded findings and VERIFICATION REQUIRED
  lists in [`AMD-HPE-POC-WEBSITE-EVIDENCE.md`](AMD-HPE-POC-WEBSITE-EVIDENCE.md)
  and [`TOKENOMICS-CONTEXT-EVIDENCE.md`](TOKENOMICS-CONTEXT-EVIDENCE.md).
- **Stakeholder direction (Sal, relayed 2026-09-14):** put agentic AI at
  the center of the page; emphasize the implications of agents — security,
  user-centric authority, information that is gathered for a task and then
  released, and how AI operates in the physical world; the treatment must
  be strongly visual. This direction is incorporated as narrative weighting
  below; it does not override any verification gate.

Draft copy for every section lives in
[`LANDING-PAGE-CONTENT.md`](LANDING-PAGE-CONTENT.md).

All section copy below is **placeholder direction**, not launch wording.
Every claim must clear the verification gates (§6) before publication.

---

## 1. Scope and premise

A single landing page (one URL, anchor navigation), plus minimal legal
pages. Not a multi-page corporate site: the company is early, the visual
identity is intentionally parked, and most proof points are BUILDING. A
single page keeps the claim surface small and auditable.

Two structural decisions follow directly from the strategy document:

1. **The narrative is scenario-of-the-category, not feature list.** The
   strategy's own market framing (agentic AI changes what infrastructure
   has to do) and the evidence finding that this category is best explained
   through concrete cross-boundary moments both point away from a
   capability grid. But the specific ambulance/EMT story is **blocked**
   (proposed POC material) — the *pattern* transfers, the *story* does not.
2. **The page must serve two audiences without splitting into two sites.**
   Compute infrastructure owners/operators and AI agent/workload operators
   meet the same story from opposite sides; the page presents one narrative
   with a two-sided audience moment, not parallel funnels. (Owner-side
   evidence is stronger per the strategy footnotes — the owner is the
   primary reader at launch.)

## 2. Page narrative — section by section

The arc — revised per the agentic-AI direction: **agents → physical
world → mismatch → the task loop → the fabric → who → believe → act.**
The spine of the page is now the *life of one agentic task*: authority
resolved, resources gathered, work executed, everything released, a record
left. That single loop carries all four of the direction's themes
(security, user-centric authority, gather-then-release, physical context)
and is the page's central visual sequence. Each section still maps to a
numbered definition in the strategy PDF, so copy review can trace every
block to its source.

| # | Section (anchor) | Job | Strategy source | Content direction |
|---|---|---|---|---|
| 0 | Header / nav | Orient; anchors + single CTA | — | Wordmark, anchor links, "Talk to us" |
| 1 | **Hero** | The agentic frame + the positioning in one screen | §01 context, §06 positioning, §07 promise | Agents executing across infrastructure owned by different parties as the opening image; headline from the positioning statement; support from the promise ("Productive compute, without surrendering control"). No metrics, no partner logos. |
| 2 | **Agents change the job** (`#agents`) | Why now — what agentic AI demands of infrastructure | §01 market context + tokenomics evidence | An agent is a sequence, not a query: it reasons, retrieves, invokes, moves — across compute owned by different parties. Each hop raises security and authority questions no perimeter answers. Present tense per THE SHIFT; AMD keynote figures only if attributed (gate V4). |
| 3 | **AI runs somewhere real** (`#physical`) | The physical context of agentic execution | §01, §04 (owner audience) | Compute lives in data centers, at the edge, in towers, on devices — owned by someone, located somewhere, governed by the law of where it is. Place carries ownership, law and cost; agentic execution has to respect all three. |
| 4 | **The mismatch** (`#tension`) | The problem Civarro exists for | §03 brand tension | Execution can be temporary; participation models are persistent. Safe: claims a problem, not a capability. |
| 5 | **How a task runs** (`#loop`) | The centerpiece: security, user-centric authority, gather → execute → release → record | §05, §11 principles; sovereignty triad (gate V3); settlement (gate V2) | Five scroll-driven frames: **Resolve** (whose authority governs, before the agent acts) → **Gather** (only what the task needs, under each owner's conditions) → **Execute** (verified at every step) → **Release** (compute returned, data access closed, permissions expired — independence is the resting state) → **Record** (which infrastructure served which unit of work, under what conditions). Encodes UNITY IS AN EVENT structurally. |
| 6 | **Consensus Fabric** (`#fabric`) | Name the capability behind the loop | §05 differentiation | "The coordination is the capability. The return to independence is the distinctive behavior." Name usage contingent on gate V1. |
| 7 | **Two sides** (`#who`) | Name both audiences and Civarro's seat between them | §04 audience | Two-column moment: owners/operators of compute estates ↔ agent/workload operators; Civarro between capacity and execution. |
| 8 | **Reasons to believe** (`#proof`) | Honest RTB at BUILDING maturity | §06 RTBs | Estate operations today; Consensus Fabric building; placement, policy, authority, attribution, release. Per PROOF IS A READING: no fake dashboards, no decorative measurement. |
| 9 | **CTA** (`#contact`) | Convert the one realistic action | verbal identity ("would rather show it running") | A conversation, not a signup. Single form or email. |
| 10 | Footer | Legal, minimal | — | Company info, privacy. No partner logos, no event badges (blocked). |

**User-centric caution:** the direction's "authority roots in the
individual" idea overlaps with Chronovault's CASM/"chain user" language in
the AMD deck. The page expresses user-centricity through the sovereignty
question ("whose authority governs this task — the person's own direction,
the law of the place, or the role being performed"), which is the
deck's Civarro-attributed framing — and even that stays behind gate V3
until Civarro's own articulation is approved. Never adopt CASM/"chain
user"/"Hybrid Authority" wording.

Deliberately **absent**: customer/partner logos, case studies, product
screenshots, pricing, team page, metrics counters — every one is either
blocked by VERIFICATION REQUIRED or premature at BUILDING maturity, and
their absence is itself on-brand (DEMANDS PROOF: distrusts unsupported
claims, including its own).

## 3. Voice rules applied to the page

From §09–10 of the strategy PDF, operationalized for web copy:

- **Plain, with warmth** — short declarative sentences; no security-vendor
  menace, no exclamation marks.
- **Let the specific persuade** — mechanisms before adjectives: "allocated
  when needed, released when done, governed on the owner's terms" beats
  "seamless, secure, scalable."
- **Think visibly** — the tension section shows the reasoning, not just the
  conclusion.
- **Operator fluency** — estate, placement, attestation, settlement used
  without glossing back to the reader.
- **Reserve that lifts** — the page's one expressive moment is the
  Consensus Fabric section; everything else stays quiet.
- Note: "Make the future concrete" is **proposed, not approved** — don't
  build copy that depends on it until its status resolves.

And the principle INDEPENDENCE as a grammar rule: **the compute estate is
the subject of sentences; Civarro is the instrument** ("Your estate serves
the work…", not "Civarro unleashes your compute…").

## 4. Visual and motion architecture (identity-agnostic)

Visual identity is parked, so the page is architected on **placeholder
design tokens** (color, type, spacing in one swappable layer). What is
*not* deferred is the motif system, which comes from evidence:

- **The task loop as a scroll-driven sequence** is the page's visual
  centerpiece (`#loop`): one continuous scene that moves through
  resolve → gather → execute → release → record as the reader scrolls,
  rather than five separate illustrations. This is where the "very visual"
  direction is spent; the rest of the page stays quiet so the sequence
  reads as the expressive moment (RESERVE THAT LIFTS).
- **Gather → work → release** as the signature motion primitive (the task
  loop and the Consensus Fabric section): nodes converge for a task and
  demonstrably return to independence. Directly encodes UNITY IS AN EVENT.
- **Unbroken path across heterogeneous nodes** (a hop-by-hop verified
  chain) as the secondary motif — from the "no unattested hop" evidence
  pattern, drawn generically (no named companies' boxes). Used inside the
  Execute frame of the task loop.
- **A physical ground plane** for the `#physical` section: nodes anchored
  to real places (a data center, an edge site, a tower, a device) rather
  than floating in abstract space — the physical-context direction made
  literal. Generic geography only; no named locations or companies.
- **Mesh across others' territory, never a layer-cake stripe** — diagrams
  must not draw Civarro as one layer in a stack; the positioning evidence
  is that it spans layers.
- **Ledger/metering language for settlement** (units of work, attribution,
  records) — distinct from padlock-and-shield security clichés.
- **Anti-input:** the AMD deck's dark-silicon aesthetic is not a Civarro
  art direction input.
- All motion respects `prefers-reduced-motion` with meaningful static
  states (the release state, not the gathered state, is the resting frame —
  independence is the default condition).

## 5. Technical architecture

Proposed stack, sized to the actual problem (a fast, auditable, one-page
marketing site):

- **Astro** (static output) + vanilla TS/CSS; islands only where motion
  needs interactivity. No CMS at this stage — content lives in the repo
  where it can be reviewed like evidence. (Next.js is the alternative if
  the team expects to grow into app-like features; default recommendation
  is Astro for zero-JS-by-default and content-first structure.)
- **Copy as data:** every text block in `src/content/` as
  structured MD/JSON, each block carrying `source` (strategy section /
  evidence doc) and `verification` (`cleared` / `pending` / `blocked`)
  front-matter. The build **fails if any non-`cleared` block is included**
  — the corpus's evidence discipline enforced mechanically.
- **Design tokens** isolated in `src/styles/tokens.css` so the parked
  identity drops in later without touching components.
- Static hosting (Cloudflare Pages / Vercel / Netlify), analytics-light
  (privacy-respecting or none at launch), semantic HTML, WCAG AA.

Proposed structure (new repo or `civarro-site/` root):

```
civarro-site/
├── src/
│   ├── content/
│   │   └── sections/            # copy as data: hero.md, agents.md, physical.md,
│   │       ...                  # tension.md, loop.md, fabric.md, who.md,
│   │       # proof.md, cta.md
│   │       # front-matter: source, verification: cleared|pending|blocked
│   ├── components/
│   │   ├── sections/            # Hero, Agents, Physical, Tension, TaskLoop,
│   │   │                        # Fabric, TwoSides, Proof, CTA
│   │   └── motion/              # GatherRelease, AttestedPath, TaskLoopScene
│   ├── styles/
│   │   └── tokens.css           # placeholder identity tokens (swappable)
│   └── pages/
│       └── index.astro          # single landing page, anchor nav
├── scripts/
│   └── check-verification.ts    # build gate: no pending/blocked copy ships
└── CLAIMS.md                    # live register mirroring the gates in §6
```

## 6. Verification gates before copy freeze

Inherited from the evidence docs; the page cannot launch until each is
resolved or the dependent content is cut:

- **V1 — Name ownership:** is "Consensus Fabric" Civarro's own product
  name (and "Dispatcher"/"Analyzer")? §5 of the page depends on it.
- **V2 — Settlement status:** shipped / POC scope / roadmap — determines
  whether settlement appears as capability (RTB) or as problem framing
  only.
- **V3 — Sovereignty triad:** Civarro's approved articulation before
  self/place/role is used as explanatory copy or an interactive device.
- **V4 — Market figures:** full-text check of the diginomica article;
  AMD keynote figures only with "AMD reports…" attribution, re-verified
  for currency at copy-writing time, never implying endorsement.
- **V5 — Absolute blocks:** no partner/customer names (AMD, HPE, Red Hat,
  Samsung, Chronovault), no POC/pilot/production claims, no ambulance
  scenario, no event commitments, no "patent-pending", no current-capability
  inference from the POC deck.
- **V6 — Voice item:** status of the proposed "Make the future concrete"
  principle.
- **V7 — Category-landscape claims** (strategy §02 benchmark) require
  primary-source verification before any competitive claim appears
  publicly; default is to make **no** named competitive claims on the page.

## 7. Proposed build order

1. Confirm this architecture with stakeholders (esp. §1 scope and §5 stack).
2. Scaffold `civarro-site/` with tokens, section components, verification
   build gate; grey-box identity.
3. Draft section copy in `src/content/` (all `pending`), routed through the
   gates above.
4. Prototype the two motion primitives (gather-release, attested path).
5. Copy clearance pass → flip blocks to `cleared` → identity drop-in when
   the visual territory unfreezes → launch.
