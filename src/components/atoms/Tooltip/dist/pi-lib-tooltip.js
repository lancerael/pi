import Le, { useRef as De, useState as pr, useEffect as gr } from "react";
import br, { css as mr } from "styled-components";
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ye = "Expected a function", Ie = 0 / 0, yr = "[object Symbol]", hr = /^\s+|\s+$/g, Er = /^[-+]0x[0-9a-f]+$/i, Rr = /^0b[01]+$/i, _r = /^0o[0-7]+$/i, Tr = parseInt, xr = typeof H == "object" && H && H.Object === Object && H, Or = typeof self == "object" && self && self.Object === Object && self, Sr = xr || Or || Function("return this")(), jr = Object.prototype, Cr = jr.toString, wr = Math.max, Pr = Math.min, se = function() {
  return Sr.Date.now();
};
function kr(n, s, c) {
  var g, h, O, E, d, l, R = 0, m = !1, _ = !1, S = !0;
  if (typeof n != "function")
    throw new TypeError(Ye);
  s = Ae(s) || 0, X(c) && (m = !!c.leading, _ = "maxWait" in c, O = _ ? wr(Ae(c.maxWait) || 0, s) : O, S = "trailing" in c ? !!c.trailing : S);
  function k(v) {
    var C = g, F = h;
    return g = h = void 0, R = v, E = n.apply(F, C), E;
  }
  function U(v) {
    return R = v, d = setTimeout(j, s), m ? k(v) : E;
  }
  function Z(v) {
    var C = v - l, F = v - R, W = s - C;
    return _ ? Pr(W, O - F) : W;
  }
  function V(v) {
    var C = v - l, F = v - R;
    return l === void 0 || C >= s || C < 0 || _ && F >= O;
  }
  function j() {
    var v = se();
    if (V(v))
      return y(v);
    d = setTimeout(j, Z(v));
  }
  function y(v) {
    return d = void 0, S && g ? k(v) : (g = h = void 0, E);
  }
  function Q() {
    d !== void 0 && clearTimeout(d), R = 0, g = l = h = d = void 0;
  }
  function ee() {
    return d === void 0 ? E : y(se());
  }
  function $() {
    var v = se(), C = V(v);
    if (g = arguments, h = this, l = v, C) {
      if (d === void 0)
        return U(l);
      if (_)
        return d = setTimeout(j, s), k(l);
    }
    return d === void 0 && (d = setTimeout(j, s)), E;
  }
  return $.cancel = Q, $.flush = ee, $;
}
function Fr(n, s, c) {
  var g = !0, h = !0;
  if (typeof n != "function")
    throw new TypeError(Ye);
  return X(c) && (g = "leading" in c ? !!c.leading : g, h = "trailing" in c ? !!c.trailing : h), kr(n, s, {
    leading: g,
    maxWait: s,
    trailing: h
  });
}
function X(n) {
  var s = typeof n;
  return !!n && (s == "object" || s == "function");
}
function Dr(n) {
  return !!n && typeof n == "object";
}
function Ir(n) {
  return typeof n == "symbol" || Dr(n) && Cr.call(n) == yr;
}
function Ae(n) {
  if (typeof n == "number")
    return n;
  if (Ir(n))
    return Ie;
  if (X(n)) {
    var s = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = X(s) ? s + "" : s;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = n.replace(hr, "");
  var c = Rr.test(n);
  return c || _r.test(n) ? Tr(n.slice(2), c ? 2 : 8) : Er.test(n) ? Ie : +n;
}
var Ar = Fr;
const K = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, $r = br.div(
  ({ isVisible: n = !1 }) => mr`
    position: absolute;
    transition: all 0.2s;

    opacity: ${n ? 0.8 : 0};
    padding: 1px 4px 2px 4px;
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
var Ne = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Wr() {
  if ($e)
    return N;
  $e = 1;
  var n = Le, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(d, l, R) {
    var m, _ = {}, S = null, k = null;
    R !== void 0 && (S = "" + R), l.key !== void 0 && (S = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (m in l)
      g.call(l, m) && !O.hasOwnProperty(m) && (_[m] = l[m]);
    if (d && d.defaultProps)
      for (m in l = d.defaultProps, l)
        _[m] === void 0 && (_[m] = l[m]);
    return { $$typeof: s, type: d, key: S, ref: k, props: _, _owner: h.current };
  }
  return N.Fragment = c, N.jsx = E, N.jsxs = E, N;
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
var We;
function Lr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Le, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), U = Symbol.iterator, Z = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
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
        var f = t.map(function(o) {
          return String(o);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var ee = !1, $ = !1, v = !1, C = !1, F = !1, W;
    W = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === O || F || e === h || e === R || e === m || C || e === k || ee || $ || v || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === _ || e.$$typeof === E || e.$$typeof === d || e.$$typeof === l || e.$$typeof === W || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case c:
          return "Portal";
        case O:
          return "Profiler";
        case h:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return le(r) + ".Consumer";
          case E:
            var t = e;
            return le(t._context) + ".Provider";
          case l:
            return Ue(e, e.render, "ForwardRef");
          case _:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case S: {
            var u = e, f = u._payload, o = u._init;
            try {
              return w(o(f));
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
    function Ve() {
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
    function Be() {
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
        L < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var ne = !1, q;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      q = new qe();
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
      var f;
      f = re.current, re.current = null, Ve();
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
            } catch (P) {
              a = P;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (P) {
              a = P;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            a = P;
          }
          e();
        }
      } catch (P) {
        if (P && a && typeof P.stack == "string") {
          for (var i = P.stack.split(`
`), T = a.stack.split(`
`), p = i.length - 1, b = T.length - 1; p >= 1 && b >= 0 && i[p] !== T[b]; )
            b--;
          for (; p >= 1 && b >= 0; p--, b--)
            if (i[p] !== T[b]) {
              if (p !== 1 || b !== 1)
                do
                  if (p--, b--, b < 0 || i[p] !== T[b]) {
                    var x = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, x), x;
                  }
                while (p >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = f, Be(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", Fe = A ? B(A) : "";
      return typeof e == "function" && q.set(e, Fe), Fe;
    }
    function Ge(e, r, t) {
      return he(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Je(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case R:
          return B("Suspense");
        case m:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ge(e.render);
          case _:
            return G(e.type, r, t);
          case S: {
            var a = e, u = a._payload, f = a._init;
            try {
              return G(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Ee = {}, Re = j.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function ze(e, r, t, a, u) {
      {
        var f = Function.call.bind(J);
        for (var o in e)
          if (f(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var T = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              i = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (z(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof i), z(null)), i instanceof Error && !(i.message in Ee) && (Ee[i.message] = !0, z(u), y("Failed %s type: %s", t, i.message), z(null));
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
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Te(e) {
      if (Xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), _e(e);
    }
    var Y = j.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Oe, ie;
    ie = {};
    function Qe(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = w(Y.current.type);
        ie[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(Y.current.type), e.ref), ie[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Oe || (Oe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, u, f, o) {
      var i = {
        $$typeof: s,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: f
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
    function ir(e, r, t, a, u) {
      {
        var f, o = {}, i = null, T = null;
        t !== void 0 && (Te(t), i = "" + t), er(r) && (Te(r.key), i = "" + r.key), Qe(r) && (T = r.ref, rr(r, u));
        for (f in r)
          J.call(r, f) && !Ze.hasOwnProperty(f) && (o[f] = r[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            o[f] === void 0 && (o[f] = p[f]);
        }
        if (i || T) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && tr(o, b), T && nr(o, b);
        }
        return ar(e, i, T, u, a, Y.current, o);
      }
    }
    var oe = j.ReactCurrentOwner, Se = j.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function je() {
      {
        if (oe.current) {
          var e = w(oe.current.type);
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
    var Ce = {};
    function ur(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var a = "";
        e && e._owner && e._owner !== oe.current && (a = " It was passed a child from " + w(e._owner.type) + "."), I(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), I(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            fe(a) && we(a, r);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = V(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), o; !(o = f.next()).done; )
              fe(o.value) && we(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var u = w(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            I(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function ke(e, r, t, a, u, f) {
      {
        var o = Me(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = or(u);
          T ? i += T : i += je();
          var p;
          e === null ? p = "null" : ae(e) ? p = "array" : e !== void 0 && e.$$typeof === s ? (p = "<" + (w(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var b = ir(e, r, t, u, f);
        if (b == null)
          return b;
        if (o) {
          var x = r.children;
          if (x !== void 0)
            if (a)
              if (ae(x)) {
                for (var A = 0; A < x.length; A++)
                  Pe(x[A], e);
                Object.freeze && Object.freeze(x);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(x, e);
        }
        return e === g ? sr(b) : fr(b), b;
      }
    }
    function lr(e, r, t) {
      return ke(e, r, t, !0);
    }
    function cr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var dr = cr, vr = lr;
    M.Fragment = g, M.jsx = dr, M.jsxs = vr;
  }()), M;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Wr() : n.exports = Lr();
})(Ne);
const Yr = Ne.exports.jsx, Ur = ({
  children: n,
  isVisible: s = !1
}) => {
  const c = De(), g = De(null), [h, O] = pr({
    x: 0,
    y: 0
  }), E = Ar(({
    clientX: d,
    clientY: l
  }) => {
    var R, m;
    return O({
      x: d - ((m = (R = g.current) == null ? void 0 : R.clientWidth) != null ? m : 0) / 2,
      y: l + 24
    });
  }, 100);
  return gr(() => (c.current = addEventListener("mousemove", E), () => {
    removeEventListener("mousemove", E), c.current = void 0;
  }), []), /* @__PURE__ */ Yr($r, {
    ref: g,
    isVisible: s,
    style: {
      left: h.x,
      top: h.y
    },
    children: n
  });
};
export {
  Ur as default
};
