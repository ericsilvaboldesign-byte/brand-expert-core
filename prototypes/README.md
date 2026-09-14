# prototypes/

Visual-direction prototypes. Working material — not approved output.

| File | What it is |
|---|---|
| `DRONE_MODEL_RIG.html` | The drone as a built, rigged 3D model — named hierarchy, real pivots, ready to animate |
| `DRONE_CONCEPT_BOARD_TARGET_MATCH.html` | Earlier study: the five-view technical concept board |

Both serve from the same vendored `vendor/three.module.min.js`.

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

**One line weight.** Two systems draw lines: `LineSegments`, which the
driver fixes at exactly one device pixel, and the silhouette pass, which
is a filled expansion and therefore whatever width you ask for. They must
agree or the contour reads heavier than the creases. The outline width is
expressed in **pixels**, converted to NDC from the live drawing-buffer
size (`oTexel` uniform, refreshed in `resize()`), and set to 1.0 — the
same weight a `LineSegments` draws. A fixed NDC constant cannot do this:
it changes weight with canvas size and device pixel ratio.

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

ES modules do not load over `file://`, so serve the directory:

```
python3 -m http.server 8765 --directory prototypes
# → http://127.0.0.1:8765/DRONE_CONCEPT_BOARD_TARGET_MATCH.html
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
