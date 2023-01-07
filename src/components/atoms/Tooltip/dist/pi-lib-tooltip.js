import Le, { useRef as pr, useState as br, useCallback as gr, useEffect as mr } from "react";
import hr, { createGlobalStyle as yr, css as Er } from "styled-components";
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ye = "Expected a function", De = 0 / 0, _r = "[object Symbol]", Rr = /^\s+|\s+$/g, Tr = /^[-+]0x[0-9a-f]+$/i, xr = /^0b[01]+$/i, Or = /^0o[0-7]+$/i, Sr = parseInt, jr = typeof H == "object" && H && H.Object === Object && H, wr = typeof self == "object" && self && self.Object === Object && self, Cr = jr || wr || Function("return this")(), kr = Object.prototype, Pr = kr.toString, $r = Math.max, Fr = Math.min, se = function() {
  return Cr.Date.now();
};
function Dr(n, f, s) {
  var c, m, x, T, v, l, _ = 0, p = !1, h = !1, S = !0;
  if (typeof n != "function")
    throw new TypeError(Ye);
  f = Ie(f) || 0, X(s) && (p = !!s.leading, h = "maxWait" in s, x = h ? $r(Ie(s.maxWait) || 0, f) : x, S = "trailing" in s ? !!s.trailing : S);
  function P(b) {
    var w = c, $ = m;
    return c = m = void 0, _ = b, T = n.apply($, w), T;
  }
  function U(b) {
    return _ = b, v = setTimeout(j, f), p ? P(b) : T;
  }
  function Z(b) {
    var w = b - l, $ = b - _, W = f - w;
    return h ? Fr(W, x - $) : W;
  }
  function V(b) {
    var w = b - l, $ = b - _;
    return l === void 0 || w >= f || w < 0 || h && $ >= x;
  }
  function j() {
    var b = se();
    if (V(b))
      return E(b);
    v = setTimeout(j, Z(b));
  }
  function E(b) {
    return v = void 0, S && c ? P(b) : (c = m = void 0, T);
  }
  function Q() {
    v !== void 0 && clearTimeout(v), _ = 0, c = l = m = v = void 0;
  }
  function ee() {
    return v === void 0 ? T : E(se());
  }
  function A() {
    var b = se(), w = V(b);
    if (c = arguments, m = this, l = b, w) {
      if (v === void 0)
        return U(l);
      if (h)
        return v = setTimeout(j, f), P(l);
    }
    return v === void 0 && (v = setTimeout(j, f)), T;
  }
  return A.cancel = Q, A.flush = ee, A;
}
function Ir(n, f, s) {
  var c = !0, m = !0;
  if (typeof n != "function")
    throw new TypeError(Ye);
  return X(s) && (c = "leading" in s ? !!s.leading : c, m = "trailing" in s ? !!s.trailing : m), Dr(n, f, {
    leading: c,
    maxWait: f,
    trailing: m
  });
}
function X(n) {
  var f = typeof n;
  return !!n && (f == "object" || f == "function");
}
function Ar(n) {
  return !!n && typeof n == "object";
}
function Wr(n) {
  return typeof n == "symbol" || Ar(n) && Pr.call(n) == _r;
}
function Ie(n) {
  if (typeof n == "number")
    return n;
  if (Wr(n))
    return De;
  if (X(n)) {
    var f = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = X(f) ? f + "" : f;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(Rr, "");
  var s = xr.test(n);
  return s || Or.test(n) ? Sr(n.slice(2), s ? 2 : 8) : Tr.test(n) ? De : +n;
}
var Lr = Ir;
const le = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Yr = {
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
}, Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pebble: Yr
}, Symbol.toStringTag, { value: "Module" }));
var Me = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Nr() {
  if (Ae)
    return M;
  Ae = 1;
  var n = Le, f = Symbol.for("react.element"), s = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(v, l, _) {
    var p, h = {}, S = null, P = null;
    _ !== void 0 && (S = "" + _), l.key !== void 0 && (S = "" + l.key), l.ref !== void 0 && (P = l.ref);
    for (p in l)
      c.call(l, p) && !x.hasOwnProperty(p) && (h[p] = l[p]);
    if (v && v.defaultProps)
      for (p in l = v.defaultProps, l)
        h[p] === void 0 && (h[p] = l[p]);
    return { $$typeof: f, type: v, key: S, ref: P, props: h, _owner: m.current };
  }
  return M.Fragment = s, M.jsx = T, M.jsxs = T, M;
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
var We;
function Ur() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Le, f = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), v = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), U = Symbol.iterator, Z = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Q("error", e, t);
      }
    }
    function Q(e, r, t) {
      {
        var a = j.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var d = t.map(function(i) {
          return String(i);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var ee = !1, A = !1, b = !1, w = !1, $ = !1, W;
    W = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === x || $ || e === m || e === _ || e === p || w || e === P || ee || A || b || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === h || e.$$typeof === T || e.$$typeof === v || e.$$typeof === l || e.$$typeof === W || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case s:
          return "Portal";
        case x:
          return "Profiler";
        case m:
          return "StrictMode";
        case _:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ce(r) + ".Consumer";
          case T:
            var t = e;
            return ce(t._context) + ".Provider";
          case l:
            return Ue(e, e.render, "ForwardRef");
          case h:
            var a = e.displayName || null;
            return a !== null ? a : C(e.type) || "Memo";
          case S: {
            var u = e, d = u._payload, i = u._init;
            try {
              return C(i(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, L = 0, de, ve, pe, be, ge, me, he;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ve() {
      {
        if (L === 0) {
          de = console.log, ve = console.info, pe = console.warn, be = console.error, ge = console.group, me = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
        L++;
      }
    }
    function Be() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: de
            }),
            info: F({}, e, {
              value: ve
            }),
            warn: F({}, e, {
              value: pe
            }),
            error: F({}, e, {
              value: be
            }),
            group: F({}, e, {
              value: ge
            }),
            groupCollapsed: F({}, e, {
              value: me
            }),
            groupEnd: F({}, e, {
              value: he
            })
          });
        }
        L < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = j.ReactCurrentDispatcher, te;
    function B(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            te = a && a[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, G;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Ge();
    }
    function Ee(e, r) {
      if (!e || ne)
        return "";
      {
        var t = G.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ne = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = re.current, re.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (k) {
              a = k;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (k) {
              a = k;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            a = k;
          }
          e();
        }
      } catch (k) {
        if (k && a && typeof k.stack == "string") {
          for (var o = k.stack.split(`
`), R = a.stack.split(`
`), g = o.length - 1, y = R.length - 1; g >= 1 && y >= 0 && o[g] !== R[y]; )
            y--;
          for (; g >= 1 && y >= 0; g--, y--)
            if (o[g] !== R[y]) {
              if (g !== 1 || y !== 1)
                do
                  if (g--, y--, y < 0 || o[g] !== R[y]) {
                    var O = `
` + o[g].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, O), O;
                  }
                while (g >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = d, Be(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", Fe = I ? B(I) : "";
      return typeof e == "function" && G.set(e, Fe), Fe;
    }
    function qe(e, r, t) {
      return Ee(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, ze(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case _:
          return B("Suspense");
        case p:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return qe(e.render);
          case h:
            return q(e.type, r, t);
          case S: {
            var a = e, u = a._payload, d = a._init;
            try {
              return q(d(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, _e = {}, Re = j.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, u) {
      {
        var d = Function.call.bind(z);
        for (var i in e)
          if (d(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var R = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              o = g;
            }
            o && !(o instanceof Error) && (J(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), J(null)), o instanceof Error && !(o.message in _e) && (_e[o.message] = !0, J(u), E("Failed %s type: %s", t, o.message), J(null));
          }
      }
    }
    var He = Array.isArray;
    function ae(e) {
      return He(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function xe(e) {
      if (Xe(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Te(e);
    }
    var Y = j.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Se, oe;
    oe = {};
    function Qe(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = C(Y.current.type);
        oe[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Y.current.type), e.ref), oe[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          Se || (Se = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, u, d, i) {
      var o = {
        $$typeof: f,
        type: e,
        key: r,
        ref: t,
        props: i,
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
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function or(e, r, t, a, u) {
      {
        var d, i = {}, o = null, R = null;
        t !== void 0 && (xe(t), o = "" + t), er(r) && (xe(r.key), o = "" + r.key), Qe(r) && (R = r.ref, rr(r, u));
        for (d in r)
          z.call(r, d) && !Ze.hasOwnProperty(d) && (i[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            i[d] === void 0 && (i[d] = g[d]);
        }
        if (o || R) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && tr(i, y), R && nr(i, y);
        }
        return ar(e, o, R, u, a, Y.current, i);
      }
    }
    var ie = j.ReactCurrentOwner, je = j.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function we() {
      {
        if (ie.current) {
          var e = C(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ce = {};
    function ur(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ie.current && (a = " It was passed a child from " + C(e._owner.type) + "."), D(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            fe(a) && ke(a, r);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = V(e);
          if (typeof u == "function" && u !== e.entries)
            for (var d = u.call(e), i; !(i = d.next()).done; )
              fe(i.value) && ke(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = C(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var u = C(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
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
    function $e(e, r, t, a, u, d) {
      {
        var i = Ne(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ir(u);
          R ? o += R : o += we();
          var g;
          e === null ? g = "null" : ae(e) ? g = "array" : e !== void 0 && e.$$typeof === f ? (g = "<" + (C(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, o);
        }
        var y = or(e, r, t, u, d);
        if (y == null)
          return y;
        if (i) {
          var O = r.children;
          if (O !== void 0)
            if (a)
              if (ae(O)) {
                for (var I = 0; I < O.length; I++)
                  Pe(O[I], e);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(O, e);
        }
        return e === c ? sr(y) : fr(y), y;
      }
    }
    function lr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function cr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var dr = cr, vr = lr;
    N.Fragment = c, N.jsx = dr, N.jsxs = vr;
  }()), N;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Nr() : n.exports = Ur();
})(Me);
const Vr = Me.exports.jsx, Br = {
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}, Gr = (n = "pebble") => ({
  colors: Mr[n],
  ...Br
}), K = (n) => Object.entries(n).reduce(
  (f, [s, c]) => `${f} --${s}: ${c};`,
  ""
), qr = ({
  colors: {
    light: n,
    dark: f = n,
    lightContrast: s = n,
    darkContrast: c = n
  },
  fonts: m,
  fontSizes: x
} = Gr()) => yr`
  :root {
    ${K(n)}
    font-family: ${m.join(", ")};
    background-color: var(--bg);
    color: var(--text);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${K(f)}
    }
  }

  @media (prefers-color-scheme: light) and (prefers-contrast: more) {
    :root {
      ${K(s)}
    }
  }

  @media (prefers-color-scheme: dark) and (prefers-contrast: more) {
    :root {
      ${K(c)}
    }
  }
`;
qr();
const zr = (n) => `
  border: 1px solid ${n};
  color: ${n};
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
`, Jr = hr.div(
  ({ isVisible: n = !1 }) => Er`
    font-family: sans-serif;
    position: absolute;
    transition: all 0.2s;
    opacity: ${n ? 0.8 : 0};
    ${zr(le.default)}
    padding: 4px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${le.default};
      border-right: 1px solid ${le.default};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(80% 0, 100% 0, 100% 100%, 0 100%, 0 80%);
    }
  `
), Xr = ({
  children: n,
  isVisible: f = !1,
  x: s = 0,
  y: c = 0
}) => {
  const m = pr(null), [x, T] = br({
    x: s,
    y: c
  }), v = gr((l, _) => {
    var p, h;
    return T({
      x: l - ((h = (p = m.current) == null ? void 0 : p.clientWidth) != null ? h : 0) / 2,
      y: _ + 24
    });
  }, [m.current]);
  return mr(() => {
    v(s, c);
    const l = Lr(({
      clientX: p,
      clientY: h
    }) => !s && !c && v(p, h), 100), _ = () => {
      removeEventListener("mousemove", l);
    };
    return s && c ? _() : addEventListener("mousemove", l), _;
  }, [s, c]), /* @__PURE__ */ Vr(Jr, {
    ref: m,
    isVisible: f,
    children: n,
    style: {
      left: x.x,
      top: x.y
    }
  });
};
export {
  Xr as default
};
