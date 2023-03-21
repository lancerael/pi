var Cn = Object.defineProperty
var Fn = (t, e, n) =>
  e in t
    ? Cn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n)
var p = (t, e, n) => (Fn(t, typeof e != 'symbol' ? e + '' : e, n), n)
import { useRef as Dn, useEffect as In } from 'react'
import { jsx as he, Fragment as zn } from 'react/jsx-runtime'
function te(t, e, n) {
  ;(t.prototype = e.prototype = n), (n.constructor = t)
}
function qe(t, e) {
  var n = Object.create(t.prototype)
  for (var r in e) n[r] = e[r]
  return n
}
function ut() {}
var it = 0.7,
  bt = 1 / it,
  U = '\\s*([+-]?\\d+)\\s*',
  st = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  R = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  Hn = /^#([0-9a-f]{3,8})$/,
  Pn = new RegExp(`^rgb\\(${U},${U},${U}\\)$`),
  Ln = new RegExp(`^rgb\\(${R},${R},${R}\\)$`),
  Vn = new RegExp(`^rgba\\(${U},${U},${U},${st}\\)$`),
  qn = new RegExp(`^rgba\\(${R},${R},${R},${st}\\)$`),
  Xn = new RegExp(`^hsl\\(${st},${R},${R}\\)$`),
  Gn = new RegExp(`^hsla\\(${st},${R},${R},${st}\\)$`),
  de = {
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
    yellowgreen: 10145074,
  }
te(ut, X, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t)
  },
  displayable() {
    return this.rgb().displayable()
  },
  hex: pe,
  formatHex: pe,
  formatHex8: Bn,
  formatHsl: Wn,
  formatRgb: ge,
  toString: ge,
})
function pe() {
  return this.rgb().formatHex()
}
function Bn() {
  return this.rgb().formatHex8()
}
function Wn() {
  return Xe(this).formatHsl()
}
function ge() {
  return this.rgb().formatRgb()
}
function X(t) {
  var e, n
  return (
    (t = (t + '').trim().toLowerCase()),
    (e = Hn.exec(t))
      ? ((n = e[1].length),
        (e = parseInt(e[1], 16)),
        n === 6
          ? me(e)
          : n === 3
          ? new E(
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (e & 240),
              ((e & 15) << 4) | (e & 15),
              1
            )
          : n === 8
          ? dt(
              (e >> 24) & 255,
              (e >> 16) & 255,
              (e >> 8) & 255,
              (e & 255) / 255
            )
          : n === 4
          ? dt(
              ((e >> 12) & 15) | ((e >> 8) & 240),
              ((e >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (e & 240),
              (((e & 15) << 4) | (e & 15)) / 255
            )
          : null)
      : (e = Pn.exec(t))
      ? new E(e[1], e[2], e[3], 1)
      : (e = Ln.exec(t))
      ? new E((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, 1)
      : (e = Vn.exec(t))
      ? dt(e[1], e[2], e[3], e[4])
      : (e = qn.exec(t))
      ? dt((e[1] * 255) / 100, (e[2] * 255) / 100, (e[3] * 255) / 100, e[4])
      : (e = Xn.exec(t))
      ? we(e[1], e[2] / 100, e[3] / 100, 1)
      : (e = Gn.exec(t))
      ? we(e[1], e[2] / 100, e[3] / 100, e[4])
      : de.hasOwnProperty(t)
      ? me(de[t])
      : t === 'transparent'
      ? new E(NaN, NaN, NaN, 0)
      : null
  )
}
function me(t) {
  return new E((t >> 16) & 255, (t >> 8) & 255, t & 255, 1)
}
function dt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new E(t, e, n, r)
}
function Yn(t) {
  return (
    t instanceof ut || (t = X(t)),
    t ? ((t = t.rgb()), new E(t.r, t.g, t.b, t.opacity)) : new E()
  )
}
function ot(t, e, n, r) {
  return arguments.length === 1 ? Yn(t) : new E(t, e, n, r == null ? 1 : r)
}
function E(t, e, n, r) {
  ;(this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r)
}
te(
  E,
  ot,
  qe(ut, {
    brighter(t) {
      return (
        (t = t == null ? bt : Math.pow(bt, t)),
        new E(this.r * t, this.g * t, this.b * t, this.opacity)
      )
    },
    darker(t) {
      return (
        (t = t == null ? it : Math.pow(it, t)),
        new E(this.r * t, this.g * t, this.b * t, this.opacity)
      )
    },
    rgb() {
      return this
    },
    clamp() {
      return new E(q(this.r), q(this.g), q(this.b), Mt(this.opacity))
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    hex: ve,
    formatHex: ve,
    formatHex8: Kn,
    formatRgb: ye,
    toString: ye,
  })
)
function ve() {
  return `#${V(this.r)}${V(this.g)}${V(this.b)}`
}
function Kn() {
  return `#${V(this.r)}${V(this.g)}${V(this.b)}${V(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`
}
function ye() {
  const t = Mt(this.opacity)
  return `${t === 1 ? 'rgb(' : 'rgba('}${q(this.r)}, ${q(this.g)}, ${q(
    this.b
  )}${t === 1 ? ')' : `, ${t})`}`
}
function Mt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
}
function q(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0))
}
function V(t) {
  return (t = q(t)), (t < 16 ? '0' : '') + t.toString(16)
}
function we(t, e, n, r) {
  return (
    r <= 0
      ? (t = e = n = NaN)
      : n <= 0 || n >= 1
      ? (t = e = NaN)
      : e <= 0 && (t = NaN),
    new T(t, e, n, r)
  )
}
function Xe(t) {
  if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity)
  if ((t instanceof ut || (t = X(t)), !t)) return new T()
  if (t instanceof T) return t
  t = t.rgb()
  var e = t.r / 255,
    n = t.g / 255,
    r = t.b / 255,
    i = Math.min(e, n, r),
    s = Math.max(e, n, r),
    o = NaN,
    a = s - i,
    u = (s + i) / 2
  return (
    a
      ? (e === s
          ? (o = (n - r) / a + (n < r) * 6)
          : n === s
          ? (o = (r - e) / a + 2)
          : (o = (e - n) / a + 4),
        (a /= u < 0.5 ? s + i : 2 - s - i),
        (o *= 60))
      : (a = u > 0 && u < 1 ? 0 : o),
    new T(o, a, u, t.opacity)
  )
}
function Un(t, e, n, r) {
  return arguments.length === 1 ? Xe(t) : new T(t, e, n, r == null ? 1 : r)
}
function T(t, e, n, r) {
  ;(this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r)
}
te(
  T,
  Un,
  qe(ut, {
    brighter(t) {
      return (
        (t = t == null ? bt : Math.pow(bt, t)),
        new T(this.h, this.s, this.l * t, this.opacity)
      )
    },
    darker(t) {
      return (
        (t = t == null ? it : Math.pow(it, t)),
        new T(this.h, this.s, this.l * t, this.opacity)
      )
    },
    rgb() {
      var t = (this.h % 360) + (this.h < 0) * 360,
        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * e,
        i = 2 * n - r
      return new E(
        Pt(t >= 240 ? t - 240 : t + 120, i, r),
        Pt(t, i, r),
        Pt(t < 120 ? t + 240 : t - 120, i, r),
        this.opacity
      )
    },
    clamp() {
      return new T(_e(this.h), pt(this.s), pt(this.l), Mt(this.opacity))
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      )
    },
    formatHsl() {
      const t = Mt(this.opacity)
      return `${t === 1 ? 'hsl(' : 'hsla('}${_e(this.h)}, ${
        pt(this.s) * 100
      }%, ${pt(this.l) * 100}%${t === 1 ? ')' : `, ${t})`}`
    },
  })
)
function _e(t) {
  return (t = (t || 0) % 360), t < 0 ? t + 360 : t
}
function pt(t) {
  return Math.max(0, Math.min(1, t || 0))
}
function Pt(t, e, n) {
  return (
    (t < 60
      ? e + ((n - e) * t) / 60
      : t < 180
      ? n
      : t < 240
      ? e + ((n - e) * (240 - t)) / 60
      : e) * 255
  )
}
const Zn = (t, e) => (t.length > e ? `${t.slice(0, e)}[...]` : t),
  L = (t = 0, e = 1e4, n) => {
    let r = Math.floor(Math.random() * (t - e - 1)) + e + 1
    for (; r === n; ) r = L(t, e)
    return r
  },
  vt = (t, e) => new Array(t).fill(null).map(e),
  P = (t = void 0) => (t == null ? !1 : Boolean(t)),
  Ge = (t, e = 15) => {
    let n = !1
    return (...r) => {
      let i
      return (
        n ||
          ((i = t.apply(void 0, r)),
          (n = !0),
          setTimeout(() => {
            n = !1
          }, e)),
        i
      )
    }
  },
  Be = (t, e = '', n) => {
    const r = document.createElement(t)
    return (r.className = e), n == null || n.appendChild(r), r
  },
  We = (t) => t.replace(/( {2}|\r\n|\n|\r)/g, ''),
  Jn = (t) => We(t.replace(/ /g, '')),
  Qn = (t) => t.replace(/[^0-9a-z ]/gi, ''),
  jn = ([t, e, n], r = 'light', i = 170) => {
    const s = (t * 299 + e * 587 + n * 114) / 1e3
    return {
      light: s < i,
      dark: s > i,
    }[r]
  },
  tr = () => L(0, 255),
  er = (t = 'light', e = 170) => {
    const n = () => vt(3, tr)
    let r
    for (; r === void 0 || !jn(r, t, e); ) r = n()
    return ot(...r)
  },
  nr = (t) => t.darker(0.5),
  rr = (t, e = !0) =>
    t.map(({ color: n = er().formatHex(), ...r }) => ({
      color: n,
      rgbColor: e && ot(n),
      ...r,
    })),
  ir = (t = L(3, 10), e = L(1, 4), n = L(1, 50), r = L(n, 200)) => ({
    label: 'Random Chart Data',
    config: {
      axisLabels: ['Y Axis', 'X Axis'],
      trim: !0,
      values: vt(e, (i, s) => ({
        name: `Type ${Number(s) + 1}`,
      })),
    },
    data: vt(t, (i, s) => ({
      label: `Item ${Number(s) + 1}`,
      values: vt(e, () => L(n, r)),
    })),
  }),
  sr = (t, e) =>
    t === void 0
      ? e
      : e.map(
          (n) => (
            (n.values = t.values.map(({ key: r }, i) => {
              if (typeof r != 'string' && Array.isArray(n.values))
                return n.values[i]
              const s = parseInt(n[r != null ? r : ''])
              return isNaN(s) ? 0 : s
            })),
            Array.isArray(t.axisKeys) &&
              typeof n.label != 'string' &&
              ((n.label = n[t.axisKeys[0]]),
              typeof n.label != 'string' && (n.label = 'AXIS KEY MISMATCH')),
            n
          )
        )
function yt(t, e) {
  return t == null || e == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN
}
function or(t, e) {
  return t == null || e == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN
}
function Ye(t) {
  let e, n, r
  t.length !== 2
    ? ((e = yt), (n = (a, u) => yt(t(a), u)), (r = (a, u) => t(a) - u))
    : ((e = t === yt || t === or ? t : ar), (n = t), (r = t))
  function i(a, u, l = 0, c = a.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c
      do {
        const f = (l + c) >>> 1
        n(a[f], u) < 0 ? (l = f + 1) : (c = f)
      } while (l < c)
    }
    return l
  }
  function s(a, u, l = 0, c = a.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c
      do {
        const f = (l + c) >>> 1
        n(a[f], u) <= 0 ? (l = f + 1) : (c = f)
      } while (l < c)
    }
    return l
  }
  function o(a, u, l = 0, c = a.length) {
    const f = i(a, u, l, c - 1)
    return f > l && r(a[f - 1], u) > -r(a[f], u) ? f - 1 : f
  }
  return { left: i, center: o, right: s }
}
function ar() {
  return 0
}
function ur(t) {
  return t === null ? NaN : +t
}
const lr = Ye(yt),
  cr = lr.right
Ye(ur).center
const fr = cr
class xe extends Map {
  constructor(e, n = pr) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: /* @__PURE__ */ new Map() },
        _key: { value: n },
      }),
      e != null)
    )
      for (const [r, i] of e) this.set(r, i)
  }
  get(e) {
    return super.get(be(this, e))
  }
  has(e) {
    return super.has(be(this, e))
  }
  set(e, n) {
    return super.set(hr(this, e), n)
  }
  delete(e) {
    return super.delete(dr(this, e))
  }
}
function be({ _intern: t, _key: e }, n) {
  const r = e(n)
  return t.has(r) ? t.get(r) : n
}
function hr({ _intern: t, _key: e }, n) {
  const r = e(n)
  return t.has(r) ? t.get(r) : (t.set(r, n), n)
}
function dr({ _intern: t, _key: e }, n) {
  const r = e(n)
  return t.has(r) && ((n = t.get(r)), t.delete(r)), n
}
function pr(t) {
  return t !== null && typeof t == 'object' ? t.valueOf() : t
}
const gr = Math.sqrt(50),
  mr = Math.sqrt(10),
  vr = Math.sqrt(2)
