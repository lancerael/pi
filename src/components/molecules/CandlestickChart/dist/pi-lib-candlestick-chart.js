import He, { useState as We, useEffect as ze, useRef as Lt, useCallback as vt } from "react";
import de, { keyframes as Bn, css as _r } from "styled-components";
const qn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Xn = Bn`
  to {
    rotate: 360deg;
  }
`, Mi = Bn`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, Fi = de.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Di = de.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Xn} 2s linear infinite;
  margin: 2px;
`, tn = de.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Ht = de.div(
  ({ delay: e }) => _r`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${qn.pending};
    animation: ${Mi} 0.3s linear alternate infinite;

    ${e ? "animation-delay: 0.2s;" : ""}
  `
);
de.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${qn.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${Xn} 2s linear infinite;
`;
var Yr = { exports: {} }, Tt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function Ii() {
  if (rn)
    return Tt;
  rn = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (h in c)
      i.call(c, h) && !s.hasOwnProperty(h) && (d[h] = c[h]);
    if (f && f.defaultProps)
      for (h in c = f.defaultProps, c)
        d[h] === void 0 && (d[h] = c[h]);
    return { $$typeof: r, type: f, key: g, ref: v, props: d, _owner: o.current };
  }
  return Tt.Fragment = n, Tt.jsx = u, Tt.jsxs = u, Tt;
}
var Bt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Li() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function T(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[A];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        L("error", t, l);
      }
    }
    function L(t, a, l) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var w = l.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var V = !1, M = !1, $ = !1, F = !1, P = !1, W;
    W = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || P || t === o || t === p || t === h || F || t === v || V || M || $ || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === W || t.getModuleId !== void 0));
    }
    function j(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function z(t) {
      return t.displayName || "Context";
    }
    function N(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return z(a) + ".Consumer";
          case u:
            var l = t;
            return z(l._context) + ".Provider";
          case c:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : N(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return N(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, H = 0, te, re, ne, X, ye, ge, ve;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Be() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        H++;
      }
    }
    function qe() {
      {
        if (H--, H === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, t, {
              value: te
            }),
            info: I({}, t, {
              value: re
            }),
            warn: I({}, t, {
              value: ne
            }),
            error: I({}, t, {
              value: X
            }),
            group: I({}, t, {
              value: ye
            }),
            groupCollapsed: I({}, t, {
              value: ge
            }),
            groupEnd: I({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function G(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (D) {
              y = D;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (D) {
              y = D;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            y = D;
          }
          t();
        }
      } catch (D) {
        if (D && y && typeof D.stack == "string") {
          for (var m = D.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var C = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, C), C;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? G(U) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, l) {
      return be(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ge(t.render);
          case d:
            return K(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return K(w(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(l);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, l, y, _) {
      {
        var w = Function.call.bind(Z);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), Q(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, Q(_), x("Failed %s type: %s", l, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = R.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var l = N(B.current.type);
        ue[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(B.current.type), t.ref), ue[l] = !0);
      }
    }
    function ot(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var l = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var st = function(t, a, l, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: w
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, l, y, _) {
      {
        var w, b = {}, m = null, O = null;
        l !== void 0 && (ke(l), m = "" + l), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, _));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(b, E), O && at(b, E);
        }
        return st(t, m, O, _, y, B.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(l);
      } else
        Re.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = N(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function lt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = lt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + N(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = T(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function ft(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === d))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = N(a);
          Ke(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = N(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, l, y, _, w) {
      {
        var b = ee(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (N(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ut(t, a, l, _, w);
        if (E == null)
          return E;
        if (b) {
          var C = a.children;
          if (C !== void 0)
            if (y)
              if (se(C)) {
                for (var U = 0; U < C.length; U++)
                  Ne(C[U], t);
                Object.freeze && Object.freeze(C);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(C, t);
        }
        return t === i ? pt(E) : ft(E), E;
      }
    }
    function ht(t, a, l) {
      return Ce(t, a, l, !0);
    }
    function dt(t, a, l) {
      return Ce(t, a, l, !1);
    }
    var yt = dt, gt = ht;
    Bt.Fragment = i, Bt.jsx = yt, Bt.jsxs = gt;
  }()), Bt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ii() : e.exports = Li();
})(Yr);
const $t = Yr.exports.jsx, Er = Yr.exports.jsxs, Wi = () => /* @__PURE__ */ $t(Fi, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ Er(Di, {
    children: [/* @__PURE__ */ Er(tn, {
      children: [/* @__PURE__ */ $t(Ht, {
        delay: !0
      }), /* @__PURE__ */ $t(Ht, {})]
    }), /* @__PURE__ */ Er(tn, {
      children: [/* @__PURE__ */ $t(Ht, {}), /* @__PURE__ */ $t(Ht, {
        delay: !0
      })]
    })]
  })
});
function zi(e) {
  return e;
}
var Sr = 1, ir = 2, Cr = 3, qt = 4, on = 1e-6;
function Vi(e) {
  return "translate(" + e + ",0)";
}
function Yi(e) {
  return "translate(0," + e + ")";
}
function Ui(e) {
  return (r) => +e(r);
}
function Hi(e, r) {
  return r = Math.max(0, e.bandwidth() - r * 2) / 2, e.round() && (r = Math.round(r)), (n) => +e(n) + r;
}
function Bi() {
  return !this.__axis;
}
function Gn(e, r) {
  var n = [], i = null, o = null, s = 6, u = 6, f = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = e === Sr || e === qt ? -1 : 1, h = e === qt || e === ir ? "x" : "y", d = e === Sr || e === Cr ? Vi : Yi;
  function g(v) {
    var S = i == null ? r.ticks ? r.ticks.apply(r, n) : r.domain() : i, A = o == null ? r.tickFormat ? r.tickFormat.apply(r, n) : zi : o, T = Math.max(s, 0) + f, R = r.range(), x = +R[0] + c, L = +R[R.length - 1] + c, V = (r.bandwidth ? Hi : Ui)(r.copy(), c), M = v.selection ? v.selection() : v, $ = M.selectAll(".domain").data([null]), F = M.selectAll(".tick").data(S, r).order(), P = F.exit(), W = F.enter().append("g").attr("class", "tick"), ee = F.select("line"), j = F.select("text");
    $ = $.merge($.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), F = F.merge(W), ee = ee.merge(W.append("line").attr("stroke", "currentColor").attr(h + "2", p * s)), j = j.merge(W.append("text").attr("fill", "currentColor").attr(h, p * T).attr("dy", e === Sr ? "0em" : e === Cr ? "0.71em" : "0.32em")), v !== M && ($ = $.transition(v), F = F.transition(v), ee = ee.transition(v), j = j.transition(v), P = P.transition(v).attr("opacity", on).attr("transform", function(z) {
      return isFinite(z = V(z)) ? d(z + c) : this.getAttribute("transform");
    }), W.attr("opacity", on).attr("transform", function(z) {
      var N = this.parentNode.__axis;
      return d((N && isFinite(N = N(z)) ? N : V(z)) + c);
    })), P.remove(), $.attr("d", e === qt || e === ir ? u ? "M" + p * u + "," + x + "H" + c + "V" + L + "H" + p * u : "M" + c + "," + x + "V" + L : u ? "M" + x + "," + p * u + "V" + c + "H" + L + "V" + p * u : "M" + x + "," + c + "H" + L), F.attr("opacity", 1).attr("transform", function(z) {
      return d(V(z) + c);
    }), ee.attr(h + "2", p * s), j.attr(h, p * T).text(A), M.filter(Bi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === ir ? "start" : e === qt ? "end" : "middle"), M.each(function() {
      this.__axis = V;
    });
  }
  return g.scale = function(v) {
    return arguments.length ? (r = v, g) : r;
  }, g.ticks = function() {
    return n = Array.from(arguments), g;
  }, g.tickArguments = function(v) {
    return arguments.length ? (n = v == null ? [] : Array.from(v), g) : n.slice();
  }, g.tickValues = function(v) {
    return arguments.length ? (i = v == null ? null : Array.from(v), g) : i && i.slice();
  }, g.tickFormat = function(v) {
    return arguments.length ? (o = v, g) : o;
  }, g.tickSize = function(v) {
    return arguments.length ? (s = u = +v, g) : s;
  }, g.tickSizeInner = function(v) {
    return arguments.length ? (s = +v, g) : s;
  }, g.tickSizeOuter = function(v) {
    return arguments.length ? (u = +v, g) : u;
  }, g.tickPadding = function(v) {
    return arguments.length ? (f = +v, g) : f;
  }, g.offset = function(v) {
    return arguments.length ? (c = +v, g) : c;
  }, g;
}
function qi(e) {
  return Gn(ir, e);
}
function Xi(e) {
  return Gn(Cr, e);
}
var Pr = "http://www.w3.org/1999/xhtml";
const an = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wr(e) {
  var r = e += "", n = r.indexOf(":");
  return n >= 0 && (r = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), an.hasOwnProperty(r) ? { space: an[r], local: e } : e;
}
function Gi(e) {
  return function() {
    var r = this.ownerDocument, n = this.namespaceURI;
    return n === Pr && r.documentElement.namespaceURI === Pr ? r.createElement(e) : r.createElementNS(n, e);
  };
}
function Ji(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Jn(e) {
  var r = wr(e);
  return (r.local ? Ji : Gi)(r);
}
function Ki() {
}
function Ur(e) {
  return e == null ? Ki : function() {
    return this.querySelector(e);
  };
}
function Zi(e) {
  typeof e != "function" && (e = Ur(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = new Array(u), c, p, h = 0; h < u; ++h)
      (c = s[h]) && (p = e.call(c, c.__data__, h, s)) && ("__data__" in c && (p.__data__ = c.__data__), f[h] = p);
  return new he(i, this._parents);
}
function Qi(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function eo() {
  return [];
}
function Kn(e) {
  return e == null ? eo : function() {
    return this.querySelectorAll(e);
  };
}
function to(e) {
  return function() {
    return Qi(e.apply(this, arguments));
  };
}
function ro(e) {
  typeof e == "function" ? e = to(e) : e = Kn(e);
  for (var r = this._groups, n = r.length, i = [], o = [], s = 0; s < n; ++s)
    for (var u = r[s], f = u.length, c, p = 0; p < f; ++p)
      (c = u[p]) && (i.push(e.call(c, c.__data__, p, u)), o.push(c));
  return new he(i, o);
}
function Zn(e) {
  return function() {
    return this.matches(e);
  };
}
function Qn(e) {
  return function(r) {
    return r.matches(e);
  };
}
var no = Array.prototype.find;
function io(e) {
  return function() {
    return no.call(this.children, e);
  };
}
function oo() {
  return this.firstElementChild;
}
function ao(e) {
  return this.select(e == null ? oo : io(typeof e == "function" ? e : Qn(e)));
}
var so = Array.prototype.filter;
function uo() {
  return Array.from(this.children);
}
function co(e) {
  return function() {
    return so.call(this.children, e);
  };
}
function lo(e) {
  return this.selectAll(e == null ? uo : co(typeof e == "function" ? e : Qn(e)));
}
function fo(e) {
  typeof e != "function" && (e = Zn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = [], c, p = 0; p < u; ++p)
      (c = s[p]) && e.call(c, c.__data__, p, s) && f.push(c);
  return new he(i, this._parents);
}
function ei(e) {
  return new Array(e.length);
}
function po() {
  return new he(this._enter || this._groups.map(ei), this._parents);
}
function cr(e, r) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = r;
}
cr.prototype = {
  constructor: cr,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, r) {
    return this._parent.insertBefore(e, r);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function ho(e) {
  return function() {
    return e;
  };
}
function yo(e, r, n, i, o, s) {
  for (var u = 0, f, c = r.length, p = s.length; u < p; ++u)
    (f = r[u]) ? (f.__data__ = s[u], i[u] = f) : n[u] = new cr(e, s[u]);
  for (; u < c; ++u)
    (f = r[u]) && (o[u] = f);
}
function go(e, r, n, i, o, s, u) {
  var f, c, p = /* @__PURE__ */ new Map(), h = r.length, d = s.length, g = new Array(h), v;
  for (f = 0; f < h; ++f)
    (c = r[f]) && (g[f] = v = u.call(c, c.__data__, f, r) + "", p.has(v) ? o[f] = c : p.set(v, c));
  for (f = 0; f < d; ++f)
    v = u.call(e, s[f], f, s) + "", (c = p.get(v)) ? (i[f] = c, c.__data__ = s[f], p.delete(v)) : n[f] = new cr(e, s[f]);
  for (f = 0; f < h; ++f)
    (c = r[f]) && p.get(g[f]) === c && (o[f] = c);
}
function vo(e) {
  return e.__data__;
}
function mo(e, r) {
  if (!arguments.length)
    return Array.from(this, vo);
  var n = r ? go : yo, i = this._parents, o = this._groups;
  typeof e != "function" && (e = ho(e));
  for (var s = o.length, u = new Array(s), f = new Array(s), c = new Array(s), p = 0; p < s; ++p) {
    var h = i[p], d = o[p], g = d.length, v = bo(e.call(h, h && h.__data__, p, i)), S = v.length, A = f[p] = new Array(S), T = u[p] = new Array(S), R = c[p] = new Array(g);
    n(h, d, A, T, R, v, r);
    for (var x = 0, L = 0, V, M; x < S; ++x)
      if (V = A[x]) {
        for (x >= L && (L = x + 1); !(M = T[L]) && ++L < S; )
          ;
        V._next = M || null;
      }
  }
  return u = new he(u, i), u._enter = f, u._exit = c, u;
}
function bo(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _o() {
  return new he(this._exit || this._groups.map(ei), this._parents);
}
function wo(e, r, n) {
  var i = this.enter(), o = this, s = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), r != null && (o = r(o), o && (o = o.selection())), n == null ? s.remove() : n(s), i && o ? i.merge(o).order() : o;
}
function xo(e) {
  for (var r = e.selection ? e.selection() : e, n = this._groups, i = r._groups, o = n.length, s = i.length, u = Math.min(o, s), f = new Array(o), c = 0; c < u; ++c)
    for (var p = n[c], h = i[c], d = p.length, g = f[c] = new Array(d), v, S = 0; S < d; ++S)
      (v = p[S] || h[S]) && (g[S] = v);
  for (; c < o; ++c)
    f[c] = n[c];
  return new he(f, this._parents);
}
function ko() {
  for (var e = this._groups, r = -1, n = e.length; ++r < n; )
    for (var i = e[r], o = i.length - 1, s = i[o], u; --o >= 0; )
      (u = i[o]) && (s && u.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(u, s), s = u);
  return this;
}
function Eo(e) {
  e || (e = So);
  function r(d, g) {
    return d && g ? e(d.__data__, g.__data__) : !d - !g;
  }
  for (var n = this._groups, i = n.length, o = new Array(i), s = 0; s < i; ++s) {
    for (var u = n[s], f = u.length, c = o[s] = new Array(f), p, h = 0; h < f; ++h)
      (p = u[h]) && (c[h] = p);
    c.sort(r);
  }
  return new he(o, this._parents).order();
}
function So(e, r) {
  return e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Ro() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Oo() {
  return Array.from(this);
}
function To() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length; o < s; ++o) {
      var u = i[o];
      if (u)
        return u;
    }
  return null;
}
function $o() {
  let e = 0;
  for (const r of this)
    ++e;
  return e;
}
function No() {
  return !this.node();
}
function Co(e) {
  for (var r = this._groups, n = 0, i = r.length; n < i; ++n)
    for (var o = r[n], s = 0, u = o.length, f; s < u; ++s)
      (f = o[s]) && e.call(f, f.__data__, s, o);
  return this;
}
function Po(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function jo(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ao(e, r) {
  return function() {
    this.setAttribute(e, r);
  };
}
function Mo(e, r) {
  return function() {
    this.setAttributeNS(e.space, e.local, r);
  };
}
function Fo(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Do(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Io(e, r) {
  var n = wr(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((r == null ? n.local ? jo : Po : typeof r == "function" ? n.local ? Do : Fo : n.local ? Mo : Ao)(n, r));
}
function ti(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Lo(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Wo(e, r, n) {
  return function() {
    this.style.setProperty(e, r, n);
  };
}
function zo(e, r, n) {
  return function() {
    var i = r.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function Vo(e, r, n) {
  return arguments.length > 1 ? this.each((r == null ? Lo : typeof r == "function" ? zo : Wo)(e, r, n == null ? "" : n)) : Et(this.node(), e);
}
function Et(e, r) {
  return e.style.getPropertyValue(r) || ti(e).getComputedStyle(e, null).getPropertyValue(r);
}
function Yo(e) {
  return function() {
    delete this[e];
  };
}
function Uo(e, r) {
  return function() {
    this[e] = r;
  };
}
function Ho(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Bo(e, r) {
  return arguments.length > 1 ? this.each((r == null ? Yo : typeof r == "function" ? Ho : Uo)(e, r)) : this.node()[e];
}
function ri(e) {
  return e.trim().split(/^|\s+/);
}
function Hr(e) {
  return e.classList || new ni(e);
}
function ni(e) {
  this._node = e, this._names = ri(e.getAttribute("class") || "");
}
ni.prototype = {
  add: function(e) {
    var r = this._names.indexOf(e);
    r < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var r = this._names.indexOf(e);
    r >= 0 && (this._names.splice(r, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function ii(e, r) {
  for (var n = Hr(e), i = -1, o = r.length; ++i < o; )
    n.add(r[i]);
}
function oi(e, r) {
  for (var n = Hr(e), i = -1, o = r.length; ++i < o; )
    n.remove(r[i]);
}
function qo(e) {
  return function() {
    ii(this, e);
  };
}
function Xo(e) {
  return function() {
    oi(this, e);
  };
}
function Go(e, r) {
  return function() {
    (r.apply(this, arguments) ? ii : oi)(this, e);
  };
}
function Jo(e, r) {
  var n = ri(e + "");
  if (arguments.length < 2) {
    for (var i = Hr(this.node()), o = -1, s = n.length; ++o < s; )
      if (!i.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof r == "function" ? Go : r ? qo : Xo)(n, r));
}
function Ko() {
  this.textContent = "";
}
function Zo(e) {
  return function() {
    this.textContent = e;
  };
}
function Qo(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.textContent = r == null ? "" : r;
  };
}
function ea(e) {
  return arguments.length ? this.each(e == null ? Ko : (typeof e == "function" ? Qo : Zo)(e)) : this.node().textContent;
}
function ta() {
  this.innerHTML = "";
}
function ra(e) {
  return function() {
    this.innerHTML = e;
  };
}
function na(e) {
  return function() {
    var r = e.apply(this, arguments);
    this.innerHTML = r == null ? "" : r;
  };
}
function ia(e) {
  return arguments.length ? this.each(e == null ? ta : (typeof e == "function" ? na : ra)(e)) : this.node().innerHTML;
}
function oa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function aa() {
  return this.each(oa);
}
function sa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ua() {
  return this.each(sa);
}
function ca(e) {
  var r = typeof e == "function" ? e : Jn(e);
  return this.select(function() {
    return this.appendChild(r.apply(this, arguments));
  });
}
function la() {
  return null;
}
function fa(e, r) {
  var n = typeof e == "function" ? e : Jn(e), i = r == null ? la : typeof r == "function" ? r : Ur(r);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function pa() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ha() {
  return this.each(pa);
}
function da() {
  var e = this.cloneNode(!1), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function ya() {
  var e = this.cloneNode(!0), r = this.parentNode;
  return r ? r.insertBefore(e, this.nextSibling) : e;
}
function ga(e) {
  return this.select(e ? ya : da);
}
function va(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ma(e) {
  return function(r) {
    e.call(this, r, this.__data__);
  };
}
function ba(e) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var n = "", i = r.indexOf(".");
    return i >= 0 && (n = r.slice(i + 1), r = r.slice(0, i)), { type: r, name: n };
  });
}
function _a(e) {
  return function() {
    var r = this.__on;
    if (!!r) {
      for (var n = 0, i = -1, o = r.length, s; n < o; ++n)
        s = r[n], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : r[++i] = s;
      ++i ? r.length = i : delete this.__on;
    }
  };
}
function wa(e, r, n) {
  return function() {
    var i = this.__on, o, s = ma(r);
    if (i) {
      for (var u = 0, f = i.length; u < f; ++u)
        if ((o = i[u]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = s, o.options = n), o.value = r;
          return;
        }
    }
    this.addEventListener(e.type, s, n), o = { type: e.type, name: e.name, value: r, listener: s, options: n }, i ? i.push(o) : this.__on = [o];
  };
}
function xa(e, r, n) {
  var i = ba(e + ""), o, s = i.length, u;
  if (arguments.length < 2) {
    var f = this.node().__on;
    if (f) {
      for (var c = 0, p = f.length, h; c < p; ++c)
        for (o = 0, h = f[c]; o < s; ++o)
          if ((u = i[o]).type === h.type && u.name === h.name)
            return h.value;
    }
    return;
  }
  for (f = r ? wa : _a, o = 0; o < s; ++o)
    this.each(f(i[o], r, n));
  return this;
}
function ai(e, r, n) {
  var i = ti(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(r, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(r, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(r, !1, !1)), e.dispatchEvent(o);
}
function ka(e, r) {
  return function() {
    return ai(this, e, r);
  };
}
function Ea(e, r) {
  return function() {
    return ai(this, e, r.apply(this, arguments));
  };
}
function Sa(e, r) {
  return this.each((typeof r == "function" ? Ea : ka)(e, r));
}
function* Ra() {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var i = e[r], o = 0, s = i.length, u; o < s; ++o)
      (u = i[o]) && (yield u);
}
var si = [null];
function he(e, r) {
  this._groups = e, this._parents = r;
}
function Yt() {
  return new he([[document.documentElement]], si);
}
function Oa() {
  return this;
}
he.prototype = Yt.prototype = {
  constructor: he,
  select: Zi,
  selectAll: ro,
  selectChild: ao,
  selectChildren: lo,
  filter: fo,
  data: mo,
  enter: po,
  exit: _o,
  join: wo,
  merge: xo,
  selection: Oa,
  order: ko,
  sort: Eo,
  call: Ro,
  nodes: Oo,
  node: To,
  size: $o,
  empty: No,
  each: Co,
  attr: Io,
  style: Vo,
  property: Bo,
  classed: Jo,
  text: ea,
  html: ia,
  raise: aa,
  lower: ua,
  append: ca,
  insert: fa,
  remove: ha,
  clone: ga,
  datum: va,
  on: xa,
  dispatch: Sa,
  [Symbol.iterator]: Ra
};
function It(e) {
  return typeof e == "string" ? new he([[document.querySelector(e)]], [document.documentElement]) : new he([[e]], si);
}
const Ta = 500, Ae = 10, St = [65, 55], ui = 0.3, $a = 10, Rr = {}, Nt = (e = "", r, n) => {
  var d;
  const i = Math.round((d = n.bandwidth) == null ? void 0 : d.call(n)) || 0, o = `${e}-${r}-${i}`;
  if (Rr[o] !== void 0)
    return Rr[o];
  let s = "";
  const u = new Date(e), [f, c, p] = e.split("-");
  p === "01" && (c === "01" ? s = f : s = u.toLocaleString("en-UK", {
    month: "short"
  }));
  let h = [];
  return i > 1 && h.push(16), i > 3 && h.push(8, 24), i > 7 && (h = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), h.includes(Number(p)) && (s = p), n.domain().length - 1 === r && (s = p), Rr[o] = s, s;
}, Na = (e, r, n, i) => {
  const [o, s] = We(), [u, f] = We(), { xScale: c, yScale: p } = n, {
    sizes: { width: h, height: d },
    visibleRange: { offset: g }
  } = i;
  ze(() => {
    !e.current || (It(e.current).select("g.x-axis, y.y-axis").remove(), s(
      It(e.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), f(It(e.current).append("g").classed("y-axis", !0)));
  }, []), ze(() => {
    !c.domain || !r || (o.call(Xi(c)).attr("transform", `translate(${g},${d - St[0]})`).selectAll("text").classed(
      "emphasise",
      (v, S) => Nt(v, S, c).length > 2
    ).attr(
      "x",
      (v, S) => Nt(v, S, c).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((v, S) => Nt(v, S, c)), o.selectAll("line").attr(
      "stroke",
      (v, S) => Nt(v, S, c).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (v, S) => Nt(v, S, c).length ? 12 : 6
    ), u.call(qi(p)).attr(
      "transform",
      `translate(${h - St[1] + Ae},${Ae})`
    ));
  }, [c, p]);
};
var Ca = { value: () => {
} };
function ci() {
  for (var e = 0, r = arguments.length, n = {}, i; e < r; ++e) {
    if (!(i = arguments[e] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new or(n);
}
function or(e) {
  this._ = e;
}
function Pa(e, r) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", o = n.indexOf(".");
    if (o >= 0 && (i = n.slice(o + 1), n = n.slice(0, o)), n && !r.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
or.prototype = ci.prototype = {
  constructor: or,
  on: function(e, r) {
    var n = this._, i = Pa(e + "", n), o, s = -1, u = i.length;
    if (arguments.length < 2) {
      for (; ++s < u; )
        if ((o = (e = i[s]).type) && (o = ja(n[o], e.name)))
          return o;
      return;
    }
    if (r != null && typeof r != "function")
      throw new Error("invalid callback: " + r);
    for (; ++s < u; )
      if (o = (e = i[s]).type)
        n[o] = sn(n[o], e.name, r);
      else if (r == null)
        for (o in n)
          n[o] = sn(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, r = this._;
    for (var n in r)
      e[n] = r[n].slice();
    return new or(e);
  },
  call: function(e, r) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), i = 0, o, s; i < o; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (s = this._[e], i = 0, o = s.length; i < o; ++i)
      s[i].value.apply(r, n);
  },
  apply: function(e, r, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var i = this._[e], o = 0, s = i.length; o < s; ++o)
      i[o].value.apply(r, n);
  }
};
function ja(e, r) {
  for (var n = 0, i = e.length, o; n < i; ++n)
    if ((o = e[n]).name === r)
      return o.value;
}
function sn(e, r, n) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === r) {
      e[i] = Ca, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: r, value: n }), e;
}
var Rt = 0, Ft = 0, Ct = 0, li = 1e3, lr, Dt, fr = 0, _t = 0, xr = 0, Wt = typeof performance == "object" && performance.now ? performance : Date, fi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Br() {
  return _t || (fi(Aa), _t = Wt.now() + xr);
}
function Aa() {
  _t = 0;
}
function pr() {
  this._call = this._time = this._next = null;
}
pr.prototype = pi.prototype = {
  constructor: pr,
  restart: function(e, r, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Br() : +n) + (r == null ? 0 : +r), !this._next && Dt !== this && (Dt ? Dt._next = this : lr = this, Dt = this), this._call = e, this._time = n, jr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jr());
  }
};
function pi(e, r, n) {
  var i = new pr();
  return i.restart(e, r, n), i;
}
function Ma() {
  Br(), ++Rt;
  for (var e = lr, r; e; )
    (r = _t - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
  --Rt;
}
function un() {
  _t = (fr = Wt.now()) + xr, Rt = Ft = 0;
  try {
    Ma();
  } finally {
    Rt = 0, Da(), _t = 0;
  }
}
function Fa() {
  var e = Wt.now(), r = e - fr;
  r > li && (xr -= r, fr = e);
}
function Da() {
  for (var e, r = lr, n, i = 1 / 0; r; )
    r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (n = r._next, r._next = null, r = e ? e._next = n : lr = n);
  Dt = e, jr(i);
}
function jr(e) {
  if (!Rt) {
    Ft && (Ft = clearTimeout(Ft));
    var r = e - _t;
    r > 24 ? (e < 1 / 0 && (Ft = setTimeout(un, e - Wt.now() - xr)), Ct && (Ct = clearInterval(Ct))) : (Ct || (fr = Wt.now(), Ct = setInterval(Fa, li)), Rt = 1, fi(un));
  }
}
function cn(e, r, n) {
  var i = new pr();
  return r = r == null ? 0 : +r, i.restart((o) => {
    i.stop(), e(o + r);
  }, r, n), i;
}
var Ia = ci("start", "end", "cancel", "interrupt"), La = [], hi = 0, ln = 1, Ar = 2, ar = 3, fn = 4, Mr = 5, sr = 6;
function kr(e, r, n, i, o, s) {
  var u = e.__transition;
  if (!u)
    e.__transition = {};
  else if (n in u)
    return;
  Wa(e, n, {
    name: r,
    index: i,
    group: o,
    on: Ia,
    tween: La,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: hi
  });
}
function qr(e, r) {
  var n = Fe(e, r);
  if (n.state > hi)
    throw new Error("too late; already scheduled");
  return n;
}
function Ie(e, r) {
  var n = Fe(e, r);
  if (n.state > ar)
    throw new Error("too late; already running");
  return n;
}
function Fe(e, r) {
  var n = e.__transition;
  if (!n || !(n = n[r]))
    throw new Error("transition not found");
  return n;
}
function Wa(e, r, n) {
  var i = e.__transition, o;
  i[r] = n, n.timer = pi(s, 0, n.time);
  function s(p) {
    n.state = ln, n.timer.restart(u, n.delay, n.time), n.delay <= p && u(p - n.delay);
  }
  function u(p) {
    var h, d, g, v;
    if (n.state !== ln)
      return c();
    for (h in i)
      if (v = i[h], v.name === n.name) {
        if (v.state === ar)
          return cn(u);
        v.state === fn ? (v.state = sr, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete i[h]) : +h < r && (v.state = sr, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete i[h]);
      }
    if (cn(function() {
      n.state === ar && (n.state = fn, n.timer.restart(f, n.delay, n.time), f(p));
    }), n.state = Ar, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ar) {
      for (n.state = ar, o = new Array(g = n.tween.length), h = 0, d = -1; h < g; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function f(p) {
    for (var h = p < n.duration ? n.ease.call(null, p / n.duration) : (n.timer.restart(c), n.state = Mr, 1), d = -1, g = o.length; ++d < g; )
      o[d].call(e, h);
    n.state === Mr && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = sr, n.timer.stop(), delete i[r];
    for (var p in i)
      return;
    delete e.__transition;
  }
}
function za(e, r) {
  var n = e.__transition, i, o, s = !0, u;
  if (!!n) {
    r = r == null ? null : r + "";
    for (u in n) {
      if ((i = n[u]).name !== r) {
        s = !1;
        continue;
      }
      o = i.state > Ar && i.state < Mr, i.state = sr, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[u];
    }
    s && delete e.__transition;
  }
}
function Va(e) {
  return this.each(function() {
    za(this, e);
  });
}
function Xr(e, r, n) {
  e.prototype = r.prototype = n, n.constructor = e;
}
function di(e, r) {
  var n = Object.create(e.prototype);
  for (var i in r)
    n[i] = r[i];
  return n;
}
function Ut() {
}
var zt = 0.7, hr = 1 / zt, kt = "\\s*([+-]?\\d+)\\s*", Vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", De = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ya = /^#([0-9a-f]{3,8})$/, Ua = new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`), Ha = new RegExp(`^rgb\\(${De},${De},${De}\\)$`), Ba = new RegExp(`^rgba\\(${kt},${kt},${kt},${Vt}\\)$`), qa = new RegExp(`^rgba\\(${De},${De},${De},${Vt}\\)$`), Xa = new RegExp(`^hsl\\(${Vt},${De},${De}\\)$`), Ga = new RegExp(`^hsla\\(${Vt},${De},${De},${Vt}\\)$`), pn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Xr(Ut, wt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hn,
  formatHex: hn,
  formatHex8: Ja,
  formatHsl: Ka,
  formatRgb: dn,
  toString: dn
});
function hn() {
  return this.rgb().formatHex();
}
function Ja() {
  return this.rgb().formatHex8();
}
function Ka() {
  return yi(this).formatHsl();
}
function dn() {
  return this.rgb().formatRgb();
}
function wt(e) {
  var r, n;
  return e = (e + "").trim().toLowerCase(), (r = Ya.exec(e)) ? (n = r[1].length, r = parseInt(r[1], 16), n === 6 ? yn(r) : n === 3 ? new pe(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : n === 8 ? Xt(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : n === 4 ? Xt(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = Ua.exec(e)) ? new pe(r[1], r[2], r[3], 1) : (r = Ha.exec(e)) ? new pe(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Ba.exec(e)) ? Xt(r[1], r[2], r[3], r[4]) : (r = qa.exec(e)) ? Xt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Xa.exec(e)) ? mn(r[1], r[2] / 100, r[3] / 100, 1) : (r = Ga.exec(e)) ? mn(r[1], r[2] / 100, r[3] / 100, r[4]) : pn.hasOwnProperty(e) ? yn(pn[e]) : e === "transparent" ? new pe(NaN, NaN, NaN, 0) : null;
}
function yn(e) {
  return new pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xt(e, r, n, i) {
  return i <= 0 && (e = r = n = NaN), new pe(e, r, n, i);
}
function Za(e) {
  return e instanceof Ut || (e = wt(e)), e ? (e = e.rgb(), new pe(e.r, e.g, e.b, e.opacity)) : new pe();
}
function Fr(e, r, n, i) {
  return arguments.length === 1 ? Za(e) : new pe(e, r, n, i == null ? 1 : i);
}
function pe(e, r, n, i) {
  this.r = +e, this.g = +r, this.b = +n, this.opacity = +i;
}
Xr(pe, Fr, di(Ut, {
  brighter(e) {
    return e = e == null ? hr : Math.pow(hr, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zt : Math.pow(zt, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pe(bt(this.r), bt(this.g), bt(this.b), dr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gn,
  formatHex: gn,
  formatHex8: Qa,
  formatRgb: vn,
  toString: vn
}));
function gn() {
  return `#${mt(this.r)}${mt(this.g)}${mt(this.b)}`;
}
function Qa() {
  return `#${mt(this.r)}${mt(this.g)}${mt(this.b)}${mt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vn() {
  const e = dr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${bt(this.r)}, ${bt(this.g)}, ${bt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function dr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function bt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function mt(e) {
  return e = bt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function mn(e, r, n, i) {
  return i <= 0 ? e = r = n = NaN : n <= 0 || n >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new Me(e, r, n, i);
}
function yi(e) {
  if (e instanceof Me)
    return new Me(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ut || (e = wt(e)), !e)
    return new Me();
  if (e instanceof Me)
    return e;
  e = e.rgb();
  var r = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.min(r, n, i), s = Math.max(r, n, i), u = NaN, f = s - o, c = (s + o) / 2;
  return f ? (r === s ? u = (n - i) / f + (n < i) * 6 : n === s ? u = (i - r) / f + 2 : u = (r - n) / f + 4, f /= c < 0.5 ? s + o : 2 - s - o, u *= 60) : f = c > 0 && c < 1 ? 0 : u, new Me(u, f, c, e.opacity);
}
function es(e, r, n, i) {
  return arguments.length === 1 ? yi(e) : new Me(e, r, n, i == null ? 1 : i);
}
function Me(e, r, n, i) {
  this.h = +e, this.s = +r, this.l = +n, this.opacity = +i;
}
Xr(Me, es, di(Ut, {
  brighter(e) {
    return e = e == null ? hr : Math.pow(hr, e), new Me(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zt : Math.pow(zt, e), new Me(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * r, o = 2 * n - i;
    return new pe(
      Or(e >= 240 ? e - 240 : e + 120, o, i),
      Or(e, o, i),
      Or(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new Me(bn(this.h), Gt(this.s), Gt(this.l), dr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = dr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${bn(this.h)}, ${Gt(this.s) * 100}%, ${Gt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function bn(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Gt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Or(e, r, n) {
  return (e < 60 ? r + (n - r) * e / 60 : e < 180 ? n : e < 240 ? r + (n - r) * (240 - e) / 60 : r) * 255;
}
const Gr = (e) => () => e;
function ts(e, r) {
  return function(n) {
    return e + n * r;
  };
}
function rs(e, r, n) {
  return e = Math.pow(e, n), r = Math.pow(r, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * r, n);
  };
}
function ns(e) {
  return (e = +e) == 1 ? gi : function(r, n) {
    return n - r ? rs(r, n, e) : Gr(isNaN(r) ? n : r);
  };
}
function gi(e, r) {
  var n = r - e;
  return n ? ts(e, n) : Gr(isNaN(e) ? r : e);
}
const yr = function e(r) {
  var n = ns(r);
  function i(o, s) {
    var u = n((o = Fr(o)).r, (s = Fr(s)).r), f = n(o.g, s.g), c = n(o.b, s.b), p = gi(o.opacity, s.opacity);
    return function(h) {
      return o.r = u(h), o.g = f(h), o.b = c(h), o.opacity = p(h), o + "";
    };
  }
  return i.gamma = e, i;
}(1);
function is(e, r) {
  r || (r = []);
  var n = e ? Math.min(r.length, e.length) : 0, i = r.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o)
      i[o] = e[o] * (1 - s) + r[o] * s;
    return i;
  };
}
function os(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function as(e, r) {
  var n = r ? r.length : 0, i = e ? Math.min(n, e.length) : 0, o = new Array(i), s = new Array(n), u;
  for (u = 0; u < i; ++u)
    o[u] = Jr(e[u], r[u]);
  for (; u < n; ++u)
    s[u] = r[u];
  return function(f) {
    for (u = 0; u < i; ++u)
      s[u] = o[u](f);
    return s;
  };
}
function ss(e, r) {
  var n = new Date();
  return e = +e, r = +r, function(i) {
    return n.setTime(e * (1 - i) + r * i), n;
  };
}
function je(e, r) {
  return e = +e, r = +r, function(n) {
    return e * (1 - n) + r * n;
  };
}
function us(e, r) {
  var n = {}, i = {}, o;
  (e === null || typeof e != "object") && (e = {}), (r === null || typeof r != "object") && (r = {});
  for (o in r)
    o in e ? n[o] = Jr(e[o], r[o]) : i[o] = r[o];
  return function(s) {
    for (o in n)
      i[o] = n[o](s);
    return i;
  };
}
var Dr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Tr = new RegExp(Dr.source, "g");
function cs(e) {
  return function() {
    return e;
  };
}
function ls(e) {
  return function(r) {
    return e(r) + "";
  };
}
function vi(e, r) {
  var n = Dr.lastIndex = Tr.lastIndex = 0, i, o, s, u = -1, f = [], c = [];
  for (e = e + "", r = r + ""; (i = Dr.exec(e)) && (o = Tr.exec(r)); )
    (s = o.index) > n && (s = r.slice(n, s), f[u] ? f[u] += s : f[++u] = s), (i = i[0]) === (o = o[0]) ? f[u] ? f[u] += o : f[++u] = o : (f[++u] = null, c.push({ i: u, x: je(i, o) })), n = Tr.lastIndex;
  return n < r.length && (s = r.slice(n), f[u] ? f[u] += s : f[++u] = s), f.length < 2 ? c[0] ? ls(c[0].x) : cs(r) : (r = c.length, function(p) {
    for (var h = 0, d; h < r; ++h)
      f[(d = c[h]).i] = d.x(p);
    return f.join("");
  });
}
function Jr(e, r) {
  var n = typeof r, i;
  return r == null || n === "boolean" ? Gr(r) : (n === "number" ? je : n === "string" ? (i = wt(r)) ? (r = i, yr) : vi : r instanceof wt ? yr : r instanceof Date ? ss : os(r) ? is : Array.isArray(r) ? as : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? us : je)(e, r);
}
function fs(e, r) {
  return e = +e, r = +r, function(n) {
    return Math.round(e * (1 - n) + r * n);
  };
}
var _n = 180 / Math.PI, Ir = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function mi(e, r, n, i, o, s) {
  var u, f, c;
  return (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u), (c = e * n + r * i) && (n -= e * c, i -= r * c), (f = Math.sqrt(n * n + i * i)) && (n /= f, i /= f, c /= f), e * i < r * n && (e = -e, r = -r, c = -c, u = -u), {
    translateX: o,
    translateY: s,
    rotate: Math.atan2(r, e) * _n,
    skewX: Math.atan(c) * _n,
    scaleX: u,
    scaleY: f
  };
}
var Jt;
function ps(e) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return r.isIdentity ? Ir : mi(r.a, r.b, r.c, r.d, r.e, r.f);
}
function hs(e) {
  return e == null || (Jt || (Jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jt.setAttribute("transform", e), !(e = Jt.transform.baseVal.consolidate())) ? Ir : (e = e.matrix, mi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function bi(e, r, n, i) {
  function o(p) {
    return p.length ? p.pop() + " " : "";
  }
  function s(p, h, d, g, v, S) {
    if (p !== d || h !== g) {
      var A = v.push("translate(", null, r, null, n);
      S.push({ i: A - 4, x: je(p, d) }, { i: A - 2, x: je(h, g) });
    } else
      (d || g) && v.push("translate(" + d + r + g + n);
  }
  function u(p, h, d, g) {
    p !== h ? (p - h > 180 ? h += 360 : h - p > 180 && (p += 360), g.push({ i: d.push(o(d) + "rotate(", null, i) - 2, x: je(p, h) })) : h && d.push(o(d) + "rotate(" + h + i);
  }
  function f(p, h, d, g) {
    p !== h ? g.push({ i: d.push(o(d) + "skewX(", null, i) - 2, x: je(p, h) }) : h && d.push(o(d) + "skewX(" + h + i);
  }
  function c(p, h, d, g, v, S) {
    if (p !== d || h !== g) {
      var A = v.push(o(v) + "scale(", null, ",", null, ")");
      S.push({ i: A - 4, x: je(p, d) }, { i: A - 2, x: je(h, g) });
    } else
      (d !== 1 || g !== 1) && v.push(o(v) + "scale(" + d + "," + g + ")");
  }
  return function(p, h) {
    var d = [], g = [];
    return p = e(p), h = e(h), s(p.translateX, p.translateY, h.translateX, h.translateY, d, g), u(p.rotate, h.rotate, d, g), f(p.skewX, h.skewX, d, g), c(p.scaleX, p.scaleY, h.scaleX, h.scaleY, d, g), p = h = null, function(v) {
      for (var S = -1, A = g.length, T; ++S < A; )
        d[(T = g[S]).i] = T.x(v);
      return d.join("");
    };
  };
}
var ds = bi(ps, "px, ", "px)", "deg)"), ys = bi(hs, ", ", ")", ")");
function gs(e, r) {
  var n, i;
  return function() {
    var o = Ie(this, e), s = o.tween;
    if (s !== n) {
      i = n = s;
      for (var u = 0, f = i.length; u < f; ++u)
        if (i[u].name === r) {
          i = i.slice(), i.splice(u, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function vs(e, r, n) {
  var i, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = Ie(this, e), u = s.tween;
    if (u !== i) {
      o = (i = u).slice();
      for (var f = { name: r, value: n }, c = 0, p = o.length; c < p; ++c)
        if (o[c].name === r) {
          o[c] = f;
          break;
        }
      c === p && o.push(f);
    }
    s.tween = o;
  };
}
function ms(e, r) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Fe(this.node(), n).tween, o = 0, s = i.length, u; o < s; ++o)
      if ((u = i[o]).name === e)
        return u.value;
    return null;
  }
  return this.each((r == null ? gs : vs)(n, e, r));
}
function Kr(e, r, n) {
  var i = e._id;
  return e.each(function() {
    var o = Ie(this, i);
    (o.value || (o.value = {}))[r] = n.apply(this, arguments);
  }), function(o) {
    return Fe(o, i).value[r];
  };
}
function _i(e, r) {
  var n;
  return (typeof r == "number" ? je : r instanceof wt ? yr : (n = wt(r)) ? (r = n, yr) : vi)(e, r);
}
function bs(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _s(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ws(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttribute(e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function xs(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = this.getAttributeNS(e.space, e.local);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function ks(e, r, n) {
  var i, o, s;
  return function() {
    var u, f = n(this), c;
    return f == null ? void this.removeAttribute(e) : (u = this.getAttribute(e), c = f + "", u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f)));
  };
}
function Es(e, r, n) {
  var i, o, s;
  return function() {
    var u, f = n(this), c;
    return f == null ? void this.removeAttributeNS(e.space, e.local) : (u = this.getAttributeNS(e.space, e.local), c = f + "", u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f)));
  };
}
function Ss(e, r) {
  var n = wr(e), i = n === "transform" ? ys : _i;
  return this.attrTween(e, typeof r == "function" ? (n.local ? Es : ks)(n, i, Kr(this, "attr." + e, r)) : r == null ? (n.local ? _s : bs)(n) : (n.local ? xs : ws)(n, i, r));
}
function Rs(e, r) {
  return function(n) {
    this.setAttribute(e, r.call(this, n));
  };
}
function Os(e, r) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, r.call(this, n));
  };
}
function Ts(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Os(e, s)), n;
  }
  return o._value = r, o;
}
function $s(e, r) {
  var n, i;
  function o() {
    var s = r.apply(this, arguments);
    return s !== i && (n = (i = s) && Rs(e, s)), n;
  }
  return o._value = r, o;
}
function Ns(e, r) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (r == null)
    return this.tween(n, null);
  if (typeof r != "function")
    throw new Error();
  var i = wr(e);
  return this.tween(n, (i.local ? Ts : $s)(i, r));
}
function Cs(e, r) {
  return function() {
    qr(this, e).delay = +r.apply(this, arguments);
  };
}
function Ps(e, r) {
  return r = +r, function() {
    qr(this, e).delay = r;
  };
}
function js(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Cs : Ps)(r, e)) : Fe(this.node(), r).delay;
}
function As(e, r) {
  return function() {
    Ie(this, e).duration = +r.apply(this, arguments);
  };
}
function Ms(e, r) {
  return r = +r, function() {
    Ie(this, e).duration = r;
  };
}
function Fs(e) {
  var r = this._id;
  return arguments.length ? this.each((typeof e == "function" ? As : Ms)(r, e)) : Fe(this.node(), r).duration;
}
function Ds(e, r) {
  if (typeof r != "function")
    throw new Error();
  return function() {
    Ie(this, e).ease = r;
  };
}
function Is(e) {
  var r = this._id;
  return arguments.length ? this.each(Ds(r, e)) : Fe(this.node(), r).ease;
}
function Ls(e, r) {
  return function() {
    var n = r.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Ie(this, e).ease = n;
  };
}
function Ws(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Ls(this._id, e));
}
function zs(e) {
  typeof e != "function" && (e = Zn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, f = i[o] = [], c, p = 0; p < u; ++p)
      (c = s[p]) && e.call(c, c.__data__, p, s) && f.push(c);
  return new Ve(i, this._parents, this._name, this._id);
}
function Vs(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var r = this._groups, n = e._groups, i = r.length, o = n.length, s = Math.min(i, o), u = new Array(i), f = 0; f < s; ++f)
    for (var c = r[f], p = n[f], h = c.length, d = u[f] = new Array(h), g, v = 0; v < h; ++v)
      (g = c[v] || p[v]) && (d[v] = g);
  for (; f < i; ++f)
    u[f] = r[f];
  return new Ve(u, this._parents, this._name, this._id);
}
function Ys(e) {
  return (e + "").trim().split(/^|\s+/).every(function(r) {
    var n = r.indexOf(".");
    return n >= 0 && (r = r.slice(0, n)), !r || r === "start";
  });
}
function Us(e, r, n) {
  var i, o, s = Ys(r) ? qr : Ie;
  return function() {
    var u = s(this, e), f = u.on;
    f !== i && (o = (i = f).copy()).on(r, n), u.on = o;
  };
}
function Hs(e, r) {
  var n = this._id;
  return arguments.length < 2 ? Fe(this.node(), n).on.on(e) : this.each(Us(n, e, r));
}
function Bs(e) {
  return function() {
    var r = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    r && r.removeChild(this);
  };
}
function qs() {
  return this.on("end.remove", Bs(this._id));
}
function Xs(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Ur(e));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var f = i[u], c = f.length, p = s[u] = new Array(c), h, d, g = 0; g < c; ++g)
      (h = f[g]) && (d = e.call(h, h.__data__, g, f)) && ("__data__" in h && (d.__data__ = h.__data__), p[g] = d, kr(p[g], r, n, g, p, Fe(h, n)));
  return new Ve(s, this._parents, r, n);
}
function Gs(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Kn(e));
  for (var i = this._groups, o = i.length, s = [], u = [], f = 0; f < o; ++f)
    for (var c = i[f], p = c.length, h, d = 0; d < p; ++d)
      if (h = c[d]) {
        for (var g = e.call(h, h.__data__, d, c), v, S = Fe(h, n), A = 0, T = g.length; A < T; ++A)
          (v = g[A]) && kr(v, r, n, A, g, S);
        s.push(g), u.push(h);
      }
  return new Ve(s, u, r, n);
}
var Js = Yt.prototype.constructor;
function Ks() {
  return new Js(this._groups, this._parents);
}
function Zs(e, r) {
  var n, i, o;
  return function() {
    var s = Et(this, e), u = (this.style.removeProperty(e), Et(this, e));
    return s === u ? null : s === n && u === i ? o : o = r(n = s, i = u);
  };
}
function wi(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Qs(e, r, n) {
  var i, o = n + "", s;
  return function() {
    var u = Et(this, e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function eu(e, r, n) {
  var i, o, s;
  return function() {
    var u = Et(this, e), f = n(this), c = f + "";
    return f == null && (c = f = (this.style.removeProperty(e), Et(this, e))), u === c ? null : u === i && c === o ? s : (o = c, s = r(i = u, f));
  };
}
function tu(e, r) {
  var n, i, o, s = "style." + r, u = "end." + s, f;
  return function() {
    var c = Ie(this, e), p = c.on, h = c.value[s] == null ? f || (f = wi(r)) : void 0;
    (p !== n || o !== h) && (i = (n = p).copy()).on(u, o = h), c.on = i;
  };
}
function ru(e, r, n) {
  var i = (e += "") == "transform" ? ds : _i;
  return r == null ? this.styleTween(e, Zs(e, i)).on("end.style." + e, wi(e)) : typeof r == "function" ? this.styleTween(e, eu(e, i, Kr(this, "style." + e, r))).each(tu(this._id, e)) : this.styleTween(e, Qs(e, i, r), n).on("end.style." + e, null);
}
function nu(e, r, n) {
  return function(i) {
    this.style.setProperty(e, r.call(this, i), n);
  };
}
function iu(e, r, n) {
  var i, o;
  function s() {
    var u = r.apply(this, arguments);
    return u !== o && (i = (o = u) && nu(e, u, n)), i;
  }
  return s._value = r, s;
}
function ou(e, r, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (r == null)
    return this.tween(i, null);
  if (typeof r != "function")
    throw new Error();
  return this.tween(i, iu(e, r, n == null ? "" : n));
}
function au(e) {
  return function() {
    this.textContent = e;
  };
}
function su(e) {
  return function() {
    var r = e(this);
    this.textContent = r == null ? "" : r;
  };
}
function uu(e) {
  return this.tween("text", typeof e == "function" ? su(Kr(this, "text", e)) : au(e == null ? "" : e + ""));
}
function cu(e) {
  return function(r) {
    this.textContent = e.call(this, r);
  };
}
function lu(e) {
  var r, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (r = (n = o) && cu(o)), r;
  }
  return i._value = e, i;
}
function fu(e) {
  var r = "text";
  if (arguments.length < 1)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, lu(e));
}
function pu() {
  for (var e = this._name, r = this._id, n = xi(), i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], f = u.length, c, p = 0; p < f; ++p)
      if (c = u[p]) {
        var h = Fe(c, r);
        kr(c, e, n, p, u, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Ve(i, this._parents, e, n);
}
function hu() {
  var e, r, n = this, i = n._id, o = n.size();
  return new Promise(function(s, u) {
    var f = { value: u }, c = { value: function() {
      --o === 0 && s();
    } };
    n.each(function() {
      var p = Ie(this, i), h = p.on;
      h !== e && (r = (e = h).copy(), r._.cancel.push(f), r._.interrupt.push(f), r._.end.push(c)), p.on = r;
    }), o === 0 && s();
  });
}
var du = 0;
function Ve(e, r, n, i) {
  this._groups = e, this._parents = r, this._name = n, this._id = i;
}
function xi() {
  return ++du;
}
var Le = Yt.prototype;
Ve.prototype = {
  constructor: Ve,
  select: Xs,
  selectAll: Gs,
  selectChild: Le.selectChild,
  selectChildren: Le.selectChildren,
  filter: zs,
  merge: Vs,
  selection: Ks,
  transition: pu,
  call: Le.call,
  nodes: Le.nodes,
  node: Le.node,
  size: Le.size,
  empty: Le.empty,
  each: Le.each,
  on: Hs,
  attr: Ss,
  attrTween: Ns,
  style: ru,
  styleTween: ou,
  text: uu,
  textTween: fu,
  remove: qs,
  tween: ms,
  delay: js,
  duration: Fs,
  ease: Is,
  easeVarying: Ws,
  end: hu,
  [Symbol.iterator]: Le[Symbol.iterator]
};
function yu(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var gu = {
  time: null,
  delay: 0,
  duration: 250,
  ease: yu
};
function vu(e, r) {
  for (var n; !(n = e.__transition) || !(n = n[r]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${r} not found`);
  return n;
}
function mu(e) {
  var r, n;
  e instanceof Ve ? (r = e._id, e = e._name) : (r = xi(), (n = gu).time = Br(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], f = u.length, c, p = 0; p < f; ++p)
      (c = u[p]) && kr(c, e, r, p, u, n || vu(c, r));
  return new Ve(i, this._parents, e, r);
}
Yt.prototype.interrupt = Va;
Yt.prototype.transition = mu;
const wn = {
  wicks: "line",
  candles: "rect"
}, bu = (e, r, n, i) => {
  const {
    scales: { xScale: o },
    utils: { scaledHeight: s, scaledY: u }
  } = i, { offset: f } = n, c = Lt({}), p = Lt(!1), [h, d] = We({
    item: void 0,
    position: void 0
  }), g = vt(() => It(e.current), [e.current]), v = vt(
    (T, R = g()) => R.selectAll(`${wn[T]}.${T}`).data(r),
    [r]
  ), S = vt(
    (T) => {
      var R;
      return c.current[T] = (R = c.current[T]) != null ? R : g().append("g").classed(`${T}-group`, !0).attr("clip-path", "url(#chart-contents)"), c.current[T];
    },
    [c]
  ), A = vt(
    (T, R) => {
      let x = v(T, S(T));
      x.size() !== r.length && (x = x.enter().append(wn[T]));
      const L = () => x.transition().duration(Ta), V = (P) => Number(o(P.date)) + (T === "wicks" ? +o.bandwidth() / 2 : 0) + f, M = (P) => u(P[R[0]], P[R[1]]), $ = (P) => s(P[R[0]], P[R[1]]), F = (P) => M(P) + $(P);
      return T === "candles" ? (L().attr("width", () => +o.bandwidth()).attr("height", $).attr("x", V).attr("y", M), x.classed("is-increased", (P) => P.close > P.open).classed("is-decreased", (P) => P.close < P.open).on("click", ({ target: P }, W) => {
        x.classed("is-active", !1), It(P).classed("is-active", !0), p.current = !0, d({
          item: W,
          position: { x: V(W) + Ae * 2, y: F(W) + 8 }
        });
      }).on("mouseover", (P, W) => {
        p.current || d({
          item: W
        });
      }).on("mouseout", (P, W) => {
        p.current || d({
          item: void 0
        });
      })) : L().attr("x1", V).attr("y1", M).attr("x2", V).attr("y2", F), x.classed(T, !0).exit().remove(), x;
    },
    [o, u]
  );
  return ze(() => {
    S("wicks"), S("candles");
    const T = ({ target: R }) => {
      R.nodeName !== "rect" && (g().selectAll("rect").classed("is-active", !1), p.current = !1, d(({ position: x }) => ({ item: void 0, position: x })));
    };
    return addEventListener("resize", T), addEventListener("click", T), () => {
      removeEventListener("click", T), removeEventListener("resize", T);
    };
  }, []), ze(() => {
    var T;
    (T = o == null ? void 0 : o.bandwidth) != null && T.call(o) && (A("wicks", ["low", "high"]), A("candles", ["open", "close"]));
  }, [o, u]), h;
};
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ki = "Expected a function", xn = 0 / 0, _u = "[object Symbol]", wu = /^\s+|\s+$/g, xu = /^[-+]0x[0-9a-f]+$/i, ku = /^0b[01]+$/i, Eu = /^0o[0-7]+$/i, Su = parseInt, Ru = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, Ou = typeof self == "object" && self && self.Object === Object && self, Tu = Ru || Ou || Function("return this")(), $u = Object.prototype, Nu = $u.toString, Cu = Math.max, Pu = Math.min, $r = function() {
  return Tu.Date.now();
};
function ju(e, r, n) {
  var i, o, s, u, f, c, p = 0, h = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ki);
  r = kn(r) || 0, gr(n) && (h = !!n.leading, d = "maxWait" in n, s = d ? Cu(kn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v($) {
    var F = i, P = o;
    return i = o = void 0, p = $, u = e.apply(P, F), u;
  }
  function S($) {
    return p = $, f = setTimeout(R, r), h ? v($) : u;
  }
  function A($) {
    var F = $ - c, P = $ - p, W = r - F;
    return d ? Pu(W, s - P) : W;
  }
  function T($) {
    var F = $ - c, P = $ - p;
    return c === void 0 || F >= r || F < 0 || d && P >= s;
  }
  function R() {
    var $ = $r();
    if (T($))
      return x($);
    f = setTimeout(R, A($));
  }
  function x($) {
    return f = void 0, g && i ? v($) : (i = o = void 0, u);
  }
  function L() {
    f !== void 0 && clearTimeout(f), p = 0, i = c = o = f = void 0;
  }
  function V() {
    return f === void 0 ? u : x($r());
  }
  function M() {
    var $ = $r(), F = T($);
    if (i = arguments, o = this, c = $, F) {
      if (f === void 0)
        return S(c);
      if (d)
        return f = setTimeout(R, r), v(c);
    }
    return f === void 0 && (f = setTimeout(R, r)), u;
  }
  return M.cancel = L, M.flush = V, M;
}
function Au(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(ki);
  return gr(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), ju(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function gr(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Mu(e) {
  return !!e && typeof e == "object";
}
function Fu(e) {
  return typeof e == "symbol" || Mu(e) && Nu.call(e) == _u;
}
function kn(e) {
  if (typeof e == "number")
    return e;
  if (Fu(e))
    return xn;
  if (gr(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = gr(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(wu, "");
  var n = ku.test(e);
  return n || Eu.test(e) ? Su(e.slice(2), n ? 2 : 8) : xu.test(e) ? xn : +e;
}
var Du = Au;
const { abs: Iu, round: En } = Math, Lu = (e, r, n) => {
  const [i, o] = We({
    width: 0,
    height: 0
  }), [s, u] = We({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), { zoomLevel: f, panLevel: c } = n;
  return ze(() => {
    const p = Du(() => {
      const { clientWidth: h, clientHeight: d } = e.current;
      o({ width: h, height: d });
    }, 200);
    return p(), addEventListener("resize", p), () => removeEventListener("resize", p);
  }, []), ze(() => {
    if (!r)
      return;
    const { width: p } = i, h = $a * (1 + ui) * f, d = h * r, g = p - St[1] + Ae * 2;
    let v = c * f - d + g;
    v = v <= 0 ? v : 0, v = d > p ? v : g - d, v = Iu(v - g) <= d ? v : -d + g;
    const S = En((v * -1 - Ae) / h), A = En((v * -1 + g) / h);
    u({ first: S, last: A, offset: v, totalWidth: d });
  }, [f, c, r, i.width]), { visibleRange: s, sizes: i };
}, Wu = (e = "") => new Date(e).toLocaleDateString("en-UK");
function ur(e, r) {
  return e == null || r == null ? NaN : e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function zu(e, r) {
  return e == null || r == null ? NaN : r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
}
function Ei(e) {
  let r, n, i;
  e.length !== 2 ? (r = ur, n = (f, c) => ur(e(f), c), i = (f, c) => e(f) - c) : (r = e === ur || e === zu ? e : Vu, n = e, i = e);
  function o(f, c, p = 0, h = f.length) {
    if (p < h) {
      if (r(c, c) !== 0)
        return h;
      do {
        const d = p + h >>> 1;
        n(f[d], c) < 0 ? p = d + 1 : h = d;
      } while (p < h);
    }
    return p;
  }
  function s(f, c, p = 0, h = f.length) {
    if (p < h) {
      if (r(c, c) !== 0)
        return h;
      do {
        const d = p + h >>> 1;
        n(f[d], c) <= 0 ? p = d + 1 : h = d;
      } while (p < h);
    }
    return p;
  }
  function u(f, c, p = 0, h = f.length) {
    const d = o(f, c, p, h - 1);
    return d > p && i(f[d - 1], c) > -i(f[d], c) ? d - 1 : d;
  }
  return { left: o, center: u, right: s };
}
function Vu() {
  return 0;
}
function Yu(e) {
  return e === null ? NaN : +e;
}
const Uu = Ei(ur), Hu = Uu.right;
Ei(Yu).center;
const Bu = Hu;
class Sn extends Map {
  constructor(r, n = Gu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), r != null)
      for (const [i, o] of r)
        this.set(i, o);
  }
  get(r) {
    return super.get(Rn(this, r));
  }
  has(r) {
    return super.has(Rn(this, r));
  }
  set(r, n) {
    return super.set(qu(this, r), n);
  }
  delete(r) {
    return super.delete(Xu(this, r));
  }
}
function Rn({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : n;
}
function qu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function Xu({ _intern: e, _key: r }, n) {
  const i = r(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function Gu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
var Lr = Math.sqrt(50), Wr = Math.sqrt(10), zr = Math.sqrt(2);
function Ju(e, r, n) {
  var i, o = -1, s, u, f;
  if (r = +r, e = +e, n = +n, e === r && n > 0)
    return [e];
  if ((i = r < e) && (s = e, e = r, r = s), (f = Si(e, r, n)) === 0 || !isFinite(f))
    return [];
  if (f > 0) {
    let c = Math.round(e / f), p = Math.round(r / f);
    for (c * f < e && ++c, p * f > r && --p, u = new Array(s = p - c + 1); ++o < s; )
      u[o] = (c + o) * f;
  } else {
    f = -f;
    let c = Math.round(e * f), p = Math.round(r * f);
    for (c / f < e && ++c, p / f > r && --p, u = new Array(s = p - c + 1); ++o < s; )
      u[o] = (c + o) / f;
  }
  return i && u.reverse(), u;
}
function Si(e, r, n) {
  var i = (r - e) / Math.max(0, n), o = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, o);
  return o >= 0 ? (s >= Lr ? 10 : s >= Wr ? 5 : s >= zr ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (s >= Lr ? 10 : s >= Wr ? 5 : s >= zr ? 2 : 1);
}
function Ku(e, r, n) {
  var i = Math.abs(r - e) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / o;
  return s >= Lr ? o *= 10 : s >= Wr ? o *= 5 : s >= zr && (o *= 2), r < e ? -o : o;
}
function Zu(e, r, n) {
  e = +e, r = +r, n = (o = arguments.length) < 2 ? (r = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var i = -1, o = Math.max(0, Math.ceil((r - e) / n)) | 0, s = new Array(o); ++i < o; )
    s[i] = e + i * n;
  return s;
}
function Zr(e, r) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(r).domain(e);
      break;
  }
  return this;
}
const On = Symbol("implicit");
function Ri() {
  var e = new Sn(), r = [], n = [], i = On;
  function o(s) {
    let u = e.get(s);
    if (u === void 0) {
      if (i !== On)
        return i;
      e.set(s, u = r.push(s) - 1);
    }
    return n[u % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length)
      return r.slice();
    r = [], e = new Sn();
    for (const u of s)
      e.has(u) || e.set(u, r.push(u) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (i = s, o) : i;
  }, o.copy = function() {
    return Ri(r, n).unknown(i);
  }, Zr.apply(o, arguments), o;
}
function Oi() {
  var e = Ri().unknown(void 0), r = e.domain, n = e.range, i = 0, o = 1, s, u, f = !1, c = 0, p = 0, h = 0.5;
  delete e.unknown;
  function d() {
    var g = r().length, v = o < i, S = v ? o : i, A = v ? i : o;
    s = (A - S) / Math.max(1, g - c + p * 2), f && (s = Math.floor(s)), S += (A - S - s * (g - c)) * h, u = s * (1 - c), f && (S = Math.round(S), u = Math.round(u));
    var T = Zu(g).map(function(R) {
      return S + s * R;
    });
    return n(v ? T.reverse() : T);
  }
  return e.domain = function(g) {
    return arguments.length ? (r(g), d()) : r();
  }, e.range = function(g) {
    return arguments.length ? ([i, o] = g, i = +i, o = +o, d()) : [i, o];
  }, e.rangeRound = function(g) {
    return [i, o] = g, i = +i, o = +o, f = !0, d();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return s;
  }, e.round = function(g) {
    return arguments.length ? (f = !!g, d()) : f;
  }, e.padding = function(g) {
    return arguments.length ? (c = Math.min(1, p = +g), d()) : c;
  }, e.paddingInner = function(g) {
    return arguments.length ? (c = Math.min(1, g), d()) : c;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (p = +g, d()) : p;
  }, e.align = function(g) {
    return arguments.length ? (h = Math.max(0, Math.min(1, g)), d()) : h;
  }, e.copy = function() {
    return Oi(r(), [i, o]).round(f).paddingInner(c).paddingOuter(p).align(h);
  }, Zr.apply(d(), arguments);
}
function Qu(e) {
  return function() {
    return e;
  };
}
function ec(e) {
  return +e;
}
var Tn = [0, 1];
function xt(e) {
  return e;
}
function Vr(e, r) {
  return (r -= e = +e) ? function(n) {
    return (n - e) / r;
  } : Qu(isNaN(r) ? NaN : 0.5);
}
function tc(e, r) {
  var n;
  return e > r && (n = e, e = r, r = n), function(i) {
    return Math.max(e, Math.min(r, i));
  };
}
function rc(e, r, n) {
  var i = e[0], o = e[1], s = r[0], u = r[1];
  return o < i ? (i = Vr(o, i), s = n(u, s)) : (i = Vr(i, o), s = n(s, u)), function(f) {
    return s(i(f));
  };
}
function nc(e, r, n) {
  var i = Math.min(e.length, r.length) - 1, o = new Array(i), s = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), r = r.slice().reverse()); ++u < i; )
    o[u] = Vr(e[u], e[u + 1]), s[u] = n(r[u], r[u + 1]);
  return function(f) {
    var c = Bu(e, f, 1, i) - 1;
    return s[c](o[c](f));
  };
}
function ic(e, r) {
  return r.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function oc() {
  var e = Tn, r = Tn, n = Jr, i, o, s, u = xt, f, c, p;
  function h() {
    var g = Math.min(e.length, r.length);
    return u !== xt && (u = tc(e[0], e[g - 1])), f = g > 2 ? nc : rc, c = p = null, d;
  }
  function d(g) {
    return g == null || isNaN(g = +g) ? s : (c || (c = f(e.map(i), r, n)))(i(u(g)));
  }
  return d.invert = function(g) {
    return u(o((p || (p = f(r, e.map(i), je)))(g)));
  }, d.domain = function(g) {
    return arguments.length ? (e = Array.from(g, ec), h()) : e.slice();
  }, d.range = function(g) {
    return arguments.length ? (r = Array.from(g), h()) : r.slice();
  }, d.rangeRound = function(g) {
    return r = Array.from(g), n = fs, h();
  }, d.clamp = function(g) {
    return arguments.length ? (u = g ? !0 : xt, h()) : u !== xt;
  }, d.interpolate = function(g) {
    return arguments.length ? (n = g, h()) : n;
  }, d.unknown = function(g) {
    return arguments.length ? (s = g, d) : s;
  }, function(g, v) {
    return i = g, o = v, h();
  };
}
function ac() {
  return oc()(xt, xt);
}
function sc(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function vr(e, r) {
  if ((n = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Ot(e) {
  return e = vr(Math.abs(e)), e ? e[1] : NaN;
}
function uc(e, r) {
  return function(n, i) {
    for (var o = n.length, s = [], u = 0, f = e[0], c = 0; o > 0 && f > 0 && (c + f + 1 > i && (f = Math.max(1, i - c)), s.push(n.substring(o -= f, o + f)), !((c += f + 1) > i)); )
      f = e[u = (u + 1) % e.length];
    return s.reverse().join(r);
  };
}
function cc(e) {
  return function(r) {
    return r.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var lc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mr(e) {
  if (!(r = lc.exec(e)))
    throw new Error("invalid format: " + e);
  var r;
  return new Qr({
    fill: r[1],
    align: r[2],
    sign: r[3],
    symbol: r[4],
    zero: r[5],
    width: r[6],
    comma: r[7],
    precision: r[8] && r[8].slice(1),
    trim: r[9],
    type: r[10]
  });
}
mr.prototype = Qr.prototype;
function Qr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Qr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fc(e) {
  e:
    for (var r = e.length, n = 1, i = -1, o; n < r; ++n)
      switch (e[n]) {
        case ".":
          i = o = n;
          break;
        case "0":
          i === 0 && (i = n), o = n;
          break;
        default:
          if (!+e[n])
            break e;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? e.slice(0, i) + e.slice(o + 1) : e;
}
var Ti;
function pc(e, r) {
  var n = vr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1], s = o - (Ti = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, u = i.length;
  return s === u ? i : s > u ? i + new Array(s - u + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + vr(e, Math.max(0, r + s - 1))[0];
}
function $n(e, r) {
  var n = vr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Nn = {
  "%": (e, r) => (e * 100).toFixed(r),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: sc,
  e: (e, r) => e.toExponential(r),
  f: (e, r) => e.toFixed(r),
  g: (e, r) => e.toPrecision(r),
  o: (e) => Math.round(e).toString(8),
  p: (e, r) => $n(e * 100, r),
  r: $n,
  s: pc,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Cn(e) {
  return e;
}
var Pn = Array.prototype.map, jn = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hc(e) {
  var r = e.grouping === void 0 || e.thousands === void 0 ? Cn : uc(Pn.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Cn : cc(Pn.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", f = e.minus === void 0 ? "\u2212" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function p(d) {
    d = mr(d);
    var g = d.fill, v = d.align, S = d.sign, A = d.symbol, T = d.zero, R = d.width, x = d.comma, L = d.precision, V = d.trim, M = d.type;
    M === "n" ? (x = !0, M = "g") : Nn[M] || (L === void 0 && (L = 12), V = !0, M = "g"), (T || g === "0" && v === "=") && (T = !0, g = "0", v = "=");
    var $ = A === "$" ? n : A === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", F = A === "$" ? i : /[%p]/.test(M) ? u : "", P = Nn[M], W = /[defgprs%]/.test(M);
    L = L === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function ee(j) {
      var z = $, N = F, I, H, te;
      if (M === "c")
        N = P(j) + N, j = "";
      else {
        j = +j;
        var re = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? c : P(Math.abs(j), L), V && (j = fc(j)), re && +j == 0 && S !== "+" && (re = !1), z = (re ? S === "(" ? S : f : S === "-" || S === "(" ? "" : S) + z, N = (M === "s" ? jn[8 + Ti / 3] : "") + N + (re && S === "(" ? ")" : ""), W) {
          for (I = -1, H = j.length; ++I < H; )
            if (te = j.charCodeAt(I), 48 > te || te > 57) {
              N = (te === 46 ? o + j.slice(I + 1) : j.slice(I)) + N, j = j.slice(0, I);
              break;
            }
        }
      }
      x && !T && (j = r(j, 1 / 0));
      var ne = z.length + j.length + N.length, X = ne < R ? new Array(R - ne + 1).join(g) : "";
      switch (x && T && (j = r(X + j, X.length ? R - N.length : 1 / 0), X = ""), v) {
        case "<":
          j = z + j + N + X;
          break;
        case "=":
          j = z + X + j + N;
          break;
        case "^":
          j = X.slice(0, ne = X.length >> 1) + z + j + N + X.slice(ne);
          break;
        default:
          j = X + z + j + N;
          break;
      }
      return s(j);
    }
    return ee.toString = function() {
      return d + "";
    }, ee;
  }
  function h(d, g) {
    var v = p((d = mr(d), d.type = "f", d)), S = Math.max(-8, Math.min(8, Math.floor(Ot(g) / 3))) * 3, A = Math.pow(10, -S), T = jn[8 + S / 3];
    return function(R) {
      return v(A * R) + T;
    };
  }
  return {
    format: p,
    formatPrefix: h
  };
}
var Zt, $i, Ni;
dc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function dc(e) {
  return Zt = hc(e), $i = Zt.format, Ni = Zt.formatPrefix, Zt;
}
function yc(e) {
  return Math.max(0, -Ot(Math.abs(e)));
}
function gc(e, r) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ot(r) / 3))) * 3 - Ot(Math.abs(e)));
}
function vc(e, r) {
  return e = Math.abs(e), r = Math.abs(r) - e, Math.max(0, Ot(r) - Ot(e)) + 1;
}
function mc(e, r, n, i) {
  var o = Ku(e, r, n), s;
  switch (i = mr(i == null ? ",f" : i), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(r));
      return i.precision == null && !isNaN(s = gc(o, u)) && (i.precision = s), Ni(i, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = vc(o, Math.max(Math.abs(e), Math.abs(r)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = yc(o)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return $i(i);
}
function bc(e) {
  var r = e.domain;
  return e.ticks = function(n) {
    var i = r();
    return Ju(i[0], i[i.length - 1], n == null ? 10 : n);
  }, e.tickFormat = function(n, i) {
    var o = r();
    return mc(o[0], o[o.length - 1], n == null ? 10 : n, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = r(), o = 0, s = i.length - 1, u = i[o], f = i[s], c, p, h = 10;
    for (f < u && (p = u, u = f, f = p, p = o, o = s, s = p); h-- > 0; ) {
      if (p = Si(u, f, n), p === c)
        return i[o] = u, i[s] = f, r(i);
      if (p > 0)
        u = Math.floor(u / p) * p, f = Math.ceil(f / p) * p;
      else if (p < 0)
        u = Math.ceil(u * p) / p, f = Math.floor(f * p) / p;
      else
        break;
      c = p;
    }
    return e;
  }, e;
}
function Ci() {
  var e = ac();
  return e.copy = function() {
    return ic(e, Ci());
  }, Zr.apply(e, arguments), bc(e);
}
const { abs: _c, min: An, max: wc } = Math, xc = (e, r) => {
  const { sizes: n, visibleRange: i } = r, [o, s] = We({
    xScale: (c) => c,
    yScale: (c) => c
  }), u = vt(
    (c, p) => _c(o.yScale(p) - o.yScale(c)) || 1,
    [o.yScale]
  ), f = vt(
    (c, p) => o.yScale(An(c, p)) - u(c, p) + Ae || 1,
    [o.yScale]
  );
  return ze(() => {
    if (!(e != null && e.length))
      return;
    const { first: c, last: p, totalWidth: h } = i, { height: d } = n, g = e.slice(c > 0 ? c : 0, p), v = An(...g.map(({ low: R }) => R)), S = wc(...g.map(({ high: R }) => R)), A = Oi().range([Ae, h - Ae]).domain(e.map(({ date: R }) => R)).padding(ui), T = Ci().domain([v - 20, S + 20]).range([d - St[0] - Ae, Ae]);
    s({ xScale: A, yScale: T });
  }, [i, n.height, e]), { utils: { scaledHeight: u, scaledY: f }, scales: o };
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pi = "Expected a function", Mn = 0 / 0, kc = "[object Symbol]", Ec = /^\s+|\s+$/g, Sc = /^[-+]0x[0-9a-f]+$/i, Rc = /^0b[01]+$/i, Oc = /^0o[0-7]+$/i, Tc = parseInt, $c = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, Nc = typeof self == "object" && self && self.Object === Object && self, Cc = $c || Nc || Function("return this")(), Pc = Object.prototype, jc = Pc.toString, Ac = Math.max, Mc = Math.min, Nr = function() {
  return Cc.Date.now();
};
function Fc(e, r, n) {
  var i, o, s, u, f, c, p = 0, h = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  r = Fn(r) || 0, br(n) && (h = !!n.leading, d = "maxWait" in n, s = d ? Ac(Fn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v($) {
    var F = i, P = o;
    return i = o = void 0, p = $, u = e.apply(P, F), u;
  }
  function S($) {
    return p = $, f = setTimeout(R, r), h ? v($) : u;
  }
  function A($) {
    var F = $ - c, P = $ - p, W = r - F;
    return d ? Mc(W, s - P) : W;
  }
  function T($) {
    var F = $ - c, P = $ - p;
    return c === void 0 || F >= r || F < 0 || d && P >= s;
  }
  function R() {
    var $ = Nr();
    if (T($))
      return x($);
    f = setTimeout(R, A($));
  }
  function x($) {
    return f = void 0, g && i ? v($) : (i = o = void 0, u);
  }
  function L() {
    f !== void 0 && clearTimeout(f), p = 0, i = c = o = f = void 0;
  }
  function V() {
    return f === void 0 ? u : x(Nr());
  }
  function M() {
    var $ = Nr(), F = T($);
    if (i = arguments, o = this, c = $, F) {
      if (f === void 0)
        return S(c);
      if (d)
        return f = setTimeout(R, r), v(c);
    }
    return f === void 0 && (f = setTimeout(R, r)), u;
  }
  return M.cancel = L, M.flush = V, M;
}
function Dc(e, r, n) {
  var i = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  return br(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Fc(e, r, {
    leading: i,
    maxWait: r,
    trailing: o
  });
}
function br(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function Ic(e) {
  return !!e && typeof e == "object";
}
function Lc(e) {
  return typeof e == "symbol" || Ic(e) && jc.call(e) == kc;
}
function Fn(e) {
  if (typeof e == "number")
    return e;
  if (Lc(e))
    return Mn;
  if (br(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = br(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Ec, "");
  var n = Rc.test(e);
  return n || Oc.test(e) ? Tc(e.slice(2), n ? 2 : 8) : Sc.test(e) ? Mn : +e;
}
var Wc = Dc;
const er = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, zc = de.div(
  ({ isVisible: e = !1 }) => _r`
    font-family: sans-serif;
    position: absolute;
    transition: all 0.2s;

    opacity: ${e ? 0.8 : 0};
    padding: 4px;
    border: 1px solid ${er.default};
    color: ${er.default};
    background-color: white;
    border-radius: 6px;

    ::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      border-bottom: 1px solid ${er.default};
      border-right: 1px solid ${er.default};
      rotate: -135deg;
      left: calc(50% - 5px);
      background: white;
      top: -6px;
      clip-path: polygon(90% 0, 100% 0, 100% 100%, 0 100%, 0 90%);
    }
  `
);
var ji = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Vc() {
  if (Dn)
    return Pt;
  Dn = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (h in c)
      i.call(c, h) && !s.hasOwnProperty(h) && (d[h] = c[h]);
    if (f && f.defaultProps)
      for (h in c = f.defaultProps, c)
        d[h] === void 0 && (d[h] = c[h]);
    return { $$typeof: r, type: f, key: g, ref: v, props: d, _owner: o.current };
  }
  return Pt.Fragment = n, Pt.jsx = u, Pt.jsxs = u, Pt;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Yc() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function T(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[A];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        L("error", t, l);
      }
    }
    function L(t, a, l) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var w = l.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var V = !1, M = !1, $ = !1, F = !1, P = !1, W;
    W = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || P || t === o || t === p || t === h || F || t === v || V || M || $ || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === W || t.getModuleId !== void 0));
    }
    function j(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function z(t) {
      return t.displayName || "Context";
    }
    function N(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return z(a) + ".Consumer";
          case u:
            var l = t;
            return z(l._context) + ".Provider";
          case c:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : N(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return N(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, H = 0, te, re, ne, X, ye, ge, ve;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Be() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        H++;
      }
    }
    function qe() {
      {
        if (H--, H === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, t, {
              value: te
            }),
            info: I({}, t, {
              value: re
            }),
            warn: I({}, t, {
              value: ne
            }),
            error: I({}, t, {
              value: X
            }),
            group: I({}, t, {
              value: ye
            }),
            groupCollapsed: I({}, t, {
              value: ge
            }),
            groupEnd: I({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function G(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (D) {
              y = D;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (D) {
              y = D;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            y = D;
          }
          t();
        }
      } catch (D) {
        if (D && y && typeof D.stack == "string") {
          for (var m = D.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var C = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, C), C;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? G(U) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, l) {
      return be(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ge(t.render);
          case d:
            return K(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return K(w(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(l);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, l, y, _) {
      {
        var w = Function.call.bind(Z);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), Q(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, Q(_), x("Failed %s type: %s", l, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = R.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var l = N(B.current.type);
        ue[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(B.current.type), t.ref), ue[l] = !0);
      }
    }
    function ot(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var l = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var st = function(t, a, l, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: w
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, l, y, _) {
      {
        var w, b = {}, m = null, O = null;
        l !== void 0 && (ke(l), m = "" + l), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, _));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(b, E), O && at(b, E);
        }
        return st(t, m, O, _, y, B.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(l);
      } else
        Re.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = N(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function lt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = lt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + N(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = T(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function ft(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === d))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = N(a);
          Ke(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = N(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, l, y, _, w) {
      {
        var b = ee(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (N(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ut(t, a, l, _, w);
        if (E == null)
          return E;
        if (b) {
          var C = a.children;
          if (C !== void 0)
            if (y)
              if (se(C)) {
                for (var U = 0; U < C.length; U++)
                  Ne(C[U], t);
                Object.freeze && Object.freeze(C);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(C, t);
        }
        return t === i ? pt(E) : ft(E), E;
      }
    }
    function ht(t, a, l) {
      return Ce(t, a, l, !0);
    }
    function dt(t, a, l) {
      return Ce(t, a, l, !1);
    }
    var yt = dt, gt = ht;
    tr.Fragment = i, tr.jsx = yt, tr.jsxs = gt;
  }()), tr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Vc() : e.exports = Yc();
})(ji);
const Uc = ji.exports.jsx, Hc = ({
  children: e,
  isVisible: r = !1,
  x: n = 0,
  y: i = 0
}) => {
  const o = Lt(null), [s, u] = We({
    x: n,
    y: i
  }), f = vt((c, p) => {
    var h, d;
    return u({
      x: c - ((d = (h = o.current) == null ? void 0 : h.clientWidth) != null ? d : 0) / 2,
      y: p + 24
    });
  }, [o.current]);
  return ze(() => {
    f(n, i);
    const c = Wc(({
      clientX: h,
      clientY: d
    }) => !n && !i && f(h, d), 100), p = () => {
      removeEventListener("mousemove", c);
    };
    return n || i ? p() : addEventListener("mousemove", c), p;
  }, [n, i]), /* @__PURE__ */ Uc(zc, {
    ref: o,
    isVisible: r,
    children: e,
    style: {
      left: s.x,
      top: s.y
    }
  });
}, Bc = de.div`
  & div {
    width: 100%;
    font-size: 0.8em;
    &:first-of-type {
      text-align: center;
      font-size: 1em;
    }
  }

  & em {
    float: right;
  }
`;
var en = { exports: {} }, jt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function qc() {
  if (Ln)
    return jt;
  Ln = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (h in c)
      i.call(c, h) && !s.hasOwnProperty(h) && (d[h] = c[h]);
    if (f && f.defaultProps)
      for (h in c = f.defaultProps, c)
        d[h] === void 0 && (d[h] = c[h]);
    return { $$typeof: r, type: f, key: g, ref: v, props: d, _owner: o.current };
  }
  return jt.Fragment = n, jt.jsx = u, jt.jsxs = u, jt;
}
var At = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Xc() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function T(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[A];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        L("error", t, l);
      }
    }
    function L(t, a, l) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var w = l.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var V = !1, M = !1, $ = !1, F = !1, P = !1, W;
    W = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || P || t === o || t === p || t === h || F || t === v || V || M || $ || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === W || t.getModuleId !== void 0));
    }
    function j(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function z(t) {
      return t.displayName || "Context";
    }
    function N(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return z(a) + ".Consumer";
          case u:
            var l = t;
            return z(l._context) + ".Provider";
          case c:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : N(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return N(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, H = 0, te, re, ne, X, ye, ge, ve;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Be() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        H++;
      }
    }
    function qe() {
      {
        if (H--, H === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, t, {
              value: te
            }),
            info: I({}, t, {
              value: re
            }),
            warn: I({}, t, {
              value: ne
            }),
            error: I({}, t, {
              value: X
            }),
            group: I({}, t, {
              value: ye
            }),
            groupCollapsed: I({}, t, {
              value: ge
            }),
            groupEnd: I({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function G(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (D) {
              y = D;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (D) {
              y = D;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            y = D;
          }
          t();
        }
      } catch (D) {
        if (D && y && typeof D.stack == "string") {
          for (var m = D.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var C = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, C), C;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? G(U) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, l) {
      return be(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ge(t.render);
          case d:
            return K(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return K(w(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(l);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, l, y, _) {
      {
        var w = Function.call.bind(Z);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), Q(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, Q(_), x("Failed %s type: %s", l, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = R.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var l = N(B.current.type);
        ue[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(B.current.type), t.ref), ue[l] = !0);
      }
    }
    function ot(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var l = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var st = function(t, a, l, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: w
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, l, y, _) {
      {
        var w, b = {}, m = null, O = null;
        l !== void 0 && (ke(l), m = "" + l), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, _));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(b, E), O && at(b, E);
        }
        return st(t, m, O, _, y, B.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(l);
      } else
        Re.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = N(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function lt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = lt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + N(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = T(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function ft(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === d))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = N(a);
          Ke(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = N(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, l, y, _, w) {
      {
        var b = ee(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (N(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ut(t, a, l, _, w);
        if (E == null)
          return E;
        if (b) {
          var C = a.children;
          if (C !== void 0)
            if (y)
              if (se(C)) {
                for (var U = 0; U < C.length; U++)
                  Ne(C[U], t);
                Object.freeze && Object.freeze(C);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(C, t);
        }
        return t === i ? pt(E) : ft(E), E;
      }
    }
    function ht(t, a, l) {
      return Ce(t, a, l, !0);
    }
    function dt(t, a, l) {
      return Ce(t, a, l, !1);
    }
    var yt = dt, gt = ht;
    At.Fragment = i, At.jsx = yt, At.jsxs = gt;
  }()), At;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = qc() : e.exports = Xc();
})(en);
const q = en.exports.jsx, Ue = en.exports.jsxs, Gc = ({
  item: e,
  position: r
}) => {
  const [n, i] = We(e), o = Lt();
  return ze(() => {
    if (e) {
      i(e), clearTimeout(o.current);
      return;
    }
    o.current = setTimeout(() => i(e), 200);
  }, [e]), /* @__PURE__ */ q(Hc, {
    isVisible: !!e,
    ...r,
    children: /* @__PURE__ */ Ue(Bc, {
      children: [/* @__PURE__ */ q("div", {
        children: /* @__PURE__ */ q("strong", {
          children: Wu(n == null ? void 0 : n.date)
        })
      }), /* @__PURE__ */ Ue("div", {
        children: ["Open: ", /* @__PURE__ */ q("em", {
          children: n == null ? void 0 : n.open
        })]
      }), /* @__PURE__ */ Ue("div", {
        children: ["Close: ", /* @__PURE__ */ q("em", {
          children: n == null ? void 0 : n.close
        })]
      }), /* @__PURE__ */ Ue("div", {
        children: ["High: ", /* @__PURE__ */ q("em", {
          children: n == null ? void 0 : n.high
        })]
      }), /* @__PURE__ */ Ue("div", {
        children: ["Low: ", /* @__PURE__ */ q("em", {
          children: n == null ? void 0 : n.low
        })]
      })]
    })
  });
}, zn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Jc = "font-family: serif;", Kc = de.button(
  ({ status: e, minWidth: r, margin: n }) => _r`
    ${Jc}
    border: 1px solid ${zn[e]};
    color: ${zn[e]};
    background-color: white;
    border-radius: 6px;
    min-width: ${r};
    padding: 8px;
    margin: ${n};
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
var Ai = { exports: {} }, Mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Zc() {
  if (Vn)
    return Mt;
  Vn = 1;
  var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, c, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (h in c)
      i.call(c, h) && !s.hasOwnProperty(h) && (d[h] = c[h]);
    if (f && f.defaultProps)
      for (h in c = f.defaultProps, c)
        d[h] === void 0 && (d[h] = c[h]);
    return { $$typeof: r, type: f, key: g, ref: v, props: d, _owner: o.current };
  }
  return Mt.Fragment = n, Mt.jsx = u, Mt.jsxs = u, Mt;
}
var rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function Qc() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, A = "@@iterator";
    function T(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[A];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          l[y - 1] = arguments[y];
        L("error", t, l);
      }
    }
    function L(t, a, l) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", l = l.concat([_]));
        var w = l.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var V = !1, M = !1, $ = !1, F = !1, P = !1, W;
    W = Symbol.for("react.module.reference");
    function ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || P || t === o || t === p || t === h || F || t === v || V || M || $ || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === f || t.$$typeof === c || t.$$typeof === W || t.getModuleId !== void 0));
    }
    function j(t, a, l) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function z(t) {
      return t.displayName || "Context";
    }
    function N(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var a = t;
            return z(a) + ".Consumer";
          case u:
            var l = t;
            return z(l._context) + ".Provider";
          case c:
            return j(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : N(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return N(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, H = 0, te, re, ne, X, ye, ge, ve;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Be() {
      {
        if (H === 0) {
          te = console.log, re = console.info, ne = console.warn, X = console.error, ye = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        H++;
      }
    }
    function qe() {
      {
        if (H--, H === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, t, {
              value: te
            }),
            info: I({}, t, {
              value: re
            }),
            warn: I({}, t, {
              value: ne
            }),
            error: I({}, t, {
              value: X
            }),
            group: I({}, t, {
              value: ye
            }),
            groupCollapsed: I({}, t, {
              value: ge
            }),
            groupEnd: I({}, t, {
              value: ve
            })
          });
        }
        H < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function G(t, a, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var y = _.stack.trim().match(/\n( *(at )?)/);
            oe = y && y[1] || "";
          }
        return `
` + oe + t;
      }
    }
    var ae = !1, J;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Xe();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var l = J.get(t);
        if (l !== void 0)
          return l;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, Be();
      try {
        if (a) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (D) {
              y = D;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (D) {
              y = D;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            y = D;
          }
          t();
        }
      } catch (D) {
        if (D && y && typeof D.stack == "string") {
          for (var m = D.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var C = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)), typeof t == "function" && J.set(t, C), C;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, qe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? G(U) : "";
      return typeof t == "function" && J.set(t, Pe), Pe;
    }
    function Ge(t, a, l) {
      return be(t, !1);
    }
    function Je(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function K(t, a, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Je(t));
      if (typeof t == "string")
        return G(t);
      switch (t) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ge(t.render);
          case d:
            return K(t.type, a, l);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return K(w(_), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function Q(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(l);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(t, a, l, y, _) {
      {
        var w = Function.call.bind(Z);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Q(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", l, b, typeof m), Q(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, Q(_), x("Failed %s type: %s", l, m.message), Q(null));
          }
      }
    }
    var Ze = Array.isArray;
    function se(t) {
      return Ze(t);
    }
    function Qe(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function et(t) {
      try {
        return xe(t), !1;
      } catch {
        return !0;
      }
    }
    function xe(t) {
      return "" + t;
    }
    function ke(t) {
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), xe(t);
    }
    var B = R.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function rt(t) {
      if (Z.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nt(t) {
      if (Z.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function it(t, a) {
      if (typeof t.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var l = N(B.current.type);
        ue[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(B.current.type), t.ref), ue[l] = !0);
      }
    }
    function ot(t, a) {
      {
        var l = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function at(t, a) {
      {
        var l = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var st = function(t, a, l, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: l,
        props: b,
        _owner: w
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function ut(t, a, l, y, _) {
      {
        var w, b = {}, m = null, O = null;
        l !== void 0 && (ke(l), m = "" + l), nt(a) && (ke(a.key), m = "" + a.key), rt(a) && (O = a.ref, it(a, _));
        for (w in a)
          Z.call(a, w) && !tt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ot(b, E), O && at(b, E);
        }
        return st(t, m, O, _, y, B.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, l = K(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(l);
      } else
        Re.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Oe() {
      {
        if (ce.current) {
          var t = N(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ct(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + a + ":" + l + ".";
        }
        return "";
      }
    }
    var Te = {};
    function lt(t) {
      {
        var a = Oe();
        if (!a) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = lt(a);
        if (Te[l])
          return;
        Te[l] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + N(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var l = 0; l < t.length; l++) {
            var y = t[l];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = T(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function ft(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === c || a.$$typeof === d))
          l = a.propTypes;
        else
          return;
        if (l) {
          var y = N(a);
          Ke(l, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = N(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pt(t) {
      {
        for (var a = Object.keys(t.props), l = 0; l < a.length; l++) {
          var y = a[l];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, l, y, _, w) {
      {
        var b = ee(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ct(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + (N(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ut(t, a, l, _, w);
        if (E == null)
          return E;
        if (b) {
          var C = a.children;
          if (C !== void 0)
            if (y)
              if (se(C)) {
                for (var U = 0; U < C.length; U++)
                  Ne(C[U], t);
                Object.freeze && Object.freeze(C);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(C, t);
        }
        return t === i ? pt(E) : ft(E), E;
      }
    }
    function ht(t, a, l) {
      return Ce(t, a, l, !0);
    }
    function dt(t, a, l) {
      return Ce(t, a, l, !1);
    }
    var yt = dt, gt = ht;
    rr.Fragment = i, rr.jsx = yt, rr.jsxs = gt;
  }()), rr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Zc() : e.exports = Qc();
})(Ai);
const el = Ai.exports.jsx, nr = ({
  children: e,
  status: r = "default",
  dataSelector: n = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...s
}) => /* @__PURE__ */ el(Kc, {
  status: r,
  ...s,
  minWidth: i,
  margin: o,
  "data-selector": n,
  children: e
}), tl = de.div`
  margin: 10px;
  position: absolute;
`, Un = de.div(
  ({ rotate: e }) => _r`
    rotate: ${e}deg;
  `
), Ye = 0.2, Hn = 100, rl = ({
  controls: {
    zoomLevel: e
  },
  setControls: r,
  visibleRange: n,
  length: i
}) => {
  const o = {
    minWidth: "auto",
    margin: "5px"
  };
  return /* @__PURE__ */ Ue(tl, {
    children: [/* @__PURE__ */ q(nr, {
      ...o,
      onClick: () => r(({
        panLevel: s,
        zoomLevel: u
      }) => ({
        panLevel: s + Hn / u,
        zoomLevel: u
      })),
      disabled: n.first <= 0,
      children: /* @__PURE__ */ q(Un, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ q(nr, {
      ...o,
      onClick: () => r(({
        panLevel: s,
        zoomLevel: u
      }) => ({
        zoomLevel: +(u - Ye > 0 ? u - Ye : Ye / 2).toFixed(2),
        panLevel: s
      })),
      disabled: e < Ye,
      children: "\u2796"
    }), /* @__PURE__ */ q(nr, {
      ...o,
      onClick: () => r(({
        panLevel: s,
        zoomLevel: u
      }) => ({
        zoomLevel: +(u === Ye / 2 ? Ye : u + Ye).toFixed(2),
        panLevel: s
      })),
      disabled: e >= Ye * 10,
      children: "\u2795"
    }), /* @__PURE__ */ q(nr, {
      ...o,
      onClick: () => r(({
        panLevel: s,
        zoomLevel: u
      }) => ({
        panLevel: s - Hn / u,
        zoomLevel: u
      })),
      disabled: n.last >= i - 1 || n.last - n.first > i,
      children: /* @__PURE__ */ q(Un, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, nl = ({
  width: e,
  height: r
}) => {
  const n = {
    x: 0,
    y: 0,
    width: e ? e - St[1] + Ae : 0,
    height: r ? r - St[0] : 0
  };
  return /* @__PURE__ */ Ue("defs", {
    children: [/* @__PURE__ */ q("clipPath", {
      id: "chart-contents",
      children: /* @__PURE__ */ q("rect", {
        ...n
      })
    }), /* @__PURE__ */ q("clipPath", {
      id: "bottom-axis",
      children: /* @__PURE__ */ q("rect", {
        ...n,
        height: `${r}`
      })
    })]
  });
}, il = de.svg`
  width: 100%;
  height: 100%;

  & rect {
    cursor: pointer;
    transition: filter 0.2s;

    &.is-offscreen {
      display: none;
    }

    &:hover {
      filter: brightness(0.8);
    }

    &.is-increased {
      fill: green;
    }

    &.is-decreased {
      fill: red;
    }

    &.is-active {
      filter: brightness(1);
      stroke: black;
      stroke-width: 2;
    }
  }

  & line.wicks {
    stroke: grey;
    stroke-width: 1;
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`, ol = de.div`
  border: 1px solid lightgrey;
  background: linear-gradient(
    135deg,
    #fafbfc 0%,
    #ebf1f5 50%,
    #e2ecf2 51%,
    #f5f8fb 100%
  );
  width: 100%;
  height: 100%;
`, al = de.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, cl = ({
  data: e = []
}) => {
  const r = Lt(null), [n, i] = We({
    zoomLevel: 1,
    panLevel: 1
  }), o = Lu(r, e.length, n), s = xc(e, o), {
    item: u,
    position: f
  } = bu(r, e, o.visibleRange, s);
  return Na(r, e, s.scales, o), /* @__PURE__ */ Ue(ol, {
    children: [e != null && e.length ? /* @__PURE__ */ q(rl, {
      controls: n,
      setControls: i,
      visibleRange: o.visibleRange,
      length: e.length
    }) : /* @__PURE__ */ q(al, {
      children: /* @__PURE__ */ q(Wi, {})
    }), /* @__PURE__ */ q(il, {
      ref: r,
      children: /* @__PURE__ */ q(nl, {
        ...o.sizes
      })
    }), /* @__PURE__ */ q(Gc, {
      item: u,
      position: f
    })]
  });
};
export {
  cl as default
};
