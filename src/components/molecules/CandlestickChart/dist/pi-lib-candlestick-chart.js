import v, { useState as Y, useEffect as Q, useCallback as pn, useRef as Wn } from "react";
import F, { css as en, keyframes as Un } from "styled-components";
const Re = F.svg`
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
`, Te = F.div`
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
`, Fe = F.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Ie(t) {
  return t;
}
var Ht = 1, vt = 2, Vt = 3, gt = 4, mn = 1e-6;
function Pe(t) {
  return "translate(" + t + ",0)";
}
function Le(t) {
  return "translate(0," + t + ")";
}
function De(t) {
  return (n) => +t(n);
}
function He(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Oe() {
  return !this.__axis;
}
function Gn(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === Ht || t === gt ? -1 : 1, c = t === gt || t === vt ? "x" : "y", h = t === Ht || t === Vt ? Pe : Le;
  function f(d) {
    var g = r == null ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r, p = i == null ? n.tickFormat ? n.tickFormat.apply(n, e) : Ie : i, _ = Math.max(o, 0) + s, b = n.range(), y = +b[0] + u, w = +b[b.length - 1] + u, k = (n.bandwidth ? He : De)(n.copy(), u), x = d.selection ? d.selection() : d, $ = x.selectAll(".domain").data([null]), E = x.selectAll(".tick").data(g, n).order(), D = E.exit(), C = E.enter().append("g").attr("class", "tick"), z = E.select("line"), m = E.select("text");
    $ = $.merge($.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(C), z = z.merge(C.append("line").attr("stroke", "currentColor").attr(c + "2", l * o)), m = m.merge(C.append("text").attr("fill", "currentColor").attr(c, l * _).attr("dy", t === Ht ? "0em" : t === Vt ? "0.71em" : "0.32em")), d !== x && ($ = $.transition(d), E = E.transition(d), z = z.transition(d), m = m.transition(d), D = D.transition(d).attr("opacity", mn).attr("transform", function(N) {
      return isFinite(N = k(N)) ? h(N + u) : this.getAttribute("transform");
    }), C.attr("opacity", mn).attr("transform", function(N) {
      var M = this.parentNode.__axis;
      return h((M && isFinite(M = M(N)) ? M : k(N)) + u);
    })), D.remove(), $.attr("d", t === gt || t === vt ? a ? "M" + l * a + "," + y + "H" + u + "V" + w + "H" + l * a : "M" + u + "," + y + "V" + w : a ? "M" + y + "," + l * a + "V" + u + "H" + w + "V" + l * a : "M" + y + "," + u + "H" + w), E.attr("opacity", 1).attr("transform", function(N) {
      return h(k(N) + u);
    }), z.attr(c + "2", l * o), m.attr(c, l * _).text(p), x.filter(Oe).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === vt ? "start" : t === gt ? "end" : "middle"), x.each(function() {
      this.__axis = k;
    });
  }
  return f.scale = function(d) {
    return arguments.length ? (n = d, f) : n;
  }, f.ticks = function() {
    return e = Array.from(arguments), f;
  }, f.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), f) : e.slice();
  }, f.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), f) : r && r.slice();
  }, f.tickFormat = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, f.tickSize = function(d) {
    return arguments.length ? (o = a = +d, f) : o;
  }, f.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, f) : o;
  }, f.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, f) : a;
  }, f.tickPadding = function(d) {
    return arguments.length ? (s = +d, f) : s;
  }, f.offset = function(d) {
    return arguments.length ? (u = +d, f) : u;
  }, f;
}
function qe(t) {
  return Gn(vt, t);
}
function ze(t) {
  return Gn(Vt, t);
}
var Yt = "http://www.w3.org/1999/xhtml";
const yn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Yt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Pt(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), yn.hasOwnProperty(n) ? { space: yn[n], local: t } : t;
}
function Xe(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Yt && n.documentElement.namespaceURI === Yt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ve(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Kn(t) {
  var n = Pt(t);
  return (n.local ? Ve : Xe)(n);
}
function Ye() {
}
function rn(t) {
  return t == null ? Ye : function() {
    return this.querySelector(t);
  };
}
function Be(t) {
  typeof t != "function" && (t = rn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new S(r, this._parents);
}
function We(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ue() {
  return [];
}
function Zn(t) {
  return t == null ? Ue : function() {
    return this.querySelectorAll(t);
  };
}
function Ge(t) {
  return function() {
    return We(t.apply(this, arguments));
  };
}
function Ke(t) {
  typeof t == "function" ? t = Ge(t) : t = Zn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new S(r, i);
}
function Jn(t) {
  return function() {
    return this.matches(t);
  };
}
function Qn(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Ze = Array.prototype.find;
function Je(t) {
  return function() {
    return Ze.call(this.children, t);
  };
}
function Qe() {
  return this.firstElementChild;
}
function je(t) {
  return this.select(t == null ? Qe : Je(typeof t == "function" ? t : Qn(t)));
}
var tr = Array.prototype.filter;
function nr() {
  return Array.from(this.children);
}
function er(t) {
  return function() {
    return tr.call(this.children, t);
  };
}
function rr(t) {
  return this.selectAll(t == null ? nr : er(typeof t == "function" ? t : Qn(t)));
}
function ir(t) {
  typeof t != "function" && (t = Jn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new S(r, this._parents);
}
function jn(t) {
  return new Array(t.length);
}
function or() {
  return new S(this._enter || this._groups.map(jn), this._parents);
}
function At(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
At.prototype = {
  constructor: At,
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
function ar(t) {
  return function() {
    return t;
  };
}
function sr(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new At(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function ur(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), d;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (f[s] = d = a.call(u, u.__data__, s, n) + "", l.has(d) ? i[s] = u : l.set(d, u));
  for (s = 0; s < h; ++s)
    d = a.call(t, o[s], s, o) + "", (u = l.get(d)) ? (r[s] = u, u.__data__ = o[s], l.delete(d)) : e[s] = new At(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(f[s]) === u && (i[s] = u);
}
function lr(t) {
  return t.__data__;
}
function cr(t, n) {
  if (!arguments.length)
    return Array.from(this, lr);
  var e = n ? ur : sr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ar(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], h = i[l], f = h.length, d = fr(t.call(c, c && c.__data__, l, r)), g = d.length, p = s[l] = new Array(g), _ = a[l] = new Array(g), b = u[l] = new Array(f);
    e(c, h, p, _, b, d, n);
    for (var y = 0, w = 0, k, x; y < g; ++y)
      if (k = p[y]) {
        for (y >= w && (w = y + 1); !(x = _[w]) && ++w < g; )
          ;
        k._next = x || null;
      }
  }
  return a = new S(a, r), a._enter = s, a._exit = u, a;
}
function fr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function hr() {
  return new S(this._exit || this._groups.map(jn), this._parents);
}
function dr(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function gr(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], h = l.length, f = s[u] = new Array(h), d, g = 0; g < h; ++g)
      (d = l[g] || c[g]) && (f[g] = d);
  for (; u < i; ++u)
    s[u] = e[u];
  return new S(s, this._parents);
}
function pr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function mr(t) {
  t || (t = yr);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new S(i, this._parents).order();
}
function yr(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function wr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function xr() {
  return Array.from(this);
}
function _r() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function vr() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function br() {
  return !this.node();
}
function kr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Mr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Nr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ar(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function $r(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Er(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Sr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Cr(t, n) {
  var e = Pt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Nr : Mr : typeof n == "function" ? e.local ? Sr : Er : e.local ? $r : Ar)(e, n));
}
function te(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Rr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Tr(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Fr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ir(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Rr : typeof n == "function" ? Fr : Tr)(t, n, e == null ? "" : e)) : j(this.node(), t);
}
function j(t, n) {
  return t.style.getPropertyValue(n) || te(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Pr(t) {
  return function() {
    delete this[t];
  };
}
function Lr(t, n) {
  return function() {
    this[t] = n;
  };
}
function Dr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Hr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Pr : typeof n == "function" ? Dr : Lr)(t, n)) : this.node()[t];
}
function ne(t) {
  return t.trim().split(/^|\s+/);
}
function on(t) {
  return t.classList || new ee(t);
}
function ee(t) {
  this._node = t, this._names = ne(t.getAttribute("class") || "");
}
ee.prototype = {
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
function re(t, n) {
  for (var e = on(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function ie(t, n) {
  for (var e = on(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Or(t) {
  return function() {
    re(this, t);
  };
}
function qr(t) {
  return function() {
    ie(this, t);
  };
}
function zr(t, n) {
  return function() {
    (n.apply(this, arguments) ? re : ie)(this, t);
  };
}
function Xr(t, n) {
  var e = ne(t + "");
  if (arguments.length < 2) {
    for (var r = on(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? zr : n ? Or : qr)(e, n));
}
function Vr() {
  this.textContent = "";
}
function Yr(t) {
  return function() {
    this.textContent = t;
  };
}
function Br(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n == null ? "" : n;
  };
}
function Wr(t) {
  return arguments.length ? this.each(t == null ? Vr : (typeof t == "function" ? Br : Yr)(t)) : this.node().textContent;
}
function Ur() {
  this.innerHTML = "";
}
function Gr(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Kr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n == null ? "" : n;
  };
}
function Zr(t) {
  return arguments.length ? this.each(t == null ? Ur : (typeof t == "function" ? Kr : Gr)(t)) : this.node().innerHTML;
}
function Jr() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Qr() {
  return this.each(Jr);
}
function jr() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ti() {
  return this.each(jr);
}
function ni(t) {
  var n = typeof t == "function" ? t : Kn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function ei() {
  return null;
}
function ri(t, n) {
  var e = typeof t == "function" ? t : Kn(t), r = n == null ? ei : typeof n == "function" ? n : rn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ii() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function oi() {
  return this.each(ii);
}
function ai() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function si() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ui(t) {
  return this.select(t ? si : ai);
}
function li(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ci(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function fi(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function hi(t) {
  return function() {
    var n = this.__on;
    if (!!n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function di(t, n, e) {
  return function() {
    var r = this.__on, i, o = ci(n);
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
function gi(t, n, e) {
  var r = fi(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? di : hi, i = 0; i < o; ++i)
    this.each(s(r[i], n, e));
  return this;
}
function oe(t, n, e) {
  var r = te(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function pi(t, n) {
  return function() {
    return oe(this, t, n);
  };
}
function mi(t, n) {
  return function() {
    return oe(this, t, n.apply(this, arguments));
  };
}
function yi(t, n) {
  return this.each((typeof n == "function" ? mi : pi)(t, n));
}
function* wi() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ae = [null];
function S(t, n) {
  this._groups = t, this._parents = n;
}
function lt() {
  return new S([[document.documentElement]], ae);
}
function xi() {
  return this;
}
S.prototype = lt.prototype = {
  constructor: S,
  select: Be,
  selectAll: Ke,
  selectChild: je,
  selectChildren: rr,
  filter: ir,
  data: cr,
  enter: or,
  exit: hr,
  join: dr,
  merge: gr,
  selection: xi,
  order: pr,
  sort: mr,
  call: wr,
  nodes: xr,
  node: _r,
  size: vr,
  empty: br,
  each: kr,
  attr: Cr,
  style: Ir,
  property: Hr,
  classed: Xr,
  text: Wr,
  html: Zr,
  raise: Qr,
  lower: ti,
  append: ni,
  insert: ri,
  remove: oi,
  clone: ui,
  datum: li,
  on: gi,
  dispatch: yi,
  [Symbol.iterator]: wi
};
function Bt(t) {
  return typeof t == "string" ? new S([[document.querySelector(t)]], [document.documentElement]) : new S([[t]], ae);
}
const _i = 500, X = 10, B = [65, 55], Ot = {}, et = (t = "", n, e) => {
  var h;
  const r = Math.round((h = e.bandwidth) == null ? void 0 : h.call(e)) || 0, i = `${t}-${n}-${r}`;
  if (Ot[i] !== void 0)
    return Ot[i];
  let o = "";
  const a = new Date(t), [s, u, l] = t.split("-");
  l === "01" && (u === "01" ? o = s : o = a.toLocaleString("en-UK", {
    month: "short"
  }));
  let c = [];
  return r > 1 && c.push(16), r > 3 && c.push(8, 24), r > 7 && (c = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), c.includes(Number(l)) && (o = l), e.domain().length - 1 === n && (o = l), Ot[i] = o, o;
}, vi = (t, n, e, r, i) => {
  const [o, a] = Y(), [s, u] = Y(), { xScale: l, yScale: c } = r, { width: h, height: f, offsetWidth: d } = i;
  Q(() => {
    !t.current || (a(
      Bt(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), u(Bt(t.current).append("g").classed("y-axis", !0)));
  }, []), Q(() => {
    !l.domain || !n || (o.call(ze(l)).attr(
      "transform",
      `translate(${d},${f - B[0]})`
    ).selectAll("text").classed(
      "emphasise",
      (g, p) => et(g, p, l).length > 2
    ).attr(
      "x",
      (g, p) => et(g, p, l).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((g, p) => et(g, p, l)), o.selectAll("line").attr(
      "stroke",
      (g, p) => et(g, p, l).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (g, p) => et(g, p, l).length ? 12 : 6
    ), s.call(qe(c)).attr(
      "transform",
      `translate(${h - B[1] + X},${X})`
    ));
  }, [l, c]);
};
function bt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function bi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function se(t) {
  let n, e, r;
  t.length !== 2 ? (n = bt, e = (s, u) => bt(t(s), u), r = (s, u) => t(s) - u) : (n = t === bt || t === bi ? t : ki, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0)
        return c;
      do {
        const h = l + c >>> 1;
        e(s[h], u) < 0 ? l = h + 1 : c = h;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0)
        return c;
      do {
        const h = l + c >>> 1;
        e(s[h], u) <= 0 ? l = h + 1 : c = h;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const h = i(s, u, l, c - 1);
    return h > l && r(s[h - 1], u) > -r(s[h], u) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function ki() {
  return 0;
}
function Mi(t) {
  return t === null ? NaN : +t;
}
const Ni = se(bt), Ai = Ni.right;
se(Mi).center;
const $i = Ai;
class wn extends Map {
  constructor(n, e = Ci) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(xn(this, n));
  }
  has(n) {
    return super.has(xn(this, n));
  }
  set(n, e) {
    return super.set(Ei(this, n), e);
  }
  delete(n) {
    return super.delete(Si(this, n));
  }
}
function xn({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function Ei({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function Si({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function Ci(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var Wt = Math.sqrt(50), Ut = Math.sqrt(10), Gt = Math.sqrt(2);
function Ri(t, n, e) {
  var r, i = -1, o, a, s;
  if (n = +n, t = +t, e = +e, t === n && e > 0)
    return [t];
  if ((r = n < t) && (o = t, t = n, n = o), (s = ue(t, n, e)) === 0 || !isFinite(s))
    return [];
  if (s > 0) {
    let u = Math.round(t / s), l = Math.round(n / s);
    for (u * s < t && ++u, l * s > n && --l, a = new Array(o = l - u + 1); ++i < o; )
      a[i] = (u + i) * s;
  } else {
    s = -s;
    let u = Math.round(t * s), l = Math.round(n * s);
    for (u / s < t && ++u, l / s > n && --l, a = new Array(o = l - u + 1); ++i < o; )
      a[i] = (u + i) / s;
  }
  return r && a.reverse(), a;
}
function ue(t, n, e) {
  var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
  return i >= 0 ? (o >= Wt ? 10 : o >= Ut ? 5 : o >= Gt ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Wt ? 10 : o >= Ut ? 5 : o >= Gt ? 2 : 1);
}
function Ti(t, n, e) {
  var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
  return o >= Wt ? i *= 10 : o >= Ut ? i *= 5 : o >= Gt && (i *= 2), n < t ? -i : i;
}
function Fi(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function an(t, n) {
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
const _n = Symbol("implicit");
function le() {
  var t = new wn(), n = [], e = [], r = _n;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== _n)
        return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new wn();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return le(n, e).unknown(r);
  }, an.apply(i, arguments), i;
}
function ce() {
  var t = le().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, s = !1, u = 0, l = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var f = n().length, d = i < r, g = d ? i : r, p = d ? r : i;
    o = (p - g) / Math.max(1, f - u + l * 2), s && (o = Math.floor(o)), g += (p - g - o * (f - u)) * c, a = o * (1 - u), s && (g = Math.round(g), a = Math.round(a));
    var _ = Fi(f).map(function(b) {
      return g + o * b;
    });
    return e(d ? _.reverse() : _);
  }
  return t.domain = function(f) {
    return arguments.length ? (n(f), h()) : n();
  }, t.range = function(f) {
    return arguments.length ? ([r, i] = f, r = +r, i = +i, h()) : [r, i];
  }, t.rangeRound = function(f) {
    return [r, i] = f, r = +r, i = +i, s = !0, h();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(f) {
    return arguments.length ? (s = !!f, h()) : s;
  }, t.padding = function(f) {
    return arguments.length ? (u = Math.min(1, l = +f), h()) : u;
  }, t.paddingInner = function(f) {
    return arguments.length ? (u = Math.min(1, f), h()) : u;
  }, t.paddingOuter = function(f) {
    return arguments.length ? (l = +f, h()) : l;
  }, t.align = function(f) {
    return arguments.length ? (c = Math.max(0, Math.min(1, f)), h()) : c;
  }, t.copy = function() {
    return ce(n(), [r, i]).round(s).paddingInner(u).paddingOuter(l).align(c);
  }, an.apply(h(), arguments);
}
function sn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function fe(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function ct() {
}
var at = 0.7, $t = 1 / at, J = "\\s*([+-]?\\d+)\\s*", st = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", P = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ii = /^#([0-9a-f]{3,8})$/, Pi = new RegExp(`^rgb\\(${J},${J},${J}\\)$`), Li = new RegExp(`^rgb\\(${P},${P},${P}\\)$`), Di = new RegExp(`^rgba\\(${J},${J},${J},${st}\\)$`), Hi = new RegExp(`^rgba\\(${P},${P},${P},${st}\\)$`), Oi = new RegExp(`^hsl\\(${st},${P},${P}\\)$`), qi = new RegExp(`^hsla\\(${st},${P},${P},${st}\\)$`), vn = {
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
sn(ct, U, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: bn,
  formatHex: bn,
  formatHex8: zi,
  formatHsl: Xi,
  formatRgb: kn,
  toString: kn
});
function bn() {
  return this.rgb().formatHex();
}
function zi() {
  return this.rgb().formatHex8();
}
function Xi() {
  return he(this).formatHsl();
}
function kn() {
  return this.rgb().formatRgb();
}
function U(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ii.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Mn(n) : e === 3 ? new A(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? pt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? pt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Pi.exec(t)) ? new A(n[1], n[2], n[3], 1) : (n = Li.exec(t)) ? new A(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Di.exec(t)) ? pt(n[1], n[2], n[3], n[4]) : (n = Hi.exec(t)) ? pt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Oi.exec(t)) ? $n(n[1], n[2] / 100, n[3] / 100, 1) : (n = qi.exec(t)) ? $n(n[1], n[2] / 100, n[3] / 100, n[4]) : vn.hasOwnProperty(t) ? Mn(vn[t]) : t === "transparent" ? new A(NaN, NaN, NaN, 0) : null;
}
function Mn(t) {
  return new A(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function pt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new A(t, n, e, r);
}
function Vi(t) {
  return t instanceof ct || (t = U(t)), t ? (t = t.rgb(), new A(t.r, t.g, t.b, t.opacity)) : new A();
}
function Kt(t, n, e, r) {
  return arguments.length === 1 ? Vi(t) : new A(t, n, e, r == null ? 1 : r);
}
function A(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
sn(A, Kt, fe(ct, {
  brighter(t) {
    return t = t == null ? $t : Math.pow($t, t), new A(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? at : Math.pow(at, t), new A(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new A(W(this.r), W(this.g), W(this.b), Et(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Nn,
  formatHex: Nn,
  formatHex8: Yi,
  formatRgb: An,
  toString: An
}));
function Nn() {
  return `#${V(this.r)}${V(this.g)}${V(this.b)}`;
}
function Yi() {
  return `#${V(this.r)}${V(this.g)}${V(this.b)}${V((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function An() {
  const t = Et(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${W(this.r)}, ${W(this.g)}, ${W(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Et(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function W(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function V(t) {
  return t = W(t), (t < 16 ? "0" : "") + t.toString(16);
}
function $n(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new T(t, n, e, r);
}
function he(t) {
  if (t instanceof T)
    return new T(t.h, t.s, t.l, t.opacity);
  if (t instanceof ct || (t = U(t)), !t)
    return new T();
  if (t instanceof T)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new T(a, s, u, t.opacity);
}
function Bi(t, n, e, r) {
  return arguments.length === 1 ? he(t) : new T(t, n, e, r == null ? 1 : r);
}
function T(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
sn(T, Bi, fe(ct, {
  brighter(t) {
    return t = t == null ? $t : Math.pow($t, t), new T(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? at : Math.pow(at, t), new T(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new A(
      qt(t >= 240 ? t - 240 : t + 120, i, r),
      qt(t, i, r),
      qt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new T(En(this.h), mt(this.s), mt(this.l), Et(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Et(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${En(this.h)}, ${mt(this.s) * 100}%, ${mt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function En(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function mt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function qt(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const un = (t) => () => t;
function Wi(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Ui(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Gi(t) {
  return (t = +t) == 1 ? de : function(n, e) {
    return e - n ? Ui(n, e, t) : un(isNaN(n) ? e : n);
  };
}
function de(t, n) {
  var e = n - t;
  return e ? Wi(t, e) : un(isNaN(t) ? n : t);
}
const St = function t(n) {
  var e = Gi(n);
  function r(i, o) {
    var a = e((i = Kt(i)).r, (o = Kt(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = de(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ki(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Zi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ji(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = ln(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](s);
    return o;
  };
}
function Qi(t, n) {
  var e = new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function R(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ji(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ln(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var Zt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, zt = new RegExp(Zt.source, "g");
function to(t) {
  return function() {
    return t;
  };
}
function no(t) {
  return function(n) {
    return t(n) + "";
  };
}
function ge(t, n) {
  var e = Zt.lastIndex = zt.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = Zt.exec(t)) && (i = zt.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: R(r, i) })), e = zt.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? no(u[0].x) : to(n) : (n = u.length, function(l) {
    for (var c = 0, h; c < n; ++c)
      s[(h = u[c]).i] = h.x(l);
    return s.join("");
  });
}
function ln(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? un(n) : (e === "number" ? R : e === "string" ? (r = U(n)) ? (n = r, St) : ge : n instanceof U ? St : n instanceof Date ? Qi : Zi(n) ? Ki : Array.isArray(n) ? Ji : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ji : R)(t, n);
}
function eo(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Sn = 180 / Math.PI, Jt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function pe(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Sn,
    skewX: Math.atan(u) * Sn,
    scaleX: a,
    scaleY: s
  };
}
var yt;
function ro(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Jt : pe(n.a, n.b, n.c, n.d, n.e, n.f);
}
function io(t) {
  return t == null || (yt || (yt = document.createElementNS("http://www.w3.org/2000/svg", "g")), yt.setAttribute("transform", t), !(t = yt.transform.baseVal.consolidate())) ? Jt : (t = t.matrix, pe(t.a, t.b, t.c, t.d, t.e, t.f));
}
function me(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, h, f, d, g) {
    if (l !== h || c !== f) {
      var p = d.push("translate(", null, n, null, e);
      g.push({ i: p - 4, x: R(l, h) }, { i: p - 2, x: R(c, f) });
    } else
      (h || f) && d.push("translate(" + h + n + f + e);
  }
  function a(l, c, h, f) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: R(l, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(l, c, h, f) {
    l !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: R(l, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function u(l, c, h, f, d, g) {
    if (l !== h || c !== f) {
      var p = d.push(i(d) + "scale(", null, ",", null, ")");
      g.push({ i: p - 4, x: R(l, h) }, { i: p - 2, x: R(c, f) });
    } else
      (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(l, c) {
    var h = [], f = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, h, f), a(l.rotate, c.rotate, h, f), s(l.skewX, c.skewX, h, f), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, h, f), l = c = null, function(d) {
      for (var g = -1, p = f.length, _; ++g < p; )
        h[(_ = f[g]).i] = _.x(d);
      return h.join("");
    };
  };
}
var oo = me(ro, "px, ", "px)", "deg)"), ao = me(io, ", ", ")", ")");
function so(t) {
  return function() {
    return t;
  };
}
function uo(t) {
  return +t;
}
var Cn = [0, 1];
function Z(t) {
  return t;
}
function Qt(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : so(isNaN(n) ? NaN : 0.5);
}
function lo(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function co(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Qt(i, r), o = e(a, o)) : (r = Qt(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function fo(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Qt(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = $i(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function ho(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function go() {
  var t = Cn, n = Cn, e = ln, r, i, o, a = Z, s, u, l;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Z && (a = lo(t[0], t[f - 1])), s = f > 2 ? fo : co, u = l = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (u || (u = s(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((l || (l = s(n, t.map(r), R)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, uo), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = eo, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Z, c()) : a !== Z;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, d) {
    return r = f, i = d, c();
  };
}
function po() {
  return go()(Z, Z);
}
function mo(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ct(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function tt(t) {
  return t = Ct(Math.abs(t)), t ? t[1] : NaN;
}
function yo(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function wo(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var xo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Rt(t) {
  if (!(n = xo.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new cn({
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
Rt.prototype = cn.prototype;
function cn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
cn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function _o(t) {
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
var ye;
function vo(t, n) {
  var e = Ct(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (ye = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Ct(t, Math.max(0, n + o - 1))[0];
}
function Rn(t, n) {
  var e = Ct(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Tn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: mo,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Rn(t * 100, n),
  r: Rn,
  s: vo,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Fn(t) {
  return t;
}
var In = Array.prototype.map, Pn = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function bo(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Fn : yo(In.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Fn : wo(In.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "\u2212" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(h) {
    h = Rt(h);
    var f = h.fill, d = h.align, g = h.sign, p = h.symbol, _ = h.zero, b = h.width, y = h.comma, w = h.precision, k = h.trim, x = h.type;
    x === "n" ? (y = !0, x = "g") : Tn[x] || (w === void 0 && (w = 12), k = !0, x = "g"), (_ || f === "0" && d === "=") && (_ = !0, f = "0", d = "=");
    var $ = p === "$" ? e : p === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", E = p === "$" ? r : /[%p]/.test(x) ? a : "", D = Tn[x], C = /[defgprs%]/.test(x);
    w = w === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function z(m) {
      var N = $, M = E, K, gn, ft;
      if (x === "c")
        M = D(m) + M, m = "";
      else {
        m = +m;
        var ht = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? u : D(Math.abs(m), w), k && (m = _o(m)), ht && +m == 0 && g !== "+" && (ht = !1), N = (ht ? g === "(" ? g : s : g === "-" || g === "(" ? "" : g) + N, M = (x === "s" ? Pn[8 + ye / 3] : "") + M + (ht && g === "(" ? ")" : ""), C) {
          for (K = -1, gn = m.length; ++K < gn; )
            if (ft = m.charCodeAt(K), 48 > ft || ft > 57) {
              M = (ft === 46 ? i + m.slice(K + 1) : m.slice(K)) + M, m = m.slice(0, K);
              break;
            }
        }
      }
      y && !_ && (m = n(m, 1 / 0));
      var dt = N.length + m.length + M.length, H = dt < b ? new Array(b - dt + 1).join(f) : "";
      switch (y && _ && (m = n(H + m, H.length ? b - M.length : 1 / 0), H = ""), d) {
        case "<":
          m = N + m + M + H;
          break;
        case "=":
          m = N + H + m + M;
          break;
        case "^":
          m = H.slice(0, dt = H.length >> 1) + N + m + M + H.slice(dt);
          break;
        default:
          m = H + N + m + M;
          break;
      }
      return o(m);
    }
    return z.toString = function() {
      return h + "";
    }, z;
  }
  function c(h, f) {
    var d = l((h = Rt(h), h.type = "f", h)), g = Math.max(-8, Math.min(8, Math.floor(tt(f) / 3))) * 3, p = Math.pow(10, -g), _ = Pn[8 + g / 3];
    return function(b) {
      return d(p * b) + _;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var wt, we, xe;
ko({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ko(t) {
  return wt = bo(t), we = wt.format, xe = wt.formatPrefix, wt;
}
function Mo(t) {
  return Math.max(0, -tt(Math.abs(t)));
}
function No(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(tt(n) / 3))) * 3 - tt(Math.abs(t)));
}
function Ao(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, tt(n) - tt(t)) + 1;
}
function $o(t, n, e, r) {
  var i = Ti(t, n, e), o;
  switch (r = Rt(r == null ? ",f" : r), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = No(i, a)) && (r.precision = o), xe(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ao(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Mo(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return we(r);
}
function Eo(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Ri(r[0], r[r.length - 1], e == null ? 10 : e);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return $o(i[0], i[i.length - 1], e == null ? 10 : e, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = ue(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function _e() {
  var t = po();
  return t.copy = function() {
    return ho(t, _e());
  }, an.apply(t, arguments), Eo(t);
}
const { abs: Xt, min: Ln, max: So, round: Dn } = Math, Co = (t, n, e, r) => {
  const [i, o] = Y({
    width: 0,
    height: 0,
    offsetWidth: 0
  }), [a, s] = Y({
    xScale: (f) => f,
    yScale: (f) => f
  }), [u, l] = Y({ first: 0, last: 0 }), c = pn(
    (f, d) => Xt(a.yScale(d) - a.yScale(f)) || 1,
    [a.yScale]
  ), h = pn(
    (f, d) => a.yScale(Ln(f, d)) - c(f, d) + X,
    [a.yScale]
  );
  return Q(() => {
    var D;
    if (!(n != null && n.length))
      return;
    const { clientWidth: f, clientHeight: d } = t.current, g = ce().range([20, f * e - 20]).domain(n.map(({ date: C }) => C)).padding(0.3), p = ((D = g.bandwidth) == null ? void 0 : D.call(g)) * 1.44, _ = p * n.length, b = r - _ + f - B[1] + X, y = Dn((Xt(b) - X) / p), w = Dn((Xt(b) + f - B[1]) / p) + 1, k = n.slice(y > 0 ? y : 0, w), x = Ln(...k.map(({ low: C }) => C)), $ = So(...k.map(({ high: C }) => C)), E = _e().domain([x - 20, $ + 20]).range([d - B[0] - X, X]);
    l({ first: y, last: w }), o({ width: f, height: d, offsetWidth: b }), s({ xScale: g, yScale: E });
  }, [e, r, n]), { utils: { scaledHeight: c, scaledY: h }, visibleRange: u, dimensions: i, scales: a };
};
var Ro = { value: () => {
} };
function ve() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new kt(e);
}
function kt(t) {
  this._ = t;
}
function To(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
kt.prototype = ve.prototype = {
  constructor: kt,
  on: function(t, n) {
    var e = this._, r = To(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = Fo(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = Hn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Hn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new kt(t);
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
function Fo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Hn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ro, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var nt = 0, it = 0, rt = 0, be = 1e3, Tt, ot, Ft = 0, G = 0, Lt = 0, ut = typeof performance == "object" && performance.now ? performance : Date, ke = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function fn() {
  return G || (ke(Io), G = ut.now() + Lt);
}
function Io() {
  G = 0;
}
function It() {
  this._call = this._time = this._next = null;
}
It.prototype = Me.prototype = {
  constructor: It,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? fn() : +e) + (n == null ? 0 : +n), !this._next && ot !== this && (ot ? ot._next = this : Tt = this, ot = this), this._call = t, this._time = e, jt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jt());
  }
};
function Me(t, n, e) {
  var r = new It();
  return r.restart(t, n, e), r;
}
function Po() {
  fn(), ++nt;
  for (var t = Tt, n; t; )
    (n = G - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --nt;
}
function On() {
  G = (Ft = ut.now()) + Lt, nt = it = 0;
  try {
    Po();
  } finally {
    nt = 0, Do(), G = 0;
  }
}
function Lo() {
  var t = ut.now(), n = t - Ft;
  n > be && (Lt -= n, Ft = t);
}
function Do() {
  for (var t, n = Tt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Tt = e);
  ot = t, jt(r);
}
function jt(t) {
  if (!nt) {
    it && (it = clearTimeout(it));
    var n = t - G;
    n > 24 ? (t < 1 / 0 && (it = setTimeout(On, t - ut.now() - Lt)), rt && (rt = clearInterval(rt))) : (rt || (Ft = ut.now(), rt = setInterval(Lo, be)), nt = 1, ke(On));
  }
}
function qn(t, n, e) {
  var r = new It();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Ho = ve("start", "end", "cancel", "interrupt"), Oo = [], Ne = 0, zn = 1, tn = 2, Mt = 3, Xn = 4, nn = 5, Nt = 6;
function Dt(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  qo(t, e, {
    name: n,
    index: r,
    group: i,
    on: Ho,
    tween: Oo,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ne
  });
}
function hn(t, n) {
  var e = I(t, n);
  if (e.state > Ne)
    throw new Error("too late; already scheduled");
  return e;
}
function L(t, n) {
  var e = I(t, n);
  if (e.state > Mt)
    throw new Error("too late; already running");
  return e;
}
function I(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function qo(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Me(o, 0, e.time);
  function o(l) {
    e.state = zn, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, h, f, d;
    if (e.state !== zn)
      return u();
    for (c in r)
      if (d = r[c], d.name === e.name) {
        if (d.state === Mt)
          return qn(a);
        d.state === Xn ? (d.state = Nt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < n && (d.state = Nt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (qn(function() {
      e.state === Mt && (e.state = Xn, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = tn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === tn) {
      for (e.state = Mt, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (d = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = nn, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === nn && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = Nt, e.timer.stop(), delete r[n];
    for (var l in r)
      return;
    delete t.__transition;
  }
}
function zo(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (!!e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > tn && r.state < nn, r.state = Nt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Xo(t) {
  return this.each(function() {
    zo(this, t);
  });
}
function Vo(t, n) {
  var e, r;
  return function() {
    var i = L(this, t), o = i.tween;
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
function Yo(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = L(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Bo(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = I(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Vo : Yo)(e, t, n));
}
function dn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = L(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return I(i, r).value[n];
  };
}
function Ae(t, n) {
  var e;
  return (typeof n == "number" ? R : n instanceof U ? St : (e = U(n)) ? (n = e, St) : ge)(t, n);
}
function Wo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Uo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Go(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ko(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Zo(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Jo(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Qo(t, n) {
  var e = Pt(t), r = e === "transform" ? ao : Ae;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Jo : Zo)(e, r, dn(this, "attr." + t, n)) : n == null ? (e.local ? Uo : Wo)(e) : (e.local ? Ko : Go)(e, r, n));
}
function jo(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function ta(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function na(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && ta(t, o)), e;
  }
  return i._value = n, i;
}
function ea(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && jo(t, o)), e;
  }
  return i._value = n, i;
}
function ra(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = Pt(t);
  return this.tween(e, (r.local ? na : ea)(r, n));
}
function ia(t, n) {
  return function() {
    hn(this, t).delay = +n.apply(this, arguments);
  };
}
function oa(t, n) {
  return n = +n, function() {
    hn(this, t).delay = n;
  };
}
function aa(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ia : oa)(n, t)) : I(this.node(), n).delay;
}
function sa(t, n) {
  return function() {
    L(this, t).duration = +n.apply(this, arguments);
  };
}
function ua(t, n) {
  return n = +n, function() {
    L(this, t).duration = n;
  };
}
function la(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? sa : ua)(n, t)) : I(this.node(), n).duration;
}
function ca(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    L(this, t).ease = n;
  };
}
function fa(t) {
  var n = this._id;
  return arguments.length ? this.each(ca(n, t)) : I(this.node(), n).ease;
}
function ha(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    L(this, t).ease = e;
  };
}
function da(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(ha(this._id, t));
}
function ga(t) {
  typeof t != "function" && (t = Jn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new q(r, this._parents, this._name, this._id);
}
function pa(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, h = a[s] = new Array(c), f, d = 0; d < c; ++d)
      (f = u[d] || l[d]) && (h[d] = f);
  for (; s < r; ++s)
    a[s] = n[s];
  return new q(a, this._parents, this._name, this._id);
}
function ma(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function ya(t, n, e) {
  var r, i, o = ma(n) ? hn : L;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function wa(t, n) {
  var e = this._id;
  return arguments.length < 2 ? I(this.node(), e).on.on(t) : this.each(ya(e, t, n));
}
function xa(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function _a() {
  return this.on("end.remove", xa(this._id));
}
function va(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = rn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, h, f = 0; f < u; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), l[f] = h, Dt(l[f], n, e, f, l, I(c, e)));
  return new q(o, this._parents, n, e);
}
function ba(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Zn(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, h = 0; h < l; ++h)
      if (c = u[h]) {
        for (var f = t.call(c, c.__data__, h, u), d, g = I(c, e), p = 0, _ = f.length; p < _; ++p)
          (d = f[p]) && Dt(d, n, e, p, f, g);
        o.push(f), a.push(c);
      }
  return new q(o, a, n, e);
}
var ka = lt.prototype.constructor;
function Ma() {
  return new ka(this._groups, this._parents);
}
function Na(t, n) {
  var e, r, i;
  return function() {
    var o = j(this, t), a = (this.style.removeProperty(t), j(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function $e(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Aa(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = j(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function $a(t, n, e) {
  var r, i, o;
  return function() {
    var a = j(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), j(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function Ea(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = L(this, t), l = u.on, c = u.value[o] == null ? s || (s = $e(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function Sa(t, n, e) {
  var r = (t += "") == "transform" ? oo : Ae;
  return n == null ? this.styleTween(t, Na(t, r)).on("end.style." + t, $e(t)) : typeof n == "function" ? this.styleTween(t, $a(t, r, dn(this, "style." + t, n))).each(Ea(this._id, t)) : this.styleTween(t, Aa(t, r, n), e).on("end.style." + t, null);
}
function Ca(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Ra(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Ca(t, a, e)), r;
  }
  return o._value = n, o;
}
function Ta(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Ra(t, n, e == null ? "" : e));
}
function Fa(t) {
  return function() {
    this.textContent = t;
  };
}
function Ia(t) {
  return function() {
    var n = t(this);
    this.textContent = n == null ? "" : n;
  };
}
function Pa(t) {
  return this.tween("text", typeof t == "function" ? Ia(dn(this, "text", t)) : Fa(t == null ? "" : t + ""));
}
function La(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Da(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && La(i)), n;
  }
  return r._value = t, r;
}
function Ha(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Da(t));
}
function Oa() {
  for (var t = this._name, n = this._id, e = Ee(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = I(u, n);
        Dt(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new q(r, this._parents, t, e);
}
function qa() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = L(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var za = 0;
function q(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Ee() {
  return ++za;
}
var O = lt.prototype;
q.prototype = {
  constructor: q,
  select: va,
  selectAll: ba,
  selectChild: O.selectChild,
  selectChildren: O.selectChildren,
  filter: ga,
  merge: pa,
  selection: Ma,
  transition: Oa,
  call: O.call,
  nodes: O.nodes,
  node: O.node,
  size: O.size,
  empty: O.empty,
  each: O.each,
  on: wa,
  attr: Qo,
  attrTween: ra,
  style: Sa,
  styleTween: Ta,
  text: Pa,
  textTween: Ha,
  remove: _a,
  tween: Bo,
  delay: aa,
  duration: la,
  ease: fa,
  easeVarying: da,
  end: qa,
  [Symbol.iterator]: O[Symbol.iterator]
};
function Xa(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Va = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Xa
};
function Ya(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ba(t) {
  var n, e;
  t instanceof q ? (n = t._id, t = t._name) : (n = Ee(), (e = Va).time = fn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Dt(u, t, n, l, a, e || Ya(u, n));
  return new q(r, this._parents, t, n);
}
lt.prototype.interrupt = Xo;
lt.prototype.transition = Ba;
const Wa = (t, n, e, r, i, o, a) => {
  const { xScale: s } = r, { offsetWidth: u } = i, { scaledHeight: l, scaledY: c } = o, { first: h, last: f } = a, d = Wn({}), g = () => Bt(t.current), p = (y, w = g()) => w.selectAll(`rect.${y}`).data(n), _ = (y) => {
    var w;
    return d.current[y] = (w = d.current[y]) != null ? w : g().append("g").classed(`${y}-group`, !0).attr("clip-path", "url(#chart-contents)"), d.current[y];
  }, b = (y, w) => {
    let k = p(y, _(y));
    return k.size() !== n.length && (k = k.enter().append("rect")), k.classed(y, !0).classed("is-offscreen", (x, $) => $ < h - 10 || $ > f + 10).transition().duration(_i).attr("width", () => y === "wicks" ? 1 : Number(s.bandwidth())).attr("height", (x) => l(x[w[0]], x[w[1]])).attr(
      "x",
      (x) => Number(s(x.date)) + (y === "wicks" ? (Number(s.bandwidth()) - 1) / 2 : 0) + u
    ).attr("y", (x) => c(x[w[0]], x[w[1]])), k.exit().remove(), k;
  };
  Q(() => {
    _("wicks").attr("fill", "grey"), _("candles");
  }, []), Q(() => {
    var y;
    (y = s == null ? void 0 : s.bandwidth) != null && y.call(s) && (b("wicks", ["low", "high"]), b("candles", ["open", "close"]).attr(
      "fill",
      (w) => w.close < w.open ? "red" : "green"
    ));
  }, [s]);
}, Vn = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Ua = "font-family: serif;", Ga = F.button(
  ({ status: t, minWidth: n, margin: e }) => en`
    ${Ua}
    border: 1px solid ${Vn[t]};
    color: ${Vn[t]};
    background-color: white;
    border-radius: 6px;
    min-width: ${n};
    padding: 8px;
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
), xt = ({
  children: t,
  status: n = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: r = "220px",
  margin: i = "10px",
  ...o
}) => /* @__PURE__ */ v.createElement(
  Ga,
  {
    status: n,
    ...o,
    minWidth: r,
    margin: i,
    "data-selector": e
  },
  t
), Ka = F.div`
  margin: 10px;
  position: absolute;
`, Yn = F.div(
  ({ rotate: t }) => en`
    rotate: ${t}deg;
  `
), Za = ({
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
  return /* @__PURE__ */ v.createElement(Ka, null, /* @__PURE__ */ v.createElement(
    xt,
    {
      ...a,
      onClick: () => e((s) => s + r * 100),
      disabled: i.first <= 0
    },
    /* @__PURE__ */ v.createElement(Yn, { rotate: -90 }, "\u{1F53A}")
  ), /* @__PURE__ */ v.createElement(
    xt,
    {
      ...a,
      onClick: () => n((s) => s > r ? s - r : r),
      disabled: t <= r * 2
    },
    "\u2796"
  ), /* @__PURE__ */ v.createElement(
    xt,
    {
      ...a,
      onClick: () => n((s) => s + r),
      disabled: t >= r * 30
    },
    "\u2795"
  ), /* @__PURE__ */ v.createElement(
    xt,
    {
      ...a,
      onClick: () => e((s) => s - r * 100),
      disabled: i.last >= o
    },
    /* @__PURE__ */ v.createElement(Yn, { rotate: 90 }, "\u{1F53A}")
  ));
}, Ja = ({ width: t, height: n }) => {
  const e = {
    x: 0,
    y: 0,
    width: t ? t - B[1] + X : 0,
    height: n ? n - B[0] : 0
  };
  return /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "chart-contents" }, /* @__PURE__ */ React.createElement("rect", { ...e })), /* @__PURE__ */ React.createElement("clipPath", { id: "bottom-axis" }, /* @__PURE__ */ React.createElement("rect", { ...e, height: `${n}` })));
}, Se = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Ce = Un`
  to {
    rotate: 360deg;
  }
`, Qa = Un`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, ja = F.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, ts = F.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Ce} 2s linear infinite;
  margin: 2px;
`, Bn = F.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, _t = F.div(
  ({ delay: t }) => en`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${Se.pending};
    animation: ${Qa} 0.3s linear alternate infinite;

    ${t ? "animation-delay: 0.2s;" : ""}
  `
);
F.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${Se.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${Ce} 2s linear infinite;
`;
const ns = () => /* @__PURE__ */ v.createElement(ja, { title: "Loading...", "data-selector": "pi-lib-loader" }, /* @__PURE__ */ v.createElement(ts, null, /* @__PURE__ */ v.createElement(Bn, null, /* @__PURE__ */ v.createElement(_t, { delay: !0 }), /* @__PURE__ */ v.createElement(_t, null)), /* @__PURE__ */ v.createElement(Bn, null, /* @__PURE__ */ v.createElement(_t, null), /* @__PURE__ */ v.createElement(_t, { delay: !0 })))), is = ({ data: t = [] }) => {
  const [n, e] = Y(t.length / 100 || 1), [r, i] = Y(0), o = Wn(null), { scales: a, dimensions: s, utils: u, visibleRange: l } = Co(
    o,
    t,
    n,
    r
  );
  return Wa(o, t, r, a, s, u, l), vi(o, t, r, a, s), Q(() => {
    e(t.length / 100 || 1);
  }, [t.length]), /* @__PURE__ */ v.createElement(Te, null, t != null && t.length ? /* @__PURE__ */ v.createElement(
    Za,
    {
      zoomLevel: n,
      setZoomLevel: e,
      setPanLevel: i,
      multiplier: t.length / 1e3,
      visibleRange: l,
      length: t.length
    }
  ) : /* @__PURE__ */ v.createElement(Fe, null, /* @__PURE__ */ v.createElement(ns, null)), /* @__PURE__ */ v.createElement(Re, { ref: o }, /* @__PURE__ */ v.createElement(Ja, { ...s })));
};
export {
  is as default
};
