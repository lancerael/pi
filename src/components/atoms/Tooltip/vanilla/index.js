import {
  useRef as M,
  useState as P,
  useCallback as R,
  useEffect as N,
} from 'react'
import { box as w } from '@pi-lib/styles'
import A, { css as B } from 'styled-components'
import { jsx as F } from 'react/jsx-runtime'
var g =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  k = 'Expected a function',
  O = 0 / 0,
  _ = '[object Symbol]',
  G = /^\s+|\s+$/g,
  D = /^[-+]0x[0-9a-f]+$/i,
  H = /^0b[01]+$/i,
  U = /^0o[0-7]+$/i,
  X = parseInt,
  q = typeof g == 'object' && g && g.Object === Object && g,
  z = typeof self == 'object' && self && self.Object === Object && self,
  J = q || z || Function('return this')(),
  K = Object.prototype,
  Q = K.toString,
  V = Math.max,
  Y = Math.min,
  T = function () {
    return J.Date.now()
  }
function Z(e, n, t) {
  var i,
    a,
    d,
    u,
    o,
    f,
    s = 0,
    m = !1,
    l = !1,
    v = !0
  if (typeof e != 'function') throw new TypeError(k)
  ;(n = S(n) || 0),
    y(t) &&
      ((m = !!t.leading),
      (l = 'maxWait' in t),
      (d = l ? V(S(t.maxWait) || 0, n) : d),
      (v = 'trailing' in t ? !!t.trailing : v))
  function h(r) {
    var c = i,
      p = a
    return (i = a = void 0), (s = r), (u = e.apply(p, c)), u
  }
  function L(r) {
    return (s = r), (o = setTimeout(b, n)), m ? h(r) : u
  }
  function W(r) {
    var c = r - f,
      p = r - s,
      I = n - c
    return l ? Y(I, d - p) : I
  }
  function j(r) {
    var c = r - f,
      p = r - s
    return f === void 0 || c >= n || c < 0 || (l && p >= d)
  }
  function b() {
    var r = T()
    if (j(r)) return E(r)
    o = setTimeout(b, W(r))
  }
  function E(r) {
    return (o = void 0), v && i ? h(r) : ((i = a = void 0), u)
  }
  function $() {
    o !== void 0 && clearTimeout(o), (s = 0), (i = f = a = o = void 0)
  }
  function C() {
    return o === void 0 ? u : E(T())
  }
  function x() {
    var r = T(),
      c = j(r)
    if (((i = arguments), (a = this), (f = r), c)) {
      if (o === void 0) return L(f)
      if (l) return (o = setTimeout(b, n)), h(f)
    }
    return o === void 0 && (o = setTimeout(b, n)), u
  }
  return (x.cancel = $), (x.flush = C), x
}
function ee(e, n, t) {
  var i = !0,
    a = !0
  if (typeof e != 'function') throw new TypeError(k)
  return (
    y(t) &&
      ((i = 'leading' in t ? !!t.leading : i),
      (a = 'trailing' in t ? !!t.trailing : a)),
    Z(e, n, {
      leading: i,
      maxWait: n,
      trailing: a,
    })
  )
}
function y(e) {
  var n = typeof e
  return !!e && (n == 'object' || n == 'function')
}
function te(e) {
  return !!e && typeof e == 'object'
}
function ne(e) {
  return typeof e == 'symbol' || (te(e) && Q.call(e) == _)
}
function S(e) {
  if (typeof e == 'number') return e
  if (ne(e)) return O
  if (y(e)) {
    var n = typeof e.valueOf == 'function' ? e.valueOf() : e
    e = y(n) ? n + '' : n
  }
  if (typeof e != 'string') return e === 0 ? e : +e
  e = e.replace(G, '')
  var t = H.test(e)
  return t || U.test(e) ? X(e.slice(2), t ? 2 : 8) : D.test(e) ? O : +e
}
var re = ee
const ie = A.div(
    ({ isVisible: e = !1 }) => B`
    position: absolute;
    transition: all 0.2s;
    opacity: ${e ? 0.9 : 0};
    ${w()}
    padding: 4px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 3px solid var(--border);
      border-right: 3px solid var(--border);
      background: var(--subtle);
      rotate: -135deg;
      left: calc(50% - 5px);
      top: -8px;
      clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
    }
  `
  ),
  le = ({ children: e, isVisible: n = !1, x: t = 0, y: i = 0 }) => {
    const a = M(null),
      [d, u] = P({
        x: t,
        y: i,
      }),
      o = R(
        (f, s) => {
          var m, l
          return u({
            x:
              f -
              ((l = (m = a.current) == null ? void 0 : m.clientWidth) != null
                ? l
                : 0) /
                2,
            y: s + 24,
          })
        },
        [a.current]
      )
    return (
      N(() => {
        o(t, i)
        const f = re(({ clientX: m, clientY: l }) => !t && !i && o(m, l), 100),
          s = () => {
            removeEventListener('mousemove', f)
          }
        return t && i ? s() : addEventListener('mousemove', f), s
      }, [t, i]),
      /* @__PURE__ */ F(ie, {
        ref: a,
        isVisible: n,
        children: e,
        style: {
          left: d.x,
          top: d.y,
        },
      })
    )
  }
export { le as default }