function At(t, e, n) {
  const r = (e - t) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    s = r / Math.pow(10, i),
    o = s >= gr ? 10 : s >= mr ? 5 : s >= vr ? 2 : 1
  let a, u, l
  return (
    i < 0
      ? ((l = Math.pow(10, -i) / o),
        (a = Math.round(t * l)),
        (u = Math.round(e * l)),
        a / l < t && ++a,
        u / l > e && --u,
        (l = -l))
      : ((l = Math.pow(10, i) * o),
        (a = Math.round(t / l)),
        (u = Math.round(e / l)),
        a * l < t && ++a,
        u * l > e && --u),
    u < a && 0.5 <= n && n < 2 ? At(t, e, n * 2) : [a, u, l]
  )
}
function yr(t, e, n) {
  if (((e = +e), (t = +t), (n = +n), !(n > 0))) return []
  if (t === e) return [t]
  const r = e < t,
    [i, s, o] = r ? At(e, t, n) : At(t, e, n)
  if (!(s >= i)) return []
  const a = s - i + 1,
    u = new Array(a)
  if (r)
    if (o < 0) for (let l = 0; l < a; ++l) u[l] = (s - l) / -o
    else for (let l = 0; l < a; ++l) u[l] = (s - l) * o
  else if (o < 0) for (let l = 0; l < a; ++l) u[l] = (i + l) / -o
  else for (let l = 0; l < a; ++l) u[l] = (i + l) * o
  return u
}
function Gt(t, e, n) {
  return (e = +e), (t = +t), (n = +n), At(t, e, n)[2]
}
function wr(t, e, n) {
  ;(e = +e), (t = +t), (n = +n)
  const r = e < t,
    i = r ? Gt(e, t, n) : Gt(t, e, n)
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i)
}
function Me(t, e) {
  let n
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || (n === void 0 && r >= r)) && (n = r)
  else {
    let r = -1
    for (let i of t)
      (i = e(i, ++r, t)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i)
  }
  return n
}
function Ae(t, e) {
  let n
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || (n === void 0 && r >= r)) && (n = r)
  else {
    let r = -1
    for (let i of t)
      (i = e(i, ++r, t)) != null &&
        (n > i || (n === void 0 && i >= i)) &&
        (n = i)
  }
  return n
}
function _r(t, e, n) {
  ;(t = +t),
    (e = +e),
    (n = (i = arguments.length) < 2 ? ((e = t), (t = 0), 1) : i < 3 ? 1 : +n)
  for (
    var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, s = new Array(i);
    ++r < i;

  )
    s[r] = t + r * n
  return s
}
var Bt = 'http://www.w3.org/1999/xhtml'
const Ee = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: Bt,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
}
function Dt(t) {
  var e = (t += ''),
    n = e.indexOf(':')
  return (
    n >= 0 && (e = t.slice(0, n)) !== 'xmlns' && (t = t.slice(n + 1)),
    Ee.hasOwnProperty(e) ? { space: Ee[e], local: t } : t
  )
}
function xr(t) {
  return function () {
    var e = this.ownerDocument,
      n = this.namespaceURI
    return n === Bt && e.documentElement.namespaceURI === Bt
      ? e.createElement(t)
      : e.createElementNS(n, t)
  }
}
function br(t) {
  return function () {
    return this.ownerDocument.createElementNS(t.space, t.local)
  }
}
function Ke(t) {
  var e = Dt(t)
  return (e.local ? br : xr)(e)
}
function Mr() {}
function ee(t) {
  return t == null
    ? Mr
    : function () {
        return this.querySelector(t)
      }
}
function Ar(t) {
  typeof t != 'function' && (t = ee(t))
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (
      var s = e[i], o = s.length, a = (r[i] = new Array(o)), u, l, c = 0;
      c < o;
      ++c
    )
      (u = s[c]) &&
        (l = t.call(u, u.__data__, c, s)) &&
        ('__data__' in u && (l.__data__ = u.__data__), (a[c] = l))
  return new S(r, this._parents)
}
function Er(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t)
}
function Sr() {
  return []
}
function Ue(t) {
  return t == null
    ? Sr
    : function () {
        return this.querySelectorAll(t)
      }
}
function kr(t) {
  return function () {
    return Er(t.apply(this, arguments))
  }
}
function Nr(t) {
  typeof t == 'function' ? (t = kr(t)) : (t = Ue(t))
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
    for (var o = e[s], a = o.length, u, l = 0; l < a; ++l)
      (u = o[l]) && (r.push(t.call(u, u.__data__, l, o)), i.push(u))
  return new S(r, i)
}
function Ze(t) {
  return function () {
    return this.matches(t)
  }
}
function Je(t) {
  return function (e) {
    return e.matches(t)
  }
}
var $r = Array.prototype.find
function Tr(t) {
  return function () {
    return $r.call(this.children, t)
  }
}
function Or() {
  return this.firstElementChild
}
function Rr(t) {
  return this.select(t == null ? Or : Tr(typeof t == 'function' ? t : Je(t)))
}
var Cr = Array.prototype.filter
function Fr() {
  return Array.from(this.children)
}
function Dr(t) {
  return function () {
    return Cr.call(this.children, t)
  }
}
function Ir(t) {
  return this.selectAll(t == null ? Fr : Dr(typeof t == 'function' ? t : Je(t)))
}
function zr(t) {
  typeof t != 'function' && (t = Ze(t))
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, a = (r[i] = []), u, l = 0; l < o; ++l)
      (u = s[l]) && t.call(u, u.__data__, l, s) && a.push(u)
  return new S(r, this._parents)
}
function Qe(t) {
  return new Array(t.length)
}
function Hr() {
  return new S(this._enter || this._groups.map(Qe), this._parents)
}
function Et(t, e) {
  ;(this.ownerDocument = t.ownerDocument),
    (this.namespaceURI = t.namespaceURI),
    (this._next = null),
    (this._parent = t),
    (this.__data__ = e)
}
Et.prototype = {
  constructor: Et,
  appendChild: function (t) {
    return this._parent.insertBefore(t, this._next)
  },
  insertBefore: function (t, e) {
    return this._parent.insertBefore(t, e)
  },
  querySelector: function (t) {
    return this._parent.querySelector(t)
  },
  querySelectorAll: function (t) {
    return this._parent.querySelectorAll(t)
  },
}
function Pr(t) {
  return function () {
    return t
  }
}
function Lr(t, e, n, r, i, s) {
  for (var o = 0, a, u = e.length, l = s.length; o < l; ++o)
    (a = e[o]) ? ((a.__data__ = s[o]), (r[o] = a)) : (n[o] = new Et(t, s[o]))
  for (; o < u; ++o) (a = e[o]) && (i[o] = a)
}
function Vr(t, e, n, r, i, s, o) {
  var a,
    u,
    l = /* @__PURE__ */ new Map(),
    c = e.length,
    f = s.length,
    h = new Array(c),
    d
  for (a = 0; a < c; ++a)
    (u = e[a]) &&
      ((h[a] = d = o.call(u, u.__data__, a, e) + ''),
      l.has(d) ? (i[a] = u) : l.set(d, u))
  for (a = 0; a < f; ++a)
    (d = o.call(t, s[a], a, s) + ''),
      (u = l.get(d))
        ? ((r[a] = u), (u.__data__ = s[a]), l.delete(d))
        : (n[a] = new Et(t, s[a]))
  for (a = 0; a < c; ++a) (u = e[a]) && l.get(h[a]) === u && (i[a] = u)
}
function qr(t) {
  return t.__data__
}
function Xr(t, e) {
  if (!arguments.length) return Array.from(this, qr)
  var n = e ? Vr : Lr,
    r = this._parents,
    i = this._groups
  typeof t != 'function' && (t = Pr(t))
  for (
    var s = i.length,
      o = new Array(s),
      a = new Array(s),
      u = new Array(s),
      l = 0;
    l < s;
    ++l
  ) {
    var c = r[l],
      f = i[l],
      h = f.length,
      d = Gr(t.call(c, c && c.__data__, l, r)),
      g = d.length,
      m = (a[l] = new Array(g)),
      _ = (o[l] = new Array(g)),
      b = (u[l] = new Array(h))
    n(c, f, m, _, b, d, e)
    for (var y = 0, w = 0, k, x; y < g; ++y)
      if ((k = m[y])) {
        for (y >= w && (w = y + 1); !(x = _[w]) && ++w < g; );
        k._next = x || null
      }
  }
  return (o = new S(o, r)), (o._enter = a), (o._exit = u), o
}
function Gr(t) {
  return typeof t == 'object' && 'length' in t ? t : Array.from(t)
}
function Br() {
  return new S(this._exit || this._groups.map(Qe), this._parents)
}
function Wr(t, e, n) {
  var r = this.enter(),
    i = this,
    s = this.exit()
  return (
    typeof t == 'function'
      ? ((r = t(r)), r && (r = r.selection()))
      : (r = r.append(t + '')),
    e != null && ((i = e(i)), i && (i = i.selection())),
    n == null ? s.remove() : n(s),
    r && i ? r.merge(i).order() : i
  )
}
function Yr(t) {
  for (
    var e = t.selection ? t.selection() : t,
      n = this._groups,
      r = e._groups,
      i = n.length,
      s = r.length,
      o = Math.min(i, s),
      a = new Array(i),
      u = 0;
    u < o;
    ++u
  )
    for (
      var l = n[u], c = r[u], f = l.length, h = (a[u] = new Array(f)), d, g = 0;
      g < f;
      ++g
    )
      (d = l[g] || c[g]) && (h[g] = d)
  for (; u < i; ++u) a[u] = n[u]
  return new S(a, this._parents)
}
function Kr() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, s = r[i], o; --i >= 0; )
      (o = r[i]) &&
        (s &&
          o.compareDocumentPosition(s) ^ 4 &&
          s.parentNode.insertBefore(o, s),
        (s = o))
  return this
}
function Ur(t) {
  t || (t = Zr)
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h
  }
  for (
    var n = this._groups, r = n.length, i = new Array(r), s = 0;
    s < r;
    ++s
  ) {
    for (
      var o = n[s], a = o.length, u = (i[s] = new Array(a)), l, c = 0;
      c < a;
      ++c
    )
      (l = o[c]) && (u[c] = l)
    u.sort(e)
  }
  return new S(i, this._parents).order()
}
function Zr(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function Jr() {
  var t = arguments[0]
  return (arguments[0] = this), t.apply(null, arguments), this
}
function Qr() {
  return Array.from(this)
}
function jr() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length; i < s; ++i) {
      var o = r[i]
      if (o) return o
    }
  return null
}
function ti() {
  let t = 0
  for (const e of this) ++t
  return t
}
function ei() {
  return !this.node()
}
function ni(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && t.call(a, a.__data__, s, i)
  return this
}
function ri(t) {
  return function () {
    this.removeAttribute(t)
  }
}
function ii(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local)
  }
}
function si(t, e) {
  return function () {
    this.setAttribute(t, e)
  }
}
function oi(t, e) {
  return function () {
    this.setAttributeNS(t.space, t.local, e)
  }
}
function ai(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n)
  }
}
function ui(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    n == null
      ? this.removeAttributeNS(t.space, t.local)
      : this.setAttributeNS(t.space, t.local, n)
  }
}
function li(t, e) {
  var n = Dt(t)
  if (arguments.length < 2) {
    var r = this.node()
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
  }
  return this.each(
    (e == null
      ? n.local
        ? ii
        : ri
      : typeof e == 'function'
      ? n.local
        ? ui
        : ai
      : n.local
      ? oi
      : si)(n, e)
  )
}
function je(t) {
  return (
    (t.ownerDocument && t.ownerDocument.defaultView) ||
    (t.document && t) ||
    t.defaultView
  )
}
function ci(t) {
  return function () {
    this.style.removeProperty(t)
  }
}
function fi(t, e, n) {
  return function () {
    this.style.setProperty(t, e, n)
  }
}
function hi(t, e, n) {
  return function () {
    var r = e.apply(this, arguments)
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
  }
}
function di(t, e, n) {
  return arguments.length > 1
    ? this.each(
        (e == null ? ci : typeof e == 'function' ? hi : fi)(
          t,
          e,
          n == null ? '' : n
        )
      )
    : Z(this.node(), t)
}
function Z(t, e) {
  return (
    t.style.getPropertyValue(e) ||
    je(t).getComputedStyle(t, null).getPropertyValue(e)
  )
}
function pi(t) {
  return function () {
    delete this[t]
  }
}
function gi(t, e) {
  return function () {
    this[t] = e
  }
}
function mi(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    n == null ? delete this[t] : (this[t] = n)
  }
}
function vi(t, e) {
  return arguments.length > 1
    ? this.each((e == null ? pi : typeof e == 'function' ? mi : gi)(t, e))
    : this.node()[t]
}
function tn(t) {
  return t.trim().split(/^|\s+/)
}
function ne(t) {
  return t.classList || new en(t)
}
function en(t) {
  ;(this._node = t), (this._names = tn(t.getAttribute('class') || ''))
}
en.prototype = {
  add: function (t) {
    var e = this._names.indexOf(t)
    e < 0 &&
      (this._names.push(t),
      this._node.setAttribute('class', this._names.join(' ')))
  },
  remove: function (t) {
    var e = this._names.indexOf(t)
    e >= 0 &&
      (this._names.splice(e, 1),
      this._node.setAttribute('class', this._names.join(' ')))
  },
  contains: function (t) {
    return this._names.indexOf(t) >= 0
  },
}
function nn(t, e) {
  for (var n = ne(t), r = -1, i = e.length; ++r < i; ) n.add(e[r])
}
function rn(t, e) {
  for (var n = ne(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r])
}
function yi(t) {
  return function () {
    nn(this, t)
  }
}
function wi(t) {
  return function () {
    rn(this, t)
  }
}
function _i(t, e) {
  return function () {
    ;(e.apply(this, arguments) ? nn : rn)(this, t)
  }
}
function xi(t, e) {
  var n = tn(t + '')
  if (arguments.length < 2) {
    for (var r = ne(this.node()), i = -1, s = n.length; ++i < s; )
      if (!r.contains(n[i])) return !1
    return !0
  }
  return this.each((typeof e == 'function' ? _i : e ? yi : wi)(n, e))
}
function bi() {
  this.textContent = ''
}
function Mi(t) {
  return function () {
    this.textContent = t
  }
}
function Ai(t) {
  return function () {
    var e = t.apply(this, arguments)
    this.textContent = e == null ? '' : e
  }
}
function Ei(t) {
  return arguments.length
    ? this.each(t == null ? bi : (typeof t == 'function' ? Ai : Mi)(t))
    : this.node().textContent
}
function Si() {
  this.innerHTML = ''
}
function ki(t) {
  return function () {
    this.innerHTML = t
  }
}
function Ni(t) {
  return function () {
    var e = t.apply(this, arguments)
    this.innerHTML = e == null ? '' : e
  }
}
function $i(t) {
  return arguments.length
    ? this.each(t == null ? Si : (typeof t == 'function' ? Ni : ki)(t))
    : this.node().innerHTML
}
function Ti() {
  this.nextSibling && this.parentNode.appendChild(this)
}
function Oi() {
  return this.each(Ti)
}
function Ri() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild)
}
function Ci() {
  return this.each(Ri)
}
function Fi(t) {
  var e = typeof t == 'function' ? t : Ke(t)
  return this.select(function () {
    return this.appendChild(e.apply(this, arguments))
  })
}
function Di() {
  return null
}
function Ii(t, e) {
  var n = typeof t == 'function' ? t : Ke(t),
    r = e == null ? Di : typeof e == 'function' ? e : ee(e)
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null
    )
  })
}
function zi() {
  var t = this.parentNode
  t && t.removeChild(this)
}
function Hi() {
  return this.each(zi)
}
function Pi() {
  var t = this.cloneNode(!1),
    e = this.parentNode
  return e ? e.insertBefore(t, this.nextSibling) : t
}
function Li() {
  var t = this.cloneNode(!0),
    e = this.parentNode
  return e ? e.insertBefore(t, this.nextSibling) : t
}
function Vi(t) {
  return this.select(t ? Li : Pi)
}
function qi(t) {
  return arguments.length ? this.property('__data__', t) : this.node().__data__
}
function Xi(t) {
  return function (e) {
    t.call(this, e, this.__data__)
  }
}
function Gi(t) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (e) {
      var n = '',
        r = e.indexOf('.')
      return (
        r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))),
        { type: e, name: n }
      )
    })
}
function Bi(t) {
  return function () {
    var e = this.__on
    if (!!e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
        (s = e[n]),
          (!t.type || s.type === t.type) && s.name === t.name
            ? this.removeEventListener(s.type, s.listener, s.options)
            : (e[++r] = s)
      ++r ? (e.length = r) : delete this.__on
    }
  }
}
function Wi(t, e, n) {
  return function () {
    var r = this.__on,
      i,
      s = Xi(e)
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = s), (i.options = n)),
            (i.value = e)
          return
        }
    }
    this.addEventListener(t.type, s, n),
      (i = { type: t.type, name: t.name, value: e, listener: s, options: n }),
      r ? r.push(i) : (this.__on = [i])
  }
}
function Yi(t, e, n) {
  var r = Gi(t + ''),
    i,
    s = r.length,
    o
  if (arguments.length < 2) {
    var a = this.node().__on
    if (a) {
      for (var u = 0, l = a.length, c; u < l; ++u)
        for (i = 0, c = a[u]; i < s; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name) return c.value
    }
    return
  }
  for (a = e ? Wi : Bi, i = 0; i < s; ++i) this.each(a(r[i], e, n))
  return this
}
function sn(t, e, n) {
  var r = je(t),
    i = r.CustomEvent
  typeof i == 'function'
    ? (i = new i(e, n))
    : ((i = r.document.createEvent('Event')),
      n
        ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(e, !1, !1)),
    t.dispatchEvent(i)
}
function Ki(t, e) {
  return function () {
    return sn(this, t, e)
  }
}
function Ui(t, e) {
  return function () {
    return sn(this, t, e.apply(this, arguments))
  }
}
function Zi(t, e) {
  return this.each((typeof e == 'function' ? Ui : Ki)(t, e))
}
function* Ji() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, s = r.length, o; i < s; ++i)
      (o = r[i]) && (yield o)
}
var on = [null]
function S(t, e) {
  ;(this._groups = t), (this._parents = e)
}
function lt() {
  return new S([[document.documentElement]], on)
}
function Qi() {
  return this
}
S.prototype = lt.prototype = {
  constructor: S,
  select: Ar,
  selectAll: Nr,
  selectChild: Rr,
  selectChildren: Ir,
  filter: zr,
  data: Xr,
  enter: Hr,
  exit: Br,
  join: Wr,
  merge: Yr,
  selection: Qi,
  order: Kr,
  sort: Ur,
  call: Jr,
  nodes: Qr,
  node: jr,
  size: ti,
  empty: ei,
  each: ni,
  attr: li,
  style: di,
  property: vi,
  classed: xi,
  text: Ei,
  html: $i,
  raise: Oi,
  lower: Ci,
  append: Fi,
  insert: Ii,
  remove: Hi,
  clone: Vi,
  datum: qi,
  on: Yi,
  dispatch: Zi,
  [Symbol.iterator]: Ji,
}
function St(t) {
  return typeof t == 'string'
    ? new S([[document.querySelector(t)]], [document.documentElement])
    : new S([[t]], on)
}
var an = (function () {
    if (typeof Map < 'u') return Map
    function t(e, n) {
      var r = -1
      return (
        e.some(function (i, s) {
          return i[0] === n ? ((r = s), !0) : !1
        }),
        r
      )
    }
    return (function () {
      function e() {
        this.__entries__ = []
      }
      return (
        Object.defineProperty(e.prototype, 'size', {
          get: function () {
            return this.__entries__.length
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.get = function (n) {
          var r = t(this.__entries__, n),
            i = this.__entries__[r]
          return i && i[1]
        }),
        (e.prototype.set = function (n, r) {
          var i = t(this.__entries__, n)
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r])
        }),
        (e.prototype.delete = function (n) {
          var r = this.__entries__,
            i = t(r, n)
          ~i && r.splice(i, 1)
        }),
        (e.prototype.has = function (n) {
          return !!~t(this.__entries__, n)
        }),
        (e.prototype.clear = function () {
          this.__entries__.splice(0)
        }),
        (e.prototype.forEach = function (n, r) {
          r === void 0 && (r = null)
          for (var i = 0, s = this.__entries__; i < s.length; i++) {
            var o = s[i]
            n.call(r, o[1], o[0])
          }
        }),
        e
      )
    })()
  })(),
  Wt =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  kt = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
      ? self
      : typeof window < 'u' && window.Math === Math
      ? window
      : Function('return this')()
  })(),
  ji = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(kt)
      : function (t) {
          return setTimeout(function () {
            return t(Date.now())
          }, 1e3 / 60)
        }
  })(),
  ts = 2
