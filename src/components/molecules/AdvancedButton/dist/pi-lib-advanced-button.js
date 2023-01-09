import he, { css as Rr, createGlobalStyle as kr, keyframes as Sr } from "styled-components";
import _e from "react";
const xr = {
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
}, Or = {
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
}, jr = {
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
}, Tr = {
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
}, Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: xr,
  rose: Or,
  electron: jr,
  avocado: Tr
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
var dr;
function Cr() {
  if (dr)
    return tr;
  dr = 1;
  var y = _e, b = Symbol.for("react.element"), R = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, T = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(S, u, k) {
    var d, g = {}, w = null, F = null;
    k !== void 0 && (w = "" + k), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (d in u)
      _.call(u, d) && !D.hasOwnProperty(d) && (g[d] = u[d]);
    if (S && S.defaultProps)
      for (d in u = S.defaultProps, u)
        g[d] === void 0 && (g[d] = u[d]);
    return { $$typeof: b, type: S, key: w, ref: F, props: g, _owner: T.current };
  }
  return tr.Fragment = R, tr.jsx = P, tr.jsxs = P, tr;
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
var yr;
function $r() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var y = _e, b = Symbol.for("react.element"), R = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), S = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ee = !1, ke = !1, xe = !1, Oe = !1, je = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === D || je || e === T || e === k || e === d || Oe || e === F || Ee || ke || xe || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === g || e.$$typeof === P || e.$$typeof === S || e.$$typeof === u || e.$$typeof === H || e.getModuleId !== void 0));
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
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case R:
          return "Portal";
        case D:
          return "Profiler";
        case T:
          return "StrictMode";
        case k:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return X(r) + ".Consumer";
          case P:
            var t = e;
            return X(t._context) + ".Provider";
          case u:
            return Pe(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : m(e.type) || "Memo";
          case w: {
            var i = e, c = i._payload, o = i._init;
            try {
              return m(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, C = 0, K, Z, Q, ee, re, te, ne;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function Ce() {
      {
        if (C === 0) {
          K = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ae,
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
        C++;
      }
    }
    function $e() {
      {
        if (C--, C === 0) {
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
        C < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = x.ReactCurrentDispatcher, U;
    function N(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var Y = !1, I;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      I = new De();
    }
    function oe(e, r) {
      if (!e || Y)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Y = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = M.current, M.current = null, Ce();
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
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, f = p.length - 1; s >= 1 && f >= 0 && a[s] !== p[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== p[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== p[f]) {
                    var v = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, v), v;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Y = !1, M.current = c, $e(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", me = j ? N(j) : "";
      return typeof e == "function" && I.set(e, me), me;
    }
    function Fe(e, r, t) {
      return oe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return oe(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case k:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Fe(e.render);
          case g:
            return A(e.type, r, t);
          case w: {
            var n = e, i = n._payload, c = n._init;
            try {
              return A(c(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, ce = x.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var c = Function.call.bind(W);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(i), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in ie) && (ie[a.message] = !0, L(i), l("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Ae = Array.isArray;
    function B(e) {
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
    function fe(e) {
      if (Le(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), se(e);
    }
    var $ = x.ReactCurrentOwner, Me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ue, le, V;
    V = {};
    function Ue(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ye(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Be(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = m($.current.type);
        V[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m($.current.type), e.ref), V[t] = !0);
      }
    }
    function Ve(e, r) {
      {
        var t = function() {
          ue || (ue = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          le || (le = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, n, i, c, o) {
      var a = {
        $$typeof: b,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: c
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
    function Je(e, r, t, n, i) {
      {
        var c, o = {}, a = null, p = null;
        t !== void 0 && (fe(t), a = "" + t), Ye(r) && (fe(r.key), a = "" + r.key), Ue(r) && (p = r.ref, Be(r, i));
        for (c in r)
          W.call(r, c) && !Me.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (c in s)
            o[c] === void 0 && (o[c] = s[c]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ve(o, f), p && ze(o, f);
        }
        return qe(e, a, p, i, n, $.current, o);
      }
    }
    var z = x.ReactCurrentOwner, pe = x.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function de() {
      {
        if (z.current) {
          var e = m(z.current.type);
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
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + m(e._owner.type) + "."), O(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            J(n) && ve(n, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Se(e);
          if (typeof i == "function" && i !== e.entries)
            for (var c = i.call(e), o; !(o = c.next()).done; )
              J(o.value) && ve(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === u || r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = m(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function ge(e, r, t, n, i, c) {
      {
        var o = Te(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? a += p : a += de();
          var s;
          e === null ? s = "null" : B(e) ? s = "array" : e !== void 0 && e.$$typeof === b ? (s = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Je(e, r, t, i, c);
        if (f == null)
          return f;
        if (o) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (B(v)) {
                for (var j = 0; j < v.length; j++)
                  be(v[j], e);
                Object.freeze && Object.freeze(v);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              be(v, e);
        }
        return e === _ ? Ke(f) : Xe(f), f;
      }
    }
    function Ze(e, r, t) {
      return ge(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return ge(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    cr.Fragment = _, cr.jsx = er, cr.jsxs = rr;
  }()), cr;
}
(function(y) {
  process.env.NODE_ENV === "production" ? y.exports = Cr() : y.exports = $r();
})(wr);
const Dr = wr.exports.jsx, Fr = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, Nr = (y = "pebble") => ({
  colors: Pr[y],
  ...Fr
}), vr = (y) => Object.entries(y).reduce(
  (b, [R, _]) => `${b} --${R}: ${_};`,
  ""
), Ir = ({ colors: { light: y, dark: b = y }, fonts: R, fontSizes: _ } = Nr()) => kr`
  :root {
    ${vr(y)}
    font-family: ${R.join(", ")};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${vr(b)}
    }
  }
`;
Ir();
const Ar = ({
  color: y,
  isSpecial: b
} = {}) => {
  const R = b ? "special" : "border", _ = b ? "specialText" : "textSoft", T = b ? "specialBg" : "subtle";
  return `
    border: 3px solid var(--${R});
    color: ${y || `var(--${_})`};
    background-color: var(--${T});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `;
}, Wr = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Lr = he.button(
  ({ status: y, minWidth: b, margin: R }) => Rr`
    ${Ar({ color: y === "default" ? "" : Wr[y] })}
    min-width: ${b};
    margin: ${R};
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
), Mr = ({
  children: y,
  status: b = "default",
  dataSelector: R = "pi-lib-button",
  minWidth: _ = "220px",
  margin: T = "10px",
  ...D
}) => /* @__PURE__ */ Dr(Lr, {
  status: b,
  ...D,
  minWidth: _,
  margin: T,
  "data-selector": R,
  children: y
}), Ur = Sr`
  to {
    rotate: 360deg;
  }
`, Yr = Sr`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, Br = he.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`, Vr = he.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Ur} 2s linear infinite;
  margin: 2px;
`, br = he.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, sr = he.div(
  ({ delay: y }) => Rr`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${Yr} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${y ? "animation-delay: 0.3s;" : ""}
  `
);
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
function zr() {
  if (gr)
    return nr;
  gr = 1;
  var y = _e, b = Symbol.for("react.element"), R = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, T = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(S, u, k) {
    var d, g = {}, w = null, F = null;
    k !== void 0 && (w = "" + k), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (d in u)
      _.call(u, d) && !D.hasOwnProperty(d) && (g[d] = u[d]);
    if (S && S.defaultProps)
      for (d in u = S.defaultProps, u)
        g[d] === void 0 && (g[d] = u[d]);
    return { $$typeof: b, type: S, key: w, ref: F, props: g, _owner: T.current };
  }
  return nr.Fragment = R, nr.jsx = P, nr.jsxs = P, nr;
}
var fr = {};
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
function qr() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var y = _e, b = Symbol.for("react.element"), R = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), S = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ee = !1, ke = !1, xe = !1, Oe = !1, je = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === D || je || e === T || e === k || e === d || Oe || e === F || Ee || ke || xe || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === g || e.$$typeof === P || e.$$typeof === S || e.$$typeof === u || e.$$typeof === H || e.getModuleId !== void 0));
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
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case R:
          return "Portal";
        case D:
          return "Profiler";
        case T:
          return "StrictMode";
        case k:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return X(r) + ".Consumer";
          case P:
            var t = e;
            return X(t._context) + ".Provider";
          case u:
            return Pe(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : m(e.type) || "Memo";
          case w: {
            var i = e, c = i._payload, o = i._init;
            try {
              return m(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, C = 0, K, Z, Q, ee, re, te, ne;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function Ce() {
      {
        if (C === 0) {
          K = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ae,
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
        C++;
      }
    }
    function $e() {
      {
        if (C--, C === 0) {
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
        C < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = x.ReactCurrentDispatcher, U;
    function N(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var Y = !1, I;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      I = new De();
    }
    function oe(e, r) {
      if (!e || Y)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Y = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = M.current, M.current = null, Ce();
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
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, f = p.length - 1; s >= 1 && f >= 0 && a[s] !== p[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== p[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== p[f]) {
                    var v = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, v), v;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Y = !1, M.current = c, $e(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", me = j ? N(j) : "";
      return typeof e == "function" && I.set(e, me), me;
    }
    function Fe(e, r, t) {
      return oe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return oe(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case k:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Fe(e.render);
          case g:
            return A(e.type, r, t);
          case w: {
            var n = e, i = n._payload, c = n._init;
            try {
              return A(c(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, ce = x.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var c = Function.call.bind(W);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(i), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in ie) && (ie[a.message] = !0, L(i), l("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Ae = Array.isArray;
    function B(e) {
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
    function fe(e) {
      if (Le(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), se(e);
    }
    var $ = x.ReactCurrentOwner, Me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ue, le, V;
    V = {};
    function Ue(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ye(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Be(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = m($.current.type);
        V[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m($.current.type), e.ref), V[t] = !0);
      }
    }
    function Ve(e, r) {
      {
        var t = function() {
          ue || (ue = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          le || (le = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, n, i, c, o) {
      var a = {
        $$typeof: b,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: c
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
    function Je(e, r, t, n, i) {
      {
        var c, o = {}, a = null, p = null;
        t !== void 0 && (fe(t), a = "" + t), Ye(r) && (fe(r.key), a = "" + r.key), Ue(r) && (p = r.ref, Be(r, i));
        for (c in r)
          W.call(r, c) && !Me.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (c in s)
            o[c] === void 0 && (o[c] = s[c]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ve(o, f), p && ze(o, f);
        }
        return qe(e, a, p, i, n, $.current, o);
      }
    }
    var z = x.ReactCurrentOwner, pe = x.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function de() {
      {
        if (z.current) {
          var e = m(z.current.type);
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
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + m(e._owner.type) + "."), O(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            J(n) && ve(n, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Se(e);
          if (typeof i == "function" && i !== e.entries)
            for (var c = i.call(e), o; !(o = c.next()).done; )
              J(o.value) && ve(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === u || r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = m(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function ge(e, r, t, n, i, c) {
      {
        var o = Te(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? a += p : a += de();
          var s;
          e === null ? s = "null" : B(e) ? s = "array" : e !== void 0 && e.$$typeof === b ? (s = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Je(e, r, t, i, c);
        if (f == null)
          return f;
        if (o) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (B(v)) {
                for (var j = 0; j < v.length; j++)
                  be(v[j], e);
                Object.freeze && Object.freeze(v);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              be(v, e);
        }
        return e === _ ? Ke(f) : Xe(f), f;
      }
    }
    function Ze(e, r, t) {
      return ge(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return ge(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    fr.Fragment = _, fr.jsx = er, fr.jsxs = rr;
  }()), fr;
}
(function(y) {
  process.env.NODE_ENV === "production" ? y.exports = zr() : y.exports = qr();
})(pr);
const ar = pr.exports.jsx, ur = pr.exports.jsxs, Jr = () => /* @__PURE__ */ ar(Br, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ ur(Vr, {
    children: [/* @__PURE__ */ ur(br, {
      children: [/* @__PURE__ */ ar(sr, {
        delay: !0
      }), /* @__PURE__ */ ar(sr, {})]
    }), /* @__PURE__ */ ur(br, {
      children: [/* @__PURE__ */ ar(sr, {}), /* @__PURE__ */ ar(sr, {
        delay: !0
      })]
    })]
  })
}), Gr = he.div``;
var Er = { exports: {} }, or = {};
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
function Hr() {
  if (hr)
    return or;
  hr = 1;
  var y = _e, b = Symbol.for("react.element"), R = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, T = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(S, u, k) {
    var d, g = {}, w = null, F = null;
    k !== void 0 && (w = "" + k), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (d in u)
      _.call(u, d) && !D.hasOwnProperty(d) && (g[d] = u[d]);
    if (S && S.defaultProps)
      for (d in u = S.defaultProps, u)
        g[d] === void 0 && (g[d] = u[d]);
    return { $$typeof: b, type: S, key: w, ref: F, props: g, _owner: T.current };
  }
  return or.Fragment = R, or.jsx = P, or.jsxs = P, or;
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
function Xr() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var y = _e, b = Symbol.for("react.element"), R = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), S = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), G = Symbol.iterator, Re = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[Re];
      return typeof r == "function" ? r : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        we("error", e, t);
      }
    }
    function we(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ee = !1, ke = !1, xe = !1, Oe = !1, je = !1, H;
    H = Symbol.for("react.module.reference");
    function Te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === D || je || e === T || e === k || e === d || Oe || e === F || Ee || ke || xe || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === g || e.$$typeof === P || e.$$typeof === S || e.$$typeof === u || e.$$typeof === H || e.getModuleId !== void 0));
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
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case R:
          return "Portal";
        case D:
          return "Profiler";
        case T:
          return "StrictMode";
        case k:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return X(r) + ".Consumer";
          case P:
            var t = e;
            return X(t._context) + ".Provider";
          case u:
            return Pe(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : m(e.type) || "Memo";
          case w: {
            var i = e, c = i._payload, o = i._init;
            try {
              return m(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, C = 0, K, Z, Q, ee, re, te, ne;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function Ce() {
      {
        if (C === 0) {
          K = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ae,
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
        C++;
      }
    }
    function $e() {
      {
        if (C--, C === 0) {
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
        C < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = x.ReactCurrentDispatcher, U;
    function N(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var Y = !1, I;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      I = new De();
    }
    function oe(e, r) {
      if (!e || Y)
        return "";
      {
        var t = I.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Y = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = M.current, M.current = null, Ce();
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
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, f = p.length - 1; s >= 1 && f >= 0 && a[s] !== p[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== p[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== p[f]) {
                    var v = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, v), v;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Y = !1, M.current = c, $e(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", me = j ? N(j) : "";
      return typeof e == "function" && I.set(e, me), me;
    }
    function Fe(e, r, t) {
      return oe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return oe(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case k:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Fe(e.render);
          case g:
            return A(e.type, r, t);
          case w: {
            var n = e, i = n._payload, c = n._init;
            try {
              return A(c(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ie = {}, ce = x.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ie(e, r, t, n, i) {
      {
        var c = Function.call.bind(W);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (L(i), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), L(null)), a instanceof Error && !(a.message in ie) && (ie[a.message] = !0, L(i), l("Failed %s type: %s", t, a.message), L(null));
          }
      }
    }
    var Ae = Array.isArray;
    function B(e) {
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
    function fe(e) {
      if (Le(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(e)), se(e);
    }
    var $ = x.ReactCurrentOwner, Me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ue, le, V;
    V = {};
    function Ue(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ye(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Be(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = m($.current.type);
        V[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m($.current.type), e.ref), V[t] = !0);
      }
    }
    function Ve(e, r) {
      {
        var t = function() {
          ue || (ue = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          le || (le = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, n, i, c, o) {
      var a = {
        $$typeof: b,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: c
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
    function Je(e, r, t, n, i) {
      {
        var c, o = {}, a = null, p = null;
        t !== void 0 && (fe(t), a = "" + t), Ye(r) && (fe(r.key), a = "" + r.key), Ue(r) && (p = r.ref, Be(r, i));
        for (c in r)
          W.call(r, c) && !Me.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (c in s)
            o[c] === void 0 && (o[c] = s[c]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ve(o, f), p && ze(o, f);
        }
        return qe(e, a, p, i, n, $.current, o);
      }
    }
    var z = x.ReactCurrentOwner, pe = x.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = A(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function de() {
      {
        if (z.current) {
          var e = m(z.current.type);
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
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + m(e._owner.type) + "."), O(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            J(n) && ve(n, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Se(e);
          if (typeof i == "function" && i !== e.entries)
            for (var c = i.call(e), o; !(o = c.next()).done; )
              J(o.value) && ve(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === u || r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Ie(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var i = m(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function ge(e, r, t, n, i, c) {
      {
        var o = Te(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ge(i);
          p ? a += p : a += de();
          var s;
          e === null ? s = "null" : B(e) ? s = "array" : e !== void 0 && e.$$typeof === b ? (s = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Je(e, r, t, i, c);
        if (f == null)
          return f;
        if (o) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (B(v)) {
                for (var j = 0; j < v.length; j++)
                  be(v[j], e);
                Object.freeze && Object.freeze(v);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              be(v, e);
        }
        return e === _ ? Ke(f) : Xe(f), f;
      }
    }
    function Ze(e, r, t) {
      return ge(e, r, t, !0);
    }
    function Qe(e, r, t) {
      return ge(e, r, t, !1);
    }
    var er = Qe, rr = Ze;
    ir.Fragment = _, ir.jsx = er, ir.jsxs = rr;
  }()), ir;
}
(function(y) {
  process.env.NODE_ENV === "production" ? y.exports = Hr() : y.exports = Xr();
})(Er);
const lr = Er.exports.jsx, Qr = ({
  isLoading: y,
  buttonProps: b,
  children: R
}) => /* @__PURE__ */ lr(Gr, {
  children: /* @__PURE__ */ lr(Mr, {
    status: y ? "pending" : "default",
    ...b,
    children: y ? /* @__PURE__ */ lr(Jr, {}) : R
  })
});
export {
  Qr as default
};
