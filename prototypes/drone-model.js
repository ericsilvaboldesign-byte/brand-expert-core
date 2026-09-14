/* drone-model.js — the rigged drone, its line engine, and the four board
   languages. One source of truth: both the workbench viewer and the
   concept board import this. Host supplies THREE and a scene. */

export function createDrone(THREE, scene){

/* ════════════════════════════════════════════════════════════════
   GEOMETRY TOOLING
   ════════════════════════════════════════════════════════════════ */

/* Loft a closed section along a span — this is what makes the rotor
   blades and the arm tubes read as designed parts rather than boxes. */
function loft(stations, sectionPts){
  const M = sectionPts, N = stations.length;
  const pos = [], idx = [];
  for(const st of stations){
    const { x, y, z, chord, thick, twist, ry=0 } = st;
    const c = Math.cos(twist), s = Math.sin(twist);
    for(let j=0;j<M;j++){
      const a = (j/M)*Math.PI*2;
      // flattened airfoil-ish section: chord along local Z, thickness along Y
      let sz = Math.cos(a)*0.5*chord;
      let sy = Math.sin(a)*0.5*thick*(0.62+0.38*Math.abs(Math.sin(a)));
      const ty = sy*c - sz*s, tz = sy*s + sz*c;       // twist about the span axis
      const cx = Math.cos(ry), sx = Math.sin(ry);      // optional yaw of the section
      pos.push(x + tz*sx*0, y + ty, z + tz);
    }
  }
  for(let i=0;i<N-1;i++) for(let j=0;j<M;j++){
    const a=i*M+j, b=i*M+(j+1)%M, c=(i+1)*M+j, d=(i+1)*M+(j+1)%M;
    idx.push(a,c,b, b,c,d);
  }
  const capS=pos.length/3, capE=capS+1;
  const p0=stations[0], p1=stations[N-1];
  pos.push(p0.x,p0.y,p0.z, p1.x,p1.y,p1.z);
  for(let j=0;j<M;j++){ idx.push(capS,(j+1)%M,j); idx.push(capE,(N-1)*M+j,(N-1)*M+(j+1)%M); }
  const g=new THREE.BufferGeometry();
  g.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));
  g.setIndex(idx); g.computeVertexNormals(); return g;
}

/* Plan profile: a rounded rectangular slab with a slight nose taper.
   The reference body is a BOX with radiused corners and chamfered top and
   bottom edges — not a teardrop. Half-width is held flat down the flanks
   so the silhouette stays rectilinear. */
function mirrorX(top){
  const s = new THREE.Shape();
  s.moveTo(top[0][0], 0);
  for(const [x,z] of top) s.lineTo(x,z);
  for(let i=top.length-1;i>=0;i--) s.lineTo(top[i][0], -top[i][1]);
  s.lineTo(top[0][0], 0);
  return s;
}
function hullShape(){
  return mirrorX([
    [-1.15, 0.00],[-1.14, 0.22],[-1.10, 0.36],[-1.01, 0.47],[-0.90, 0.535],
    [-0.74, 0.560],[-0.20, 0.560],[ 0.34, 0.560],[ 0.66, 0.552],
    [ 0.88, 0.530],[ 1.02, 0.492],[ 1.11, 0.430],[ 1.16, 0.330],
    [ 1.18, 0.200],[ 1.185,0.00],
  ]);
}
function roundRect(w,h,r){
  const s=new THREE.Shape(), x=w/2, y=h/2;
  s.moveTo(-x+r,-y); s.lineTo(x-r,-y); s.quadraticCurveTo(x,-y,x,-y+r);
  s.lineTo(x,y-r);   s.quadraticCurveTo(x,y,x-r,y);
  s.lineTo(-x+r,y);  s.quadraticCurveTo(-x,y,-x,y-r);
  s.lineTo(-x,-y+r); s.quadraticCurveTo(-x,-y,-x+r,-y);
  return s;
}
/* prismatic bar running along +X — clean silhouette edges, no facet seams */
function barGeometry(len, width, height){
  const g = new THREE.BoxGeometry(len, height, width);   // plain prism: two lines
  g.translate(len/2, 0, 0); return g;                    // along each face, no bevel band
}
function extrude(shape, depth, bev){
  const g = new THREE.ExtrudeGeometry(shape,{ depth:depth-bev*2, bevelEnabled:true,
    bevelSize:bev, bevelThickness:bev, bevelSegments:3, curveSegments:28, steps:1 });
  g.rotateX(-Math.PI/2); g.center(); g.computeVertexNormals(); return g;
}

/* ════════════════════════════════════════════════════════════════
   MATERIALS — four board languages plus a solid working mode
   ════════════════════════════════════════════════════════════════ */
const MAT = {
  shell : new THREE.MeshLambertMaterial({ color:0x2c383e }),
  dark  : new THREE.MeshLambertMaterial({ color:0x1b2428 }),
  trim  : new THREE.MeshLambertMaterial({ color:0x3e4e55 }),
  glass : new THREE.MeshLambertMaterial({ color:0x121b1f }),
  accent: new THREE.MeshBasicMaterial ({ color:0xf5822e }),
  /* technical-line fill: near-black so the fill occludes lines behind it,
     which is what produces a true hidden-line drawing */
  tech  : new THREE.MeshLambertMaterial({ color:0x101619 }),
  hollow: new THREE.MeshBasicMaterial ({ color:0x0a0c0b }),
};
for(const m of Object.values(MAT)){ m.polygonOffset=true; m.polygonOffsetFactor=4.0;
  m.polygonOffsetUnits=4.0; m.side=THREE.DoubleSide; }