function es(t, e) {
  var n = !1,
    r = !1,
    i = 0
  function s() {
    n && ((n = !1), t()), r && a()
  }
  function o() {
    ji(s)
  }
  function a() {
    var u = Date.now()
    if (n) {
      if (u - i < ts) return
      r = !0
    } else (n = !0), (r = !1), setTimeout(o, e)
    i = u
  }
  return a
}
var ns = 20,
  rs = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  is = typeof MutationObserver < 'u',
  ss = (function () {
    function t() {
      ;(this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = es(this.refresh.bind(this), ns))
    }
    return (
      (t.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
          this.connected_ || this.connect_()
      }),
      (t.prototype.removeObserver = function (e) {
        var n = this.observers_,
          r = n.indexOf(e)
        ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
      }),
      (t.prototype.refresh = function () {
        var e = this.updateObservers_()
        e && this.refresh()
      }),
      (t.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive()
        })
        return (
          e.forEach(function (n) {
            return n.broadcastActive()
          }),
          e.length > 0
        )
      }),
      (t.prototype.connect_ = function () {
        !Wt ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          is
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0))
      }),
      (t.prototype.disconnect_ = function () {
        !Wt ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1))
      }),
      (t.prototype.onTransitionEnd_ = function (e) {
        var n = e.propertyName,
          r = n === void 0 ? '' : n,
          i = rs.some(function (s) {
            return !!~r.indexOf(s)
          })
        i && this.refresh()
      }),
      (t.getInstance = function () {
        return this.instance_ || (this.instance_ = new t()), this.instance_
      }),
      (t.instance_ = null),
      t
    )
  })(),
  un = function (t, e) {
    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
      var i = r[n]
      Object.defineProperty(t, i, {
        value: e[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      })
    }
    return t
  },
  J = function (t) {
    var e = t && t.ownerDocument && t.ownerDocument.defaultView
    return e || kt
  },
  ln = It(0, 0, 0, 0)
function Nt(t) {
  return parseFloat(t) || 0
}
function Se(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
  return e.reduce(function (r, i) {
    var s = t['border-' + i + '-width']
    return r + Nt(s)
  }, 0)
}
function os(t) {
  for (
    var e = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, i = e;
    r < i.length;
    r++
  ) {
    var s = i[r],
      o = t['padding-' + s]
    n[s] = Nt(o)
  }
  return n
}
function as(t) {
  var e = t.getBBox()
  return It(0, 0, e.width, e.height)
}
function us(t) {
  var e = t.clientWidth,
    n = t.clientHeight
  if (!e && !n) return ln
  var r = J(t).getComputedStyle(t),
    i = os(r),
    s = i.left + i.right,
    o = i.top + i.bottom,
    a = Nt(r.width),
    u = Nt(r.height)
  if (
    (r.boxSizing === 'border-box' &&
      (Math.round(a + s) !== e && (a -= Se(r, 'left', 'right') + s),
      Math.round(u + o) !== n && (u -= Se(r, 'top', 'bottom') + o)),
    !cs(t))
  ) {
    var l = Math.round(a + s) - e,
      c = Math.round(u + o) - n
    Math.abs(l) !== 1 && (a -= l), Math.abs(c) !== 1 && (u -= c)
  }
  return It(i.left, i.top, a, u)
}
var ls = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (t) {
        return t instanceof J(t).SVGGraphicsElement
      }
    : function (t) {
        return t instanceof J(t).SVGElement && typeof t.getBBox == 'function'
      }
})()
function cs(t) {
  return t === J(t).document.documentElement
}
function fs(t) {
  return Wt ? (ls(t) ? as(t) : us(t)) : ln
}
function hs(t) {
  var e = t.x,
    n = t.y,
    r = t.width,
    i = t.height,
    s = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    o = Object.create(s.prototype)
  return (
    un(o, {
      x: e,
      y: n,
      width: r,
      height: i,
      top: n,
      right: e + r,
      bottom: i + n,
      left: e,
    }),
    o
  )
}
function It(t, e, n, r) {
  return { x: t, y: e, width: n, height: r }
}
var ds = (function () {
    function t(e) {
      ;(this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = It(0, 0, 0, 0)),
        (this.target = e)
    }
    return (
      (t.prototype.isActive = function () {
        var e = fs(this.target)
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        )
      }),
      (t.prototype.broadcastRect = function () {
        var e = this.contentRect_
        return (
          (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e
        )
      }),
      t
    )
  })(),
  ps = (function () {
    function t(e, n) {
      var r = hs(n)
      un(this, { target: e, contentRect: r })
    }
    return t
  })(),
  gs = (function () {
    function t(e, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new an()),
        typeof e != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        )
      ;(this.callback_ = e), (this.controller_ = n), (this.callbackCtx_ = r)
    }
    return (
      (t.prototype.observe = function (e) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(e instanceof J(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var n = this.observations_
          n.has(e) ||
            (n.set(e, new ds(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
      }),
      (t.prototype.unobserve = function (e) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(e instanceof J(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var n = this.observations_
          !n.has(e) ||
            (n.delete(e), n.size || this.controller_.removeObserver(this))
        }
      }),
      (t.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this)
      }),
      (t.prototype.gatherActive = function () {
        var e = this
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && e.activeObservations_.push(n)
          })
      }),
      (t.prototype.broadcastActive = function () {
        if (!!this.hasActive()) {
          var e = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new ps(r.target, r.broadcastRect())
            })
          this.callback_.call(e, n, e), this.clearActive()
        }
      }),
      (t.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
      }),
      (t.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
      }),
      t
    )
  })(),
  cn = typeof WeakMap < 'u' ? /* @__PURE__ */ new WeakMap() : new an(),
  fn = (function () {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.')
      var n = ss.getInstance(),
        r = new gs(e, n, this)
      cn.set(this, r)
    }
    return t
  })()
;['observe', 'unobserve', 'disconnect'].forEach(function (t) {
  fn.prototype[t] = function () {
    var e
    return (e = cn.get(this))[t].apply(e, arguments)
  }
})
var ms = (function () {
  return typeof kt.ResizeObserver < 'u' ? kt.ResizeObserver : fn
})()
const vs = {
    'pi-chart-text': '#A8D4FF',
    'pi-chart-background': '#000E1A',
  },
  ys = {
    'pi-chart-text': '#003A73',
    'pi-chart-background': '#F0F8FF',
  },
  ws = { dark: vs, light: ys },
  hn = (t, e, n) => {
    const r = (s) => Qn(Jn(s))
    let i = document.querySelector(`[data-selector=${t}]`)
    i === null &&
      ((i = Be('style', '', document.head)),
      i.setAttribute('data-selector', t)),
      r(i.innerHTML).match(r(e)) === null &&
        (i.innerHTML = We(`${P(n) ? '' : i.innerHTML} ${e}`))
  },
  _s = (t) => {
    let e = Object.entries(ws[t])
      .map(([n, r]) => `--${n}: ${r};`)
      .join('')
    return (e = `:root { ${e} }`), hn('pic-variables', e, !0), e
  },
  re = (t, ...e) => {
    const n = t
      .map((r, i) => {
        var s
        return `${r}${(s = e[i]) != null ? s : ''}`
      })
      .join('')
    return hn('pic-styles', n), n
  },
  dn = `
  border-radius: 5px;
  box-shadow: 3px 3px 6px -4px rgba(0, 0, 0, 0.45);
  color: var(--pi-chart-text);
  border: 1px solid var(--pi-chart-text);
  background-color: var(--pi-chart-background);
`,
  xs = () => {
    re`
    .pic-svg {
      ${dn}
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
  `
  }
