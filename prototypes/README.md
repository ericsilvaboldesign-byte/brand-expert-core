# prototypes/

Visual-direction prototypes. Working material — not approved output.

| File | What it is |
|---|---|
| `DRONE_FBX_BOARD.html` | **The board drawn from the real Xiaomi Mi Drone mesh**, rigged through the model's own nodes. See below. |
| `drone-model.js` | The model, the rig, the line engine and the four board languages. One source of truth. |
| `DRONE_CONCEPT_STANDALONE.html` | **Single file — open it straight from disk.** Same board, everything inlined, no server. Rebuild with `python3 build-standalone.py`. |
| `DRONE_CONCEPT_LIVE.html` | **The board, driven live.** Switch representation 01–04; each panel brings its own camera, chrome, callouts and accent. The rig stays drivable underneath. |
| `DRONE_MODEL_RIG.html` | Workbench viewer for the same model — orbit, display modes, rig sliders, launch sequence. |
| `DRONE_CONCEPT_BOARD_TARGET_MATCH.html` | Earlier study, superseded by `DRONE_CONCEPT_LIVE`. Kept for the record; it carries its own older geometry and no rig. |

All serve from the same vendored `vendor/three.module.min.js`.

## DRONE_FBX_BOARD

The reference board, drawn from the actual product mesh
(`assets/Xiaomi_mi_drone.FBX`, 109,770 triangles after stripping the
author's viewport furniture) rather than from hand-built geometry.

**The rig is the model's own hierarchy.** The FBX carries named nodes —
`wing`, `wing001..003` (two blade meshes each), `leg`, `leg001`, and
`CAMERA` (31 meshes) — so the propellers, gear and gimbal are driven
directly. No proxy rotors bolted alongside a motionless mesh.

Four scissored viewports off one renderer, one representation each,
material-swapped per pass. Three and FBXLoader are vendored: it runs with
no network.

Two things the FBX makes you handle:

- Its 912 `Line` nodes look like line art in the file but arrive as empty
  groups — **no line geometry survives the load**, so the drawing is
  `EdgesGeometry` throughout.
- `Box3.expandByObject` ignores visibility, so hiding the author's grid
  and particle-view furniture is not enough: they still inflate the
  bounds and shove the camera back. They have to be removed from the
  graph. And the craft is flat (1.14 tall against 3.0 wide), so cameras
  fit **projected extents**, never the bounding sphere.

## DRONE_CONCEPT_LIVE

The concept board with a live model behind it. Each panel is a preset —
camera, framing, construction circle, callouts and accent colour — over
the same geometry and the same rig:

| Panel | Camera | Carries |
|---|---|---|
| `01 SIMPLE LINE` | orthographic front elevation + top/front/side minis | essential form only: no joinery, no seams |
| `02 TECHNICAL LINE` | perspective 3/4 | full fittings, seams, CAMERA MODULE / ARM MODULE / VENTILATION callouts |
| `03 LINE + PARTICLE FIELD` | perspective 3/4, wider | + surface dusting, radial field, colour accents, the four field callouts |
| `04 PARTICLE TARGET` | perspective 3/4 | the point cloud alone |

Nothing labels the drawing — no leaders, no callouts. The four panels are
representation techniques, and each behaves the way the reference plays
it:

- **01** is line alone. Background-coloured fill occludes, white edges
  draw, fine fittings and seams are suppressed.
- **02** is the same drawing with an occluding fill that is *not* pure
  black, so the top plane separates tonally from the flank, plus every
  fitting and seam.
- **03** is **02 unchanged**, with data added on top: the object's own
  surface speckled with samples, the radial halo around it, and the
  sparse colour accents. The line drawing is not replaced, it is
  augmented.
- **04** is the cloud **alone**, on clean ground — no halo, no lines. The
  orange lens accent survives, as it does in the reference.

### Particles

Area-weighted random sampling **clumps**: it puts points where area is,
so the body clogs while the blades go bare, and the whole thing reads as
fog. The reference reads as an even stipple with every dot distinguish-
able. `poissonThin()` fixes this — dart-throwing against a spatial hash,
accepting a candidate only if it clears a minimum distance from its
neighbours. Five times the target is generated and thinned down to blue
noise, giving ~17,000 evenly spaced points from a 0.0235 spacing. The
same function at a coarser pitch produces the 03 surface dusting, so both
read as the same instrument at two densities.

The 03 halo is a **flat disc of rays in the craft's own plane**, not a
dome: dots march outward along 72 fixed spokes, thinning with radius.
That radial march is what the reference's field actually is — an earlier
dome-plus-ground-ring version scattered in every direction and read as
noise.

Drag to orbit and wheel to zoom from any panel; the preset camera is the
origin the orbit offsets from.

The rig is live throughout — fold, rotor, gimbal pan/tilt, and the launch
sequence — so the board is not a picture of the model, it is the model.

---

## DRONE_MODEL_RIG

The object itself rather than a board illustration. Wedge fuselage split
into a lower shell and a stepped deck meeting on a parting line, a
nose-mounted 3-axis gimbal, tapered folding arms, lofted rotor blades,
and landing skids. 99 parts.

### Rig

| Node | Driver |
|---|---|
| `root` | `setAttitude(pitch,roll,yaw)` · `setAltitude(m)` |
| `arm.FL/FR/RL/RR` | `setFold(0..1)` — real hinges; front arms swing back, rear arms swing forward, blades counter-rotate to lie along the body |
| `hub.*` | `setRotor(rpm)` — counter-rotating pairs |
| `gimbal.yaw > roll > pitch` | `setGimbal(pan,tilt)` |

Deployed span **5.10 × 2.96**; stowed **3.38 × 1.71**.

```js
const { rig } = window.__DRONE;
rig.setFold(0); rig.setRotor(5200); rig.setGimbal(30,-38);
rig.advance(dt);        // realtime
rig.seek(t);            // deterministic — blade phase from absolute time
```

`▸ LAUNCH SEQUENCE` in the UI runs deploy → spin-up → lift → gimbal
sweep, which is the rig driving itself end to end.

### The four board languages

The model renders in the same four representations as the concept board,
switchable live — same geometry, same rig, different language:

| Mode | What it is |
|---|---|
| `01 SIMPLE` | Essential form. Background-coloured fill occludes, white edges draw. Fine detail (louvres, hinges, pips, iris, beacon) is suppressed. |
| `02 TECHNICAL` | Hidden-line drawing. Near-black shaded fill gives the planes volume, bright edges carry the structure, all detail present. |
| `03 FIELD` | Technical line plus a surface dusting, a radial particle field the object sits inside, and the sparse colour accents. |
| `04 PARTICLE` | The object as 34,000 area-weighted surface samples alone — the morph-target handle. |
| `SOLID` | Shaded working view for judging form. |

The form itself follows the reference: a rounded rectangular slab with
chamfered edges and a recessed top panel, long slender near-flat rotor
blades, small low motors, flat bar arms off the body corners, a
chin-mounted camera module, and short posts with flat pads for gear.

Drag to orbit, wheel to zoom. `?shot=1` hides the UI, `?t=N` freezes a
frame, `?mode=` picks a language.

### Assemblies

It is a simple drawing but a *technical* one, so the joints are modelled
as assemblies rather than implied:

**Arm to body** — root collar where the arm thickens, pivot boss turning
inside a two-plate fork on the fuselage, and the axle pin standing proud
of both plates.

**Propeller to arm** — arm end, mount collar, stator can with slots
(fixed), then bell, hub plate, blade root clamps and retaining nut, all
carried by the rotating `hub` group so they spin with the blades and
counter-rotate with the fold.

None of these are tagged `detail`, so they survive into SIMPLE, where the
reference calls the folding mechanism out by name.

### Seams

There is no CSG, so a fitting that penetrates the fuselage just vanishes
into the solid and the join draws nothing — the exact line a technical
drawing needs. `seamCurve()` computes the real mesh-mesh intersection
(edge-against-triangle both ways, with an AABB prefilter so only the
handful of hull triangles under each fitting are tested) and the result
is drawn as ordinary `LineSegments`, so seams carry the same one-pixel
weight as every other line.

Seams are computed between **arbitrary pairs**, not just against the
fuselage. Fitting-to-fitting joins matter just as much: where the axle
pin passes through a fork plate, or the root collar enters the arm tube,
the line used to arrive and simply stop.

Each seam is parented to the **deepest common ancestor** of the two
parts, because that is the frame in which their relative pose is fixed,
so the curve stays correct as the rig moves — pin+fork share the hull,
collar+tube share the arm, plate+bell share the hub. Coaxial pairs
(pin/pivot, can/bell) rotate about their shared axis, so the intersection
is invariant and the common ancestor is enough.

Seams are computed **once, at build**, which is why the camera cannot
have one directly: it pans and tilts. It hangs instead from a short mount
collar fixed to the hull — the only part entering it — so the seam stays
static and correct at any gimbal angle.

About 2,900 seam segments from 104 pairs across 13 frames, ~0.5 s at
load. They are small and local, so the drawing stays clean at normal
viewing distance and gains real joint detail up close.

### Line fidelity

`ExtrudeGeometry` with a bevel pushes the mid-section **outward** by
`bevelSize`, so the hull's real flank sits at `profile + bevelSize`
(0.560 + 0.075 = 0.635), not at the profile. Applied detail placed
against the profile ends up buried inside the solid and draws nothing.
`HULL_FLANK` in the source is that constant — offset applied detail from
it, not from `hullShape()`.

**Don't model volume into parts that are drawn as lines.** Volume comes
from the structure and the perspective, not from each part's thickness. A
rotor blade given a real aerofoil section draws three near-parallel lines
(upper surface, lower surface, edge) and reads as a slab. The blade is a
flat planform — a `ShapeGeometry` whose single boundary loop is the whole
drawing. Arms, pads and legs are plain prisms for the same reason: a
bevelled extrusion stacks four parallel lines down every arm. Parts built
this way are marked `flat` in `part(...)` and skip the silhouette pass,
since a constant normal would slide the sheet sideways rather than
expand it.

**`EdgesGeometry` only emits creases, never silhouettes.** On a curved
surface — the motor cans, the lofted blades, the radiused hull corners —
adjacent faces differ by less than the crease threshold, so no contour
line is generated at all and the form has no outline. Lowering the
threshold does not fix this; it only adds facet noise. The model carries
a silhouette pass instead: an inverted hull (back faces only) expanded
along the view-space normal by a **constant screen width**, so the
contour holds the same weight at any scale and thin parts like blades
don't balloon. `outlineMaterial(color, widthNDC)` in the source; width is
in NDC units, so ~0.0013 is roughly a 1.5-device-pixel hairline.

**One line weight, by construction.** An inverted-hull outline cannot
hold a single weight no matter what width you set: it is a *filled*
expansion, so what you see is however much back face emerges past the
front faces, and that grows wherever the surface curves away gently. A
sharp edge yields the width you asked for; a motor can yields visibly
more. Fills and lines also antialias differently.

So there is no outline pass. Silhouettes are found as real edges — an
edge whose two adjacent faces disagree about facing the camera — and
drawn as `LineSegments` with the same material as the creases. Every line
in the drawing is then one device pixel everywhere, because every line is
the same kind of primitive.

Because silhouette edges follow the *real* tessellation, a coarse curve
now shows as visible chords where before a filled outline hid them.
Extruded profiles run at 28 curve segments and cylinders at 22-32, which
is what keeps the radiused hull corners reading as curves.

One caveat when measuring the model: silhouette line buffers are
preallocated to the full edge count and limited with `setDrawRange`, so
their `boundingBox` covers unused slots and is meaningless. Measure
extents over meshes only — a naive `Box3.setFromObject` on the rig reads
2.59 in Z folded where the actual hardware is 1.92.

`edgeData()` welds vertices by position and caches edge→face adjacency per
geometry; `updateSilhouette()` re-tests each edge against the camera in
object space every frame and refills a preallocated buffer via
`setDrawRange`. About 20,700 cached edges across the model, ~1,800
silhouette segments in a typical view, 1.7 ms per frame under swiftshader
with no GPU at all.

**The arm joints are drawn.** Each pivot sits on the real hull flank, not
inside it, so the joint is a visible element: a boss carried by the arm,
centred on the surface so half of it stands proud, straddled above and
below by two clevis plates on the body. Both halves are structural rather
than `detail`, so they survive into SIMPLE. Fold angles are re-derived
whenever a hinge moves, from the arm's deployed polar angle to its stowed
target.

Lines are also kept from dropping out by: fills carrying
`polygonOffsetFactor` 4 so no near-coincident detail loses the depth
test, edge meshes at `renderOrder` 2 so they resolve after every fill,
un-dimmed edge materials in the line-led modes, and crease thresholds
low enough (17-24 degrees) that chamfer and curvature breaks actually
generate edges instead of being smoothed away.

---

## DRONE_CONCEPT_BOARD_TARGET_MATCH

## DRONE_CONCEPT_BOARD_TARGET_MATCH

Target-match study against the generated drone concept board: a dark
technical sheet with thin precise linework, a fixed 3/4 volume, and
particles integrated into both the object and the surrounding field.

Two screen-height sheets:

| Sheet | Views |
|---|---|
| A | `00` hero — technical 3/4, fixed camera |
| B | `01` simple line (+ top/front/side minis) · `02` technical line · `03` line + particle field · `04` particle target |

### Running it

`DRONE_CONCEPT_STANDALONE.html` opens by double-clicking — no server.

The multi-file versions need one, because ES modules are blocked over
`file://` when they *fetch*. An inline `<script type="module">` is fine,
which is exactly what the standalone build exploits: three, the model and
the board are folded into one inline module. Two things that had to be
handled — three's trailing `export{...}` is rewritten into a plain
namespace object, and the board half is wrapped in a block so its names
(`Q`, `D`, …) stop colliding with three's minified top-level ones.

```
python3 -m http.server 8765 --directory prototypes
# → http://127.0.0.1:8765/DRONE_CONCEPT_LIVE.html
```

Three.js r169 is vendored in `vendor/` — the sheet needs no network.

### URL parameters

| Param | Effect |
|---|---|
| `?t=N` | freeze the loop at N seconds and render one deterministic frame |
| `?az=` `?el=` `?dist=` | trim the 3/4 camera (azimuth°, elevation°, distance multiplier) |
| `?morph=0..1` | blend the point cloud toward a demo target |

Motion is a **seamless 24s loop** — `frame(t)` is byte-identical to
`frame(t + 24)`. All particle placement is seeded, so a given `?t`
always reproduces the same pixels. `prefers-reduced-motion` renders a
single static frame.

### Morph-target handle

The point cloud is a fixed-count buffer (22,000 samples, area-weighted
over every surface), so any equal-length target can be blended in:

```js
window.__DRONE.setMorphTarget(float32ArrayOfLength(22000 * 3));
window.__DRONE.resample(n, seed);   // different density
window.__DRONE.render(t);           // redraw a frozen sheet
```

### Notes

- Built on Three.js core only — no addons. The rounded-slab bodywork,
  rotor blades, and the area-weighted surface sampler are hand-rolled
  so the sheet has a single dependency.
- One WebGL context renders every panel as a scissored viewport; each
  panel frames the drone's true projected extent rather than a loose
  bounding sphere.
- Callout leaders are 3D anchors projected into an SVG overlay, so they
  stay attached to the geometry at any panel size.
- The palette is derived from the reference board. There is no committed
  Civarro token file in this repo yet — swap `PALETTE` and the CSS custom
  properties when one lands.

## DRONE_FBX_STANDALONE.html

One file, 8.29 MB, opens by double-click — the FBX board with three, the
loader chain and the 5.57 MB mesh folded in. Built by
`build-fbx-standalone.py`; edit `DRONE_FBX_BOARD.html` and rebuild, never
edit the standalone.

Traps this build hit:

- **`file://` blocks fetches, not modules.** An inline `<script type="module">`
  runs fine from disk, but `FBXLoader.loadAsync("./assets/…")` is a fetch and
  dies on CORS. The mesh travels as base64 and reaches the loader as a blob
  URL via `fbxURL()`.
- **Each vendored module becomes an IIFE returning its namespace**, which is
  what a module scope actually is. Otherwise three's minified internals and
  fflate's collide.
- **`export {gzip as compress}`** means the namespace key is `compress` but the
  binding to read is `gzip`. Reading the key name gives
  `compress is not defined`.
- **The build substitutes the FBX path, not the loader call.** Matching
  `new FBXLoader().loadAsync("…")` literally broke the moment the loader took
  a `LoadingManager` argument: the replace silently no-opped and the standalone
  went back to fetching a file that isn't there. It now matches the path
  string alone and fails loudly if the count isn't 1.
- **Texture short-circuit can't be a filename test.** The FBX's texture
  references don't ship with it, and from a blob they resolve to
  `blob:null/undefined` — no extension to match. The `LoadingManager` sends
  anything that isn't the mesh itself to a 1x1 GIF.
- **A green `__ready` is not a green page.** `__ready` is set in the catch
  handler too, so the load check also asserts `window.__DRONE` exists and the
  stats line is populated.

## Field bands (panel 03)

The grey radial halo is gone. A single monochrome downwash disc read as a
blot under the craft, not as a field the craft sits inside. Panel 03 is now
four coloured orbital ribbons plus fine dust:

- Each band is a ring of concentric passes around its **own off-centre
  focus**, with a fixed tilt, so they cross in depth instead of stacking as
  four flat rings.
- The foci are symmetric about the craft. Push them all one way and the drone
  ends up hanging off the corner of its own field.
- Every band travels along itself and orbits each frame. A static ring reads
  as a drawn circle; a moving one reads as a field.
- Radii are expressed in craft radii (`RAD`), so they follow the mesh if the
  normalisation changes.

## Per-panel orbit

One renderer serves all four panels, so there is no per-panel canvas to hang
OrbitControls on. Each `VIEWS` entry already carries `az`/`el`/`fit`, so drag
and wheel just edit the numbers of whichever panel the pointer is over.

## Harness trap: `viewportSize` is not a Playwright option

`browser.newPage({viewportSize:{...}})` is silently ignored — the key is
`viewport`. Every screenshot in this repo's history taken with the wrong key
ran at the default 1280x720, which is why panel hit-testing appeared to pick
the wrong quadrant. The page was correct; the test was not.
