"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  primitiveColors: true,
  primitiveLightColors: true,
  primitiveDarkColors: true,
  colors: true
};
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function () {
    return _colorPrimitiveTokens.default;
  }
});
Object.defineProperty(exports, "primitiveColors", {
  enumerable: true,
  get: function () {
    return _colorPrimitiveTokens.default;
  }
});
Object.defineProperty(exports, "primitiveDarkColors", {
  enumerable: true,
  get: function () {
    return _colorPrimitiveTokens.primitiveDarkColors;
  }
});
Object.defineProperty(exports, "primitiveLightColors", {
  enumerable: true,
  get: function () {
    return _colorPrimitiveTokens.primitiveLightColors;
  }
});
var _colorPrimitiveTokens = _interopRequireWildcard(require("./color-primitive-tokens"));
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }