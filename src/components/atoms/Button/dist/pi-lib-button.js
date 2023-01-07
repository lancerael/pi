import ur, { createGlobalStyle as sr, css as fr } from "styled-components";
import Se from "react";
const lr = {
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
}, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: lr
}, Symbol.toStringTag, { value: "Module" }));
var Oe = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function dr() {
  if (Re)
    return F;
  Re = 1;
  var s = Se, p = Symbol.for("react.element"), h = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, R = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(S, c, w) {
    var b, y = {}, O = null, I = null;
    w !== void 0 && (O = "" + w), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (I = c.ref);
    for (b in c)
      g.call(c, b) && !T.hasOwnProperty(b) && (y[b] = c[b]);
    if (S && S.defaultProps)
      for (b in c = S.defaultProps, c)
        y[b] === void 0 && (y[b] = c[b]);
    return { $$typeof: p, type: S, key: O, ref: I, props: y, _owner: R.current };
  }
  return F.Fragment = h, F.jsx = j, F.jsxs = j, F;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function vr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Se, p = Symbol.for("react.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), S = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), X = Symbol.iterator, xe = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var C = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ce("error", e, t);
      }
    }
    function Ce(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Pe = !1, ke = !1, je = !1, $e = !1, De = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === T || De || e === R || e === w || e === b || $e || e === I || Pe || ke || je || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === y || e.$$typeof === j || e.$$typeof === S || e.$$typeof === c || e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case h:
          return "Portal";
        case T:
          return "Profiler";
        case R:
          return "StrictMode";
        case w:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return Q(r) + ".Consumer";
          case j:
            var t = e;
            return Q(t._context) + ".Provider";
          case c:
            return Ae(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case O: {
            var i = e, u = i._payload, o = i._init;
            try {
              return _(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, $ = 0, ee, re, te, ne, ae, oe, ie;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ie() {
      {
        if ($ === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, oe = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
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
    function We() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ee
            }),
            info: x({}, e, {
              value: re
            }),
            warn: x({}, e, {
              value: te
            }),
            error: x({}, e, {
              value: ne
            }),
            group: x({}, e, {
              value: ae
            }),
            groupCollapsed: x({}, e, {
              value: oe
            }),
            groupEnd: x({}, e, {
              value: ie
            })
          });
        }
        $ < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = C.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, Y;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ye();
    }
    function se(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = M.current, M.current = null, Ie();
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
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), v = n.stack.split(`
`), f = a.length - 1, l = v.length - 1; f >= 1 && l >= 0 && a[f] !== v[l]; )
            l--;
          for (; f >= 1 && l >= 0; f--, l--)
            if (a[f] !== v[l]) {
              if (f !== 1 || l !== 1)
                do
                  if (f--, l--, l < 0 || a[f] !== v[l]) {
                    var m = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, m), m;
                  }
                while (f >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = u, We(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", Ee = k ? W(k) : "";
      return typeof e == "function" && Y.set(e, Ee), Ee;
    }
    function Le(e, r, t) {
      return se(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ne(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case w:
          return W("Suspense");
        case b:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Le(e.render);
          case y:
            return L(e.type, r, t);
          case O: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, fe = {}, le = C.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var u = Function.call.bind(N);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (U(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, U(i), d("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ve = Array.isArray;
    function z(e) {
      return Ve(e);
    }
    function Me(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function de(e) {
      if (Be(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(e)), ce(e);
    }
    var D = C.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, pe, G;
    G = {};
    function ze(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = _(D.current.type);
        G[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(D.current.type), e.ref), G[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          ve || (ve = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, u, o) {
      var a = {
        $$typeof: p,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: u
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
    function Ze(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (de(t), a = "" + t), Ge(r) && (de(r.key), a = "" + r.key), ze(r) && (v = r.ref, Je(r, i));
        for (u in r)
          N.call(r, u) && !qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            o[u] === void 0 && (o[u] = f[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(o, l), v && He(o, l);
        }
        return Xe(e, a, v, i, n, D.current, o);
      }
    }
    var J = C.ReactCurrentOwner, be = C.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function ge() {
      {
        if (J.current) {
          var e = _(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var me = {};
    function er(e) {
      {
        var r = ge();
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
        var t = er(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + _(e._owner.type) + "."), P(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function ye(e, r) {
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
          var i = we(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && he(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = _(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function _e(e, r, t, n, i, u) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Qe(i);
          v ? a += v : a += ge();
          var f;
          e === null ? f = "null" : z(e) ? f = "array" : e !== void 0 && e.$$typeof === p ? (f = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var l = Ze(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (z(m)) {
                for (var k = 0; k < m.length; k++)
                  ye(m[k], e);
                Object.freeze && Object.freeze(m);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(m, e);
        }
        return e === g ? tr(l) : rr(l), l;
      }
    }
    function nr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ar(e, r, t) {
      return _e(e, r, t, !1);
    }
    var or = ar, ir = nr;
    A.Fragment = g, A.jsx = or, A.jsxs = ir;
  }()), A;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = dr() : s.exports = vr();
})(Oe);
const pr = Oe.exports.jsx, br = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, gr = (s = "pebble") => ({
  colors: cr[s],
  ...br
}), V = (s) => Object.entries(s).reduce(
  (p, [h, g]) => `${p} --${h}: ${g};`,
  ""
), mr = ({
  colors: {
    light: s,
    dark: p = s,
    lightContrast: h = s,
    darkContrast: g = s
  },
  fonts: R,
  fontSizes: T
} = gr()) => sr`
  :root {
    ${V(s)}
    font-family: ${R.join(", ")};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${V(p)}
    }
  }

  @media (prefers-color-scheme: light) and (prefers-contrast: more) {
    :root {
      ${V(h)}
    }
  }

  @media (prefers-color-scheme: dark) and (prefers-contrast: more) {
    :root {
      ${V(g)}
    }
  }
`;
mr();
const hr = (s) => `
  border: 1px solid ${s};
  color: ${s};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, yr = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, _r = "font-family: sans-serif;", Er = ur.button(
  ({ status: s, minWidth: p, margin: h }) => fr`
    ${_r}
    ${hr(yr[s])}
    min-width: ${p};
    margin: ${h};
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
), Sr = ({
  children: s,
  status: p = "default",
  dataSelector: h = "pi-lib-button",
  minWidth: g = "220px",
  margin: R = "10px",
  ...T
}) => /* @__PURE__ */ pr(Er, {
  status: p,
  ...T,
  minWidth: g,
  margin: R,
  "data-selector": h,
  children: s
});
export {
  Sr as default
};
