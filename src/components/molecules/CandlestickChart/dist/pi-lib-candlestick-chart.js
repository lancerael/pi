import qe, { useState as Ye, useEffect as Fe, useRef as It, useCallback as De } from "react";
import ge, { keyframes as Gn, css as br, createGlobalStyle as Vr } from "styled-components";
const Fi = Gn`
  to {
    rotate: 360deg;
  }
`, Ii = Gn`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, Li = ge.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`, zi = ge.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Fi} 2s linear infinite;
  margin: 2px;
`, rn = ge.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Vt = ge.div(
  ({ delay: e }) => br`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${Ii} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${e ? "animation-delay: 0.3s;" : ""}
  `
);
var Ur = { exports: {} }, $t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Wi() {
  if (nn)
    return $t;
  nn = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, f, d) {
    var p, h = {}, y = null, v = null;
    d !== void 0 && (y = "" + d), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (p in f)
      i.call(f, p) && !s.hasOwnProperty(p) && (h[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        h[p] === void 0 && (h[p] = f[p]);
    return { $$typeof: r, type: l, key: y, ref: v, props: h, _owner: o.current };
  }
  return $t.Fragment = n, $t.jsx = c, $t.jsxs = c, $t;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Bi() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), T = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = T && t[T] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), g = 1; g < a; g++)
          u[g - 1] = arguments[g];
        N("error", t, u);
      }
    }
    function N(t, a, u) {
      {
        var g = k.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (a += "%s", u = u.concat([w]));
        var _ = u.map(function(b) {
          return String(b);
        });
        _.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, _);
      }
    }
    var z = !1, M = !1, O = !1, F = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === d || t === p || F || t === v || z || M || O || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === h || t.$$typeof === c || t.$$typeof === l || t.$$typeof === f || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function D(t, a, u) {
      var g = t.displayName;
      if (g)
        return g;
      var w = a.displayName || a.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function B(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var a = t;
            return B(a) + ".Consumer";
          case c:
            var u = t;
            return B(u._context) + ".Provider";
          case f:
            return D(t, t.render, "ForwardRef");
          case h:
            var g = t.displayName || null;
            return g !== null ? g : P(t.type) || "Memo";
          case y: {
            var w = t, _ = w._payload, b = w._init;
            try {
              return P(b(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, H = 0, te, re, ne, G, ye, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, me = console.groupCollapsed, ve = console.groupEnd;
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
        H++;
      }
    }
    function Ge() {
      {
        if (H--, H === 0) {
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
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function K(t, a, u) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            oe = g && g[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function we(t, a) {
      if (!t || ae)
        return "";
      {
        var u = J.get(t);
        if (u !== void 0)
          return u;
      }
      var g;
      ae = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ie.current, ie.current = null, Xe();
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
              g = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              g = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            g = I;
          }
          t();
        }
      } catch (I) {
        if (I && g && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), $ = g.stack.split(`
