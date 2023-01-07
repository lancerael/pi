import he, { css as Rr, createGlobalStyle as jr, keyframes as Er } from "styled-components";
import _e from "react";
const xr = {
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
}, Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: xr
}, Symbol.toStringTag, { value: "Module" }));
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
function Pr() {
  if (yr)
    return tr;
  yr = 1;
  var d = _e, h = Symbol.for("react.element"), k = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, T = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(R, l, O) {
    var y, m = {}, E = null, F = null;
    O !== void 0 && (E = "" + O), l.key !== void 0 && (E = "" + l.key), l.ref !== void 0 && (F = l.ref);
    for (y in l)
      _.call(l, y) && !P.hasOwnProperty(y) && (m[y] = l[y]);
    if (R && R.defaultProps)
      for (y in l = R.defaultProps, l)
        m[y] === void 0 && (m[y] = l[y]);
    return { $$typeof: h, type: R, key: E, ref: F, props: m, _owner: T.current };
  }
  return tr.Fragment = k, tr.jsx = C, tr.jsxs = C, tr;
}
var sr = {};
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
function Cr() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    var d = _e, h = Symbol.for("react.element"), k = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), R = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var s = t.map(function(a) {
          return String(a);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, Oe = !1, Se = !1, je = !1, xe = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === P || xe || e === T || e === O || e === y || je || e === F || ke || Oe || Se || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === m || e.$$typeof === C || e.$$typeof === R || e.$$typeof === l || e.$$typeof === H || e.getModuleId !== void 0));
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
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case k:
          return "Portal";
        case P:
          return "Profiler";
        case T:
          return "StrictMode";
        case O:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return X(r) + ".Consumer";
          case C:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return Pe(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case E: {
            var i = e, s = i._payload, a = i._init;
            try {
              return b(a(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, $ = 0, K, Z, Q, ee, re, te, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ce() {
      {
        if ($ === 0) {
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
        $++;
      }
    }
    function $e() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: K
            }),
            info: w({}, e, {
              value: Z
            }),
            warn: w({}, e, {
              value: Q
            }),
            error: w({}, e, {
              value: ee
            }),
            group: w({}, e, {
              value: re
            }),
            groupCollapsed: w({}, e, {
              value: te
            }),
            groupEnd: w({}, e, {
              value: ne
            })
          });
        }
        $ < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
      var s;
      s = U.current, U.current = null, Ce();
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
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (g) {
              n = g;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), p = n.stack.split(`
`), u = o.length - 1, c = p.length - 1; u >= 1 && c >= 0 && o[u] !== p[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (o[u] !== p[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || o[u] !== p[c]) {
                    var v = `
` + o[u].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, v), v;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = s, $e(), Error.prepareStackTrace = i;
      }
      var x = e ? e.displayName || e.name : "", ge = x ? N(x) : "";
      return typeof e == "function" && I.set(e, ge), ge;
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
        case y:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Fe(e.render);
          case m:
            return A(e.type, r, t);
          case E: {
            var n = e, i = n._payload, s = n._init;
            try {
              return A(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, se = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        se.setExtraStackFrame(t);
      } else
        se.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var a in e)
          if (s(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              o = u;
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
        return ue(e), !1;
      } catch {
        return !0;
      }
    }
    function ue(e) {
      return "" + e;
    }
    function ce(e) {
      if (Le(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), ue(e);
    }
    var D = S.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, fe, z;
    z = {};
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
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = b(D.current.type);
        z[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(D.current.type), e.ref), z[t] = !0);
      }
    }
    function ze(e, r) {
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
    function Be(e, r) {
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
    var qe = function(e, r, t, n, i, s, a) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: a,
        _owner: s
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
        var s, a = {}, o = null, p = null;
        t !== void 0 && (ce(t), o = "" + t), Me(r) && (ce(r.key), o = "" + r.key), Ye(r) && (p = r.ref, Ve(r, i));
        for (s in r)
          W.call(r, s) && !Ue.hasOwnProperty(s) && (a[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            a[s] === void 0 && (a[s] = u[s]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ze(a, c), p && Be(a, c);
        }
        return qe(e, o, p, i, n, D.current, a);
      }
    }
    var B = S.ReactCurrentOwner, pe = S.ReactDebugCurrentFrame;
    function j(e) {
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
        if (B.current) {
          var e = b(B.current.type);
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
        e && e._owner && e._owner !== B.current && (n = " It was passed a child from " + b(e._owner.type) + "."), j(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
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
            for (var s = i.call(e), a; !(a = s.next()).done; )
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
          var n = b(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = b(r);
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
            j(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function be(e, r, t, n, i, s) {
      {
        var a = Te(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? o += p : o += de();
          var u;
          e === null ? u = "null" : V(e) ? u = "array" : e !== void 0 && e.$$typeof === h ? (u = "<" + (b(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, o);
        }
        var c = Je(e, r, t, i, s);
        if (c == null)
          return c;
        if (a) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (V(v)) {
                for (var x = 0; x < v.length; x++)
                  me(v[x], e);
                Object.freeze && Object.freeze(v);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(v, e);
        }
        return e === _ ? Ke(c) : Xe(c), c;
      }
    }
    function Ze(e, r, t) {
      return be(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return be(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    sr.Fragment = _, sr.jsx = er, sr.jsxs = rr;
  }()), sr;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = Pr() : d.exports = Cr();
})(wr);
const $r = wr.exports.jsx, Dr = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, Fr = (d = "pebble") => ({
  colors: Tr[d],
  ...Dr
}), ur = (d) => Object.entries(d).reduce(
  (h, [k, _]) => `${h} --${k}: ${_};`,
  ""
), Nr = ({
  colors: {
    light: d,
    dark: h = d,
    lightContrast: k = d,
    darkContrast: _ = d
  },
  fonts: T,
  fontSizes: P
} = Fr()) => jr`
  :root {
    ${ur(d)}
    font-family: ${T.join(", ")};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${ur(h)}
    }
  }

  @media (prefers-color-scheme: light) and (prefers-contrast: more) {
    :root {
      ${ur(k)}
    }
  }

  @media (prefers-color-scheme: dark) and (prefers-contrast: more) {
    :root {
      ${ur(_)}
    }
  }
`;
Nr();
const Ir = (d) => `
  border: 1px solid ${d};
  color: ${d};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, Ar = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Wr = "font-family: sans-serif;", Lr = he.button(
  ({ status: d, minWidth: h, margin: k }) => Rr`
    ${Wr}
    ${Ir(Ar[d])}
    min-width: ${h};
    margin: ${k};
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
), Ur = ({
  children: d,
  status: h = "default",
  dataSelector: k = "pi-lib-button",
  minWidth: _ = "220px",
  margin: T = "10px",
  ...P
}) => /* @__PURE__ */ $r(Lr, {
  status: h,
  ...P,
  minWidth: _,
  margin: T,
  "data-selector": k,
  children: d
}), kr = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Or = Er`
  to {
    rotate: 360deg;
  }
`, Yr = Er`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, Mr = he.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Vr = he.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Or} 2s linear infinite;
  margin: 2px;
`, mr = he.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, cr = he.div(
  ({ delay: d }) => Rr`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: ${kr.pending};
    animation: ${Yr} 0.3s linear alternate infinite;

    ${d ? "animation-delay: 0.3s;" : ""}
  `
);
he.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${kr.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${Or} 2s linear infinite;
`;
var dr = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function zr() {
  if (br)
    return nr;
  br = 1;
  var d = _e, h = Symbol.for("react.element"), k = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, T = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(R, l, O) {
    var y, m = {}, E = null, F = null;
    O !== void 0 && (E = "" + O), l.key !== void 0 && (E = "" + l.key), l.ref !== void 0 && (F = l.ref);
    for (y in l)
      _.call(l, y) && !P.hasOwnProperty(y) && (m[y] = l[y]);
    if (R && R.defaultProps)
      for (y in l = R.defaultProps, l)
        m[y] === void 0 && (m[y] = l[y]);
    return { $$typeof: h, type: R, key: E, ref: F, props: m, _owner: T.current };
  }
  return nr.Fragment = k, nr.jsx = C, nr.jsxs = C, nr;
}
var lr = {};
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
function Br() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    var d = _e, h = Symbol.for("react.element"), k = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), R = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var s = t.map(function(a) {
          return String(a);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, Oe = !1, Se = !1, je = !1, xe = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === P || xe || e === T || e === O || e === y || je || e === F || ke || Oe || Se || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === m || e.$$typeof === C || e.$$typeof === R || e.$$typeof === l || e.$$typeof === H || e.getModuleId !== void 0));
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
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case k:
          return "Portal";
        case P:
          return "Profiler";
        case T:
          return "StrictMode";
        case O:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return X(r) + ".Consumer";
          case C:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return Pe(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case E: {
            var i = e, s = i._payload, a = i._init;
            try {
              return b(a(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, $ = 0, K, Z, Q, ee, re, te, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ce() {
      {
        if ($ === 0) {
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
        $++;
      }
    }
    function $e() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: K
            }),
            info: w({}, e, {
              value: Z
            }),
            warn: w({}, e, {
              value: Q
            }),
            error: w({}, e, {
              value: ee
            }),
            group: w({}, e, {
              value: re
            }),
            groupCollapsed: w({}, e, {
              value: te
            }),
            groupEnd: w({}, e, {
              value: ne
            })
          });
        }
        $ < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
      var s;
      s = U.current, U.current = null, Ce();
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
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (g) {
              n = g;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), p = n.stack.split(`
`), u = o.length - 1, c = p.length - 1; u >= 1 && c >= 0 && o[u] !== p[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (o[u] !== p[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || o[u] !== p[c]) {
                    var v = `
` + o[u].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, v), v;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = s, $e(), Error.prepareStackTrace = i;
      }
      var x = e ? e.displayName || e.name : "", ge = x ? N(x) : "";
      return typeof e == "function" && I.set(e, ge), ge;
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
        case y:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Fe(e.render);
          case m:
            return A(e.type, r, t);
          case E: {
            var n = e, i = n._payload, s = n._init;
            try {
              return A(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, se = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        se.setExtraStackFrame(t);
      } else
        se.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var a in e)
          if (s(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              o = u;
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
        return ue(e), !1;
      } catch {
        return !0;
      }
    }
    function ue(e) {
      return "" + e;
    }
    function ce(e) {
      if (Le(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), ue(e);
    }
    var D = S.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, fe, z;
    z = {};
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
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = b(D.current.type);
        z[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(D.current.type), e.ref), z[t] = !0);
      }
    }
    function ze(e, r) {
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
    function Be(e, r) {
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
    var qe = function(e, r, t, n, i, s, a) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: a,
        _owner: s
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
        var s, a = {}, o = null, p = null;
        t !== void 0 && (ce(t), o = "" + t), Me(r) && (ce(r.key), o = "" + r.key), Ye(r) && (p = r.ref, Ve(r, i));
        for (s in r)
          W.call(r, s) && !Ue.hasOwnProperty(s) && (a[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            a[s] === void 0 && (a[s] = u[s]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ze(a, c), p && Be(a, c);
        }
        return qe(e, o, p, i, n, D.current, a);
      }
    }
    var B = S.ReactCurrentOwner, pe = S.ReactDebugCurrentFrame;
    function j(e) {
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
        if (B.current) {
          var e = b(B.current.type);
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
        e && e._owner && e._owner !== B.current && (n = " It was passed a child from " + b(e._owner.type) + "."), j(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
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
            for (var s = i.call(e), a; !(a = s.next()).done; )
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
          var n = b(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = b(r);
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
            j(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function be(e, r, t, n, i, s) {
      {
        var a = Te(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? o += p : o += de();
          var u;
          e === null ? u = "null" : V(e) ? u = "array" : e !== void 0 && e.$$typeof === h ? (u = "<" + (b(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, o);
        }
        var c = Je(e, r, t, i, s);
        if (c == null)
          return c;
        if (a) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (V(v)) {
                for (var x = 0; x < v.length; x++)
                  me(v[x], e);
                Object.freeze && Object.freeze(v);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(v, e);
        }
        return e === _ ? Ke(c) : Xe(c), c;
      }
    }
    function Ze(e, r, t) {
      return be(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return be(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    lr.Fragment = _, lr.jsx = er, lr.jsxs = rr;
  }()), lr;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = zr() : d.exports = Br();
})(dr);
const or = dr.exports.jsx, fr = dr.exports.jsxs, qr = () => /* @__PURE__ */ or(Mr, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ fr(Vr, {
    children: [/* @__PURE__ */ fr(mr, {
      children: [/* @__PURE__ */ or(cr, {
        delay: !0
      }), /* @__PURE__ */ or(cr, {})]
    }), /* @__PURE__ */ fr(mr, {
      children: [/* @__PURE__ */ or(cr, {}), /* @__PURE__ */ or(cr, {
        delay: !0
      })]
    })]
  })
}), Jr = he.div``;
var Sr = { exports: {} }, ar = {};
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
function Gr() {
  if (hr)
    return ar;
  hr = 1;
  var d = _e, h = Symbol.for("react.element"), k = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, T = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(R, l, O) {
    var y, m = {}, E = null, F = null;
    O !== void 0 && (E = "" + O), l.key !== void 0 && (E = "" + l.key), l.ref !== void 0 && (F = l.ref);
    for (y in l)
      _.call(l, y) && !P.hasOwnProperty(y) && (m[y] = l[y]);
    if (R && R.defaultProps)
      for (y in l = R.defaultProps, l)
        m[y] === void 0 && (m[y] = l[y]);
    return { $$typeof: h, type: R, key: E, ref: F, props: m, _owner: T.current };
  }
  return ar.Fragment = k, ar.jsx = C, ar.jsxs = C, ar;
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
function Hr() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var d = _e, h = Symbol.for("react.element"), k = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), R = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var s = t.map(function(a) {
          return String(a);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, Oe = !1, Se = !1, je = !1, xe = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === P || xe || e === T || e === O || e === y || je || e === F || ke || Oe || Se || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === m || e.$$typeof === C || e.$$typeof === R || e.$$typeof === l || e.$$typeof === H || e.getModuleId !== void 0));
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
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case k:
          return "Portal";
        case P:
          return "Profiler";
        case T:
          return "StrictMode";
        case O:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return X(r) + ".Consumer";
          case C:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return Pe(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case E: {
            var i = e, s = i._payload, a = i._init;
            try {
              return b(a(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, $ = 0, K, Z, Q, ee, re, te, ne;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ce() {
      {
        if ($ === 0) {
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
        $++;
      }
    }
    function $e() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: K
            }),
            info: w({}, e, {
              value: Z
            }),
            warn: w({}, e, {
              value: Q
            }),
            error: w({}, e, {
              value: ee
            }),
            group: w({}, e, {
              value: re
            }),
            groupCollapsed: w({}, e, {
              value: te
            }),
            groupEnd: w({}, e, {
              value: ne
            })
          });
        }
        $ < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
      var s;
      s = U.current, U.current = null, Ce();
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
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (g) {
              n = g;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var o = g.stack.split(`
`), p = n.stack.split(`
`), u = o.length - 1, c = p.length - 1; u >= 1 && c >= 0 && o[u] !== p[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (o[u] !== p[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || o[u] !== p[c]) {
                    var v = `
` + o[u].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, v), v;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = s, $e(), Error.prepareStackTrace = i;
      }
      var x = e ? e.displayName || e.name : "", ge = x ? N(x) : "";
      return typeof e == "function" && I.set(e, ge), ge;
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
        case y:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Fe(e.render);
          case m:
            return A(e.type, r, t);
          case E: {
            var n = e, i = n._payload, s = n._init;
            try {
              return A(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, se = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        se.setExtraStackFrame(t);
      } else
        se.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var s = Function.call.bind(W);
        for (var a in e)
          if (s(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              o = u;
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
        return ue(e), !1;
      } catch {
        return !0;
      }
    }
    function ue(e) {
      return "" + e;
    }
    function ce(e) {
      if (Le(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), ue(e);
    }
    var D = S.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, fe, z;
    z = {};
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
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = b(D.current.type);
        z[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(D.current.type), e.ref), z[t] = !0);
      }
    }
    function ze(e, r) {
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
    function Be(e, r) {
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
    var qe = function(e, r, t, n, i, s, a) {
      var o = {
        $$typeof: h,
        type: e,
        key: r,
        ref: t,
        props: a,
        _owner: s
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
        var s, a = {}, o = null, p = null;
        t !== void 0 && (ce(t), o = "" + t), Me(r) && (ce(r.key), o = "" + r.key), Ye(r) && (p = r.ref, Ve(r, i));
        for (s in r)
          W.call(r, s) && !Ue.hasOwnProperty(s) && (a[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            a[s] === void 0 && (a[s] = u[s]);
        }
        if (o || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ze(a, c), p && Be(a, c);
        }
        return qe(e, o, p, i, n, D.current, a);
      }
    }
    var B = S.ReactCurrentOwner, pe = S.ReactDebugCurrentFrame;
    function j(e) {
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
        if (B.current) {
          var e = b(B.current.type);
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
        e && e._owner && e._owner !== B.current && (n = " It was passed a child from " + b(e._owner.type) + "."), j(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
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
            for (var s = i.call(e), a; !(a = s.next()).done; )
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
          var n = b(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = b(r);
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
            j(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function be(e, r, t, n, i, s) {
      {
        var a = Te(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? o += p : o += de();
          var u;
          e === null ? u = "null" : V(e) ? u = "array" : e !== void 0 && e.$$typeof === h ? (u = "<" + (b(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, o);
        }
        var c = Je(e, r, t, i, s);
        if (c == null)
          return c;
        if (a) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (V(v)) {
                for (var x = 0; x < v.length; x++)
                  me(v[x], e);
                Object.freeze && Object.freeze(v);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(v, e);
        }
        return e === _ ? Ke(c) : Xe(c), c;
      }
    }
    function Ze(e, r, t) {
      return be(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return be(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    ir.Fragment = _, ir.jsx = er, ir.jsxs = rr;
  }()), ir;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = Gr() : d.exports = Hr();
})(Sr);
const pr = Sr.exports.jsx, Zr = ({
  isLoading: d,
  buttonProps: h,
  children: k
}) => /* @__PURE__ */ pr(Jr, {
  children: /* @__PURE__ */ pr(Ur, {
    status: d ? "pending" : "default",
    ...h,
    children: d ? /* @__PURE__ */ pr(qr, {}) : k
  })
});
export {
  Zr as default
};
