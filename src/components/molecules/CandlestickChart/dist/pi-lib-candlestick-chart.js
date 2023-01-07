import qe, { useState as Ye, useEffect as Fe, useRef as It, useCallback as De } from "react";
import he, { keyframes as Jn, css as xr, createGlobalStyle as Xr } from "styled-components";
const Kn = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Zn = Jn`
  to {
    rotate: 360deg;
  }
`, zi = Jn`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, Wi = he.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Ui = he.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Zn} 2s linear infinite;
  margin: 2px;
`, sn = he.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Vt = he.div(
  ({ delay: e }) => xr`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: ${Kn.pending};
    animation: ${zi} 0.3s linear alternate infinite;

    ${e ? "animation-delay: 0.3s;" : ""}
  `
);
he.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${Kn.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${Zn} 2s linear infinite;
`;
var Gr = { exports: {} }, Tt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Yi() {
  if (un)
    return Tt;
  un = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var d, h = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (d in c)
      i.call(c, d) && !s.hasOwnProperty(d) && (h[d] = c[d]);
    if (f && f.defaultProps)
      for (d in c = f.defaultProps, c)
        h[d] === void 0 && (h[d] = c[d]);
    return { $$typeof: r, type: f, key: g, ref: v, props: h, _owner: o.current };
  }
  return Tt.Fragment = n, Tt.jsx = u, Tt.jsxs = u, Tt;
}
var Ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Vi() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), $ = Symbol.iterator, N = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = $ && t[$] || t[N];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        C("error", t, l);
      }
    }
    function C(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var z = !1, A = !1, O = !1, F = !1, W = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === d || F || t === v || z || A || O || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function D(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function U(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return U(a) + ".Consumer";
          case u:
            var l = t;
            return U(l._context) + ".Provider";
          case c:
            return D(t, t.render, "ForwardRef");
          case h:
            var y = t.displayName || null;
            return y !== null ? y : P(t.type) || "Memo";
          case g: {
            var _ = t, x = _._payload, b = _._init;
            try {
              return P(b(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, B = 0, te, re, ne, G, ge, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (B === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ge = console.group, me = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function Ge() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ge
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function J(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, K;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Je();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = K.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ie.current, ie.current = null, Xe();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), T = y.stack.split(`
`), S = m.length - 1, E = T.length - 1; S >= 1 && E >= 0 && m[S] !== T[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== T[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== T[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? J(H) : "";
      return typeof t == "function" && K.set(t, je), je;
    }
    function Ke(t, a, l) {
      return _e(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Ze(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ke(t.render);
          case h:
            return Z(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, x = y._init;
            try {
              return Z(x(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, we = {}, xe = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        xe.setExtraStackFrame(l);
      } else
        xe.setExtraStackFrame(null);
    }
    function Qe(t, a, l, y, _) {
      {
        var x = Function.call.bind(Q);
        for (var b in t)
          if (x(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var T = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(_), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), ee(null)), m instanceof Error && !(m.message in we) && (we[m.message] = !0, ee(_), w("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function rt(t) {
      try {
        return ke(t), !1;
      } catch {
        return !0;
      }
    }
    function ke(t) {
      return "" + t;
    }
    function Se(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ue;
    ue = {};
    function it(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function ot(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function at(t, a) {
      if (typeof t.ref == "string" && X.current && a && X.current.stateNode !== a) {
        var l = P(X.current.type);
        ue[l] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ue[l] = !0);
      }
    }
    function st(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function ut(t, a) {
      {
        var l = function() {
          Re || (Re = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ct = function(t, a, l, y, _, x, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: x
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function lt(t, a, l, y, _) {
      {
        var x, b = {}, m = null, T = null;
        l !== void 0 && (Se(l), m = "" + l), ot(a) && (Se(a.key), m = "" + a.key), it(a) && (T = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (x in S)
            b[x] === void 0 && (b[x] = S[x]);
        }
        if (m || T) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), T && ut(b, E);
        }
        return ct(t, m, T, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, $e = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        $e.setExtraStackFrame(l);
      } else
        $e.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = P(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ft(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function pt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ce(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ce(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ce(b.value, a);
        }
      }
    }
    function dt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === h))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = P(a);
          Qe(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = P(a);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            V(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, l, y, _, x) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ft(_);
          T ? m += T : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = lt(t, a, l, _, x);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ne(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(j, t);
        }
        return t === i ? ht(E) : dt(E), E;
      }
    }
    function yt(t, a, l) {
      return Pe(t, a, l, !0);
    }
    function gt(t, a, l) {
      return Pe(t, a, l, !1);
    }
    var mt = gt, vt = yt;
    Ht.Fragment = i, Ht.jsx = mt, Ht.jsxs = vt;
  }()), Ht;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Yi() : e.exports = Vi();
})(Gr);
const Ct = Gr.exports.jsx, $r = Gr.exports.jsxs, Hi = () => /* @__PURE__ */ Ct(Wi, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ $r(Ui, {
    children: [/* @__PURE__ */ $r(sn, {
      children: [/* @__PURE__ */ Ct(Vt, {
        delay: !0
      }), /* @__PURE__ */ Ct(Vt, {})]
    }), /* @__PURE__ */ $r(sn, {
      children: [/* @__PURE__ */ Ct(Vt, {}), /* @__PURE__ */ Ct(Vt, {
        delay: !0
      })]
    })]
  })
});
function Bi(e) {
  return e;
}
var Or = 1, ar = 2, Mr = 3, Bt = 4, ln = 1e-6;
function qi(e) {
  return "translate(" + e + ",0)";
}
function Xi(e) {
  return "translate(0," + e + ")";
}
function Gi(e) {
  return (r) => +e(r);
}
function Ji(e, r) {
  return r = Math.max(0, e.bandwidth() - r * 2) / 2, e.round() && (r = Math.round(r)), (n) => +e(n) + r;
}
function Ki() {
  return !this.__axis;
}
function Qn(e, r) {
  var n = [], i = null, o = null, s = 6, u = 6, f = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = e === Or || e === Bt ? -1 : 1, d = e === Bt || e === ar ? "x" : "y", h = e === Or || e === Mr ? qi : Xi;
  function g(v) {
    var $ = i == null ? r.ticks ? r.ticks.apply(r, n) : r.domain() : i, N = o == null ? r.tickFormat ? r.tickFormat.apply(r, n) : Bi : o, R = Math.max(s, 0) + f, k = r.range(), w = +k[0] + c, C = +k[k.length - 1] + c, z = (r.bandwidth ? Ji : Gi)(r.copy(), c), A = v.selection ? v.selection() : v, O = A.selectAll(".domain").data([null]), F = A.selectAll(".tick").data($, r).order(), W = F.exit(), M = F.enter().append("g").attr("class", "tick"), q = F.select("line"), D = F.select("text");
    O = O.merge(O.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), F = F.merge(M), q = q.merge(M.append("line").attr("stroke", "currentColor").attr(d + "2", p * s)), D = D.merge(M.append("text").attr("fill", "currentColor").attr(d, p * R).attr("dy", e === Or ? "0em" : e === Mr ? "0.71em" : "0.32em")), v !== A && (O = O.transition(v), F = F.transition(v), q = q.transition(v), D = D.transition(v), W = W.transition(v).attr("opacity", ln).attr("transform", function(U) {
      return isFinite(U = z(U)) ? h(U + c) : this.getAttribute("transform");
    }), M.attr("opacity", ln).attr("transform", function(U) {
      var P = this.parentNode.__axis;
      return h((P && isFinite(P = P(U)) ? P : z(U)) + c);
    })), W.remove(), O.attr("d", e === Bt || e === ar ? u ? "M" + p * u + "," + w + "H" + c + "V" + C + "H" + p * u : "M" + c + "," + w + "V" + C : u ? "M" + w + "," + p * u + "V" + c + "H" + C + "V" + p * u : "M" + w + "," + c + "H" + C), F.attr("opacity", 1).attr("transform", function(U) {
      return h(z(U) + c);
    }), q.attr(d + "2", p * s), D.attr(d, p * R).text(N), A.filter(Ki).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === ar ? "start" : e === Bt ? "end" : "middle"), A.each(function() {
      this.__axis = z;
    });
  }
  return g.scale = function(v) {
    return arguments.length ? (r = v, g) : r;
  }, g.ticks = function() {
    return n = Array.from(arguments), g;
  }, g.tickArguments = function(v) {
    return arguments.length ? (n = v == null ? [] : Array.from(v), g) : n.slice();
  }, g.tickValues = function(v) {
    return arguments.length ? (i = v == null ? null : Array.from(v), g) : i && i.slice();
  }, g.tickFormat = function(v) {
    return arguments.length ? (o = v, g) : o;
  }, g.tickSize = function(v) {
    return arguments.length ? (s = u = +v, g) : s;
  }, g.tickSizeInner = function(v) {
    return arguments.length ? (s = +v, g) : s;
  }, g.tickSizeOuter = function(v) {
    return arguments.length ? (u = +v, g) : u;
  }, g.tickPadding = function(v) {
    return arguments.length ? (f = +v, g) : f;
  }, g.offset = function(v) {
    return arguments.length ? (c = +v, g) : c;
  }, g;
}
function Zi(e) {
  return Qn(ar, e);
}
function Qi(e) {
  return Qn(Mr, e);
}
var Dr = "http://www.w3.org/1999/xhtml";
const fn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Dr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function kr(e) {
  var r = e += "", n = r.indexOf(":");
  return n >= 0 && (r = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), fn.hasOwnProperty(r) ? { space: fn[r], local: e } : e;
}
function eo(e) {
  return function() {
    var r = this.ownerDocument, n = this.namespaceURI;
    return n === Dr && r.documentElement.namespaceURI === Dr ? r.createElement(e) : r.createElementNS(n, e);
  };
}
function to(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ei(e) {
  var r = kr(e);
  return (r.local ? to : eo)(r);
}
function ro() {
}
function Jr(e) {
  return e == null ? ro : function() {
    return this.querySelector(e);
  };
}
function no(e) {
  typeof e != "function" && (e = Jr(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = new Array(u), c, p, d = 0; d < u; ++d)
      (c = s[d]) && (p = e.call(c, c.__data__, d, s)) && ("__data__" in c && (p.__data__ = c.__data__), f[d] = p);
  return new ye(i, this._parents);
}
function io(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function oo() {
  return [];
}
function ti(e) {
  return e == null ? oo : function() {
    return this.querySelectorAll(e);
  };
}
function ao(e) {
  return function() {
    return io(e.apply(this, arguments));
  };
}
function so(e) {
  typeof e == "function" ? e = ao(e) : e = ti(e);
  for (var r = this._groups, n = r.length, i = [], o = [], s = 0; s < n; ++s)
    for (var u = r[s], f = u.length, c, p = 0; p < f; ++p)
      (c = u[p]) && (i.push(e.call(c, c.__data__, p, u)), o.push(c));
  return new ye(i, o);
}
function ri(e) {
  return function() {
    return this.matches(e);
  };
}
function ni(e) {
  return function(r) {
    return r.matches(e);
  };
}
var uo = Array.prototype.find;
function co(e) {
  return function() {
    return uo.call(this.children, e);
  };
}
function lo() {
  return this.firstElementChild;
}
function fo(e) {
  return this.select(e == null ? lo : co(typeof e == "function" ? e : ni(e)));
}
var po = Array.prototype.filter;
function ho() {
  return Array.from(this.children);
}
function yo(e) {
  return function() {
    return po.call(this.children, e);
  };
}
function go(e) {
  return this.selectAll(e == null ? ho : yo(typeof e == "function" ? e : ni(e)));
}
function mo(e) {
  typeof e != "function" && (e = ri(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = [], c, p = 0; p < u; ++p)
      (c = s[p]) && e.call(c, c.__data__, p, s) && f.push(c);
  return new ye(i, this._parents);
}
function ii(e) {
  return new Array(e.length);
}
function vo() {
  return new ye(this._enter || this._groups.map(ii), this._parents);
}
function fr(e, r) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = r;
}
fr.prototype = {
  constructor: fr,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, r) {
    return this._parent.insertBefore(e, r);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function bo(e) {
  return function() {
    return e;
  };
}
function _o(e, r, n, i, o, s) {
  for (var u = 0, f, c = r.length, p = s.length; u < p; ++u)
    (f = r[u]) ? (f.__data__ = s[u], i[u] = f) : n[u] = new fr(e, s[u]);
  for (; u < c; ++u)
    (f = r[u]) && (o[u] = f);
}
function wo(e, r, n, i, o, s, u) {
  var f, c, p = /* @__PURE__ */ new Map(), d = r.length, h = s.length, g = new Array(d), v;
  for (f = 0; f < d; ++f)
    (c = r[f]) && (g[f] = v = u.call(c, c.__data__, f, r) + "", p.has(v) ? o[f] = c : p.set(v, c));
  for (f = 0; f < h; ++f)
    v = u.call(e, s[f], f, s) + "", (c = p.get(v)) ? (i[f] = c, c.__data__ = s[f], p.delete(v)) : n[f] = new fr(e, s[f]);
  for (f = 0; f < d; ++f)
    (c = r[f]) && p.get(g[f]) === c && (o[f] = c);
}
function xo(e) {
  return e.__data__;
}
function ko(e, r) {
  if (!arguments.length)
    return Array.from(this, xo);
  var n = r ? wo : _o, i = this._parents, o = this._groups;
  typeof e != "function" && (e = bo(e));
  for (var s = o.length, u = new Array(s), f = new Array(s), c = new Array(s), p = 0; p < s; ++p) {
    var d = i[p], h = o[p], g = h.length, v = So(e.call(d, d && d.__data__, p, i)), $ = v.length, N = f[p] = new Array($), R = u[p] = new Array($), k = c[p] = new Array(g);
    n(d, h, N, R, k, v, r);
    for (var w = 0, C = 0, z, A; w < $; ++w)
      if (z = N[w]) {
        for (w >= C && (C = w + 1); !(A = R[C]) && ++C < $; )
          ;
        z._next = A || null;
      }
  }
  return u = new ye(u, i), u._enter = f, u._exit = c, u;
}
function So(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Eo() {
  return new ye(this._exit || this._groups.map(ii), this._parents);
}
function Ro(e, r, n) {
  var i = this.enter(), o = this, s = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), r != null && (o = r(o), o && (o = o.selection())), n == null ? s.remove() : n(s), i && o ? i.merge(o).order() : o;
}
function $o(e) {
  for (var r = e.selection ? e.selection() : e, n = this._groups, i = r._groups, o = n.length, s = i.length, u = Math.min(o, s), f = new Array(o), c = 0; c < u; ++c)
    for (var p = n[c], d = i[c], h = p.length, g = f[c] = new Array(h), v, $ = 0; $ < h; ++$)
      (v = p[$] || d[$]) && (g[$] = v);
  for (; c < o; ++c)
    f[c] = n[c];
  return new ye(f, this._parents);
}
function Oo() {
  for (var e = this._groups, r = -1, n = e.length; ++r < n; )
    for (var i = e[r], o = i.length - 1, s = i[o], u; --o >= 0; )
      (u = i[o]) && (s && u.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(u, s), s = u);
  return this;
}
function To(e) {
  e || (e = Co);
  function r(h, g) {
    return h && g ? e(h.__data__, g.__data__) : !h - !g;
  }
  for (var n = this._groups, i = n.length, o = new Array(i), s = 0; s < i; ++s) {
    for (var u = n[s], f = u.length, c = o[s] = new Array(f), p, d = 0; d < f; ++d)
      (p = u[d]) && (c[d] = p);
    c.sort(r);
  }
  return new ye(o, this._parents).order();
}
function Co(e, r) {
  return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function No() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Po() {
  return Array.from(this);
}
function jo() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length; o < s; ++o) {
      var u = i[o];
      if (u)
        return u;
    }
  return null;
}
function Ao() {
  let e = 0;
  for (const r of this)
    ++e;
  return e;
}
function Mo() {
  return !this.node();
}
function Do(e) {
  for (var r = this._groups, n = 0, i = r.length; n < i; ++n)
    for (var o = r[n], s = 0, u = o.length, f; s < u; ++s)
      (f = o[s]) && e.call(f, f.__data__, s, o);
  return this;
}
function Fo(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Io(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Lo(e, r) {
  return function() {
    this.setAttribute(e, r);
  };
}
function zo(e, r) {
  return function() {
    this.setAttributeNS(e.space, e.local, r);
  };
}
function Wo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Uo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Yo(e, r) {
  var n = kr(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((r == null ? n.local ? Io : Fo : typeof r == "function" ? n.local ? Uo : Wo : n.local ? zo : Lo)(n, r));
}
function oi(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Vo(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ho(e, r, n) {
  return function() {
    this.style.setProperty(e, r, n);
  };
}
function Bo(e, r, n) {
  return function() {
    var i = r.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function qo(e, r, n) {
  return arguments.length > 1 ? this.each((r == null ? Vo : typeof r == "function" ? Bo : Ho)(e, r, n == null ? "" : n)) : Rt(this.node(), e);
}
function Rt(e, r) {
  return e.style.getPropertyValue(r) || oi(e).getComputedStyle(e, null).getPropertyValue(r);
}
function Xo(e) {
  return function() {
    delete this[e];
  };
}
function Go(e, r) {
  return function() {
    this[e] = r;
  };
}
function Jo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Ko(e, r) {
  return arguments.length > 1 ? this.each((r == null ? Xo : typeof r == "function" ? Jo : Go)(e, r)) : this.node()[e];
}
function ai(e) {
  return e.trim().split(/^|\s+/);
}
function Kr(e) {
  return e.classList || new si(e);
}
function si(e) {
  this._node = e, this._names = ai(e.getAttribute("class") || "");
}
si.prototype = {
  add: function(e) {
    var r = this._names.indexOf(e);
    r < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var r = this._names.indexOf(e);
    r >= 0 && (this._names.splice(r, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function ui(e, r) {
  for (var n = Kr(e), i = -1, o = r.length; ++i < o; )
    n.add(r[i]);
}
function ci(e, r) {
  for (var n = Kr(e), i = -1, o = r.length; ++i < o; )
    n.remove(r[i]);
}
function Zo(e) {
  return function() {
    ui(this, e);
  };
}
function Qo(e) {
  return function() {
    ci(this, e);
  };
}
function ea(e, r) {
  return function() {
    (r.apply(this, arguments) ? ui : ci)(this, e);
  };
}
function ta(e, r) {
  var n = ai(e + "");
  if (arguments.length < 2) {
    for (var i = Kr(this.node()), o = -1, s = n.length; ++o < s; )
      if (!i.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof r == "function" ? ea : r ? Zo : Qo)(n, r));
}
function ra() {
  this.textContent = "";
}
function na(e) {
  return function() {
    this.textContent = e;
  };
}
function ia(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.textContent = r == null ? "" : r;
  };
}
function oa(e) {
  return arguments.length ? this.each(e == null ? ra : (typeof e == "function" ? ia : na)(e)) : this.node().textContent;
}
function aa() {
  this.innerHTML = "";
}
function sa(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ua(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.innerHTML = r == null ? "" : r;
  };
}
function ca(e) {
  return arguments.length ? this.each(e == null ? aa : (typeof e == "function" ? ua : sa)(e)) : this.node().innerHTML;
}
function la() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function fa() {
  return this.each(la);
}
function pa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function da() {
  return this.each(pa);
}
function ha(e) {
  var r = typeof e == "function" ? e : ei(e);
  return this.select(function() {
    return this.appendChild(r.apply(this, arguments));
  });
}
function ya() {
  return null;
}
function ga(e, r) {
  var n = typeof e == "function" ? e : ei(e), i = r == null ? ya : typeof r == "function" ? r : Jr(r);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function ma() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function va() {
  return this.each(ma);
}
function ba() {
  var e = this.cloneNode(!1), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function _a() {
  var e = this.cloneNode(!0), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function wa(e) {
  return this.select(e ? _a : ba);
}
function xa(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ka(e) {
  return function(r) {
    e.call(this, r, this.__data__);
  };
}
function Sa(e) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var n = "", i = r.indexOf(".");
    return i >= 0 && (n = r.slice(i + 1), r = r.slice(0, i)), { type: r, name: n };
  });
}
function Ea(e) {
  return function() {
    var r = this.__on;
    if (!!r) {
      for (var n = 0, i = -1, o = r.length, s; n < o; ++n)
        s = r[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : r[++i] = s;
      ++i ? r.length = i : delete this.__on;
    }
  };
}
function Ra(e, r, n) {
  return function() {
    var i = this.__on, o, s = ka(r);
    if (i) {
      for (var u = 0, f = i.length; u < f; ++u)
        if ((o = i[u]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = s, o.options = n), o.value = r;
          return;
        }
    }
    this.addEventListener(e.type, s, n), o = { type: e.type, name: e.name, value: r, listener: s, options: n }, i ? i.push(o) : this.__on = [o];
  };
}
function $a(e, r, n) {
  var i = Sa(e + ""), o, s = i.length, u;
  if (arguments.length < 2) {
    var f = this.node().__on;
    if (f) {
      for (var c = 0, p = f.length, d; c < p; ++c)
        for (o = 0, d = f[c]; o < s; ++o)
          if ((u = i[o]).type === d.type && u.name === d.name)
            return d.value;
    }
    return;
  }
  for (f = r ? Ra : Ea, o = 0; o < s; ++o)
    this.each(f(i[o], r, n));
  return this;
}
function li(e, r, n) {
  var i = oi(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(r, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(r, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(r, !1, !1)), e.dispatchEvent(o);
}
function Oa(e, r) {
  return function() {
    return li(this, e, r);
  };
}
function Ta(e, r) {
  return function() {
    return li(this, e, r.apply(this, arguments));
  };
}
function Ca(e, r) {
  return this.each((typeof r == "function" ? Ta : Oa)(e, r));
}
function* Na() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length, u; o < s; ++o)
      (u = i[o]) && (yield u);
}
var fi = [null];
function ye(e, r) {
  this._groups = e, this._parents = r;
}
function Ut() {
  return new ye([[document.documentElement]], fi);
}
function Pa() {
  return this;
}
ye.prototype = Ut.prototype = {
  constructor: ye,
  select: no,
  selectAll: so,
  selectChild: fo,
  selectChildren: go,
  filter: mo,
  data: ko,
  enter: vo,
  exit: Eo,
  join: Ro,
  merge: $o,
  selection: Pa,
  order: Oo,
  sort: To,
  call: No,
  nodes: Po,
  node: jo,
  size: Ao,
  empty: Mo,
  each: Do,
  attr: Yo,
  style: qo,
  property: Ko,
  classed: ta,
  text: oa,
  html: ca,
  raise: fa,
  lower: da,
  append: ha,
  insert: ga,
  remove: va,
  clone: wa,
  datum: xa,
  on: $a,
  dispatch: Ca,
  [Symbol.iterator]: Na
};
function bt(e) {
  return typeof e == "string" ? new ye([[document.querySelector(e)]], [document.documentElement]) : new ye([[e]], fi);
}
const ja = 500, de = 10, Be = [55, 50], pi = 0.3, Aa = 10, Ma = {
  zoomLevel: 1,
  panLevel: 1,
  transition: !0
}, Tr = {}, qt = (e = "", r, n) => {
  var h;
  const i = Math.round((h = n.bandwidth) == null ? void 0 : h.call(n)) || 0, o = `${e}-${r}-${i}`;
  if (Tr[o] !== void 0)
    return Tr[o];
  let s = "";
  const u = new Date(e), [f, c, p] = e.split("-");
  p === "01" && (c === "01" ? s = f : s = u.toLocaleString("en-UK", {
    month: "short"
  }));
  let d = [];
  return i > 1 && d.push(16), i > 3 && d.push(8, 24), i > 7 && (d = [4, 7, 10, 13, 16, 19, 22, 25, 28]), d.includes(Number(p)) && (s = p), n.domain().length - 1 === r && (s = p), Tr[o] = s, s;
}, Da = (e, r, n, i) => {
  const [o, s] = Ye(), [u, f] = Ye(), { xScale: c, yScale: p } = n, {
    sizes: { width: d, height: h },
    visibleRange: { offset: g, first: v, last: $ }
  } = i;
  Fe(() => {
    !e.current || (bt(e.current).select("g.x-axis, y.y-axis").remove(), s(
      bt(e.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), f(bt(e.current).append("g").classed("y-axis", !0)));
  }, []), Fe(() => {
    !c.domain || !r || (o.call(Qi(c)).attr("transform", `translate(${g},${h - Be[0]})`).selectAll("text").classed(
      "emphasise",
      (N, R) => qt(N, R, c).length > 2
    ).attr("text-anchor", "end").attr("x", () => -16).attr("y", -4).attr("transform", "rotate(270)").text((N, R) => qt(N, R, c)), o.selectAll("line.clone").remove(), o.selectAll("line").attr(
      "y2",
      (N, R) => qt(N, R, c).length ? 12 : 6
    ).each((N, R, k) => {
      if (R > v && R < $ && qt(N, R, c).length) {
        var w = k[R].parentNode.appendChild(k[R].cloneNode(!0));
        bt(w).classed("clone", !0).attr("y1", -h + Be[0] + de).attr("y2", -1);
      }
    }), u.call(Zi(p)).attr(
      "transform",
      `translate(${d - Be[1] + de}, 0)`
    ), u.selectAll("line.clone").remove(), u.selectAll("line").each((N, R, k) => {
      var w = k[R].parentNode.appendChild(k[R].cloneNode(!0));
      bt(w).classed("clone", !0).attr("x2", -d + Be[1]).attr("x1", -1);
    }));
  }, [c, p]);
};
var Fa = { value: () => {
} };
function di() {
  for (var e = 0, r = arguments.length, n = {}, i; e < r; ++e) {
    if (!(i = arguments[e] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new sr(n);
}
function sr(e) {
  this._ = e;
}
function Ia(e, r) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", o = n.indexOf(".");
    if (o >= 0 && (i = n.slice(o + 1), n = n.slice(0, o)), n && !r.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
sr.prototype = di.prototype = {
  constructor: sr,
  on: function(e, r) {
    var n = this._, i = Ia(e + "", n), o, s = -1, u = i.length;
    if (arguments.length < 2) {
      for (; ++s < u; )
        if ((o = (e = i[s]).type) && (o = La(n[o], e.name)))
          return o;
      return;
    }
    if (r != null && typeof r != "function")
      throw new Error("invalid callback: " + r);
    for (; ++s < u; )
      if (o = (e = i[s]).type)
        n[o] = pn(n[o], e.name, r);
      else if (r == null)
        for (o in n)
          n[o] = pn(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, r = this._;
    for (var n in r)
      e[n] = r[n].slice();
    return new sr(e);
  },
  call: function(e, r) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), i = 0, o, s; i < o; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (s = this._[e], i = 0, o = s.length; i < o; ++i)
      s[i].value.apply(r, n);
  },
  apply: function(e, r, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var i = this._[e], o = 0, s = i.length; o < s; ++o)
      i[o].value.apply(r, n);
  }
};
function La(e, r) {
  for (var n = 0, i = e.length, o; n < i; ++n)
    if ((o = e[n]).name === r)
      return o.value;
}
function pn(e, r, n) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === r) {
      e[i] = Fa, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: r, value: n }), e;
}
var $t = 0, Dt = 0, Nt = 0, hi = 1e3, pr, Ft, dr = 0, xt = 0, Sr = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, yi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Zr() {
  return xt || (yi(za), xt = Lt.now() + Sr);
}
function za() {
  xt = 0;
}
function hr() {
  this._call = this._time = this._next = null;
}
hr.prototype = gi.prototype = {
  constructor: hr,
  restart: function(e, r, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Zr() : +n) + (r == null ? 0 : +r), !this._next && Ft !== this && (Ft ? Ft._next = this : pr = this, Ft = this), this._call = e, this._time = n, Fr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Fr());
  }
};
function gi(e, r, n) {
  var i = new hr();
  return i.restart(e, r, n), i;
}
function Wa() {
  Zr(), ++$t;
  for (var e = pr, r; e; )
    (r = xt - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
  --$t;
}
function dn() {
  xt = (dr = Lt.now()) + Sr, $t = Dt = 0;
  try {
    Wa();
  } finally {
    $t = 0, Ya(), xt = 0;
  }
}
function Ua() {
  var e = Lt.now(), r = e - dr;
  r > hi && (Sr -= r, dr = e);
}
function Ya() {
  for (var e, r = pr, n, i = 1 / 0; r; )
    r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (n = r._next, r._next = null, r = e ? e._next = n : pr = n);
  Ft = e, Fr(i);
}
function Fr(e) {
  if (!$t) {
    Dt && (Dt = clearTimeout(Dt));
    var r = e - xt;
    r > 24 ? (e < 1 / 0 && (Dt = setTimeout(dn, e - Lt.now() - Sr)), Nt && (Nt = clearInterval(Nt))) : (Nt || (dr = Lt.now(), Nt = setInterval(Ua, hi)), $t = 1, yi(dn));
  }
}
function hn(e, r, n) {
  var i = new hr();
  return r = r == null ? 0 : +r, i.restart((o) => {
    i.stop(), e(o + r);
  }, r, n), i;
}
var Va = di("start", "end", "cancel", "interrupt"), Ha = [], mi = 0, yn = 1, Ir = 2, ur = 3, gn = 4, Lr = 5, cr = 6;
function Er(e, r, n, i, o, s) {
  var u = e.__transition;
  if (!u)
    e.__transition = {};
  else if (n in u)
    return;
  Ba(e, n, {
    name: r,
    index: i,
    group: o,
    on: Va,
    tween: Ha,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: mi
  });
}
function Qr(e, r) {
  var n = Ie(e, r);
  if (n.state > mi)
    throw new Error("too late; already scheduled");
  return n;
}
function ze(e, r) {
  var n = Ie(e, r);
  if (n.state > ur)
    throw new Error("too late; already running");
  return n;
}
function Ie(e, r) {
  var n = e.__transition;
  if (!n || !(n = n[r]))
    throw new Error("transition not found");
  return n;
}
function Ba(e, r, n) {
  var i = e.__transition, o;
  i[r] = n, n.timer = gi(s, 0, n.time);
  function s(p) {
    n.state = yn, n.timer.restart(u, n.delay, n.time), n.delay <= p && u(p - n.delay);
  }
  function u(p) {
    var d, h, g, v;
    if (n.state !== yn)
      return c();
    for (d in i)
      if (v = i[d], v.name === n.name) {
        if (v.state === ur)
          return hn(u);
        v.state === gn ? (v.state = cr, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete i[d]) : +d < r && (v.state = cr, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete i[d]);
      }
    if (hn(function() {
      n.state === ur && (n.state = gn, n.timer.restart(f, n.delay, n.time), f(p));
    }), n.state = Ir, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ir) {
      for (n.state = ur, o = new Array(g = n.tween.length), d = 0, h = -1; d < g; ++d)
        (v = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function f(p) {
    for (var d = p < n.duration ? n.ease.call(null, p / n.duration) : (n.timer.restart(c), n.state = Lr, 1), h = -1, g = o.length; ++h < g; )
      o[h].call(e, d);
    n.state === Lr && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = cr, n.timer.stop(), delete i[r];
    for (var p in i)
      return;
    delete e.__transition;
  }
}
function qa(e, r) {
  var n = e.__transition, i, o, s = !0, u;
  if (!!n) {
    r = r == null ? null : r + "";
    for (u in n) {
      if ((i = n[u]).name !== r) {
        s = !1;
        continue;
      }
      o = i.state > Ir && i.state < Lr, i.state = cr, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[u];
    }
    s && delete e.__transition;
  }
}
function Xa(e) {
  return this.each(function() {
    qa(this, e);
  });
}
function en(e, r, n) {
  e.prototype = r.prototype = n, n.constructor = e;
}
function vi(e, r) {
  var n = Object.create(e.prototype);
  for (var i in r)
    n[i] = r[i];
  return n;
}
function Yt() {
}
var zt = 0.7, yr = 1 / zt, Et = "\\s*([+-]?\\d+)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ga = /^#([0-9a-f]{3,8})$/, Ja = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`), Ka = new RegExp(`^rgb\\(${Le},${Le},${Le}\\)$`), Za = new RegExp(`^rgba\\(${Et},${Et},${Et},${Wt}\\)$`), Qa = new RegExp(`^rgba\\(${Le},${Le},${Le},${Wt}\\)$`), es = new RegExp(`^hsl\\(${Wt},${Le},${Le}\\)$`), ts = new RegExp(`^hsla\\(${Wt},${Le},${Le},${Wt}\\)$`), mn = {
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
en(Yt, kt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vn,
  formatHex: vn,
  formatHex8: rs,
  formatHsl: ns,
  formatRgb: bn,
  toString: bn
});
function vn() {
  return this.rgb().formatHex();
}
function rs() {
  return this.rgb().formatHex8();
}
function ns() {
  return bi(this).formatHsl();
}
function bn() {
  return this.rgb().formatRgb();
}
function kt(e) {
  var r, n;
  return e = (e + "").trim().toLowerCase(), (r = Ga.exec(e)) ? (n = r[1].length, r = parseInt(r[1], 16), n === 6 ? _n(r) : n === 3 ? new pe(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : n === 8 ? Xt(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : n === 4 ? Xt(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Ja.exec(e)) ? new pe(r[1], r[2], r[3], 1) : (r = Ka.exec(e)) ? new pe(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Za.exec(e)) ? Xt(r[1], r[2], r[3], r[4]) : (r = Qa.exec(e)) ? Xt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = es.exec(e)) ? kn(r[1], r[2] / 100, r[3] / 100, 1) : (r = ts.exec(e)) ? kn(r[1], r[2] / 100, r[3] / 100, r[4]) : mn.hasOwnProperty(e) ? _n(mn[e]) : e === "transparent" ? new pe(NaN, NaN, NaN, 0) : null;
}
function _n(e) {
  return new pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xt(e, r, n, i) {
  return i <= 0 && (e = r = n = NaN), new pe(e, r, n, i);
}
function is(e) {
  return e instanceof Yt || (e = kt(e)), e ? (e = e.rgb(), new pe(e.r, e.g, e.b, e.opacity)) : new pe();
}
function zr(e, r, n, i) {
  return arguments.length === 1 ? is(e) : new pe(e, r, n, i == null ? 1 : i);
}
function pe(e, r, n, i) {
  this.r = +e, this.g = +r, this.b = +n, this.opacity = +i;
}
en(pe, zr, vi(Yt, {
  brighter(e) {
    return e = e == null ? yr : Math.pow(yr, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zt : Math.pow(zt, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pe(wt(this.r), wt(this.g), wt(this.b), gr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: wn,
  formatHex: wn,
  formatHex8: os,
  formatRgb: xn,
  toString: xn
}));
function wn() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}`;
}
function os() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}${_t((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xn() {
  const e = gr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${wt(this.r)}, ${wt(this.g)}, ${wt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function gr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function wt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _t(e) {
  return e = wt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function kn(e, r, n, i) {
  return i <= 0 ? e = r = n = NaN : n <= 0 || n >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new Me(e, r, n, i);
}
function bi(e) {
  if (e instanceof Me)
    return new Me(e.h, e.s, e.l, e.opacity);
  if (e instanceof Yt || (e = kt(e)), !e)
    return new Me();
  if (e instanceof Me)
    return e;
  e = e.rgb();
  var r = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.min(r, n, i), s = Math.max(r, n, i), u = NaN, f = s - o, c = (s + o) / 2;
  return f ? (r === s ? u = (n - i) / f + (n < i) * 6 : n === s ? u = (i - r) / f + 2 : u = (r - n) / f + 4, f /= c < 0.5 ? s + o : 2 - s - o, u *= 60) : f = c > 0 && c < 1 ? 0 : u, new Me(u, f, c, e.opacity);
}
function as(e, r, n, i) {
  return arguments.length === 1 ? bi(e) : new Me(e, r, n, i == null ? 1 : i);
}
function Me(e, r, n, i) {
  this.h = +e, this.s = +r, this.l = +n, this.opacity = +i;
}
en(Me, as, vi(Yt, {
  brighter(e) {
    return e = e == null ? yr : Math.pow(yr, e), new Me(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zt : Math.pow(zt, e), new Me(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * r, o = 2 * n - i;
    return new pe(
      Cr(e >= 240 ? e - 240 : e + 120, o, i),
      Cr(e, o, i),
      Cr(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new Me(Sn(this.h), Gt(this.s), Gt(this.l), gr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = gr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Sn(this.h)}, ${Gt(this.s) * 100}%, ${Gt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Sn(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Gt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Cr(e, r, n) {
  return (e < 60 ? r + (n - r) * e / 60 : e < 180 ? n : e < 240 ? r + (n - r) * (240 - e) / 60 : r) * 255;
}
const tn = (e) => () => e;
function ss(e, r) {
  return function(n) {
    return e + n * r;
  };
}
function us(e, r, n) {
  return e = Math.pow(e, n), r = Math.pow(r, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * r, n);
  };
}
function cs(e) {
  return (e = +e) == 1 ? _i : function(r, n) {
    return n - r ? us(r, n, e) : tn(isNaN(r) ? n : r);
  };
}
function _i(e, r) {
  var n = r - e;
  return n ? ss(e, n) : tn(isNaN(e) ? r : e);
}
const mr = function e(r) {
  var n = cs(r);
  function i(o, s) {
    var u = n((o = zr(o)).r, (s = zr(s)).r), f = n(o.g, s.g), c = n(o.b, s.b), p = _i(o.opacity, s.opacity);
    return function(d) {
      return o.r = u(d), o.g = f(d), o.b = c(d), o.opacity = p(d), o + "";
    };
  }
  return i.gamma = e, i;
}(1);
function ls(e, r) {
  r || (r = []);
  var n = e ? Math.min(r.length, e.length) : 0, i = r.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o)
      i[o] = e[o] * (1 - s) + r[o] * s;
    return i;
  };
}
function fs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ps(e, r) {
  var n = r ? r.length : 0, i = e ? Math.min(n, e.length) : 0, o = new Array(i), s = new Array(n), u;
  for (u = 0; u < i; ++u)
    o[u] = rn(e[u], r[u]);
  for (; u < n; ++u)
    s[u] = r[u];
  return function(f) {
    for (u = 0; u < i; ++u)
      s[u] = o[u](f);
    return s;
  };
}
function ds(e, r) {
  var n = new Date();
  return e = +e, r = +r, function(i) {
    return n.setTime(e * (1 - i) + r * i), n;
  };
}
function Ae(e, r) {
  return e = +e, r = +r, function(n) {
    return e * (1 - n) + r * n;
  };
}
function hs(e, r) {
  var n = {}, i = {}, o;
  (e === null || typeof e != "object") && (e = {}), (r === null || typeof r != "object") && (r = {});
  for (o in r)
    o in e ? n[o] = rn(e[o], r[o]) : i[o] = r[o];
  return function(s) {
    for (o in n)
      i[o] = n[o](s);
    return i;
  };
}
var Wr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nr = new RegExp(Wr.source, "g");
function ys(e) {
  return function() {
    return e;
  };
}
function gs(e) {
  return function(r) {
    return e(r) + "";
  };
}
function wi(e, r) {
  var n = Wr.lastIndex = Nr.lastIndex = 0, i, o, s, u = -1, f = [], c = [];
  for (e = e + "", r = r + ""; (i = Wr.exec(e)) && (o = Nr.exec(r)); )
    (s = o.index) > n && (s = r.slice(n, s), f[u] ? f[u] += s : f[++u] = s), (i = i[0]) === (o = o[0]) ? f[u] ? f[u] += o : f[++u] = o : (f[++u] = null, c.push({ i: u, x: Ae(i, o) })), n = Nr.lastIndex;
  return n < r.length && (s = r.slice(n), f[u] ? f[u] += s : f[++u] = s), f.length < 2 ? c[0] ? gs(c[0].x) : ys(r) : (r = c.length, function(p) {
    for (var d = 0, h; d < r; ++d)
      f[(h = c[d]).i] = h.x(p);
    return f.join("");
  });
}
function rn(e, r) {
  var n = typeof r, i;
  return r == null || n === "boolean" ? tn(r) : (n === "number" ? Ae : n === "string" ? (i = kt(r)) ? (r = i, mr) : wi : r instanceof kt ? mr : r instanceof Date ? ds : fs(r) ? ls : Array.isArray(r) ? ps : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? hs : Ae)(e, r);
}
function ms(e, r) {
  return e = +e, r = +r, function(n) {
    return Math.round(e * (1 - n) + r * n);
  };
}
var En = 180 / Math.PI, Ur = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function xi(e, r, n, i, o, s) {
  var u, f, c;
  return (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u), (c = e * n + r * i) && (n -= e * c, i -= r * c), (f = Math.sqrt(n * n + i * i)) && (n /= f, i /= f, c /= f), e * i < r * n && (e = -e, r = -r, c = -c, u = -u), {
    translateX: o,
    translateY: s,
    rotate: Math.atan2(r, e) * En,
    skewX: Math.atan(c) * En,
    scaleX: u,
    scaleY: f
  };
}
var Jt;
function vs(e) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return r.isIdentity ? Ur : xi(r.a, r.b, r.c, r.d, r.e, r.f);
}
function bs(e) {
  return e == null || (Jt || (Jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jt.setAttribute("transform", e), !(e = Jt.transform.baseVal.consolidate())) ? Ur : (e = e.matrix, xi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ki(e, r, n, i) {
  function o(p) {
    return p.length ? p.pop() + " " : "";
  }
  function s(p, d, h, g, v, $) {
    if (p !== h || d !== g) {
      var N = v.push("translate(", null, r, null, n);
      $.push({ i: N - 4, x: Ae(p, h) }, { i: N - 2, x: Ae(d, g) });
    } else
      (h || g) && v.push("translate(" + h + r + g + n);
  }
  function u(p, d, h, g) {
    p !== d ? (p - d > 180 ? d += 360 : d - p > 180 && (p += 360), g.push({ i: h.push(o(h) + "rotate(", null, i) - 2, x: Ae(p, d) })) : d && h.push(o(h) + "rotate(" + d + i);
  }
  function f(p, d, h, g) {
    p !== d ? g.push({ i: h.push(o(h) + "skewX(", null, i) - 2, x: Ae(p, d) }) : d && h.push(o(h) + "skewX(" + d + i);
  }
  function c(p, d, h, g, v, $) {
    if (p !== h || d !== g) {
      var N = v.push(o(v) + "scale(", null, ",", null, ")");
      $.push({ i: N - 4, x: Ae(p, h) }, { i: N - 2, x: Ae(d, g) });
    } else
      (h !== 1 || g !== 1) && v.push(o(v) + "scale(" + h + "," + g + ")");
  }
  return function(p, d) {
    var h = [], g = [];
    return p = e(p), d = e(d), s(p.translateX, p.translateY, d.translateX, d.translateY, h, g), u(p.rotate, d.rotate, h, g), f(p.skewX, d.skewX, h, g), c(p.scaleX, p.scaleY, d.scaleX, d.scaleY, h, g), p = d = null, function(v) {
      for (var $ = -1, N = g.length, R; ++$ < N; )
        h[(R = g[$]).i] = R.x(v);
      return h.join("");
    };
  };
}
var _s = ki(vs, "px, ", "px)", "deg)"), ws = ki(bs, ", ", ")", ")");
function xs(e, r) {
  var n, i;
  return function() {
    var o = ze(this, e), s = o.tween;
    if (s !== n) {
      i = n = s;
      for (var u = 0, f = i.length; u < f; ++u)
        if (i[u].name === r) {
          i = i.slice(), i.splice(u, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function ks(e, r, n) {
  var i, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = ze(this, e), u = s.tween;
    if (u !== i) {
      o = (i = u).slice();
      for (var f = { name: r, value: n }, c = 0, p = o.length; c < p; ++c)
        if (o[c].name === r) {
          o[c] = f;
          break;
        }
      c === p && o.push(f);
    }
    s.tween = o;
  };
}
function Ss(e, r) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Ie(this.node(), n).tween, o = 0, s = i.length, u; o < s; ++o)
      if ((u = i[o]).name === e)
        return u.value;
    return null;
  }
  return this.each((r == null ? xs : ks)(n, e, r));
}
function nn(e, r, n) {
  var i = e._id;
  return e.each(function() {
    var o = ze(this, i);
    (o.value || (o.value = {}))[r] = n.apply(this, arguments);
  }), function(o) {
    return Ie(o, i).value[r];
  };
}
function Si(e, r) {
  var n;
  return (typeof r == "number" ? Ae : r instanceof kt ? mr : (n = kt(r)) ? (r = n, mr) : wi)(e, r);
}
function Es(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Rs(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function $s(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttribute(e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function Os(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttributeNS(e.space, e.local);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function Ts(e, r, n) {
  var i, o, s;
  return function() {
    var u, f = n(this), c;
    return f == null ? void this.removeAttribute(e) : (u = this.getAttribute(e), c = f + "", u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f)));
  };
}
function Cs(e, r, n) {
  var i, o, s;
  return function() {
    var u, f = n(this), c;
    return f == null ? void this.removeAttributeNS(e.space, e.local) : (u = this.getAttributeNS(e.space, e.local), c = f + "", u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f)));
  };
}
function Ns(e, r) {
  var n = kr(e), i = n === "transform" ? ws : Si;
  return this.attrTween(e, typeof r == "function" ? (n.local ? Cs : Ts)(n, i, nn(this, "attr." + e, r)) : r == null ? (n.local ? Rs : Es)(n) : (n.local ? Os : $s)(n, i, r));
}
function Ps(e, r) {
  return function(n) {
    this.setAttribute(e, r.call(this, n));
  };
}
function js(e, r) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, r.call(this, n));
  };
}
function As(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && js(e, s)), n;
  }
  return o._value = r, o;
}
function Ms(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Ps(e, s)), n;
  }
  return o._value = r, o;
}
function Ds(e, r) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (r == null)
    return this.tween(n, null);
  if (typeof r != "function")
    throw new Error();
  var i = kr(e);
  return this.tween(n, (i.local ? As : Ms)(i, r));
}
function Fs(e, r) {
  return function() {
    Qr(this, e).delay = +r.apply(this, arguments);
  };
}
function Is(e, r) {
  return r = +r, function() {
    Qr(this, e).delay = r;
  };
}
function Ls(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Fs : Is)(r, e)) : Ie(this.node(), r).delay;
}
function zs(e, r) {
  return function() {
    ze(this, e).duration = +r.apply(this, arguments);
  };
}
function Ws(e, r) {
  return r = +r, function() {
    ze(this, e).duration = r;
  };
}
function Us(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zs : Ws)(r, e)) : Ie(this.node(), r).duration;
}
function Ys(e, r) {
  if (typeof r != "function")
    throw new Error();
  return function() {
    ze(this, e).ease = r;
  };
}
function Vs(e) {
  var r = this._id;
  return arguments.length ? this.each(Ys(r, e)) : Ie(this.node(), r).ease;
}
function Hs(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    ze(this, e).ease = n;
  };
}
function Bs(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Hs(this._id, e));
}
function qs(e) {
  typeof e != "function" && (e = ri(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = [], c, p = 0; p < u; ++p)
      (c = s[p]) && e.call(c, c.__data__, p, s) && f.push(c);
  return new Ve(i, this._parents, this._name, this._id);
}
function Xs(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var r = this._groups, n = e._groups, i = r.length, o = n.length, s = Math.min(i, o), u = new Array(i), f = 0; f < s; ++f)
    for (var c = r[f], p = n[f], d = c.length, h = u[f] = new Array(d), g, v = 0; v < d; ++v)
      (g = c[v] || p[v]) && (h[v] = g);
  for (; f < i; ++f)
    u[f] = r[f];
  return new Ve(u, this._parents, this._name, this._id);
}
function Gs(e) {
  return (e + "").trim().split(/^|\s+/).every(function(r) {
    var n = r.indexOf(".");
    return n >= 0 && (r = r.slice(0, n)), !r || r === "start";
  });
}
function Js(e, r, n) {
  var i, o, s = Gs(r) ? Qr : ze;
  return function() {
    var u = s(this, e), f = u.on;
    f !== i && (o = (i = f).copy()).on(r, n), u.on = o;
  };
}
function Ks(e, r) {
  var n = this._id;
  return arguments.length < 2 ? Ie(this.node(), n).on.on(e) : this.each(Js(n, e, r));
}
function Zs(e) {
  return function() {
    var r = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    r && r.removeChild(this);
  };
}
function Qs() {
  return this.on("end.remove", Zs(this._id));
}
function eu(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Jr(e));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], c = f.length, p = s[u] = new Array(c), d, h, g = 0; g < c; ++g)
      (d = f[g]) && (h = e.call(d, d.__data__, g, f)) && ("__data__" in d && (h.__data__ = d.__data__), p[g] = h, Er(p[g], r, n, g, p, Ie(d, n)));
  return new Ve(s, this._parents, r, n);
}
function tu(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = ti(e));
  for (var i = this._groups, o = i.length, s = [], u = [], f = 0; f < o; ++f)
    for (var c = i[f], p = c.length, d, h = 0; h < p; ++h)
      if (d = c[h]) {
        for (var g = e.call(d, d.__data__, h, c), v, $ = Ie(d, n), N = 0, R = g.length; N < R; ++N)
          (v = g[N]) && Er(v, r, n, N, g, $);
        s.push(g), u.push(d);
      }
  return new Ve(s, u, r, n);
}
var ru = Ut.prototype.constructor;
function nu() {
  return new ru(this._groups, this._parents);
}
function iu(e, r) {
  var n, i, o;
  return function() {
    var s = Rt(this, e), u = (this.style.removeProperty(e), Rt(this, e));
    return s === u ? null : s === n && u === i ? o : o = r(n = s, i = u);
  };
}
function Ei(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ou(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = Rt(this, e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function au(e, r, n) {
  var i, o, s;
  return function() {
    var u = Rt(this, e), f = n(this), c = f + "";
    return f == null && (c = f = (this.style.removeProperty(e), Rt(this, e))), u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f));
  };
}
function su(e, r) {
  var n, i, o, s = "style." + r, u = "end." + s, f;
  return function() {
    var c = ze(this, e), p = c.on, d = c.value[s] == null ? f || (f = Ei(r)) : void 0;
    (p !== n || o !== d) && (i = (n = p).copy()).on(u, o = d), c.on = i;
  };
}
function uu(e, r, n) {
  var i = (e += "") == "transform" ? _s : Si;
  return r == null ? this.styleTween(e, iu(e, i)).on("end.style." + e, Ei(e)) : typeof r == "function" ? this.styleTween(e, au(e, i, nn(this, "style." + e, r))).each(su(this._id, e)) : this.styleTween(e, ou(e, i, r), n).on("end.style." + e, null);
}
function cu(e, r, n) {
  return function(i) {
    this.style.setProperty(e, r.call(this, i), n);
  };
}
function lu(e, r, n) {
  var i, o;
  function s() {
    var u = r.apply(this, arguments);
    return u !== o && (i = (o = u) && cu(e, u, n)), i;
  }
  return s._value = r, s;
}
function fu(e, r, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (r == null)
    return this.tween(i, null);
  if (typeof r != "function")
    throw new Error();
  return this.tween(i, lu(e, r, n == null ? "" : n));
}
function pu(e) {
  return function() {
    this.textContent = e;
  };
}
function du(e) {
  return function() {
    var r = e(this);
    this.textContent = r == null ? "" : r;
  };
}
function hu(e) {
  return this.tween("text", typeof e == "function" ? du(nn(this, "text", e)) : pu(e == null ? "" : e + ""));
}
function yu(e) {
  return function(r) {
    this.textContent = e.call(this, r);
  };
}
function gu(e) {
  var r, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (r = (n = o) && yu(o)), r;
  }
  return i._value = e, i;
}
function mu(e) {
  var r = "text";
  if (arguments.length < 1)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, gu(e));
}
function vu() {
  for (var e = this._name, r = this._id, n = Ri(), i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], f = u.length, c, p = 0; p < f; ++p)
      if (c = u[p]) {
        var d = Ie(c, r);
        Er(c, e, n, p, u, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Ve(i, this._parents, e, n);
}
function bu() {
  var e, r, n = this, i = n._id, o = n.size();
  return new Promise(function(s, u) {
    var f = { value: u }, c = { value: function() {
      --o === 0 && s();
    } };
    n.each(function() {
      var p = ze(this, i), d = p.on;
      d !== e && (r = (e = d).copy(), r._.cancel.push(f), r._.interrupt.push(f), r._.end.push(c)), p.on = r;
    }), o === 0 && s();
  });
}
var _u = 0;
function Ve(e, r, n, i) {
  this._groups = e, this._parents = r, this._name = n, this._id = i;
}
function Ri() {
  return ++_u;
}
var We = Ut.prototype;
Ve.prototype = {
  constructor: Ve,
  select: eu,
  selectAll: tu,
  selectChild: We.selectChild,
  selectChildren: We.selectChildren,
  filter: qs,
  merge: Xs,
  selection: nu,
  transition: vu,
  call: We.call,
  nodes: We.nodes,
  node: We.node,
  size: We.size,
  empty: We.empty,
  each: We.each,
  on: Ks,
  attr: Ns,
  attrTween: Ds,
  style: uu,
  styleTween: fu,
  text: hu,
  textTween: mu,
  remove: Qs,
  tween: Ss,
  delay: Ls,
  duration: Us,
  ease: Vs,
  easeVarying: Bs,
  end: bu,
  [Symbol.iterator]: We[Symbol.iterator]
};
function wu(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xu = {
  time: null,
  delay: 0,
  duration: 250,
  ease: wu
};
function ku(e, r) {
  for (var n; !(n = e.__transition) || !(n = n[r]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${r} not found`);
  return n;
}
function Su(e) {
  var r, n;
  e instanceof Ve ? (r = e._id, e = e._name) : (r = Ri(), (n = xu).time = Zr(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], f = u.length, c, p = 0; p < f; ++p)
      (c = u[p]) && Er(c, e, r, p, u, n || ku(c, r));
  return new Ve(i, this._parents, e, r);
}
Ut.prototype.interrupt = Xa;
Ut.prototype.transition = Su;
const Rn = {
  wicks: "line",
  candles: "rect"
}, Eu = (e, r, n, i, o) => {
  const {
    scales: { xScale: s },
    utils: { scaledHeight: u, scaledY: f }
  } = i, {
    visibleRange: { offset: c }
  } = n, p = It({}), d = It(!1), [h, g] = Ye({
    item: void 0,
    position: void 0
  }), v = De(() => bt(e.current), [e.current]), $ = De(
    (k, w = v()) => w.selectAll(`${Rn[k]}.${k}`).data(r),
    [r]
  ), N = De(
    (k) => {
      var w;
      return p.current[k] = (w = p.current[k]) != null ? w : v().append("g").classed(`${k}-group`, !0).attr("clip-path", "url(#chart-contents)"), p.current[k];
    },
    [p]
  ), R = De(
    (k, w) => {
      let C = $(k, N(k));
      C.size() !== r.length && (C = C.enter().append(Rn[k]));
      const z = () => C.transition().duration(o ? ja : 50), A = (M) => Number(s(M.date)) + (k === "wicks" ? +s.bandwidth() / 2 : 0) + c, O = (M) => f(M[w[0]], M[w[1]]), F = (M) => u(M[w[0]], M[w[1]]), W = (M) => O(M) + F(M);
      return k === "candles" ? (z().attr("width", () => +s.bandwidth()).attr("height", F).attr("x", A).attr("y", O), C.classed("is-increased", (M) => M.close > M.open).classed("is-decreased", (M) => M.close < M.open).classed("is-zoomed", (M) => +s.bandwidth() > 10).on("click", ({ target: M }, q) => {
        C.classed("is-active", !1), bt(M).classed("is-active", !0), d.current = !0, g({
          item: q,
          position: {
            x: A(q) + s.bandwidth() + de,
            y: W(q) + 8
          }
        });
      }).on("mouseover", (M, q) => {
        d.current || g({
          item: q
        });
      }).on("mouseout", (M, q) => {
        d.current || g({
          item: void 0
        });
      })) : z().attr("x1", A).attr("y1", O).attr("x2", A).attr("y2", W), C.classed(k, !0).exit().remove(), C;
    },
    [s, f]
  );
  return Fe(() => {
    N("wicks"), N("candles");
    const k = ({ target: w }) => {
      w.nodeName !== "rect" && (v().selectAll("rect").classed("is-active", !1), d.current = !1, g(({ position: C }) => ({ item: void 0, position: C })));
    };
    return addEventListener("resize", k), addEventListener("pointerdown", k), () => {
      removeEventListener("pointerdown", k), removeEventListener("resize", k);
    };
  }, []), Fe(() => {
    var k;
    (k = s == null ? void 0 : s.bandwidth) != null && k.call(s) && (R("wicks", ["low", "high"]), R("candles", ["open", "close"]));
  }, [s, f]), h;
};
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $i = "Expected a function", $n = 0 / 0, Ru = "[object Symbol]", $u = /^\s+|\s+$/g, Ou = /^[-+]0x[0-9a-f]+$/i, Tu = /^0b[01]+$/i, Cu = /^0o[0-7]+$/i, Nu = parseInt, Pu = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, ju = typeof self == "object" && self && self.Object === Object && self, Au = Pu || ju || Function("return this")(), Mu = Object.prototype, Du = Mu.toString, Fu = Math.max, Iu = Math.min, Pr = function() {
  return Au.Date.now();
};
function Lu(e, r, n) {
  var i, o, s, u, f, c, p = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError($i);
  r = On(r) || 0, vr(n) && (d = !!n.leading, h = "maxWait" in n, s = h ? Fu(On(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(O) {
    var F = i, W = o;
    return i = o = void 0, p = O, u = e.apply(W, F), u;
  }
  function $(O) {
    return p = O, f = setTimeout(k, r), d ? v(O) : u;
  }
  function N(O) {
    var F = O - c, W = O - p, M = r - F;
    return h ? Iu(M, s - W) : M;
  }
  function R(O) {
    var F = O - c, W = O - p;
    return c === void 0 || F >= r || F < 0 || h && W >= s;
  }
  function k() {
    var O = Pr();
    if (R(O))
      return w(O);
    f = setTimeout(k, N(O));
  }
  function w(O) {
    return f = void 0, g && i ? v(O) : (i = o = void 0, u);
  }
  function C() {
    f !== void 0 && clearTimeout(f), p = 0, i = c = o = f = void 0;
  }
  function z() {
    return f === void 0 ? u : w(Pr());
  }
  function A() {
    var O = Pr(), F = R(O);
    if (i = arguments, o = this, c = O, F) {
      if (f === void 0)
        return $(c);
      if (h)
        return f = setTimeout(k, r), v(c);
    }
    return f === void 0 && (f = setTimeout(k, r)), u;
  }
  return A.cancel = C, A.flush = z, A;
}
function zu(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError($i);
  return vr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Lu(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function vr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Wu(e) {
  return !!e && typeof e == "object";
}
function Uu(e) {
  return typeof e == "symbol" || Wu(e) && Du.call(e) == Ru;
}
function On(e) {
  if (typeof e == "number")
    return e;
  if (Uu(e))
    return $n;
  if (vr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace($u, "");
  var n = Tu.test(e);
  return n || Cu.test(e) ? Nu(e.slice(2), n ? 2 : 8) : Ou.test(e) ? $n : +e;
}
var Yr = zu;
const { abs: Yu, round: Tn } = Math, Vu = (e, r, n) => {
  const [i, o] = Ye({
    width: 0,
    height: 0
  }), [s, u] = Ye({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), { zoomLevel: f, panLevel: c } = n;
  return Fe(() => {
    const p = Yr(() => {
      const { clientWidth: d, clientHeight: h } = e.current;
      o({ width: d, height: h });
    }, 200);
    return p(), addEventListener("resize", p), () => removeEventListener("resize", p);
  }, []), Fe(() => {
    if (!r)
      return;
    const { width: p } = i, d = Aa * (1 + pi) * f, h = d * r, g = p - Be[1] + de * 2;
    let v = c * f - h + g;
    v = v <= 0 ? v : 0, v = h > p ? v : g - h, v = Yu(v - g) <= h ? v : -h + g;
    const $ = Tn((v * -1 - de) / d), N = Tn((v * -1 + g) / d);
    u({ first: $, last: N, offset: v, totalWidth: h });
  }, [f, c, r, i.width]), { visibleRange: s, sizes: i };
}, Hu = (e = "") => new Date(e).toLocaleDateString("en-UK");
function lr(e, r) {
  return e == null || r == null ? NaN : e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Bu(e, r) {
  return e == null || r == null ? NaN : r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
}
function Oi(e) {
  let r, n, i;
  e.length !== 2 ? (r = lr, n = (f, c) => lr(e(f), c), i = (f, c) => e(f) - c) : (r = e === lr || e === Bu ? e : qu, n = e, i = e);
  function o(f, c, p = 0, d = f.length) {
    if (p < d) {
      if (r(c, c) !== 0)
        return d;
      do {
        const h = p + d >>> 1;
        n(f[h], c) < 0 ? p = h + 1 : d = h;
      } while (p < d);
    }
    return p;
  }
  function s(f, c, p = 0, d = f.length) {
    if (p < d) {
      if (r(c, c) !== 0)
        return d;
      do {
        const h = p + d >>> 1;
        n(f[h], c) <= 0 ? p = h + 1 : d = h;
      } while (p < d);
    }
    return p;
  }
  function u(f, c, p = 0, d = f.length) {
    const h = o(f, c, p, d - 1);
    return h > p && i(f[h - 1], c) > -i(f[h], c) ? h - 1 : h;
  }
  return { left: o, center: u, right: s };
}
function qu() {
  return 0;
}
function Xu(e) {
  return e === null ? NaN : +e;
}
const Gu = Oi(lr), Ju = Gu.right;
Oi(Xu).center;
const Ku = Ju;
class Cn extends Map {
  constructor(r, n = ec) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), r != null)
      for (const [i, o] of r)
        this.set(i, o);
  }
  get(r) {
    return super.get(Nn(this, r));
  }
  has(r) {
    return super.has(Nn(this, r));
  }
  set(r, n) {
    return super.set(Zu(this, r), n);
  }
  delete(r) {
    return super.delete(Qu(this, r));
  }
}
function Nn({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : n;
}
function Zu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function Qu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function ec(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
var Vr = Math.sqrt(50), Hr = Math.sqrt(10), Br = Math.sqrt(2);
function tc(e, r, n) {
  var i, o = -1, s, u, f;
  if (r = +r, e = +e, n = +n, e === r && n > 0)
    return [e];
  if ((i = r < e) && (s = e, e = r, r = s), (f = Ti(e, r, n)) === 0 || !isFinite(f))
    return [];
  if (f > 0) {
    let c = Math.round(e / f), p = Math.round(r / f);
    for (c * f < e && ++c, p * f > r && --p, u = new Array(s = p - c + 1); ++o < s; )
      u[o] = (c + o) * f;
  } else {
    f = -f;
    let c = Math.round(e * f), p = Math.round(r * f);
    for (c / f < e && ++c, p / f > r && --p, u = new Array(s = p - c + 1); ++o < s; )
      u[o] = (c + o) / f;
  }
  return i && u.reverse(), u;
}
function Ti(e, r, n) {
  var i = (r - e) / Math.max(0, n), o = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, o);
  return o >= 0 ? (s >= Vr ? 10 : s >= Hr ? 5 : s >= Br ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (s >= Vr ? 10 : s >= Hr ? 5 : s >= Br ? 2 : 1);
}
function rc(e, r, n) {
  var i = Math.abs(r - e) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / o;
  return s >= Vr ? o *= 10 : s >= Hr ? o *= 5 : s >= Br && (o *= 2), r < e ? -o : o;
}
function nc(e, r, n) {
  e = +e, r = +r, n = (o = arguments.length) < 2 ? (r = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var i = -1, o = Math.max(0, Math.ceil((r - e) / n)) | 0, s = new Array(o); ++i < o; )
    s[i] = e + i * n;
  return s;
}
function on(e, r) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(r).domain(e);
      break;
  }
  return this;
}
const Pn = Symbol("implicit");
function Ci() {
  var e = new Cn(), r = [], n = [], i = Pn;
  function o(s) {
    let u = e.get(s);
    if (u === void 0) {
      if (i !== Pn)
        return i;
      e.set(s, u = r.push(s) - 1);
    }
    return n[u % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length)
      return r.slice();
    r = [], e = new Cn();
    for (const u of s)
      e.has(u) || e.set(u, r.push(u) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (i = s, o) : i;
  }, o.copy = function() {
    return Ci(r, n).unknown(i);
  }, on.apply(o, arguments), o;
}
function Ni() {
  var e = Ci().unknown(void 0), r = e.domain, n = e.range, i = 0, o = 1, s, u, f = !1, c = 0, p = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var g = r().length, v = o < i, $ = v ? o : i, N = v ? i : o;
    s = (N - $) / Math.max(1, g - c + p * 2), f && (s = Math.floor(s)), $ += (N - $ - s * (g - c)) * d, u = s * (1 - c), f && ($ = Math.round($), u = Math.round(u));
    var R = nc(g).map(function(k) {
      return $ + s * k;
    });
    return n(v ? R.reverse() : R);
  }
  return e.domain = function(g) {
    return arguments.length ? (r(g), h()) : r();
  }, e.range = function(g) {
    return arguments.length ? ([i, o] = g, i = +i, o = +o, h()) : [i, o];
  }, e.rangeRound = function(g) {
    return [i, o] = g, i = +i, o = +o, f = !0, h();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return s;
  }, e.round = function(g) {
    return arguments.length ? (f = !!g, h()) : f;
  }, e.padding = function(g) {
    return arguments.length ? (c = Math.min(1, p = +g), h()) : c;
  }, e.paddingInner = function(g) {
    return arguments.length ? (c = Math.min(1, g), h()) : c;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (p = +g, h()) : p;
  }, e.align = function(g) {
    return arguments.length ? (d = Math.max(0, Math.min(1, g)), h()) : d;
  }, e.copy = function() {
    return Ni(r(), [i, o]).round(f).paddingInner(c).paddingOuter(p).align(d);
  }, on.apply(h(), arguments);
}
function ic(e) {
  return function() {
    return e;
  };
}
function oc(e) {
  return +e;
}
var jn = [0, 1];
function St(e) {
  return e;
}
function qr(e, r) {
  return (r -= e = +e) ? function(n) {
    return (n - e) / r;
  } : ic(isNaN(r) ? NaN : 0.5);
}
function ac(e, r) {
  var n;
  return e > r && (n = e, e = r, r = n), function(i) {
    return Math.max(e, Math.min(r, i));
  };
}
function sc(e, r, n) {
  var i = e[0], o = e[1], s = r[0], u = r[1];
  return o < i ? (i = qr(o, i), s = n(u, s)) : (i = qr(i, o), s = n(s, u)), function(f) {
    return s(i(f));
  };
}
function uc(e, r, n) {
  var i = Math.min(e.length, r.length) - 1, o = new Array(i), s = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), r = r.slice().reverse()); ++u < i; )
    o[u] = qr(e[u], e[u + 1]), s[u] = n(r[u], r[u + 1]);
  return function(f) {
    var c = Ku(e, f, 1, i) - 1;
    return s[c](o[c](f));
  };
}
function cc(e, r) {
  return r.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function lc() {
  var e = jn, r = jn, n = rn, i, o, s, u = St, f, c, p;
  function d() {
    var g = Math.min(e.length, r.length);
    return u !== St && (u = ac(e[0], e[g - 1])), f = g > 2 ? uc : sc, c = p = null, h;
  }
  function h(g) {
    return g == null || isNaN(g = +g) ? s : (c || (c = f(e.map(i), r, n)))(i(u(g)));
  }
  return h.invert = function(g) {
    return u(o((p || (p = f(r, e.map(i), Ae)))(g)));
  }, h.domain = function(g) {
    return arguments.length ? (e = Array.from(g, oc), d()) : e.slice();
  }, h.range = function(g) {
    return arguments.length ? (r = Array.from(g), d()) : r.slice();
  }, h.rangeRound = function(g) {
    return r = Array.from(g), n = ms, d();
  }, h.clamp = function(g) {
    return arguments.length ? (u = g ? !0 : St, d()) : u !== St;
  }, h.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, h.unknown = function(g) {
    return arguments.length ? (s = g, h) : s;
  }, function(g, v) {
    return i = g, o = v, d();
  };
}
function fc() {
  return lc()(St, St);
}
function pc(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function br(e, r) {
  if ((n = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Ot(e) {
  return e = br(Math.abs(e)), e ? e[1] : NaN;
}
function dc(e, r) {
  return function(n, i) {
    for (var o = n.length, s = [], u = 0, f = e[0], c = 0; o > 0 && f > 0 && (c + f + 1 > i && (f = Math.max(1, i - c)), s.push(n.substring(o -= f, o + f)), !((c += f + 1) > i)); )
      f = e[u = (u + 1) % e.length];
    return s.reverse().join(r);
  };
}
function hc(e) {
  return function(r) {
    return r.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var yc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _r(e) {
  if (!(r = yc.exec(e)))
    throw new Error("invalid format: " + e);
  var r;
  return new an({
    fill: r[1],
    align: r[2],
    sign: r[3],
    symbol: r[4],
    zero: r[5],
    width: r[6],
    comma: r[7],
    precision: r[8] && r[8].slice(1),
    trim: r[9],
    type: r[10]
  });
}
_r.prototype = an.prototype;
function an(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
an.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function gc(e) {
  e:
    for (var r = e.length, n = 1, i = -1, o; n < r; ++n)
      switch (e[n]) {
        case ".":
          i = o = n;
          break;
        case "0":
          i === 0 && (i = n), o = n;
          break;
        default:
          if (!+e[n])
            break e;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? e.slice(0, i) + e.slice(o + 1) : e;
}
var Pi;
function mc(e, r) {
  var n = br(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1], s = o - (Pi = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, u = i.length;
  return s === u ? i : s > u ? i + new Array(s - u + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + br(e, Math.max(0, r + s - 1))[0];
}
function An(e, r) {
  var n = br(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Mn = {
  "%": (e, r) => (e * 100).toFixed(r),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: pc,
  e: (e, r) => e.toExponential(r),
  f: (e, r) => e.toFixed(r),
  g: (e, r) => e.toPrecision(r),
  o: (e) => Math.round(e).toString(8),
  p: (e, r) => An(e * 100, r),
  r: An,
  s: mc,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Dn(e) {
  return e;
}
var Fn = Array.prototype.map, In = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function vc(e) {
  var r = e.grouping === void 0 || e.thousands === void 0 ? Dn : dc(Fn.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Dn : hc(Fn.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", f = e.minus === void 0 ? "\u2212" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function p(h) {
    h = _r(h);
    var g = h.fill, v = h.align, $ = h.sign, N = h.symbol, R = h.zero, k = h.width, w = h.comma, C = h.precision, z = h.trim, A = h.type;
    A === "n" ? (w = !0, A = "g") : Mn[A] || (C === void 0 && (C = 12), z = !0, A = "g"), (R || g === "0" && v === "=") && (R = !0, g = "0", v = "=");
    var O = N === "$" ? n : N === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", F = N === "$" ? i : /[%p]/.test(A) ? u : "", W = Mn[A], M = /[defgprs%]/.test(A);
    C = C === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function q(D) {
      var U = O, P = F, L, B, te;
      if (A === "c")
        P = W(D) + P, D = "";
      else {
        D = +D;
        var re = D < 0 || 1 / D < 0;
        if (D = isNaN(D) ? c : W(Math.abs(D), C), z && (D = gc(D)), re && +D == 0 && $ !== "+" && (re = !1), U = (re ? $ === "(" ? $ : f : $ === "-" || $ === "(" ? "" : $) + U, P = (A === "s" ? In[8 + Pi / 3] : "") + P + (re && $ === "(" ? ")" : ""), M) {
          for (L = -1, B = D.length; ++L < B; )
            if (te = D.charCodeAt(L), 48 > te || te > 57) {
              P = (te === 46 ? o + D.slice(L + 1) : D.slice(L)) + P, D = D.slice(0, L);
              break;
            }
        }
      }
      w && !R && (D = r(D, 1 / 0));
      var ne = U.length + D.length + P.length, G = ne < k ? new Array(k - ne + 1).join(g) : "";
      switch (w && R && (D = r(G + D, G.length ? k - P.length : 1 / 0), G = ""), v) {
        case "<":
          D = U + D + P + G;
          break;
        case "=":
          D = U + G + D + P;
          break;
        case "^":
          D = G.slice(0, ne = G.length >> 1) + U + D + P + G.slice(ne);
          break;
        default:
          D = G + U + D + P;
          break;
      }
      return s(D);
    }
    return q.toString = function() {
      return h + "";
    }, q;
  }
  function d(h, g) {
    var v = p((h = _r(h), h.type = "f", h)), $ = Math.max(-8, Math.min(8, Math.floor(Ot(g) / 3))) * 3, N = Math.pow(10, -$), R = In[8 + $ / 3];
    return function(k) {
      return v(N * k) + R;
    };
  }
  return {
    format: p,
    formatPrefix: d
  };
}
var Zt, ji, Ai;
bc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function bc(e) {
  return Zt = vc(e), ji = Zt.format, Ai = Zt.formatPrefix, Zt;
}
function _c(e) {
  return Math.max(0, -Ot(Math.abs(e)));
}
function wc(e, r) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ot(r) / 3))) * 3 - Ot(Math.abs(e)));
}
function xc(e, r) {
  return e = Math.abs(e), r = Math.abs(r) - e, Math.max(0, Ot(r) - Ot(e)) + 1;
}
function kc(e, r, n, i) {
  var o = rc(e, r, n), s;
  switch (i = _r(i == null ? ",f" : i), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(r));
      return i.precision == null && !isNaN(s = wc(o, u)) && (i.precision = s), Ai(i, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = xc(o, Math.max(Math.abs(e), Math.abs(r)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = _c(o)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return ji(i);
}
function Sc(e) {
  var r = e.domain;
  return e.ticks = function(n) {
    var i = r();
    return tc(i[0], i[i.length - 1], n == null ? 10 : n);
  }, e.tickFormat = function(n, i) {
    var o = r();
    return kc(o[0], o[o.length - 1], n == null ? 10 : n, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = r(), o = 0, s = i.length - 1, u = i[o], f = i[s], c, p, d = 10;
    for (f < u && (p = u, u = f, f = p, p = o, o = s, s = p); d-- > 0; ) {
      if (p = Ti(u, f, n), p === c)
        return i[o] = u, i[s] = f, r(i);
      if (p > 0)
        u = Math.floor(u / p) * p, f = Math.ceil(f / p) * p;
      else if (p < 0)
        u = Math.ceil(u * p) / p, f = Math.floor(f * p) / p;
      else
        break;
      c = p;
    }
    return e;
  }, e;
}
function Mi() {
  var e = fc();
  return e.copy = function() {
    return cc(e, Mi());
  }, on.apply(e, arguments), Sc(e);
}
const { abs: Ec, min: Ln, max: Rc } = Math, $c = (e, r) => {
  const { sizes: n, visibleRange: i } = r, [o, s] = Ye({
    xScale: (c) => c,
    yScale: (c) => c
  }), u = De(
    (c, p) => Ec(o.yScale(p) - o.yScale(c)) || 1,
    [o.yScale]
  ), f = De(
    (c, p) => o.yScale(Ln(c, p)) - u(c, p) || 1,
    [o.yScale]
  );
  return Fe(() => {
    if (!(e != null && e.length))
      return;
    const { first: c, last: p, totalWidth: d } = i, { height: h } = n, g = e.slice(c > 0 ? c : 0, p), v = Ln(...g.map(({ low: k }) => k)), $ = Rc(...g.map(({ high: k }) => k)), N = Ni().range([de, d - de]).domain(e.map(({ date: k }) => k)).padding(pi), R = Mi().domain([v - 20, $ + 20]).range([h - Be[0], de]);
    s({ xScale: N, yScale: R });
  }, [i, n.height, e]), { utils: { scaledHeight: u, scaledY: f }, scales: o };
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Di = "Expected a function", zn = 0 / 0, Oc = "[object Symbol]", Tc = /^\s+|\s+$/g, Cc = /^[-+]0x[0-9a-f]+$/i, Nc = /^0b[01]+$/i, Pc = /^0o[0-7]+$/i, jc = parseInt, Ac = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, Mc = typeof self == "object" && self && self.Object === Object && self, Dc = Ac || Mc || Function("return this")(), Fc = Object.prototype, Ic = Fc.toString, Lc = Math.max, zc = Math.min, jr = function() {
  return Dc.Date.now();
};
function Wc(e, r, n) {
  var i, o, s, u, f, c, p = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Di);
  r = Wn(r) || 0, wr(n) && (d = !!n.leading, h = "maxWait" in n, s = h ? Lc(Wn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(O) {
    var F = i, W = o;
    return i = o = void 0, p = O, u = e.apply(W, F), u;
  }
  function $(O) {
    return p = O, f = setTimeout(k, r), d ? v(O) : u;
  }
  function N(O) {
    var F = O - c, W = O - p, M = r - F;
    return h ? zc(M, s - W) : M;
  }
  function R(O) {
    var F = O - c, W = O - p;
    return c === void 0 || F >= r || F < 0 || h && W >= s;
  }
  function k() {
    var O = jr();
    if (R(O))
      return w(O);
    f = setTimeout(k, N(O));
  }
  function w(O) {
    return f = void 0, g && i ? v(O) : (i = o = void 0, u);
  }
  function C() {
    f !== void 0 && clearTimeout(f), p = 0, i = c = o = f = void 0;
  }
  function z() {
    return f === void 0 ? u : w(jr());
  }
  function A() {
    var O = jr(), F = R(O);
    if (i = arguments, o = this, c = O, F) {
      if (f === void 0)
        return $(c);
      if (h)
        return f = setTimeout(k, r), v(c);
    }
    return f === void 0 && (f = setTimeout(k, r)), u;
  }
  return A.cancel = C, A.flush = z, A;
}
function Uc(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Di);
  return wr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Wc(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function wr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Yc(e) {
  return !!e && typeof e == "object";
}
function Vc(e) {
  return typeof e == "symbol" || Yc(e) && Ic.call(e) == Oc;
}
function Wn(e) {
  if (typeof e == "number")
    return e;
  if (Vc(e))
    return zn;
  if (wr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Tc, "");
  var n = Nc.test(e);
  return n || Pc.test(e) ? jc(e.slice(2), n ? 2 : 8) : Cc.test(e) ? zn : +e;
}
var Hc = Uc;
const Ar = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Bc = {
  light: {
    bg: "#ffffff",
    text: "#2b322d",
    subtle: "#f8faf8",
    border: "#e0e9e2",
    shadow: "#b2c3b6",
    input: "#ffffff",
    outline: "#67c7ec",
    mark: "#657b8714",
    special: "#657b87",
    light: "#eff4f7",
    dark: "#3e484e"
  },
  dark: {
    bg: "#202020",
    text: "#d6e2d9",
    subtle: "#212522",
    border: "#29322c",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#57a9c8",
    mark: "#758f9c14",
    special: "#758f9c",
    light: "#c2d7e3",
    dark: "#2c363c"
  },
  lightContrast: {
    bg: "#ffffff",
    text: "#1c211e",
    subtle: "#f8faf8",
    border: "#abb9af",
    shadow: "#90a094",
    input: "#ffffff",
    outline: "#5eb6d7",
    mark: "#4c5d6629",
    special: "#4c5d66",
    light: "#eff4f7",
    dark: "#3e484e"
  },
  darkContrast: {
    bg: "#202020",
    text: "#ebf0ec",
    subtle: "#212522",
    border: "#4c524d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#55a5c4",
    mark: "#94b3c329",
    special: "#94b3c3",
    light: "#d9e6ed",
    dark: "#2c363c"
  }
}, qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: Bc
}, Symbol.toStringTag, { value: "Module" }));
var Fi = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function Xc() {
  if (Un)
    return Pt;
  Un = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var d, h = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (d in c)
      i.call(c, d) && !s.hasOwnProperty(d) && (h[d] = c[d]);
    if (f && f.defaultProps)
      for (d in c = f.defaultProps, c)
        h[d] === void 0 && (h[d] = c[d]);
    return { $$typeof: r, type: f, key: g, ref: v, props: h, _owner: o.current };
  }
  return Pt.Fragment = n, Pt.jsx = u, Pt.jsxs = u, Pt;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function Gc() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), $ = Symbol.iterator, N = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = $ && t[$] || t[N];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        C("error", t, l);
      }
    }
    function C(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var z = !1, A = !1, O = !1, F = !1, W = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === d || F || t === v || z || A || O || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function D(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function U(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return U(a) + ".Consumer";
          case u:
            var l = t;
            return U(l._context) + ".Provider";
          case c:
            return D(t, t.render, "ForwardRef");
          case h:
            var y = t.displayName || null;
            return y !== null ? y : P(t.type) || "Memo";
          case g: {
            var _ = t, x = _._payload, b = _._init;
            try {
              return P(b(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, B = 0, te, re, ne, G, ge, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (B === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ge = console.group, me = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function Ge() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ge
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function J(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, K;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Je();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = K.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ie.current, ie.current = null, Xe();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), T = y.stack.split(`
`), S = m.length - 1, E = T.length - 1; S >= 1 && E >= 0 && m[S] !== T[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== T[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== T[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? J(H) : "";
      return typeof t == "function" && K.set(t, je), je;
    }
    function Ke(t, a, l) {
      return _e(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Ze(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ke(t.render);
          case h:
            return Z(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, x = y._init;
            try {
              return Z(x(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, we = {}, xe = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        xe.setExtraStackFrame(l);
      } else
        xe.setExtraStackFrame(null);
    }
    function Qe(t, a, l, y, _) {
      {
        var x = Function.call.bind(Q);
        for (var b in t)
          if (x(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var T = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(_), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), ee(null)), m instanceof Error && !(m.message in we) && (we[m.message] = !0, ee(_), w("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function rt(t) {
      try {
        return ke(t), !1;
      } catch {
        return !0;
      }
    }
    function ke(t) {
      return "" + t;
    }
    function Se(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ue;
    ue = {};
    function it(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function ot(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function at(t, a) {
      if (typeof t.ref == "string" && X.current && a && X.current.stateNode !== a) {
        var l = P(X.current.type);
        ue[l] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ue[l] = !0);
      }
    }
    function st(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function ut(t, a) {
      {
        var l = function() {
          Re || (Re = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ct = function(t, a, l, y, _, x, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: x
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function lt(t, a, l, y, _) {
      {
        var x, b = {}, m = null, T = null;
        l !== void 0 && (Se(l), m = "" + l), ot(a) && (Se(a.key), m = "" + a.key), it(a) && (T = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (x in S)
            b[x] === void 0 && (b[x] = S[x]);
        }
        if (m || T) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), T && ut(b, E);
        }
        return ct(t, m, T, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, $e = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        $e.setExtraStackFrame(l);
      } else
        $e.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = P(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ft(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function pt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ce(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ce(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ce(b.value, a);
        }
      }
    }
    function dt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === h))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = P(a);
          Qe(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = P(a);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            V(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, l, y, _, x) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ft(_);
          T ? m += T : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = lt(t, a, l, _, x);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ne(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(j, t);
        }
        return t === i ? ht(E) : dt(E), E;
      }
    }
    function yt(t, a, l) {
      return Pe(t, a, l, !0);
    }
    function gt(t, a, l) {
      return Pe(t, a, l, !1);
    }
    var mt = gt, vt = yt;
    er.Fragment = i, er.jsx = mt, er.jsxs = vt;
  }()), er;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Xc() : e.exports = Gc();
})(Fi);
const Jc = Fi.exports.jsx, Kc = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, Zc = (e = "pebble") => ({
  colors: qc[e],
  ...Kc
}), tr = (e) => Object.entries(e).reduce(
  (r, [n, i]) => `${r} --${n}: ${i};`,
  ""
), Qc = ({
  colors: {
    light: e,
    dark: r = e,
    lightContrast: n = e,
    darkContrast: i = e
  },
  fonts: o,
  fontSizes: s
} = Zc()) => Xr`
  :root {
    ${tr(e)}
    font-family: ${o.join(", ")};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${tr(r)}
    }
  }

  @media (prefers-color-scheme: light) and (prefers-contrast: more) {
    :root {
      ${tr(n)}
    }
  }

  @media (prefers-color-scheme: dark) and (prefers-contrast: more) {
    :root {
      ${tr(i)}
    }
  }
`;
Qc();
const el = (e) => `
  border: 1px solid ${e};
  color: ${e};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, tl = he.div(
  ({ isVisible: e = !1 }) => xr`
    font-family: sans-serif;
    position: absolute;
    transition: all 0.2s;
    opacity: ${e ? 0.8 : 0};
    ${el(Ar.default)}
    padding: 4px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${Ar.default};
      border-right: 1px solid ${Ar.default};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
    }
  `
), rl = ({
  children: e,
  isVisible: r = !1,
  x: n = 0,
  y: i = 0
}) => {
  const o = It(null), [s, u] = Ye({
    x: n,
    y: i
  }), f = De((c, p) => {
    var d, h;
    return u({
      x: c - ((h = (d = o.current) == null ? void 0 : d.clientWidth) != null ? h : 0) / 2,
      y: p + 24
    });
  }, [o.current]);
  return Fe(() => {
    f(n, i);
    const c = Hc(({
      clientX: d,
      clientY: h
    }) => !n && !i && f(d, h), 100), p = () => {
      removeEventListener("mousemove", c);
    };
    return n && i ? p() : addEventListener("mousemove", c), p;
  }, [n, i]), /* @__PURE__ */ Jc(tl, {
    ref: o,
    isVisible: r,
    children: e,
    style: {
      left: s.x,
      top: s.y
    }
  });
}, nl = he.div`
  & div {
    width: 100%;
    font-size: 0.8em;
    &:first-of-type {
      text-align: center;
      font-size: 1em;
    }
  }

  & em {
    float: right;
  }
`;
var Rr = { exports: {} }, jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function il() {
  if (Vn)
    return jt;
  Vn = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var d, h = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (d in c)
      i.call(c, d) && !s.hasOwnProperty(d) && (h[d] = c[d]);
    if (f && f.defaultProps)
      for (d in c = f.defaultProps, c)
        h[d] === void 0 && (h[d] = c[d]);
    return { $$typeof: r, type: f, key: g, ref: v, props: h, _owner: o.current };
  }
  return jt.Fragment = n, jt.jsx = u, jt.jsxs = u, jt;
}
var At = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function ol() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), $ = Symbol.iterator, N = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = $ && t[$] || t[N];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        C("error", t, l);
      }
    }
    function C(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var z = !1, A = !1, O = !1, F = !1, W = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === d || F || t === v || z || A || O || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function D(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function U(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return U(a) + ".Consumer";
          case u:
            var l = t;
            return U(l._context) + ".Provider";
          case c:
            return D(t, t.render, "ForwardRef");
          case h:
            var y = t.displayName || null;
            return y !== null ? y : P(t.type) || "Memo";
          case g: {
            var _ = t, x = _._payload, b = _._init;
            try {
              return P(b(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, B = 0, te, re, ne, G, ge, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (B === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ge = console.group, me = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function Ge() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ge
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function J(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, K;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Je();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = K.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ie.current, ie.current = null, Xe();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), T = y.stack.split(`
`), S = m.length - 1, E = T.length - 1; S >= 1 && E >= 0 && m[S] !== T[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== T[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== T[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? J(H) : "";
      return typeof t == "function" && K.set(t, je), je;
    }
    function Ke(t, a, l) {
      return _e(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Ze(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ke(t.render);
          case h:
            return Z(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, x = y._init;
            try {
              return Z(x(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, we = {}, xe = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        xe.setExtraStackFrame(l);
      } else
        xe.setExtraStackFrame(null);
    }
    function Qe(t, a, l, y, _) {
      {
        var x = Function.call.bind(Q);
        for (var b in t)
          if (x(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var T = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(_), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), ee(null)), m instanceof Error && !(m.message in we) && (we[m.message] = !0, ee(_), w("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function rt(t) {
      try {
        return ke(t), !1;
      } catch {
        return !0;
      }
    }
    function ke(t) {
      return "" + t;
    }
    function Se(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ue;
    ue = {};
    function it(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function ot(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function at(t, a) {
      if (typeof t.ref == "string" && X.current && a && X.current.stateNode !== a) {
        var l = P(X.current.type);
        ue[l] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ue[l] = !0);
      }
    }
    function st(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function ut(t, a) {
      {
        var l = function() {
          Re || (Re = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ct = function(t, a, l, y, _, x, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: x
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function lt(t, a, l, y, _) {
      {
        var x, b = {}, m = null, T = null;
        l !== void 0 && (Se(l), m = "" + l), ot(a) && (Se(a.key), m = "" + a.key), it(a) && (T = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (x in S)
            b[x] === void 0 && (b[x] = S[x]);
        }
        if (m || T) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), T && ut(b, E);
        }
        return ct(t, m, T, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, $e = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        $e.setExtraStackFrame(l);
      } else
        $e.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = P(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ft(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function pt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ce(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ce(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ce(b.value, a);
        }
      }
    }
    function dt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === h))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = P(a);
          Qe(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = P(a);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            V(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, l, y, _, x) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ft(_);
          T ? m += T : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = lt(t, a, l, _, x);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ne(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(j, t);
        }
        return t === i ? ht(E) : dt(E), E;
      }
    }
    function yt(t, a, l) {
      return Pe(t, a, l, !0);
    }
    function gt(t, a, l) {
      return Pe(t, a, l, !1);
    }
    var mt = gt, vt = yt;
    At.Fragment = i, At.jsx = mt, At.jsxs = vt;
  }()), At;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = il() : e.exports = ol();
})(Rr);
const Ii = Rr.exports.Fragment, Y = Rr.exports.jsx, Ue = Rr.exports.jsxs, al = ({
  item: e,
  position: r
}) => {
  const [n, i] = Ye(e), o = It();
  return Fe(() => {
    if (e) {
      i(e), clearTimeout(o.current);
      return;
    }
    o.current = setTimeout(() => i(e), 200);
  }, [e]), /* @__PURE__ */ Y(rl, {
    isVisible: !!e,
    ...r,
    children: /* @__PURE__ */ Ue(nl, {
      children: [/* @__PURE__ */ Y("div", {
        children: /* @__PURE__ */ Y("strong", {
          children: Hu(n == null ? void 0 : n.date)
        })
      }), /* @__PURE__ */ Ue("div", {
        children: ["Open: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.open
        })]
      }), /* @__PURE__ */ Ue("div", {
        children: ["Close: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.close
        })]
      }), /* @__PURE__ */ Ue("div", {
        children: ["High: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.high
        })]
      }), /* @__PURE__ */ Ue("div", {
        children: ["Low: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.low
        })]
      })]
    })
  });
}, sl = {
  light: {
    bg: "#ffffff",
    text: "#2b322d",
    subtle: "#f8faf8",
    border: "#e0e9e2",
    shadow: "#b2c3b6",
    input: "#ffffff",
    outline: "#67c7ec",
    mark: "#657b8714",
    special: "#657b87",
    light: "#eff4f7",
    dark: "#3e484e"
  },
  dark: {
    bg: "#202020",
    text: "#d6e2d9",
    subtle: "#212522",
    border: "#29322c",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#57a9c8",
    mark: "#758f9c14",
    special: "#758f9c",
    light: "#c2d7e3",
    dark: "#2c363c"
  },
  lightContrast: {
    bg: "#ffffff",
    text: "#1c211e",
    subtle: "#f8faf8",
    border: "#abb9af",
    shadow: "#90a094",
    input: "#ffffff",
    outline: "#5eb6d7",
    mark: "#4c5d6629",
    special: "#4c5d66",
    light: "#eff4f7",
    dark: "#3e484e"
  },
  darkContrast: {
    bg: "#202020",
    text: "#ebf0ec",
    subtle: "#212522",
    border: "#4c524d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#55a5c4",
    mark: "#94b3c329",
    special: "#94b3c3",
    light: "#d9e6ed",
    dark: "#2c363c"
  }
}, ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: sl
}, Symbol.toStringTag, { value: "Module" }));
var Li = { exports: {} }, Mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function cl() {
  if (Bn)
    return Mt;
  Bn = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var d, h = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (d in c)
      i.call(c, d) && !s.hasOwnProperty(d) && (h[d] = c[d]);
    if (f && f.defaultProps)
      for (d in c = f.defaultProps, c)
        h[d] === void 0 && (h[d] = c[d]);
    return { $$typeof: r, type: f, key: g, ref: v, props: h, _owner: o.current };
  }
  return Mt.Fragment = n, Mt.jsx = u, Mt.jsxs = u, Mt;
}
var rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function ll() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), $ = Symbol.iterator, N = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = $ && t[$] || t[N];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        C("error", t, l);
      }
    }
    function C(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var z = !1, A = !1, O = !1, F = !1, W = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === d || F || t === v || z || A || O || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function D(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function U(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return U(a) + ".Consumer";
          case u:
            var l = t;
            return U(l._context) + ".Provider";
          case c:
            return D(t, t.render, "ForwardRef");
          case h:
            var y = t.displayName || null;
            return y !== null ? y : P(t.type) || "Memo";
          case g: {
            var _ = t, x = _._payload, b = _._init;
            try {
              return P(b(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, B = 0, te, re, ne, G, ge, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (B === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ge = console.group, me = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function Ge() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ge
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function J(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, K;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Je();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = K.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ie.current, ie.current = null, Xe();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), T = y.stack.split(`
`), S = m.length - 1, E = T.length - 1; S >= 1 && E >= 0 && m[S] !== T[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== T[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== T[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? J(H) : "";
      return typeof t == "function" && K.set(t, je), je;
    }
    function Ke(t, a, l) {
      return _e(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Ze(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ke(t.render);
          case h:
            return Z(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, x = y._init;
            try {
              return Z(x(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, we = {}, xe = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        xe.setExtraStackFrame(l);
      } else
        xe.setExtraStackFrame(null);
    }
    function Qe(t, a, l, y, _) {
      {
        var x = Function.call.bind(Q);
        for (var b in t)
          if (x(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var T = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(_), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), ee(null)), m instanceof Error && !(m.message in we) && (we[m.message] = !0, ee(_), w("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function rt(t) {
      try {
        return ke(t), !1;
      } catch {
        return !0;
      }
    }
    function ke(t) {
      return "" + t;
    }
    function Se(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ue;
    ue = {};
    function it(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function ot(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function at(t, a) {
      if (typeof t.ref == "string" && X.current && a && X.current.stateNode !== a) {
        var l = P(X.current.type);
        ue[l] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ue[l] = !0);
      }
    }
    function st(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function ut(t, a) {
      {
        var l = function() {
          Re || (Re = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ct = function(t, a, l, y, _, x, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: x
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function lt(t, a, l, y, _) {
      {
        var x, b = {}, m = null, T = null;
        l !== void 0 && (Se(l), m = "" + l), ot(a) && (Se(a.key), m = "" + a.key), it(a) && (T = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (x in S)
            b[x] === void 0 && (b[x] = S[x]);
        }
        if (m || T) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), T && ut(b, E);
        }
        return ct(t, m, T, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, $e = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        $e.setExtraStackFrame(l);
      } else
        $e.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = P(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ft(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function pt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ce(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ce(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ce(b.value, a);
        }
      }
    }
    function dt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === h))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = P(a);
          Qe(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = P(a);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            V(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, l, y, _, x) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ft(_);
          T ? m += T : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = lt(t, a, l, _, x);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ne(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(j, t);
        }
        return t === i ? ht(E) : dt(E), E;
      }
    }
    function yt(t, a, l) {
      return Pe(t, a, l, !0);
    }
    function gt(t, a, l) {
      return Pe(t, a, l, !1);
    }
    var mt = gt, vt = yt;
    rr.Fragment = i, rr.jsx = mt, rr.jsxs = vt;
  }()), rr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = cl() : e.exports = ll();
})(Li);
const fl = Li.exports.jsx, pl = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, dl = (e = "pebble") => ({
  colors: ul[e],
  ...pl
}), nr = (e) => Object.entries(e).reduce(
  (r, [n, i]) => `${r} --${n}: ${i};`,
  ""
), hl = ({
  colors: {
    light: e,
    dark: r = e,
    lightContrast: n = e,
    darkContrast: i = e
  },
  fonts: o,
  fontSizes: s
} = dl()) => Xr`
  :root {
    ${nr(e)}
    font-family: ${o.join(", ")};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${nr(r)}
    }
  }

  @media (prefers-color-scheme: light) and (prefers-contrast: more) {
    :root {
      ${nr(n)}
    }
  }

  @media (prefers-color-scheme: dark) and (prefers-contrast: more) {
    :root {
      ${nr(i)}
    }
  }
`;
hl();
const yl = (e) => `
  border: 1px solid ${e};
  color: ${e};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, gl = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, ml = "font-family: sans-serif;", vl = he.button(
  ({ status: e, minWidth: r, margin: n }) => xr`
    ${ml}
    ${yl(gl[e])}
    min-width: ${r};
    margin: ${n};
    cursor: pointer;
    &:hover {
      filter: brightness(85%);
    }
    &:disabled {
      color: grey;
      cursor: default;
      filter: brightness(95%);
    }
  `
), ir = ({
  children: e,
  status: r = "default",
  dataSelector: n = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...s
}) => /* @__PURE__ */ fl(vl, {
  status: r,
  ...s,
  minWidth: i,
  margin: o,
  "data-selector": n,
  children: e
}), bl = he.div`
  margin: 10px;
  position: absolute;
`, Xn = he.div(
  ({ rotate: e }) => xr`
    rotate: ${e}deg;
  `
), He = 0.2, Gn = 100, _l = ({
  controls: {
    zoomLevel: e
  },
  setControls: r,
  visibleRange: n,
  length: i
}) => {
  const o = {
    minWidth: "auto",
    margin: "5px"
  }, s = De(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => {
    const h = p + Gn / d;
    return {
      panLevel: n.first <= 0 ? p : h,
      zoomLevel: d,
      transition: !0
    };
  }), [n.first]), u = De(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => {
    const h = p - Gn / d;
    return {
      panLevel: h > 1 ? h : 1,
      zoomLevel: d,
      transition: !0
    };
  }), []), f = De(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => ({
    zoomLevel: +(d - He > 0 ? d - He : He / 2).toFixed(2),
    panLevel: p,
    transition: !0
  })), []), c = De(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => ({
    zoomLevel: +(d === He / 2 ? He : d + He).toFixed(2),
    panLevel: p,
    transition: !0
  })), []);
  return Fe(() => {
    const p = ({
      key: d
    }) => {
      var g;
      const h = {
        ArrowLeft: s,
        ArrowRight: u
      };
      (g = h[d]) == null || g.call(h);
    };
    return addEventListener("keydown", p), () => removeEventListener("keydown", p);
  }, [n.first]), /* @__PURE__ */ Ue(bl, {
    children: [/* @__PURE__ */ Y(ir, {
      ...o,
      onClick: s,
      disabled: n.first <= 0,
      children: /* @__PURE__ */ Y(Xn, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ Y(ir, {
      ...o,
      onClick: f,
      disabled: e < He,
      children: "\u2796"
    }), /* @__PURE__ */ Y(ir, {
      ...o,
      onClick: c,
      disabled: e >= He * 10,
      children: "\u2795"
    }), /* @__PURE__ */ Y(ir, {
      ...o,
      onClick: u,
      disabled: n.last >= i - 1 || n.last - n.first > i,
      children: /* @__PURE__ */ Y(Xn, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, wl = ({
  width: e,
  height: r
}) => {
  const n = de, i = de, o = {
    x: n,
    y: i,
    width: e ? e - Be[1] : 0,
    height: r ? r - Be[0] : 0
  };
  return /* @__PURE__ */ Ue(Ii, {
    children: [/* @__PURE__ */ Y("line", {
      x1: n,
      y1: i,
      x2: n + o.width,
      y2: i,
      stroke: "#dedede",
      strokeWidth: 1
    }), /* @__PURE__ */ Y("line", {
      x1: n,
      y1: i,
      x2: n,
      y2: i + o.height - de,
      stroke: "#dedede",
      strokeWidth: 1
    }), /* @__PURE__ */ Ue("defs", {
      children: [/* @__PURE__ */ Y("clipPath", {
        id: "chart-contents",
        children: /* @__PURE__ */ Y("rect", {
          ...o
        })
      }), /* @__PURE__ */ Y("clipPath", {
        id: "bottom-axis",
        children: /* @__PURE__ */ Y("rect", {
          ...o,
          height: `${r}`
        })
      })]
    })]
  });
}, xl = he.svg`
  width: 100%;
  height: 100%;
  user-select: none;
  touch-action: none;

  & rect.candles {
    cursor: pointer;
    transition: filter 0.2s;

    &.is-offscreen {
      display: none;
    }

    &:hover {
      filter: brightness(0.8);
    }

    &.is-increased {
      fill: green;

      &.is-zoomed {
        stroke: darkgreen;
      }
    }

    &.is-decreased {
      fill: red;

      &.is-zoomed {
        stroke: darkred;
      }
    }

    &.is-active {
      filter: brightness(1);
      stroke: black;
      stroke-width: 2;
    }
  }

  & line.wicks {
    stroke: black;
    stroke-width: 1;
  }

  & line.clone {
    stroke: #dedede;
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`, kl = he.div`
  border: 1px solid lightgrey;
  background: linear-gradient(
    135deg,
    #fafbfc 0%,
    #ebf1f5 50%,
    #e2ecf2 51%,
    #f5f8fb 100%
  );
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`, Sl = he.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, El = (e, r) => {
  Fe(() => {
    let n = !1, i = 0, o = 0, s = {};
    const u = (R) => {
      r(({ panLevel: k, zoomLevel: w }) => {
        let C = w - R;
        return C = C < 0.1 ? 0.1 : C, {
          zoomLevel: Math.round(C * 1e3) / 1e3,
          panLevel: k,
          transition: !1
        };
      });
    }, f = Yr(u, 100), c = (R) => {
      r(({ panLevel: k, zoomLevel: w }) => {
        const C = k + R / w;
        return {
          panLevel: C > 1 ? C : 1,
          zoomLevel: w,
          transition: !1
        };
      });
    }, p = ({ pointerId: R, pageX: k, pageY: w }) => {
      n = !0, i = 0, o = 0, s[R] = { pageX: k, pageY: w };
    }, d = (R) => {
      n = !1, delete s[R.pointerId], r((k) => ({
        ...k,
        transition: !0
      }));
    }, h = ({ clientX: R, pointerId: k, pageX: w, pageY: C }) => {
      const z = Object.values(s);
      if (n)
        if ((z == null ? void 0 : z.length) === 2) {
          if (Object.keys(s).indexOf(`${k}`) !== 1)
            return;
          s[k] = { pageX: w, pageY: C };
          const A = z[0].pageX - z[1].pageX, O = z[0].pageY - z[1].pageY, F = Math.sqrt(A * A + O * O), W = o ? (o - F) / 120 : 0;
          o = F, u(W);
          return;
        } else {
          const A = i ? R - i : 0;
          i = R, c(A);
        }
    }, g = Yr(h, 100), v = (R) => {
      R.ctrlKey && (f(R.deltaY * 6e-3), R.preventDefault());
    }, $ = (R) => R.pointerType === "mouse" ? g(R) : h(R), N = (R = "remove", k) => {
      var z;
      const w = window[`${R}EventListener`], C = (z = e.current) == null ? void 0 : z[`${R}EventListener`];
      w("pointerup", d), C == null || C("pointerdown", p), C == null || C("pointermove", $), C == null || C("wheel", v, k);
    };
    return N("add", { passive: !1 }), N;
  }, [e.current]);
}, Rl = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, $l = {
  light: {
    bg: "#ffffff",
    text: "#2b322d",
    subtle: "#f8faf8",
    border: "#e0e9e2",
    shadow: "#b2c3b6",
    input: "#ffffff",
    outline: "#67c7ec",
    mark: "#657b8714",
    special: "#657b87",
    light: "#eff4f7",
    dark: "#3e484e"
  },
  dark: {
    bg: "#202020",
    text: "#d6e2d9",
    subtle: "#212522",
    border: "#29322c",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#57a9c8",
    mark: "#758f9c14",
    special: "#758f9c",
    light: "#c2d7e3",
    dark: "#2c363c"
  },
  lightContrast: {
    bg: "#ffffff",
    text: "#1c211e",
    subtle: "#f8faf8",
    border: "#abb9af",
    shadow: "#90a094",
    input: "#ffffff",
    outline: "#5eb6d7",
    mark: "#4c5d6629",
    special: "#4c5d66",
    light: "#eff4f7",
    dark: "#3e484e"
  },
  darkContrast: {
    bg: "#202020",
    text: "#ebf0ec",
    subtle: "#212522",
    border: "#4c524d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#55a5c4",
    mark: "#94b3c329",
    special: "#94b3c3",
    light: "#d9e6ed",
    dark: "#2c363c"
  }
}, Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: $l
}, Symbol.toStringTag, { value: "Module" })), Tl = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, Cl = (e = "pebble") => ({
  colors: Ol[e],
  ...Tl
}), or = (e) => Object.entries(e).reduce(
  (r, [n, i]) => `${r} --${n}: ${i};`,
  ""
), Nl = ({
  colors: {
    light: e,
    dark: r = e,
    lightContrast: n = e,
    darkContrast: i = e
  },
  fonts: o,
  fontSizes: s
} = Cl()) => Xr`
  :root {
    ${or(e)}
    font-family: ${o.join(", ")};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${or(r)}
    }
  }

  @media (prefers-color-scheme: light) and (prefers-contrast: more) {
    :root {
      ${or(n)}
    }
  }

  @media (prefers-color-scheme: dark) and (prefers-contrast: more) {
    :root {
      ${or(i)}
    }
  }
`;
Nl();
const Pl = (e) => `
  border: 1px solid ${e};
  color: ${e};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, jl = he.div`
  position: absolute;
  ${Pl(Rl.default)}
  padding: 3px;
  font-size: 0.65em;
  font-weight: bold;
  transition: all 0.2s;
`, Al = ({
  value: e,
  x: r,
  y: n
}) => n > de ? /* @__PURE__ */ Y(jl, {
  style: {
    left: r - de * 2 + 2,
    top: n + de - 4
  },
  children: e.toLocaleString("en-US")
}) : /* @__PURE__ */ Y(Ii, {}), Fl = ({
  data: e = []
}) => {
  const r = It(null), [n, i] = Ye(Ma), o = Vu(r, e.length, n), s = $c(e, o);
  Da(r, e, s.scales, o);
  const u = Eu(r, e, o, s, n.transition);
  return El(r, i), /* @__PURE__ */ Ue(kl, {
    children: [e != null && e.length ? /* @__PURE__ */ Y(_l, {
      svgRef: r,
      controls: n,
      setControls: i,
      visibleRange: o.visibleRange,
      length: e.length
    }) : /* @__PURE__ */ Y(Sl, {
      children: /* @__PURE__ */ Y(Hi, {})
    }), /* @__PURE__ */ Y(xl, {
      ref: r,
      children: /* @__PURE__ */ Y(wl, {
        ...o.sizes
      })
    }), /* @__PURE__ */ Y(al, {
      ...u
    }), e.length && /* @__PURE__ */ Y(Al, {
      value: e[e.length - 1].close,
      x: o.sizes.width,
      y: s.scales.yScale(e[e.length - 1].close)
    })]
  });
};
export {
  Fl as default
};
