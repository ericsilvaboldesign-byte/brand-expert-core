#!/usr/bin/env python3
"""Fold the FBX board — three, the loader chain and the mesh — into one file.

Each ES module becomes an IIFE returning its namespace, which is what a
module scope actually is. That keeps three's minified internals, fflate's
and the loader's from ever seeing each other's names.
"""
import re, base64, pathlib
here = pathlib.Path(__file__).parent

def bind_three(src):
    """import {A, B} from 'three'  →  const {A, B} = THREE;"""
    return re.sub(r"import\s*\{([^}]*)\}\s*from\s*['\"]three['\"];",
                  lambda m: "const {" + m.group(1) + "} = THREE;", src)

def strip_imports(src):
    src = re.sub(r"^import\s+\*\s+as\s+\w+\s+from\s+['\"][^'\"]+['\"];\s*$", "", src, flags=re.M)
    src = re.sub(r"^import\s*\{[^}]*\}\s*from\s*['\"]\.[^'\"]+['\"];\s*$", "", src, flags=re.M)
    return src

def module(path, ns_from_exports=False):
    src = (here/path).read_text(encoding="utf-8")
    src = bind_three(src); src = strip_imports(src)
    # pairs of (exported name, local name) — `export {gzip as compress}` means
    # the namespace key is `compress` but the binding to read is `gzip`
    pairs, last_local = [], None
    for m in re.finditer(r"^export\s+(?:var|let|const|function|class)\s+(\w+)", src, re.M):
        pairs.append((m.group(1), m.group(1))); last_local = m.group(1)
    for m in re.finditer(r"^export\s*\{([^}]*)\}\s*;?", src, re.M):
        for part in m.group(1).split(","):
            part = part.strip()
            if not part: continue
            if " as " in part:
                local, name = [x.strip() for x in part.split(" as ")]
            else:
                local = name = part
            pairs.append((name, local)); last_local = local
    src = re.sub(r"^export\s*\{[^}]*\}\s*;?\s*$", "", src, flags=re.M)
    src = re.sub(r"^export\s+", "", src, flags=re.M)
    if ns_from_exports:
        seen, fields = set(), []
        for name, local in pairs:
            if name in seen: continue
            seen.add(name); fields.append(f"{name}:{local}")
        ret = "{" + ",".join(fields) + "}"
    else:
        ret = last_local
    return f"(()=>{{\n{src}\nreturn {ret};\n}})()"

# three: one trailing export block, rewritten into a namespace object
three = (here/"vendor/three.module.min.js").read_text(encoding="utf-8")
m = re.search(r"export\s*\{([^}]*)\}\s*;?\s*$", three)
pairs = []
for item in m.group(1).split(","):
    item = item.strip()
    if not item: continue
    src_, name = ([x.strip() for x in item.split(" as ")] if " as " in item else (item, item))
    pairs.append(f"{name}:{src_}")
three = three[:m.start()] + "const THREE={" + ",".join(pairs) + "};"

chain = (
  "const fflate = "     + module("vendor/jsm/libs/fflate.module.js",  True)  + ";\n"
  "const NURBSUtils = " + module("vendor/jsm/curves/NURBSUtils.js",   True)  + ";\n"
  "const NURBSCurve = " + module("vendor/jsm/curves/NURBSCurve.js")          + ";\n"
  "const FBXLoader = "  + module("vendor/jsm/loaders/FBXLoader.js")          + ";\n"
)

fbx = base64.b64encode((here/"assets/Xiaomi_mi_drone.FBX").read_bytes()).decode()

html = (here/"DRONE_FBX_BOARD.html").read_text(encoding="utf-8")
html = re.sub(r'<script type="importmap">.*?</script>\s*', "", html, flags=re.S)
body = re.search(r'<script type="module">(.*)</script>', html, re.S).group(1)
body = body.replace('import * as THREE from "three";', "")
body = body.replace('import { FBXLoader } from "./vendor/jsm/loaders/FBXLoader.js";', "")
# the mesh travels inside the file, so the loader gets a blob instead of a path.
# Match the path argument alone: the loader's constructor arguments change
# (it now takes a LoadingManager) and a literal match silently no-ops, leaving
# the standalone fetching a file that isn't there.
body, n = re.subn(r'"\./assets/Xiaomi_mi_drone\.FBX"', "fbxURL()", body)
if n != 1:
    raise SystemExit(f"FBX path substitution matched {n} times, expected 1")
helper = """
const FBX_B64 = "%s";
function fbxURL(){
  const raw = atob(FBX_B64), n = raw.length, bytes = new Uint8Array(n);
  for(let i=0;i<n;i++) bytes[i] = raw.charCodeAt(i);
  return URL.createObjectURL(new Blob([bytes], {type:'application/octet-stream'}));
}
""" % fbx

merged = ('<script type="module">\n' + three
          + "\n/* ---- loader chain + board, each module scoped as a module ---- */\n{\n"
          + chain + helper + body + "\n}\n</script>")
html = re.sub(r'<script type="module">.*</script>', lambda _: merged, html, flags=re.S)
html = html.replace("<title>DRONE CONCEPT — FBX BOARD</title>",
                    "<title>DRONE CONCEPT — FBX STANDALONE</title>", 1)

out = here/"DRONE_FBX_STANDALONE.html"
out.write_text(html, encoding="utf-8")
print(f"{out.name}  {len(html)/1024/1024:.2f} MB")