/* ── true silhouette edges ────────────────────────────────────────────
   An inverted hull cannot hold one line weight: it is a filled expansion,
   so the width you actually see is however much back face emerges past the
   front faces, and that grows wherever the surface curves away gently. A
   sharp edge gives 1px, a motor can gives noticeably more.

   Instead, find the real silhouette: an edge whose two adjacent faces
   disagree about facing the camera. Those are drawn as LineSegments with
   the same material as the creases, so every line in the drawing is one
   device pixel, everywhere, by construction. */
const EDGE_CACHE = new Map();
function edgeData(geo){
  if(EDGE_CACHE.has(geo.uuid)) return EDGE_CACHE.get(geo.uuid);
  const pos=geo.attributes.position, idx=geo.index;
  const n = idx ? idx.count : pos.count;
  const key=new Map(), vx=[], remap=new Int32Array(pos.count);
  for(let i=0;i<pos.count;i++){                       // weld by position
    const x=pos.getX(i), y=pos.getY(i), z=pos.getZ(i);
    const k=`${Math.round(x*1e4)},${Math.round(y*1e4)},${Math.round(z*1e4)}`;
    let id=key.get(k);
    if(id===undefined){ id=vx.length/3; key.set(k,id); vx.push(x,y,z); }
    remap[i]=id;
  }
  const fn=[], fv=[], eMap=new Map(), ed=[];
  const A=new THREE.Vector3(),B=new THREE.Vector3(),C=new THREE.Vector3(),
        ab=new THREE.Vector3(),ac=new THREE.Vector3(),nr=new THREE.Vector3();
  for(let i=0,f=0;i<n;i+=3,f++){
    const a=remap[idx?idx.getX(i):i], b=remap[idx?idx.getX(i+1):i+1], c=remap[idx?idx.getX(i+2):i+2];
    A.fromArray(vx,a*3); B.fromArray(vx,b*3); C.fromArray(vx,c*3);
    nr.crossVectors(ab.subVectors(B,A), ac.subVectors(C,A));   // unnormalised: sign only
    fn.push(nr.x,nr.y,nr.z); fv.push(a);
    for(const [u,v] of [[a,b],[b,c],[c,a]]){
      const k = u<v ? u*1e6+v : v*1e6+u;
      const e = eMap.get(k);
      if(e===undefined){ eMap.set(k, ed.length/4); ed.push(u,v,f,-1); }
      else ed[e*4+3]=f;
    }
  }
  const d={ vx:new Float32Array(vx), fn:new Float32Array(fn),
            fv:new Int32Array(fv), ed:new Int32Array(ed), count:ed.length/4 };
  EDGE_CACHE.set(geo.uuid,d); return d;
}

const _inv=new THREE.Matrix4(), _camObj=new THREE.Vector3();
function updateSilhouette(m, cam){
  const d=m.userData.eData, out=m.userData.silArr, sil=m.userData.sil;
  _inv.copy(m.matrixWorld).invert();
  _camObj.copy(cam.position).applyMatrix4(_inv);
  const {vx,fn,fv,ed,count}=d; let w=0;
  const cx=_camObj.x, cy=_camObj.y, cz=_camObj.z;
  for(let e=0;e<count;e++){
    const o=e*4, f0=ed[o+2], f1=ed[o+3];
    if(f1<0) continue;                                 // open border: EdgesGeometry has it
    const p0=fv[f0]*3, p1=fv[f1]*3, n0=f0*3, n1=f1*3;
    const s0=fn[n0]*(vx[p0]-cx)+fn[n0+1]*(vx[p0+1]-cy)+fn[n0+2]*(vx[p0+2]-cz);
    const s1=fn[n1]*(vx[p1]-cx)+fn[n1+1]*(vx[p1+1]-cy)+fn[n1+2]*(vx[p1+2]-cz);
    if((s0>0)===(s1>0)) continue;                      // both faces agree: not a silhouette
    const a=ed[o]*3, b=ed[o+1]*3;
    out[w++]=vx[a]; out[w++]=vx[a+1]; out[w++]=vx[a+2];
    out[w++]=vx[b]; out[w++]=vx[b+1]; out[w++]=vx[b+2];
  }
  sil.geometry.setDrawRange(0, w/3);
  sil.geometry.attributes.position.needsUpdate = true;
}

const EDGE = {
  solid : new THREE.LineBasicMaterial({ color:0xb9cbc6, transparent:true, opacity:0.42 }),
  tech  : new THREE.LineBasicMaterial({ color:0xf4f8f6 }),
  line  : new THREE.LineBasicMaterial({ color:0xffffff }),
};

/* round dot sprite, generated at runtime — no external asset */
const DOT = (()=>{ const c=document.createElement("canvas"); c.width=c.height=64;
  const x=c.getContext("2d"), g=x.createRadialGradient(32,32,0,32,32,32);
  g.addColorStop(0,"rgba(255,255,255,1)"); g.addColorStop(0.45,"rgba(255,255,255,0.9)");
  g.addColorStop(1,"rgba(255,255,255,0)");
  x.fillStyle=g; x.beginPath(); x.arc(32,32,32,0,Math.PI*2); x.fill();
  const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t; })();

