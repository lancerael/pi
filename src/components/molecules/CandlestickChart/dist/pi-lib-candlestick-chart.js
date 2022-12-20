import qe, { useState as Ue, useEffect as De, useRef as It, useCallback as Fe } from "react";
import he, { keyframes as Bn, css as br } from "styled-components";
const qn = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Xn = Bn`
  to {
    rotate: 360deg;
  }
`, Fi = Bn`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, Di = he.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Ii = he.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Xn} 2s linear infinite;
  margin: 2px;
`, rn = he.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Vt = he.div(
  ({ delay: e }) => br`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${qn.pending};
    animation: ${Fi} 0.3s linear alternate infinite;

    ${e ? "animation-delay: 0.2s;" : ""}
  `
);
he.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${qn.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${Xn} 2s linear infinite;
`;
var Hr = { exports: {} }, $t = {};
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
function Li() {
  if (nn)
    return $t;
  nn = 1;
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
  return $t.Fragment = n, $t.jsx = u, $t.jsxs = u, $t;
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
var on;
function Wi() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), O = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = O && t[O] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        N("error", t, l);
      }
    }
    function N(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var W = !1, A = !1, T = !1, D = !1, z = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || z || t === o || t === p || t === d || D || t === v || W || A || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function F(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function Y(t) {
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
            return Y(a) + ".Consumer";
          case u:
            var l = t;
            return Y(l._context) + ".Provider";
          case c:
            return F(t, t.render, "ForwardRef");
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
    function K(t, a, l) {
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
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
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
`), $ = y.stack.split(`
`), E = m.length - 1, S = $.length - 1; E >= 1 && S >= 0 && m[E] !== $[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (m[E] !== $[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || m[E] !== $[S]) {
                    var j = `
` + m[E].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? K(H) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, l) {
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
        return K(t);
      switch (t) {
        case p:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Je(t.render);
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
                var $ = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              m = E;
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
    function Ee(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Re, ue;
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
          Se || (Se = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
        var x, b = {}, m = null, $ = null;
        l !== void 0 && (Ee(l), m = "" + l), ot(a) && (Ee(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var E = t.defaultProps;
          for (x in E)
            b[x] === void 0 && (b[x] = E[x]);
        }
        if (m || $) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, S), $ && ut(b, S);
        }
        return ct(t, m, $, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, Oe = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        Oe.setExtraStackFrame(l);
      } else
        Oe.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Te() {
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
    var $e = {};
    function pt(t) {
      {
        var a = Te();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if ($e[l])
          return;
        $e[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ne(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ne(b.value, a);
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
          var $ = ft(_);
          $ ? m += $ : m += Te();
          var E;
          t === null ? E = "null" : se(t) ? E = "array" : t !== void 0 && t.$$typeof === r ? (E = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, m);
        }
        var S = lt(t, a, l, _, x);
        if (S == null)
          return S;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ce(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(S) : dt(S), S;
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
  process.env.NODE_ENV === "production" ? e.exports = Li() : e.exports = Wi();
})(Hr);
const Nt = Hr.exports.jsx, Er = Hr.exports.jsxs, zi = () => /* @__PURE__ */ Nt(Di, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ Er(Ii, {
    children: [/* @__PURE__ */ Er(rn, {
      children: [/* @__PURE__ */ Nt(Vt, {
        delay: !0
      }), /* @__PURE__ */ Nt(Vt, {})]
    }), /* @__PURE__ */ Er(rn, {
      children: [/* @__PURE__ */ Nt(Vt, {}), /* @__PURE__ */ Nt(Vt, {
        delay: !0
      })]
    })]
  })
});
function Yi(e) {
  return e;
}
var Sr = 1, nr = 2, Pr = 3, Bt = 4, an = 1e-6;
function Ui(e) {
  return "translate(" + e + ",0)";
}
function Vi(e) {
  return "translate(0," + e + ")";
}
function Hi(e) {
  return (r) => +e(r);
}
function Bi(e, r) {
  return r = Math.max(0, e.bandwidth() - r * 2) / 2, e.round() && (r = Math.round(r)), (n) => +e(n) + r;
}
function qi() {
  return !this.__axis;
}
function Gn(e, r) {
  var n = [], i = null, o = null, s = 6, u = 6, f = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = e === Sr || e === Bt ? -1 : 1, d = e === Bt || e === nr ? "x" : "y", h = e === Sr || e === Pr ? Ui : Vi;
  function g(v) {
    var O = i == null ? r.ticks ? r.ticks.apply(r, n) : r.domain() : i, C = o == null ? r.tickFormat ? r.tickFormat.apply(r, n) : Yi : o, R = Math.max(s, 0) + f, k = r.range(), w = +k[0] + c, N = +k[k.length - 1] + c, W = (r.bandwidth ? Bi : Hi)(r.copy(), c), A = v.selection ? v.selection() : v, T = A.selectAll(".domain").data([null]), D = A.selectAll(".tick").data(O, r).order(), z = D.exit(), M = D.enter().append("g").attr("class", "tick"), q = D.select("line"), F = D.select("text");
    T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), D = D.merge(M), q = q.merge(M.append("line").attr("stroke", "currentColor").attr(d + "2", p * s)), F = F.merge(M.append("text").attr("fill", "currentColor").attr(d, p * R).attr("dy", e === Sr ? "0em" : e === Pr ? "0.71em" : "0.32em")), v !== A && (T = T.transition(v), D = D.transition(v), q = q.transition(v), F = F.transition(v), z = z.transition(v).attr("opacity", an).attr("transform", function(Y) {
      return isFinite(Y = W(Y)) ? h(Y + c) : this.getAttribute("transform");
    }), M.attr("opacity", an).attr("transform", function(Y) {
      var P = this.parentNode.__axis;
      return h((P && isFinite(P = P(Y)) ? P : W(Y)) + c);
    })), z.remove(), T.attr("d", e === Bt || e === nr ? u ? "M" + p * u + "," + w + "H" + c + "V" + N + "H" + p * u : "M" + c + "," + w + "V" + N : u ? "M" + w + "," + p * u + "V" + c + "H" + N + "V" + p * u : "M" + w + "," + c + "H" + N), D.attr("opacity", 1).attr("transform", function(Y) {
      return h(W(Y) + c);
    }), q.attr(d + "2", p * s), F.attr(d, p * R).text(C), A.filter(qi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === nr ? "start" : e === Bt ? "end" : "middle"), A.each(function() {
      this.__axis = W;
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
function Xi(e) {
  return Gn(nr, e);
}
function Gi(e) {
  return Gn(Pr, e);
}
var jr = "http://www.w3.org/1999/xhtml";
const sn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: jr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function _r(e) {
  var r = e += "", n = r.indexOf(":");
  return n >= 0 && (r = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), sn.hasOwnProperty(r) ? { space: sn[r], local: e } : e;
}
function Ki(e) {
  return function() {
    var r = this.ownerDocument, n = this.namespaceURI;
    return n === jr && r.documentElement.namespaceURI === jr ? r.createElement(e) : r.createElementNS(n, e);
  };
}
function Ji(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Kn(e) {
  var r = _r(e);
  return (r.local ? Ji : Ki)(r);
}
function Zi() {
}
function Br(e) {
  return e == null ? Zi : function() {
    return this.querySelector(e);
  };
}
function Qi(e) {
  typeof e != "function" && (e = Br(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = new Array(u), c, p, d = 0; d < u; ++d)
      (c = s[d]) && (p = e.call(c, c.__data__, d, s)) && ("__data__" in c && (p.__data__ = c.__data__), f[d] = p);
  return new ye(i, this._parents);
}
function eo(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function to() {
  return [];
}
function Jn(e) {
  return e == null ? to : function() {
    return this.querySelectorAll(e);
  };
}
function ro(e) {
  return function() {
    return eo(e.apply(this, arguments));
  };
}
function no(e) {
  typeof e == "function" ? e = ro(e) : e = Jn(e);
  for (var r = this._groups, n = r.length, i = [], o = [], s = 0; s < n; ++s)
    for (var u = r[s], f = u.length, c, p = 0; p < f; ++p)
      (c = u[p]) && (i.push(e.call(c, c.__data__, p, u)), o.push(c));
  return new ye(i, o);
}
function Zn(e) {
  return function() {
    return this.matches(e);
  };
}
function Qn(e) {
  return function(r) {
    return r.matches(e);
  };
}
var io = Array.prototype.find;
function oo(e) {
  return function() {
    return io.call(this.children, e);
  };
}
function ao() {
  return this.firstElementChild;
}
function so(e) {
  return this.select(e == null ? ao : oo(typeof e == "function" ? e : Qn(e)));
}
var uo = Array.prototype.filter;
function co() {
  return Array.from(this.children);
}
function lo(e) {
  return function() {
    return uo.call(this.children, e);
  };
}
function fo(e) {
  return this.selectAll(e == null ? co : lo(typeof e == "function" ? e : Qn(e)));
}
function po(e) {
  typeof e != "function" && (e = Zn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = [], c, p = 0; p < u; ++p)
      (c = s[p]) && e.call(c, c.__data__, p, s) && f.push(c);
  return new ye(i, this._parents);
}
function ei(e) {
  return new Array(e.length);
}
function ho() {
  return new ye(this._enter || this._groups.map(ei), this._parents);
}
function ur(e, r) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = r;
}
ur.prototype = {
  constructor: ur,
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
function yo(e) {
  return function() {
    return e;
  };
}
function go(e, r, n, i, o, s) {
  for (var u = 0, f, c = r.length, p = s.length; u < p; ++u)
    (f = r[u]) ? (f.__data__ = s[u], i[u] = f) : n[u] = new ur(e, s[u]);
  for (; u < c; ++u)
    (f = r[u]) && (o[u] = f);
}
function mo(e, r, n, i, o, s, u) {
  var f, c, p = /* @__PURE__ */ new Map(), d = r.length, h = s.length, g = new Array(d), v;
  for (f = 0; f < d; ++f)
    (c = r[f]) && (g[f] = v = u.call(c, c.__data__, f, r) + "", p.has(v) ? o[f] = c : p.set(v, c));
  for (f = 0; f < h; ++f)
    v = u.call(e, s[f], f, s) + "", (c = p.get(v)) ? (i[f] = c, c.__data__ = s[f], p.delete(v)) : n[f] = new ur(e, s[f]);
  for (f = 0; f < d; ++f)
    (c = r[f]) && p.get(g[f]) === c && (o[f] = c);
}
function vo(e) {
  return e.__data__;
}
function bo(e, r) {
  if (!arguments.length)
    return Array.from(this, vo);
  var n = r ? mo : go, i = this._parents, o = this._groups;
  typeof e != "function" && (e = yo(e));
  for (var s = o.length, u = new Array(s), f = new Array(s), c = new Array(s), p = 0; p < s; ++p) {
    var d = i[p], h = o[p], g = h.length, v = _o(e.call(d, d && d.__data__, p, i)), O = v.length, C = f[p] = new Array(O), R = u[p] = new Array(O), k = c[p] = new Array(g);
    n(d, h, C, R, k, v, r);
    for (var w = 0, N = 0, W, A; w < O; ++w)
      if (W = C[w]) {
        for (w >= N && (N = w + 1); !(A = R[N]) && ++N < O; )
          ;
        W._next = A || null;
      }
  }
  return u = new ye(u, i), u._enter = f, u._exit = c, u;
}
function _o(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wo() {
  return new ye(this._exit || this._groups.map(ei), this._parents);
}
function xo(e, r, n) {
  var i = this.enter(), o = this, s = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), r != null && (o = r(o), o && (o = o.selection())), n == null ? s.remove() : n(s), i && o ? i.merge(o).order() : o;
}
function ko(e) {
  for (var r = e.selection ? e.selection() : e, n = this._groups, i = r._groups, o = n.length, s = i.length, u = Math.min(o, s), f = new Array(o), c = 0; c < u; ++c)
    for (var p = n[c], d = i[c], h = p.length, g = f[c] = new Array(h), v, O = 0; O < h; ++O)
      (v = p[O] || d[O]) && (g[O] = v);
  for (; c < o; ++c)
    f[c] = n[c];
  return new ye(f, this._parents);
}
function Eo() {
  for (var e = this._groups, r = -1, n = e.length; ++r < n; )
    for (var i = e[r], o = i.length - 1, s = i[o], u; --o >= 0; )
      (u = i[o]) && (s && u.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(u, s), s = u);
  return this;
}
function So(e) {
  e || (e = Ro);
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
function Ro(e, r) {
  return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Oo() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function To() {
  return Array.from(this);
}
function $o() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length; o < s; ++o) {
      var u = i[o];
      if (u)
        return u;
    }
  return null;
}
function No() {
  let e = 0;
  for (const r of this)
    ++e;
  return e;
}
function Co() {
  return !this.node();
}
function Po(e) {
  for (var r = this._groups, n = 0, i = r.length; n < i; ++n)
    for (var o = r[n], s = 0, u = o.length, f; s < u; ++s)
      (f = o[s]) && e.call(f, f.__data__, s, o);
  return this;
}
function jo(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ao(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mo(e, r) {
  return function() {
    this.setAttribute(e, r);
  };
}
function Fo(e, r) {
  return function() {
    this.setAttributeNS(e.space, e.local, r);
  };
}
function Do(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Io(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Lo(e, r) {
  var n = _r(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((r == null ? n.local ? Ao : jo : typeof r == "function" ? n.local ? Io : Do : n.local ? Fo : Mo)(n, r));
}
function ti(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Wo(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function zo(e, r, n) {
  return function() {
    this.style.setProperty(e, r, n);
  };
}
function Yo(e, r, n) {
  return function() {
    var i = r.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function Uo(e, r, n) {
  return arguments.length > 1 ? this.each((r == null ? Wo : typeof r == "function" ? Yo : zo)(e, r, n == null ? "" : n)) : Rt(this.node(), e);
}
function Rt(e, r) {
  return e.style.getPropertyValue(r) || ti(e).getComputedStyle(e, null).getPropertyValue(r);
}
function Vo(e) {
  return function() {
    delete this[e];
  };
}
function Ho(e, r) {
  return function() {
    this[e] = r;
  };
}
function Bo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function qo(e, r) {
  return arguments.length > 1 ? this.each((r == null ? Vo : typeof r == "function" ? Bo : Ho)(e, r)) : this.node()[e];
}
function ri(e) {
  return e.trim().split(/^|\s+/);
}
function qr(e) {
  return e.classList || new ni(e);
}
function ni(e) {
  this._node = e, this._names = ri(e.getAttribute("class") || "");
}
ni.prototype = {
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
function ii(e, r) {
  for (var n = qr(e), i = -1, o = r.length; ++i < o; )
    n.add(r[i]);
}
function oi(e, r) {
  for (var n = qr(e), i = -1, o = r.length; ++i < o; )
    n.remove(r[i]);
}
function Xo(e) {
  return function() {
    ii(this, e);
  };
}
function Go(e) {
  return function() {
    oi(this, e);
  };
}
function Ko(e, r) {
  return function() {
    (r.apply(this, arguments) ? ii : oi)(this, e);
  };
}
function Jo(e, r) {
  var n = ri(e + "");
  if (arguments.length < 2) {
    for (var i = qr(this.node()), o = -1, s = n.length; ++o < s; )
      if (!i.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof r == "function" ? Ko : r ? Xo : Go)(n, r));
}
function Zo() {
  this.textContent = "";
}
function Qo(e) {
  return function() {
    this.textContent = e;
  };
}
function ea(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.textContent = r == null ? "" : r;
  };
}
function ta(e) {
  return arguments.length ? this.each(e == null ? Zo : (typeof e == "function" ? ea : Qo)(e)) : this.node().textContent;
}
function ra() {
  this.innerHTML = "";
}
function na(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ia(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.innerHTML = r == null ? "" : r;
  };
}
function oa(e) {
  return arguments.length ? this.each(e == null ? ra : (typeof e == "function" ? ia : na)(e)) : this.node().innerHTML;
}
function aa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sa() {
  return this.each(aa);
}
function ua() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ca() {
  return this.each(ua);
}
function la(e) {
  var r = typeof e == "function" ? e : Kn(e);
  return this.select(function() {
    return this.appendChild(r.apply(this, arguments));
  });
}
function fa() {
  return null;
}
function pa(e, r) {
  var n = typeof e == "function" ? e : Kn(e), i = r == null ? fa : typeof r == "function" ? r : Br(r);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function da() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ha() {
  return this.each(da);
}
function ya() {
  var e = this.cloneNode(!1), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function ga() {
  var e = this.cloneNode(!0), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function ma(e) {
  return this.select(e ? ga : ya);
}
function va(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ba(e) {
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
function wa(e) {
  return function() {
    var r = this.__on;
    if (!!r) {
      for (var n = 0, i = -1, o = r.length, s; n < o; ++n)
        s = r[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : r[++i] = s;
      ++i ? r.length = i : delete this.__on;
    }
  };
}
function xa(e, r, n) {
  return function() {
    var i = this.__on, o, s = ba(r);
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
function ka(e, r, n) {
  var i = _a(e + ""), o, s = i.length, u;
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
  for (f = r ? xa : wa, o = 0; o < s; ++o)
    this.each(f(i[o], r, n));
  return this;
}
function ai(e, r, n) {
  var i = ti(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(r, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(r, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(r, !1, !1)), e.dispatchEvent(o);
}
function Ea(e, r) {
  return function() {
    return ai(this, e, r);
  };
}
function Sa(e, r) {
  return function() {
    return ai(this, e, r.apply(this, arguments));
  };
}
function Ra(e, r) {
  return this.each((typeof r == "function" ? Sa : Ea)(e, r));
}
function* Oa() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length, u; o < s; ++o)
      (u = i[o]) && (yield u);
}
var si = [null];
function ye(e, r) {
  this._groups = e, this._parents = r;
}
function Yt() {
  return new ye([[document.documentElement]], si);
}
function Ta() {
  return this;
}
ye.prototype = Yt.prototype = {
  constructor: ye,
  select: Qi,
  selectAll: no,
  selectChild: so,
  selectChildren: fo,
  filter: po,
  data: bo,
  enter: ho,
  exit: wo,
  join: xo,
  merge: ko,
  selection: Ta,
  order: Eo,
  sort: So,
  call: Oo,
  nodes: To,
  node: $o,
  size: No,
  empty: Co,
  each: Po,
  attr: Lo,
  style: Uo,
  property: qo,
  classed: Jo,
  text: ta,
  html: oa,
  raise: sa,
  lower: ca,
  append: la,
  insert: pa,
  remove: ha,
  clone: ma,
  datum: va,
  on: ka,
  dispatch: Ra,
  [Symbol.iterator]: Oa
};
function bt(e) {
  return typeof e == "string" ? new ye([[document.querySelector(e)]], [document.documentElement]) : new ye([[e]], si);
}
const $a = 500, de = 10, Be = [55, 50], ui = 0.3, Na = 10, Ca = {
  zoomLevel: 1,
  panLevel: 1,
  transition: !0
}, Rr = {}, qt = (e = "", r, n) => {
  var h;
  const i = Math.round((h = n.bandwidth) == null ? void 0 : h.call(n)) || 0, o = `${e}-${r}-${i}`;
  if (Rr[o] !== void 0)
    return Rr[o];
  let s = "";
  const u = new Date(e), [f, c, p] = e.split("-");
  p === "01" && (c === "01" ? s = f : s = u.toLocaleString("en-UK", {
    month: "short"
  }));
  let d = [];
  return i > 1 && d.push(16), i > 3 && d.push(8, 24), i > 7 && (d = [4, 7, 10, 13, 16, 19, 22, 25, 28]), d.includes(Number(p)) && (s = p), n.domain().length - 1 === r && (s = p), Rr[o] = s, s;
}, Pa = (e, r, n, i) => {
  const [o, s] = Ue(), [u, f] = Ue(), { xScale: c, yScale: p } = n, {
    sizes: { width: d, height: h },
    visibleRange: { offset: g, first: v, last: O }
  } = i;
  De(() => {
    !e.current || (bt(e.current).select("g.x-axis, y.y-axis").remove(), s(
      bt(e.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), f(bt(e.current).append("g").classed("y-axis", !0)));
  }, []), De(() => {
    !c.domain || !r || (o.call(Gi(c)).attr("transform", `translate(${g},${h - Be[0]})`).selectAll("text").classed(
      "emphasise",
      (C, R) => qt(C, R, c).length > 2
    ).attr("text-anchor", "end").attr("x", () => -16).attr("y", -4).attr("transform", "rotate(270)").text((C, R) => qt(C, R, c)), o.selectAll("line.clone").remove(), o.selectAll("line").attr(
      "y2",
      (C, R) => qt(C, R, c).length ? 12 : 6
    ).each((C, R, k) => {
      if (R > v && R < O && qt(C, R, c).length) {
        var w = k[R].parentNode.appendChild(k[R].cloneNode(!0));
        bt(w).classed("clone", !0).attr("y1", -h + Be[0] + de).attr("y2", -1);
      }
    }), u.call(Xi(p)).attr(
      "transform",
      `translate(${d - Be[1] + de}, 0)`
    ), u.selectAll("line.clone").remove(), u.selectAll("line").each((C, R, k) => {
      var w = k[R].parentNode.appendChild(k[R].cloneNode(!0));
      bt(w).classed("clone", !0).attr("x2", -d + Be[1]).attr("x1", -1);
    }));
  }, [c, p]);
};
var ja = { value: () => {
} };
function ci() {
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
function Aa(e, r) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", o = n.indexOf(".");
    if (o >= 0 && (i = n.slice(o + 1), n = n.slice(0, o)), n && !r.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
ir.prototype = ci.prototype = {
  constructor: ir,
  on: function(e, r) {
    var n = this._, i = Aa(e + "", n), o, s = -1, u = i.length;
    if (arguments.length < 2) {
      for (; ++s < u; )
        if ((o = (e = i[s]).type) && (o = Ma(n[o], e.name)))
          return o;
      return;
    }
    if (r != null && typeof r != "function")
      throw new Error("invalid callback: " + r);
    for (; ++s < u; )
      if (o = (e = i[s]).type)
        n[o] = un(n[o], e.name, r);
      else if (r == null)
        for (o in n)
          n[o] = un(n[o], e.name, null);
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
function Ma(e, r) {
  for (var n = 0, i = e.length, o; n < i; ++n)
    if ((o = e[n]).name === r)
      return o.value;
}
function un(e, r, n) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === r) {
      e[i] = ja, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: r, value: n }), e;
}
var Ot = 0, Ft = 0, Ct = 0, li = 1e3, cr, Dt, lr = 0, xt = 0, wr = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, fi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Xr() {
  return xt || (fi(Fa), xt = Lt.now() + wr);
}
function Fa() {
  xt = 0;
}
function fr() {
  this._call = this._time = this._next = null;
}
fr.prototype = pi.prototype = {
  constructor: fr,
  restart: function(e, r, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Xr() : +n) + (r == null ? 0 : +r), !this._next && Dt !== this && (Dt ? Dt._next = this : cr = this, Dt = this), this._call = e, this._time = n, Ar();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ar());
  }
};
function pi(e, r, n) {
  var i = new fr();
  return i.restart(e, r, n), i;
}
function Da() {
  Xr(), ++Ot;
  for (var e = cr, r; e; )
    (r = xt - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
  --Ot;
}
function cn() {
  xt = (lr = Lt.now()) + wr, Ot = Ft = 0;
  try {
    Da();
  } finally {
    Ot = 0, La(), xt = 0;
  }
}
function Ia() {
  var e = Lt.now(), r = e - lr;
  r > li && (wr -= r, lr = e);
}
function La() {
  for (var e, r = cr, n, i = 1 / 0; r; )
    r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (n = r._next, r._next = null, r = e ? e._next = n : cr = n);
  Dt = e, Ar(i);
}
function Ar(e) {
  if (!Ot) {
    Ft && (Ft = clearTimeout(Ft));
    var r = e - xt;
    r > 24 ? (e < 1 / 0 && (Ft = setTimeout(cn, e - Lt.now() - wr)), Ct && (Ct = clearInterval(Ct))) : (Ct || (lr = Lt.now(), Ct = setInterval(Ia, li)), Ot = 1, fi(cn));
  }
}
function ln(e, r, n) {
  var i = new fr();
  return r = r == null ? 0 : +r, i.restart((o) => {
    i.stop(), e(o + r);
  }, r, n), i;
}
var Wa = ci("start", "end", "cancel", "interrupt"), za = [], di = 0, fn = 1, Mr = 2, or = 3, pn = 4, Fr = 5, ar = 6;
function xr(e, r, n, i, o, s) {
  var u = e.__transition;
  if (!u)
    e.__transition = {};
  else if (n in u)
    return;
  Ya(e, n, {
    name: r,
    index: i,
    group: o,
    on: Wa,
    tween: za,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: di
  });
}
function Gr(e, r) {
  var n = Ie(e, r);
  if (n.state > di)
    throw new Error("too late; already scheduled");
  return n;
}
function We(e, r) {
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
function Ya(e, r, n) {
  var i = e.__transition, o;
  i[r] = n, n.timer = pi(s, 0, n.time);
  function s(p) {
    n.state = fn, n.timer.restart(u, n.delay, n.time), n.delay <= p && u(p - n.delay);
  }
  function u(p) {
    var d, h, g, v;
    if (n.state !== fn)
      return c();
    for (d in i)
      if (v = i[d], v.name === n.name) {
        if (v.state === or)
          return ln(u);
        v.state === pn ? (v.state = ar, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete i[d]) : +d < r && (v.state = ar, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete i[d]);
      }
    if (ln(function() {
      n.state === or && (n.state = pn, n.timer.restart(f, n.delay, n.time), f(p));
    }), n.state = Mr, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Mr) {
      for (n.state = or, o = new Array(g = n.tween.length), d = 0, h = -1; d < g; ++d)
        (v = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function f(p) {
    for (var d = p < n.duration ? n.ease.call(null, p / n.duration) : (n.timer.restart(c), n.state = Fr, 1), h = -1, g = o.length; ++h < g; )
      o[h].call(e, d);
    n.state === Fr && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = ar, n.timer.stop(), delete i[r];
    for (var p in i)
      return;
    delete e.__transition;
  }
}
function Ua(e, r) {
  var n = e.__transition, i, o, s = !0, u;
  if (!!n) {
    r = r == null ? null : r + "";
    for (u in n) {
      if ((i = n[u]).name !== r) {
        s = !1;
        continue;
      }
      o = i.state > Mr && i.state < Fr, i.state = ar, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[u];
    }
    s && delete e.__transition;
  }
}
function Va(e) {
  return this.each(function() {
    Ua(this, e);
  });
}
function Kr(e, r, n) {
  e.prototype = r.prototype = n, n.constructor = e;
}
function hi(e, r) {
  var n = Object.create(e.prototype);
  for (var i in r)
    n[i] = r[i];
  return n;
}
function Ut() {
}
var Wt = 0.7, pr = 1 / Wt, St = "\\s*([+-]?\\d+)\\s*", zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ha = /^#([0-9a-f]{3,8})$/, Ba = new RegExp(`^rgb\\(${St},${St},${St}\\)$`), qa = new RegExp(`^rgb\\(${Le},${Le},${Le}\\)$`), Xa = new RegExp(`^rgba\\(${St},${St},${St},${zt}\\)$`), Ga = new RegExp(`^rgba\\(${Le},${Le},${Le},${zt}\\)$`), Ka = new RegExp(`^hsl\\(${zt},${Le},${Le}\\)$`), Ja = new RegExp(`^hsla\\(${zt},${Le},${Le},${zt}\\)$`), dn = {
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
Kr(Ut, kt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hn,
  formatHex: hn,
  formatHex8: Za,
  formatHsl: Qa,
  formatRgb: yn,
  toString: yn
});
function hn() {
  return this.rgb().formatHex();
}
function Za() {
  return this.rgb().formatHex8();
}
function Qa() {
  return yi(this).formatHsl();
}
function yn() {
  return this.rgb().formatRgb();
}
function kt(e) {
  var r, n;
  return e = (e + "").trim().toLowerCase(), (r = Ha.exec(e)) ? (n = r[1].length, r = parseInt(r[1], 16), n === 6 ? gn(r) : n === 3 ? new pe(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : n === 8 ? Xt(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : n === 4 ? Xt(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Ba.exec(e)) ? new pe(r[1], r[2], r[3], 1) : (r = qa.exec(e)) ? new pe(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Xa.exec(e)) ? Xt(r[1], r[2], r[3], r[4]) : (r = Ga.exec(e)) ? Xt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Ka.exec(e)) ? bn(r[1], r[2] / 100, r[3] / 100, 1) : (r = Ja.exec(e)) ? bn(r[1], r[2] / 100, r[3] / 100, r[4]) : dn.hasOwnProperty(e) ? gn(dn[e]) : e === "transparent" ? new pe(NaN, NaN, NaN, 0) : null;
}
function gn(e) {
  return new pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xt(e, r, n, i) {
  return i <= 0 && (e = r = n = NaN), new pe(e, r, n, i);
}
function es(e) {
  return e instanceof Ut || (e = kt(e)), e ? (e = e.rgb(), new pe(e.r, e.g, e.b, e.opacity)) : new pe();
}
function Dr(e, r, n, i) {
  return arguments.length === 1 ? es(e) : new pe(e, r, n, i == null ? 1 : i);
}
function pe(e, r, n, i) {
  this.r = +e, this.g = +r, this.b = +n, this.opacity = +i;
}
Kr(pe, Dr, hi(Ut, {
  brighter(e) {
    return e = e == null ? pr : Math.pow(pr, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wt : Math.pow(Wt, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pe(wt(this.r), wt(this.g), wt(this.b), dr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: mn,
  formatHex: mn,
  formatHex8: ts,
  formatRgb: vn,
  toString: vn
}));
function mn() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}`;
}
function ts() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}${_t((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vn() {
  const e = dr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${wt(this.r)}, ${wt(this.g)}, ${wt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function dr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function wt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _t(e) {
  return e = wt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bn(e, r, n, i) {
  return i <= 0 ? e = r = n = NaN : n <= 0 || n >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new Me(e, r, n, i);
}
function yi(e) {
  if (e instanceof Me)
    return new Me(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ut || (e = kt(e)), !e)
    return new Me();
  if (e instanceof Me)
    return e;
  e = e.rgb();
  var r = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.min(r, n, i), s = Math.max(r, n, i), u = NaN, f = s - o, c = (s + o) / 2;
  return f ? (r === s ? u = (n - i) / f + (n < i) * 6 : n === s ? u = (i - r) / f + 2 : u = (r - n) / f + 4, f /= c < 0.5 ? s + o : 2 - s - o, u *= 60) : f = c > 0 && c < 1 ? 0 : u, new Me(u, f, c, e.opacity);
}
function rs(e, r, n, i) {
  return arguments.length === 1 ? yi(e) : new Me(e, r, n, i == null ? 1 : i);
}
function Me(e, r, n, i) {
  this.h = +e, this.s = +r, this.l = +n, this.opacity = +i;
}
Kr(Me, rs, hi(Ut, {
  brighter(e) {
    return e = e == null ? pr : Math.pow(pr, e), new Me(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wt : Math.pow(Wt, e), new Me(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * r, o = 2 * n - i;
    return new pe(
      Or(e >= 240 ? e - 240 : e + 120, o, i),
      Or(e, o, i),
      Or(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new Me(_n(this.h), Gt(this.s), Gt(this.l), dr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = dr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_n(this.h)}, ${Gt(this.s) * 100}%, ${Gt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _n(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Gt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Or(e, r, n) {
  return (e < 60 ? r + (n - r) * e / 60 : e < 180 ? n : e < 240 ? r + (n - r) * (240 - e) / 60 : r) * 255;
}
const Jr = (e) => () => e;
function ns(e, r) {
  return function(n) {
    return e + n * r;
  };
}
function is(e, r, n) {
  return e = Math.pow(e, n), r = Math.pow(r, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * r, n);
  };
}
function os(e) {
  return (e = +e) == 1 ? gi : function(r, n) {
    return n - r ? is(r, n, e) : Jr(isNaN(r) ? n : r);
  };
}
function gi(e, r) {
  var n = r - e;
  return n ? ns(e, n) : Jr(isNaN(e) ? r : e);
}
const hr = function e(r) {
  var n = os(r);
  function i(o, s) {
    var u = n((o = Dr(o)).r, (s = Dr(s)).r), f = n(o.g, s.g), c = n(o.b, s.b), p = gi(o.opacity, s.opacity);
    return function(d) {
      return o.r = u(d), o.g = f(d), o.b = c(d), o.opacity = p(d), o + "";
    };
  }
  return i.gamma = e, i;
}(1);
function as(e, r) {
  r || (r = []);
  var n = e ? Math.min(r.length, e.length) : 0, i = r.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o)
      i[o] = e[o] * (1 - s) + r[o] * s;
    return i;
  };
}
function ss(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function us(e, r) {
  var n = r ? r.length : 0, i = e ? Math.min(n, e.length) : 0, o = new Array(i), s = new Array(n), u;
  for (u = 0; u < i; ++u)
    o[u] = Zr(e[u], r[u]);
  for (; u < n; ++u)
    s[u] = r[u];
  return function(f) {
    for (u = 0; u < i; ++u)
      s[u] = o[u](f);
    return s;
  };
}
function cs(e, r) {
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
function ls(e, r) {
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
var Ir = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Tr = new RegExp(Ir.source, "g");
function fs(e) {
  return function() {
    return e;
  };
}
function ps(e) {
  return function(r) {
    return e(r) + "";
  };
}
function mi(e, r) {
  var n = Ir.lastIndex = Tr.lastIndex = 0, i, o, s, u = -1, f = [], c = [];
  for (e = e + "", r = r + ""; (i = Ir.exec(e)) && (o = Tr.exec(r)); )
    (s = o.index) > n && (s = r.slice(n, s), f[u] ? f[u] += s : f[++u] = s), (i = i[0]) === (o = o[0]) ? f[u] ? f[u] += o : f[++u] = o : (f[++u] = null, c.push({ i: u, x: Ae(i, o) })), n = Tr.lastIndex;
  return n < r.length && (s = r.slice(n), f[u] ? f[u] += s : f[++u] = s), f.length < 2 ? c[0] ? ps(c[0].x) : fs(r) : (r = c.length, function(p) {
    for (var d = 0, h; d < r; ++d)
      f[(h = c[d]).i] = h.x(p);
    return f.join("");
  });
}
function Zr(e, r) {
  var n = typeof r, i;
  return r == null || n === "boolean" ? Jr(r) : (n === "number" ? Ae : n === "string" ? (i = kt(r)) ? (r = i, hr) : mi : r instanceof kt ? hr : r instanceof Date ? cs : ss(r) ? as : Array.isArray(r) ? us : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? ls : Ae)(e, r);
}
function ds(e, r) {
  return e = +e, r = +r, function(n) {
    return Math.round(e * (1 - n) + r * n);
  };
}
var wn = 180 / Math.PI, Lr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vi(e, r, n, i, o, s) {
  var u, f, c;
  return (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u), (c = e * n + r * i) && (n -= e * c, i -= r * c), (f = Math.sqrt(n * n + i * i)) && (n /= f, i /= f, c /= f), e * i < r * n && (e = -e, r = -r, c = -c, u = -u), {
    translateX: o,
    translateY: s,
    rotate: Math.atan2(r, e) * wn,
    skewX: Math.atan(c) * wn,
    scaleX: u,
    scaleY: f
  };
}
var Kt;
function hs(e) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return r.isIdentity ? Lr : vi(r.a, r.b, r.c, r.d, r.e, r.f);
}
function ys(e) {
  return e == null || (Kt || (Kt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kt.setAttribute("transform", e), !(e = Kt.transform.baseVal.consolidate())) ? Lr : (e = e.matrix, vi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function bi(e, r, n, i) {
  function o(p) {
    return p.length ? p.pop() + " " : "";
  }
  function s(p, d, h, g, v, O) {
    if (p !== h || d !== g) {
      var C = v.push("translate(", null, r, null, n);
      O.push({ i: C - 4, x: Ae(p, h) }, { i: C - 2, x: Ae(d, g) });
    } else
      (h || g) && v.push("translate(" + h + r + g + n);
  }
  function u(p, d, h, g) {
    p !== d ? (p - d > 180 ? d += 360 : d - p > 180 && (p += 360), g.push({ i: h.push(o(h) + "rotate(", null, i) - 2, x: Ae(p, d) })) : d && h.push(o(h) + "rotate(" + d + i);
  }
  function f(p, d, h, g) {
    p !== d ? g.push({ i: h.push(o(h) + "skewX(", null, i) - 2, x: Ae(p, d) }) : d && h.push(o(h) + "skewX(" + d + i);
  }
  function c(p, d, h, g, v, O) {
    if (p !== h || d !== g) {
      var C = v.push(o(v) + "scale(", null, ",", null, ")");
      O.push({ i: C - 4, x: Ae(p, h) }, { i: C - 2, x: Ae(d, g) });
    } else
      (h !== 1 || g !== 1) && v.push(o(v) + "scale(" + h + "," + g + ")");
  }
  return function(p, d) {
    var h = [], g = [];
    return p = e(p), d = e(d), s(p.translateX, p.translateY, d.translateX, d.translateY, h, g), u(p.rotate, d.rotate, h, g), f(p.skewX, d.skewX, h, g), c(p.scaleX, p.scaleY, d.scaleX, d.scaleY, h, g), p = d = null, function(v) {
      for (var O = -1, C = g.length, R; ++O < C; )
        h[(R = g[O]).i] = R.x(v);
      return h.join("");
    };
  };
}
var gs = bi(hs, "px, ", "px)", "deg)"), ms = bi(ys, ", ", ")", ")");
function vs(e, r) {
  var n, i;
  return function() {
    var o = We(this, e), s = o.tween;
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
function bs(e, r, n) {
  var i, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = We(this, e), u = s.tween;
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
function _s(e, r) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Ie(this.node(), n).tween, o = 0, s = i.length, u; o < s; ++o)
      if ((u = i[o]).name === e)
        return u.value;
    return null;
  }
  return this.each((r == null ? vs : bs)(n, e, r));
}
function Qr(e, r, n) {
  var i = e._id;
  return e.each(function() {
    var o = We(this, i);
    (o.value || (o.value = {}))[r] = n.apply(this, arguments);
  }), function(o) {
    return Ie(o, i).value[r];
  };
}
function _i(e, r) {
  var n;
  return (typeof r == "number" ? Ae : r instanceof kt ? hr : (n = kt(r)) ? (r = n, hr) : mi)(e, r);
}
function ws(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function xs(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ks(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttribute(e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function Es(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttributeNS(e.space, e.local);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function Ss(e, r, n) {
  var i, o, s;
  return function() {
    var u, f = n(this), c;
    return f == null ? void this.removeAttribute(e) : (u = this.getAttribute(e), c = f + "", u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f)));
  };
}
function Rs(e, r, n) {
  var i, o, s;
  return function() {
    var u, f = n(this), c;
    return f == null ? void this.removeAttributeNS(e.space, e.local) : (u = this.getAttributeNS(e.space, e.local), c = f + "", u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f)));
  };
}
function Os(e, r) {
  var n = _r(e), i = n === "transform" ? ms : _i;
  return this.attrTween(e, typeof r == "function" ? (n.local ? Rs : Ss)(n, i, Qr(this, "attr." + e, r)) : r == null ? (n.local ? xs : ws)(n) : (n.local ? Es : ks)(n, i, r));
}
function Ts(e, r) {
  return function(n) {
    this.setAttribute(e, r.call(this, n));
  };
}
function $s(e, r) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, r.call(this, n));
  };
}
function Ns(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && $s(e, s)), n;
  }
  return o._value = r, o;
}
function Cs(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Ts(e, s)), n;
  }
  return o._value = r, o;
}
function Ps(e, r) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (r == null)
    return this.tween(n, null);
  if (typeof r != "function")
    throw new Error();
  var i = _r(e);
  return this.tween(n, (i.local ? Ns : Cs)(i, r));
}
function js(e, r) {
  return function() {
    Gr(this, e).delay = +r.apply(this, arguments);
  };
}
function As(e, r) {
  return r = +r, function() {
    Gr(this, e).delay = r;
  };
}
function Ms(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? js : As)(r, e)) : Ie(this.node(), r).delay;
}
function Fs(e, r) {
  return function() {
    We(this, e).duration = +r.apply(this, arguments);
  };
}
function Ds(e, r) {
  return r = +r, function() {
    We(this, e).duration = r;
  };
}
function Is(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Fs : Ds)(r, e)) : Ie(this.node(), r).duration;
}
function Ls(e, r) {
  if (typeof r != "function")
    throw new Error();
  return function() {
    We(this, e).ease = r;
  };
}
function Ws(e) {
  var r = this._id;
  return arguments.length ? this.each(Ls(r, e)) : Ie(this.node(), r).ease;
}
function zs(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    We(this, e).ease = n;
  };
}
function Ys(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(zs(this._id, e));
}
function Us(e) {
  typeof e != "function" && (e = Zn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = [], c, p = 0; p < u; ++p)
      (c = s[p]) && e.call(c, c.__data__, p, s) && f.push(c);
  return new Ve(i, this._parents, this._name, this._id);
}
function Vs(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var r = this._groups, n = e._groups, i = r.length, o = n.length, s = Math.min(i, o), u = new Array(i), f = 0; f < s; ++f)
    for (var c = r[f], p = n[f], d = c.length, h = u[f] = new Array(d), g, v = 0; v < d; ++v)
      (g = c[v] || p[v]) && (h[v] = g);
  for (; f < i; ++f)
    u[f] = r[f];
  return new Ve(u, this._parents, this._name, this._id);
}
function Hs(e) {
  return (e + "").trim().split(/^|\s+/).every(function(r) {
    var n = r.indexOf(".");
    return n >= 0 && (r = r.slice(0, n)), !r || r === "start";
  });
}
function Bs(e, r, n) {
  var i, o, s = Hs(r) ? Gr : We;
  return function() {
    var u = s(this, e), f = u.on;
    f !== i && (o = (i = f).copy()).on(r, n), u.on = o;
  };
}
function qs(e, r) {
  var n = this._id;
  return arguments.length < 2 ? Ie(this.node(), n).on.on(e) : this.each(Bs(n, e, r));
}
function Xs(e) {
  return function() {
    var r = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    r && r.removeChild(this);
  };
}
function Gs() {
  return this.on("end.remove", Xs(this._id));
}
function Ks(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Br(e));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], c = f.length, p = s[u] = new Array(c), d, h, g = 0; g < c; ++g)
      (d = f[g]) && (h = e.call(d, d.__data__, g, f)) && ("__data__" in d && (h.__data__ = d.__data__), p[g] = h, xr(p[g], r, n, g, p, Ie(d, n)));
  return new Ve(s, this._parents, r, n);
}
function Js(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Jn(e));
  for (var i = this._groups, o = i.length, s = [], u = [], f = 0; f < o; ++f)
    for (var c = i[f], p = c.length, d, h = 0; h < p; ++h)
      if (d = c[h]) {
        for (var g = e.call(d, d.__data__, h, c), v, O = Ie(d, n), C = 0, R = g.length; C < R; ++C)
          (v = g[C]) && xr(v, r, n, C, g, O);
        s.push(g), u.push(d);
      }
  return new Ve(s, u, r, n);
}
var Zs = Yt.prototype.constructor;
function Qs() {
  return new Zs(this._groups, this._parents);
}
function eu(e, r) {
  var n, i, o;
  return function() {
    var s = Rt(this, e), u = (this.style.removeProperty(e), Rt(this, e));
    return s === u ? null : s === n && u === i ? o : o = r(n = s, i = u);
  };
}
function wi(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tu(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = Rt(this, e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function ru(e, r, n) {
  var i, o, s;
  return function() {
    var u = Rt(this, e), f = n(this), c = f + "";
    return f == null && (c = f = (this.style.removeProperty(e), Rt(this, e))), u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f));
  };
}
function nu(e, r) {
  var n, i, o, s = "style." + r, u = "end." + s, f;
  return function() {
    var c = We(this, e), p = c.on, d = c.value[s] == null ? f || (f = wi(r)) : void 0;
    (p !== n || o !== d) && (i = (n = p).copy()).on(u, o = d), c.on = i;
  };
}
function iu(e, r, n) {
  var i = (e += "") == "transform" ? gs : _i;
  return r == null ? this.styleTween(e, eu(e, i)).on("end.style." + e, wi(e)) : typeof r == "function" ? this.styleTween(e, ru(e, i, Qr(this, "style." + e, r))).each(nu(this._id, e)) : this.styleTween(e, tu(e, i, r), n).on("end.style." + e, null);
}
function ou(e, r, n) {
  return function(i) {
    this.style.setProperty(e, r.call(this, i), n);
  };
}
function au(e, r, n) {
  var i, o;
  function s() {
    var u = r.apply(this, arguments);
    return u !== o && (i = (o = u) && ou(e, u, n)), i;
  }
  return s._value = r, s;
}
function su(e, r, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (r == null)
    return this.tween(i, null);
  if (typeof r != "function")
    throw new Error();
  return this.tween(i, au(e, r, n == null ? "" : n));
}
function uu(e) {
  return function() {
    this.textContent = e;
  };
}
function cu(e) {
  return function() {
    var r = e(this);
    this.textContent = r == null ? "" : r;
  };
}
function lu(e) {
  return this.tween("text", typeof e == "function" ? cu(Qr(this, "text", e)) : uu(e == null ? "" : e + ""));
}
function fu(e) {
  return function(r) {
    this.textContent = e.call(this, r);
  };
}
function pu(e) {
  var r, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (r = (n = o) && fu(o)), r;
  }
  return i._value = e, i;
}
function du(e) {
  var r = "text";
  if (arguments.length < 1)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, pu(e));
}
function hu() {
  for (var e = this._name, r = this._id, n = xi(), i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], f = u.length, c, p = 0; p < f; ++p)
      if (c = u[p]) {
        var d = Ie(c, r);
        xr(c, e, n, p, u, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Ve(i, this._parents, e, n);
}
function yu() {
  var e, r, n = this, i = n._id, o = n.size();
  return new Promise(function(s, u) {
    var f = { value: u }, c = { value: function() {
      --o === 0 && s();
    } };
    n.each(function() {
      var p = We(this, i), d = p.on;
      d !== e && (r = (e = d).copy(), r._.cancel.push(f), r._.interrupt.push(f), r._.end.push(c)), p.on = r;
    }), o === 0 && s();
  });
}
var gu = 0;
function Ve(e, r, n, i) {
  this._groups = e, this._parents = r, this._name = n, this._id = i;
}
function xi() {
  return ++gu;
}
var ze = Yt.prototype;
Ve.prototype = {
  constructor: Ve,
  select: Ks,
  selectAll: Js,
  selectChild: ze.selectChild,
  selectChildren: ze.selectChildren,
  filter: Us,
  merge: Vs,
  selection: Qs,
  transition: hu,
  call: ze.call,
  nodes: ze.nodes,
  node: ze.node,
  size: ze.size,
  empty: ze.empty,
  each: ze.each,
  on: qs,
  attr: Os,
  attrTween: Ps,
  style: iu,
  styleTween: su,
  text: lu,
  textTween: du,
  remove: Gs,
  tween: _s,
  delay: Ms,
  duration: Is,
  ease: Ws,
  easeVarying: Ys,
  end: yu,
  [Symbol.iterator]: ze[Symbol.iterator]
};
function mu(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var vu = {
  time: null,
  delay: 0,
  duration: 250,
  ease: mu
};
function bu(e, r) {
  for (var n; !(n = e.__transition) || !(n = n[r]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${r} not found`);
  return n;
}
function _u(e) {
  var r, n;
  e instanceof Ve ? (r = e._id, e = e._name) : (r = xi(), (n = vu).time = Xr(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], f = u.length, c, p = 0; p < f; ++p)
      (c = u[p]) && xr(c, e, r, p, u, n || bu(c, r));
  return new Ve(i, this._parents, e, r);
}
Yt.prototype.interrupt = Va;
Yt.prototype.transition = _u;
const xn = {
  wicks: "line",
  candles: "rect"
}, wu = (e, r, n, i, o) => {
  const {
    scales: { xScale: s },
    utils: { scaledHeight: u, scaledY: f }
  } = i, {
    visibleRange: { offset: c }
  } = n, p = It({}), d = It(!1), [h, g] = Ue({
    item: void 0,
    position: void 0
  }), v = Fe(() => bt(e.current), [e.current]), O = Fe(
    (k, w = v()) => w.selectAll(`${xn[k]}.${k}`).data(r),
    [r]
  ), C = Fe(
    (k) => {
      var w;
      return p.current[k] = (w = p.current[k]) != null ? w : v().append("g").classed(`${k}-group`, !0).attr("clip-path", "url(#chart-contents)"), p.current[k];
    },
    [p]
  ), R = Fe(
    (k, w) => {
      let N = O(k, C(k));
      N.size() !== r.length && (N = N.enter().append(xn[k]));
      const W = () => N.transition().duration(o ? $a : 50), A = (M) => Number(s(M.date)) + (k === "wicks" ? +s.bandwidth() / 2 : 0) + c, T = (M) => f(M[w[0]], M[w[1]]), D = (M) => u(M[w[0]], M[w[1]]), z = (M) => T(M) + D(M);
      return k === "candles" ? (W().attr("width", () => +s.bandwidth()).attr("height", D).attr("x", A).attr("y", T), N.classed("is-increased", (M) => M.close > M.open).classed("is-decreased", (M) => M.close < M.open).classed("is-zoomed", (M) => +s.bandwidth() > 10).on("click", ({ target: M }, q) => {
        N.classed("is-active", !1), bt(M).classed("is-active", !0), d.current = !0, g({
          item: q,
          position: {
            x: A(q) + s.bandwidth() + de,
            y: z(q) + 8
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
      })) : W().attr("x1", A).attr("y1", T).attr("x2", A).attr("y2", z), N.classed(k, !0).exit().remove(), N;
    },
    [s, f]
  );
  return De(() => {
    C("wicks"), C("candles");
    const k = ({ target: w }) => {
      w.nodeName !== "rect" && (v().selectAll("rect").classed("is-active", !1), d.current = !1, g(({ position: N }) => ({ item: void 0, position: N })));
    };
    return addEventListener("resize", k), addEventListener("pointerdown", k), () => {
      removeEventListener("pointerdown", k), removeEventListener("resize", k);
    };
  }, []), De(() => {
    var k;
    (k = s == null ? void 0 : s.bandwidth) != null && k.call(s) && (R("wicks", ["low", "high"]), R("candles", ["open", "close"]));
  }, [s, f]), h;
};
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ki = "Expected a function", kn = 0 / 0, xu = "[object Symbol]", ku = /^\s+|\s+$/g, Eu = /^[-+]0x[0-9a-f]+$/i, Su = /^0b[01]+$/i, Ru = /^0o[0-7]+$/i, Ou = parseInt, Tu = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, $u = typeof self == "object" && self && self.Object === Object && self, Nu = Tu || $u || Function("return this")(), Cu = Object.prototype, Pu = Cu.toString, ju = Math.max, Au = Math.min, $r = function() {
  return Nu.Date.now();
};
function Mu(e, r, n) {
  var i, o, s, u, f, c, p = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ki);
  r = En(r) || 0, yr(n) && (d = !!n.leading, h = "maxWait" in n, s = h ? ju(En(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(T) {
    var D = i, z = o;
    return i = o = void 0, p = T, u = e.apply(z, D), u;
  }
  function O(T) {
    return p = T, f = setTimeout(k, r), d ? v(T) : u;
  }
  function C(T) {
    var D = T - c, z = T - p, M = r - D;
    return h ? Au(M, s - z) : M;
  }
  function R(T) {
    var D = T - c, z = T - p;
    return c === void 0 || D >= r || D < 0 || h && z >= s;
  }
  function k() {
    var T = $r();
    if (R(T))
      return w(T);
    f = setTimeout(k, C(T));
  }
  function w(T) {
    return f = void 0, g && i ? v(T) : (i = o = void 0, u);
  }
  function N() {
    f !== void 0 && clearTimeout(f), p = 0, i = c = o = f = void 0;
  }
  function W() {
    return f === void 0 ? u : w($r());
  }
  function A() {
    var T = $r(), D = R(T);
    if (i = arguments, o = this, c = T, D) {
      if (f === void 0)
        return O(c);
      if (h)
        return f = setTimeout(k, r), v(c);
    }
    return f === void 0 && (f = setTimeout(k, r)), u;
  }
  return A.cancel = N, A.flush = W, A;
}
function Fu(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(ki);
  return yr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Mu(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function yr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Du(e) {
  return !!e && typeof e == "object";
}
function Iu(e) {
  return typeof e == "symbol" || Du(e) && Pu.call(e) == xu;
}
function En(e) {
  if (typeof e == "number")
    return e;
  if (Iu(e))
    return kn;
  if (yr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ku, "");
  var n = Su.test(e);
  return n || Ru.test(e) ? Ou(e.slice(2), n ? 2 : 8) : Eu.test(e) ? kn : +e;
}
var Wr = Fu;
const { abs: Lu, round: Sn } = Math, Wu = (e, r, n) => {
  const [i, o] = Ue({
    width: 0,
    height: 0
  }), [s, u] = Ue({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), { zoomLevel: f, panLevel: c } = n;
  return De(() => {
    const p = Wr(() => {
      const { clientWidth: d, clientHeight: h } = e.current;
      o({ width: d, height: h });
    }, 200);
    return p(), addEventListener("resize", p), () => removeEventListener("resize", p);
  }, []), De(() => {
    if (!r)
      return;
    const { width: p } = i, d = Na * (1 + ui) * f, h = d * r, g = p - Be[1] + de * 2;
    let v = c * f - h + g;
    v = v <= 0 ? v : 0, v = h > p ? v : g - h, v = Lu(v - g) <= h ? v : -h + g;
    const O = Sn((v * -1 - de) / d), C = Sn((v * -1 + g) / d);
    u({ first: O, last: C, offset: v, totalWidth: h });
  }, [f, c, r, i.width]), { visibleRange: s, sizes: i };
}, zu = (e = "") => new Date(e).toLocaleDateString("en-UK");
function sr(e, r) {
  return e == null || r == null ? NaN : e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Yu(e, r) {
  return e == null || r == null ? NaN : r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
}
function Ei(e) {
  let r, n, i;
  e.length !== 2 ? (r = sr, n = (f, c) => sr(e(f), c), i = (f, c) => e(f) - c) : (r = e === sr || e === Yu ? e : Uu, n = e, i = e);
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
function Uu() {
  return 0;
}
function Vu(e) {
  return e === null ? NaN : +e;
}
const Hu = Ei(sr), Bu = Hu.right;
Ei(Vu).center;
const qu = Bu;
class Rn extends Map {
  constructor(r, n = Ku) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), r != null)
      for (const [i, o] of r)
        this.set(i, o);
  }
  get(r) {
    return super.get(On(this, r));
  }
  has(r) {
    return super.has(On(this, r));
  }
  set(r, n) {
    return super.set(Xu(this, r), n);
  }
  delete(r) {
    return super.delete(Gu(this, r));
  }
}
function On({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : n;
}
function Xu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function Gu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function Ku(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
var zr = Math.sqrt(50), Yr = Math.sqrt(10), Ur = Math.sqrt(2);
function Ju(e, r, n) {
  var i, o = -1, s, u, f;
  if (r = +r, e = +e, n = +n, e === r && n > 0)
    return [e];
  if ((i = r < e) && (s = e, e = r, r = s), (f = Si(e, r, n)) === 0 || !isFinite(f))
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
function Si(e, r, n) {
  var i = (r - e) / Math.max(0, n), o = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, o);
  return o >= 0 ? (s >= zr ? 10 : s >= Yr ? 5 : s >= Ur ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (s >= zr ? 10 : s >= Yr ? 5 : s >= Ur ? 2 : 1);
}
function Zu(e, r, n) {
  var i = Math.abs(r - e) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / o;
  return s >= zr ? o *= 10 : s >= Yr ? o *= 5 : s >= Ur && (o *= 2), r < e ? -o : o;
}
function Qu(e, r, n) {
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
const Tn = Symbol("implicit");
function Ri() {
  var e = new Rn(), r = [], n = [], i = Tn;
  function o(s) {
    let u = e.get(s);
    if (u === void 0) {
      if (i !== Tn)
        return i;
      e.set(s, u = r.push(s) - 1);
    }
    return n[u % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length)
      return r.slice();
    r = [], e = new Rn();
    for (const u of s)
      e.has(u) || e.set(u, r.push(u) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (i = s, o) : i;
  }, o.copy = function() {
    return Ri(r, n).unknown(i);
  }, en.apply(o, arguments), o;
}
function Oi() {
  var e = Ri().unknown(void 0), r = e.domain, n = e.range, i = 0, o = 1, s, u, f = !1, c = 0, p = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var g = r().length, v = o < i, O = v ? o : i, C = v ? i : o;
    s = (C - O) / Math.max(1, g - c + p * 2), f && (s = Math.floor(s)), O += (C - O - s * (g - c)) * d, u = s * (1 - c), f && (O = Math.round(O), u = Math.round(u));
    var R = Qu(g).map(function(k) {
      return O + s * k;
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
    return Oi(r(), [i, o]).round(f).paddingInner(c).paddingOuter(p).align(d);
  }, en.apply(h(), arguments);
}
function ec(e) {
  return function() {
    return e;
  };
}
function tc(e) {
  return +e;
}
var $n = [0, 1];
function Et(e) {
  return e;
}
function Vr(e, r) {
  return (r -= e = +e) ? function(n) {
    return (n - e) / r;
  } : ec(isNaN(r) ? NaN : 0.5);
}
function rc(e, r) {
  var n;
  return e > r && (n = e, e = r, r = n), function(i) {
    return Math.max(e, Math.min(r, i));
  };
}
function nc(e, r, n) {
  var i = e[0], o = e[1], s = r[0], u = r[1];
  return o < i ? (i = Vr(o, i), s = n(u, s)) : (i = Vr(i, o), s = n(s, u)), function(f) {
    return s(i(f));
  };
}
function ic(e, r, n) {
  var i = Math.min(e.length, r.length) - 1, o = new Array(i), s = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), r = r.slice().reverse()); ++u < i; )
    o[u] = Vr(e[u], e[u + 1]), s[u] = n(r[u], r[u + 1]);
  return function(f) {
    var c = qu(e, f, 1, i) - 1;
    return s[c](o[c](f));
  };
}
function oc(e, r) {
  return r.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ac() {
  var e = $n, r = $n, n = Zr, i, o, s, u = Et, f, c, p;
  function d() {
    var g = Math.min(e.length, r.length);
    return u !== Et && (u = rc(e[0], e[g - 1])), f = g > 2 ? ic : nc, c = p = null, h;
  }
  function h(g) {
    return g == null || isNaN(g = +g) ? s : (c || (c = f(e.map(i), r, n)))(i(u(g)));
  }
  return h.invert = function(g) {
    return u(o((p || (p = f(r, e.map(i), Ae)))(g)));
  }, h.domain = function(g) {
    return arguments.length ? (e = Array.from(g, tc), d()) : e.slice();
  }, h.range = function(g) {
    return arguments.length ? (r = Array.from(g), d()) : r.slice();
  }, h.rangeRound = function(g) {
    return r = Array.from(g), n = ds, d();
  }, h.clamp = function(g) {
    return arguments.length ? (u = g ? !0 : Et, d()) : u !== Et;
  }, h.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, h.unknown = function(g) {
    return arguments.length ? (s = g, h) : s;
  }, function(g, v) {
    return i = g, o = v, d();
  };
}
function sc() {
  return ac()(Et, Et);
}
function uc(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function gr(e, r) {
  if ((n = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Tt(e) {
  return e = gr(Math.abs(e)), e ? e[1] : NaN;
}
function cc(e, r) {
  return function(n, i) {
    for (var o = n.length, s = [], u = 0, f = e[0], c = 0; o > 0 && f > 0 && (c + f + 1 > i && (f = Math.max(1, i - c)), s.push(n.substring(o -= f, o + f)), !((c += f + 1) > i)); )
      f = e[u = (u + 1) % e.length];
    return s.reverse().join(r);
  };
}
function lc(e) {
  return function(r) {
    return r.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var fc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mr(e) {
  if (!(r = fc.exec(e)))
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
function pc(e) {
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
var Ti;
function dc(e, r) {
  var n = gr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1], s = o - (Ti = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, u = i.length;
  return s === u ? i : s > u ? i + new Array(s - u + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + gr(e, Math.max(0, r + s - 1))[0];
}
function Nn(e, r) {
  var n = gr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Cn = {
  "%": (e, r) => (e * 100).toFixed(r),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: uc,
  e: (e, r) => e.toExponential(r),
  f: (e, r) => e.toFixed(r),
  g: (e, r) => e.toPrecision(r),
  o: (e) => Math.round(e).toString(8),
  p: (e, r) => Nn(e * 100, r),
  r: Nn,
  s: dc,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Pn(e) {
  return e;
}
var jn = Array.prototype.map, An = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hc(e) {
  var r = e.grouping === void 0 || e.thousands === void 0 ? Pn : cc(jn.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Pn : lc(jn.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", f = e.minus === void 0 ? "\u2212" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function p(h) {
    h = mr(h);
    var g = h.fill, v = h.align, O = h.sign, C = h.symbol, R = h.zero, k = h.width, w = h.comma, N = h.precision, W = h.trim, A = h.type;
    A === "n" ? (w = !0, A = "g") : Cn[A] || (N === void 0 && (N = 12), W = !0, A = "g"), (R || g === "0" && v === "=") && (R = !0, g = "0", v = "=");
    var T = C === "$" ? n : C === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", D = C === "$" ? i : /[%p]/.test(A) ? u : "", z = Cn[A], M = /[defgprs%]/.test(A);
    N = N === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, N)) : Math.max(0, Math.min(20, N));
    function q(F) {
      var Y = T, P = D, L, B, te;
      if (A === "c")
        P = z(F) + P, F = "";
      else {
        F = +F;
        var re = F < 0 || 1 / F < 0;
        if (F = isNaN(F) ? c : z(Math.abs(F), N), W && (F = pc(F)), re && +F == 0 && O !== "+" && (re = !1), Y = (re ? O === "(" ? O : f : O === "-" || O === "(" ? "" : O) + Y, P = (A === "s" ? An[8 + Ti / 3] : "") + P + (re && O === "(" ? ")" : ""), M) {
          for (L = -1, B = F.length; ++L < B; )
            if (te = F.charCodeAt(L), 48 > te || te > 57) {
              P = (te === 46 ? o + F.slice(L + 1) : F.slice(L)) + P, F = F.slice(0, L);
              break;
            }
        }
      }
      w && !R && (F = r(F, 1 / 0));
      var ne = Y.length + F.length + P.length, G = ne < k ? new Array(k - ne + 1).join(g) : "";
      switch (w && R && (F = r(G + F, G.length ? k - P.length : 1 / 0), G = ""), v) {
        case "<":
          F = Y + F + P + G;
          break;
        case "=":
          F = Y + G + F + P;
          break;
        case "^":
          F = G.slice(0, ne = G.length >> 1) + Y + F + P + G.slice(ne);
          break;
        default:
          F = G + Y + F + P;
          break;
      }
      return s(F);
    }
    return q.toString = function() {
      return h + "";
    }, q;
  }
  function d(h, g) {
    var v = p((h = mr(h), h.type = "f", h)), O = Math.max(-8, Math.min(8, Math.floor(Tt(g) / 3))) * 3, C = Math.pow(10, -O), R = An[8 + O / 3];
    return function(k) {
      return v(C * k) + R;
    };
  }
  return {
    format: p,
    formatPrefix: d
  };
}
var Zt, $i, Ni;
yc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function yc(e) {
  return Zt = hc(e), $i = Zt.format, Ni = Zt.formatPrefix, Zt;
}
function gc(e) {
  return Math.max(0, -Tt(Math.abs(e)));
}
function mc(e, r) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Tt(r) / 3))) * 3 - Tt(Math.abs(e)));
}
function vc(e, r) {
  return e = Math.abs(e), r = Math.abs(r) - e, Math.max(0, Tt(r) - Tt(e)) + 1;
}
function bc(e, r, n, i) {
  var o = Zu(e, r, n), s;
  switch (i = mr(i == null ? ",f" : i), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(r));
      return i.precision == null && !isNaN(s = mc(o, u)) && (i.precision = s), Ni(i, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = vc(o, Math.max(Math.abs(e), Math.abs(r)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = gc(o)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return $i(i);
}
function _c(e) {
  var r = e.domain;
  return e.ticks = function(n) {
    var i = r();
    return Ju(i[0], i[i.length - 1], n == null ? 10 : n);
  }, e.tickFormat = function(n, i) {
    var o = r();
    return bc(o[0], o[o.length - 1], n == null ? 10 : n, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = r(), o = 0, s = i.length - 1, u = i[o], f = i[s], c, p, d = 10;
    for (f < u && (p = u, u = f, f = p, p = o, o = s, s = p); d-- > 0; ) {
      if (p = Si(u, f, n), p === c)
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
function Ci() {
  var e = sc();
  return e.copy = function() {
    return oc(e, Ci());
  }, en.apply(e, arguments), _c(e);
}
const { abs: wc, min: Mn, max: xc } = Math, kc = (e, r) => {
  const { sizes: n, visibleRange: i } = r, [o, s] = Ue({
    xScale: (c) => c,
    yScale: (c) => c
  }), u = Fe(
    (c, p) => wc(o.yScale(p) - o.yScale(c)) || 1,
    [o.yScale]
  ), f = Fe(
    (c, p) => o.yScale(Mn(c, p)) - u(c, p) || 1,
    [o.yScale]
  );
  return De(() => {
    if (!(e != null && e.length))
      return;
    const { first: c, last: p, totalWidth: d } = i, { height: h } = n, g = e.slice(c > 0 ? c : 0, p), v = Mn(...g.map(({ low: k }) => k)), O = xc(...g.map(({ high: k }) => k)), C = Oi().range([de, d - de]).domain(e.map(({ date: k }) => k)).padding(ui), R = Ci().domain([v - 20, O + 20]).range([h - Be[0], de]);
    s({ xScale: C, yScale: R });
  }, [i, n.height, e]), { utils: { scaledHeight: u, scaledY: f }, scales: o };
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pi = "Expected a function", Fn = 0 / 0, Ec = "[object Symbol]", Sc = /^\s+|\s+$/g, Rc = /^[-+]0x[0-9a-f]+$/i, Oc = /^0b[01]+$/i, Tc = /^0o[0-7]+$/i, $c = parseInt, Nc = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, Cc = typeof self == "object" && self && self.Object === Object && self, Pc = Nc || Cc || Function("return this")(), jc = Object.prototype, Ac = jc.toString, Mc = Math.max, Fc = Math.min, Nr = function() {
  return Pc.Date.now();
};
function Dc(e, r, n) {
  var i, o, s, u, f, c, p = 0, d = !1, h = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  r = Dn(r) || 0, vr(n) && (d = !!n.leading, h = "maxWait" in n, s = h ? Mc(Dn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(T) {
    var D = i, z = o;
    return i = o = void 0, p = T, u = e.apply(z, D), u;
  }
  function O(T) {
    return p = T, f = setTimeout(k, r), d ? v(T) : u;
  }
  function C(T) {
    var D = T - c, z = T - p, M = r - D;
    return h ? Fc(M, s - z) : M;
  }
  function R(T) {
    var D = T - c, z = T - p;
    return c === void 0 || D >= r || D < 0 || h && z >= s;
  }
  function k() {
    var T = Nr();
    if (R(T))
      return w(T);
    f = setTimeout(k, C(T));
  }
  function w(T) {
    return f = void 0, g && i ? v(T) : (i = o = void 0, u);
  }
  function N() {
    f !== void 0 && clearTimeout(f), p = 0, i = c = o = f = void 0;
  }
  function W() {
    return f === void 0 ? u : w(Nr());
  }
  function A() {
    var T = Nr(), D = R(T);
    if (i = arguments, o = this, c = T, D) {
      if (f === void 0)
        return O(c);
      if (h)
        return f = setTimeout(k, r), v(c);
    }
    return f === void 0 && (f = setTimeout(k, r)), u;
  }
  return A.cancel = N, A.flush = W, A;
}
function Ic(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  return vr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Dc(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function vr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Lc(e) {
  return !!e && typeof e == "object";
}
function Wc(e) {
  return typeof e == "symbol" || Lc(e) && Ac.call(e) == Ec;
}
function Dn(e) {
  if (typeof e == "number")
    return e;
  if (Wc(e))
    return Fn;
  if (vr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Sc, "");
  var n = Oc.test(e);
  return n || Tc.test(e) ? $c(e.slice(2), n ? 2 : 8) : Rc.test(e) ? Fn : +e;
}
var zc = Ic;
const Cr = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Yc = (e) => `
  border: 1px solid ${e};
  color: ${e};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, Uc = he.div(
  ({ isVisible: e = !1 }) => br`
    font-family: sans-serif;
    position: absolute;
    transition: all 0.2s;
    opacity: ${e ? 0.8 : 0};
    ${Yc(Cr.default)}
    padding: 4px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${Cr.default};
      border-right: 1px solid ${Cr.default};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
    }
  `
);
var ji = { exports: {} }, Pt = {};
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
function Vc() {
  if (In)
    return Pt;
  In = 1;
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
var Ln;
function Hc() {
  return Ln || (Ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), O = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = O && t[O] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        N("error", t, l);
      }
    }
    function N(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var W = !1, A = !1, T = !1, D = !1, z = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || z || t === o || t === p || t === d || D || t === v || W || A || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function F(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function Y(t) {
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
            return Y(a) + ".Consumer";
          case u:
            var l = t;
            return Y(l._context) + ".Provider";
          case c:
            return F(t, t.render, "ForwardRef");
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
    function K(t, a, l) {
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
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
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
`), $ = y.stack.split(`
`), E = m.length - 1, S = $.length - 1; E >= 1 && S >= 0 && m[E] !== $[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (m[E] !== $[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || m[E] !== $[S]) {
                    var j = `
` + m[E].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? K(H) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, l) {
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
        return K(t);
      switch (t) {
        case p:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Je(t.render);
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
                var $ = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              m = E;
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
    function Ee(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Re, ue;
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
          Se || (Se = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
        var x, b = {}, m = null, $ = null;
        l !== void 0 && (Ee(l), m = "" + l), ot(a) && (Ee(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var E = t.defaultProps;
          for (x in E)
            b[x] === void 0 && (b[x] = E[x]);
        }
        if (m || $) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, S), $ && ut(b, S);
        }
        return ct(t, m, $, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, Oe = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        Oe.setExtraStackFrame(l);
      } else
        Oe.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Te() {
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
    var $e = {};
    function pt(t) {
      {
        var a = Te();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if ($e[l])
          return;
        $e[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ne(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ne(b.value, a);
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
          var $ = ft(_);
          $ ? m += $ : m += Te();
          var E;
          t === null ? E = "null" : se(t) ? E = "array" : t !== void 0 && t.$$typeof === r ? (E = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, m);
        }
        var S = lt(t, a, l, _, x);
        if (S == null)
          return S;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ce(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(S) : dt(S), S;
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
  process.env.NODE_ENV === "production" ? e.exports = Vc() : e.exports = Hc();
})(ji);
const Bc = ji.exports.jsx, qc = ({
  children: e,
  isVisible: r = !1,
  x: n = 0,
  y: i = 0
}) => {
  const o = It(null), [s, u] = Ue({
    x: n,
    y: i
  }), f = Fe((c, p) => {
    var d, h;
    return u({
      x: c - ((h = (d = o.current) == null ? void 0 : d.clientWidth) != null ? h : 0) / 2,
      y: p + 24
    });
  }, [o.current]);
  return De(() => {
    f(n, i);
    const c = zc(({
      clientX: d,
      clientY: h
    }) => !n && !i && f(d, h), 100), p = () => {
      removeEventListener("mousemove", c);
    };
    return n && i ? p() : addEventListener("mousemove", c), p;
  }, [n, i]), /* @__PURE__ */ Bc(Uc, {
    ref: o,
    isVisible: r,
    children: e,
    style: {
      left: s.x,
      top: s.y
    }
  });
}, Xc = he.div`
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
function Gc() {
  if (Wn)
    return jt;
  Wn = 1;
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
var zn;
function Kc() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), O = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = O && t[O] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        N("error", t, l);
      }
    }
    function N(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var W = !1, A = !1, T = !1, D = !1, z = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || z || t === o || t === p || t === d || D || t === v || W || A || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function F(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function Y(t) {
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
            return Y(a) + ".Consumer";
          case u:
            var l = t;
            return Y(l._context) + ".Provider";
          case c:
            return F(t, t.render, "ForwardRef");
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
    function K(t, a, l) {
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
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
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
`), $ = y.stack.split(`
`), E = m.length - 1, S = $.length - 1; E >= 1 && S >= 0 && m[E] !== $[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (m[E] !== $[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || m[E] !== $[S]) {
                    var j = `
` + m[E].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? K(H) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, l) {
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
        return K(t);
      switch (t) {
        case p:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Je(t.render);
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
                var $ = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              m = E;
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
    function Ee(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Re, ue;
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
          Se || (Se = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
        var x, b = {}, m = null, $ = null;
        l !== void 0 && (Ee(l), m = "" + l), ot(a) && (Ee(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var E = t.defaultProps;
          for (x in E)
            b[x] === void 0 && (b[x] = E[x]);
        }
        if (m || $) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, S), $ && ut(b, S);
        }
        return ct(t, m, $, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, Oe = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        Oe.setExtraStackFrame(l);
      } else
        Oe.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Te() {
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
    var $e = {};
    function pt(t) {
      {
        var a = Te();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if ($e[l])
          return;
        $e[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ne(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ne(b.value, a);
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
          var $ = ft(_);
          $ ? m += $ : m += Te();
          var E;
          t === null ? E = "null" : se(t) ? E = "array" : t !== void 0 && t.$$typeof === r ? (E = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, m);
        }
        var S = lt(t, a, l, _, x);
        if (S == null)
          return S;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ce(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(S) : dt(S), S;
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
  process.env.NODE_ENV === "production" ? e.exports = Gc() : e.exports = Kc();
})(kr);
const Ai = kr.exports.Fragment, U = kr.exports.jsx, Ye = kr.exports.jsxs, Jc = ({
  item: e,
  position: r
}) => {
  const [n, i] = Ue(e), o = It();
  return De(() => {
    if (e) {
      i(e), clearTimeout(o.current);
      return;
    }
    o.current = setTimeout(() => i(e), 200);
  }, [e]), /* @__PURE__ */ U(qc, {
    isVisible: !!e,
    ...r,
    children: /* @__PURE__ */ Ye(Xc, {
      children: [/* @__PURE__ */ U("div", {
        children: /* @__PURE__ */ U("strong", {
          children: zu(n == null ? void 0 : n.date)
        })
      }), /* @__PURE__ */ Ye("div", {
        children: ["Open: ", /* @__PURE__ */ U("em", {
          children: n == null ? void 0 : n.open
        })]
      }), /* @__PURE__ */ Ye("div", {
        children: ["Close: ", /* @__PURE__ */ U("em", {
          children: n == null ? void 0 : n.close
        })]
      }), /* @__PURE__ */ Ye("div", {
        children: ["High: ", /* @__PURE__ */ U("em", {
          children: n == null ? void 0 : n.high
        })]
      }), /* @__PURE__ */ Ye("div", {
        children: ["Low: ", /* @__PURE__ */ U("em", {
          children: n == null ? void 0 : n.low
        })]
      })]
    })
  });
}, Zc = (e) => `
  border: 1px solid ${e};
  color: ${e};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, Qc = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, el = "font-family: sans-serif;", tl = he.button(
  ({ status: e, minWidth: r, margin: n }) => br`
    ${el}
    ${Zc(Qc[e])}
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
);
var Mi = { exports: {} }, Mt = {};
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
function rl() {
  if (Yn)
    return Mt;
  Yn = 1;
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
var Un;
function nl() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), O = Symbol.iterator, C = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = O && t[O] || t[C];
      return typeof a == "function" ? a : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        N("error", t, l);
      }
    }
    function N(t, a, l) {
      {
        var y = k.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var x = l.map(function(b) {
          return String(b);
        });
        x.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, x);
      }
    }
    var W = !1, A = !1, T = !1, D = !1, z = !1, M;
    M = Symbol.for("react.module.reference");
    function q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || z || t === o || t === p || t === d || D || t === v || W || A || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === h || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === M || t.getModuleId !== void 0));
    }
    function F(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function Y(t) {
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
            return Y(a) + ".Consumer";
          case u:
            var l = t;
            return Y(l._context) + ".Provider";
          case c:
            return F(t, t.render, "ForwardRef");
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
    function K(t, a, l) {
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
    var ae = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
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
`), $ = y.stack.split(`
`), E = m.length - 1, S = $.length - 1; E >= 1 && S >= 0 && m[E] !== $[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (m[E] !== $[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || m[E] !== $[S]) {
                    var j = `
` + m[E].replace(" at new ", " at ");
                    return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, j), j;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = x, Ge(), Error.prepareStackTrace = _;
      }
      var H = t ? t.displayName || t.name : "", je = H ? K(H) : "";
      return typeof t == "function" && J.set(t, je), je;
    }
    function Je(t, a, l) {
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
        return K(t);
      switch (t) {
        case p:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Je(t.render);
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
                var $ = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              m = E;
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
    function Ee(t) {
      if (rt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(t)), ke(t);
    }
    var X = k.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Re, ue;
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
          Se || (Se = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
        var x, b = {}, m = null, $ = null;
        l !== void 0 && (Ee(l), m = "" + l), ot(a) && (Ee(a.key), m = "" + a.key), it(a) && ($ = a.ref, at(a, _));
        for (x in a)
          Q.call(a, x) && !nt.hasOwnProperty(x) && (b[x] = a[x]);
        if (t && t.defaultProps) {
          var E = t.defaultProps;
          for (x in E)
            b[x] === void 0 && (b[x] = E[x]);
        }
        if (m || $) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && st(b, S), $ && ut(b, S);
        }
        return ct(t, m, $, _, y, X.current, b);
      }
    }
    var ce = k.ReactCurrentOwner, Oe = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var a = t._owner, l = Z(t.type, t._source, a ? a.type : null);
        Oe.setExtraStackFrame(l);
      } else
        Oe.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Te() {
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
    var $e = {};
    function pt(t) {
      {
        var a = Te();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Ne(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = pt(a);
        if ($e[l])
          return;
        $e[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + P(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), V(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && Ne(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = R(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var x = _.call(t), b; !(b = x.next()).done; )
              fe(b.value) && Ne(b.value, a);
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
          var $ = ft(_);
          $ ? m += $ : m += Te();
          var E;
          t === null ? E = "null" : se(t) ? E = "array" : t !== void 0 && t.$$typeof === r ? (E = "<" + (P(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : E = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, m);
        }
        var S = lt(t, a, l, _, x);
        if (S == null)
          return S;
        if (b) {
          var j = a.children;
          if (j !== void 0)
            if (y)
              if (se(j)) {
                for (var H = 0; H < j.length; H++)
                  Ce(j[H], t);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, t);
        }
        return t === i ? ht(S) : dt(S), S;
      }
    }
    function yt(t, a, l) {
      return Pe(t, a, l, !0);
    }
    function gt(t, a, l) {
      return Pe(t, a, l, !1);
    }
    var mt = gt, vt = yt;
    tr.Fragment = i, tr.jsx = mt, tr.jsxs = vt;
  }()), tr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = rl() : e.exports = nl();
})(Mi);
const il = Mi.exports.jsx, rr = ({
  children: e,
  status: r = "default",
  dataSelector: n = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...s
}) => /* @__PURE__ */ il(tl, {
  status: r,
  ...s,
  minWidth: i,
  margin: o,
  "data-selector": n,
  children: e
}), ol = he.div`
  margin: 10px;
  position: absolute;
`, Vn = he.div(
  ({ rotate: e }) => br`
    rotate: ${e}deg;
  `
), He = 0.2, Hn = 100, al = ({
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
  }, s = Fe(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => {
    const h = p + Hn / d;
    return {
      panLevel: n.first <= 0 ? p : h,
      zoomLevel: d,
      transition: !0
    };
  }), [n.first]), u = Fe(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => {
    const h = p - Hn / d;
    return {
      panLevel: h > 1 ? h : 1,
      zoomLevel: d,
      transition: !0
    };
  }), []), f = Fe(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => ({
    zoomLevel: +(d - He > 0 ? d - He : He / 2).toFixed(2),
    panLevel: p,
    transition: !0
  })), []), c = Fe(() => r(({
    panLevel: p,
    zoomLevel: d
  }) => ({
    zoomLevel: +(d === He / 2 ? He : d + He).toFixed(2),
    panLevel: p,
    transition: !0
  })), []);
  return De(() => {
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
  }, [n.first]), /* @__PURE__ */ Ye(ol, {
    children: [/* @__PURE__ */ U(rr, {
      ...o,
      onClick: s,
      disabled: n.first <= 0,
      children: /* @__PURE__ */ U(Vn, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ U(rr, {
      ...o,
      onClick: f,
      disabled: e < He,
      children: "\u2796"
    }), /* @__PURE__ */ U(rr, {
      ...o,
      onClick: c,
      disabled: e >= He * 10,
      children: "\u2795"
    }), /* @__PURE__ */ U(rr, {
      ...o,
      onClick: u,
      disabled: n.last >= i - 1 || n.last - n.first > i,
      children: /* @__PURE__ */ U(Vn, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, sl = ({
  width: e,
  height: r
}) => {
  const n = de, i = de, o = {
    x: n,
    y: i,
    width: e ? e - Be[1] : 0,
    height: r ? r - Be[0] : 0
  };
  return /* @__PURE__ */ Ye(Ai, {
    children: [/* @__PURE__ */ U("line", {
      x1: n,
      y1: i,
      x2: n + o.width,
      y2: i,
      stroke: "#dedede",
      strokeWidth: 1
    }), /* @__PURE__ */ U("line", {
      x1: n,
      y1: i,
      x2: n,
      y2: i + o.height - de,
      stroke: "#dedede",
      strokeWidth: 1
    }), /* @__PURE__ */ Ye("defs", {
      children: [/* @__PURE__ */ U("clipPath", {
        id: "chart-contents",
        children: /* @__PURE__ */ U("rect", {
          ...o
        })
      }), /* @__PURE__ */ U("clipPath", {
        id: "bottom-axis",
        children: /* @__PURE__ */ U("rect", {
          ...o,
          height: `${r}`
        })
      })]
    })]
  });
}, ul = he.svg`
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
`, cl = he.div`
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
`, ll = he.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, fl = (e, r) => {
  De(() => {
    let n = !1, i = 0, o = 0, s = {};
    const u = (R) => {
      r(({ panLevel: k, zoomLevel: w }) => {
        let N = w - R;
        return N = N < 0.1 ? 0.1 : N, {
          zoomLevel: Math.round(N * 1e3) / 1e3,
          panLevel: k,
          transition: !1
        };
      });
    }, f = Wr(u, 100), c = (R) => {
      r(({ panLevel: k, zoomLevel: w }) => {
        const N = k + R / w;
        return {
          panLevel: N > 1 ? N : 1,
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
    }, h = ({ clientX: R, pointerId: k, pageX: w, pageY: N }) => {
      const W = Object.values(s);
      if (n)
        if ((W == null ? void 0 : W.length) === 2) {
          if (Object.keys(s).indexOf(`${k}`) !== 1)
            return;
          s[k] = { pageX: w, pageY: N };
          const A = W[0].pageX - W[1].pageX, T = W[0].pageY - W[1].pageY, D = Math.sqrt(A * A + T * T), z = o ? (o - D) / 120 : 0;
          o = D, u(z);
          return;
        } else {
          const A = i ? R - i : 0;
          i = R, c(A);
        }
    }, g = Wr(h, 100), v = (R) => {
      R.ctrlKey && (f(R.deltaY * 6e-3), R.preventDefault());
    }, O = (R) => R.pointerType === "mouse" ? g(R) : h(R), C = (R = "remove", k) => {
      var W;
      const w = window[`${R}EventListener`], N = (W = e.current) == null ? void 0 : W[`${R}EventListener`];
      w("pointerup", d), N == null || N("pointerdown", p), N == null || N("pointermove", O), N == null || N("wheel", v, k);
    };
    return C("add", { passive: !1 }), C;
  }, [e.current]);
}, pl = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, dl = (e) => `
  border: 1px solid ${e};
  color: ${e};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, hl = he.div`
  position: absolute;
  ${dl(pl.default)}
  padding: 3px;
  font-size: 0.65em;
  font-weight: bold;
  transition: all 0.2s;
`, yl = ({
  value: e,
  x: r,
  y: n
}) => n > de ? /* @__PURE__ */ U(hl, {
  style: {
    left: r - de * 2 + 2,
    top: n + de - 4
  },
  children: e.toLocaleString("en-US")
}) : /* @__PURE__ */ U(Ai, {}), vl = ({
  data: e = []
}) => {
  const r = It(null), [n, i] = Ue(Ca), o = Wu(r, e.length, n), s = kc(e, o);
  Pa(r, e, s.scales, o);
  const u = wu(r, e, o, s, n.transition);
  return fl(r, i), /* @__PURE__ */ Ye(cl, {
    children: [e != null && e.length ? /* @__PURE__ */ U(al, {
      svgRef: r,
      controls: n,
      setControls: i,
      visibleRange: o.visibleRange,
      length: e.length
    }) : /* @__PURE__ */ U(ll, {
      children: /* @__PURE__ */ U(zi, {})
    }), /* @__PURE__ */ U(ul, {
      ref: r,
      children: /* @__PURE__ */ U(sl, {
        ...o.sizes
      })
    }), /* @__PURE__ */ U(Jc, {
      ...u
    }), e.length && /* @__PURE__ */ U(yl, {
      value: e[e.length - 1].close,
      x: o.sizes.width,
      y: s.scales.yScale(e[e.length - 1].close)
    })]
  });
};
export {
  vl as default
};
