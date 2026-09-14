# Civarro Website Visual Base — Field Language (World / Operations Globe)

Status: **ADOPTED AS VISUAL BASE — INTERNAL WORKING MATERIAL**

Per stakeholder direction (2026-09-14): the "Field Language review board 6"
package is the **base visual system for the landing page**. Visuals,
animation and interaction will be edited on top of it, but the page's
visual world derives from this system — consistency with it is a
requirement, not a preference.

- Source: [`evidence/field-language-review-board-6.zip`](evidence/field-language-review-board-6.zip)
  (sha256 `538af14741eb4a997dc00ca72569489d15d8e80e85b8b5b9a79eed091ff41b1e`),
  stakeholder upload, 2026-09-14.
- Verified running: the standalone renders (Chromium, dark stage, Traffic
  lens) — render captured at
  [`evidence/field-language-traffic-render.png`](evidence/field-language-traffic-render.png).
  The Material Web UI chrome and Google Fonts load from CDNs that this
  analysis environment blocks; the canvas world itself is fully local and
  renders without them.

## 1 · What it actually is

Not a static graphic: a **working HTML/canvas scene** — the Traffic and
Capacity lenses of Civarro's Operations globe, running the same engine,
field, scene and driver as the product, with only the surrounding
application chrome removed (the package says so itself). ~17k lines:

| Module | Role |
|---|---|
| `vendor/swarm-core.js` | Simulation core, behaviour only ("nothing here knows how anything is drawn") |
| `capacity-field.js` | Capacity behaviour: engagement as velocity treatment, orbital assembly |
| `world-scene.js` | Rendering: sphere, land stipple, graticule, node marks, colour grammar |
| `lens-driver.js` | One world, one camera; lens easing; semantic zoom; fixture data |
| `traffic-overlay.js` | Traffic as a separate system: great-circle routes, workload-coloured pulses |
| `hive.js` | Environmental/domain containment layer (never drawn as such here) |
| `geo-land.js` | Real coastline data → fibonacci stipple (never hand-drawn cartography) |
| `theme.js` + `assets/m3/*` | Material 3 role tokens, dark + light, seed `#007D76` |
| `assets/civarro/*` | Source Sans 3 typography ramp, component tokens |

**Strategic reading:** because this is the product's own visual system,
building the landing page on it makes the marketing site and the product
one continuous visual world — "we'd rather show it running" made literal.
That is the single strongest consistency move available to us.

## 2 · The grammar the code enforces (the rules we inherit)

These rules are written into the code as owner decisions, with rationale.
They are now **binding on all website visual work**:

**Color**