const parts = [];
/* `flat` marks a part with no volume — a single surface whose EdgesGeometry
   boundary IS the drawing. Flat parts get no silhouette pass: their normal is
   constant, so an inverted hull would slide the whole sheet sideways instead
   of expanding it. */
function part(geo, mat, parent, name, edgeAngle=26, detail=false, flat=false){
  const m = new THREE.Mesh(geo, mat); m.name = name; m.userData.detail = detail;
  const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, edgeAngle), EDGE.solid);
  e.renderOrder = 2;                       // lines resolve after every fill
  m.add(e); m.userData.edges = e;
  if(!flat){
    const d = edgeData(geo);
    const arr = new Float32Array(d.count*6);
    const sg = new THREE.BufferGeometry();
    sg.setAttribute("position", new THREE.BufferAttribute(arr,3).setUsage(THREE.DynamicDrawUsage));
    sg.setDrawRange(0,0);
    const sil = new THREE.LineSegments(sg, EDGE.solid);
    sil.frustumCulled = false; sil.renderOrder = 2; sil.visible = false;
    m.add(sil);
    m.userData.eData = d; m.userData.silArr = arr; m.userData.sil = sil;
  } m.userData.mat = mat;
  parent.add(m); parts.push(m); return m;
}

/* ════════════════════════════════════════════════════════════════
   THE MODEL
   ════════════════════════════════════════════════════════════════ */
const root = new THREE.Group();  root.name = "root";
const hull = new THREE.Group();  hull.name = "hull";  root.add(hull);

/* — fuselage: one chamfered slab, split by a shallow parting band ——— */
const HULL_BEVEL = 0.045;
const BODY = part(extrude(hullShape(), 0.50, HULL_BEVEL), MAT.shell, hull, "hull.body", 22);

/* recessed top panel — the large rounded rectangle on the reference deck */
const deck = part(extrude(roundRect(1.62,0.80,0.24), 0.045, 0.010), MAT.dark, hull, "hull.deckPanel", 16);
deck.position.set(-0.06, 0.238, 0);
const deckIn = part(extrude(roundRect(1.50,0.68,0.20), 0.030, 0.008), MAT.glass, hull, "hull.deckInner", 16, true);
deckIn.position.set(-0.06, 0.252, 0);

/* the hull's own bevel already draws the horizontal break along the flank —
   a separate parting band sat inside the solid and drew nothing, so it's gone */
const HULL_FLANK = 0.560 + HULL_BEVEL;     // extrude's bevel pushes the flank OUT

/* — camera / sensor module at the front underside ————————— */
const gYaw = new THREE.Group(); gYaw.name="gimbal.yaw"; gYaw.position.set(1.05,-0.375,0); hull.add(gYaw);
const gRoll = new THREE.Group(); gRoll.name="gimbal.roll"; gYaw.add(gRoll);
const gPitch = new THREE.Group(); gPitch.name="gimbal.pitch"; gRoll.add(gPitch);
part(extrude(roundRect(0.245,0.265,0.075), 0.195, 0.024), MAT.dark, gPitch, "gimbal.housing", 24);
const yoke = part(extrude(roundRect(0.155,0.265,0.05), 0.135, 0.018), MAT.trim, hull, "gimbal.mount", 24, true);
yoke.position.set(1.045,-0.255,0);
const barrel = part(new THREE.CylinderGeometry(0.082,0.088,0.062,26), MAT.trim, gPitch, "gimbal.barrel", 30);
barrel.rotation.z = Math.PI/2; barrel.position.set(0.142,0,0);
const iris = part(new THREE.CylinderGeometry(0.049,0.049,0.026,22), MAT.glass, gPitch, "gimbal.iris", 30, true);
iris.rotation.z = Math.PI/2; iris.position.set(0.176,0,0);
const ring = part(new THREE.TorusGeometry(0.054,0.005,6,24), MAT.accent, gPitch, "gimbal.ring", 90, true);
ring.rotation.y = Math.PI/2; ring.position.set(0.181,0,0);
ring.userData.edges.visible = false;

/* — forward sensor pips and flank ventilation slats ——————— */
for(const z of [-0.26,0.26]){
  const s2 = part(new THREE.BoxGeometry(0.048,0.052,0.072), MAT.glass, hull, "hull.sensor", 20, true);
  s2.position.set(1.246, -0.045, z*0.58);
}
for(const side of [-1,1]) for(let i=0;i<6;i++){
  const v = part(new THREE.BoxGeometry(0.205,0.024,0.026), MAT.trim, hull, "hull.louvre", 30, true);
  v.position.set(-0.06 - i*0.082, 0.055, side*(HULL_FLANK+0.013));
}
const hatch = part(extrude(roundRect(0.46,0.54,0.10), 0.040, 0.010), MAT.trim, hull, "hull.hatch", 16, true);
hatch.position.set(-0.80, -0.243, 0);      // proud of the underside
const beacon = part(new THREE.SphereGeometry(0.028,12,12), MAT.accent, hull, "hull.beacon", 90, true);
beacon.position.set(-1.05, 0.25, 0);
beacon.userData.edges.visible = false;

/* — rotor blade: a flat planform. One closed outline is the whole drawing;
     giving it thickness would draw three parallel lines and read as a slab. */