class bs {
  constructor({
    label: e,
    container: n,
    config: r,
    data: i,
    theme: s = 'light',
  }) {
    p(this, 'container')
    p(this, 'd3Svg')
    p(this, 'title')
    p(this, 'padding', { l: 45, r: 5, t: 25, b: 85 })
    p(this, 'dimensions', {
      left: 0,
      width: 0,
      top: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      resizeOffset: 0,
      padding: this.padding,
    })
    p(this, 'initialWidth', 0)
    p(this, 'configs', /* @__PURE__ */ new Map())
    p(this, 'dataSets', /* @__PURE__ */ new Map())
    p(this, 'scales', /* @__PURE__ */ new Map())
    p(this, 'axes', /* @__PURE__ */ new Map())
    p(this, 'keys', /* @__PURE__ */ new Map())
    p(this, 'visuals', /* @__PURE__ */ new Map())
    p(this, 'label')
    p(this, 'tooltip')
    p(this, 'setContainer', (e) => {
      if (e !== null && P(e == null ? void 0 : e.nodeName)) return e
      throw new Error('No valid DOM element or selector provided for chart.')
    })
    p(this, 'setConfig', (e, n = 'default') => {
      if (!Array.isArray(e == null ? void 0 : e.values))
        throw new Error('No valid configuration provided for chart.')
      return (
        (e.values = rr(e.values)), this.configs.set(n, e), this.draw(), this
      )
    })
    p(this, 'setData', (e, n = 'default', r = 'default', i = !0) => {
      const s = this.configs.get(r)
      if (!Array.isArray(e))
        throw new Error('No valid data provided for chart.')
      const o = Array.isArray(s == null ? void 0 : s.values) ? sr(s, e) : e
      let a = i ? Number(Ae(o, (c) => Ae(c.values))) : 0,
        u = Number(Me(o, (c) => Me(c.values)))
      const l = Math.ceil(u / 15)
      if (i) {
        const c = a > l ? a - l : 0
        ;(a = a > 0 ? c : a), (a = a < 0 ? a - l : a), (u += l)
      }
      return (
        this.dataSets.set(n, { data: o, minValue: a, maxValue: u }),
        this.draw(),
        this
      )
    })
    p(
      this,
      'addScale',
      (e = { x: 'band', y: 'linear' }, n = 'default', r = 'default') => {
        if (this.dataSets.get(r) === void 0)
          throw new Error('No valid config provided for scale.')
        return (
          this.scales.set(
            n,
            Object.entries(e).reduce(
              (s, [o, a]) => ({
                ...s,
                [o]: new yo({
                  scaleType: a,
                  dataSet: this.dataSets.get(r),
                  dimensions: this.dimensions,
                }),
              }),
              {}
            )
          ),
          this.draw(),
          this
        )
      }
    )
    p(this, 'addAxis', (e = 'default', n = 'default', r = 'default') => {
      var s, o
      const i = this.scales.get(n)
      if (i === void 0) throw new Error('No valid config provided for axis.')
      return (
        this.axes.set(
          e,
          new Fs({
            d3Svg: this.d3Svg,
            tooltip: this.tooltip,
            dimensions: this.dimensions,
            truncate: 10,
            axisLabels:
              (o = (s = this.configs.get(r)) == null ? void 0 : s.axisLabels) !=
              null
                ? o
                : ['', ''],
            scales: i,
          })
        ),
        this.draw(),
        this
      )
    })
    p(this, 'addKey', (e = 'default', n = 'default') => {
      var i
      const r = this.configs.get(n)
      if (r === void 0) throw new Error('No valid config provided for key.')
      return (
        this.keys.set(
          e,
          new wo({
            d3Svg: this.d3Svg,
            values: (i = r == null ? void 0 : r.values) != null ? i : [],
            dimensions: this.dimensions,
          })
        ),
        this.draw(),
        this
      )
    })
    p(
      this,
      'addVisual',
      (
        e = 'default',
        n = 'default',
        r = 'default',
        i = 'default',
        s = 'bar',
        o = 1e3
      ) => {
        const a = this.configs.get(n),
          u = this.dataSets.get(r),
          l = this.scales.get(i)
        if ([a, u, l].includes(void 0))
          throw new Error('No valid config provided for visual.')
        const f = {
          d3Svg: this.d3Svg,
          config: a,
          dataSet: u,
          scales: l,
          transitionTime: o,
          tooltip: this.tooltip,
          dimensions: this.dimensions,
        }
        switch (s) {
          default:
            setTimeout(() => this.visuals.set(e, new Ia(f)))
        }
        return setTimeout(this.draw, o), this
      }
    )
    p(this, 'deleteMapItem', (e, n) => {
      var i
      if (((i = this[e]) == null ? void 0 : i.get(n)) === void 0)
        throw new Error(`Failed attempting to delete "${n}" from "this.${e}".`)
      return this[e].delete(n), this.draw(), this
    })
    p(this, 'addDefaults', () => this.addScale().addAxis().addKey().addVisual())
    p(this, 'updateDimensions', () => {
      const {
          left: e,
          width: n,
          top: r,
          height: i,
        } = this.container.getBoundingClientRect(),
        { l: s, r: o, t: a, b: u } = this.padding
      ;(this.dimensions.left = e),
        (this.dimensions.width = n),
        (this.dimensions.top = r),
        (this.dimensions.height = i),
        (this.dimensions.innerWidth = n - s - o),
        (this.dimensions.innerHeight = i - a - u),
        (this.dimensions.resizeOffset = n - this.initialWidth),
        (this.dimensions.padding = this.padding)
    })
    p(this, 'renderChart', () => {
      if (this.title !== void 0 && P(this.label)) this.title.text(this.label)
      else throw new Error('Unable to render the chart.')
    })
    p(this, 'draw', () => {
      this.updateDimensions(),
        this.renderChart(),
        this.scales.forEach((e) => Object.values(e).forEach((n) => n.render())),
        this.axes.forEach((e) => e.render()),
        this.keys.forEach((e) => e.render()),
        this.visuals.forEach((e) => e.render({ reset: !0 }))
    })
    p(this, 'redraw', Ge(this.draw))
    p(this, 'resizeWatcher', new ms(this.redraw))
    ;(this.label = e),
      (this.container = this.setContainer(
        typeof n == 'string' ? document.querySelector(n) : n
      )),
      (this.title = St(this.container)
        .append('div')
        .attr('class', 'pic-title')),
      (this.d3Svg = St(this.container)
        .append('svg')
        .attr('class', 'pic-svg')
        .attr('width', '100%')
        .attr('height', '100%')),
      this.resizeWatcher.observe(this.container),
      (this.tooltip = new As(this.container)),
      this.draw(),
      (this.initialWidth = this.dimensions.width),
      r !== void 0 && this.setConfig(r),
      i !== void 0 && this.setData(i),
      _s(s),
      xs()
  }
}
const Ms = () => {
  re`
    .pic-tooltip {
      transition: opacity 0.5s;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      padding: 8px;
      ${dn}
    }
  `
}
class As {
  constructor(e) {
    p(this, 'container')
    p(this, 'tooltip')
    p(this, 'showTimeout')
    p(this, 'hideTimeout')
    p(this, 'ping', (e, n) => {
      const r =
        typeof e == 'string'
          ? e
          : `<strong>${e[0]}</strong><br>${e[1]}: <em>${e[2]}</em>`
      ;(this.tooltip.innerHTML = r),
        (this.tooltip.style.visibility = 'visible'),
        (this.tooltip.style.opacity = '0.9'),
        this.move(n),
        this.cleanup(),
        (this.showTimeout = setTimeout(() => {
          this.hide()
        }, 5e3))
    })
    p(
      this,
      'move',
      Ge((e) => {
        const {
            left: r,
            width: i,
            top: s,
            height: o,
          } = this.container.getBoundingClientRect(),
          { width: a, height: u } = this.tooltip.getBoundingClientRect(),
          { clientX: l, clientY: c } = e,
          f = i + r - l < a + 10,
          h = o + s - c < u + 10
        ;(this.tooltip.style.left = `${l - r + (f ? -a - 10 : 10)}px`),
          (this.tooltip.style.top = `${c - s + (h ? -u - 10 : 10)}px`)
      })
    )
    p(this, 'hide', () => {
      this.cleanup(),
        (this.tooltip.style.opacity = '0'),
        (this.hideTimeout = setTimeout(() => {
          this.tooltip.style.visibility = 'hidden'
        }, 500))
    })
    p(this, 'cleanup', () => {
      this.showTimeout !== void 0 && clearTimeout(this.showTimeout),
        this.hideTimeout !== void 0 && clearTimeout(this.hideTimeout)
    })
    if (!P(e.nodeName))
      throw new Error('The tooltip has no valid container element.')
    ;(this.container = e), (this.tooltip = Be('div', 'pic-tooltip', e)), Ms()
  }
}
function Es(t) {
  return t
}
var Lt = 1,
  Vt = 2,
  Yt = 3,
  et = 4,
  ke = 1e-6
