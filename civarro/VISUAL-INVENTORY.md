# Civarro Landing Page — Visual Inventory (Pre-Build)

Status: **INVENTORY — INTERNAL WORKING MATERIAL. Not final art, not identity
decisions, not implementation.**

Scope discipline for this document: no invented final illustrations, no
polished art, no stock-looking visuals, no internet references, no assumed
assets, and the Civarro world graphic is **protected** — it is not replaced,
it is the anchor. Anything uncertain is labeled **NEEDS TEST** (idea is
sound, legibility/behaviour unproven) or **NEEDS ASSET** (do not draw
responsibly without source material or approval). All tokens referenced are
placeholders (the field-language M3 roles) pending the parked identity.

Source types used throughout:

- **EXISTING ASSET** — a visual source already in the repo/provided files,
  path known.
- **PROCEDURAL / GEOMETRIC** — buildable from primitives, particles, lines,
  curves, fields, SVG/canvas geometry. No external drawing.
- **HYPOTHESIS / NEEDS REFERENCE** — may work; not enough source material
  to draw it responsibly yet.

---

## 1 · Asset / source audit

### 1a. Civarro visual sources (usable)

All inside `civarro/evidence/` (hashes in [`evidence/MANIFEST.md`](evidence/MANIFEST.md)).
Working trees unpack from the two zips; paths below are inside them.

**`field-language-review-board-6.zip` → `world-standalone/` — PROTECTED ANCHOR**

| Path | What it is | What it safely contributes |
|---|---|---|
| `index.html` | Standalone host, driver hooks (`data-stage`, `data-lens`, zoom/fit) | The binding contract any site chassis must respect |
| `ops-v4/vendor/swarm-core.js` | Swarm simulation core (behaviour only) | Capacity-as-population behaviour; FCC/rhombic structure math |
| `ops-v4/capacity-field.js` | Engagement as velocity treatment; porous orbital assembly; membership cones | The Consensus Fabric behaviour: coordinate-while-travelling, assemble, dissolve, exclusion |
| `ops-v4/world-scene.js` | Sphere, land stipple, graticule, node marks/glyph table, capped gold engagement ramp, hex/iso devices | The entire mark vocabulary: node glyphs, stems, labels, readings; the colour grammar in code |
| `ops-v4/lens-driver.js` | One world/one camera, lens easing, semantic zoom GLOBAL→REGIONAL→LOCAL; **fixture data (blocked names)** | Lens/zoom mechanics; fixtures are structure-only — names blocked (gate V9a) |
| `ops-v4/traffic-overlay.js` | Great-circle routes, workload-coloured pulses, semantic-zoom route kinds | The work-packet/flow vocabulary; the one legitimate categorical-colour use |
| `ops-v4/hive.js` | Cavity/aperture/comb containment (environmental layer, drawn sparingly) | Boundary/containment geometry for "owner boundary" |
| `ops-v4/geo-land.js` | Real coastlines → fibonacci stipple | Geography as anchoring, never cartography |
| `ops-v4/scene-orig.js` | "Quiet scene": planar comb, colony, one event point, cursor instrument | A second, planar composition mode (non-globe) in the same grammar — candidate for detail sections |
| `ops-v4/theme.js`, `assets/m3/dark.css`, `assets/m3/light.css` | M3 role tokens, seed `#007D76`, dark+light, canvas+DOM unified | The placeholder token set for everything in this inventory |
| `assets/civarro/typography.css`, `components.css` | Source Sans 3 ramp, component tokens | Placeholder type system |

**`vesper.zip` → `vesper/` — CHASSIS / TRANSITION ENGINE**

