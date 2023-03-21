import { jsx as Tn } from "react/jsx-runtime";
import { useRef as ce, useEffect as On } from "react";
function Qt(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Pe(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e)
    n[r] = e[r];
  return n;
}
function ot() {
}
var nt = 0.7, xt = 1 / nt, Y = "\\s*([+-]?\\d+)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", z = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rn = /^#([0-9a-f]{3,8})$/, Fn = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), zn = new RegExp(`^rgb\\(${z},${z},${z}\\)$`), In = new RegExp(`^rgba\\(${Y},${Y},${Y},${rt}\\)$`), Dn = new RegExp(`^rgba\\(${z},${z},${z},${rt}\\)$`), Hn = new RegExp(`^hsl\\(${rt},${z},${z}\\)$`), Ln = new RegExp(`^hsla\\(${rt},${z},${z},${rt}\\)$`), fe = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Qt(ot, B, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: he,
  // Deprecated! Use color.formatHex.
  formatHex: he,
  formatHex8: Pn,
  formatHsl: Vn,
  formatRgb: de,
  toString: de
});
function he() {
  return this.rgb().formatHex();
}
function Pn() {
  return this.rgb().formatHex8();
}
function Vn() {
  return Ve(this).formatHsl();
}
function de() {
  return this.rgb().formatRgb();
}
function B(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Rn.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? pe(e) : n === 3 ? new N(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ht(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ht(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Fn.exec(t)) ? new N(e[1], e[2], e[3], 1) : (e = zn.exec(t)) ? new N(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = In.exec(t)) ? ht(e[1], e[2], e[3], e[4]) : (e = Dn.exec(t)) ? ht(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Hn.exec(t)) ? ve(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ln.exec(t)) ? ve(e[1], e[2] / 100, e[3] / 100, e[4]) : fe.hasOwnProperty(t) ? pe(fe[t]) : t === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
}
function pe(t) {
  return new N(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ht(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new N(t, e, n, r);
}
function qn(t) {
  return t instanceof ot || (t = B(t)), t ? (t = t.rgb(), new N(t.r, t.g, t.b, t.opacity)) : new N();
}
function it(t, e, n, r) {
  return arguments.length === 1 ? qn(t) : new N(t, e, n, r ?? 1);
}
function N(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Qt(N, it, Pe(ot, {
  brighter(t) {
    return t = t == null ? xt : Math.pow(xt, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? nt : Math.pow(nt, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new N(q(this.r), q(this.g), q(this.b), _t(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ge,
  // Deprecated! Use color.formatHex.
  formatHex: ge,
  formatHex8: Bn,
  formatRgb: me,
  toString: me
}));
function ge() {
  return `#${V(this.r)}${V(this.g)}${V(this.b)}`;
}
function Bn() {
  return `#${V(this.r)}${V(this.g)}${V(this.b)}${V((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function me() {
  const t = _t(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${q(this.r)}, ${q(this.g)}, ${q(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _t(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function q(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function V(t) {
  return t = q(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ve(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new R(t, e, n, r);
}
function Ve(t) {
  if (t instanceof R)
    return new R(t.h, t.s, t.l, t.opacity);
  if (t instanceof ot || (t = B(t)), !t)
    return new R();
  if (t instanceof R)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), s = NaN, a = o - i, u = (o + i) / 2;
  return a ? (e === o ? s = (n - r) / a + (n < r) * 6 : n === o ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= u < 0.5 ? o + i : 2 - o - i, s *= 60) : a = u > 0 && u < 1 ? 0 : s, new R(s, a, u, t.opacity);
}
function Xn(t, e, n, r) {
  return arguments.length === 1 ? Ve(t) : new R(t, e, n, r ?? 1);
}
function R(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Qt(R, Xn, Pe(ot, {
  brighter(t) {
    return t = t == null ? xt : Math.pow(xt, t), new R(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? nt : Math.pow(nt, t), new R(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new N(
      Dt(t >= 240 ? t - 240 : t + 120, i, r),
      Dt(t, i, r),
      Dt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new R(ye(this.h), dt(this.s), dt(this.l), _t(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = _t(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ye(this.h)}, ${dt(this.s) * 100}%, ${dt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ye(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function dt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Dt(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Gn = (t, e) => t.length > e ? `${t.slice(0, e)}[...]` : t, qe = (t = 0, e = 1e4, n) => {
  let r = Math.floor(Math.random() * (t - e - 1)) + e + 1;
  for (; r === n; )
    r = qe(t, e);
  return r;
}, Wn = (t, e) => new Array(t).fill(null).map(e), P = (t = void 0) => t == null ? !1 : Boolean(t), at = (t, e = 15) => {
  let n = !1;
  return (...r) => {
    let i;
    return n || (i = t.apply(void 0, r), n = !0, setTimeout(() => {
      n = !1;
    }, e)), i;
  };
}, Be = (t, e = "", n) => {
  const r = document.createElement(t);
  return r.className = e, n == null || n.appendChild(r), r;
}, Xe = (t) => t.replace(/( {2}|\r\n|\n|\r)/g, ""), Yn = (t) => Xe(t.replace(/ /g, "")), Kn = (t) => t.replace(/[^0-9a-z ]/gi, ""), Un = ([t, e, n], r = "light", i = 170) => {
  const o = (t * 299 + e * 587 + n * 114) / 1e3;
  return {
    light: o < i,
    dark: o > i
  }[r];
}, Zn = () => qe(0, 255), Jn = (t = "light", e = 170) => {
  const n = () => Wn(3, Zn);
  let r;
  for (; r === void 0 || !Un(r, t, e); )
    r = n();
  return it(...r);
}, Qn = (t) => t.darker(0.5), jn = (t, e = !0) => t.map(
  ({
    color: n = Jn().formatHex(),
    ...r
  }) => ({
    color: n,
    rgbColor: e && it(n),
    ...r
  })
), tr = (t, e) => t === void 0 ? e : e.map((n) => (n.values = t.values.map(({ key: r }, i) => {
  if (typeof r != "string" && Array.isArray(n.values))
    return n.values[i];
  const o = parseInt(n[r ?? ""]);
  return isNaN(o) ? 0 : o;
}), Array.isArray(t.axisKeys) && typeof n.label != "string" && (n.label = n[t.axisKeys[0]], typeof n.label != "string" && (n.label = "AXIS KEY MISMATCH")), n));
function mt(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function er(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ge(t) {
  let e, n, r;
  t.length !== 2 ? (e = mt, n = (a, u) => mt(t(a), u), r = (a, u) => t(a) - u) : (e = t === mt || t === er ? t : nr, n = t, r = t);
  function i(a, u, l = 0, c = a.length) {
    if (l < c) {
      if (e(u, u) !== 0)
        return c;
      do {
        const h = l + c >>> 1;
        n(a[h], u) < 0 ? l = h + 1 : c = h;
      } while (l < c);
    }
    return l;
  }
  function o(a, u, l = 0, c = a.length) {
    if (l < c) {
      if (e(u, u) !== 0)
        return c;
      do {
        const h = l + c >>> 1;
        n(a[h], u) <= 0 ? l = h + 1 : c = h;
      } while (l < c);
    }
    return l;
  }
  function s(a, u, l = 0, c = a.length) {
    const h = i(a, u, l, c - 1);
    return h > l && r(a[h - 1], u) > -r(a[h], u) ? h - 1 : h;
  }
  return { left: i, center: s, right: o };
}
function nr() {
  return 0;
}
function rr(t) {
  return t === null ? NaN : +t;
}
const ir = Ge(mt), sr = ir.right;
Ge(rr).center;
const or = sr;
class we extends Map {
  constructor(e, n = lr) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [r, i] of e)
        this.set(r, i);
  }
  get(e) {
    return super.get(xe(this, e));
  }
  has(e) {
    return super.has(xe(this, e));
  }
  set(e, n) {
    return super.set(ar(this, e), n);
  }
  delete(e) {
    return super.delete(ur(this, e));
  }
}
function xe({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function ar({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function ur({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function lr(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const cr = Math.sqrt(50), fr = Math.sqrt(10), hr = Math.sqrt(2);
function bt(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), s = o >= cr ? 10 : o >= fr ? 5 : o >= hr ? 2 : 1;
  let a, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / s, a = Math.round(t * l), u = Math.round(e * l), a / l < t && ++a, u / l > e && --u, l = -l) : (l = Math.pow(10, i) * s, a = Math.round(t / l), u = Math.round(e / l), a * l < t && ++a, u * l > e && --u), u < a && 0.5 <= n && n < 2 ? bt(t, e, n * 2) : [a, u, l];
}
function dr(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const r = e < t, [i, o, s] = r ? bt(e, t, n) : bt(t, e, n);
  if (!(o >= i))
    return [];
  const a = o - i + 1, u = new Array(a);
  if (r)
    if (s < 0)
      for (let l = 0; l < a; ++l)
        u[l] = (o - l) / -s;
    else
      for (let l = 0; l < a; ++l)
        u[l] = (o - l) * s;
  else if (s < 0)
    for (let l = 0; l < a; ++l)
      u[l] = (i + l) / -s;
  else
    for (let l = 0; l < a; ++l)
      u[l] = (i + l) * s;
  return u;
}
function qt(t, e, n) {
  return e = +e, t = +t, n = +n, bt(t, e, n)[2];
}
function pr(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? qt(e, t, n) : qt(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function _e(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function be(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function gr(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var Bt = "http://www.w3.org/1999/xhtml";
const Me = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Bt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Rt(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Me.hasOwnProperty(e) ? { space: Me[e], local: t } : t;
}
function mr(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Bt && e.documentElement.namespaceURI === Bt ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function vr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function We(t) {
  var e = Rt(t);
  return (e.local ? vr : mr)(e);
}
function yr() {
}
function jt(t) {
  return t == null ? yr : function() {
    return this.querySelector(t);
  };
}
function wr(t) {
  typeof t != "function" && (t = jt(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = new Array(s), u, l, c = 0; c < s; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), a[c] = l);
  return new C(r, this._parents);
}
function xr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function _r() {
  return [];
}
function Ye(t) {
  return t == null ? _r : function() {
    return this.querySelectorAll(t);
  };
}
function br(t) {
  return function() {
    return xr(t.apply(this, arguments));
  };
}
function Mr(t) {
  typeof t == "function" ? t = br(t) : t = Ye(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var s = e[o], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && (r.push(t.call(u, u.__data__, l, s)), i.push(u));
  return new C(r, i);
}
function Ke(t) {
  return function() {
    return this.matches(t);
  };
}
function Ue(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Ar = Array.prototype.find;
function kr(t) {
  return function() {
    return Ar.call(this.children, t);
  };
}
function Er() {
  return this.firstElementChild;
}
function Sr(t) {
  return this.select(t == null ? Er : kr(typeof t == "function" ? t : Ue(t)));
}
var Nr = Array.prototype.filter;
function $r() {
  return Array.from(this.children);
}
function Cr(t) {
  return function() {
    return Nr.call(this.children, t);
  };
}
function Tr(t) {
  return this.selectAll(t == null ? $r : Cr(typeof t == "function" ? t : Ue(t)));
}
function Or(t) {
  typeof t != "function" && (t = Ke(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = [], u, l = 0; l < s; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && a.push(u);
  return new C(r, this._parents);
}
function Ze(t) {
  return new Array(t.length);
}
function Rr() {
  return new C(this._enter || this._groups.map(Ze), this._parents);
}
function Mt(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Mt.prototype = {
  constructor: Mt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Fr(t) {
  return function() {
    return t;
  };
}
function zr(t, e, n, r, i, o) {
  for (var s = 0, a, u = e.length, l = o.length; s < l; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : n[s] = new Mt(t, o[s]);
  for (; s < u; ++s)
    (a = e[s]) && (i[s] = a);
}
function Ir(t, e, n, r, i, o, s) {
  var a, u, l = /* @__PURE__ */ new Map(), c = e.length, h = o.length, f = new Array(c), d;
  for (a = 0; a < c; ++a)
    (u = e[a]) && (f[a] = d = s.call(u, u.__data__, a, e) + "", l.has(d) ? i[a] = u : l.set(d, u));
  for (a = 0; a < h; ++a)
    d = s.call(t, o[a], a, o) + "", (u = l.get(d)) ? (r[a] = u, u.__data__ = o[a], l.delete(d)) : n[a] = new Mt(t, o[a]);
  for (a = 0; a < c; ++a)
    (u = e[a]) && l.get(f[a]) === u && (i[a] = u);
}
function Dr(t) {
  return t.__data__;
}
function Hr(t, e) {
  if (!arguments.length)
    return Array.from(this, Dr);
  var n = e ? Ir : zr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Fr(t));
  for (var o = i.length, s = new Array(o), a = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], h = i[l], f = h.length, d = Lr(t.call(c, c && c.__data__, l, r)), p = d.length, m = a[l] = new Array(p), v = s[l] = new Array(p), E = u[l] = new Array(f);
    n(c, h, m, v, E, d, e);
    for (var A = 0, x = 0, b, y; A < p; ++A)
      if (b = m[A]) {
        for (A >= x && (x = A + 1); !(y = v[x]) && ++x < p; )
          ;
        b._next = y || null;
      }
  }
  return s = new C(s, r), s._enter = a, s._exit = u, s;
}
function Lr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Pr() {
  return new C(this._exit || this._groups.map(Ze), this._parents);
}
function Vr(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function qr(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, s = Math.min(i, o), a = new Array(i), u = 0; u < s; ++u)
    for (var l = n[u], c = r[u], h = l.length, f = a[u] = new Array(h), d, p = 0; p < h; ++p)
      (d = l[p] || c[p]) && (f[p] = d);
  for (; u < i; ++u)
    a[u] = n[u];
  return new C(a, this._parents);
}
function Br() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Xr(t) {
  t || (t = Gr);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = n[o], a = s.length, u = i[o] = new Array(a), l, c = 0; c < a; ++c)
      (l = s[c]) && (u[c] = l);
    u.sort(e);
  }
  return new C(i, this._parents).order();
}
function Gr(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Yr() {
  return Array.from(this);
}
function Kr() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s)
        return s;
    }
  return null;
}
function Ur() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Zr() {
  return !this.node();
}
function Jr(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && t.call(a, a.__data__, o, i);
  return this;
}
function Qr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function jr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ti(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ei(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ni(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ri(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function ii(t, e) {
  var n = Rt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? jr : Qr : typeof e == "function" ? n.local ? ri : ni : n.local ? ei : ti)(n, e));
}
function Je(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function si(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function oi(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ai(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function ui(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? si : typeof e == "function" ? ai : oi)(t, e, n ?? "")) : K(this.node(), t);
}
function K(t, e) {
  return t.style.getPropertyValue(e) || Je(t).getComputedStyle(t, null).getPropertyValue(e);
}
function li(t) {
  return function() {
    delete this[t];
  };
}
function ci(t, e) {
  return function() {
    this[t] = e;
  };
}
function fi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function hi(t, e) {
  return arguments.length > 1 ? this.each((e == null ? li : typeof e == "function" ? fi : ci)(t, e)) : this.node()[t];
}
function Qe(t) {
  return t.trim().split(/^|\s+/);
}
function te(t) {
  return t.classList || new je(t);
}
function je(t) {
  this._node = t, this._names = Qe(t.getAttribute("class") || "");
}
je.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function tn(t, e) {
  for (var n = te(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function en(t, e) {
  for (var n = te(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function di(t) {
  return function() {
    tn(this, t);
  };
}
function pi(t) {
  return function() {
    en(this, t);
  };
}
function gi(t, e) {
  return function() {
    (e.apply(this, arguments) ? tn : en)(this, t);
  };
}
function mi(t, e) {
  var n = Qe(t + "");
  if (arguments.length < 2) {
    for (var r = te(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? gi : e ? di : pi)(n, e));
}
function vi() {
  this.textContent = "";
}
function yi(t) {
  return function() {
    this.textContent = t;
  };
}
function wi(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function xi(t) {
  return arguments.length ? this.each(t == null ? vi : (typeof t == "function" ? wi : yi)(t)) : this.node().textContent;
}
function _i() {
  this.innerHTML = "";
}
function bi(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Mi(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ai(t) {
  return arguments.length ? this.each(t == null ? _i : (typeof t == "function" ? Mi : bi)(t)) : this.node().innerHTML;
}
function ki() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ei() {
  return this.each(ki);
}
function Si() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ni() {
  return this.each(Si);
}
function $i(t) {
  var e = typeof t == "function" ? t : We(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ci() {
  return null;
}
function Ti(t, e) {
  var n = typeof t == "function" ? t : We(t), r = e == null ? Ci : typeof e == "function" ? e : jt(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Oi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ri() {
  return this.each(Oi);
}
function Fi() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function zi() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ii(t) {
  return this.select(t ? zi : Fi);
}
function Di(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Hi(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Li(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Pi(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Vi(t, e, n) {
  return function() {
    var r = this.__on, i, o = Hi(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((i = r[s]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function qi(t, e, n) {
  var r = Li(t + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, c; u < l; ++u)
        for (i = 0, c = a[u]; i < o; ++i)
          if ((s = r[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? Vi : Pi, i = 0; i < o; ++i)
    this.each(a(r[i], e, n));
  return this;
}
function nn(t, e, n) {
  var r = Je(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Bi(t, e) {
  return function() {
    return nn(this, t, e);
  };
}
function Xi(t, e) {
  return function() {
    return nn(this, t, e.apply(this, arguments));
  };
}
function Gi(t, e) {
  return this.each((typeof e == "function" ? Xi : Bi)(t, e));
}
function* Wi() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var rn = [null];
function C(t, e) {
  this._groups = t, this._parents = e;
}
function ut() {
  return new C([[document.documentElement]], rn);
}
function Yi() {
  return this;
}
C.prototype = ut.prototype = {
  constructor: C,
  select: wr,
  selectAll: Mr,
  selectChild: Sr,
  selectChildren: Tr,
  filter: Or,
  data: Hr,
  enter: Rr,
  exit: Pr,
  join: Vr,
  merge: qr,
  selection: Yi,
  order: Br,
  sort: Xr,
  call: Wr,
  nodes: Yr,
  node: Kr,
  size: Ur,
  empty: Zr,
  each: Jr,
  attr: ii,
  style: ui,
  property: hi,
  classed: mi,
  text: xi,
  html: Ai,
  raise: Ei,
  lower: Ni,
  append: $i,
  insert: Ti,
  remove: Ri,
  clone: Ii,
  datum: Di,
  on: qi,
  dispatch: Gi,
  [Symbol.iterator]: Wi
};
function At(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], rn);
}
var sn = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, n) {
    var r = -1;
    return e.some(function(i, o) {
      return i[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function e() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function(n) {
        var r = t(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, e.prototype.set = function(n, r) {
        var i = t(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, e.prototype.delete = function(n) {
        var r = this.__entries__, i = t(r, n);
        ~i && r.splice(i, 1);
      }, e.prototype.has = function(n) {
        return !!~t(this.__entries__, n);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var s = o[i];
          n.call(r, s[1], s[0]);
        }
      }, e;
    }()
  );
}(), Xt = typeof window < "u" && typeof document < "u" && window.document === document, kt = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ki = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(kt) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Ui = 2;
function Zi(t, e) {
  var n = !1, r = !1, i = 0;
  function o() {
    n && (n = !1, t()), r && a();
  }
  function s() {
    Ki(o);
  }
  function a() {
    var u = Date.now();
    if (n) {
      if (u - i < Ui)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(s, e);
    i = u;
  }
  return a;
}
var Ji = 20, Qi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ji = typeof MutationObserver < "u", ts = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Zi(this.refresh.bind(this), Ji);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var n = this.observers_, r = n.indexOf(e);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return e.forEach(function(n) {
        return n.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !Xt || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ji ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !Xt || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, r = n === void 0 ? "" : n, i = Qi.some(function(o) {
        return !!~r.indexOf(o);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), on = function(t, e) {
  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, U = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || kt;
}, an = Ft(0, 0, 0, 0);
function Et(t) {
  return parseFloat(t) || 0;
}
function Ae(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, i) {
    var o = t["border-" + i + "-width"];
    return r + Et(o);
  }, 0);
}
function es(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, i = e; r < i.length; r++) {
    var o = i[r], s = t["padding-" + o];
    n[o] = Et(s);
  }
  return n;
}
function ns(t) {
  var e = t.getBBox();
  return Ft(0, 0, e.width, e.height);
}
function rs(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return an;
  var r = U(t).getComputedStyle(t), i = es(r), o = i.left + i.right, s = i.top + i.bottom, a = Et(r.width), u = Et(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + o) !== e && (a -= Ae(r, "left", "right") + o), Math.round(u + s) !== n && (u -= Ae(r, "top", "bottom") + s)), !ss(t)) {
    var l = Math.round(a + o) - e, c = Math.round(u + s) - n;
    Math.abs(l) !== 1 && (a -= l), Math.abs(c) !== 1 && (u -= c);
  }
  return Ft(i.left, i.top, a, u);
}
var is = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof U(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof U(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function ss(t) {
  return t === U(t).document.documentElement;
}
function os(t) {
  return Xt ? is(t) ? ns(t) : rs(t) : an;
}
function as(t) {
  var e = t.x, n = t.y, r = t.width, i = t.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
  return on(s, {
    x: e,
    y: n,
    width: r,
    height: i,
    top: n,
    right: e + r,
    bottom: i + n,
    left: e
  }), s;
}
function Ft(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var us = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ft(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = os(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), ls = (
  /** @class */
  function() {
    function t(e, n) {
      var r = as(n);
      on(this, { target: e, contentRect: r });
    }
    return t;
  }()
), cs = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new sn(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof U(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new us(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof U(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) && (n.delete(e), n.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && e.activeObservations_.push(n);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new ls(r.target, r.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), un = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new sn(), ln = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = ts.getInstance(), r = new cs(e, n, this);
      un.set(this, r);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  ln.prototype[t] = function() {
    var e;
    return (e = un.get(this))[t].apply(e, arguments);
  };
});
var fs = function() {
  return typeof kt.ResizeObserver < "u" ? kt.ResizeObserver : ln;
}();
const hs = "#A8D4FF", ds = "#000E1A", ps = {
  piChartText: hs,
  piChartBackground: ds
}, gs = "#003A73", ms = "#F0F8FF", vs = {
  piChartText: gs,
  piChartBackground: ms
}, ys = { dark: ps, light: vs }, cn = (t, e, n) => {
  const r = (o) => Kn(Yn(o));
  let i = document.querySelector(`[data-selector=${t}]`);
  i === null && (i = Be("style", "", document.head), i.setAttribute("data-selector", t)), r(i.innerHTML).match(r(e)) === null && (i.innerHTML = Xe(
    `${P(n) ? "" : i.innerHTML} ${e}`
  ));
}, ws = (t) => {
  let e = Object.entries(ys[t]).map(([n, r]) => `--${n}: ${r};`).join("");
  return e = `:root { ${e} }`, cn("pic-variables", e, !0), e;
}, ee = (t, ...e) => {
  const n = t.map((r, i) => `${r}${e[i] ?? ""}`).join("");
  return cn("pic-styles", n), n;
}, fn = (
  /* css */
  `
  border-radius: 5px;
  box-shadow: 3px 3px 6px -4px rgba(0, 0, 0, 0.45);
  color: var(--piChartText);
  border: 1px solid var(--piChartText);
  background-color: var(--piChartBackground);
`
), xs = () => {
  ee`
    .pic-svg {
      ${fn}
      min-width: 512px;
    }

    .pic-title {
      position: absolute;
      width: 100%;
      text-align: center;
      margin: 8px 0;
      font-weight: bold;
      color: var(--text);
    }
  `;
};
class _s {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param label label for chart
   * @param config configuration object
   * @param data the data to be displayed
   * @param containerElement optionally DOM node in place of ID
   * @param containerSelector selector to select DOM object
   * @param theme the selected theme for the chart
   */
  constructor({
    label: e,
    container: n,
    config: r,
    data: i,
    theme: o = "light"
  }) {
    this.padding = { l: 45, r: 5, t: 25, b: 85 }, this.dimensions = {
      left: 0,
      width: 0,
      top: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      resizeOffset: 0,
      padding: this.padding
    }, this.initialWidth = 0, this.configs = /* @__PURE__ */ new Map(), this.dataSets = /* @__PURE__ */ new Map(), this.scales = /* @__PURE__ */ new Map(), this.axes = /* @__PURE__ */ new Map(), this.keys = /* @__PURE__ */ new Map(), this.visuals = /* @__PURE__ */ new Map(), this.setContainer = (s) => {
      if (s !== null && P(s == null ? void 0 : s.nodeName))
        return s;
      throw new Error("No valid DOM element or selector provided for chart.");
    }, this.setConfig = (s, a = "default") => {
      if (!Array.isArray(s == null ? void 0 : s.values))
        throw new Error("No valid configuration provided for chart.");
      return s.values = jn(s.values), this.configs.set(a, s), this.draw(), this;
    }, this.setData = (s, a = "default", u = "default", l = !0) => {
      const c = this.configs.get(u);
      if (!Array.isArray(s))
        throw new Error("No valid data provided for chart.");
      const h = Array.isArray(c == null ? void 0 : c.values) ? tr(c, s) : s;
      let f = l ? Number(be(h, (m) => be(m.values))) : 0, d = Number(_e(h, (m) => _e(m.values)));
      const p = Math.ceil(d / 15);
      if (l) {
        const m = f > p ? f - p : 0;
        f = f > 0 ? m : f, f = f < 0 ? f - p : f, d += p;
      }
      return this.dataSets.set(a, { data: h, minValue: f, maxValue: d }), this.draw(), this;
    }, this.addScale = (s = { x: "band", y: "linear" }, a = "default", u = "default") => {
      if (this.dataSets.get(u) === void 0)
        throw new Error("No valid config provided for scale.");
      return this.scales.set(
        a,
        Object.entries(s).reduce(
          (c, [h, f]) => ({
            ...c,
            [h]: new vo({
              scaleType: f,
              dataSet: this.dataSets.get(u),
              dimensions: this.dimensions
            })
          }),
          {}
        )
      ), this.draw(), this;
    }, this.addAxis = (s = "default", a = "default", u = "default") => {
      var c;
      const l = this.scales.get(a);
      if (l === void 0)
        throw new Error("No valid config provided for axis.");
      return this.axes.set(
        s,
        new Rs({
          d3Svg: this.d3Svg,
          tooltip: this.tooltip,
          dimensions: this.dimensions,
          truncate: 10,
          axisLabels: ((c = this.configs.get(u)) == null ? void 0 : c.axisLabels) ?? ["", ""],
          scales: l
        })
      ), this.draw(), this;
    }, this.addKey = (s = "default", a = "default") => {
      const u = this.configs.get(a);
      if (u === void 0)
        throw new Error("No valid config provided for key.");
      return this.keys.set(
        s,
        new yo({
          d3Svg: this.d3Svg,
          values: (u == null ? void 0 : u.values) ?? [],
          dimensions: this.dimensions
        })
      ), this.draw(), this;
    }, this.addVisual = (s = "default", a = "default", u = "default", l = "default", c = "bar", h = 1e3) => {
      const f = this.configs.get(a), d = this.dataSets.get(u), p = this.scales.get(l);
      if ([f, d, p].includes(void 0))
        throw new Error("No valid config provided for visual.");
      const v = {
        d3Svg: this.d3Svg,
        config: f,
        dataSet: d,
        scales: p,
        transitionTime: h,
        tooltip: this.tooltip,
        dimensions: this.dimensions
      };
      switch (c) {
        default:
          setTimeout(() => this.visuals.set(s, new za(v)));
      }
      return this.draw(), this;
    }, this.deleteMapItem = (s, a) => {
      var l;
      if (((l = this[s]) == null ? void 0 : l.get(a)) === void 0)
        throw new Error(
          `Failed attempting to delete "${a}" from "this.${s}".`
        );
      return this[s].delete(a), this.draw(), this;
    }, this.addDefaults = () => this.addScale().addAxis().addKey().addVisual(), this.updateDimensions = () => {
      const { left: s, width: a, top: u, height: l } = this.container.getBoundingClientRect(), { l: c, r: h, t: f, b: d } = this.padding;
      this.dimensions.left = s, this.dimensions.width = a, this.dimensions.top = u, this.dimensions.height = l, this.dimensions.innerWidth = a - c - h, this.dimensions.innerHeight = l - f - d, this.dimensions.resizeOffset = a - this.initialWidth, this.dimensions.padding = this.padding;
    }, this.renderChart = () => {
      if (this.title !== void 0 && P(this.label))
        this.title.text(this.label);
      else
        throw new Error("Unable to render the chart.");
    }, this.draw = at(() => {
      this.updateDimensions(), this.renderChart(), this.scales.forEach(
        (s) => Object.values(s).forEach((a) => a.render())
      ), this.axes.forEach((s) => s.render()), this.keys.forEach((s) => s.render()), this.visuals.forEach((s) => s.render({ reset: !0 }));
    }), this.resizeWatcher = new fs(this.draw), this.label = e, this.container = this.setContainer(
      typeof n == "string" ? document.querySelector(n) : n
    ), this.title = At(this.container).append("div").attr("class", "pic-title"), this.d3Svg = At(this.container).append("svg").attr("class", "pic-svg").attr("width", "100%").attr("height", "100%"), this.resizeWatcher.observe(this.container), this.tooltip = new Ms(this.container), this.draw(), this.initialWidth = this.dimensions.width, r !== void 0 && this.setConfig(r), i !== void 0 && this.setData(i), ws(o), xs();
  }
}
const bs = () => {
  ee`
    .pic-tooltip {
      transition: opacity 0.5s;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      padding: 8px;
      ${fn}
    }
  `;
};
class Ms {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param container DOM object
   * @throws {Error} invalid DOM element
   */
  constructor(e) {
    if (this.ping = (n, r) => {
      const i = typeof n == "string" ? n : `<strong>${n[0]}</strong><br>${n[1]}: <em>${n[2]}</em>`;
      this.tooltip.innerHTML = i, this.tooltip.style.visibility = "visible", this.tooltip.style.opacity = "0.9", this.move(r), this.cleanup(), this.showTimeout = setTimeout(() => {
        this.hide();
      }, 5e3);
    }, this.move = at((n) => {
      const { left: i, width: o, top: s, height: a } = this.container.getBoundingClientRect(), { width: u, height: l } = this.tooltip.getBoundingClientRect(), { clientX: c, clientY: h } = n, f = o + i - c < u + 20, d = a + s - h < l + 20;
      this.tooltip.style.left = `${c - i + (f ? -u - 20 : 20)}px`, this.tooltip.style.top = `${h - s + (d ? -l - 20 : 20)}px`;
    }), this.hide = () => {
      this.cleanup(), this.tooltip.style.opacity = "0", this.hideTimeout = setTimeout(() => {
        this.tooltip.style.visibility = "hidden";
      }, 500);
    }, this.cleanup = () => {
      this.showTimeout !== void 0 && clearTimeout(this.showTimeout), this.hideTimeout !== void 0 && clearTimeout(this.hideTimeout);
    }, !P(e.nodeName))
      throw new Error("The tooltip has no valid container element.");
    this.container = e, this.tooltip = Be("div", "pic-tooltip", e), bs();
  }
}
function As(t) {
  return t;
}
var Ht = 1, Lt = 2, Gt = 3, j = 4, ke = 1e-6;
function ks(t) {
  return "translate(" + t + ",0)";
}
function Es(t) {
  return "translate(0," + t + ")";
}
function Ss(t) {
  return (e) => +t(e);
}
function Ns(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function $s() {
  return !this.__axis;
}
function hn(t, e) {
  var n = [], r = null, i = null, o = 6, s = 6, a = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === Ht || t === j ? -1 : 1, c = t === j || t === Lt ? "x" : "y", h = t === Ht || t === Gt ? ks : Es;
  function f(d) {
    var p = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), m = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : As), v = Math.max(o, 0) + a, E = e.range(), A = +E[0] + u, x = +E[E.length - 1] + u, b = (e.bandwidth ? Ns : Ss)(e.copy(), u), y = d.selection ? d.selection() : d, w = y.selectAll(".domain").data([null]), $ = y.selectAll(".tick").data(p, e).order(), T = $.exit(), _ = $.enter().append("g").attr("class", "tick"), M = $.select("line"), g = $.select("text");
    w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), $ = $.merge(_), M = M.merge(_.append("line").attr("stroke", "currentColor").attr(c + "2", l * o)), g = g.merge(_.append("text").attr("fill", "currentColor").attr(c, l * v).attr("dy", t === Ht ? "0em" : t === Gt ? "0.71em" : "0.32em")), d !== y && (w = w.transition(d), $ = $.transition(d), M = M.transition(d), g = g.transition(d), T = T.transition(d).attr("opacity", ke).attr("transform", function(S) {
      return isFinite(S = b(S)) ? h(S + u) : this.getAttribute("transform");
    }), _.attr("opacity", ke).attr("transform", function(S) {
      var k = this.parentNode.__axis;
      return h((k && isFinite(k = k(S)) ? k : b(S)) + u);
    })), T.remove(), w.attr("d", t === j || t === Lt ? s ? "M" + l * s + "," + A + "H" + u + "V" + x + "H" + l * s : "M" + u + "," + A + "V" + x : s ? "M" + A + "," + l * s + "V" + u + "H" + x + "V" + l * s : "M" + A + "," + u + "H" + x), $.attr("opacity", 1).attr("transform", function(S) {
      return h(b(S) + u);
    }), M.attr(c + "2", l * o), g.attr(c, l * v).text(m), y.filter($s).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Lt ? "start" : t === j ? "end" : "middle"), y.each(function() {
      this.__axis = b;
    });
  }
  return f.scale = function(d) {
    return arguments.length ? (e = d, f) : e;
  }, f.ticks = function() {
    return n = Array.from(arguments), f;
  }, f.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), f) : n.slice();
  }, f.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), f) : r && r.slice();
  }, f.tickFormat = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, f.tickSize = function(d) {
    return arguments.length ? (o = s = +d, f) : o;
  }, f.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, f) : o;
  }, f.tickSizeOuter = function(d) {
    return arguments.length ? (s = +d, f) : s;
  }, f.tickPadding = function(d) {
    return arguments.length ? (a = +d, f) : a;
  }, f.offset = function(d) {
    return arguments.length ? (u = +d, f) : u;
  }, f;
}
function Cs(t) {
  return hn(Gt, t);
}
function Ts(t) {
  return hn(j, t);
}
const Os = () => {
  ee`
    .pic-axis {
      font-size: 0.8em;
    }

    .pic-line {
      opacity: 0.2;
    }
  `;
};
class Rs {
  /**
   * Constructor function which sets up the local object.
   *
   * @method constructor
   * @param d3Svg containing d3 SVG
   * @param tooltip tooltip div
   * @param dimensions chart dimensions
   * @param truncate text truncate length
   * @param axisLabels chart axis labels
   * @param scales chart axis scales
   * @throws {Error} invalid parameters
   */
  constructor({
    d3Svg: e,
    tooltip: n,
    dimensions: r,
    truncate: i = 2,
    axisLabels: o,
    scales: s
  }) {
    if (this.render = at((a) => {
      a !== void 0 && (this.dimensions = a), this.dimensions !== void 0 && (this.renderAxisX(), this.renderAxisY(), this.renderLabels());
    }), !P(e))
      throw new Error("No SVG provided to Axis constructor.");
    this.dimensions = r, this.d3Svg = e, this.tooltip = n, this.truncate = i, this.axisLabels = o ?? ["", ""], this.scales = s, this.axisGroupX = e.append("g").attr("class", "pic-axis pic-axis-x"), this.axisGroupY = e.append("g").attr("class", "pic-axis pic-axis-y"), this.render(), Os();
  }
  /**
   * Render the x axis
   *
   * @method renderAxisX
   */
  renderAxisX() {
    const { height: e, padding: n } = this.dimensions;
    this.scales.x !== void 0 && this.axisGroupX.call(Cs(this.scales.x.axisScale)).attr("transform", `translate(${n.l},${e - n.b})`).selectAll("text").attr("x", -5).attr("y", 6).attr("transform", "rotate(310)").attr("class", "pic-axis-label pic-axis-label-x").text((r) => Gn(r, this.truncate)).style("text-anchor", "end").on("mousemove", (r, i) => {
      i.length > this.truncate && this.tooltip.ping(`<strong>${i}</strong>`, r);
    }).on("mouseout", this.tooltip.hide);
  }
  /**
   * Render the y axis
   *
   * @method renderAxisY
   */
  renderAxisY() {
    const { innerWidth: e, padding: n } = this.dimensions;
    this.scales.y !== void 0 && this.axisGroupY.call(Ts(this.scales.y.axisScale)).attr("transform", `translate(${n.l},0)`).selectAll(".pic-axis-y .tick line").attr("class", "pic-line").attr("x2", () => e);
  }
  /**
   * Render the labels
   *
   * @method renderLabels
   */
  renderLabels() {
    var i, o, s, a;
    const { height: e, width: n, padding: r } = this.dimensions;
    this.d3Svg.selectAll("text.pic-label").remove(), P((i = this.axisLabels) == null ? void 0 : i[0]) && this.d3Svg.append("text").attr("class", "pic-label pic-label-x").attr("x", e / -2 + r.b / 2).attr("y", 15).attr("font-size", "14px").attr("transform", "rotate(-90)").attr("text-anchor", "middle").text(((o = this.axisLabels) == null ? void 0 : o[0]) ?? ""), P((s = this.axisLabels) == null ? void 0 : s[1]) && this.d3Svg.append("text").attr("font-size", "14px").attr("class", "pic-label pic-label-y").attr("x", (n + r.l + r.r) / 2).attr("y", e - r.b / 3 - 3).attr("text-anchor", "middle").text(((a = this.axisLabels) == null ? void 0 : a[1]) ?? "");
  }
}
function ne(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const Ee = Symbol("implicit");
function dn() {
  var t = new we(), e = [], n = [], r = Ee;
  function i(o) {
    let s = t.get(o);
    if (s === void 0) {
      if (r !== Ee)
        return r;
      t.set(o, s = e.push(o) - 1);
    }
    return n[s % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new we();
    for (const s of o)
      t.has(s) || t.set(s, e.push(s) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return dn(e, n).unknown(r);
  }, ne.apply(i, arguments), i;
}
function pn() {
  var t = dn().unknown(void 0), e = t.domain, n = t.range, r = 0, i = 1, o, s, a = !1, u = 0, l = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var f = e().length, d = i < r, p = d ? i : r, m = d ? r : i;
    o = (m - p) / Math.max(1, f - u + l * 2), a && (o = Math.floor(o)), p += (m - p - o * (f - u)) * c, s = o * (1 - u), a && (p = Math.round(p), s = Math.round(s));
    var v = gr(f).map(function(E) {
      return p + o * E;
    });
    return n(d ? v.reverse() : v);
  }
  return t.domain = function(f) {
    return arguments.length ? (e(f), h()) : e();
  }, t.range = function(f) {
    return arguments.length ? ([r, i] = f, r = +r, i = +i, h()) : [r, i];
  }, t.rangeRound = function(f) {
    return [r, i] = f, r = +r, i = +i, a = !0, h();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return o;
  }, t.round = function(f) {
    return arguments.length ? (a = !!f, h()) : a;
  }, t.padding = function(f) {
    return arguments.length ? (u = Math.min(1, l = +f), h()) : u;
  }, t.paddingInner = function(f) {
    return arguments.length ? (u = Math.min(1, f), h()) : u;
  }, t.paddingOuter = function(f) {
    return arguments.length ? (l = +f, h()) : l;
  }, t.align = function(f) {
    return arguments.length ? (c = Math.max(0, Math.min(1, f)), h()) : c;
  }, t.copy = function() {
    return pn(e(), [r, i]).round(a).paddingInner(u).paddingOuter(l).align(c);
  }, ne.apply(h(), arguments);
}
const re = (t) => () => t;
function Fs(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function zs(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Is(t) {
  return (t = +t) == 1 ? gn : function(e, n) {
    return n - e ? zs(e, n, t) : re(isNaN(e) ? n : e);
  };
}
function gn(t, e) {
  var n = e - t;
  return n ? Fs(t, n) : re(isNaN(t) ? e : t);
}
const St = function t(e) {
  var n = Is(e);
  function r(i, o) {
    var s = n((i = it(i)).r, (o = it(o)).r), a = n(i.g, o.g), u = n(i.b, o.b), l = gn(i.opacity, o.opacity);
    return function(c) {
      return i.r = s(c), i.g = a(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ds(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i)
      r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Hs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ls(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), s;
  for (s = 0; s < r; ++s)
    i[s] = ie(t[s], e[s]);
  for (; s < n; ++s)
    o[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s)
      o[s] = i[s](a);
    return o;
  };
}
function Ps(t, e) {
  var n = new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function O(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Vs(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = ie(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n)
      r[i] = n[i](o);
    return r;
  };
}
var Wt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Pt = new RegExp(Wt.source, "g");
function qs(t) {
  return function() {
    return t;
  };
}
function Bs(t) {
  return function(e) {
    return t(e) + "";
  };
}
function mn(t, e) {
  var n = Wt.lastIndex = Pt.lastIndex = 0, r, i, o, s = -1, a = [], u = [];
  for (t = t + "", e = e + ""; (r = Wt.exec(t)) && (i = Pt.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, u.push({ i: s, x: O(r, i) })), n = Pt.lastIndex;
  return n < e.length && (o = e.slice(n), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? u[0] ? Bs(u[0].x) : qs(e) : (e = u.length, function(l) {
    for (var c = 0, h; c < e; ++c)
      a[(h = u[c]).i] = h.x(l);
    return a.join("");
  });
}
function ie(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? re(e) : (n === "number" ? O : n === "string" ? (r = B(e)) ? (e = r, St) : mn : e instanceof B ? St : e instanceof Date ? Ps : Hs(e) ? Ds : Array.isArray(e) ? Ls : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Vs : O)(t, e);
}
function Xs(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Se = 180 / Math.PI, Yt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vn(t, e, n, r, i, o) {
  var s, a, u;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (u = t * n + e * r) && (n -= t * u, r -= e * u), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, u /= a), t * r < e * n && (t = -t, e = -e, u = -u, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Se,
    skewX: Math.atan(u) * Se,
    scaleX: s,
    scaleY: a
  };
}
var pt;
function Gs(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Yt : vn(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ws(t) {
  return t == null || (pt || (pt = document.createElementNS("http://www.w3.org/2000/svg", "g")), pt.setAttribute("transform", t), !(t = pt.transform.baseVal.consolidate())) ? Yt : (t = t.matrix, vn(t.a, t.b, t.c, t.d, t.e, t.f));
}
function yn(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, h, f, d, p) {
    if (l !== h || c !== f) {
      var m = d.push("translate(", null, e, null, n);
      p.push({ i: m - 4, x: O(l, h) }, { i: m - 2, x: O(c, f) });
    } else
      (h || f) && d.push("translate(" + h + e + f + n);
  }
  function s(l, c, h, f) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: O(l, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function a(l, c, h, f) {
    l !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: O(l, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function u(l, c, h, f, d, p) {
    if (l !== h || c !== f) {
      var m = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: O(l, h) }, { i: m - 2, x: O(c, f) });
    } else
      (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(l, c) {
    var h = [], f = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, h, f), s(l.rotate, c.rotate, h, f), a(l.skewX, c.skewX, h, f), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, h, f), l = c = null, function(d) {
      for (var p = -1, m = f.length, v; ++p < m; )
        h[(v = f[p]).i] = v.x(d);
      return h.join("");
    };
  };
}
var Ys = yn(Gs, "px, ", "px)", "deg)"), Ks = yn(Ws, ", ", ")", ")");
function Us(t) {
  return function() {
    return t;
  };
}
function Zs(t) {
  return +t;
}
var Ne = [0, 1];
function W(t) {
  return t;
}
function Kt(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Us(isNaN(e) ? NaN : 0.5);
}
function Js(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Qs(t, e, n) {
  var r = t[0], i = t[1], o = e[0], s = e[1];
  return i < r ? (r = Kt(i, r), o = n(s, o)) : (r = Kt(r, i), o = n(o, s)), function(a) {
    return o(r(a));
  };
}
function js(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), s = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < r; )
    i[s] = Kt(t[s], t[s + 1]), o[s] = n(e[s], e[s + 1]);
  return function(a) {
    var u = or(t, a, 1, r) - 1;
    return o[u](i[u](a));
  };
}
function to(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function eo() {
  var t = Ne, e = Ne, n = ie, r, i, o, s = W, a, u, l;
  function c() {
    var f = Math.min(t.length, e.length);
    return s !== W && (s = Js(t[0], t[f - 1])), a = f > 2 ? js : Qs, u = l = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (u || (u = a(t.map(r), e, n)))(r(s(f)));
  }
  return h.invert = function(f) {
    return s(i((l || (l = a(e, t.map(r), O)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Zs), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), c()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = Xs, c();
  }, h.clamp = function(f) {
    return arguments.length ? (s = f ? !0 : W, c()) : s !== W;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, c()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, d) {
    return r = f, i = d, c();
  };
}
function no() {
  return eo()(W, W);
}
function ro(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Nt(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Z(t) {
  return t = Nt(Math.abs(t)), t ? t[1] : NaN;
}
function io(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], s = 0, a = t[0], u = 0; i > 0 && a > 0 && (u + a + 1 > r && (a = Math.max(1, r - u)), o.push(n.substring(i -= a, i + a)), !((u += a + 1) > r)); )
      a = t[s = (s + 1) % t.length];
    return o.reverse().join(e);
  };
}
function so(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var oo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $t(t) {
  if (!(e = oo.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new se({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
$t.prototype = se.prototype;
function se(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
se.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ao(t) {
  t:
    for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
      switch (t[n]) {
        case ".":
          r = i = n;
          break;
        case "0":
          r === 0 && (r = n), i = n;
          break;
        default:
          if (!+t[n])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var wn;
function uo(t, e) {
  var n = Nt(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1], o = i - (wn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = r.length;
  return o === s ? r : o > s ? r + new Array(o - s + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Nt(t, Math.max(0, e + o - 1))[0];
}
function $e(t, e) {
  var n = Nt(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ce = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ro,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => $e(t * 100, e),
  r: $e,
  s: uo,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Te(t) {
  return t;
}
var Oe = Array.prototype.map, Re = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function lo(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Te : io(Oe.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Te : so(Oe.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(h) {
    h = $t(h);
    var f = h.fill, d = h.align, p = h.sign, m = h.symbol, v = h.zero, E = h.width, A = h.comma, x = h.precision, b = h.trim, y = h.type;
    y === "n" ? (A = !0, y = "g") : Ce[y] || (x === void 0 && (x = 12), b = !0, y = "g"), (v || f === "0" && d === "=") && (v = !0, f = "0", d = "=");
    var w = m === "$" ? n : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", $ = m === "$" ? r : /[%p]/.test(y) ? s : "", T = Ce[y], _ = /[defgprs%]/.test(y);
    x = x === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function M(g) {
      var S = w, k = $, G, le, lt;
      if (y === "c")
        k = T(g) + k, g = "";
      else {
        g = +g;
        var ct = g < 0 || 1 / g < 0;
        if (g = isNaN(g) ? u : T(Math.abs(g), x), b && (g = ao(g)), ct && +g == 0 && p !== "+" && (ct = !1), S = (ct ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + S, k = (y === "s" ? Re[8 + wn / 3] : "") + k + (ct && p === "(" ? ")" : ""), _) {
          for (G = -1, le = g.length; ++G < le; )
            if (lt = g.charCodeAt(G), 48 > lt || lt > 57) {
              k = (lt === 46 ? i + g.slice(G + 1) : g.slice(G)) + k, g = g.slice(0, G);
              break;
            }
        }
      }
      A && !v && (g = e(g, 1 / 0));
      var ft = S.length + g.length + k.length, D = ft < E ? new Array(E - ft + 1).join(f) : "";
      switch (A && v && (g = e(D + g, D.length ? E - k.length : 1 / 0), D = ""), d) {
        case "<":
          g = S + g + k + D;
          break;
        case "=":
          g = S + D + g + k;
          break;
        case "^":
          g = D.slice(0, ft = D.length >> 1) + S + g + k + D.slice(ft);
          break;
        default:
          g = D + S + g + k;
          break;
      }
      return o(g);
    }
    return M.toString = function() {
      return h + "";
    }, M;
  }
  function c(h, f) {
    var d = l((h = $t(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(Z(f) / 3))) * 3, m = Math.pow(10, -p), v = Re[8 + p / 3];
    return function(E) {
      return d(m * E) + v;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var gt, xn, _n;
co({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function co(t) {
  return gt = lo(t), xn = gt.format, _n = gt.formatPrefix, gt;
}
function fo(t) {
  return Math.max(0, -Z(Math.abs(t)));
}
function ho(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Z(e) / 3))) * 3 - Z(Math.abs(t)));
}
function po(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Z(e) - Z(t)) + 1;
}
function go(t, e, n, r) {
  var i = pr(t, e, n), o;
  switch (r = $t(r ?? ",f"), r.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = ho(i, s)) && (r.precision = o), _n(r, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = po(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = fo(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return xn(r);
}
function mo(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return dr(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return go(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, s = r[i], a = r[o], u, l, c = 10;
    for (a < s && (l = s, s = a, a = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = qt(s, a, n), l === u)
        return r[i] = s, r[o] = a, e(r);
      if (l > 0)
        s = Math.floor(s / l) * l, a = Math.ceil(a / l) * l;
      else if (l < 0)
        s = Math.ceil(s * l) / l, a = Math.floor(a * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function bn() {
  var t = no();
  return t.copy = function() {
    return to(t, bn());
  }, ne.apply(t, arguments), mo(t);
}
const Vt = {
  band: () => pn().padding(0.2),
  linear: () => bn()
};
class vo {
  constructor({
    scaleType: e = "band",
    dataSet: n,
    dimensions: r
  }) {
    var i;
    this.setData = (o) => {
      if (o === void 0)
        throw new Error("No data to set!");
      return this.dataSet = o, this;
    }, this.render = () => {
      const { padding: o, height: s, innerWidth: a } = this.dimensions;
      if (this.dataSet === void 0)
        throw new Error("No data to render scale!");
      if (this.scaleType === void 0 || !["band", "linear"].includes(this.scaleType))
        throw new Error("Unknown chart type!");
      const u = {
        band: [this.dataSet.data.map((l) => l.label), [0, a]],
        linear: [
          [this.dataSet.minValue, this.dataSet.maxValue],
          [s - o.b, o.t]
        ]
      }[this.scaleType];
      this.axisScale.domain(u[0]), this.axisScale.range(u[1]);
    }, this.scaleType = e, this.axisScale = (i = Vt[e]) == null ? void 0 : i.call(Vt), this.dimensions = r, this.dataSet = n, this.dataSet !== void 0 && this.render();
  }
}
const Fe = (t, e = 0) => t.slice(0, e).reduce((n, { labelWidth: r = 0 }) => n + r, 0);
class yo {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param {Object} d3Svg A d3 wrapped container element
   * @param {Array} values the config for the data to be displayed
   * @param {Integer} dimensions the chart dimensions
   */
  constructor({ d3Svg: e, values: n, dimensions: r }) {
    if (this.render = at(() => {
      const { innerWidth: i, height: o, padding: s } = this.dimensions;
      let a = 0;
      const u = i / 2 + s.l, l = o - 20;
      this.d3Svg.selectAll("g.pic-key-group").remove();
      const c = this.d3Svg.append("g").attr("class", "pic-key-group");
      c.selectAll("text.pic-key-label").data(this.values).enter().append("text").text(({ name: d }) => d).each((d, p, m) => {
        const v = m[p].getBoundingClientRect().width + 22;
        this.values[p].labelWidth = v, a += v - 2;
      }).attr("class", "pic-key-label").attr("x", (d, p) => Fe(this.values, p)).attr("y", 10).attr("width", 12).attr("height", 12).attr("font-family", "sans-serif").attr("font-size", "12px").attr("fill", "#222222"), c.selectAll("rect.pic-key").data(this.values).enter().append("rect").attr("class", "pic-key").attr("fill", ({ color: d }) => d).attr("x", (d, p) => Fe(this.values, p) - 16).attr("y", 0).attr("width", 12).attr("height", 12), a = u - a / 2, c.attr("transform", `translate(${a},${l})`);
    }), ![e, n, r].every(P))
      throw new Error("Incorrect parameters provided to Key constructor.");
    this.d3Svg = e, this.values = [...n], this.dimensions = r, this.render();
  }
}
const wo = (t) => +t;
function xo(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var _o = { value: () => {
} };
function Mn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new vt(n);
}
function vt(t) {
  this._ = t;
}
function bo(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
vt.prototype = Mn.prototype = {
  constructor: vt,
  on: function(t, e) {
    var n = this._, r = bo(t + "", n), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((i = (t = r[o]).type) && (i = Mo(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (i = (t = r[o]).type)
        n[i] = ze(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = ze(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new vt(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(e, n);
  }
};
function Mo(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ze(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = _o, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var J = 0, tt = 0, Q = 0, An = 1e3, Ct, et, Tt = 0, X = 0, zt = 0, st = typeof performance == "object" && performance.now ? performance : Date, kn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function oe() {
  return X || (kn(Ao), X = st.now() + zt);
}
function Ao() {
  X = 0;
}
function Ot() {
  this._call = this._time = this._next = null;
}
Ot.prototype = En.prototype = {
  constructor: Ot,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? oe() : +n) + (e == null ? 0 : +e), !this._next && et !== this && (et ? et._next = this : Ct = this, et = this), this._call = t, this._time = n, Ut();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ut());
  }
};
function En(t, e, n) {
  var r = new Ot();
  return r.restart(t, e, n), r;
}
function ko() {
  oe(), ++J;
  for (var t = Ct, e; t; )
    (e = X - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --J;
}
function Ie() {
  X = (Tt = st.now()) + zt, J = tt = 0;
  try {
    ko();
  } finally {
    J = 0, So(), X = 0;
  }
}
function Eo() {
  var t = st.now(), e = t - Tt;
  e > An && (zt -= e, Tt = t);
}
function So() {
  for (var t, e = Ct, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ct = n);
  et = t, Ut(r);
}
function Ut(t) {
  if (!J) {
    tt && (tt = clearTimeout(tt));
    var e = t - X;
    e > 24 ? (t < 1 / 0 && (tt = setTimeout(Ie, t - st.now() - zt)), Q && (Q = clearInterval(Q))) : (Q || (Tt = st.now(), Q = setInterval(Eo, An)), J = 1, kn(Ie));
  }
}
function De(t, e, n) {
  var r = new Ot();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var No = Mn("start", "end", "cancel", "interrupt"), $o = [], Sn = 0, He = 1, Zt = 2, yt = 3, Le = 4, Jt = 5, wt = 6;
function It(t, e, n, r, i, o) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  Co(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: No,
    tween: $o,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Sn
  });
}
function ae(t, e) {
  var n = F(t, e);
  if (n.state > Sn)
    throw new Error("too late; already scheduled");
  return n;
}
function I(t, e) {
  var n = F(t, e);
  if (n.state > yt)
    throw new Error("too late; already running");
  return n;
}
function F(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function Co(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = En(o, 0, n.time);
  function o(l) {
    n.state = He, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var c, h, f, d;
    if (n.state !== He)
      return u();
    for (c in r)
      if (d = r[c], d.name === n.name) {
        if (d.state === yt)
          return De(s);
        d.state === Le ? (d.state = wt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < e && (d.state = wt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (De(function() {
      n.state === yt && (n.state = Le, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = Zt, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Zt) {
      for (n.state = yt, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function a(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = Jt, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Jt && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = wt, n.timer.stop(), delete r[e];
    for (var l in r)
      return;
    delete t.__transition;
  }
}
function To(t, e) {
  var n = t.__transition, r, i, o = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Zt && r.state < Jt, r.state = wt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    o && delete t.__transition;
  }
}
function Oo(t) {
  return this.each(function() {
    To(this, t);
  });
}
function Ro(t, e) {
  var n, r;
  return function() {
    var i = I(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Fo(t, e, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var o = I(this, t), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var a = { name: e, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === e) {
          i[u] = a;
          break;
        }
      u === l && i.push(a);
    }
    o.tween = i;
  };
}
function zo(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = F(this.node(), n).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Ro : Fo)(n, t, e));
}
function ue(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = I(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return F(i, r).value[e];
  };
}
function Nn(t, e) {
  var n;
  return (typeof e == "number" ? O : e instanceof B ? St : (n = B(e)) ? (e = n, St) : mn)(t, e);
}
function Io(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Do(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ho(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttribute(t);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function Lo(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function Po(t, e, n) {
  var r, i, o;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), u = a + "", s === u ? null : s === r && u === i ? o : (i = u, o = e(r = s, a)));
  };
}
function Vo(t, e, n) {
  var r, i, o;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), u = a + "", s === u ? null : s === r && u === i ? o : (i = u, o = e(r = s, a)));
  };
}
function qo(t, e) {
  var n = Rt(t), r = n === "transform" ? Ks : Nn;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Vo : Po)(n, r, ue(this, "attr." + t, e)) : e == null ? (n.local ? Do : Io)(n) : (n.local ? Lo : Ho)(n, r, e));
}
function Bo(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Xo(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Go(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Xo(t, o)), n;
  }
  return i._value = e, i;
}
function Wo(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Bo(t, o)), n;
  }
  return i._value = e, i;
}
function Yo(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var r = Rt(t);
  return this.tween(n, (r.local ? Go : Wo)(r, e));
}
function Ko(t, e) {
  return function() {
    ae(this, t).delay = +e.apply(this, arguments);
  };
}
function Uo(t, e) {
  return e = +e, function() {
    ae(this, t).delay = e;
  };
}
function Zo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ko : Uo)(e, t)) : F(this.node(), e).delay;
}
function Jo(t, e) {
  return function() {
    I(this, t).duration = +e.apply(this, arguments);
  };
}
function Qo(t, e) {
  return e = +e, function() {
    I(this, t).duration = e;
  };
}
function jo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Jo : Qo)(e, t)) : F(this.node(), e).duration;
}
function ta(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    I(this, t).ease = e;
  };
}
function ea(t) {
  var e = this._id;
  return arguments.length ? this.each(ta(e, t)) : F(this.node(), e).ease;
}
function na(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    I(this, t).ease = n;
  };
}
function ra(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(na(this._id, t));
}
function ia(t) {
  typeof t != "function" && (t = Ke(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = [], u, l = 0; l < s; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && a.push(u);
  return new L(r, this._parents, this._name, this._id);
}
function sa(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var u = e[a], l = n[a], c = u.length, h = s[a] = new Array(c), f, d = 0; d < c; ++d)
      (f = u[d] || l[d]) && (h[d] = f);
  for (; a < r; ++a)
    s[a] = e[a];
  return new L(s, this._parents, this._name, this._id);
}
function oa(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function aa(t, e, n) {
  var r, i, o = oa(e) ? ae : I;
  return function() {
    var s = o(this, t), a = s.on;
    a !== r && (i = (r = a).copy()).on(e, n), s.on = i;
  };
}
function ua(t, e) {
  var n = this._id;
  return arguments.length < 2 ? F(this.node(), n).on.on(t) : this.each(aa(n, t, e));
}
function la(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function ca() {
  return this.on("end.remove", la(this._id));
}
function fa(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = jt(t));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], u = a.length, l = o[s] = new Array(u), c, h, f = 0; f < u; ++f)
      (c = a[f]) && (h = t.call(c, c.__data__, f, a)) && ("__data__" in c && (h.__data__ = c.__data__), l[f] = h, It(l[f], e, n, f, l, F(c, n)));
  return new L(o, this._parents, e, n);
}
function ha(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ye(t));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, c, h = 0; h < l; ++h)
      if (c = u[h]) {
        for (var f = t.call(c, c.__data__, h, u), d, p = F(c, n), m = 0, v = f.length; m < v; ++m)
          (d = f[m]) && It(d, e, n, m, f, p);
        o.push(f), s.push(c);
      }
  return new L(o, s, e, n);
}
var da = ut.prototype.constructor;
function pa() {
  return new da(this._groups, this._parents);
}
function ga(t, e) {
  var n, r, i;
  return function() {
    var o = K(this, t), s = (this.style.removeProperty(t), K(this, t));
    return o === s ? null : o === n && s === r ? i : i = e(n = o, r = s);
  };
}
function $n(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ma(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = K(this, t);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function va(t, e, n) {
  var r, i, o;
  return function() {
    var s = K(this, t), a = n(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(t), K(this, t))), s === u ? null : s === r && u === i ? o : (i = u, o = e(r = s, a));
  };
}
function ya(t, e) {
  var n, r, i, o = "style." + e, s = "end." + o, a;
  return function() {
    var u = I(this, t), l = u.on, c = u.value[o] == null ? a || (a = $n(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(s, i = c), u.on = r;
  };
}
function wa(t, e, n) {
  var r = (t += "") == "transform" ? Ys : Nn;
  return e == null ? this.styleTween(t, ga(t, r)).on("end.style." + t, $n(t)) : typeof e == "function" ? this.styleTween(t, va(t, r, ue(this, "style." + t, e))).each(ya(this._id, t)) : this.styleTween(t, ma(t, r, e), n).on("end.style." + t, null);
}
function xa(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function _a(t, e, n) {
  var r, i;
  function o() {
    var s = e.apply(this, arguments);
    return s !== i && (r = (i = s) && xa(t, s, n)), r;
  }
  return o._value = e, o;
}
function ba(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, _a(t, e, n ?? ""));
}
function Ma(t) {
  return function() {
    this.textContent = t;
  };
}
function Aa(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function ka(t) {
  return this.tween("text", typeof t == "function" ? Aa(ue(this, "text", t)) : Ma(t == null ? "" : t + ""));
}
function Ea(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Sa(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ea(i)), e;
  }
  return r._value = t, r;
}
function Na(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Sa(t));
}
function $a() {
  for (var t = this._name, e = this._id, n = Cn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
      if (u = s[l]) {
        var c = F(u, e);
        It(u, t, n, l, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new L(r, this._parents, t, n);
}
function Ca() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, s) {
    var a = { value: s }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = I(this, r), c = l.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(u)), l.on = e;
    }), i === 0 && o();
  });
}
var Ta = 0;
function L(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Cn() {
  return ++Ta;
}
var H = ut.prototype;
L.prototype = {
  constructor: L,
  select: fa,
  selectAll: ha,
  selectChild: H.selectChild,
  selectChildren: H.selectChildren,
  filter: ia,
  merge: sa,
  selection: pa,
  transition: $a,
  call: H.call,
  nodes: H.nodes,
  node: H.node,
  size: H.size,
  empty: H.empty,
  each: H.each,
  on: ua,
  attr: qo,
  attrTween: Yo,
  style: wa,
  styleTween: ba,
  text: ka,
  textTween: Na,
  remove: ca,
  tween: zo,
  delay: Zo,
  duration: jo,
  ease: ea,
  easeVarying: ra,
  end: Ca,
  [Symbol.iterator]: H[Symbol.iterator]
};
var Oa = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: xo
};
function Ra(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Fa(t) {
  var e, n;
  t instanceof L ? (e = t._id, t = t._name) : (e = Cn(), (n = Oa).time = oe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && It(u, t, e, l, s, n || Ra(u, e));
  return new L(r, this._parents, t, e);
}
ut.prototype.interrupt = Oo;
ut.prototype.transition = Fa;
class za {
  /**
   * Optional callback for clicking on the chart
   *
   * @property config
   */
  // clickCallback: (e: MouseEvent, d: TableItem) => void
  /**
   * Constructor used to set chart type
   *
   * @method constructor
   */
  constructor({
    d3Svg: e,
    config: n,
    dataSet: r,
    scales: i,
    tooltip: o,
    dimensions: s,
    transitionTime: a
  }) {
    if (this.bars = [], this.render = at(
      ({ reset: u = !1, transition: l = !1 } = {}) => {
        if (this.scales.x === void 0 || this.scales.y === void 0)
          return;
        const { data: c, minValue: h, maxValue: f } = this.dataSet, { values: d } = this.config, { innerHeight: p, padding: m } = this.dimensions, v = this.scales.x.axisScale, E = this.scales.y.axisScale, A = v.bandwidth() / d.length, x = l ? this.transitionTime : 0;
        u && (this.bars.forEach((b, y) => {
          b = this.chartGroup.selectAll(`rect.pic-bars-${y}`).data([]), b.exit().remove(), b = void 0;
        }), this.bars = []), d.forEach(({ rgbColor: b, name: y }, w) => {
          const $ = A * w;
          this.bars[w] === void 0 && (this.bars[w] = this.chartGroup.selectAll(`rect.pic-bars-${w}`).data(c), this.bars[w].enter().append("rect").on("mousemove", (_, M) => {
            this.tooltip.ping([M.label, y, String(M.values[w])], _);
          }).on("mouseover", ({ target: _ }) => {
            At(_).attr(
              "fill",
              Qn(b).formatHex()
            );
          }).on("mouseout", ({ target: _ }) => {
            this.tooltip.hide(), At(_).attr(
              "fill",
              b.formatHex()
            );
          }).attr("class", `pic-bars pic-bars-${w}`).attr("fill", b.formatHex()).attr("y", p + m.t).attr("height", 0));
          let T = this.chartGroup.selectAll(`rect.pic-bars-${w}`).data(c).attr("x", (_) => Number(v(_.label)) + $).attr("width", A);
          typeof T.transition == "function" && (T = T.transition().ease(wo).duration(x)), T.attr("y", (_) => {
            let M = _.values[w];
            return M = M < 0 ? Math.abs(M) : 0, E(_.values[w] + M);
          }).attr("height", (_) => {
            const M = h < 0 ? Math.abs(f) : 0, g = Math.abs(_.values[w]) - M;
            return p - E(g) + m.t;
          });
        });
      }
    ), n === void 0 || r === void 0 || i === void 0)
      throw new Error("Table is incorrectly initialised.");
    this.config = n, this.dataSet = r, this.scales = i, this.tooltip = o, this.dimensions = s, this.transitionTime = a, this.chartGroup = e.append("g").attr("class", "pic-bars-group").attr("transform", `translate(${s.padding.l}, 0)`), this.render({ transition: !0 });
  }
}
const Ha = ({ config: t, theme: e, data: n, label: r }) => {
  const i = ce(null), o = ce();
  return On(() => {
    i.current && !o.current && (o.current = new _s({
      container: i.current,
      config: t,
      theme: e,
      data: n,
      label: r
    }).addDefaults());
  }, [i.current]), /* @__PURE__ */ Tn("div", { ref: i, style: { height: "400px" } });
};
export {
  Ha as default
};
