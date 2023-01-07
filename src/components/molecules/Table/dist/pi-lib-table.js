import U, { keyframes as br, css as ke } from "styled-components";
import Te, { useState as dr, useEffect as wr } from "react";
const _r = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Er = br`
  to {
    rotate: 360deg;
  }
`, Or = br`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, Sr = U.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, xr = U.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Er} 2s linear infinite;
  margin: 2px;
`, vr = U.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Se = U.div(
  ({ delay: y }) => ke`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: ${_r.pending};
    animation: ${Or} 0.3s linear alternate infinite;

    ${y ? "animation-delay: 0.3s;" : ""}
  `
);
U.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${_r.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${Er} 2s linear infinite;
`;
var pr = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function kr() {
  if (yr)
    return Ee;
  yr = 1;
  var y = Te, E = Symbol.for("react.element"), S = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(h, c, T) {
    var d, m = {}, R = null, I = null;
    T !== void 0 && (R = "" + T), c.key !== void 0 && (R = "" + c.key), c.ref !== void 0 && (I = c.ref);
    for (d in c)
      g.call(c, d) && !O.hasOwnProperty(d) && (m[d] = c[d]);
    if (h && h.defaultProps)
      for (d in c = h.defaultProps, c)
        m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: E, type: h, key: R, ref: I, props: m, _owner: x.current };
  }
  return Ee.Fragment = S, Ee.jsx = k, Ee.jsxs = k, Ee;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Tr() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Te, E = Symbol.for("react.element"), S = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), h = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), K = Symbol.iterator, Pe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = K && e[K] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var j = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $e = !1, Fe = !1, Ie = !1, Ae = !1, Ne = !1, X;
    X = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === O || Ne || e === x || e === T || e === d || Ae || e === I || $e || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === m || e.$$typeof === k || e.$$typeof === h || e.$$typeof === c || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case S:
          return "Portal";
        case O:
          return "Profiler";
        case x:
          return "StrictMode";
        case T:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Z(r) + ".Consumer";
          case k:
            var t = e;
            return Z(t._context) + ".Provider";
          case c:
            return Le(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case R: {
            var i = e, s = i._payload, o = i._init;
            try {
              return b(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, D = 0, Q, ee, re, te, ne, ae, oe;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ne = console.group, ae = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ue() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: Q
            }),
            info: w({}, e, {
              value: ee
            }),
            warn: w({}, e, {
              value: re
            }),
            error: w({}, e, {
              value: te
            }),
            group: w({}, e, {
              value: ne
            }),
            groupCollapsed: w({}, e, {
              value: ae
            }),
            groupEnd: w({}, e, {
              value: oe
            })
          });
        }
        D < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = j.ReactCurrentDispatcher, M;
    function A(e, r, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            M = n && n[1] || "";
          }
        return `
` + M + e;
      }
    }
    var B = !1, N;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ve();
    }
    function se(e, r) {
      if (!e || B)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = V.current, V.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, l = p.length - 1; u >= 1 && l >= 0 && a[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== p[l]) {
                    var v = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, v), v;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = s, Ue(), Error.prepareStackTrace = i;
      }
      var C = e ? e.displayName || e.name : "", _e = C ? A(C) : "";
      return typeof e == "function" && N.set(e, _e), _e;
    }
    function Me(e, r, t) {
      return se(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Be(e));
      if (typeof e == "string")
        return A(e);
      switch (e) {
        case T:
          return A("Suspense");
        case d:
          return A("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case m:
            return W(e.type, r, t);
          case R: {
            var n = e, i = n._payload, s = n._init;
            try {
              return W(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ue = {}, le = j.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, i) {
      {
        var s = Function.call.bind(L);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (Y(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), Y(null)), a instanceof Error && !(a.message in ue) && (ue[a.message] = !0, Y(i), f("Failed %s type: %s", t, a.message), Y(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function fe(e) {
      if (Ge(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ce(e);
    }
    var $ = j.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, de, q;
    q = {};
    function Ke(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = b($.current.type);
        q[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b($.current.type), e.ref), q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          de || (de = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        $$typeof: E,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (fe(t), a = "" + t), Xe(r) && (fe(r.key), a = "" + r.key), Ke(r) && (p = r.ref, Ze(r, i));
        for (s in r)
          L.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), p && er(o, l);
        }
        return rr(e, a, p, i, n, $.current, o);
      }
    }
    var J = j.ReactCurrentOwner, ve = j.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function ye() {
      {
        if (J.current) {
          var e = b(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ge = {};
    function ar(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function he(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + b(e._owner.type) + "."), P(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && he(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ce(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              H(o.value) && he(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = b(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function be(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = nr(i);
          p ? a += p : a += ye();
          var u;
          e === null ? u = "null" : z(e) ? u = "array" : e !== void 0 && e.$$typeof === E ? (u = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = tr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (z(v)) {
                for (var C = 0; C < v.length; C++)
                  me(v[C], e);
                Object.freeze && Object.freeze(v);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(v, e);
        }
        return e === g ? ir(l) : or(l), l;
      }
    }
    function sr(e, r, t) {
      return be(e, r, t, !0);
    }
    function ur(e, r, t) {
      return be(e, r, t, !1);
    }
    var lr = ur, cr = sr;
    xe.Fragment = g, xe.jsx = lr, xe.jsxs = cr;
  }()), xe;
}
(function(y) {
  process.env.NODE_ENV === "production" ? y.exports = kr() : y.exports = Tr();
})(pr);
const Re = pr.exports.jsx, fr = pr.exports.jsxs, jr = () => /* @__PURE__ */ Re(Sr, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ fr(xr, {
    children: [/* @__PURE__ */ fr(vr, {
      children: [/* @__PURE__ */ Re(Se, {
        delay: !0
      }), /* @__PURE__ */ Re(Se, {})]
    }), /* @__PURE__ */ fr(vr, {
      children: [/* @__PURE__ */ Re(Se, {}), /* @__PURE__ */ Re(Se, {
        delay: !0
      })]
    })]
  })
}), Pr = U.tr(
  ({ isOdd: y, isExpandable: E }) => ke`
    background: var(--subtle);

    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--special);
      }
    }

    ${E && ke`
      cursor: pointer;
      &:hover {
        background: var(--special);
      }
    `}

    ${y && ke`
      background: var(--border);
    `}
  `
), Cr = U.tr`
  & > td {
    transition: all 0.5s;
    background: var(--shadow);
  }
