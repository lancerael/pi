import fr, { createGlobalStyle as sr, css as lr } from "styled-components";
import Se from "react";
const cr = {
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
}, ur = {
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
}, dr = {
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
}, br = {
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
}, pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: cr,
  rose: ur,
  electron: dr,
  avocado: br
}, Symbol.toStringTag, { value: "Module" }));
var Te = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function vr() {
  if (Ee)
    return F;
  Ee = 1;
  var s = Se, u = Symbol.for("react.element"), v = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, R = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(x, d, k) {
    var h, y = {}, S = null, I = null;
    k !== void 0 && (S = "" + k), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (I = d.ref);
    for (h in d)
      g.call(d, h) && !w.hasOwnProperty(h) && (y[h] = d[h]);
    if (x && x.defaultProps)
      for (h in d = x.defaultProps, d)
        y[h] === void 0 && (y[h] = d[h]);
    return { $$typeof: u, type: x, key: S, ref: I, props: y, _owner: R.current };
  }
  return F.Fragment = v, F.jsx = j, F.jsxs = j, F;
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
var Re;
function gr() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Se, u = Symbol.for("react.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), H = Symbol.iterator, we = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[we];
      return typeof r == "function" ? r : null;
    }
    var O = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Oe("error", e, t);
      }
    }
    function Oe(e, r, t) {
      {
        var a = O.ReactDebugCurrentFrame, i = a.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var f = t.map(function(o) {
          return String(o);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ce = !1, Pe = !1, je = !1, $e = !1, De = !1, X;
    X = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === w || De || e === R || e === k || e === h || $e || e === I || Ce || Pe || je || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === y || e.$$typeof === j || e.$$typeof === x || e.$$typeof === d || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case v:
          return "Portal";
        case w:
          return "Profiler";
        case R:
          return "StrictMode";
        case k:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return Z(r) + ".Consumer";
          case j:
            var t = e;
            return Z(t._context) + ".Provider";
          case d:
            return Ae(e, e.render, "ForwardRef");
          case y:
            var a = e.displayName || null;
            return a !== null ? a : _(e.type) || "Memo";
          case S: {
            var i = e, f = i._payload, o = i._init;
            try {
              return _(o(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, $ = 0, Q, ee, re, te, ae, ne, oe;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function Ie() {
      {
        if ($ === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ae = console.group, ne = console.groupCollapsed, oe = console.groupEnd;
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
        $++;
      }
    }
    function Me() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: Q
            }),
            info: T({}, e, {
              value: ee
            }),
            warn: T({}, e, {
              value: re
            }),
            error: T({}, e, {
              value: te
            }),
            group: T({}, e, {
              value: ae
            }),
            groupCollapsed: T({}, e, {
              value: ne
            }),
            groupEnd: T({}, e, {
              value: oe
            })
          });
        }
        $ < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = O.ReactCurrentDispatcher, N;
    function M(e, r, t) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (i) {
            var a = i.stack.trim().match(/\n( *(at )?)/);
            N = a && a[1] || "";
          }
        return `
` + N + e;
      }
    }
    var U = !1, W;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      W = new We();
    }
    function fe(e, r) {
      if (!e || U)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      U = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = L.current, L.current = null, Ie();
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
              a = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              a = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            a = E;
          }
          e();
        }
      } catch (E) {
        if (E && a && typeof E.stack == "string") {
          for (var n = E.stack.split(`
`), p = a.stack.split(`
`), l = n.length - 1, c = p.length - 1; l >= 1 && c >= 0 && n[l] !== p[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (n[l] !== p[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || n[l] !== p[c]) {
                    var m = `
` + n[l].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, m), m;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        U = !1, L.current = f, Me(), Error.prepareStackTrace = i;
      }
      var P = e ? e.displayName || e.name : "", _e = P ? M(P) : "";
      return typeof e == "function" && W.set(e, _e), _e;
    }
    function Ye(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case k:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ye(e.render);
          case y:
            return Y(e.type, r, t);
          case S: {
            var a = e, i = a._payload, f = a._init;
            try {
              return Y(f(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, se = {}, le = O.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, i) {
      {
        var f = Function.call.bind(V);
        for (var o in e)
          if (f(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              n = l;
            }
            n && !(n instanceof Error) && (B(i), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), B(null)), n instanceof Error && !(n.message in se) && (se[n.message] = !0, B(i), b("Failed %s type: %s", t, n.message), B(null));
          }
      }
    }
    var Le = Array.isArray;
    function q(e) {
      return Le(e);
    }
    function Ne(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ue(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function ue(e) {
      if (Ue(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(e)), ce(e);
    }
    var D = O.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, be, z;
    z = {};
    function ze(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = _(D.current.type);
        z[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(D.current.type), e.ref), z[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          de || (de = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          be || (be = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, a, i, f, o) {
      var n = {
        $$typeof: u,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: f
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function Ze(e, r, t, a, i) {
      {
        var f, o = {}, n = null, p = null;
        t !== void 0 && (ue(t), n = "" + t), Ge(r) && (ue(r.key), n = "" + r.key), ze(r) && (p = r.ref, Je(r, i));
        for (f in r)
          V.call(r, f) && !qe.hasOwnProperty(f) && (o[f] = r[f]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (f in l)
            o[f] === void 0 && (o[f] = l[f]);
        }
        if (n || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Ke(o, c), p && He(o, c);
        }
        return Xe(e, n, p, i, a, D.current, o);
      }
    }
    var G = O.ReactCurrentOwner, pe = O.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function ve() {
      {
        if (G.current) {
          var e = _(G.current.type);
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
    var ge = {};
    function er(e) {
      {
        var r = ve();
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
        if (ge[t])
          return;
        ge[t] = !0;
        var a = "";
        e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + _(e._owner.type) + "."), C(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), C(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            K(a) && he(a, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ke(e);
          if (typeof i == "function" && i !== e.entries)
            for (var f = i.call(e), o; !(o = f.next()).done; )
              K(o.value) && he(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = _(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = _(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            C(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    function ye(e, r, t, a, i, f) {
      {
        var o = Fe(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Qe(i);
          p ? n += p : n += ve();
          var l;
          e === null ? l = "null" : q(e) ? l = "array" : e !== void 0 && e.$$typeof === u ? (l = "<" + (_(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, n);
        }
        var c = Ze(e, r, t, i, f);
        if (c == null)
          return c;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (a)
              if (q(m)) {
                for (var P = 0; P < m.length; P++)
                  me(m[P], e);
                Object.freeze && Object.freeze(m);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(m, e);
        }
        return e === g ? tr(c) : rr(c), c;
      }
    }
    function ar(e, r, t) {
      return ye(e, r, t, !0);
    }
    function nr(e, r, t) {
      return ye(e, r, t, !1);
    }
    var or = nr, ir = ar;
    A.Fragment = g, A.jsx = or, A.jsxs = ir;
  }()), A;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = vr() : s.exports = gr();
})(Te);
const hr = Te.exports.jsx, mr = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, yr = (s = "pebble") => ({
  colors: pr[s],
  ...mr
}), xe = (s) => Object.entries(s).reduce(
  (u, [v, g]) => `${u} --${v}: ${g};`,
  ""
), _r = ({ colors: { light: s, dark: u = s }, fonts: v, fontSizes: g } = yr()) => sr`
  :root {
    ${xe(s)}
    font-family: ${v.join(", ")};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${xe(u)}
    }
  }
`;
_r();
const Er = ({
  color: s,
  isSpecial: u
} = {}) => {
  const v = u ? "special" : "border", g = u ? "specialText" : "textSoft", R = u ? "specialBg" : "subtle";
  return `
    border: 3px solid var(--${v});
    color: ${s || `var(--${g})`};
    background-color: var(--${R});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `;
}, Rr = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, xr = fr.button(
  ({ status: s, minWidth: u, margin: v }) => lr`
    ${Er({ color: s === "default" ? "" : Rr[s] })}
    min-width: ${u};
    margin: ${v};
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
), wr = ({
  children: s,
  status: u = "default",
  dataSelector: v = "pi-lib-button",
  minWidth: g = "220px",
  margin: R = "10px",
  ...w
}) => /* @__PURE__ */ hr(xr, {
  status: u,
  ...w,
  minWidth: g,
  margin: R,
  "data-selector": v,
  children: s
});
export {
  wr as default
};