`), S = m.length - 1, E = $.length - 1; S >= 1 && E >= 0 && m[S] !== $[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== $[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== $[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = _, Ge(), Error.prepareStackTrace = w;
      }
      var U = t ? t.displayName || t.name : "", je = U ? K(U) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, u) {
      return we(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return we(t, Ze(t));
      if (typeof t == "string")
        return K(t);
      switch (t) {
        case d:
          return K("Suspense");
        case p:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return Je(t.render);
          case h:
            return Z(t.type, a, u);
          case y: {
            var g = t, w = g._payload, _ = g._init;
            try {
              return Z(_(w), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, xe = {}, _e = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        _e.setExtraStackFrame(u);
      } else
        _e.setExtraStackFrame(null);
    }
    function Qe(t, a, u, g, w) {
      {
        var _ = Function.call.bind(Q);
        for (var b in t)
          if (_(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var $ = Error((g || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, b, typeof m), ee(null)), m instanceof Error && !(m.message in xe) && (xe[m.message] = !0, ee(w), x("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
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
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ce;
    ce = {};
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
        var u = P(X.current.type);
        ce[u] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ce[u] = !0);
      }
    }
    function st(t, a) {
      {
        var u = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function ct(t, a) {
      {
        var u = function() {
          Re || (Re = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var ft = function(t, a, u, g, w, _, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: u,
        props: b,
        _owner: _
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
        value: g
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, u, g, w) {
      {
        var _, b = {}, m = null, $ = null;
        u !== void 0 && (Se(u), m = "" + u), ot(a) && (Se(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, w));
        for (_ in a)
          Q.call(a, _) && !nt.hasOwnProperty(_) && (b[_] = a[_]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (_ in S)
            b[_] === void 0 && (b[_] = S[_]);
        }
        if (m || $) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), $ && ct(b, E);
        }
        return ft(t, m, $, w, g, X.current, b);
      }
    }
    var fe = k.ReactCurrentOwner, Te = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        Te.setExtraStackFrame(u);
      } else
        Te.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (fe.current) {
          var t = P(fe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var $e = {};
    function dt(t) {
      {
        var a = Oe();
        if (!a) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = dt(a);
        if ($e[u])
          return;
        $e[u] = !0;
        var g = "";
        t && t._owner && t._owner !== fe.current && (g = " It was passed a child from " + P(t._owner.type) + "."), V(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var u = 0; u < t.length; u++) {
            var g = t[u];
            le(g) && Ne(g, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = R(t);
          if (typeof w == "function" && w !== t.entries)
            for (var _ = w.call(t), b; !(b = _.next()).done; )
              le(b.value) && Ne(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || a.$$typeof === h))
          u = a.propTypes;
        else
          return;
        if (u) {
          var g = P(a);
          Qe(u, t.props, "prop", g, t);
        } else if (a.PropTypes !== void 0 && !ue) {
          ue = !0;
          var w = P(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), u = 0; u < a.length; u++) {
          var g = a[u];
          if (g !== "children" && g !== "key") {
            V(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, u, g, w, _) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = lt(w);
          $ ? m += $ : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = ut(t, a, u, w, _);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (g)
              if (se(j)) {
                for (var U = 0; U < j.length; U++)
                  Ce(j[U], t);
                Object.freeze && Object.freeze(j);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function gt(t, a, u) {
      return Pe(t, a, u, !0);
    }
    function yt(t, a, u) {
      return Pe(t, a, u, !1);
    }
    var mt = yt, vt = gt;
    Ut.Fragment = i, Ut.jsx = mt, Ut.jsxs = vt;
  }()), Ut;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Wi() : e.exports = Bi();
})(Ur);
const Nt = Ur.exports.jsx, Sr = Ur.exports.jsxs, Yi = () => /* @__PURE__ */ Nt(Li, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ Sr(zi, {
    children: [/* @__PURE__ */ Sr(rn, {
      children: [/* @__PURE__ */ Nt(Vt, {
        delay: !0
      }), /* @__PURE__ */ Nt(Vt, {})]
    }), /* @__PURE__ */ Sr(rn, {
      children: [/* @__PURE__ */ Nt(Vt, {}), /* @__PURE__ */ Nt(Vt, {
        delay: !0
      })]
    })]
  })
});
function Vi(e) {
  return e;
}
var Er = 1, nr = 2, Cr = 3, Ht = 4, an = 1e-6;
function Ui(e) {
  return "translate(" + e + ",0)";
}
function Hi(e) {
  return "translate(0," + e + ")";
}
function qi(e) {
  return (r) => +e(r);
}
function Xi(e, r) {
  return r = Math.max(0, e.bandwidth() - r * 2) / 2, e.round() && (r = Math.round(r)), (n) => +e(n) + r;
}
function Gi() {
  return !this.__axis;
}
function Kn(e, r) {
  var n = [], i = null, o = null, s = 6, c = 6, l = 3, f = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, d = e === Er || e === Ht ? -1 : 1, p = e === Ht || e === nr ? "x" : "y", h = e === Er || e === Cr ? Ui : Hi;
  function y(v) {
    var T = i == null ? r.ticks ? r.ticks.apply(r, n) : r.domain() : i, C = o == null ? r.tickFormat ? r.tickFormat.apply(r, n) : Vi : o, R = Math.max(s, 0) + l, k = r.range(), x = +k[0] + f, N = +k[k.length - 1] + f, z = (r.bandwidth ? Xi : qi)(r.copy(), f), M = v.selection ? v.selection() : v, O = M.selectAll(".domain").data([null]), F = M.selectAll(".tick").data(T, r).order(), W = F.exit(), A = F.enter().append("g").attr("class", "tick"), q = F.select("line"), D = F.select("text");
    O = O.merge(O.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), F = F.merge(A), q = q.merge(A.append("line").attr("stroke", "currentColor").attr(p + "2", d * s)), D = D.merge(A.append("text").attr("fill", "currentColor").attr(p, d * R).attr("dy", e === Er ? "0em" : e === Cr ? "0.71em" : "0.32em")), v !== M && (O = O.transition(v), F = F.transition(v), q = q.transition(v), D = D.transition(v), W = W.transition(v).attr("opacity", an).attr("transform", function(B) {
      return isFinite(B = z(B)) ? h(B + f) : this.getAttribute("transform");
    }), A.attr("opacity", an).attr("transform", function(B) {
      var P = this.parentNode.__axis;
      return h((P && isFinite(P = P(B)) ? P : z(B)) + f);
    })), W.remove(), O.attr("d", e === Ht || e === nr ? c ? "M" + d * c + "," + x + "H" + f + "V" + N + "H" + d * c : "M" + f + "," + x + "V" + N : c ? "M" + x + "," + d * c + "V" + f + "H" + N + "V" + d * c : "M" + x + "," + f + "H" + N), F.attr("opacity", 1).attr("transform", function(B) {
      return h(z(B) + f);
    }), q.attr(p + "2", d * s), D.attr(p, d * R).text(C), M.filter(Gi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === nr ? "start" : e === Ht ? "end" : "middle"), M.each(function() {
      this.__axis = z;
    });
  }
  return y.scale = function(v) {
    return arguments.length ? (r = v, y) : r;
  }, y.ticks = function() {
    return n = Array.from(arguments), y;
  }, y.tickArguments = function(v) {
    return arguments.length ? (n = v == null ? [] : Array.from(v), y) : n.slice();
  }, y.tickValues = function(v) {
    return arguments.length ? (i = v == null ? null : Array.from(v), y) : i && i.slice();
  }, y.tickFormat = function(v) {
    return arguments.length ? (o = v, y) : o;
  }, y.tickSize = function(v) {
    return arguments.length ? (s = c = +v, y) : s;
  }, y.tickSizeInner = function(v) {
    return arguments.length ? (s = +v, y) : s;
  }, y.tickSizeOuter = function(v) {
    return arguments.length ? (c = +v, y) : c;
  }, y.tickPadding = function(v) {
    return arguments.length ? (l = +v, y) : l;
  }, y.offset = function(v) {
    return arguments.length ? (f = +v, y) : f;
  }, y;
}
function Ki(e) {
  return Kn(nr, e);
}
function Ji(e) {
  return Kn(Cr, e);
}
var Pr = "http://www.w3.org/1999/xhtml";
const sn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wr(e) {
  var r = e += "", n = r.indexOf(":");
  return n >= 0 && (r = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), sn.hasOwnProperty(r) ? { space: sn[r], local: e } : e;
}
function Zi(e) {
  return function() {
    var r = this.ownerDocument, n = this.namespaceURI;
    return n === Pr && r.documentElement.namespaceURI === Pr ? r.createElement(e) : r.createElementNS(n, e);
  };
}
function Qi(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Jn(e) {
  var r = wr(e);
  return (r.local ? Qi : Zi)(r);
}
function eo() {
}
function Hr(e) {
  return e == null ? eo : function() {
    return this.querySelector(e);
  };
}
function to(e) {
  typeof e != "function" && (e = Hr(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], c = s.length, l = i[o] = new Array(c), f, d, p = 0; p < c; ++p)
      (f = s[p]) && (d = e.call(f, f.__data__, p, s)) && ("__data__" in f && (d.__data__ = f.__data__), l[p] = d);
  return new he(i, this._parents);
}
function ro(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function no() {
  return [];
}
function Zn(e) {
  return e == null ? no : function() {
    return this.querySelectorAll(e);
  };
}
function io(e) {
  return function() {
    return ro(e.apply(this, arguments));
  };
}
function oo(e) {
  typeof e == "function" ? e = io(e) : e = Zn(e);
  for (var r = this._groups, n = r.length, i = [], o = [], s = 0; s < n; ++s)
    for (var c = r[s], l = c.length, f, d = 0; d < l; ++d)
      (f = c[d]) && (i.push(e.call(f, f.__data__, d, c)), o.push(f));
  return new he(i, o);
}
function Qn(e) {
  return function() {
    return this.matches(e);
  };
}
function ei(e) {
  return function(r) {
    return r.matches(e);
  };
}
var ao = Array.prototype.find;
function so(e) {
  return function() {
    return ao.call(this.children, e);
  };
}
function co() {
  return this.firstElementChild;
}
function fo(e) {
  return this.select(e == null ? co : so(typeof e == "function" ? e : ei(e)));
}
var uo = Array.prototype.filter;
function lo() {
  return Array.from(this.children);
}
function po(e) {
  return function() {
    return uo.call(this.children, e);
  };
}
function ho(e) {
  return this.selectAll(e == null ? lo : po(typeof e == "function" ? e : ei(e)));
}
function go(e) {
  typeof e != "function" && (e = Qn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], c = s.length, l = i[o] = [], f, d = 0; d < c; ++d)
      (f = s[d]) && e.call(f, f.__data__, d, s) && l.push(f);
  return new he(i, this._parents);
}
function ti(e) {
  return new Array(e.length);
}
function yo() {
  return new he(this._enter || this._groups.map(ti), this._parents);
}
function cr(e, r) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = r;
}
cr.prototype = {
  constructor: cr,
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
function mo(e) {
  return function() {
    return e;
  };
}
function vo(e, r, n, i, o, s) {
  for (var c = 0, l, f = r.length, d = s.length; c < d; ++c)
    (l = r[c]) ? (l.__data__ = s[c], i[c] = l) : n[c] = new cr(e, s[c]);
  for (; c < f; ++c)
    (l = r[c]) && (o[c] = l);
}
function bo(e, r, n, i, o, s, c) {
  var l, f, d = /* @__PURE__ */ new Map(), p = r.length, h = s.length, y = new Array(p), v;
  for (l = 0; l < p; ++l)
    (f = r[l]) && (y[l] = v = c.call(f, f.__data__, l, r) + "", d.has(v) ? o[l] = f : d.set(v, f));
  for (l = 0; l < h; ++l)
    v = c.call(e, s[l], l, s) + "", (f = d.get(v)) ? (i[l] = f, f.__data__ = s[l], d.delete(v)) : n[l] = new cr(e, s[l]);
  for (l = 0; l < p; ++l)
    (f = r[l]) && d.get(y[l]) === f && (o[l] = f);
}
function wo(e) {
  return e.__data__;
}
function xo(e, r) {
  if (!arguments.length)
    return Array.from(this, wo);
  var n = r ? bo : vo, i = this._parents, o = this._groups;
  typeof e != "function" && (e = mo(e));
  for (var s = o.length, c = new Array(s), l = new Array(s), f = new Array(s), d = 0; d < s; ++d) {
    var p = i[d], h = o[d], y = h.length, v = _o(e.call(p, p && p.__data__, d, i)), T = v.length, C = l[d] = new Array(T), R = c[d] = new Array(T), k = f[d] = new Array(y);
    n(p, h, C, R, k, v, r);
    for (var x = 0, N = 0, z, M; x < T; ++x)
      if (z = C[x]) {
        for (x >= N && (N = x + 1); !(M = R[N]) && ++N < T; )
          ;
        z._next = M || null;
      }
  }
  return c = new he(c, i), c._enter = l, c._exit = f, c;
}
function _o(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ko() {
  return new he(this._exit || this._groups.map(ti), this._parents);
}
function So(e, r, n) {
  var i = this.enter(), o = this, s = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), r != null && (o = r(o), o && (o = o.selection())), n == null ? s.remove() : n(s), i && o ? i.merge(o).order() : o;
}
function Eo(e) {
  for (var r = e.selection ? e.selection() : e, n = this._groups, i = r._groups, o = n.length, s = i.length, c = Math.min(o, s), l = new Array(o), f = 0; f < c; ++f)
    for (var d = n[f], p = i[f], h = d.length, y = l[f] = new Array(h), v, T = 0; T < h; ++T)
      (v = d[T] || p[T]) && (y[T] = v);
  for (; f < o; ++f)
    l[f] = n[f];
  return new he(l, this._parents);
}
function Ro() {
  for (var e = this._groups, r = -1, n = e.length; ++r < n; )
    for (var i = e[r], o = i.length - 1, s = i[o], c; --o >= 0; )
      (c = i[o]) && (s && c.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(c, s), s = c);
  return this;
}
function To(e) {
  e || (e = Oo);
  function r(h, y) {
    return h && y ? e(h.__data__, y.__data__) : !h - !y;
  }
  for (var n = this._groups, i = n.length, o = new Array(i), s = 0; s < i; ++s) {
    for (var c = n[s], l = c.length, f = o[s] = new Array(l), d, p = 0; p < l; ++p)
      (d = c[p]) && (f[p] = d);
    f.sort(r);
  }
  return new he(o, this._parents).order();
}
function Oo(e, r) {
  return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function $o() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function No() {
  return Array.from(this);
}
function Co() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length; o < s; ++o) {
      var c = i[o];
      if (c)
        return c;
    }
  return null;
}
function Po() {
  let e = 0;
  for (const r of this)
    ++e;
  return e;
}
function jo() {
  return !this.node();
}
function Mo(e) {
  for (var r = this._groups, n = 0, i = r.length; n < i; ++n)
    for (var o = r[n], s = 0, c = o.length, l; s < c; ++s)
      (l = o[s]) && e.call(l, l.__data__, s, o);
  return this;
}
function Ao(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Do(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Fo(e, r) {
  return function() {
    this.setAttribute(e, r);
  };
}
function Io(e, r) {
  return function() {
    this.setAttributeNS(e.space, e.local, r);
  };
}
function Lo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function zo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Wo(e, r) {
  var n = wr(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((r == null ? n.local ? Do : Ao : typeof r == "function" ? n.local ? zo : Lo : n.local ? Io : Fo)(n, r));
}
function ri(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Bo(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yo(e, r, n) {
  return function() {
    this.style.setProperty(e, r, n);
  };
}
function Vo(e, r, n) {
  return function() {
    var i = r.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function Uo(e, r, n) {
  return arguments.length > 1 ? this.each((r == null ? Bo : typeof r == "function" ? Vo : Yo)(e, r, n == null ? "" : n)) : Rt(this.node(), e);
}
function Rt(e, r) {
  return e.style.getPropertyValue(r) || ri(e).getComputedStyle(e, null).getPropertyValue(r);
}
function Ho(e) {
  return function() {
    delete this[e];
  };
}
function qo(e, r) {
  return function() {
    this[e] = r;
  };
}
function Xo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Go(e, r) {
  return arguments.length > 1 ? this.each((r == null ? Ho : typeof r == "function" ? Xo : qo)(e, r)) : this.node()[e];
}
function ni(e) {
  return e.trim().split(/^|\s+/);
}
function qr(e) {
  return e.classList || new ii(e);
}
function ii(e) {
  this._node = e, this._names = ni(e.getAttribute("class") || "");
}
ii.prototype = {
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
function oi(e, r) {
  for (var n = qr(e), i = -1, o = r.length; ++i < o; )
    n.add(r[i]);
}
function ai(e, r) {
  for (var n = qr(e), i = -1, o = r.length; ++i < o; )
    n.remove(r[i]);
}
function Ko(e) {
  return function() {
    oi(this, e);
  };
}
function Jo(e) {
  return function() {
    ai(this, e);
  };
}
function Zo(e, r) {
  return function() {
    (r.apply(this, arguments) ? oi : ai)(this, e);
  };
}
function Qo(e, r) {
  var n = ni(e + "");
  if (arguments.length < 2) {
    for (var i = qr(this.node()), o = -1, s = n.length; ++o < s; )
      if (!i.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof r == "function" ? Zo : r ? Ko : Jo)(n, r));
}
function ea() {
  this.textContent = "";
}
function ta(e) {
  return function() {
    this.textContent = e;
  };
}
function ra(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.textContent = r == null ? "" : r;
  };
}
function na(e) {
  return arguments.length ? this.each(e == null ? ea : (typeof e == "function" ? ra : ta)(e)) : this.node().textContent;
}
function ia() {
  this.innerHTML = "";
}
function oa(e) {
  return function() {
    this.innerHTML = e;
  };
}
function aa(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.innerHTML = r == null ? "" : r;
  };
}
function sa(e) {
  return arguments.length ? this.each(e == null ? ia : (typeof e == "function" ? aa : oa)(e)) : this.node().innerHTML;
}
function ca() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function fa() {
  return this.each(ca);
}
function ua() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function la() {
  return this.each(ua);
}
function da(e) {
  var r = typeof e == "function" ? e : Jn(e);
  return this.select(function() {
    return this.appendChild(r.apply(this, arguments));
  });
}
function pa() {
  return null;
}
function ha(e, r) {
  var n = typeof e == "function" ? e : Jn(e), i = r == null ? pa : typeof r == "function" ? r : Hr(r);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function ga() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ya() {
  return this.each(ga);
}
function ma() {
  var e = this.cloneNode(!1), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function va() {
  var e = this.cloneNode(!0), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function ba(e) {
  return this.select(e ? va : ma);
}
function wa(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function xa(e) {
  return function(r) {
    e.call(this, r, this.__data__);
  };
}
function _a(e) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var n = "", i = r.indexOf(".");
    return i >= 0 && (n = r.slice(i + 1), r = r.slice(0, i)), { type: r, name: n };
  });
}
function ka(e) {
  return function() {
    var r = this.__on;
    if (!!r) {
      for (var n = 0, i = -1, o = r.length, s; n < o; ++n)
        s = r[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : r[++i] = s;
      ++i ? r.length = i : delete this.__on;
    }
  };
}
function Sa(e, r, n) {
  return function() {
    var i = this.__on, o, s = xa(r);
    if (i) {
      for (var c = 0, l = i.length; c < l; ++c)
        if ((o = i[c]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = s, o.options = n), o.value = r;
          return;
        }
    }
    this.addEventListener(e.type, s, n), o = { type: e.type, name: e.name, value: r, listener: s, options: n }, i ? i.push(o) : this.__on = [o];
  };
}
function Ea(e, r, n) {
  var i = _a(e + ""), o, s = i.length, c;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var f = 0, d = l.length, p; f < d; ++f)
        for (o = 0, p = l[f]; o < s; ++o)
          if ((c = i[o]).type === p.type && c.name === p.name)
            return p.value;
    }
    return;
  }
  for (l = r ? Sa : ka, o = 0; o < s; ++o)
    this.each(l(i[o], r, n));
  return this;
}
function si(e, r, n) {
  var i = ri(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(r, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(r, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(r, !1, !1)), e.dispatchEvent(o);
}
function Ra(e, r) {
  return function() {
    return si(this, e, r);
  };
}
function Ta(e, r) {
  return function() {
    return si(this, e, r.apply(this, arguments));
  };
}
function Oa(e, r) {
  return this.each((typeof r == "function" ? Ta : Ra)(e, r));
}
function* $a() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length, c; o < s; ++o)
      (c = i[o]) && (yield c);
}
var ci = [null];
function he(e, r) {
  this._groups = e, this._parents = r;
}
function Bt() {
  return new he([[document.documentElement]], ci);
}
function Na() {
  return this;
}
he.prototype = Bt.prototype = {
  constructor: he,
  select: to,
  selectAll: oo,
  selectChild: fo,
  selectChildren: ho,
  filter: go,
  data: xo,
  enter: yo,
  exit: ko,
  join: So,
  merge: Eo,
  selection: Na,
  order: Ro,
  sort: To,
  call: $o,
  nodes: No,
  node: Co,
  size: Po,
  empty: jo,
  each: Mo,
  attr: Wo,
  style: Uo,
  property: Go,
  classed: Qo,
  text: na,
  html: sa,
  raise: fa,
  lower: la,
  append: da,
  insert: ha,
  remove: ya,
  clone: ba,
  datum: wa,
  on: Ea,
  dispatch: Oa,
  [Symbol.iterator]: $a
};
function bt(e) {
  return typeof e == "string" ? new he([[document.querySelector(e)]], [document.documentElement]) : new he([[e]], ci);
}
const Ca = 500, pe = 10, He = [55, 50], fi = 0.3, Pa = 10, ja = {
  zoomLevel: 1,
  panLevel: 1,
  transition: !0
}, Rr = {}, qt = (e = "", r, n) => {
  var h;
  const i = Math.round((h = n.bandwidth) == null ? void 0 : h.call(n)) || 0, o = `${e}-${r}-${i}`;
  if (Rr[o] !== void 0)
    return Rr[o];
  let s = "";
  const c = new Date(e), [l, f, d] = e.split("-");
  d === "01" && (f === "01" ? s = l : s = c.toLocaleString("en-UK", {
    month: "short"
  }));
  let p = [];
  return i > 1 && p.push(16), i > 3 && p.push(8, 24), i > 7 && (p = [4, 7, 10, 13, 16, 19, 22, 25, 28]), p.includes(Number(d)) && (s = d), n.domain().length - 1 === r && (s = d), Rr[o] = s, s;
}, Ma = (e, r, n, i) => {
  const [o, s] = Ye(), [c, l] = Ye(), { xScale: f, yScale: d } = n, {
    sizes: { width: p, height: h },
    visibleRange: { offset: y, first: v, last: T }
  } = i;
  Fe(() => {
    !e.current || (bt(e.current).select("g.x-axis, y.y-axis").remove(), s(
      bt(e.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), l(bt(e.current).append("g").classed("y-axis", !0)));
  }, []), Fe(() => {
    !f.domain || !r || (o.call(Ji(f)).attr("transform", `translate(${y},${h - He[0]})`).selectAll("text").classed(
      "emphasise",
      (C, R) => qt(C, R, f).length > 2
    ).attr("text-anchor", "end").attr("x", () => -16).attr("y", -4).attr("transform", "rotate(270)").text((C, R) => qt(C, R, f)), o.selectAll("line.clone").remove(), o.selectAll("line").attr(
      "y2",
      (C, R) => qt(C, R, f).length ? 12 : 6
    ).each((C, R, k) => {
      if (R > v && R < T && qt(C, R, f).length) {
        var x = k[R].parentNode.appendChild(k[R].cloneNode(!0));
        bt(x).classed("clone", !0).attr("y1", -h + 1 + He[0] + pe).attr("y2", -1);
      }
    }), c.call(Ki(d)).attr(
      "transform",
      `translate(${p - He[1] + pe}, 0)`
    ), c.selectAll("line.clone").remove(), c.selectAll("line").each((C, R, k) => {
      var x = k[R].parentNode.appendChild(k[R].cloneNode(!0));
      bt(x).classed("clone", !0).attr("x2", -p + 1 + He[1]).attr("x1", -1);
    }));
  }, [f, d]);
};
var Aa = { value: () => {
} };
function ui() {
  for (var e = 0, r = arguments.length, n = {}, i; e < r; ++e) {
    if (!(i = arguments[e] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new ir(n);
}
function ir(e) {
  this._ = e;
}
function Da(e, r) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", o = n.indexOf(".");
    if (o >= 0 && (i = n.slice(o + 1), n = n.slice(0, o)), n && !r.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
ir.prototype = ui.prototype = {
  constructor: ir,
  on: function(e, r) {
    var n = this._, i = Da(e + "", n), o, s = -1, c = i.length;
    if (arguments.length < 2) {
      for (; ++s < c; )
        if ((o = (e = i[s]).type) && (o = Fa(n[o], e.name)))
          return o;
      return;
    }
    if (r != null && typeof r != "function")
      throw new Error("invalid callback: " + r);
    for (; ++s < c; )
      if (o = (e = i[s]).type)
        n[o] = cn(n[o], e.name, r);
      else if (r == null)
        for (o in n)
          n[o] = cn(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, r = this._;
    for (var n in r)
      e[n] = r[n].slice();
    return new ir(e);
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
function Fa(e, r) {
  for (var n = 0, i = e.length, o; n < i; ++n)
    if ((o = e[n]).name === r)
      return o.value;
}
function cn(e, r, n) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === r) {
      e[i] = Aa, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: r, value: n }), e;
}
var Tt = 0, Dt = 0, Ct = 0, li = 1e3, fr, Ft, ur = 0, _t = 0, xr = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, di = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Xr() {
  return _t || (di(Ia), _t = Lt.now() + xr);
}
function Ia() {
  _t = 0;
}
function lr() {
  this._call = this._time = this._next = null;
}
lr.prototype = pi.prototype = {
  constructor: lr,
  restart: function(e, r, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Xr() : +n) + (r == null ? 0 : +r), !this._next && Ft !== this && (Ft ? Ft._next = this : fr = this, Ft = this), this._call = e, this._time = n, jr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jr());
  }
};
function pi(e, r, n) {
  var i = new lr();
  return i.restart(e, r, n), i;
}
function La() {
  Xr(), ++Tt;
  for (var e = fr, r; e; )
    (r = _t - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
  --Tt;
}
function fn() {
  _t = (ur = Lt.now()) + xr, Tt = Dt = 0;
  try {
    La();
  } finally {
    Tt = 0, Wa(), _t = 0;
  }
}
function za() {
  var e = Lt.now(), r = e - ur;
  r > li && (xr -= r, ur = e);
}
function Wa() {
  for (var e, r = fr, n, i = 1 / 0; r; )
    r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (n = r._next, r._next = null, r = e ? e._next = n : fr = n);
  Ft = e, jr(i);
}
function jr(e) {
  if (!Tt) {
    Dt && (Dt = clearTimeout(Dt));
    var r = e - _t;
    r > 24 ? (e < 1 / 0 && (Dt = setTimeout(fn, e - Lt.now() - xr)), Ct && (Ct = clearInterval(Ct))) : (Ct || (ur = Lt.now(), Ct = setInterval(za, li)), Tt = 1, di(fn));
  }
}
function un(e, r, n) {
  var i = new lr();
  return r = r == null ? 0 : +r, i.restart((o) => {
    i.stop(), e(o + r);
  }, r, n), i;
}
var Ba = ui("start", "end", "cancel", "interrupt"), Ya = [], hi = 0, ln = 1, Mr = 2, or = 3, dn = 4, Ar = 5, ar = 6;
function _r(e, r, n, i, o, s) {
  var c = e.__transition;
  if (!c)
    e.__transition = {};
  else if (n in c)
    return;
  Va(e, n, {
    name: r,
    index: i,
    group: o,
    on: Ba,
    tween: Ya,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: hi
  });
}
function Gr(e, r) {
  var n = Ie(e, r);
  if (n.state > hi)
    throw new Error("too late; already scheduled");
  return n;
}
function ze(e, r) {
  var n = Ie(e, r);
  if (n.state > or)
    throw new Error("too late; already running");
  return n;
}
function Ie(e, r) {
  var n = e.__transition;
  if (!n || !(n = n[r]))
    throw new Error("transition not found");
  return n;
}
function Va(e, r, n) {
  var i = e.__transition, o;
  i[r] = n, n.timer = pi(s, 0, n.time);
  function s(d) {
    n.state = ln, n.timer.restart(c, n.delay, n.time), n.delay <= d && c(d - n.delay);
  }
  function c(d) {
    var p, h, y, v;
    if (n.state !== ln)
      return f();
    for (p in i)
      if (v = i[p], v.name === n.name) {
        if (v.state === or)
          return un(c);
        v.state === dn ? (v.state = ar, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete i[p]) : +p < r && (v.state = ar, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete i[p]);
      }
    if (un(function() {
      n.state === or && (n.state = dn, n.timer.restart(l, n.delay, n.time), l(d));
    }), n.state = Mr, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Mr) {
      for (n.state = or, o = new Array(y = n.tween.length), p = 0, h = -1; p < y; ++p)
        (v = n.tween[p].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function l(d) {
    for (var p = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(f), n.state = Ar, 1), h = -1, y = o.length; ++h < y; )
      o[h].call(e, p);
    n.state === Ar && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = ar, n.timer.stop(), delete i[r];
    for (var d in i)
      return;
    delete e.__transition;
  }
}
function Ua(e, r) {
  var n = e.__transition, i, o, s = !0, c;
  if (!!n) {
    r = r == null ? null : r + "";
    for (c in n) {
      if ((i = n[c]).name !== r) {
        s = !1;
        continue;
      }
      o = i.state > Mr && i.state < Ar, i.state = ar, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[c];
    }
    s && delete e.__transition;
  }
}
function Ha(e) {
  return this.each(function() {
    Ua(this, e);
  });
}
function Kr(e, r, n) {
  e.prototype = r.prototype = n, n.constructor = e;
}
function gi(e, r) {
  var n = Object.create(e.prototype);
  for (var i in r)
    n[i] = r[i];
  return n;
}
function Yt() {
}
var zt = 0.7, dr = 1 / zt, Et = "\\s*([+-]?\\d+)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", qa = /^#([0-9a-f]{3,8})$/, Xa = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`), Ga = new RegExp(`^rgb\\(${Le},${Le},${Le}\\)$`), Ka = new RegExp(`^rgba\\(${Et},${Et},${Et},${Wt}\\)$`), Ja = new RegExp(`^rgba\\(${Le},${Le},${Le},${Wt}\\)$`), Za = new RegExp(`^hsl\\(${Wt},${Le},${Le}\\)$`), Qa = new RegExp(`^hsla\\(${Wt},${Le},${Le},${Wt}\\)$`), pn = {
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
Kr(Yt, kt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hn,
  formatHex: hn,
  formatHex8: es,
  formatHsl: ts,
  formatRgb: gn,
  toString: gn
});
function hn() {
  return this.rgb().formatHex();
}
function es() {
  return this.rgb().formatHex8();
}
function ts() {
  return yi(this).formatHsl();
}
function gn() {
  return this.rgb().formatRgb();
}
function kt(e) {
  var r, n;
  return e = (e + "").trim().toLowerCase(), (r = qa.exec(e)) ? (n = r[1].length, r = parseInt(r[1], 16), n === 6 ? yn(r) : n === 3 ? new de(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : n === 8 ? Xt(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : n === 4 ? Xt(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Xa.exec(e)) ? new de(r[1], r[2], r[3], 1) : (r = Ga.exec(e)) ? new de(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Ka.exec(e)) ? Xt(r[1], r[2], r[3], r[4]) : (r = Ja.exec(e)) ? Xt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Za.exec(e)) ? bn(r[1], r[2] / 100, r[3] / 100, 1) : (r = Qa.exec(e)) ? bn(r[1], r[2] / 100, r[3] / 100, r[4]) : pn.hasOwnProperty(e) ? yn(pn[e]) : e === "transparent" ? new de(NaN, NaN, NaN, 0) : null;
}
function yn(e) {
  return new de(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xt(e, r, n, i) {
  return i <= 0 && (e = r = n = NaN), new de(e, r, n, i);
}
function rs(e) {
  return e instanceof Yt || (e = kt(e)), e ? (e = e.rgb(), new de(e.r, e.g, e.b, e.opacity)) : new de();
}
function Dr(e, r, n, i) {
  return arguments.length === 1 ? rs(e) : new de(e, r, n, i == null ? 1 : i);
}
function de(e, r, n, i) {
  this.r = +e, this.g = +r, this.b = +n, this.opacity = +i;
}
Kr(de, Dr, gi(Yt, {
  brighter(e) {
    return e = e == null ? dr : Math.pow(dr, e), new de(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zt : Math.pow(zt, e), new de(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new de(xt(this.r), xt(this.g), xt(this.b), pr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: mn,
  formatHex: mn,
  formatHex8: ns,
  formatRgb: vn,
  toString: vn
}));
function mn() {
  return `#${wt(this.r)}${wt(this.g)}${wt(this.b)}`;
}
function ns() {
  return `#${wt(this.r)}${wt(this.g)}${wt(this.b)}${wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vn() {
  const e = pr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${xt(this.r)}, ${xt(this.g)}, ${xt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function pr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function xt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function wt(e) {
  return e = xt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bn(e, r, n, i) {
  return i <= 0 ? e = r = n = NaN : n <= 0 || n >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new Ae(e, r, n, i);
}
function yi(e) {
  if (e instanceof Ae)
    return new Ae(e.h, e.s, e.l, e.opacity);
  if (e instanceof Yt || (e = kt(e)), !e)
    return new Ae();
  if (e instanceof Ae)
    return e;
  e = e.rgb();
  var r = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.min(r, n, i), s = Math.max(r, n, i), c = NaN, l = s - o, f = (s + o) / 2;
  return l ? (r === s ? c = (n - i) / l + (n < i) * 6 : n === s ? c = (i - r) / l + 2 : c = (r - n) / l + 4, l /= f < 0.5 ? s + o : 2 - s - o, c *= 60) : l = f > 0 && f < 1 ? 0 : c, new Ae(c, l, f, e.opacity);
}
function is(e, r, n, i) {
  return arguments.length === 1 ? yi(e) : new Ae(e, r, n, i == null ? 1 : i);
}
function Ae(e, r, n, i) {
  this.h = +e, this.s = +r, this.l = +n, this.opacity = +i;
}
Kr(Ae, is, gi(Yt, {
  brighter(e) {
    return e = e == null ? dr : Math.pow(dr, e), new Ae(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zt : Math.pow(zt, e), new Ae(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * r, o = 2 * n - i;
    return new de(
      Tr(e >= 240 ? e - 240 : e + 120, o, i),
      Tr(e, o, i),
      Tr(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new Ae(wn(this.h), Gt(this.s), Gt(this.l), pr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = pr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${wn(this.h)}, ${Gt(this.s) * 100}%, ${Gt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function wn(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Gt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Tr(e, r, n) {
  return (e < 60 ? r + (n - r) * e / 60 : e < 180 ? n : e < 240 ? r + (n - r) * (240 - e) / 60 : r) * 255;
}
const Jr = (e) => () => e;
function os(e, r) {
  return function(n) {
    return e + n * r;
  };
}
function as(e, r, n) {
  return e = Math.pow(e, n), r = Math.pow(r, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * r, n);
  };
}
function ss(e) {
  return (e = +e) == 1 ? mi : function(r, n) {
    return n - r ? as(r, n, e) : Jr(isNaN(r) ? n : r);
  };
}
function mi(e, r) {
  var n = r - e;
  return n ? os(e, n) : Jr(isNaN(e) ? r : e);
}
const hr = function e(r) {
  var n = ss(r);
  function i(o, s) {
    var c = n((o = Dr(o)).r, (s = Dr(s)).r), l = n(o.g, s.g), f = n(o.b, s.b), d = mi(o.opacity, s.opacity);
    return function(p) {
      return o.r = c(p), o.g = l(p), o.b = f(p), o.opacity = d(p), o + "";
    };
  }
  return i.gamma = e, i;
}(1);
function cs(e, r) {
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
function us(e, r) {
  var n = r ? r.length : 0, i = e ? Math.min(n, e.length) : 0, o = new Array(i), s = new Array(n), c;
  for (c = 0; c < i; ++c)
    o[c] = Zr(e[c], r[c]);
  for (; c < n; ++c)
    s[c] = r[c];
  return function(l) {
    for (c = 0; c < i; ++c)
      s[c] = o[c](l);
    return s;
  };
}
function ls(e, r) {
  var n = new Date();
  return e = +e, r = +r, function(i) {
    return n.setTime(e * (1 - i) + r * i), n;
  };
}
function Me(e, r) {
  return e = +e, r = +r, function(n) {
    return e * (1 - n) + r * n;
  };
}
function ds(e, r) {
  var n = {}, i = {}, o;
  (e === null || typeof e != "object") && (e = {}), (r === null || typeof r != "object") && (r = {});
  for (o in r)
    o in e ? n[o] = Zr(e[o], r[o]) : i[o] = r[o];
  return function(s) {
    for (o in n)
      i[o] = n[o](s);
    return i;
  };
}
var Fr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Or = new RegExp(Fr.source, "g");
function ps(e) {
  return function() {
    return e;
  };
}
function hs(e) {
  return function(r) {
    return e(r) + "";
  };
}
function vi(e, r) {
  var n = Fr.lastIndex = Or.lastIndex = 0, i, o, s, c = -1, l = [], f = [];
  for (e = e + "", r = r + ""; (i = Fr.exec(e)) && (o = Or.exec(r)); )
    (s = o.index) > n && (s = r.slice(n, s), l[c] ? l[c] += s : l[++c] = s), (i = i[0]) === (o = o[0]) ? l[c] ? l[c] += o : l[++c] = o : (l[++c] = null, f.push({ i: c, x: Me(i, o) })), n = Or.lastIndex;
  return n < r.length && (s = r.slice(n), l[c] ? l[c] += s : l[++c] = s), l.length < 2 ? f[0] ? hs(f[0].x) : ps(r) : (r = f.length, function(d) {
    for (var p = 0, h; p < r; ++p)
      l[(h = f[p]).i] = h.x(d);
    return l.join("");
  });
}
function Zr(e, r) {
  var n = typeof r, i;
  return r == null || n === "boolean" ? Jr(r) : (n === "number" ? Me : n === "string" ? (i = kt(r)) ? (r = i, hr) : vi : r instanceof kt ? hr : r instanceof Date ? ls : fs(r) ? cs : Array.isArray(r) ? us : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? ds : Me)(e, r);
}
function gs(e, r) {
  return e = +e, r = +r, function(n) {
    return Math.round(e * (1 - n) + r * n);
  };
}
var xn = 180 / Math.PI, Ir = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function bi(e, r, n, i, o, s) {
  var c, l, f;
  return (c = Math.sqrt(e * e + r * r)) && (e /= c, r /= c), (f = e * n + r * i) && (n -= e * f, i -= r * f), (l = Math.sqrt(n * n + i * i)) && (n /= l, i /= l, f /= l), e * i < r * n && (e = -e, r = -r, f = -f, c = -c), {
    translateX: o,
    translateY: s,
    rotate: Math.atan2(r, e) * xn,
    skewX: Math.atan(f) * xn,
    scaleX: c,
    scaleY: l
  };
}
var Kt;
function ys(e) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return r.isIdentity ? Ir : bi(r.a, r.b, r.c, r.d, r.e, r.f);
}
function ms(e) {
  return e == null || (Kt || (Kt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kt.setAttribute("transform", e), !(e = Kt.transform.baseVal.consolidate())) ? Ir : (e = e.matrix, bi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function wi(e, r, n, i) {
  function o(d) {
    return d.length ? d.pop() + " " : "";
  }
  function s(d, p, h, y, v, T) {
    if (d !== h || p !== y) {
      var C = v.push("translate(", null, r, null, n);
      T.push({ i: C - 4, x: Me(d, h) }, { i: C - 2, x: Me(p, y) });
    } else
      (h || y) && v.push("translate(" + h + r + y + n);
  }
  function c(d, p, h, y) {
    d !== p ? (d - p > 180 ? p += 360 : p - d > 180 && (d += 360), y.push({ i: h.push(o(h) + "rotate(", null, i) - 2, x: Me(d, p) })) : p && h.push(o(h) + "rotate(" + p + i);
  }
  function l(d, p, h, y) {
    d !== p ? y.push({ i: h.push(o(h) + "skewX(", null, i) - 2, x: Me(d, p) }) : p && h.push(o(h) + "skewX(" + p + i);
  }
  function f(d, p, h, y, v, T) {
    if (d !== h || p !== y) {
      var C = v.push(o(v) + "scale(", null, ",", null, ")");
      T.push({ i: C - 4, x: Me(d, h) }, { i: C - 2, x: Me(p, y) });
    } else
      (h !== 1 || y !== 1) && v.push(o(v) + "scale(" + h + "," + y + ")");
  }
  return function(d, p) {
    var h = [], y = [];
    return d = e(d), p = e(p), s(d.translateX, d.translateY, p.translateX, p.translateY, h, y), c(d.rotate, p.rotate, h, y), l(d.skewX, p.skewX, h, y), f(d.scaleX, d.scaleY, p.scaleX, p.scaleY, h, y), d = p = null, function(v) {
      for (var T = -1, C = y.length, R; ++T < C; )
        h[(R = y[T]).i] = R.x(v);
      return h.join("");
    };
  };
}
var vs = wi(ys, "px, ", "px)", "deg)"), bs = wi(ms, ", ", ")", ")");
function ws(e, r) {
  var n, i;
  return function() {
    var o = ze(this, e), s = o.tween;
    if (s !== n) {
      i = n = s;
      for (var c = 0, l = i.length; c < l; ++c)
        if (i[c].name === r) {
          i = i.slice(), i.splice(c, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function xs(e, r, n) {
  var i, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = ze(this, e), c = s.tween;
    if (c !== i) {
      o = (i = c).slice();
      for (var l = { name: r, value: n }, f = 0, d = o.length; f < d; ++f)
        if (o[f].name === r) {
          o[f] = l;
          break;
        }
      f === d && o.push(l);
    }
    s.tween = o;
  };
}
function _s(e, r) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Ie(this.node(), n).tween, o = 0, s = i.length, c; o < s; ++o)
      if ((c = i[o]).name === e)
        return c.value;
    return null;
  }
  return this.each((r == null ? ws : xs)(n, e, r));
}
function Qr(e, r, n) {
  var i = e._id;
  return e.each(function() {
    var o = ze(this, i);
    (o.value || (o.value = {}))[r] = n.apply(this, arguments);
  }), function(o) {
    return Ie(o, i).value[r];
  };
}
function xi(e, r) {
  var n;
  return (typeof r == "number" ? Me : r instanceof kt ? hr : (n = kt(r)) ? (r = n, hr) : vi)(e, r);
}
function ks(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ss(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Es(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var c = this.getAttribute(e);
    return c === o ? null : c === i ? s : s = r(i = c, n);
  };
}
function Rs(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var c = this.getAttributeNS(e.space, e.local);
    return c === o ? null : c === i ? s : s = r(i = c, n);
  };
}
function Ts(e, r, n) {
  var i, o, s;
  return function() {
    var c, l = n(this), f;
    return l == null ? void this.removeAttribute(e) : (c = this.getAttribute(e), f = l + "", c === f ? null : c === i && f === o ? s : (o = f, s = r(i = c, l)));
  };
}
function Os(e, r, n) {
  var i, o, s;
  return function() {
    var c, l = n(this), f;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (c = this.getAttributeNS(e.space, e.local), f = l + "", c === f ? null : c === i && f === o ? s : (o = f, s = r(i = c, l)));
  };
}
function $s(e, r) {
  var n = wr(e), i = n === "transform" ? bs : xi;
  return this.attrTween(e, typeof r == "function" ? (n.local ? Os : Ts)(n, i, Qr(this, "attr." + e, r)) : r == null ? (n.local ? Ss : ks)(n) : (n.local ? Rs : Es)(n, i, r));
}
function Ns(e, r) {
  return function(n) {
    this.setAttribute(e, r.call(this, n));
  };
}
function Cs(e, r) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, r.call(this, n));
  };
}
function Ps(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Cs(e, s)), n;
  }
  return o._value = r, o;
}
function js(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Ns(e, s)), n;
  }
  return o._value = r, o;
}
function Ms(e, r) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (r == null)
    return this.tween(n, null);
  if (typeof r != "function")
    throw new Error();
  var i = wr(e);
  return this.tween(n, (i.local ? Ps : js)(i, r));
}
function As(e, r) {
  return function() {
    Gr(this, e).delay = +r.apply(this, arguments);
  };
}
function Ds(e, r) {
  return r = +r, function() {
    Gr(this, e).delay = r;
  };
}
function Fs(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? As : Ds)(r, e)) : Ie(this.node(), r).delay;
}
function Is(e, r) {
  return function() {
    ze(this, e).duration = +r.apply(this, arguments);
  };
}
function Ls(e, r) {
  return r = +r, function() {
    ze(this, e).duration = r;
  };
}
function zs(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Is : Ls)(r, e)) : Ie(this.node(), r).duration;
}
function Ws(e, r) {
  if (typeof r != "function")
    throw new Error();
  return function() {
    ze(this, e).ease = r;
  };
}
function Bs(e) {
  var r = this._id;
  return arguments.length ? this.each(Ws(r, e)) : Ie(this.node(), r).ease;
}
function Ys(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    ze(this, e).ease = n;
  };
}
function Vs(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Ys(this._id, e));
}
function Us(e) {
  typeof e != "function" && (e = Qn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], c = s.length, l = i[o] = [], f, d = 0; d < c; ++d)
      (f = s[d]) && e.call(f, f.__data__, d, s) && l.push(f);
  return new Ve(i, this._parents, this._name, this._id);
}
function Hs(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var r = this._groups, n = e._groups, i = r.length, o = n.length, s = Math.min(i, o), c = new Array(i), l = 0; l < s; ++l)
    for (var f = r[l], d = n[l], p = f.length, h = c[l] = new Array(p), y, v = 0; v < p; ++v)
      (y = f[v] || d[v]) && (h[v] = y);
  for (; l < i; ++l)
    c[l] = r[l];
  return new Ve(c, this._parents, this._name, this._id);
}
function qs(e) {
  return (e + "").trim().split(/^|\s+/).every(function(r) {
    var n = r.indexOf(".");
    return n >= 0 && (r = r.slice(0, n)), !r || r === "start";
  });
}
function Xs(e, r, n) {
  var i, o, s = qs(r) ? Gr : ze;
  return function() {
    var c = s(this, e), l = c.on;
    l !== i && (o = (i = l).copy()).on(r, n), c.on = o;
  };
}
function Gs(e, r) {
  var n = this._id;
  return arguments.length < 2 ? Ie(this.node(), n).on.on(e) : this.each(Xs(n, e, r));
}
function Ks(e) {
  return function() {
    var r = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    r && r.removeChild(this);
  };
}
function Js() {
  return this.on("end.remove", Ks(this._id));
}
function Zs(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Hr(e));
  for (var i = this._groups, o = i.length, s = new Array(o), c = 0; c < o; ++c)
    for (var l = i[c], f = l.length, d = s[c] = new Array(f), p, h, y = 0; y < f; ++y)
      (p = l[y]) && (h = e.call(p, p.__data__, y, l)) && ("__data__" in p && (h.__data__ = p.__data__), d[y] = h, _r(d[y], r, n, y, d, Ie(p, n)));
  return new Ve(s, this._parents, r, n);
}
function Qs(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Zn(e));
  for (var i = this._groups, o = i.length, s = [], c = [], l = 0; l < o; ++l)
    for (var f = i[l], d = f.length, p, h = 0; h < d; ++h)
      if (p = f[h]) {
        for (var y = e.call(p, p.__data__, h, f), v, T = Ie(p, n), C = 0, R = y.length; C < R; ++C)
          (v = y[C]) && _r(v, r, n, C, y, T);
        s.push(y), c.push(p);
      }
  return new Ve(s, c, r, n);
}
var ec = Bt.prototype.constructor;
function tc() {
  return new ec(this._groups, this._parents);
}
function rc(e, r) {
  var n, i, o;
  return function() {
    var s = Rt(this, e), c = (this.style.removeProperty(e), Rt(this, e));
    return s === c ? null : s === n && c === i ? o : o = r(n = s, i = c);
  };
}
function _i(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function nc(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var c = Rt(this, e);
    return c === o ? null : c === i ? s : s = r(i = c, n);
  };
}
function ic(e, r, n) {
  var i, o, s;
  return function() {
    var c = Rt(this, e), l = n(this), f = l + "";
    return l == null && (f = l = (this.style.removeProperty(e), Rt(this, e))), c === f ? null : c === i && f === o ? s : (o = f, s = r(i = c, l));
  };
}
function oc(e, r) {
  var n, i, o, s = "style." + r, c = "end." + s, l;
  return function() {
    var f = ze(this, e), d = f.on, p = f.value[s] == null ? l || (l = _i(r)) : void 0;
    (d !== n || o !== p) && (i = (n = d).copy()).on(c, o = p), f.on = i;
  };
}
function ac(e, r, n) {
  var i = (e += "") == "transform" ? vs : xi;
  return r == null ? this.styleTween(e, rc(e, i)).on("end.style." + e, _i(e)) : typeof r == "function" ? this.styleTween(e, ic(e, i, Qr(this, "style." + e, r))).each(oc(this._id, e)) : this.styleTween(e, nc(e, i, r), n).on("end.style." + e, null);
}
function sc(e, r, n) {
  return function(i) {
    this.style.setProperty(e, r.call(this, i), n);
  };
}
function cc(e, r, n) {
  var i, o;
  function s() {
    var c = r.apply(this, arguments);
    return c !== o && (i = (o = c) && sc(e, c, n)), i;
  }
  return s._value = r, s;
}
function fc(e, r, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (r == null)
    return this.tween(i, null);
  if (typeof r != "function")
    throw new Error();
  return this.tween(i, cc(e, r, n == null ? "" : n));
}
function uc(e) {
  return function() {
    this.textContent = e;
  };
}
function lc(e) {
  return function() {
    var r = e(this);
    this.textContent = r == null ? "" : r;
  };
}
function dc(e) {
  return this.tween("text", typeof e == "function" ? lc(Qr(this, "text", e)) : uc(e == null ? "" : e + ""));
}
function pc(e) {
  return function(r) {
    this.textContent = e.call(this, r);
  };
}
function hc(e) {
  var r, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (r = (n = o) && pc(o)), r;
  }
  return i._value = e, i;
}
function gc(e) {
  var r = "text";
  if (arguments.length < 1)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, hc(e));
}
function yc() {
  for (var e = this._name, r = this._id, n = ki(), i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var c = i[s], l = c.length, f, d = 0; d < l; ++d)
      if (f = c[d]) {
        var p = Ie(f, r);
        _r(f, e, n, d, c, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new Ve(i, this._parents, e, n);
}
function mc() {
  var e, r, n = this, i = n._id, o = n.size();
  return new Promise(function(s, c) {
    var l = { value: c }, f = { value: function() {
      --o === 0 && s();
    } };
    n.each(function() {
      var d = ze(this, i), p = d.on;
      p !== e && (r = (e = p).copy(), r._.cancel.push(l), r._.interrupt.push(l), r._.end.push(f)), d.on = r;
    }), o === 0 && s();
  });
}
var vc = 0;
function Ve(e, r, n, i) {
  this._groups = e, this._parents = r, this._name = n, this._id = i;
}
function ki() {
  return ++vc;
}
var We = Bt.prototype;
Ve.prototype = {
  constructor: Ve,
  select: Zs,
  selectAll: Qs,
  selectChild: We.selectChild,
  selectChildren: We.selectChildren,
  filter: Us,
  merge: Hs,
  selection: tc,
  transition: yc,
  call: We.call,
  nodes: We.nodes,
  node: We.node,
  size: We.size,
  empty: We.empty,
  each: We.each,
  on: Gs,
  attr: $s,
  attrTween: Ms,
  style: ac,
  styleTween: fc,
  text: dc,
  textTween: gc,
  remove: Js,
  tween: _s,
  delay: Fs,
  duration: zs,
  ease: Bs,
  easeVarying: Vs,
  end: mc,
  [Symbol.iterator]: We[Symbol.iterator]
};
function bc(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var wc = {
  time: null,
  delay: 0,
  duration: 250,
  ease: bc
};
function xc(e, r) {
  for (var n; !(n = e.__transition) || !(n = n[r]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${r} not found`);
  return n;
}
function _c(e) {
  var r, n;
  e instanceof Ve ? (r = e._id, e = e._name) : (r = ki(), (n = wc).time = Xr(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var c = i[s], l = c.length, f, d = 0; d < l; ++d)
      (f = c[d]) && _r(f, e, r, d, c, n || xc(f, r));
  return new Ve(i, this._parents, e, r);
}
Bt.prototype.interrupt = Ha;
Bt.prototype.transition = _c;
const _n = {
  wicks: "line",
  candles: "rect"
}, kc = (e, r, n, i, o) => {
  const {
    scales: { xScale: s },
    utils: { scaledHeight: c, scaledY: l }
  } = i, {
    visibleRange: { offset: f }
  } = n, d = It({}), p = It(!1), [h, y] = Ye({
    item: void 0,
    position: void 0
  }), v = De(() => bt(e.current), [e.current]), T = De(
    (k, x = v()) => x.selectAll(`${_n[k]}.${k}`).data(r),
    [r]
  ), C = De(
    (k) => {
      var x;
      return d.current[k] = (x = d.current[k]) != null ? x : v().append("g").classed(`${k}-group`, !0).attr("clip-path", "url(#chart-contents)"), d.current[k];
    },
    [d]
  ), R = De(
    (k, x) => {
      let N = T(k, C(k));
      N.size() !== r.length && (N = N.enter().append(_n[k]));
      const z = () => N.transition().duration(o ? Ca : 50), M = (A) => Number(s(A.date)) + (k === "wicks" ? +s.bandwidth() / 2 : 0) + f, O = (A) => l(A[x[0]], A[x[1]]), F = (A) => c(A[x[0]], A[x[1]]), W = (A) => O(A) + F(A);
      return k === "candles" ? (z().attr("width", () => +s.bandwidth()).attr("height", F).attr("x", M).attr("y", O), N.classed("is-increased", (A) => A.close > A.open).classed("is-decreased", (A) => A.close < A.open).classed("is-zoomed", (A) => +s.bandwidth() > 10).on("click", ({ target: A }, q) => {
        N.classed("is-active", !1), bt(A).classed("is-active", !0), p.current = !0, y({
          item: q,
          position: {
            x: M(q) + s.bandwidth() + pe,
            y: W(q) + 8
          }
        });
      }).on("mouseover", (A, q) => {
        p.current || y({
          item: q
        });
      }).on("mouseout", (A, q) => {
        p.current || y({
          item: void 0
        });
      })) : z().attr("x1", M).attr("y1", O).attr("x2", M).attr("y2", W), N.classed(k, !0).exit().remove(), N;
    },
    [s, l]
  );
  return Fe(() => {
    C("wicks"), C("candles");
    const k = ({ target: x }) => {
      x.nodeName !== "rect" && (v().selectAll("rect").classed("is-active", !1), p.current = !1, y(({ position: N }) => ({ item: void 0, position: N })));
    };
    return addEventListener("resize", k), addEventListener("pointerdown", k), () => {
      removeEventListener("pointerdown", k), removeEventListener("resize", k);
    };
  }, []), Fe(() => {
    var k;
    (k = s == null ? void 0 : s.bandwidth) != null && k.call(s) && (R("wicks", ["low", "high"]), R("candles", ["open", "close"]));
  }, [s, l]), h;
};
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Si = "Expected a function", kn = 0 / 0, Sc = "[object Symbol]", Ec = /^\s+|\s+$/g, Rc = /^[-+]0x[0-9a-f]+$/i, Tc = /^0b[01]+$/i, Oc = /^0o[0-7]+$/i, $c = parseInt, Nc = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, Cc = typeof self == "object" && self && self.Object === Object && self, Pc = Nc || Cc || Function("return this")(), jc = Object.prototype, Mc = jc.toString, Ac = Math.max, Dc = Math.min, $r = function() {
  return Pc.Date.now();
};
function Fc(e, r, n) {
  var i, o, s, c, l, f, d = 0, p = !1, h = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Si);
  r = Sn(r) || 0, gr(n) && (p = !!n.leading, h = "maxWait" in n, s = h ? Ac(Sn(n.maxWait) || 0, r) : s, y = "trailing" in n ? !!n.trailing : y);
  function v(O) {
    var F = i, W = o;
    return i = o = void 0, d = O, c = e.apply(W, F), c;
  }
  function T(O) {
    return d = O, l = setTimeout(k, r), p ? v(O) : c;
  }
  function C(O) {
    var F = O - f, W = O - d, A = r - F;
    return h ? Dc(A, s - W) : A;
  }
  function R(O) {
    var F = O - f, W = O - d;
    return f === void 0 || F >= r || F < 0 || h && W >= s;
  }
  function k() {
    var O = $r();
    if (R(O))
      return x(O);
    l = setTimeout(k, C(O));
  }
  function x(O) {
    return l = void 0, y && i ? v(O) : (i = o = void 0, c);
  }
  function N() {
    l !== void 0 && clearTimeout(l), d = 0, i = f = o = l = void 0;
  }
  function z() {
    return l === void 0 ? c : x($r());
  }
  function M() {
    var O = $r(), F = R(O);
    if (i = arguments, o = this, f = O, F) {
      if (l === void 0)
        return T(f);
      if (h)
        return l = setTimeout(k, r), v(f);
    }
    return l === void 0 && (l = setTimeout(k, r)), c;
  }
  return M.cancel = N, M.flush = z, M;
}
function Ic(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Si);
  return gr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Fc(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function gr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Lc(e) {
  return !!e && typeof e == "object";
}
function zc(e) {
  return typeof e == "symbol" || Lc(e) && Mc.call(e) == Sc;
}
function Sn(e) {
  if (typeof e == "number")
    return e;
  if (zc(e))
    return kn;
  if (gr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = gr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ec, "");
  var n = Tc.test(e);
  return n || Oc.test(e) ? $c(e.slice(2), n ? 2 : 8) : Rc.test(e) ? kn : +e;
}
var Lr = Ic;
const { abs: Wc, round: En } = Math, Bc = (e, r, n) => {
  const [i, o] = Ye({
    width: 0,
    height: 0
  }), [s, c] = Ye({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), { zoomLevel: l, panLevel: f } = n;
  return Fe(() => {
    const d = Lr(() => {
      const { clientWidth: p, clientHeight: h } = e.current;
      o({ width: p, height: h });
    }, 200);
    return d(), addEventListener("resize", d), () => removeEventListener("resize", d);
  }, []), Fe(() => {
    if (!r)
      return;
    const { width: d } = i, p = Pa * (1 + fi) * l, h = p * r, y = d - He[1] + pe * 2;
    let v = f * l - h + y;
    v = v <= 0 ? v : 0, v = h > d ? v : y - h, v = Wc(v - y) <= h ? v : -h + y;
    const T = En((v * -1 - pe) / p), C = En((v * -1 + y) / p);
    c({ first: T, last: C, offset: v, totalWidth: h });
  }, [l, f, r, i.width]), { visibleRange: s, sizes: i };
}, Yc = (e = "") => new Date(e).toLocaleDateString("en-UK");
function sr(e, r) {
  return e == null || r == null ? NaN : e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Vc(e, r) {
  return e == null || r == null ? NaN : r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
}
function Ei(e) {
  let r, n, i;
  e.length !== 2 ? (r = sr, n = (l, f) => sr(e(l), f), i = (l, f) => e(l) - f) : (r = e === sr || e === Vc ? e : Uc, n = e, i = e);
  function o(l, f, d = 0, p = l.length) {
    if (d < p) {
      if (r(f, f) !== 0)
        return p;
      do {
        const h = d + p >>> 1;
        n(l[h], f) < 0 ? d = h + 1 : p = h;
      } while (d < p);
    }
    return d;
  }
  function s(l, f, d = 0, p = l.length) {
    if (d < p) {
      if (r(f, f) !== 0)
        return p;
      do {
        const h = d + p >>> 1;
        n(l[h], f) <= 0 ? d = h + 1 : p = h;
      } while (d < p);
    }
    return d;
  }
  function c(l, f, d = 0, p = l.length) {
    const h = o(l, f, d, p - 1);
    return h > d && i(l[h - 1], f) > -i(l[h], f) ? h - 1 : h;
  }
  return { left: o, center: c, right: s };
}
function Uc() {
  return 0;
}
function Hc(e) {
  return e === null ? NaN : +e;
}
const qc = Ei(sr), Xc = qc.right;
Ei(Hc).center;
const Gc = Xc;
class Rn extends Map {
  constructor(r, n = Zc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), r != null)
      for (const [i, o] of r)
        this.set(i, o);
  }
  get(r) {
    return super.get(Tn(this, r));
  }
  has(r) {
    return super.has(Tn(this, r));
  }
  set(r, n) {
    return super.set(Kc(this, r), n);
  }
  delete(r) {
    return super.delete(Jc(this, r));
  }
}
function Tn({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : n;
}
function Kc({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function Jc({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function Zc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
var zr = Math.sqrt(50), Wr = Math.sqrt(10), Br = Math.sqrt(2);
function Qc(e, r, n) {
  var i, o = -1, s, c, l;
  if (r = +r, e = +e, n = +n, e === r && n > 0)
    return [e];
  if ((i = r < e) && (s = e, e = r, r = s), (l = Ri(e, r, n)) === 0 || !isFinite(l))
    return [];
  if (l > 0) {
    let f = Math.round(e / l), d = Math.round(r / l);
    for (f * l < e && ++f, d * l > r && --d, c = new Array(s = d - f + 1); ++o < s; )
      c[o] = (f + o) * l;
  } else {
    l = -l;
    let f = Math.round(e * l), d = Math.round(r * l);
    for (f / l < e && ++f, d / l > r && --d, c = new Array(s = d - f + 1); ++o < s; )
      c[o] = (f + o) / l;
  }
  return i && c.reverse(), c;
}
function Ri(e, r, n) {
  var i = (r - e) / Math.max(0, n), o = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, o);
  return o >= 0 ? (s >= zr ? 10 : s >= Wr ? 5 : s >= Br ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (s >= zr ? 10 : s >= Wr ? 5 : s >= Br ? 2 : 1);
}
function ef(e, r, n) {
  var i = Math.abs(r - e) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / o;
  return s >= zr ? o *= 10 : s >= Wr ? o *= 5 : s >= Br && (o *= 2), r < e ? -o : o;
}
function tf(e, r, n) {
  e = +e, r = +r, n = (o = arguments.length) < 2 ? (r = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var i = -1, o = Math.max(0, Math.ceil((r - e) / n)) | 0, s = new Array(o); ++i < o; )
    s[i] = e + i * n;
  return s;
}
function en(e, r) {
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
const On = Symbol("implicit");
function Ti() {
  var e = new Rn(), r = [], n = [], i = On;
  function o(s) {
    let c = e.get(s);
    if (c === void 0) {
      if (i !== On)
        return i;
      e.set(s, c = r.push(s) - 1);
    }
    return n[c % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length)
      return r.slice();
    r = [], e = new Rn();
    for (const c of s)
      e.has(c) || e.set(c, r.push(c) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (i = s, o) : i;
  }, o.copy = function() {
    return Ti(r, n).unknown(i);
  }, en.apply(o, arguments), o;
}
function Oi() {
  var e = Ti().unknown(void 0), r = e.domain, n = e.range, i = 0, o = 1, s, c, l = !1, f = 0, d = 0, p = 0.5;
  delete e.unknown;
  function h() {
    var y = r().length, v = o < i, T = v ? o : i, C = v ? i : o;
    s = (C - T) / Math.max(1, y - f + d * 2), l && (s = Math.floor(s)), T += (C - T - s * (y - f)) * p, c = s * (1 - f), l && (T = Math.round(T), c = Math.round(c));
    var R = tf(y).map(function(k) {
      return T + s * k;
    });
    return n(v ? R.reverse() : R);
  }
  return e.domain = function(y) {
    return arguments.length ? (r(y), h()) : r();
  }, e.range = function(y) {
    return arguments.length ? ([i, o] = y, i = +i, o = +o, h()) : [i, o];
  }, e.rangeRound = function(y) {
    return [i, o] = y, i = +i, o = +o, l = !0, h();
  }, e.bandwidth = function() {
    return c;
  }, e.step = function() {
    return s;
  }, e.round = function(y) {
    return arguments.length ? (l = !!y, h()) : l;
  }, e.padding = function(y) {
    return arguments.length ? (f = Math.min(1, d = +y), h()) : f;
  }, e.paddingInner = function(y) {
    return arguments.length ? (f = Math.min(1, y), h()) : f;
  }, e.paddingOuter = function(y) {
    return arguments.length ? (d = +y, h()) : d;
  }, e.align = function(y) {
    return arguments.length ? (p = Math.max(0, Math.min(1, y)), h()) : p;
  }, e.copy = function() {
    return Oi(r(), [i, o]).round(l).paddingInner(f).paddingOuter(d).align(p);
  }, en.apply(h(), arguments);
}
function rf(e) {
  return function() {
    return e;
  };
}
function nf(e) {
  return +e;
}
var $n = [0, 1];
function St(e) {
  return e;
}
function Yr(e, r) {
  return (r -= e = +e) ? function(n) {
    return (n - e) / r;
  } : rf(isNaN(r) ? NaN : 0.5);
}
function of(e, r) {
  var n;
  return e > r && (n = e, e = r, r = n), function(i) {
    return Math.max(e, Math.min(r, i));
  };
}
function af(e, r, n) {
  var i = e[0], o = e[1], s = r[0], c = r[1];
  return o < i ? (i = Yr(o, i), s = n(c, s)) : (i = Yr(i, o), s = n(s, c)), function(l) {
    return s(i(l));
  };
}
function sf(e, r, n) {
  var i = Math.min(e.length, r.length) - 1, o = new Array(i), s = new Array(i), c = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), r = r.slice().reverse()); ++c < i; )
    o[c] = Yr(e[c], e[c + 1]), s[c] = n(r[c], r[c + 1]);
  return function(l) {
    var f = Gc(e, l, 1, i) - 1;
    return s[f](o[f](l));
  };
}
function cf(e, r) {
  return r.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ff() {
  var e = $n, r = $n, n = Zr, i, o, s, c = St, l, f, d;
  function p() {
    var y = Math.min(e.length, r.length);
    return c !== St && (c = of(e[0], e[y - 1])), l = y > 2 ? sf : af, f = d = null, h;
  }
  function h(y) {
    return y == null || isNaN(y = +y) ? s : (f || (f = l(e.map(i), r, n)))(i(c(y)));
  }
  return h.invert = function(y) {
    return c(o((d || (d = l(r, e.map(i), Me)))(y)));
  }, h.domain = function(y) {
    return arguments.length ? (e = Array.from(y, nf), p()) : e.slice();
  }, h.range = function(y) {
    return arguments.length ? (r = Array.from(y), p()) : r.slice();
  }, h.rangeRound = function(y) {
    return r = Array.from(y), n = gs, p();
  }, h.clamp = function(y) {
    return arguments.length ? (c = y ? !0 : St, p()) : c !== St;
  }, h.interpolate = function(y) {
    return arguments.length ? (n = y, p()) : n;
  }, h.unknown = function(y) {
    return arguments.length ? (s = y, h) : s;
  }, function(y, v) {
    return i = y, o = v, p();
  };
}
function uf() {
  return ff()(St, St);
}
function lf(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function yr(e, r) {
  if ((n = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Ot(e) {
  return e = yr(Math.abs(e)), e ? e[1] : NaN;
}
function df(e, r) {
  return function(n, i) {
    for (var o = n.length, s = [], c = 0, l = e[0], f = 0; o > 0 && l > 0 && (f + l + 1 > i && (l = Math.max(1, i - f)), s.push(n.substring(o -= l, o + l)), !((f += l + 1) > i)); )
      l = e[c = (c + 1) % e.length];
    return s.reverse().join(r);
  };
}
function pf(e) {
  return function(r) {
    return r.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var hf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mr(e) {
  if (!(r = hf.exec(e)))
    throw new Error("invalid format: " + e);
  var r;
  return new tn({
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
mr.prototype = tn.prototype;
function tn(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
tn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function gf(e) {
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
var $i;
function yf(e, r) {
  var n = yr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1], s = o - ($i = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, c = i.length;
  return s === c ? i : s > c ? i + new Array(s - c + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + yr(e, Math.max(0, r + s - 1))[0];
}
function Nn(e, r) {
  var n = yr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Cn = {
  "%": (e, r) => (e * 100).toFixed(r),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: lf,
  e: (e, r) => e.toExponential(r),
  f: (e, r) => e.toFixed(r),
  g: (e, r) => e.toPrecision(r),
  o: (e) => Math.round(e).toString(8),
  p: (e, r) => Nn(e * 100, r),
  r: Nn,
  s: yf,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Pn(e) {
  return e;
}
var jn = Array.prototype.map, Mn = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function mf(e) {
  var r = e.grouping === void 0 || e.thousands === void 0 ? Pn : df(jn.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Pn : pf(jn.call(e.numerals, String)), c = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "\u2212" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(h) {
    h = mr(h);
    var y = h.fill, v = h.align, T = h.sign, C = h.symbol, R = h.zero, k = h.width, x = h.comma, N = h.precision, z = h.trim, M = h.type;
    M === "n" ? (x = !0, M = "g") : Cn[M] || (N === void 0 && (N = 12), z = !0, M = "g"), (R || y === "0" && v === "=") && (R = !0, y = "0", v = "=");
    var O = C === "$" ? n : C === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", F = C === "$" ? i : /[%p]/.test(M) ? c : "", W = Cn[M], A = /[defgprs%]/.test(M);
    N = N === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, N)) : Math.max(0, Math.min(20, N));
    function q(D) {
      var B = O, P = F, L, H, te;
      if (M === "c")
        P = W(D) + P, D = "";
      else {
        D = +D;
        var re = D < 0 || 1 / D < 0;
        if (D = isNaN(D) ? f : W(Math.abs(D), N), z && (D = gf(D)), re && +D == 0 && T !== "+" && (re = !1), B = (re ? T === "(" ? T : l : T === "-" || T === "(" ? "" : T) + B, P = (M === "s" ? Mn[8 + $i / 3] : "") + P + (re && T === "(" ? ")" : ""), A) {
          for (L = -1, H = D.length; ++L < H; )
            if (te = D.charCodeAt(L), 48 > te || te > 57) {
              P = (te === 46 ? o + D.slice(L + 1) : D.slice(L)) + P, D = D.slice(0, L);
              break;
            }
        }
      }
      x && !R && (D = r(D, 1 / 0));
      var ne = B.length + D.length + P.length, G = ne < k ? new Array(k - ne + 1).join(y) : "";
      switch (x && R && (D = r(G + D, G.length ? k - P.length : 1 / 0), G = ""), v) {
        case "<":
          D = B + D + P + G;
          break;
        case "=":
          D = B + G + D + P;
          break;
        case "^":
          D = G.slice(0, ne = G.length >> 1) + B + D + P + G.slice(ne);
          break;
        default:
          D = G + B + D + P;
          break;
      }
      return s(D);
    }
    return q.toString = function() {
      return h + "";
    }, q;
  }
  function p(h, y) {
    var v = d((h = mr(h), h.type = "f", h)), T = Math.max(-8, Math.min(8, Math.floor(Ot(y) / 3))) * 3, C = Math.pow(10, -T), R = Mn[8 + T / 3];
    return function(k) {
      return v(C * k) + R;
    };
  }
  return {
    format: d,
    formatPrefix: p
  };
}
var Zt, Ni, Ci;
vf({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function vf(e) {
  return Zt = mf(e), Ni = Zt.format, Ci = Zt.formatPrefix, Zt;
}
function bf(e) {
  return Math.max(0, -Ot(Math.abs(e)));
}
function wf(e, r) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ot(r) / 3))) * 3 - Ot(Math.abs(e)));
}
function xf(e, r) {
  return e = Math.abs(e), r = Math.abs(r) - e, Math.max(0, Ot(r) - Ot(e)) + 1;
}
function _f(e, r, n, i) {
  var o = ef(e, r, n), s;
  switch (i = mr(i == null ? ",f" : i), i.type) {
    case "s": {
      var c = Math.max(Math.abs(e), Math.abs(r));
      return i.precision == null && !isNaN(s = wf(o, c)) && (i.precision = s), Ci(i, c);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = xf(o, Math.max(Math.abs(e), Math.abs(r)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = bf(o)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return Ni(i);
}
function kf(e) {
  var r = e.domain;
  return e.ticks = function(n) {
    var i = r();
    return Qc(i[0], i[i.length - 1], n == null ? 10 : n);
  }, e.tickFormat = function(n, i) {
    var o = r();
    return _f(o[0], o[o.length - 1], n == null ? 10 : n, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = r(), o = 0, s = i.length - 1, c = i[o], l = i[s], f, d, p = 10;
    for (l < c && (d = c, c = l, l = d, d = o, o = s, s = d); p-- > 0; ) {
      if (d = Ri(c, l, n), d === f)
        return i[o] = c, i[s] = l, r(i);
      if (d > 0)
        c = Math.floor(c / d) * d, l = Math.ceil(l / d) * d;
      else if (d < 0)
        c = Math.ceil(c * d) / d, l = Math.floor(l * d) / d;
      else
        break;
      f = d;
    }
    return e;
  }, e;
}
function Pi() {
  var e = uf();
  return e.copy = function() {
    return cf(e, Pi());
  }, en.apply(e, arguments), kf(e);
}
const { abs: Sf, min: An, max: Ef } = Math, Rf = (e, r) => {
  const { sizes: n, visibleRange: i } = r, [o, s] = Ye({
    xScale: (f) => f,
    yScale: (f) => f
  }), c = De(
    (f, d) => Sf(o.yScale(d) - o.yScale(f)) || 1,
    [o.yScale]
  ), l = De(
    (f, d) => o.yScale(An(f, d)) - c(f, d) || 1,
    [o.yScale]
  );
  return Fe(() => {
    if (!(e != null && e.length))
      return;
    const { first: f, last: d, totalWidth: p } = i, { height: h } = n, y = e.slice(f > 0 ? f : 0, d), v = An(...y.map(({ low: k }) => k)), T = Ef(...y.map(({ high: k }) => k)), C = Oi().range([pe, p - pe]).domain(e.map(({ date: k }) => k)).padding(fi), R = Pi().domain([v - 20, T + 20]).range([h - He[0], pe]);
    s({ xScale: C, yScale: R });
  }, [i, n.height, e]), { utils: { scaledHeight: c, scaledY: l }, scales: o };
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ji = "Expected a function", Dn = 0 / 0, Tf = "[object Symbol]", Of = /^\s+|\s+$/g, $f = /^[-+]0x[0-9a-f]+$/i, Nf = /^0b[01]+$/i, Cf = /^0o[0-7]+$/i, Pf = parseInt, jf = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, Mf = typeof self == "object" && self && self.Object === Object && self, Af = jf || Mf || Function("return this")(), Df = Object.prototype, Ff = Df.toString, If = Math.max, Lf = Math.min, Nr = function() {
  return Af.Date.now();
};
function zf(e, r, n) {
  var i, o, s, c, l, f, d = 0, p = !1, h = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ji);
  r = Fn(r) || 0, vr(n) && (p = !!n.leading, h = "maxWait" in n, s = h ? If(Fn(n.maxWait) || 0, r) : s, y = "trailing" in n ? !!n.trailing : y);
  function v(O) {
    var F = i, W = o;
    return i = o = void 0, d = O, c = e.apply(W, F), c;
  }
  function T(O) {
    return d = O, l = setTimeout(k, r), p ? v(O) : c;
  }
  function C(O) {
    var F = O - f, W = O - d, A = r - F;
    return h ? Lf(A, s - W) : A;
  }
  function R(O) {
    var F = O - f, W = O - d;
    return f === void 0 || F >= r || F < 0 || h && W >= s;
  }
  function k() {
    var O = Nr();
    if (R(O))
      return x(O);
    l = setTimeout(k, C(O));
  }
  function x(O) {
    return l = void 0, y && i ? v(O) : (i = o = void 0, c);
  }
  function N() {
    l !== void 0 && clearTimeout(l), d = 0, i = f = o = l = void 0;
  }
  function z() {
    return l === void 0 ? c : x(Nr());
  }
  function M() {
    var O = Nr(), F = R(O);
    if (i = arguments, o = this, f = O, F) {
      if (l === void 0)
        return T(f);
      if (h)
        return l = setTimeout(k, r), v(f);
    }
    return l === void 0 && (l = setTimeout(k, r)), c;
  }
  return M.cancel = N, M.flush = z, M;
}
function Wf(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(ji);
  return vr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), zf(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function vr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Bf(e) {
  return !!e && typeof e == "object";
}
function Yf(e) {
  return typeof e == "symbol" || Bf(e) && Ff.call(e) == Tf;
}
function Fn(e) {
  if (typeof e == "number")
    return e;
  if (Yf(e))
    return Dn;
  if (vr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Of, "");
  var n = Nf.test(e);
  return n || Cf.test(e) ? Pf(e.slice(2), n ? 2 : 8) : $f.test(e) ? Dn : +e;
}
var Vf = Wf;
const Uf = {
  light: {
    bg: "#ffffff",
    text: "#273327",
    textSoft: "#444c44",
    textStrong: "#4a4a4a",
    subtle: "#f7faf7",
    border: "#ddeade",
    shadow: "#acc6ad",
    input: "#ffffff",
    outline: "#68c9ee",
    mark: "#57829514",
    special: "#578295",
    specialBg: "#598599",
    specialText: "#ffffff",
    specialShadow: "#425965",
    specialMark: "#ffffff14",
    light: "#ecf5fa",
    dark: "#364a53"
  },
  dark: {
    bg: "#202020",
    text: "#d1e4d1",
    textSoft: "#b4beb5",
    textStrong: "#bbbbbb",
    subtle: "#202521",
    border: "#273327",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#57a9c8",
    mark: "#6291a714",
    special: "#6291a7",
    specialBg: "#446777",
    specialText: "#dae0e4",
    specialShadow: "#152025",
    specialMark: "#dae0e414",
    light: "#b4d9ed",
    dark: "#243740"
  }
}, Hf = {
  light: {
    bg: "#ffffff",
    text: "#27313c",
    textSoft: "#444b53",
    textStrong: "#4a4a4a",
    subtle: "#f7f9fd",
    border: "#dde8f6",
    shadow: "#aac1dc",
    input: "#ffffff",
    outline: "#e6b2bb",
    mark: "#e3417114",
    special: "#e34171",
    specialBg: "#e84575",
    specialText: "#ffffff",
    specialShadow: "#744f56",
    specialMark: "#ffffff14",
    light: "#fcf1f3",
    dark: "#5d3e44"
  },
  dark: {
    bg: "#202020",
    text: "#dcdfe5",
    textSoft: "#b8bcc2",
    textStrong: "#bbbbbb",
    subtle: "#212529",
    border: "#26313d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#dc8698",
    mark: "#d7678114",
    special: "#d76781",
    specialBg: "#a3425a",
    specialText: "#e4dedf",
    specialShadow: "#2a1a1d",
    specialMark: "#e4dedf14",
    light: "#edccd1",
    dark: "#452f33"
  }
}, qf = {
  light: {
    bg: "#ffffff",
    text: "#312a53",
    textSoft: "#4b4763",
    textStrong: "#4a4a4a",
    subtle: "#f9f9fd",
    border: "#e7e5f7",
    shadow: "#c0bbdf",
    input: "#ffffff",
    outline: "#b7bde7",
    mark: "#6178e214",
    special: "#6178e2",
    specialBg: "#667ce3",
    specialText: "#ffffff",
    specialShadow: "#545874",
    specialMark: "#ffffff14",
    light: "#f2f3fc",
    dark: "#404564"
  },
  dark: {
    bg: "#202020",
    text: "#dfdee4",
    textSoft: "#bbbbc1",
    textStrong: "#bbbbbb",
    subtle: "#242429",
    border: "#312f3d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#919bd7",
    mark: "#7886d214",
    special: "#7886d2",
    specialBg: "#495db1",
    specialText: "#dedfe4",
    specialShadow: "#1c1e2a",
    specialMark: "#dedfe414",
    light: "#cfd2ee",
    dark: "#313445"
  }
}, Xf = {
  light: {
    bg: "#ffffff",
    text: "#352f26",
    textSoft: "#4e4a43",
    textStrong: "#4a4a4a",
    subtle: "#fbf9f6",
    border: "#ede6d9",
    shadow: "#ccbda3",
    input: "#ffffff",
    outline: "#a9ca64",
    mark: "#70844a14",
    special: "#70844a",
    specialBg: "#73884c",
    specialText: "#ffffff",
    specialShadow: "#515b40",
    specialMark: "#ffffff14",
    light: "#e7fbc6",
    dark: "#414a33"
  },
  dark: {
    bg: "#202020",
    text: "#e5ded4",
    textSoft: "#bfbbb3",
    textStrong: "#bbbbbb",
    subtle: "#27241f",
    border: "#363022",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#8ca853",
    mark: "#7d935214",
    special: "#7d9352",
    specialBg: "#586839",
    specialText: "#d9e2cc",
    specialShadow: "#1c2014",
    specialMark: "#d9e2cc14",
    light: "#bfdf80",
    dark: "#303822"
  }
}, Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: Uf,
  rose: Hf,
  electron: qf,
  avocado: Xf
}, Symbol.toStringTag, { value: "Module" }));
var Mi = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Kf() {
  if (In)
    return Pt;
  In = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, f, d) {
    var p, h = {}, y = null, v = null;
    d !== void 0 && (y = "" + d), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (p in f)
      i.call(f, p) && !s.hasOwnProperty(p) && (h[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        h[p] === void 0 && (h[p] = f[p]);
    return { $$typeof: r, type: l, key: y, ref: v, props: h, _owner: o.current };
  }
  return Pt.Fragment = n, Pt.jsx = c, Pt.jsxs = c, Pt;
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
var Ln;
function Jf() {
  return Ln || (Ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), T = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = T && t[T] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), g = 1; g < a; g++)
          u[g - 1] = arguments[g];
        N("error", t, u);
      }
    }
    function N(t, a, u) {
      {
        var g = k.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (a += "%s", u = u.concat([w]));
        var _ = u.map(function(b) {
          return String(b);
        });
        _.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, _);
      }
    }
    var z = !1, M = !1, O = !1, F = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === d || t === p || F || t === v || z || M || O || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === h || t.$$typeof === c || t.$$typeof === l || t.$$typeof === f || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function D(t, a, u) {
      var g = t.displayName;
      if (g)
        return g;
      var w = a.displayName || a.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function B(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var a = t;
            return B(a) + ".Consumer";
          case c:
            var u = t;
            return B(u._context) + ".Provider";
          case f:
            return D(t, t.render, "ForwardRef");
          case h:
            var g = t.displayName || null;
            return g !== null ? g : P(t.type) || "Memo";
          case y: {
            var w = t, _ = w._payload, b = w._init;
            try {
              return P(b(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, H = 0, te, re, ne, G, ye, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, me = console.groupCollapsed, ve = console.groupEnd;
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
        H++;
      }
    }
    function Ge() {
      {
        if (H--, H === 0) {
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
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function K(t, a, u) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            oe = g && g[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function we(t, a) {
      if (!t || ae)
        return "";
      {
        var u = J.get(t);
        if (u !== void 0)
          return u;
      }
      var g;
      ae = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ie.current, ie.current = null, Xe();
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
              g = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              g = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            g = I;
          }
          t();
        }
      } catch (I) {
        if (I && g && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), $ = g.stack.split(`
`), S = m.length - 1, E = $.length - 1; S >= 1 && E >= 0 && m[S] !== $[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== $[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== $[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = _, Ge(), Error.prepareStackTrace = w;
      }
      var U = t ? t.displayName || t.name : "", je = U ? K(U) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, u) {
      return we(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return we(t, Ze(t));
      if (typeof t == "string")
        return K(t);
      switch (t) {
        case d:
          return K("Suspense");
        case p:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return Je(t.render);
          case h:
            return Z(t.type, a, u);
          case y: {
            var g = t, w = g._payload, _ = g._init;
            try {
              return Z(_(w), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, xe = {}, _e = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        _e.setExtraStackFrame(u);
      } else
        _e.setExtraStackFrame(null);
    }
    function Qe(t, a, u, g, w) {
      {
        var _ = Function.call.bind(Q);
        for (var b in t)
          if (_(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var $ = Error((g || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, b, typeof m), ee(null)), m instanceof Error && !(m.message in xe) && (xe[m.message] = !0, ee(w), x("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
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
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ce;
    ce = {};
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
        var u = P(X.current.type);
        ce[u] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ce[u] = !0);
      }
    }
    function st(t, a) {
      {
        var u = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function ct(t, a) {
      {
        var u = function() {
          Re || (Re = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var ft = function(t, a, u, g, w, _, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: u,
        props: b,
        _owner: _
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
        value: g
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, u, g, w) {
      {
        var _, b = {}, m = null, $ = null;
        u !== void 0 && (Se(u), m = "" + u), ot(a) && (Se(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, w));
        for (_ in a)
          Q.call(a, _) && !nt.hasOwnProperty(_) && (b[_] = a[_]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (_ in S)
            b[_] === void 0 && (b[_] = S[_]);
        }
        if (m || $) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), $ && ct(b, E);
        }
        return ft(t, m, $, w, g, X.current, b);
      }
    }
    var fe = k.ReactCurrentOwner, Te = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        Te.setExtraStackFrame(u);
      } else
        Te.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (fe.current) {
          var t = P(fe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var $e = {};
    function dt(t) {
      {
        var a = Oe();
        if (!a) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = dt(a);
        if ($e[u])
          return;
        $e[u] = !0;
        var g = "";
        t && t._owner && t._owner !== fe.current && (g = " It was passed a child from " + P(t._owner.type) + "."), V(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var u = 0; u < t.length; u++) {
            var g = t[u];
            le(g) && Ne(g, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = R(t);
          if (typeof w == "function" && w !== t.entries)
            for (var _ = w.call(t), b; !(b = _.next()).done; )
              le(b.value) && Ne(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || a.$$typeof === h))
          u = a.propTypes;
        else
          return;
        if (u) {
          var g = P(a);
          Qe(u, t.props, "prop", g, t);
        } else if (a.PropTypes !== void 0 && !ue) {
          ue = !0;
          var w = P(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), u = 0; u < a.length; u++) {
          var g = a[u];
          if (g !== "children" && g !== "key") {
            V(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, u, g, w, _) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = lt(w);
          $ ? m += $ : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = ut(t, a, u, w, _);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (g)
              if (se(j)) {
                for (var U = 0; U < j.length; U++)
                  Ce(j[U], t);
                Object.freeze && Object.freeze(j);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function gt(t, a, u) {
      return Pe(t, a, u, !0);
    }
    function yt(t, a, u) {
      return Pe(t, a, u, !1);
    }
    var mt = yt, vt = gt;
    er.Fragment = i, er.jsx = mt, er.jsxs = vt;
  }()), er;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Kf() : e.exports = Jf();
})(Mi);
const Zf = Mi.exports.jsx, Qf = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, eu = (e = "pebble") => ({
  colors: Gf[e],
  ...Qf
}), zn = (e) => Object.entries(e).reduce(
  (r, [n, i]) => `${r} --${n}: ${i};`,
  ""
), tu = ({ colors: { light: e, dark: r = e }, fonts: n, fontSizes: i } = eu()) => Vr`
  :root {
    ${zn(e)}
    font-family: ${n.join(", ")};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${zn(r)}
    }
  }
`;
tu();
const ru = ({
  color: e,
  isSpecial: r
} = {}) => {
  const n = r ? "special" : "border", i = r ? "specialText" : "textSoft", o = r ? "specialBg" : "subtle";
  return `
    border: 3px solid var(--${n});
    color: ${e || `var(--${i})`};
    background-color: var(--${o});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `;
}, nu = ge.div(
  ({ isVisible: e = !1 }) => br`
    position: absolute;
    transition: all 0.2s;
    opacity: ${e ? 0.9 : 0};
    ${ru()}
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
), iu = ({
  children: e,
  isVisible: r = !1,
  x: n = 0,
  y: i = 0
}) => {
  const o = It(null), [s, c] = Ye({
    x: n,
    y: i
  }), l = De((f, d) => {
    var p, h;
    return c({
      x: f - ((h = (p = o.current) == null ? void 0 : p.clientWidth) != null ? h : 0) / 2,
      y: d + 24
    });
  }, [o.current]);
  return Fe(() => {
    l(n, i);
    const f = Vf(({
      clientX: p,
      clientY: h
    }) => !n && !i && l(p, h), 100), d = () => {
      removeEventListener("mousemove", f);
    };
    return n && i ? d() : addEventListener("mousemove", f), d;
  }, [n, i]), /* @__PURE__ */ Zf(nu, {
    ref: o,
    isVisible: r,
    children: e,
    style: {
      left: s.x,
      top: s.y
    }
  });
}, ou = ge.div`
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
var kr = { exports: {} }, jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function au() {
  if (Wn)
    return jt;
  Wn = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, f, d) {
    var p, h = {}, y = null, v = null;
    d !== void 0 && (y = "" + d), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (p in f)
      i.call(f, p) && !s.hasOwnProperty(p) && (h[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        h[p] === void 0 && (h[p] = f[p]);
    return { $$typeof: r, type: l, key: y, ref: v, props: h, _owner: o.current };
  }
  return jt.Fragment = n, jt.jsx = c, jt.jsxs = c, jt;
}
var Mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function su() {
  return Bn || (Bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), T = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = T && t[T] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), g = 1; g < a; g++)
          u[g - 1] = arguments[g];
        N("error", t, u);
      }
    }
    function N(t, a, u) {
      {
        var g = k.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (a += "%s", u = u.concat([w]));
        var _ = u.map(function(b) {
          return String(b);
        });
        _.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, _);
      }
    }
    var z = !1, M = !1, O = !1, F = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === d || t === p || F || t === v || z || M || O || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === h || t.$$typeof === c || t.$$typeof === l || t.$$typeof === f || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function D(t, a, u) {
      var g = t.displayName;
      if (g)
        return g;
      var w = a.displayName || a.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function B(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var a = t;
            return B(a) + ".Consumer";
          case c:
            var u = t;
            return B(u._context) + ".Provider";
          case f:
            return D(t, t.render, "ForwardRef");
          case h:
            var g = t.displayName || null;
            return g !== null ? g : P(t.type) || "Memo";
          case y: {
            var w = t, _ = w._payload, b = w._init;
            try {
              return P(b(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, H = 0, te, re, ne, G, ye, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, me = console.groupCollapsed, ve = console.groupEnd;
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
        H++;
      }
    }
    function Ge() {
      {
        if (H--, H === 0) {
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
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function K(t, a, u) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            oe = g && g[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function we(t, a) {
      if (!t || ae)
        return "";
      {
        var u = J.get(t);
        if (u !== void 0)
          return u;
      }
      var g;
      ae = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ie.current, ie.current = null, Xe();
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
              g = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              g = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            g = I;
          }
          t();
        }
      } catch (I) {
        if (I && g && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), $ = g.stack.split(`
`), S = m.length - 1, E = $.length - 1; S >= 1 && E >= 0 && m[S] !== $[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== $[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== $[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = _, Ge(), Error.prepareStackTrace = w;
      }
      var U = t ? t.displayName || t.name : "", je = U ? K(U) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, u) {
      return we(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return we(t, Ze(t));
      if (typeof t == "string")
        return K(t);
      switch (t) {
        case d:
          return K("Suspense");
        case p:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return Je(t.render);
          case h:
            return Z(t.type, a, u);
          case y: {
            var g = t, w = g._payload, _ = g._init;
            try {
              return Z(_(w), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, xe = {}, _e = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        _e.setExtraStackFrame(u);
      } else
        _e.setExtraStackFrame(null);
    }
    function Qe(t, a, u, g, w) {
      {
        var _ = Function.call.bind(Q);
        for (var b in t)
          if (_(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var $ = Error((g || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, b, typeof m), ee(null)), m instanceof Error && !(m.message in xe) && (xe[m.message] = !0, ee(w), x("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
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
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ce;
    ce = {};
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
        var u = P(X.current.type);
        ce[u] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ce[u] = !0);
      }
    }
    function st(t, a) {
      {
        var u = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function ct(t, a) {
      {
        var u = function() {
          Re || (Re = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var ft = function(t, a, u, g, w, _, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: u,
        props: b,
        _owner: _
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
        value: g
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, u, g, w) {
      {
        var _, b = {}, m = null, $ = null;
        u !== void 0 && (Se(u), m = "" + u), ot(a) && (Se(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, w));
        for (_ in a)
          Q.call(a, _) && !nt.hasOwnProperty(_) && (b[_] = a[_]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (_ in S)
            b[_] === void 0 && (b[_] = S[_]);
        }
        if (m || $) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), $ && ct(b, E);
        }
        return ft(t, m, $, w, g, X.current, b);
      }
    }
    var fe = k.ReactCurrentOwner, Te = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        Te.setExtraStackFrame(u);
      } else
        Te.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (fe.current) {
          var t = P(fe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var $e = {};
    function dt(t) {
      {
        var a = Oe();
        if (!a) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = dt(a);
        if ($e[u])
          return;
        $e[u] = !0;
        var g = "";
        t && t._owner && t._owner !== fe.current && (g = " It was passed a child from " + P(t._owner.type) + "."), V(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var u = 0; u < t.length; u++) {
            var g = t[u];
            le(g) && Ne(g, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = R(t);
          if (typeof w == "function" && w !== t.entries)
            for (var _ = w.call(t), b; !(b = _.next()).done; )
              le(b.value) && Ne(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || a.$$typeof === h))
          u = a.propTypes;
        else
          return;
        if (u) {
          var g = P(a);
          Qe(u, t.props, "prop", g, t);
        } else if (a.PropTypes !== void 0 && !ue) {
          ue = !0;
          var w = P(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), u = 0; u < a.length; u++) {
          var g = a[u];
          if (g !== "children" && g !== "key") {
            V(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, u, g, w, _) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = lt(w);
          $ ? m += $ : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = ut(t, a, u, w, _);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (g)
              if (se(j)) {
                for (var U = 0; U < j.length; U++)
                  Ce(j[U], t);
                Object.freeze && Object.freeze(j);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function gt(t, a, u) {
      return Pe(t, a, u, !0);
    }
    function yt(t, a, u) {
      return Pe(t, a, u, !1);
    }
    var mt = yt, vt = gt;
    Mt.Fragment = i, Mt.jsx = mt, Mt.jsxs = vt;
  }()), Mt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = au() : e.exports = su();
})(kr);
const Ai = kr.exports.Fragment, Y = kr.exports.jsx, Be = kr.exports.jsxs, cu = ({
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
  }, [e]), /* @__PURE__ */ Y(iu, {
    isVisible: !!e,
    ...r,
    children: /* @__PURE__ */ Be(ou, {
      children: [/* @__PURE__ */ Y("div", {
        children: /* @__PURE__ */ Y("strong", {
          children: Yc(n == null ? void 0 : n.date)
        })
      }), /* @__PURE__ */ Be("div", {
        children: ["Open: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.open
        })]
      }), /* @__PURE__ */ Be("div", {
        children: ["Close: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.close
        })]
      }), /* @__PURE__ */ Be("div", {
        children: ["High: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.high
        })]
      }), /* @__PURE__ */ Be("div", {
        children: ["Low: ", /* @__PURE__ */ Y("em", {
          children: n == null ? void 0 : n.low
        })]
      })]
    })
  });
}, fu = {
  light: {
    bg: "#ffffff",
    text: "#273327",
    textSoft: "#444c44",
    textStrong: "#4a4a4a",
    subtle: "#f7faf7",
    border: "#ddeade",
    shadow: "#acc6ad",
    input: "#ffffff",
    outline: "#68c9ee",
    mark: "#57829514",
    special: "#578295",
    specialBg: "#598599",
    specialText: "#ffffff",
    specialShadow: "#425965",
    specialMark: "#ffffff14",
    light: "#ecf5fa",
    dark: "#364a53"
  },
  dark: {
    bg: "#202020",
    text: "#d1e4d1",
    textSoft: "#b4beb5",
    textStrong: "#bbbbbb",
    subtle: "#202521",
    border: "#273327",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#57a9c8",
    mark: "#6291a714",
    special: "#6291a7",
    specialBg: "#446777",
    specialText: "#dae0e4",
    specialShadow: "#152025",
    specialMark: "#dae0e414",
    light: "#b4d9ed",
    dark: "#243740"
  }
}, uu = {
  light: {
    bg: "#ffffff",
    text: "#27313c",
    textSoft: "#444b53",
    textStrong: "#4a4a4a",
    subtle: "#f7f9fd",
    border: "#dde8f6",
    shadow: "#aac1dc",
    input: "#ffffff",
    outline: "#e6b2bb",
    mark: "#e3417114",
    special: "#e34171",
    specialBg: "#e84575",
    specialText: "#ffffff",
    specialShadow: "#744f56",
    specialMark: "#ffffff14",
    light: "#fcf1f3",
    dark: "#5d3e44"
  },
  dark: {
    bg: "#202020",
    text: "#dcdfe5",
    textSoft: "#b8bcc2",
    textStrong: "#bbbbbb",
    subtle: "#212529",
    border: "#26313d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#dc8698",
    mark: "#d7678114",
    special: "#d76781",
    specialBg: "#a3425a",
    specialText: "#e4dedf",
    specialShadow: "#2a1a1d",
    specialMark: "#e4dedf14",
    light: "#edccd1",
    dark: "#452f33"
  }
}, lu = {
  light: {
    bg: "#ffffff",
    text: "#312a53",
    textSoft: "#4b4763",
    textStrong: "#4a4a4a",
    subtle: "#f9f9fd",
    border: "#e7e5f7",
    shadow: "#c0bbdf",
    input: "#ffffff",
    outline: "#b7bde7",
    mark: "#6178e214",
    special: "#6178e2",
    specialBg: "#667ce3",
    specialText: "#ffffff",
    specialShadow: "#545874",
    specialMark: "#ffffff14",
    light: "#f2f3fc",
    dark: "#404564"
  },
  dark: {
    bg: "#202020",
    text: "#dfdee4",
    textSoft: "#bbbbc1",
    textStrong: "#bbbbbb",
    subtle: "#242429",
    border: "#312f3d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#919bd7",
    mark: "#7886d214",
    special: "#7886d2",
    specialBg: "#495db1",
    specialText: "#dedfe4",
    specialShadow: "#1c1e2a",
    specialMark: "#dedfe414",
    light: "#cfd2ee",
    dark: "#313445"
  }
}, du = {
  light: {
    bg: "#ffffff",
    text: "#352f26",
    textSoft: "#4e4a43",
    textStrong: "#4a4a4a",
    subtle: "#fbf9f6",
    border: "#ede6d9",
    shadow: "#ccbda3",
    input: "#ffffff",
    outline: "#a9ca64",
    mark: "#70844a14",
    special: "#70844a",
    specialBg: "#73884c",
    specialText: "#ffffff",
    specialShadow: "#515b40",
    specialMark: "#ffffff14",
    light: "#e7fbc6",
    dark: "#414a33"
  },
  dark: {
    bg: "#202020",
    text: "#e5ded4",
    textSoft: "#bfbbb3",
    textStrong: "#bbbbbb",
    subtle: "#27241f",
    border: "#363022",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#8ca853",
    mark: "#7d935214",
    special: "#7d9352",
    specialBg: "#586839",
    specialText: "#d9e2cc",
    specialShadow: "#1c2014",
    specialMark: "#d9e2cc14",
    light: "#bfdf80",
    dark: "#303822"
  }
}, pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: fu,
  rose: uu,
  electron: lu,
  avocado: du
}, Symbol.toStringTag, { value: "Module" }));
var Di = { exports: {} }, At = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function hu() {
  if (Yn)
    return At;
  Yn = 1;
  var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, f, d) {
    var p, h = {}, y = null, v = null;
    d !== void 0 && (y = "" + d), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (p in f)
      i.call(f, p) && !s.hasOwnProperty(p) && (h[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        h[p] === void 0 && (h[p] = f[p]);
    return { $$typeof: r, type: l, key: y, ref: v, props: h, _owner: o.current };
  }
  return At.Fragment = n, At.jsx = c, At.jsxs = c, At;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function gu() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), T = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = T && t[T] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), g = 1; g < a; g++)
          u[g - 1] = arguments[g];
        N("error", t, u);
      }
    }
    function N(t, a, u) {
      {
        var g = k.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (a += "%s", u = u.concat([w]));
        var _ = u.map(function(b) {
          return String(b);
        });
        _.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, _);
      }
    }
    var z = !1, M = !1, O = !1, F = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === d || t === p || F || t === v || z || M || O || typeof t == "object" && t !== null && (t.$$typeof === y || t.$$typeof === h || t.$$typeof === c || t.$$typeof === l || t.$$typeof === f || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function D(t, a, u) {
      var g = t.displayName;
      if (g)
        return g;
      var w = a.displayName || a.name || "";
      return w !== "" ? u + "(" + w + ")" : u;
    }
    function B(t) {
      return t.displayName || "Context";
    }
    function P(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            var a = t;
            return B(a) + ".Consumer";
          case c:
            var u = t;
            return B(u._context) + ".Provider";
          case f:
            return D(t, t.render, "ForwardRef");
          case h:
            var g = t.displayName || null;
            return g !== null ? g : P(t.type) || "Memo";
          case y: {
            var w = t, _ = w._payload, b = w._init;
            try {
              return P(b(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, H = 0, te, re, ne, G, ye, me, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, me = console.groupCollapsed, ve = console.groupEnd;
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
        H++;
      }
    }
    function Ge() {
      {
        if (H--, H === 0) {
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
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: me
            }),
            groupEnd: L({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, oe;
    function K(t, a, u) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            oe = g && g[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function we(t, a) {
      if (!t || ae)
        return "";
      {
        var u = J.get(t);
        if (u !== void 0)
          return u;
      }
      var g;
      ae = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ie.current, ie.current = null, Xe();
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
              g = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              g = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            g = I;
          }
          t();
        }
      } catch (I) {
        if (I && g && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), $ = g.stack.split(`
`), S = m.length - 1, E = $.length - 1; S >= 1 && E >= 0 && m[S] !== $[E]; )
            E--;
          for (; S >= 1 && E >= 0; S--, E--)
            if (m[S] !== $[E]) {
              if (S !== 1 || E !== 1)
                do
                  if (S--, E--, E < 0 || m[S] !== $[E]) {
                    var j = `
` + m[S].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (S >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = _, Ge(), Error.prepareStackTrace = w;
      }
      var U = t ? t.displayName || t.name : "", je = U ? K(U) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, u) {
      return we(t, !1);
    }
    function Ze(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return we(t, Ze(t));
      if (typeof t == "string")
        return K(t);
      switch (t) {
        case d:
          return K("Suspense");
        case p:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return Je(t.render);
          case h:
            return Z(t.type, a, u);
          case y: {
            var g = t, w = g._payload, _ = g._init;
            try {
              return Z(_(w), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, xe = {}, _e = k.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        _e.setExtraStackFrame(u);
      } else
        _e.setExtraStackFrame(null);
    }
    function Qe(t, a, u, g, w) {
      {
        var _ = Function.call.bind(Q);
        for (var b in t)
          if (_(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var $ = Error((g || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (ee(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, b, typeof m), ee(null)), m instanceof Error && !(m.message in xe) && (xe[m.message] = !0, ee(w), x("Failed %s type: %s", u, m.message), ee(null));
          }
      }
    }
    var et = Array.isArray;
    function se(t) {
      return et(t);
    }
    function tt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
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
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, ce;
    ce = {};
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
        var u = P(X.current.type);
        ce[u] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(X.current.type), t.ref), ce[u] = !0);
      }
    }
    function st(t, a) {
      {
        var u = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function ct(t, a) {
      {
        var u = function() {
          Re || (Re = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var ft = function(t, a, u, g, w, _, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: u,
        props: b,
        _owner: _
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
        value: g
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, u, g, w) {
      {
        var _, b = {}, m = null, $ = null;
        u !== void 0 && (Se(u), m = "" + u), ot(a) && (Se(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, w));
        for (_ in a)
          Q.call(a, _) && !nt.hasOwnProperty(_) && (b[_] = a[_]);
        if (t && t.defaultProps) {
          var S = t.defaultProps;
          for (_ in S)
            b[_] === void 0 && (b[_] = S[_]);
        }
        if (m || $) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, E), $ && ct(b, E);
        }
        return ft(t, m, $, w, g, X.current, b);
      }
    }
    var fe = k.ReactCurrentOwner, Te = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, u = Z(t.type, t._source, a ? a.type : null);
        Te.setExtraStackFrame(u);
      } else
        Te.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (fe.current) {
          var t = P(fe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var $e = {};
    function dt(t) {
      {
        var a = Oe();
        if (!a) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = dt(a);
        if ($e[u])
          return;
        $e[u] = !0;
        var g = "";
        t && t._owner && t._owner !== fe.current && (g = " It was passed a child from " + P(t._owner.type) + "."), V(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, g), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var u = 0; u < t.length; u++) {
            var g = t[u];
            le(g) && Ne(g, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = R(t);
          if (typeof w == "function" && w !== t.entries)
            for (var _ = w.call(t), b; !(b = _.next()).done; )
              le(b.value) && Ne(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || a.$$typeof === h))
          u = a.propTypes;
        else
          return;
        if (u) {
          var g = P(a);
          Qe(u, t.props, "prop", g, t);
        } else if (a.PropTypes !== void 0 && !ue) {
          ue = !0;
          var w = P(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), u = 0; u < a.length; u++) {
          var g = a[u];
          if (g !== "children" && g !== "key") {
            V(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Pe(t, a, u, g, w, _) {
      {
        var b = q(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = lt(w);
          $ ? m += $ : m += Oe();
          var S;
          t === null ? S = "null" : se(t) ? S = "array" : t !== void 0 && t.$$typeof === r ? (S = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : S = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, m);
        }
        var E = ut(t, a, u, w, _);
        if (E == null)
          return E;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (g)
              if (se(j)) {
                for (var U = 0; U < j.length; U++)
                  Ce(j[U], t);
                Object.freeze && Object.freeze(j);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function gt(t, a, u) {
      return Pe(t, a, u, !0);
    }
    function yt(t, a, u) {
      return Pe(t, a, u, !1);
    }
    var mt = yt, vt = gt;
    tr.Fragment = i, tr.jsx = mt, tr.jsxs = vt;
  }()), tr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = hu() : e.exports = gu();
})(Di);
const yu = Di.exports.jsx, mu = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, vu = (e = "pebble") => ({
  colors: pu[e],
  ...mu
}), Un = (e) => Object.entries(e).reduce(
  (r, [n, i]) => `${r} --${n}: ${i};`,
  ""
), bu = ({ colors: { light: e, dark: r = e }, fonts: n, fontSizes: i } = vu()) => Vr`
  :root {
    ${Un(e)}
    font-family: ${n.join(", ")};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${Un(r)}
    }
  }
`;
bu();
const wu = ({
  color: e,
  isSpecial: r
} = {}) => {
  const n = r ? "special" : "border", i = r ? "specialText" : "textSoft", o = r ? "specialBg" : "subtle";
  return `
    border: 3px solid var(--${n});
    color: ${e || `var(--${i})`};
    background-color: var(--${o});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `;
}, xu = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, _u = ge.button(
  ({ status: e, minWidth: r, margin: n }) => br`
    ${wu({ color: e === "default" ? "" : xu[e] })}
    min-width: ${r};
    margin: ${n};
    cursor: pointer;
    &:hover:not([disabled]) {
      filter: brightness(115%);
    }
    &:disabled {
      background-color: var(--border);
      color: var(--textSoft);
      cursor: default;
    }
  `
), rr = ({
  children: e,
  status: r = "default",
  dataSelector: n = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...s
}) => /* @__PURE__ */ yu(_u, {
  status: r,
  ...s,
  minWidth: i,
  margin: o,
  "data-selector": n,
  children: e
}), ku = ge.div`
  margin: 10px;
  position: absolute;
`, Hn = ge.div(
  ({ rotate: e }) => br`
    rotate: ${e}deg;
  `
), Ue = 0.2, qn = 100, Su = ({
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
    panLevel: d,
    zoomLevel: p
  }) => {
    const h = d + qn / p;
    return {
      panLevel: n.first <= 0 ? d : h,
      zoomLevel: p,
      transition: !0
    };
  }), [n.first]), c = De(() => r(({
    panLevel: d,
    zoomLevel: p
  }) => {
    const h = d - qn / p;
    return {
      panLevel: h > 1 ? h : 1,
      zoomLevel: p,
      transition: !0
    };
  }), []), l = De(() => r(({
    panLevel: d,
    zoomLevel: p
  }) => ({
    zoomLevel: +(p - Ue > 0 ? p - Ue : Ue / 2).toFixed(2),
    panLevel: d,
    transition: !0
  })), []), f = De(() => r(({
    panLevel: d,
    zoomLevel: p
  }) => ({
    zoomLevel: +(p === Ue / 2 ? Ue : p + Ue).toFixed(2),
    panLevel: d,
    transition: !0
  })), []);
  return Fe(() => {
    const d = ({
      key: p
    }) => {
      var y;
      const h = {
        ArrowLeft: s,
        ArrowRight: c
      };
      (y = h[p]) == null || y.call(h);
    };
    return addEventListener("keydown", d), () => removeEventListener("keydown", d);
  }, [n.first]), /* @__PURE__ */ Be(ku, {
    children: [/* @__PURE__ */ Y(rr, {
      ...o,
      onClick: s,
      disabled: n.first <= 0,
      children: /* @__PURE__ */ Y(Hn, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ Y(rr, {
      ...o,
      onClick: l,
      disabled: e < Ue,
      children: "\u2796"
    }), /* @__PURE__ */ Y(rr, {
      ...o,
      onClick: f,
      disabled: e >= Ue * 10,
      children: "\u2795"
    }), /* @__PURE__ */ Y(rr, {
      ...o,
      onClick: c,
      disabled: n.last >= i - 1 || n.last - n.first > i,
      children: /* @__PURE__ */ Y(Hn, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, Eu = ({
  width: e,
  height: r
}) => {
  const n = pe, i = pe, o = {
    x: n,
    y: i,
    width: e ? e - He[1] : 0,
    height: r ? r - He[0] : 0
  };
  return /* @__PURE__ */ Be(Ai, {
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
      y2: i + o.height - pe,
      stroke: "#dedede",
      strokeWidth: 1
    }), /* @__PURE__ */ Be("defs", {
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
}, Ru = ge.svg`
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
      stroke: var(--textSoft);
      stroke-width: 2;
    }
  }

  & line.wicks {
    stroke: var(--text);
    stroke-width: 1;
  }

  & line.clone {
    stroke: var(--shadow);
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`, Tu = ge.div`
  border: 1px solid var(--border);
  background: linear-gradient(
    135deg,
    var(--bg) 0%,
    var(--subtle) 50%,
    var(--border) 51%,
    var(--bg) 100%
  );
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`, Ou = ge.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, $u = (e, r) => {
  Fe(() => {
    let n = !1, i = 0, o = 0, s = {};
    const c = (R) => {
      r(({ panLevel: k, zoomLevel: x }) => {
        let N = x - R;
        return N = N < 0.1 ? 0.1 : N, {
          zoomLevel: Math.round(N * 1e3) / 1e3,
          panLevel: k,
          transition: !1
        };
      });
    }, l = Lr(c, 100), f = (R) => {
      r(({ panLevel: k, zoomLevel: x }) => {
        const N = k + R / x;
        return {
          panLevel: N > 1 ? N : 1,
          zoomLevel: x,
          transition: !1
        };
      });
    }, d = ({ pointerId: R, pageX: k, pageY: x }) => {
      n = !0, i = 0, o = 0, s[R] = { pageX: k, pageY: x };
    }, p = (R) => {
      n = !1, delete s[R.pointerId], r((k) => ({
        ...k,
        transition: !0
      }));
    }, h = ({ clientX: R, pointerId: k, pageX: x, pageY: N }) => {
      const z = Object.values(s);
      if (n)
        if ((z == null ? void 0 : z.length) === 2) {
          if (Object.keys(s).indexOf(`${k}`) !== 1)
            return;
          s[k] = { pageX: x, pageY: N };
          const M = z[0].pageX - z[1].pageX, O = z[0].pageY - z[1].pageY, F = Math.sqrt(M * M + O * O), W = o ? (o - F) / 120 : 0;
          o = F, c(W);
          return;
        } else {
          const M = i ? R - i : 0;
          i = R, f(M);
        }
    }, y = Lr(h, 100), v = (R) => {
      R.ctrlKey && (l(R.deltaY * 6e-3), R.preventDefault());
    }, T = (R) => R.pointerType === "mouse" ? y(R) : h(R), C = (R = "remove", k) => {
      var z;
      const x = window[`${R}EventListener`], N = (z = e.current) == null ? void 0 : z[`${R}EventListener`];
      x("pointerup", p), N == null || N("pointerdown", d), N == null || N("pointermove", T), N == null || N("wheel", v, k);
    };
    return C("add", { passive: !1 }), C;
  }, [e.current]);
}, Nu = {
  light: {
    bg: "#ffffff",
    text: "#273327",
    textSoft: "#444c44",
    textStrong: "#4a4a4a",
    subtle: "#f7faf7",
    border: "#ddeade",
    shadow: "#acc6ad",
    input: "#ffffff",
    outline: "#68c9ee",
    mark: "#57829514",
    special: "#578295",
    specialBg: "#598599",
    specialText: "#ffffff",
    specialShadow: "#425965",
    specialMark: "#ffffff14",
    light: "#ecf5fa",
    dark: "#364a53"
  },
  dark: {
    bg: "#202020",
    text: "#d1e4d1",
    textSoft: "#b4beb5",
    textStrong: "#bbbbbb",
    subtle: "#202521",
    border: "#273327",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#57a9c8",
    mark: "#6291a714",
    special: "#6291a7",
    specialBg: "#446777",
    specialText: "#dae0e4",
    specialShadow: "#152025",
    specialMark: "#dae0e414",
    light: "#b4d9ed",
    dark: "#243740"
  }
}, Cu = {
  light: {
    bg: "#ffffff",
    text: "#27313c",
    textSoft: "#444b53",
    textStrong: "#4a4a4a",
    subtle: "#f7f9fd",
    border: "#dde8f6",
    shadow: "#aac1dc",
    input: "#ffffff",
    outline: "#e6b2bb",
    mark: "#e3417114",
    special: "#e34171",
    specialBg: "#e84575",
    specialText: "#ffffff",
    specialShadow: "#744f56",
    specialMark: "#ffffff14",
    light: "#fcf1f3",
    dark: "#5d3e44"
  },
  dark: {
    bg: "#202020",
    text: "#dcdfe5",
    textSoft: "#b8bcc2",
    textStrong: "#bbbbbb",
    subtle: "#212529",
    border: "#26313d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#dc8698",
    mark: "#d7678114",
    special: "#d76781",
    specialBg: "#a3425a",
    specialText: "#e4dedf",
    specialShadow: "#2a1a1d",
    specialMark: "#e4dedf14",
    light: "#edccd1",
    dark: "#452f33"
  }
}, Pu = {
  light: {
    bg: "#ffffff",
    text: "#312a53",
    textSoft: "#4b4763",
    textStrong: "#4a4a4a",
    subtle: "#f9f9fd",
    border: "#e7e5f7",
    shadow: "#c0bbdf",
    input: "#ffffff",
    outline: "#b7bde7",
    mark: "#6178e214",
    special: "#6178e2",
    specialBg: "#667ce3",
    specialText: "#ffffff",
    specialShadow: "#545874",
    specialMark: "#ffffff14",
    light: "#f2f3fc",
    dark: "#404564"
  },
  dark: {
    bg: "#202020",
    text: "#dfdee4",
    textSoft: "#bbbbc1",
    textStrong: "#bbbbbb",
    subtle: "#242429",
    border: "#312f3d",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#919bd7",
    mark: "#7886d214",
    special: "#7886d2",
    specialBg: "#495db1",
    specialText: "#dedfe4",
    specialShadow: "#1c1e2a",
    specialMark: "#dedfe414",
    light: "#cfd2ee",
    dark: "#313445"
  }
}, ju = {
  light: {
    bg: "#ffffff",
    text: "#352f26",
    textSoft: "#4e4a43",
    textStrong: "#4a4a4a",
    subtle: "#fbf9f6",
    border: "#ede6d9",
    shadow: "#ccbda3",
    input: "#ffffff",
    outline: "#a9ca64",
    mark: "#70844a14",
    special: "#70844a",
    specialBg: "#73884c",
    specialText: "#ffffff",
    specialShadow: "#515b40",
    specialMark: "#ffffff14",
    light: "#e7fbc6",
    dark: "#414a33"
  },
  dark: {
    bg: "#202020",
    text: "#e5ded4",
    textSoft: "#bfbbb3",
    textStrong: "#bbbbbb",
    subtle: "#27241f",
    border: "#363022",
    shadow: "#000000",
    input: "#1c1c1c",
    outline: "#8ca853",
    mark: "#7d935214",
    special: "#7d9352",
    specialBg: "#586839",
    specialText: "#d9e2cc",
    specialShadow: "#1c2014",
    specialMark: "#d9e2cc14",
    light: "#bfdf80",
    dark: "#303822"
  }
}, Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: Nu,
  rose: Cu,
  electron: Pu,
  avocado: ju
}, Symbol.toStringTag, { value: "Module" })), Au = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, Du = (e = "pebble") => ({
  colors: Mu[e],
  ...Au
}), Xn = (e) => Object.entries(e).reduce(
  (r, [n, i]) => `${r} --${n}: ${i};`,
  ""
), Fu = ({ colors: { light: e, dark: r = e }, fonts: n, fontSizes: i } = Du()) => Vr`
  :root {
    ${Xn(e)}
    font-family: ${n.join(", ")};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${Xn(r)}
    }
  }
`;
Fu();
const Iu = ({
  color: e,
  isSpecial: r
} = {}) => {
  const n = r ? "special" : "border", i = r ? "specialText" : "textSoft", o = r ? "specialBg" : "subtle";
  return `
    border: 3px solid var(--${n});
    color: ${e || `var(--${i})`};
    background-color: var(--${o});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `;
}, Lu = ge.div`
  position: absolute;
  ${Iu()}
  padding: 3px;
  font-size: 0.65em;
  font-weight: bold;
  transition: all 0.2s;
`, zu = ({
  value: e,
  x: r,
  y: n
}) => n > pe ? /* @__PURE__ */ Y(Lu, {
  style: {
    left: r - pe * 2 + 2,
    top: n + pe - 4
  },
  children: e.toLocaleString("en-US")
}) : /* @__PURE__ */ Y(Ai, {}), Yu = ({
  data: e = []
}) => {
  const r = It(null), [n, i] = Ye(ja), o = Bc(r, e.length, n), s = Rf(e, o);
  Ma(r, e, s.scales, o);
  const c = kc(r, e, o, s, n.transition);
  return $u(r, i), /* @__PURE__ */ Be(Tu, {
    children: [e != null && e.length ? /* @__PURE__ */ Y(Su, {
      svgRef: r,
      controls: n,
      setControls: i,
      visibleRange: o.visibleRange,
      length: e.length
    }) : /* @__PURE__ */ Y(Ou, {
      children: /* @__PURE__ */ Y(Yi, {})
    }), /* @__PURE__ */ Y(Ru, {
      ref: r,
      children: /* @__PURE__ */ Y(Eu, {
        ...o.sizes
      })
    }), /* @__PURE__ */ Y(cu, {
      ...c
    }), e.length && /* @__PURE__ */ Y(zu, {
      value: e[e.length - 1].close,
      x: o.sizes.width,
      y: s.scales.yScale(e[e.length - 1].close)
    })]
  });
};
export {
  Yu as default
};
