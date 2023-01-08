import Me, { useRef as br, useState as pr, useCallback as vr, useEffect as gr } from "react";
import mr, { createGlobalStyle as hr, css as yr } from "styled-components";
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, We = "Expected a function", $e = 0 / 0, Er = "[object Symbol]", xr = /^\s+|\s+$/g, _r = /^[-+]0x[0-9a-f]+$/i, Rr = /^0b[01]+$/i, Tr = /^0o[0-7]+$/i, Sr = parseInt, kr = typeof H == "object" && H && H.Object === Object && H, wr = typeof self == "object" && self && self.Object === Object && self, Or = kr || wr || Function("return this")(), jr = Object.prototype, Cr = jr.toString, Pr = Math.max, $r = Math.min, se = function() {
  return Or.Date.now();
};
function Fr(n, i, s) {
  var l, m, T, R, b, u, x = 0, p = !1, h = !1, k = !0;
  if (typeof n != "function")
    throw new TypeError(We);
  i = Fe(i) || 0, K(s) && (p = !!s.leading, h = "maxWait" in s, T = h ? Pr(Fe(s.maxWait) || 0, i) : T, k = "trailing" in s ? !!s.trailing : k);
  function P(v) {
    var O = l, $ = m;
    return l = m = void 0, x = v, R = n.apply($, O), R;
  }
  function B(v) {
    return x = v, b = setTimeout(w, i), p ? P(v) : R;
  }
  function X(v) {
    var O = v - u, $ = v - x, M = i - O;
    return h ? $r(M, T - $) : M;
  }
  function V(v) {
    var O = v - u, $ = v - x;
    return u === void 0 || O >= i || O < 0 || h && $ >= T;
  }
  function w() {
    var v = se();
    if (V(v))
      return E(v);
    b = setTimeout(w, X(v));
  }
  function E(v) {
    return b = void 0, k && l ? P(v) : (l = m = void 0, R);
  }
  function Z() {
    b !== void 0 && clearTimeout(b), x = 0, l = u = m = b = void 0;
  }
  function Q() {
    return b === void 0 ? R : E(se());
  }
  function A() {
    var v = se(), O = V(v);
    if (l = arguments, m = this, u = v, O) {
      if (b === void 0)
        return B(u);
      if (h)
        return b = setTimeout(w, i), P(u);
    }
    return b === void 0 && (b = setTimeout(w, i)), R;
  }
  return A.cancel = Z, A.flush = Q, A;
}
function Dr(n, i, s) {
  var l = !0, m = !0;
  if (typeof n != "function")
    throw new TypeError(We);
  return K(s) && (l = "leading" in s ? !!s.leading : l, m = "trailing" in s ? !!s.trailing : m), Fr(n, i, {
    leading: l,
    maxWait: i,
    trailing: m
  });
}
function K(n) {
  var i = typeof n;
  return !!n && (i == "object" || i == "function");
}
function Ir(n) {
  return !!n && typeof n == "object";
}
function Ar(n) {
  return typeof n == "symbol" || Ir(n) && Cr.call(n) == Er;
}
function Fe(n) {
  if (typeof n == "number")
    return n;
  if (Ar(n))
    return $e;
  if (K(n)) {
    var i = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = K(i) ? i + "" : i;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(xr, "");
  var s = Rr.test(n);
  return s || Tr.test(n) ? Sr(n.slice(2), s ? 2 : 8) : _r.test(n) ? $e : +n;
}
var Mr = Dr;
const Wr = {
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
}, Lr = {
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
}, Yr = {
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
}, Nr = {
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
}, Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: Wr,
  rose: Lr,
  electron: Yr,
  avocado: Nr
}, Symbol.toStringTag, { value: "Module" }));
var Le = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Vr() {
  if (De)
    return Y;
  De = 1;
  var n = Me, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(b, u, x) {
    var p, h = {}, k = null, P = null;
    x !== void 0 && (k = "" + x), u.key !== void 0 && (k = "" + u.key), u.ref !== void 0 && (P = u.ref);
    for (p in u)
      l.call(u, p) && !T.hasOwnProperty(p) && (h[p] = u[p]);
    if (b && b.defaultProps)
      for (p in u = b.defaultProps, u)
        h[p] === void 0 && (h[p] = u[p]);
    return { $$typeof: i, type: b, key: k, ref: P, props: h, _owner: m.current };
  }
  return Y.Fragment = s, Y.jsx = R, Y.jsxs = R, Y;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Ur() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Me, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), b = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), B = Symbol.iterator, X = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[X];
      return typeof r == "function" ? r : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Z("error", e, t);
      }
    }
    function Z(e, r, t) {
      {
        var a = w.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(f) {
          return String(f);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Q = !1, A = !1, v = !1, O = !1, $ = !1, M;
    M = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === T || $ || e === m || e === x || e === p || O || e === P || Q || A || v || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === h || e.$$typeof === R || e.$$typeof === b || e.$$typeof === u || e.$$typeof === M || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case T:
          return "Profiler";
        case m:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ce(r) + ".Consumer";
          case R:
            var t = e;
            return ce(t._context) + ".Provider";
          case u:
            return Ne(e, e.render, "ForwardRef");
          case h:
            var a = e.displayName || null;
            return a !== null ? a : j(e.type) || "Memo";
          case k: {
            var c = e, d = c._payload, f = c._init;
            try {
              return j(f(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, le, ue, de, be, pe, ve, ge;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Be() {
      {
        if (W === 0) {
          le = console.log, ue = console.info, de = console.warn, be = console.error, pe = console.group, ve = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        W++;
      }
    }
    function Ve() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: le
            }),
            info: F({}, e, {
              value: ue
            }),
            warn: F({}, e, {
              value: de
            }),
            error: F({}, e, {
              value: be
            }),
            group: F({}, e, {
              value: pe
            }),
            groupCollapsed: F({}, e, {
              value: ve
            }),
            groupEnd: F({}, e, {
              value: ge
            })
          });
        }
        W < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = w.ReactCurrentDispatcher, re;
    function U(e, r, t) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            re = a && a[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, G;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Ue();
    }
    function he(e, r) {
      if (!e || te)
        return "";
      {
        var t = G.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      te = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ee.current, ee.current = null, Be();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (C) {
              a = C;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), _ = a.stack.split(`
`), g = o.length - 1, y = _.length - 1; g >= 1 && y >= 0 && o[g] !== _[y]; )
            y--;
          for (; g >= 1 && y >= 0; g--, y--)
            if (o[g] !== _[y]) {
              if (g !== 1 || y !== 1)
                do
                  if (g--, y--, y < 0 || o[g] !== _[y]) {
                    var S = `
` + o[g].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, S), S;
                  }
                while (g >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = d, Ve(), Error.prepareStackTrace = c;
      }
      var I = e ? e.displayName || e.name : "", Pe = I ? U(I) : "";
      return typeof e == "function" && G.set(e, Pe), Pe;
    }
    function Ge(e, r, t) {
      return he(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, qe(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case x:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ge(e.render);
          case h:
            return q(e.type, r, t);
          case k: {
            var a = e, c = a._payload, d = a._init;
            try {
              return q(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ye = {}, Ee = w.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function ze(e, r, t, a, c) {
      {
        var d = Function.call.bind(z);
        for (var f in e)
          if (d(e, f)) {
            var o = void 0;
            try {
              if (typeof e[f] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[f](r, f, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              o = g;
            }
            o && !(o instanceof Error) && (J(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, f, typeof o), J(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, J(c), E("Failed %s type: %s", t, o.message), J(null));
          }
      }
    }
    var Je = Array.isArray;
    function ne(e) {
      return Je(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ke(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), xe(e);
    }
    var L = w.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Te, ae;
    ae = {};
    function Ze(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = j(L.current.type);
        ae[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(L.current.type), e.ref), ae[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, a, c, d, f) {
      var o = {
        $$typeof: i,
        type: e,
        key: r,
        ref: t,
        props: f,
        _owner: d
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
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, a, c) {
      {
        var d, f = {}, o = null, _ = null;
        t !== void 0 && (_e(t), o = "" + t), Qe(r) && (_e(r.key), o = "" + r.key), Ze(r) && (_ = r.ref, er(r, c));
        for (d in r)
          z.call(r, d) && !Xe.hasOwnProperty(d) && (f[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            f[d] === void 0 && (f[d] = g[d]);
        }
        if (o || _) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(f, y), _ && tr(f, y);
        }
        return nr(e, o, _, c, a, L.current, f);
      }
    }
    var oe = w.ReactCurrentOwner, Se = w.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function ke() {
      {
        if (oe.current) {
          var e = j(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var we = {};
    function ir(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (we[t])
          return;
        we[t] = !0;
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + j(e._owner.type) + "."), D(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            fe(a) && Oe(a, r);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = V(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), f; !(f = d.next()).done; )
              fe(f.value) && Oe(f.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = j(r);
          ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var c = j(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Ce(e, r, t, a, c, d) {
      {
        var f = Ye(e);
        if (!f) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = or(c);
          _ ? o += _ : o += ke();
          var g;
          e === null ? g = "null" : ne(e) ? g = "array" : e !== void 0 && e.$$typeof === i ? (g = "<" + (j(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, o);
        }
        var y = ar(e, r, t, c, d);
        if (y == null)
          return y;
        if (f) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (ne(S)) {
                for (var I = 0; I < S.length; I++)
                  je(S[I], e);
                Object.freeze && Object.freeze(S);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(S, e);
        }
        return e === l ? sr(y) : fr(y), y;
      }
    }
    function cr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = lr, dr = cr;
    N.Fragment = l, N.jsx = ur, N.jsxs = dr;
  }()), N;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Vr() : n.exports = Ur();
})(Le);
const Gr = Le.exports.jsx, qr = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, zr = (n = "pebble") => ({
  colors: Br[n],
  ...qr
}), Ae = (n) => Object.entries(n).reduce(
  (i, [s, l]) => `${i} --${s}: ${l};`,
  ""
), Jr = ({ colors: { light: n, dark: i = n }, fonts: s, fontSizes: l } = zr()) => hr`
  :root {
    ${Ae(n)}
    font-family: ${s.join(", ")};
    background-color: var(--bg);
    color: var(--text);
    
    & * {
      transition: all 0.2s;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${Ae(i)}
    }
  }
`;
Jr();
const Hr = ({
  color: n,
  isSpecial: i
} = {}) => {
  const s = i ? "special" : "border", l = i ? "specialText" : "textSoft", m = i ? "specialBg" : "subtle";
  return `
    border: 3px solid var(--${s});
    color: ${n || `var(--${l})`};
    background-color: var(--${m});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `;
}, Kr = mr.div(
  ({ isVisible: n = !1 }) => yr`
    position: absolute;
    transition: all 0.2s;
    opacity: ${n ? 0.9 : 0};
    ${Hr()}
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
), Qr = ({
  children: n,
  isVisible: i = !1,
  x: s = 0,
  y: l = 0
}) => {
  const m = br(null), [T, R] = pr({
    x: s,
    y: l
  }), b = vr((u, x) => {
    var p, h;
    return R({
      x: u - ((h = (p = m.current) == null ? void 0 : p.clientWidth) != null ? h : 0) / 2,
      y: x + 24
    });
  }, [m.current]);
  return gr(() => {
    b(s, l);
    const u = Mr(({
      clientX: p,
      clientY: h
    }) => !s && !l && b(p, h), 100), x = () => {
      removeEventListener("mousemove", u);
    };
    return s && l ? x() : addEventListener("mousemove", u), x;
  }, [s, l]), /* @__PURE__ */ Gr(Kr, {
    ref: m,
    isVisible: i,
    children: n,
    style: {
      left: T.x,
      top: T.y
    }
  });
};
export {
  Qr as default
};