function Ss(t) {
  return 'translate(' + t + ',0)'
}
function ks(t) {
  return 'translate(0,' + t + ')'
}
function Ns(t) {
  return (e) => +t(e)
}
function $s(t, e) {
  return (
    (e = Math.max(0, t.bandwidth() - e * 2) / 2),
    t.round() && (e = Math.round(e)),
    (n) => +t(n) + e
  )
}
function Ts() {
  return !this.__axis
}
function pn(t, e) {
  var n = [],
    r = null,
    i = null,
    s = 6,
    o = 6,
    a = 3,
    u = typeof window < 'u' && window.devicePixelRatio > 1 ? 0 : 0.5,
    l = t === Lt || t === et ? -1 : 1,
    c = t === et || t === Vt ? 'x' : 'y',
    f = t === Lt || t === Yt ? Ss : ks
  function h(d) {
    var g = r == null ? (e.ticks ? e.ticks.apply(e, n) : e.domain()) : r,
      m = i == null ? (e.tickFormat ? e.tickFormat.apply(e, n) : Es) : i,
      _ = Math.max(s, 0) + a,
      b = e.range(),
      y = +b[0] + u,
      w = +b[b.length - 1] + u,
      k = (e.bandwidth ? $s : Ns)(e.copy(), u),
      x = d.selection ? d.selection() : d,
      z = x.selectAll('.domain').data([null]),
      N = x.selectAll('.tick').data(g, e).order(),
      B = N.exit(),
      W = N.enter().append('g').attr('class', 'tick'),
      H = N.select('line'),
      v = N.select('text')
    ;(z = z.merge(
      z
        .enter()
        .insert('path', '.tick')
        .attr('class', 'domain')
        .attr('stroke', 'currentColor')
    )),
      (N = N.merge(W)),
      (H = H.merge(
        W.append('line')
          .attr('stroke', 'currentColor')
          .attr(c + '2', l * s)
      )),
      (v = v.merge(
        W.append('text')
          .attr('fill', 'currentColor')
          .attr(c, l * _)
          .attr('dy', t === Lt ? '0em' : t === Yt ? '0.71em' : '0.32em')
      )),
      d !== x &&
        ((z = z.transition(d)),
        (N = N.transition(d)),
        (H = H.transition(d)),
        (v = v.transition(d)),
        (B = B.transition(d)
          .attr('opacity', ke)
          .attr('transform', function (A) {
            return isFinite((A = k(A)))
              ? f(A + u)
              : this.getAttribute('transform')
          })),
        W.attr('opacity', ke).attr('transform', function (A) {
          var M = this.parentNode.__axis
          return f((M && isFinite((M = M(A))) ? M : k(A)) + u)
        })),
      B.remove(),
      z.attr(
        'd',
        t === et || t === Vt
          ? o
            ? 'M' + l * o + ',' + y + 'H' + u + 'V' + w + 'H' + l * o
            : 'M' + u + ',' + y + 'V' + w
          : o
          ? 'M' + y + ',' + l * o + 'V' + u + 'H' + w + 'V' + l * o
          : 'M' + y + ',' + u + 'H' + w
      ),
      N.attr('opacity', 1).attr('transform', function (A) {
        return f(k(A) + u)
      }),
      H.attr(c + '2', l * s),
      v.attr(c, l * _).text(m),
      x
        .filter(Ts)
        .attr('fill', 'none')
        .attr('font-size', 10)
        .attr('font-family', 'sans-serif')
        .attr('text-anchor', t === Vt ? 'start' : t === et ? 'end' : 'middle'),
      x.each(function () {
        this.__axis = k
      })
  }
  return (
    (h.scale = function (d) {
      return arguments.length ? ((e = d), h) : e
    }),
    (h.ticks = function () {
      return (n = Array.from(arguments)), h
    }),
    (h.tickArguments = function (d) {
      return arguments.length
        ? ((n = d == null ? [] : Array.from(d)), h)
        : n.slice()
    }),
    (h.tickValues = function (d) {
      return arguments.length
        ? ((r = d == null ? null : Array.from(d)), h)
        : r && r.slice()
    }),
    (h.tickFormat = function (d) {
      return arguments.length ? ((i = d), h) : i
    }),
    (h.tickSize = function (d) {
      return arguments.length ? ((s = o = +d), h) : s
    }),
    (h.tickSizeInner = function (d) {
      return arguments.length ? ((s = +d), h) : s
    }),
    (h.tickSizeOuter = function (d) {
      return arguments.length ? ((o = +d), h) : o
    }),
    (h.tickPadding = function (d) {
      return arguments.length ? ((a = +d), h) : a
    }),
    (h.offset = function (d) {
      return arguments.length ? ((u = +d), h) : u
    }),
    h
  )
}
function Os(t) {
  return pn(Yt, t)
}
function Rs(t) {
  return pn(et, t)
}
const Cs = () => {
  re`
    .pic-axis {
      font-size: 0.8em;
    }

    .pic-line {
      opacity: 0.2;
    }
  `
}
class Fs {
  constructor({
    d3Svg: e,
    tooltip: n,
    dimensions: r,
    truncate: i = 2,
    axisLabels: s,
    scales: o,
  }) {
    p(this, 'd3Svg')
    p(this, 'truncate')
    p(this, 'axisLabels')
    p(this, 'scales')
    p(this, 'tooltip')
    p(this, 'dimensions')
    p(this, 'axisGroupX')
    p(this, 'axisGroupY')
    if (!P(e)) throw new Error('No SVG provided to Axis constructor.')
    ;(this.dimensions = r),
      (this.d3Svg = e),
      (this.tooltip = n),
      (this.truncate = i),
      (this.axisLabels = s != null ? s : ['', '']),
      (this.scales = o),
      (this.axisGroupX = e.append('g').attr('class', 'pic-axis pic-axis-x')),
      (this.axisGroupY = e.append('g').attr('class', 'pic-axis pic-axis-y')),
      this.render(),
      Cs()
  }
  render(e) {
    e !== void 0 && (this.dimensions = e),
      this.dimensions !== void 0 &&
        (this.renderAxisX(), this.renderAxisY(), this.renderLabels())
  }
  renderAxisX() {
    const { height: e, padding: n } = this.dimensions
    this.scales.x !== void 0 &&
      this.axisGroupX
        .call(Os(this.scales.x.axisScale))
        .attr('transform', `translate(${n.l},${e - n.b})`)
        .selectAll('text')
        .attr('x', -5)
        .attr('y', 6)
        .attr('transform', 'rotate(310)')
        .attr('class', 'pic-axis-label pic-axis-label-x')
        .text((r) => Zn(r, this.truncate))
        .style('text-anchor', 'end')
        .on('mousemove', (r, i) => {
          i.length > this.truncate &&
            this.tooltip.ping(`<strong>${i}</strong>`, r)
        })
        .on('mouseout', this.tooltip.hide)
  }
  renderAxisY() {
    const { innerWidth: e, padding: n } = this.dimensions
    this.scales.y !== void 0 &&
      this.axisGroupY
        .call(Rs(this.scales.y.axisScale))
        .attr('transform', `translate(${n.l},0)`)
        .selectAll('.pic-axis-y .tick line')
        .attr('class', 'pic-line')
        .attr('x2', () => e)
  }
  renderLabels() {
    var i, s, o, a, u, l
    const { height: e, width: n, padding: r } = this.dimensions
    this.d3Svg.selectAll('text.pic-label').remove(),
      P((i = this.axisLabels) == null ? void 0 : i[0]) &&
        this.d3Svg
          .append('text')
          .attr('class', 'pic-label pic-label-x')
          .attr('x', e / -2 + r.b / 2)
          .attr('y', 20)
          .attr('transform', 'rotate(-90)')
          .attr('text-anchor', 'middle')
          .text(
            (o = (s = this.axisLabels) == null ? void 0 : s[0]) != null ? o : ''
          ),
      P((a = this.axisLabels) == null ? void 0 : a[1]) &&
        this.d3Svg
          .append('text')
          .attr('class', 'pic-label pic-label-y')
          .attr('x', (n + r.l + r.r) / 2)
          .attr('y', e - r.b / 3)
          .attr('text-anchor', 'middle')
          .text(
            (l = (u = this.axisLabels) == null ? void 0 : u[1]) != null ? l : ''
          )
  }
}
function ie(t, e) {
  switch (arguments.length) {
    case 0:
      break
    case 1:
      this.range(t)
      break
    default:
      this.range(e).domain(t)
      break
  }
  return this
}
const Ne = Symbol('implicit')
function gn() {
  var t = new xe(),
    e = [],
    n = [],
    r = Ne
  function i(s) {
    let o = t.get(s)
    if (o === void 0) {
      if (r !== Ne) return r
      t.set(s, (o = e.push(s) - 1))
    }
    return n[o % n.length]
  }
  return (
    (i.domain = function (s) {
      if (!arguments.length) return e.slice()
      ;(e = []), (t = new xe())
      for (const o of s) t.has(o) || t.set(o, e.push(o) - 1)
      return i
    }),
    (i.range = function (s) {
      return arguments.length ? ((n = Array.from(s)), i) : n.slice()
    }),
    (i.unknown = function (s) {
      return arguments.length ? ((r = s), i) : r
    }),
    (i.copy = function () {
      return gn(e, n).unknown(r)
    }),
    ie.apply(i, arguments),
    i
  )
}
function mn() {
  var t = gn().unknown(void 0),
    e = t.domain,
    n = t.range,
    r = 0,
    i = 1,
    s,
    o,
    a = !1,
    u = 0,
    l = 0,
    c = 0.5
  delete t.unknown
  function f() {
    var h = e().length,
      d = i < r,
      g = d ? i : r,
      m = d ? r : i
    ;(s = (m - g) / Math.max(1, h - u + l * 2)),
      a && (s = Math.floor(s)),
      (g += (m - g - s * (h - u)) * c),
      (o = s * (1 - u)),
      a && ((g = Math.round(g)), (o = Math.round(o)))
    var _ = _r(h).map(function (b) {
      return g + s * b
    })
    return n(d ? _.reverse() : _)
  }
  return (
    (t.domain = function (h) {
      return arguments.length ? (e(h), f()) : e()
    }),
    (t.range = function (h) {
      return arguments.length ? (([r, i] = h), (r = +r), (i = +i), f()) : [r, i]
    }),
    (t.rangeRound = function (h) {
      return ([r, i] = h), (r = +r), (i = +i), (a = !0), f()
    }),
    (t.bandwidth = function () {
      return o
    }),
    (t.step = function () {
      return s
    }),
    (t.round = function (h) {
      return arguments.length ? ((a = !!h), f()) : a
    }),
    (t.padding = function (h) {
      return arguments.length ? ((u = Math.min(1, (l = +h))), f()) : u
    }),
    (t.paddingInner = function (h) {
      return arguments.length ? ((u = Math.min(1, h)), f()) : u
    }),
    (t.paddingOuter = function (h) {
      return arguments.length ? ((l = +h), f()) : l
    }),
    (t.align = function (h) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, h))), f()) : c
    }),
    (t.copy = function () {
      return mn(e(), [r, i]).round(a).paddingInner(u).paddingOuter(l).align(c)
    }),
    ie.apply(f(), arguments)
  )
}
const se = (t) => () => t
function Ds(t, e) {
  return function (n) {
    return t + n * e
  }
}
function Is(t, e, n) {
  return (
    (t = Math.pow(t, n)),
    (e = Math.pow(e, n) - t),
    (n = 1 / n),
    function (r) {
      return Math.pow(t + r * e, n)
    }
  )
}
function zs(t) {
  return (t = +t) == 1
    ? vn
    : function (e, n) {
        return n - e ? Is(e, n, t) : se(isNaN(e) ? n : e)
      }
}
function vn(t, e) {
  var n = e - t
  return n ? Ds(t, n) : se(isNaN(t) ? e : t)
}
const $t = (function t(e) {
  var n = zs(e)
  function r(i, s) {
    var o = n((i = ot(i)).r, (s = ot(s)).r),
      a = n(i.g, s.g),
      u = n(i.b, s.b),
      l = vn(i.opacity, s.opacity)
    return function (c) {
      return (
        (i.r = o(c)), (i.g = a(c)), (i.b = u(c)), (i.opacity = l(c)), i + ''
      )
    }
  }
  return (r.gamma = t), r
})(1)
function Hs(t, e) {
  e || (e = [])
  var n = t ? Math.min(e.length, t.length) : 0,
    r = e.slice(),
    i
  return function (s) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - s) + e[i] * s
    return r
  }
}
function Ps(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView)
}
function Ls(t, e) {
  var n = e ? e.length : 0,
    r = t ? Math.min(n, t.length) : 0,
    i = new Array(r),
    s = new Array(n),
    o
  for (o = 0; o < r; ++o) i[o] = oe(t[o], e[o])
  for (; o < n; ++o) s[o] = e[o]
  return function (a) {
    for (o = 0; o < r; ++o) s[o] = i[o](a)
    return s
  }
}
function Vs(t, e) {
  var n = new Date()
  return (
    (t = +t),
    (e = +e),
    function (r) {
      return n.setTime(t * (1 - r) + e * r), n
    }
  )
}
function $(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (n) {
      return t * (1 - n) + e * n
    }
  )
}
function qs(t, e) {
  var n = {},
    r = {},
    i
  ;(t === null || typeof t != 'object') && (t = {}),
    (e === null || typeof e != 'object') && (e = {})
  for (i in e) i in t ? (n[i] = oe(t[i], e[i])) : (r[i] = e[i])
  return function (s) {
    for (i in n) r[i] = n[i](s)
    return r
  }
}
var Kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  qt = new RegExp(Kt.source, 'g')
function Xs(t) {
  return function () {
    return t
  }
}
function Gs(t) {
  return function (e) {
    return t(e) + ''
  }
}
function yn(t, e) {
  var n = (Kt.lastIndex = qt.lastIndex = 0),
    r,
    i,
    s,
    o = -1,
    a = [],
    u = []
  for (t = t + '', e = e + ''; (r = Kt.exec(t)) && (i = qt.exec(e)); )
    (s = i.index) > n &&
      ((s = e.slice(n, s)), a[o] ? (a[o] += s) : (a[++o] = s)),
      (r = r[0]) === (i = i[0])
        ? a[o]
          ? (a[o] += i)
          : (a[++o] = i)
        : ((a[++o] = null), u.push({ i: o, x: $(r, i) })),
      (n = qt.lastIndex)
  return (
    n < e.length && ((s = e.slice(n)), a[o] ? (a[o] += s) : (a[++o] = s)),
    a.length < 2
      ? u[0]
        ? Gs(u[0].x)
        : Xs(e)
      : ((e = u.length),
        function (l) {
          for (var c = 0, f; c < e; ++c) a[(f = u[c]).i] = f.x(l)
          return a.join('')
        })
  )
}
function oe(t, e) {
  var n = typeof e,
    r
  return e == null || n === 'boolean'
    ? se(e)
    : (n === 'number'
        ? $
        : n === 'string'
        ? (r = X(e))
          ? ((e = r), $t)
          : yn
        : e instanceof X
        ? $t
        : e instanceof Date
        ? Vs
        : Ps(e)
        ? Hs
        : Array.isArray(e)
        ? Ls
        : (typeof e.valueOf != 'function' && typeof e.toString != 'function') ||
          isNaN(e)
        ? qs
        : $)(t, e)
}
function Bs(t, e) {
  return (
    (t = +t),
    (e = +e),
    function (n) {
      return Math.round(t * (1 - n) + e * n)
    }
  )
}
var $e = 180 / Math.PI,
  Ut = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  }
function wn(t, e, n, r, i, s) {
  var o, a, u
  return (
    (o = Math.sqrt(t * t + e * e)) && ((t /= o), (e /= o)),
    (u = t * n + e * r) && ((n -= t * u), (r -= e * u)),
    (a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (u /= a)),
    t * r < e * n && ((t = -t), (e = -e), (u = -u), (o = -o)),
    {
      translateX: i,
      translateY: s,
      rotate: Math.atan2(e, t) * $e,
      skewX: Math.atan(u) * $e,
      scaleX: o,
      scaleY: a,
    }
  )
}
var gt
function Ws(t) {
  const e = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(
    t + ''
  )
  return e.isIdentity ? Ut : wn(e.a, e.b, e.c, e.d, e.e, e.f)
}
function Ys(t) {
  return t == null ||
    (gt || (gt = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
    gt.setAttribute('transform', t),
    !(t = gt.transform.baseVal.consolidate()))
    ? Ut
    : ((t = t.matrix), wn(t.a, t.b, t.c, t.d, t.e, t.f))
}
function _n(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + ' ' : ''
  }
  function s(l, c, f, h, d, g) {
    if (l !== f || c !== h) {
      var m = d.push('translate(', null, e, null, n)
      g.push({ i: m - 4, x: $(l, f) }, { i: m - 2, x: $(c, h) })
    } else (f || h) && d.push('translate(' + f + e + h + n)
  }
  function o(l, c, f, h) {
    l !== c
      ? (l - c > 180 ? (c += 360) : c - l > 180 && (l += 360),
        h.push({ i: f.push(i(f) + 'rotate(', null, r) - 2, x: $(l, c) }))
      : c && f.push(i(f) + 'rotate(' + c + r)
  }
  function a(l, c, f, h) {
    l !== c
      ? h.push({ i: f.push(i(f) + 'skewX(', null, r) - 2, x: $(l, c) })
      : c && f.push(i(f) + 'skewX(' + c + r)
  }
  function u(l, c, f, h, d, g) {
    if (l !== f || c !== h) {
      var m = d.push(i(d) + 'scale(', null, ',', null, ')')
      g.push({ i: m - 4, x: $(l, f) }, { i: m - 2, x: $(c, h) })
    } else (f !== 1 || h !== 1) && d.push(i(d) + 'scale(' + f + ',' + h + ')')
  }
  return function (l, c) {
    var f = [],
      h = []
    return (
      (l = t(l)),
      (c = t(c)),
      s(l.translateX, l.translateY, c.translateX, c.translateY, f, h),
      o(l.rotate, c.rotate, f, h),
      a(l.skewX, c.skewX, f, h),
      u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h),
      (l = c = null),
      function (d) {
        for (var g = -1, m = h.length, _; ++g < m; ) f[(_ = h[g]).i] = _.x(d)
        return f.join('')
      }
    )
  }
}
var Ks = _n(Ws, 'px, ', 'px)', 'deg)'),
  Us = _n(Ys, ', ', ')', ')')
