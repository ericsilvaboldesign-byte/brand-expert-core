# prototypes/

Visual-direction prototypes. Working material — not approved output.

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
