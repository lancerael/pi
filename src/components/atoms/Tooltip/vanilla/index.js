import { jsx as M } from "react/jsx-runtime";
import { useRef as P, useState as R, useCallback as N, useEffect as w } from "react";
import { box as A } from "@pi-lib/styles";
import B, { css as F } from "styled-components";
var g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, k = "Expected a function", O = 0 / 0, _ = "[object Symbol]", G = /^\s+|\s+$/g, D = /^[-+]0x[0-9a-f]+$/i, H = /^0b[01]+$/i, U = /^0o[0-7]+$/i, X = parseInt, q = typeof g == "object" && g && g.Object === Object && g, z = typeof self == "object" && self && self.Object === Object && self, J = q || z || Function("return this")(), K = Object.prototype, Q = K.toString, V = Math.max, Y = Math.min, T = function() {
  return J.Date.now();
};
function Z(e, n, t) {
  var i, a, c, l, o, f, s = 0, d = !1, m = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(k);
  n = S(n) || 0, y(t) && (d = !!t.leading, m = "maxWait" in t, c = m ? V(S(t.maxWait) || 0, n) : c, v = "trailing" in t ? !!t.trailing : v);
  function h(r) {
    var u = i, p = a;
    return i = a = void 0, s = r, l = e.apply(p, u), l;
  }
  function L(r) {
    return s = r, o = setTimeout(b, n), d ? h(r) : l;
  }
  function W(r) {
    var u = r - f, p = r - s, I = n - u;
    return m ? Y(I, c - p) : I;
  }
  function j(r) {
    var u = r - f, p = r - s;
    return f === void 0 || u >= n || u < 0 || m && p >= c;
  }
  function b() {
    var r = T();
    if (j(r))
      return E(r);
    o = setTimeout(b, W(r));
  }
  function E(r) {
    return o = void 0, v && i ? h(r) : (i = a = void 0, l);
  }
  function $() {
    o !== void 0 && clearTimeout(o), s = 0, i = f = a = o = void 0;
  }
  function C() {
    return o === void 0 ? l : E(T());
  }
  function x() {
    var r = T(), u = j(r);
    if (i = arguments, a = this, f = r, u) {
      if (o === void 0)
        return L(f);
      if (m)
        return o = setTimeout(b, n), h(f);
    }
    return o === void 0 && (o = setTimeout(b, n)), l;
  }
  return x.cancel = $, x.flush = C, x;
}
function ee(e, n, t) {
  var i = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(k);
  return y(t) && (i = "leading" in t ? !!t.leading : i, a = "trailing" in t ? !!t.trailing : a), Z(e, n, {
    leading: i,
    maxWait: n,
    trailing: a
  });
}
function y(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function te(e) {
  return !!e && typeof e == "object";
}
function ne(e) {
  return typeof e == "symbol" || te(e) && Q.call(e) == _;
}
function S(e) {
  if (typeof e == "number")
    return e;
  if (ne(e))
    return O;
  if (y(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = y(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(G, "");
  var t = H.test(e);
  return t || U.test(e) ? X(e.slice(2), t ? 2 : 8) : D.test(e) ? O : +e;
}
var re = ee;
const ie = B.div(
  ({ isVisible: e = !1 }) => F`
    position: absolute;
    transition: all 0.2s;
    opacity: ${e ? 0.9 : 0};
    ${A()}
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
), le = ({
  children: e,
  isVisible: n = !1,
  x: t = 0,
  y: i = 0
}) => {
  const a = P(null), [c, l] = R({ x: t, y: i }), o = N(
    (f, s) => {
      var d;
      return l({
        x: f - (((d = a.current) == null ? void 0 : d.clientWidth) ?? 0) / 2,
        y: s + 24
      });
    },
    [a.current]
  );
  return w(() => {
    o(t, i);
    const f = re(
      ({ clientX: d, clientY: m }) => !t && !i && o(d, m),
      100
    ), s = () => {
      removeEventListener("mousemove", f);
    };
    return t && i ? s() : addEventListener("mousemove", f), s;
  }, [t, i]), /* @__PURE__ */ M(
    ie,
    {
      ref: a,
      isVisible: n,
      children: e,
      style: { left: c.x, top: c.y }
    }
  );
};
export {
  le as default
};