| Path | What it is | What it safely contributes |
|---|---|---|
| `src/lib/scene/timeline.ts` (+ `intro.ts`, `outro.ts`, `constants.ts`) | Global 0→4 scroll clock, keyframes, derived smoothstep selectors | The scroll-driver pattern for the nine beats |
| `src/views/home/scene/galaxy/galaxy-shaders.ts` | `uAssemble` (per-point delayed assembly), `uBlow` (per-point dispersal) | The assembly-cycle mechanism, already scroll-driven |
| `src/views/home/scene/brain/*` + `scripts/bake-brain.mjs` + `public/assets/brain/brain-mesh.bin` | Mesh → 43 KB quantized point-target pipeline; device-tier sampling | How any approved figure becomes a particle formation target |
| `src/views/home/scene/orb/*` | Orb + dissolve/approach shaders | A dissolve/exit vocabulary study |
| `src/views/home/scene/` (atmosphere, backdrop, postprocessing, adaptive, scene-canvas, frame-gate) | Scene infrastructure, quality tiers | Performance discipline (v2 motion rule 9) |
| `src/components/animation/*`, `src/hooks/animation/*`, `src/lib/animation/ticker.ts` | Spring system, single rAF ticker | Motion plumbing; reduced-motion via global `skipAnimation` |
| `public/assets/*.svg/png` (logo, hero-line, divider, financial) | **VESPER template branding/demo art** | Structure examples only — **never shipped** (gate V10c) |

**Other Civarro evidence**

| Path | What it is | Contribution |
|---|---|---|
| `civarro/evidence/field-language-traffic-render.png` | Our verification render (Traffic lens, dark, GLOBAL) | Documentation baseline of the protected anchor's current look |
| `civarro/evidence/amd-hpe-agentic-ai-poc.pptx` | AMD POC deck | **No visual contribution** — embedded media is AMD template branding only; explicitly an anti-input for art direction |
| `civarro/evidence/civarro-brand-strategy-definitions.pdf` | Strategy definitions | Text-only; governs, does not depict |
| `civarro/evidence/civarro-landing-page-content-architecture-v1.docx` | Stakeholder content draft | Verbal visual direction (beats), no imagery |

### 1b. In-repo visual material that is OFF-LIMITS

`visual-corpus/training/**` (TikTok, Mastercard, Uber, GSK, Spotify,
Graphcore, etc.) is the branding-case **training corpus**: other companies'
logos, tokens and design systems held as study evidence. None of it may
contribute visually to the Civarro site. Listed here so nobody mistakes it
for available assets.

### 1c. What does NOT exist (do not assume)

No Civarro logo asset, no approved palette/type beyond the placeholder
tokens, no app/platform screenshots beyond the standalone world, no
photography, no icon set, no drone/robot/terminal/hardware reference
drawings, no approved geography emphasis. Anything needing these is marked
NEEDS ASSET.

---

## 2 · Visual inventory table

### A · Protected / existing visual anchors

| Item | Source type | Path | Role & handling |
|---|---|---|---|
| Civarro world graphic (Operations globe) | **EXISTING ASSET — PROTECTED** | `world-standalone/` (see 1a) | The page's persistent world; hero and closing anchor. Not replaced, not restyled beyond tokens; site adds a scroll driver to its existing hooks. |
| Swarm / Consensus Fabric behaviour | **EXISTING ASSET** | `ops-v4/capacity-field.js` + `vendor/swarm-core.js` | Beat 5 centerpiece behaviour: engagement, porous orbital assembly, dissolution, exclusion. Behaviour rules are binding (no attractor, membership not densification). |
| Traffic / work-packet system | **EXISTING ASSET** | `ops-v4/traffic-overlay.js` | Beat 2 packets; the only categorical colour. Pulses stay unlike agents. |
| Node marks / glyph table / readings | **EXISTING ASSET** | `ops-v4/world-scene.js` | Node vocabulary, telemetry-as-readings for Beat 8. |
| Quiet planar scene | **EXISTING ASSET** | `ops-v4/scene-orig.js` | Candidate planar composition for detail moments (gates, readings) in the same grammar. NEEDS TEST in page context. |
| Vesper particle acts & clock | **EXISTING ASSET** (chassis) | `vesper/src/lib/scene/`, `scene/galaxy`, `scene/brain` | Transition engine + figure-target pipeline. Its own art (orb/galaxy/brain/VESPER SVGs) is not shipped. |
| Placeholder tokens | **EXISTING ASSET** | `ops-v4/theme.js`, `assets/m3/*`, `assets/civarro/*` | The only colour/type source for all prototypes until identity lands. |