function bladeShape(){
  const s = new THREE.Shape();
  s.moveTo(0.070,-0.030);
  s.bezierCurveTo(0.34,-0.064, 0.76,-0.060, 1.00,-0.032);
  s.quadraticCurveTo(1.15,-0.014, 1.15, 0.001);          // tip
  s.quadraticCurveTo(1.15, 0.019, 1.00, 0.036);
  s.bezierCurveTo(0.76, 0.062, 0.34, 0.056, 0.070, 0.026);
  s.quadraticCurveTo(0.026, 0.015, 0.026, 0.000);        // root
  s.quadraticCurveTo(0.026,-0.016, 0.070,-0.030);
  return s;
}
const BLADE = new THREE.ShapeGeometry(bladeShape(), 34);
BLADE.rotateX(-Math.PI/2);                               // lay flat in the disc

/* — arms: flat rectangular bars off the body corners ——————— */
const ARM_DEF = [
  { id:"FL", hinge:[ 0.72, 0.005,  0.600], tip:[ 1.60, 0.03,  1.14], foldDeg:-140, foot:true  },
  { id:"FR", hinge:[ 0.72, 0.005, -0.600], tip:[ 1.60, 0.03, -1.14], foldDeg: 140, foot:true  },
  { id:"RL", hinge:[-0.66,-0.075,  0.615], tip:[-1.66,-0.05,  1.20], foldDeg: 142, foot:false },
  { id:"RR", hinge:[-0.66,-0.075, -0.615], tip:[-1.66,-0.05, -1.20], foldDeg:-142, foot:false },
];
const arms = {};
for(const def of ARM_DEF){
  const hinge = new THREE.Vector3(...def.hinge), tip = new THREE.Vector3(...def.tip);
  const g = new THREE.Group(); g.name = `arm.${def.id}`; g.position.copy(hinge); hull.add(g);
  const local = tip.clone().sub(hinge), len = local.length();

  const tube = part(barGeometry(len, 0.150, 0.096), MAT.shell, g, `arm.${def.id}.tube`, 30);
  const o = new THREE.Object3D(); o.lookAt(local); o.rotateY(-Math.PI/2);
  tube.quaternion.copy(o.quaternion);

  /* ── the arm-to-body joint, drawn ──────────────────────────────────
     pivot boss = the moving half, carried by the arm and centred on the
     hull flank so half of it stands proud; clevis plates = the fixed half
     on the body, straddling the boss above and below. Both are structural,
     not detail, so they survive into SIMPLE. */
  const ang = -Math.atan2(local.z, local.x);
  const ux = local.x/len, uz = local.z/len;              // unit vector along the arm
  /* root collar: the arm thickens where it meets the hinge */
  const col = part(new THREE.BoxGeometry(0.115,0.126,0.174), MAT.trim, g, `arm.${def.id}.collar`, 30, true);
  col.rotation.y = ang; col.position.set(ux*0.082, 0, uz*0.082);
  /* pivot boss — the moving half, turning inside the fork */
  part(new THREE.CylinderGeometry(0.070,0.070,0.150,22), MAT.trim, g, `arm.${def.id}.pivot`, 30, true);
  /* fork plates on the body — the fixed half, straddling the boss */
  for(const sy of [-1,1]){
    const br = part(new THREE.BoxGeometry(0.19,0.036,0.132), MAT.trim, hull, `shoulder.${def.id}`, 30, true);
    br.position.set(hinge.x - 0.02, hinge.y + sy*0.094, hinge.z);
    br.rotation.y = ang;
  }
  /* the axle itself, standing proud of both plates — the technical tell */
  const pin = part(new THREE.CylinderGeometry(0.026,0.026,0.300,12), MAT.trim, hull, `pin.${def.id}`, 30, true);
  pin.position.set(hinge.x - 0.02, hinge.y, hinge.z);

  const motor = new THREE.Group(); motor.name=`motor.${def.id}`; motor.position.copy(local); g.add(motor);
  /* ── rotor head: how the propeller attaches to the arm ─────────────
     arm end → mount collar → stator can (fixed) → bell → hub plate →
     blade root clamps → retaining nut. Everything from the bell up turns
     with the blades, which is also what the fold alignment drives. */
  const mount = part(new THREE.CylinderGeometry(0.104,0.114,0.050,26), MAT.trim, motor, `motor.${def.id}.mount`, 30, true);
  mount.position.y = 0.004;
  const can = part(new THREE.CylinderGeometry(0.126,0.134,0.096,32), MAT.dark, motor, `motor.${def.id}.can`, 30);
  can.position.y = 0.077;
  for(let i=0;i<8;i++){                                  // stator slots
    const sl = part(new THREE.BoxGeometry(0.015,0.070,0.020), MAT.trim, motor, "motor.slot", 30, true);
    const a=i/8*Math.PI*2; sl.position.set(Math.cos(a)*0.128,0.077,Math.sin(a)*0.128); sl.rotation.y=-a;
  }

  const hub = new THREE.Group(); hub.name=`hub.${def.id}`; hub.position.y=0.125; motor.add(hub);
  const bell = part(new THREE.CylinderGeometry(0.098,0.110,0.060,28), MAT.trim, hub, `hub.${def.id}.bell`, 30);
  bell.position.y = 0.030;
  const plate = part(new THREE.CylinderGeometry(0.072,0.072,0.015,24), MAT.trim, hub, `hub.${def.id}.plate`, 30, true);
  plate.position.y = 0.068;
  const nut = part(new THREE.CylinderGeometry(0.029,0.033,0.030,12), MAT.trim, hub, `hub.${def.id}.nut`, 30, true);
  nut.position.y = 0.091;
  for(const a of [0, Math.PI]){
    const clamp = part(new THREE.BoxGeometry(0.082,0.028,0.050), MAT.trim, hub, `hub.${def.id}.clamp`, 30, true);
    clamp.position.set(Math.cos(-a)*0.070, 0.076, -Math.sin(-a)*0.070); clamp.rotation.y = a;
    const bl = part(BLADE, MAT.shell, hub, `blade.${def.id}`, 30, false, true);
    bl.position.y = 0.076; bl.rotation.set(0.085, a, 0);  // flat planform, slight pitch
  }

  if(def.foot){                                    // short post + flat pad
    const leg = part(new THREE.BoxGeometry(0.078,0.24,0.070), MAT.trim, g, `leg.${def.id}`, 30);
    leg.position.copy(local).setY(local.y - 0.125);
    const pad = part(new THREE.BoxGeometry(0.26,0.055,0.145), MAT.dark, g, `pad.${def.id}`, 30);
    pad.position.copy(local).setY(local.y - 0.272);
  }

  arms[def.id] = { group:g, motor, hub,
    axis:new THREE.Vector3(0,1,0),
    angle:THREE.MathUtils.degToRad(def.foldDeg),
    dir:(def.id==="FL"||def.id==="RR") ? 1 : -1,
    rest:g.quaternion.clone() };
}

