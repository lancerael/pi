import E, { useState as V, useEffect as it, useCallback as dn, useRef as ke } from "react";
import ut, { css as Xn } from "styled-components";
const Ne = ut.svg`
  width: 100%;
  height: 100%;

  & rect.is-offscreen {
    display: none;
  }

  & text.emphasise {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`, Ae = ut.div`
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
`;
function $e(t) {
  return t;
}
var Ht = 1, xt = 2, Xt = 3, gt = 4, gn = 1e-6;
function Se(t) {
  return "translate(" + t + ",0)";
}
function Ee(t) {
  return "translate(0," + t + ")";
}
function Ce(t) {
  return (n) => +t(n);
}
function Re(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Te() {
  return !this.__axis;
}
function Vn(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = t === Ht || t === gt ? -1 : 1, f = t === gt || t === xt ? "x" : "y", h = t === Ht || t === Xt ? Se : Ee;
  function l(d) {
    var g = r == null ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r, p = i == null ? n.tickFormat ? n.tickFormat.apply(n, e) : $e : i, _ = Math.max(o, 0) + s, y = n.range(), x = +y[0] + u, w = +y[y.length - 1] + u, M = (n.bandwidth ? Re : Ce)(n.copy(), u), v = d.selection ? d.selection() : d, F = v.selectAll(".domain").data([null]), A = v.selectAll(".tick").data(g, n).order(), D = A.exit(), S = A.enter().append("g").attr("class", "tick"), q = A.select("line"), m = A.select("text");
    F = F.merge(F.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(S), q = q.merge(S.append("line").attr("stroke", "currentColor").attr(f + "2", c * o)), m = m.merge(S.append("text").attr("fill", "currentColor").attr(f, c * _).attr("dy", t === Ht ? "0em" : t === Xt ? "0.71em" : "0.32em")), d !== v && (F = F.transition(d), A = A.transition(d), q = q.transition(d), m = m.transition(d), D = D.transition(d).attr("opacity", gn).attr("transform", function(k) {
      return isFinite(k = M(k)) ? h(k + u) : this.getAttribute("transform");
    }), S.attr("opacity", gn).attr("transform", function(k) {
      var b = this.parentNode.__axis;
      return h((b && isFinite(b = b(k)) ? b : M(k)) + u);
    })), D.remove(), F.attr("d", t === gt || t === xt ? a ? "M" + c * a + "," + x + "H" + u + "V" + w + "H" + c * a : "M" + u + "," + x + "V" + w : a ? "M" + x + "," + c * a + "V" + u + "H" + w + "V" + c * a : "M" + x + "," + u + "H" + w), A.attr("opacity", 1).attr("transform", function(k) {
      return h(M(k) + u);
    }), q.attr(f + "2", c * o), m.attr(f, c * _).text(p), v.filter(Te).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === xt ? "start" : t === gt ? "end" : "middle"), v.each(function() {
      this.__axis = M;
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
    return arguments.length ? (s = +d, l) : s;
  }, l.offset = function(d) {
    return arguments.length ? (u = +d, l) : u;
  }, l;
}
function Fe(t) {
  return Vn(xt, t);
}
function Ie(t) {
  return Vn(Xt, t);
}
var Vt = "http://www.w3.org/1999/xhtml";
const pn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function It(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), pn.hasOwnProperty(n) ? { space: pn[n], local: t } : t;
}
function Pe(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Vt && n.documentElement.namespaceURI === Vt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function De(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Yn(t) {
  var n = It(t);
  return (n.local ? De : Pe)(n);
}
function He() {
}
function nn(t) {
  return t == null ? He : function() {
    return this.querySelector(t);
  };
}
function Le(t) {
  typeof t != "function" && (t = nn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, c, f = 0; f < a; ++f)
      (u = o[f]) && (c = t.call(u, u.__data__, f, o)) && ("__data__" in u && (c.__data__ = u.__data__), s[f] = c);
  return new $(r, this._parents);
}
function Oe(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function qe() {
  return [];
}
function Bn(t) {
  return t == null ? qe : function() {
    return this.querySelectorAll(t);
  };
}
function ze(t) {
  return function() {
    return Oe(t.apply(this, arguments));
  };
}
function Xe(t) {
  typeof t == "function" ? t = ze(t) : t = Bn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, c = 0; c < s; ++c)
      (u = a[c]) && (r.push(t.call(u, u.__data__, c, a)), i.push(u));
  return new $(r, i);
}
function Wn(t) {
  return function() {
    return this.matches(t);
  };
}
function Un(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Ve = Array.prototype.find;
function Ye(t) {
  return function() {
    return Ve.call(this.children, t);
  };
}
function Be() {
  return this.firstElementChild;
}
function We(t) {
  return this.select(t == null ? Be : Ye(typeof t == "function" ? t : Un(t)));
}
var Ue = Array.prototype.filter;
function Ge() {
  return Array.from(this.children);
}
function Ke(t) {
  return function() {
    return Ue.call(this.children, t);
  };
}
function Ze(t) {
  return this.selectAll(t == null ? Ge : Ke(typeof t == "function" ? t : Un(t)));
}
function Je(t) {
  typeof t != "function" && (t = Wn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, c = 0; c < a; ++c)
      (u = o[c]) && t.call(u, u.__data__, c, o) && s.push(u);
  return new $(r, this._parents);
}
function Gn(t) {
  return new Array(t.length);
}
function Qe() {
  return new $(this._enter || this._groups.map(Gn), this._parents);
}
function Nt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Nt.prototype = {
  constructor: Nt,
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
function je(t) {
  return function() {
    return t;
  };
}
function tr(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, c = o.length; a < c; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Nt(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function nr(t, n, e, r, i, o, a) {
  var s, u, c = /* @__PURE__ */ new Map(), f = n.length, h = o.length, l = new Array(f), d;
  for (s = 0; s < f; ++s)
    (u = n[s]) && (l[s] = d = a.call(u, u.__data__, s, n) + "", c.has(d) ? i[s] = u : c.set(d, u));
  for (s = 0; s < h; ++s)
    d = a.call(t, o[s], s, o) + "", (u = c.get(d)) ? (r[s] = u, u.__data__ = o[s], c.delete(d)) : e[s] = new Nt(t, o[s]);
  for (s = 0; s < f; ++s)
    (u = n[s]) && c.get(l[s]) === u && (i[s] = u);
}
function er(t) {
  return t.__data__;
}
function rr(t, n) {
  if (!arguments.length)
    return Array.from(this, er);
  var e = n ? nr : tr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = je(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), c = 0; c < o; ++c) {
    var f = r[c], h = i[c], l = h.length, d = ir(t.call(f, f && f.__data__, c, r)), g = d.length, p = s[c] = new Array(g), _ = a[c] = new Array(g), y = u[c] = new Array(l);
    e(f, h, p, _, y, d, n);
    for (var x = 0, w = 0, M, v; x < g; ++x)
      if (M = p[x]) {
        for (x >= w && (w = x + 1); !(v = _[w]) && ++w < g; )
          ;
        M._next = v || null;
      }
  }
  return a = new $(a, r), a._enter = s, a._exit = u, a;
}
function ir(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function or() {
  return new $(this._exit || this._groups.map(Gn), this._parents);
}
function ar(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function sr(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var c = e[u], f = r[u], h = c.length, l = s[u] = new Array(h), d, g = 0; g < h; ++g)
      (d = c[g] || f[g]) && (l[g] = d);
  for (; u < i; ++u)
    s[u] = e[u];
  return new $(s, this._parents);
}
function ur() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function cr(t) {
  t || (t = fr);
  function n(h, l) {
    return h && l ? t(h.__data__, l.__data__) : !h - !l;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), c, f = 0; f < s; ++f)
      (c = a[f]) && (u[f] = c);
    u.sort(n);
  }
  return new $(i, this._parents).order();
}
function fr(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function lr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function hr() {
  return Array.from(this);
}
function dr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function gr() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function pr() {
  return !this.node();
}
function mr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function yr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function wr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _r(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function xr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function vr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function br(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Mr(t, n) {
  var e = It(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? wr : yr : typeof n == "function" ? e.local ? br : vr : e.local ? xr : _r)(e, n));
}
function Kn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function kr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Nr(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Ar(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function $r(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? kr : typeof n == "function" ? Ar : Nr)(t, n, e == null ? "" : e)) : J(this.node(), t);
}
function J(t, n) {
  return t.style.getPropertyValue(n) || Kn(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Sr(t) {
  return function() {
    delete this[t];
  };
}
function Er(t, n) {
  return function() {
    this[t] = n;
  };
}
function Cr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Rr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Sr : typeof n == "function" ? Cr : Er)(t, n)) : this.node()[t];
}
function Zn(t) {
  return t.trim().split(/^|\s+/);
}
function en(t) {
  return t.classList || new Jn(t);
}
function Jn(t) {
  this._node = t, this._names = Zn(t.getAttribute("class") || "");
}
Jn.prototype = {
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
function Qn(t, n) {
  for (var e = en(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function jn(t, n) {
  for (var e = en(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Tr(t) {
  return function() {
    Qn(this, t);
  };
}
function Fr(t) {
  return function() {
    jn(this, t);
  };
}
function Ir(t, n) {
  return function() {
    (n.apply(this, arguments) ? Qn : jn)(this, t);
  };
}
function Pr(t, n) {
  var e = Zn(t + "");
  if (arguments.length < 2) {
    for (var r = en(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ir : n ? Tr : Fr)(e, n));
}
function Dr() {
  this.textContent = "";
}
function Hr(t) {
  return function() {
    this.textContent = t;
  };
}
function Lr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n == null ? "" : n;
  };
}
function Or(t) {
  return arguments.length ? this.each(t == null ? Dr : (typeof t == "function" ? Lr : Hr)(t)) : this.node().textContent;
}
function qr() {
  this.innerHTML = "";
}
function zr(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Xr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n == null ? "" : n;
  };
}
function Vr(t) {
  return arguments.length ? this.each(t == null ? qr : (typeof t == "function" ? Xr : zr)(t)) : this.node().innerHTML;
}
function Yr() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Br() {
  return this.each(Yr);
}
function Wr() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ur() {
  return this.each(Wr);
}
function Gr(t) {
  var n = typeof t == "function" ? t : Yn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Kr() {
  return null;
}
function Zr(t, n) {
  var e = typeof t == "function" ? t : Yn(t), r = n == null ? Kr : typeof n == "function" ? n : nn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Jr() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Qr() {
  return this.each(Jr);
}
function jr() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ti() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ni(t) {
  return this.select(t ? ti : jr);
}
function ei(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ri(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ii(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function oi(t) {
  return function() {
    var n = this.__on;
    if (!!n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ai(t, n, e) {
  return function() {
    var r = this.__on, i, o = ri(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function si(t, n, e) {
  var r = ii(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, c = s.length, f; u < c; ++u)
        for (i = 0, f = s[u]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? ai : oi, i = 0; i < o; ++i)
    this.each(s(r[i], n, e));
  return this;
}
function te(t, n, e) {
  var r = Kn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ui(t, n) {
  return function() {
    return te(this, t, n);
  };
}
function ci(t, n) {
  return function() {
    return te(this, t, n.apply(this, arguments));
  };
}
function fi(t, n) {
  return this.each((typeof n == "function" ? ci : ui)(t, n));
}
function* li() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ne = [null];
function $(t, n) {
  this._groups = t, this._parents = n;
}
function ct() {
  return new $([[document.documentElement]], ne);
}
function hi() {
  return this;
}
$.prototype = ct.prototype = {
  constructor: $,
  select: Le,
  selectAll: Xe,
  selectChild: We,
  selectChildren: Ze,
  filter: Je,
  data: rr,
  enter: Qe,
  exit: or,
  join: ar,
  merge: sr,
  selection: hi,
  order: ur,
  sort: cr,
  call: lr,
  nodes: hr,
  node: dr,
  size: gr,
  empty: pr,
  each: mr,
  attr: Mr,
  style: $r,
  property: Rr,
  classed: Pr,
  text: Or,
  html: Vr,
  raise: Br,
  lower: Ur,
  append: Gr,
  insert: Zr,
  remove: Qr,
  clone: ni,
  datum: ei,
  on: si,
  dispatch: fi,
  [Symbol.iterator]: li
};
function Yt(t) {
  return typeof t == "string" ? new $([[document.querySelector(t)]], [document.documentElement]) : new $([[t]], ne);
}
const di = 500, z = 10, Y = [65, 55], Lt = {}, tt = (t = "", n, e) => {
  var h;
  const r = Math.round((h = e.bandwidth) == null ? void 0 : h.call(e)) || 0, i = `${t}-${n}-${r}`;
  if (Lt[i] !== void 0)
    return Lt[i];
  let o = "";
  const a = new Date(t), [s, u, c] = t.split("-");
  c === "01" && (u === "01" ? o = s : o = a.toLocaleString("en-UK", {
    month: "short"
  }));
  let f = [];
  return r > 1 && f.push(16), r > 3 && f.push(8, 24), r > 7 && (f = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), f.includes(Number(c)) && (o = c), e.domain().length - 1 === n && (o = c), Lt[i] = o, o;
}, gi = (t, n, e, r, i) => {
  const [o, a] = V(), [s, u] = V(), { xScale: c, yScale: f } = r, { width: h, height: l, offsetWidth: d } = i;
  it(() => {
    !t.current || (a(
      Yt(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), u(Yt(t.current).append("g").classed("y-axis", !0)));
  }, [t]), it(() => {
    !c.domain || !n || (o.call(Ie(c)).attr(
      "transform",
      `translate(${d},${l - Y[0]})`
    ).selectAll("text").classed(
      "emphasise",
      (g, p) => tt(g, p, c).length > 2
    ).attr(
      "x",
      (g, p) => tt(g, p, c).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((g, p) => tt(g, p, c)), o.selectAll("line").attr(
      "stroke",
      (g, p) => tt(g, p, c).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (g, p) => tt(g, p, c).length ? 12 : 6
    ), s.call(Fe(f)).attr(
      "transform",
      `translate(${h - Y[1] + z},${z})`
    ));
  }, [c, f, n, e]);
};
function vt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function pi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ee(t) {
  let n, e, r;
  t.length !== 2 ? (n = vt, e = (s, u) => vt(t(s), u), r = (s, u) => t(s) - u) : (n = t === vt || t === pi ? t : mi, e = t, r = t);
  function i(s, u, c = 0, f = s.length) {
    if (c < f) {
      if (n(u, u) !== 0)
        return f;
      do {
        const h = c + f >>> 1;
        e(s[h], u) < 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function o(s, u, c = 0, f = s.length) {
    if (c < f) {
      if (n(u, u) !== 0)
        return f;
      do {
        const h = c + f >>> 1;
        e(s[h], u) <= 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function a(s, u, c = 0, f = s.length) {
    const h = i(s, u, c, f - 1);
    return h > c && r(s[h - 1], u) > -r(s[h], u) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function mi() {
  return 0;
}
function yi(t) {
  return t === null ? NaN : +t;
}
const wi = ee(vt), _i = wi.right;
ee(yi).center;
const xi = _i;
class mn extends Map {
  constructor(n, e = Mi) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(yn(this, n));
  }
  has(n) {
    return super.has(yn(this, n));
  }
  set(n, e) {
    return super.set(vi(this, n), e);
  }
  delete(n) {
    return super.delete(bi(this, n));
  }
}
function yn({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function vi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function bi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function Mi(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var Bt = Math.sqrt(50), Wt = Math.sqrt(10), Ut = Math.sqrt(2);
function ki(t, n, e) {
  var r, i = -1, o, a, s;
  if (n = +n, t = +t, e = +e, t === n && e > 0)
    return [t];
  if ((r = n < t) && (o = t, t = n, n = o), (s = re(t, n, e)) === 0 || !isFinite(s))
    return [];
  if (s > 0) {
    let u = Math.round(t / s), c = Math.round(n / s);
    for (u * s < t && ++u, c * s > n && --c, a = new Array(o = c - u + 1); ++i < o; )
      a[i] = (u + i) * s;
  } else {
    s = -s;
    let u = Math.round(t * s), c = Math.round(n * s);
    for (u / s < t && ++u, c / s > n && --c, a = new Array(o = c - u + 1); ++i < o; )
      a[i] = (u + i) / s;
  }
  return r && a.reverse(), a;
}
function re(t, n, e) {
  var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
  return i >= 0 ? (o >= Bt ? 10 : o >= Wt ? 5 : o >= Ut ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Bt ? 10 : o >= Wt ? 5 : o >= Ut ? 2 : 1);
}
function Ni(t, n, e) {
  var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
  return o >= Bt ? i *= 10 : o >= Wt ? i *= 5 : o >= Ut && (i *= 2), n < t ? -i : i;
}
function Ai(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function rn(t, n) {
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
const wn = Symbol("implicit");
function ie() {
  var t = new mn(), n = [], e = [], r = wn;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== wn)
        return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new mn();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return ie(n, e).unknown(r);
  }, rn.apply(i, arguments), i;
}
function oe() {
  var t = ie().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, s = !1, u = 0, c = 0, f = 0.5;
  delete t.unknown;
  function h() {
    var l = n().length, d = i < r, g = d ? i : r, p = d ? r : i;
    o = (p - g) / Math.max(1, l - u + c * 2), s && (o = Math.floor(o)), g += (p - g - o * (l - u)) * f, a = o * (1 - u), s && (g = Math.round(g), a = Math.round(a));
    var _ = Ai(l).map(function(y) {
      return g + o * y;
    });
    return e(d ? _.reverse() : _);
  }
  return t.domain = function(l) {
    return arguments.length ? (n(l), h()) : n();
  }, t.range = function(l) {
    return arguments.length ? ([r, i] = l, r = +r, i = +i, h()) : [r, i];
  }, t.rangeRound = function(l) {
    return [r, i] = l, r = +r, i = +i, s = !0, h();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(l) {
    return arguments.length ? (s = !!l, h()) : s;
  }, t.padding = function(l) {
    return arguments.length ? (u = Math.min(1, c = +l), h()) : u;
  }, t.paddingInner = function(l) {
    return arguments.length ? (u = Math.min(1, l), h()) : u;
  }, t.paddingOuter = function(l) {
    return arguments.length ? (c = +l, h()) : c;
  }, t.align = function(l) {
    return arguments.length ? (f = Math.max(0, Math.min(1, l)), h()) : f;
  }, t.copy = function() {
    return oe(n(), [r, i]).round(s).paddingInner(u).paddingOuter(c).align(f);
  }, rn.apply(h(), arguments);
}
function on(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ae(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function ft() {
}
var ot = 0.7, At = 1 / ot, Z = "\\s*([+-]?\\d+)\\s*", at = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", I = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $i = /^#([0-9a-f]{3,8})$/, Si = new RegExp(`^rgb\\(${Z},${Z},${Z}\\)$`), Ei = new RegExp(`^rgb\\(${I},${I},${I}\\)$`), Ci = new RegExp(`^rgba\\(${Z},${Z},${Z},${at}\\)$`), Ri = new RegExp(`^rgba\\(${I},${I},${I},${at}\\)$`), Ti = new RegExp(`^hsl\\(${at},${I},${I}\\)$`), Fi = new RegExp(`^hsla\\(${at},${I},${I},${at}\\)$`), _n = {
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
on(ft, W, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xn,
  formatHex: xn,
  formatHex8: Ii,
  formatHsl: Pi,
  formatRgb: vn,
  toString: vn
});
function xn() {
  return this.rgb().formatHex();
}
function Ii() {
  return this.rgb().formatHex8();
}
function Pi() {
  return se(this).formatHsl();
}
function vn() {
  return this.rgb().formatRgb();
}
function W(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = $i.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? bn(n) : e === 3 ? new N(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? pt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? pt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Si.exec(t)) ? new N(n[1], n[2], n[3], 1) : (n = Ei.exec(t)) ? new N(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ci.exec(t)) ? pt(n[1], n[2], n[3], n[4]) : (n = Ri.exec(t)) ? pt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ti.exec(t)) ? Nn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Fi.exec(t)) ? Nn(n[1], n[2] / 100, n[3] / 100, n[4]) : _n.hasOwnProperty(t) ? bn(_n[t]) : t === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
}
function bn(t) {
  return new N(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function pt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new N(t, n, e, r);
}
function Di(t) {
  return t instanceof ft || (t = W(t)), t ? (t = t.rgb(), new N(t.r, t.g, t.b, t.opacity)) : new N();
}
function Gt(t, n, e, r) {
  return arguments.length === 1 ? Di(t) : new N(t, n, e, r == null ? 1 : r);
}
function N(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
on(N, Gt, ae(ft, {
  brighter(t) {
    return t = t == null ? At : Math.pow(At, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ot : Math.pow(ot, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new N(B(this.r), B(this.g), B(this.b), $t(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Mn,
  formatHex: Mn,
  formatHex8: Hi,
  formatRgb: kn,
  toString: kn
}));
function Mn() {
  return `#${X(this.r)}${X(this.g)}${X(this.b)}`;
}
function Hi() {
  return `#${X(this.r)}${X(this.g)}${X(this.b)}${X((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kn() {
  const t = $t(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${B(this.r)}, ${B(this.g)}, ${B(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function $t(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function B(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function X(t) {
  return t = B(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Nn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new R(t, n, e, r);
}
function se(t) {
  if (t instanceof R)
    return new R(t.h, t.s, t.l, t.opacity);
  if (t instanceof ft || (t = W(t)), !t)
    return new R();
  if (t instanceof R)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new R(a, s, u, t.opacity);
}
function Li(t, n, e, r) {
  return arguments.length === 1 ? se(t) : new R(t, n, e, r == null ? 1 : r);
}
function R(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
on(R, Li, ae(ft, {
  brighter(t) {
    return t = t == null ? At : Math.pow(At, t), new R(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ot : Math.pow(ot, t), new R(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new N(
      Ot(t >= 240 ? t - 240 : t + 120, i, r),
      Ot(t, i, r),
      Ot(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new R(An(this.h), mt(this.s), mt(this.l), $t(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = $t(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${An(this.h)}, ${mt(this.s) * 100}%, ${mt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function An(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function mt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ot(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const an = (t) => () => t;
function Oi(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function qi(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function zi(t) {
  return (t = +t) == 1 ? ue : function(n, e) {
    return e - n ? qi(n, e, t) : an(isNaN(n) ? e : n);
  };
}
function ue(t, n) {
  var e = n - t;
  return e ? Oi(t, e) : an(isNaN(t) ? n : t);
}
const St = function t(n) {
  var e = zi(n);
  function r(i, o) {
    var a = e((i = Gt(i)).r, (o = Gt(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), c = ue(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = u(f), i.opacity = c(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Xi(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Vi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Yi(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = sn(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](s);
    return o;
  };
}
function Bi(t, n) {
  var e = new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function C(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Wi(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = sn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var Kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qt = new RegExp(Kt.source, "g");
function Ui(t) {
  return function() {
    return t;
  };
}
function Gi(t) {
  return function(n) {
    return t(n) + "";
  };
}
function ce(t, n) {
  var e = Kt.lastIndex = qt.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = Kt.exec(t)) && (i = qt.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: C(r, i) })), e = qt.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Gi(u[0].x) : Ui(n) : (n = u.length, function(c) {
    for (var f = 0, h; f < n; ++f)
      s[(h = u[f]).i] = h.x(c);
    return s.join("");
  });
}
function sn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? an(n) : (e === "number" ? C : e === "string" ? (r = W(n)) ? (n = r, St) : ce : n instanceof W ? St : n instanceof Date ? Bi : Vi(n) ? Xi : Array.isArray(n) ? Yi : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Wi : C)(t, n);
}
function Ki(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var $n = 180 / Math.PI, Zt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function fe(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * $n,
    skewX: Math.atan(u) * $n,
    scaleX: a,
    scaleY: s
  };
}
var yt;
function Zi(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Zt : fe(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ji(t) {
  return t == null || (yt || (yt = document.createElementNS("http://www.w3.org/2000/svg", "g")), yt.setAttribute("transform", t), !(t = yt.transform.baseVal.consolidate())) ? Zt : (t = t.matrix, fe(t.a, t.b, t.c, t.d, t.e, t.f));
}
function le(t, n, e, r) {
  function i(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, f, h, l, d, g) {
    if (c !== h || f !== l) {
      var p = d.push("translate(", null, n, null, e);
      g.push({ i: p - 4, x: C(c, h) }, { i: p - 2, x: C(f, l) });
    } else
      (h || l) && d.push("translate(" + h + n + l + e);
  }
  function a(c, f, h, l) {
    c !== f ? (c - f > 180 ? f += 360 : f - c > 180 && (c += 360), l.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: C(c, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(c, f, h, l) {
    c !== f ? l.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: C(c, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function u(c, f, h, l, d, g) {
    if (c !== h || f !== l) {
      var p = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: p - 4, x: C(c, h) }, { i: p - 2, x: C(f, l) });
    } else
      (h !== 1 || l !== 1) && d.push(i(d) + "scale(" + h + "," + l + ")");
  }
  return function(c, f) {
    var h = [], l = [];
    return c = t(c), f = t(f), o(c.translateX, c.translateY, f.translateX, f.translateY, h, l), a(c.rotate, f.rotate, h, l), s(c.skewX, f.skewX, h, l), u(c.scaleX, c.scaleY, f.scaleX, f.scaleY, h, l), c = f = null, function(d) {
      for (var g = -1, p = l.length, _; ++g < p; )
        h[(_ = l[g]).i] = _.x(d);
      return h.join("");
    };
  };
}
var Qi = le(Zi, "px, ", "px)", "deg)"), ji = le(Ji, ", ", ")", ")");
function to(t) {
  return function() {
    return t;
  };
}
function no(t) {
  return +t;
}
var Sn = [0, 1];
function K(t) {
  return t;
}
function Jt(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : to(isNaN(n) ? NaN : 0.5);
}
function eo(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function ro(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Jt(i, r), o = e(a, o)) : (r = Jt(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function io(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Jt(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = xi(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function oo(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ao() {
  var t = Sn, n = Sn, e = sn, r, i, o, a = K, s, u, c;
  function f() {
    var l = Math.min(t.length, n.length);
    return a !== K && (a = eo(t[0], t[l - 1])), s = l > 2 ? io : ro, u = c = null, h;
  }
  function h(l) {
    return l == null || isNaN(l = +l) ? o : (u || (u = s(t.map(r), n, e)))(r(a(l)));
  }
  return h.invert = function(l) {
    return a(i((c || (c = s(n, t.map(r), C)))(l)));
  }, h.domain = function(l) {
    return arguments.length ? (t = Array.from(l, no), f()) : t.slice();
  }, h.range = function(l) {
    return arguments.length ? (n = Array.from(l), f()) : n.slice();
  }, h.rangeRound = function(l) {
    return n = Array.from(l), e = Ki, f();
  }, h.clamp = function(l) {
    return arguments.length ? (a = l ? !0 : K, f()) : a !== K;
  }, h.interpolate = function(l) {
    return arguments.length ? (e = l, f()) : e;
  }, h.unknown = function(l) {
    return arguments.length ? (o = l, h) : o;
  }, function(l, d) {
    return r = l, i = d, f();
  };
}
function so() {
  return ao()(K, K);
}
function uo(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Et(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Q(t) {
  return t = Et(Math.abs(t)), t ? t[1] : NaN;
}
function co(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function fo(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var lo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ct(t) {
  if (!(n = lo.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new un({
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
Ct.prototype = un.prototype;
function un(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
un.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ho(t) {
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
var he;
function go(t, n) {
  var e = Et(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (he = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Et(t, Math.max(0, n + o - 1))[0];
}
function En(t, n) {
  var e = Et(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Cn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: uo,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => En(t * 100, n),
  r: En,
  s: go,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Rn(t) {
  return t;
}
var Tn = Array.prototype.map, Fn = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function po(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Rn : co(Tn.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Rn : fo(Tn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "\u2212" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(h) {
    h = Ct(h);
    var l = h.fill, d = h.align, g = h.sign, p = h.symbol, _ = h.zero, y = h.width, x = h.comma, w = h.precision, M = h.trim, v = h.type;
    v === "n" ? (x = !0, v = "g") : Cn[v] || (w === void 0 && (w = 12), M = !0, v = "g"), (_ || l === "0" && d === "=") && (_ = !0, l = "0", d = "=");
    var F = p === "$" ? e : p === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", A = p === "$" ? r : /[%p]/.test(v) ? a : "", D = Cn[v], S = /[defgprs%]/.test(v);
    w = w === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function q(m) {
      var k = F, b = A, G, hn, lt;
      if (v === "c")
        b = D(m) + b, m = "";
      else {
        m = +m;
        var ht = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? u : D(Math.abs(m), w), M && (m = ho(m)), ht && +m == 0 && g !== "+" && (ht = !1), k = (ht ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + k, b = (v === "s" ? Fn[8 + he / 3] : "") + b + (ht && g === "(" ? ")" : ""), S) {
          for (G = -1, hn = m.length; ++G < hn; )
            if (lt = m.charCodeAt(G), 48 > lt || lt > 57) {
              b = (lt === 46 ? i + m.slice(G + 1) : m.slice(G)) + b, m = m.slice(0, G);
              break;
            }
        }
      }
      x && !_ && (m = n(m, 1 / 0));
      var dt = k.length + m.length + b.length, H = dt < y ? new Array(y - dt + 1).join(l) : "";
      switch (x && _ && (m = n(H + m, H.length ? y - b.length : 1 / 0), H = ""), d) {
        case "<":
          m = k + m + b + H;
          break;
        case "=":
          m = k + H + m + b;
          break;
        case "^":
          m = H.slice(0, dt = H.length >> 1) + k + m + b + H.slice(dt);
          break;
        default:
          m = H + k + m + b;
          break;
      }
      return o(m);
    }
    return q.toString = function() {
      return h + "";
    }, q;
  }
  function f(h, l) {
    var d = c((h = Ct(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(Q(l) / 3))) * 3, p = Math.pow(10, -g), _ = Fn[8 + g / 3];
    return function(y) {
      return d(p * y) + _;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var wt, de, ge;
mo({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function mo(t) {
  return wt = po(t), de = wt.format, ge = wt.formatPrefix, wt;
}
function yo(t) {
  return Math.max(0, -Q(Math.abs(t)));
}
function wo(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Q(n) / 3))) * 3 - Q(Math.abs(t)));
}
function _o(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Q(n) - Q(t)) + 1;
}
function xo(t, n, e, r) {
  var i = Ni(t, n, e), o;
  switch (r = Ct(r == null ? ",f" : r), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = wo(i, a)) && (r.precision = o), ge(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = _o(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = yo(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return de(r);
}
function vo(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ki(r[0], r[r.length - 1], e == null ? 10 : e);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return xo(i[0], i[i.length - 1], e == null ? 10 : e, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, c, f = 10;
    for (s < a && (c = a, a = s, s = c, c = i, i = o, o = c); f-- > 0; ) {
      if (c = re(a, s, e), c === u)
        return r[i] = a, r[o] = s, n(r);
      if (c > 0)
        a = Math.floor(a / c) * c, s = Math.ceil(s / c) * c;
      else if (c < 0)
        a = Math.ceil(a * c) / c, s = Math.floor(s * c) / c;
      else
        break;
      u = c;
    }
    return t;
  }, t;
}
function pe() {
  var t = so();
  return t.copy = function() {
    return oo(t, pe());
  }, rn.apply(t, arguments), vo(t);
}
const { abs: zt, min: bo, round: In } = Math, Mo = (t, n, e, r) => {
  const [i, o] = V({
    width: 0,
    height: 0,
    offsetWidth: 0
  }), [a, s] = V({
    xScale: (l) => l,
    yScale: (l) => l
  }), [u, c] = V({ first: 0, last: 0 }), f = dn(
    (l, d) => zt(a.yScale(d) - a.yScale(l)) || 1,
    [a.yScale]
  ), h = dn(
    (l, d) => a.yScale(bo(l, d)) - f(l, d) + z,
    [a.yScale]
  );
  return it(() => {
    var D;
    if (!n)
      return;
    const { clientWidth: l, clientHeight: d } = t.current, g = oe().range([20, l * e - 20]).domain(n.map(({ date: S }) => S)).padding(0.3), p = ((D = g.bandwidth) == null ? void 0 : D.call(g)) * 1.44, _ = p * n.length, y = r - _ + l - Y[1] + z, x = In((zt(y) - z) / p), w = In((zt(y) + l - Y[1]) / p) + 1, M = n.slice(x > 0 ? x : 0, w), v = Math.min(...M.map(({ low: S }) => S)), F = Math.max(...M.map(({ high: S }) => S)), A = pe().domain([v - 20, F + 20]).range([d - Y[0] - z, z]);
    c({ first: x, last: w }), o({ width: l, height: d, offsetWidth: y }), s({ xScale: g, yScale: A });
  }, [t, e, r, n]), { utils: { scaledHeight: f, scaledY: h }, visibleRange: u, dimensions: i, scales: a };
};
var ko = { value: () => {
} };
function me() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new bt(e);
}
function bt(t) {
  this._ = t;
}
function No(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
bt.prototype = me.prototype = {
  constructor: bt,
  on: function(t, n) {
    var e = this._, r = No(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = Ao(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = Pn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Pn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new bt(t);
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
function Ao(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Pn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = ko, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var j = 0, et = 0, nt = 0, ye = 1e3, Rt, rt, Tt = 0, U = 0, Pt = 0, st = typeof performance == "object" && performance.now ? performance : Date, we = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function cn() {
  return U || (we($o), U = st.now() + Pt);
}
function $o() {
  U = 0;
}
function Ft() {
  this._call = this._time = this._next = null;
}
Ft.prototype = _e.prototype = {
  constructor: Ft,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? cn() : +e) + (n == null ? 0 : +n), !this._next && rt !== this && (rt ? rt._next = this : Rt = this, rt = this), this._call = t, this._time = e, Qt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qt());
  }
};
function _e(t, n, e) {
  var r = new Ft();
  return r.restart(t, n, e), r;
}
function So() {
  cn(), ++j;
  for (var t = Rt, n; t; )
    (n = U - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --j;
}
function Dn() {
  U = (Tt = st.now()) + Pt, j = et = 0;
  try {
    So();
  } finally {
    j = 0, Co(), U = 0;
  }
}
function Eo() {
  var t = st.now(), n = t - Tt;
  n > ye && (Pt -= n, Tt = t);
}
function Co() {
  for (var t, n = Rt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Rt = e);
  rt = t, Qt(r);
}
function Qt(t) {
  if (!j) {
    et && (et = clearTimeout(et));
    var n = t - U;
    n > 24 ? (t < 1 / 0 && (et = setTimeout(Dn, t - st.now() - Pt)), nt && (nt = clearInterval(nt))) : (nt || (Tt = st.now(), nt = setInterval(Eo, ye)), j = 1, we(Dn));
  }
}
function Hn(t, n, e) {
  var r = new Ft();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ro = me("start", "end", "cancel", "interrupt"), To = [], xe = 0, Ln = 1, jt = 2, Mt = 3, On = 4, tn = 5, kt = 6;
function Dt(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  Fo(t, e, {
    name: n,
    index: r,
    group: i,
    on: Ro,
    tween: To,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: xe
  });
}
function fn(t, n) {
  var e = T(t, n);
  if (e.state > xe)
    throw new Error("too late; already scheduled");
  return e;
}
function P(t, n) {
  var e = T(t, n);
  if (e.state > Mt)
    throw new Error("too late; already running");
  return e;
}
function T(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function Fo(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = _e(o, 0, e.time);
  function o(c) {
    e.state = Ln, e.timer.restart(a, e.delay, e.time), e.delay <= c && a(c - e.delay);
  }
  function a(c) {
    var f, h, l, d;
    if (e.state !== Ln)
      return u();
    for (f in r)
      if (d = r[f], d.name === e.name) {
        if (d.state === Mt)
          return Hn(a);
        d.state === On ? (d.state = kt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < n && (d.state = kt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (Hn(function() {
      e.state === Mt && (e.state = On, e.timer.restart(s, e.delay, e.time), s(c));
    }), e.state = jt, e.on.call("start", t, t.__data__, e.index, e.group), e.state === jt) {
      for (e.state = Mt, i = new Array(l = e.tween.length), f = 0, h = -1; f < l; ++f)
        (d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(c) {
    for (var f = c < e.duration ? e.ease.call(null, c / e.duration) : (e.timer.restart(u), e.state = tn, 1), h = -1, l = i.length; ++h < l; )
      i[h].call(t, f);
    e.state === tn && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = kt, e.timer.stop(), delete r[n];
    for (var c in r)
      return;
    delete t.__transition;
  }
}
function Io(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (!!e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > jt && r.state < tn, r.state = kt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Po(t) {
  return this.each(function() {
    Io(this, t);
  });
}
function Do(t, n) {
  var e, r;
  return function() {
    var i = P(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ho(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = P(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, c = i.length; u < c; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === c && i.push(s);
    }
    o.tween = i;
  };
}
function Lo(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = T(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Do : Ho)(e, t, n));
}
function ln(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = P(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return T(i, r).value[n];
  };
}
function ve(t, n) {
  var e;
  return (typeof n == "number" ? C : n instanceof W ? St : (e = W(n)) ? (n = e, St) : ce)(t, n);
}
function Oo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function qo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function zo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Xo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Vo(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Yo(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Bo(t, n) {
  var e = It(t), r = e === "transform" ? ji : ve;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Yo : Vo)(e, r, ln(this, "attr." + t, n)) : n == null ? (e.local ? qo : Oo)(e) : (e.local ? Xo : zo)(e, r, n));
}
function Wo(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Uo(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Go(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Uo(t, o)), e;
  }
  return i._value = n, i;
}
function Ko(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Wo(t, o)), e;
  }
  return i._value = n, i;
}
function Zo(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = It(t);
  return this.tween(e, (r.local ? Go : Ko)(r, n));
}
function Jo(t, n) {
  return function() {
    fn(this, t).delay = +n.apply(this, arguments);
  };
}
function Qo(t, n) {
  return n = +n, function() {
    fn(this, t).delay = n;
  };
}
function jo(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Jo : Qo)(n, t)) : T(this.node(), n).delay;
}
function ta(t, n) {
  return function() {
    P(this, t).duration = +n.apply(this, arguments);
  };
}
function na(t, n) {
  return n = +n, function() {
    P(this, t).duration = n;
  };
}
function ea(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ta : na)(n, t)) : T(this.node(), n).duration;
}
function ra(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    P(this, t).ease = n;
  };
}
function ia(t) {
  var n = this._id;
  return arguments.length ? this.each(ra(n, t)) : T(this.node(), n).ease;
}
function oa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    P(this, t).ease = e;
  };
}
function aa(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(oa(this._id, t));
}
function sa(t) {
  typeof t != "function" && (t = Wn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, c = 0; c < a; ++c)
      (u = o[c]) && t.call(u, u.__data__, c, o) && s.push(u);
  return new O(r, this._parents, this._name, this._id);
}
function ua(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], c = e[s], f = u.length, h = a[s] = new Array(f), l, d = 0; d < f; ++d)
      (l = u[d] || c[d]) && (h[d] = l);
  for (; s < r; ++s)
    a[s] = n[s];
  return new O(a, this._parents, this._name, this._id);
}
function ca(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function fa(t, n, e) {
  var r, i, o = ca(n) ? fn : P;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function la(t, n) {
  var e = this._id;
  return arguments.length < 2 ? T(this.node(), e).on.on(t) : this.each(fa(e, t, n));
}
function ha(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function da() {
  return this.on("end.remove", ha(this._id));
}
function ga(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = nn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, c = o[a] = new Array(u), f, h, l = 0; l < u; ++l)
      (f = s[l]) && (h = t.call(f, f.__data__, l, s)) && ("__data__" in f && (h.__data__ = f.__data__), c[l] = h, Dt(c[l], n, e, l, c, T(f, e)));
  return new O(o, this._parents, n, e);
}
function pa(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Bn(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], c = u.length, f, h = 0; h < c; ++h)
      if (f = u[h]) {
        for (var l = t.call(f, f.__data__, h, u), d, g = T(f, e), p = 0, _ = l.length; p < _; ++p)
          (d = l[p]) && Dt(d, n, e, p, l, g);
        o.push(l), a.push(f);
      }
  return new O(o, a, n, e);
}
var ma = ct.prototype.constructor;
function ya() {
  return new ma(this._groups, this._parents);
}
function wa(t, n) {
  var e, r, i;
  return function() {
    var o = J(this, t), a = (this.style.removeProperty(t), J(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function be(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _a(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = J(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xa(t, n, e) {
  var r, i, o;
  return function() {
    var a = J(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), J(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function va(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = P(this, t), c = u.on, f = u.value[o] == null ? s || (s = be(n)) : void 0;
    (c !== e || i !== f) && (r = (e = c).copy()).on(a, i = f), u.on = r;
  };
}
function ba(t, n, e) {
  var r = (t += "") == "transform" ? Qi : ve;
  return n == null ? this.styleTween(t, wa(t, r)).on("end.style." + t, be(t)) : typeof n == "function" ? this.styleTween(t, xa(t, r, ln(this, "style." + t, n))).each(va(this._id, t)) : this.styleTween(t, _a(t, r, n), e).on("end.style." + t, null);
}
function Ma(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ka(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Ma(t, a, e)), r;
  }
  return o._value = n, o;
}
function Na(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, ka(t, n, e == null ? "" : e));
}
function Aa(t) {
  return function() {
    this.textContent = t;
  };
}
function $a(t) {
  return function() {
    var n = t(this);
    this.textContent = n == null ? "" : n;
  };
}
function Sa(t) {
  return this.tween("text", typeof t == "function" ? $a(ln(this, "text", t)) : Aa(t == null ? "" : t + ""));
}
function Ea(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Ca(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Ea(i)), n;
  }
  return r._value = t, r;
}
function Ra(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Ca(t));
}
function Ta() {
  for (var t = this._name, n = this._id, e = Me(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, c = 0; c < s; ++c)
      if (u = a[c]) {
        var f = T(u, n);
        Dt(u, t, e, c, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new O(r, this._parents, t, e);
}
function Fa() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var c = P(this, r), f = c.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), c.on = n;
    }), i === 0 && o();
  });
}
var Ia = 0;
function O(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Me() {
  return ++Ia;
}
var L = ct.prototype;
O.prototype = {
  constructor: O,
  select: ga,
  selectAll: pa,
  selectChild: L.selectChild,
  selectChildren: L.selectChildren,
  filter: sa,
  merge: ua,
  selection: ya,
  transition: Ta,
  call: L.call,
  nodes: L.nodes,
  node: L.node,
  size: L.size,
  empty: L.empty,
  each: L.each,
  on: la,
  attr: Bo,
  attrTween: Zo,
  style: ba,
  styleTween: Na,
  text: Sa,
  textTween: Ra,
  remove: da,
  tween: Lo,
  delay: jo,
  duration: ea,
  ease: ia,
  easeVarying: aa,
  end: Fa,
  [Symbol.iterator]: L[Symbol.iterator]
};
function Pa(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Da = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Pa
};
function Ha(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function La(t) {
  var n, e;
  t instanceof O ? (n = t._id, t = t._name) : (n = Me(), (e = Da).time = cn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, c = 0; c < s; ++c)
      (u = a[c]) && Dt(u, t, n, c, a, e || Ha(u, n));
  return new O(r, this._parents, t, n);
}
ct.prototype.interrupt = Po;
ct.prototype.transition = La;
const Oa = (t, n, e, r, i, o, a) => {
  const { xScale: s } = r, { offsetWidth: u } = i, { scaledHeight: c, scaledY: f } = o, { first: h, last: l } = a, d = () => Yt(t.current), g = (y, x = d()) => x.selectAll(`rect.${y}`).data(n), p = (y) => g(
    y,
    d().append("g").classed(`${y}-group`, !0).attr("clip-path", "url(#chart-contents)")
  ).enter().append("rect").classed(y, !0), _ = (y, x) => g(y).classed("is-offscreen", (w, M) => M < h - 10 || M > l + 10).transition().duration(di).attr("width", () => y === "wicks" ? 1 : Number(s.bandwidth())).attr("height", (w) => c(w[x[0]], w[x[1]])).attr(
    "x",
    (w) => Number(s(w.date)) + (y === "wicks" ? (Number(s.bandwidth()) - 1) / 2 : 0) + u
  ).attr("y", (w) => f(w[x[0]], w[x[1]]));
  it(() => {
    p("wicks").attr("fill", "grey"), p("candles");
  }, []), it(() => {
    typeof s.bandwidth == "function" && (_("wicks", ["low", "high"]), _("candles", ["open", "close"]).attr(
      "fill",
      (y) => y.close < y.open ? "red" : "green"
    ));
  }, [n, s, e]);
}, qn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, qa = "font-family: serif;", za = ut.button(
  ({ status: t, minWidth: n, margin: e }) => Xn`
    ${qa}
    border: 1px solid ${qn[t]};
    color: ${qn[t]};
    background-color: white;
    border-radius: 10px;
    min-width: ${n};
    padding: 10px;
    margin: ${e};
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
), _t = ({
  children: t,
  status: n = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: r = "220px",
  margin: i = "10px",
  ...o
}) => /* @__PURE__ */ E.createElement(za, {
  status: n,
  ...o,
  minWidth: r,
  margin: i,
  "data-selector": e
}, t), Xa = ut.div`
  margin: 10px;
  position: absolute;
`, zn = ut.div(
  ({ rotate: t }) => Xn`
    rotate: ${t}deg;
  `
), Va = ({
  zoomLevel: t,
  setZoomLevel: n,
  setPanLevel: e,
  multiplier: r,
  visibleRange: i,
  length: o
}) => {
  const a = {
    minWidth: "auto",
    margin: "5px"
  };
  return /* @__PURE__ */ E.createElement(Xa, null, /* @__PURE__ */ E.createElement(_t, {
    ...a,
    onClick: () => e((s) => s + r * 100),
    disabled: i.first <= 0
  }, /* @__PURE__ */ E.createElement(zn, {
    rotate: -90
  }, "\u{1F53A}")), /* @__PURE__ */ E.createElement(_t, {
    ...a,
    onClick: () => n((s) => s > r ? s - r : r),
    disabled: t <= r * 2
  }, "\u2796"), /* @__PURE__ */ E.createElement(_t, {
    ...a,
    onClick: () => n((s) => s + r),
    disabled: t >= r * 30
  }, "\u2795"), /* @__PURE__ */ E.createElement(_t, {
    ...a,
    onClick: () => e((s) => s - r * 100),
    disabled: i.last >= o
  }, /* @__PURE__ */ E.createElement(zn, {
    rotate: 90
  }, "\u{1F53A}")));
}, Ya = ({ width: t, height: n }) => {
  const e = {
    x: 0,
    y: 0,
    width: t ? t - Y[1] + z : 0,
    height: n ? n - Y[0] : 0
  };
  return /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "chart-contents"
  }, /* @__PURE__ */ React.createElement("rect", {
    ...e
  })), /* @__PURE__ */ React.createElement("clipPath", {
    id: "bottom-axis"
  }, /* @__PURE__ */ React.createElement("rect", {
    ...e,
    height: `${n}`
  })));
}, Ua = ({ data: t }) => {
  const [n, e] = V(t.length / 100), [r, i] = V(0), o = ke(null), { scales: a, dimensions: s, utils: u, visibleRange: c } = Mo(
    o,
    t,
    n,
    r
  );
  return Oa(o, t, r, a, s, u, c), gi(o, t, r, a, s), /* @__PURE__ */ E.createElement(Ae, null, /* @__PURE__ */ E.createElement(Va, {
    zoomLevel: n,
    setZoomLevel: e,
    setPanLevel: i,
    visibleRange: c,
    multiplier: t.length / 1e3,
    length: t.length
  }), /* @__PURE__ */ E.createElement(Ne, {
    ref: o
  }, /* @__PURE__ */ E.createElement(Ya, {
    ...s
  })));
};
export {
  Ua as default
};