### B · Figurative application anchors

All three are **application consequences** (Beat 2): they show what agentic
work touches, in one glance, then become work packets. They are never the
subject, never the agent, and appear only at "figurative anchor" moments.
Common treatment: single-weight line geometry + sparse particles on the
line, same stroke grammar as the world's marks; silhouette first, detail
near zero.

| | Mobile operations terminal | Drone inspection object | Industrial robotic arm |
|---|---|---|---|
| Source type | PROCEDURAL / GEOMETRIC — **NEEDS TEST** | PROCEDURAL / GEOMETRIC — **NEEDS TEST** | PROCEDURAL / GEOMETRIC — **NEEDS TEST** |
| Visual role | The human/field end of an execution: work initiated or verified from a handheld context | An autonomous physical task in the world (inspection pass) | A physical operation consequence (actuation on a line/site) |
| Minimum readable silhouette | Rounded rectangle, strong aspect ratio, one screen line + one antenna/status tick | Center body + 4 rotor circles on X-arms (top-down), or T-silhouette side view | 3–4 line segments with visible joints (circles), one end effector wedge, mounted base |
| Necessary details | Held/field context cue (angle, hand-line optional); a single active-state tick | Rotor disks; heading; a scan cone/line when scanning | Joint articulation; base anchoring; reach arc |
| Avoid | Brand phone look, UI mock detail, app screens, buttons | Military read, camera gimbal detail, propeller blur, brand quadcopter look | Face/anthropomorphism, torso/humanoid read, gripper drama, sparks |
| Misinterpretation risk | Reads as "there's an app" (product promise) or as generic phone ad | Reads as surveillance or delivery-drone marketing | **Reads as the agent** — highest-risk anchor on the page |
| Test before inclusion? | YES — silhouette legibility at particle/line density, 3 sizes | YES — same, plus scan verb readability | YES — mandatory; also test that packet handoff (arm → packet) keeps the agent abstract |

### C · Compute capacity objects

Shared rules: capacity is always **population** (particles), never volume
or glow; operation is **flow** along paths; hardware is drawn as
schematic line geometry in the world's stroke weight; **nothing may
resemble gaming-GPU or hardware product marketing** — no beauty shots, no
RGB glow, no dramatic perspective, no rendered materials, no fans/heatsink
porn, no benchmark numbers.

| Object | Macro view | Detail view | Particles represent | Flow represents | Procedural? | Needs reference? |
|---|---|---|---|---|---|---|
| Distributed compute estate | **EXISTING**: regions + boundaries on the world (membership cones, hive boundary) | Boundary + interior population at REGIONAL zoom | Available capacity population inside an owner boundary | Participation entering/leaving the boundary | Fully | No |
| Cluster | Node-group mark within an estate (existing region grouping) | Grid/lattice of node marks with stems (existing glyphs) | Nodes as discrete members; engaged subset lights by behaviour, not colour | Intra-cluster task flow (local routes, existing `local` route kind) | Fully | No |
| Rack / board | Abstracted slot column: verticals + slot ticks, line-only | Slot rows with per-slot node marks; one populated slot ≠ all | Populated slots = present capacity; empty slots stay visible (not all participate) | Work entering a slot as a pulse | Yes — **NEEDS TEST** (must read as rack, not building/ladder) | Borderline; test first, escalate to reference only if illegible |
| GPU / CPU technical line drawing | Package outline + die rectangle + pin/pad field as dot grid | Die + a few functional blocks as line partitions — schematic, datasheet-flavoured | Dot grid = compute elements; engaged subset via behaviour | Lanes in/out as thin flow lines | Partially | **HYPOTHESIS / NEEDS REFERENCE** — a responsible die/package schematic needs a real reference drawing approved by stakeholders; do not improvise. Also gate V9a: never a named vendor part |
| Individual resource node | **EXISTING**: glyph-table marks (tri/dash/dot/dia/hex) + stem + label | Node mark + reading lines (existing telemetry vocabulary) | The node IS one particle/mark; its state is behavioural | Pulses entering/leaving the node at LOCAL zoom | Fully | No |

