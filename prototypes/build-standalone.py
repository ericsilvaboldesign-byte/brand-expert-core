#!/usr/bin/env python3
"""Fold the board, the model and Three into one file that opens from disk.

ES modules are blocked over file:// only when they *fetch*: an inline
<script type="module"> is fine. So everything is inlined and the one
external surface — three's `export{...}` — is rewritten into a plain
namespace object the rest of the code can close over.
"""
import re, pathlib
here = pathlib.Path(__file__).parent

three = (here/"vendor/three.module.min.js").read_text(encoding="utf-8")
m = re.search(r"export\s*\{([^}]*)\}\s*;?\s*$", three)
assert m, "three: no trailing export block"
pairs = []
for item in m.group(1).split(","):
    item = item.strip()
    if not item: continue
    if " as " in item:
        src, name = [x.strip() for x in item.split(" as ")]
    else:
        src = name = item
    pairs.append(f"{name}:{src}")
three = three[:m.start()] + "const THREE={" + ",".join(pairs) + "};"

model = (here/"drone-model.js").read_text(encoding="utf-8")
model = model.replace("export function createDrone(THREE, scene)",
                      "function createDrone(THREE, scene)", 1)

html = (here/"DRONE_CONCEPT_LIVE.html").read_text(encoding="utf-8")
html = re.sub(r'<script type="importmap">.*?</script>\s*', "", html, flags=re.S)
body = re.search(r'<script type="module">(.*)</script>', html, re.S).group(1)
body = body.replace('import * as THREE from "three";', "")
body = body.replace('import { createDrone } from "./drone-model.js";', "")

# three's minified top-level names (Q, D, ...) collide with ours once the
# two share a module scope, so our half lives in its own block
merged = ('<script type="module">\n' + three
          + "\n/* ---- board + model, scoped away from three's minified names ---- */\n{\n"
          + model + "\n" + body + "\n}\n</script>")
# lambda: a plain replacement string would have backslashes in the code read
# as regex escapes
html = re.sub(r'<script type="module">.*</script>', lambda _: merged, html, flags=re.S)
html = html.replace("<title>DRONE CONCEPT — LIVE</title>",
                    "<title>DRONE CONCEPT — STANDALONE</title>", 1)
html = html.replace("  DRONE_CONCEPT_LIVE", "  DRONE_CONCEPT_STANDALONE\n  Single file: open it straight from disk, no server needed.", 1)

out = here/"DRONE_CONCEPT_STANDALONE.html"
out.write_text(html, encoding="utf-8")
print(f"{out.name}  {len(html)/1024/1024:.2f} MB  ·  {len(pairs)} three exports bound")