function Zs(t) {
  return function () {
    return t
  }
}
function Js(t) {
  return +t
}
var Te = [0, 1]
function K(t) {
  return t
}
function Zt(t, e) {
  return (e -= t = +t)
    ? function (n) {
        return (n - t) / e
      }
    : Zs(isNaN(e) ? NaN : 0.5)
}
function Qs(t, e) {
  var n
  return (
    t > e && ((n = t), (t = e), (e = n)),
    function (r) {
      return Math.max(t, Math.min(e, r))
    }
  )
}
function js(t, e, n) {
  var r = t[0],
    i = t[1],
    s = e[0],
    o = e[1]
  return (
    i < r ? ((r = Zt(i, r)), (s = n(o, s))) : ((r = Zt(r, i)), (s = n(s, o))),
    function (a) {
      return s(r(a))
    }
  )
}
function to(t, e, n) {
  var r = Math.min(t.length, e.length) - 1,
    i = new Array(r),
    s = new Array(r),
    o = -1
  for (
    t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
    ++o < r;

  )
    (i[o] = Zt(t[o], t[o + 1])), (s[o] = n(e[o], e[o + 1]))
  return function (a) {
    var u = fr(t, a, 1, r) - 1
    return s[u](i[u](a))
  }
}
function eo(t, e) {
  return e
    .domain(t.domain())
    .range(t.range())
    .interpolate(t.interpolate())
    .clamp(t.clamp())
    .unknown(t.unknown())
}
function no() {
  var t = Te,
    e = Te,
    n = oe,
    r,
    i,
    s,
    o = K,
    a,
    u,
    l
  function c() {
    var h = Math.min(t.length, e.length)
    return (
      o !== K && (o = Qs(t[0], t[h - 1])),
      (a = h > 2 ? to : js),
      (u = l = null),
      f
    )
  }
  function f(h) {
    return h == null || isNaN((h = +h))
      ? s
      : (u || (u = a(t.map(r), e, n)))(r(o(h)))
  }
  return (
    (f.invert = function (h) {
      return o(i((l || (l = a(e, t.map(r), $)))(h)))
    }),
    (f.domain = function (h) {
      return arguments.length ? ((t = Array.from(h, Js)), c()) : t.slice()
    }),
    (f.range = function (h) {
      return arguments.length ? ((e = Array.from(h)), c()) : e.slice()
    }),
    (f.rangeRound = function (h) {
      return (e = Array.from(h)), (n = Bs), c()
    }),
    (f.clamp = function (h) {
      return arguments.length ? ((o = h ? !0 : K), c()) : o !== K
    }),
    (f.interpolate = function (h) {
      return arguments.length ? ((n = h), c()) : n
    }),
    (f.unknown = function (h) {
      return arguments.length ? ((s = h), f) : s
    }),
    function (h, d) {
      return (r = h), (i = d), c()
    }
  )
}
function ro() {
  return no()(K, K)
}
function io(t) {
  return Math.abs((t = Math.round(t))) >= 1e21
    ? t.toLocaleString('en').replace(/,/g, '')
    : t.toString(10)
}
function Tt(t, e) {
  if (
    (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf('e')) < 0
  )
    return null
  var n,
    r = t.slice(0, n)
  return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
}
function Q(t) {
  return (t = Tt(Math.abs(t))), t ? t[1] : NaN
}
function so(t, e) {
  return function (n, r) {
    for (
      var i = n.length, s = [], o = 0, a = t[0], u = 0;
      i > 0 &&
      a > 0 &&
      (u + a + 1 > r && (a = Math.max(1, r - u)),
      s.push(n.substring((i -= a), i + a)),
      !((u += a + 1) > r));

    )
      a = t[(o = (o + 1) % t.length)]
    return s.reverse().join(e)
  }
}
function oo(t) {
  return function (e) {
    return e.replace(/[0-9]/g, function (n) {
      return t[+n]
    })
  }
}
var ao =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function Ot(t) {
  if (!(e = ao.exec(t))) throw new Error('invalid format: ' + t)
  var e
  return new ae({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10],
  })
}
Ot.prototype = ae.prototype
function ae(t) {
  ;(this.fill = t.fill === void 0 ? ' ' : t.fill + ''),
    (this.align = t.align === void 0 ? '>' : t.align + ''),
    (this.sign = t.sign === void 0 ? '-' : t.sign + ''),
    (this.symbol = t.symbol === void 0 ? '' : t.symbol + ''),
    (this.zero = !!t.zero),
    (this.width = t.width === void 0 ? void 0 : +t.width),
    (this.comma = !!t.comma),
    (this.precision = t.precision === void 0 ? void 0 : +t.precision),
    (this.trim = !!t.trim),
    (this.type = t.type === void 0 ? '' : t.type + '')
}
ae.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? '0' : '') +
    (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
    (this.comma ? ',' : '') +
    (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
    (this.trim ? '~' : '') +
    this.type
  )
}
function uo(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case '.':
        r = i = n
        break
      case '0':
        r === 0 && (r = n), (i = n)
        break
      default:
        if (!+t[n]) break t
        r > 0 && (r = 0)
        break
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t
}
var xn
function lo(t, e) {
  var n = Tt(t, e)
  if (!n) return t + ''
  var r = n[0],
    i = n[1],
    s = i - (xn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length
  return s === o
    ? r
    : s > o
    ? r + new Array(s - o + 1).join('0')
    : s > 0
    ? r.slice(0, s) + '.' + r.slice(s)
    : '0.' + new Array(1 - s).join('0') + Tt(t, Math.max(0, e + s - 1))[0]
}
function Oe(t, e) {
  var n = Tt(t, e)
  if (!n) return t + ''
  var r = n[0],
    i = n[1]
  return i < 0
    ? '0.' + new Array(-i).join('0') + r
    : r.length > i + 1
    ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join('0')
}
const Re = {
  '%': (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + '',
  d: io,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Oe(t * 100, e),
  r: Oe,
  s: lo,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16),
}
function Ce(t) {
  return t
}
var Fe = Array.prototype.map,
  De = [
    'y',
    'z',
    'a',
    'f',
    'p',
    'n',
    '\xB5',
    'm',
    '',
    'k',
    'M',
    'G',
    'T',
    'P',
    'E',
    'Z',
    'Y',
  ]
function co(t) {
  var e =
      t.grouping === void 0 || t.thousands === void 0
        ? Ce
        : so(Fe.call(t.grouping, Number), t.thousands + ''),
    n = t.currency === void 0 ? '' : t.currency[0] + '',
    r = t.currency === void 0 ? '' : t.currency[1] + '',
    i = t.decimal === void 0 ? '.' : t.decimal + '',
    s = t.numerals === void 0 ? Ce : oo(Fe.call(t.numerals, String)),
    o = t.percent === void 0 ? '%' : t.percent + '',
    a = t.minus === void 0 ? '\u2212' : t.minus + '',
    u = t.nan === void 0 ? 'NaN' : t.nan + ''
  function l(f) {
    f = Ot(f)
    var h = f.fill,
      d = f.align,
      g = f.sign,
      m = f.symbol,
      _ = f.zero,
      b = f.width,
      y = f.comma,
      w = f.precision,
      k = f.trim,
      x = f.type
    x === 'n'
      ? ((y = !0), (x = 'g'))
      : Re[x] || (w === void 0 && (w = 12), (k = !0), (x = 'g')),
      (_ || (h === '0' && d === '=')) && ((_ = !0), (h = '0'), (d = '='))
    var z =
        m === '$'
          ? n
          : m === '#' && /[boxX]/.test(x)
          ? '0' + x.toLowerCase()
          : '',
      N = m === '$' ? r : /[%p]/.test(x) ? o : '',
      B = Re[x],
      W = /[defgprs%]/.test(x)
    w =
      w === void 0
        ? 6
        : /[gprs]/.test(x)
        ? Math.max(1, Math.min(21, w))
        : Math.max(0, Math.min(20, w))
    function H(v) {
      var A = z,
        M = N,
        Y,
        fe,
        ct
      if (x === 'c') (M = B(v) + M), (v = '')
      else {
        v = +v
        var ft = v < 0 || 1 / v < 0
        if (
          ((v = isNaN(v) ? u : B(Math.abs(v), w)),
          k && (v = uo(v)),
          ft && +v == 0 && g !== '+' && (ft = !1),
          (A =
            (ft ? (g === '(' ? g : a) : g === '-' || g === '(' ? '' : g) + A),
          (M =
            (x === 's' ? De[8 + xn / 3] : '') +
            M +
            (ft && g === '(' ? ')' : '')),
          W)
        ) {
          for (Y = -1, fe = v.length; ++Y < fe; )
            if (((ct = v.charCodeAt(Y)), 48 > ct || ct > 57)) {
              ;(M = (ct === 46 ? i + v.slice(Y + 1) : v.slice(Y)) + M),
                (v = v.slice(0, Y))
              break
            }
        }
      }
      y && !_ && (v = e(v, 1 / 0))
      var ht = A.length + v.length + M.length,
        F = ht < b ? new Array(b - ht + 1).join(h) : ''
      switch (
        (y && _ && ((v = e(F + v, F.length ? b - M.length : 1 / 0)), (F = '')),
        d)
      ) {
        case '<':
          v = A + v + M + F
          break
        case '=':
          v = A + F + v + M
          break
        case '^':
          v = F.slice(0, (ht = F.length >> 1)) + A + v + M + F.slice(ht)
          break
        default:
          v = F + A + v + M
          break
      }
      return s(v)
    }
    return (
      (H.toString = function () {
        return f + ''
      }),
      H
    )
  }
  function c(f, h) {
    var d = l(((f = Ot(f)), (f.type = 'f'), f)),
      g = Math.max(-8, Math.min(8, Math.floor(Q(h) / 3))) * 3,
      m = Math.pow(10, -g),
      _ = De[8 + g / 3]
    return function (b) {
      return d(m * b) + _
    }
  }
  return {
    format: l,
    formatPrefix: c,
  }
}
var mt, bn, Mn
fo({
  thousands: ',',
  grouping: [3],
  currency: ['$', ''],
})
function fo(t) {
  return (mt = co(t)), (bn = mt.format), (Mn = mt.formatPrefix), mt
}
function ho(t) {
  return Math.max(0, -Q(Math.abs(t)))
}
function po(t, e) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Q(e) / 3))) * 3 - Q(Math.abs(t))
  )
}
function go(t, e) {
  return (t = Math.abs(t)), (e = Math.abs(e) - t), Math.max(0, Q(e) - Q(t)) + 1
}
function mo(t, e, n, r) {
  var i = wr(t, e, n),
    s
  switch (((r = Ot(r == null ? ',f' : r)), r.type)) {
    case 's': {
      var o = Math.max(Math.abs(t), Math.abs(e))
      return (
        r.precision == null && !isNaN((s = po(i, o))) && (r.precision = s),
        Mn(r, o)
      )
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      r.precision == null &&
        !isNaN((s = go(i, Math.max(Math.abs(t), Math.abs(e))))) &&
        (r.precision = s - (r.type === 'e'))
      break
    }
    case 'f':
    case '%': {
      r.precision == null &&
        !isNaN((s = ho(i))) &&
        (r.precision = s - (r.type === '%') * 2)
      break
    }
  }
  return bn(r)
}
function vo(t) {
  var e = t.domain
  return (
    (t.ticks = function (n) {
      var r = e()
      return yr(r[0], r[r.length - 1], n == null ? 10 : n)
    }),
    (t.tickFormat = function (n, r) {
      var i = e()
      return mo(i[0], i[i.length - 1], n == null ? 10 : n, r)
    }),
    (t.nice = function (n) {
      n == null && (n = 10)
      var r = e(),
        i = 0,
        s = r.length - 1,
        o = r[i],
        a = r[s],
        u,
        l,
        c = 10
      for (
        a < o && ((l = o), (o = a), (a = l), (l = i), (i = s), (s = l));
        c-- > 0;

      ) {
        if (((l = Gt(o, a, n)), l === u)) return (r[i] = o), (r[s] = a), e(r)
        if (l > 0) (o = Math.floor(o / l) * l), (a = Math.ceil(a / l) * l)
        else if (l < 0) (o = Math.ceil(o * l) / l), (a = Math.floor(a * l) / l)
        else break
        u = l
      }
      return t
    }),
    t
  )
}
function An() {
  var t = ro()
  return (
    (t.copy = function () {
      return eo(t, An())
    }),
    ie.apply(t, arguments),
    vo(t)
  )
}
const Xt = {
  band: () => mn().padding(0.2),
  linear: () => An(),
}
class yo {
  constructor({ scaleType: e = 'band', dataSet: n, dimensions: r }) {
    p(this, 'scaleType')
    p(this, 'axisScale')
    p(this, 'dataSet')
    p(this, 'dimensions')
    p(this, 'setData', (e) => {
      if (e === void 0) throw new Error('No data to set!')
      return (this.dataSet = e), this
    })
    p(this, 'render', () => {
      const { padding: e, height: n, innerWidth: r } = this.dimensions
      if (this.dataSet === void 0) throw new Error('No data to render scale!')
      if (
        this.scaleType === void 0 ||
        !['band', 'linear'].includes(this.scaleType)
      )
        throw new Error('Unknown chart type!')
      const i = {
        band: [this.dataSet.data.map((s) => s.label), [0, r]],
        linear: [
          [this.dataSet.minValue, this.dataSet.maxValue],
          [n - e.b, e.t],
        ],
      }[this.scaleType]
      this.axisScale.domain(i[0]), this.axisScale.range(i[1])
    })
    var i
    ;(this.scaleType = e),
      (this.axisScale = (i = Xt[e]) == null ? void 0 : i.call(Xt)),
      (this.dimensions = r),
      (this.dataSet = n),
      this.dataSet !== void 0 && this.render()
  }
}
const Ie = (t, e = 0) =>
  t.slice(0, e).reduce((n, { labelWidth: r = 0 }) => n + r, 0)
