import Ce, { useState as we, useEffect as fr } from "react";
import U, { css as Q } from "styled-components";
const dr = U.tr(
  ({ isOdd: d, isExpandable: g }) => Q`
    background: var(--subtle);

    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--special);
      }
    }

    ${g && Q`
      cursor: pointer;
      &:hover {
        background: var(--shadow);
      }
    `}

    ${d && Q`
      background: var(--border);
    `}
  `
), vr = U.tr`
  & > td,
  & > div {
    transition: all 1s;
  }

  & > td {
    background: var(--shadow);
    position: relative;
    overflow: hidden;

    & > div {
      position: absolute;
    }
  }
`;
var B = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  if (Oe)
    return I;
  Oe = 1;
  var d = Ce, g = Symbol.for("react.element"), R = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, w = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(y, c, P) {
    var h, _ = {}, x = null, W = null;
    P !== void 0 && (x = "" + P), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (h in c)
      f.call(c, h) && !m.hasOwnProperty(h) && (_[h] = c[h]);
    if (y && y.defaultProps)
      for (h in c = y.defaultProps, c)
        _[h] === void 0 && (_[h] = c[h]);
    return { $$typeof: g, type: y, key: x, ref: W, props: _, _owner: w.current };
  }
  return I.Fragment = R, I.jsx = O, I.jsxs = O, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function hr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Ce, g = Symbol.for("react.element"), R = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), y = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ee = Symbol.iterator, je = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[je];
      return typeof r == "function" ? r : null;
    }
    var j = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Fe = !1, Ae = !1, Ie = !1, $e = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === m || We || e === w || e === P || e === h || $e || e === W || Fe || Ae || Ie || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === _ || e.$$typeof === O || e.$$typeof === y || e.$$typeof === c || e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case R:
          return "Portal";
        case m:
          return "Profiler";
        case w:
          return "StrictMode";
        case P:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return te(r) + ".Consumer";
          case O:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return Ve(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case x: {
            var i = e, u = i._payload, o = i._init;
            try {
              return T(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, F = 0, ne, ae, oe, ie, ue, se, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        F++;
      }
    }
    function Ne() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ne
            }),
            info: C({}, e, {
              value: ae
            }),
            warn: C({}, e, {
              value: oe
            }),
            error: C({}, e, {
              value: ie
            }),
            group: C({}, e, {
              value: ue
            }),
            groupCollapsed: C({}, e, {
              value: se
            }),
            groupEnd: C({}, e, {
              value: le
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = j.ReactCurrentDispatcher, J;
    function Y(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var z = !1, V;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Me();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Le();
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
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              n = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var a = S.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, l = p.length - 1; s >= 1 && l >= 0 && a[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== p[l]) {
                    var b = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, b), b;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Se = D ? Y(D) : "";
      return typeof e == "function" && V.set(e, Se), Se;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Be(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case P:
          return Y("Suspense");
        case h:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ue(e.render);
          case _:
            return L(e.type, r, t);
          case x: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, de = {}, ve = j.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var u = Function.call.bind(N);
        for (var o in e)
          if (u(e, o)) {
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
            a && !(a instanceof Error) && (M(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), M(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, M(i), v("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function G(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), pe(e);
    }
    var A = j.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ge, H;
    H = {};
    function Ke(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = T(A.current.type);
        H[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(A.current.type), e.ref), H[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, u, o) {
      var a = {
        $$typeof: g,
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
    function tr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (he(t), a = "" + t), Xe(r) && (he(r.key), a = "" + r.key), Ke(r) && (p = r.ref, Ze(r, i));
        for (u in r)
          N.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), p && er(o, l);
        }
        return rr(e, a, p, i, n, A.current, o);
      }
    }
    var K = j.ReactCurrentOwner, ye = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function me() {
      {
        if (K.current) {
          var e = T(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function ar(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + T(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ke(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Re(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = T(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Te(e, r, t, n, i, u) {
      {
        var o = Ye(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = nr(i);
          p ? a += p : a += me();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === g ? (s = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = tr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (G(b)) {
                for (var D = 0; D < b.length; D++)
                  _e(b[D], e);
                Object.freeze && Object.freeze(b);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(b, e);
        }
        return e === f ? ir(l) : or(l), l;
      }
    }
    function ur(e, r, t) {
      return Te(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var lr = sr, cr = ur;
    $.Fragment = f, $.jsx = lr, $.jsxs = cr;
  }()), $;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = pr() : d.exports = hr();
})(B);
const br = B.exports.Fragment, E = B.exports.jsx, Pe = B.exports.jsxs, gr = ({
  cols: d,
  i: g,
  expandedContent: R
}) => {
  const [f, w] = we(!1), [m, O] = we(!1);
  return fr(() => {
    O(f);
  }, [f]), /* @__PURE__ */ Pe(br, {
    children: [/* @__PURE__ */ E(dr, {
      isOdd: !!(g % 2),
      isExpandable: !!R,
      onClick: () => !!R && w((y) => !y),
      children: d.map((y, c) => /* @__PURE__ */ E("td", {
        children: y
      }, c))
    }), f && /* @__PURE__ */ E(vr, {
      children: /* @__PURE__ */ E("td", {
        colSpan: 7,
        style: {
          height: m ? "175px" : "0px"
        },
        children: /* @__PURE__ */ E("div", {
          style: {
            opacity: m ? "1" : "0"
          },
          children: R
        })
      })
    })]
  });
}, yr = U.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--border);

  & th,
  & td {
    padding: 8px;
    text-align: left;
  }
`, mr = U.thead`
  background: var(--dark);
  font-variant: all-small-caps;
  color: var(--light);

  & th:not(:last-of-type) {
    border-right: 1px solid var(--special);
  }
`, _r = ({
  headers: d = [],
  tableRows: g = [],
  fixedWidths: R = {}
}) => /* @__PURE__ */ Pe(yr, {
  children: [!!(d != null && d.length) && /* @__PURE__ */ E(mr, {
    children: /* @__PURE__ */ E("tr", {
      children: d.map((f) => /* @__PURE__ */ E("th", {
        style: {
          ...R[f]
        },
        children: f
      }, f))
    })
  }), /* @__PURE__ */ E("tbody", {
    children: g.map(({
      cols: f,
      expandedContent: w
    }, m) => /* @__PURE__ */ E(gr, {
      cols: f,
      i: m,
      expandedContent: w
    }, m))
  })]
});
export {
  _r as default
};
