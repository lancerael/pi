import he, { css as Rr, keyframes as Er } from "styled-components";
import _e from "react";
const dr = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, jr = "font-family: serif;", xr = he.button(
  ({ status: v, minWidth: h, margin: x }) => Rr`
    ${jr}
    border: 1px solid ${dr[v]};
    color: ${dr[v]};
    background-color: white;
    border-radius: 6px;
    min-width: ${h};
    padding: 8px;
    margin: ${x};
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
var wr = { exports: {} }, tr = {};
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
function Tr() {
  if (yr)
    return tr;
  yr = 1;
  var v = _e, h = Symbol.for("react.element"), x = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, $ = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(_, l, O) {
    var d, m = {}, R = null, F = null;
    O !== void 0 && (R = "" + O), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (F = l.ref);
    for (d in l)
      w.call(l, d) && !D.hasOwnProperty(d) && (m[d] = l[d]);
    if (_ && _.defaultProps)
      for (d in l = _.defaultProps, l)
        m[d] === void 0 && (m[d] = l[d]);
    return { $$typeof: h, type: _, key: R, ref: F, props: m, _owner: $.current };
  }
  return tr.Fragment = x, tr.jsx = T, tr.jsxs = T, tr;
}
var ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Pr() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    var v = _e, h = Symbol.for("react.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), _ = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var S = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(a) {
          return String(a);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Oe = !1, Se = !1, ke = !1, je = !1, xe = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === D || xe || e === $ || e === O || e === d || je || e === F || Oe || Se || ke || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === m || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === H || e.getModuleId !== void 0));
    }
    function Pe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case x:
          return "Portal";
        case D:
          return "Profiler";
        case $:
          return "StrictMode";
        case O:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return X(r) + ".Consumer";
          case T:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return Pe(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case R: {
            var i = e, u = i._payload, a = i._init;
            try {
              return g(a(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, P = 0, K, Z, Q, ee, re, te, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ce() {
      {
        if (P === 0) {
          K = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        P++;
      }
    }
    function $e() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: K
            }),
            info: E({}, e, {
              value: Z
            }),
            warn: E({}, e, {
              value: Q
            }),
            error: E({}, e, {
              value: ee
            }),
            group: E({}, e, {
              value: re
            }),
            groupCollapsed: E({}, e, {
              value: te
            }),
            groupEnd: E({}, e, {
              value: ne
            })
          });
        }
        P < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = S.ReactCurrentDispatcher, Y;
    function N(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var M = !1, I;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      I = new De();
    }
    function ae(e, r) {
      if (!e || M)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      M = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ce();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (b) {
              n = b;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var o = b.stack.split(`
`), p = n.stack.split(`
`), s = o.length - 1, c = p.length - 1; s >= 1 && c >= 0 && o[s] !== p[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (o[s] !== p[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || o[s] !== p[c]) {
                    var y = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, y), y;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = u, $e(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", be = j ? N(j) : "";
      return typeof e == "function" && I.set(e, be), be;
    }
    function Fe(e, r, t) {
      return ae(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ae(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case O:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Fe(e.render);
          case m:
            return A(e.type, r, t);
          case R: {
            var n = e, i = n._payload, u = n._init;
            try {
              return A(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, ue = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        ue.setExtraStackFrame(t);
      } else
        ue.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var u = Function.call.bind(W);
        for (var a in e)
          if (u(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && (L(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), L(null)), o instanceof Error && !(o.message in ie) && (ie[o.message] = !0, L(i), f("Failed %s type: %s", t, o.message), L(null));
          }
      }
    }
    var Ae = Array.isArray;
    function V(e) {
      return Ae(e);
    }
    function We(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Le(e) {
      try {
        return se(e), !1;
      } catch {
        return !0;
      }
    }
    function se(e) {
      return "" + e;
    }
    function ce(e) {
      if (Le(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), se(e);
    }
    var C = S.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, fe, B;
    B = {};
    function Ye(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Me(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ve(e, r) {
      if (typeof e.ref == "string" && C.current && r && C.current.stateNode !== r) {
        var t = g(C.current.type);
        B[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(C.current.type), e.ref), B[t] = !0);
      }
    }
    function Be(e, r) {
      {
        var t = function() {
          le || (le = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          fe || (fe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, n, i, u, a) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: a,
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function Je(e, r, t, n, i) {
      {
        var u, a = {}, o = null, p = null;
        t !== void 0 && (ce(t), o = "" + t), Me(r) && (ce(r.key), o = "" + r.key), Ye(r) && (p = r.ref, Ve(r, i));
        for (u in r)
          W.call(r, u) && !Ue.hasOwnProperty(u) && (a[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            a[u] === void 0 && (a[u] = s[u]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Be(a, c), p && ze(a, c);
        }
        return qe(e, o, p, i, n, C.current, a);
      }
    }
    var z = S.ReactCurrentOwner, pe = S.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function de() {
      {
        if (z.current) {
          var e = g(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ge(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function He(e) {
      {
        var r = de();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = He(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + g(e._owner.type) + "."), k(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (V(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            J(n) && ve(n, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ee(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), a; !(a = u.next()).done; )
              J(a.value) && ve(a.value, r);
        }
      }
    }
    function Xe(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = g(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = g(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function ge(e, r, t, n, i, u) {
      {
        var a = Te(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? o += p : o += de();
          var s;
          e === null ? s = "null" : V(e) ? s = "array" : e !== void 0 && e.$$typeof === h ? (s = "<" + (g(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var c = Je(e, r, t, i, u);
        if (c == null)
          return c;
        if (a) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (V(y)) {
                for (var j = 0; j < y.length; j++)
                  me(y[j], e);
                Object.freeze && Object.freeze(y);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(y, e);
        }
        return e === w ? Ke(c) : Xe(c), c;
      }
    }
    function Ze(e, r, t) {
      return ge(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return ge(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    ur.Fragment = w, ur.jsx = er, ur.jsxs = rr;
  }()), ur;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = Tr() : v.exports = Pr();
})(wr);
const Cr = wr.exports.jsx, $r = ({
  children: v,
  status: h = "default",
  dataSelector: x = "pi-lib-button",
  minWidth: w = "220px",
  margin: $ = "10px",
  ...D
}) => /* @__PURE__ */ Cr(xr, {
  status: h,
  ...D,
  minWidth: w,
  margin: $,
  "data-selector": x,
  children: v
}), Or = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Sr = Er`
  to {
    rotate: 360deg;
  }
`, Dr = Er`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, Fr = he.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Nr = he.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Sr} 2s linear infinite;
  margin: 2px;