/* ════════════════════════════════════════════════════════════════
   SEAMS — where a fitting enters the fuselage
   ════════════════════════════════════════════════════════════════
   There is no CSG here, so a bracket that penetrates the hull simply
   vanishes into the solid and the join draws nothing. A technical
   drawing needs that line. These are the real mesh-mesh intersection
   curves, computed once from the deployed pose and drawn as ordinary
   LineSegments, so they carry the same one-pixel weight as everything
   else. Only fittings fixed to the body qualify: their seam cannot
   change. (The arm pivot is a cylinder centred on its own hinge axis,
   so rotating it leaves the seam invariant — it counts.) */
const _E1=new THREE.Vector3(),_E2=new THREE.Vector3(),_PV=new THREE.Vector3(),
      _TV=new THREE.Vector3(),_QV=new THREE.Vector3(),_DR=new THREE.Vector3();
function edgeHitsTri(o,e,a,b,c,out){
  _DR.subVectors(e,o); _E1.subVectors(b,a); _E2.subVectors(c,a);
  _PV.crossVectors(_DR,_E2); const det=_E1.dot(_PV);
  if(Math.abs(det)<1e-12) return false;
  const inv=1/det; _TV.subVectors(o,a);
  const u=_TV.dot(_PV)*inv; if(u<-1e-7||u>1+1e-7) return false;
  _QV.crossVectors(_TV,_E1);
  const v=_DR.dot(_QV)*inv; if(v<-1e-7||u+v>1+1e-7) return false;
  const t=_E2.dot(_QV)*inv; if(t<0||t>1) return false;
  out.copy(o).addScaledVector(_DR,t); return true;
}
function worldTris(mesh){
  mesh.updateWorldMatrix(true,false);
  const pos=mesh.geometry.attributes.position, idx=mesh.geometry.index;
  const n=idx?idx.count:pos.count, out=[];
  const v=new THREE.Vector3();
  for(let i=0;i<n;i+=3){
    const tri=[];
    for(let k=0;k<3;k++){
      const j=idx?idx.getX(i+k):i+k;
      v.fromBufferAttribute(pos,j).applyMatrix4(mesh.matrixWorld);
      tri.push(v.clone());
    }
    const bb=new THREE.Box3().setFromPoints(tri);
    out.push({tri,bb});
  }
  return out;
}
function seamCurve(fitting, solid){
  const A=worldTris(fitting), B=worldTris(solid);
  const box=new THREE.Box3(); for(const t of A) box.union(t.bb);
  box.expandByScalar(1e-3);
  const Bn=B.filter(t=>t.bb.intersectsBox(box));      // prefilter: tiny slice of hull
  const pts=[], h=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),
                   new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
  for(const ta of A) for(const tb of Bn){
    if(!ta.bb.intersectsBox(tb.bb)) continue;
    let n=0;
    for(let k=0;k<3&&n<6;k++)
      if(edgeHitsTri(ta.tri[k],ta.tri[(k+1)%3],tb.tri[0],tb.tri[1],tb.tri[2],h[n])) n++;
    for(let k=0;k<3&&n<6;k++)
      if(edgeHitsTri(tb.tri[k],tb.tri[(k+1)%3],ta.tri[0],ta.tri[1],ta.tri[2],h[n])) n++;
    if(n<2) continue;
    if(h[0].distanceToSquared(h[1])<1e-10) continue;
    pts.push(h[0].x,h[0].y,h[0].z, h[1].x,h[1].y,h[1].z);
  }
  return pts;
}

