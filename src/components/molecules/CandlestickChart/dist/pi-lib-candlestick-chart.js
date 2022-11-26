import Y, { useState as Pt, useEffect as yt, useRef as ge } from "react";
import St, { css as pe } from "styled-components";
const an = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, me = "font-family: serif;", ye = St.button(
  ({ status: t, minWidth: n }) => pe`
    ${me}
    border: 2px solid ${an[t]};
    color: ${an[t]};
    background-color: white;
    border-radius: 15px;
    min-width: ${n};
    padding: 10px;
    margin: 15px;
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `
), un = ({
  children: t,
  status: n = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: r = "220px",
  ...i
}) => /* @__PURE__ */ Y.createElement(ye, {
  status: n,
  ...i,
  minWidth: r,
  "data-selector": e
}, t), we = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, _e = St.svg`
  border: 1px solid ${we.success};
  width: 100%;
  height: 100%;
`, xe = St.div`
  width: 100%;
  height: 100%;
`, ve = St.div`
  position: absolute;
`;
function dt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function be(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function In(t) {
  let n, e, r;
  t.length !== 2 ? (n = dt, e = (u, s) => dt(t(u), s), r = (u, s) => t(u) - s) : (n = t === dt || t === be ? t : Me, e = t, r = t);
  function i(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (n(s, s) !== 0)
        return c;
      do {
        const l = f + c >>> 1;
        e(u[l], s) < 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function o(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (n(s, s) !== 0)
        return c;
      do {
        const l = f + c >>> 1;
        e(u[l], s) <= 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function a(u, s, f = 0, c = u.length) {
    const l = i(u, s, f, c - 1);
    return l > f && r(u[l - 1], s) > -r(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: a, right: o };
}
function Me() {
  return 0;
}
function ke(t) {
  return t === null ? NaN : +t;
}
const Ne = In(dt), Ae = Ne.right;
In(ke).center;
const Se = Ae;
class sn extends Map {
  constructor(n, e = Ce) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(fn(this, n));
  }
  has(n) {
    return super.has(fn(this, n));
  }
  set(n, e) {
    return super.set($e(this, n), e);
  }
  delete(n) {
    return super.delete(Ee(this, n));
  }
}
function fn({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function $e({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function Ee({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function Ce(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var Ht = Math.sqrt(50), Ot = Math.sqrt(10), Dt = Math.sqrt(2);
function Re(t, n, e) {
  var r, i = -1, o, a, u;
  if (n = +n, t = +t, e = +e, t === n && e > 0)
    return [t];
  if ((r = n < t) && (o = t, t = n, n = o), (u = Fn(t, n, e)) === 0 || !isFinite(u))
    return [];
  if (u > 0) {
    let s = Math.round(t / u), f = Math.round(n / u);
    for (s * u < t && ++s, f * u > n && --f, a = new Array(o = f - s + 1); ++i < o; )
      a[i] = (s + i) * u;
  } else {
    u = -u;
    let s = Math.round(t * u), f = Math.round(n * u);
    for (s / u < t && ++s, f / u > n && --f, a = new Array(o = f - s + 1); ++i < o; )
      a[i] = (s + i) / u;
  }
  return r && a.reverse(), a;
}
function Fn(t, n, e) {
  var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
  return i >= 0 ? (o >= Ht ? 10 : o >= Ot ? 5 : o >= Dt ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Ht ? 10 : o >= Ot ? 5 : o >= Dt ? 2 : 1);
}
function Te(t, n, e) {
  var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
  return o >= Ht ? i *= 10 : o >= Ot ? i *= 5 : o >= Dt && (i *= 2), n < t ? -i : i;
}
function Ie(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function Gt(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const cn = Symbol("implicit");
function Pn() {
  var t = new sn(), n = [], e = [], r = cn;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== cn)
        return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new sn();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Pn(n, e).unknown(r);
  }, Gt.apply(i, arguments), i;
}
function Hn() {
  var t = Pn().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, u = !1, s = 0, f = 0, c = 0.5;
  delete t.unknown;
  function l() {
    var h = n().length, d = i < r, g = d ? i : r, m = d ? r : i;
    o = (m - g) / Math.max(1, h - s + f * 2), u && (o = Math.floor(o)), g += (m - g - o * (h - s)) * c, a = o * (1 - s), u && (g = Math.round(g), a = Math.round(a));
    var w = Ie(h).map(function(k) {
      return g + o * k;
    });
    return e(d ? w.reverse() : w);
  }
  return t.domain = function(h) {
    return arguments.length ? (n(h), l()) : n();
  }, t.range = function(h) {
    return arguments.length ? ([r, i] = h, r = +r, i = +i, l()) : [r, i];
  }, t.rangeRound = function(h) {
    return [r, i] = h, r = +r, i = +i, u = !0, l();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(h) {
    return arguments.length ? (u = !!h, l()) : u;
  }, t.padding = function(h) {
    return arguments.length ? (s = Math.min(1, f = +h), l()) : s;
  }, t.paddingInner = function(h) {
    return arguments.length ? (s = Math.min(1, h), l()) : s;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (f = +h, l()) : f;
  }, t.align = function(h) {
    return arguments.length ? (c = Math.max(0, Math.min(1, h)), l()) : c;
  }, t.copy = function() {
    return Hn(n(), [r, i]).round(u).paddingInner(s).paddingOuter(f).align(c);
  }, Gt.apply(l(), arguments);
}
function Kt(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function On(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function rt() {
}
var tt = 0.7, wt = 1 / tt, W = "\\s*([+-]?\\d+)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", R = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fe = /^#([0-9a-f]{3,8})$/, Pe = new RegExp(`^rgb\\(${W},${W},${W}\\)$`), He = new RegExp(`^rgb\\(${R},${R},${R}\\)$`), Oe = new RegExp(`^rgba\\(${W},${W},${W},${nt}\\)$`), De = new RegExp(`^rgba\\(${R},${R},${R},${nt}\\)$`), qe = new RegExp(`^hsl\\(${nt},${R},${R}\\)$`), ze = new RegExp(`^hsla\\(${nt},${R},${R},${nt}\\)$`), ln = {
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
Kt(rt, z, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hn,
  formatHex: hn,
  formatHex8: Le,
  formatHsl: Ve,
  formatRgb: dn,
  toString: dn
});
function hn() {
  return this.rgb().formatHex();
}
function Le() {
  return this.rgb().formatHex8();
}
function Ve() {
  return Dn(this).formatHsl();
}
function dn() {
  return this.rgb().formatRgb();
}
function z(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Fe.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? gn(n) : e === 3 ? new M(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? st(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? st(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Pe.exec(t)) ? new M(n[1], n[2], n[3], 1) : (n = He.exec(t)) ? new M(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Oe.exec(t)) ? st(n[1], n[2], n[3], n[4]) : (n = De.exec(t)) ? st(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = qe.exec(t)) ? yn(n[1], n[2] / 100, n[3] / 100, 1) : (n = ze.exec(t)) ? yn(n[1], n[2] / 100, n[3] / 100, n[4]) : ln.hasOwnProperty(t) ? gn(ln[t]) : t === "transparent" ? new M(NaN, NaN, NaN, 0) : null;
}
function gn(t) {
  return new M(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function st(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new M(t, n, e, r);
}
function Xe(t) {
  return t instanceof rt || (t = z(t)), t ? (t = t.rgb(), new M(t.r, t.g, t.b, t.opacity)) : new M();
}
function qt(t, n, e, r) {
  return arguments.length === 1 ? Xe(t) : new M(t, n, e, r == null ? 1 : r);
}
function M(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Kt(M, qt, On(rt, {
  brighter(t) {
    return t = t == null ? wt : Math.pow(wt, t), new M(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? tt : Math.pow(tt, t), new M(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new M(q(this.r), q(this.g), q(this.b), _t(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: pn,
  formatHex: pn,
  formatHex8: Be,
  formatRgb: mn,
  toString: mn
}));
function pn() {
  return `#${D(this.r)}${D(this.g)}${D(this.b)}`;
}
function Be() {
  return `#${D(this.r)}${D(this.g)}${D(this.b)}${D((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mn() {
  const t = _t(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${q(this.r)}, ${q(this.g)}, ${q(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _t(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function q(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function D(t) {
  return t = q(t), (t < 16 ? "0" : "") + t.toString(16);
}
function yn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new $(t, n, e, r);
}
function Dn(t) {
  if (t instanceof $)
    return new $(t.h, t.s, t.l, t.opacity);
  if (t instanceof rt || (t = z(t)), !t)
    return new $();
  if (t instanceof $)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, s = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= s < 0.5 ? o + i : 2 - o - i, a *= 60) : u = s > 0 && s < 1 ? 0 : a, new $(a, u, s, t.opacity);
}
function Ye(t, n, e, r) {
  return arguments.length === 1 ? Dn(t) : new $(t, n, e, r == null ? 1 : r);
}
function $(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Kt($, Ye, On(rt, {
  brighter(t) {
    return t = t == null ? wt : Math.pow(wt, t), new $(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? tt : Math.pow(tt, t), new $(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new M(
      Rt(t >= 240 ? t - 240 : t + 120, i, r),
      Rt(t, i, r),
      Rt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new $(wn(this.h), ft(this.s), ft(this.l), _t(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = _t(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${wn(this.h)}, ${ft(this.s) * 100}%, ${ft(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function wn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ft(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Rt(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Zt = (t) => () => t;
function Ue(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function We(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Ge(t) {
  return (t = +t) == 1 ? qn : function(n, e) {
    return e - n ? We(n, e, t) : Zt(isNaN(n) ? e : n);
  };
}
function qn(t, n) {
  var e = n - t;
  return e ? Ue(t, e) : Zt(isNaN(t) ? n : t);
}
const xt = function t(n) {
  var e = Ge(n);
  function r(i, o) {
    var a = e((i = qt(i)).r, (o = qt(o)).r), u = e(i.g, o.g), s = e(i.b, o.b), f = qn(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = u(c), i.b = s(c), i.opacity = f(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ke(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Ze(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Je(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = Jt(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](u);
    return o;
  };
}
function Qe(t, n) {
  var e = new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function S(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function je(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Jt(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var zt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Tt = new RegExp(zt.source, "g");
function tr(t) {
  return function() {
    return t;
  };
}
function nr(t) {
  return function(n) {
    return t(n) + "";
  };
}
function zn(t, n) {
  var e = zt.lastIndex = Tt.lastIndex = 0, r, i, o, a = -1, u = [], s = [];
  for (t = t + "", n = n + ""; (r = zt.exec(t)) && (i = Tt.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, s.push({ i: a, x: S(r, i) })), e = Tt.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? s[0] ? nr(s[0].x) : tr(n) : (n = s.length, function(f) {
    for (var c = 0, l; c < n; ++c)
      u[(l = s[c]).i] = l.x(f);
    return u.join("");
  });
}
function Jt(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Zt(n) : (e === "number" ? S : e === "string" ? (r = z(n)) ? (n = r, xt) : zn : n instanceof z ? xt : n instanceof Date ? Qe : Ze(n) ? Ke : Array.isArray(n) ? Je : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? je : S)(t, n);
}
function er(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var _n = 180 / Math.PI, Lt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ln(t, n, e, r, i, o) {
  var a, u, s;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (s = t * e + n * r) && (e -= t * s, r -= n * s), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, s /= u), t * r < n * e && (t = -t, n = -n, s = -s, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * _n,
    skewX: Math.atan(s) * _n,
    scaleX: a,
    scaleY: u
  };
}
var ct;
function rr(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Lt : Ln(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ir(t) {
  return t == null || (ct || (ct = document.createElementNS("http://www.w3.org/2000/svg", "g")), ct.setAttribute("transform", t), !(t = ct.transform.baseVal.consolidate())) ? Lt : (t = t.matrix, Ln(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Vn(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, c, l, h, d, g) {
    if (f !== l || c !== h) {
      var m = d.push("translate(", null, n, null, e);
      g.push({ i: m - 4, x: S(f, l) }, { i: m - 2, x: S(c, h) });
    } else
      (l || h) && d.push("translate(" + l + n + h + e);
  }
  function a(f, c, l, h) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), h.push({ i: l.push(i(l) + "rotate(", null, r) - 2, x: S(f, c) })) : c && l.push(i(l) + "rotate(" + c + r);
  }
  function u(f, c, l, h) {
    f !== c ? h.push({ i: l.push(i(l) + "skewX(", null, r) - 2, x: S(f, c) }) : c && l.push(i(l) + "skewX(" + c + r);
  }
  function s(f, c, l, h, d, g) {
    if (f !== l || c !== h) {
      var m = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: S(f, l) }, { i: m - 2, x: S(c, h) });
    } else
      (l !== 1 || h !== 1) && d.push(i(d) + "scale(" + l + "," + h + ")");
  }
  return function(f, c) {
    var l = [], h = [];
    return f = t(f), c = t(c), o(f.translateX, f.translateY, c.translateX, c.translateY, l, h), a(f.rotate, c.rotate, l, h), u(f.skewX, c.skewX, l, h), s(f.scaleX, f.scaleY, c.scaleX, c.scaleY, l, h), f = c = null, function(d) {
      for (var g = -1, m = h.length, w; ++g < m; )
        l[(w = h[g]).i] = w.x(d);
      return l.join("");
    };
  };
}
var or = Vn(rr, "px, ", "px)", "deg)"), ar = Vn(ir, ", ", ")", ")");
function ur(t) {
  return function() {
    return t;
  };
}
function sr(t) {
  return +t;
}
var xn = [0, 1];
function U(t) {
  return t;
}
function Vt(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : ur(isNaN(n) ? NaN : 0.5);
}
function fr(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function cr(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Vt(i, r), o = e(a, o)) : (r = Vt(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function lr(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Vt(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var s = Se(t, u, 1, r) - 1;
    return o[s](i[s](u));
  };
}
function hr(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function dr() {
  var t = xn, n = xn, e = Jt, r, i, o, a = U, u, s, f;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== U && (a = fr(t[0], t[h - 1])), u = h > 2 ? lr : cr, s = f = null, l;
  }
  function l(h) {
    return h == null || isNaN(h = +h) ? o : (s || (s = u(t.map(r), n, e)))(r(a(h)));
  }
  return l.invert = function(h) {
    return a(i((f || (f = u(n, t.map(r), S)))(h)));
  }, l.domain = function(h) {
    return arguments.length ? (t = Array.from(h, sr), c()) : t.slice();
  }, l.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, l.rangeRound = function(h) {
    return n = Array.from(h), e = er, c();
  }, l.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : U, c()) : a !== U;
  }, l.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, l.unknown = function(h) {
    return arguments.length ? (o = h, l) : o;
  }, function(h, d) {
    return r = h, i = d, c();
  };
}
function gr() {
  return dr()(U, U);
}
function pr(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function vt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function G(t) {
  return t = vt(Math.abs(t)), t ? t[1] : NaN;
}
function mr(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)), o.push(e.substring(i -= u, i + u)), !((s += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function yr(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var wr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function bt(t) {
  if (!(n = wr.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new Qt({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
bt.prototype = Qt.prototype;
function Qt(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Qt.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function _r(t) {
  t:
    for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
      switch (t[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+t[e])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Xn;
function xr(t, n) {
  var e = vt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (Xn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + vt(t, Math.max(0, n + o - 1))[0];
}
function vn(t, n) {
  var e = vt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const bn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: pr,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => vn(t * 100, n),
  r: vn,
  s: xr,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Mn(t) {
  return t;
}
var kn = Array.prototype.map, Nn = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function vr(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Mn : mr(kn.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Mn : yr(kn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "\u2212" : t.minus + "", s = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(l) {
    l = bt(l);
    var h = l.fill, d = l.align, g = l.sign, m = l.symbol, w = l.zero, k = l.width, b = l.comma, _ = l.precision, C = l.trim, y = l.type;
    y === "n" ? (b = !0, y = "g") : bn[y] || (_ === void 0 && (_ = 12), C = !0, y = "g"), (w || h === "0" && d === "=") && (w = !0, h = "0", d = "=");
    var H = m === "$" ? e : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", A = m === "$" ? r : /[%p]/.test(y) ? a : "", V = bn[y], X = /[defgprs%]/.test(y);
    _ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function O(p) {
      var v = H, x = A, B, on, ot;
      if (y === "c")
        x = V(p) + x, p = "";
      else {
        p = +p;
        var at = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? s : V(Math.abs(p), _), C && (p = _r(p)), at && +p == 0 && g !== "+" && (at = !1), v = (at ? g === "(" ? g : u : g === "-" || g === "(" ? "" : g) + v, x = (y === "s" ? Nn[8 + Xn / 3] : "") + x + (at && g === "(" ? ")" : ""), X) {
          for (B = -1, on = p.length; ++B < on; )
            if (ot = p.charCodeAt(B), 48 > ot || ot > 57) {
              x = (ot === 46 ? i + p.slice(B + 1) : p.slice(B)) + x, p = p.slice(0, B);
              break;
            }
        }
      }
      b && !w && (p = n(p, 1 / 0));
      var ut = v.length + p.length + x.length, I = ut < k ? new Array(k - ut + 1).join(h) : "";
      switch (b && w && (p = n(I + p, I.length ? k - x.length : 1 / 0), I = ""), d) {
        case "<":
          p = v + p + x + I;
          break;
        case "=":
          p = v + I + p + x;
          break;
        case "^":
          p = I.slice(0, ut = I.length >> 1) + v + p + x + I.slice(ut);
          break;
        default:
          p = I + v + p + x;
          break;
      }
      return o(p);
    }
    return O.toString = function() {
      return l + "";
    }, O;
  }
  function c(l, h) {
    var d = f((l = bt(l), l.type = "f", l)), g = Math.max(-8, Math.min(8, Math.floor(G(h) / 3))) * 3, m = Math.pow(10, -g), w = Nn[8 + g / 3];
    return function(k) {
      return d(m * k) + w;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var lt, Bn, Yn;
br({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function br(t) {
  return lt = vr(t), Bn = lt.format, Yn = lt.formatPrefix, lt;
}
function Mr(t) {
  return Math.max(0, -G(Math.abs(t)));
}
function kr(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(G(n) / 3))) * 3 - G(Math.abs(t)));
}
function Nr(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, G(n) - G(t)) + 1;
}
function Ar(t, n, e, r) {
  var i = Te(t, n, e), o;
  switch (r = bt(r == null ? ",f" : r), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = kr(i, a)) && (r.precision = o), Yn(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Nr(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Mr(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Bn(r);
}
function Sr(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Re(r[0], r[r.length - 1], e == null ? 10 : e);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Ar(i[0], i[i.length - 1], e == null ? 10 : e, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], s, f, c = 10;
    for (u < a && (f = a, a = u, u = f, f = i, i = o, o = f); c-- > 0; ) {
      if (f = Fn(a, u, e), f === s)
        return r[i] = a, r[o] = u, n(r);
      if (f > 0)
        a = Math.floor(a / f) * f, u = Math.ceil(u / f) * f;
      else if (f < 0)
        a = Math.ceil(a * f) / f, u = Math.floor(u * f) / f;
      else
        break;
      s = f;
    }
    return t;
  }, t;
}
function Un() {
  var t = gr();
  return t.copy = function() {
    return hr(t, Un());
  }, Gt.apply(t, arguments), Sr(t);
}
const { abs: $r, min: Er } = Math, Cr = (t, n) => {
  const [e, r] = Pt({ width: 0, height: 0 }), [i, o] = Pt({
    xScale: (s) => s,
    yScale: (s) => s
  });
  yt(() => {
    const { clientWidth: s, clientHeight: f } = t.current;
    r({ width: s, height: f });
    const c = Math.max(...n.map(({ high: l }) => l));
    o({
      xScale: Hn().range([20, s - 20]).domain(n.map(({ date: l }) => l)).padding(0.3),
      yScale: Un().domain([0, c]).range([0, f])
    });
  }, []);
  const a = (s, f) => i.yScale($r(s - f)) || 1;
  return { scaledHeight: a, scaledY: (s, f) => e.height - i.yScale(Er(s, f)) - a(s, f), ...e, ...i };
};
function Rr(t) {
  return t;
}
var It = 1, Ft = 2, Xt = 3, ht = 4, An = 1e-6;
function Tr(t) {
  return "translate(" + t + ",0)";
}
function Ir(t) {
  return "translate(0," + t + ")";
}
function Fr(t) {
  return (n) => +t(n);
}
function Pr(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Hr() {
  return !this.__axis;
}
function Or(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, u = 3, s = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, f = t === It || t === ht ? -1 : 1, c = t === ht || t === Ft ? "x" : "y", l = t === It || t === Xt ? Tr : Ir;
  function h(d) {
    var g = r == null ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r, m = i == null ? n.tickFormat ? n.tickFormat.apply(n, e) : Rr : i, w = Math.max(o, 0) + u, k = n.range(), b = +k[0] + s, _ = +k[k.length - 1] + s, C = (n.bandwidth ? Pr : Fr)(n.copy(), s), y = d.selection ? d.selection() : d, H = y.selectAll(".domain").data([null]), A = y.selectAll(".tick").data(g, n).order(), V = A.exit(), X = A.enter().append("g").attr("class", "tick"), O = A.select("line"), p = A.select("text");
    H = H.merge(H.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(X), O = O.merge(X.append("line").attr("stroke", "currentColor").attr(c + "2", f * o)), p = p.merge(X.append("text").attr("fill", "currentColor").attr(c, f * w).attr("dy", t === It ? "0em" : t === Xt ? "0.71em" : "0.32em")), d !== y && (H = H.transition(d), A = A.transition(d), O = O.transition(d), p = p.transition(d), V = V.transition(d).attr("opacity", An).attr("transform", function(v) {
      return isFinite(v = C(v)) ? l(v + s) : this.getAttribute("transform");
    }), X.attr("opacity", An).attr("transform", function(v) {
      var x = this.parentNode.__axis;
      return l((x && isFinite(x = x(v)) ? x : C(v)) + s);
    })), V.remove(), H.attr("d", t === ht || t === Ft ? a ? "M" + f * a + "," + b + "H" + s + "V" + _ + "H" + f * a : "M" + s + "," + b + "V" + _ : a ? "M" + b + "," + f * a + "V" + s + "H" + _ + "V" + f * a : "M" + b + "," + s + "H" + _), A.attr("opacity", 1).attr("transform", function(v) {
      return l(C(v) + s);
    }), O.attr(c + "2", f * o), p.attr(c, f * w).text(m), y.filter(Hr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ft ? "start" : t === ht ? "end" : "middle"), y.each(function() {
      this.__axis = C;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (n = d, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), h) : e.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), h) : r && r.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (i = d, h) : i;
  }, h.tickSize = function(d) {
    return arguments.length ? (o = a = +d, h) : o;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.tickPadding = function(d) {
    return arguments.length ? (u = +d, h) : u;
  }, h.offset = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h;
}
function Dr(t) {
  return Or(Xt, t);
}
var Bt = "http://www.w3.org/1999/xhtml";
const Sn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Bt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function $t(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Sn.hasOwnProperty(n) ? { space: Sn[n], local: t } : t;
}
function qr(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Bt && n.documentElement.namespaceURI === Bt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function zr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Wn(t) {
  var n = $t(t);
  return (n.local ? zr : qr)(n);
}
function Lr() {
}
function jt(t) {
  return t == null ? Lr : function() {
    return this.querySelector(t);
  };
}
function Vr(t) {
  typeof t != "function" && (t = jt(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), s, f, c = 0; c < a; ++c)
      (s = o[c]) && (f = t.call(s, s.__data__, c, o)) && ("__data__" in s && (f.__data__ = s.__data__), u[c] = f);
  return new N(r, this._parents);
}
function Xr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Br() {
  return [];
}
function Gn(t) {
  return t == null ? Br : function() {
    return this.querySelectorAll(t);
  };
}
function Yr(t) {
  return function() {
    return Xr(t.apply(this, arguments));
  };
}
function Ur(t) {
  typeof t == "function" ? t = Yr(t) : t = Gn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, s, f = 0; f < u; ++f)
      (s = a[f]) && (r.push(t.call(s, s.__data__, f, a)), i.push(s));
  return new N(r, i);
}
function Kn(t) {
  return function() {
    return this.matches(t);
  };
}
function Zn(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Wr = Array.prototype.find;
function Gr(t) {
  return function() {
    return Wr.call(this.children, t);
  };
}
function Kr() {
  return this.firstElementChild;
}
function Zr(t) {
  return this.select(t == null ? Kr : Gr(typeof t == "function" ? t : Zn(t)));
}
var Jr = Array.prototype.filter;
function Qr() {
  return Array.from(this.children);
}
function jr(t) {
  return function() {
    return Jr.call(this.children, t);
  };
}
function ti(t) {
  return this.selectAll(t == null ? Qr : jr(typeof t == "function" ? t : Zn(t)));
}
function ni(t) {
  typeof t != "function" && (t = Kn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], s, f = 0; f < a; ++f)
      (s = o[f]) && t.call(s, s.__data__, f, o) && u.push(s);
  return new N(r, this._parents);
}
function Jn(t) {
  return new Array(t.length);
}
function ei() {
  return new N(this._enter || this._groups.map(Jn), this._parents);
}
function Mt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Mt.prototype = {
  constructor: Mt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function ri(t) {
  return function() {
    return t;
  };
}
function ii(t, n, e, r, i, o) {
  for (var a = 0, u, s = n.length, f = o.length; a < f; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new Mt(t, o[a]);
  for (; a < s; ++a)
    (u = n[a]) && (i[a] = u);
}
function oi(t, n, e, r, i, o, a) {
  var u, s, f = /* @__PURE__ */ new Map(), c = n.length, l = o.length, h = new Array(c), d;
  for (u = 0; u < c; ++u)
    (s = n[u]) && (h[u] = d = a.call(s, s.__data__, u, n) + "", f.has(d) ? i[u] = s : f.set(d, s));
  for (u = 0; u < l; ++u)
    d = a.call(t, o[u], u, o) + "", (s = f.get(d)) ? (r[u] = s, s.__data__ = o[u], f.delete(d)) : e[u] = new Mt(t, o[u]);
  for (u = 0; u < c; ++u)
    (s = n[u]) && f.get(h[u]) === s && (i[u] = s);
}
function ai(t) {
  return t.__data__;
}
function ui(t, n) {
  if (!arguments.length)
    return Array.from(this, ai);
  var e = n ? oi : ii, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ri(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), s = new Array(o), f = 0; f < o; ++f) {
    var c = r[f], l = i[f], h = l.length, d = si(t.call(c, c && c.__data__, f, r)), g = d.length, m = u[f] = new Array(g), w = a[f] = new Array(g), k = s[f] = new Array(h);
    e(c, l, m, w, k, d, n);
    for (var b = 0, _ = 0, C, y; b < g; ++b)
      if (C = m[b]) {
        for (b >= _ && (_ = b + 1); !(y = w[_]) && ++_ < g; )
          ;
        C._next = y || null;
      }
  }
  return a = new N(a, r), a._enter = u, a._exit = s, a;
}
function si(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function fi() {
  return new N(this._exit || this._groups.map(Jn), this._parents);
}
function ci(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function li(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), s = 0; s < a; ++s)
    for (var f = e[s], c = r[s], l = f.length, h = u[s] = new Array(l), d, g = 0; g < l; ++g)
      (d = f[g] || c[g]) && (h[g] = d);
  for (; s < i; ++s)
    u[s] = e[s];
  return new N(u, this._parents);
}
function hi() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function di(t) {
  t || (t = gi);
  function n(l, h) {
    return l && h ? t(l.__data__, h.__data__) : !l - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, s = i[o] = new Array(u), f, c = 0; c < u; ++c)
      (f = a[c]) && (s[c] = f);
    s.sort(n);
  }
  return new N(i, this._parents).order();
}
function gi(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function pi() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function mi() {
  return Array.from(this);
}
function yi() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function wi() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function _i() {
  return !this.node();
}
function xi(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function vi(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function bi(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Mi(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function ki(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Ni(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ai(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Si(t, n) {
  var e = $t(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? bi : vi : typeof n == "function" ? e.local ? Ai : Ni : e.local ? ki : Mi)(e, n));
}
function Qn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function $i(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ei(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Ci(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ri(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? $i : typeof n == "function" ? Ci : Ei)(t, n, e == null ? "" : e)) : K(this.node(), t);
}
function K(t, n) {
  return t.style.getPropertyValue(n) || Qn(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ti(t) {
  return function() {
    delete this[t];
  };
}
function Ii(t, n) {
  return function() {
    this[t] = n;
  };
}
function Fi(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Pi(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ti : typeof n == "function" ? Fi : Ii)(t, n)) : this.node()[t];
}
function jn(t) {
  return t.trim().split(/^|\s+/);
}
function tn(t) {
  return t.classList || new te(t);
}
function te(t) {
  this._node = t, this._names = jn(t.getAttribute("class") || "");
}
te.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ne(t, n) {
  for (var e = tn(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function ee(t, n) {
  for (var e = tn(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Hi(t) {
  return function() {
    ne(this, t);
  };
}
function Oi(t) {
  return function() {
    ee(this, t);
  };
}
function Di(t, n) {
  return function() {
    (n.apply(this, arguments) ? ne : ee)(this, t);
  };
}
function qi(t, n) {
  var e = jn(t + "");
  if (arguments.length < 2) {
    for (var r = tn(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Di : n ? Hi : Oi)(e, n));
}
function zi() {
  this.textContent = "";
}
function Li(t) {
  return function() {
    this.textContent = t;
  };
}
function Vi(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n == null ? "" : n;
  };
}
function Xi(t) {
  return arguments.length ? this.each(t == null ? zi : (typeof t == "function" ? Vi : Li)(t)) : this.node().textContent;
}
function Bi() {
  this.innerHTML = "";
}
function Yi(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ui(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n == null ? "" : n;
  };
}
function Wi(t) {
  return arguments.length ? this.each(t == null ? Bi : (typeof t == "function" ? Ui : Yi)(t)) : this.node().innerHTML;
}
function Gi() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ki() {
  return this.each(Gi);
}
function Zi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ji() {
  return this.each(Zi);
}
function Qi(t) {
  var n = typeof t == "function" ? t : Wn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function ji() {
  return null;
}
function to(t, n) {
  var e = typeof t == "function" ? t : Wn(t), r = n == null ? ji : typeof n == "function" ? n : jt(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function no() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function eo() {
  return this.each(no);
}
function ro() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function io() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function oo(t) {
  return this.select(t ? io : ro);
}
function ao(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function uo(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function so(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function fo(t) {
  return function() {
    var n = this.__on;
    if (!!n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function co(t, n, e) {
  return function() {
    var r = this.__on, i, o = uo(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function lo(t, n, e) {
  var r = so(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var s = 0, f = u.length, c; s < f; ++s)
        for (i = 0, c = u[s]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? co : fo, i = 0; i < o; ++i)
    this.each(u(r[i], n, e));
  return this;
}
function re(t, n, e) {
  var r = Qn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ho(t, n) {
  return function() {
    return re(this, t, n);
  };
}
function go(t, n) {
  return function() {
    return re(this, t, n.apply(this, arguments));
  };
}
function po(t, n) {
  return this.each((typeof n == "function" ? go : ho)(t, n));
}
function* mo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ie = [null];
function N(t, n) {
  this._groups = t, this._parents = n;
}
function it() {
  return new N([[document.documentElement]], ie);
}
function yo() {
  return this;
}
N.prototype = it.prototype = {
  constructor: N,
  select: Vr,
  selectAll: Ur,
  selectChild: Zr,
  selectChildren: ti,
  filter: ni,
  data: ui,
  enter: ei,
  exit: fi,
  join: ci,
  merge: li,
  selection: yo,
  order: hi,
  sort: di,
  call: pi,
  nodes: mi,
  node: yi,
  size: wi,
  empty: _i,
  each: xi,
  attr: Si,
  style: Ri,
  property: Pi,
  classed: qi,
  text: Xi,
  html: Wi,
  raise: Ki,
  lower: Ji,
  append: Qi,
  insert: to,
  remove: eo,
  clone: oo,
  datum: ao,
  on: lo,
  dispatch: po,
  [Symbol.iterator]: mo
};
function oe(t) {
  return typeof t == "string" ? new N([[document.querySelector(t)]], [document.documentElement]) : new N([[t]], ie);
}
const wo = (t, n, e) => {
  yt(() => {
    n.domain && oe(t.current).append("g").call(Dr(n)).attr("transform", `translate(0,${e - 70})`).selectAll("text").attr("x", -35).attr("y", -4).attr("transform", "rotate(270)").text(
      (r, i) => i % 5 && i < n.domain().length - 1 ? "" : String(r)
    );
  }, [n]);
};
var _o = { value: () => {
} };
function ae() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new gt(e);
}
function gt(t) {
  this._ = t;
}
function xo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
gt.prototype = ae.prototype = {
  constructor: gt,
  on: function(t, n) {
    var e = this._, r = xo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = vo(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = $n(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = $n(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new gt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  }
};
function vo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function $n(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = _o, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Z = 0, Q = 0, J = 0, ue = 1e3, kt, j, Nt = 0, L = 0, Et = 0, et = typeof performance == "object" && performance.now ? performance : Date, se = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function nn() {
  return L || (se(bo), L = et.now() + Et);
}
function bo() {
  L = 0;
}
function At() {
  this._call = this._time = this._next = null;
}
At.prototype = fe.prototype = {
  constructor: At,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? nn() : +e) + (n == null ? 0 : +n), !this._next && j !== this && (j ? j._next = this : kt = this, j = this), this._call = t, this._time = e, Yt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yt());
  }
};
function fe(t, n, e) {
  var r = new At();
  return r.restart(t, n, e), r;
}
function Mo() {
  nn(), ++Z;
  for (var t = kt, n; t; )
    (n = L - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Z;
}
function En() {
  L = (Nt = et.now()) + Et, Z = Q = 0;
  try {
    Mo();
  } finally {
    Z = 0, No(), L = 0;
  }
}
function ko() {
  var t = et.now(), n = t - Nt;
  n > ue && (Et -= n, Nt = t);
}
function No() {
  for (var t, n = kt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : kt = e);
  j = t, Yt(r);
}
function Yt(t) {
  if (!Z) {
    Q && (Q = clearTimeout(Q));
    var n = t - L;
    n > 24 ? (t < 1 / 0 && (Q = setTimeout(En, t - et.now() - Et)), J && (J = clearInterval(J))) : (J || (Nt = et.now(), J = setInterval(ko, ue)), Z = 1, se(En));
  }
}
function Cn(t, n, e) {
  var r = new At();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ao = ae("start", "end", "cancel", "interrupt"), So = [], ce = 0, Rn = 1, Ut = 2, pt = 3, Tn = 4, Wt = 5, mt = 6;
function Ct(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  $o(t, e, {
    name: n,
    index: r,
    group: i,
    on: Ao,
    tween: So,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ce
  });
}
function en(t, n) {
  var e = E(t, n);
  if (e.state > ce)
    throw new Error("too late; already scheduled");
  return e;
}
function T(t, n) {
  var e = E(t, n);
  if (e.state > pt)
    throw new Error("too late; already running");
  return e;
}
function E(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function $o(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = fe(o, 0, e.time);
  function o(f) {
    e.state = Rn, e.timer.restart(a, e.delay, e.time), e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var c, l, h, d;
    if (e.state !== Rn)
      return s();
    for (c in r)
      if (d = r[c], d.name === e.name) {
        if (d.state === pt)
          return Cn(a);
        d.state === Tn ? (d.state = mt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < n && (d.state = mt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (Cn(function() {
      e.state === pt && (e.state = Tn, e.timer.restart(u, e.delay, e.time), u(f));
    }), e.state = Ut, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ut) {
      for (e.state = pt, i = new Array(h = e.tween.length), c = 0, l = -1; c < h; ++c)
        (d = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++l] = d);
      i.length = l + 1;
    }
  }
  function u(f) {
    for (var c = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(s), e.state = Wt, 1), l = -1, h = i.length; ++l < h; )
      i[l].call(t, c);
    e.state === Wt && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    e.state = mt, e.timer.stop(), delete r[n];
    for (var f in r)
      return;
    delete t.__transition;
  }
}
function Eo(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (!!e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Ut && r.state < Wt, r.state = mt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Co(t) {
  return this.each(function() {
    Eo(this, t);
  });
}
function Ro(t, n) {
  var e, r;
  return function() {
    var i = T(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function To(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = T(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, s = 0, f = i.length; s < f; ++s)
        if (i[s].name === n) {
          i[s] = u;
          break;
        }
      s === f && i.push(u);
    }
    o.tween = i;
  };
}
function Io(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = E(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Ro : To)(e, t, n));
}
function rn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = T(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return E(i, r).value[n];
  };
}
function le(t, n) {
  var e;
  return (typeof n == "number" ? S : n instanceof z ? xt : (e = z(n)) ? (n = e, xt) : zn)(t, n);
}
function Fo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Po(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ho(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Oo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Do(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), s;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), s = u + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, u)));
  };
}
function qo(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), s;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), s = u + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, u)));
  };
}
function zo(t, n) {
  var e = $t(t), r = e === "transform" ? ar : le;
  return this.attrTween(t, typeof n == "function" ? (e.local ? qo : Do)(e, r, rn(this, "attr." + t, n)) : n == null ? (e.local ? Po : Fo)(e) : (e.local ? Oo : Ho)(e, r, n));
}
function Lo(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Vo(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Xo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vo(t, o)), e;
  }
  return i._value = n, i;
}
function Bo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Lo(t, o)), e;
  }
  return i._value = n, i;
}
function Yo(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = $t(t);
  return this.tween(e, (r.local ? Xo : Bo)(r, n));
}
function Uo(t, n) {
  return function() {
    en(this, t).delay = +n.apply(this, arguments);
  };
}
function Wo(t, n) {
  return n = +n, function() {
    en(this, t).delay = n;
  };
}
function Go(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Uo : Wo)(n, t)) : E(this.node(), n).delay;
}
function Ko(t, n) {
  return function() {
    T(this, t).duration = +n.apply(this, arguments);
  };
}
function Zo(t, n) {
  return n = +n, function() {
    T(this, t).duration = n;
  };
}
function Jo(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ko : Zo)(n, t)) : E(this.node(), n).duration;
}
function Qo(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    T(this, t).ease = n;
  };
}
function jo(t) {
  var n = this._id;
  return arguments.length ? this.each(Qo(n, t)) : E(this.node(), n).ease;
}
function ta(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    T(this, t).ease = e;
  };
}
function na(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(ta(this._id, t));
}
function ea(t) {
  typeof t != "function" && (t = Kn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], s, f = 0; f < a; ++f)
      (s = o[f]) && t.call(s, s.__data__, f, o) && u.push(s);
  return new P(r, this._parents, this._name, this._id);
}
function ra(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var s = n[u], f = e[u], c = s.length, l = a[u] = new Array(c), h, d = 0; d < c; ++d)
      (h = s[d] || f[d]) && (l[d] = h);
  for (; u < r; ++u)
    a[u] = n[u];
  return new P(a, this._parents, this._name, this._id);
}
function ia(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function oa(t, n, e) {
  var r, i, o = ia(n) ? en : T;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function aa(t, n) {
  var e = this._id;
  return arguments.length < 2 ? E(this.node(), e).on.on(t) : this.each(oa(e, t, n));
}
function ua(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function sa() {
  return this.on("end.remove", ua(this._id));
}
function fa(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = jt(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], s = u.length, f = o[a] = new Array(s), c, l, h = 0; h < s; ++h)
      (c = u[h]) && (l = t.call(c, c.__data__, h, u)) && ("__data__" in c && (l.__data__ = c.__data__), f[h] = l, Ct(f[h], n, e, h, f, E(c, e)));
  return new P(o, this._parents, n, e);
}
function ca(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Gn(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var s = r[u], f = s.length, c, l = 0; l < f; ++l)
      if (c = s[l]) {
        for (var h = t.call(c, c.__data__, l, s), d, g = E(c, e), m = 0, w = h.length; m < w; ++m)
          (d = h[m]) && Ct(d, n, e, m, h, g);
        o.push(h), a.push(c);
      }
  return new P(o, a, n, e);
}
var la = it.prototype.constructor;
function ha() {
  return new la(this._groups, this._parents);
}
function da(t, n) {
  var e, r, i;
  return function() {
    var o = K(this, t), a = (this.style.removeProperty(t), K(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function he(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ga(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = K(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function pa(t, n, e) {
  var r, i, o;
  return function() {
    var a = K(this, t), u = e(this), s = u + "";
    return u == null && (s = u = (this.style.removeProperty(t), K(this, t))), a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, u));
  };
}
function ma(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var s = T(this, t), f = s.on, c = s.value[o] == null ? u || (u = he(n)) : void 0;
    (f !== e || i !== c) && (r = (e = f).copy()).on(a, i = c), s.on = r;
  };
}
function ya(t, n, e) {
  var r = (t += "") == "transform" ? or : le;
  return n == null ? this.styleTween(t, da(t, r)).on("end.style." + t, he(t)) : typeof n == "function" ? this.styleTween(t, pa(t, r, rn(this, "style." + t, n))).each(ma(this._id, t)) : this.styleTween(t, ga(t, r, n), e).on("end.style." + t, null);
}
function wa(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function _a(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && wa(t, a, e)), r;
  }
  return o._value = n, o;
}
function xa(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, _a(t, n, e == null ? "" : e));
}
function va(t) {
  return function() {
    this.textContent = t;
  };
}
function ba(t) {
  return function() {
    var n = t(this);
    this.textContent = n == null ? "" : n;
  };
}
function Ma(t) {
  return this.tween("text", typeof t == "function" ? ba(rn(this, "text", t)) : va(t == null ? "" : t + ""));
}
function ka(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Na(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && ka(i)), n;
  }
  return r._value = t, r;
}
function Aa(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Na(t));
}
function Sa() {
  for (var t = this._name, n = this._id, e = de(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, s, f = 0; f < u; ++f)
      if (s = a[f]) {
        var c = E(s, n);
        Ct(s, t, e, f, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new P(r, this._parents, t, e);
}
function $a() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, s = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var f = T(this, r), c = f.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(s)), f.on = n;
    }), i === 0 && o();
  });
}
var Ea = 0;
function P(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function de() {
  return ++Ea;
}
var F = it.prototype;
P.prototype = {
  constructor: P,
  select: fa,
  selectAll: ca,
  selectChild: F.selectChild,
  selectChildren: F.selectChildren,
  filter: ea,
  merge: ra,
  selection: ha,
  transition: Sa,
  call: F.call,
  nodes: F.nodes,
  node: F.node,
  size: F.size,
  empty: F.empty,
  each: F.each,
  on: aa,
  attr: zo,
  attrTween: Yo,
  style: ya,
  styleTween: xa,
  text: Ma,
  textTween: Aa,
  remove: sa,
  tween: Io,
  delay: Go,
  duration: Jo,
  ease: jo,
  easeVarying: na,
  end: $a,
  [Symbol.iterator]: F[Symbol.iterator]
};
function Ca(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ra = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Ca
};
function Ta(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ia(t) {
  var n, e;
  t instanceof P ? (n = t._id, t = t._name) : (n = de(), (e = Ra).time = nn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, s, f = 0; f < u; ++f)
      (s = a[f]) && Ct(s, t, n, f, a, e || Ta(s, n));
  return new P(r, this._parents, t, n);
}
it.prototype.interrupt = Co;
it.prototype.transition = Ia;
const Fa = 300, Pa = (t, n, e, r, i) => {
  const o = () => oe(t.current), a = (f, c = o()) => c.selectAll(`rect.${f}`).data(i), u = (f) => a(f, o().append("g")).enter().append("rect").attr("class", f), s = (f, c) => a(f).each(
    (l) => l.width = f === "wicks" ? 1 : Number(n.bandwidth())
  ).transition().duration(Fa).attr("width", (l) => {
    var h;
    return (h = l.width) != null ? h : 0;
  }).attr("height", (l) => e(l[c[0]], l[c[1]])).attr(
    "x",
    (l) => {
      var h;
      return Number(n(l.date)) + (f === "wicks" ? ((h = l == null ? void 0 : l.width) != null ? h : 0) + 2 : 0);
    }
  ).attr("y", (l) => r(l[c[0]], l[c[1]]));
  yt(() => {
    u("wicks").attr("fill", "grey"), u("candles");
  }, []), yt(() => {
    typeof n.bandwidth == "function" && (s("wicks", ["low", "high"]), s("candles", ["open", "close"]).attr(
      "fill",
      (f) => f.close < f.open ? "red" : "green"
    ));
  }, [i, n]);
}, Da = ({ data: t }) => {
  const n = ge(null), { scaledHeight: e, scaledY: r, xScale: i, height: o } = Cr(n, t);
  return Pt(1), Pa(n, i, e, r, t), wo(n, i, o), /* @__PURE__ */ Y.createElement(xe, null, /* @__PURE__ */ Y.createElement(ve, null, /* @__PURE__ */ Y.createElement(un, {
    minWidth: "auto"
  }, "-"), /* @__PURE__ */ Y.createElement(un, {
    minWidth: "auto"
  }, "+")), /* @__PURE__ */ Y.createElement(_e, {
    ref: n
  }));
};
export {
  Da as default
};
