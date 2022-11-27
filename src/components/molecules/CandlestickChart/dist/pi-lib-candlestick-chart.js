import S, { useEffect as _t, useState as xt, useRef as we } from "react";
import rt, { css as On } from "styled-components";
const _e = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, xe = rt.svg`
  border: 1px solid ${_e.success};
  width: 100%;
  height: 100%;
`, ve = rt.div`
  background: linear-gradient(
    135deg,
    #f8f8f8 0%,
    #f6f6f6 50%,
    #f4f4f4 51%,
    #ffffff 100%
  );
  width: 100%;
  height: 100%;
`;
function be(t) {
  return t;
}
var Ft = 1, It = 2, Ot = 3, ft = 4, cn = 1e-6;
function Me(t) {
  return "translate(" + t + ",0)";
}
function ke(t) {
  return "translate(0," + t + ")";
}
function Ne(t) {
  return (n) => +t(n);
}
function Ae(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Se() {
  return !this.__axis;
}
function $e(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, u = 3, s = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, f = t === Ft || t === ft ? -1 : 1, c = t === ft || t === It ? "x" : "y", h = t === Ft || t === Ot ? Me : ke;
  function l(d) {
    var g = r == null ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r, m = i == null ? n.tickFormat ? n.tickFormat.apply(n, e) : be : i, w = Math.max(o, 0) + u, k = n.range(), b = +k[0] + s, _ = +k[k.length - 1] + s, R = (n.bandwidth ? Ae : Ne)(n.copy(), s), y = d.selection ? d.selection() : d, O = y.selectAll(".domain").data([null]), A = y.selectAll(".tick").data(g, n).order(), X = A.exit(), B = A.enter().append("g").attr("class", "tick"), D = A.select("line"), p = A.select("text");
    O = O.merge(O.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(B), D = D.merge(B.append("line").attr("stroke", "currentColor").attr(c + "2", f * o)), p = p.merge(B.append("text").attr("fill", "currentColor").attr(c, f * w).attr("dy", t === Ft ? "0em" : t === Ot ? "0.71em" : "0.32em")), d !== y && (O = O.transition(d), A = A.transition(d), D = D.transition(d), p = p.transition(d), X = X.transition(d).attr("opacity", cn).attr("transform", function(v) {
      return isFinite(v = R(v)) ? h(v + s) : this.getAttribute("transform");
    }), B.attr("opacity", cn).attr("transform", function(v) {
      var x = this.parentNode.__axis;
      return h((x && isFinite(x = x(v)) ? x : R(v)) + s);
    })), X.remove(), O.attr("d", t === ft || t === It ? a ? "M" + f * a + "," + b + "H" + s + "V" + _ + "H" + f * a : "M" + s + "," + b + "V" + _ : a ? "M" + b + "," + f * a + "V" + s + "H" + _ + "V" + f * a : "M" + b + "," + s + "H" + _), A.attr("opacity", 1).attr("transform", function(v) {
      return h(R(v) + s);
    }), D.attr(c + "2", f * o), p.attr(c, f * w).text(m), y.filter(Se).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === It ? "start" : t === ft ? "end" : "middle"), y.each(function() {
      this.__axis = R;
    });
  }
  return l.scale = function(d) {
    return arguments.length ? (n = d, l) : n;
  }, l.ticks = function() {
    return e = Array.from(arguments), l;
  }, l.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), l) : e.slice();
  }, l.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), l) : r && r.slice();
  }, l.tickFormat = function(d) {
    return arguments.length ? (i = d, l) : i;
  }, l.tickSize = function(d) {
    return arguments.length ? (o = a = +d, l) : o;
  }, l.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, l) : o;
  }, l.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, l) : a;
  }, l.tickPadding = function(d) {
    return arguments.length ? (u = +d, l) : u;
  }, l.offset = function(d) {
    return arguments.length ? (s = +d, l) : s;
  }, l;
}
function Ee(t) {
  return $e(Ot, t);
}
var Dt = "http://www.w3.org/1999/xhtml";
const ln = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Dt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ct(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), ln.hasOwnProperty(n) ? { space: ln[n], local: t } : t;
}
function Ce(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Dt && n.documentElement.namespaceURI === Dt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Re(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Dn(t) {
  var n = Ct(t);
  return (n.local ? Re : Ce)(n);
}
function Te() {
}
function Qt(t) {
  return t == null ? Te : function() {
    return this.querySelector(t);
  };
}
function Fe(t) {
  typeof t != "function" && (t = Qt(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = new Array(a), s, f, c = 0; c < a; ++c)
      (s = o[c]) && (f = t.call(s, s.__data__, c, o)) && ("__data__" in s && (f.__data__ = s.__data__), u[c] = f);
  return new N(r, this._parents);
}
function Ie(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Pe() {
  return [];
}
function Ln(t) {
  return t == null ? Pe : function() {
    return this.querySelectorAll(t);
  };
}
function He(t) {
  return function() {
    return Ie(t.apply(this, arguments));
  };
}
function Oe(t) {
  typeof t == "function" ? t = He(t) : t = Ln(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], u = a.length, s, f = 0; f < u; ++f)
      (s = a[f]) && (r.push(t.call(s, s.__data__, f, a)), i.push(s));
  return new N(r, i);
}
function qn(t) {
  return function() {
    return this.matches(t);
  };
}
function zn(t) {
  return function(n) {
    return n.matches(t);
  };
}
var De = Array.prototype.find;
function Le(t) {
  return function() {
    return De.call(this.children, t);
  };
}
function qe() {
  return this.firstElementChild;
}
function ze(t) {
  return this.select(t == null ? qe : Le(typeof t == "function" ? t : zn(t)));
}
var Ve = Array.prototype.filter;
function Xe() {
  return Array.from(this.children);
}
function Be(t) {
  return function() {
    return Ve.call(this.children, t);
  };
}
function Ye(t) {
  return this.selectAll(t == null ? Xe : Be(typeof t == "function" ? t : zn(t)));
}
function Ue(t) {
  typeof t != "function" && (t = qn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], s, f = 0; f < a; ++f)
      (s = o[f]) && t.call(s, s.__data__, f, o) && u.push(s);
  return new N(r, this._parents);
}
function Vn(t) {
  return new Array(t.length);
}
function Ge() {
  return new N(this._enter || this._groups.map(Vn), this._parents);
}
function vt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
vt.prototype = {
  constructor: vt,
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
function We(t) {
  return function() {
    return t;
  };
}
function Ke(t, n, e, r, i, o) {
  for (var a = 0, u, s = n.length, f = o.length; a < f; ++a)
    (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new vt(t, o[a]);
  for (; a < s; ++a)
    (u = n[a]) && (i[a] = u);
}
function Ze(t, n, e, r, i, o, a) {
  var u, s, f = /* @__PURE__ */ new Map(), c = n.length, h = o.length, l = new Array(c), d;
  for (u = 0; u < c; ++u)
    (s = n[u]) && (l[u] = d = a.call(s, s.__data__, u, n) + "", f.has(d) ? i[u] = s : f.set(d, s));
  for (u = 0; u < h; ++u)
    d = a.call(t, o[u], u, o) + "", (s = f.get(d)) ? (r[u] = s, s.__data__ = o[u], f.delete(d)) : e[u] = new vt(t, o[u]);
  for (u = 0; u < c; ++u)
    (s = n[u]) && f.get(l[u]) === s && (i[u] = s);
}
function Je(t) {
  return t.__data__;
}
function Qe(t, n) {
  if (!arguments.length)
    return Array.from(this, Je);
  var e = n ? Ze : Ke, r = this._parents, i = this._groups;
  typeof t != "function" && (t = We(t));
  for (var o = i.length, a = new Array(o), u = new Array(o), s = new Array(o), f = 0; f < o; ++f) {
    var c = r[f], h = i[f], l = h.length, d = je(t.call(c, c && c.__data__, f, r)), g = d.length, m = u[f] = new Array(g), w = a[f] = new Array(g), k = s[f] = new Array(l);
    e(c, h, m, w, k, d, n);
    for (var b = 0, _ = 0, R, y; b < g; ++b)
      if (R = m[b]) {
        for (b >= _ && (_ = b + 1); !(y = w[_]) && ++_ < g; )
          ;
        R._next = y || null;
      }
  }
  return a = new N(a, r), a._enter = u, a._exit = s, a;
}
function je(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function tr() {
  return new N(this._exit || this._groups.map(Vn), this._parents);
}
function nr(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function er(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), s = 0; s < a; ++s)
    for (var f = e[s], c = r[s], h = f.length, l = u[s] = new Array(h), d, g = 0; g < h; ++g)
      (d = f[g] || c[g]) && (l[g] = d);
  for (; s < i; ++s)
    u[s] = e[s];
  return new N(u, this._parents);
}
function rr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ir(t) {
  t || (t = or);
  function n(h, l) {
    return h && l ? t(h.__data__, l.__data__) : !h - !l;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], u = a.length, s = i[o] = new Array(u), f, c = 0; c < u; ++c)
      (f = a[c]) && (s[c] = f);
    s.sort(n);
  }
  return new N(i, this._parents).order();
}
function or(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ar() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ur() {
  return Array.from(this);
}
function sr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function fr() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function cr() {
  return !this.node();
}
function lr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, u; o < a; ++o)
      (u = i[o]) && t.call(u, u.__data__, o, i);
  return this;
}
function hr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function dr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function gr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function pr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function mr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function yr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function wr(t, n) {
  var e = Ct(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? dr : hr : typeof n == "function" ? e.local ? yr : mr : e.local ? pr : gr)(e, n));
}
function Xn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function _r(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function xr(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function vr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function br(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? _r : typeof n == "function" ? vr : xr)(t, n, e == null ? "" : e)) : W(this.node(), t);
}
function W(t, n) {
  return t.style.getPropertyValue(n) || Xn(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Mr(t) {
  return function() {
    delete this[t];
  };
}
function kr(t, n) {
  return function() {
    this[t] = n;
  };
}
function Nr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Ar(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Mr : typeof n == "function" ? Nr : kr)(t, n)) : this.node()[t];
}
function Bn(t) {
  return t.trim().split(/^|\s+/);
}
function jt(t) {
  return t.classList || new Yn(t);
}
function Yn(t) {
  this._node = t, this._names = Bn(t.getAttribute("class") || "");
}
Yn.prototype = {
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
function Un(t, n) {
  for (var e = jt(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function Gn(t, n) {
  for (var e = jt(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Sr(t) {
  return function() {
    Un(this, t);
  };
}
function $r(t) {
  return function() {
    Gn(this, t);
  };
}
function Er(t, n) {
  return function() {
    (n.apply(this, arguments) ? Un : Gn)(this, t);
  };
}
function Cr(t, n) {
  var e = Bn(t + "");
  if (arguments.length < 2) {
    for (var r = jt(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Er : n ? Sr : $r)(e, n));
}
function Rr() {
  this.textContent = "";
}
function Tr(t) {
  return function() {
    this.textContent = t;
  };
}
function Fr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n == null ? "" : n;
  };
}
function Ir(t) {
  return arguments.length ? this.each(t == null ? Rr : (typeof t == "function" ? Fr : Tr)(t)) : this.node().textContent;
}
function Pr() {
  this.innerHTML = "";
}
function Hr(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Or(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n == null ? "" : n;
  };
}
function Dr(t) {
  return arguments.length ? this.each(t == null ? Pr : (typeof t == "function" ? Or : Hr)(t)) : this.node().innerHTML;
}
function Lr() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function qr() {
  return this.each(Lr);
}
function zr() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Vr() {
  return this.each(zr);
}
function Xr(t) {
  var n = typeof t == "function" ? t : Dn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Br() {
  return null;
}
function Yr(t, n) {
  var e = typeof t == "function" ? t : Dn(t), r = n == null ? Br : typeof n == "function" ? n : Qt(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ur() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Gr() {
  return this.each(Ur);
}
function Wr() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Kr() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Zr(t) {
  return this.select(t ? Kr : Wr);
}
function Jr(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Qr(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function jr(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function ti(t) {
  return function() {
    var n = this.__on;
    if (!!n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ni(t, n, e) {
  return function() {
    var r = this.__on, i, o = Qr(n);
    if (r) {
      for (var a = 0, u = r.length; a < u; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function ei(t, n, e) {
  var r = jr(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var s = 0, f = u.length, c; s < f; ++s)
        for (i = 0, c = u[s]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = n ? ni : ti, i = 0; i < o; ++i)
    this.each(u(r[i], n, e));
  return this;
}
function Wn(t, n, e) {
  var r = Xn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ri(t, n) {
  return function() {
    return Wn(this, t, n);
  };
}
function ii(t, n) {
  return function() {
    return Wn(this, t, n.apply(this, arguments));
  };
}
function oi(t, n) {
  return this.each((typeof n == "function" ? ii : ri)(t, n));
}
function* ai() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Kn = [null];
function N(t, n) {
  this._groups = t, this._parents = n;
}
function it() {
  return new N([[document.documentElement]], Kn);
}
function ui() {
  return this;
}
N.prototype = it.prototype = {
  constructor: N,
  select: Fe,
  selectAll: Oe,
  selectChild: ze,
  selectChildren: Ye,
  filter: Ue,
  data: Qe,
  enter: Ge,
  exit: tr,
  join: nr,
  merge: er,
  selection: ui,
  order: rr,
  sort: ir,
  call: ar,
  nodes: ur,
  node: sr,
  size: fr,
  empty: cr,
  each: lr,
  attr: wr,
  style: br,
  property: Ar,
  classed: Cr,
  text: Ir,
  html: Dr,
  raise: qr,
  lower: Vr,
  append: Xr,
  insert: Yr,
  remove: Gr,
  clone: Zr,
  datum: Jr,
  on: ei,
  dispatch: oi,
  [Symbol.iterator]: ai
};
function Lt(t) {
  return typeof t == "string" ? new N([[document.querySelector(t)]], [document.documentElement]) : new N([[t]], Kn);
}
const si = 300, qt = 10, zt = [70, 50], fi = (t, n, e, r) => {
  _t(() => {
    n.domain && (Lt(t.current).selectAll("g.x-axis").remove(), Lt(t.current).append("g").attr("class", "x-axis").call(Ee(n)).attr(
      "transform",
      `translate(${r},${e - qt - zt[0]})`
    ).selectAll("text").attr("x", -35).attr("y", -4).attr("transform", "rotate(270)").text(
      (i, o) => o % 5 && o < n.domain().length - 1 ? "" : String(i)
    ));
  }, [n, r]);
};
function pt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ci(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Zn(t) {
  let n, e, r;
  t.length !== 2 ? (n = pt, e = (u, s) => pt(t(u), s), r = (u, s) => t(u) - s) : (n = t === pt || t === ci ? t : li, e = t, r = t);
  function i(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (n(s, s) !== 0)
        return c;
      do {
        const h = f + c >>> 1;
        e(u[h], s) < 0 ? f = h + 1 : c = h;
      } while (f < c);
    }
    return f;
  }
  function o(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (n(s, s) !== 0)
        return c;
      do {
        const h = f + c >>> 1;
        e(u[h], s) <= 0 ? f = h + 1 : c = h;
      } while (f < c);
    }
    return f;
  }
  function a(u, s, f = 0, c = u.length) {
    const h = i(u, s, f, c - 1);
    return h > f && r(u[h - 1], s) > -r(u[h], s) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function li() {
  return 0;
}
function hi(t) {
  return t === null ? NaN : +t;
}
const di = Zn(pt), gi = di.right;
Zn(hi).center;
const pi = gi;
class hn extends Map {
  constructor(n, e = wi) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(dn(this, n));
  }
  has(n) {
    return super.has(dn(this, n));
  }
  set(n, e) {
    return super.set(mi(this, n), e);
  }
  delete(n) {
    return super.delete(yi(this, n));
  }
}
function dn({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function mi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function yi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function wi(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var Vt = Math.sqrt(50), Xt = Math.sqrt(10), Bt = Math.sqrt(2);
function _i(t, n, e) {
  var r, i = -1, o, a, u;
  if (n = +n, t = +t, e = +e, t === n && e > 0)
    return [t];
  if ((r = n < t) && (o = t, t = n, n = o), (u = Jn(t, n, e)) === 0 || !isFinite(u))
    return [];
  if (u > 0) {
    let s = Math.round(t / u), f = Math.round(n / u);
    for (s * u < t && ++s, f * u > n && --f, a = new Array(o = f - s + 1); ++i < o; )
      a[i] = (s + i) * u;
  } else {
    u = -u;
    let s = Math.round(t * u), f = Math.round(n * u);
    for (s / u < t && ++s, f / u > n && --f, a = new Array(o = f - s + 1); ++i < o; )
      a[i] = (s + i) / u;
  }
  return r && a.reverse(), a;
}
function Jn(t, n, e) {
  var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
  return i >= 0 ? (o >= Vt ? 10 : o >= Xt ? 5 : o >= Bt ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Vt ? 10 : o >= Xt ? 5 : o >= Bt ? 2 : 1);
}
function xi(t, n, e) {
  var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
  return o >= Vt ? i *= 10 : o >= Xt ? i *= 5 : o >= Bt && (i *= 2), n < t ? -i : i;
}
function vi(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function tn(t, n) {
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
const gn = Symbol("implicit");
function Qn() {
  var t = new hn(), n = [], e = [], r = gn;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== gn)
        return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new hn();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Qn(n, e).unknown(r);
  }, tn.apply(i, arguments), i;
}
function jn() {
  var t = Qn().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, u = !1, s = 0, f = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var l = n().length, d = i < r, g = d ? i : r, m = d ? r : i;
    o = (m - g) / Math.max(1, l - s + f * 2), u && (o = Math.floor(o)), g += (m - g - o * (l - s)) * c, a = o * (1 - s), u && (g = Math.round(g), a = Math.round(a));
    var w = vi(l).map(function(k) {
      return g + o * k;
    });
    return e(d ? w.reverse() : w);
  }
  return t.domain = function(l) {
    return arguments.length ? (n(l), h()) : n();
  }, t.range = function(l) {
    return arguments.length ? ([r, i] = l, r = +r, i = +i, h()) : [r, i];
  }, t.rangeRound = function(l) {
    return [r, i] = l, r = +r, i = +i, u = !0, h();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(l) {
    return arguments.length ? (u = !!l, h()) : u;
  }, t.padding = function(l) {
    return arguments.length ? (s = Math.min(1, f = +l), h()) : s;
  }, t.paddingInner = function(l) {
    return arguments.length ? (s = Math.min(1, l), h()) : s;
  }, t.paddingOuter = function(l) {
    return arguments.length ? (f = +l, h()) : f;
  }, t.align = function(l) {
    return arguments.length ? (c = Math.max(0, Math.min(1, l)), h()) : c;
  }, t.copy = function() {
    return jn(n(), [r, i]).round(u).paddingInner(s).paddingOuter(f).align(c);
  }, tn.apply(h(), arguments);
}
function nn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function te(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function ot() {
}
var tt = 0.7, bt = 1 / tt, G = "\\s*([+-]?\\d+)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", T = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", bi = /^#([0-9a-f]{3,8})$/, Mi = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), ki = new RegExp(`^rgb\\(${T},${T},${T}\\)$`), Ni = new RegExp(`^rgba\\(${G},${G},${G},${nt}\\)$`), Ai = new RegExp(`^rgba\\(${T},${T},${T},${nt}\\)$`), Si = new RegExp(`^hsl\\(${nt},${T},${T}\\)$`), $i = new RegExp(`^hsla\\(${nt},${T},${T},${nt}\\)$`), pn = {
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
nn(ot, z, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mn,
  formatHex: mn,
  formatHex8: Ei,
  formatHsl: Ci,
  formatRgb: yn,
  toString: yn
});
function mn() {
  return this.rgb().formatHex();
}
function Ei() {
  return this.rgb().formatHex8();
}
function Ci() {
  return ne(this).formatHsl();
}
function yn() {
  return this.rgb().formatRgb();
}
function z(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = bi.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? wn(n) : e === 3 ? new M(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ct(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ct(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Mi.exec(t)) ? new M(n[1], n[2], n[3], 1) : (n = ki.exec(t)) ? new M(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ni.exec(t)) ? ct(n[1], n[2], n[3], n[4]) : (n = Ai.exec(t)) ? ct(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Si.exec(t)) ? vn(n[1], n[2] / 100, n[3] / 100, 1) : (n = $i.exec(t)) ? vn(n[1], n[2] / 100, n[3] / 100, n[4]) : pn.hasOwnProperty(t) ? wn(pn[t]) : t === "transparent" ? new M(NaN, NaN, NaN, 0) : null;
}
function wn(t) {
  return new M(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ct(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new M(t, n, e, r);
}
function Ri(t) {
  return t instanceof ot || (t = z(t)), t ? (t = t.rgb(), new M(t.r, t.g, t.b, t.opacity)) : new M();
}
function Yt(t, n, e, r) {
  return arguments.length === 1 ? Ri(t) : new M(t, n, e, r == null ? 1 : r);
}
function M(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
nn(M, Yt, te(ot, {
  brighter(t) {
    return t = t == null ? bt : Math.pow(bt, t), new M(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? tt : Math.pow(tt, t), new M(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new M(q(this.r), q(this.g), q(this.b), Mt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _n,
  formatHex: _n,
  formatHex8: Ti,
  formatRgb: xn,
  toString: xn
}));
function _n() {
  return `#${L(this.r)}${L(this.g)}${L(this.b)}`;
}
function Ti() {
  return `#${L(this.r)}${L(this.g)}${L(this.b)}${L((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xn() {
  const t = Mt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${q(this.r)}, ${q(this.g)}, ${q(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Mt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function q(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function L(t) {
  return t = q(t), (t < 16 ? "0" : "") + t.toString(16);
}
function vn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new E(t, n, e, r);
}
function ne(t) {
  if (t instanceof E)
    return new E(t.h, t.s, t.l, t.opacity);
  if (t instanceof ot || (t = z(t)), !t)
    return new E();
  if (t instanceof E)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, u = o - i, s = (o + i) / 2;
  return u ? (n === o ? a = (e - r) / u + (e < r) * 6 : e === o ? a = (r - n) / u + 2 : a = (n - e) / u + 4, u /= s < 0.5 ? o + i : 2 - o - i, a *= 60) : u = s > 0 && s < 1 ? 0 : a, new E(a, u, s, t.opacity);
}
function Fi(t, n, e, r) {
  return arguments.length === 1 ? ne(t) : new E(t, n, e, r == null ? 1 : r);
}
function E(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
nn(E, Fi, te(ot, {
  brighter(t) {
    return t = t == null ? bt : Math.pow(bt, t), new E(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? tt : Math.pow(tt, t), new E(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new M(
      Pt(t >= 240 ? t - 240 : t + 120, i, r),
      Pt(t, i, r),
      Pt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new E(bn(this.h), lt(this.s), lt(this.l), Mt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Mt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${bn(this.h)}, ${lt(this.s) * 100}%, ${lt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function bn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function lt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Pt(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const en = (t) => () => t;
function Ii(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Pi(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Hi(t) {
  return (t = +t) == 1 ? ee : function(n, e) {
    return e - n ? Pi(n, e, t) : en(isNaN(n) ? e : n);
  };
}
function ee(t, n) {
  var e = n - t;
  return e ? Ii(t, e) : en(isNaN(t) ? n : t);
}
const kt = function t(n) {
  var e = Hi(n);
  function r(i, o) {
    var a = e((i = Yt(i)).r, (o = Yt(o)).r), u = e(i.g, o.g), s = e(i.b, o.b), f = ee(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = u(c), i.b = s(c), i.opacity = f(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Oi(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Di(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Li(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = rn(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](u);
    return o;
  };
}
function qi(t, n) {
  var e = new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function $(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function zi(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = rn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var Ut = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ht = new RegExp(Ut.source, "g");
function Vi(t) {
  return function() {
    return t;
  };
}
function Xi(t) {
  return function(n) {
    return t(n) + "";
  };
}
function re(t, n) {
  var e = Ut.lastIndex = Ht.lastIndex = 0, r, i, o, a = -1, u = [], s = [];
  for (t = t + "", n = n + ""; (r = Ut.exec(t)) && (i = Ht.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), u[a] ? u[a] += o : u[++a] = o), (r = r[0]) === (i = i[0]) ? u[a] ? u[a] += i : u[++a] = i : (u[++a] = null, s.push({ i: a, x: $(r, i) })), e = Ht.lastIndex;
  return e < n.length && (o = n.slice(e), u[a] ? u[a] += o : u[++a] = o), u.length < 2 ? s[0] ? Xi(s[0].x) : Vi(n) : (n = s.length, function(f) {
    for (var c = 0, h; c < n; ++c)
      u[(h = s[c]).i] = h.x(f);
    return u.join("");
  });
}
function rn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? en(n) : (e === "number" ? $ : e === "string" ? (r = z(n)) ? (n = r, kt) : re : n instanceof z ? kt : n instanceof Date ? qi : Di(n) ? Oi : Array.isArray(n) ? Li : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? zi : $)(t, n);
}
function Bi(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Mn = 180 / Math.PI, Gt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ie(t, n, e, r, i, o) {
  var a, u, s;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (s = t * e + n * r) && (e -= t * s, r -= n * s), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, s /= u), t * r < n * e && (t = -t, n = -n, s = -s, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Mn,
    skewX: Math.atan(s) * Mn,
    scaleX: a,
    scaleY: u
  };
}
var ht;
function Yi(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Gt : ie(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ui(t) {
  return t == null || (ht || (ht = document.createElementNS("http://www.w3.org/2000/svg", "g")), ht.setAttribute("transform", t), !(t = ht.transform.baseVal.consolidate())) ? Gt : (t = t.matrix, ie(t.a, t.b, t.c, t.d, t.e, t.f));
}
function oe(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, c, h, l, d, g) {
    if (f !== h || c !== l) {
      var m = d.push("translate(", null, n, null, e);
      g.push({ i: m - 4, x: $(f, h) }, { i: m - 2, x: $(c, l) });
    } else
      (h || l) && d.push("translate(" + h + n + l + e);
  }
  function a(f, c, h, l) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), l.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: $(f, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function u(f, c, h, l) {
    f !== c ? l.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: $(f, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function s(f, c, h, l, d, g) {
    if (f !== h || c !== l) {
      var m = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: $(f, h) }, { i: m - 2, x: $(c, l) });
    } else
      (h !== 1 || l !== 1) && d.push(i(d) + "scale(" + h + "," + l + ")");
  }
  return function(f, c) {
    var h = [], l = [];
    return f = t(f), c = t(c), o(f.translateX, f.translateY, c.translateX, c.translateY, h, l), a(f.rotate, c.rotate, h, l), u(f.skewX, c.skewX, h, l), s(f.scaleX, f.scaleY, c.scaleX, c.scaleY, h, l), f = c = null, function(d) {
      for (var g = -1, m = l.length, w; ++g < m; )
        h[(w = l[g]).i] = w.x(d);
      return h.join("");
    };
  };
}
var Gi = oe(Yi, "px, ", "px)", "deg)"), Wi = oe(Ui, ", ", ")", ")");
function Ki(t) {
  return function() {
    return t;
  };
}
function Zi(t) {
  return +t;
}
var kn = [0, 1];
function U(t) {
  return t;
}
function Wt(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ki(isNaN(n) ? NaN : 0.5);
}
function Ji(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Qi(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Wt(i, r), o = e(a, o)) : (r = Wt(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function ji(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Wt(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(u) {
    var s = pi(t, u, 1, r) - 1;
    return o[s](i[s](u));
  };
}
function to(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function no() {
  var t = kn, n = kn, e = rn, r, i, o, a = U, u, s, f;
  function c() {
    var l = Math.min(t.length, n.length);
    return a !== U && (a = Ji(t[0], t[l - 1])), u = l > 2 ? ji : Qi, s = f = null, h;
  }
  function h(l) {
    return l == null || isNaN(l = +l) ? o : (s || (s = u(t.map(r), n, e)))(r(a(l)));
  }
  return h.invert = function(l) {
    return a(i((f || (f = u(n, t.map(r), $)))(l)));
  }, h.domain = function(l) {
    return arguments.length ? (t = Array.from(l, Zi), c()) : t.slice();
  }, h.range = function(l) {
    return arguments.length ? (n = Array.from(l), c()) : n.slice();
  }, h.rangeRound = function(l) {
    return n = Array.from(l), e = Bi, c();
  }, h.clamp = function(l) {
    return arguments.length ? (a = l ? !0 : U, c()) : a !== U;
  }, h.interpolate = function(l) {
    return arguments.length ? (e = l, c()) : e;
  }, h.unknown = function(l) {
    return arguments.length ? (o = l, h) : o;
  }, function(l, d) {
    return r = l, i = d, c();
  };
}
function eo() {
  return no()(U, U);
}
function ro(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Nt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function K(t) {
  return t = Nt(Math.abs(t)), t ? t[1] : NaN;
}
function io(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = t[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)), o.push(e.substring(i -= u, i + u)), !((s += u + 1) > r)); )
      u = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function oo(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ao = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function At(t) {
  if (!(n = ao.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new on({
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
At.prototype = on.prototype;
function on(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
on.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function uo(t) {
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
var ae;
function so(t, n) {
  var e = Nt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (ae = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Nt(t, Math.max(0, n + o - 1))[0];
}
function Nn(t, n) {
  var e = Nt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const An = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ro,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Nn(t * 100, n),
  r: Nn,
  s: so,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Sn(t) {
  return t;
}
var $n = Array.prototype.map, En = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function fo(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Sn : io($n.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Sn : oo($n.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "\u2212" : t.minus + "", s = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(h) {
    h = At(h);
    var l = h.fill, d = h.align, g = h.sign, m = h.symbol, w = h.zero, k = h.width, b = h.comma, _ = h.precision, R = h.trim, y = h.type;
    y === "n" ? (b = !0, y = "g") : An[y] || (_ === void 0 && (_ = 12), R = !0, y = "g"), (w || l === "0" && d === "=") && (w = !0, l = "0", d = "=");
    var O = m === "$" ? e : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", A = m === "$" ? r : /[%p]/.test(y) ? a : "", X = An[y], B = /[defgprs%]/.test(y);
    _ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function D(p) {
      var v = O, x = A, Y, fn, at;
      if (y === "c")
        x = X(p) + x, p = "";
      else {
        p = +p;
        var ut = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? s : X(Math.abs(p), _), R && (p = uo(p)), ut && +p == 0 && g !== "+" && (ut = !1), v = (ut ? g === "(" ? g : u : g === "-" || g === "(" ? "" : g) + v, x = (y === "s" ? En[8 + ae / 3] : "") + x + (ut && g === "(" ? ")" : ""), B) {
          for (Y = -1, fn = p.length; ++Y < fn; )
            if (at = p.charCodeAt(Y), 48 > at || at > 57) {
              x = (at === 46 ? i + p.slice(Y + 1) : p.slice(Y)) + x, p = p.slice(0, Y);
              break;
            }
        }
      }
      b && !w && (p = n(p, 1 / 0));
      var st = v.length + p.length + x.length, I = st < k ? new Array(k - st + 1).join(l) : "";
      switch (b && w && (p = n(I + p, I.length ? k - x.length : 1 / 0), I = ""), d) {
        case "<":
          p = v + p + x + I;
          break;
        case "=":
          p = v + I + p + x;
          break;
        case "^":
          p = I.slice(0, st = I.length >> 1) + v + p + x + I.slice(st);
          break;
        default:
          p = I + v + p + x;
          break;
      }
      return o(p);
    }
    return D.toString = function() {
      return h + "";
    }, D;
  }
  function c(h, l) {
    var d = f((h = At(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(K(l) / 3))) * 3, m = Math.pow(10, -g), w = En[8 + g / 3];
    return function(k) {
      return d(m * k) + w;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var dt, ue, se;
co({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function co(t) {
  return dt = fo(t), ue = dt.format, se = dt.formatPrefix, dt;
}
function lo(t) {
  return Math.max(0, -K(Math.abs(t)));
}
function ho(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(K(n) / 3))) * 3 - K(Math.abs(t)));
}
function go(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, K(n) - K(t)) + 1;
}
function po(t, n, e, r) {
  var i = xi(t, n, e), o;
  switch (r = At(r == null ? ",f" : r), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = ho(i, a)) && (r.precision = o), se(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = go(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = lo(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ue(r);
}
function mo(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return _i(r[0], r[r.length - 1], e == null ? 10 : e);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return po(i[0], i[i.length - 1], e == null ? 10 : e, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], s, f, c = 10;
    for (u < a && (f = a, a = u, u = f, f = i, i = o, o = f); c-- > 0; ) {
      if (f = Jn(a, u, e), f === s)
        return r[i] = a, r[o] = u, n(r);
      if (f > 0)
        a = Math.floor(a / f) * f, u = Math.ceil(u / f) * f;
      else if (f < 0)
        a = Math.ceil(a * f) / f, u = Math.floor(u * f) / f;
      else
        break;
      s = f;
    }
    return t;
  }, t;
}
function fe() {
  var t = eo();
  return t.copy = function() {
    return to(t, fe());
  }, tn.apply(t, arguments), mo(t);
}
const { abs: yo, min: wo } = Math, _o = (t, n, e) => {
  const [r, i] = xt({ width: 0, height: 0 }), [o, a] = xt({
    xScale: (f) => f,
    yScale: (f) => f
  });
  _t(() => {
    const { clientWidth: f, clientHeight: c } = t.current;
    i({ width: f, height: c });
    const h = Math.max(...n.map(({ high: l }) => l));
    a({
      xScale: jn().range([20, f * e - 20]).domain(n.map(({ date: l }) => l)).padding(0.3),
      yScale: fe().domain([0, h]).range([0, c - zt[0] - qt * 3])
    });
  }, [e]);
  const u = (f, c) => o.yScale(yo(f - c)) || 1;
  return { scaledHeight: u, scaledY: (f, c) => r.height - o.yScale(wo(f, c)) - u(f, c) - zt[0] - qt * 2, ...r, ...o };
};
var xo = { value: () => {
} };
function ce() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new mt(e);
}
function mt(t) {
  this._ = t;
}
function vo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
mt.prototype = ce.prototype = {
  constructor: mt,
  on: function(t, n) {
    var e = this._, r = vo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = bo(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = Cn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Cn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new mt(t);
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
function bo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Cn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = xo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Z = 0, Q = 0, J = 0, le = 1e3, St, j, $t = 0, V = 0, Rt = 0, et = typeof performance == "object" && performance.now ? performance : Date, he = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function an() {
  return V || (he(Mo), V = et.now() + Rt);
}
function Mo() {
  V = 0;
}
function Et() {
  this._call = this._time = this._next = null;
}
Et.prototype = de.prototype = {
  constructor: Et,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? an() : +e) + (n == null ? 0 : +n), !this._next && j !== this && (j ? j._next = this : St = this, j = this), this._call = t, this._time = e, Kt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Kt());
  }
};
function de(t, n, e) {
  var r = new Et();
  return r.restart(t, n, e), r;
}
function ko() {
  an(), ++Z;
  for (var t = St, n; t; )
    (n = V - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Z;
}
function Rn() {
  V = ($t = et.now()) + Rt, Z = Q = 0;
  try {
    ko();
  } finally {
    Z = 0, Ao(), V = 0;
  }
}
function No() {
  var t = et.now(), n = t - $t;
  n > le && (Rt -= n, $t = t);
}
function Ao() {
  for (var t, n = St, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : St = e);
  j = t, Kt(r);
}
function Kt(t) {
  if (!Z) {
    Q && (Q = clearTimeout(Q));
    var n = t - V;
    n > 24 ? (t < 1 / 0 && (Q = setTimeout(Rn, t - et.now() - Rt)), J && (J = clearInterval(J))) : (J || ($t = et.now(), J = setInterval(No, le)), Z = 1, he(Rn));
  }
}
function Tn(t, n, e) {
  var r = new Et();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var So = ce("start", "end", "cancel", "interrupt"), $o = [], ge = 0, Fn = 1, Zt = 2, yt = 3, In = 4, Jt = 5, wt = 6;
function Tt(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  Eo(t, e, {
    name: n,
    index: r,
    group: i,
    on: So,
    tween: $o,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ge
  });
}
function un(t, n) {
  var e = C(t, n);
  if (e.state > ge)
    throw new Error("too late; already scheduled");
  return e;
}
function F(t, n) {
  var e = C(t, n);
  if (e.state > yt)
    throw new Error("too late; already running");
  return e;
}
function C(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function Eo(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = de(o, 0, e.time);
  function o(f) {
    e.state = Fn, e.timer.restart(a, e.delay, e.time), e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var c, h, l, d;
    if (e.state !== Fn)
      return s();
    for (c in r)
      if (d = r[c], d.name === e.name) {
        if (d.state === yt)
          return Tn(a);
        d.state === In ? (d.state = wt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < n && (d.state = wt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (Tn(function() {
      e.state === yt && (e.state = In, e.timer.restart(u, e.delay, e.time), u(f));
    }), e.state = Zt, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Zt) {
      for (e.state = yt, i = new Array(l = e.tween.length), c = 0, h = -1; c < l; ++c)
        (d = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function u(f) {
    for (var c = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(s), e.state = Jt, 1), h = -1, l = i.length; ++h < l; )
      i[h].call(t, c);
    e.state === Jt && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    e.state = wt, e.timer.stop(), delete r[n];
    for (var f in r)
      return;
    delete t.__transition;
  }
}
function Co(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (!!e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Zt && r.state < Jt, r.state = wt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Ro(t) {
  return this.each(function() {
    Co(this, t);
  });
}
function To(t, n) {
  var e, r;
  return function() {
    var i = F(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, u = r.length; a < u; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Fo(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = F(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var u = { name: n, value: e }, s = 0, f = i.length; s < f; ++s)
        if (i[s].name === n) {
          i[s] = u;
          break;
        }
      s === f && i.push(u);
    }
    o.tween = i;
  };
}
function Io(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = C(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? To : Fo)(e, t, n));
}
function sn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = F(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return C(i, r).value[n];
  };
}
function pe(t, n) {
  var e;
  return (typeof n == "number" ? $ : n instanceof z ? kt : (e = z(n)) ? (n = e, kt) : re)(t, n);
}
function Po(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ho(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Oo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Do(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Lo(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), s;
    return u == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), s = u + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, u)));
  };
}
function qo(t, n, e) {
  var r, i, o;
  return function() {
    var a, u = e(this), s;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), s = u + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, u)));
  };
}
function zo(t, n) {
  var e = Ct(t), r = e === "transform" ? Wi : pe;
  return this.attrTween(t, typeof n == "function" ? (e.local ? qo : Lo)(e, r, sn(this, "attr." + t, n)) : n == null ? (e.local ? Ho : Po)(e) : (e.local ? Do : Oo)(e, r, n));
}
function Vo(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Xo(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Bo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Xo(t, o)), e;
  }
  return i._value = n, i;
}
function Yo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vo(t, o)), e;
  }
  return i._value = n, i;
}
function Uo(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = Ct(t);
  return this.tween(e, (r.local ? Bo : Yo)(r, n));
}
function Go(t, n) {
  return function() {
    un(this, t).delay = +n.apply(this, arguments);
  };
}
function Wo(t, n) {
  return n = +n, function() {
    un(this, t).delay = n;
  };
}
function Ko(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Go : Wo)(n, t)) : C(this.node(), n).delay;
}
function Zo(t, n) {
  return function() {
    F(this, t).duration = +n.apply(this, arguments);
  };
}
function Jo(t, n) {
  return n = +n, function() {
    F(this, t).duration = n;
  };
}
function Qo(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Zo : Jo)(n, t)) : C(this.node(), n).duration;
}
function jo(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    F(this, t).ease = n;
  };
}
function ta(t) {
  var n = this._id;
  return arguments.length ? this.each(jo(n, t)) : C(this.node(), n).ease;
}
function na(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    F(this, t).ease = e;
  };
}
function ea(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(na(this._id, t));
}
function ra(t) {
  typeof t != "function" && (t = qn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, u = r[i] = [], s, f = 0; f < a; ++f)
      (s = o[f]) && t.call(s, s.__data__, f, o) && u.push(s);
  return new H(r, this._parents, this._name, this._id);
}
function ia(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
    for (var s = n[u], f = e[u], c = s.length, h = a[u] = new Array(c), l, d = 0; d < c; ++d)
      (l = s[d] || f[d]) && (h[d] = l);
  for (; u < r; ++u)
    a[u] = n[u];
  return new H(a, this._parents, this._name, this._id);
}
function oa(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function aa(t, n, e) {
  var r, i, o = oa(n) ? un : F;
  return function() {
    var a = o(this, t), u = a.on;
    u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
  };
}
function ua(t, n) {
  var e = this._id;
  return arguments.length < 2 ? C(this.node(), e).on.on(t) : this.each(aa(e, t, n));
}
function sa(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function fa() {
  return this.on("end.remove", sa(this._id));
}
function ca(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Qt(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var u = r[a], s = u.length, f = o[a] = new Array(s), c, h, l = 0; l < s; ++l)
      (c = u[l]) && (h = t.call(c, c.__data__, l, u)) && ("__data__" in c && (h.__data__ = c.__data__), f[l] = h, Tt(f[l], n, e, l, f, C(c, e)));
  return new H(o, this._parents, n, e);
}
function la(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ln(t));
  for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
    for (var s = r[u], f = s.length, c, h = 0; h < f; ++h)
      if (c = s[h]) {
        for (var l = t.call(c, c.__data__, h, s), d, g = C(c, e), m = 0, w = l.length; m < w; ++m)
          (d = l[m]) && Tt(d, n, e, m, l, g);
        o.push(l), a.push(c);
      }
  return new H(o, a, n, e);
}
var ha = it.prototype.constructor;
function da() {
  return new ha(this._groups, this._parents);
}
function ga(t, n) {
  var e, r, i;
  return function() {
    var o = W(this, t), a = (this.style.removeProperty(t), W(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function me(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function pa(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = W(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ma(t, n, e) {
  var r, i, o;
  return function() {
    var a = W(this, t), u = e(this), s = u + "";
    return u == null && (s = u = (this.style.removeProperty(t), W(this, t))), a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, u));
  };
}
function ya(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, u;
  return function() {
    var s = F(this, t), f = s.on, c = s.value[o] == null ? u || (u = me(n)) : void 0;
    (f !== e || i !== c) && (r = (e = f).copy()).on(a, i = c), s.on = r;
  };
}
function wa(t, n, e) {
  var r = (t += "") == "transform" ? Gi : pe;
  return n == null ? this.styleTween(t, ga(t, r)).on("end.style." + t, me(t)) : typeof n == "function" ? this.styleTween(t, ma(t, r, sn(this, "style." + t, n))).each(ya(this._id, t)) : this.styleTween(t, pa(t, r, n), e).on("end.style." + t, null);
}
function _a(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function xa(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && _a(t, a, e)), r;
  }
  return o._value = n, o;
}
function va(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, xa(t, n, e == null ? "" : e));
}
function ba(t) {
  return function() {
    this.textContent = t;
  };
}
function Ma(t) {
  return function() {
    var n = t(this);
    this.textContent = n == null ? "" : n;
  };
}
function ka(t) {
  return this.tween("text", typeof t == "function" ? Ma(sn(this, "text", t)) : ba(t == null ? "" : t + ""));
}
function Na(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Aa(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Na(i)), n;
  }
  return r._value = t, r;
}
function Sa(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Aa(t));
}
function $a() {
  for (var t = this._name, n = this._id, e = ye(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, s, f = 0; f < u; ++f)
      if (s = a[f]) {
        var c = C(s, n);
        Tt(s, t, e, f, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new H(r, this._parents, t, e);
}
function Ea() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var u = { value: a }, s = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var f = F(this, r), c = f.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(u), n._.interrupt.push(u), n._.end.push(s)), f.on = n;
    }), i === 0 && o();
  });
}
var Ca = 0;
function H(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ye() {
  return ++Ca;
}
var P = it.prototype;
H.prototype = {
  constructor: H,
  select: ca,
  selectAll: la,
  selectChild: P.selectChild,
  selectChildren: P.selectChildren,
  filter: ra,
  merge: ia,
  selection: da,
  transition: $a,
  call: P.call,
  nodes: P.nodes,
  node: P.node,
  size: P.size,
  empty: P.empty,
  each: P.each,
  on: ua,
  attr: zo,
  attrTween: Uo,
  style: wa,
  styleTween: va,
  text: ka,
  textTween: Sa,
  remove: fa,
  tween: Io,
  delay: Ko,
  duration: Qo,
  ease: ta,
  easeVarying: ea,
  end: Ea,
  [Symbol.iterator]: P[Symbol.iterator]
};
function Ra(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ta = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Ra
};
function Fa(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ia(t) {
  var n, e;
  t instanceof H ? (n = t._id, t = t._name) : (n = ye(), (e = Ta).time = an(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], u = a.length, s, f = 0; f < u; ++f)
      (s = a[f]) && Tt(s, t, n, f, a, e || Fa(s, n));
  return new H(r, this._parents, t, n);
}
it.prototype.interrupt = Ro;
it.prototype.transition = Ia;
const Pa = (t, n, e, r, i, o) => {
  const a = () => Lt(t.current), u = (c, h = a()) => h.selectAll(`rect.${c}`).data(i), s = (c) => u(c, a().append("g")).enter().append("rect").attr("class", c), f = (c, h) => u(c).transition().duration(si).attr("width", () => c === "wicks" ? 1 : Number(n.bandwidth())).attr("height", (l) => e(l[h[0]], l[h[1]])).attr(
    "x",
    (l) => Number(n(l.date)) + (c === "wicks" ? (Number(n.bandwidth()) - 1) / 2 : 0) + o
  ).attr("y", (l) => r(l[h[0]], l[h[1]]));
  _t(() => {
    s("wicks").attr("fill", "grey"), s("candles");
  }, []), _t(() => {
    typeof n.bandwidth == "function" && (f("wicks", ["low", "high"]), f("candles", ["open", "close"]).attr(
      "fill",
      (c) => c.close < c.open ? "red" : "green"
    ));
  }, [i, n, o]);
}, Pn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Ha = "font-family: serif;", Oa = rt.button(
  ({ status: t, minWidth: n, margin: e }) => On`
    ${Ha}
    border: 1px solid ${Pn[t]};
    color: ${Pn[t]};
    background-color: white;
    border-radius: 10px;
    min-width: ${n};
    padding: 10px;
    margin: ${e};
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
    &:hover {
      filter: brightness(85%);
    }
  `
), gt = ({
  children: t,
  status: n = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: r = "220px",
  margin: i = "10px",
  ...o
}) => /* @__PURE__ */ S.createElement(Oa, {
  status: n,
  ...o,
  minWidth: r,
  margin: i,
  "data-selector": e
}, t), Da = rt.div`
  margin: 10px;
  position: absolute;
`, Hn = rt.div(
  ({ rotate: t }) => On`
    rotate: ${t}deg;
  `
), La = ({
  setZoomLevel: t,
  setPanLevel: n,
  multiplier: e
}) => {
  const r = {
    minWidth: "auto",
    margin: "5px"
  };
  return /* @__PURE__ */ S.createElement(Da, null, /* @__PURE__ */ S.createElement(gt, {
    ...r,
    onClick: () => n((i) => i + e * 100)
  }, /* @__PURE__ */ S.createElement(Hn, {
    rotate: -90
  }, "\u{1F53A}")), /* @__PURE__ */ S.createElement(gt, {
    ...r,
    onClick: () => t((i) => i > e ? i - e : e)
  }, "\u2796"), /* @__PURE__ */ S.createElement(gt, {
    ...r,
    onClick: () => t((i) => i + e)
  }, "\u2795"), /* @__PURE__ */ S.createElement(gt, {
    ...r,
    onClick: () => n((i) => i - e * 100)
  }, /* @__PURE__ */ S.createElement(Hn, {
    rotate: 90
  }, "\u{1F53A}")));
}, Va = ({ data: t }) => {
  const [n, e] = xt(t.length / 100), [r, i] = xt(0), o = we(null), { scaledHeight: a, scaledY: u, xScale: s, height: f } = _o(
    o,
    t,
    n
  );
  return Pa(o, s, a, u, t, r), fi(o, s, f, r), /* @__PURE__ */ S.createElement(ve, null, /* @__PURE__ */ S.createElement(La, {
    setZoomLevel: e,
    setPanLevel: i,
    multiplier: t.length / 1e3
  }), /* @__PURE__ */ S.createElement(xe, {
    ref: o
  }));
};
export {
  Va as default
};
