import { jsx as k, jsxs as D, Fragment as re } from "react/jsx-runtime";
import { useState as Y, useEffect as F, useRef as lt, useCallback as P } from "react";
import R, { keyframes as ie, css as Yt } from "styled-components";
import { box as fn } from "@pi-lib/styles";
const Xe = ie`
  to {
    rotate: 360deg;
  }
`, qe = ie`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, Ve = R.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`, Be = R.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Xe} 2s linear infinite;
  margin: 2px;
`, kn = R.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, xt = R.div(
  ({ delay: t }) => Yt`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${qe} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${t ? "animation-delay: 0.3s;" : ""}
  `
), Ye = () => /* @__PURE__ */ k(Ve, { title: "Loading...", "data-selector": "pi-lib-loader", children: /* @__PURE__ */ D(Be, { children: [
  /* @__PURE__ */ D(kn, { children: [
    /* @__PURE__ */ k(xt, { delay: !0 }),
    /* @__PURE__ */ k(xt, {})
  ] }),
  /* @__PURE__ */ D(kn, { children: [
    /* @__PURE__ */ k(xt, {}),
    /* @__PURE__ */ k(xt, { delay: !0 })
  ] })
] }) });
function We(t) {
  return t;
}
var Kt = 1, $t = 2, tn = 3, vt = 4, Mn = 1e-6;
function Ue(t) {
  return "translate(" + t + ",0)";
}
function Ge(t) {
  return "translate(0," + t + ")";
}
function Ke(t) {
  return (n) => +t(n);
}
function Ze(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Je() {
  return !this.__axis;
}
function oe(t, n) {
  var e = [], r = null, i = null, o = 6, s = 6, u = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, a = t === Kt || t === vt ? -1 : 1, l = t === vt || t === $t ? "x" : "y", f = t === Kt || t === tn ? Ue : Ge;
  function h(d) {
    var m = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), w = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : We), p = Math.max(o, 0) + u, g = n.range(), x = +g[0] + c, y = +g[g.length - 1] + c, A = (n.bandwidth ? Ze : Ke)(n.copy(), c), _ = d.selection ? d.selection() : d, b = _.selectAll(".domain").data([null]), N = _.selectAll(".tick").data(m, n).order(), S = N.exit(), M = N.enter().append("g").attr("class", "tick"), C = N.select("line"), v = N.select("text");
    b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), N = N.merge(M), C = C.merge(M.append("line").attr("stroke", "currentColor").attr(l + "2", a * o)), v = v.merge(M.append("text").attr("fill", "currentColor").attr(l, a * p).attr("dy", t === Kt ? "0em" : t === tn ? "0.71em" : "0.32em")), d !== _ && (b = b.transition(d), N = N.transition(d), C = C.transition(d), v = v.transition(d), S = S.transition(d).attr("opacity", Mn).attr("transform", function(E) {
      return isFinite(E = A(E)) ? f(E + c) : this.getAttribute("transform");
    }), M.attr("opacity", Mn).attr("transform", function(E) {
      var $ = this.parentNode.__axis;
      return f(($ && isFinite($ = $(E)) ? $ : A(E)) + c);
    })), S.remove(), b.attr("d", t === vt || t === $t ? s ? "M" + a * s + "," + x + "H" + c + "V" + y + "H" + a * s : "M" + c + "," + x + "V" + y : s ? "M" + x + "," + a * s + "V" + c + "H" + y + "V" + a * s : "M" + x + "," + c + "H" + y), N.attr("opacity", 1).attr("transform", function(E) {
      return f(A(E) + c);
    }), C.attr(l + "2", a * o), v.attr(l, a * p).text(w), _.filter(Je).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === $t ? "start" : t === vt ? "end" : "middle"), _.each(function() {
      this.__axis = A;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (n = d, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), h) : e.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), h) : r && r.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (i = d, h) : i;
  }, h.tickSize = function(d) {
    return arguments.length ? (o = s = +d, h) : o;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h.tickPadding = function(d) {
    return arguments.length ? (u = +d, h) : u;
  }, h.offset = function(d) {
    return arguments.length ? (c = +d, h) : c;
  }, h;
}
function Qe(t) {
  return oe($t, t);
}
function je(t) {
  return oe(tn, t);
}
var nn = "http://www.w3.org/1999/xhtml";
const An = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: nn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Wt(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), An.hasOwnProperty(n) ? { space: An[n], local: t } : t;
}
function tr(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === nn && n.documentElement.namespaceURI === nn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function nr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function se(t) {
  var n = Wt(t);
  return (n.local ? nr : tr)(n);
}
function er() {
}
function hn(t) {
  return t == null ? er : function() {
    return this.querySelector(t);
  };
}
function rr(t) {
  typeof t != "function" && (t = hn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], s = o.length, u = r[i] = new Array(s), c, a, l = 0; l < s; ++l)
      (c = o[l]) && (a = t.call(c, c.__data__, l, o)) && ("__data__" in c && (a.__data__ = c.__data__), u[l] = a);
  return new I(r, this._parents);
}
function ir(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function or() {
  return [];
}
function ae(t) {
  return t == null ? or : function() {
    return this.querySelectorAll(t);
  };
}
function sr(t) {
  return function() {
    return ir(t.apply(this, arguments));
  };
}
function ar(t) {
  typeof t == "function" ? t = sr(t) : t = ae(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var s = n[o], u = s.length, c, a = 0; a < u; ++a)
      (c = s[a]) && (r.push(t.call(c, c.__data__, a, s)), i.push(c));
  return new I(r, i);
}
function ue(t) {
  return function() {
    return this.matches(t);
  };
}
function ce(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ur = Array.prototype.find;
function cr(t) {
  return function() {
    return ur.call(this.children, t);
  };
}
function lr() {
  return this.firstElementChild;
}
function fr(t) {
  return this.select(t == null ? lr : cr(typeof t == "function" ? t : ce(t)));
}
var hr = Array.prototype.filter;
function dr() {
  return Array.from(this.children);
}
function gr(t) {
  return function() {
    return hr.call(this.children, t);
  };
}
function pr(t) {
  return this.selectAll(t == null ? dr : gr(typeof t == "function" ? t : ce(t)));
}
function mr(t) {
  typeof t != "function" && (t = ue(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], s = o.length, u = r[i] = [], c, a = 0; a < s; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o) && u.push(c);
  return new I(r, this._parents);
}
function le(t) {
  return new Array(t.length);
}
function yr() {
  return new I(this._enter || this._groups.map(le), this._parents);
}
function It(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
It.prototype = {
  constructor: It,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function wr(t) {
  return function() {
    return t;
  };
}
function xr(t, n, e, r, i, o) {
  for (var s = 0, u, c = n.length, a = o.length; s < a; ++s)
    (u = n[s]) ? (u.__data__ = o[s], r[s] = u) : e[s] = new It(t, o[s]);
  for (; s < c; ++s)
    (u = n[s]) && (i[s] = u);
}
function vr(t, n, e, r, i, o, s) {
  var u, c, a = /* @__PURE__ */ new Map(), l = n.length, f = o.length, h = new Array(l), d;
  for (u = 0; u < l; ++u)
    (c = n[u]) && (h[u] = d = s.call(c, c.__data__, u, n) + "", a.has(d) ? i[u] = c : a.set(d, c));
  for (u = 0; u < f; ++u)
    d = s.call(t, o[u], u, o) + "", (c = a.get(d)) ? (r[u] = c, c.__data__ = o[u], a.delete(d)) : e[u] = new It(t, o[u]);
  for (u = 0; u < l; ++u)
    (c = n[u]) && a.get(h[u]) === c && (i[u] = c);
}
function _r(t) {
  return t.__data__;
}
function br(t, n) {
  if (!arguments.length)
    return Array.from(this, _r);
  var e = n ? vr : xr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = wr(t));
  for (var o = i.length, s = new Array(o), u = new Array(o), c = new Array(o), a = 0; a < o; ++a) {
    var l = r[a], f = i[a], h = f.length, d = kr(t.call(l, l && l.__data__, a, r)), m = d.length, w = u[a] = new Array(m), p = s[a] = new Array(m), g = c[a] = new Array(h);
    e(l, f, w, p, g, d, n);
    for (var x = 0, y = 0, A, _; x < m; ++x)
      if (A = w[x]) {
        for (x >= y && (y = x + 1); !(_ = p[y]) && ++y < m; )
          ;
        A._next = _ || null;
      }
  }
  return s = new I(s, r), s._enter = u, s._exit = c, s;
}
function kr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Mr() {
  return new I(this._exit || this._groups.map(le), this._parents);
}
function Ar(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Nr(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, s = Math.min(i, o), u = new Array(i), c = 0; c < s; ++c)
    for (var a = e[c], l = r[c], f = a.length, h = u[c] = new Array(f), d, m = 0; m < f; ++m)
      (d = a[m] || l[m]) && (h[m] = d);
  for (; c < i; ++c)
    u[c] = e[c];
  return new I(u, this._parents);
}
function Sr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function $r(t) {
  t || (t = Er);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = e[o], u = s.length, c = i[o] = new Array(u), a, l = 0; l < u; ++l)
      (a = s[l]) && (c[l] = a);
    c.sort(n);
  }
  return new I(i, this._parents).order();
}
function Er(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Cr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Tr() {
  return Array.from(this);
}
function Lr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s)
        return s;
    }
  return null;
}
function Ir() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Rr() {
  return !this.node();
}
function Dr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, s = i.length, u; o < s; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function zr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Or(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Pr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Fr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Hr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Xr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function qr(t, n) {
  var e = Wt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Or : zr : typeof n == "function" ? e.local ? Xr : Hr : e.local ? Fr : Pr)(e, n));
}
function fe(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Vr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Br(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Yr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Wr(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Vr : typeof n == "function" ? Yr : Br)(t, n, e ?? "")) : it(this.node(), t);
}
function it(t, n) {
  return t.style.getPropertyValue(n) || fe(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ur(t) {
  return function() {
    delete this[t];
  };
}
function Gr(t, n) {
  return function() {
    this[t] = n;
  };
}
function Kr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Zr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ur : typeof n == "function" ? Kr : Gr)(t, n)) : this.node()[t];
}
function he(t) {
  return t.trim().split(/^|\s+/);
}
function dn(t) {
  return t.classList || new de(t);
}
function de(t) {
  this._node = t, this._names = he(t.getAttribute("class") || "");
}
de.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ge(t, n) {
  for (var e = dn(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function pe(t, n) {
  for (var e = dn(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Jr(t) {
  return function() {
    ge(this, t);
  };
}
function Qr(t) {
  return function() {
    pe(this, t);
  };
}
function jr(t, n) {
  return function() {
    (n.apply(this, arguments) ? ge : pe)(this, t);
  };
}
function ti(t, n) {
  var e = he(t + "");
  if (arguments.length < 2) {
    for (var r = dn(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? jr : n ? Jr : Qr)(e, n));
}
function ni() {
  this.textContent = "";
}
function ei(t) {
  return function() {
    this.textContent = t;
  };
}
function ri(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ii(t) {
  return arguments.length ? this.each(t == null ? ni : (typeof t == "function" ? ri : ei)(t)) : this.node().textContent;
}
function oi() {
  this.innerHTML = "";
}
function si(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ai(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ui(t) {
  return arguments.length ? this.each(t == null ? oi : (typeof t == "function" ? ai : si)(t)) : this.node().innerHTML;
}
function ci() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function li() {
  return this.each(ci);
}
function fi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function hi() {
  return this.each(fi);
}
function di(t) {
  var n = typeof t == "function" ? t : se(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function gi() {
  return null;
}
function pi(t, n) {
  var e = typeof t == "function" ? t : se(t), r = n == null ? gi : typeof n == "function" ? n : hn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function mi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function yi() {
  return this.each(mi);
}
function wi() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function xi() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function vi(t) {
  return this.select(t ? xi : wi);
}
function _i(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function bi(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ki(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Mi(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ai(t, n, e) {
  return function() {
    var r = this.__on, i, o = bi(n);
    if (r) {
      for (var s = 0, u = r.length; s < u; ++s)
        if ((i = r[s]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ni(t, n, e) {
  var r = ki(t + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var c = 0, a = u.length, l; c < a; ++c)
        for (i = 0, l = u[c]; i < o; ++i)
          if ((s = r[i]).type === l.type && s.name === l.name)
            return l.value;
    }
    return;
  }
  for (u = n ? Ai : Mi, i = 0; i < o; ++i)
    this.each(u(r[i], n, e));
  return this;
}
function me(t, n, e) {
  var r = fe(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Si(t, n) {
  return function() {
    return me(this, t, n);
  };
}
function $i(t, n) {
  return function() {
    return me(this, t, n.apply(this, arguments));
  };
}
function Ei(t, n) {
  return this.each((typeof n == "function" ? $i : Si)(t, n));
}
function* Ci() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var ye = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function gt() {
  return new I([[document.documentElement]], ye);
}
function Ti() {
  return this;
}
I.prototype = gt.prototype = {
  constructor: I,
  select: rr,
  selectAll: ar,
  selectChild: fr,
  selectChildren: pr,
  filter: mr,
  data: br,
  enter: yr,
  exit: Mr,
  join: Ar,
  merge: Nr,
  selection: Ti,
  order: Sr,
  sort: $r,
  call: Cr,
  nodes: Tr,
  node: Lr,
  size: Ir,
  empty: Rr,
  each: Dr,
  attr: qr,
  style: Wr,
  property: Zr,
  classed: ti,
  text: ii,
  html: ui,
  raise: li,
  lower: hi,
  append: di,
  insert: pi,
  remove: yi,
  clone: vi,
  datum: _i,
  on: Ni,
  dispatch: Ei,
  [Symbol.iterator]: Ci
};
function K(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], ye);
}
const Li = 500, L = 10, G = [55, 50], we = 0.3, Ii = 10, Ri = {
  zoomLevel: 1,
  panLevel: 1,
  transition: !0
}, Zt = {}, _t = (t = "", n, e) => {
  var f;
  const r = Math.round((f = e.bandwidth) == null ? void 0 : f.call(e)) || 0, i = `${t}-${n}-${r}`;
  if (Zt[i] !== void 0)
    return Zt[i];
  let o = "";
  const s = new Date(t), [u, c, a] = t.split("-");
  a === "01" && (c === "01" ? o = u : o = s.toLocaleString("en-UK", {
    month: "short"
  }));
  let l = [];
  return r > 1 && l.push(16), r > 3 && l.push(8, 24), r > 7 && (l = [4, 7, 10, 13, 16, 19, 22, 25, 28]), l.includes(Number(a)) && (o = a), e.domain().length - 1 === n && (o = a), Zt[i] = o, o;
}, Di = (t, n, e, r) => {
  const [i, o] = Y(), [s, u] = Y(), { xScale: c, yScale: a } = e, {
    sizes: { width: l, height: f },
    visibleRange: { offset: h, first: d, last: m }
  } = r;
  F(() => {
    t.current && (K(t.current).select("g.x-axis, y.y-axis").remove(), o(
      K(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), u(K(t.current).append("g").classed("y-axis", !0)));
  }, []), F(() => {
    !c.domain || !n || (i.call(je(c)).attr("transform", `translate(${h},${f - G[0]})`).selectAll("text").classed(
      "emphasise",
      (w, p) => _t(w, p, c).length > 2
    ).attr("text-anchor", "end").attr("x", () => -16).attr("y", -4).attr("transform", "rotate(270)").text((w, p) => _t(w, p, c)), i.selectAll("line.clone").remove(), i.selectAll("line").attr(
      "y2",
      (w, p) => _t(w, p, c).length ? 12 : 6
    ).each((w, p, g) => {
      if (p > d && p < m && _t(w, p, c).length) {
        var x = g[p].parentNode.appendChild(g[p].cloneNode(!0));
        K(x).classed("clone", !0).attr("y1", -f + 1 + G[0] + L).attr("y2", -1);
      }
    }), s.call(Qe(a)).attr(
      "transform",
      `translate(${l - G[1] + L}, 0)`
    ), s.selectAll("line.clone").remove(), s.selectAll("line").each((w, p, g) => {
      var x = g[p].parentNode.appendChild(g[p].cloneNode(!0));
      K(x).classed("clone", !0).attr("x2", -l + 1 + G[1]).attr("x1", -1);
    }));
  }, [c, a]);
};
var zi = { value: () => {
} };
function xe() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Et(e);
}
function Et(t) {
  this._ = t;
}
function Oi(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Et.prototype = xe.prototype = {
  constructor: Et,
  on: function(t, n) {
    var e = this._, r = Oi(t + "", e), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((i = (t = r[o]).type) && (i = Pi(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < s; )
      if (i = (t = r[o]).type)
        e[i] = Nn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Nn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new Et(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  }
};
function Pi(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Nn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = zi, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var ot = 0, ut = 0, at = 0, ve = 1e3, Rt, ct, Dt = 0, Q = 0, Ut = 0, ft = typeof performance == "object" && performance.now ? performance : Date, _e = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function gn() {
  return Q || (_e(Fi), Q = ft.now() + Ut);
}
function Fi() {
  Q = 0;
}
function zt() {
  this._call = this._time = this._next = null;
}
zt.prototype = be.prototype = {
  constructor: zt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? gn() : +e) + (n == null ? 0 : +n), !this._next && ct !== this && (ct ? ct._next = this : Rt = this, ct = this), this._call = t, this._time = e, en();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, en());
  }
};
function be(t, n, e) {
  var r = new zt();
  return r.restart(t, n, e), r;
}
function Hi() {
  gn(), ++ot;
  for (var t = Rt, n; t; )
    (n = Q - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --ot;
}
function Sn() {
  Q = (Dt = ft.now()) + Ut, ot = ut = 0;
  try {
    Hi();
  } finally {
    ot = 0, qi(), Q = 0;
  }
}
function Xi() {
  var t = ft.now(), n = t - Dt;
  n > ve && (Ut -= n, Dt = t);
}
function qi() {
  for (var t, n = Rt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Rt = e);
  ct = t, en(r);
}
function en(t) {
  if (!ot) {
    ut && (ut = clearTimeout(ut));
    var n = t - Q;
    n > 24 ? (t < 1 / 0 && (ut = setTimeout(Sn, t - ft.now() - Ut)), at && (at = clearInterval(at))) : (at || (Dt = ft.now(), at = setInterval(Xi, ve)), ot = 1, _e(Sn));
  }
}
function $n(t, n, e) {
  var r = new zt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Vi = xe("start", "end", "cancel", "interrupt"), Bi = [], ke = 0, En = 1, rn = 2, Ct = 3, Cn = 4, on = 5, Tt = 6;
function Gt(t, n, e, r, i, o) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (e in s)
    return;
  Yi(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Vi,
    tween: Bi,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ke
  });
}
function pn(t, n) {
  var e = H(t, n);
  if (e.state > ke)
    throw new Error("too late; already scheduled");
  return e;
}
function q(t, n) {
  var e = H(t, n);
  if (e.state > Ct)
    throw new Error("too late; already running");
  return e;
}
function H(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function Yi(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = be(o, 0, e.time);
  function o(a) {
    e.state = En, e.timer.restart(s, e.delay, e.time), e.delay <= a && s(a - e.delay);
  }
  function s(a) {
    var l, f, h, d;
    if (e.state !== En)
      return c();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === Ct)
          return $n(s);
        d.state === Cn ? (d.state = Tt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = Tt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if ($n(function() {
      e.state === Ct && (e.state = Cn, e.timer.restart(u, e.delay, e.time), u(a));
    }), e.state = rn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === rn) {
      for (e.state = Ct, i = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function u(a) {
    for (var l = a < e.duration ? e.ease.call(null, a / e.duration) : (e.timer.restart(c), e.state = on, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    e.state === on && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = Tt, e.timer.stop(), delete r[n];
    for (var a in r)
      return;
    delete t.__transition;
  }
}
function Wi(t, n) {
  var e = t.__transition, r, i, o = !0, s;
  if (e) {
    n = n == null ? null : n + "";
    for (s in e) {
      if ((r = e[s]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > rn && r.state < on, r.state = Tt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[s];
    }
    o && delete t.__transition;
  }
}
function Ui(t) {
  return this.each(function() {
    Wi(this, t);
  });
}
function mn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Me(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function pt() {
}
var ht = 0.7, Ot = 1 / ht, rt = "\\s*([+-]?\\d+)\\s*", dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", X = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gi = /^#([0-9a-f]{3,8})$/, Ki = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Zi = new RegExp(`^rgb\\(${X},${X},${X}\\)$`), Ji = new RegExp(`^rgba\\(${rt},${rt},${rt},${dt}\\)$`), Qi = new RegExp(`^rgba\\(${X},${X},${X},${dt}\\)$`), ji = new RegExp(`^hsl\\(${dt},${X},${X}\\)$`), to = new RegExp(`^hsla\\(${dt},${X},${X},${dt}\\)$`), Tn = {
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
mn(pt, j, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ln,
  // Deprecated! Use color.formatHex.
  formatHex: Ln,
  formatHex8: no,
  formatHsl: eo,
  formatRgb: In,
  toString: In
});
function Ln() {
  return this.rgb().formatHex();
}
function no() {
  return this.rgb().formatHex8();
}
function eo() {
  return Ae(this).formatHsl();
}
function In() {
  return this.rgb().formatRgb();
}
function j(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Gi.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Rn(n) : e === 3 ? new T(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? bt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? bt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ki.exec(t)) ? new T(n[1], n[2], n[3], 1) : (n = Zi.exec(t)) ? new T(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ji.exec(t)) ? bt(n[1], n[2], n[3], n[4]) : (n = Qi.exec(t)) ? bt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ji.exec(t)) ? On(n[1], n[2] / 100, n[3] / 100, 1) : (n = to.exec(t)) ? On(n[1], n[2] / 100, n[3] / 100, n[4]) : Tn.hasOwnProperty(t) ? Rn(Tn[t]) : t === "transparent" ? new T(NaN, NaN, NaN, 0) : null;
}
function Rn(t) {
  return new T(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function bt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new T(t, n, e, r);
}
function ro(t) {
  return t instanceof pt || (t = j(t)), t ? (t = t.rgb(), new T(t.r, t.g, t.b, t.opacity)) : new T();
}
function sn(t, n, e, r) {
  return arguments.length === 1 ? ro(t) : new T(t, n, e, r ?? 1);
}
function T(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
mn(T, sn, Me(pt, {
  brighter(t) {
    return t = t == null ? Ot : Math.pow(Ot, t), new T(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ht : Math.pow(ht, t), new T(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new T(J(this.r), J(this.g), J(this.b), Pt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Dn,
  // Deprecated! Use color.formatHex.
  formatHex: Dn,
  formatHex8: io,
  formatRgb: zn,
  toString: zn
}));
function Dn() {
  return `#${Z(this.r)}${Z(this.g)}${Z(this.b)}`;
}
function io() {
  return `#${Z(this.r)}${Z(this.g)}${Z(this.b)}${Z((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function zn() {
  const t = Pt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${J(this.r)}, ${J(this.g)}, ${J(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Pt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function J(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Z(t) {
  return t = J(t), (t < 16 ? "0" : "") + t.toString(16);
}
function On(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new O(t, n, e, r);
}
function Ae(t) {
  if (t instanceof O)
    return new O(t.h, t.s, t.l, t.opacity);
  if (t instanceof pt || (t = j(t)), !t)
    return new O();
  if (t instanceof O)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), s = NaN, u = o - i, c = (o + i) / 2;
  return u ? (n === o ? s = (e - r) / u + (e < r) * 6 : e === o ? s = (r - n) / u + 2 : s = (n - e) / u + 4, u /= c < 0.5 ? o + i : 2 - o - i, s *= 60) : u = c > 0 && c < 1 ? 0 : s, new O(s, u, c, t.opacity);
}
function oo(t, n, e, r) {
  return arguments.length === 1 ? Ae(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
mn(O, oo, Me(pt, {
  brighter(t) {
    return t = t == null ? Ot : Math.pow(Ot, t), new O(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ht : Math.pow(ht, t), new O(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new T(
      Jt(t >= 240 ? t - 240 : t + 120, i, r),
      Jt(t, i, r),
      Jt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new O(Pn(this.h), kt(this.s), kt(this.l), Pt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Pt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Pn(this.h)}, ${kt(this.s) * 100}%, ${kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Pn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Jt(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const yn = (t) => () => t;
function so(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ao(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function uo(t) {
  return (t = +t) == 1 ? Ne : function(n, e) {
    return e - n ? ao(n, e, t) : yn(isNaN(n) ? e : n);
  };
}
function Ne(t, n) {
  var e = n - t;
  return e ? so(t, e) : yn(isNaN(t) ? n : t);
}
const Ft = function t(n) {
  var e = uo(n);
  function r(i, o) {
    var s = e((i = sn(i)).r, (o = sn(o)).r), u = e(i.g, o.g), c = e(i.b, o.b), a = Ne(i.opacity, o.opacity);
    return function(l) {
      return i.r = s(l), i.g = u(l), i.b = c(l), i.opacity = a(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function co(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function lo(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function fo(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), s;
  for (s = 0; s < r; ++s)
    i[s] = wn(t[s], n[s]);
  for (; s < e; ++s)
    o[s] = n[s];
  return function(u) {
    for (s = 0; s < r; ++s)
      o[s] = i[s](u);
    return o;
  };
}
function ho(t, n) {
  var e = new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function z(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function go(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = wn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var an = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qt = new RegExp(an.source, "g");
function po(t) {
  return function() {
    return t;
  };
}
function mo(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Se(t, n) {
  var e = an.lastIndex = Qt.lastIndex = 0, r, i, o, s = -1, u = [], c = [];
  for (t = t + "", n = n + ""; (r = an.exec(t)) && (i = Qt.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[s] ? u[s] += o : u[++s] = o), (r = r[0]) === (i = i[0]) ? u[s] ? u[s] += i : u[++s] = i : (u[++s] = null, c.push({ i: s, x: z(r, i) })), e = Qt.lastIndex;
  return e < n.length && (o = n.slice(e), u[s] ? u[s] += o : u[++s] = o), u.length < 2 ? c[0] ? mo(c[0].x) : po(n) : (n = c.length, function(a) {
    for (var l = 0, f; l < n; ++l)
      u[(f = c[l]).i] = f.x(a);
    return u.join("");
  });
}
function wn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? yn(n) : (e === "number" ? z : e === "string" ? (r = j(n)) ? (n = r, Ft) : Se : n instanceof j ? Ft : n instanceof Date ? ho : lo(n) ? co : Array.isArray(n) ? fo : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? go : z)(t, n);
}
function yo(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Fn = 180 / Math.PI, un = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function $e(t, n, e, r, i, o) {
  var s, u, c;
  return (s = Math.sqrt(t * t + n * n)) && (t /= s, n /= s), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Fn,
    skewX: Math.atan(c) * Fn,
    scaleX: s,
    scaleY: u
  };
}
var Mt;
function wo(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? un : $e(n.a, n.b, n.c, n.d, n.e, n.f);
}
function xo(t) {
  return t == null || (Mt || (Mt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Mt.setAttribute("transform", t), !(t = Mt.transform.baseVal.consolidate())) ? un : (t = t.matrix, $e(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ee(t, n, e, r) {
  function i(a) {
    return a.length ? a.pop() + " " : "";
  }
  function o(a, l, f, h, d, m) {
    if (a !== f || l !== h) {
      var w = d.push("translate(", null, n, null, e);
      m.push({ i: w - 4, x: z(a, f) }, { i: w - 2, x: z(l, h) });
    } else
      (f || h) && d.push("translate(" + f + n + h + e);
  }
  function s(a, l, f, h) {
    a !== l ? (a - l > 180 ? l += 360 : l - a > 180 && (a += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: z(a, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function u(a, l, f, h) {
    a !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: z(a, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(a, l, f, h, d, m) {
    if (a !== f || l !== h) {
      var w = d.push(i(d) + "scale(", null, ",", null, ")");
      m.push({ i: w - 4, x: z(a, f) }, { i: w - 2, x: z(l, h) });
    } else
      (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(a, l) {
    var f = [], h = [];
    return a = t(a), l = t(l), o(a.translateX, a.translateY, l.translateX, l.translateY, f, h), s(a.rotate, l.rotate, f, h), u(a.skewX, l.skewX, f, h), c(a.scaleX, a.scaleY, l.scaleX, l.scaleY, f, h), a = l = null, function(d) {
      for (var m = -1, w = h.length, p; ++m < w; )
        f[(p = h[m]).i] = p.x(d);
      return f.join("");
    };
  };
}
var vo = Ee(wo, "px, ", "px)", "deg)"), _o = Ee(xo, ", ", ")", ")");
function bo(t, n) {
  var e, r;
  return function() {
    var i = q(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var s = 0, u = r.length; s < u; ++s)
        if (r[s].name === n) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function ko(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = q(this, t), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var u = { name: n, value: e }, c = 0, a = i.length; c < a; ++c)
        if (i[c].name === n) {
          i[c] = u;
          break;
        }
      c === a && i.push(u);
    }
    o.tween = i;
  };
}
function Mo(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = H(this.node(), e).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === t)
        return s.value;
    return null;
  }
  return this.each((n == null ? bo : ko)(e, t, n));
}
function xn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = q(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return H(i, r).value[n];
  };
}
function Ce(t, n) {
  var e;
  return (typeof n == "number" ? z : n instanceof j ? Ft : (e = j(n)) ? (n = e, Ft) : Se)(t, n);
}
function Ao(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function No(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function So(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttribute(t);
    return s === i ? null : s === r ? o : o = n(r = s, e);
  };
}
function $o(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === i ? null : s === r ? o : o = n(r = s, e);
  };
}
function Eo(t, n, e) {
  var r, i, o;
  return function() {
    var s, u = e(this), c;
    return u == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), c = u + "", s === c ? null : s === r && c === i ? o : (i = c, o = n(r = s, u)));
  };
}
function Co(t, n, e) {
  var r, i, o;
  return function() {
    var s, u = e(this), c;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), c = u + "", s === c ? null : s === r && c === i ? o : (i = c, o = n(r = s, u)));
  };
}
function To(t, n) {
  var e = Wt(t), r = e === "transform" ? _o : Ce;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Co : Eo)(e, r, xn(this, "attr." + t, n)) : n == null ? (e.local ? No : Ao)(e) : (e.local ? $o : So)(e, r, n));
}
function Lo(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Io(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Ro(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Io(t, o)), e;
  }
  return i._value = n, i;
}
function Do(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Lo(t, o)), e;
  }
  return i._value = n, i;
}
function zo(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = Wt(t);
  return this.tween(e, (r.local ? Ro : Do)(r, n));
}
function Oo(t, n) {
  return function() {
    pn(this, t).delay = +n.apply(this, arguments);
  };
}
function Po(t, n) {
  return n = +n, function() {
    pn(this, t).delay = n;
  };
}
function Fo(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Oo : Po)(n, t)) : H(this.node(), n).delay;
}
function Ho(t, n) {
  return function() {
    q(this, t).duration = +n.apply(this, arguments);
  };
}
function Xo(t, n) {
  return n = +n, function() {
    q(this, t).duration = n;
  };
}
function qo(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ho : Xo)(n, t)) : H(this.node(), n).duration;
}
function Vo(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    q(this, t).ease = n;
  };
}
function Bo(t) {
  var n = this._id;
  return arguments.length ? this.each(Vo(n, t)) : H(this.node(), n).ease;
}
function Yo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    q(this, t).ease = e;
  };
}
function Wo(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Yo(this._id, t));
}
function Uo(t) {
  typeof t != "function" && (t = ue(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], s = o.length, u = r[i] = [], c, a = 0; a < s; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o) && u.push(c);
  return new W(r, this._parents, this._name, this._id);
}
function Go(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), s = new Array(r), u = 0; u < o; ++u)
    for (var c = n[u], a = e[u], l = c.length, f = s[u] = new Array(l), h, d = 0; d < l; ++d)
      (h = c[d] || a[d]) && (f[d] = h);
  for (; u < r; ++u)
    s[u] = n[u];
  return new W(s, this._parents, this._name, this._id);
}
function Ko(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Zo(t, n, e) {
  var r, i, o = Ko(n) ? pn : q;
  return function() {
    var s = o(this, t), u = s.on;
    u !== r && (i = (r = u).copy()).on(n, e), s.on = i;
  };
}
function Jo(t, n) {
  var e = this._id;
  return arguments.length < 2 ? H(this.node(), e).on.on(t) : this.each(Zo(e, t, n));
}
function Qo(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function jo() {
  return this.on("end.remove", Qo(this._id));
}
function ts(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = hn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var u = r[s], c = u.length, a = o[s] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = u[h]) && (f = t.call(l, l.__data__, h, u)) && ("__data__" in l && (f.__data__ = l.__data__), a[h] = f, Gt(a[h], n, e, h, a, H(l, e)));
  return new W(o, this._parents, n, e);
}
function ns(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ae(t));
  for (var r = this._groups, i = r.length, o = [], s = [], u = 0; u < i; ++u)
    for (var c = r[u], a = c.length, l, f = 0; f < a; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), d, m = H(l, e), w = 0, p = h.length; w < p; ++w)
          (d = h[w]) && Gt(d, n, e, w, h, m);
        o.push(h), s.push(l);
      }
  return new W(o, s, n, e);
}
var es = gt.prototype.constructor;
function rs() {
  return new es(this._groups, this._parents);
}
function is(t, n) {
  var e, r, i;
  return function() {
    var o = it(this, t), s = (this.style.removeProperty(t), it(this, t));
    return o === s ? null : o === e && s === r ? i : i = n(e = o, r = s);
  };
}
function Te(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function os(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var s = it(this, t);
    return s === i ? null : s === r ? o : o = n(r = s, e);
  };
}
function ss(t, n, e) {
  var r, i, o;
  return function() {
    var s = it(this, t), u = e(this), c = u + "";
    return u == null && (c = u = (this.style.removeProperty(t), it(this, t))), s === c ? null : s === r && c === i ? o : (i = c, o = n(r = s, u));
  };
}
function as(t, n) {
  var e, r, i, o = "style." + n, s = "end." + o, u;
  return function() {
    var c = q(this, t), a = c.on, l = c.value[o] == null ? u || (u = Te(n)) : void 0;
    (a !== e || i !== l) && (r = (e = a).copy()).on(s, i = l), c.on = r;
  };
}
function us(t, n, e) {
  var r = (t += "") == "transform" ? vo : Ce;
  return n == null ? this.styleTween(t, is(t, r)).on("end.style." + t, Te(t)) : typeof n == "function" ? this.styleTween(t, ss(t, r, xn(this, "style." + t, n))).each(as(this._id, t)) : this.styleTween(t, os(t, r, n), e).on("end.style." + t, null);
}
function cs(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ls(t, n, e) {
  var r, i;
  function o() {
    var s = n.apply(this, arguments);
    return s !== i && (r = (i = s) && cs(t, s, e)), r;
  }
  return o._value = n, o;
}
function fs(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, ls(t, n, e ?? ""));
}
function hs(t) {
  return function() {
    this.textContent = t;
  };
}
function ds(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function gs(t) {
  return this.tween("text", typeof t == "function" ? ds(xn(this, "text", t)) : hs(t == null ? "" : t + ""));
}
function ps(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function ms(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && ps(i)), n;
  }
  return r._value = t, r;
}
function ys(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, ms(t));
}
function ws() {
  for (var t = this._name, n = this._id, e = Le(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, c, a = 0; a < u; ++a)
      if (c = s[a]) {
        var l = H(c, n);
        Gt(c, t, e, a, s, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new W(r, this._parents, t, e);
}
function xs() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, s) {
    var u = { value: s }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var a = q(this, r), l = a.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), a.on = n;
    }), i === 0 && o();
  });
}
var vs = 0;
function W(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Le() {
  return ++vs;
}
var B = gt.prototype;
W.prototype = {
  constructor: W,
  select: ts,
  selectAll: ns,
  selectChild: B.selectChild,
  selectChildren: B.selectChildren,
  filter: Uo,
  merge: Go,
  selection: rs,
  transition: ws,
  call: B.call,
  nodes: B.nodes,
  node: B.node,
  size: B.size,
  empty: B.empty,
  each: B.each,
  on: Jo,
  attr: To,
  attrTween: zo,
  style: us,
  styleTween: fs,
  text: gs,
  textTween: ys,
  remove: jo,
  tween: Mo,
  delay: Fo,
  duration: qo,
  ease: Bo,
  easeVarying: Wo,
  end: xs,
  [Symbol.iterator]: B[Symbol.iterator]
};
function _s(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var bs = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: _s
};
function ks(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ms(t) {
  var n, e;
  t instanceof W ? (n = t._id, t = t._name) : (n = Le(), (e = bs).time = gn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, c, a = 0; a < u; ++a)
      (c = s[a]) && Gt(c, t, n, a, s, e || ks(c, n));
  return new W(r, this._parents, t, n);
}
gt.prototype.interrupt = Ui;
gt.prototype.transition = Ms;
const Hn = {
  wicks: "line",
  candles: "rect"
}, As = (t, n, e, r, i) => {
  const {
    scales: { xScale: o },
    utils: { scaledHeight: s, scaledY: u }
  } = r, {
    visibleRange: { offset: c }
  } = e, a = lt({}), l = lt(!1), [f, h] = Y({
    item: void 0,
    position: void 0
  }), d = P(() => K(t.current), [t.current]), m = P(
    (g, x = d()) => x.selectAll(`${Hn[g]}.${g}`).data(n),
    [n]
  ), w = P(
    (g) => (a.current[g] = a.current[g] ?? d().append("g").classed(`${g}-group`, !0).attr("clip-path", "url(#chart-contents)"), a.current[g]),
    [a]
  ), p = P(
    (g, x) => {
      let y = m(g, w(g));
      y.size() !== n.length && (y = y.enter().append(Hn[g]));
      const A = () => y.transition().duration(i ? Li : 50), _ = (M) => Number(o(M.date)) + (g === "wicks" ? +o.bandwidth() / 2 : 0) + c, b = (M) => u(M[x[0]], M[x[1]]), N = (M) => s(M[x[0]], M[x[1]]), S = (M) => b(M) + N(M);
      return g === "candles" ? (A().attr("width", () => +o.bandwidth()).attr("height", N).attr("x", _).attr("y", b), y.classed("is-increased", (M) => M.close > M.open).classed("is-decreased", (M) => M.close < M.open).classed("is-zoomed", (M) => +o.bandwidth() > 10).on("click", ({ target: M }, C) => {
        y.classed("is-active", !1), K(M).classed("is-active", !0), l.current = !0, h({
          item: C,
          position: {
            x: _(C) + o.bandwidth() + L,
            y: S(C) + 8
          }
        });
      }).on("mouseover", (M, C) => {
        l.current || h({
          item: C
        });
      }).on("mouseout", (M, C) => {
        l.current || h({
          item: void 0
        });
      })) : A().attr("x1", _).attr("y1", b).attr("x2", _).attr("y2", S), y.classed(g, !0).exit().remove(), y;
    },
    [o, u]
  );
  return F(() => {
    w("wicks"), w("candles");
    const g = ({ target: x }) => {
      x.nodeName !== "rect" && (d().selectAll("rect").classed("is-active", !1), l.current = !1, h(({ position: y }) => ({ item: void 0, position: y })));
    };
    return addEventListener("resize", g), addEventListener("pointerdown", g), () => {
      removeEventListener("pointerdown", g), removeEventListener("resize", g);
    };
  }, []), F(() => {
    var g;
    (g = o == null ? void 0 : o.bandwidth) != null && g.call(o) && (p("wicks", ["low", "high"]), p("candles", ["open", "close"]));
  }, [o, u]), f;
};
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ie = "Expected a function", Xn = 0 / 0, Ns = "[object Symbol]", Ss = /^\s+|\s+$/g, $s = /^[-+]0x[0-9a-f]+$/i, Es = /^0b[01]+$/i, Cs = /^0o[0-7]+$/i, Ts = parseInt, Ls = typeof At == "object" && At && At.Object === Object && At, Is = typeof self == "object" && self && self.Object === Object && self, Rs = Ls || Is || Function("return this")(), Ds = Object.prototype, zs = Ds.toString, Os = Math.max, Ps = Math.min, jt = function() {
  return Rs.Date.now();
};
function Fs(t, n, e) {
  var r, i, o, s, u, c, a = 0, l = !1, f = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(Ie);
  n = qn(n) || 0, Ht(e) && (l = !!e.leading, f = "maxWait" in e, o = f ? Os(qn(e.maxWait) || 0, n) : o, h = "trailing" in e ? !!e.trailing : h);
  function d(b) {
    var N = r, S = i;
    return r = i = void 0, a = b, s = t.apply(S, N), s;
  }
  function m(b) {
    return a = b, u = setTimeout(g, n), l ? d(b) : s;
  }
  function w(b) {
    var N = b - c, S = b - a, M = n - N;
    return f ? Ps(M, o - S) : M;
  }
  function p(b) {
    var N = b - c, S = b - a;
    return c === void 0 || N >= n || N < 0 || f && S >= o;
  }
  function g() {
    var b = jt();
    if (p(b))
      return x(b);
    u = setTimeout(g, w(b));
  }
  function x(b) {
    return u = void 0, h && r ? d(b) : (r = i = void 0, s);
  }
  function y() {
    u !== void 0 && clearTimeout(u), a = 0, r = c = i = u = void 0;
  }
  function A() {
    return u === void 0 ? s : x(jt());
  }
  function _() {
    var b = jt(), N = p(b);
    if (r = arguments, i = this, c = b, N) {
      if (u === void 0)
        return m(c);
      if (f)
        return u = setTimeout(g, n), d(c);
    }
    return u === void 0 && (u = setTimeout(g, n)), s;
  }
  return _.cancel = y, _.flush = A, _;
}
function Hs(t, n, e) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(Ie);
  return Ht(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), Fs(t, n, {
    leading: r,
    maxWait: n,
    trailing: i
  });
}
function Ht(t) {
  var n = typeof t;
  return !!t && (n == "object" || n == "function");
}
function Xs(t) {
  return !!t && typeof t == "object";
}
function qs(t) {
  return typeof t == "symbol" || Xs(t) && zs.call(t) == Ns;
}
function qn(t) {
  if (typeof t == "number")
    return t;
  if (qs(t))
    return Xn;
  if (Ht(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Ht(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(Ss, "");
  var e = Es.test(t);
  return e || Cs.test(t) ? Ts(t.slice(2), e ? 2 : 8) : $s.test(t) ? Xn : +t;
}
var Xt = Hs;
const { abs: Vs, round: Vn } = Math, Bs = (t, n, e) => {
  const [r, i] = Y({
    width: 0,
    height: 0
  }), [o, s] = Y({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), { zoomLevel: u, panLevel: c } = e;
  return F(() => {
    const a = Xt(() => {
      const { clientWidth: l, clientHeight: f } = t.current;
      i({ width: l, height: f });
    }, 200);
    return a(), addEventListener("resize", a), () => removeEventListener("resize", a);
  }, []), F(() => {
    if (!n)
      return;
    const { width: a } = r, l = Ii * (1 + we) * u, f = l * n, h = a - G[1] + L * 2;
    let d = c * u - f + h;
    d = d <= 0 ? d : 0, d = f > a ? d : h - f, d = Vs(d - h) <= f ? d : -f + h;
    const m = Vn((d * -1 - L) / l), w = Vn((d * -1 + h) / l);
    s({ first: m, last: w, offset: d, totalWidth: f });
  }, [u, c, n, r.width]), { visibleRange: o, sizes: r };
}, Ys = (t) => {
  var n;
  return (n = t.toISOString().split("T")) == null ? void 0 : n[0];
}, Ws = (t = "") => new Date(t).toLocaleDateString("en-UK"), nt = (t = 0, n = 1e4) => Math.floor(Math.random() * (t - n - 1)) + n + 1, Bn = (t, n = 100) => Math.abs(t + (t - nt(t - n, t + n))), Us = (t, n) => {
  let r = new Date();
  r.setDate(r.getDate() - t);
  const i = n ? Bn(n.close, 3) : nt(100, 400), o = Bn(i, 50), s = nt(Math.max(i, o), Math.max(i, o) + 20), u = nt(
    Math.abs(Math.min(i, o) - 20),
    Math.min(i, o)
  );
  return {
    date: Ys(r),
    high: s,
    low: u > 0 ? u : 0,
    open: i,
    close: o > 0 ? o : 0,
    volume: nt(5e3, 1e4),
    trades: nt(50, 100)
  };
}, Qa = (t) => {
  let n;
  return {
    company: "Bortus",
    dates: new Array(t + 1).fill("").map((r, i) => {
      const o = Us(t - i, n);
      return n = o, o;
    })
  };
};
function Lt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Gs(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Re(t) {
  let n, e, r;
  t.length !== 2 ? (n = Lt, e = (u, c) => Lt(t(u), c), r = (u, c) => t(u) - c) : (n = t === Lt || t === Gs ? t : Ks, e = t, r = t);
  function i(u, c, a = 0, l = u.length) {
    if (a < l) {
      if (n(c, c) !== 0)
        return l;
      do {
        const f = a + l >>> 1;
        e(u[f], c) < 0 ? a = f + 1 : l = f;
      } while (a < l);
    }
    return a;
  }
  function o(u, c, a = 0, l = u.length) {
    if (a < l) {
      if (n(c, c) !== 0)
        return l;
      do {
        const f = a + l >>> 1;
        e(u[f], c) <= 0 ? a = f + 1 : l = f;
      } while (a < l);
    }
    return a;
  }
  function s(u, c, a = 0, l = u.length) {
    const f = i(u, c, a, l - 1);
    return f > a && r(u[f - 1], c) > -r(u[f], c) ? f - 1 : f;
  }
  return { left: i, center: s, right: o };
}
function Ks() {
  return 0;
}
function Zs(t) {
  return t === null ? NaN : +t;
}
const Js = Re(Lt), Qs = Js.right;
Re(Zs).center;
const js = Qs;
class Yn extends Map {
  constructor(n, e = ea) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(Wn(this, n));
  }
  has(n) {
    return super.has(Wn(this, n));
  }
  set(n, e) {
    return super.set(ta(this, n), e);
  }
  delete(n) {
    return super.delete(na(this, n));
  }
}
function Wn({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function ta({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function na({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ea(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const ra = Math.sqrt(50), ia = Math.sqrt(10), oa = Math.sqrt(2);
function qt(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), s = o >= ra ? 10 : o >= ia ? 5 : o >= oa ? 2 : 1;
  let u, c, a;
  return i < 0 ? (a = Math.pow(10, -i) / s, u = Math.round(t * a), c = Math.round(n * a), u / a < t && ++u, c / a > n && --c, a = -a) : (a = Math.pow(10, i) * s, u = Math.round(t / a), c = Math.round(n / a), u * a < t && ++u, c * a > n && --c), c < u && 0.5 <= e && e < 2 ? qt(t, n, e * 2) : [u, c, a];
}
function sa(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, o, s] = r ? qt(n, t, e) : qt(t, n, e);
  if (!(o >= i))
    return [];
  const u = o - i + 1, c = new Array(u);
  if (r)
    if (s < 0)
      for (let a = 0; a < u; ++a)
        c[a] = (o - a) / -s;
    else
      for (let a = 0; a < u; ++a)
        c[a] = (o - a) * s;
  else if (s < 0)
    for (let a = 0; a < u; ++a)
      c[a] = (i + a) / -s;
  else
    for (let a = 0; a < u; ++a)
      c[a] = (i + a) * s;
  return c;
}
function cn(t, n, e) {
  return n = +n, t = +t, e = +e, qt(t, n, e)[2];
}
function aa(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? cn(n, t, e) : cn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ua(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function vn(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const Un = Symbol("implicit");
function De() {
  var t = new Yn(), n = [], e = [], r = Un;
  function i(o) {
    let s = t.get(o);
    if (s === void 0) {
      if (r !== Un)
        return r;
      t.set(o, s = n.push(o) - 1);
    }
    return e[s % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new Yn();
    for (const s of o)
      t.has(s) || t.set(s, n.push(s) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return De(n, e).unknown(r);
  }, vn.apply(i, arguments), i;
}
function ze() {
  var t = De().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, s, u = !1, c = 0, a = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = n().length, d = i < r, m = d ? i : r, w = d ? r : i;
    o = (w - m) / Math.max(1, h - c + a * 2), u && (o = Math.floor(o)), m += (w - m - o * (h - c)) * l, s = o * (1 - c), u && (m = Math.round(m), s = Math.round(s));
    var p = ua(h).map(function(g) {
      return m + o * g;
    });
    return e(d ? p.reverse() : p);
  }
  return t.domain = function(h) {
    return arguments.length ? (n(h), f()) : n();
  }, t.range = function(h) {
    return arguments.length ? ([r, i] = h, r = +r, i = +i, f()) : [r, i];
  }, t.rangeRound = function(h) {
    return [r, i] = h, r = +r, i = +i, u = !0, f();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return o;
  }, t.round = function(h) {
    return arguments.length ? (u = !!h, f()) : u;
  }, t.padding = function(h) {
    return arguments.length ? (c = Math.min(1, a = +h), f()) : c;
  }, t.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (a = +h, f()) : a;
  }, t.align = function(h) {
    return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l;
  }, t.copy = function() {
    return ze(n(), [r, i]).round(u).paddingInner(c).paddingOuter(a).align(l);
  }, vn.apply(f(), arguments);
}
function ca(t) {
  return function() {
    return t;
  };
}
function la(t) {
  return +t;
}
var Gn = [0, 1];
function et(t) {
  return t;
}
function ln(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : ca(isNaN(n) ? NaN : 0.5);
}
function fa(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function ha(t, n, e) {
  var r = t[0], i = t[1], o = n[0], s = n[1];
  return i < r ? (r = ln(i, r), o = e(s, o)) : (r = ln(r, i), o = e(o, s)), function(u) {
    return o(r(u));
  };
}
function da(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), s = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++s < r; )
    i[s] = ln(t[s], t[s + 1]), o[s] = e(n[s], n[s + 1]);
  return function(u) {
    var c = js(t, u, 1, r) - 1;
    return o[c](i[c](u));
  };
}
function ga(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function pa() {
  var t = Gn, n = Gn, e = wn, r, i, o, s = et, u, c, a;
  function l() {
    var h = Math.min(t.length, n.length);
    return s !== et && (s = fa(t[0], t[h - 1])), u = h > 2 ? da : ha, c = a = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = u(t.map(r), n, e)))(r(s(h)));
  }
  return f.invert = function(h) {
    return s(i((a || (a = u(n, t.map(r), z)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, la), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), l()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = yo, l();
  }, f.clamp = function(h) {
    return arguments.length ? (s = h ? !0 : et, l()) : s !== et;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, l()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, d) {
    return r = h, i = d, l();
  };
}
function ma() {
  return pa()(et, et);
}
function ya(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Vt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function st(t) {
  return t = Vt(Math.abs(t)), t ? t[1] : NaN;
}
function wa(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], s = 0, u = t[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(e.substring(i -= u, i + u)), !((c += u + 1) > r)); )
      u = t[s = (s + 1) % t.length];
    return o.reverse().join(n);
  };
}
function xa(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var va = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Bt(t) {
  if (!(n = va.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new _n({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Bt.prototype = _n.prototype;
function _n(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
_n.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function _a(t) {
  t:
    for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
      switch (t[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+t[e])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Oe;
function ba(t, n) {
  var e = Vt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (Oe = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = r.length;
  return o === s ? r : o > s ? r + new Array(o - s + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Vt(t, Math.max(0, n + o - 1))[0];
}
function Kn(t, n) {
  var e = Vt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Zn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ya,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Kn(t * 100, n),
  r: Kn,
  s: ba,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Jn(t) {
  return t;
}
var Qn = Array.prototype.map, jn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ka(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Jn : wa(Qn.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Jn : xa(Qn.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function a(f) {
    f = Bt(f);
    var h = f.fill, d = f.align, m = f.sign, w = f.symbol, p = f.zero, g = f.width, x = f.comma, y = f.precision, A = f.trim, _ = f.type;
    _ === "n" ? (x = !0, _ = "g") : Zn[_] || (y === void 0 && (y = 12), A = !0, _ = "g"), (p || h === "0" && d === "=") && (p = !0, h = "0", d = "=");
    var b = w === "$" ? e : w === "#" && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "", N = w === "$" ? r : /[%p]/.test(_) ? s : "", S = Zn[_], M = /[defgprs%]/.test(_);
    y = y === void 0 ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function C(v) {
      var E = b, $ = N, tt, bn, mt;
      if (_ === "c")
        $ = S(v) + $, v = "";
      else {
        v = +v;
        var yt = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? c : S(Math.abs(v), y), A && (v = _a(v)), yt && +v == 0 && m !== "+" && (yt = !1), E = (yt ? m === "(" ? m : u : m === "-" || m === "(" ? "" : m) + E, $ = (_ === "s" ? jn[8 + Oe / 3] : "") + $ + (yt && m === "(" ? ")" : ""), M) {
          for (tt = -1, bn = v.length; ++tt < bn; )
            if (mt = v.charCodeAt(tt), 48 > mt || mt > 57) {
              $ = (mt === 46 ? i + v.slice(tt + 1) : v.slice(tt)) + $, v = v.slice(0, tt);
              break;
            }
        }
      }
      x && !p && (v = n(v, 1 / 0));
      var wt = E.length + v.length + $.length, V = wt < g ? new Array(g - wt + 1).join(h) : "";
      switch (x && p && (v = n(V + v, V.length ? g - $.length : 1 / 0), V = ""), d) {
        case "<":
          v = E + v + $ + V;
          break;
        case "=":
          v = E + V + v + $;
          break;
        case "^":
          v = V.slice(0, wt = V.length >> 1) + E + v + $ + V.slice(wt);
          break;
        default:
          v = V + E + v + $;
          break;
      }
      return o(v);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function l(f, h) {
    var d = a((f = Bt(f), f.type = "f", f)), m = Math.max(-8, Math.min(8, Math.floor(st(h) / 3))) * 3, w = Math.pow(10, -m), p = jn[8 + m / 3];
    return function(g) {
      return d(w * g) + p;
    };
  }
  return {
    format: a,
    formatPrefix: l
  };
}
var Nt, Pe, Fe;
Ma({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ma(t) {
  return Nt = ka(t), Pe = Nt.format, Fe = Nt.formatPrefix, Nt;
}
function Aa(t) {
  return Math.max(0, -st(Math.abs(t)));
}
function Na(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(st(n) / 3))) * 3 - st(Math.abs(t)));
}
function Sa(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, st(n) - st(t)) + 1;
}
function $a(t, n, e, r) {
  var i = aa(t, n, e), o;
  switch (r = Bt(r ?? ",f"), r.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Na(i, s)) && (r.precision = o), Fe(r, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Sa(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Aa(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Pe(r);
}
function Ea(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return sa(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return $a(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, s = r[i], u = r[o], c, a, l = 10;
    for (u < s && (a = s, s = u, u = a, a = i, i = o, o = a); l-- > 0; ) {
      if (a = cn(s, u, e), a === c)
        return r[i] = s, r[o] = u, n(r);
      if (a > 0)
        s = Math.floor(s / a) * a, u = Math.ceil(u / a) * a;
      else if (a < 0)
        s = Math.ceil(s * a) / a, u = Math.floor(u * a) / a;
      else
        break;
      c = a;
    }
    return t;
  }, t;
}
function He() {
  var t = ma();
  return t.copy = function() {
    return ga(t, He());
  }, vn.apply(t, arguments), Ea(t);
}
const { abs: Ca, min: te, max: Ta } = Math, La = (t, n) => {
  const { sizes: e, visibleRange: r } = n, [i, o] = Y({
    xScale: (c) => c,
    yScale: (c) => c
  }), s = P(
    (c, a) => Ca(i.yScale(a) - i.yScale(c)) || 1,
    [i.yScale]
  ), u = P(
    (c, a) => i.yScale(te(c, a)) - s(c, a) || 1,
    [i.yScale]
  );
  return F(() => {
    if (!(t != null && t.length))
      return;
    const { first: c, last: a, totalWidth: l } = r, { height: f } = e, h = t.slice(c > 0 ? c : 0, a), d = te(...h.map(({ low: g }) => g)), m = Ta(...h.map(({ high: g }) => g)), w = ze().range([L, l - L]).domain(t.map(({ date: g }) => g)).padding(we), p = He().domain([d - 20, m + 20]).range([f - G[0], L]);
    o({ xScale: w, yScale: p });
  }, [r, e.height, t]), { utils: { scaledHeight: s, scaledY: u }, scales: i };
}, Ia = R.div(
  ({ isVisible: t = !1 }) => Yt`
    position: absolute;
    transition: all 0.2s;
    opacity: ${t ? 0.9 : 0};
    ${fn()}
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
), Ra = ({
  children: t,
  isVisible: n = !1,
  x: e = 0,
  y: r = 0
}) => {
  const i = lt(null), [o, s] = Y({ x: e, y: r }), u = P(
    (c, a) => {
      var l;
      return s({
        x: c - (((l = i.current) == null ? void 0 : l.clientWidth) ?? 0) / 2,
        y: a + 24
      });
    },
    [i.current]
  );
  return F(() => {
    u(e, r);
    const c = Xt(
      ({ clientX: l, clientY: f }) => !e && !r && u(l, f),
      100
    ), a = () => {
      removeEventListener("mousemove", c);
    };
    return e && r ? a() : addEventListener("mousemove", c), a;
  }, [e, r]), /* @__PURE__ */ k(
    Ia,
    {
      ref: i,
      isVisible: n,
      children: t,
      style: { left: o.x, top: o.y }
    }
  );
}, Da = R.div`
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
`, za = ({ item: t, position: n }) => {
  const [e, r] = Y(t), i = lt();
  return F(() => {
    if (t) {
      r(t), clearTimeout(i.current);
      return;
    }
    i.current = setTimeout(() => r(t), 200);
  }, [t]), /* @__PURE__ */ k(Ra, { isVisible: !!t, ...n, children: /* @__PURE__ */ D(Da, { children: [
    /* @__PURE__ */ k("div", { children: /* @__PURE__ */ k("strong", { children: Ws(e == null ? void 0 : e.date) }) }),
    /* @__PURE__ */ D("div", { children: [
      "Open: ",
      /* @__PURE__ */ k("em", { children: e == null ? void 0 : e.open })
    ] }),
    /* @__PURE__ */ D("div", { children: [
      "Close: ",
      /* @__PURE__ */ k("em", { children: e == null ? void 0 : e.close })
    ] }),
    /* @__PURE__ */ D("div", { children: [
      "High: ",
      /* @__PURE__ */ k("em", { children: e == null ? void 0 : e.high })
    ] }),
    /* @__PURE__ */ D("div", { children: [
      "Low: ",
      /* @__PURE__ */ k("em", { children: e == null ? void 0 : e.low })
    ] })
  ] }) });
}, Oa = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, Pa = R.button(
  ({ status: t, minWidth: n, margin: e }) => Yt`
    ${fn({ color: t === "default" ? "" : Oa[t] })}
    min-width: ${n};
    margin: ${e};
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
), St = ({
  children: t,
  status: n = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: r = "220px",
  margin: i = "10px",
  ...o
}) => /* @__PURE__ */ k(
  Pa,
  {
    status: n,
    ...o,
    minWidth: r,
    margin: i,
    "data-selector": e,
    children: t
  }
), Fa = R.div`
  margin: 10px;
  position: absolute;
`, ne = R.div(
  ({ rotate: t }) => Yt`
    rotate: ${t}deg;
  `
), U = 0.2, ee = 100, Ha = ({
  controls: { zoomLevel: t },
  setControls: n,
  visibleRange: e,
  length: r
}) => {
  const i = {
    minWidth: "auto",
    margin: "5px"
  }, o = P(
    () => n(({ panLevel: a, zoomLevel: l }) => {
      const f = a + ee / l;
      return {
        panLevel: e.first <= 0 ? a : f,
        zoomLevel: l,
        transition: !0
      };
    }),
    [e.first]
  ), s = P(
    () => n(({ panLevel: a, zoomLevel: l }) => {
      const f = a - ee / l;
      return {
        panLevel: f > 1 ? f : 1,
        zoomLevel: l,
        transition: !0
      };
    }),
    []
  ), u = P(
    () => n(({ panLevel: a, zoomLevel: l }) => ({
      zoomLevel: +(l - U > 0 ? l - U : U / 2).toFixed(2),
      panLevel: a,
      transition: !0
    })),
    []
  ), c = P(
    () => n(({ panLevel: a, zoomLevel: l }) => ({
      zoomLevel: +(l === U / 2 ? U : l + U).toFixed(2),
      panLevel: a,
      transition: !0
    })),
    []
  );
  return F(() => {
    const a = ({ key: l }) => {
      var h;
      const f = {
        ArrowLeft: o,
        ArrowRight: s
      };
      (h = f[l]) == null || h.call(f);
    };
    return addEventListener("keydown", a), () => removeEventListener("keydown", a);
  }, [e.first]), /* @__PURE__ */ D(Fa, { children: [
    /* @__PURE__ */ k(
      St,
      {
        ...i,
        onClick: o,
        disabled: e.first <= 0,
        children: /* @__PURE__ */ k(ne, { rotate: -90, children: "🔺" })
      }
    ),
    /* @__PURE__ */ k(
      St,
      {
        ...i,
        onClick: u,
        disabled: t < U,
        children: "➖"
      }
    ),
    /* @__PURE__ */ k(
      St,
      {
        ...i,
        onClick: c,
        disabled: t >= U * 10,
        children: "➕"
      }
    ),
    /* @__PURE__ */ k(
      St,
      {
        ...i,
        onClick: s,
        disabled: e.last >= r - 1 || e.last - e.first > r,
        children: /* @__PURE__ */ k(ne, { rotate: 90, children: "🔺" })
      }
    )
  ] });
}, Xa = ({ width: t, height: n }) => {
  const e = L, r = L, i = {
    x: e,
    y: r,
    width: t ? t - G[1] : 0,
    height: n ? n - G[0] : 0
  };
  return /* @__PURE__ */ D(re, { children: [
    /* @__PURE__ */ k(
      "line",
      {
        x1: e,
        y1: r,
        x2: e + i.width,
        y2: r,
        stroke: "#dedede",
        strokeWidth: 1
      }
    ),
    /* @__PURE__ */ k(
      "line",
      {
        x1: e,
        y1: r,
        x2: e,
        y2: r + i.height - L,
        stroke: "#dedede",
        strokeWidth: 1
      }
    ),
    /* @__PURE__ */ D("defs", { children: [
      /* @__PURE__ */ k("clipPath", { id: "chart-contents", children: /* @__PURE__ */ k("rect", { ...i }) }),
      /* @__PURE__ */ k("clipPath", { id: "bottom-axis", children: /* @__PURE__ */ k("rect", { ...i, height: `${n}` }) })
    ] })
  ] });
}, qa = R.svg`
  width: 100%;
  height: 100%;
  user-select: none;
  touch-action: none;

  & rect.candles {
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

      &.is-zoomed {
        stroke: darkgreen;
      }
    }

    &.is-decreased {
      fill: red;

      &.is-zoomed {
        stroke: darkred;
      }
    }

    &.is-active {
      filter: brightness(1);
      stroke: var(--textSoft);
      stroke-width: 2;
    }
  }

  & line.wicks {
    stroke: var(--text);
    stroke-width: 1;
  }

  & line.clone {
    stroke: var(--shadow);
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`, Va = R.div`
  border: 1px solid var(--border);
  background: linear-gradient(
    135deg,
    var(--bg) 0%,
    var(--subtle) 50%,
    var(--border) 51%,
    var(--bg) 100%
  );
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`, Ba = R.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, Ya = (t, n) => {
  F(() => {
    let e = !1, r = 0, i = 0, o = {};
    const s = (p) => {
      n(({ panLevel: g, zoomLevel: x }) => {
        let y = x - p;
        return y = y < 0.1 ? 0.1 : y, {
          zoomLevel: Math.round(y * 1e3) / 1e3,
          panLevel: g,
          transition: !1
        };
      });
    }, u = Xt(s, 100), c = (p) => {
      n(({ panLevel: g, zoomLevel: x }) => {
        const y = g + p / x;
        return {
          panLevel: y > 1 ? y : 1,
          zoomLevel: x,
          transition: !1
        };
      });
    }, a = ({ pointerId: p, pageX: g, pageY: x }) => {
      e = !0, r = 0, i = 0, o[p] = { pageX: g, pageY: x };
    }, l = (p) => {
      e = !1, delete o[p.pointerId], n((g) => ({
        ...g,
        transition: !0
      }));
    }, f = ({ clientX: p, pointerId: g, pageX: x, pageY: y }) => {
      const A = Object.values(o);
      if (e)
        if ((A == null ? void 0 : A.length) === 2) {
          if (Object.keys(o).indexOf(`${g}`) !== 1)
            return;
          o[g] = { pageX: x, pageY: y };
          const _ = A[0].pageX - A[1].pageX, b = A[0].pageY - A[1].pageY, N = Math.sqrt(_ * _ + b * b), S = i ? (i - N) / 120 : 0;
          i = N, s(S);
          return;
        } else {
          const _ = r ? p - r : 0;
          r = p, c(_);
        }
    }, h = Xt(f, 100), d = (p) => {
      p.ctrlKey && (u(p.deltaY * 6e-3), p.preventDefault());
    }, m = (p) => p.pointerType === "mouse" ? h(p) : f(p), w = (p = "remove", g) => {
      var A;
      const x = window[`${p}EventListener`], y = (A = t.current) == null ? void 0 : A[`${p}EventListener`];
      x("pointerup", l), y == null || y("pointerdown", a), y == null || y("pointermove", m), y == null || y("wheel", d, g);
    };
    return w("add", { passive: !1 }), w;
  }, [t.current]);
}, Wa = R.div`
  position: absolute;
  ${fn()}
  padding: 3px;
  font-size: 0.65em;
  font-weight: bold;
  transition: all 0.2s;
`, Ua = ({ value: t, x: n, y: e }) => e > L ? /* @__PURE__ */ k(
  Wa,
  {
    style: { left: n - L * 2 + 2, top: e + L - 4 },
    children: t.toLocaleString("en-US")
  }
) : /* @__PURE__ */ k(re, {}), ja = ({ data: t = [] }) => {
  const n = lt(null), [e, r] = Y(Ri), i = Bs(n, t.length, e), o = La(t, i);
  Di(n, t, o.scales, i);
  const s = As(
    n,
    t,
    i,
    o,
    e.transition
  );
  return Ya(n, r), /* @__PURE__ */ D(Va, { children: [
    t != null && t.length ? /* @__PURE__ */ k(
      Ha,
      {
        svgRef: n,
        controls: e,
        setControls: r,
        visibleRange: i.visibleRange,
        length: t.length
      }
    ) : /* @__PURE__ */ k(Ba, { children: /* @__PURE__ */ k(Ye, {}) }),
    /* @__PURE__ */ k(qa, { ref: n, children: /* @__PURE__ */ k(Xa, { ...i.sizes }) }),
    /* @__PURE__ */ k(za, { ...s }),
    t.length && /* @__PURE__ */ k(
      Ua,
      {
        value: t[t.length - 1].close,
        x: i.sizes.width,
        y: o.scales.yScale(t[t.length - 1].close)
      }
    )
  ] });
};
export {
  ja as default,
  Ws as formatDate,
  Qa as generateCandlestickData,
  Bn as movePrevValue
};