### D · Abstract mechanism objects

| Object | Visual role | Minimum representation | Motion behaviour | Risk | Source type |
|---|---|---|---|---|---|
| Work packet | The unit of agentic work moving through the world | Tiny filled dot + short fading tail (existing pulse spec) | flow, pulse; validated hop by hop | Becoming a cute mascot; growing detail | **EXISTING** (`traffic-overlay.js`) |
| Condition gates / fields | Beat 6: conditions as places the path must pass | A field boundary the path crosses; invalid paths dim | scan, select, exclude, validate | Reading as UI form steps; gates as literal doors | PROCEDURAL — **NEEDS TEST** per gate grammar (spatial field / signature / boundary / ledger pulse / trace / dissolution) |
| Operating membrane / seam | Beat 3: the active layer between misaligned parts | A live interstitial band between offset line-layers; never a labeled box | align, pulse (low amplitude) | Reading as "layer cake stripe" — the exact anti-pattern | PROCEDURAL — **NEEDS TEST** |
| Consensus Fabric | Beat 5: coordination as behaviour | **EXISTING**: porous orbital assembly of engaged population | form, align, bind, execute, write trace, release | Any solid mass, glow, or thermal read | **EXISTING ASSET** (`capacity-field.js`) |
| Proof trace | What remains after work: the readable record | Polyline trace of the executed path + discrete ledger ticks, monospace labels | write trace (draw-on), then persist calmly | **Fake metrics** — must stay schematic reading, never dashboard | **EXISTING vocabulary** (trails, readings) + PROCEDURAL extension |
| Release state | The distinctive behaviour made visible | Formation dissolving back to ambient field; links retract; slots empty | disperse, return, idle | Being skipped or rushed — release must get equal articulacy | **EXISTING** (assembly decay) |
| Owner boundary / independent estate | Ownership/control as geometry | Closed boundary (hive-derived cavity line or membership cone footprint) with interior population | idle, select (boundary acknowledges, never dissolves during participation) | Boundary reading as cage/exclusion negative | **EXISTING** (`hive.js`, membership cones) + PROCEDURAL |

### E · Visual languages (reusable, binding)

| Language | Means | Source |
|---|---|---|
| Particles | Matter: capacity, resources, population | swarm core / capacity field |
| Flow | Operation: movement, execution path | traffic overlay pulses |
| Line drawing | Technical specificity (schematic, single weight) | world-scene mark/stem/label vocabulary |
| Topology | Distributed context: where things are | world globe, stipple, graticule |
| Boundary | Ownership / control | hive geometry, membership cones |
| Trace | Proof / record | trails + readings (monospace) |
| Field / membrane | Coordination layer | engagement fields; membrane NEEDS TEST |

One rule across all seven: **figurative anchors show consequence; abstract
forms explain mechanism.** No language borrows another's colour role.

### F · Motion verbs (approved set)

`form · idle · pulse · scan · disperse · flow · select · exclude ·
validate · align · bind · execute · write trace · release · return`

Grammar notes: `idle` is the resting verb of the whole page (ambient field,
never frozen); `exclude` is a first-class verb (not all nodes participate —
exclusion must be shown, not implied); `release` and `return` are distinct
(release = the formation lets go; return = the world back at baseline);
`write trace` is the only verb allowed to leave a persistent mark.

---

## 3 · Representation risks

1. **Fixture leakage (gate V9a).** The world's fixtures name AMD/NVIDIA/
   Qwen hardware and AWS-style regions. Any prototype shown outside the
   team must run genericized fixtures.
2. **The robot reads as the agent.** Mandatory silhouette + handoff test;
   if the arm cannot stay a consequence, cut it — the other anchors carry
   Beat 2.