`;
var je = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Dr() {
  if (hr)
    return we;
  hr = 1;
  var y = Te, E = Symbol.for("react.element"), S = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(h, c, T) {
    var d, m = {}, R = null, I = null;
    T !== void 0 && (R = "" + T), c.key !== void 0 && (R = "" + c.key), c.ref !== void 0 && (I = c.ref);
    for (d in c)
      g.call(c, d) && !O.hasOwnProperty(d) && (m[d] = c[d]);
    if (h && h.defaultProps)
      for (d in c = h.defaultProps, c)
        m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: E, type: h, key: R, ref: I, props: m, _owner: x.current };
  }
  return we.Fragment = S, we.jsx = k, we.jsxs = k, we;
}
var Oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function $r() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Te, E = Symbol.for("react.element"), S = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), h = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), K = Symbol.iterator, Pe = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = K && e[K] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var j = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $e = !1, Fe = !1, Ie = !1, Ae = !1, Ne = !1, X;
    X = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === O || Ne || e === x || e === T || e === d || Ae || e === I || $e || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === m || e.$$typeof === k || e.$$typeof === h || e.$$typeof === c || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case S:
          return "Portal";
        case O:
          return "Profiler";
        case x:
          return "StrictMode";
        case T:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Z(r) + ".Consumer";
          case k:
            var t = e;
            return Z(t._context) + ".Provider";
          case c:
            return Le(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case R: {
            var i = e, s = i._payload, o = i._init;
            try {
              return b(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, D = 0, Q, ee, re, te, ne, ae, oe;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ne = console.group, ae = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ue() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: Q
            }),
            info: w({}, e, {
              value: ee
            }),
            warn: w({}, e, {
              value: re
            }),
            error: w({}, e, {
              value: te
            }),
            group: w({}, e, {
              value: ne
            }),
            groupCollapsed: w({}, e, {
              value: ae
            }),
            groupEnd: w({}, e, {
              value: oe
            })
          });
        }
        D < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = j.ReactCurrentDispatcher, M;
    function A(e, r, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            M = n && n[1] || "";
          }
        return `