- Every colour has **one definition per mode**, as a Material 3 role
  (seed `#007D76`); canvas and DOM read the same roles. Dark and light are
  both first-class (light: "geography on a light ground must darken, not
  lighten").
- **Teal is structural**: selection, control, "you". Never a data reading.
- **Engaged capacity takes one controlled warm accent** — a narrow gold
  band that never travels toward orange-red, "so coordination can never
  read as thermal danger."
- **Categorical colour answers exactly one question — "which workload"** —
  on traffic routes and their legend. Capacity state is never coloured
  categorically. The workload palette is max-variation, authored outside
  Material.
- **Colour never carries the reading alone**; chroma is capped.

**Behaviour**

- **No attractor, ever.** The engine runs permanently in its resting
  regime; nothing can clump structurally. Engagement is a behavioural
  treatment of velocities (shared flow tendency, reduced wander, motion
  synchronisation): "capacity coordinates while continuing to travel."
- **Orbital assembly is porous and dissolves.** Each engaged agent targets
  its own ring band, never the centre; the formation stays individually
  resolvable, and when activity falls it dissolves back into the ambient
  field.
- **Membership, not densification**: activity widens who participates
  (angular cones), never how dense anything gets. Exclusion is visible and
  meaningful.
- **Regions hold persistent, independent levels** — no lifecycle, no acts,
  no story baked into the field.

**Structure**

- **One world, one camera, one orientation.** Lenses (Traffic / Capacity)
  ease emphasis weights only; a lens switch is "a change of reading, not
  of world." Semantic zoom descends GLOBAL → REGIONAL → LOCAL.
- **Traffic and capacity are separate visual systems**: capacity is
  population/field; traffic is events on routes — tiny pulses with short
  tails, "never triangles, never trails from the field." "Restraint is a
  rule, not a preference: … nothing glows."
- **Geography is subordinate**: real land data as sparse stipple, spatial
  anchoring, never cartography as subject.
- **Layer separation is doctrinal** (hive = physical context; lattice =
  organisational structure; thermal = emergent outcome; agents =
  behaviour) — layers never borrow each other's geometry or colour.
- **"Simulation values are prototype-only … not Civarro product metrics"**
  — stated in the code itself.

**Type**

- DOM: Source Sans 3 (400–700) on the M3 ramp; canvas telemetry labels:
  ui-monospace. Type scale capped independently of mark scale.

## 3 · Fit with the brand principles

The inheritance is almost one-to-one — this system was evidently built
under the same principles the strategy froze:

- **INDEPENDENCE** — the resting regime *is* independence; no attractor
  means the estate is never absorbed. The field's default state is the
  brand's default state.
- **UNITY IS AN EVENT** — orbital assembly forms *and dissolves*; the
  coming-apart is engineered in, not an afterthought.
- **PROOF IS A READING** — prototype values explicitly not product
  metrics; restraint rules; telemetry drawn as readings, "nothing glows."
- **THE SHIFT** — the field is always running in the present tense; no
  lifecycle acts, no destiny arc.

## 4 · Consistency mapping — field language ⇄ landing page v2 beats

How the nine beats of
[`LANDING-PAGE-CONTENT-ARCHITECTURE-V2.md`](LANDING-PAGE-CONTENT-ARCHITECTURE-V2.md)
sit on this base. **Native** = the system already does it; **extend** =
new module in the same grammar; **new** = needs design within the rules.

| Beat | Treatment | How |
|---|---|---|
| 1 Hero | **Native** | The world at GLOBAL scale, baseline activity — this is exactly the "operational topology, not a decorative globe" the v2 hero specifies. |
| 2 Agents change the job | **Native + extend** | Traffic pulses on great-circle routes are the work packets; workload colour answers "which workload". Extend: the hop-question moment (where/authority/policy/cost) as label treatment at REGIONAL scale. |
| 3 Mismatch & gap | **New (within grammar)** | Misalignment/membrane visuals don't exist yet; build them from the existing field/boundary vocabulary — no new colour roles, no glow. |
| 4 Value | **Native** | State-change productivity and meaningful node exclusion are literally implemented (membership cones, engagement levels). The v2 state ladder maps onto engagement + assembly states. |
| 5 Consensus Fabric | **Native** | Orbital assembly IS the gather → work → release centerpiece: porous, individually resolvable, dissolving on completion. The v2 scroll sequence choreographs what the field already does. |
| 6 Conditions / gates | **Extend** | Six gates as new modules using existing devices: membership cones (Place), selection teal (Authorize), boundary fields (Govern), route/ledger pulses (Account/Prove), dissolution (Release). |
| 7 Two sides | **Native** | The lens system is the section: "same system, two lenses" is implemented as Traffic/Capacity easing. Owner lens ⇄ Capacity reading; workload lens ⇄ Traffic reading. |
| 8 Proof | **Native** | The telemetry/readings language (monospace labels, bars, readings) calms the field into the blueprint state v2 asks for. |
| 9 Closing | **Native** | Return to GLOBAL baseline; one final engage-release cycle as the signature. |

The scroll narrative therefore becomes: **one persistent world whose
lens weights, zoom scale and activity levels are driven by scroll
position** — the same mechanism the standalone drives with buttons. That
is the consistency contract: the website adds a scroll driver, it does not
add a second visual world.

## 5 · Flags before website use

1. **Fixture data is blocked for public use (extends gate V5).** The
   fixtures name real vendors, hardware and models: "AMD Radeon Pro V520",
   "NVIDIA L4 24GB", "CPU · AMD EPYC / SEV-SNP", "Qwen2.5 3B/7B", plus
   AWS-style region codes ("OHIO · US-EAST-2", "EU-WEST-1A"). On the
   public site these imply deployments, partners and stacks. **New gate
   V9a:** all public fixtures must be genericized (neutral node ids,
   generic hardware classes, invented region naming) before launch.
2. **External dependencies must be self-hosted.** The standalone pulls
   @material/web from esm.sh/esm.run and fonts from Google Fonts; esm.sh
   is already unreachable from this analysis environment. For the website:
   bundle the components (or replace the two segmented buttons with owned
   UI) and self-host Source Sans 3 with a real fallback stack. (**V9b**)
3. **The "YOU" marker is a product concept** (the logged-in operator's
   location). A marketing page has no "you" operator — drop it or rebrief
   it (e.g., "control plane") for public use.
4. **Accessibility & performance** (v2 rules 8–10 apply): canvas text is
   invisible to assistive tech — every scroll state needs DOM-level copy;
   `prefers-reduced-motion` serves designed static frames (the resting
   field); 520-agent simulation + stipple needs a mobile budget pass.
5. **Identity status.** This system carries a de facto identity (teal seed
   `#007D76`, Source Sans 3, M3 shape tokens) while the brand identity is
   officially "parked." Adopting the field language as base makes these
   the working tokens of the site. **V9c:** confirm with stakeholders that
   the parked identity work will land *on top of* these tokens (recolour =
   reseed the M3 theme + re-derive canvas roles), so nothing here is
   throwaway — the token architecture already supports a full reskin.
6. **Provenance to confirm:** the package reads as Civarro's own product
   code (owner annotations dated Aug–Sep 2026). Confirm it is fully owned /
   licensable for the public site, including `vendor/swarm-core.js`.

## 6 · Integration plan (updates v2 build order)

**Chassis update (2026-09-14):** the site chassis is now the vesper
starter — see [`VESPER-BASE.md`](VESPER-BASE.md). This field language
remains the **source of truth for the style of representation**; the plan
below lands inside the vesper chassis, with vesper's global scroll clock
as the driver and integration per gate V10a.

1. Vendor the package into the site as `src/field/` — engine and
   scene untouched; the site adds a **scroll driver** beside the existing
   lens driver (same hooks: lens weights, zoom scale, activity levels,
   camera focus).
2. Genericize fixtures into `src/field/fixtures-public.js` (V9a) — the
   only file the site is expected to fork.
3. Replace CDN dependencies (V9b); self-host fonts.
4. Build beats 3 and 6 as new modules inside the grammar (no new colour
   roles, no attractors, no glow) — reviewed against §2 as a checklist.
5. DOM copy layer + reduced-motion static frames + mobile budget pass.
