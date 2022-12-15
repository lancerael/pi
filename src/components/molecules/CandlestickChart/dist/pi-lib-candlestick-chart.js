import Be, { useState as Le, useEffect as De, useRef as Et, useCallback as He } from "react";
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
var Ur = { exports: {} }, $t = {};
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
    return $t;
  rn = 1;
  var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return $t.Fragment = n, $t.jsx = u, $t.jsxs = u, $t;
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
    var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, C = "@@iterator";
    function j(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[C];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        F("error", t, f);
      }
    }
    function F(t, a, f) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", f = f.concat([_]));
        var w = f.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var H = !1, M = !1, T = !1, D = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function B(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === h || D || t === v || H || M || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function P(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? f + "(" + _ + ")" : f;
    }
    function V(t) {
      return t.displayName || "Context";
    }
    function $(t) {
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
          case c:
            var a = t;
            return V(a) + ".Consumer";
          case u:
            var f = t;
            return V(f._context) + ".Provider";
          case l:
            return P(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : $(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return $(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, z = 0, te, re, ne, G, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function qe() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function Xe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: ge
            }),
            groupEnd: L({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function J(t, a, f) {
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
    var ae = !1, K;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ge();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var f = K.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, qe();
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
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var N = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, N), N;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, Xe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? J(U) : "";
      return typeof t == "function" && K.set(t, Pe), Pe;
    }
    function Je(t, a, f) {
      return be(t, !1);
    }
    function Ke(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Ke(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case h:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Je(t.render);
          case d:
            return Z(t.type, a, f);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return Z(w(_), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ze(t, a, f, y, _) {
      {
        var w = Function.call.bind(Q);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (ee(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, b, typeof m), ee(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, ee(_), x("Failed %s type: %s", f, m.message), ee(null));
          }
      }
    }
    var Qe = Array.isArray;
    function se(t) {
      return Qe(t);
    }
    function et(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function tt(t) {
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
      if (tt(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(t)), xe(t);
    }
    var q = R.ReactCurrentOwner, rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function nt(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function it(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ot(t, a) {
      if (typeof t.ref == "string" && q.current && a && q.current.stateNode !== a) {
        var f = $(q.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(q.current.type), t.ref), ue[f] = !0);
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function st(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ut = function(t, a, f, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
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
    function ct(t, a, f, y, _) {
      {
        var w, b = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), it(a) && (ke(a.key), m = "" + a.key), nt(a) && (O = a.ref, ot(a, _));
        for (w in a)
          Q.call(a, w) && !rt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && at(b, E), O && st(b, E);
        }
        return ut(t, m, O, _, y, q.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
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
          var t = $(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + $(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = j(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = $(a);
          Ze(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = $(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, f, y, _, w) {
      {
        var b = B(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = lt(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + ($(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ct(t, a, f, _, w);
        if (E == null)
          return E;
        if (b) {
          var N = a.children;
          if (N !== void 0)
            if (y)
              if (se(N)) {
                for (var U = 0; U < N.length; U++)
                  Ne(N[U], t);
                Object.freeze && Object.freeze(N);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(N, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function dt(t, a, f) {
      return Ce(t, a, f, !0);
    }
    function yt(t, a, f) {
      return Ce(t, a, f, !1);
    }
    var gt = yt, mt = dt;
    Bt.Fragment = i, Bt.jsx = gt, Bt.jsxs = mt;
  }()), Bt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ii() : e.exports = Li();
})(Ur);
const Nt = Ur.exports.jsx, Er = Ur.exports.jsxs, Wi = () => /* @__PURE__ */ Nt(Fi, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ Er(Di, {
    children: [/* @__PURE__ */ Er(tn, {
      children: [/* @__PURE__ */ Nt(Ht, {
        delay: !0
      }), /* @__PURE__ */ Nt(Ht, {})]
    }), /* @__PURE__ */ Er(tn, {
      children: [/* @__PURE__ */ Nt(Ht, {}), /* @__PURE__ */ Nt(Ht, {
        delay: !0
      })]
    })]
  })
});
function Vi(e) {
  return e;
}
var Sr = 1, ir = 2, Cr = 3, qt = 4, on = 1e-6;
function Yi(e) {
  return "translate(" + e + ",0)";
}
function Ui(e) {
  return "translate(0," + e + ")";
}
function zi(e) {
  return (r) => +e(r);
}
function Hi(e, r) {
  return r = Math.max(0, e.bandwidth() - r * 2) / 2, e.round() && (r = Math.round(r)), (n) => +e(n) + r;
}
function Bi() {
  return !this.__axis;
}
function Gn(e, r) {
  var n = [], i = null, o = null, s = 6, u = 6, c = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = e === Sr || e === qt ? -1 : 1, h = e === qt || e === ir ? "x" : "y", d = e === Sr || e === Cr ? Yi : Ui;
  function g(v) {
    var S = i == null ? r.ticks ? r.ticks.apply(r, n) : r.domain() : i, C = o == null ? r.tickFormat ? r.tickFormat.apply(r, n) : Vi : o, j = Math.max(s, 0) + c, R = r.range(), x = +R[0] + l, F = +R[R.length - 1] + l, H = (r.bandwidth ? Hi : zi)(r.copy(), l), M = v.selection ? v.selection() : v, T = M.selectAll(".domain").data([null]), D = M.selectAll(".tick").data(S, r).order(), W = D.exit(), A = D.enter().append("g").attr("class", "tick"), B = D.select("line"), P = D.select("text");
    T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), D = D.merge(A), B = B.merge(A.append("line").attr("stroke", "currentColor").attr(h + "2", p * s)), P = P.merge(A.append("text").attr("fill", "currentColor").attr(h, p * j).attr("dy", e === Sr ? "0em" : e === Cr ? "0.71em" : "0.32em")), v !== M && (T = T.transition(v), D = D.transition(v), B = B.transition(v), P = P.transition(v), W = W.transition(v).attr("opacity", on).attr("transform", function(V) {
      return isFinite(V = H(V)) ? d(V + l) : this.getAttribute("transform");
    }), A.attr("opacity", on).attr("transform", function(V) {
      var $ = this.parentNode.__axis;
      return d(($ && isFinite($ = $(V)) ? $ : H(V)) + l);
    })), W.remove(), T.attr("d", e === qt || e === ir ? u ? "M" + p * u + "," + x + "H" + l + "V" + F + "H" + p * u : "M" + l + "," + x + "V" + F : u ? "M" + x + "," + p * u + "V" + l + "H" + F + "V" + p * u : "M" + x + "," + l + "H" + F), D.attr("opacity", 1).attr("transform", function(V) {
      return d(H(V) + l);
    }), B.attr(h + "2", p * s), P.attr(h, p * j).text(C), M.filter(Bi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === ir ? "start" : e === qt ? "end" : "middle"), M.each(function() {
      this.__axis = H;
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
    return arguments.length ? (c = +v, g) : c;
  }, g.offset = function(v) {
    return arguments.length ? (l = +v, g) : l;
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
function zr(e) {
  return e == null ? Ki : function() {
    return this.querySelector(e);
  };
}
function Zi(e) {
  typeof e != "function" && (e = zr(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, c = i[o] = new Array(u), l, p, h = 0; h < u; ++h)
      (l = s[h]) && (p = e.call(l, l.__data__, h, s)) && ("__data__" in l && (p.__data__ = l.__data__), c[h] = p);
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
    for (var u = r[s], c = u.length, l, p = 0; p < c; ++p)
      (l = u[p]) && (i.push(e.call(l, l.__data__, p, u)), o.push(l));
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
    for (var s = r[o], u = s.length, c = i[o] = [], l, p = 0; p < u; ++p)
      (l = s[p]) && e.call(l, l.__data__, p, s) && c.push(l);
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
  for (var u = 0, c, l = r.length, p = s.length; u < p; ++u)
    (c = r[u]) ? (c.__data__ = s[u], i[u] = c) : n[u] = new cr(e, s[u]);
  for (; u < l; ++u)
    (c = r[u]) && (o[u] = c);
}
function go(e, r, n, i, o, s, u) {
  var c, l, p = /* @__PURE__ */ new Map(), h = r.length, d = s.length, g = new Array(h), v;
  for (c = 0; c < h; ++c)
    (l = r[c]) && (g[c] = v = u.call(l, l.__data__, c, r) + "", p.has(v) ? o[c] = l : p.set(v, l));
  for (c = 0; c < d; ++c)
    v = u.call(e, s[c], c, s) + "", (l = p.get(v)) ? (i[c] = l, l.__data__ = s[c], p.delete(v)) : n[c] = new cr(e, s[c]);
  for (c = 0; c < h; ++c)
    (l = r[c]) && p.get(g[c]) === l && (o[c] = l);
}
function mo(e) {
  return e.__data__;
}
function vo(e, r) {
  if (!arguments.length)
    return Array.from(this, mo);
  var n = r ? go : yo, i = this._parents, o = this._groups;
  typeof e != "function" && (e = ho(e));
  for (var s = o.length, u = new Array(s), c = new Array(s), l = new Array(s), p = 0; p < s; ++p) {
    var h = i[p], d = o[p], g = d.length, v = bo(e.call(h, h && h.__data__, p, i)), S = v.length, C = c[p] = new Array(S), j = u[p] = new Array(S), R = l[p] = new Array(g);
    n(h, d, C, j, R, v, r);
    for (var x = 0, F = 0, H, M; x < S; ++x)
      if (H = C[x]) {
        for (x >= F && (F = x + 1); !(M = j[F]) && ++F < S; )
          ;
        H._next = M || null;
      }
  }
  return u = new he(u, i), u._enter = c, u._exit = l, u;
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
  for (var r = e.selection ? e.selection() : e, n = this._groups, i = r._groups, o = n.length, s = i.length, u = Math.min(o, s), c = new Array(o), l = 0; l < u; ++l)
    for (var p = n[l], h = i[l], d = p.length, g = c[l] = new Array(d), v, S = 0; S < d; ++S)
      (v = p[S] || h[S]) && (g[S] = v);
  for (; l < o; ++l)
    c[l] = n[l];
  return new he(c, this._parents);
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
    for (var u = n[s], c = u.length, l = o[s] = new Array(c), p, h = 0; h < c; ++h)
      (p = u[h]) && (l[h] = p);
    l.sort(r);
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
    for (var o = r[n], s = 0, u = o.length, c; s < u; ++s)
      (c = o[s]) && e.call(c, c.__data__, s, o);
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
function Vo(e, r, n) {
  return function() {
    var i = r.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function Yo(e, r, n) {
  return arguments.length > 1 ? this.each((r == null ? Lo : typeof r == "function" ? Vo : Wo)(e, r, n == null ? "" : n)) : St(this.node(), e);
}
function St(e, r) {
  return e.style.getPropertyValue(r) || ti(e).getComputedStyle(e, null).getPropertyValue(r);
}
function Uo(e) {
  return function() {
    delete this[e];
  };
}
function zo(e, r) {
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
  return arguments.length > 1 ? this.each((r == null ? Uo : typeof r == "function" ? Ho : zo)(e, r)) : this.node()[e];
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
  var n = typeof e == "function" ? e : Jn(e), i = r == null ? la : typeof r == "function" ? r : zr(r);
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
function ma(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function va(e) {
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
    var i = this.__on, o, s = va(r);
    if (i) {
      for (var u = 0, c = i.length; u < c; ++u)
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
    var c = this.node().__on;
    if (c) {
      for (var l = 0, p = c.length, h; l < p; ++l)
        for (o = 0, h = c[l]; o < s; ++o)
          if ((u = i[o]).type === h.type && u.name === h.name)
            return h.value;
    }
    return;
  }
  for (c = r ? wa : _a, o = 0; o < s; ++o)
    this.each(c(i[o], r, n));
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
function Ut() {
  return new he([[document.documentElement]], si);
}
function Oa() {
  return this;
}
he.prototype = Ut.prototype = {
  constructor: he,
  select: Zi,
  selectAll: ro,
  selectChild: ao,
  selectChildren: lo,
  filter: fo,
  data: vo,
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
  style: Yo,
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
  datum: ma,
  on: xa,
  dispatch: Sa,
  [Symbol.iterator]: Ra
};
function Lt(e) {
  return typeof e == "string" ? new he([[document.querySelector(e)]], [document.documentElement]) : new he([[e]], si);
}
const Ta = 500, Ae = 10, Rt = [65, 55], ui = 0.3, $a = 10, Rr = {}, Ct = (e = "", r, n) => {
  var d;
  const i = Math.round((d = n.bandwidth) == null ? void 0 : d.call(n)) || 0, o = `${e}-${r}-${i}`;
  if (Rr[o] !== void 0)
    return Rr[o];
  let s = "";
  const u = new Date(e), [c, l, p] = e.split("-");
  p === "01" && (l === "01" ? s = c : s = u.toLocaleString("en-UK", {
    month: "short"
  }));
  let h = [];
  return i > 1 && h.push(16), i > 3 && h.push(8, 24), i > 7 && (h = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), h.includes(Number(p)) && (s = p), n.domain().length - 1 === r && (s = p), Rr[o] = s, s;
}, Na = (e, r, n, i, o) => {
  const [s, u] = Le(), [c, l] = Le(), { xScale: p, yScale: h } = i, { width: d, height: g } = o;
  De(() => {
    !e.current || (Lt(e.current).select("g.x-axis, y.y-axis").remove(), u(
      Lt(e.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), l(Lt(e.current).append("g").classed("y-axis", !0)));
  }, []), De(() => {
    !p.domain || !r || (s.call(Xi(p)).attr("transform", `translate(${n},${g - Rt[0]})`).selectAll("text").classed(
      "emphasise",
      (v, S) => Ct(v, S, p).length > 2
    ).attr(
      "x",
      (v, S) => Ct(v, S, p).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((v, S) => Ct(v, S, p)), s.selectAll("line").attr(
      "stroke",
      (v, S) => Ct(v, S, p).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (v, S) => Ct(v, S, p).length ? 12 : 6
    ), c.call(qi(h)).attr(
      "transform",
      `translate(${d - Rt[1] + Ae},${Ae})`
    ));
  }, [p, h]);
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
var Ot = 0, Dt = 0, Pt = 0, li = 1e3, lr, It, fr = 0, _t = 0, xr = 0, Wt = typeof performance == "object" && performance.now ? performance : Date, fi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
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
    n = (n == null ? Br() : +n) + (r == null ? 0 : +r), !this._next && It !== this && (It ? It._next = this : lr = this, It = this), this._call = e, this._time = n, jr();
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
  Br(), ++Ot;
  for (var e = lr, r; e; )
    (r = _t - e._time) >= 0 && e._call.call(void 0, r), e = e._next;
  --Ot;
}
function un() {
  _t = (fr = Wt.now()) + xr, Ot = Dt = 0;
  try {
    Ma();
  } finally {
    Ot = 0, Da(), _t = 0;
  }
}
function Fa() {
  var e = Wt.now(), r = e - fr;
  r > li && (xr -= r, fr = e);
}
function Da() {
  for (var e, r = lr, n, i = 1 / 0; r; )
    r._call ? (i > r._time && (i = r._time), e = r, r = r._next) : (n = r._next, r._next = null, r = e ? e._next = n : lr = n);
  It = e, jr(i);
}
function jr(e) {
  if (!Ot) {
    Dt && (Dt = clearTimeout(Dt));
    var r = e - _t;
    r > 24 ? (e < 1 / 0 && (Dt = setTimeout(un, e - Wt.now() - xr)), Pt && (Pt = clearInterval(Pt))) : (Pt || (fr = Wt.now(), Pt = setInterval(Fa, li)), Ot = 1, fi(un));
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
function We(e, r) {
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
      return l();
    for (h in i)
      if (v = i[h], v.name === n.name) {
        if (v.state === ar)
          return cn(u);
        v.state === fn ? (v.state = sr, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete i[h]) : +h < r && (v.state = sr, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete i[h]);
      }
    if (cn(function() {
      n.state === ar && (n.state = fn, n.timer.restart(c, n.delay, n.time), c(p));
    }), n.state = Ar, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ar) {
      for (n.state = ar, o = new Array(g = n.tween.length), h = 0, d = -1; h < g; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function c(p) {
    for (var h = p < n.duration ? n.ease.call(null, p / n.duration) : (n.timer.restart(l), n.state = Mr, 1), d = -1, g = o.length; ++d < g; )
      o[d].call(e, h);
    n.state === Mr && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = sr, n.timer.stop(), delete i[r];
    for (var p in i)
      return;
    delete e.__transition;
  }
}
function Va(e, r) {
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
function Ya(e) {
  return this.each(function() {
    Va(this, e);
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
function zt() {
}
var Vt = 0.7, hr = 1 / Vt, kt = "\\s*([+-]?\\d+)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ie = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ua = /^#([0-9a-f]{3,8})$/, za = new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`), Ha = new RegExp(`^rgb\\(${Ie},${Ie},${Ie}\\)$`), Ba = new RegExp(`^rgba\\(${kt},${kt},${kt},${Yt}\\)$`), qa = new RegExp(`^rgba\\(${Ie},${Ie},${Ie},${Yt}\\)$`), Xa = new RegExp(`^hsl\\(${Yt},${Ie},${Ie}\\)$`), Ga = new RegExp(`^hsla\\(${Yt},${Ie},${Ie},${Yt}\\)$`), pn = {
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
Xr(zt, wt, {
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
  return e = (e + "").trim().toLowerCase(), (r = Ua.exec(e)) ? (n = r[1].length, r = parseInt(r[1], 16), n === 6 ? yn(r) : n === 3 ? new pe(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : n === 8 ? Xt(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : n === 4 ? Xt(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = za.exec(e)) ? new pe(r[1], r[2], r[3], 1) : (r = Ha.exec(e)) ? new pe(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = Ba.exec(e)) ? Xt(r[1], r[2], r[3], r[4]) : (r = qa.exec(e)) ? Xt(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = Xa.exec(e)) ? vn(r[1], r[2] / 100, r[3] / 100, 1) : (r = Ga.exec(e)) ? vn(r[1], r[2] / 100, r[3] / 100, r[4]) : pn.hasOwnProperty(e) ? yn(pn[e]) : e === "transparent" ? new pe(NaN, NaN, NaN, 0) : null;
}
function yn(e) {
  return new pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Xt(e, r, n, i) {
  return i <= 0 && (e = r = n = NaN), new pe(e, r, n, i);
}
function Za(e) {
  return e instanceof zt || (e = wt(e)), e ? (e = e.rgb(), new pe(e.r, e.g, e.b, e.opacity)) : new pe();
}
function Fr(e, r, n, i) {
  return arguments.length === 1 ? Za(e) : new pe(e, r, n, i == null ? 1 : i);
}
function pe(e, r, n, i) {
  this.r = +e, this.g = +r, this.b = +n, this.opacity = +i;
}
Xr(pe, Fr, di(zt, {
  brighter(e) {
    return e = e == null ? hr : Math.pow(hr, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vt : Math.pow(Vt, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
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
  formatRgb: mn,
  toString: mn
}));
function gn() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}`;
}
function Qa() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}${vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mn() {
  const e = dr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${bt(this.r)}, ${bt(this.g)}, ${bt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function dr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function bt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vt(e) {
  return e = bt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function vn(e, r, n, i) {
  return i <= 0 ? e = r = n = NaN : n <= 0 || n >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new Me(e, r, n, i);
}
function yi(e) {
  if (e instanceof Me)
    return new Me(e.h, e.s, e.l, e.opacity);
  if (e instanceof zt || (e = wt(e)), !e)
    return new Me();
  if (e instanceof Me)
    return e;
  e = e.rgb();
  var r = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.min(r, n, i), s = Math.max(r, n, i), u = NaN, c = s - o, l = (s + o) / 2;
  return c ? (r === s ? u = (n - i) / c + (n < i) * 6 : n === s ? u = (i - r) / c + 2 : u = (r - n) / c + 4, c /= l < 0.5 ? s + o : 2 - s - o, u *= 60) : c = l > 0 && l < 1 ? 0 : u, new Me(u, c, l, e.opacity);
}
function es(e, r, n, i) {
  return arguments.length === 1 ? yi(e) : new Me(e, r, n, i == null ? 1 : i);
}
function Me(e, r, n, i) {
  this.h = +e, this.s = +r, this.l = +n, this.opacity = +i;
}
Xr(Me, es, di(zt, {
  brighter(e) {
    return e = e == null ? hr : Math.pow(hr, e), new Me(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vt : Math.pow(Vt, e), new Me(this.h, this.s, this.l * e, this.opacity);
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
    var u = n((o = Fr(o)).r, (s = Fr(s)).r), c = n(o.g, s.g), l = n(o.b, s.b), p = gi(o.opacity, s.opacity);
    return function(h) {
      return o.r = u(h), o.g = c(h), o.b = l(h), o.opacity = p(h), o + "";
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
  return function(c) {
    for (u = 0; u < i; ++u)
      s[u] = o[u](c);
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
function mi(e, r) {
  var n = Dr.lastIndex = Tr.lastIndex = 0, i, o, s, u = -1, c = [], l = [];
  for (e = e + "", r = r + ""; (i = Dr.exec(e)) && (o = Tr.exec(r)); )
    (s = o.index) > n && (s = r.slice(n, s), c[u] ? c[u] += s : c[++u] = s), (i = i[0]) === (o = o[0]) ? c[u] ? c[u] += o : c[++u] = o : (c[++u] = null, l.push({ i: u, x: je(i, o) })), n = Tr.lastIndex;
  return n < r.length && (s = r.slice(n), c[u] ? c[u] += s : c[++u] = s), c.length < 2 ? l[0] ? ls(l[0].x) : cs(r) : (r = l.length, function(p) {
    for (var h = 0, d; h < r; ++h)
      c[(d = l[h]).i] = d.x(p);
    return c.join("");
  });
}
function Jr(e, r) {
  var n = typeof r, i;
  return r == null || n === "boolean" ? Gr(r) : (n === "number" ? je : n === "string" ? (i = wt(r)) ? (r = i, yr) : mi : r instanceof wt ? yr : r instanceof Date ? ss : os(r) ? is : Array.isArray(r) ? as : typeof r.valueOf != "function" && typeof r.toString != "function" || isNaN(r) ? us : je)(e, r);
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
function vi(e, r, n, i, o, s) {
  var u, c, l;
  return (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u), (l = e * n + r * i) && (n -= e * l, i -= r * l), (c = Math.sqrt(n * n + i * i)) && (n /= c, i /= c, l /= c), e * i < r * n && (e = -e, r = -r, l = -l, u = -u), {
    translateX: o,
    translateY: s,
    rotate: Math.atan2(r, e) * _n,
    skewX: Math.atan(l) * _n,
    scaleX: u,
    scaleY: c
  };
}
var Jt;
function ps(e) {
  const r = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return r.isIdentity ? Ir : vi(r.a, r.b, r.c, r.d, r.e, r.f);
}
function hs(e) {
  return e == null || (Jt || (Jt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jt.setAttribute("transform", e), !(e = Jt.transform.baseVal.consolidate())) ? Ir : (e = e.matrix, vi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function bi(e, r, n, i) {
  function o(p) {
    return p.length ? p.pop() + " " : "";
  }
  function s(p, h, d, g, v, S) {
    if (p !== d || h !== g) {
      var C = v.push("translate(", null, r, null, n);
      S.push({ i: C - 4, x: je(p, d) }, { i: C - 2, x: je(h, g) });
    } else
      (d || g) && v.push("translate(" + d + r + g + n);
  }
  function u(p, h, d, g) {
    p !== h ? (p - h > 180 ? h += 360 : h - p > 180 && (p += 360), g.push({ i: d.push(o(d) + "rotate(", null, i) - 2, x: je(p, h) })) : h && d.push(o(d) + "rotate(" + h + i);
  }
  function c(p, h, d, g) {
    p !== h ? g.push({ i: d.push(o(d) + "skewX(", null, i) - 2, x: je(p, h) }) : h && d.push(o(d) + "skewX(" + h + i);
  }
  function l(p, h, d, g, v, S) {
    if (p !== d || h !== g) {
      var C = v.push(o(v) + "scale(", null, ",", null, ")");
      S.push({ i: C - 4, x: je(p, d) }, { i: C - 2, x: je(h, g) });
    } else
      (d !== 1 || g !== 1) && v.push(o(v) + "scale(" + d + "," + g + ")");
  }
  return function(p, h) {
    var d = [], g = [];
    return p = e(p), h = e(h), s(p.translateX, p.translateY, h.translateX, h.translateY, d, g), u(p.rotate, h.rotate, d, g), c(p.skewX, h.skewX, d, g), l(p.scaleX, p.scaleY, h.scaleX, h.scaleY, d, g), p = h = null, function(v) {
      for (var S = -1, C = g.length, j; ++S < C; )
        d[(j = g[S]).i] = j.x(v);
      return d.join("");
    };
  };
}
var ds = bi(ps, "px, ", "px)", "deg)"), ys = bi(hs, ", ", ")", ")");
function gs(e, r) {
  var n, i;
  return function() {
    var o = We(this, e), s = o.tween;
    if (s !== n) {
      i = n = s;
      for (var u = 0, c = i.length; u < c; ++u)
        if (i[u].name === r) {
          i = i.slice(), i.splice(u, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function ms(e, r, n) {
  var i, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = We(this, e), u = s.tween;
    if (u !== i) {
      o = (i = u).slice();
      for (var c = { name: r, value: n }, l = 0, p = o.length; l < p; ++l)
        if (o[l].name === r) {
          o[l] = c;
          break;
        }
      l === p && o.push(c);
    }
    s.tween = o;
  };
}
function vs(e, r) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Fe(this.node(), n).tween, o = 0, s = i.length, u; o < s; ++o)
      if ((u = i[o]).name === e)
        return u.value;
    return null;
  }
  return this.each((r == null ? gs : ms)(n, e, r));
}
function Kr(e, r, n) {
  var i = e._id;
  return e.each(function() {
    var o = We(this, i);
    (o.value || (o.value = {}))[r] = n.apply(this, arguments);
  }), function(o) {
    return Fe(o, i).value[r];
  };
}
function _i(e, r) {
  var n;
  return (typeof r == "number" ? je : r instanceof wt ? yr : (n = wt(r)) ? (r = n, yr) : mi)(e, r);
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
    var u, c = n(this), l;
    return c == null ? void this.removeAttribute(e) : (u = this.getAttribute(e), l = c + "", u === l ? null : u === i && l === o ? s : (o = l, s = r(i = u, c)));
  };
}
function Es(e, r, n) {
  var i, o, s;
  return function() {
    var u, c = n(this), l;
    return c == null ? void this.removeAttributeNS(e.space, e.local) : (u = this.getAttributeNS(e.space, e.local), l = c + "", u === l ? null : u === i && l === o ? s : (o = l, s = r(i = u, c)));
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
    We(this, e).duration = +r.apply(this, arguments);
  };
}
function Ms(e, r) {
  return r = +r, function() {
    We(this, e).duration = r;
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
    We(this, e).ease = r;
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
    We(this, e).ease = n;
  };
}
function Ws(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Ls(this._id, e));
}
function Vs(e) {
  typeof e != "function" && (e = Zn(e));
  for (var r = this._groups, n = r.length, i = new Array(n), o = 0; o < n; ++o)
    for (var s = r[o], u = s.length, c = i[o] = [], l, p = 0; p < u; ++p)
      (l = s[p]) && e.call(l, l.__data__, p, s) && c.push(l);
  return new Ye(i, this._parents, this._name, this._id);
}
function Ys(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var r = this._groups, n = e._groups, i = r.length, o = n.length, s = Math.min(i, o), u = new Array(i), c = 0; c < s; ++c)
    for (var l = r[c], p = n[c], h = l.length, d = u[c] = new Array(h), g, v = 0; v < h; ++v)
      (g = l[v] || p[v]) && (d[v] = g);
  for (; c < i; ++c)
    u[c] = r[c];
  return new Ye(u, this._parents, this._name, this._id);
}
function Us(e) {
  return (e + "").trim().split(/^|\s+/).every(function(r) {
    var n = r.indexOf(".");
    return n >= 0 && (r = r.slice(0, n)), !r || r === "start";
  });
}
function zs(e, r, n) {
  var i, o, s = Us(r) ? qr : We;
  return function() {
    var u = s(this, e), c = u.on;
    c !== i && (o = (i = c).copy()).on(r, n), u.on = o;
  };
}
function Hs(e, r) {
  var n = this._id;
  return arguments.length < 2 ? Fe(this.node(), n).on.on(e) : this.each(zs(n, e, r));
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
  typeof e != "function" && (e = zr(e));
  for (var i = this._groups, o = i.length, s = new Array(o), u = 0; u < o; ++u)
    for (var c = i[u], l = c.length, p = s[u] = new Array(l), h, d, g = 0; g < l; ++g)
      (h = c[g]) && (d = e.call(h, h.__data__, g, c)) && ("__data__" in h && (d.__data__ = h.__data__), p[g] = d, kr(p[g], r, n, g, p, Fe(h, n)));
  return new Ye(s, this._parents, r, n);
}
function Gs(e) {
  var r = this._name, n = this._id;
  typeof e != "function" && (e = Kn(e));
  for (var i = this._groups, o = i.length, s = [], u = [], c = 0; c < o; ++c)
    for (var l = i[c], p = l.length, h, d = 0; d < p; ++d)
      if (h = l[d]) {
        for (var g = e.call(h, h.__data__, d, l), v, S = Fe(h, n), C = 0, j = g.length; C < j; ++C)
          (v = g[C]) && kr(v, r, n, C, g, S);
        s.push(g), u.push(h);
      }
  return new Ye(s, u, r, n);
}
var Js = Ut.prototype.constructor;
function Ks() {
  return new Js(this._groups, this._parents);
}
function Zs(e, r) {
  var n, i, o;
  return function() {
    var s = St(this, e), u = (this.style.removeProperty(e), St(this, e));
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
    var u = St(this, e);
    return u === o ? null : u === i ? s : s = r(i = u, n);
  };
}
function eu(e, r, n) {
  var i, o, s;
  return function() {
    var u = St(this, e), c = n(this), l = c + "";
    return c == null && (l = c = (this.style.removeProperty(e), St(this, e))), u === l ? null : u === i && l === o ? s : (o = l, s = r(i = u, c));
  };
}
function tu(e, r) {
  var n, i, o, s = "style." + r, u = "end." + s, c;
  return function() {
    var l = We(this, e), p = l.on, h = l.value[s] == null ? c || (c = wi(r)) : void 0;
    (p !== n || o !== h) && (i = (n = p).copy()).on(u, o = h), l.on = i;
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
    for (var u = i[s], c = u.length, l, p = 0; p < c; ++p)
      if (l = u[p]) {
        var h = Fe(l, r);
        kr(l, e, n, p, u, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Ye(i, this._parents, e, n);
}
function hu() {
  var e, r, n = this, i = n._id, o = n.size();
  return new Promise(function(s, u) {
    var c = { value: u }, l = { value: function() {
      --o === 0 && s();
    } };
    n.each(function() {
      var p = We(this, i), h = p.on;
      h !== e && (r = (e = h).copy(), r._.cancel.push(c), r._.interrupt.push(c), r._.end.push(l)), p.on = r;
    }), o === 0 && s();
  });
}
var du = 0;
function Ye(e, r, n, i) {
  this._groups = e, this._parents = r, this._name = n, this._id = i;
}
function xi() {
  return ++du;
}
var Ve = Ut.prototype;
Ye.prototype = {
  constructor: Ye,
  select: Xs,
  selectAll: Gs,
  selectChild: Ve.selectChild,
  selectChildren: Ve.selectChildren,
  filter: Vs,
  merge: Ys,
  selection: Ks,
  transition: pu,
  call: Ve.call,
  nodes: Ve.nodes,
  node: Ve.node,
  size: Ve.size,
  empty: Ve.empty,
  each: Ve.each,
  on: Hs,
  attr: Ss,
  attrTween: Ns,
  style: ru,
  styleTween: ou,
  text: uu,
  textTween: fu,
  remove: qs,
  tween: vs,
  delay: js,
  duration: Fs,
  ease: Is,
  easeVarying: Ws,
  end: hu,
  [Symbol.iterator]: Ve[Symbol.iterator]
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
function mu(e, r) {
  for (var n; !(n = e.__transition) || !(n = n[r]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${r} not found`);
  return n;
}
function vu(e) {
  var r, n;
  e instanceof Ye ? (r = e._id, e = e._name) : (r = xi(), (n = gu).time = Br(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var u = i[s], c = u.length, l, p = 0; p < c; ++p)
      (l = u[p]) && kr(l, e, r, p, u, n || mu(l, r));
  return new Ye(i, this._parents, e, r);
}
Ut.prototype.interrupt = Ya;
Ut.prototype.transition = vu;
const wn = {
  wicks: "line",
  candles: "rect"
}, bu = (e, r, n, i, o) => {
  const { xScale: s } = n, { offset: u } = o, { scaledHeight: c, scaledY: l } = i, p = Et({}), h = Et(!1), [d, g] = Le({
    item: void 0,
    position: void 0
  }), v = He(() => Lt(e.current), [e.current]), S = He(
    (R, x = v()) => x.selectAll(`${wn[R]}.${R}`).data(r),
    [r]
  ), C = He(
    (R) => {
      var x;
      return p.current[R] = (x = p.current[R]) != null ? x : v().append("g").classed(`${R}-group`, !0).attr("clip-path", "url(#chart-contents)"), p.current[R];
    },
    [p]
  ), j = He(
    (R, x) => {
      let F = S(R, C(R));
      F.size() !== r.length && (F = F.enter().append(wn[R]));
      const H = () => F.transition().duration(Ta), M = (A) => Number(s(A.date)) + (R === "wicks" ? +s.bandwidth() / 2 : 0) + u, T = (A) => l(A[x[0]], A[x[1]]), D = (A) => c(A[x[0]], A[x[1]]), W = (A) => T(A) + D(A);
      return R === "candles" ? (H().attr("width", () => +s.bandwidth()).attr("height", D).attr("x", M).attr("y", T), F.classed("is-increased", (A) => A.close > A.open).classed("is-decreased", (A) => A.close < A.open).on("click", ({ target: A }, B) => {
        F.classed("is-active", !1), Lt(A).classed("is-active", !0), h.current = !0, g({
          item: B,
          position: { x: M(B) + Ae * 2, y: W(B) + 8 }
        });
      }).on("mouseover", (A, B) => {
        h.current || g({
          item: B
        });
      }).on("mouseout", (A, B) => {
        h.current || g({
          item: void 0
        });
      })) : H().attr("x1", M).attr("y1", T).attr("x2", M).attr("y2", W), F.classed(R, !0).exit().remove(), F;
    },
    [s, l]
  );
  return De(() => {
    C("wicks"), C("candles");
    const R = ({ target: x }) => {
      x.nodeName !== "rect" && (v().selectAll("rect").classed("is-active", !1), h.current = !1, g(({ position: F }) => ({ item: void 0, position: F })));
    };
    return document.addEventListener("click", R), () => document.removeEventListener("click", R);
  }, []), De(() => {
    var R;
    (R = s == null ? void 0 : s.bandwidth) != null && R.call(s) && (j("wicks", ["low", "high"]), j("candles", ["open", "close"]));
  }, [s, l]), d;
};
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ki = "Expected a function", xn = 0 / 0, _u = "[object Symbol]", wu = /^\s+|\s+$/g, xu = /^[-+]0x[0-9a-f]+$/i, ku = /^0b[01]+$/i, Eu = /^0o[0-7]+$/i, Su = parseInt, Ru = typeof Kt == "object" && Kt && Kt.Object === Object && Kt, Ou = typeof self == "object" && self && self.Object === Object && self, Tu = Ru || Ou || Function("return this")(), $u = Object.prototype, Nu = $u.toString, Cu = Math.max, Pu = Math.min, $r = function() {
  return Tu.Date.now();
};
function ju(e, r, n) {
  var i, o, s, u, c, l, p = 0, h = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ki);
  r = kn(r) || 0, gr(n) && (h = !!n.leading, d = "maxWait" in n, s = d ? Cu(kn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(T) {
    var D = i, W = o;
    return i = o = void 0, p = T, u = e.apply(W, D), u;
  }
  function S(T) {
    return p = T, c = setTimeout(R, r), h ? v(T) : u;
  }
  function C(T) {
    var D = T - l, W = T - p, A = r - D;
    return d ? Pu(A, s - W) : A;
  }
  function j(T) {
    var D = T - l, W = T - p;
    return l === void 0 || D >= r || D < 0 || d && W >= s;
  }
  function R() {
    var T = $r();
    if (j(T))
      return x(T);
    c = setTimeout(R, C(T));
  }
  function x(T) {
    return c = void 0, g && i ? v(T) : (i = o = void 0, u);
  }
  function F() {
    c !== void 0 && clearTimeout(c), p = 0, i = l = o = c = void 0;
  }
  function H() {
    return c === void 0 ? u : x($r());
  }
  function M() {
    var T = $r(), D = j(T);
    if (i = arguments, o = this, l = T, D) {
      if (c === void 0)
        return S(l);
      if (d)
        return c = setTimeout(R, r), v(l);
    }
    return c === void 0 && (c = setTimeout(R, r)), u;
  }
  return M.cancel = F, M.flush = H, M;
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
const { abs: Iu, round: En } = Math, Lu = (e, r, n, i) => {
  const [o, s] = Le({
    width: 0,
    height: 0
  }), [u, c] = Le({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), l = Et(), p = He(
    Du(() => {
      const { clientWidth: h, clientHeight: d } = e.current;
      s({ width: h, height: d });
    }, 200),
    [e.current]
  );
  return De(() => (l.current = addEventListener("resize", p), () => {
    removeEventListener("resize", p), l.current = void 0;
  }), []), De(() => {
    p();
  }, [e.current, r]), De(() => {
    if (!r)
      return;
    const { width: h } = o, d = $a * (1 + ui) * n, g = d * r, v = h - Rt[1] + Ae * 2;
    let S = i * n - g + v;
    S = S <= 0 ? S : 0, S = g > h ? S : v - g, S = Iu(S - v) <= g ? S : -g + v;
    const C = En((S * -1 - Ae) / d), j = En((S * -1 + v) / d);
    c({ first: C, last: j, offset: S, totalWidth: g });
  }, [n, i, r, o.width]), { visibleRange: u, dimensions: o };
}, Wu = (e = "") => new Date(e).toLocaleDateString("en-UK");
function ur(e, r) {
  return e == null || r == null ? NaN : e < r ? -1 : e > r ? 1 : e >= r ? 0 : NaN;
}
function Vu(e, r) {
  return e == null || r == null ? NaN : r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
}
function Ei(e) {
  let r, n, i;
  e.length !== 2 ? (r = ur, n = (c, l) => ur(e(c), l), i = (c, l) => e(c) - l) : (r = e === ur || e === Vu ? e : Yu, n = e, i = e);
  function o(c, l, p = 0, h = c.length) {
    if (p < h) {
      if (r(l, l) !== 0)
        return h;
      do {
        const d = p + h >>> 1;
        n(c[d], l) < 0 ? p = d + 1 : h = d;
      } while (p < h);
    }
    return p;
  }
  function s(c, l, p = 0, h = c.length) {
    if (p < h) {
      if (r(l, l) !== 0)
        return h;
      do {
        const d = p + h >>> 1;
        n(c[d], l) <= 0 ? p = d + 1 : h = d;
      } while (p < h);
    }
    return p;
  }
  function u(c, l, p = 0, h = c.length) {
    const d = o(c, l, p, h - 1);
    return d > p && i(c[d - 1], l) > -i(c[d], l) ? d - 1 : d;
  }
  return { left: o, center: u, right: s };
}
function Yu() {
  return 0;
}
function Uu(e) {
  return e === null ? NaN : +e;
}
const zu = Ei(ur), Hu = zu.right;
Ei(Uu).center;
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
var Lr = Math.sqrt(50), Wr = Math.sqrt(10), Vr = Math.sqrt(2);
function Ju(e, r, n) {
  var i, o = -1, s, u, c;
  if (r = +r, e = +e, n = +n, e === r && n > 0)
    return [e];
  if ((i = r < e) && (s = e, e = r, r = s), (c = Si(e, r, n)) === 0 || !isFinite(c))
    return [];
  if (c > 0) {
    let l = Math.round(e / c), p = Math.round(r / c);
    for (l * c < e && ++l, p * c > r && --p, u = new Array(s = p - l + 1); ++o < s; )
      u[o] = (l + o) * c;
  } else {
    c = -c;
    let l = Math.round(e * c), p = Math.round(r * c);
    for (l / c < e && ++l, p / c > r && --p, u = new Array(s = p - l + 1); ++o < s; )
      u[o] = (l + o) / c;
  }
  return i && u.reverse(), u;
}
function Si(e, r, n) {
  var i = (r - e) / Math.max(0, n), o = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, o);
  return o >= 0 ? (s >= Lr ? 10 : s >= Wr ? 5 : s >= Vr ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (s >= Lr ? 10 : s >= Wr ? 5 : s >= Vr ? 2 : 1);
}
function Ku(e, r, n) {
  var i = Math.abs(r - e) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / o;
  return s >= Lr ? o *= 10 : s >= Wr ? o *= 5 : s >= Vr && (o *= 2), r < e ? -o : o;
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
  var e = Ri().unknown(void 0), r = e.domain, n = e.range, i = 0, o = 1, s, u, c = !1, l = 0, p = 0, h = 0.5;
  delete e.unknown;
  function d() {
    var g = r().length, v = o < i, S = v ? o : i, C = v ? i : o;
    s = (C - S) / Math.max(1, g - l + p * 2), c && (s = Math.floor(s)), S += (C - S - s * (g - l)) * h, u = s * (1 - l), c && (S = Math.round(S), u = Math.round(u));
    var j = Zu(g).map(function(R) {
      return S + s * R;
    });
    return n(v ? j.reverse() : j);
  }
  return e.domain = function(g) {
    return arguments.length ? (r(g), d()) : r();
  }, e.range = function(g) {
    return arguments.length ? ([i, o] = g, i = +i, o = +o, d()) : [i, o];
  }, e.rangeRound = function(g) {
    return [i, o] = g, i = +i, o = +o, c = !0, d();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return s;
  }, e.round = function(g) {
    return arguments.length ? (c = !!g, d()) : c;
  }, e.padding = function(g) {
    return arguments.length ? (l = Math.min(1, p = +g), d()) : l;
  }, e.paddingInner = function(g) {
    return arguments.length ? (l = Math.min(1, g), d()) : l;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (p = +g, d()) : p;
  }, e.align = function(g) {
    return arguments.length ? (h = Math.max(0, Math.min(1, g)), d()) : h;
  }, e.copy = function() {
    return Oi(r(), [i, o]).round(c).paddingInner(l).paddingOuter(p).align(h);
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
function Yr(e, r) {
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
  return o < i ? (i = Yr(o, i), s = n(u, s)) : (i = Yr(i, o), s = n(s, u)), function(c) {
    return s(i(c));
  };
}
function nc(e, r, n) {
  var i = Math.min(e.length, r.length) - 1, o = new Array(i), s = new Array(i), u = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), r = r.slice().reverse()); ++u < i; )
    o[u] = Yr(e[u], e[u + 1]), s[u] = n(r[u], r[u + 1]);
  return function(c) {
    var l = Bu(e, c, 1, i) - 1;
    return s[l](o[l](c));
  };
}
function ic(e, r) {
  return r.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function oc() {
  var e = Tn, r = Tn, n = Jr, i, o, s, u = xt, c, l, p;
  function h() {
    var g = Math.min(e.length, r.length);
    return u !== xt && (u = tc(e[0], e[g - 1])), c = g > 2 ? nc : rc, l = p = null, d;
  }
  function d(g) {
    return g == null || isNaN(g = +g) ? s : (l || (l = c(e.map(i), r, n)))(i(u(g)));
  }
  return d.invert = function(g) {
    return u(o((p || (p = c(r, e.map(i), je)))(g)));
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
function mr(e, r) {
  if ((n = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Tt(e) {
  return e = mr(Math.abs(e)), e ? e[1] : NaN;
}
function uc(e, r) {
  return function(n, i) {
    for (var o = n.length, s = [], u = 0, c = e[0], l = 0; o > 0 && c > 0 && (l + c + 1 > i && (c = Math.max(1, i - l)), s.push(n.substring(o -= c, o + c)), !((l += c + 1) > i)); )
      c = e[u = (u + 1) % e.length];
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
function vr(e) {
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
vr.prototype = Qr.prototype;
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
  var n = mr(e, r);
  if (!n)
    return e + "";
  var i = n[0], o = n[1], s = o - (Ti = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, u = i.length;
  return s === u ? i : s > u ? i + new Array(s - u + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + mr(e, Math.max(0, r + s - 1))[0];
}
function $n(e, r) {
  var n = mr(e, r);
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
  var r = e.grouping === void 0 || e.thousands === void 0 ? Cn : uc(Pn.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Cn : cc(Pn.call(e.numerals, String)), u = e.percent === void 0 ? "%" : e.percent + "", c = e.minus === void 0 ? "\u2212" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function p(d) {
    d = vr(d);
    var g = d.fill, v = d.align, S = d.sign, C = d.symbol, j = d.zero, R = d.width, x = d.comma, F = d.precision, H = d.trim, M = d.type;
    M === "n" ? (x = !0, M = "g") : Nn[M] || (F === void 0 && (F = 12), H = !0, M = "g"), (j || g === "0" && v === "=") && (j = !0, g = "0", v = "=");
    var T = C === "$" ? n : C === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", D = C === "$" ? i : /[%p]/.test(M) ? u : "", W = Nn[M], A = /[defgprs%]/.test(M);
    F = F === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, F)) : Math.max(0, Math.min(20, F));
    function B(P) {
      var V = T, $ = D, L, z, te;
      if (M === "c")
        $ = W(P) + $, P = "";
      else {
        P = +P;
        var re = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? l : W(Math.abs(P), F), H && (P = fc(P)), re && +P == 0 && S !== "+" && (re = !1), V = (re ? S === "(" ? S : c : S === "-" || S === "(" ? "" : S) + V, $ = (M === "s" ? jn[8 + Ti / 3] : "") + $ + (re && S === "(" ? ")" : ""), A) {
          for (L = -1, z = P.length; ++L < z; )
            if (te = P.charCodeAt(L), 48 > te || te > 57) {
              $ = (te === 46 ? o + P.slice(L + 1) : P.slice(L)) + $, P = P.slice(0, L);
              break;
            }
        }
      }
      x && !j && (P = r(P, 1 / 0));
      var ne = V.length + P.length + $.length, G = ne < R ? new Array(R - ne + 1).join(g) : "";
      switch (x && j && (P = r(G + P, G.length ? R - $.length : 1 / 0), G = ""), v) {
        case "<":
          P = V + P + $ + G;
          break;
        case "=":
          P = V + G + P + $;
          break;
        case "^":
          P = G.slice(0, ne = G.length >> 1) + V + P + $ + G.slice(ne);
          break;
        default:
          P = G + V + P + $;
          break;
      }
      return s(P);
    }
    return B.toString = function() {
      return d + "";
    }, B;
  }
  function h(d, g) {
    var v = p((d = vr(d), d.type = "f", d)), S = Math.max(-8, Math.min(8, Math.floor(Tt(g) / 3))) * 3, C = Math.pow(10, -S), j = jn[8 + S / 3];
    return function(R) {
      return v(C * R) + j;
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
  return Math.max(0, -Tt(Math.abs(e)));
}
function gc(e, r) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Tt(r) / 3))) * 3 - Tt(Math.abs(e)));
}
function mc(e, r) {
  return e = Math.abs(e), r = Math.abs(r) - e, Math.max(0, Tt(r) - Tt(e)) + 1;
}
function vc(e, r, n, i) {
  var o = Ku(e, r, n), s;
  switch (i = vr(i == null ? ",f" : i), i.type) {
    case "s": {
      var u = Math.max(Math.abs(e), Math.abs(r));
      return i.precision == null && !isNaN(s = gc(o, u)) && (i.precision = s), Ni(i, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = mc(o, Math.max(Math.abs(e), Math.abs(r)))) && (i.precision = s - (i.type === "e"));
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
    return vc(o[0], o[o.length - 1], n == null ? 10 : n, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = r(), o = 0, s = i.length - 1, u = i[o], c = i[s], l, p, h = 10;
    for (c < u && (p = u, u = c, c = p, p = o, o = s, s = p); h-- > 0; ) {
      if (p = Si(u, c, n), p === l)
        return i[o] = u, i[s] = c, r(i);
      if (p > 0)
        u = Math.floor(u / p) * p, c = Math.ceil(c / p) * p;
      else if (p < 0)
        u = Math.ceil(u * p) / p, c = Math.floor(c * p) / p;
      else
        break;
      l = p;
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
const { abs: _c, min: An, max: wc } = Math, xc = (e, r, n) => {
  const [i, o] = Le({
    xScale: (c) => c,
    yScale: (c) => c
  }), s = He(
    (c, l) => _c(i.yScale(l) - i.yScale(c)) || 1,
    [i.yScale]
  ), u = He(
    (c, l) => i.yScale(An(c, l)) - s(c, l) + Ae || 1,
    [i.yScale]
  );
  return De(() => {
    if (!(e != null && e.length))
      return;
    const { first: c, last: l, totalWidth: p } = n, { height: h } = r, d = e.slice(c > 0 ? c : 0, l), g = An(...d.map(({ low: j }) => j)), v = wc(...d.map(({ high: j }) => j)), S = Oi().range([Ae, p - Ae]).domain(e.map(({ date: j }) => j)).padding(ui), C = Ci().domain([g - 20, v + 20]).range([h - Rt[0] - Ae, Ae]);
    o({ xScale: S, yScale: C });
  }, [n, r.height, e]), { utils: { scaledHeight: s, scaledY: u }, scales: i };
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pi = "Expected a function", Mn = 0 / 0, kc = "[object Symbol]", Ec = /^\s+|\s+$/g, Sc = /^[-+]0x[0-9a-f]+$/i, Rc = /^0b[01]+$/i, Oc = /^0o[0-7]+$/i, Tc = parseInt, $c = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, Nc = typeof self == "object" && self && self.Object === Object && self, Cc = $c || Nc || Function("return this")(), Pc = Object.prototype, jc = Pc.toString, Ac = Math.max, Mc = Math.min, Nr = function() {
  return Cc.Date.now();
};
function Fc(e, r, n) {
  var i, o, s, u, c, l, p = 0, h = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Pi);
  r = Fn(r) || 0, br(n) && (h = !!n.leading, d = "maxWait" in n, s = d ? Ac(Fn(n.maxWait) || 0, r) : s, g = "trailing" in n ? !!n.trailing : g);
  function v(T) {
    var D = i, W = o;
    return i = o = void 0, p = T, u = e.apply(W, D), u;
  }
  function S(T) {
    return p = T, c = setTimeout(R, r), h ? v(T) : u;
  }
  function C(T) {
    var D = T - l, W = T - p, A = r - D;
    return d ? Mc(A, s - W) : A;
  }
  function j(T) {
    var D = T - l, W = T - p;
    return l === void 0 || D >= r || D < 0 || d && W >= s;
  }
  function R() {
    var T = Nr();
    if (j(T))
      return x(T);
    c = setTimeout(R, C(T));
  }
  function x(T) {
    return c = void 0, g && i ? v(T) : (i = o = void 0, u);
  }
  function F() {
    c !== void 0 && clearTimeout(c), p = 0, i = l = o = c = void 0;
  }
  function H() {
    return c === void 0 ? u : x(Nr());
  }
  function M() {
    var T = Nr(), D = j(T);
    if (i = arguments, o = this, l = T, D) {
      if (c === void 0)
        return S(l);
      if (d)
        return c = setTimeout(R, r), v(l);
    }
    return c === void 0 && (c = setTimeout(R, r)), u;
  }
  return M.cancel = F, M.flush = H, M;
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
}, Vc = de.div(
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
var ji = { exports: {} }, jt = {};
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
function Yc() {
  if (Dn)
    return jt;
  Dn = 1;
  var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return jt.Fragment = n, jt.jsx = u, jt.jsxs = u, jt;
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
function Uc() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, C = "@@iterator";
    function j(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[C];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        F("error", t, f);
      }
    }
    function F(t, a, f) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", f = f.concat([_]));
        var w = f.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var H = !1, M = !1, T = !1, D = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function B(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === h || D || t === v || H || M || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function P(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? f + "(" + _ + ")" : f;
    }
    function V(t) {
      return t.displayName || "Context";
    }
    function $(t) {
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
          case c:
            var a = t;
            return V(a) + ".Consumer";
          case u:
            var f = t;
            return V(f._context) + ".Provider";
          case l:
            return P(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : $(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return $(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, z = 0, te, re, ne, G, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function qe() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function Xe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: ge
            }),
            groupEnd: L({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function J(t, a, f) {
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
    var ae = !1, K;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ge();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var f = K.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, qe();
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
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var N = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, N), N;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, Xe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? J(U) : "";
      return typeof t == "function" && K.set(t, Pe), Pe;
    }
    function Je(t, a, f) {
      return be(t, !1);
    }
    function Ke(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Ke(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case h:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Je(t.render);
          case d:
            return Z(t.type, a, f);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return Z(w(_), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ze(t, a, f, y, _) {
      {
        var w = Function.call.bind(Q);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (ee(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, b, typeof m), ee(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, ee(_), x("Failed %s type: %s", f, m.message), ee(null));
          }
      }
    }
    var Qe = Array.isArray;
    function se(t) {
      return Qe(t);
    }
    function et(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function tt(t) {
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
      if (tt(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(t)), xe(t);
    }
    var q = R.ReactCurrentOwner, rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function nt(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function it(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ot(t, a) {
      if (typeof t.ref == "string" && q.current && a && q.current.stateNode !== a) {
        var f = $(q.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(q.current.type), t.ref), ue[f] = !0);
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function st(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ut = function(t, a, f, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
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
    function ct(t, a, f, y, _) {
      {
        var w, b = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), it(a) && (ke(a.key), m = "" + a.key), nt(a) && (O = a.ref, ot(a, _));
        for (w in a)
          Q.call(a, w) && !rt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && at(b, E), O && st(b, E);
        }
        return ut(t, m, O, _, y, q.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
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
          var t = $(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + $(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = j(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = $(a);
          Ze(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = $(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, f, y, _, w) {
      {
        var b = B(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = lt(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + ($(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ct(t, a, f, _, w);
        if (E == null)
          return E;
        if (b) {
          var N = a.children;
          if (N !== void 0)
            if (y)
              if (se(N)) {
                for (var U = 0; U < N.length; U++)
                  Ne(N[U], t);
                Object.freeze && Object.freeze(N);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(N, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function dt(t, a, f) {
      return Ce(t, a, f, !0);
    }
    function yt(t, a, f) {
      return Ce(t, a, f, !1);
    }
    var gt = yt, mt = dt;
    tr.Fragment = i, tr.jsx = gt, tr.jsxs = mt;
  }()), tr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Yc() : e.exports = Uc();
})(ji);
const zc = ji.exports.jsx, Hc = ({
  children: e,
  isVisible: r = !1,
  x: n = 0,
  y: i = 0
}) => {
  const o = Et(null), [s, u] = Le({
    x: n,
    y: i
  }), c = He((l, p) => {
    var h, d;
    return u({
      x: l - ((d = (h = o.current) == null ? void 0 : h.clientWidth) != null ? d : 0) / 2,
      y: p + 24
    });
  }, [o.current]);
  return De(() => {
    c(n, i);
    const l = Wc(({
      clientX: h,
      clientY: d
    }) => !n && !i && c(h, d), 100), p = () => {
      removeEventListener("mousemove", l);
    };
    return n || i ? p() : addEventListener("mousemove", l), p;
  }, [n, i]), /* @__PURE__ */ zc(Vc, {
    ref: o,
    isVisible: r,
    children: e,
    style: {
      left: s.x,
      top: s.y
    }
  });
};
var en = { exports: {} }, At = {};
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
function Bc() {
  if (Ln)
    return At;
  Ln = 1;
  var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return At.Fragment = n, At.jsx = u, At.jsxs = u, At;
}
var Mt = {};
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
function qc() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, C = "@@iterator";
    function j(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[C];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        F("error", t, f);
      }
    }
    function F(t, a, f) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", f = f.concat([_]));
        var w = f.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var H = !1, M = !1, T = !1, D = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function B(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === h || D || t === v || H || M || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function P(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? f + "(" + _ + ")" : f;
    }
    function V(t) {
      return t.displayName || "Context";
    }
    function $(t) {
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
          case c:
            var a = t;
            return V(a) + ".Consumer";
          case u:
            var f = t;
            return V(f._context) + ".Provider";
          case l:
            return P(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : $(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return $(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, z = 0, te, re, ne, G, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function qe() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function Xe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: ge
            }),
            groupEnd: L({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function J(t, a, f) {
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
    var ae = !1, K;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ge();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var f = K.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, qe();
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
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var N = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, N), N;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, Xe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? J(U) : "";
      return typeof t == "function" && K.set(t, Pe), Pe;
    }
    function Je(t, a, f) {
      return be(t, !1);
    }
    function Ke(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Ke(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case h:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Je(t.render);
          case d:
            return Z(t.type, a, f);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return Z(w(_), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ze(t, a, f, y, _) {
      {
        var w = Function.call.bind(Q);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (ee(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, b, typeof m), ee(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, ee(_), x("Failed %s type: %s", f, m.message), ee(null));
          }
      }
    }
    var Qe = Array.isArray;
    function se(t) {
      return Qe(t);
    }
    function et(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function tt(t) {
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
      if (tt(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(t)), xe(t);
    }
    var q = R.ReactCurrentOwner, rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function nt(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function it(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ot(t, a) {
      if (typeof t.ref == "string" && q.current && a && q.current.stateNode !== a) {
        var f = $(q.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(q.current.type), t.ref), ue[f] = !0);
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function st(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ut = function(t, a, f, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
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
    function ct(t, a, f, y, _) {
      {
        var w, b = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), it(a) && (ke(a.key), m = "" + a.key), nt(a) && (O = a.ref, ot(a, _));
        for (w in a)
          Q.call(a, w) && !rt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && at(b, E), O && st(b, E);
        }
        return ut(t, m, O, _, y, q.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
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
          var t = $(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + $(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = j(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = $(a);
          Ze(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = $(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, f, y, _, w) {
      {
        var b = B(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = lt(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + ($(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ct(t, a, f, _, w);
        if (E == null)
          return E;
        if (b) {
          var N = a.children;
          if (N !== void 0)
            if (y)
              if (se(N)) {
                for (var U = 0; U < N.length; U++)
                  Ne(N[U], t);
                Object.freeze && Object.freeze(N);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(N, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function dt(t, a, f) {
      return Ce(t, a, f, !0);
    }
    function yt(t, a, f) {
      return Ce(t, a, f, !1);
    }
    var gt = yt, mt = dt;
    Mt.Fragment = i, Mt.jsx = gt, Mt.jsxs = mt;
  }()), Mt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Bc() : e.exports = qc();
})(en);
const X = en.exports.jsx, ze = en.exports.jsxs, Xc = ({
  item: e,
  position: r
}) => {
  const [n, i] = Le(e), o = Et();
  return De(() => {
    if (e) {
      i(e), clearTimeout(o.current);
      return;
    }
    o.current = setTimeout(() => i(e), 200);
  }, [e]), /* @__PURE__ */ ze(Hc, {
    isVisible: !!e,
    ...r,
    children: [/* @__PURE__ */ X("div", {
      children: /* @__PURE__ */ X("strong", {
        children: Wu(n == null ? void 0 : n.date)
      })
    }), /* @__PURE__ */ ze("div", {
      children: ["Open: ", /* @__PURE__ */ X("em", {
        children: n == null ? void 0 : n.open
      })]
    }), /* @__PURE__ */ ze("div", {
      children: ["Close: ", /* @__PURE__ */ X("em", {
        children: n == null ? void 0 : n.close
      })]
    }), /* @__PURE__ */ ze("div", {
      children: ["High: ", /* @__PURE__ */ X("em", {
        children: n == null ? void 0 : n.high
      })]
    }), /* @__PURE__ */ ze("div", {
      children: ["Low: ", /* @__PURE__ */ X("em", {
        children: n == null ? void 0 : n.low
      })]
    })]
  });
}, Vn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Gc = "font-family: serif;", Jc = de.button(
  ({ status: e, minWidth: r, margin: n }) => _r`
    ${Gc}
    border: 1px solid ${Vn[e]};
    color: ${Vn[e]};
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
var Ai = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function Kc() {
  if (Yn)
    return Ft;
  Yn = 1;
  var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, l, p) {
    var h, d = {}, g = null, v = null;
    p !== void 0 && (g = "" + p), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (d[h] = l[h]);
    if (c && c.defaultProps)
      for (h in l = c.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: r, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return Ft.Fragment = n, Ft.jsx = u, Ft.jsxs = u, Ft;
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
var Un;
function Zc() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Be, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, C = "@@iterator";
    function j(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = S && t[S] || t[C];
      return typeof a == "function" ? a : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), y = 1; y < a; y++)
          f[y - 1] = arguments[y];
        F("error", t, f);
      }
    }
    function F(t, a, f) {
      {
        var y = R.ReactDebugCurrentFrame, _ = y.getStackAddendum();
        _ !== "" && (a += "%s", f = f.concat([_]));
        var w = f.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var H = !1, M = !1, T = !1, D = !1, W = !1, A;
    A = Symbol.for("react.module.reference");
    function B(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === s || W || t === o || t === p || t === h || D || t === v || H || M || T || typeof t == "object" && t !== null && (t.$$typeof === g || t.$$typeof === d || t.$$typeof === u || t.$$typeof === c || t.$$typeof === l || t.$$typeof === A || t.getModuleId !== void 0));
    }
    function P(t, a, f) {
      var y = t.displayName;
      if (y)
        return y;
      var _ = a.displayName || a.name || "";
      return _ !== "" ? f + "(" + _ + ")" : f;
    }
    function V(t) {
      return t.displayName || "Context";
    }
    function $(t) {
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
          case c:
            var a = t;
            return V(a) + ".Consumer";
          case u:
            var f = t;
            return V(f._context) + ".Provider";
          case l:
            return P(t, t.render, "ForwardRef");
          case d:
            var y = t.displayName || null;
            return y !== null ? y : $(t.type) || "Memo";
          case g: {
            var _ = t, w = _._payload, b = _._init;
            try {
              return $(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, z = 0, te, re, ne, G, ye, ge, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function qe() {
      {
        if (z === 0) {
          te = console.log, re = console.info, ne = console.warn, G = console.error, ye = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        z++;
      }
    }
    function Xe() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: te
            }),
            info: L({}, t, {
              value: re
            }),
            warn: L({}, t, {
              value: ne
            }),
            error: L({}, t, {
              value: G
            }),
            group: L({}, t, {
              value: ye
            }),
            groupCollapsed: L({}, t, {
              value: ge
            }),
            groupEnd: L({}, t, {
              value: me
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function J(t, a, f) {
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
    var ae = !1, K;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ge();
    }
    function be(t, a) {
      if (!t || ae)
        return "";
      {
        var f = K.get(t);
        if (f !== void 0)
          return f;
      }
      var y;
      ae = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ie.current, ie.current = null, qe();
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
            } catch (I) {
              y = I;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (I) {
              y = I;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            y = I;
          }
          t();
        }
      } catch (I) {
        if (I && y && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), O = y.stack.split(`
`), k = m.length - 1, E = O.length - 1; k >= 1 && E >= 0 && m[k] !== O[E]; )
            E--;
          for (; k >= 1 && E >= 0; k--, E--)
            if (m[k] !== O[E]) {
              if (k !== 1 || E !== 1)
                do
                  if (k--, E--, E < 0 || m[k] !== O[E]) {
                    var N = `
` + m[k].replace(" at new ", " at ");
                    return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), typeof t == "function" && K.set(t, N), N;
                  }
                while (k >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = w, Xe(), Error.prepareStackTrace = _;
      }
      var U = t ? t.displayName || t.name : "", Pe = U ? J(U) : "";
      return typeof t == "function" && K.set(t, Pe), Pe;
    }
    function Je(t, a, f) {
      return be(t, !1);
    }
    function Ke(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Z(t, a, f) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Ke(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case h:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Je(t.render);
          case d:
            return Z(t.type, a, f);
          case g: {
            var y = t, _ = y._payload, w = y._init;
            try {
              return Z(w(_), a, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, _e = {}, we = R.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        we.setExtraStackFrame(f);
      } else
        we.setExtraStackFrame(null);
    }
    function Ze(t, a, f, y, _) {
      {
        var w = Function.call.bind(Q);
        for (var b in t)
          if (w(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var O = Error((y || "React class") + ": " + f + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              m = t[b](a, b, y, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (ee(_), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", f, b, typeof m), ee(null)), m instanceof Error && !(m.message in _e) && (_e[m.message] = !0, ee(_), x("Failed %s type: %s", f, m.message), ee(null));
          }
      }
    }
    var Qe = Array.isArray;
    function se(t) {
      return Qe(t);
    }
    function et(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, f = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return f;
      }
    }
    function tt(t) {
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
      if (tt(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", et(t)), xe(t);
    }
    var q = R.ReactCurrentOwner, rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Se, ue;
    ue = {};
    function nt(t) {
      if (Q.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function it(t) {
      if (Q.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function ot(t, a) {
      if (typeof t.ref == "string" && q.current && a && q.current.stateNode !== a) {
        var f = $(q.current.type);
        ue[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(q.current.type), t.ref), ue[f] = !0);
      }
    }
    function at(t, a) {
      {
        var f = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function st(t, a) {
      {
        var f = function() {
          Se || (Se = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        f.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ut = function(t, a, f, y, _, w, b) {
      var m = {
        $$typeof: r,
        type: t,
        key: a,
        ref: f,
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
    function ct(t, a, f, y, _) {
      {
        var w, b = {}, m = null, O = null;
        f !== void 0 && (ke(f), m = "" + f), it(a) && (ke(a.key), m = "" + a.key), nt(a) && (O = a.ref, ot(a, _));
        for (w in a)
          Q.call(a, w) && !rt.hasOwnProperty(w) && (b[w] = a[w]);
        if (t && t.defaultProps) {
          var k = t.defaultProps;
          for (w in k)
            b[w] === void 0 && (b[w] = k[w]);
        }
        if (m || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && at(b, E), O && st(b, E);
        }
        return ut(t, m, O, _, y, q.current, b);
      }
    }
    var ce = R.ReactCurrentOwner, Re = R.ReactDebugCurrentFrame;
    function Y(t) {
      if (t) {
        var a = t._owner, f = Z(t.type, t._source, a ? a.type : null);
        Re.setExtraStackFrame(f);
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
          var t = $(ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), f = t.lineNumber;
          return `

Check your code at ` + a + ":" + f + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ft(t) {
      {
        var a = Oe();
        if (!a) {
          var f = typeof t == "string" ? t : t.displayName || t.name;
          f && (a = `

Check the top-level render call using <` + f + ">.");
        }
        return a;
      }
    }
    function $e(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var f = ft(a);
        if (Te[f])
          return;
        Te[f] = !0;
        var y = "";
        t && t._owner && t._owner !== ce.current && (y = " It was passed a child from " + $(t._owner.type) + "."), Y(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, y), Y(null);
      }
    }
    function Ne(t, a) {
      {
        if (typeof t != "object")
          return;
        if (se(t))
          for (var f = 0; f < t.length; f++) {
            var y = t[f];
            fe(y) && $e(y, a);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var _ = j(t);
          if (typeof _ == "function" && _ !== t.entries)
            for (var w = _.call(t), b; !(b = w.next()).done; )
              fe(b.value) && $e(b.value, a);
        }
      }
    }
    function pt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var f;
        if (typeof a == "function")
          f = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || a.$$typeof === d))
          f = a.propTypes;
        else
          return;
        if (f) {
          var y = $(a);
          Ze(f, t.props, "prop", y, t);
        } else if (a.PropTypes !== void 0 && !le) {
          le = !0;
          var _ = $(a);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(t) {
      {
        for (var a = Object.keys(t.props), f = 0; f < a.length; f++) {
          var y = a[f];
          if (y !== "children" && y !== "key") {
            Y(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Y(null);
            break;
          }
        }
        t.ref !== null && (Y(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Ce(t, a, f, y, _, w) {
      {
        var b = B(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = lt(_);
          O ? m += O : m += Oe();
          var k;
          t === null ? k = "null" : se(t) ? k = "array" : t !== void 0 && t.$$typeof === r ? (k = "<" + ($(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var E = ct(t, a, f, _, w);
        if (E == null)
          return E;
        if (b) {
          var N = a.children;
          if (N !== void 0)
            if (y)
              if (se(N)) {
                for (var U = 0; U < N.length; U++)
                  Ne(N[U], t);
                Object.freeze && Object.freeze(N);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(N, t);
        }
        return t === i ? ht(E) : pt(E), E;
      }
    }
    function dt(t, a, f) {
      return Ce(t, a, f, !0);
    }
    function yt(t, a, f) {
      return Ce(t, a, f, !1);
    }
    var gt = yt, mt = dt;
    rr.Fragment = i, rr.jsx = gt, rr.jsxs = mt;
  }()), rr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Kc() : e.exports = Zc();
})(Ai);
const Qc = Ai.exports.jsx, nr = ({
  children: e,
  status: r = "default",
  dataSelector: n = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...s
}) => /* @__PURE__ */ Qc(Jc, {
  status: r,
  ...s,
  minWidth: i,
  margin: o,
  "data-selector": n,
  children: e
}), el = de.div`
  margin: 10px;
  position: absolute;
`, zn = de.div(
  ({ rotate: e }) => _r`
    rotate: ${e}deg;
  `
), Ue = 0.2, Hn = 100, tl = ({
  zoomLevel: e,
  setZoomLevel: r,
  setPanLevel: n,
  visibleRange: i,
  length: o
}) => {
  const s = {
    minWidth: "auto",
    margin: "5px"
  };
  return /* @__PURE__ */ ze(el, {
    children: [/* @__PURE__ */ X(nr, {
      ...s,
      onClick: () => n((u) => u + Hn / e),
      disabled: i.first <= 0,
      children: /* @__PURE__ */ X(zn, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ X(nr, {
      ...s,
      onClick: () => r((u) => +(u - Ue > 0 ? u - Ue : Ue / 2).toFixed(2)),
      disabled: e < Ue,
      children: "\u2796"
    }), /* @__PURE__ */ X(nr, {
      ...s,
      onClick: () => r((u) => +(u === Ue / 2 ? Ue : u + Ue).toFixed(2)),
      disabled: e >= Ue * 10,
      children: "\u2795"
    }), /* @__PURE__ */ X(nr, {
      ...s,
      onClick: () => n((u) => u - Hn / e),
      disabled: i.last >= o - 1 || i.last - i.first > o,
      children: /* @__PURE__ */ X(zn, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, rl = ({
  width: e,
  height: r
}) => {
  const n = {
    x: 0,
    y: 0,
    width: e ? e - Rt[1] + Ae : 0,
    height: r ? r - Rt[0] : 0
  };
  return /* @__PURE__ */ ze("defs", {
    children: [/* @__PURE__ */ X("clipPath", {
      id: "chart-contents",
      children: /* @__PURE__ */ X("rect", {
        ...n
      })
    }), /* @__PURE__ */ X("clipPath", {
      id: "bottom-axis",
      children: /* @__PURE__ */ X("rect", {
        ...n,
        height: `${r}`
      })
    })]
  });
}, nl = de.svg`
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
`, il = de.div`
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
`, ol = de.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, ul = ({
  data: e = []
}) => {
  const r = Et(null), [n, i] = Le(1), [o, s] = Le(0), {
    dimensions: u,
    visibleRange: c
  } = Lu(r, e.length, n, o), {
    scales: l,
    utils: p
  } = xc(e, u, c), {
    item: h,
    position: d
  } = bu(r, e, l, p, c);
  return Na(r, e, c.offset, l, u), /* @__PURE__ */ ze(il, {
    children: [e != null && e.length ? /* @__PURE__ */ X(tl, {
      zoomLevel: n,
      setZoomLevel: i,
      setPanLevel: s,
      visibleRange: c,
      length: e.length
    }) : /* @__PURE__ */ X(ol, {
      children: /* @__PURE__ */ X(Wi, {})
    }), /* @__PURE__ */ X(nl, {
      ref: r,
      children: /* @__PURE__ */ X(rl, {
        ...u
      })
    }), /* @__PURE__ */ X(Xc, {
      item: h,
      position: d
    })]
  });
};
export {
  ul as default
};