/* A seam belongs to the deepest node both parts hang from: that is the
   frame in which their relative pose is fixed, so the curve stays correct
   as the rig moves. pin+fork share the hull; collar+tube share the arm;
   plate+bell share the hub. Coaxial pairs (pin/pivot, can/bell) are
   invariant under the rotation between them, so their common ancestor
   is enough. */
function commonAncestor(a,b){
  const chain=new Set(); for(let n=a;n;n=n.parent) chain.add(n);
  for(let n=b;n;n=n.parent) if(chain.has(n)) return n;
  return scene;
}

const seams = [];
{
  root.updateMatrixWorld(true);
  const P  = n => parts.find(p=>p.name===n);
  const PA = n => parts.filter(p=>p.name===n);
  const pairs = [];

  for(const f of parts.filter(p =>
        /^shoulder\.|^pin\.|^gimbal\.mount$|^hull\.sensor$|^hull\.hatch$/.test(p.name)))
    pairs.push([f, BODY]);

  for(const id of ["FL","FR","RL","RR"]){
    const pin=P(`pin.${id}`), pivot=P(`arm.${id}.pivot`), collar=P(`arm.${id}.collar`),
          tube=P(`arm.${id}.tube`), mount=P(`motor.${id}.mount`), can=P(`motor.${id}.can`),
          bell=P(`hub.${id}.bell`), plate=P(`hub.${id}.plate`), nut=P(`hub.${id}.nut`),
          leg=P(`leg.${id}`), pad=P(`pad.${id}`);
    for(const fk of PA(`shoulder.${id}`)) pairs.push([pin, fk]);
    pairs.push([pin,pivot],[pivot,BODY],[collar,tube],[pivot,collar],
               [mount,tube],[can,mount],[bell,can],[plate,bell],[nut,plate]);
    for(const cl of PA(`hub.${id}.clamp`)) pairs.push([cl, plate]);
    for(const sl of PA("motor.slot")) if(sl.parent===can.parent) pairs.push([sl, can]);
    if(leg&&pad) pairs.push([leg,tube],[pad,leg]);
  }

  const byParent = new Map();
  for(const [a,b] of pairs){
    if(!a||!b) continue;
    const pts = seamCurve(a,b);
    if(!pts.length) continue;
    const par = commonAncestor(a,b);
    if(!byParent.has(par)) byParent.set(par, []);
    byParent.get(par).push(...pts);
  }
  let total=0;
  for(const [par, pts] of byParent){
    const v=new THREE.Vector3(), local=[];
    par.updateWorldMatrix(true,false);
    for(let i=0;i<pts.length;i+=3){
      v.set(pts[i],pts[i+1],pts[i+2]); par.worldToLocal(v);
      local.push(v.x,v.y,v.z);
    }
    const g=new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(local,3));
    const ls=new THREE.LineSegments(g, EDGE.tech);
    ls.renderOrder=2; ls.frustumCulled=false;
    par.add(ls); seams.push(ls); total += local.length/6;
  }
  console.log("seam segments:", total, "from", pairs.length, "pairs across",
              byParent.size, "frames");
}

/* ════════════════════════════════════════════════════════════════
   RIG API
   ════════════════════════════════════════════════════════════════ */
const state = { fold:0, rpm:0, pan:0, tilt:0, alt:0, pitch:0, roll:0, yaw:0, spin:0 };
const _q = new THREE.Quaternion();

/* hub rotation = spin + a fold-alignment offset that counter-rotates the
   disc as the arm swings, so a stowed drone has its blades along the body */
function applyHubs(){
  const e = state.fold*state.fold*(3-2*state.fold);
  for(const k in arms){ const a=arms[k];
    a.hub.rotation.y = state.spin*a.dir - a.angle*e; }
}

const rig = {
  setFold(t){
    state.fold = THREE.MathUtils.clamp(t,0,1);
    const e = state.fold*state.fold*(3-2*state.fold);         // smoothstep
    for(const k in arms){ const a=arms[k];
      a.group.quaternion.copy(a.rest).multiply(_q.setFromAxisAngle(a.axis, a.angle*e)); }
    applyHubs();
  },
  setRotor(rpm){ state.rpm = Math.max(0,rpm); },
  setGimbal(pan,tilt){
    state.pan = pan; state.tilt = tilt;
    gYaw.rotation.y   = THREE.MathUtils.degToRad(pan);
    gPitch.rotation.z = THREE.MathUtils.degToRad(tilt);
  },
  setAttitude(pitch,roll,yaw){
    state.pitch=pitch; state.roll=roll; state.yaw=yaw;
    root.rotation.set(THREE.MathUtils.degToRad(roll),THREE.MathUtils.degToRad(yaw),
                      THREE.MathUtils.degToRad(pitch),"YZX");
  },
  setAltitude(m){ state.alt = m; root.position.y = m; },
  advance(dt){ state.spin += state.rpm/60*Math.PI*2*dt; applyHubs(); },
  seek(t){ state.spin = state.rpm/60*Math.PI*2*t; applyHubs(); },
  state, arms, root, hull, gimbal:{ yaw:gYaw, roll:gRoll, pitch:gPitch },
};
rig.setFold(0); rig.setGimbal(0,0);

/* ════════════════════════════════════════════════════════════════
   SCENE
   ════════════════════════════════════════════════════════════════ */
