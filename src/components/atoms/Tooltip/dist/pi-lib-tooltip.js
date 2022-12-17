import We, { useRef as vr, useState as pr, useCallback as gr, useEffect as br } from "react";
import mr, { css as yr } from "styled-components";
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Le = "Expected a function", De = 0 / 0, hr = "[object Symbol]", Er = /^\s+|\s+$/g, Rr = /^[-+]0x[0-9a-f]+$/i, _r = /^0b[01]+$/i, Tr = /^0o[0-7]+$/i, Or = parseInt, Sr = typeof H == "object" && H && H.Object === Object && H, xr = typeof self == "object" && self && self.Object === Object && self, Cr = Sr || xr || Function("return this")(), jr = Object.prototype, Pr = jr.toString, wr = Math.max, kr = Math.min, fe = function() {
  return Cr.Date.now();
};
function Fr(n, s, c) {
  var y, h, O, T, d, f, R = 0, v = !1, b = !1, x = !0;
  if (typeof n != "function")
    throw new TypeError(Le);
  s = Ie(s) || 0, X(c) && (v = !!c.leading, b = "maxWait" in c, O = b ? wr(Ie(c.maxWait) || 0, s) : O, x = "trailing" in c ? !!c.trailing : x);
  function k(p) {
    var j = y, F = h;
    return y = h = void 0, R = p, T = n.apply(F, j), T;
  }
  function U(p) {
    return R = p, d = setTimeout(C, s), v ? k(p) : T;
  }
  function Z(p) {
    var j = p - f, F = p - R, W = s - j;
    return b ? kr(W, O - F) : W;
  }
  function V(p) {
    var j = p - f, F = p - R;
    return f === void 0 || j >= s || j < 0 || b && F >= O;
  }
  function C() {
    var p = fe();
    if (V(p))
      return E(p);
    d = setTimeout(C, Z(p));
  }
  function E(p) {
    return d = void 0, x && y ? k(p) : (y = h = void 0, T);
  }
  function Q() {
    d !== void 0 && clearTimeout(d), R = 0, y = f = h = d = void 0;
  }
  function ee() {
    return d === void 0 ? T : E(fe());
  }
  function $() {
    var p = fe(), j = V(p);
    if (y = arguments, h = this, f = p, j) {
      if (d === void 0)
        return U(f);
      if (b)
        return d = setTimeout(C, s), k(f);
    }
    return d === void 0 && (d = setTimeout(C, s)), T;
  }
  return $.cancel = Q, $.flush = ee, $;
}
function Dr(n, s, c) {
  var y = !0, h = !0;
  if (typeof n != "function")
    throw new TypeError(Le);
  return X(c) && (y = "leading" in c ? !!c.leading : y, h = "trailing" in c ? !!c.trailing : h), Fr(n, s, {
    leading: y,
    maxWait: s,
    trailing: h
  });
}
function X(n) {
  var s = typeof n;
  return !!n && (s == "object" || s == "function");
}
function Ir(n) {
  return !!n && typeof n == "object";
}
function Ar(n) {
  return typeof n == "symbol" || Ir(n) && Pr.call(n) == hr;
}
function Ie(n) {
  if (typeof n == "number")
    return n;
  if (Ar(n))
    return De;
  if (X(n)) {
    var s = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = X(s) ? s + "" : s;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(Er, "");
  var c = _r.test(n);
  return c || Tr.test(n) ? Or(n.slice(2), c ? 2 : 8) : Rr.test(n) ? De : +n;
}
var $r = Dr;
const K = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Wr = mr.div(
  ({ isVisible: n = !1 }) => yr`
    font-family: sans-serif;
    position: absolute;
    transition: all 0.2s;
    opacity: ${n ? 0.8 : 0};
    padding: 4px;
    border: 1px solid ${K.default};
    color: ${K.default};
    background-color: white;
    border-radius: 6px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${K.default};
      border-right: 1px solid ${K.default};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(90% 0, 100% 0, 100% 100%, 0 100%, 0 90%);
    }
  `
);
var Ye = { exports: {} }, N = {};
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
function Lr() {
  if (Ae)
    return N;
  Ae = 1;
  var n = We, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(d, f, R) {
    var v, b = {}, x = null, k = null;
    R !== void 0 && (x = "" + R), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (k = f.ref);
    for (v in f)
      y.call(f, v) && !O.hasOwnProperty(v) && (b[v] = f[v]);
    if (d && d.defaultProps)
      for (v in f = d.defaultProps, f)
        b[v] === void 0 && (b[v] = f[v]);
    return { $$typeof: s, type: d, key: x, ref: k, props: b, _owner: h.current };
  }
  return N.Fragment = c, N.jsx = T, N.jsxs = T, N;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Yr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var n = We, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), U = Symbol.iterator, Z = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var C = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Q("error", e, t);
      }
    }
    function Q(e, r, t) {
      {
        var a = C.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var ee = !1, $ = !1, p = !1, j = !1, F = !1, W;
    W = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === O || F || e === h || e === R || e === v || j || e === k || ee || $ || p || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === b || e.$$typeof === T || e.$$typeof === d || e.$$typeof === f || e.$$typeof === W || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case c:
          return "Portal";
        case O:
          return "Profiler";
        case h:
          return "StrictMode";
        case R:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return le(r) + ".Consumer";
          case T:
            var t = e;
            return le(t._context) + ".Provider";
          case f:
            return Me(e, e.render, "ForwardRef");
          case b:
            var a = e.displayName || null;
            return a !== null ? a : P(e.type) || "Memo";
          case x: {
            var u = e, l = u._payload, o = u._init;
            try {
              return P(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, L = 0, ce, de, ve, pe, ge, be, me;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ue() {
      {
        if (L === 0) {
          ce = console.log, de = console.info, ve = console.warn, pe = console.error, ge = console.group, be = console.groupCollapsed, me = console.groupEnd;
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
    function Ve() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ce
            }),
            info: D({}, e, {
              value: de
            }),
            warn: D({}, e, {
              value: ve
            }),
            error: D({}, e, {
              value: pe
            }),
            group: D({}, e, {
              value: ge
            }),
            groupCollapsed: D({}, e, {
              value: be
            }),
            groupEnd: D({}, e, {
              value: me
            })
          });
        }
        L < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = C.ReactCurrentDispatcher, te;
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
    var ne = !1, q;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Be();
    }
    function he(e, r) {
      if (!e || ne)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ne = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = re.current, re.current = null, Ue();
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
            } catch (w) {
              a = w;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (w) {
              a = w;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            a = w;
          }
          e();
        }
      } catch (w) {
        if (w && a && typeof w.stack == "string") {
          for (var i = w.stack.split(`
`), _ = a.stack.split(`
`), g = i.length - 1, m = _.length - 1; g >= 1 && m >= 0 && i[g] !== _[m]; )
            m--;
          for (; g >= 1 && m >= 0; g--, m--)
            if (i[g] !== _[m]) {
              if (g !== 1 || m !== 1)
                do
                  if (g--, m--, m < 0 || i[g] !== _[m]) {
                    var S = `
` + i[g].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, S), S;
                  }
                while (g >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = l, Ve(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", Fe = A ? B(A) : "";
      return typeof e == "function" && q.set(e, Fe), Fe;
    }
    function qe(e, r, t) {
      return he(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ge(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case R:
          return B("Suspense");
        case v:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return qe(e.render);
          case b:
            return G(e.type, r, t);
          case x: {
            var a = e, u = a._payload, l = a._init;
            try {
              return G(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Ee = {}, Re = C.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function Je(e, r, t, a, u) {
      {
        var l = Function.call.bind(J);
        for (var o in e)
          if (l(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              i = g;
            }
            i && !(i instanceof Error) && (z(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof i), z(null)), i instanceof Error && !(i.message in Ee) && (Ee[i.message] = !0, z(u), E("Failed %s type: %s", t, i.message), z(null));
          }
      }
    }
    var ze = Array.isArray;
    function ae(e) {
      return ze(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Te(e) {
      if (Ke(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), _e(e);
    }
    var Y = C.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Se, ie;
    ie = {};
    function Ze(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = P(Y.current.type);
        ie[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Y.current.type), e.ref), ie[t] = !0);
      }
    }
    function rr(e, r) {
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
    function tr(e, r) {
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
    var nr = function(e, r, t, a, u, l, o) {
      var i = {
        $$typeof: s,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ar(e, r, t, a, u) {
      {
        var l, o = {}, i = null, _ = null;
        t !== void 0 && (Te(t), i = "" + t), Qe(r) && (Te(r.key), i = "" + r.key), Ze(r) && (_ = r.ref, er(r, u));
        for (l in r)
          J.call(r, l) && !Xe.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (l in g)
            o[l] === void 0 && (o[l] = g[l]);
        }
        if (i || _) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && rr(o, m), _ && tr(o, m);
        }
        return nr(e, i, _, u, a, Y.current, o);
      }
    }
    var oe = C.ReactCurrentOwner, xe = C.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Ce() {
      {
        if (oe.current) {
          var e = P(oe.current.type);
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
    var je = {};
    function or(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (je[t])
          return;
        je[t] = !0;
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + P(e._owner.type) + "."), I(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), I(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            se(a) && Pe(a, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = V(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), o; !(o = l.next()).done; )
              se(o.value) && Pe(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = P(r);
          Je(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var u = P(r);
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
            I(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function ke(e, r, t, a, u, l) {
      {
        var o = Ne(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ir(u);
          _ ? i += _ : i += Ce();
          var g;
          e === null ? g = "null" : ae(e) ? g = "array" : e !== void 0 && e.$$typeof === s ? (g = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, i);
        }
        var m = ar(e, r, t, u, l);
        if (m == null)
          return m;
        if (o) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (ae(S)) {
                for (var A = 0; A < S.length; A++)
                  we(S[A], e);
                Object.freeze && Object.freeze(S);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(S, e);
        }
        return e === y ? sr(m) : ur(m), m;
      }
    }
    function fr(e, r, t) {
      return ke(e, r, t, !0);
    }
    function lr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var cr = lr, dr = fr;
    M.Fragment = y, M.jsx = cr, M.jsxs = dr;
  }()), M;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Lr() : n.exports = Yr();
})(Ye);
const Nr = Ye.exports.jsx, Vr = ({
  isVisible: n = !1,
  x: s = 0,
  y: c = 0,
  children: y
}) => {
  const h = vr(null), [O, T] = pr({
    x: s,
    y: c
  }), d = gr((f, R) => {
    var v, b;
    return T({
      x: f - ((b = (v = h.current) == null ? void 0 : v.clientWidth) != null ? b : 0) / 2,
      y: R + 24
    });
  }, [h.current]);
  return br(() => {
    d(s, c);
    const f = $r(({
      clientX: v,
      clientY: b
    }) => !s && !c && d(v, b), 100), R = () => {
      removeEventListener("mousemove", f);
    };
    return s && c ? R() : addEventListener("mousemove", f), R;
  }, [s, c]), /* @__PURE__ */ Nr(Wr, {
    ref: h,
    isVisible: n,
    children: y,
    style: {
      left: O.x,
      top: O.y
    }
  });
};
export {
  Vr as default
};