class wo {
  constructor({ d3Svg: e, values: n, dimensions: r }) {
    p(this, 'd3Svg')
    p(this, 'values')
    p(this, 'dimensions')
    if (![e, n, r].every(P))
      throw new Error('Incorrect parameters provided to Key constructor.')
    ;(this.d3Svg = e),
      (this.values = [...n]),
      (this.dimensions = r),
      this.render()
  }
  render() {
    const { innerWidth: e, height: n, padding: r } = this.dimensions
    let i = 0
    const s = e / 2 + r.l,
      o = n - 20
    this.d3Svg.selectAll('g.pic-key-group').remove()
    const a = this.d3Svg.append('g').attr('class', 'pic-key-group')
    a
      .selectAll('text.pic-key-label')
      .data(this.values)
      .enter()
      .append('text')
      .text(({ name: c }) => c)
      .each((c, f, h) => {
        const d = h[f].getBoundingClientRect().width + 22
        ;(this.values[f].labelWidth = d), (i += d - 2)
      })
      .attr('class', 'pic-key-label')
      .attr('x', (c, f) => Ie(this.values, f))
      .attr('y', 10)
      .attr('width', 12)
      .attr('height', 12)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '12px')
      .attr('fill', '#222222'),
      a
        .selectAll('rect.pic-key')
        .data(this.values)
        .enter()
        .append('rect')
        .attr('class', 'pic-key')
        .attr('fill', ({ color: c }) => c)
        .attr('x', (c, f) => Ie(this.values, f) - 16)
        .attr('y', 0)
        .attr('width', 12)
        .attr('height', 12),
      (i = s - i / 2),
      a.attr('transform', `translate(${i},${o})`)
  }
}
const _o = (t) => +t
function xo(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
}
var bo = { value: () => {} }
function En() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + '') || r in n || /[\s.]/.test(r))
      throw new Error('illegal type: ' + r)
    n[r] = []
  }
  return new wt(n)
}
function wt(t) {
  this._ = t
}
function Mo(t, e) {
  return t
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = '',
        i = n.indexOf('.')
      if (
        (i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))),
        n && !e.hasOwnProperty(n))
      )
        throw new Error('unknown type: ' + n)
      return { type: n, name: r }
    })
}
wt.prototype = En.prototype = {
  constructor: wt,
  on: function (t, e) {
    var n = this._,
      r = Mo(t + '', n),
      i,
      s = -1,
      o = r.length
    if (arguments.length < 2) {
      for (; ++s < o; )
        if ((i = (t = r[s]).type) && (i = Ao(n[i], t.name))) return i
      return
    }
    if (e != null && typeof e != 'function')
      throw new Error('invalid callback: ' + e)
    for (; ++s < o; )
      if ((i = (t = r[s]).type)) n[i] = ze(n[i], t.name, e)
      else if (e == null) for (i in n) n[i] = ze(n[i], t.name, null)
    return this
  },
  copy: function () {
    var t = {},
      e = this._
    for (var n in e) t[n] = e[n].slice()
    return new wt(t)
  },
  call: function (t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, s; r < i; ++r)
        n[r] = arguments[r + 2]
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
    for (s = this._[t], r = 0, i = s.length; r < i; ++r) s[r].value.apply(e, n)
  },
  apply: function (t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t)
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(e, n)
  },
}
function Ao(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e) return i.value
}
function ze(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      ;(t[r] = bo), (t = t.slice(0, r).concat(t.slice(r + 1)))
      break
    }
  return n != null && t.push({ name: e, value: n }), t
}
var j = 0,
  nt = 0,
  tt = 0,
  Sn = 1e3,
  Rt,
  rt,
  Ct = 0,
  G = 0,
  zt = 0,
  at = typeof performance == 'object' && performance.now ? performance : Date,
  kn =
    typeof window == 'object' && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (t) {
          setTimeout(t, 17)
        }
function ue() {
  return G || (kn(Eo), (G = at.now() + zt))
}
function Eo() {
  G = 0
}
function Ft() {
  this._call = this._time = this._next = null
}
Ft.prototype = Nn.prototype = {
  constructor: Ft,
  restart: function (t, e, n) {
    if (typeof t != 'function')
      throw new TypeError('callback is not a function')
    ;(n = (n == null ? ue() : +n) + (e == null ? 0 : +e)),
      !this._next &&
        rt !== this &&
        (rt ? (rt._next = this) : (Rt = this), (rt = this)),
      (this._call = t),
      (this._time = n),
      Jt()
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Jt())
  },
}
function Nn(t, e, n) {
  var r = new Ft()
  return r.restart(t, e, n), r
}
function So() {
  ue(), ++j
  for (var t = Rt, e; t; )
    (e = G - t._time) >= 0 && t._call.call(void 0, e), (t = t._next)
  --j
}
function He() {
  ;(G = (Ct = at.now()) + zt), (j = nt = 0)
  try {
    So()
  } finally {
    ;(j = 0), No(), (G = 0)
  }
}
function ko() {
  var t = at.now(),
    e = t - Ct
  e > Sn && ((zt -= e), (Ct = t))
}
function No() {
  for (var t, e = Rt, n, r = 1 / 0; e; )
    e._call
      ? (r > e._time && (r = e._time), (t = e), (e = e._next))
      : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (Rt = n)))
  ;(rt = t), Jt(r)
}
function Jt(t) {
  if (!j) {
    nt && (nt = clearTimeout(nt))
    var e = t - G
    e > 24
      ? (t < 1 / 0 && (nt = setTimeout(He, t - at.now() - zt)),
        tt && (tt = clearInterval(tt)))
      : (tt || ((Ct = at.now()), (tt = setInterval(ko, Sn))), (j = 1), kn(He))
  }
}
function Pe(t, e, n) {
  var r = new Ft()
  return (
    (e = e == null ? 0 : +e),
    r.restart(
      (i) => {
        r.stop(), t(i + e)
      },
      e,
      n
    ),
    r
  )
}
var $o = En('start', 'end', 'cancel', 'interrupt'),
  To = [],
  $n = 0,
  Le = 1,
  Qt = 2,
  _t = 3,
  Ve = 4,
  jt = 5,
  xt = 6
