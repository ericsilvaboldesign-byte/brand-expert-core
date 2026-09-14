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

The arc: **shift → tension → who → what → how → believe → act.** Each
section maps to a numbered definition in the strategy PDF, so copy review
can trace every block to its source.

| # | Section (anchor) | Job | Strategy source | Placeholder content direction |
|---|---|---|---|---|
| 0 | Header / nav | Orient; anchors + single CTA | — | Wordmark, anchor links, "Talk to us" |
| 1 | **Hero** | State the positioning in one screen | §06 positioning, §07 promise | Headline from the positioning statement ("Civarro makes independently controlled AI compute usable across owners, locations and workloads"); support line from the promise ("Productive compute, without surrendering control"). No metrics, no partner logos. |
| 2 | **The shift** (`#shift`) | Why now — present tense, publicly citable | §01 market context + tokenomics evidence | Agentic AI changes what infrastructure has to do; inference/agentic era context. Only third-party-citable market facts; AMD keynote figures only if attributed "AMD reports…" (see gates). Written per the principle THE SHIFT: what *is* changing, never destiny language. |
| 3 | **The tension** (`#tension`) | The problem Civarro exists for | §03 brand tension | Execution can be temporary; participation models are persistent. The mismatch stated plainly — the page's intellectual hook, and safe: it claims a problem, not a capability. |
| 4 | **Two sides** (`#who`) | Name both audiences and Civarro's seat between them | §04 audience | Two-column moment: owners/operators of compute estates ↔ agent/workload operators. Civarro "operates and coordinates the infrastructure between capacity and execution." |
| 5 | **Consensus Fabric** (`#how`) | The differentiation, shown as behavior | §05 differentiation, §11 principles | Coordination across owners and locations for the task; **return to independence shown, not implied** (UNITY IS AN EVENT — any come-together visual must also show the coming-apart). Name usage contingent on gate V1. |
| 6 | **Reasons to believe** (`#proof`) | Honest RTB at BUILDING maturity | §06 RTBs | Estate operations today; Consensus Fabric building; placement, policy, authority, attribution, release as the dimensions it resolves. Status stated honestly ("building") — per PROOF IS A READING, nothing decorative may look like measurement: no fake dashboards, no illustrative charts with fabricated numbers. |
| 7 | **CTA** (`#contact`) | Convert the one realistic action | — | Early-stage: a conversation, not a signup. Single form or email. Optional secondary: a deeper "how it works" note when one exists. |
| 8 | Footer | Legal, minimal | — | Company info, privacy. No partner logos, no event badges (blocked). |

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

- **Gather → work → release** as the signature motion primitive (Consensus
  Fabric section): nodes converge for a task and demonstrably return to
  independence. Directly encodes UNITY IS AN EVENT.
- **Unbroken path across heterogeneous nodes** (a hop-by-hop verified
  chain) as the secondary motif — from the "no unattested hop" evidence
  pattern, drawn generically (no named companies' boxes).
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
│   │   └── sections/            # copy as data: hero.md, shift.md, tension.md,
│   │       ...                  # who.md, fabric.md, proof.md, cta.md
│   │       # front-matter: source, verification: cleared|pending|blocked
│   ├── components/
│   │   ├── sections/            # Hero, Shift, Tension, TwoSides, Fabric, Proof, CTA
│   │   └── motion/              # GatherRelease, AttestedPath (reusable primitives)
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