3. **Hardware marketing look.** Racks/GPUs drift toward product renders
   fast. Line-schematic only, no glow, no perspective drama, no vendor
   parts, no benchmark language.
4. **Thermal misread.** Engagement chroma is capped gold and never travels
   to orange-red; any new figure inherits this.
5. **Fake metrics.** All readings are schematics of *what gets recorded*;
   no invented numbers, no dashboard styling (PROOF IS A READING).
6. **Layer-cake regression.** Beat 3's membrane must never become a
   labeled Civarro stripe in a stack.
7. **Template bleed.** Vesper's own art (orb/galaxy/brain figures, VESPER
   SVGs, Onest type) is not Civarro visual language; only mechanisms carry
   over (gate V10c).
8. **AMD deck aesthetic** is an explicit anti-input.
9. **Identity foreclosure.** Everything runs on placeholder tokens;
   forming a logo from particles is an identity decision — out of scope
   until the identity lands.
10. **Training corpus contamination.** `visual-corpus/` assets are other
    brands' property held as study evidence; zero visual reuse.

## 4 · Safe to prototype immediately (no new approvals)

- The protected world driven by a scroll clock (lens weights, zoom,
  activity levels as clock selectors) — grey-box, existing hooks.
- The generic **assembly cycle** (disperse → form → hold → release) on the
  existing engagement/assembly behaviour, with a neutral geometric target
  (ring/band), not a figurative one.
- Beat 5 orbital assembly with visible exclusion and full release.
- Work-packet routes with hop validation ticks (existing pulse + trace
  vocabulary).
- Owner boundary + membership (estate macro view); cluster as node-group.
- Proof trace draw-on + calm persist; readings in monospace vocabulary.
- Condition-gate studies as pure fields/boundaries (no figurative gate
  imagery).
- All of it dark+light via the existing role tokens, with reduced-motion
  static frames.

## 5 · Needs approval or external reference before drawing

| Item | Blocker |
|---|---|
| GPU/CPU die/package schematic | NEEDS REFERENCE — stakeholder-approved technical drawing; never a named part |
| Mobile terminal, drone, robotic arm | NEEDS TEST first; results to stakeholders before inclusion (arm carries a mandatory pass/fail on "reads as agent") |
| Rack/board figure | NEEDS TEST (legibility); escalate to reference only if the procedural version fails |
| Any real-place geography emphasis (named cities/regions) | Approval — V9a genericization decides naming |
| Membrane/seam final form (Beat 3) | NEEDS TEST + stakeholder look at 2–3 procedural variants |
| Logo formation / logotype in particles | Blocked until identity lands (V9c) |
| Any use of vesper demo figures (orb/galaxy/brain) on the page | Not planned; would need explicit direction |
| Public naming of "Consensus Fabric" beside its figure | Gate V1 (name ownership) |

## 6 · Recommended next motion studies

1. **Assembly-cycle baseline** — one population: idle → form (neutral
   band) → hold → release → return, scroll-scrubbed both directions, at
   the three quality tiers. Establishes the signature before any figure.
2. **Beat 5 fabric study** — engagement rise on one region: membership
   widening, exclusion visible, porous assembly, execute pulse, trace
   write, dissolution. Pass/fail: release reads as articulate as
   formation.
3. **Gate-pass study (Beat 6)** — one packet through two contrasting
   gates (spatial field vs. boundary/rule field); invalid path dims. Tests
   whether gates read without labels.
4. **Membrane study (Beat 3)** — three procedural variants of the
   misalignment→seam moment; pick by whether the seam reads as active
   without becoming a stripe.
5. **Figurative silhouette test (Beat 2)** — terminal/drone/arm as
   line+particle silhouettes at three scales and both themes; each must
   read in under a second and hand off to a work packet without the
   figure "acting."
6. **Trace persistence study (Beat 8)** — how long a trace survives, how
   it calms into a reading, and how it behaves under reduced motion.

Studies 1–4 use only existing/procedural sources; study 5 gates category B;
study 6 closes the proof language. No copy, no page build, no final
animation in any of them.
