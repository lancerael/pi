import Qt, { useState as Ut, useEffect as Me, useCallback as Hn, useRef as Ar } from "react";
import gt, { css as Cn, keyframes as Pr } from "styled-components";
const vi = gt.svg`
  width: 100%;
  height: 100%;

  & rect.is-offscreen {
    display: none;
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
`, _i = gt.div`
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
`, wi = gt.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function bi(t) {
  return t;
}
var dn = 1, Ge = 2, _n = 3, We = 4, qn = 1e-6;
function xi(t) {
  return "translate(" + t + ",0)";
}
function ki(t) {
  return "translate(0," + t + ")";
}
function Ei(t) {
  return (e) => +t(e);
}
function Si(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (r) => +t(r) + e;
}
function Ri() {
  return !this.__axis;
}
function Mr(t, e) {
  var r = [], i = null, o = null, a = 6, s = 6, c = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, h = t === dn || t === We ? -1 : 1, p = t === We || t === Ge ? "x" : "y", y = t === dn || t === _n ? xi : ki;
  function d(m) {
    var k = i == null ? e.ticks ? e.ticks.apply(e, r) : e.domain() : i, O = o == null ? e.tickFormat ? e.tickFormat.apply(e, r) : bi : o, $ = Math.max(a, 0) + c, R = e.range(), x = +R[0] + l, j = +R[R.length - 1] + l, L = (e.bandwidth ? Si : Ei)(e.copy(), l), P = m.selection ? m.selection() : m, z = P.selectAll(".domain").data([null]), M = P.selectAll(".tick").data(k, e).order(), X = M.exit(), W = M.enter().append("g").attr("class", "tick"), G = M.select("line"), C = M.select("text");
    z = z.merge(z.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), M = M.merge(W), G = G.merge(W.append("line").attr("stroke", "currentColor").attr(p + "2", h * a)), C = C.merge(W.append("text").attr("fill", "currentColor").attr(p, h * $).attr("dy", t === dn ? "0em" : t === _n ? "0.71em" : "0.32em")), m !== P && (z = z.transition(m), M = M.transition(m), G = G.transition(m), C = C.transition(m), X = X.transition(m).attr("opacity", qn).attr("transform", function(I) {
      return isFinite(I = L(I)) ? y(I + l) : this.getAttribute("transform");
    }), W.attr("opacity", qn).attr("transform", function(I) {
      var N = this.parentNode.__axis;
      return y((N && isFinite(N = N(I)) ? N : L(I)) + l);
    })), X.remove(), z.attr("d", t === We || t === Ge ? s ? "M" + h * s + "," + x + "H" + l + "V" + j + "H" + h * s : "M" + l + "," + x + "V" + j : s ? "M" + x + "," + h * s + "V" + l + "H" + j + "V" + h * s : "M" + x + "," + l + "H" + j), M.attr("opacity", 1).attr("transform", function(I) {
      return y(L(I) + l);
    }), G.attr(p + "2", h * a), C.attr(p, h * $).text(O), P.filter(Ri).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ge ? "start" : t === We ? "end" : "middle"), P.each(function() {
      this.__axis = L;
    });
  }
  return d.scale = function(m) {
    return arguments.length ? (e = m, d) : e;
  }, d.ticks = function() {
    return r = Array.from(arguments), d;
  }, d.tickArguments = function(m) {
    return arguments.length ? (r = m == null ? [] : Array.from(m), d) : r.slice();
  }, d.tickValues = function(m) {
    return arguments.length ? (i = m == null ? null : Array.from(m), d) : i && i.slice();
  }, d.tickFormat = function(m) {
    return arguments.length ? (o = m, d) : o;
  }, d.tickSize = function(m) {
    return arguments.length ? (a = s = +m, d) : a;
  }, d.tickSizeInner = function(m) {
    return arguments.length ? (a = +m, d) : a;
  }, d.tickSizeOuter = function(m) {
    return arguments.length ? (s = +m, d) : s;
  }, d.tickPadding = function(m) {
    return arguments.length ? (c = +m, d) : c;
  }, d.offset = function(m) {
    return arguments.length ? (l = +m, d) : l;
  }, d;
}
function Oi(t) {
  return Mr(Ge, t);
}
function $i(t) {
  return Mr(_n, t);
}
var wn = "http://www.w3.org/1999/xhtml";
const Bn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: wn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function fn(t) {
  var e = t += "", r = e.indexOf(":");
  return r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)), Bn.hasOwnProperty(e) ? { space: Bn[e], local: t } : t;
}
function Ni(t) {
  return function() {
    var e = this.ownerDocument, r = this.namespaceURI;
    return r === wn && e.documentElement.namespaceURI === wn ? e.createElement(t) : e.createElementNS(r, t);
  };
}
function Ti(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Fr(t) {
  var e = fn(t);
  return (e.local ? Ti : Ni)(e);
}
function Ci() {
}
function An(t) {
  return t == null ? Ci : function() {
    return this.querySelector(t);
  };
}
function Ai(t) {
  typeof t != "function" && (t = An(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), l, h, p = 0; p < s; ++p)
      (l = a[p]) && (h = t.call(l, l.__data__, p, a)) && ("__data__" in l && (h.__data__ = l.__data__), c[p] = h);
  return new ot(i, this._parents);
}
function Pi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Mi() {
  return [];
}
function jr(t) {
  return t == null ? Mi : function() {
    return this.querySelectorAll(t);
  };
}
function Fi(t) {
  return function() {
    return Pi(t.apply(this, arguments));
  };
}
function ji(t) {
  typeof t == "function" ? t = Fi(t) : t = jr(t);
  for (var e = this._groups, r = e.length, i = [], o = [], a = 0; a < r; ++a)
    for (var s = e[a], c = s.length, l, h = 0; h < c; ++h)
      (l = s[h]) && (i.push(t.call(l, l.__data__, h, s)), o.push(l));
  return new ot(i, o);
}
function Dr(t) {
  return function() {
    return this.matches(t);
  };
}
function Ir(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Di = Array.prototype.find;
function Ii(t) {
  return function() {
    return Di.call(this.children, t);
  };
}
function Li() {
  return this.firstElementChild;
}
function Wi(t) {
  return this.select(t == null ? Li : Ii(typeof t == "function" ? t : Ir(t)));
}
var Yi = Array.prototype.filter;
function Vi() {
  return Array.from(this.children);
}
function Ui(t) {
  return function() {
    return Yi.call(this.children, t);
  };
}
function zi(t) {
  return this.selectAll(t == null ? Vi : Ui(typeof t == "function" ? t : Ir(t)));
}
function Hi(t) {
  typeof t != "function" && (t = Dr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], l, h = 0; h < s; ++h)
      (l = a[h]) && t.call(l, l.__data__, h, a) && c.push(l);
  return new ot(i, this._parents);
}
function Lr(t) {
  return new Array(t.length);
}
function qi() {
  return new ot(this._enter || this._groups.map(Lr), this._parents);
}
function en(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
en.prototype = {
  constructor: en,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Bi(t) {
  return function() {
    return t;
  };
}
function Xi(t, e, r, i, o, a) {
  for (var s = 0, c, l = e.length, h = a.length; s < h; ++s)
    (c = e[s]) ? (c.__data__ = a[s], i[s] = c) : r[s] = new en(t, a[s]);
  for (; s < l; ++s)
    (c = e[s]) && (o[s] = c);
}
function Gi(t, e, r, i, o, a, s) {
  var c, l, h = /* @__PURE__ */ new Map(), p = e.length, y = a.length, d = new Array(p), m;
  for (c = 0; c < p; ++c)
    (l = e[c]) && (d[c] = m = s.call(l, l.__data__, c, e) + "", h.has(m) ? o[c] = l : h.set(m, l));
  for (c = 0; c < y; ++c)
    m = s.call(t, a[c], c, a) + "", (l = h.get(m)) ? (i[c] = l, l.__data__ = a[c], h.delete(m)) : r[c] = new en(t, a[c]);
  for (c = 0; c < p; ++c)
    (l = e[c]) && h.get(d[c]) === l && (o[c] = l);
}
function Ji(t) {
  return t.__data__;
}
function Ki(t, e) {
  if (!arguments.length)
    return Array.from(this, Ji);
  var r = e ? Gi : Xi, i = this._parents, o = this._groups;
  typeof t != "function" && (t = Bi(t));
  for (var a = o.length, s = new Array(a), c = new Array(a), l = new Array(a), h = 0; h < a; ++h) {
    var p = i[h], y = o[h], d = y.length, m = Zi(t.call(p, p && p.__data__, h, i)), k = m.length, O = c[h] = new Array(k), $ = s[h] = new Array(k), R = l[h] = new Array(d);
    r(p, y, O, $, R, m, e);
    for (var x = 0, j = 0, L, P; x < k; ++x)
      if (L = O[x]) {
        for (x >= j && (j = x + 1); !(P = $[j]) && ++j < k; )
          ;
        L._next = P || null;
      }
  }
  return s = new ot(s, i), s._enter = c, s._exit = l, s;
}
function Zi(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Qi() {
  return new ot(this._exit || this._groups.map(Lr), this._parents);
}
function to(t, e, r) {
  var i = this.enter(), o = this, a = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), r == null ? a.remove() : r(a), i && o ? i.merge(o).order() : o;
}
function eo(t) {
  for (var e = t.selection ? t.selection() : t, r = this._groups, i = e._groups, o = r.length, a = i.length, s = Math.min(o, a), c = new Array(o), l = 0; l < s; ++l)
    for (var h = r[l], p = i[l], y = h.length, d = c[l] = new Array(y), m, k = 0; k < y; ++k)
      (m = h[k] || p[k]) && (d[k] = m);
  for (; l < o; ++l)
    c[l] = r[l];
  return new ot(c, this._parents);
}
function no() {
  for (var t = this._groups, e = -1, r = t.length; ++e < r; )
    for (var i = t[e], o = i.length - 1, a = i[o], s; --o >= 0; )
      (s = i[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function ro(t) {
  t || (t = io);
  function e(y, d) {
    return y && d ? t(y.__data__, d.__data__) : !y - !d;
  }
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
    for (var s = r[a], c = s.length, l = o[a] = new Array(c), h, p = 0; p < c; ++p)
      (h = s[p]) && (l[p] = h);
    l.sort(e);
  }
  return new ot(o, this._parents).order();
}
function io(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function oo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ao() {
  return Array.from(this);
}
function so() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length; o < a; ++o) {
      var s = i[o];
      if (s)
        return s;
    }
  return null;
}
function uo() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function co() {
  return !this.node();
}
function lo(t) {
  for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
    for (var o = e[r], a = 0, s = o.length, c; a < s; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o);
  return this;
}
function fo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ho(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function po(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function yo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function go(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function mo(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
  };
}
function vo(t, e) {
  var r = fn(t);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((e == null ? r.local ? ho : fo : typeof e == "function" ? r.local ? mo : go : r.local ? yo : po)(r, e));
}
function Wr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function _o(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wo(t, e, r) {
  return function() {
    this.style.setProperty(t, e, r);
  };
}
function bo(t, e, r) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, r);
  };
}
function xo(t, e, r) {
  return arguments.length > 1 ? this.each((e == null ? _o : typeof e == "function" ? bo : wo)(t, e, r == null ? "" : r)) : Gt(this.node(), t);
}
function Gt(t, e) {
  return t.style.getPropertyValue(e) || Wr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function ko(t) {
  return function() {
    delete this[t];
  };
}
function Eo(t, e) {
  return function() {
    this[t] = e;
  };
}
function So(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? delete this[t] : this[t] = r;
  };
}
function Ro(t, e) {
  return arguments.length > 1 ? this.each((e == null ? ko : typeof e == "function" ? So : Eo)(t, e)) : this.node()[t];
}
function Yr(t) {
  return t.trim().split(/^|\s+/);
}
function Pn(t) {
  return t.classList || new Vr(t);
}
function Vr(t) {
  this._node = t, this._names = Yr(t.getAttribute("class") || "");
}
Vr.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ur(t, e) {
  for (var r = Pn(t), i = -1, o = e.length; ++i < o; )
    r.add(e[i]);
}
function zr(t, e) {
  for (var r = Pn(t), i = -1, o = e.length; ++i < o; )
    r.remove(e[i]);
}
function Oo(t) {
  return function() {
    Ur(this, t);
  };
}
function $o(t) {
  return function() {
    zr(this, t);
  };
}
function No(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ur : zr)(this, t);
  };
}
function To(t, e) {
  var r = Yr(t + "");
  if (arguments.length < 2) {
    for (var i = Pn(this.node()), o = -1, a = r.length; ++o < a; )
      if (!i.contains(r[o]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? No : e ? Oo : $o)(r, e));
}
function Co() {
  this.textContent = "";
}
function Ao(t) {
  return function() {
    this.textContent = t;
  };
}
function Po(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e == null ? "" : e;
  };
}
function Mo(t) {
  return arguments.length ? this.each(t == null ? Co : (typeof t == "function" ? Po : Ao)(t)) : this.node().textContent;
}
function Fo() {
  this.innerHTML = "";
}
function jo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Do(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e == null ? "" : e;
  };
}
function Io(t) {
  return arguments.length ? this.each(t == null ? Fo : (typeof t == "function" ? Do : jo)(t)) : this.node().innerHTML;
}
function Lo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Wo() {
  return this.each(Lo);
}
function Yo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Vo() {
  return this.each(Yo);
}
function Uo(t) {
  var e = typeof t == "function" ? t : Fr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function zo() {
  return null;
}
function Ho(t, e) {
  var r = typeof t == "function" ? t : Fr(t), i = e == null ? zo : typeof e == "function" ? e : An(e);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function qo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Bo() {
  return this.each(qo);
}
function Xo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Go() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Jo(t) {
  return this.select(t ? Go : Xo);
}
function Ko(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Zo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Qo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    return i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: r };
  });
}
function ta(t) {
  return function() {
    var e = this.__on;
    if (!!e) {
      for (var r = 0, i = -1, o = e.length, a; r < o; ++r)
        a = e[r], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++i] = a;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function ea(t, e, r) {
  return function() {
    var i = this.__on, o, a = Zo(e);
    if (i) {
      for (var s = 0, c = i.length; s < c; ++s)
        if ((o = i[s]).type === t.type && o.name === t.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = r), o.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, r), o = { type: t.type, name: t.name, value: e, listener: a, options: r }, i ? i.push(o) : this.__on = [o];
  };
}
function na(t, e, r) {
  var i = Qo(t + ""), o, a = i.length, s;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var l = 0, h = c.length, p; l < h; ++l)
        for (o = 0, p = c[l]; o < a; ++o)
          if ((s = i[o]).type === p.type && s.name === p.name)
            return p.value;
    }
    return;
  }
  for (c = e ? ea : ta, o = 0; o < a; ++o)
    this.each(c(i[o], e, r));
  return this;
}
function Hr(t, e, r) {
  var i = Wr(t), o = i.CustomEvent;
  typeof o == "function" ? o = new o(e, r) : (o = i.document.createEvent("Event"), r ? (o.initEvent(e, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function ra(t, e) {
  return function() {
    return Hr(this, t, e);
  };
}
function ia(t, e) {
  return function() {
    return Hr(this, t, e.apply(this, arguments));
  };
}
function oa(t, e) {
  return this.each((typeof e == "function" ? ia : ra)(t, e));
}
function* aa() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && (yield s);
}
var qr = [null];
function ot(t, e) {
  this._groups = t, this._parents = e;
}
function Ie() {
  return new ot([[document.documentElement]], qr);
}
function sa() {
  return this;
}
ot.prototype = Ie.prototype = {
  constructor: ot,
  select: Ai,
  selectAll: ji,
  selectChild: Wi,
  selectChildren: zi,
  filter: Hi,
  data: Ki,
  enter: qi,
  exit: Qi,
  join: to,
  merge: eo,
  selection: sa,
  order: no,
  sort: ro,
  call: oo,
  nodes: ao,
  node: so,
  size: uo,
  empty: co,
  each: lo,
  attr: vo,
  style: xo,
  property: Ro,
  classed: To,
  text: Mo,
  html: Io,
  raise: Wo,
  lower: Vo,
  append: Uo,
  insert: Ho,
  remove: Bo,
  clone: Jo,
  datum: Ko,
  on: na,
  dispatch: oa,
  [Symbol.iterator]: aa
};
function Je(t) {
  return typeof t == "string" ? new ot([[document.querySelector(t)]], [document.documentElement]) : new ot([[t]], qr);
}
const ua = 500, vt = 10, Jt = [65, 55], yn = {}, Se = (t = "", e, r) => {
  var y;
  const i = Math.round((y = r.bandwidth) == null ? void 0 : y.call(r)) || 0, o = `${t}-${e}-${i}`;
  if (yn[o] !== void 0)
    return yn[o];
  let a = "";
  const s = new Date(t), [c, l, h] = t.split("-");
  h === "01" && (l === "01" ? a = c : a = s.toLocaleString("en-UK", {
    month: "short"
  }));
  let p = [];
  return i > 1 && p.push(16), i > 3 && p.push(8, 24), i > 7 && (p = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), p.includes(Number(h)) && (a = h), r.domain().length - 1 === e && (a = h), yn[o] = a, a;
}, ca = (t, e, r, i, o) => {
  const [a, s] = Ut(), [c, l] = Ut(), { xScale: h, yScale: p } = i, { width: y, height: d, offsetWidth: m } = o;
  Me(() => {
    !t.current || (Je(t.current).select("g.x-axis, y.y-axis").remove(), s(
      Je(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), l(Je(t.current).append("g").classed("y-axis", !0)));
  }, []), Me(() => {
    !h.domain || !e || (a.call($i(h)).attr(
      "transform",
      `translate(${m},${d - Jt[0]})`
    ).selectAll("text").classed(
      "emphasise",
      (k, O) => Se(k, O, h).length > 2
    ).attr(
      "x",
      (k, O) => Se(k, O, h).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((k, O) => Se(k, O, h)), a.selectAll("line").attr(
      "stroke",
      (k, O) => Se(k, O, h).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (k, O) => Se(k, O, h).length ? 12 : 6
    ), c.call(Oi(p)).attr(
      "transform",
      `translate(${y - Jt[1] + vt},${vt})`
    ));
  }, [h, p]);
};
function Ke(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function la(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Br(t) {
  let e, r, i;
  t.length !== 2 ? (e = Ke, r = (c, l) => Ke(t(c), l), i = (c, l) => t(c) - l) : (e = t === Ke || t === la ? t : fa, r = t, i = t);
  function o(c, l, h = 0, p = c.length) {
    if (h < p) {
      if (e(l, l) !== 0)
        return p;
      do {
        const y = h + p >>> 1;
        r(c[y], l) < 0 ? h = y + 1 : p = y;
      } while (h < p);
    }
    return h;
  }
  function a(c, l, h = 0, p = c.length) {
    if (h < p) {
      if (e(l, l) !== 0)
        return p;
      do {
        const y = h + p >>> 1;
        r(c[y], l) <= 0 ? h = y + 1 : p = y;
      } while (h < p);
    }
    return h;
  }
  function s(c, l, h = 0, p = c.length) {
    const y = o(c, l, h, p - 1);
    return y > h && i(c[y - 1], l) > -i(c[y], l) ? y - 1 : y;
  }
  return { left: o, center: s, right: a };
}
function fa() {
  return 0;
}
function ha(t) {
  return t === null ? NaN : +t;
}
const pa = Br(Ke), da = pa.right;
Br(ha).center;
const ya = da;
class Xn extends Map {
  constructor(e, r = va) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), e != null)
      for (const [i, o] of e)
        this.set(i, o);
  }
  get(e) {
    return super.get(Gn(this, e));
  }
  has(e) {
    return super.has(Gn(this, e));
  }
  set(e, r) {
    return super.set(ga(this, e), r);
  }
  delete(e) {
    return super.delete(ma(this, e));
  }
}
function Gn({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : r;
}
function ga({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : (t.set(i, r), r);
}
function ma({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) && (r = t.get(i), t.delete(i)), r;
}
function va(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var bn = Math.sqrt(50), xn = Math.sqrt(10), kn = Math.sqrt(2);
function _a(t, e, r) {
  var i, o = -1, a, s, c;
  if (e = +e, t = +t, r = +r, t === e && r > 0)
    return [t];
  if ((i = e < t) && (a = t, t = e, e = a), (c = Xr(t, e, r)) === 0 || !isFinite(c))
    return [];
  if (c > 0) {
    let l = Math.round(t / c), h = Math.round(e / c);
    for (l * c < t && ++l, h * c > e && --h, s = new Array(a = h - l + 1); ++o < a; )
      s[o] = (l + o) * c;
  } else {
    c = -c;
    let l = Math.round(t * c), h = Math.round(e * c);
    for (l / c < t && ++l, h / c > e && --h, s = new Array(a = h - l + 1); ++o < a; )
      s[o] = (l + o) / c;
  }
  return i && s.reverse(), s;
}
function Xr(t, e, r) {
  var i = (e - t) / Math.max(0, r), o = Math.floor(Math.log(i) / Math.LN10), a = i / Math.pow(10, o);
  return o >= 0 ? (a >= bn ? 10 : a >= xn ? 5 : a >= kn ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= bn ? 10 : a >= xn ? 5 : a >= kn ? 2 : 1);
}
function wa(t, e, r) {
  var i = Math.abs(e - t) / Math.max(0, r), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), a = i / o;
  return a >= bn ? o *= 10 : a >= xn ? o *= 5 : a >= kn && (o *= 2), e < t ? -o : o;
}
function ba(t, e, r) {
  t = +t, e = +e, r = (o = arguments.length) < 2 ? (e = t, t = 0, 1) : o < 3 ? 1 : +r;
  for (var i = -1, o = Math.max(0, Math.ceil((e - t) / r)) | 0, a = new Array(o); ++i < o; )
    a[i] = t + i * r;
  return a;
}
function Mn(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const Jn = Symbol("implicit");
function Gr() {
  var t = new Xn(), e = [], r = [], i = Jn;
  function o(a) {
    let s = t.get(a);
    if (s === void 0) {
      if (i !== Jn)
        return i;
      t.set(a, s = e.push(a) - 1);
    }
    return r[s % r.length];
  }
  return o.domain = function(a) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new Xn();
    for (const s of a)
      t.has(s) || t.set(s, e.push(s) - 1);
    return o;
  }, o.range = function(a) {
    return arguments.length ? (r = Array.from(a), o) : r.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (i = a, o) : i;
  }, o.copy = function() {
    return Gr(e, r).unknown(i);
  }, Mn.apply(o, arguments), o;
}
function Jr() {
  var t = Gr().unknown(void 0), e = t.domain, r = t.range, i = 0, o = 1, a, s, c = !1, l = 0, h = 0, p = 0.5;
  delete t.unknown;
  function y() {
    var d = e().length, m = o < i, k = m ? o : i, O = m ? i : o;
    a = (O - k) / Math.max(1, d - l + h * 2), c && (a = Math.floor(a)), k += (O - k - a * (d - l)) * p, s = a * (1 - l), c && (k = Math.round(k), s = Math.round(s));
    var $ = ba(d).map(function(R) {
      return k + a * R;
    });
    return r(m ? $.reverse() : $);
  }
  return t.domain = function(d) {
    return arguments.length ? (e(d), y()) : e();
  }, t.range = function(d) {
    return arguments.length ? ([i, o] = d, i = +i, o = +o, y()) : [i, o];
  }, t.rangeRound = function(d) {
    return [i, o] = d, i = +i, o = +o, c = !0, y();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return a;
  }, t.round = function(d) {
    return arguments.length ? (c = !!d, y()) : c;
  }, t.padding = function(d) {
    return arguments.length ? (l = Math.min(1, h = +d), y()) : l;
  }, t.paddingInner = function(d) {
    return arguments.length ? (l = Math.min(1, d), y()) : l;
  }, t.paddingOuter = function(d) {
    return arguments.length ? (h = +d, y()) : h;
  }, t.align = function(d) {
    return arguments.length ? (p = Math.max(0, Math.min(1, d)), y()) : p;
  }, t.copy = function() {
    return Jr(e(), [i, o]).round(c).paddingInner(l).paddingOuter(h).align(p);
  }, Mn.apply(y(), arguments);
}
function Fn(t, e, r) {
  t.prototype = e.prototype = r, r.constructor = t;
}
function Kr(t, e) {
  var r = Object.create(t.prototype);
  for (var i in e)
    r[i] = e[i];
  return r;
}
function Le() {
}
var Fe = 0.7, nn = 1 / Fe, Xt = "\\s*([+-]?\\d+)\\s*", je = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", _t = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", xa = /^#([0-9a-f]{3,8})$/, ka = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), Ea = new RegExp(`^rgb\\(${_t},${_t},${_t}\\)$`), Sa = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${je}\\)$`), Ra = new RegExp(`^rgba\\(${_t},${_t},${_t},${je}\\)$`), Oa = new RegExp(`^hsl\\(${je},${_t},${_t}\\)$`), $a = new RegExp(`^hsla\\(${je},${_t},${_t},${je}\\)$`), Kn = {
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
Fn(Le, Ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Zn,
  formatHex: Zn,
  formatHex8: Na,
  formatHsl: Ta,
  formatRgb: Qn,
  toString: Qn
});
function Zn() {
  return this.rgb().formatHex();
}
function Na() {
  return this.rgb().formatHex8();
}
function Ta() {
  return Zr(this).formatHsl();
}
function Qn() {
  return this.rgb().formatRgb();
}
function Ht(t) {
  var e, r;
  return t = (t + "").trim().toLowerCase(), (e = xa.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? tr(e) : r === 3 ? new et(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? Ye(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? Ye(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ka.exec(t)) ? new et(e[1], e[2], e[3], 1) : (e = Ea.exec(t)) ? new et(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Sa.exec(t)) ? Ye(e[1], e[2], e[3], e[4]) : (e = Ra.exec(t)) ? Ye(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Oa.exec(t)) ? rr(e[1], e[2] / 100, e[3] / 100, 1) : (e = $a.exec(t)) ? rr(e[1], e[2] / 100, e[3] / 100, e[4]) : Kn.hasOwnProperty(t) ? tr(Kn[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function tr(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ye(t, e, r, i) {
  return i <= 0 && (t = e = r = NaN), new et(t, e, r, i);
}
function Ca(t) {
  return t instanceof Le || (t = Ht(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function En(t, e, r, i) {
  return arguments.length === 1 ? Ca(t) : new et(t, e, r, i == null ? 1 : i);
}
function et(t, e, r, i) {
  this.r = +t, this.g = +e, this.b = +r, this.opacity = +i;
}
Fn(et, En, Kr(Le, {
  brighter(t) {
    return t = t == null ? nn : Math.pow(nn, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fe : Math.pow(Fe, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new et(zt(this.r), zt(this.g), zt(this.b), rn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: er,
  formatHex: er,
  formatHex8: Aa,
  formatRgb: nr,
  toString: nr
}));
function er() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}`;
}
function Aa() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}${Vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nr() {
  const t = rn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${zt(this.r)}, ${zt(this.g)}, ${zt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function rn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function zt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Vt(t) {
  return t = zt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function rr(t, e, r, i) {
  return i <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new yt(t, e, r, i);
}
function Zr(t) {
  if (t instanceof yt)
    return new yt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Le || (t = Ht(t)), !t)
    return new yt();
  if (t instanceof yt)
    return t;
  t = t.rgb();
  var e = t.r / 255, r = t.g / 255, i = t.b / 255, o = Math.min(e, r, i), a = Math.max(e, r, i), s = NaN, c = a - o, l = (a + o) / 2;
  return c ? (e === a ? s = (r - i) / c + (r < i) * 6 : r === a ? s = (i - e) / c + 2 : s = (e - r) / c + 4, c /= l < 0.5 ? a + o : 2 - a - o, s *= 60) : c = l > 0 && l < 1 ? 0 : s, new yt(s, c, l, t.opacity);
}
function Pa(t, e, r, i) {
  return arguments.length === 1 ? Zr(t) : new yt(t, e, r, i == null ? 1 : i);
}
function yt(t, e, r, i) {
  this.h = +t, this.s = +e, this.l = +r, this.opacity = +i;
}
Fn(yt, Pa, Kr(Le, {
  brighter(t) {
    return t = t == null ? nn : Math.pow(nn, t), new yt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fe : Math.pow(Fe, t), new yt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * e, o = 2 * r - i;
    return new et(
      gn(t >= 240 ? t - 240 : t + 120, o, i),
      gn(t, o, i),
      gn(t < 120 ? t + 240 : t - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new yt(ir(this.h), Ve(this.s), Ve(this.l), rn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = rn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ir(this.h)}, ${Ve(this.s) * 100}%, ${Ve(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ir(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ve(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function gn(t, e, r) {
  return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255;
}
const jn = (t) => () => t;
function Ma(t, e) {
  return function(r) {
    return t + r * e;
  };
}
function Fa(t, e, r) {
  return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(i) {
    return Math.pow(t + i * e, r);
  };
}
function ja(t) {
  return (t = +t) == 1 ? Qr : function(e, r) {
    return r - e ? Fa(e, r, t) : jn(isNaN(e) ? r : e);
  };
}
function Qr(t, e) {
  var r = e - t;
  return r ? Ma(t, r) : jn(isNaN(t) ? e : t);
}
const on = function t(e) {
  var r = ja(e);
  function i(o, a) {
    var s = r((o = En(o)).r, (a = En(a)).r), c = r(o.g, a.g), l = r(o.b, a.b), h = Qr(o.opacity, a.opacity);
    return function(p) {
      return o.r = s(p), o.g = c(p), o.b = l(p), o.opacity = h(p), o + "";
    };
  }
  return i.gamma = t, i;
}(1);
function Da(t, e) {
  e || (e = []);
  var r = t ? Math.min(e.length, t.length) : 0, i = e.slice(), o;
  return function(a) {
    for (o = 0; o < r; ++o)
      i[o] = t[o] * (1 - a) + e[o] * a;
    return i;
  };
}
function Ia(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function La(t, e) {
  var r = e ? e.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(i), a = new Array(r), s;
  for (s = 0; s < i; ++s)
    o[s] = Dn(t[s], e[s]);
  for (; s < r; ++s)
    a[s] = e[s];
  return function(c) {
    for (s = 0; s < i; ++s)
      a[s] = o[s](c);
    return a;
  };
}
function Wa(t, e) {
  var r = new Date();
  return t = +t, e = +e, function(i) {
    return r.setTime(t * (1 - i) + e * i), r;
  };
}
function dt(t, e) {
  return t = +t, e = +e, function(r) {
    return t * (1 - r) + e * r;
  };
}
function Ya(t, e) {
  var r = {}, i = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? r[o] = Dn(t[o], e[o]) : i[o] = e[o];
  return function(a) {
    for (o in r)
      i[o] = r[o](a);
    return i;
  };
}
var Sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mn = new RegExp(Sn.source, "g");
function Va(t) {
  return function() {
    return t;
  };
}
function Ua(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ti(t, e) {
  var r = Sn.lastIndex = mn.lastIndex = 0, i, o, a, s = -1, c = [], l = [];
  for (t = t + "", e = e + ""; (i = Sn.exec(t)) && (o = mn.exec(e)); )
    (a = o.index) > r && (a = e.slice(r, a), c[s] ? c[s] += a : c[++s] = a), (i = i[0]) === (o = o[0]) ? c[s] ? c[s] += o : c[++s] = o : (c[++s] = null, l.push({ i: s, x: dt(i, o) })), r = mn.lastIndex;
  return r < e.length && (a = e.slice(r), c[s] ? c[s] += a : c[++s] = a), c.length < 2 ? l[0] ? Ua(l[0].x) : Va(e) : (e = l.length, function(h) {
    for (var p = 0, y; p < e; ++p)
      c[(y = l[p]).i] = y.x(h);
    return c.join("");
  });
}
function Dn(t, e) {
  var r = typeof e, i;
  return e == null || r === "boolean" ? jn(e) : (r === "number" ? dt : r === "string" ? (i = Ht(e)) ? (e = i, on) : ti : e instanceof Ht ? on : e instanceof Date ? Wa : Ia(e) ? Da : Array.isArray(e) ? La : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ya : dt)(t, e);
}
function za(t, e) {
  return t = +t, e = +e, function(r) {
    return Math.round(t * (1 - r) + e * r);
  };
}
var or = 180 / Math.PI, Rn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ei(t, e, r, i, o, a) {
  var s, c, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * r + e * i) && (r -= t * l, i -= e * l), (c = Math.sqrt(r * r + i * i)) && (r /= c, i /= c, l /= c), t * i < e * r && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(e, t) * or,
    skewX: Math.atan(l) * or,
    scaleX: s,
    scaleY: c
  };
}
var Ue;
function Ha(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Rn : ei(e.a, e.b, e.c, e.d, e.e, e.f);
}
function qa(t) {
  return t == null || (Ue || (Ue = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ue.setAttribute("transform", t), !(t = Ue.transform.baseVal.consolidate())) ? Rn : (t = t.matrix, ei(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ni(t, e, r, i) {
  function o(h) {
    return h.length ? h.pop() + " " : "";
  }
  function a(h, p, y, d, m, k) {
    if (h !== y || p !== d) {
      var O = m.push("translate(", null, e, null, r);
      k.push({ i: O - 4, x: dt(h, y) }, { i: O - 2, x: dt(p, d) });
    } else
      (y || d) && m.push("translate(" + y + e + d + r);
  }
  function s(h, p, y, d) {
    h !== p ? (h - p > 180 ? p += 360 : p - h > 180 && (h += 360), d.push({ i: y.push(o(y) + "rotate(", null, i) - 2, x: dt(h, p) })) : p && y.push(o(y) + "rotate(" + p + i);
  }
  function c(h, p, y, d) {
    h !== p ? d.push({ i: y.push(o(y) + "skewX(", null, i) - 2, x: dt(h, p) }) : p && y.push(o(y) + "skewX(" + p + i);
  }
  function l(h, p, y, d, m, k) {
    if (h !== y || p !== d) {
      var O = m.push(o(m) + "scale(", null, ",", null, ")");
      k.push({ i: O - 4, x: dt(h, y) }, { i: O - 2, x: dt(p, d) });
    } else
      (y !== 1 || d !== 1) && m.push(o(m) + "scale(" + y + "," + d + ")");
  }
  return function(h, p) {
    var y = [], d = [];
    return h = t(h), p = t(p), a(h.translateX, h.translateY, p.translateX, p.translateY, y, d), s(h.rotate, p.rotate, y, d), c(h.skewX, p.skewX, y, d), l(h.scaleX, h.scaleY, p.scaleX, p.scaleY, y, d), h = p = null, function(m) {
      for (var k = -1, O = d.length, $; ++k < O; )
        y[($ = d[k]).i] = $.x(m);
      return y.join("");
    };
  };
}
var Ba = ni(Ha, "px, ", "px)", "deg)"), Xa = ni(qa, ", ", ")", ")");
function Ga(t) {
  return function() {
    return t;
  };
}
function Ja(t) {
  return +t;
}
var ar = [0, 1];
function Bt(t) {
  return t;
}
function On(t, e) {
  return (e -= t = +t) ? function(r) {
    return (r - t) / e;
  } : Ga(isNaN(e) ? NaN : 0.5);
}
function Ka(t, e) {
  var r;
  return t > e && (r = t, t = e, e = r), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Za(t, e, r) {
  var i = t[0], o = t[1], a = e[0], s = e[1];
  return o < i ? (i = On(o, i), a = r(s, a)) : (i = On(i, o), a = r(a, s)), function(c) {
    return a(i(c));
  };
}
function Qa(t, e, r) {
  var i = Math.min(t.length, e.length) - 1, o = new Array(i), a = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    o[s] = On(t[s], t[s + 1]), a[s] = r(e[s], e[s + 1]);
  return function(c) {
    var l = ya(t, c, 1, i) - 1;
    return a[l](o[l](c));
  };
}
function ts(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function es() {
  var t = ar, e = ar, r = Dn, i, o, a, s = Bt, c, l, h;
  function p() {
    var d = Math.min(t.length, e.length);
    return s !== Bt && (s = Ka(t[0], t[d - 1])), c = d > 2 ? Qa : Za, l = h = null, y;
  }
  function y(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = c(t.map(i), e, r)))(i(s(d)));
  }
  return y.invert = function(d) {
    return s(o((h || (h = c(e, t.map(i), dt)))(d)));
  }, y.domain = function(d) {
    return arguments.length ? (t = Array.from(d, Ja), p()) : t.slice();
  }, y.range = function(d) {
    return arguments.length ? (e = Array.from(d), p()) : e.slice();
  }, y.rangeRound = function(d) {
    return e = Array.from(d), r = za, p();
  }, y.clamp = function(d) {
    return arguments.length ? (s = d ? !0 : Bt, p()) : s !== Bt;
  }, y.interpolate = function(d) {
    return arguments.length ? (r = d, p()) : r;
  }, y.unknown = function(d) {
    return arguments.length ? (a = d, y) : a;
  }, function(d, m) {
    return i = d, o = m, p();
  };
}
function ns() {
  return es()(Bt, Bt);
}
function rs(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function an(t, e) {
  if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var r, i = t.slice(0, r);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(r + 1)
  ];
}
function Kt(t) {
  return t = an(Math.abs(t)), t ? t[1] : NaN;
}
function is(t, e) {
  return function(r, i) {
    for (var o = r.length, a = [], s = 0, c = t[0], l = 0; o > 0 && c > 0 && (l + c + 1 > i && (c = Math.max(1, i - l)), a.push(r.substring(o -= c, o + c)), !((l += c + 1) > i)); )
      c = t[s = (s + 1) % t.length];
    return a.reverse().join(e);
  };
}
function os(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return t[+r];
    });
  };
}
var as = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function sn(t) {
  if (!(e = as.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new In({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
sn.prototype = In.prototype;
function In(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
In.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ss(t) {
  t:
    for (var e = t.length, r = 1, i = -1, o; r < e; ++r)
      switch (t[r]) {
        case ".":
          i = o = r;
          break;
        case "0":
          i === 0 && (i = r), o = r;
          break;
        default:
          if (!+t[r])
            break t;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? t.slice(0, i) + t.slice(o + 1) : t;
}
var ri;
function us(t, e) {
  var r = an(t, e);
  if (!r)
    return t + "";
  var i = r[0], o = r[1], a = o - (ri = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = i.length;
  return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + an(t, Math.max(0, e + a - 1))[0];
}
function sr(t, e) {
  var r = an(t, e);
  if (!r)
    return t + "";
  var i = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const ur = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: rs,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => sr(t * 100, e),
  r: sr,
  s: us,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function cr(t) {
  return t;
}
var lr = Array.prototype.map, fr = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function cs(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? cr : is(lr.call(t.grouping, Number), t.thousands + ""), r = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? cr : os(lr.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", c = t.minus === void 0 ? "\u2212" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function h(y) {
    y = sn(y);
    var d = y.fill, m = y.align, k = y.sign, O = y.symbol, $ = y.zero, R = y.width, x = y.comma, j = y.precision, L = y.trim, P = y.type;
    P === "n" ? (x = !0, P = "g") : ur[P] || (j === void 0 && (j = 12), L = !0, P = "g"), ($ || d === "0" && m === "=") && ($ = !0, d = "0", m = "=");
    var z = O === "$" ? r : O === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", M = O === "$" ? i : /[%p]/.test(P) ? s : "", X = ur[P], W = /[defgprs%]/.test(P);
    j = j === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j));
    function G(C) {
      var I = z, N = M, F, Y, nt;
      if (P === "c")
        N = X(C) + N, C = "";
      else {
        C = +C;
        var rt = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? l : X(Math.abs(C), j), L && (C = ss(C)), rt && +C == 0 && k !== "+" && (rt = !1), I = (rt ? k === "(" ? k : c : k === "-" || k === "(" ? "" : k) + I, N = (P === "s" ? fr[8 + ri / 3] : "") + N + (rt && k === "(" ? ")" : ""), W) {
          for (F = -1, Y = C.length; ++F < Y; )
            if (nt = C.charCodeAt(F), 48 > nt || nt > 57) {
              N = (nt === 46 ? o + C.slice(F + 1) : C.slice(F)) + N, C = C.slice(0, F);
              break;
            }
        }
      }
      x && !$ && (C = e(C, 1 / 0));
      var it = I.length + C.length + N.length, H = it < R ? new Array(R - it + 1).join(d) : "";
      switch (x && $ && (C = e(H + C, H.length ? R - N.length : 1 / 0), H = ""), m) {
        case "<":
          C = I + C + N + H;
          break;
        case "=":
          C = I + H + C + N;
          break;
        case "^":
          C = H.slice(0, it = H.length >> 1) + I + C + N + H.slice(it);
          break;
        default:
          C = H + I + C + N;
          break;
      }
      return a(C);
    }
    return G.toString = function() {
      return y + "";
    }, G;
  }
  function p(y, d) {
    var m = h((y = sn(y), y.type = "f", y)), k = Math.max(-8, Math.min(8, Math.floor(Kt(d) / 3))) * 3, O = Math.pow(10, -k), $ = fr[8 + k / 3];
    return function(R) {
      return m(O * R) + $;
    };
  }
  return {
    format: h,
    formatPrefix: p
  };
}
var ze, ii, oi;
ls({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ls(t) {
  return ze = cs(t), ii = ze.format, oi = ze.formatPrefix, ze;
}
function fs(t) {
  return Math.max(0, -Kt(Math.abs(t)));
}
function hs(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Kt(e) / 3))) * 3 - Kt(Math.abs(t)));
}
function ps(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Kt(e) - Kt(t)) + 1;
}
function ds(t, e, r, i) {
  var o = wa(t, e, r), a;
  switch (i = sn(i == null ? ",f" : i), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(a = hs(o, s)) && (i.precision = a), oi(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(a = ps(o, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = a - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(a = fs(o)) && (i.precision = a - (i.type === "%") * 2);
      break;
    }
  }
  return ii(i);
}
function ys(t) {
  var e = t.domain;
  return t.ticks = function(r) {
    var i = e();
    return _a(i[0], i[i.length - 1], r == null ? 10 : r);
  }, t.tickFormat = function(r, i) {
    var o = e();
    return ds(o[0], o[o.length - 1], r == null ? 10 : r, i);
  }, t.nice = function(r) {
    r == null && (r = 10);
    var i = e(), o = 0, a = i.length - 1, s = i[o], c = i[a], l, h, p = 10;
    for (c < s && (h = s, s = c, c = h, h = o, o = a, a = h); p-- > 0; ) {
      if (h = Xr(s, c, r), h === l)
        return i[o] = s, i[a] = c, e(i);
      if (h > 0)
        s = Math.floor(s / h) * h, c = Math.ceil(c / h) * h;
      else if (h < 0)
        s = Math.ceil(s * h) / h, c = Math.floor(c * h) / h;
      else
        break;
      l = h;
    }
    return t;
  }, t;
}
function ai() {
  var t = ns();
  return t.copy = function() {
    return ts(t, ai());
  }, Mn.apply(t, arguments), ys(t);
}
const { abs: hr, min: pr, max: gs, round: dr } = Math, yr = 0.3, ms = 10, vs = (t, e, r, i) => {
  const [o, a] = Ut({
    width: 0,
    height: 0,
    offsetWidth: 0
  }), [s, c] = Ut({
    xScale: (d) => d,
    yScale: (d) => d
  }), [l, h] = Ut({ first: 0, last: 0 }), p = Hn(
    (d, m) => hr(s.yScale(m) - s.yScale(d)) || 1,
    [s.yScale]
  ), y = Hn(
    (d, m) => s.yScale(pr(d, m)) - p(d, m) + vt,
    [s.yScale]
  );
  return Me(() => {
    if (!(e != null && e.length))
      return;
    const { clientWidth: d, clientHeight: m } = t.current, k = ms * (1 + yr) * r, O = k * e.length, $ = d - Jt[1] + vt * 2;
    let R = i * r - O + $;
    R = R <= 0 ? R : 0, R = O > d ? R : $ - O, R = hr(R - $) <= O ? R : -O + $;
    const x = dr((R * -1 - vt) / k), j = dr((R * -1 + $) / k), L = e.slice(x > 0 ? x : 0, j), P = pr(...L.map(({ low: W }) => W)), z = gs(...L.map(({ high: W }) => W)), M = Jr().range([vt, O - vt]).domain(e.map(({ date: W }) => W)).padding(yr), X = ai().domain([P - 20, z + 20]).range([m - Jt[0] - vt, vt]);
    h({ first: x, last: j }), a({ width: d, height: m, offsetWidth: R }), c({ xScale: M, yScale: X });
  }, [r, i, e]), { utils: { scaledHeight: p, scaledY: y }, visibleRange: l, dimensions: o, scales: s };
};
var _s = { value: () => {
} };
function si() {
  for (var t = 0, e = arguments.length, r = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in r || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new Ze(r);
}
function Ze(t) {
  this._ = t;
}
function ws(t, e) {
  return t.trim().split(/^|\s+/).map(function(r) {
    var i = "", o = r.indexOf(".");
    if (o >= 0 && (i = r.slice(o + 1), r = r.slice(0, o)), r && !e.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
Ze.prototype = si.prototype = {
  constructor: Ze,
  on: function(t, e) {
    var r = this._, i = ws(t + "", r), o, a = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((o = (t = i[a]).type) && (o = bs(r[o], t.name)))
          return o;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < s; )
      if (o = (t = i[a]).type)
        r[o] = gr(r[o], t.name, e);
      else if (e == null)
        for (o in r)
          r[o] = gr(r[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var r in e)
      t[r] = e[r].slice();
    return new Ze(t);
  },
  call: function(t, e) {
    if ((o = arguments.length - 2) > 0)
      for (var r = new Array(o), i = 0, o, a; i < o; ++i)
        r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (a = this._[t], i = 0, o = a.length; i < o; ++i)
      a[i].value.apply(e, r);
  },
  apply: function(t, e, r) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var i = this._[t], o = 0, a = i.length; o < a; ++o)
      i[o].value.apply(e, r);
  }
};
function bs(t, e) {
  for (var r = 0, i = t.length, o; r < i; ++r)
    if ((o = t[r]).name === e)
      return o.value;
}
function gr(t, e, r) {
  for (var i = 0, o = t.length; i < o; ++i)
    if (t[i].name === e) {
      t[i] = _s, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return r != null && t.push({ name: e, value: r }), t;
}
var Zt = 0, Ae = 0, Re = 0, ui = 1e3, un, Pe, cn = 0, qt = 0, hn = 0, De = typeof performance == "object" && performance.now ? performance : Date, ci = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ln() {
  return qt || (ci(xs), qt = De.now() + hn);
}
function xs() {
  qt = 0;
}
function ln() {
  this._call = this._time = this._next = null;
}
ln.prototype = li.prototype = {
  constructor: ln,
  restart: function(t, e, r) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Ln() : +r) + (e == null ? 0 : +e), !this._next && Pe !== this && (Pe ? Pe._next = this : un = this, Pe = this), this._call = t, this._time = r, $n();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $n());
  }
};
function li(t, e, r) {
  var i = new ln();
  return i.restart(t, e, r), i;
}
function ks() {
  Ln(), ++Zt;
  for (var t = un, e; t; )
    (e = qt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Zt;
}
function mr() {
  qt = (cn = De.now()) + hn, Zt = Ae = 0;
  try {
    ks();
  } finally {
    Zt = 0, Ss(), qt = 0;
  }
}
function Es() {
  var t = De.now(), e = t - cn;
  e > ui && (hn -= e, cn = t);
}
function Ss() {
  for (var t, e = un, r, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : un = r);
  Pe = t, $n(i);
}
function $n(t) {
  if (!Zt) {
    Ae && (Ae = clearTimeout(Ae));
    var e = t - qt;
    e > 24 ? (t < 1 / 0 && (Ae = setTimeout(mr, t - De.now() - hn)), Re && (Re = clearInterval(Re))) : (Re || (cn = De.now(), Re = setInterval(Es, ui)), Zt = 1, ci(mr));
  }
}
function vr(t, e, r) {
  var i = new ln();
  return e = e == null ? 0 : +e, i.restart((o) => {
    i.stop(), t(o + e);
  }, e, r), i;
}
var Rs = si("start", "end", "cancel", "interrupt"), Os = [], fi = 0, _r = 1, Nn = 2, Qe = 3, wr = 4, Tn = 5, tn = 6;
function pn(t, e, r, i, o, a) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (r in s)
    return;
  $s(t, r, {
    name: e,
    index: i,
    group: o,
    on: Rs,
    tween: Os,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: fi
  });
}
function Wn(t, e) {
  var r = mt(t, e);
  if (r.state > fi)
    throw new Error("too late; already scheduled");
  return r;
}
function wt(t, e) {
  var r = mt(t, e);
  if (r.state > Qe)
    throw new Error("too late; already running");
  return r;
}
function mt(t, e) {
  var r = t.__transition;
  if (!r || !(r = r[e]))
    throw new Error("transition not found");
  return r;
}
function $s(t, e, r) {
  var i = t.__transition, o;
  i[e] = r, r.timer = li(a, 0, r.time);
  function a(h) {
    r.state = _r, r.timer.restart(s, r.delay, r.time), r.delay <= h && s(h - r.delay);
  }
  function s(h) {
    var p, y, d, m;
    if (r.state !== _r)
      return l();
    for (p in i)
      if (m = i[p], m.name === r.name) {
        if (m.state === Qe)
          return vr(s);
        m.state === wr ? (m.state = tn, m.timer.stop(), m.on.call("interrupt", t, t.__data__, m.index, m.group), delete i[p]) : +p < e && (m.state = tn, m.timer.stop(), m.on.call("cancel", t, t.__data__, m.index, m.group), delete i[p]);
      }
    if (vr(function() {
      r.state === Qe && (r.state = wr, r.timer.restart(c, r.delay, r.time), c(h));
    }), r.state = Nn, r.on.call("start", t, t.__data__, r.index, r.group), r.state === Nn) {
      for (r.state = Qe, o = new Array(d = r.tween.length), p = 0, y = -1; p < d; ++p)
        (m = r.tween[p].value.call(t, t.__data__, r.index, r.group)) && (o[++y] = m);
      o.length = y + 1;
    }
  }
  function c(h) {
    for (var p = h < r.duration ? r.ease.call(null, h / r.duration) : (r.timer.restart(l), r.state = Tn, 1), y = -1, d = o.length; ++y < d; )
      o[y].call(t, p);
    r.state === Tn && (r.on.call("end", t, t.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = tn, r.timer.stop(), delete i[e];
    for (var h in i)
      return;
    delete t.__transition;
  }
}
function Ns(t, e) {
  var r = t.__transition, i, o, a = !0, s;
  if (!!r) {
    e = e == null ? null : e + "";
    for (s in r) {
      if ((i = r[s]).name !== e) {
        a = !1;
        continue;
      }
      o = i.state > Nn && i.state < Tn, i.state = tn, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete r[s];
    }
    a && delete t.__transition;
  }
}
function Ts(t) {
  return this.each(function() {
    Ns(this, t);
  });
}
function Cs(t, e) {
  var r, i;
  return function() {
    var o = wt(this, t), a = o.tween;
    if (a !== r) {
      i = r = a;
      for (var s = 0, c = i.length; s < c; ++s)
        if (i[s].name === e) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function As(t, e, r) {
  var i, o;
  if (typeof r != "function")
    throw new Error();
  return function() {
    var a = wt(this, t), s = a.tween;
    if (s !== i) {
      o = (i = s).slice();
      for (var c = { name: e, value: r }, l = 0, h = o.length; l < h; ++l)
        if (o[l].name === e) {
          o[l] = c;
          break;
        }
      l === h && o.push(c);
    }
    a.tween = o;
  };
}
function Ps(t, e) {
  var r = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = mt(this.node(), r).tween, o = 0, a = i.length, s; o < a; ++o)
      if ((s = i[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Cs : As)(r, t, e));
}
function Yn(t, e, r) {
  var i = t._id;
  return t.each(function() {
    var o = wt(this, i);
    (o.value || (o.value = {}))[e] = r.apply(this, arguments);
  }), function(o) {
    return mt(o, i).value[e];
  };
}
function hi(t, e) {
  var r;
  return (typeof e == "number" ? dt : e instanceof Ht ? on : (r = Ht(e)) ? (e = r, on) : ti)(t, e);
}
function Ms(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Fs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function js(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function Ds(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function Is(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), l;
    return c == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = c + "", s === l ? null : s === i && l === o ? a : (o = l, a = e(i = s, c)));
  };
}
function Ls(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), l;
    return c == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = c + "", s === l ? null : s === i && l === o ? a : (o = l, a = e(i = s, c)));
  };
}
function Ws(t, e) {
  var r = fn(t), i = r === "transform" ? Xa : hi;
  return this.attrTween(t, typeof e == "function" ? (r.local ? Ls : Is)(r, i, Yn(this, "attr." + t, e)) : e == null ? (r.local ? Fs : Ms)(r) : (r.local ? Ds : js)(r, i, e));
}
function Ys(t, e) {
  return function(r) {
    this.setAttribute(t, e.call(this, r));
  };
}
function Vs(t, e) {
  return function(r) {
    this.setAttributeNS(t.space, t.local, e.call(this, r));
  };
}
function Us(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Vs(t, a)), r;
  }
  return o._value = e, o;
}
function zs(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Ys(t, a)), r;
  }
  return o._value = e, o;
}
function Hs(t, e) {
  var r = "attr." + t;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  var i = fn(t);
  return this.tween(r, (i.local ? Us : zs)(i, e));
}
function qs(t, e) {
  return function() {
    Wn(this, t).delay = +e.apply(this, arguments);
  };
}
function Bs(t, e) {
  return e = +e, function() {
    Wn(this, t).delay = e;
  };
}
function Xs(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? qs : Bs)(e, t)) : mt(this.node(), e).delay;
}
function Gs(t, e) {
  return function() {
    wt(this, t).duration = +e.apply(this, arguments);
  };
}
function Js(t, e) {
  return e = +e, function() {
    wt(this, t).duration = e;
  };
}
function Ks(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Gs : Js)(e, t)) : mt(this.node(), e).duration;
}
function Zs(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    wt(this, t).ease = e;
  };
}
function Qs(t) {
  var e = this._id;
  return arguments.length ? this.each(Zs(e, t)) : mt(this.node(), e).ease;
}
function tu(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    wt(this, t).ease = r;
  };
}
function eu(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(tu(this._id, t));
}
function nu(t) {
  typeof t != "function" && (t = Dr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], l, h = 0; h < s; ++h)
      (l = a[h]) && t.call(l, l.__data__, h, a) && c.push(l);
  return new xt(i, this._parents, this._name, this._id);
}
function ru(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, r = t._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var l = e[c], h = r[c], p = l.length, y = s[c] = new Array(p), d, m = 0; m < p; ++m)
      (d = l[m] || h[m]) && (y[m] = d);
  for (; c < i; ++c)
    s[c] = e[c];
  return new xt(s, this._parents, this._name, this._id);
}
function iu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var r = e.indexOf(".");
    return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
  });
}
function ou(t, e, r) {
  var i, o, a = iu(e) ? Wn : wt;
  return function() {
    var s = a(this, t), c = s.on;
    c !== i && (o = (i = c).copy()).on(e, r), s.on = o;
  };
}
function au(t, e) {
  var r = this._id;
  return arguments.length < 2 ? mt(this.node(), r).on.on(t) : this.each(ou(r, t, e));
}
function su(t) {
  return function() {
    var e = this.parentNode;
    for (var r in this.__transition)
      if (+r !== t)
        return;
    e && e.removeChild(this);
  };
}
function uu() {
  return this.on("end.remove", su(this._id));
}
function cu(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = An(t));
  for (var i = this._groups, o = i.length, a = new Array(o), s = 0; s < o; ++s)
    for (var c = i[s], l = c.length, h = a[s] = new Array(l), p, y, d = 0; d < l; ++d)
      (p = c[d]) && (y = t.call(p, p.__data__, d, c)) && ("__data__" in p && (y.__data__ = p.__data__), h[d] = y, pn(h[d], e, r, d, h, mt(p, r)));
  return new xt(a, this._parents, e, r);
}
function lu(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = jr(t));
  for (var i = this._groups, o = i.length, a = [], s = [], c = 0; c < o; ++c)
    for (var l = i[c], h = l.length, p, y = 0; y < h; ++y)
      if (p = l[y]) {
        for (var d = t.call(p, p.__data__, y, l), m, k = mt(p, r), O = 0, $ = d.length; O < $; ++O)
          (m = d[O]) && pn(m, e, r, O, d, k);
        a.push(d), s.push(p);
      }
  return new xt(a, s, e, r);
}
var fu = Ie.prototype.constructor;
function hu() {
  return new fu(this._groups, this._parents);
}
function pu(t, e) {
  var r, i, o;
  return function() {
    var a = Gt(this, t), s = (this.style.removeProperty(t), Gt(this, t));
    return a === s ? null : a === r && s === i ? o : o = e(r = a, i = s);
  };
}
function pi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function du(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = Gt(this, t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function yu(t, e, r) {
  var i, o, a;
  return function() {
    var s = Gt(this, t), c = r(this), l = c + "";
    return c == null && (l = c = (this.style.removeProperty(t), Gt(this, t))), s === l ? null : s === i && l === o ? a : (o = l, a = e(i = s, c));
  };
}
function gu(t, e) {
  var r, i, o, a = "style." + e, s = "end." + a, c;
  return function() {
    var l = wt(this, t), h = l.on, p = l.value[a] == null ? c || (c = pi(e)) : void 0;
    (h !== r || o !== p) && (i = (r = h).copy()).on(s, o = p), l.on = i;
  };
}
function mu(t, e, r) {
  var i = (t += "") == "transform" ? Ba : hi;
  return e == null ? this.styleTween(t, pu(t, i)).on("end.style." + t, pi(t)) : typeof e == "function" ? this.styleTween(t, yu(t, i, Yn(this, "style." + t, e))).each(gu(this._id, t)) : this.styleTween(t, du(t, i, e), r).on("end.style." + t, null);
}
function vu(t, e, r) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), r);
  };
}
function _u(t, e, r) {
  var i, o;
  function a() {
    var s = e.apply(this, arguments);
    return s !== o && (i = (o = s) && vu(t, s, r)), i;
  }
  return a._value = e, a;
}
function wu(t, e, r) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, _u(t, e, r == null ? "" : r));
}
function bu(t) {
  return function() {
    this.textContent = t;
  };
}
function xu(t) {
  return function() {
    var e = t(this);
    this.textContent = e == null ? "" : e;
  };
}
function ku(t) {
  return this.tween("text", typeof t == "function" ? xu(Yn(this, "text", t)) : bu(t == null ? "" : t + ""));
}
function Eu(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Su(t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && Eu(o)), e;
  }
  return i._value = t, i;
}
function Ru(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Su(t));
}
function Ou() {
  for (var t = this._name, e = this._id, r = di(), i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, l, h = 0; h < c; ++h)
      if (l = s[h]) {
        var p = mt(l, e);
        pn(l, t, r, h, s, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new xt(i, this._parents, t, r);
}
function $u() {
  var t, e, r = this, i = r._id, o = r.size();
  return new Promise(function(a, s) {
    var c = { value: s }, l = { value: function() {
      --o === 0 && a();
    } };
    r.each(function() {
      var h = wt(this, i), p = h.on;
      p !== t && (e = (t = p).copy(), e._.cancel.push(c), e._.interrupt.push(c), e._.end.push(l)), h.on = e;
    }), o === 0 && a();
  });
}
var Nu = 0;
function xt(t, e, r, i) {
  this._groups = t, this._parents = e, this._name = r, this._id = i;
}
function di() {
  return ++Nu;
}
var bt = Ie.prototype;
xt.prototype = {
  constructor: xt,
  select: cu,
  selectAll: lu,
  selectChild: bt.selectChild,
  selectChildren: bt.selectChildren,
  filter: nu,
  merge: ru,
  selection: hu,
  transition: Ou,
  call: bt.call,
  nodes: bt.nodes,
  node: bt.node,
  size: bt.size,
  empty: bt.empty,
  each: bt.each,
  on: au,
  attr: Ws,
  attrTween: Hs,
  style: mu,
  styleTween: wu,
  text: ku,
  textTween: Ru,
  remove: uu,
  tween: Ps,
  delay: Xs,
  duration: Ks,
  ease: Qs,
  easeVarying: eu,
  end: $u,
  [Symbol.iterator]: bt[Symbol.iterator]
};
function Tu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Cu = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Tu
};
function Au(t, e) {
  for (var r; !(r = t.__transition) || !(r = r[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return r;
}
function Pu(t) {
  var e, r;
  t instanceof xt ? (e = t._id, t = t._name) : (e = di(), (r = Cu).time = Ln(), t = t == null ? null : t + "");
  for (var i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, l, h = 0; h < c; ++h)
      (l = s[h]) && pn(l, t, e, h, s, r || Au(l, e));
  return new xt(i, this._parents, t, e);
}
Ie.prototype.interrupt = Ts;
Ie.prototype.transition = Pu;
const br = {
  wicks: "line",
  candles: "rect"
}, Mu = (t, e, r, i, o, a, s) => {
  const { xScale: c } = i, { offsetWidth: l } = o, { scaledHeight: h, scaledY: p } = a, y = Ar({}), d = () => Je(t.current), m = ($, R = d()) => R.selectAll(`${br[$]}.${$}`).data(e), k = ($) => {
    var R;
    return y.current[$] = (R = y.current[$]) != null ? R : d().append("g").classed(`${$}-group`, !0).attr("clip-path", "url(#chart-contents)"), y.current[$];
  }, O = ($, R) => {
    let x = m($, k($));
    x.size() !== e.length && (x = x.enter().append(br[$]));
    const j = () => x.classed($, !0).transition().duration(ua), L = (M) => Number(c(M.date)) + ($ === "wicks" ? +c.bandwidth() / 2 : 0) + l, P = (M) => p(M[R[0]], M[R[1]]), z = (M) => h(M[R[0]], M[R[1]]);
    return $ === "candles" ? j().attr("width", () => +c.bandwidth()).attr("height", z).attr("x", L).attr("y", P) : j().attr("x1", L).attr("y1", P).attr("x2", L).attr("y2", (M) => P(M) + z(M)), x.exit().remove(), x;
  };
  Me(() => {
    k("wicks"), k("candles");
  }, []), Me(() => {
    var $;
    ($ = c == null ? void 0 : c.bandwidth) != null && $.call(c) && (O("wicks", ["low", "high"]), O("candles", ["open", "close"]).attr(
      "fill",
      (R) => R.close < R.open ? "red" : "green"
    ));
  }, [c]);
};
var Vn = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function Fu() {
  if (xr)
    return Oe;
  xr = 1;
  var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, h) {
    var p, y = {}, d = null, m = null;
    h !== void 0 && (d = "" + h), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (p in l)
      i.call(l, p) && !a.hasOwnProperty(p) && (y[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        y[p] === void 0 && (y[p] = l[p]);
    return { $$typeof: e, type: c, key: d, ref: m, props: y, _owner: o.current };
  }
  return Oe.Fragment = r, Oe.jsx = s, Oe.jsxs = s, Oe;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function ju() {
  return kr || (kr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, O = "@@iterator";
    function $(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[O];
      return typeof u == "function" ? u : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(n) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          f[g - 1] = arguments[g];
        j("error", n, f);
      }
    }
    function j(n, u, f) {
      {
        var g = R.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", f = f.concat([w]));
        var b = f.map(function(_) {
          return String(_);
        });
        b.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, b);
      }
    }
    var L = !1, P = !1, z = !1, M = !1, X = !1, W;
    W = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || X || n === o || n === h || n === p || M || n === m || L || P || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === W || n.getModuleId !== void 0));
    }
    function C(n, u, f) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? f + "(" + w + ")" : f;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function N(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var u = n;
            return I(u) + ".Consumer";
          case s:
            var f = n;
            return I(f._context) + ".Provider";
          case l:
            return C(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : N(n.type) || "Memo";
          case d: {
            var w = n, b = w._payload, _ = w._init;
            try {
              return N(_(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, nt, rt, it, H, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function te() {
      {
        if (Y === 0) {
          nt = console.log, rt = console.info, it = console.warn, H = console.error, kt = console.group, Et = console.groupCollapsed, St = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Y++;
      }
    }
    function ee() {
      {
        if (Y--, Y === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, n, {
              value: nt
            }),
            info: F({}, n, {
              value: rt
            }),
            warn: F({}, n, {
              value: it
            }),
            error: F({}, n, {
              value: H
            }),
            group: F({}, n, {
              value: kt
            }),
            groupCollapsed: F({}, n, {
              value: Et
            }),
            groupEnd: F({}, n, {
              value: St
            })
          });
        }
        Y < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = R.ReactCurrentDispatcher, st;
    function J(n, u, f) {
      {
        if (st === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            st = g && g[1] || "";
          }
        return `
` + st + n;
      }
    }
    var ut = !1, K;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ne();
    }
    function Ot(n, u) {
      if (!n || ut)
        return "";
      {
        var f = K.get(n);
        if (f !== void 0)
          return f;
      }
      var g;
      ut = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = at.current, at.current = null, te();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (D) {
              g = D;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (D) {
              g = D;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            g = D;
          }
          n();
        }
      } catch (D) {
        if (D && g && typeof D.stack == "string") {
          for (var v = D.stack.split(`
`), T = g.stack.split(`
`), E = v.length - 1, S = T.length - 1; E >= 1 && S >= 0 && v[E] !== T[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (v[E] !== T[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || v[E] !== T[S]) {
                    var A = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, A), A;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = b, ee(), Error.prepareStackTrace = w;
      }
      var U = n ? n.displayName || n.name : "", Wt = U ? J(U) : "";
      return typeof n == "function" && K.set(n, Wt), Wt;
    }
    function re(n, u, f) {
      return Ot(n, !1);
    }
    function ie(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, f) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ot(n, ie(n));
      if (typeof n == "string")
        return J(n);
      switch (n) {
        case h:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return re(n.render);
          case y:
            return Z(n.type, u, f);
          case d: {
            var g = n, w = g._payload, b = g._init;
            try {
              return Z(b(w), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, $t = {}, Nt = R.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Nt.setExtraStackFrame(f);
      } else
        Nt.setExtraStackFrame(null);
    }
    function oe(n, u, f, g, w) {
      {
        var b = Function.call.bind(Q);
        for (var _ in n)
          if (b(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var T = Error((g || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = n[_](u, _, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, _, typeof v), tt(null)), v instanceof Error && !(v.message in $t) && ($t[v.message] = !0, tt(w), x("Failed %s type: %s", f, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function ct(n) {
      return ae(n);
    }
    function se(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, f = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return f;
      }
    }
    function ue(n) {
      try {
        return Tt(n), !1;
      } catch {
        return !0;
      }
    }
    function Tt(n) {
      return "" + n;
    }
    function Ct(n) {
      if (ue(n))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = R.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, lt;
    lt = {};
    function le(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function fe(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function he(n, u) {
      if (typeof n.ref == "string" && q.current && u && q.current.stateNode !== u) {
        var f = N(q.current.type);
        lt[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(q.current.type), n.ref), lt[f] = !0);
      }
    }
    function pe(n, u) {
      {
        var f = function() {
          At || (At = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function de(n, u) {
      {
        var f = function() {
          Pt || (Pt = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, f, g, w, b, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: f,
        props: _,
        _owner: b
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function ge(n, u, f, g, w) {
      {
        var b, _ = {}, v = null, T = null;
        f !== void 0 && (Ct(f), v = "" + f), fe(u) && (Ct(u.key), v = "" + u.key), le(u) && (T = u.ref, he(u, w));
        for (b in u)
          Q.call(u, b) && !ce.hasOwnProperty(b) && (_[b] = u[b]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (b in E)
            _[b] === void 0 && (_[b] = E[b]);
        }
        if (v || T) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), T && de(_, S);
        }
        return ye(n, v, T, w, g, q.current, _);
      }
    }
    var ft = R.ReactCurrentOwner, Mt = R.ReactDebugCurrentFrame;
    function V(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(f);
      } else
        Mt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Ft() {
      {
        if (ft.current) {
          var n = N(ft.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function me(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), f = n.lineNumber;
          return `

Check your code at ` + u + ":" + f + ".";
        }
        return "";
      }
    }
    var jt = {};
    function ve(n) {
      {
        var u = Ft();
        if (!u) {
          var f = typeof n == "string" ? n : n.displayName || n.name;
          f && (u = `

Check the top-level render call using <` + f + ">.");
        }
        return u;
      }
    }
    function Dt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var f = ve(u);
        if (jt[f])
          return;
        jt[f] = !0;
        var g = "";
        n && n._owner && n._owner !== ft.current && (g = " It was passed a child from " + N(n._owner.type) + "."), V(n), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), V(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var f = 0; f < n.length; f++) {
            var g = n[f];
            pt(g) && Dt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = $(n);
          if (typeof w == "function" && w !== n.entries)
            for (var b = w.call(n), _; !(_ = b.next()).done; )
              pt(_.value) && Dt(_.value, u);
        }
      }
    }
    function _e(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var f;
        if (typeof u == "function")
          f = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === l || u.$$typeof === y))
          f = u.propTypes;
        else
          return;
        if (f) {
          var g = N(u);
          oe(f, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = N(u);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), f = 0; f < u.length; f++) {
          var g = u[f];
          if (g !== "children" && g !== "key") {
            V(n), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        n.ref !== null && (V(n), x("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Lt(n, u, f, g, w, b) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = me(w);
          T ? v += T : v += Ft();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (N(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, f, w, b);
        if (S == null)
          return S;
        if (_) {
          var A = u.children;
          if (A !== void 0)
            if (g)
              if (ct(A)) {
                for (var U = 0; U < A.length; U++)
                  It(A[U], n);
                Object.freeze && Object.freeze(A);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(A, n);
        }
        return n === i ? we(S) : _e(S), S;
      }
    }
    function be(n, u, f) {
      return Lt(n, u, f, !0);
    }
    function xe(n, u, f) {
      return Lt(n, u, f, !1);
    }
    var ke = xe, Ee = be;
    $e.Fragment = i, $e.jsx = ke, $e.jsxs = Ee;
  }()), $e;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Fu() : t.exports = ju();
})(Vn);
const B = Vn.exports.jsx, Un = Vn.exports.jsxs, Du = ({
  width: t,
  height: e
}) => {
  const r = {
    x: 0,
    y: 0,
    width: t ? t - Jt[1] + vt : 0,
    height: e ? e - Jt[0] : 0
  };
  return /* @__PURE__ */ Un("defs", {
    children: [/* @__PURE__ */ B("clipPath", {
      id: "chart-contents",
      children: /* @__PURE__ */ B("rect", {
        ...r
      })
    }), /* @__PURE__ */ B("clipPath", {
      id: "bottom-axis",
      children: /* @__PURE__ */ B("rect", {
        ...r,
        height: `${e}`
      })
    })]
  });
}, Er = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Iu = "font-family: serif;", Lu = gt.button(
  ({ status: t, minWidth: e, margin: r }) => Cn`
    ${Iu}
    border: 1px solid ${Er[t]};
    color: ${Er[t]};
    background-color: white;
    border-radius: 6px;
    min-width: ${e};
    padding: 8px;
    margin: ${r};
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
var yi = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function Wu() {
  if (Sr)
    return Ne;
  Sr = 1;
  var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, h) {
    var p, y = {}, d = null, m = null;
    h !== void 0 && (d = "" + h), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (p in l)
      i.call(l, p) && !a.hasOwnProperty(p) && (y[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        y[p] === void 0 && (y[p] = l[p]);
    return { $$typeof: e, type: c, key: d, ref: m, props: y, _owner: o.current };
  }
  return Ne.Fragment = r, Ne.jsx = s, Ne.jsxs = s, Ne;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function Yu() {
  return Rr || (Rr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, O = "@@iterator";
    function $(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[O];
      return typeof u == "function" ? u : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(n) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          f[g - 1] = arguments[g];
        j("error", n, f);
      }
    }
    function j(n, u, f) {
      {
        var g = R.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", f = f.concat([w]));
        var b = f.map(function(_) {
          return String(_);
        });
        b.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, b);
      }
    }
    var L = !1, P = !1, z = !1, M = !1, X = !1, W;
    W = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || X || n === o || n === h || n === p || M || n === m || L || P || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === W || n.getModuleId !== void 0));
    }
    function C(n, u, f) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? f + "(" + w + ")" : f;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function N(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var u = n;
            return I(u) + ".Consumer";
          case s:
            var f = n;
            return I(f._context) + ".Provider";
          case l:
            return C(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : N(n.type) || "Memo";
          case d: {
            var w = n, b = w._payload, _ = w._init;
            try {
              return N(_(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, nt, rt, it, H, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function te() {
      {
        if (Y === 0) {
          nt = console.log, rt = console.info, it = console.warn, H = console.error, kt = console.group, Et = console.groupCollapsed, St = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Y++;
      }
    }
    function ee() {
      {
        if (Y--, Y === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, n, {
              value: nt
            }),
            info: F({}, n, {
              value: rt
            }),
            warn: F({}, n, {
              value: it
            }),
            error: F({}, n, {
              value: H
            }),
            group: F({}, n, {
              value: kt
            }),
            groupCollapsed: F({}, n, {
              value: Et
            }),
            groupEnd: F({}, n, {
              value: St
            })
          });
        }
        Y < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = R.ReactCurrentDispatcher, st;
    function J(n, u, f) {
      {
        if (st === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            st = g && g[1] || "";
          }
        return `
` + st + n;
      }
    }
    var ut = !1, K;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ne();
    }
    function Ot(n, u) {
      if (!n || ut)
        return "";
      {
        var f = K.get(n);
        if (f !== void 0)
          return f;
      }
      var g;
      ut = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = at.current, at.current = null, te();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (D) {
              g = D;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (D) {
              g = D;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            g = D;
          }
          n();
        }
      } catch (D) {
        if (D && g && typeof D.stack == "string") {
          for (var v = D.stack.split(`
`), T = g.stack.split(`
`), E = v.length - 1, S = T.length - 1; E >= 1 && S >= 0 && v[E] !== T[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (v[E] !== T[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || v[E] !== T[S]) {
                    var A = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, A), A;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = b, ee(), Error.prepareStackTrace = w;
      }
      var U = n ? n.displayName || n.name : "", Wt = U ? J(U) : "";
      return typeof n == "function" && K.set(n, Wt), Wt;
    }
    function re(n, u, f) {
      return Ot(n, !1);
    }
    function ie(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, f) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ot(n, ie(n));
      if (typeof n == "string")
        return J(n);
      switch (n) {
        case h:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return re(n.render);
          case y:
            return Z(n.type, u, f);
          case d: {
            var g = n, w = g._payload, b = g._init;
            try {
              return Z(b(w), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, $t = {}, Nt = R.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Nt.setExtraStackFrame(f);
      } else
        Nt.setExtraStackFrame(null);
    }
    function oe(n, u, f, g, w) {
      {
        var b = Function.call.bind(Q);
        for (var _ in n)
          if (b(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var T = Error((g || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = n[_](u, _, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, _, typeof v), tt(null)), v instanceof Error && !(v.message in $t) && ($t[v.message] = !0, tt(w), x("Failed %s type: %s", f, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function ct(n) {
      return ae(n);
    }
    function se(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, f = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return f;
      }
    }
    function ue(n) {
      try {
        return Tt(n), !1;
      } catch {
        return !0;
      }
    }
    function Tt(n) {
      return "" + n;
    }
    function Ct(n) {
      if (ue(n))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = R.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, lt;
    lt = {};
    function le(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function fe(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function he(n, u) {
      if (typeof n.ref == "string" && q.current && u && q.current.stateNode !== u) {
        var f = N(q.current.type);
        lt[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(q.current.type), n.ref), lt[f] = !0);
      }
    }
    function pe(n, u) {
      {
        var f = function() {
          At || (At = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function de(n, u) {
      {
        var f = function() {
          Pt || (Pt = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, f, g, w, b, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: f,
        props: _,
        _owner: b
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function ge(n, u, f, g, w) {
      {
        var b, _ = {}, v = null, T = null;
        f !== void 0 && (Ct(f), v = "" + f), fe(u) && (Ct(u.key), v = "" + u.key), le(u) && (T = u.ref, he(u, w));
        for (b in u)
          Q.call(u, b) && !ce.hasOwnProperty(b) && (_[b] = u[b]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (b in E)
            _[b] === void 0 && (_[b] = E[b]);
        }
        if (v || T) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), T && de(_, S);
        }
        return ye(n, v, T, w, g, q.current, _);
      }
    }
    var ft = R.ReactCurrentOwner, Mt = R.ReactDebugCurrentFrame;
    function V(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(f);
      } else
        Mt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Ft() {
      {
        if (ft.current) {
          var n = N(ft.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function me(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), f = n.lineNumber;
          return `

Check your code at ` + u + ":" + f + ".";
        }
        return "";
      }
    }
    var jt = {};
    function ve(n) {
      {
        var u = Ft();
        if (!u) {
          var f = typeof n == "string" ? n : n.displayName || n.name;
          f && (u = `

Check the top-level render call using <` + f + ">.");
        }
        return u;
      }
    }
    function Dt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var f = ve(u);
        if (jt[f])
          return;
        jt[f] = !0;
        var g = "";
        n && n._owner && n._owner !== ft.current && (g = " It was passed a child from " + N(n._owner.type) + "."), V(n), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), V(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var f = 0; f < n.length; f++) {
            var g = n[f];
            pt(g) && Dt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = $(n);
          if (typeof w == "function" && w !== n.entries)
            for (var b = w.call(n), _; !(_ = b.next()).done; )
              pt(_.value) && Dt(_.value, u);
        }
      }
    }
    function _e(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var f;
        if (typeof u == "function")
          f = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === l || u.$$typeof === y))
          f = u.propTypes;
        else
          return;
        if (f) {
          var g = N(u);
          oe(f, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = N(u);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), f = 0; f < u.length; f++) {
          var g = u[f];
          if (g !== "children" && g !== "key") {
            V(n), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        n.ref !== null && (V(n), x("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Lt(n, u, f, g, w, b) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = me(w);
          T ? v += T : v += Ft();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (N(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, f, w, b);
        if (S == null)
          return S;
        if (_) {
          var A = u.children;
          if (A !== void 0)
            if (g)
              if (ct(A)) {
                for (var U = 0; U < A.length; U++)
                  It(A[U], n);
                Object.freeze && Object.freeze(A);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(A, n);
        }
        return n === i ? we(S) : _e(S), S;
      }
    }
    function be(n, u, f) {
      return Lt(n, u, f, !0);
    }
    function xe(n, u, f) {
      return Lt(n, u, f, !1);
    }
    var ke = xe, Ee = be;
    He.Fragment = i, He.jsx = ke, He.jsxs = Ee;
  }()), He;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Wu() : t.exports = Yu();
})(yi);
const Vu = yi.exports.jsx, qe = ({
  children: t,
  status: e = "default",
  dataSelector: r = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...a
}) => /* @__PURE__ */ Vu(Lu, {
  status: e,
  ...a,
  minWidth: i,
  margin: o,
  "data-selector": r,
  children: t
}), Uu = gt.div`
  margin: 10px;
  position: absolute;
`, Or = gt.div(
  ({ rotate: t }) => Cn`
    rotate: ${t}deg;
  `
), Yt = 0.2, $r = 100, zu = ({
  zoomLevel: t,
  setZoomLevel: e,
  setPanLevel: r,
  visibleRange: i,
  length: o
}) => {
  const a = {
    minWidth: "auto",
    margin: "5px"
  };
  return /* @__PURE__ */ Un(Uu, {
    children: [/* @__PURE__ */ B(qe, {
      ...a,
      onClick: () => r((s) => s + $r / t),
      disabled: i.first <= 0,
      children: /* @__PURE__ */ B(Or, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ B(qe, {
      ...a,
      onClick: () => e((s) => +(s - Yt > 0 ? s - Yt : Yt / 2).toFixed(2)),
      disabled: t < Yt || i.first <= 0,
      children: "\u2796"
    }), /* @__PURE__ */ B(qe, {
      ...a,
      onClick: () => e((s) => +(s === Yt / 2 ? Yt : s + Yt).toFixed(2)),
      disabled: t >= Yt * 10,
      children: "\u2795"
    }), /* @__PURE__ */ B(qe, {
      ...a,
      onClick: () => r((s) => s - $r / t),
      disabled: i.last >= o - 1 || i.last - i.first > o,
      children: /* @__PURE__ */ B(Or, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, gi = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, mi = Pr`
  to {
    rotate: 360deg;
  }
`, Hu = Pr`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, qu = gt.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Bu = gt.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${mi} 2s linear infinite;
  margin: 2px;
`, Nr = gt.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Be = gt.div(
  ({ delay: t }) => Cn`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${gi.pending};
    animation: ${Hu} 0.3s linear alternate infinite;

    ${t ? "animation-delay: 0.2s;" : ""}
  `
);
gt.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${gi.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${mi} 2s linear infinite;
`;
var zn = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function Xu() {
  if (Tr)
    return Te;
  Tr = 1;
  var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, h) {
    var p, y = {}, d = null, m = null;
    h !== void 0 && (d = "" + h), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (p in l)
      i.call(l, p) && !a.hasOwnProperty(p) && (y[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        y[p] === void 0 && (y[p] = l[p]);
    return { $$typeof: e, type: c, key: d, ref: m, props: y, _owner: o.current };
  }
  return Te.Fragment = r, Te.jsx = s, Te.jsxs = s, Te;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function Gu() {
  return Cr || (Cr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, O = "@@iterator";
    function $(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[O];
      return typeof u == "function" ? u : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(n) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          f[g - 1] = arguments[g];
        j("error", n, f);
      }
    }
    function j(n, u, f) {
      {
        var g = R.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", f = f.concat([w]));
        var b = f.map(function(_) {
          return String(_);
        });
        b.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, b);
      }
    }
    var L = !1, P = !1, z = !1, M = !1, X = !1, W;
    W = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || X || n === o || n === h || n === p || M || n === m || L || P || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === W || n.getModuleId !== void 0));
    }
    function C(n, u, f) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? f + "(" + w + ")" : f;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function N(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var u = n;
            return I(u) + ".Consumer";
          case s:
            var f = n;
            return I(f._context) + ".Provider";
          case l:
            return C(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : N(n.type) || "Memo";
          case d: {
            var w = n, b = w._payload, _ = w._init;
            try {
              return N(_(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Y = 0, nt, rt, it, H, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function te() {
      {
        if (Y === 0) {
          nt = console.log, rt = console.info, it = console.warn, H = console.error, kt = console.group, Et = console.groupCollapsed, St = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Y++;
      }
    }
    function ee() {
      {
        if (Y--, Y === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, n, {
              value: nt
            }),
            info: F({}, n, {
              value: rt
            }),
            warn: F({}, n, {
              value: it
            }),
            error: F({}, n, {
              value: H
            }),
            group: F({}, n, {
              value: kt
            }),
            groupCollapsed: F({}, n, {
              value: Et
            }),
            groupEnd: F({}, n, {
              value: St
            })
          });
        }
        Y < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = R.ReactCurrentDispatcher, st;
    function J(n, u, f) {
      {
        if (st === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            st = g && g[1] || "";
          }
        return `
` + st + n;
      }
    }
    var ut = !1, K;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ne();
    }
    function Ot(n, u) {
      if (!n || ut)
        return "";
      {
        var f = K.get(n);
        if (f !== void 0)
          return f;
      }
      var g;
      ut = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = at.current, at.current = null, te();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (D) {
              g = D;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (D) {
              g = D;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            g = D;
          }
          n();
        }
      } catch (D) {
        if (D && g && typeof D.stack == "string") {
          for (var v = D.stack.split(`
`), T = g.stack.split(`
`), E = v.length - 1, S = T.length - 1; E >= 1 && S >= 0 && v[E] !== T[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (v[E] !== T[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || v[E] !== T[S]) {
                    var A = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, A), A;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = b, ee(), Error.prepareStackTrace = w;
      }
      var U = n ? n.displayName || n.name : "", Wt = U ? J(U) : "";
      return typeof n == "function" && K.set(n, Wt), Wt;
    }
    function re(n, u, f) {
      return Ot(n, !1);
    }
    function ie(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, f) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ot(n, ie(n));
      if (typeof n == "string")
        return J(n);
      switch (n) {
        case h:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return re(n.render);
          case y:
            return Z(n.type, u, f);
          case d: {
            var g = n, w = g._payload, b = g._init;
            try {
              return Z(b(w), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, $t = {}, Nt = R.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Nt.setExtraStackFrame(f);
      } else
        Nt.setExtraStackFrame(null);
    }
    function oe(n, u, f, g, w) {
      {
        var b = Function.call.bind(Q);
        for (var _ in n)
          if (b(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var T = Error((g || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = n[_](u, _, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, _, typeof v), tt(null)), v instanceof Error && !(v.message in $t) && ($t[v.message] = !0, tt(w), x("Failed %s type: %s", f, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function ct(n) {
      return ae(n);
    }
    function se(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, f = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return f;
      }
    }
    function ue(n) {
      try {
        return Tt(n), !1;
      } catch {
        return !0;
      }
    }
    function Tt(n) {
      return "" + n;
    }
    function Ct(n) {
      if (ue(n))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = R.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, lt;
    lt = {};
    function le(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function fe(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function he(n, u) {
      if (typeof n.ref == "string" && q.current && u && q.current.stateNode !== u) {
        var f = N(q.current.type);
        lt[f] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(q.current.type), n.ref), lt[f] = !0);
      }
    }
    function pe(n, u) {
      {
        var f = function() {
          At || (At = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function de(n, u) {
      {
        var f = function() {
          Pt || (Pt = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, f, g, w, b, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: f,
        props: _,
        _owner: b
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function ge(n, u, f, g, w) {
      {
        var b, _ = {}, v = null, T = null;
        f !== void 0 && (Ct(f), v = "" + f), fe(u) && (Ct(u.key), v = "" + u.key), le(u) && (T = u.ref, he(u, w));
        for (b in u)
          Q.call(u, b) && !ce.hasOwnProperty(b) && (_[b] = u[b]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (b in E)
            _[b] === void 0 && (_[b] = E[b]);
        }
        if (v || T) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), T && de(_, S);
        }
        return ye(n, v, T, w, g, q.current, _);
      }
    }
    var ft = R.ReactCurrentOwner, Mt = R.ReactDebugCurrentFrame;
    function V(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(f);
      } else
        Mt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Ft() {
      {
        if (ft.current) {
          var n = N(ft.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function me(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), f = n.lineNumber;
          return `

Check your code at ` + u + ":" + f + ".";
        }
        return "";
      }
    }
    var jt = {};
    function ve(n) {
      {
        var u = Ft();
        if (!u) {
          var f = typeof n == "string" ? n : n.displayName || n.name;
          f && (u = `

Check the top-level render call using <` + f + ">.");
        }
        return u;
      }
    }
    function Dt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var f = ve(u);
        if (jt[f])
          return;
        jt[f] = !0;
        var g = "";
        n && n._owner && n._owner !== ft.current && (g = " It was passed a child from " + N(n._owner.type) + "."), V(n), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), V(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var f = 0; f < n.length; f++) {
            var g = n[f];
            pt(g) && Dt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = $(n);
          if (typeof w == "function" && w !== n.entries)
            for (var b = w.call(n), _; !(_ = b.next()).done; )
              pt(_.value) && Dt(_.value, u);
        }
      }
    }
    function _e(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var f;
        if (typeof u == "function")
          f = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === l || u.$$typeof === y))
          f = u.propTypes;
        else
          return;
        if (f) {
          var g = N(u);
          oe(f, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = N(u);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), f = 0; f < u.length; f++) {
          var g = u[f];
          if (g !== "children" && g !== "key") {
            V(n), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        n.ref !== null && (V(n), x("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Lt(n, u, f, g, w, b) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = me(w);
          T ? v += T : v += Ft();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (N(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, f, w, b);
        if (S == null)
          return S;
        if (_) {
          var A = u.children;
          if (A !== void 0)
            if (g)
              if (ct(A)) {
                for (var U = 0; U < A.length; U++)
                  It(A[U], n);
                Object.freeze && Object.freeze(A);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(A, n);
        }
        return n === i ? we(S) : _e(S), S;
      }
    }
    function be(n, u, f) {
      return Lt(n, u, f, !0);
    }
    function xe(n, u, f) {
      return Lt(n, u, f, !1);
    }
    var ke = xe, Ee = be;
    Xe.Fragment = i, Xe.jsx = ke, Xe.jsxs = Ee;
  }()), Xe;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Xu() : t.exports = Gu();
})(zn);
const Ce = zn.exports.jsx, vn = zn.exports.jsxs, Ju = () => /* @__PURE__ */ Ce(qu, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ vn(Bu, {
    children: [/* @__PURE__ */ vn(Nr, {
      children: [/* @__PURE__ */ Ce(Be, {
        delay: !0
      }), /* @__PURE__ */ Ce(Be, {})]
    }), /* @__PURE__ */ vn(Nr, {
      children: [/* @__PURE__ */ Ce(Be, {}), /* @__PURE__ */ Ce(Be, {
        delay: !0
      })]
    })]
  })
}), Qu = ({
  data: t = []
}) => {
  const [e, r] = Ut(1), [i, o] = Ut(0), a = Ar(null), {
    scales: s,
    dimensions: c,
    utils: l,
    visibleRange: h
  } = vs(a, t, e, i);
  return Mu(a, t, i, s, c, l), ca(a, t, i, s, c), /* @__PURE__ */ Un(_i, {
    children: [t != null && t.length ? /* @__PURE__ */ B(zu, {
      zoomLevel: e,
      setZoomLevel: r,
      setPanLevel: o,
      visibleRange: h,
      length: t.length
    }) : /* @__PURE__ */ B(wi, {
      children: /* @__PURE__ */ B(Ju, {})
    }), /* @__PURE__ */ B(vi, {
      ref: a,
      children: /* @__PURE__ */ B(Du, {
        ...c
      })
    })]
  });
};
export {
  Qu as default
};
