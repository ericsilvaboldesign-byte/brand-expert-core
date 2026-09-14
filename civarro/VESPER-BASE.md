# Civarro Website Technical Base — Vesper (next16-claude-starter)

Status: **ADOPTED AS SITE CHASSIS — INTERNAL WORKING MATERIAL**

Per stakeholder direction (2026-09-14): the `vesper` package is the second
base for the site. Division of roles:

- **Vesper** = the chassis and the motion/transition engine: scroll-driven
  WebGL particle narrative, spring animation system, smooth scroll, design
  tokens, SEO/consent scaffolding.
- **Field language** ([`FIELD-LANGUAGE-BASE.md`](FIELD-LANGUAGE-BASE.md)) =
  **source of truth for the style of representation** — what is shown and
  the rules it obeys (colour grammar, behaviour, restraint). Editable, but
  it is the reference.
- **What changes on top of vesper:** what is represented (its orb / galaxy /
  brain acts → Civarro's world and task figures), the visual style of what
  is represented, the info/copy, colours, typography and logo.

Source: [`evidence/vesper.zip`](evidence/vesper.zip)
(sha256 `668dee741446f1216c7b13f341445d7b390f52214b6dc5b7f98c1bbb5e2b2a16`),
stakeholder upload, 2026-09-14.

## 1 · What it is

`next16-claude-starter` ("VESPER / V—0RB" demo), built by Textura: a
frontend-only Next.js 16 + React 19 starter for animation-heavy landing
pages, explicitly designed to be edited by AI agents (an Obsidian vault of
conventions + Claude Code hooks that enforce them). Stack: react-three-fiber
(Three.js WebGL) + @react-spring/web (all motion; CSS animation and
framer-motion banned by ADR) + spring-text-engine + Lenis smooth scroll +
Tailwind v4 (token-in-CSS, no config file) + zustand. 184 files, ~30 docs.

Its home page is already the shape our page needs: a fixed full-viewport
particle scene behind a fixed HUD, where nothing scrolls except invisible
tracks that advance a **global scene clock**, and three particle forms hand
off across that clock (orb dissolves → galaxy assembles → galaxy blows
apart → brain assembles from a baked mesh).

## 2 · What we leverage (mapped to our needs)

1. **The global clock + keyframe track + derived selectors** —
   `timeline.ts` owns a 0→4 clock written by scroll-progress triggers; every
   beat is a pure `smoothstep` selector over it. This is exactly the
   "scroll driver" the field-language integration plan called for: our nine
   beats become clock spans; retiming a beat is editing one range.
2. **Particle assembly/dispersal as first-class uniforms** — `uAssemble`,
   `uBlow` (galaxy), `uExplode` (brain): per-point delayed assembly from
   scattered positions, dispersal along per-point random directions, all
   scroll-driven. **The stakeholder's general transition behaviour —
   particles form a shape → disperse → re-gather → deliver a visual
   message → separate — is already implemented as this mechanism.**
3. **The baked-geometry pipeline** — `scripts/bake-brain.mjs` turns any
   mesh into a 43 KB quantized point-cloud target sampled per device tier.
   This is how "particles form a message figure" scales: any figure the
   beats need (a formation, a diagram moment, eventually a logo) becomes a
   baked target the same particles assemble into.
4. **Performance discipline** — one app-wide rAF ticker with priorities
   (Lenis writes scroll before anyone reads), frame-gate with jitter
   tolerance, adaptive quality tiers per viewport, `FrameGate`-driven
   `invalidate()`. This satisfies v2 motion rule 9 (mobile budget) by
   construction.
5. **Reduced motion first-class** — `useReducedMotion` flips react-spring's
   global `skipAnimation`; springs jump to end state. Satisfies v2 rule 8's
   mechanism (our designed static frames still need to be authored).
6. **DOM copy layer** — HUD/section windows synced to the clock
   (`SECTION_WINDOWS` leads the scene, copy arrives before the visual),
   spring-text-engine for type. Copy stays real DOM text — v2 rule 9's
   "text rendered as text" satisfied.
7. **Site scaffolding we'd otherwise build** — SEO metadata system, cookie
   consent, adaptive grid, views/routing conventions, and the
   docs-plus-hooks enforcement system that keeps future edits on-style.

## 3 · The signature transition — "the assembly cycle"

Formalizing the stakeholder's brief as the page's general transition
grammar, bound by both bases:

> **Disperse-first:** the resting state is always the dispersed,
> independent field — never the formed shape (INDEPENDENCE; field-language
> resting regime). A scene *begins* dispersed.
>
> **Form:** particles assemble into a figure that carries one visual
> message (a world, a formation, a condition gate, a reading). Assembly is
> porous and individually resolvable — a band, never a solid mass (orbital
> assembly rules).
>
> **Hold:** the figure holds only as long as the message needs (copy
> window synced, DOM text leads).
>
> **Release:** the figure demonstrably dissolves back to the independent
> field before the next forms (UNITY IS AN EVENT — the coming-apart shown
> with the coming-together, every time).
>
> Colour under the cycle follows the field-language grammar: structural
> teal, one capped warm accent for engagement, categorical colour only for
> workload identity, nothing glows, nothing reads thermal.

Beats 1→9 are then a chain of assembly cycles over one particle
population: world (hero) → work packets → misaligned layers → estates →
the fabric formation (beat 5 centerpiece) → condition gates → two lenses →
readings → final cycle. One population, many figures — vesper's three-act
handoff generalized to nine.

## 4 · Integration decisions and flags

- **V10a — Renderer integration.** The field language is 2D canvas; vesper
  is Three.js. Options: (a) drive the existing 2D world canvas from
  vesper's clock inside the chassis (low risk, two renderers), or
  (b) port the world into the R3F particle system as point clouds
  (one renderer, one population for all assembly cycles — the consistency
  the transition grammar wants). **Recommendation: (b)** — port the world's
  *grammar* (stipple globe, membership, engagement treatment, colour roles)
  onto vesper's particle engine, keeping `theme.js` roles as the single
  colour source; fall back to (a) only if the port breaks the world's
  behaviour rules.
- **V10b — Provenance/licensing.** The starter is by Textura
  (textura.agency); no LICENSE file in the package. Confirm Civarro's
  right to use it for the public site before launch.
- **V10c — De-template.** VESPER/V—0RB naming, Onest font, placeholder
  sections (financial, FAQ) and demo copy must be fully replaced: type →
  Civarro typography (field language ships Source Sans 3 until identity
  lands), tokens → M3 roles from `theme.js` mapped into Tailwind v4
  `@theme`, logo → Civarro. No starter branding may survive to production.
- **Stack amendment.** This supersedes the Astro recommendation in
  `LANDING-PAGE-ARCHITECTURE.md` §5. What carries over unchanged: copy as
  data with machine-readable verification tags, and the build gate that
  blocks non-cleared copy — both implemented in the Next build instead.
- **No new metrics.** Vesper's HUD invites data readouts; PROOF IS A
  READING still governs — nothing decorative may look like measurement,
  and simulation values are never product metrics (field-language rule,
  inherited verbatim).