scene.add(root);
scene.add(new THREE.AmbientLight(0x2b3940, 0.85));
const key  = new THREE.DirectionalLight(0xffffff, 2.05); key.position.set( 3.4, 5.6, 3.4); scene.add(key);
const fill = new THREE.DirectionalLight(0x9ec6d6, 0.75); fill.position.set(-4.4, 1.2,-3.6); scene.add(fill);
/* two rims read the silhouette against the dark field without any gloss */
const rimL = new THREE.DirectionalLight(0xbfe4f2, 1.35); rimL.position.set(-3.2, 2.6, 4.4); scene.add(rimL);
const rimR = new THREE.DirectionalLight(0x9fb9c4, 1.05); rimR.position.set( 4.0, 1.4,-3.2); scene.add(rimR);
const under= new THREE.DirectionalLight(0x3a5a68, 0.45); under.position.set( 0,  -4.0, 1.5); scene.add(under);

root.updateMatrixWorld(true);
const BOX = new THREE.Box3().setFromObject(root);
const SIZE = BOX.getSize(new THREE.Vector3());
const RAD  = BOX.getBoundingSphere(new THREE.Sphere()).radius;

/* ── environmental field: radial ground streaks + a surrounding dome,
      the dotted halo the object sits inside on board panel 03 ── */
const FIELD_N = 6800, RING = Math.floor(FIELD_N*0.70);
const fBase = new Float32Array(FIELD_N*3), fLive = new Float32Array(FIELD_N*3);
const fPh   = new Float32Array(FIELD_N);
{ let s=9; const rnd=()=>((s=(s*1664525+1013904223)>>>0)/4294967296);
  for(let i=0;i<FIELD_N;i++){
    let th,r,y;
    if(i<RING){                                    // snap onto rays → streaks
      const ray=Math.floor(rnd()*64);
      th = ray/64*Math.PI*2 + (rnd()-0.5)*0.014;
      r  = RAD*(0.28+Math.pow(rnd(),0.62)*1.00);
      y  = -0.80 + (rnd()-0.5)*0.09 + Math.pow(r/RAD,2)*0.10;
    }else{                                         // sparse dome
      const u=rnd()*2-1, sq=Math.sqrt(1-u*u);
      th = rnd()*Math.PI*2;
      r  = RAD*(0.58+Math.pow(rnd(),0.5)*0.60)*(sq*0.55+0.55);
      y  = u*RAD*0.40 - 0.04;
    }
    fBase[i*3]=Math.cos(th)*r; fBase[i*3+1]=y; fBase[i*3+2]=Math.sin(th)*r*0.96;
    fPh[i]=rnd()*Math.PI*2;
  } fLive.set(fBase); }
const fieldGeo = new THREE.BufferGeometry();
fieldGeo.setAttribute("position", new THREE.BufferAttribute(fLive,3));
const field = new THREE.Points(fieldGeo, new THREE.PointsMaterial({
  size:0.022, map:DOT, color:0x9caaa4, transparent:true, opacity:0.62, depthWrite:false }));
field.visible=false; scene.add(field);

/* sparse colour accents — the only saturation in the field language */
const ACC = [
  [-1.50, 0.58, 0.92, 0xe055c0],[-1.68, 0.36, 0.70, 0xe055c0],
  [ 0.50, 0.98,-0.28, 0x3fd2e0],[ 0.26, 0.76,-0.08, 0x3fd2e0],
  [ 1.38,-0.66,-0.52, 0xf5822e],[ 1.14,-0.88,-0.18, 0xf5822e],
  [ 1.80, 0.16, 1.48, 0xa8e04a],[ 1.46, 0.02, 1.72, 0xa8e04a],
  [-1.04,-0.50, 1.28, 0xa8e04a],[ 0.08, 1.18, 0.42, 0x3fd2e0],
];
const accGeo = new THREE.BufferGeometry();
accGeo.setAttribute("position", new THREE.Float32BufferAttribute(ACC.flatMap(a=>a.slice(0,3)),3));
accGeo.setAttribute("color", new THREE.Float32BufferAttribute(
  ACC.flatMap(a=>{const c=new THREE.Color(a[3]); return [c.r,c.g,c.b];}),3));
const accents = new THREE.Points(accGeo, new THREE.PointsMaterial({
  size:0.080, map:DOT, vertexColors:true, transparent:true, opacity:0.95, depthWrite:false }));
accents.visible=false; scene.add(accents);