`, mr = he.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, sr = he.div(
  ({ delay: v }) => Rr`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${Or.pending};
    animation: ${Dr} 0.3s linear alternate infinite;

    ${v ? "animation-delay: 0.2s;" : ""}
  `
);
he.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${Or.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${Sr} 2s linear infinite;
`;
var pr = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Ir() {
  if (gr)
    return nr;
  gr = 1;
  var v = _e, h = Symbol.for("react.element"), x = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, $ = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(_, l, O) {
    var d, m = {}, R = null, F = null;
    O !== void 0 && (R = "" + O), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (F = l.ref);
    for (d in l)
      w.call(l, d) && !D.hasOwnProperty(d) && (m[d] = l[d]);
    if (_ && _.defaultProps)
      for (d in l = _.defaultProps, l)
        m[d] === void 0 && (m[d] = l[d]);
    return { $$typeof: h, type: _, key: R, ref: F, props: m, _owner: $.current };
  }
  return nr.Fragment = x, nr.jsx = T, nr.jsxs = T, nr;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function Ar() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var v = _e, h = Symbol.for("react.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), _ = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var S = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(a) {
          return String(a);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Oe = !1, Se = !1, ke = !1, je = !1, xe = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === D || xe || e === $ || e === O || e === d || je || e === F || Oe || Se || ke || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === m || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === H || e.getModuleId !== void 0));
    }
    function Pe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case x:
          return "Portal";
        case D:
          return "Profiler";
        case $:
          return "StrictMode";
        case O:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return X(r) + ".Consumer";
          case T:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return Pe(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case R: {
            var i = e, u = i._payload, a = i._init;
            try {
              return g(a(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, P = 0, K, Z, Q, ee, re, te, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ce() {
      {
        if (P === 0) {
          K = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        P++;
      }
    }
    function $e() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: K
            }),
            info: E({}, e, {
              value: Z
            }),
            warn: E({}, e, {
              value: Q
            }),
            error: E({}, e, {
              value: ee
            }),
            group: E({}, e, {
              value: re
            }),
            groupCollapsed: E({}, e, {
              value: te
            }),
            groupEnd: E({}, e, {
              value: ne
            })
          });
        }
        P < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = S.ReactCurrentDispatcher, Y;
    function N(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var M = !1, I;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      I = new De();
    }
    function ae(e, r) {
      if (!e || M)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      M = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ce();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (b) {
              n = b;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var o = b.stack.split(`
`), p = n.stack.split(`
`), s = o.length - 1, c = p.length - 1; s >= 1 && c >= 0 && o[s] !== p[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (o[s] !== p[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || o[s] !== p[c]) {
                    var y = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, y), y;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = u, $e(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", be = j ? N(j) : "";
      return typeof e == "function" && I.set(e, be), be;
    }
    function Fe(e, r, t) {
      return ae(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ae(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case O:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Fe(e.render);
          case m:
            return A(e.type, r, t);
          case R: {
            var n = e, i = n._payload, u = n._init;
            try {
              return A(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, ue = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        ue.setExtraStackFrame(t);
      } else
        ue.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var u = Function.call.bind(W);
        for (var a in e)
          if (u(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && (L(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), L(null)), o instanceof Error && !(o.message in ie) && (ie[o.message] = !0, L(i), f("Failed %s type: %s", t, o.message), L(null));
          }
      }
    }
    var Ae = Array.isArray;
    function V(e) {
      return Ae(e);
    }
    function We(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Le(e) {
      try {
        return se(e), !1;
      } catch {
        return !0;
      }
    }
    function se(e) {
      return "" + e;
    }
    function ce(e) {
      if (Le(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), se(e);
    }
    var C = S.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, fe, B;
    B = {};
    function Ye(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Me(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ve(e, r) {
      if (typeof e.ref == "string" && C.current && r && C.current.stateNode !== r) {
        var t = g(C.current.type);
        B[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(C.current.type), e.ref), B[t] = !0);
      }
    }
    function Be(e, r) {
      {
        var t = function() {
          le || (le = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          fe || (fe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, n, i, u, a) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: a,
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function Je(e, r, t, n, i) {
      {
        var u, a = {}, o = null, p = null;
        t !== void 0 && (ce(t), o = "" + t), Me(r) && (ce(r.key), o = "" + r.key), Ye(r) && (p = r.ref, Ve(r, i));
        for (u in r)
          W.call(r, u) && !Ue.hasOwnProperty(u) && (a[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            a[u] === void 0 && (a[u] = s[u]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Be(a, c), p && ze(a, c);
        }
        return qe(e, o, p, i, n, C.current, a);
      }
    }
    var z = S.ReactCurrentOwner, pe = S.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function de() {
      {
        if (z.current) {
          var e = g(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ge(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function He(e) {
      {
        var r = de();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = He(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + g(e._owner.type) + "."), k(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (V(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            J(n) && ve(n, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ee(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), a; !(a = u.next()).done; )
              J(a.value) && ve(a.value, r);
        }
      }
    }
    function Xe(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = g(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = g(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function ge(e, r, t, n, i, u) {
      {
        var a = Te(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? o += p : o += de();
          var s;
          e === null ? s = "null" : V(e) ? s = "array" : e !== void 0 && e.$$typeof === h ? (s = "<" + (g(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var c = Je(e, r, t, i, u);
        if (c == null)
          return c;
        if (a) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (V(y)) {
                for (var j = 0; j < y.length; j++)
                  me(y[j], e);
                Object.freeze && Object.freeze(y);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(y, e);
        }
        return e === w ? Ke(c) : Xe(c), c;
      }
    }
    function Ze(e, r, t) {
      return ge(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return ge(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    cr.Fragment = w, cr.jsx = er, cr.jsxs = rr;
  }()), cr;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = Ir() : v.exports = Ar();
})(pr);
const or = pr.exports.jsx, lr = pr.exports.jsxs, Wr = () => /* @__PURE__ */ or(Fr, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ lr(Nr, {
    children: [/* @__PURE__ */ lr(mr, {
      children: [/* @__PURE__ */ or(sr, {
        delay: !0
      }), /* @__PURE__ */ or(sr, {})]
    }), /* @__PURE__ */ lr(mr, {
      children: [/* @__PURE__ */ or(sr, {}), /* @__PURE__ */ or(sr, {
        delay: !0
      })]
    })]
  })
}), Lr = he.div``;
var kr = { exports: {} }, ar = {};
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
function Ur() {
  if (hr)
    return ar;
  hr = 1;
  var v = _e, h = Symbol.for("react.element"), x = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, $ = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(_, l, O) {
    var d, m = {}, R = null, F = null;
    O !== void 0 && (R = "" + O), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (F = l.ref);
    for (d in l)
      w.call(l, d) && !D.hasOwnProperty(d) && (m[d] = l[d]);
    if (_ && _.defaultProps)
      for (d in l = _.defaultProps, l)
        m[d] === void 0 && (m[d] = l[d]);
    return { $$typeof: h, type: _, key: R, ref: F, props: m, _owner: $.current };
  }
  return ar.Fragment = x, ar.jsx = T, ar.jsxs = T, ar;
}
var ir = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function Yr() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var v = _e, h = Symbol.for("react.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), _ = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var S = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(a) {
          return String(a);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Oe = !1, Se = !1, ke = !1, je = !1, xe = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === D || xe || e === $ || e === O || e === d || je || e === F || Oe || Se || ke || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === m || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === H || e.getModuleId !== void 0));
    }
    function Pe(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case x:
          return "Portal";
        case D:
          return "Profiler";
        case $:
          return "StrictMode";
        case O:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return X(r) + ".Consumer";
          case T:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return Pe(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case R: {
            var i = e, u = i._payload, a = i._init;
            try {
              return g(a(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, P = 0, K, Z, Q, ee, re, te, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ce() {
      {
        if (P === 0) {
          K = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        P++;
      }
    }
    function $e() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: K
            }),
            info: E({}, e, {
              value: Z
            }),
            warn: E({}, e, {
              value: Q
            }),
            error: E({}, e, {
              value: ee
            }),
            group: E({}, e, {
              value: re
            }),
            groupCollapsed: E({}, e, {
              value: te
            }),
            groupEnd: E({}, e, {
              value: ne
            })
          });
        }
        P < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = S.ReactCurrentDispatcher, Y;
    function N(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var M = !1, I;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      I = new De();
    }
    function ae(e, r) {
      if (!e || M)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      M = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ce();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (b) {
              n = b;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var o = b.stack.split(`
`), p = n.stack.split(`
`), s = o.length - 1, c = p.length - 1; s >= 1 && c >= 0 && o[s] !== p[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (o[s] !== p[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || o[s] !== p[c]) {
                    var y = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, y), y;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = u, $e(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", be = j ? N(j) : "";
      return typeof e == "function" && I.set(e, be), be;
    }
    function Fe(e, r, t) {
      return ae(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ae(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case O:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Fe(e.render);
          case m:
            return A(e.type, r, t);
          case R: {
            var n = e, i = n._payload, u = n._init;
            try {
              return A(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, ue = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        ue.setExtraStackFrame(t);
      } else
        ue.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var u = Function.call.bind(W);
        for (var a in e)
          if (u(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && (L(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), L(null)), o instanceof Error && !(o.message in ie) && (ie[o.message] = !0, L(i), f("Failed %s type: %s", t, o.message), L(null));
          }
      }
    }
    var Ae = Array.isArray;
    function V(e) {
      return Ae(e);
    }
    function We(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Le(e) {
      try {
        return se(e), !1;
      } catch {
        return !0;
      }
    }
    function se(e) {
      return "" + e;
    }
    function ce(e) {
      if (Le(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), se(e);
    }
    var C = S.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, fe, B;
    B = {};
    function Ye(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Me(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ve(e, r) {
      if (typeof e.ref == "string" && C.current && r && C.current.stateNode !== r) {
        var t = g(C.current.type);
        B[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(C.current.type), e.ref), B[t] = !0);
      }
    }
    function Be(e, r) {
      {
        var t = function() {
          le || (le = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          fe || (fe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, n, i, u, a) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: a,
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function Je(e, r, t, n, i) {
      {
        var u, a = {}, o = null, p = null;
        t !== void 0 && (ce(t), o = "" + t), Me(r) && (ce(r.key), o = "" + r.key), Ye(r) && (p = r.ref, Ve(r, i));
        for (u in r)
          W.call(r, u) && !Ue.hasOwnProperty(u) && (a[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            a[u] === void 0 && (a[u] = s[u]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Be(a, c), p && ze(a, c);
        }
        return qe(e, o, p, i, n, C.current, a);
      }
    }
    var z = S.ReactCurrentOwner, pe = S.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function de() {
      {
        if (z.current) {
          var e = g(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ge(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function He(e) {
      {
        var r = de();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = He(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + g(e._owner.type) + "."), k(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (V(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            J(n) && ve(n, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ee(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), a; !(a = u.next()).done; )
              J(a.value) && ve(a.value, r);
        }
      }
    }
    function Xe(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = g(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = g(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function ge(e, r, t, n, i, u) {
      {
        var a = Te(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? o += p : o += de();
          var s;
          e === null ? s = "null" : V(e) ? s = "array" : e !== void 0 && e.$$typeof === h ? (s = "<" + (g(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var c = Je(e, r, t, i, u);
        if (c == null)
          return c;
        if (a) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (V(y)) {
                for (var j = 0; j < y.length; j++)
                  me(y[j], e);
                Object.freeze && Object.freeze(y);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(y, e);
        }
        return e === w ? Ke(c) : Xe(c), c;
      }
    }
    function Ze(e, r, t) {
      return ge(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return ge(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    ir.Fragment = w, ir.jsx = er, ir.jsxs = rr;
  }()), ir;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = Ur() : v.exports = Yr();
})(kr);
const fr = kr.exports.jsx, Br = ({
  isLoading: v,
  buttonProps: h,
  children: x
}) => /* @__PURE__ */ fr(Lr, {
  children: /* @__PURE__ */ fr($r, {
    status: v ? "pending" : "default",
    ...h,
    children: v ? /* @__PURE__ */ fr(Wr, {}) : x
  })
});
export {
  Br as default
};
