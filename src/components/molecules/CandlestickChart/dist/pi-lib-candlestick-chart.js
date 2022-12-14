import He, { useState as De, useEffect as Ie, useRef as St, useCallback as mt } from "react";
import de, { keyframes as Bn, css as br } from "styled-components";
const qn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Xn = Bn`
  to {
    rotate: 360deg;
  }
`, Mi = Bn`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, Fi = de.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Di = de.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Xn} 2s linear infinite;
  margin: 2px;
`, tn = de.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, zt = de.div(
  ({ delay: e }) => br`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${qn.pending};
    animation: ${Mi} 0.3s linear alternate infinite;

    ${e ? "animation-delay: 0.2s;" : ""}
  `
);
de.div`
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
var Vr = { exports: {} }, $t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function Ii() {
  if (rn)
    return $t;
  rn = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
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
var nn;
function Li() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, T = "@@iterator";
    function N(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = E && t[E] || t[T];
      return typeof a == "function" ? a : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        I("error", t, f);
      }
    }
    function I(t, a, f) {
      {
        var y = $.ReactDebugCurrentFrame, b = y.getStackAddendum();
        b !== "" && (a += "%s", f = f.concat([b]));
        var w = f.map(function(_) {
          return String(_);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var U = !1, A = !1, R = !1, M = !1, V = !1, H;
    H = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || V || t === o || t === p || t === h || M || t === v || U || A || R || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === H || t.getModuleId !== void 0));
    }
    function j(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var b = a.displayName || a.name || "";
      return b !== "" ? f + "(" + b + ")" : f;
    }
    function L(t) {
      return t.displayName || "Context";
    }
    function C(t) {
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
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var a = t;
            return L(a) + ".Consumer";
          case u:
            var f = t;
            return L(f._context) + ".Provider";
          case l:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : C(t.type) || "Memo";
          case g: {
            var b = t, w = b._payload, _ = b._init;
            try {
              return C(_(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, z = 0, te, re, ne, X, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Be() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function qe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, t, {
              value: te
            }),
            info: D({}, t, {
              value: re
            }),
            warn: D({}, t, {
              value: ne
            }),
            error: D({}, t, {
              value: X
            }),
            group: D({}, t, {
              value: ye
            }),
            groupCollapsed: D({}, t, {
              value: ge
            }),
            groupEnd: D({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = $.ReactCurrentDispatcher, oe;
    function G(t, a, f) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (b) {
            var y = b.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var f = J.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (F) {
              y = F;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (F) {
              y = F;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            y = F;
          }
          t();
        }
      } catch (F) {
        if (F && y && typeof F.stack == "string") {
          for (var m = F.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, S = O.length - 1; k >= 1 && S >= 0 && m[k] !== O[S]; )
            S--;
          for (; k >= 1 && S >= 0; k--, S--)
            if (m[k] !== O[S]) {
              if (k !== 1 || S !== 1)
                do
                  if (k--, S--, S < 0 || m[k] !== O[S]) {
                    var P = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, P), P;
                  }
                while (k >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = b;
      }
      var Y = t ? t.displayName || t.name : "", Pe = Y ? G(Y) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, f) {
      return _e(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Ge(t.render);
          case d:
            return K(t.type, a, f);
          case g: {
            var y = t, b = y._payload, w = y._init;
            try {
              return K(w(b), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, be = {}, we = $.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, f, y, b) {
      {
        var w = Function.call.bind(Z);
        for (var _ in t)
          if (w(t, _)) {
            var m = void 0;
            try {
              if (typeof t[_] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[_](a, _, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(b), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, _, typeof m), Q(null)), m instanceof Error && !(m.message in be) && (be[m.message] = !0, Q(b), x("Failed %s type: %s", f, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = $.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ee, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var f = C(B.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(B.current.type), t.ref), ue[f] = !0);
      }
    }
    function ot(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var st = function(t, a, f, y, b, w, _) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
        props: _,
        _owner: w
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
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, f, y, b) {
      {
        var w, _ = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, b));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (_[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            _[w] === void 0 && (_[w] = k[w]);
        }
        if (m || O) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(_, S), O && at(_, S);
        }
        return st(t, m, O, b, y, B.current, _);
      }
    }
    var ce = $.ReactCurrentOwner, Re = $.ReactDebugCurrentFrame;
    function W(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
      } else
        Re.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = C(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + C(t._owner.type) + "."), W(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), W(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            le(y) && $e(y, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var b = N(t);
          if (typeof b == "function" && b !== t.entries)
            for (var w = b.call(t), _; !(_ = w.next()).done; )
              le(_.value) && $e(_.value, a);
        }
      }
    }
    function lt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = C(a);
          Ke(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !fe) {
          fe = !0;
          var b = C(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            W(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), W(null);
            break;
          }
        }
        t.ref !== null && (W(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Ne(t, a, f, y, b, w) {
      {
        var _ = ee(t);
        if (!_) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(b);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (C(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var S = ut(t, a, f, b, w);
        if (S == null)
          return S;
        if (_) {
          var P = a.children;
          if (P !== void 0)
            if (y)
              if (se(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  Ce(P[Y], t);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(P, t);
        }
        return t === i ? pt(S) : lt(S), S;
      }
    }
    function ht(t, a, f) {
      return Ne(t, a, f, !0);
    }
    function dt(t, a, f) {
      return Ne(t, a, f, !1);
    }
    var yt = dt, gt = ht;
    Ht.Fragment = i, Ht.jsx = yt, Ht.jsxs = gt;
  }()), Ht;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ii() : e.exports = Li();
})(Vr);
const Ct = Vr.exports.jsx, Sr = Vr.exports.jsxs, Wi = () => /* @__PURE__ */ Ct(Fi, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ Sr(Di, {
    children: [/* @__PURE__ */ Sr(tn, {
      children: [/* @__PURE__ */ Ct(zt, {
        delay: !0
      }), /* @__PURE__ */ Ct(zt, {})]
    }), /* @__PURE__ */ Sr(tn, {
      children: [/* @__PURE__ */ Ct(zt, {}), /* @__PURE__ */ Ct(zt, {
        delay: !0
      })]
    })]
  })
});
function Yi(e) {
  return e;
}
var Er = 1, nr = 2, Nr = 3, Bt = 4, on = 1e-6;
function Ui(e) {
  return "translate(" + e + ",0)";
}
function Vi(e) {
  return "translate(0," + e + ")";
}
function zi(e) {
  return (r) => +e(r);
}
function Hi(e, r) {
  return r = Math.max(0, e.bandwidth() - r * 2) / 2, e.round() && (r = Math.round(r)), (n) => +e(n) + r;
}
function Bi() {
  return !this.__axis;
}
function Gn(e, r) {
  var n = [], i = null, o = null, s = 6, u = 6, c = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = e === Er || e === Bt ? -1 : 1, h = e === Bt || e === nr ? "x" : "y", d = e === Er || e === Nr ? Ui : Vi;
  function g(v) {
    var E = i == null ? r.ticks ? r.ticks.apply(r, n) : r.domain() : i, T = o == null ? r.tickFormat ? r.tickFormat.apply(r, n) : Yi : o, N = Math.max(s, 0) + c, $ = r.range(), x = +$[0] + l, I = +$[$.length - 1] + l, U = (r.bandwidth ? Hi : zi)(r.copy(), l), A = v.selection ? v.selection() : v, R = A.selectAll(".domain").data([null]), M = A.selectAll(".tick").data(E, r).order(), V = M.exit(), H = M.enter().append("g").attr("class", "tick"), ee = M.select("line"), j = M.select("text");
    R = R.merge(R.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), M = M.merge(H), ee = ee.merge(H.append("line").attr("stroke", "currentColor").attr(h + "2", p * s)), j = j.merge(H.append("text").attr("fill", "currentColor").attr(h, p * N).attr("dy", e === Er ? "0em" : e === Nr ? "0.71em" : "0.32em")), v !== A && (R = R.transition(v), M = M.transition(v), ee = ee.transition(v), j = j.transition(v), V = V.transition(v).attr("opacity", on).attr("transform", function(L) {
      return isFinite(L = U(L)) ? d(L + l) : this.getAttribute("transform");
    }), H.attr("opacity", on).attr("transform", function(L) {
      var C = this.parentNode.__axis;
      return d((C && isFinite(C = C(L)) ? C : U(L)) + l);
    })), V.remove(), R.attr("d", e === Bt || e === nr ? u ? "M" + p * u + "," + x + "H" + l + "V" + I + "H" + p * u : "M" + l + "," + x + "V" + I : u ? "M" + x + "," + p * u + "V" + l + "H" + I + "V" + p * u : "M" + x + "," + l + "H" + I), M.attr("opacity", 1).attr("transform", function(L) {
      return d(U(L) + l);
    }), ee.attr(h + "2", p * s), j.attr(h, p * N).text(T), A.filter(Bi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === nr ? "start" : e === Bt ? "end" : "middle"), A.each(function() {
      this.__axis = U;
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
    return arguments.length ? (c = +v, g) : c;
  }, g.offset = function(v) {
    return arguments.length ? (l = +v, g) : l;
  }, g;
}
function qi(e) {
  return Gn(nr, e);
}
function Xi(e) {
  return Gn(Nr, e);
}
var Pr = "http://www.w3.org/1999/xhtml";
const an = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wr(e) {
  var r = e += "", n = r.indexOf(":");
  return n >= 0 && (r = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), an.hasOwnProperty(r) ? { space: an[r], local: e } : e;
}
function Gi(e) {
  return function() {
    var r = this.ownerDocument, n = this.namespaceURI;
    return n === Pr && r.documentElement.namespaceURI === Pr ? r.createElement(e) : r.createElementNS(n, e);
  };
}
function Ji(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Jn(e) {
  var r = wr(e);
  return (r.local ? Ji : Gi)(r);
}
function Ki() {
}
function zr(e) {
  return e == null ? Ki : function() {
    return this.querySelector(e);
  };
}
function Zi(e) {
  typeof e != "function" && (e = zr(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, c = i[o] = new Array(u), l, p, h = 0; h < u; ++h)
      (l = s[h]) && (p = e.call(l, l.__data__, h, s)) && ("__data__" in l && (p.__data__ = l.__data__), c[h] = p);
  return new he(i, this._parents);
}
function Qi(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function eo() {
  return [];
}
function Kn(e) {
  return e == null ? eo : function() {
    return this.querySelectorAll(e);
  };
}
function to(e) {
  return function() {
    return Qi(e.apply(this, arguments));
  };
}
function ro(e) {
  typeof e == "function" ? e = to(e) : e = Kn(e);
  for (var r = this._groups, n = r.length, i = [], o = [], s = 0; s < n; ++s)
    for (var u = r[s], c = u.length, l, p = 0; p < c; ++p)
      (l = u[p]) && (i.push(e.call(l, l.__data__, p, u)), o.push(l));
  return new he(i, o);
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
var no = Array.prototype.find;
function io(e) {
  return function() {
    return no.call(this.children, e);
  };
}
function oo() {
  return this.firstElementChild;
}
function ao(e) {
  return this.select(e == null ? oo : io(typeof e == "function" ? e : Qn(e)));
}
var so = Array.prototype.filter;
function uo() {
  return Array.from(this.children);
}
function co(e) {
  return function() {
    return so.call(this.children, e);
  };
}
function fo(e) {
  return this.selectAll(e == null ? uo : co(typeof e == "function" ? e : Qn(e)));
}
function lo(e) {
  typeof e != "function" && (e = Zn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, c = i[o] = [], l, p = 0; p < u; ++p)
      (l = s[p]) && e.call(l, l.__data__, p, s) && c.push(l);
  return new he(i, this._parents);
}
function ei(e) {
  return new Array(e.length);
}
function po() {
  return new he(this._enter || this._groups.map(ei), this._parents);
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
function ho(e) {
  return function() {
    return e;
  };
}
function yo(e, r, n, i, o, s) {
  for (var u = 0, c, l = r.length, p = s.length; u < p; ++u)
    (c = r[u]) ? (c.__data__ = s[u], i[u] = c) : n[u] = new cr(e, s[u]);
  for (; u < l; ++u)
    (c = r[u]) && (o[u] = c);
}
function go(e, r, n, i, o, s, u) {
  var c, l, p = /* @__PURE__ */ new Map(), h = r.length, d = s.length, g = new Array(h), v;
  for (c = 0; c < h; ++c)
    (l = r[c]) && (g[c] = v = u.call(l, l.__data__, c, r) + "", p.has(v) ? o[c] = l : p.set(v, l));
  for (c = 0; c < d; ++c)
    v = u.call(e, s[c], c, s) + "", (l = p.get(v)) ? (i[c] = l, l.__data__ = s[c], p.delete(v)) : n[c] = new cr(e, s[c]);
  for (c = 0; c < h; ++c)
    (l = r[c]) && p.get(g[c]) === l && (o[c] = l);
}
function mo(e) {
  return e.__data__;
}
function vo(e, r) {
  if (!arguments.length)
    return Array.from(this, mo);
  var n = r ? go : yo, i = this._parents, o = this._groups;
  typeof e != "function" && (e = ho(e));
  for (var s = o.length, u = new Array(s), c = new Array(s), l = new Array(s), p = 0; p < s; ++p) {
    var h = i[p], d = o[p], g = d.length, v = _o(e.call(h, h && h.__data__, p, i)), E = v.length, T = c[p] = new Array(E), N = u[p] = new Array(E), $ = l[p] = new Array(g);
    n(h, d, T, N, $, v, r);
    for (var x = 0, I = 0, U, A; x < E; ++x)
      if (U = T[x]) {
        for (x >= I && (I = x + 1); !(A = N[I]) && ++I < E; )
          ;
        U._next = A || null;
      }
  }
  return u = new he(u, i), u._enter = c, u._exit = l, u;
}
function _o(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function bo() {
  return new he(this._exit || this._groups.map(ei), this._parents);
}
function wo(e, r, n) {
  var i = this.enter(), o = this, s = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), r != null && (o = r(o), o && (o = o.selection())), n == null ? s.remove() : n(s), i && o ? i.merge(o).order() : o;
}
function xo(e) {
  for (var r = e.selection ? e.selection() : e, n = this._groups, i = r._groups, o = n.length, s = i.length, u = Math.min(o, s), c = new Array(o), l = 0; l < u; ++l)
    for (var p = n[l], h = i[l], d = p.length, g = c[l] = new Array(d), v, E = 0; E < d; ++E)
      (v = p[E] || h[E]) && (g[E] = v);
  for (; l < o; ++l)
    c[l] = n[l];
  return new he(c, this._parents);
}
function ko() {
  for (var e = this._groups, r = -1, n = e.length; ++r < n; )
    for (var i = e[r], o = i.length - 1, s = i[o], u; --o >= 0; )
      (u = i[o]) && (s && u.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(u, s), s = u);
  return this;
}
function So(e) {
  e || (e = Eo);
  function r(d, g) {
    return d && g ? e(d.__data__, g.__data__) : !d - !g;
  }
  for (var n = this._groups, i = n.length, o = new Array(i), s = 0; s < i; ++s) {
    for (var u = n[s], c = u.length, l = o[s] = new Array(c), p, h = 0; h < c; ++h)
      (p = u[h]) && (l[h] = p);
    l.sort(r);
  }
  return new he(o, this._parents).order();
}
function Eo(e, r) {
  return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Ro() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Oo() {
  return Array.from(this);
}
function To() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length; o < s; ++o) {
      var u = i[o];
      if (u)
        return u;
    }
  return null;
}
function $o() {
  let e = 0;
  for (const r of this)
    ++e;
  return e;
}
function Co() {
  return !this.node();
}
function No(e) {
  for (var r = this._groups, n = 0, i = r.length; n < i; ++n)
    for (var o = r[n], s = 0, u = o.length, c; s < u; ++s)
      (c = o[s]) && e.call(c, c.__data__, s, o);
  return this;
}
function Po(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function jo(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ao(e, r) {
  return function() {
    this.setAttribute(e, r);
  };
}
function Mo(e, r) {
  return function() {
    this.setAttributeNS(e.space, e.local, r);
  };
}
function Fo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Do(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Io(e, r) {
  var n = wr(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((r == null ? n.local ? jo : Po : typeof r == "function" ? n.local ? Do : Fo : n.local ? Mo : Ao)(n, r));
}
function ti(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Lo(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Wo(e, r, n) {
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
  return arguments.length > 1 ? this.each((r == null ? Lo : typeof r == "function" ? Yo : Wo)(e, r, n == null ? "" : n)) : Et(this.node(), e);
}
function Et(e, r) {
  return e.style.getPropertyValue(r) || ti(e).getComputedStyle(e, null).getPropertyValue(r);
}
function Vo(e) {
  return function() {
    delete this[e];
  };
}
function zo(e, r) {
  return function() {
    this[e] = r;
  };
}
function Ho(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Bo(e, r) {
  return arguments.length > 1 ? this.each((r == null ? Vo : typeof r == "function" ? Ho : zo)(e, r)) : this.node()[e];
}
function ri(e) {
  return e.trim().split(/^|\s+/);
}
function Hr(e) {
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
  for (var n = Hr(e), i = -1, o = r.length; ++i < o; )
    n.add(r[i]);
}
function oi(e, r) {
  for (var n = Hr(e), i = -1, o = r.length; ++i < o; )
    n.remove(r[i]);
}
function qo(e) {
  return function() {
    ii(this, e);
  };
}
function Xo(e) {
  return function() {
    oi(this, e);
  };
}
function Go(e, r) {
  return function() {
    (r.apply(this, arguments) ? ii : oi)(this, e);
  };
}
function Jo(e, r) {
  var n = ri(e + "");
  if (arguments.length < 2) {
    for (var i = Hr(this.node()), o = -1, s = n.length; ++o < s; )
      if (!i.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof r == "function" ? Go : r ? qo : Xo)(n, r));
}
function Ko() {
  this.textContent = "";
}
function Zo(e) {
  return function() {
    this.textContent = e;
  };
}
function Qo(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.textContent = r == null ? "" : r;
  };
}
function ea(e) {
  return arguments.length ? this.each(e == null ? Ko : (typeof e == "function" ? Qo : Zo)(e)) : this.node().textContent;
}
function ta() {
  this.innerHTML = "";
}
function ra(e) {
  return function() {
    this.innerHTML = e;
  };
}
function na(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.innerHTML = r == null ? "" : r;
  };
}
function ia(e) {
  return arguments.length ? this.each(e == null ? ta : (typeof e == "function" ? na : ra)(e)) : this.node().innerHTML;
}
function oa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function aa() {
  return this.each(oa);
}
function sa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ua() {
  return this.each(sa);
}
function ca(e) {
  var r = typeof e == "function" ? e : Jn(e);
  return this.select(function() {
    return this.appendChild(r.apply(this, arguments));
  });
}
function fa() {
  return null;
}
function la(e, r) {
  var n = typeof e == "function" ? e : Jn(e), i = r == null ? fa : typeof r == "function" ? r : zr(r);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function pa() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ha() {
  return this.each(pa);
}
function da() {
  var e = this.cloneNode(!1), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function ya() {
  var e = this.cloneNode(!0), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function ga(e) {
  return this.select(e ? ya : da);
}
function ma(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function va(e) {
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
function ba(e) {
  return function() {
    var r = this.__on;
    if (!!r) {
      for (var n = 0, i = -1, o = r.length, s; n < o; ++n)
        s = r[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : r[++i] = s;
      ++i ? r.length = i : delete this.__on;
    }
  };
}
function wa(e, r, n) {
  return function() {
    var i = this.__on, o, s = va(r);
    if (i) {
      for (var u = 0, c = i.length; u < c; ++u)
        if ((o = i[u]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = s, o.options = n), o.value = r;
          return;
        }
    }
    this.addEventListener(e.type, s, n), o = { type: e.type, name: e.name, value: r, listener: s, options: n }, i ? i.push(o) : this.__on = [o];
  };
}
function xa(e, r, n) {
  var i = _a(e + ""), o, s = i.length, u;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var l = 0, p = c.length, h; l < p; ++l)
        for (o = 0, h = c[l]; o < s; ++o)
          if ((u = i[o]).type === h.type && u.name === h.name)
            return h.value;
    }
    return;
  }
  for (c = r ? wa : ba, o = 0; o < s; ++o)
    this.each(c(i[o], r, n));
  return this;
}
function ai(e, r, n) {
  var i = ti(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(r, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(r, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(r, !1, !1)), e.dispatchEvent(o);
}
function ka(e, r) {
  return function() {
    return ai(this, e, r);
  };
}
function Sa(e, r) {
  return function() {
    return ai(this, e, r.apply(this, arguments));
  };
}
function Ea(e, r) {
  return this.each((typeof r == "function" ? Sa : ka)(e, r));
}
function* Ra() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length, u; o < s; ++o)
      (u = i[o]) && (yield u);
}
var si = [null];
function he(e, r) {
  this._groups = e, this._parents = r;
}
function Ut() {
  return new he([[document.documentElement]], si);
}
function Oa() {
  return this;
}
he.prototype = Ut.prototype = {
  constructor: he,
  select: Zi,
  selectAll: ro,
  selectChild: ao,
  selectChildren: fo,
  filter: lo,
  data: vo,
  enter: po,
  exit: bo,
  join: wo,
  merge: xo,
  selection: Oa,
  order: ko,
  sort: So,
  call: Ro,
  nodes: Oo,
  node: To,
  size: $o,
  empty: Co,
  each: No,
  attr: Io,
  style: Uo,
  property: Bo,
  classed: Jo,
  text: ea,
  html: ia,
  raise: aa,
  lower: ua,
  append: ca,
  insert: la,
  remove: ha,
  clone: ga,
  datum: ma,
  on: xa,
  dispatch: Ea,
  [Symbol.iterator]: Ra
};
function ir(e) {
  return typeof e == "string" ? new he([[document.querySelector(e)]], [document.documentElement]) : new he([[e]], si);
}
const Ta = 500, Fe = 10, Rt = [65, 55], ui = 0.3, $a = 10, Rr = {}, Nt = (e = "", r, n) => {
  var d;
  const i = Math.round((d = n.bandwidth) == null ? void 0 : d.call(n)) || 0, o = `${e}-${r}-${i}`;
  if (Rr[o] !== void 0)
    return Rr[o];
  let s = "";
  const u = new Date(e), [c, l, p] = e.split("-");
  p === "01" && (l === "01" ? s = c : s = u.toLocaleString("en-UK", {
    month: "short"
  }));
  let h = [];
  return i > 1 && h.push(16), i > 3 && h.push(8, 24), i > 7 && (h = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), h.includes(Number(p)) && (s = p), n.domain().length - 1 === r && (s = p), Rr[o] = s, s;
}, Ca = (e, r, n, i, o) => {
  const [s, u] = De(), [c, l] = De(), { xScale: p, yScale: h } = i, { width: d, height: g } = o;
  Ie(() => {
    !e.current || (ir(e.current).select("g.x-axis, y.y-axis").remove(), u(
      ir(e.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), l(ir(e.current).append("g").classed("y-axis", !0)));
  }, []), Ie(() => {
    !p.domain || !r || (s.call(Xi(p)).attr("transform", `translate(${n},${g - Rt[0]})`).selectAll("text").classed(
      "emphasise",
      (v, E) => Nt(v, E, p).length > 2
    ).attr(
      "x",
      (v, E) => Nt(v, E, p).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((v, E) => Nt(v, E, p)), s.selectAll("line").attr(
      "stroke",
      (v, E) => Nt(v, E, p).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (v, E) => Nt(v, E, p).length ? 12 : 6
    ), c.call(qi(h)).attr(
      "transform",
      `translate(${d - Rt[1] + Fe},${Fe})`
    ));
  }, [p, h]);
};
var Na = { value: () => {
} };
function ci() {
  for (var e = 0, r = arguments.length, n = {}, i; e < r; ++e) {
    if (!(i = arguments[e] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new or(n);
}
function or(e) {
  this._ = e;
}
function Pa(e, r) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", o = n.indexOf(".");
    if (o >= 0 && (i = n.slice(o + 1), n = n.slice(0, o)), n && !r.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
or.prototype = ci.prototype = {
  constructor: or,
  on: function(e, r) {
    var n = this._, i = Pa(e + "", n), o, s = -1, u = i.length;
    if (arguments.length < 2) {
      for (; ++s < u; )
        if ((o = (e = i[s]).type) && (o = ja(n[o], e.name)))
          return o;
      return;
    }
    if (r != null && typeof r != "function")
      throw new Error("invalid callback: " + r);
    for (; ++s < u; )
      if (o = (e = i[s]).type)
        n[o] = sn(n[o], e.name, r);
      else if (r == null)
        for (o in n)
          n[o] = sn(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, r = this._;
    for (var n in r)
      e[n] = r[n].slice();
    return new or(e);
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
function ja(e, r) {
  for (var n = 0, i = e.length, o; n < i; ++n)
    if ((o = e[n]).name === r)
      return o.value;
}
function sn(e, r, n) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === r) {
      e[i] = Na, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: r, value: n }), e;
}
var Ot = 0, Dt = 0, Pt = 0, fi = 1e3, fr, It, lr = 0, bt = 0, xr = 0, Lt = typeof performance == "object" && performance.now ? performance : Date, li = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Br() {
  return bt || (li(Aa), bt = Lt.now() + xr);
}
function Aa() {
  bt = 0;
}
function pr() {
  this._call = this._time = this._next = null;
}
pr.prototype = pi.prototype = {
  constructor: pr,
  restart: function(e, r, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Br() : +n) + (r == null ? 0 : +r), !this._next && It !== this && (It ? It._next = this : fr = this, It = this), this._call = e, this._time = n, jr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jr());
  }
};
function pi(e, r, n) {
  var i = new pr();
  return i.restart(e, r, n), i;
}
function Ma() {
  Br(), ++Ot;
  for (var e = fr, r; e; )
    (r = bt - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
  --Ot;
}
function un() {
  bt = (lr = Lt.now()) + xr, Ot = Dt = 0;
  try {
    Ma();
  } finally {
    Ot = 0, Da(), bt = 0;
  }
}
function Fa() {
  var e = Lt.now(), r = e - lr;
  r > fi && (xr -= r, lr = e);
}
function Da() {
  for (var e, r = fr, n, i = 1 / 0; r; )
    r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (n = r._next, r._next = null, r = e ? e._next = n : fr = n);
  It = e, jr(i);
}
function jr(e) {
  if (!Ot) {
    Dt && (Dt = clearTimeout(Dt));
    var r = e - bt;
    r > 24 ? (e < 1 / 0 && (Dt = setTimeout(un, e - Lt.now() - xr)), Pt && (Pt = clearInterval(Pt))) : (Pt || (lr = Lt.now(), Pt = setInterval(Fa, fi)), Ot = 1, li(un));
  }
}
function cn(e, r, n) {
  var i = new pr();
  return r = r == null ? 0 : +r, i.restart((o) => {
    i.stop(), e(o + r);
  }, r, n), i;
}
var Ia = ci("start", "end", "cancel", "interrupt"), La = [], hi = 0, fn = 1, Ar = 2, ar = 3, ln = 4, Mr = 5, sr = 6;
function kr(e, r, n, i, o, s) {
  var u = e.__transition;
  if (!u)
    e.__transition = {};
  else if (n in u)
    return;
  Wa(e, n, {
    name: r,
    index: i,
    group: o,
    on: Ia,
    tween: La,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: hi
  });
}
function qr(e, r) {
  var n = Me(e, r);
  if (n.state > hi)
    throw new Error("too late; already scheduled");
  return n;
}
function We(e, r) {
  var n = Me(e, r);
  if (n.state > ar)
    throw new Error("too late; already running");
  return n;
}
function Me(e, r) {
  var n = e.__transition;
  if (!n || !(n = n[r]))
    throw new Error("transition not found");
  return n;
}
function Wa(e, r, n) {
  var i = e.__transition, o;
  i[r] = n, n.timer = pi(s, 0, n.time);
  function s(p) {
    n.state = fn, n.timer.restart(u, n.delay, n.time), n.delay <= p && u(p - n.delay);
  }
  function u(p) {
    var h, d, g, v;
    if (n.state !== fn)
      return l();
    for (h in i)
      if (v = i[h], v.name === n.name) {
        if (v.state === ar)
          return cn(u);
        v.state === ln ? (v.state = sr, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete i[h]) : +h < r && (v.state = sr, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete i[h]);
      }
    if (cn(function() {
      n.state === ar && (n.state = ln, n.timer.restart(c, n.delay, n.time), c(p));
    }), n.state = Ar, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ar) {
      for (n.state = ar, o = new Array(g = n.tween.length), h = 0, d = -1; h < g; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function c(p) {
    for (var h = p < n.duration ? n.ease.call(null, p / n.duration) : (n.timer.restart(l), n.state = Mr, 1), d = -1, g = o.length; ++d < g; )
      o[d].call(e, h);
    n.state === Mr && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = sr, n.timer.stop(), delete i[r];
    for (var p in i)
      return;
    delete e.__transition;
  }
}
function Ya(e, r) {
  var n = e.__transition, i, o, s = !0, u;
  if (!!n) {
    r = r == null ? null : r + "";
    for (u in n) {
      if ((i = n[u]).name !== r) {
        s = !1;
        continue;
      }
      o = i.state > Ar && i.state < Mr, i.state = sr, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[u];
    }
    s && delete e.__transition;
  }
}
function Ua(e) {
  return this.each(function() {
    Ya(this, e);
  });
}
function Xr(e, r, n) {
  e.prototype = r.prototype = n, n.constructor = e;
}
function di(e, r) {
  var n = Object.create(e.prototype);
  for (var i in r)
    n[i] = r[i];
  return n;
}
function Vt() {
}
var Wt = 0.7, hr = 1 / Wt, kt = "\\s*([+-]?\\d+)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Va = /^#([0-9a-f]{3,8})$/, za = new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`), Ha = new RegExp(`^rgb\\(${Le},${Le},${Le}\\)$`), Ba = new RegExp(`^rgba\\(${kt},${kt},${kt},${Yt}\\)$`), qa = new RegExp(`^rgba\\(${Le},${Le},${Le},${Yt}\\)$`), Xa = new RegExp(`^hsl\\(${Yt},${Le},${Le}\\)$`), Ga = new RegExp(`^hsla\\(${Yt},${Le},${Le},${Yt}\\)$`), pn = {
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
Xr(Vt, wt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hn,
  formatHex: hn,
  formatHex8: Ja,
  formatHsl: Ka,
  formatRgb: dn,
  toString: dn
});
function hn() {
  return this.rgb().formatHex();
}
function Ja() {
  return this.rgb().formatHex8();
}
function Ka() {
  return yi(this).formatHsl();
}
function dn() {
  return this.rgb().formatRgb();
}
function wt(e) {
  var r, n;
  return e = (e + "").trim().toLowerCase(), (r = Va.exec(e)) ? (n = r[1].length, r = parseInt(r[1], 16), n === 6 ? yn(r) : n === 3 ? new pe(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : n === 8 ? qt(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : n === 4 ? qt(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = za.exec(e)) ? new pe(r[1], r[2], r[3], 1) : (r = Ha.exec(e)) ? new pe(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Ba.exec(e)) ? qt(r[1], r[2], r[3], r[4]) : (r = qa.exec(e)) ? qt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Xa.exec(e)) ? vn(r[1], r[2] / 100, r[3] / 100, 1) : (r = Ga.exec(e)) ? vn(r[1], r[2] / 100, r[3] / 100, r[4]) : pn.hasOwnProperty(e) ? yn(pn[e]) : e === "transparent" ? new pe(NaN, NaN, NaN, 0) : null;
}
function yn(e) {
  return new pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function qt(e, r, n, i) {
  return i <= 0 && (e = r = n = NaN), new pe(e, r, n, i);
}
function Za(e) {
  return e instanceof Vt || (e = wt(e)), e ? (e = e.rgb(), new pe(e.r, e.g, e.b, e.opacity)) : new pe();
}
function Fr(e, r, n, i) {
  return arguments.length === 1 ? Za(e) : new pe(e, r, n, i == null ? 1 : i);
}
function pe(e, r, n, i) {
  this.r = +e, this.g = +r, this.b = +n, this.opacity = +i;
}
Xr(pe, Fr, di(Vt, {
  brighter(e) {
    return e = e == null ? hr : Math.pow(hr, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wt : Math.pow(Wt, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pe(_t(this.r), _t(this.g), _t(this.b), dr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gn,
  formatHex: gn,
  formatHex8: Qa,
  formatRgb: mn,
  toString: mn
}));
function gn() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}`;
}
function Qa() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}${vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mn() {
  const e = dr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${_t(this.r)}, ${_t(this.g)}, ${_t(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function dr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function _t(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vt(e) {
  return e = _t(e), (e < 16 ? "0" : "") + e.toString(16);
}
function vn(e, r, n, i) {
  return i <= 0 ? e = r = n = NaN : n <= 0 || n >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new Ae(e, r, n, i);
}
function yi(e) {
  if (e instanceof Ae)
    return new Ae(e.h, e.s, e.l, e.opacity);
  if (e instanceof Vt || (e = wt(e)), !e)
    return new Ae();
  if (e instanceof Ae)
    return e;
  e = e.rgb();
  var r = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.min(r, n, i), s = Math.max(r, n, i), u = NaN, c = s - o, l = (s + o) / 2;
  return c ? (r === s ? u = (n - i) / c + (n < i) * 6 : n === s ? u = (i - r) / c + 2 : u = (r - n) / c + 4, c /= l < 0.5 ? s + o : 2 - s - o, u *= 60) : c = l > 0 && l < 1 ? 0 : u, new Ae(u, c, l, e.opacity);
}
function es(e, r, n, i) {
  return arguments.length === 1 ? yi(e) : new Ae(e, r, n, i == null ? 1 : i);
}
function Ae(e, r, n, i) {
  this.h = +e, this.s = +r, this.l = +n, this.opacity = +i;
}
Xr(Ae, es, di(Vt, {
  brighter(e) {
    return e = e == null ? hr : Math.pow(hr, e), new Ae(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wt : Math.pow(Wt, e), new Ae(this.h, this.s, this.l * e, this.opacity);
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
    return new Ae(_n(this.h), Xt(this.s), Xt(this.l), dr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = dr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_n(this.h)}, ${Xt(this.s) * 100}%, ${Xt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _n(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Xt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Or(e, r, n) {
  return (e < 60 ? r + (n - r) * e / 60 : e < 180 ? n : e < 240 ? r + (n - r) * (240 - e) / 60 : r) * 255;
}
const Gr = (e) => () => e;
function ts(e, r) {
  return function(n) {
    return e + n * r;
  };
}
function rs(e, r, n) {
  return e = Math.pow(e, n), r = Math.pow(r, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * r, n);
  };
}
function ns(e) {
  return (e = +e) == 1 ? gi : function(r, n) {
    return n - r ? rs(r, n, e) : Gr(isNaN(r) ? n : r);
  };
}
function gi(e, r) {
  var n = r - e;
  return n ? ts(e, n) : Gr(isNaN(e) ? r : e);
}
const yr = function e(r) {
  var n = ns(r);
  function i(o, s) {
    var u = n((o = Fr(o)).r, (s = Fr(s)).r), c = n(o.g, s.g), l = n(o.b, s.b), p = gi(o.opacity, s.opacity);
    return function(h) {
      return o.r = u(h), o.g = c(h), o.b = l(h), o.opacity = p(h), o + "";
    };
  }
  return i.gamma = e, i;
}(1);
function is(e, r) {
  r || (r = []);
  var n = e ? Math.min(r.length, e.length) : 0, i = r.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o)
      i[o] = e[o] * (1 - s) + r[o] * s;
    return i;
  };
}
function os(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function as(e, r) {
  var n = r ? r.length : 0, i = e ? Math.min(n, e.length) : 0, o = new Array(i), s = new Array(n), u;
  for (u = 0; u < i; ++u)
    o[u] = Jr(e[u], r[u]);
  for (; u < n; ++u)
    s[u] = r[u];
  return function(c) {
    for (u = 0; u < i; ++u)
      s[u] = o[u](c);
    return s;
  };
}
function ss(e, r) {
  var n = new Date();
  return e = +e, r = +r, function(i) {
    return n.setTime(e * (1 - i) + r * i), n;
  };
}
function je(e, r) {
  return e = +e, r = +r, function(n) {
    return e * (1 - n) + r * n;
  };
}
function us(e, r) {
  var n = {}, i = {}, o;
  (e === null || typeof e != "object") && (e = {}), (r === null || typeof r != "object") && (r = {});
  for (o in r)
    o in e ? n[o] = Jr(e[o], r[o]) : i[o] = r[o];
  return function(s) {
    for (o in n)
      i[o] = n[o](s);
    return i;
  };
}
var Dr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Tr = new RegExp(Dr.source, "g");
function cs(e) {
  return function() {
    return e;
  };
}
function fs(e) {
  return function(r) {
    return e(r) + "";
  };
}
function mi(e, r) {
  var n = Dr.lastIndex = Tr.lastIndex = 0, i, o, s, u = -1, c = [], l = [];
  for (e = e + "", r = r + ""; (i = Dr.exec(e)) && (o = Tr.exec(r)); )
    (s = o.index) > n && (s = r.slice(n, s), c[u] ? c[u] += s : c[++u] = s), (i = i[0]) === (o = o[0]) ? c[u] ? c[u] += o : c[++u] = o : (c[++u] = null, l.push({ i: u, x: je(i, o) })), n = Tr.lastIndex;
  return n < r.length && (s = r.slice(n), c[u] ? c[u] += s : c[++u] = s), c.length < 2 ? l[0] ? fs(l[0].x) : cs(r) : (r = l.length, function(p) {
    for (var h = 0, d; h < r; ++h)
      c[(d = l[h]).i] = d.x(p);
    return c.join("");
  });
}
function Jr(e, r) {
  var n = typeof r, i;
  return r == null || n === "boolean" ? Gr(r) : (n === "number" ? je : n === "string" ? (i = wt(r)) ? (r = i, yr) : mi : r instanceof wt ? yr : r instanceof Date ? ss : os(r) ? is : Array.isArray(r) ? as : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? us : je)(e, r);
}
function ls(e, r) {
  return e = +e, r = +r, function(n) {
    return Math.round(e * (1 - n) + r * n);
  };
}
var bn = 180 / Math.PI, Ir = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vi(e, r, n, i, o, s) {
  var u, c, l;
  return (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u), (l = e * n + r * i) && (n -= e * l, i -= r * l), (c = Math.sqrt(n * n + i * i)) && (n /= c, i /= c, l /= c), e * i < r * n && (e = -e, r = -r, l = -l, u = -u), {
    translateX: o,
    translateY: s,
    rotate: Math.atan2(r, e) * bn,
    skewX: Math.atan(l) * bn,
    scaleX: u,
    scaleY: c
  };
}
var Gt;
function ps(e) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return r.isIdentity ? Ir : vi(r.a, r.b, r.c, r.d, r.e, r.f);
}
function hs(e) {
  return e == null || (Gt || (Gt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Gt.setAttribute("transform", e), !(e = Gt.transform.baseVal.consolidate())) ? Ir : (e = e.matrix, vi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function _i(e, r, n, i) {
  function o(p) {
    return p.length ? p.pop() + " " : "";
  }
  function s(p, h, d, g, v, E) {
    if (p !== d || h !== g) {
      var T = v.push("translate(", null, r, null, n);
      E.push({ i: T - 4, x: je(p, d) }, { i: T - 2, x: je(h, g) });
    } else
      (d || g) && v.push("translate(" + d + r + g + n);
  }
  function u(p, h, d, g) {
    p !== h ? (p - h > 180 ? h += 360 : h - p > 180 && (p += 360), g.push({ i: d.push(o(d) + "rotate(", null, i) - 2, x: je(p, h) })) : h && d.push(o(d) + "rotate(" + h + i);
  }
  function c(p, h, d, g) {
    p !== h ? g.push({ i: d.push(o(d) + "skewX(", null, i) - 2, x: je(p, h) }) : h && d.push(o(d) + "skewX(" + h + i);
  }
  function l(p, h, d, g, v, E) {
    if (p !== d || h !== g) {
      var T = v.push(o(v) + "scale(", null, ",", null, ")");
      E.push({ i: T - 4, x: je(p, d) }, { i: T - 2, x: je(h, g) });
    } else
      (d !== 1 || g !== 1) && v.push(o(v) + "scale(" + d + "," + g + ")");
  }
  return function(p, h) {
    var d = [], g = [];
    return p = e(p), h = e(h), s(p.translateX, p.translateY, h.translateX, h.translateY, d, g), u(p.rotate, h.rotate, d, g), c(p.skewX, h.skewX, d, g), l(p.scaleX, p.scaleY, h.scaleX, h.scaleY, d, g), p = h = null, function(v) {
      for (var E = -1, T = g.length, N; ++E < T; )
        d[(N = g[E]).i] = N.x(v);
      return d.join("");
    };
  };
}
var ds = _i(ps, "px, ", "px)", "deg)"), ys = _i(hs, ", ", ")", ")");
function gs(e, r) {
  var n, i;
  return function() {
    var o = We(this, e), s = o.tween;
    if (s !== n) {
      i = n = s;
      for (var u = 0, c = i.length; u < c; ++u)
        if (i[u].name === r) {
          i = i.slice(), i.splice(u, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function ms(e, r, n) {
  var i, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = We(this, e), u = s.tween;
    if (u !== i) {
      o = (i = u).slice();
      for (var c = { name: r, value: n }, l = 0, p = o.length; l < p; ++l)
        if (o[l].name === r) {
          o[l] = c;
          break;
        }
      l === p && o.push(c);
    }
    s.tween = o;
  };
}
function vs(e, r) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Me(this.node(), n).tween, o = 0, s = i.length, u; o < s; ++o)
      if ((u = i[o]).name === e)
        return u.value;
    return null;
  }
  return this.each((r == null ? gs : ms)(n, e, r));
}
function Kr(e, r, n) {
  var i = e._id;
  return e.each(function() {
    var o = We(this, i);
    (o.value || (o.value = {}))[r] = n.apply(this, arguments);
  }), function(o) {
    return Me(o, i).value[r];
  };
}
function bi(e, r) {
  var n;
  return (typeof r == "number" ? je : r instanceof wt ? yr : (n = wt(r)) ? (r = n, yr) : mi)(e, r);
}
function _s(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function bs(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ws(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttribute(e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function xs(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttributeNS(e.space, e.local);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function ks(e, r, n) {
  var i, o, s;
  return function() {
    var u, c = n(this), l;
    return c == null ? void this.removeAttribute(e) : (u = this.getAttribute(e), l = c + "", u === l ? null : u === i && l === o ? s : (o = l, s = r(i = u, c)));
  };
}
function Ss(e, r, n) {
  var i, o, s;
  return function() {
    var u, c = n(this), l;
    return c == null ? void this.removeAttributeNS(e.space, e.local) : (u = this.getAttributeNS(e.space, e.local), l = c + "", u === l ? null : u === i && l === o ? s : (o = l, s = r(i = u, c)));
  };
}
function Es(e, r) {
  var n = wr(e), i = n === "transform" ? ys : bi;
  return this.attrTween(e, typeof r == "function" ? (n.local ? Ss : ks)(n, i, Kr(this, "attr." + e, r)) : r == null ? (n.local ? bs : _s)(n) : (n.local ? xs : ws)(n, i, r));
}
function Rs(e, r) {
  return function(n) {
    this.setAttribute(e, r.call(this, n));
  };
}
function Os(e, r) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, r.call(this, n));
  };
}
function Ts(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Os(e, s)), n;
  }
  return o._value = r, o;
}
function $s(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Rs(e, s)), n;
  }
  return o._value = r, o;
}
function Cs(e, r) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (r == null)
    return this.tween(n, null);
  if (typeof r != "function")
    throw new Error();
  var i = wr(e);
  return this.tween(n, (i.local ? Ts : $s)(i, r));
}
function Ns(e, r) {
  return function() {
    qr(this, e).delay = +r.apply(this, arguments);
  };
}
function Ps(e, r) {
  return r = +r, function() {
    qr(this, e).delay = r;
  };
}
function js(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ns : Ps)(r, e)) : Me(this.node(), r).delay;
}
function As(e, r) {
  return function() {
    We(this, e).duration = +r.apply(this, arguments);
  };
}
function Ms(e, r) {
  return r = +r, function() {
    We(this, e).duration = r;
  };
}
function Fs(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? As : Ms)(r, e)) : Me(this.node(), r).duration;
}
function Ds(e, r) {
  if (typeof r != "function")
    throw new Error();
  return function() {
    We(this, e).ease = r;
  };
}
function Is(e) {
  var r = this._id;
  return arguments.length ? this.each(Ds(r, e)) : Me(this.node(), r).ease;
}
function Ls(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    We(this, e).ease = n;
  };
}
function Ws(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Ls(this._id, e));
}
function Ys(e) {
  typeof e != "function" && (e = Zn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, c = i[o] = [], l, p = 0; p < u; ++p)
      (l = s[p]) && e.call(l, l.__data__, p, s) && c.push(l);
  return new Ue(i, this._parents, this._name, this._id);
}
function Us(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var r = this._groups, n = e._groups, i = r.length, o = n.length, s = Math.min(i, o), u = new Array(i), c = 0; c < s; ++c)
    for (var l = r[c], p = n[c], h = l.length, d = u[c] = new Array(h), g, v = 0; v < h; ++v)
      (g = l[v] || p[v]) && (d[v] = g);
  for (; c < i; ++c)
    u[c] = r[c];
  return new Ue(u, this._parents, this._name, this._id);
}
function Vs(e) {
  return (e + "").trim().split(/^|\s+/).every(function(r) {
    var n = r.indexOf(".");
    return n >= 0 && (r = r.slice(0, n)), !r || r === "start";
  });
}
function zs(e, r, n) {
  var i, o, s = Vs(r) ? qr : We;
  return function() {
    var u = s(this, e), c = u.on;
    c !== i && (o = (i = c).copy()).on(r, n), u.on = o;
  };
}
function Hs(e, r) {
  var n = this._id;
  return arguments.length < 2 ? Me(this.node(), n).on.on(e) : this.each(zs(n, e, r));
}
function Bs(e) {
  return function() {
    var r = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    r && r.removeChild(this);
  };
}
function qs() {
  return this.on("end.remove", Bs(this._id));
}
function Xs(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = zr(e));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var c = i[u], l = c.length, p = s[u] = new Array(l), h, d, g = 0; g < l; ++g)
      (h = c[g]) && (d = e.call(h, h.__data__, g, c)) && ("__data__" in h && (d.__data__ = h.__data__), p[g] = d, kr(p[g], r, n, g, p, Me(h, n)));
  return new Ue(s, this._parents, r, n);
}
function Gs(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Kn(e));
  for (var i = this._groups, o = i.length, s = [], u = [], c = 0; c < o; ++c)
    for (var l = i[c], p = l.length, h, d = 0; d < p; ++d)
      if (h = l[d]) {
        for (var g = e.call(h, h.__data__, d, l), v, E = Me(h, n), T = 0, N = g.length; T < N; ++T)
          (v = g[T]) && kr(v, r, n, T, g, E);
        s.push(g), u.push(h);
      }
  return new Ue(s, u, r, n);
}
var Js = Ut.prototype.constructor;
function Ks() {
  return new Js(this._groups, this._parents);
}
function Zs(e, r) {
  var n, i, o;
  return function() {
    var s = Et(this, e), u = (this.style.removeProperty(e), Et(this, e));
    return s === u ? null : s === n && u === i ? o : o = r(n = s, i = u);
  };
}
function wi(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Qs(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = Et(this, e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function eu(e, r, n) {
  var i, o, s;
  return function() {
    var u = Et(this, e), c = n(this), l = c + "";
    return c == null && (l = c = (this.style.removeProperty(e), Et(this, e))), u === l ? null : u === i && l === o ? s : (o = l, s = r(i = u, c));
  };
}
function tu(e, r) {
  var n, i, o, s = "style." + r, u = "end." + s, c;
  return function() {
    var l = We(this, e), p = l.on, h = l.value[s] == null ? c || (c = wi(r)) : void 0;
    (p !== n || o !== h) && (i = (n = p).copy()).on(u, o = h), l.on = i;
  };
}
function ru(e, r, n) {
  var i = (e += "") == "transform" ? ds : bi;
  return r == null ? this.styleTween(e, Zs(e, i)).on("end.style." + e, wi(e)) : typeof r == "function" ? this.styleTween(e, eu(e, i, Kr(this, "style." + e, r))).each(tu(this._id, e)) : this.styleTween(e, Qs(e, i, r), n).on("end.style." + e, null);
}
function nu(e, r, n) {
  return function(i) {
    this.style.setProperty(e, r.call(this, i), n);
  };
}
function iu(e, r, n) {
  var i, o;
  function s() {
    var u = r.apply(this, arguments);
    return u !== o && (i = (o = u) && nu(e, u, n)), i;
  }
  return s._value = r, s;
}
function ou(e, r, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (r == null)
    return this.tween(i, null);
  if (typeof r != "function")
    throw new Error();
  return this.tween(i, iu(e, r, n == null ? "" : n));
}
function au(e) {
  return function() {
    this.textContent = e;
  };
}
function su(e) {
  return function() {
    var r = e(this);
    this.textContent = r == null ? "" : r;
  };
}
function uu(e) {
  return this.tween("text", typeof e == "function" ? su(Kr(this, "text", e)) : au(e == null ? "" : e + ""));
}
function cu(e) {
  return function(r) {
    this.textContent = e.call(this, r);
  };
}
function fu(e) {
  var r, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (r = (n = o) && cu(o)), r;
  }
  return i._value = e, i;
}
function lu(e) {
  var r = "text";
  if (arguments.length < 1)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, fu(e));
}
function pu() {
  for (var e = this._name, r = this._id, n = xi(), i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], c = u.length, l, p = 0; p < c; ++p)
      if (l = u[p]) {
        var h = Me(l, r);
        kr(l, e, n, p, u, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Ue(i, this._parents, e, n);
}
function hu() {
  var e, r, n = this, i = n._id, o = n.size();
  return new Promise(function(s, u) {
    var c = { value: u }, l = { value: function() {
      --o === 0 && s();
    } };
    n.each(function() {
      var p = We(this, i), h = p.on;
      h !== e && (r = (e = h).copy(), r._.cancel.push(c), r._.interrupt.push(c), r._.end.push(l)), p.on = r;
    }), o === 0 && s();
  });
}
var du = 0;
function Ue(e, r, n, i) {
  this._groups = e, this._parents = r, this._name = n, this._id = i;
}
function xi() {
  return ++du;
}
var Ye = Ut.prototype;
Ue.prototype = {
  constructor: Ue,
  select: Xs,
  selectAll: Gs,
  selectChild: Ye.selectChild,
  selectChildren: Ye.selectChildren,
  filter: Ys,
  merge: Us,
  selection: Ks,
  transition: pu,
  call: Ye.call,
  nodes: Ye.nodes,
  node: Ye.node,
  size: Ye.size,
  empty: Ye.empty,
  each: Ye.each,
  on: Hs,
  attr: Es,
  attrTween: Cs,
  style: ru,
  styleTween: ou,
  text: uu,
  textTween: lu,
  remove: qs,
  tween: vs,
  delay: js,
  duration: Fs,
  ease: Is,
  easeVarying: Ws,
  end: hu,
  [Symbol.iterator]: Ye[Symbol.iterator]
};
function yu(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var gu = {
  time: null,
  delay: 0,
  duration: 250,
  ease: yu
};
function mu(e, r) {
  for (var n; !(n = e.__transition) || !(n = n[r]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${r} not found`);
  return n;
}
function vu(e) {
  var r, n;
  e instanceof Ue ? (r = e._id, e = e._name) : (r = xi(), (n = gu).time = Br(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], c = u.length, l, p = 0; p < c; ++p)
      (l = u[p]) && kr(l, e, r, p, u, n || mu(l, r));
  return new Ue(i, this._parents, e, r);
}
Ut.prototype.interrupt = Ua;
Ut.prototype.transition = vu;
const wn = {
  wicks: "line",
  candles: "rect"
}, _u = (e, r, n, i, o, s) => {
  const { xScale: u } = n, { offset: c } = o, { scaledHeight: l, scaledY: p } = i, h = St({}), d = mt(() => ir(e.current), [e.current]), g = mt(
    (T, N = d()) => N.selectAll(`${wn[T]}.${T}`).data(r),
    [r]
  ), v = mt(
    (T) => {
      var N;
      return h.current[T] = (N = h.current[T]) != null ? N : d().append("g").classed(`${T}-group`, !0).attr("clip-path", "url(#chart-contents)"), h.current[T];
    },
    [h]
  ), E = mt(
    (T, N) => {
      let $ = g(T, v(T));
      $.size() !== r.length && ($ = $.enter().append(wn[T]));
      const x = () => $.transition().duration(Ta), I = (R) => Number(u(R.date)) + (T === "wicks" ? +u.bandwidth() / 2 : 0) + c, U = (R) => p(R[N[0]], R[N[1]]), A = (R) => l(R[N[0]], R[N[1]]);
      return T === "candles" ? (x().attr("width", () => +u.bandwidth()).attr("height", A).attr("x", I).attr("y", U), $.on("mouseover", (R, M) => s(M)).on("mouseout", () => s())) : x().attr("x1", I).attr("y1", U).attr("x2", I).attr("y2", (R) => U(R) + A(R)), $.classed(T, !0).exit().remove(), $;
    },
    [u, p]
  );
  Ie(() => {
    v("wicks"), v("candles");
  }, []), Ie(() => {
    var T;
    (T = u == null ? void 0 : u.bandwidth) != null && T.call(u) && (E("wicks", ["low", "high"]), E("candles", ["open", "close"]).attr(
      "fill",
      (N) => N.close < N.open ? "red" : "green"
    ));
  }, [u, p]);
};
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ki = "Expected a function", xn = 0 / 0, bu = "[object Symbol]", wu = /^\s+|\s+$/g, xu = /^[-+]0x[0-9a-f]+$/i, ku = /^0b[01]+$/i, Su = /^0o[0-7]+$/i, Eu = parseInt, Ru = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, Ou = typeof self == "object" && self && self.Object === Object && self, Tu = Ru || Ou || Function("return this")(), $u = Object.prototype, Cu = $u.toString, Nu = Math.max, Pu = Math.min, $r = function() {
  return Tu.Date.now();
};
function ju(e, r, n) {
  var i, o, s, u, c, l, p = 0, h = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ki);
  r = kn(r) || 0, gr(n) && (h = !!n.leading, d = "maxWait" in n, s = d ? Nu(kn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(R) {
    var M = i, V = o;
    return i = o = void 0, p = R, u = e.apply(V, M), u;
  }
  function E(R) {
    return p = R, c = setTimeout($, r), h ? v(R) : u;
  }
  function T(R) {
    var M = R - l, V = R - p, H = r - M;
    return d ? Pu(H, s - V) : H;
  }
  function N(R) {
    var M = R - l, V = R - p;
    return l === void 0 || M >= r || M < 0 || d && V >= s;
  }
  function $() {
    var R = $r();
    if (N(R))
      return x(R);
    c = setTimeout($, T(R));
  }
  function x(R) {
    return c = void 0, g && i ? v(R) : (i = o = void 0, u);
  }
  function I() {
    c !== void 0 && clearTimeout(c), p = 0, i = l = o = c = void 0;
  }
  function U() {
    return c === void 0 ? u : x($r());
  }
  function A() {
    var R = $r(), M = N(R);
    if (i = arguments, o = this, l = R, M) {
      if (c === void 0)
        return E(l);
      if (d)
        return c = setTimeout($, r), v(l);
    }
    return c === void 0 && (c = setTimeout($, r)), u;
  }
  return A.cancel = I, A.flush = U, A;
}
function Au(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(ki);
  return gr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), ju(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function gr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Mu(e) {
  return !!e && typeof e == "object";
}
function Fu(e) {
  return typeof e == "symbol" || Mu(e) && Cu.call(e) == bu;
}
function kn(e) {
  if (typeof e == "number")
    return e;
  if (Fu(e))
    return xn;
  if (gr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = gr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(wu, "");
  var n = ku.test(e);
  return n || Su.test(e) ? Eu(e.slice(2), n ? 2 : 8) : xu.test(e) ? xn : +e;
}
var Du = Au;
const { abs: Iu, round: Sn } = Math, Lu = (e, r, n, i) => {
  const [o, s] = De({
    width: 0,
    height: 0
  }), [u, c] = De({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), l = St(), p = mt(
    Du(() => {
      const { clientWidth: h, clientHeight: d } = e.current;
      s({ width: h, height: d });
    }, 200),
    [e.current]
  );
  return Ie(() => (l.current = addEventListener("resize", p), () => {
    removeEventListener("resize", p), l.current = void 0;
  }), []), Ie(() => {
    p();
  }, [e.current, r]), Ie(() => {
    if (!r)
      return;
    const { width: h } = o, d = $a * (1 + ui) * n, g = d * r, v = h - Rt[1] + Fe * 2;
    let E = i * n - g + v;
    E = E <= 0 ? E : 0, E = g > h ? E : v - g, E = Iu(E - v) <= g ? E : -g + v;
    const T = Sn((E * -1 - Fe) / d), N = Sn((E * -1 + v) / d);
    c({ first: T, last: N, offset: E, totalWidth: g });
  }, [n, i, r, o.width]), { visibleRange: u, dimensions: o };
}, Wu = (e = "") => new Date(e).toLocaleDateString("en-UK");
function ur(e, r) {
  return e == null || r == null ? NaN : e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Yu(e, r) {
  return e == null || r == null ? NaN : r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
}
function Si(e) {
  let r, n, i;
  e.length !== 2 ? (r = ur, n = (c, l) => ur(e(c), l), i = (c, l) => e(c) - l) : (r = e === ur || e === Yu ? e : Uu, n = e, i = e);
  function o(c, l, p = 0, h = c.length) {
    if (p < h) {
      if (r(l, l) !== 0)
        return h;
      do {
        const d = p + h >>> 1;
        n(c[d], l) < 0 ? p = d + 1 : h = d;
      } while (p < h);
    }
    return p;
  }
  function s(c, l, p = 0, h = c.length) {
    if (p < h) {
      if (r(l, l) !== 0)
        return h;
      do {
        const d = p + h >>> 1;
        n(c[d], l) <= 0 ? p = d + 1 : h = d;
      } while (p < h);
    }
    return p;
  }
  function u(c, l, p = 0, h = c.length) {
    const d = o(c, l, p, h - 1);
    return d > p && i(c[d - 1], l) > -i(c[d], l) ? d - 1 : d;
  }
  return { left: o, center: u, right: s };
}
function Uu() {
  return 0;
}
function Vu(e) {
  return e === null ? NaN : +e;
}
const zu = Si(ur), Hu = zu.right;
Si(Vu).center;
const Bu = Hu;
class En extends Map {
  constructor(r, n = Gu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), r != null)
      for (const [i, o] of r)
        this.set(i, o);
  }
  get(r) {
    return super.get(Rn(this, r));
  }
  has(r) {
    return super.has(Rn(this, r));
  }
  set(r, n) {
    return super.set(qu(this, r), n);
  }
  delete(r) {
    return super.delete(Xu(this, r));
  }
}
function Rn({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : n;
}
function qu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function Xu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function Gu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
var Lr = Math.sqrt(50), Wr = Math.sqrt(10), Yr = Math.sqrt(2);
function Ju(e, r, n) {
  var i, o = -1, s, u, c;
  if (r = +r, e = +e, n = +n, e === r && n > 0)
    return [e];
  if ((i = r < e) && (s = e, e = r, r = s), (c = Ei(e, r, n)) === 0 || !isFinite(c))
    return [];
  if (c > 0) {
    let l = Math.round(e / c), p = Math.round(r / c);
    for (l * c < e && ++l, p * c > r && --p, u = new Array(s = p - l + 1); ++o < s; )
      u[o] = (l + o) * c;
  } else {
    c = -c;
    let l = Math.round(e * c), p = Math.round(r * c);
    for (l / c < e && ++l, p / c > r && --p, u = new Array(s = p - l + 1); ++o < s; )
      u[o] = (l + o) / c;
  }
  return i && u.reverse(), u;
}
function Ei(e, r, n) {
  var i = (r - e) / Math.max(0, n), o = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, o);
  return o >= 0 ? (s >= Lr ? 10 : s >= Wr ? 5 : s >= Yr ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (s >= Lr ? 10 : s >= Wr ? 5 : s >= Yr ? 2 : 1);
}
function Ku(e, r, n) {
  var i = Math.abs(r - e) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / o;
  return s >= Lr ? o *= 10 : s >= Wr ? o *= 5 : s >= Yr && (o *= 2), r < e ? -o : o;
}
function Zu(e, r, n) {
  e = +e, r = +r, n = (o = arguments.length) < 2 ? (r = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var i = -1, o = Math.max(0, Math.ceil((r - e) / n)) | 0, s = new Array(o); ++i < o; )
    s[i] = e + i * n;
  return s;
}
function Zr(e, r) {
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
function Ri() {
  var e = new En(), r = [], n = [], i = On;
  function o(s) {
    let u = e.get(s);
    if (u === void 0) {
      if (i !== On)
        return i;
      e.set(s, u = r.push(s) - 1);
    }
    return n[u % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length)
      return r.slice();
    r = [], e = new En();
    for (const u of s)
      e.has(u) || e.set(u, r.push(u) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (i = s, o) : i;
  }, o.copy = function() {
    return Ri(r, n).unknown(i);
  }, Zr.apply(o, arguments), o;
}
function Oi() {
  var e = Ri().unknown(void 0), r = e.domain, n = e.range, i = 0, o = 1, s, u, c = !1, l = 0, p = 0, h = 0.5;
  delete e.unknown;
  function d() {
    var g = r().length, v = o < i, E = v ? o : i, T = v ? i : o;
    s = (T - E) / Math.max(1, g - l + p * 2), c && (s = Math.floor(s)), E += (T - E - s * (g - l)) * h, u = s * (1 - l), c && (E = Math.round(E), u = Math.round(u));
    var N = Zu(g).map(function($) {
      return E + s * $;
    });
    return n(v ? N.reverse() : N);
  }
  return e.domain = function(g) {
    return arguments.length ? (r(g), d()) : r();
  }, e.range = function(g) {
    return arguments.length ? ([i, o] = g, i = +i, o = +o, d()) : [i, o];
  }, e.rangeRound = function(g) {
    return [i, o] = g, i = +i, o = +o, c = !0, d();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return s;
  }, e.round = function(g) {
    return arguments.length ? (c = !!g, d()) : c;
  }, e.padding = function(g) {
    return arguments.length ? (l = Math.min(1, p = +g), d()) : l;
  }, e.paddingInner = function(g) {
    return arguments.length ? (l = Math.min(1, g), d()) : l;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (p = +g, d()) : p;
  }, e.align = function(g) {
    return arguments.length ? (h = Math.max(0, Math.min(1, g)), d()) : h;
  }, e.copy = function() {
    return Oi(r(), [i, o]).round(c).paddingInner(l).paddingOuter(p).align(h);
  }, Zr.apply(d(), arguments);
}
function Qu(e) {
  return function() {
    return e;
  };
}
function ec(e) {
  return +e;
}
var Tn = [0, 1];
function xt(e) {
  return e;
}
function Ur(e, r) {
  return (r -= e = +e) ? function(n) {
    return (n - e) / r;
  } : Qu(isNaN(r) ? NaN : 0.5);
}
function tc(e, r) {
  var n;
  return e > r && (n = e, e = r, r = n), function(i) {
    return Math.max(e, Math.min(r, i));
  };
}
function rc(e, r, n) {
  var i = e[0], o = e[1], s = r[0], u = r[1];
  return o < i ? (i = Ur(o, i), s = n(u, s)) : (i = Ur(i, o), s = n(s, u)), function(c) {
    return s(i(c));
  };
}
function nc(e, r, n) {
  var i = Math.min(e.length, r.length) - 1, o = new Array(i), s = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), r = r.slice().reverse()); ++u < i; )
    o[u] = Ur(e[u], e[u + 1]), s[u] = n(r[u], r[u + 1]);
  return function(c) {
    var l = Bu(e, c, 1, i) - 1;
    return s[l](o[l](c));
  };
}
function ic(e, r) {
  return r.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function oc() {
  var e = Tn, r = Tn, n = Jr, i, o, s, u = xt, c, l, p;
  function h() {
    var g = Math.min(e.length, r.length);
    return u !== xt && (u = tc(e[0], e[g - 1])), c = g > 2 ? nc : rc, l = p = null, d;
  }
  function d(g) {
    return g == null || isNaN(g = +g) ? s : (l || (l = c(e.map(i), r, n)))(i(u(g)));
  }
  return d.invert = function(g) {
    return u(o((p || (p = c(r, e.map(i), je)))(g)));
  }, d.domain = function(g) {
    return arguments.length ? (e = Array.from(g, ec), h()) : e.slice();
  }, d.range = function(g) {
    return arguments.length ? (r = Array.from(g), h()) : r.slice();
  }, d.rangeRound = function(g) {
    return r = Array.from(g), n = ls, h();
  }, d.clamp = function(g) {
    return arguments.length ? (u = g ? !0 : xt, h()) : u !== xt;
  }, d.interpolate = function(g) {
    return arguments.length ? (n = g, h()) : n;
  }, d.unknown = function(g) {
    return arguments.length ? (s = g, d) : s;
  }, function(g, v) {
    return i = g, o = v, h();
  };
}
function ac() {
  return oc()(xt, xt);
}
function sc(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function mr(e, r) {
  if ((n = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Tt(e) {
  return e = mr(Math.abs(e)), e ? e[1] : NaN;
}
function uc(e, r) {
  return function(n, i) {
    for (var o = n.length, s = [], u = 0, c = e[0], l = 0; o > 0 && c > 0 && (l + c + 1 > i && (c = Math.max(1, i - l)), s.push(n.substring(o -= c, o + c)), !((l += c + 1) > i)); )
      c = e[u = (u + 1) % e.length];
    return s.reverse().join(r);
  };
}
function cc(e) {
  return function(r) {
    return r.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var fc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function vr(e) {
  if (!(r = fc.exec(e)))
    throw new Error("invalid format: " + e);
  var r;
  return new Qr({
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
vr.prototype = Qr.prototype;
function Qr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Qr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function lc(e) {
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
function pc(e, r) {
  var n = mr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1], s = o - (Ti = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, u = i.length;
  return s === u ? i : s > u ? i + new Array(s - u + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + mr(e, Math.max(0, r + s - 1))[0];
}
function $n(e, r) {
  var n = mr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Cn = {
  "%": (e, r) => (e * 100).toFixed(r),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: sc,
  e: (e, r) => e.toExponential(r),
  f: (e, r) => e.toFixed(r),
  g: (e, r) => e.toPrecision(r),
  o: (e) => Math.round(e).toString(8),
  p: (e, r) => $n(e * 100, r),
  r: $n,
  s: pc,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Nn(e) {
  return e;
}
var Pn = Array.prototype.map, jn = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hc(e) {
  var r = e.grouping === void 0 || e.thousands === void 0 ? Nn : uc(Pn.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Nn : cc(Pn.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", c = e.minus === void 0 ? "\u2212" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function p(d) {
    d = vr(d);
    var g = d.fill, v = d.align, E = d.sign, T = d.symbol, N = d.zero, $ = d.width, x = d.comma, I = d.precision, U = d.trim, A = d.type;
    A === "n" ? (x = !0, A = "g") : Cn[A] || (I === void 0 && (I = 12), U = !0, A = "g"), (N || g === "0" && v === "=") && (N = !0, g = "0", v = "=");
    var R = T === "$" ? n : T === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", M = T === "$" ? i : /[%p]/.test(A) ? u : "", V = Cn[A], H = /[defgprs%]/.test(A);
    I = I === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function ee(j) {
      var L = R, C = M, D, z, te;
      if (A === "c")
        C = V(j) + C, j = "";
      else {
        j = +j;
        var re = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? l : V(Math.abs(j), I), U && (j = lc(j)), re && +j == 0 && E !== "+" && (re = !1), L = (re ? E === "(" ? E : c : E === "-" || E === "(" ? "" : E) + L, C = (A === "s" ? jn[8 + Ti / 3] : "") + C + (re && E === "(" ? ")" : ""), H) {
          for (D = -1, z = j.length; ++D < z; )
            if (te = j.charCodeAt(D), 48 > te || te > 57) {
              C = (te === 46 ? o + j.slice(D + 1) : j.slice(D)) + C, j = j.slice(0, D);
              break;
            }
        }
      }
      x && !N && (j = r(j, 1 / 0));
      var ne = L.length + j.length + C.length, X = ne < $ ? new Array($ - ne + 1).join(g) : "";
      switch (x && N && (j = r(X + j, X.length ? $ - C.length : 1 / 0), X = ""), v) {
        case "<":
          j = L + j + C + X;
          break;
        case "=":
          j = L + X + j + C;
          break;
        case "^":
          j = X.slice(0, ne = X.length >> 1) + L + j + C + X.slice(ne);
          break;
        default:
          j = X + L + j + C;
          break;
      }
      return s(j);
    }
    return ee.toString = function() {
      return d + "";
    }, ee;
  }
  function h(d, g) {
    var v = p((d = vr(d), d.type = "f", d)), E = Math.max(-8, Math.min(8, Math.floor(Tt(g) / 3))) * 3, T = Math.pow(10, -E), N = jn[8 + E / 3];
    return function($) {
      return v(T * $) + N;
    };
  }
  return {
    format: p,
    formatPrefix: h
  };
}
var Kt, $i, Ci;
dc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function dc(e) {
  return Kt = hc(e), $i = Kt.format, Ci = Kt.formatPrefix, Kt;
}
function yc(e) {
  return Math.max(0, -Tt(Math.abs(e)));
}
function gc(e, r) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Tt(r) / 3))) * 3 - Tt(Math.abs(e)));
}
function mc(e, r) {
  return e = Math.abs(e), r = Math.abs(r) - e, Math.max(0, Tt(r) - Tt(e)) + 1;
}
function vc(e, r, n, i) {
  var o = Ku(e, r, n), s;
  switch (i = vr(i == null ? ",f" : i), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(r));
      return i.precision == null && !isNaN(s = gc(o, u)) && (i.precision = s), Ci(i, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = mc(o, Math.max(Math.abs(e), Math.abs(r)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = yc(o)) && (i.precision = s - (i.type === "%") * 2);
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
    return vc(o[0], o[o.length - 1], n == null ? 10 : n, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = r(), o = 0, s = i.length - 1, u = i[o], c = i[s], l, p, h = 10;
    for (c < u && (p = u, u = c, c = p, p = o, o = s, s = p); h-- > 0; ) {
      if (p = Ei(u, c, n), p === l)
        return i[o] = u, i[s] = c, r(i);
      if (p > 0)
        u = Math.floor(u / p) * p, c = Math.ceil(c / p) * p;
      else if (p < 0)
        u = Math.ceil(u * p) / p, c = Math.floor(c * p) / p;
      else
        break;
      l = p;
    }
    return e;
  }, e;
}
function Ni() {
  var e = ac();
  return e.copy = function() {
    return ic(e, Ni());
  }, Zr.apply(e, arguments), _c(e);
}
const { abs: bc, min: An, max: wc } = Math, xc = (e, r, n) => {
  const [i, o] = De({
    xScale: (c) => c,
    yScale: (c) => c
  }), s = mt(
    (c, l) => bc(i.yScale(l) - i.yScale(c)) || 1,
    [i.yScale]
  ), u = mt(
    (c, l) => i.yScale(An(c, l)) - s(c, l) + Fe || 1,
    [i.yScale]
  );
  return Ie(() => {
    if (!(e != null && e.length))
      return;
    const { first: c, last: l, totalWidth: p } = n, { height: h } = r, d = e.slice(c > 0 ? c : 0, l), g = An(...d.map(({ low: N }) => N)), v = wc(...d.map(({ high: N }) => N)), E = Oi().range([Fe, p - Fe]).domain(e.map(({ date: N }) => N)).padding(ui), T = Ni().domain([g - 20, v + 20]).range([h - Rt[0] - Fe, Fe]);
    o({ xScale: E, yScale: T });
  }, [n, r.height, e]), { utils: { scaledHeight: s, scaledY: u }, scales: i };
};
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pi = "Expected a function", Mn = 0 / 0, kc = "[object Symbol]", Sc = /^\s+|\s+$/g, Ec = /^[-+]0x[0-9a-f]+$/i, Rc = /^0b[01]+$/i, Oc = /^0o[0-7]+$/i, Tc = parseInt, $c = typeof Zt == "object" && Zt && Zt.Object === Object && Zt, Cc = typeof self == "object" && self && self.Object === Object && self, Nc = $c || Cc || Function("return this")(), Pc = Object.prototype, jc = Pc.toString, Ac = Math.max, Mc = Math.min, Cr = function() {
  return Nc.Date.now();
};
function Fc(e, r, n) {
  var i, o, s, u, c, l, p = 0, h = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  r = Fn(r) || 0, _r(n) && (h = !!n.leading, d = "maxWait" in n, s = d ? Ac(Fn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(R) {
    var M = i, V = o;
    return i = o = void 0, p = R, u = e.apply(V, M), u;
  }
  function E(R) {
    return p = R, c = setTimeout($, r), h ? v(R) : u;
  }
  function T(R) {
    var M = R - l, V = R - p, H = r - M;
    return d ? Mc(H, s - V) : H;
  }
  function N(R) {
    var M = R - l, V = R - p;
    return l === void 0 || M >= r || M < 0 || d && V >= s;
  }
  function $() {
    var R = Cr();
    if (N(R))
      return x(R);
    c = setTimeout($, T(R));
  }
  function x(R) {
    return c = void 0, g && i ? v(R) : (i = o = void 0, u);
  }
  function I() {
    c !== void 0 && clearTimeout(c), p = 0, i = l = o = c = void 0;
  }
  function U() {
    return c === void 0 ? u : x(Cr());
  }
  function A() {
    var R = Cr(), M = N(R);
    if (i = arguments, o = this, l = R, M) {
      if (c === void 0)
        return E(l);
      if (d)
        return c = setTimeout($, r), v(l);
    }
    return c === void 0 && (c = setTimeout($, r)), u;
  }
  return A.cancel = I, A.flush = U, A;
}
function Dc(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  return _r(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Fc(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function _r(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Ic(e) {
  return !!e && typeof e == "object";
}
function Lc(e) {
  return typeof e == "symbol" || Ic(e) && jc.call(e) == kc;
}
function Fn(e) {
  if (typeof e == "number")
    return e;
  if (Lc(e))
    return Mn;
  if (_r(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _r(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Sc, "");
  var n = Rc.test(e);
  return n || Oc.test(e) ? Tc(e.slice(2), n ? 2 : 8) : Ec.test(e) ? Mn : +e;
}
var Wc = Dc;
const Qt = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Yc = de.div(
  ({ isVisible: e = !1 }) => br`
    position: absolute;
    transition: all 0.2s;

    opacity: ${e ? 0.8 : 0};
    padding: 1px 4px 2px 4px;
    border: 1px solid ${Qt.default};
    color: ${Qt.default};
    background-color: white;
    border-radius: 6px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${Qt.default};
      border-right: 1px solid ${Qt.default};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(90% 0, 100% 0, 100% 100%, 0 100%, 0 90%);
    }
  `
);
var ji = { exports: {} }, jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Uc() {
  if (Dn)
    return jt;
  Dn = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return jt.Fragment = n, jt.jsx = u, jt.jsxs = u, jt;
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
var In;
function Vc() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, T = "@@iterator";
    function N(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = E && t[E] || t[T];
      return typeof a == "function" ? a : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        I("error", t, f);
      }
    }
    function I(t, a, f) {
      {
        var y = $.ReactDebugCurrentFrame, b = y.getStackAddendum();
        b !== "" && (a += "%s", f = f.concat([b]));
        var w = f.map(function(_) {
          return String(_);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var U = !1, A = !1, R = !1, M = !1, V = !1, H;
    H = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || V || t === o || t === p || t === h || M || t === v || U || A || R || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === H || t.getModuleId !== void 0));
    }
    function j(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var b = a.displayName || a.name || "";
      return b !== "" ? f + "(" + b + ")" : f;
    }
    function L(t) {
      return t.displayName || "Context";
    }
    function C(t) {
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
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var a = t;
            return L(a) + ".Consumer";
          case u:
            var f = t;
            return L(f._context) + ".Provider";
          case l:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : C(t.type) || "Memo";
          case g: {
            var b = t, w = b._payload, _ = b._init;
            try {
              return C(_(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, z = 0, te, re, ne, X, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Be() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function qe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, t, {
              value: te
            }),
            info: D({}, t, {
              value: re
            }),
            warn: D({}, t, {
              value: ne
            }),
            error: D({}, t, {
              value: X
            }),
            group: D({}, t, {
              value: ye
            }),
            groupCollapsed: D({}, t, {
              value: ge
            }),
            groupEnd: D({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = $.ReactCurrentDispatcher, oe;
    function G(t, a, f) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (b) {
            var y = b.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var f = J.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (F) {
              y = F;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (F) {
              y = F;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            y = F;
          }
          t();
        }
      } catch (F) {
        if (F && y && typeof F.stack == "string") {
          for (var m = F.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, S = O.length - 1; k >= 1 && S >= 0 && m[k] !== O[S]; )
            S--;
          for (; k >= 1 && S >= 0; k--, S--)
            if (m[k] !== O[S]) {
              if (k !== 1 || S !== 1)
                do
                  if (k--, S--, S < 0 || m[k] !== O[S]) {
                    var P = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, P), P;
                  }
                while (k >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = b;
      }
      var Y = t ? t.displayName || t.name : "", Pe = Y ? G(Y) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, f) {
      return _e(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Ge(t.render);
          case d:
            return K(t.type, a, f);
          case g: {
            var y = t, b = y._payload, w = y._init;
            try {
              return K(w(b), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, be = {}, we = $.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, f, y, b) {
      {
        var w = Function.call.bind(Z);
        for (var _ in t)
          if (w(t, _)) {
            var m = void 0;
            try {
              if (typeof t[_] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[_](a, _, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(b), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, _, typeof m), Q(null)), m instanceof Error && !(m.message in be) && (be[m.message] = !0, Q(b), x("Failed %s type: %s", f, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = $.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ee, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var f = C(B.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(B.current.type), t.ref), ue[f] = !0);
      }
    }
    function ot(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var st = function(t, a, f, y, b, w, _) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
        props: _,
        _owner: w
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
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, f, y, b) {
      {
        var w, _ = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, b));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (_[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            _[w] === void 0 && (_[w] = k[w]);
        }
        if (m || O) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(_, S), O && at(_, S);
        }
        return st(t, m, O, b, y, B.current, _);
      }
    }
    var ce = $.ReactCurrentOwner, Re = $.ReactDebugCurrentFrame;
    function W(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
      } else
        Re.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = C(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + C(t._owner.type) + "."), W(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), W(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            le(y) && $e(y, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var b = N(t);
          if (typeof b == "function" && b !== t.entries)
            for (var w = b.call(t), _; !(_ = w.next()).done; )
              le(_.value) && $e(_.value, a);
        }
      }
    }
    function lt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = C(a);
          Ke(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !fe) {
          fe = !0;
          var b = C(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            W(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), W(null);
            break;
          }
        }
        t.ref !== null && (W(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Ne(t, a, f, y, b, w) {
      {
        var _ = ee(t);
        if (!_) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(b);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (C(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var S = ut(t, a, f, b, w);
        if (S == null)
          return S;
        if (_) {
          var P = a.children;
          if (P !== void 0)
            if (y)
              if (se(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  Ce(P[Y], t);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(P, t);
        }
        return t === i ? pt(S) : lt(S), S;
      }
    }
    function ht(t, a, f) {
      return Ne(t, a, f, !0);
    }
    function dt(t, a, f) {
      return Ne(t, a, f, !1);
    }
    var yt = dt, gt = ht;
    er.Fragment = i, er.jsx = yt, er.jsxs = gt;
  }()), er;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Uc() : e.exports = Vc();
})(ji);
const zc = ji.exports.jsx, Hc = ({
  children: e,
  isVisible: r = !1
}) => {
  const n = St(), i = St(null), [o, s] = De({
    x: 0,
    y: 0
  }), u = Wc(({
    clientX: c,
    clientY: l
  }) => {
    var p, h;
    return s({
      x: c - ((h = (p = i.current) == null ? void 0 : p.clientWidth) != null ? h : 0) / 2,
      y: l + 24
    });
  }, 100);
  return Ie(() => (n.current = addEventListener("mousemove", u), () => {
    removeEventListener("mousemove", u), n.current = void 0;
  }), []), /* @__PURE__ */ zc(Yc, {
    ref: i,
    isVisible: r,
    style: {
      left: o.x,
      top: o.y
    },
    children: e
  });
};
var en = { exports: {} }, At = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Bc() {
  if (Ln)
    return At;
  Ln = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return At.Fragment = n, At.jsx = u, At.jsxs = u, At;
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
var Wn;
function qc() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, T = "@@iterator";
    function N(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = E && t[E] || t[T];
      return typeof a == "function" ? a : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        I("error", t, f);
      }
    }
    function I(t, a, f) {
      {
        var y = $.ReactDebugCurrentFrame, b = y.getStackAddendum();
        b !== "" && (a += "%s", f = f.concat([b]));
        var w = f.map(function(_) {
          return String(_);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var U = !1, A = !1, R = !1, M = !1, V = !1, H;
    H = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || V || t === o || t === p || t === h || M || t === v || U || A || R || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === H || t.getModuleId !== void 0));
    }
    function j(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var b = a.displayName || a.name || "";
      return b !== "" ? f + "(" + b + ")" : f;
    }
    function L(t) {
      return t.displayName || "Context";
    }
    function C(t) {
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
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var a = t;
            return L(a) + ".Consumer";
          case u:
            var f = t;
            return L(f._context) + ".Provider";
          case l:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : C(t.type) || "Memo";
          case g: {
            var b = t, w = b._payload, _ = b._init;
            try {
              return C(_(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, z = 0, te, re, ne, X, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Be() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function qe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, t, {
              value: te
            }),
            info: D({}, t, {
              value: re
            }),
            warn: D({}, t, {
              value: ne
            }),
            error: D({}, t, {
              value: X
            }),
            group: D({}, t, {
              value: ye
            }),
            groupCollapsed: D({}, t, {
              value: ge
            }),
            groupEnd: D({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = $.ReactCurrentDispatcher, oe;
    function G(t, a, f) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (b) {
            var y = b.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var f = J.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (F) {
              y = F;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (F) {
              y = F;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            y = F;
          }
          t();
        }
      } catch (F) {
        if (F && y && typeof F.stack == "string") {
          for (var m = F.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, S = O.length - 1; k >= 1 && S >= 0 && m[k] !== O[S]; )
            S--;
          for (; k >= 1 && S >= 0; k--, S--)
            if (m[k] !== O[S]) {
              if (k !== 1 || S !== 1)
                do
                  if (k--, S--, S < 0 || m[k] !== O[S]) {
                    var P = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, P), P;
                  }
                while (k >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = b;
      }
      var Y = t ? t.displayName || t.name : "", Pe = Y ? G(Y) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, f) {
      return _e(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Ge(t.render);
          case d:
            return K(t.type, a, f);
          case g: {
            var y = t, b = y._payload, w = y._init;
            try {
              return K(w(b), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, be = {}, we = $.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, f, y, b) {
      {
        var w = Function.call.bind(Z);
        for (var _ in t)
          if (w(t, _)) {
            var m = void 0;
            try {
              if (typeof t[_] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[_](a, _, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(b), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, _, typeof m), Q(null)), m instanceof Error && !(m.message in be) && (be[m.message] = !0, Q(b), x("Failed %s type: %s", f, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = $.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ee, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var f = C(B.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(B.current.type), t.ref), ue[f] = !0);
      }
    }
    function ot(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var st = function(t, a, f, y, b, w, _) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
        props: _,
        _owner: w
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
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, f, y, b) {
      {
        var w, _ = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, b));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (_[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            _[w] === void 0 && (_[w] = k[w]);
        }
        if (m || O) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(_, S), O && at(_, S);
        }
        return st(t, m, O, b, y, B.current, _);
      }
    }
    var ce = $.ReactCurrentOwner, Re = $.ReactDebugCurrentFrame;
    function W(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
      } else
        Re.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = C(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + C(t._owner.type) + "."), W(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), W(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            le(y) && $e(y, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var b = N(t);
          if (typeof b == "function" && b !== t.entries)
            for (var w = b.call(t), _; !(_ = w.next()).done; )
              le(_.value) && $e(_.value, a);
        }
      }
    }
    function lt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = C(a);
          Ke(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !fe) {
          fe = !0;
          var b = C(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            W(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), W(null);
            break;
          }
        }
        t.ref !== null && (W(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Ne(t, a, f, y, b, w) {
      {
        var _ = ee(t);
        if (!_) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(b);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (C(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var S = ut(t, a, f, b, w);
        if (S == null)
          return S;
        if (_) {
          var P = a.children;
          if (P !== void 0)
            if (y)
              if (se(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  Ce(P[Y], t);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(P, t);
        }
        return t === i ? pt(S) : lt(S), S;
      }
    }
    function ht(t, a, f) {
      return Ne(t, a, f, !0);
    }
    function dt(t, a, f) {
      return Ne(t, a, f, !1);
    }
    var yt = dt, gt = ht;
    Mt.Fragment = i, Mt.jsx = yt, Mt.jsxs = gt;
  }()), Mt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Bc() : e.exports = qc();
})(en);
const q = en.exports.jsx, ze = en.exports.jsxs, Xc = ({
  item: e
}) => {
  const [r, n] = De(e), i = St();
  return Ie(() => {
    if (e) {
      n(e), clearTimeout(i.current);
      return;
    }
    i.current = setTimeout(() => n(e), 200);
  }, [e]), /* @__PURE__ */ ze(Hc, {
    isVisible: !!e,
    children: [/* @__PURE__ */ q("div", {
      children: /* @__PURE__ */ q("strong", {
        children: Wu(r == null ? void 0 : r.date)
      })
    }), /* @__PURE__ */ ze("div", {
      children: ["Open: ", /* @__PURE__ */ q("em", {
        children: r == null ? void 0 : r.open
      })]
    }), /* @__PURE__ */ ze("div", {
      children: ["Close: ", /* @__PURE__ */ q("em", {
        children: r == null ? void 0 : r.close
      })]
    }), /* @__PURE__ */ ze("div", {
      children: ["High: ", /* @__PURE__ */ q("em", {
        children: r == null ? void 0 : r.high
      })]
    }), /* @__PURE__ */ ze("div", {
      children: ["Low: ", /* @__PURE__ */ q("em", {
        children: r == null ? void 0 : r.low
      })]
    })]
  });
}, Yn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Gc = "font-family: serif;", Jc = de.button(
  ({ status: e, minWidth: r, margin: n }) => br`
    ${Gc}
    border: 1px solid ${Yn[e]};
    color: ${Yn[e]};
    background-color: white;
    border-radius: 6px;
    min-width: ${r};
    padding: 8px;
    margin: ${n};
    cursor: pointer;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
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
var Ai = { exports: {} }, Ft = {};
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
function Kc() {
  if (Un)
    return Ft;
  Un = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return Ft.Fragment = n, Ft.jsx = u, Ft.jsxs = u, Ft;
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
function Zc() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, T = "@@iterator";
    function N(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = E && t[E] || t[T];
      return typeof a == "function" ? a : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        I("error", t, f);
      }
    }
    function I(t, a, f) {
      {
        var y = $.ReactDebugCurrentFrame, b = y.getStackAddendum();
        b !== "" && (a += "%s", f = f.concat([b]));
        var w = f.map(function(_) {
          return String(_);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var U = !1, A = !1, R = !1, M = !1, V = !1, H;
    H = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || V || t === o || t === p || t === h || M || t === v || U || A || R || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === H || t.getModuleId !== void 0));
    }
    function j(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var b = a.displayName || a.name || "";
      return b !== "" ? f + "(" + b + ")" : f;
    }
    function L(t) {
      return t.displayName || "Context";
    }
    function C(t) {
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
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var a = t;
            return L(a) + ".Consumer";
          case u:
            var f = t;
            return L(f._context) + ".Provider";
          case l:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : C(t.type) || "Memo";
          case g: {
            var b = t, w = b._payload, _ = b._init;
            try {
              return C(_(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, z = 0, te, re, ne, X, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Be() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function qe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, t, {
              value: te
            }),
            info: D({}, t, {
              value: re
            }),
            warn: D({}, t, {
              value: ne
            }),
            error: D({}, t, {
              value: X
            }),
            group: D({}, t, {
              value: ye
            }),
            groupCollapsed: D({}, t, {
              value: ge
            }),
            groupEnd: D({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = $.ReactCurrentDispatcher, oe;
    function G(t, a, f) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (b) {
            var y = b.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function _e(t, a) {
      if (!t || ae)
        return "";
      {
        var f = J.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (F) {
              y = F;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (F) {
              y = F;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            y = F;
          }
          t();
        }
      } catch (F) {
        if (F && y && typeof F.stack == "string") {
          for (var m = F.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, S = O.length - 1; k >= 1 && S >= 0 && m[k] !== O[S]; )
            S--;
          for (; k >= 1 && S >= 0; k--, S--)
            if (m[k] !== O[S]) {
              if (k !== 1 || S !== 1)
                do
                  if (k--, S--, S < 0 || m[k] !== O[S]) {
                    var P = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, P), P;
                  }
                while (k >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = b;
      }
      var Y = t ? t.displayName || t.name : "", Pe = Y ? G(Y) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, f) {
      return _e(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return _e(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Ge(t.render);
          case d:
            return K(t.type, a, f);
          case g: {
            var y = t, b = y._payload, w = y._init;
            try {
              return K(w(b), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, be = {}, we = $.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, f, y, b) {
      {
        var w = Function.call.bind(Z);
        for (var _ in t)
          if (w(t, _)) {
            var m = void 0;
            try {
              if (typeof t[_] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[_](a, _, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(b), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, _, typeof m), Q(null)), m instanceof Error && !(m.message in be) && (be[m.message] = !0, Q(b), x("Failed %s type: %s", f, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = $.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ee, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var f = C(B.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(B.current.type), t.ref), ue[f] = !0);
      }
    }
    function ot(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var st = function(t, a, f, y, b, w, _) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
        props: _,
        _owner: w
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
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, f, y, b) {
      {
        var w, _ = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, b));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (_[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            _[w] === void 0 && (_[w] = k[w]);
        }
        if (m || O) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(_, S), O && at(_, S);
        }
        return st(t, m, O, b, y, B.current, _);
      }
    }
    var ce = $.ReactCurrentOwner, Re = $.ReactDebugCurrentFrame;
    function W(t) {
      if (t) {
        var a = t._owner, f = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
      } else
        Re.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function le(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = C(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + C(t._owner.type) + "."), W(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), W(null);
      }
    }
    function Ce(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            le(y) && $e(y, a);
          }
        else if (le(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var b = N(t);
          if (typeof b == "function" && b !== t.entries)
            for (var w = b.call(t), _; !(_ = w.next()).done; )
              le(_.value) && $e(_.value, a);
        }
      }
    }
    function lt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = C(a);
          Ke(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !fe) {
          fe = !0;
          var b = C(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            W(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), W(null);
            break;
          }
        }
        t.ref !== null && (W(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Ne(t, a, f, y, b, w) {
      {
        var _ = ee(t);
        if (!_) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(b);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (C(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var S = ut(t, a, f, b, w);
        if (S == null)
          return S;
        if (_) {
          var P = a.children;
          if (P !== void 0)
            if (y)
              if (se(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  Ce(P[Y], t);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(P, t);
        }
        return t === i ? pt(S) : lt(S), S;
      }
    }
    function ht(t, a, f) {
      return Ne(t, a, f, !0);
    }
    function dt(t, a, f) {
      return Ne(t, a, f, !1);
    }
    var yt = dt, gt = ht;
    tr.Fragment = i, tr.jsx = yt, tr.jsxs = gt;
  }()), tr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Kc() : e.exports = Zc();
})(Ai);
const Qc = Ai.exports.jsx, rr = ({
  children: e,
  status: r = "default",
  dataSelector: n = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...s
}) => /* @__PURE__ */ Qc(Jc, {
  status: r,
  ...s,
  minWidth: i,
  margin: o,
  "data-selector": n,
  children: e
}), ef = de.div`
  margin: 10px;
  position: absolute;
`, zn = de.div(
  ({ rotate: e }) => br`
    rotate: ${e}deg;
  `
), Ve = 0.2, Hn = 100, tf = ({
  zoomLevel: e,
  setZoomLevel: r,
  setPanLevel: n,
  visibleRange: i,
  length: o
}) => {
  const s = {
    minWidth: "auto",
    margin: "5px"
  };
  return /* @__PURE__ */ ze(ef, {
    children: [/* @__PURE__ */ q(rr, {
      ...s,
      onClick: () => n((u) => u + Hn / e),
      disabled: i.first <= 0,
      children: /* @__PURE__ */ q(zn, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ q(rr, {
      ...s,
      onClick: () => r((u) => +(u - Ve > 0 ? u - Ve : Ve / 2).toFixed(2)),
      disabled: e < Ve,
      children: "\u2796"
    }), /* @__PURE__ */ q(rr, {
      ...s,
      onClick: () => r((u) => +(u === Ve / 2 ? Ve : u + Ve).toFixed(2)),
      disabled: e >= Ve * 10,
      children: "\u2795"
    }), /* @__PURE__ */ q(rr, {
      ...s,
      onClick: () => n((u) => u - Hn / e),
      disabled: i.last >= o - 1 || i.last - i.first > o,
      children: /* @__PURE__ */ q(zn, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, rf = ({
  width: e,
  height: r
}) => {
  const n = {
    x: 0,
    y: 0,
    width: e ? e - Rt[1] + Fe : 0,
    height: r ? r - Rt[0] : 0
  };
  return /* @__PURE__ */ ze("defs", {
    children: [/* @__PURE__ */ q("clipPath", {
      id: "chart-contents",
      children: /* @__PURE__ */ q("rect", {
        ...n
      })
    }), /* @__PURE__ */ q("clipPath", {
      id: "bottom-axis",
      children: /* @__PURE__ */ q("rect", {
        ...n,
        height: `${r}`
      })
    })]
  });
}, nf = de.svg`
  width: 100%;
  height: 100%;

  & rect.is-offscreen {
    display: none;
  }

  & line.wicks {
    stroke: grey;
    stroke-width: 1;
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`, of = de.div`
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
`, af = de.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, cf = ({
  data: e = []
}) => {
  const [r, n] = De(1), [i, o] = De(0), [s, u] = De(), c = St(null), {
    dimensions: l,
    visibleRange: p
  } = Lu(c, e.length, r, i), {
    scales: h,
    utils: d
  } = xc(e, l, p);
  return _u(c, e, h, d, p, u), Ca(c, e, p.offset, h, l), /* @__PURE__ */ ze(of, {
    children: [e != null && e.length ? /* @__PURE__ */ q(tf, {
      zoomLevel: r,
      setZoomLevel: n,
      setPanLevel: o,
      visibleRange: p,
      length: e.length
    }) : /* @__PURE__ */ q(af, {
      children: /* @__PURE__ */ q(Wi, {})
    }), /* @__PURE__ */ q(nf, {
      ref: c,
      children: /* @__PURE__ */ q(rf, {
        ...l
      })
    }), /* @__PURE__ */ q(Xc, {
      item: s
    })]
  });
};
export {
  cf as default
};