/* surface point cloud, area-weighted — the morph target handle */
function sampleSurface(meshes,count,seed=7){
  let s=seed>>>0; const rnd=()=>((s=(s*1664525+1013904223)>>>0)/4294967296);
  const tri=[],cdf=[]; let total=0;
  const A=new THREE.Vector3(),B=new THREE.Vector3(),C=new THREE.Vector3(),
        ab=new THREE.Vector3(),ac=new THREE.Vector3();
  for(const m of meshes){
    m.updateWorldMatrix(true,false);
    const p=m.geometry.attributes.position, ix=m.geometry.index;
    const n=ix?ix.count:p.count;
    for(let i=0;i<n;i+=3){
      const a=ix?ix.getX(i):i,b=ix?ix.getX(i+1):i+1,c=ix?ix.getX(i+2):i+2;
      A.fromBufferAttribute(p,a).applyMatrix4(m.matrixWorld);
      B.fromBufferAttribute(p,b).applyMatrix4(m.matrixWorld);
      C.fromBufferAttribute(p,c).applyMatrix4(m.matrixWorld);
      const ar=ab.subVectors(B,A).cross(ac.subVectors(C,A)).length()*0.5;
      if(ar<=0) continue; total+=ar; cdf.push(total);
      tri.push(A.x,A.y,A.z,B.x,B.y,B.z,C.x,C.y,C.z);
    }
  }
  const out=new Float32Array(count*3);
  for(let k=0;k<count;k++){
    const t=rnd()*total; let lo=0,hi=cdf.length-1;
    while(lo<hi){const mid=(lo+hi)>>1; if(cdf[mid]<t) lo=mid+1; else hi=mid;}
    const o=lo*9; let u=rnd(),v=rnd(); if(u+v>1){u=1-u;v=1-v;} const w=1-u-v;
    out[k*3]  =tri[o]*w+tri[o+3]*u+tri[o+6]*v;
    out[k*3+1]=tri[o+1]*w+tri[o+4]*u+tri[o+7]*v;
    out[k*3+2]=tri[o+2]*w+tri[o+5]*u+tri[o+8]*v;
  }
  return out;
}
const CLOUD_N = 34000;
const cloudGeo = new THREE.BufferGeometry();
cloudGeo.setAttribute("position", new THREE.BufferAttribute(sampleSurface(parts,CLOUD_N),3));
const cloud = new THREE.Points(cloudGeo, new THREE.PointsMaterial({
  size:0.027, map:DOT, color:0xeef3f0, transparent:true, opacity:0.98, depthWrite:false }));
cloud.visible=false; scene.add(cloud);   // world-space snapshot, not rigged

/* sparser dusting of the same surface, used under the line drawing in FIELD */
const skinGeo = new THREE.BufferGeometry();
skinGeo.setAttribute("position", new THREE.BufferAttribute(
  cloudGeo.attributes.position.array.slice(0, 3*5000), 3));
const skin = new THREE.Points(skinGeo, new THREE.PointsMaterial({
  size:0.017, map:DOT, color:0xaebab5, transparent:true, opacity:0.6, depthWrite:false }));
skin.visible=false; scene.add(skin);


/* ── the four visual languages off the board, plus a solid working mode ──
   simple : essential form only — bg fill, white edges, no fine detail
   tech   : hidden-line drawing — near-black fill occludes, bright edges
   field  : tech + surface dusting + radial particle field + accents
   target : the object as a point cloud alone
   solid  : shaded working view                                        */
let mode="tech";
function setMode(m){
  mode = m;
  const simple = m==="simple", tech = m==="tech", fieldM = m==="field",
        target = m==="target", solid = m==="solid";
  const drawn  = !target;

  for(const p of parts){
    const hideDetail = simple && p.userData.detail;
    p.visible = drawn && !hideDetail;
    p.material = simple ? MAT.hollow : (solid ? p.userData.mat : MAT.tech);
    const e = p.userData.edges;
    if(e){
      e.material = simple ? EDGE.line : (solid ? EDGE.solid : EDGE.tech);
      e.visible  = !(p.name==="hull.beacon"||p.name==="gimbal.ring");
    }
    const sil = p.userData.sil;
    if(sil){                                 // silhouette only in the line languages
      sil.visible  = (simple || tech || fieldM) && !(p.name==="hull.beacon"||p.name==="gimbal.ring");
      sil.material = simple ? EDGE.line : EDGE.tech;
    }
  }
  /* the orange accents stay lit in every language but SIMPLE */
  for(const n of ["hull.beacon","gimbal.ring"]){
    const o = parts.find(p=>p.name===n); if(o){ o.visible = drawn && !simple; o.material = MAT.accent; }
  }
  for(const sm of seams){
    sm.visible  = tech || fieldM;            // essential form carries no joinery
    sm.material = simple ? EDGE.line : EDGE.tech;
  }
  cloud.visible   = target;
  skin.visible    = fieldM;
  field.visible   = fieldM || target;
  accents.visible = fieldM;
  field.material.opacity = target ? 0.34 : 0.58;

}

/* field breathing — every frequency an integer harmonic of a 24s loop */
const PERIOD = 24, W = Math.PI*2/PERIOD;
function animateField(t){
  if(!field.visible && !accents.visible) return;
  for(let i=0;i<FIELD_N;i++){
    const ph=fPh[i], k=i*3, sc=1+Math.sin(t*W+ph)*0.035;
    fLive[k]=fBase[k]*sc;
    fLive[k+1]=fBase[k+1]+Math.sin(t*W*2+ph*1.7)*0.05;
    fLive[k+2]=fBase[k+2]*sc;
  }
  fieldGeo.attributes.position.needsUpdate = true;
  accents.material.opacity = 0.72 + Math.sin(t*W*4)*0.22;
}


/* silhouettes are view dependent: the host calls this before each render */
function updateSilhouettes(cam){
  root.updateMatrixWorld(true);
  for(const p of parts){
    const sil = p.userData.sil;
    if(sil && sil.visible && p.visible) updateSilhouette(p, cam);
  }
}

return { root, hull, parts, arms, rig, seams, setMode, updateSilhouettes,
         animateField, PERIOD, BOUNDS:BOX, SIZE, RADIUS:RAD,
         extras:{ field, accents, skin, cloud }, cloudGeo, sampleSurface,
         get mode(){ return mode; } };
}