function Ht(t, e, n, r, i, s) {
  var o = t.__transition
  if (!o) t.__transition = {}
  else if (n in o) return
  Oo(t, n, {
    name: e,
    index: r,
    group: i,
    on: $o,
    tween: To,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: $n,
  })
}
function le(t, e) {
  var n = O(t, e)
  if (n.state > $n) throw new Error('too late; already scheduled')
  return n
}
function C(t, e) {
  var n = O(t, e)
  if (n.state > _t) throw new Error('too late; already running')
  return n
}
function O(t, e) {
  var n = t.__transition
  if (!n || !(n = n[e])) throw new Error('transition not found')
  return n
}
function Oo(t, e, n) {
  var r = t.__transition,
    i
  ;(r[e] = n), (n.timer = Nn(s, 0, n.time))
  function s(l) {
    ;(n.state = Le),
      n.timer.restart(o, n.delay, n.time),
      n.delay <= l && o(l - n.delay)
  }
  function o(l) {
    var c, f, h, d
    if (n.state !== Le) return u()
    for (c in r)
      if (((d = r[c]), d.name === n.name)) {
        if (d.state === _t) return Pe(o)
        d.state === Ve
          ? ((d.state = xt),
            d.timer.stop(),
            d.on.call('interrupt', t, t.__data__, d.index, d.group),
            delete r[c])
          : +c < e &&
            ((d.state = xt),
            d.timer.stop(),
            d.on.call('cancel', t, t.__data__, d.index, d.group),
            delete r[c])
      }
    if (
      (Pe(function () {
        n.state === _t &&
          ((n.state = Ve), n.timer.restart(a, n.delay, n.time), a(l))
      }),
      (n.state = Qt),
      n.on.call('start', t, t.__data__, n.index, n.group),
      n.state === Qt)
    ) {
      for (
        n.state = _t, i = new Array((h = n.tween.length)), c = 0, f = -1;
        c < h;
        ++c
      )
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) &&
          (i[++f] = d)
      i.length = f + 1
    }
  }
  function a(l) {
    for (
      var c =
          l < n.duration
            ? n.ease.call(null, l / n.duration)
            : (n.timer.restart(u), (n.state = jt), 1),
        f = -1,
        h = i.length;
      ++f < h;

    )
      i[f].call(t, c)
    n.state === jt && (n.on.call('end', t, t.__data__, n.index, n.group), u())
  }
  function u() {
    ;(n.state = xt), n.timer.stop(), delete r[e]
    for (var l in r) return
    delete t.__transition
  }
}
function Ro(t, e) {
  var n = t.__transition,
    r,
    i,
    s = !0,
    o
  if (!!n) {
    e = e == null ? null : e + ''
    for (o in n) {
      if ((r = n[o]).name !== e) {
        s = !1
        continue
      }
      ;(i = r.state > Qt && r.state < jt),
        (r.state = xt),
        r.timer.stop(),
        r.on.call(i ? 'interrupt' : 'cancel', t, t.__data__, r.index, r.group),
        delete n[o]
    }
    s && delete t.__transition
  }
}
function Co(t) {
  return this.each(function () {
    Ro(this, t)
  })
}
function Fo(t, e) {
  var n, r
  return function () {
    var i = C(this, t),
      s = i.tween
    if (s !== n) {
      r = n = s
      for (var o = 0, a = r.length; o < a; ++o)
        if (r[o].name === e) {
          ;(r = r.slice()), r.splice(o, 1)
          break
        }
    }
    i.tween = r
  }
}
function Do(t, e, n) {
  var r, i
  if (typeof n != 'function') throw new Error()
  return function () {
    var s = C(this, t),
      o = s.tween
    if (o !== r) {
      i = (r = o).slice()
      for (var a = { name: e, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === e) {
          i[u] = a
          break
        }
      u === l && i.push(a)
    }
    s.tween = i
  }
}
function Io(t, e) {
  var n = this._id
  if (((t += ''), arguments.length < 2)) {
    for (var r = O(this.node(), n).tween, i = 0, s = r.length, o; i < s; ++i)
      if ((o = r[i]).name === t) return o.value
    return null
  }
  return this.each((e == null ? Fo : Do)(n, t, e))
}
function ce(t, e, n) {
  var r = t._id
  return (
    t.each(function () {
      var i = C(this, r)
      ;(i.value || (i.value = {}))[e] = n.apply(this, arguments)
    }),
    function (i) {
      return O(i, r).value[e]
    }
  )
}
function Tn(t, e) {
  var n
  return (
    typeof e == 'number'
      ? $
      : e instanceof X
      ? $t
      : (n = X(e))
      ? ((e = n), $t)
      : yn
  )(t, e)
}
function zo(t) {
  return function () {
    this.removeAttribute(t)
  }
}
function Ho(t) {
  return function () {
    this.removeAttributeNS(t.space, t.local)
  }
}
function Po(t, e, n) {
  var r,
    i = n + '',
    s
  return function () {
    var o = this.getAttribute(t)
    return o === i ? null : o === r ? s : (s = e((r = o), n))
  }
}
function Lo(t, e, n) {
  var r,
    i = n + '',
    s
  return function () {
    var o = this.getAttributeNS(t.space, t.local)
    return o === i ? null : o === r ? s : (s = e((r = o), n))
  }
}
function Vo(t, e, n) {
  var r, i, s
  return function () {
    var o,
      a = n(this),
      u
    return a == null
      ? void this.removeAttribute(t)
      : ((o = this.getAttribute(t)),
        (u = a + ''),
        o === u
          ? null
          : o === r && u === i
          ? s
          : ((i = u), (s = e((r = o), a))))
  }
}
function qo(t, e, n) {
  var r, i, s
  return function () {
    var o,
      a = n(this),
      u
    return a == null
      ? void this.removeAttributeNS(t.space, t.local)
      : ((o = this.getAttributeNS(t.space, t.local)),
        (u = a + ''),
        o === u
          ? null
          : o === r && u === i
          ? s
          : ((i = u), (s = e((r = o), a))))
  }
}
function Xo(t, e) {
  var n = Dt(t),
    r = n === 'transform' ? Us : Tn
  return this.attrTween(
    t,
    typeof e == 'function'
      ? (n.local ? qo : Vo)(n, r, ce(this, 'attr.' + t, e))
      : e == null
      ? (n.local ? Ho : zo)(n)
      : (n.local ? Lo : Po)(n, r, e)
  )
}
function Go(t, e) {
  return function (n) {
    this.setAttribute(t, e.call(this, n))
  }
}
function Bo(t, e) {
  return function (n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n))
  }
}
function Wo(t, e) {
  var n, r
  function i() {
    var s = e.apply(this, arguments)
    return s !== r && (n = (r = s) && Bo(t, s)), n
  }
  return (i._value = e), i
}
function Yo(t, e) {
  var n, r
  function i() {
    var s = e.apply(this, arguments)
    return s !== r && (n = (r = s) && Go(t, s)), n
  }
  return (i._value = e), i
}
function Ko(t, e) {
  var n = 'attr.' + t
  if (arguments.length < 2) return (n = this.tween(n)) && n._value
  if (e == null) return this.tween(n, null)
  if (typeof e != 'function') throw new Error()
  var r = Dt(t)
  return this.tween(n, (r.local ? Wo : Yo)(r, e))
}
function Uo(t, e) {
  return function () {
    le(this, t).delay = +e.apply(this, arguments)
  }
}
function Zo(t, e) {
  return (
    (e = +e),
    function () {
      le(this, t).delay = e
    }
  )
}
function Jo(t) {
  var e = this._id
  return arguments.length
    ? this.each((typeof t == 'function' ? Uo : Zo)(e, t))
    : O(this.node(), e).delay
}
function Qo(t, e) {
  return function () {
    C(this, t).duration = +e.apply(this, arguments)
  }
}
function jo(t, e) {
  return (
    (e = +e),
    function () {
      C(this, t).duration = e
    }
  )
}
function ta(t) {
  var e = this._id
  return arguments.length
    ? this.each((typeof t == 'function' ? Qo : jo)(e, t))
    : O(this.node(), e).duration
}
function ea(t, e) {
  if (typeof e != 'function') throw new Error()
  return function () {
    C(this, t).ease = e
  }
}
function na(t) {
  var e = this._id
  return arguments.length ? this.each(ea(e, t)) : O(this.node(), e).ease
}
function ra(t, e) {
  return function () {
    var n = e.apply(this, arguments)
    if (typeof n != 'function') throw new Error()
    C(this, t).ease = n
  }
}
function ia(t) {
  if (typeof t != 'function') throw new Error()
  return this.each(ra(this._id, t))
}
function sa(t) {
  typeof t != 'function' && (t = Ze(t))
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var s = e[i], o = s.length, a = (r[i] = []), u, l = 0; l < o; ++l)
      (u = s[l]) && t.call(u, u.__data__, l, s) && a.push(u)
  return new I(r, this._parents, this._name, this._id)
}
function oa(t) {
  if (t._id !== this._id) throw new Error()
  for (
    var e = this._groups,
      n = t._groups,
      r = e.length,
      i = n.length,
      s = Math.min(r, i),
      o = new Array(r),
      a = 0;
    a < s;
    ++a
  )
    for (
      var u = e[a], l = n[a], c = u.length, f = (o[a] = new Array(c)), h, d = 0;
      d < c;
      ++d
    )
      (h = u[d] || l[d]) && (f[d] = h)
  for (; a < r; ++a) o[a] = e[a]
  return new I(o, this._parents, this._name, this._id)
}
function aa(t) {
  return (t + '')
    .trim()
    .split(/^|\s+/)
    .every(function (e) {
      var n = e.indexOf('.')
      return n >= 0 && (e = e.slice(0, n)), !e || e === 'start'
    })
}
function ua(t, e, n) {
  var r,
    i,
    s = aa(e) ? le : C
  return function () {
    var o = s(this, t),
      a = o.on
    a !== r && (i = (r = a).copy()).on(e, n), (o.on = i)
  }
}
function la(t, e) {
  var n = this._id
  return arguments.length < 2
    ? O(this.node(), n).on.on(t)
    : this.each(ua(n, t, e))
}
function ca(t) {
  return function () {
    var e = this.parentNode
    for (var n in this.__transition) if (+n !== t) return
    e && e.removeChild(this)
  }
}
function fa() {
  return this.on('end.remove', ca(this._id))
}
function ha(t) {
  var e = this._name,
    n = this._id
  typeof t != 'function' && (t = ee(t))
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o)
    for (
      var a = r[o], u = a.length, l = (s[o] = new Array(u)), c, f, h = 0;
      h < u;
      ++h
    )
      (c = a[h]) &&
        (f = t.call(c, c.__data__, h, a)) &&
        ('__data__' in c && (f.__data__ = c.__data__),
        (l[h] = f),
        Ht(l[h], e, n, h, l, O(c, n)))
  return new I(s, this._parents, e, n)
}
function da(t) {
  var e = this._name,
    n = this._id
  typeof t != 'function' && (t = Ue(t))
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, c, f = 0; f < l; ++f)
      if ((c = u[f])) {
        for (
          var h = t.call(c, c.__data__, f, u),
            d,
            g = O(c, n),
            m = 0,
            _ = h.length;
          m < _;
          ++m
        )
          (d = h[m]) && Ht(d, e, n, m, h, g)
        s.push(h), o.push(c)
      }
  return new I(s, o, e, n)
}
var pa = lt.prototype.constructor
function ga() {
  return new pa(this._groups, this._parents)
}
function ma(t, e) {
  var n, r, i
  return function () {
    var s = Z(this, t),
      o = (this.style.removeProperty(t), Z(this, t))
    return s === o ? null : s === n && o === r ? i : (i = e((n = s), (r = o)))
  }
}
function On(t) {
  return function () {
    this.style.removeProperty(t)
  }
}
function va(t, e, n) {
  var r,
    i = n + '',
    s
  return function () {
    var o = Z(this, t)
    return o === i ? null : o === r ? s : (s = e((r = o), n))
  }
}
function ya(t, e, n) {
  var r, i, s
  return function () {
    var o = Z(this, t),
      a = n(this),
      u = a + ''
    return (
      a == null && (u = a = (this.style.removeProperty(t), Z(this, t))),
      o === u ? null : o === r && u === i ? s : ((i = u), (s = e((r = o), a)))
    )
  }
}
function wa(t, e) {
  var n,
    r,
    i,
    s = 'style.' + e,
    o = 'end.' + s,
    a
  return function () {
    var u = C(this, t),
      l = u.on,
      c = u.value[s] == null ? a || (a = On(e)) : void 0
    ;(l !== n || i !== c) && (r = (n = l).copy()).on(o, (i = c)), (u.on = r)
  }
}
function _a(t, e, n) {
  var r = (t += '') == 'transform' ? Ks : Tn
  return e == null
    ? this.styleTween(t, ma(t, r)).on('end.style.' + t, On(t))
    : typeof e == 'function'
    ? this.styleTween(t, ya(t, r, ce(this, 'style.' + t, e))).each(
        wa(this._id, t)
      )
    : this.styleTween(t, va(t, r, e), n).on('end.style.' + t, null)
}
function xa(t, e, n) {
  return function (r) {
    this.style.setProperty(t, e.call(this, r), n)
  }
}
function ba(t, e, n) {
  var r, i
  function s() {
    var o = e.apply(this, arguments)
    return o !== i && (r = (i = o) && xa(t, o, n)), r
  }
  return (s._value = e), s
}
function Ma(t, e, n) {
  var r = 'style.' + (t += '')
  if (arguments.length < 2) return (r = this.tween(r)) && r._value
  if (e == null) return this.tween(r, null)
  if (typeof e != 'function') throw new Error()
  return this.tween(r, ba(t, e, n == null ? '' : n))
}
function Aa(t) {
  return function () {
    this.textContent = t
  }
}
function Ea(t) {
  return function () {
    var e = t(this)
    this.textContent = e == null ? '' : e
  }
}
function Sa(t) {
  return this.tween(
    'text',
    typeof t == 'function'
      ? Ea(ce(this, 'text', t))
      : Aa(t == null ? '' : t + '')
  )
}
function ka(t) {
  return function (e) {
    this.textContent = t.call(this, e)
  }
}
function Na(t) {
  var e, n
  function r() {
    var i = t.apply(this, arguments)
    return i !== n && (e = (n = i) && ka(i)), e
  }
  return (r._value = t), r
}
function $a(t) {
  var e = 'text'
  if (arguments.length < 1) return (e = this.tween(e)) && e._value
  if (t == null) return this.tween(e, null)
  if (typeof t != 'function') throw new Error()
  return this.tween(e, Na(t))
}
function Ta() {
  for (
    var t = this._name,
      e = this._id,
      n = Rn(),
      r = this._groups,
      i = r.length,
      s = 0;
    s < i;
    ++s
  )
    for (var o = r[s], a = o.length, u, l = 0; l < a; ++l)
      if ((u = o[l])) {
        var c = O(u, e)
        Ht(u, t, n, l, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease,
        })
      }
  return new I(r, this._parents, t, n)
}
function Oa() {
  var t,
    e,
    n = this,
    r = n._id,
    i = n.size()
  return new Promise(function (s, o) {
    var a = { value: o },
      u = {
        value: function () {
          --i === 0 && s()
        },
      }
    n.each(function () {
      var l = C(this, r),
        c = l.on
      c !== t &&
        ((e = (t = c).copy()),
        e._.cancel.push(a),
        e._.interrupt.push(a),
        e._.end.push(u)),
        (l.on = e)
    }),
      i === 0 && s()
  })
}
var Ra = 0
function I(t, e, n, r) {
  ;(this._groups = t), (this._parents = e), (this._name = n), (this._id = r)
}
function Rn() {
  return ++Ra
}
var D = lt.prototype
I.prototype = {
  constructor: I,
  select: ha,
  selectAll: da,
  selectChild: D.selectChild,
  selectChildren: D.selectChildren,
  filter: sa,
  merge: oa,
  selection: ga,
  transition: Ta,
  call: D.call,
  nodes: D.nodes,
  node: D.node,
  size: D.size,
  empty: D.empty,
  each: D.each,
  on: la,
  attr: Xo,
  attrTween: Ko,
  style: _a,
  styleTween: Ma,
  text: Sa,
  textTween: $a,
  remove: fa,
  tween: Io,
  delay: Jo,
  duration: ta,
  ease: na,
  easeVarying: ia,
  end: Oa,
  [Symbol.iterator]: D[Symbol.iterator],
}
var Ca = {
  time: null,
  delay: 0,
  duration: 250,
  ease: xo,
}
function Fa(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`)
  return n
}
function Da(t) {
  var e, n
  t instanceof I
    ? ((e = t._id), (t = t._name))
    : ((e = Rn()), ((n = Ca).time = ue()), (t = t == null ? null : t + ''))
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
    for (var o = r[s], a = o.length, u, l = 0; l < a; ++l)
      (u = o[l]) && Ht(u, t, e, l, o, n || Fa(u, e))
  return new I(r, this._parents, t, e)
}
lt.prototype.interrupt = Co
lt.prototype.transition = Da
class Ia {
  constructor({
    d3Svg: e,
    config: n,
    dataSet: r,
    scales: i,
    tooltip: s,
    dimensions: o,
    transitionTime: a,
  }) {
    p(this, 'bars', [])
    p(this, 'chartGroup')
    p(this, 'config')
    p(this, 'dataSet')
    p(this, 'scales')
    p(this, 'tooltip')
    p(this, 'dimensions')
    p(this, 'transitionTime')
    p(this, 'render', ({ reset: e = !1, transition: n = !1 } = {}) => {
      if (this.scales.x === void 0 || this.scales.y === void 0) return
      const { data: r, minValue: i, maxValue: s } = this.dataSet,
        { values: o } = this.config,
        { innerHeight: a, padding: u } = this.dimensions,
        l = this.scales.x.axisScale,
        c = this.scales.y.axisScale,
        f = l.bandwidth() / o.length,
        h = n ? this.transitionTime : 0
      e &&
        (this.bars.forEach((d, g) => {
          ;(d = this.chartGroup.selectAll(`rect.pic-bars-${g}`).data([])),
            d.exit().remove(),
            (d = void 0)
        }),
        (this.bars = [])),
        o.forEach(({ rgbColor: d, name: g }, m) => {
          const _ = f * m
          this.bars[m] === void 0 &&
            ((this.bars[m] = this.chartGroup
              .selectAll(`rect.pic-bars-${m}`)
              .data(r)),
            this.bars[m]
              .enter()
              .append('rect')
              .on('mousemove', (y, w) => {
                this.tooltip.ping([w.label, g, String(w.values[m])], y)
              })
              .on('mouseover', ({ target: y }) => {
                St(y).attr('fill', nr(d).formatHex())
              })
              .on('mouseout', ({ target: y }) => {
                this.tooltip.hide(), St(y).attr('fill', d.formatHex())
              })
              .attr('class', `pic-bars pic-bars-${m}`)
              .attr('fill', d.formatHex())
              .attr('y', a + u.t)
              .attr('height', 0))
          let b = this.chartGroup
            .selectAll(`rect.pic-bars-${m}`)
            .data(r)
            .attr('x', (y) => Number(l(y.label)) + _)
            .attr('width', f)
          typeof b.transition == 'function' &&
            (b = b.transition().ease(_o).duration(h)),
            b
              .attr('y', (y) => {
                let w = y.values[m]
                return (w = w < 0 ? Math.abs(w) : 0), c(y.values[m] + w)
              })
              .attr('height', (y) => {
                const w = i < 0 ? Math.abs(s) : 0,
                  k = Math.abs(y.values[m]) - w
                return a - c(k) + u.t
              })
        })
    })
    if (n === void 0 || r === void 0 || i === void 0)
      throw new Error('Table is incorrectly initialised.')
    ;(this.config = n),
      (this.dataSet = r),
      (this.scales = i),
      (this.tooltip = s),
      (this.dimensions = o),
      (this.transitionTime = a),
      (this.chartGroup = e
        .append('g')
        .attr('class', 'pic-bars-group')
        .attr('transform', `translate(${o.padding.l}, 0)`)),
      this.render({ transition: !0 })
  }
}
const La = () => {
  const t = Dn(null)
  return (
    In(() => {
      t.current &&
        new bs({
          container: t.current,
          ...ir(),
        }).addDefaults()
    }, [t.current]),
    /* @__PURE__ */ he(zn, {
      children: /* @__PURE__ */ he('div', {
        ref: t,
      }),
    })
  )
}
export { La as default }