` + M + e;
      }
    }
    var B = !1, N;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ve();
    }
    function se(e, r) {
      if (!e || B)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = V.current, V.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, l = p.length - 1; u >= 1 && l >= 0 && a[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== p[l]) {
                    var v = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, v), v;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, V.current = s, Ue(), Error.prepareStackTrace = i;
      }
      var C = e ? e.displayName || e.name : "", _e = C ? A(C) : "";
      return typeof e == "function" && N.set(e, _e), _e;
    }
    function Me(e, r, t) {
      return se(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function W(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Be(e));
      if (typeof e == "string")
        return A(e);
      switch (e) {
        case T:
          return A("Suspense");
        case d:
          return A("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case m:
            return W(e.type, r, t);
          case R: {
            var n = e, i = n._payload, s = n._init;
            try {
              return W(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ue = {}, le = j.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, i) {
      {
        var s = Function.call.bind(L);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (Y(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), Y(null)), a instanceof Error && !(a.message in ue) && (ue[a.message] = !0, Y(i), f("Failed %s type: %s", t, a.message), Y(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function fe(e) {
      if (Ge(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ce(e);
    }
    var $ = j.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, de, q;
    q = {};
    function Ke(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = b($.current.type);
        q[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b($.current.type), e.ref), q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          de || (de = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        $$typeof: E,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (fe(t), a = "" + t), Xe(r) && (fe(r.key), a = "" + r.key), Ke(r) && (p = r.ref, Ze(r, i));
        for (s in r)
          L.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), p && er(o, l);
        }
        return rr(e, a, p, i, n, $.current, o);
      }
    }
    var J = j.ReactCurrentOwner, ve = j.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = W(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function ye() {
      {
        if (J.current) {
          var e = b(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ge = {};
    function ar(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function he(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + b(e._owner.type) + "."), P(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && he(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ce(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              H(o.value) && he(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = b(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function be(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = nr(i);
          p ? a += p : a += ye();
          var u;
          e === null ? u = "null" : z(e) ? u = "array" : e !== void 0 && e.$$typeof === E ? (u = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = tr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (z(v)) {
                for (var C = 0; C < v.length; C++)
                  me(v[C], e);
                Object.freeze && Object.freeze(v);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(v, e);
        }
        return e === g ? ir(l) : or(l), l;
      }
    }
    function sr(e, r, t) {
      return be(e, r, t, !0);
    }
    function ur(e, r, t) {
      return be(e, r, t, !1);
    }
    var lr = ur, cr = sr;
    Oe.Fragment = g, Oe.jsx = lr, Oe.jsxs = cr;
  }()), Oe;
}
(function(y) {
  process.env.NODE_ENV === "production" ? y.exports = Dr() : y.exports = $r();
})(je);
const Fr = je.exports.Fragment, F = je.exports.jsx, Rr = je.exports.jsxs, Ir = ({
  cols: y,
  i: E,
  expandedContent: S
}) => {
  const [g, x] = dr(!1), [O, k] = dr(!1);
  return wr(() => {
    k(g);
  }, [g]), /* @__PURE__ */ Rr(Fr, {
    children: [/* @__PURE__ */ F(Pr, {
      isOdd: !!(E % 2),
      isExpandable: !!S,
      onClick: () => !!S && x((h) => !h),
      children: y.map((h, c) => /* @__PURE__ */ F("td", {
        children: h
      }, c))
    }), g && /* @__PURE__ */ F(Cr, {
      children: /* @__PURE__ */ F("td", {
        colSpan: 7,
        style: {
          height: O ? "175px" : "0px",
          position: "relative",
          overflow: "hidden"
        },
        children: S
      })
    })]
  });
}, Ar = U.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }
`, Nr = U.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);

  & th:not(:last-of-type) {
    border-right: 1px solid var(--special);
  }
`, Yr = ({
  headers: y,
  tableRows: E,
  fixedWidths: S = {}
}) => E.length ? /* @__PURE__ */ Rr(Ar, {
  children: [!!(y != null && y.length) && /* @__PURE__ */ F(Nr, {
    children: /* @__PURE__ */ F("tr", {
      children: y.map((g) => /* @__PURE__ */ F("th", {
        style: {
          ...S[g]
        },
        children: g
      }, g))
    })
  }), /* @__PURE__ */ F("tbody", {
    children: E.map(({
      cols: g,
      expandedContent: x
    }, O) => /* @__PURE__ */ F(Ir, {
      cols: g,
      i: O,
      expandedContent: x
    }, O))
  })]
}) : /* @__PURE__ */ F(jr, {});
export {
  Yr as default
};
