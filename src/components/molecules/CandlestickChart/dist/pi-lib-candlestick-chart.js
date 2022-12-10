import Qt, { useState as Vt, useEffect as Gt, useCallback as Hn, useRef as Nr } from "react";
import gt, { css as Cn, keyframes as Tr } from "styled-components";
const di = gt.svg`
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
`, yi = gt.div`
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
`, gi = gt.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function mi(t) {
  return t;
}
var hn = 1, Xe = 2, vn = 3, Le = 4, qn = 1e-6;
function vi(t) {
  return "translate(" + t + ",0)";
}
function _i(t) {
  return "translate(0," + t + ")";
}
function wi(t) {
  return (e) => +t(e);
}
function bi(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (r) => +t(r) + e;
}
function xi() {
  return !this.__axis;
}
function $r(t, e) {
  var r = [], i = null, o = null, a = 6, s = 6, c = 3, f = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, h = t === hn || t === Le ? -1 : 1, p = t === Le || t === Xe ? "x" : "y", y = t === hn || t === vn ? vi : _i;
  function d(m) {
    var k = i == null ? e.ticks ? e.ticks.apply(e, r) : e.domain() : i, R = o == null ? e.tickFormat ? e.tickFormat.apply(e, r) : mi : o, M = Math.max(a, 0) + c, $ = e.range(), x = +$[0] + f, C = +$[$.length - 1] + f, D = (e.bandwidth ? bi : wi)(e.copy(), f), A = m.selection ? m.selection() : m, z = A.selectAll(".domain").data([null]), U = A.selectAll(".tick").data(k, e).order(), B = U.exit(), L = U.enter().append("g").attr("class", "tick"), G = U.select("line"), T = U.select("text");
    z = z.merge(z.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), U = U.merge(L), G = G.merge(L.append("line").attr("stroke", "currentColor").attr(p + "2", h * a)), T = T.merge(L.append("text").attr("fill", "currentColor").attr(p, h * M).attr("dy", t === hn ? "0em" : t === vn ? "0.71em" : "0.32em")), m !== A && (z = z.transition(m), U = U.transition(m), G = G.transition(m), T = T.transition(m), B = B.transition(m).attr("opacity", qn).attr("transform", function(I) {
      return isFinite(I = D(I)) ? y(I + f) : this.getAttribute("transform");
    }), L.attr("opacity", qn).attr("transform", function(I) {
      var O = this.parentNode.__axis;
      return y((O && isFinite(O = O(I)) ? O : D(I)) + f);
    })), B.remove(), z.attr("d", t === Le || t === Xe ? s ? "M" + h * s + "," + x + "H" + f + "V" + C + "H" + h * s : "M" + f + "," + x + "V" + C : s ? "M" + x + "," + h * s + "V" + f + "H" + C + "V" + h * s : "M" + x + "," + f + "H" + C), U.attr("opacity", 1).attr("transform", function(I) {
      return y(D(I) + f);
    }), G.attr(p + "2", h * a), T.attr(p, h * M).text(R), A.filter(xi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Xe ? "start" : t === Le ? "end" : "middle"), A.each(function() {
      this.__axis = D;
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
    return arguments.length ? (f = +m, d) : f;
  }, d;
}
function ki(t) {
  return $r(Xe, t);
}
function Ei(t) {
  return $r(vn, t);
}
var _n = "http://www.w3.org/1999/xhtml";
const Bn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _n,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function cn(t) {
  var e = t += "", r = e.indexOf(":");
  return r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)), Bn.hasOwnProperty(e) ? { space: Bn[e], local: t } : t;
}
function Si(t) {
  return function() {
    var e = this.ownerDocument, r = this.namespaceURI;
    return r === _n && e.documentElement.namespaceURI === _n ? e.createElement(t) : e.createElementNS(r, t);
  };
}
function Ri(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Cr(t) {
  var e = cn(t);
  return (e.local ? Ri : Si)(e);
}
function Oi() {
}
function An(t) {
  return t == null ? Oi : function() {
    return this.querySelector(t);
  };
}
function Ni(t) {
  typeof t != "function" && (t = An(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), f, h, p = 0; p < s; ++p)
      (f = a[p]) && (h = t.call(f, f.__data__, p, a)) && ("__data__" in f && (h.__data__ = f.__data__), c[p] = h);
  return new ot(i, this._parents);
}
function Ti(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function $i() {
  return [];
}
function Ar(t) {
  return t == null ? $i : function() {
    return this.querySelectorAll(t);
  };
}
function Ci(t) {
  return function() {
    return Ti(t.apply(this, arguments));
  };
}
function Ai(t) {
  typeof t == "function" ? t = Ci(t) : t = Ar(t);
  for (var e = this._groups, r = e.length, i = [], o = [], a = 0; a < r; ++a)
    for (var s = e[a], c = s.length, f, h = 0; h < c; ++h)
      (f = s[h]) && (i.push(t.call(f, f.__data__, h, s)), o.push(f));
  return new ot(i, o);
}
function Pr(t) {
  return function() {
    return this.matches(t);
  };
}
function Mr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Pi = Array.prototype.find;
function Mi(t) {
  return function() {
    return Pi.call(this.children, t);
  };
}
function Fi() {
  return this.firstElementChild;
}
function ji(t) {
  return this.select(t == null ? Fi : Mi(typeof t == "function" ? t : Mr(t)));
}
var Di = Array.prototype.filter;
function Ii() {
  return Array.from(this.children);
}
function Li(t) {
  return function() {
    return Di.call(this.children, t);
  };
}
function Wi(t) {
  return this.selectAll(t == null ? Ii : Li(typeof t == "function" ? t : Mr(t)));
}
function Yi(t) {
  typeof t != "function" && (t = Pr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], f, h = 0; h < s; ++h)
      (f = a[h]) && t.call(f, f.__data__, h, a) && c.push(f);
  return new ot(i, this._parents);
}
function Fr(t) {
  return new Array(t.length);
}
function Vi() {
  return new ot(this._enter || this._groups.map(Fr), this._parents);
}
function Qe(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Qe.prototype = {
  constructor: Qe,
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
function zi(t) {
  return function() {
    return t;
  };
}
function Ui(t, e, r, i, o, a) {
  for (var s = 0, c, f = e.length, h = a.length; s < h; ++s)
    (c = e[s]) ? (c.__data__ = a[s], i[s] = c) : r[s] = new Qe(t, a[s]);
  for (; s < f; ++s)
    (c = e[s]) && (o[s] = c);
}
function Hi(t, e, r, i, o, a, s) {
  var c, f, h = /* @__PURE__ */ new Map(), p = e.length, y = a.length, d = new Array(p), m;
  for (c = 0; c < p; ++c)
    (f = e[c]) && (d[c] = m = s.call(f, f.__data__, c, e) + "", h.has(m) ? o[c] = f : h.set(m, f));
  for (c = 0; c < y; ++c)
    m = s.call(t, a[c], c, a) + "", (f = h.get(m)) ? (i[c] = f, f.__data__ = a[c], h.delete(m)) : r[c] = new Qe(t, a[c]);
  for (c = 0; c < p; ++c)
    (f = e[c]) && h.get(d[c]) === f && (o[c] = f);
}
function qi(t) {
  return t.__data__;
}
function Bi(t, e) {
  if (!arguments.length)
    return Array.from(this, qi);
  var r = e ? Hi : Ui, i = this._parents, o = this._groups;
  typeof t != "function" && (t = zi(t));
  for (var a = o.length, s = new Array(a), c = new Array(a), f = new Array(a), h = 0; h < a; ++h) {
    var p = i[h], y = o[h], d = y.length, m = Xi(t.call(p, p && p.__data__, h, i)), k = m.length, R = c[h] = new Array(k), M = s[h] = new Array(k), $ = f[h] = new Array(d);
    r(p, y, R, M, $, m, e);
    for (var x = 0, C = 0, D, A; x < k; ++x)
      if (D = R[x]) {
        for (x >= C && (C = x + 1); !(A = M[C]) && ++C < k; )
          ;
        D._next = A || null;
      }
  }
  return s = new ot(s, i), s._enter = c, s._exit = f, s;
}
function Xi(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Gi() {
  return new ot(this._exit || this._groups.map(Fr), this._parents);
}
function Ji(t, e, r) {
  var i = this.enter(), o = this, a = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), r == null ? a.remove() : r(a), i && o ? i.merge(o).order() : o;
}
function Ki(t) {
  for (var e = t.selection ? t.selection() : t, r = this._groups, i = e._groups, o = r.length, a = i.length, s = Math.min(o, a), c = new Array(o), f = 0; f < s; ++f)
    for (var h = r[f], p = i[f], y = h.length, d = c[f] = new Array(y), m, k = 0; k < y; ++k)
      (m = h[k] || p[k]) && (d[k] = m);
  for (; f < o; ++f)
    c[f] = r[f];
  return new ot(c, this._parents);
}
function Zi() {
  for (var t = this._groups, e = -1, r = t.length; ++e < r; )
    for (var i = t[e], o = i.length - 1, a = i[o], s; --o >= 0; )
      (s = i[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function Qi(t) {
  t || (t = to);
  function e(y, d) {
    return y && d ? t(y.__data__, d.__data__) : !y - !d;
  }
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
    for (var s = r[a], c = s.length, f = o[a] = new Array(c), h, p = 0; p < c; ++p)
      (h = s[p]) && (f[p] = h);
    f.sort(e);
  }
  return new ot(o, this._parents).order();
}
function to(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function eo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function no() {
  return Array.from(this);
}
function ro() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length; o < a; ++o) {
      var s = i[o];
      if (s)
        return s;
    }
  return null;
}
function io() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function oo() {
  return !this.node();
}
function ao(t) {
  for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
    for (var o = e[r], a = 0, s = o.length, c; a < s; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o);
  return this;
}
function so(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function uo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function co(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function fo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function lo(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function ho(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
  };
}
function po(t, e) {
  var r = cn(t);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((e == null ? r.local ? uo : so : typeof e == "function" ? r.local ? ho : lo : r.local ? fo : co)(r, e));
}
function jr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function yo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function go(t, e, r) {
  return function() {
    this.style.setProperty(t, e, r);
  };
}
function mo(t, e, r) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, r);
  };
}
function vo(t, e, r) {
  return arguments.length > 1 ? this.each((e == null ? yo : typeof e == "function" ? mo : go)(t, e, r == null ? "" : r)) : Jt(this.node(), t);
}
function Jt(t, e) {
  return t.style.getPropertyValue(e) || jr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function _o(t) {
  return function() {
    delete this[t];
  };
}
function wo(t, e) {
  return function() {
    this[t] = e;
  };
}
function bo(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? delete this[t] : this[t] = r;
  };
}
function xo(t, e) {
  return arguments.length > 1 ? this.each((e == null ? _o : typeof e == "function" ? bo : wo)(t, e)) : this.node()[t];
}
function Dr(t) {
  return t.trim().split(/^|\s+/);
}
function Pn(t) {
  return t.classList || new Ir(t);
}
function Ir(t) {
  this._node = t, this._names = Dr(t.getAttribute("class") || "");
}
Ir.prototype = {
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
function Lr(t, e) {
  for (var r = Pn(t), i = -1, o = e.length; ++i < o; )
    r.add(e[i]);
}
function Wr(t, e) {
  for (var r = Pn(t), i = -1, o = e.length; ++i < o; )
    r.remove(e[i]);
}
function ko(t) {
  return function() {
    Lr(this, t);
  };
}
function Eo(t) {
  return function() {
    Wr(this, t);
  };
}
function So(t, e) {
  return function() {
    (e.apply(this, arguments) ? Lr : Wr)(this, t);
  };
}
function Ro(t, e) {
  var r = Dr(t + "");
  if (arguments.length < 2) {
    for (var i = Pn(this.node()), o = -1, a = r.length; ++o < a; )
      if (!i.contains(r[o]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? So : e ? ko : Eo)(r, e));
}
function Oo() {
  this.textContent = "";
}
function No(t) {
  return function() {
    this.textContent = t;
  };
}
function To(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e == null ? "" : e;
  };
}
function $o(t) {
  return arguments.length ? this.each(t == null ? Oo : (typeof t == "function" ? To : No)(t)) : this.node().textContent;
}
function Co() {
  this.innerHTML = "";
}
function Ao(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Po(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e == null ? "" : e;
  };
}
function Mo(t) {
  return arguments.length ? this.each(t == null ? Co : (typeof t == "function" ? Po : Ao)(t)) : this.node().innerHTML;
}
function Fo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function jo() {
  return this.each(Fo);
}
function Do() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Io() {
  return this.each(Do);
}
function Lo(t) {
  var e = typeof t == "function" ? t : Cr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Wo() {
  return null;
}
function Yo(t, e) {
  var r = typeof t == "function" ? t : Cr(t), i = e == null ? Wo : typeof e == "function" ? e : An(e);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Vo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function zo() {
  return this.each(Vo);
}
function Uo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ho() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function qo(t) {
  return this.select(t ? Ho : Uo);
}
function Bo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Xo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Go(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    return i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: r };
  });
}
function Jo(t) {
  return function() {
    var e = this.__on;
    if (!!e) {
      for (var r = 0, i = -1, o = e.length, a; r < o; ++r)
        a = e[r], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++i] = a;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function Ko(t, e, r) {
  return function() {
    var i = this.__on, o, a = Xo(e);
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
function Zo(t, e, r) {
  var i = Go(t + ""), o, a = i.length, s;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var f = 0, h = c.length, p; f < h; ++f)
        for (o = 0, p = c[f]; o < a; ++o)
          if ((s = i[o]).type === p.type && s.name === p.name)
            return p.value;
    }
    return;
  }
  for (c = e ? Ko : Jo, o = 0; o < a; ++o)
    this.each(c(i[o], e, r));
  return this;
}
function Yr(t, e, r) {
  var i = jr(t), o = i.CustomEvent;
  typeof o == "function" ? o = new o(e, r) : (o = i.document.createEvent("Event"), r ? (o.initEvent(e, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function Qo(t, e) {
  return function() {
    return Yr(this, t, e);
  };
}
function ta(t, e) {
  return function() {
    return Yr(this, t, e.apply(this, arguments));
  };
}
function ea(t, e) {
  return this.each((typeof e == "function" ? ta : Qo)(t, e));
}
function* na() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && (yield s);
}
var Vr = [null];
function ot(t, e) {
  this._groups = t, this._parents = e;
}
function De() {
  return new ot([[document.documentElement]], Vr);
}
function ra() {
  return this;
}
ot.prototype = De.prototype = {
  constructor: ot,
  select: Ni,
  selectAll: Ai,
  selectChild: ji,
  selectChildren: Wi,
  filter: Yi,
  data: Bi,
  enter: Vi,
  exit: Gi,
  join: Ji,
  merge: Ki,
  selection: ra,
  order: Zi,
  sort: Qi,
  call: eo,
  nodes: no,
  node: ro,
  size: io,
  empty: oo,
  each: ao,
  attr: po,
  style: vo,
  property: xo,
  classed: Ro,
  text: $o,
  html: Mo,
  raise: jo,
  lower: Io,
  append: Lo,
  insert: Yo,
  remove: zo,
  clone: qo,
  datum: Bo,
  on: Zo,
  dispatch: ea,
  [Symbol.iterator]: na
};
function wn(t) {
  return typeof t == "string" ? new ot([[document.querySelector(t)]], [document.documentElement]) : new ot([[t]], Vr);
}
const ia = 500, Wt = 10, zt = [65, 55], pn = {}, Se = (t = "", e, r) => {
  var y;
  const i = Math.round((y = r.bandwidth) == null ? void 0 : y.call(r)) || 0, o = `${t}-${e}-${i}`;
  if (pn[o] !== void 0)
    return pn[o];
  let a = "";
  const s = new Date(t), [c, f, h] = t.split("-");
  h === "01" && (f === "01" ? a = c : a = s.toLocaleString("en-UK", {
    month: "short"
  }));
  let p = [];
  return i > 1 && p.push(16), i > 3 && p.push(8, 24), i > 7 && (p = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), p.includes(Number(h)) && (a = h), r.domain().length - 1 === e && (a = h), pn[o] = a, a;
}, oa = (t, e, r, i, o) => {
  const [a, s] = Vt(), [c, f] = Vt(), { xScale: h, yScale: p } = i, { width: y, height: d, offsetWidth: m } = o;
  Gt(() => {
    !t.current || (s(
      wn(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), f(wn(t.current).append("g").classed("y-axis", !0)));
  }, []), Gt(() => {
    !h.domain || !e || (a.call(Ei(h)).attr(
      "transform",
      `translate(${m},${d - zt[0]})`
    ).selectAll("text").classed(
      "emphasise",
      (k, R) => Se(k, R, h).length > 2
    ).attr(
      "x",
      (k, R) => Se(k, R, h).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((k, R) => Se(k, R, h)), a.selectAll("line").attr(
      "stroke",
      (k, R) => Se(k, R, h).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (k, R) => Se(k, R, h).length ? 12 : 6
    ), c.call(ki(p)).attr(
      "transform",
      `translate(${y - zt[1] + Wt},${Wt})`
    ));
  }, [h, p]);
};
function Ge(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function aa(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function zr(t) {
  let e, r, i;
  t.length !== 2 ? (e = Ge, r = (c, f) => Ge(t(c), f), i = (c, f) => t(c) - f) : (e = t === Ge || t === aa ? t : sa, r = t, i = t);
  function o(c, f, h = 0, p = c.length) {
    if (h < p) {
      if (e(f, f) !== 0)
        return p;
      do {
        const y = h + p >>> 1;
        r(c[y], f) < 0 ? h = y + 1 : p = y;
      } while (h < p);
    }
    return h;
  }
  function a(c, f, h = 0, p = c.length) {
    if (h < p) {
      if (e(f, f) !== 0)
        return p;
      do {
        const y = h + p >>> 1;
        r(c[y], f) <= 0 ? h = y + 1 : p = y;
      } while (h < p);
    }
    return h;
  }
  function s(c, f, h = 0, p = c.length) {
    const y = o(c, f, h, p - 1);
    return y > h && i(c[y - 1], f) > -i(c[y], f) ? y - 1 : y;
  }
  return { left: o, center: s, right: a };
}
function sa() {
  return 0;
}
function ua(t) {
  return t === null ? NaN : +t;
}
const ca = zr(Ge), fa = ca.right;
zr(ua).center;
const la = fa;
class Xn extends Map {
  constructor(e, r = da) {
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
    return super.set(ha(this, e), r);
  }
  delete(e) {
    return super.delete(pa(this, e));
  }
}
function Gn({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : r;
}
function ha({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : (t.set(i, r), r);
}
function pa({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) && (r = t.get(i), t.delete(i)), r;
}
function da(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var bn = Math.sqrt(50), xn = Math.sqrt(10), kn = Math.sqrt(2);
function ya(t, e, r) {
  var i, o = -1, a, s, c;
  if (e = +e, t = +t, r = +r, t === e && r > 0)
    return [t];
  if ((i = e < t) && (a = t, t = e, e = a), (c = Ur(t, e, r)) === 0 || !isFinite(c))
    return [];
  if (c > 0) {
    let f = Math.round(t / c), h = Math.round(e / c);
    for (f * c < t && ++f, h * c > e && --h, s = new Array(a = h - f + 1); ++o < a; )
      s[o] = (f + o) * c;
  } else {
    c = -c;
    let f = Math.round(t * c), h = Math.round(e * c);
    for (f / c < t && ++f, h / c > e && --h, s = new Array(a = h - f + 1); ++o < a; )
      s[o] = (f + o) / c;
  }
  return i && s.reverse(), s;
}
function Ur(t, e, r) {
  var i = (e - t) / Math.max(0, r), o = Math.floor(Math.log(i) / Math.LN10), a = i / Math.pow(10, o);
  return o >= 0 ? (a >= bn ? 10 : a >= xn ? 5 : a >= kn ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= bn ? 10 : a >= xn ? 5 : a >= kn ? 2 : 1);
}
function ga(t, e, r) {
  var i = Math.abs(e - t) / Math.max(0, r), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), a = i / o;
  return a >= bn ? o *= 10 : a >= xn ? o *= 5 : a >= kn && (o *= 2), e < t ? -o : o;
}
function ma(t, e, r) {
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
function Hr() {
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
    return Hr(e, r).unknown(i);
  }, Mn.apply(o, arguments), o;
}
function qr() {
  var t = Hr().unknown(void 0), e = t.domain, r = t.range, i = 0, o = 1, a, s, c = !1, f = 0, h = 0, p = 0.5;
  delete t.unknown;
  function y() {
    var d = e().length, m = o < i, k = m ? o : i, R = m ? i : o;
    a = (R - k) / Math.max(1, d - f + h * 2), c && (a = Math.floor(a)), k += (R - k - a * (d - f)) * p, s = a * (1 - f), c && (k = Math.round(k), s = Math.round(s));
    var M = ma(d).map(function($) {
      return k + a * $;
    });
    return r(m ? M.reverse() : M);
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
    return arguments.length ? (f = Math.min(1, h = +d), y()) : f;
  }, t.paddingInner = function(d) {
    return arguments.length ? (f = Math.min(1, d), y()) : f;
  }, t.paddingOuter = function(d) {
    return arguments.length ? (h = +d, y()) : h;
  }, t.align = function(d) {
    return arguments.length ? (p = Math.max(0, Math.min(1, d)), y()) : p;
  }, t.copy = function() {
    return qr(e(), [i, o]).round(c).paddingInner(f).paddingOuter(h).align(p);
  }, Mn.apply(y(), arguments);
}
function Fn(t, e, r) {
  t.prototype = e.prototype = r, r.constructor = t;
}
function Br(t, e) {
  var r = Object.create(t.prototype);
  for (var i in e)
    r[i] = e[i];
  return r;
}
function Ie() {
}
var Me = 0.7, tn = 1 / Me, Xt = "\\s*([+-]?\\d+)\\s*", Fe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", va = /^#([0-9a-f]{3,8})$/, _a = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), wa = new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`), ba = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${Fe}\\)$`), xa = new RegExp(`^rgba\\(${vt},${vt},${vt},${Fe}\\)$`), ka = new RegExp(`^hsl\\(${Fe},${vt},${vt}\\)$`), Ea = new RegExp(`^hsla\\(${Fe},${vt},${vt},${Fe}\\)$`), Kn = {
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
Fn(Ie, Ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Zn,
  formatHex: Zn,
  formatHex8: Sa,
  formatHsl: Ra,
  formatRgb: Qn,
  toString: Qn
});
function Zn() {
  return this.rgb().formatHex();
}
function Sa() {
  return this.rgb().formatHex8();
}
function Ra() {
  return Xr(this).formatHsl();
}
function Qn() {
  return this.rgb().formatRgb();
}
function Ht(t) {
  var e, r;
  return t = (t + "").trim().toLowerCase(), (e = va.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? tr(e) : r === 3 ? new et(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? We(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? We(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = _a.exec(t)) ? new et(e[1], e[2], e[3], 1) : (e = wa.exec(t)) ? new et(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ba.exec(t)) ? We(e[1], e[2], e[3], e[4]) : (e = xa.exec(t)) ? We(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ka.exec(t)) ? rr(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ea.exec(t)) ? rr(e[1], e[2] / 100, e[3] / 100, e[4]) : Kn.hasOwnProperty(t) ? tr(Kn[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function tr(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function We(t, e, r, i) {
  return i <= 0 && (t = e = r = NaN), new et(t, e, r, i);
}
function Oa(t) {
  return t instanceof Ie || (t = Ht(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function En(t, e, r, i) {
  return arguments.length === 1 ? Oa(t) : new et(t, e, r, i == null ? 1 : i);
}
function et(t, e, r, i) {
  this.r = +t, this.g = +e, this.b = +r, this.opacity = +i;
}
Fn(et, En, Br(Ie, {
  brighter(t) {
    return t = t == null ? tn : Math.pow(tn, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Me : Math.pow(Me, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new et(Ut(this.r), Ut(this.g), Ut(this.b), en(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: er,
  formatHex: er,
  formatHex8: Na,
  formatRgb: nr,
  toString: nr
}));
function er() {
  return `#${Yt(this.r)}${Yt(this.g)}${Yt(this.b)}`;
}
function Na() {
  return `#${Yt(this.r)}${Yt(this.g)}${Yt(this.b)}${Yt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nr() {
  const t = en(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function en(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ut(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Yt(t) {
  return t = Ut(t), (t < 16 ? "0" : "") + t.toString(16);
}
function rr(t, e, r, i) {
  return i <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new yt(t, e, r, i);
}
function Xr(t) {
  if (t instanceof yt)
    return new yt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ie || (t = Ht(t)), !t)
    return new yt();
  if (t instanceof yt)
    return t;
  t = t.rgb();
  var e = t.r / 255, r = t.g / 255, i = t.b / 255, o = Math.min(e, r, i), a = Math.max(e, r, i), s = NaN, c = a - o, f = (a + o) / 2;
  return c ? (e === a ? s = (r - i) / c + (r < i) * 6 : r === a ? s = (i - e) / c + 2 : s = (e - r) / c + 4, c /= f < 0.5 ? a + o : 2 - a - o, s *= 60) : c = f > 0 && f < 1 ? 0 : s, new yt(s, c, f, t.opacity);
}
function Ta(t, e, r, i) {
  return arguments.length === 1 ? Xr(t) : new yt(t, e, r, i == null ? 1 : i);
}
function yt(t, e, r, i) {
  this.h = +t, this.s = +e, this.l = +r, this.opacity = +i;
}
Fn(yt, Ta, Br(Ie, {
  brighter(t) {
    return t = t == null ? tn : Math.pow(tn, t), new yt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Me : Math.pow(Me, t), new yt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * e, o = 2 * r - i;
    return new et(
      dn(t >= 240 ? t - 240 : t + 120, o, i),
      dn(t, o, i),
      dn(t < 120 ? t + 240 : t - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new yt(ir(this.h), Ye(this.s), Ye(this.l), en(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = en(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ir(this.h)}, ${Ye(this.s) * 100}%, ${Ye(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ir(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ye(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function dn(t, e, r) {
  return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255;
}
const jn = (t) => () => t;
function $a(t, e) {
  return function(r) {
    return t + r * e;
  };
}
function Ca(t, e, r) {
  return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(i) {
    return Math.pow(t + i * e, r);
  };
}
function Aa(t) {
  return (t = +t) == 1 ? Gr : function(e, r) {
    return r - e ? Ca(e, r, t) : jn(isNaN(e) ? r : e);
  };
}
function Gr(t, e) {
  var r = e - t;
  return r ? $a(t, r) : jn(isNaN(t) ? e : t);
}
const nn = function t(e) {
  var r = Aa(e);
  function i(o, a) {
    var s = r((o = En(o)).r, (a = En(a)).r), c = r(o.g, a.g), f = r(o.b, a.b), h = Gr(o.opacity, a.opacity);
    return function(p) {
      return o.r = s(p), o.g = c(p), o.b = f(p), o.opacity = h(p), o + "";
    };
  }
  return i.gamma = t, i;
}(1);
function Pa(t, e) {
  e || (e = []);
  var r = t ? Math.min(e.length, t.length) : 0, i = e.slice(), o;
  return function(a) {
    for (o = 0; o < r; ++o)
      i[o] = t[o] * (1 - a) + e[o] * a;
    return i;
  };
}
function Ma(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Fa(t, e) {
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
function ja(t, e) {
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
function Da(t, e) {
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
var Sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yn = new RegExp(Sn.source, "g");
function Ia(t) {
  return function() {
    return t;
  };
}
function La(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Jr(t, e) {
  var r = Sn.lastIndex = yn.lastIndex = 0, i, o, a, s = -1, c = [], f = [];
  for (t = t + "", e = e + ""; (i = Sn.exec(t)) && (o = yn.exec(e)); )
    (a = o.index) > r && (a = e.slice(r, a), c[s] ? c[s] += a : c[++s] = a), (i = i[0]) === (o = o[0]) ? c[s] ? c[s] += o : c[++s] = o : (c[++s] = null, f.push({ i: s, x: dt(i, o) })), r = yn.lastIndex;
  return r < e.length && (a = e.slice(r), c[s] ? c[s] += a : c[++s] = a), c.length < 2 ? f[0] ? La(f[0].x) : Ia(e) : (e = f.length, function(h) {
    for (var p = 0, y; p < e; ++p)
      c[(y = f[p]).i] = y.x(h);
    return c.join("");
  });
}
function Dn(t, e) {
  var r = typeof e, i;
  return e == null || r === "boolean" ? jn(e) : (r === "number" ? dt : r === "string" ? (i = Ht(e)) ? (e = i, nn) : Jr : e instanceof Ht ? nn : e instanceof Date ? ja : Ma(e) ? Pa : Array.isArray(e) ? Fa : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Da : dt)(t, e);
}
function Wa(t, e) {
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
function Kr(t, e, r, i, o, a) {
  var s, c, f;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (f = t * r + e * i) && (r -= t * f, i -= e * f), (c = Math.sqrt(r * r + i * i)) && (r /= c, i /= c, f /= c), t * i < e * r && (t = -t, e = -e, f = -f, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(e, t) * or,
    skewX: Math.atan(f) * or,
    scaleX: s,
    scaleY: c
  };
}
var Ve;
function Ya(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Rn : Kr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Va(t) {
  return t == null || (Ve || (Ve = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ve.setAttribute("transform", t), !(t = Ve.transform.baseVal.consolidate())) ? Rn : (t = t.matrix, Kr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Zr(t, e, r, i) {
  function o(h) {
    return h.length ? h.pop() + " " : "";
  }
  function a(h, p, y, d, m, k) {
    if (h !== y || p !== d) {
      var R = m.push("translate(", null, e, null, r);
      k.push({ i: R - 4, x: dt(h, y) }, { i: R - 2, x: dt(p, d) });
    } else
      (y || d) && m.push("translate(" + y + e + d + r);
  }
  function s(h, p, y, d) {
    h !== p ? (h - p > 180 ? p += 360 : p - h > 180 && (h += 360), d.push({ i: y.push(o(y) + "rotate(", null, i) - 2, x: dt(h, p) })) : p && y.push(o(y) + "rotate(" + p + i);
  }
  function c(h, p, y, d) {
    h !== p ? d.push({ i: y.push(o(y) + "skewX(", null, i) - 2, x: dt(h, p) }) : p && y.push(o(y) + "skewX(" + p + i);
  }
  function f(h, p, y, d, m, k) {
    if (h !== y || p !== d) {
      var R = m.push(o(m) + "scale(", null, ",", null, ")");
      k.push({ i: R - 4, x: dt(h, y) }, { i: R - 2, x: dt(p, d) });
    } else
      (y !== 1 || d !== 1) && m.push(o(m) + "scale(" + y + "," + d + ")");
  }
  return function(h, p) {
    var y = [], d = [];
    return h = t(h), p = t(p), a(h.translateX, h.translateY, p.translateX, p.translateY, y, d), s(h.rotate, p.rotate, y, d), c(h.skewX, p.skewX, y, d), f(h.scaleX, h.scaleY, p.scaleX, p.scaleY, y, d), h = p = null, function(m) {
      for (var k = -1, R = d.length, M; ++k < R; )
        y[(M = d[k]).i] = M.x(m);
      return y.join("");
    };
  };
}
var za = Zr(Ya, "px, ", "px)", "deg)"), Ua = Zr(Va, ", ", ")", ")");
function Ha(t) {
  return function() {
    return t;
  };
}
function qa(t) {
  return +t;
}
var ar = [0, 1];
function Bt(t) {
  return t;
}
function On(t, e) {
  return (e -= t = +t) ? function(r) {
    return (r - t) / e;
  } : Ha(isNaN(e) ? NaN : 0.5);
}
function Ba(t, e) {
  var r;
  return t > e && (r = t, t = e, e = r), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Xa(t, e, r) {
  var i = t[0], o = t[1], a = e[0], s = e[1];
  return o < i ? (i = On(o, i), a = r(s, a)) : (i = On(i, o), a = r(a, s)), function(c) {
    return a(i(c));
  };
}
function Ga(t, e, r) {
  var i = Math.min(t.length, e.length) - 1, o = new Array(i), a = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    o[s] = On(t[s], t[s + 1]), a[s] = r(e[s], e[s + 1]);
  return function(c) {
    var f = la(t, c, 1, i) - 1;
    return a[f](o[f](c));
  };
}
function Ja(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ka() {
  var t = ar, e = ar, r = Dn, i, o, a, s = Bt, c, f, h;
  function p() {
    var d = Math.min(t.length, e.length);
    return s !== Bt && (s = Ba(t[0], t[d - 1])), c = d > 2 ? Ga : Xa, f = h = null, y;
  }
  function y(d) {
    return d == null || isNaN(d = +d) ? a : (f || (f = c(t.map(i), e, r)))(i(s(d)));
  }
  return y.invert = function(d) {
    return s(o((h || (h = c(e, t.map(i), dt)))(d)));
  }, y.domain = function(d) {
    return arguments.length ? (t = Array.from(d, qa), p()) : t.slice();
  }, y.range = function(d) {
    return arguments.length ? (e = Array.from(d), p()) : e.slice();
  }, y.rangeRound = function(d) {
    return e = Array.from(d), r = Wa, p();
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
function Za() {
  return Ka()(Bt, Bt);
}
function Qa(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function rn(t, e) {
  if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var r, i = t.slice(0, r);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(r + 1)
  ];
}
function Kt(t) {
  return t = rn(Math.abs(t)), t ? t[1] : NaN;
}
function ts(t, e) {
  return function(r, i) {
    for (var o = r.length, a = [], s = 0, c = t[0], f = 0; o > 0 && c > 0 && (f + c + 1 > i && (c = Math.max(1, i - f)), a.push(r.substring(o -= c, o + c)), !((f += c + 1) > i)); )
      c = t[s = (s + 1) % t.length];
    return a.reverse().join(e);
  };
}
function es(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return t[+r];
    });
  };
}
var ns = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function on(t) {
  if (!(e = ns.exec(t)))
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
on.prototype = In.prototype;
function In(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
In.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function rs(t) {
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
var Qr;
function is(t, e) {
  var r = rn(t, e);
  if (!r)
    return t + "";
  var i = r[0], o = r[1], a = o - (Qr = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = i.length;
  return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + rn(t, Math.max(0, e + a - 1))[0];
}
function sr(t, e) {
  var r = rn(t, e);
  if (!r)
    return t + "";
  var i = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const ur = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Qa,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => sr(t * 100, e),
  r: sr,
  s: is,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function cr(t) {
  return t;
}
var fr = Array.prototype.map, lr = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function os(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? cr : ts(fr.call(t.grouping, Number), t.thousands + ""), r = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? cr : es(fr.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", c = t.minus === void 0 ? "\u2212" : t.minus + "", f = t.nan === void 0 ? "NaN" : t.nan + "";
  function h(y) {
    y = on(y);
    var d = y.fill, m = y.align, k = y.sign, R = y.symbol, M = y.zero, $ = y.width, x = y.comma, C = y.precision, D = y.trim, A = y.type;
    A === "n" ? (x = !0, A = "g") : ur[A] || (C === void 0 && (C = 12), D = !0, A = "g"), (M || d === "0" && m === "=") && (M = !0, d = "0", m = "=");
    var z = R === "$" ? r : R === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", U = R === "$" ? i : /[%p]/.test(A) ? s : "", B = ur[A], L = /[defgprs%]/.test(A);
    C = C === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function G(T) {
      var I = z, O = U, F, W, nt;
      if (A === "c")
        O = B(T) + O, T = "";
      else {
        T = +T;
        var rt = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? f : B(Math.abs(T), C), D && (T = rs(T)), rt && +T == 0 && k !== "+" && (rt = !1), I = (rt ? k === "(" ? k : c : k === "-" || k === "(" ? "" : k) + I, O = (A === "s" ? lr[8 + Qr / 3] : "") + O + (rt && k === "(" ? ")" : ""), L) {
          for (F = -1, W = T.length; ++F < W; )
            if (nt = T.charCodeAt(F), 48 > nt || nt > 57) {
              O = (nt === 46 ? o + T.slice(F + 1) : T.slice(F)) + O, T = T.slice(0, F);
              break;
            }
        }
      }
      x && !M && (T = e(T, 1 / 0));
      var it = I.length + T.length + O.length, H = it < $ ? new Array($ - it + 1).join(d) : "";
      switch (x && M && (T = e(H + T, H.length ? $ - O.length : 1 / 0), H = ""), m) {
        case "<":
          T = I + T + O + H;
          break;
        case "=":
          T = I + H + T + O;
          break;
        case "^":
          T = H.slice(0, it = H.length >> 1) + I + T + O + H.slice(it);
          break;
        default:
          T = H + I + T + O;
          break;
      }
      return a(T);
    }
    return G.toString = function() {
      return y + "";
    }, G;
  }
  function p(y, d) {
    var m = h((y = on(y), y.type = "f", y)), k = Math.max(-8, Math.min(8, Math.floor(Kt(d) / 3))) * 3, R = Math.pow(10, -k), M = lr[8 + k / 3];
    return function($) {
      return m(R * $) + M;
    };
  }
  return {
    format: h,
    formatPrefix: p
  };
}
var ze, ti, ei;
as({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function as(t) {
  return ze = os(t), ti = ze.format, ei = ze.formatPrefix, ze;
}
function ss(t) {
  return Math.max(0, -Kt(Math.abs(t)));
}
function us(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Kt(e) / 3))) * 3 - Kt(Math.abs(t)));
}
function cs(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Kt(e) - Kt(t)) + 1;
}
function fs(t, e, r, i) {
  var o = ga(t, e, r), a;
  switch (i = on(i == null ? ",f" : i), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(a = us(o, s)) && (i.precision = a), ei(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(a = cs(o, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = a - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(a = ss(o)) && (i.precision = a - (i.type === "%") * 2);
      break;
    }
  }
  return ti(i);
}
function ls(t) {
  var e = t.domain;
  return t.ticks = function(r) {
    var i = e();
    return ya(i[0], i[i.length - 1], r == null ? 10 : r);
  }, t.tickFormat = function(r, i) {
    var o = e();
    return fs(o[0], o[o.length - 1], r == null ? 10 : r, i);
  }, t.nice = function(r) {
    r == null && (r = 10);
    var i = e(), o = 0, a = i.length - 1, s = i[o], c = i[a], f, h, p = 10;
    for (c < s && (h = s, s = c, c = h, h = o, o = a, a = h); p-- > 0; ) {
      if (h = Ur(s, c, r), h === f)
        return i[o] = s, i[a] = c, e(i);
      if (h > 0)
        s = Math.floor(s / h) * h, c = Math.ceil(c / h) * h;
      else if (h < 0)
        s = Math.ceil(s * h) / h, c = Math.floor(c * h) / h;
      else
        break;
      f = h;
    }
    return t;
  }, t;
}
function ni() {
  var t = Za();
  return t.copy = function() {
    return Ja(t, ni());
  }, Mn.apply(t, arguments), ls(t);
}
const { abs: gn, min: hr, max: hs, round: pr } = Math, ps = (t, e, r, i) => {
  const [o, a] = Vt({
    width: 0,
    height: 0,
    offsetWidth: 0
  }), [s, c] = Vt({
    xScale: (d) => d,
    yScale: (d) => d
  }), [f, h] = Vt({ first: 0, last: 0 }), p = Hn(
    (d, m) => gn(s.yScale(m) - s.yScale(d)) || 1,
    [s.yScale]
  ), y = Hn(
    (d, m) => s.yScale(hr(d, m)) - p(d, m) + Wt,
    [s.yScale]
  );
  return Gt(() => {
    var B;
    if (!(e != null && e.length))
      return;
    const { clientWidth: d, clientHeight: m } = t.current, k = qr().range([20, d * r - 20]).domain(e.map(({ date: L }) => L)).padding(0.3), R = ((B = k.bandwidth) == null ? void 0 : B.call(k)) * 1.44, M = R * e.length, $ = i - M + d - zt[1] + Wt, x = pr((gn($) - Wt) / R), C = pr((gn($) + d - zt[1]) / R) + 1, D = e.slice(x > 0 ? x : 0, C), A = hr(...D.map(({ low: L }) => L)), z = hs(...D.map(({ high: L }) => L)), U = ni().domain([A - 20, z + 20]).range([m - zt[0] - Wt, Wt]);
    h({ first: x, last: C }), a({ width: d, height: m, offsetWidth: $ }), c({ xScale: k, yScale: U });
  }, [r, i, e]), { utils: { scaledHeight: p, scaledY: y }, visibleRange: f, dimensions: o, scales: s };
};
var ds = { value: () => {
} };
function ri() {
  for (var t = 0, e = arguments.length, r = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in r || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new Je(r);
}
function Je(t) {
  this._ = t;
}
function ys(t, e) {
  return t.trim().split(/^|\s+/).map(function(r) {
    var i = "", o = r.indexOf(".");
    if (o >= 0 && (i = r.slice(o + 1), r = r.slice(0, o)), r && !e.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
Je.prototype = ri.prototype = {
  constructor: Je,
  on: function(t, e) {
    var r = this._, i = ys(t + "", r), o, a = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((o = (t = i[a]).type) && (o = gs(r[o], t.name)))
          return o;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < s; )
      if (o = (t = i[a]).type)
        r[o] = dr(r[o], t.name, e);
      else if (e == null)
        for (o in r)
          r[o] = dr(r[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var r in e)
      t[r] = e[r].slice();
    return new Je(t);
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
function gs(t, e) {
  for (var r = 0, i = t.length, o; r < i; ++r)
    if ((o = t[r]).name === e)
      return o.value;
}
function dr(t, e, r) {
  for (var i = 0, o = t.length; i < o; ++i)
    if (t[i].name === e) {
      t[i] = ds, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return r != null && t.push({ name: e, value: r }), t;
}
var Zt = 0, Ae = 0, Re = 0, ii = 1e3, an, Pe, sn = 0, qt = 0, fn = 0, je = typeof performance == "object" && performance.now ? performance : Date, oi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ln() {
  return qt || (oi(ms), qt = je.now() + fn);
}
function ms() {
  qt = 0;
}
function un() {
  this._call = this._time = this._next = null;
}
un.prototype = ai.prototype = {
  constructor: un,
  restart: function(t, e, r) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Ln() : +r) + (e == null ? 0 : +e), !this._next && Pe !== this && (Pe ? Pe._next = this : an = this, Pe = this), this._call = t, this._time = r, Nn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Nn());
  }
};
function ai(t, e, r) {
  var i = new un();
  return i.restart(t, e, r), i;
}
function vs() {
  Ln(), ++Zt;
  for (var t = an, e; t; )
    (e = qt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Zt;
}
function yr() {
  qt = (sn = je.now()) + fn, Zt = Ae = 0;
  try {
    vs();
  } finally {
    Zt = 0, ws(), qt = 0;
  }
}
function _s() {
  var t = je.now(), e = t - sn;
  e > ii && (fn -= e, sn = t);
}
function ws() {
  for (var t, e = an, r, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : an = r);
  Pe = t, Nn(i);
}
function Nn(t) {
  if (!Zt) {
    Ae && (Ae = clearTimeout(Ae));
    var e = t - qt;
    e > 24 ? (t < 1 / 0 && (Ae = setTimeout(yr, t - je.now() - fn)), Re && (Re = clearInterval(Re))) : (Re || (sn = je.now(), Re = setInterval(_s, ii)), Zt = 1, oi(yr));
  }
}
function gr(t, e, r) {
  var i = new un();
  return e = e == null ? 0 : +e, i.restart((o) => {
    i.stop(), t(o + e);
  }, e, r), i;
}
var bs = ri("start", "end", "cancel", "interrupt"), xs = [], si = 0, mr = 1, Tn = 2, Ke = 3, vr = 4, $n = 5, Ze = 6;
function ln(t, e, r, i, o, a) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (r in s)
    return;
  ks(t, r, {
    name: e,
    index: i,
    group: o,
    on: bs,
    tween: xs,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: si
  });
}
function Wn(t, e) {
  var r = mt(t, e);
  if (r.state > si)
    throw new Error("too late; already scheduled");
  return r;
}
function _t(t, e) {
  var r = mt(t, e);
  if (r.state > Ke)
    throw new Error("too late; already running");
  return r;
}
function mt(t, e) {
  var r = t.__transition;
  if (!r || !(r = r[e]))
    throw new Error("transition not found");
  return r;
}
function ks(t, e, r) {
  var i = t.__transition, o;
  i[e] = r, r.timer = ai(a, 0, r.time);
  function a(h) {
    r.state = mr, r.timer.restart(s, r.delay, r.time), r.delay <= h && s(h - r.delay);
  }
  function s(h) {
    var p, y, d, m;
    if (r.state !== mr)
      return f();
    for (p in i)
      if (m = i[p], m.name === r.name) {
        if (m.state === Ke)
          return gr(s);
        m.state === vr ? (m.state = Ze, m.timer.stop(), m.on.call("interrupt", t, t.__data__, m.index, m.group), delete i[p]) : +p < e && (m.state = Ze, m.timer.stop(), m.on.call("cancel", t, t.__data__, m.index, m.group), delete i[p]);
      }
    if (gr(function() {
      r.state === Ke && (r.state = vr, r.timer.restart(c, r.delay, r.time), c(h));
    }), r.state = Tn, r.on.call("start", t, t.__data__, r.index, r.group), r.state === Tn) {
      for (r.state = Ke, o = new Array(d = r.tween.length), p = 0, y = -1; p < d; ++p)
        (m = r.tween[p].value.call(t, t.__data__, r.index, r.group)) && (o[++y] = m);
      o.length = y + 1;
    }
  }
  function c(h) {
    for (var p = h < r.duration ? r.ease.call(null, h / r.duration) : (r.timer.restart(f), r.state = $n, 1), y = -1, d = o.length; ++y < d; )
      o[y].call(t, p);
    r.state === $n && (r.on.call("end", t, t.__data__, r.index, r.group), f());
  }
  function f() {
    r.state = Ze, r.timer.stop(), delete i[e];
    for (var h in i)
      return;
    delete t.__transition;
  }
}
function Es(t, e) {
  var r = t.__transition, i, o, a = !0, s;
  if (!!r) {
    e = e == null ? null : e + "";
    for (s in r) {
      if ((i = r[s]).name !== e) {
        a = !1;
        continue;
      }
      o = i.state > Tn && i.state < $n, i.state = Ze, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete r[s];
    }
    a && delete t.__transition;
  }
}
function Ss(t) {
  return this.each(function() {
    Es(this, t);
  });
}
function Rs(t, e) {
  var r, i;
  return function() {
    var o = _t(this, t), a = o.tween;
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
function Os(t, e, r) {
  var i, o;
  if (typeof r != "function")
    throw new Error();
  return function() {
    var a = _t(this, t), s = a.tween;
    if (s !== i) {
      o = (i = s).slice();
      for (var c = { name: e, value: r }, f = 0, h = o.length; f < h; ++f)
        if (o[f].name === e) {
          o[f] = c;
          break;
        }
      f === h && o.push(c);
    }
    a.tween = o;
  };
}
function Ns(t, e) {
  var r = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = mt(this.node(), r).tween, o = 0, a = i.length, s; o < a; ++o)
      if ((s = i[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Rs : Os)(r, t, e));
}
function Yn(t, e, r) {
  var i = t._id;
  return t.each(function() {
    var o = _t(this, i);
    (o.value || (o.value = {}))[e] = r.apply(this, arguments);
  }), function(o) {
    return mt(o, i).value[e];
  };
}
function ui(t, e) {
  var r;
  return (typeof e == "number" ? dt : e instanceof Ht ? nn : (r = Ht(e)) ? (e = r, nn) : Jr)(t, e);
}
function Ts(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $s(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Cs(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function As(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function Ps(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), f;
    return c == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), f = c + "", s === f ? null : s === i && f === o ? a : (o = f, a = e(i = s, c)));
  };
}
function Ms(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), f;
    return c == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), f = c + "", s === f ? null : s === i && f === o ? a : (o = f, a = e(i = s, c)));
  };
}
function Fs(t, e) {
  var r = cn(t), i = r === "transform" ? Ua : ui;
  return this.attrTween(t, typeof e == "function" ? (r.local ? Ms : Ps)(r, i, Yn(this, "attr." + t, e)) : e == null ? (r.local ? $s : Ts)(r) : (r.local ? As : Cs)(r, i, e));
}
function js(t, e) {
  return function(r) {
    this.setAttribute(t, e.call(this, r));
  };
}
function Ds(t, e) {
  return function(r) {
    this.setAttributeNS(t.space, t.local, e.call(this, r));
  };
}
function Is(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Ds(t, a)), r;
  }
  return o._value = e, o;
}
function Ls(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && js(t, a)), r;
  }
  return o._value = e, o;
}
function Ws(t, e) {
  var r = "attr." + t;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  var i = cn(t);
  return this.tween(r, (i.local ? Is : Ls)(i, e));
}
function Ys(t, e) {
  return function() {
    Wn(this, t).delay = +e.apply(this, arguments);
  };
}
function Vs(t, e) {
  return e = +e, function() {
    Wn(this, t).delay = e;
  };
}
function zs(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ys : Vs)(e, t)) : mt(this.node(), e).delay;
}
function Us(t, e) {
  return function() {
    _t(this, t).duration = +e.apply(this, arguments);
  };
}
function Hs(t, e) {
  return e = +e, function() {
    _t(this, t).duration = e;
  };
}
function qs(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Us : Hs)(e, t)) : mt(this.node(), e).duration;
}
function Bs(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    _t(this, t).ease = e;
  };
}
function Xs(t) {
  var e = this._id;
  return arguments.length ? this.each(Bs(e, t)) : mt(this.node(), e).ease;
}
function Gs(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    _t(this, t).ease = r;
  };
}
function Js(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Gs(this._id, t));
}
function Ks(t) {
  typeof t != "function" && (t = Pr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], f, h = 0; h < s; ++h)
      (f = a[h]) && t.call(f, f.__data__, h, a) && c.push(f);
  return new bt(i, this._parents, this._name, this._id);
}
function Zs(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, r = t._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var f = e[c], h = r[c], p = f.length, y = s[c] = new Array(p), d, m = 0; m < p; ++m)
      (d = f[m] || h[m]) && (y[m] = d);
  for (; c < i; ++c)
    s[c] = e[c];
  return new bt(s, this._parents, this._name, this._id);
}
function Qs(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var r = e.indexOf(".");
    return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
  });
}
function tu(t, e, r) {
  var i, o, a = Qs(e) ? Wn : _t;
  return function() {
    var s = a(this, t), c = s.on;
    c !== i && (o = (i = c).copy()).on(e, r), s.on = o;
  };
}
function eu(t, e) {
  var r = this._id;
  return arguments.length < 2 ? mt(this.node(), r).on.on(t) : this.each(tu(r, t, e));
}
function nu(t) {
  return function() {
    var e = this.parentNode;
    for (var r in this.__transition)
      if (+r !== t)
        return;
    e && e.removeChild(this);
  };
}
function ru() {
  return this.on("end.remove", nu(this._id));
}
function iu(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = An(t));
  for (var i = this._groups, o = i.length, a = new Array(o), s = 0; s < o; ++s)
    for (var c = i[s], f = c.length, h = a[s] = new Array(f), p, y, d = 0; d < f; ++d)
      (p = c[d]) && (y = t.call(p, p.__data__, d, c)) && ("__data__" in p && (y.__data__ = p.__data__), h[d] = y, ln(h[d], e, r, d, h, mt(p, r)));
  return new bt(a, this._parents, e, r);
}
function ou(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = Ar(t));
  for (var i = this._groups, o = i.length, a = [], s = [], c = 0; c < o; ++c)
    for (var f = i[c], h = f.length, p, y = 0; y < h; ++y)
      if (p = f[y]) {
        for (var d = t.call(p, p.__data__, y, f), m, k = mt(p, r), R = 0, M = d.length; R < M; ++R)
          (m = d[R]) && ln(m, e, r, R, d, k);
        a.push(d), s.push(p);
      }
  return new bt(a, s, e, r);
}
var au = De.prototype.constructor;
function su() {
  return new au(this._groups, this._parents);
}
function uu(t, e) {
  var r, i, o;
  return function() {
    var a = Jt(this, t), s = (this.style.removeProperty(t), Jt(this, t));
    return a === s ? null : a === r && s === i ? o : o = e(r = a, i = s);
  };
}
function ci(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function cu(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = Jt(this, t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function fu(t, e, r) {
  var i, o, a;
  return function() {
    var s = Jt(this, t), c = r(this), f = c + "";
    return c == null && (f = c = (this.style.removeProperty(t), Jt(this, t))), s === f ? null : s === i && f === o ? a : (o = f, a = e(i = s, c));
  };
}
function lu(t, e) {
  var r, i, o, a = "style." + e, s = "end." + a, c;
  return function() {
    var f = _t(this, t), h = f.on, p = f.value[a] == null ? c || (c = ci(e)) : void 0;
    (h !== r || o !== p) && (i = (r = h).copy()).on(s, o = p), f.on = i;
  };
}
function hu(t, e, r) {
  var i = (t += "") == "transform" ? za : ui;
  return e == null ? this.styleTween(t, uu(t, i)).on("end.style." + t, ci(t)) : typeof e == "function" ? this.styleTween(t, fu(t, i, Yn(this, "style." + t, e))).each(lu(this._id, t)) : this.styleTween(t, cu(t, i, e), r).on("end.style." + t, null);
}
function pu(t, e, r) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), r);
  };
}
function du(t, e, r) {
  var i, o;
  function a() {
    var s = e.apply(this, arguments);
    return s !== o && (i = (o = s) && pu(t, s, r)), i;
  }
  return a._value = e, a;
}
function yu(t, e, r) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, du(t, e, r == null ? "" : r));
}
function gu(t) {
  return function() {
    this.textContent = t;
  };
}
function mu(t) {
  return function() {
    var e = t(this);
    this.textContent = e == null ? "" : e;
  };
}
function vu(t) {
  return this.tween("text", typeof t == "function" ? mu(Yn(this, "text", t)) : gu(t == null ? "" : t + ""));
}
function _u(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function wu(t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && _u(o)), e;
  }
  return i._value = t, i;
}
function bu(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, wu(t));
}
function xu() {
  for (var t = this._name, e = this._id, r = fi(), i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, f, h = 0; h < c; ++h)
      if (f = s[h]) {
        var p = mt(f, e);
        ln(f, t, r, h, s, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new bt(i, this._parents, t, r);
}
function ku() {
  var t, e, r = this, i = r._id, o = r.size();
  return new Promise(function(a, s) {
    var c = { value: s }, f = { value: function() {
      --o === 0 && a();
    } };
    r.each(function() {
      var h = _t(this, i), p = h.on;
      p !== t && (e = (t = p).copy(), e._.cancel.push(c), e._.interrupt.push(c), e._.end.push(f)), h.on = e;
    }), o === 0 && a();
  });
}
var Eu = 0;
function bt(t, e, r, i) {
  this._groups = t, this._parents = e, this._name = r, this._id = i;
}
function fi() {
  return ++Eu;
}
var wt = De.prototype;
bt.prototype = {
  constructor: bt,
  select: iu,
  selectAll: ou,
  selectChild: wt.selectChild,
  selectChildren: wt.selectChildren,
  filter: Ks,
  merge: Zs,
  selection: su,
  transition: xu,
  call: wt.call,
  nodes: wt.nodes,
  node: wt.node,
  size: wt.size,
  empty: wt.empty,
  each: wt.each,
  on: eu,
  attr: Fs,
  attrTween: Ws,
  style: hu,
  styleTween: yu,
  text: vu,
  textTween: bu,
  remove: ru,
  tween: Ns,
  delay: zs,
  duration: qs,
  ease: Xs,
  easeVarying: Js,
  end: ku,
  [Symbol.iterator]: wt[Symbol.iterator]
};
function Su(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ru = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Su
};
function Ou(t, e) {
  for (var r; !(r = t.__transition) || !(r = r[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return r;
}
function Nu(t) {
  var e, r;
  t instanceof bt ? (e = t._id, t = t._name) : (e = fi(), (r = Ru).time = Ln(), t = t == null ? null : t + "");
  for (var i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, f, h = 0; h < c; ++h)
      (f = s[h]) && ln(f, t, e, h, s, r || Ou(f, e));
  return new bt(i, this._parents, t, e);
}
De.prototype.interrupt = Ss;
De.prototype.transition = Nu;
const Tu = (t, e, r, i, o, a, s) => {
  const { xScale: c } = i, { offsetWidth: f } = o, { scaledHeight: h, scaledY: p } = a, { first: y, last: d } = s, m = Nr({}), k = () => wn(t.current), R = (x, C = k()) => C.selectAll(`rect.${x}`).data(e), M = (x) => {
    var C;
    return m.current[x] = (C = m.current[x]) != null ? C : k().append("g").classed(`${x}-group`, !0).attr("clip-path", "url(#chart-contents)"), m.current[x];
  }, $ = (x, C) => {
    let D = R(x, M(x));
    return D.size() !== e.length && (D = D.enter().append("rect")), D.classed(x, !0).classed("is-offscreen", (A, z) => z < y - 10 || z > d + 10).transition().duration(ia).attr("width", () => x === "wicks" ? 1 : Number(c.bandwidth())).attr("height", (A) => h(A[C[0]], A[C[1]])).attr(
      "x",
      (A) => Number(c(A.date)) + (x === "wicks" ? (Number(c.bandwidth()) - 1) / 2 : 0) + f
    ).attr("y", (A) => p(A[C[0]], A[C[1]])), D.exit().remove(), D;
  };
  Gt(() => {
    M("wicks").attr("fill", "grey"), M("candles");
  }, []), Gt(() => {
    var x;
    (x = c == null ? void 0 : c.bandwidth) != null && x.call(c) && ($("wicks", ["low", "high"]), $("candles", ["open", "close"]).attr(
      "fill",
      (C) => C.close < C.open ? "red" : "green"
    ));
  }, [c]);
}, _r = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, $u = "font-family: serif;", Cu = gt.button(
  ({ status: t, minWidth: e, margin: r }) => Cn`
    ${$u}
    border: 1px solid ${_r[t]};
    color: ${_r[t]};
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
var li = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr;
function Au() {
  if (wr)
    return Oe;
  wr = 1;
  var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, h) {
    var p, y = {}, d = null, m = null;
    h !== void 0 && (d = "" + h), f.key !== void 0 && (d = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (p in f)
      i.call(f, p) && !a.hasOwnProperty(p) && (y[p] = f[p]);
    if (c && c.defaultProps)
      for (p in f = c.defaultProps, f)
        y[p] === void 0 && (y[p] = f[p]);
    return { $$typeof: e, type: c, key: d, ref: m, props: y, _owner: o.current };
  }
  return Oe.Fragment = r, Oe.jsx = s, Oe.jsxs = s, Oe;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function Pu() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, R = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[R];
      return typeof u == "function" ? u : null;
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(n) {
      {
        for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          l[g - 1] = arguments[g];
        C("error", n, l);
      }
    }
    function C(n, u, l) {
      {
        var g = $.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", l = l.concat([w]));
        var b = l.map(function(_) {
          return String(_);
        });
        b.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, b);
      }
    }
    var D = !1, A = !1, z = !1, U = !1, B = !1, L;
    L = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || B || n === o || n === h || n === p || U || n === m || D || A || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === f || n.$$typeof === L || n.getModuleId !== void 0));
    }
    function T(n, u, l) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? l + "(" + w + ")" : l;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function O(n) {
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
            var l = n;
            return I(l._context) + ".Provider";
          case f:
            return T(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case d: {
            var w = n, b = w._payload, _ = w._init;
            try {
              return O(_(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, nt, rt, it, H, xt, kt, Et;
    function St() {
    }
    St.__reactDisabledLog = !0;
    function te() {
      {
        if (W === 0) {
          nt = console.log, rt = console.info, it = console.warn, H = console.error, xt = console.group, kt = console.groupCollapsed, Et = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: St,
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
        W++;
      }
    }
    function ee() {
      {
        if (W--, W === 0) {
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
              value: xt
            }),
            groupCollapsed: F({}, n, {
              value: kt
            }),
            groupEnd: F({}, n, {
              value: Et
            })
          });
        }
        W < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = $.ReactCurrentDispatcher, st;
    function J(n, u, l) {
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
    function Rt(n, u) {
      if (!n || ut)
        return "";
      {
        var l = K.get(n);
        if (l !== void 0)
          return l;
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
            } catch (j) {
              g = j;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (j) {
              g = j;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            g = j;
          }
          n();
        }
      } catch (j) {
        if (j && g && typeof j.stack == "string") {
          for (var v = j.stack.split(`
`), N = g.stack.split(`
`), E = v.length - 1, S = N.length - 1; E >= 1 && S >= 0 && v[E] !== N[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (v[E] !== N[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || v[E] !== N[S]) {
                    var P = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, P), P;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = b, ee(), Error.prepareStackTrace = w;
      }
      var V = n ? n.displayName || n.name : "", Lt = V ? J(V) : "";
      return typeof n == "function" && K.set(n, Lt), Lt;
    }
    function re(n, u, l) {
      return Rt(n, !1);
    }
    function ie(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Rt(n, ie(n));
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
          case f:
            return re(n.render);
          case y:
            return Z(n.type, u, l);
          case d: {
            var g = n, w = g._payload, b = g._init;
            try {
              return Z(b(w), u, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ot = {}, Nt = $.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, l = Z(n.type, n._source, u ? u.type : null);
        Nt.setExtraStackFrame(l);
      } else
        Nt.setExtraStackFrame(null);
    }
    function oe(n, u, l, g, w) {
      {
        var b = Function.call.bind(Q);
        for (var _ in n)
          if (b(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var N = Error((g || "React class") + ": " + l + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              v = n[_](u, _, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, _, typeof v), tt(null)), v instanceof Error && !(v.message in Ot) && (Ot[v.message] = !0, tt(w), x("Failed %s type: %s", l, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function ct(n) {
      return ae(n);
    }
    function se(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, l = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
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
    function $t(n) {
      if (ue(n))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = $.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, At, ft;
    ft = {};
    function fe(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function le(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function he(n, u) {
      if (typeof n.ref == "string" && q.current && u && q.current.stateNode !== u) {
        var l = O(q.current.type);
        ft[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), n.ref), ft[l] = !0);
      }
    }
    function pe(n, u) {
      {
        var l = function() {
          Ct || (Ct = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function de(n, u) {
      {
        var l = function() {
          At || (At = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, l, g, w, b, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: l,
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
    function ge(n, u, l, g, w) {
      {
        var b, _ = {}, v = null, N = null;
        l !== void 0 && ($t(l), v = "" + l), le(u) && ($t(u.key), v = "" + u.key), fe(u) && (N = u.ref, he(u, w));
        for (b in u)
          Q.call(u, b) && !ce.hasOwnProperty(b) && (_[b] = u[b]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (b in E)
            _[b] === void 0 && (_[b] = E[b]);
        }
        if (v || N) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), N && de(_, S);
        }
        return ye(n, v, N, w, g, q.current, _);
      }
    }
    var lt = $.ReactCurrentOwner, Pt = $.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var u = n._owner, l = Z(n.type, n._source, u ? u.type : null);
        Pt.setExtraStackFrame(l);
      } else
        Pt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Mt() {
      {
        if (lt.current) {
          var n = O(lt.current.type);
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
          var u = n.fileName.replace(/^.*[\\\/]/, ""), l = n.lineNumber;
          return `

Check your code at ` + u + ":" + l + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function ve(n) {
      {
        var u = Mt();
        if (!u) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (u = `

Check the top-level render call using <` + l + ">.");
        }
        return u;
      }
    }
    function jt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = ve(u);
        if (Ft[l])
          return;
        Ft[l] = !0;
        var g = "";
        n && n._owner && n._owner !== lt.current && (g = " It was passed a child from " + O(n._owner.type) + "."), Y(n), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), Y(null);
      }
    }
    function Dt(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var l = 0; l < n.length; l++) {
            var g = n[l];
            pt(g) && jt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = M(n);
          if (typeof w == "function" && w !== n.entries)
            for (var b = w.call(n), _; !(_ = b.next()).done; )
              pt(_.value) && jt(_.value, u);
        }
      }
    }
    function _e(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var l;
        if (typeof u == "function")
          l = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === f || u.$$typeof === y))
          l = u.propTypes;
        else
          return;
        if (l) {
          var g = O(u);
          oe(l, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = O(u);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), l = 0; l < u.length; l++) {
          var g = u[l];
          if (g !== "children" && g !== "key") {
            Y(n), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Y(null);
            break;
          }
        }
        n.ref !== null && (Y(n), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function It(n, u, l, g, w, b) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = me(w);
          N ? v += N : v += Mt();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, l, w, b);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (ct(P)) {
                for (var V = 0; V < P.length; V++)
                  Dt(P[V], n);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(P, n);
        }
        return n === i ? we(S) : _e(S), S;
      }
    }
    function be(n, u, l) {
      return It(n, u, l, !0);
    }
    function xe(n, u, l) {
      return It(n, u, l, !1);
    }
    var ke = xe, Ee = be;
    Ue.Fragment = i, Ue.jsx = ke, Ue.jsxs = Ee;
  }()), Ue;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Au() : t.exports = Pu();
})(li);
const Mu = li.exports.jsx, He = ({
  children: t,
  status: e = "default",
  dataSelector: r = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...a
}) => /* @__PURE__ */ Mu(Cu, {
  status: e,
  ...a,
  minWidth: i,
  margin: o,
  "data-selector": r,
  children: t
}), Fu = gt.div`
  margin: 10px;
  position: absolute;
`, xr = gt.div(
  ({ rotate: t }) => Cn`
    rotate: ${t}deg;
  `
);
var Vn = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function ju() {
  if (kr)
    return Ne;
  kr = 1;
  var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, h) {
    var p, y = {}, d = null, m = null;
    h !== void 0 && (d = "" + h), f.key !== void 0 && (d = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (p in f)
      i.call(f, p) && !a.hasOwnProperty(p) && (y[p] = f[p]);
    if (c && c.defaultProps)
      for (p in f = c.defaultProps, f)
        y[p] === void 0 && (y[p] = f[p]);
    return { $$typeof: e, type: c, key: d, ref: m, props: y, _owner: o.current };
  }
  return Ne.Fragment = r, Ne.jsx = s, Ne.jsxs = s, Ne;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Er;
function Du() {
  return Er || (Er = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, R = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[R];
      return typeof u == "function" ? u : null;
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(n) {
      {
        for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          l[g - 1] = arguments[g];
        C("error", n, l);
      }
    }
    function C(n, u, l) {
      {
        var g = $.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", l = l.concat([w]));
        var b = l.map(function(_) {
          return String(_);
        });
        b.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, b);
      }
    }
    var D = !1, A = !1, z = !1, U = !1, B = !1, L;
    L = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || B || n === o || n === h || n === p || U || n === m || D || A || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === f || n.$$typeof === L || n.getModuleId !== void 0));
    }
    function T(n, u, l) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? l + "(" + w + ")" : l;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function O(n) {
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
            var l = n;
            return I(l._context) + ".Provider";
          case f:
            return T(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case d: {
            var w = n, b = w._payload, _ = w._init;
            try {
              return O(_(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, nt, rt, it, H, xt, kt, Et;
    function St() {
    }
    St.__reactDisabledLog = !0;
    function te() {
      {
        if (W === 0) {
          nt = console.log, rt = console.info, it = console.warn, H = console.error, xt = console.group, kt = console.groupCollapsed, Et = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: St,
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
        W++;
      }
    }
    function ee() {
      {
        if (W--, W === 0) {
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
              value: xt
            }),
            groupCollapsed: F({}, n, {
              value: kt
            }),
            groupEnd: F({}, n, {
              value: Et
            })
          });
        }
        W < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = $.ReactCurrentDispatcher, st;
    function J(n, u, l) {
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
    function Rt(n, u) {
      if (!n || ut)
        return "";
      {
        var l = K.get(n);
        if (l !== void 0)
          return l;
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
            } catch (j) {
              g = j;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (j) {
              g = j;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            g = j;
          }
          n();
        }
      } catch (j) {
        if (j && g && typeof j.stack == "string") {
          for (var v = j.stack.split(`
`), N = g.stack.split(`
`), E = v.length - 1, S = N.length - 1; E >= 1 && S >= 0 && v[E] !== N[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (v[E] !== N[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || v[E] !== N[S]) {
                    var P = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, P), P;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = b, ee(), Error.prepareStackTrace = w;
      }
      var V = n ? n.displayName || n.name : "", Lt = V ? J(V) : "";
      return typeof n == "function" && K.set(n, Lt), Lt;
    }
    function re(n, u, l) {
      return Rt(n, !1);
    }
    function ie(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Rt(n, ie(n));
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
          case f:
            return re(n.render);
          case y:
            return Z(n.type, u, l);
          case d: {
            var g = n, w = g._payload, b = g._init;
            try {
              return Z(b(w), u, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ot = {}, Nt = $.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, l = Z(n.type, n._source, u ? u.type : null);
        Nt.setExtraStackFrame(l);
      } else
        Nt.setExtraStackFrame(null);
    }
    function oe(n, u, l, g, w) {
      {
        var b = Function.call.bind(Q);
        for (var _ in n)
          if (b(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var N = Error((g || "React class") + ": " + l + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              v = n[_](u, _, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, _, typeof v), tt(null)), v instanceof Error && !(v.message in Ot) && (Ot[v.message] = !0, tt(w), x("Failed %s type: %s", l, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function ct(n) {
      return ae(n);
    }
    function se(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, l = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
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
    function $t(n) {
      if (ue(n))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = $.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, At, ft;
    ft = {};
    function fe(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function le(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function he(n, u) {
      if (typeof n.ref == "string" && q.current && u && q.current.stateNode !== u) {
        var l = O(q.current.type);
        ft[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), n.ref), ft[l] = !0);
      }
    }
    function pe(n, u) {
      {
        var l = function() {
          Ct || (Ct = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function de(n, u) {
      {
        var l = function() {
          At || (At = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, l, g, w, b, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: l,
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
    function ge(n, u, l, g, w) {
      {
        var b, _ = {}, v = null, N = null;
        l !== void 0 && ($t(l), v = "" + l), le(u) && ($t(u.key), v = "" + u.key), fe(u) && (N = u.ref, he(u, w));
        for (b in u)
          Q.call(u, b) && !ce.hasOwnProperty(b) && (_[b] = u[b]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (b in E)
            _[b] === void 0 && (_[b] = E[b]);
        }
        if (v || N) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), N && de(_, S);
        }
        return ye(n, v, N, w, g, q.current, _);
      }
    }
    var lt = $.ReactCurrentOwner, Pt = $.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var u = n._owner, l = Z(n.type, n._source, u ? u.type : null);
        Pt.setExtraStackFrame(l);
      } else
        Pt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Mt() {
      {
        if (lt.current) {
          var n = O(lt.current.type);
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
          var u = n.fileName.replace(/^.*[\\\/]/, ""), l = n.lineNumber;
          return `

Check your code at ` + u + ":" + l + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function ve(n) {
      {
        var u = Mt();
        if (!u) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (u = `

Check the top-level render call using <` + l + ">.");
        }
        return u;
      }
    }
    function jt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = ve(u);
        if (Ft[l])
          return;
        Ft[l] = !0;
        var g = "";
        n && n._owner && n._owner !== lt.current && (g = " It was passed a child from " + O(n._owner.type) + "."), Y(n), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), Y(null);
      }
    }
    function Dt(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var l = 0; l < n.length; l++) {
            var g = n[l];
            pt(g) && jt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = M(n);
          if (typeof w == "function" && w !== n.entries)
            for (var b = w.call(n), _; !(_ = b.next()).done; )
              pt(_.value) && jt(_.value, u);
        }
      }
    }
    function _e(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var l;
        if (typeof u == "function")
          l = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === f || u.$$typeof === y))
          l = u.propTypes;
        else
          return;
        if (l) {
          var g = O(u);
          oe(l, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = O(u);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), l = 0; l < u.length; l++) {
          var g = u[l];
          if (g !== "children" && g !== "key") {
            Y(n), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Y(null);
            break;
          }
        }
        n.ref !== null && (Y(n), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function It(n, u, l, g, w, b) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = me(w);
          N ? v += N : v += Mt();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, l, w, b);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (ct(P)) {
                for (var V = 0; V < P.length; V++)
                  Dt(P[V], n);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(P, n);
        }
        return n === i ? we(S) : _e(S), S;
      }
    }
    function be(n, u, l) {
      return It(n, u, l, !0);
    }
    function xe(n, u, l) {
      return It(n, u, l, !1);
    }
    var ke = xe, Ee = be;
    Te.Fragment = i, Te.jsx = ke, Te.jsxs = Ee;
  }()), Te;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = ju() : t.exports = Du();
})(Vn);
const X = Vn.exports.jsx, zn = Vn.exports.jsxs, Iu = ({
  zoomLevel: t,
  setZoomLevel: e,
  setPanLevel: r,
  multiplier: i,
  visibleRange: o,
  length: a
}) => {
  const s = {
    minWidth: "auto",
    margin: "5px"
  };
  return /* @__PURE__ */ zn(Fu, {
    children: [/* @__PURE__ */ X(He, {
      ...s,
      onClick: () => r((c) => c + i * 100),
      disabled: o.first <= 0,
      children: /* @__PURE__ */ X(xr, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ X(He, {
      ...s,
      onClick: () => e((c) => c > i ? c - i : i),
      disabled: t <= i * 2,
      children: "\u2796"
    }), /* @__PURE__ */ X(He, {
      ...s,
      onClick: () => e((c) => c + i),
      disabled: t >= i * 30,
      children: "\u2795"
    }), /* @__PURE__ */ X(He, {
      ...s,
      onClick: () => r((c) => c - i * 100),
      disabled: o.last >= a,
      children: /* @__PURE__ */ X(xr, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, Lu = ({
  width: t,
  height: e
}) => {
  const r = {
    x: 0,
    y: 0,
    width: t ? t - zt[1] + Wt : 0,
    height: e ? e - zt[0] : 0
  };
  return /* @__PURE__ */ zn("defs", {
    children: [/* @__PURE__ */ X("clipPath", {
      id: "chart-contents",
      children: /* @__PURE__ */ X("rect", {
        ...r
      })
    }), /* @__PURE__ */ X("clipPath", {
      id: "bottom-axis",
      children: /* @__PURE__ */ X("rect", {
        ...r,
        height: `${e}`
      })
    })]
  });
}, hi = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, pi = Tr`
  to {
    rotate: 360deg;
  }
`, Wu = Tr`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, Yu = gt.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, Vu = gt.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${pi} 2s linear infinite;
  margin: 2px;
`, Sr = gt.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, qe = gt.div(
  ({ delay: t }) => Cn`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${hi.pending};
    animation: ${Wu} 0.3s linear alternate infinite;

    ${t ? "animation-delay: 0.2s;" : ""}
  `
);
gt.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${hi.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${pi} 2s linear infinite;
`;
var Un = { exports: {} }, $e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function zu() {
  if (Rr)
    return $e;
  Rr = 1;
  var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, h) {
    var p, y = {}, d = null, m = null;
    h !== void 0 && (d = "" + h), f.key !== void 0 && (d = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (p in f)
      i.call(f, p) && !a.hasOwnProperty(p) && (y[p] = f[p]);
    if (c && c.defaultProps)
      for (p in f = c.defaultProps, f)
        y[p] === void 0 && (y[p] = f[p]);
    return { $$typeof: e, type: c, key: d, ref: m, props: y, _owner: o.current };
  }
  return $e.Fragment = r, $e.jsx = s, $e.jsxs = s, $e;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function Uu() {
  return Or || (Or = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, R = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[R];
      return typeof u == "function" ? u : null;
    }
    var $ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(n) {
      {
        for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          l[g - 1] = arguments[g];
        C("error", n, l);
      }
    }
    function C(n, u, l) {
      {
        var g = $.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", l = l.concat([w]));
        var b = l.map(function(_) {
          return String(_);
        });
        b.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, b);
      }
    }
    var D = !1, A = !1, z = !1, U = !1, B = !1, L;
    L = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || B || n === o || n === h || n === p || U || n === m || D || A || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === f || n.$$typeof === L || n.getModuleId !== void 0));
    }
    function T(n, u, l) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? l + "(" + w + ")" : l;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function O(n) {
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
            var l = n;
            return I(l._context) + ".Provider";
          case f:
            return T(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case d: {
            var w = n, b = w._payload, _ = w._init;
            try {
              return O(_(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, nt, rt, it, H, xt, kt, Et;
    function St() {
    }
    St.__reactDisabledLog = !0;
    function te() {
      {
        if (W === 0) {
          nt = console.log, rt = console.info, it = console.warn, H = console.error, xt = console.group, kt = console.groupCollapsed, Et = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: St,
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
        W++;
      }
    }
    function ee() {
      {
        if (W--, W === 0) {
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
              value: xt
            }),
            groupCollapsed: F({}, n, {
              value: kt
            }),
            groupEnd: F({}, n, {
              value: Et
            })
          });
        }
        W < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = $.ReactCurrentDispatcher, st;
    function J(n, u, l) {
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
    function Rt(n, u) {
      if (!n || ut)
        return "";
      {
        var l = K.get(n);
        if (l !== void 0)
          return l;
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
            } catch (j) {
              g = j;
            }
            Reflect.construct(n, [], _);
          } else {
            try {
              _.call();
            } catch (j) {
              g = j;
            }
            n.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            g = j;
          }
          n();
        }
      } catch (j) {
        if (j && g && typeof j.stack == "string") {
          for (var v = j.stack.split(`
`), N = g.stack.split(`
`), E = v.length - 1, S = N.length - 1; E >= 1 && S >= 0 && v[E] !== N[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (v[E] !== N[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || v[E] !== N[S]) {
                    var P = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, P), P;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = b, ee(), Error.prepareStackTrace = w;
      }
      var V = n ? n.displayName || n.name : "", Lt = V ? J(V) : "";
      return typeof n == "function" && K.set(n, Lt), Lt;
    }
    function re(n, u, l) {
      return Rt(n, !1);
    }
    function ie(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Rt(n, ie(n));
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
          case f:
            return re(n.render);
          case y:
            return Z(n.type, u, l);
          case d: {
            var g = n, w = g._payload, b = g._init;
            try {
              return Z(b(w), u, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ot = {}, Nt = $.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, l = Z(n.type, n._source, u ? u.type : null);
        Nt.setExtraStackFrame(l);
      } else
        Nt.setExtraStackFrame(null);
    }
    function oe(n, u, l, g, w) {
      {
        var b = Function.call.bind(Q);
        for (var _ in n)
          if (b(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var N = Error((g || "React class") + ": " + l + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              v = n[_](u, _, g, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", l, _, typeof v), tt(null)), v instanceof Error && !(v.message in Ot) && (Ot[v.message] = !0, tt(w), x("Failed %s type: %s", l, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function ct(n) {
      return ae(n);
    }
    function se(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, l = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
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
    function $t(n) {
      if (ue(n))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = $.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, At, ft;
    ft = {};
    function fe(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function le(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function he(n, u) {
      if (typeof n.ref == "string" && q.current && u && q.current.stateNode !== u) {
        var l = O(q.current.type);
        ft[l] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), n.ref), ft[l] = !0);
      }
    }
    function pe(n, u) {
      {
        var l = function() {
          Ct || (Ct = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function de(n, u) {
      {
        var l = function() {
          At || (At = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, l, g, w, b, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: l,
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
    function ge(n, u, l, g, w) {
      {
        var b, _ = {}, v = null, N = null;
        l !== void 0 && ($t(l), v = "" + l), le(u) && ($t(u.key), v = "" + u.key), fe(u) && (N = u.ref, he(u, w));
        for (b in u)
          Q.call(u, b) && !ce.hasOwnProperty(b) && (_[b] = u[b]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (b in E)
            _[b] === void 0 && (_[b] = E[b]);
        }
        if (v || N) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), N && de(_, S);
        }
        return ye(n, v, N, w, g, q.current, _);
      }
    }
    var lt = $.ReactCurrentOwner, Pt = $.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var u = n._owner, l = Z(n.type, n._source, u ? u.type : null);
        Pt.setExtraStackFrame(l);
      } else
        Pt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Mt() {
      {
        if (lt.current) {
          var n = O(lt.current.type);
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
          var u = n.fileName.replace(/^.*[\\\/]/, ""), l = n.lineNumber;
          return `

Check your code at ` + u + ":" + l + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function ve(n) {
      {
        var u = Mt();
        if (!u) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (u = `

Check the top-level render call using <` + l + ">.");
        }
        return u;
      }
    }
    function jt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = ve(u);
        if (Ft[l])
          return;
        Ft[l] = !0;
        var g = "";
        n && n._owner && n._owner !== lt.current && (g = " It was passed a child from " + O(n._owner.type) + "."), Y(n), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, g), Y(null);
      }
    }
    function Dt(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var l = 0; l < n.length; l++) {
            var g = n[l];
            pt(g) && jt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = M(n);
          if (typeof w == "function" && w !== n.entries)
            for (var b = w.call(n), _; !(_ = b.next()).done; )
              pt(_.value) && jt(_.value, u);
        }
      }
    }
    function _e(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var l;
        if (typeof u == "function")
          l = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === f || u.$$typeof === y))
          l = u.propTypes;
        else
          return;
        if (l) {
          var g = O(u);
          oe(l, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = O(u);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), l = 0; l < u.length; l++) {
          var g = u[l];
          if (g !== "children" && g !== "key") {
            Y(n), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Y(null);
            break;
          }
        }
        n.ref !== null && (Y(n), x("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function It(n, u, l, g, w, b) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = me(w);
          N ? v += N : v += Mt();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, l, w, b);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (ct(P)) {
                for (var V = 0; V < P.length; V++)
                  Dt(P[V], n);
                Object.freeze && Object.freeze(P);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(P, n);
        }
        return n === i ? we(S) : _e(S), S;
      }
    }
    function be(n, u, l) {
      return It(n, u, l, !0);
    }
    function xe(n, u, l) {
      return It(n, u, l, !1);
    }
    var ke = xe, Ee = be;
    Be.Fragment = i, Be.jsx = ke, Be.jsxs = Ee;
  }()), Be;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = zu() : t.exports = Uu();
})(Un);
const Ce = Un.exports.jsx, mn = Un.exports.jsxs, Hu = () => /* @__PURE__ */ Ce(Yu, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ mn(Vu, {
    children: [/* @__PURE__ */ mn(Sr, {
      children: [/* @__PURE__ */ Ce(qe, {
        delay: !0
      }), /* @__PURE__ */ Ce(qe, {})]
    }), /* @__PURE__ */ mn(Sr, {
      children: [/* @__PURE__ */ Ce(qe, {}), /* @__PURE__ */ Ce(qe, {
        delay: !0
      })]
    })]
  })
}), Xu = ({
  data: t = []
}) => {
  const [e, r] = Vt(t.length / 100 || 1), [i, o] = Vt(0), a = Nr(null), {
    scales: s,
    dimensions: c,
    utils: f,
    visibleRange: h
  } = ps(a, t, e, i);
  return Tu(a, t, i, s, c, f, h), oa(a, t, i, s, c), Gt(() => {
    r(t.length / 100 || 1);
  }, [t.length]), /* @__PURE__ */ zn(yi, {
    children: [t != null && t.length ? /* @__PURE__ */ X(Iu, {
      zoomLevel: e,
      setZoomLevel: r,
      setPanLevel: o,
      multiplier: t.length / 1e3,
      visibleRange: h,
      length: t.length
    }) : /* @__PURE__ */ X(gi, {
      children: /* @__PURE__ */ X(Hu, {})
    }), /* @__PURE__ */ X(di, {
      ref: a,
      children: /* @__PURE__ */ X(Lu, {
        ...c
      })
    })]
  });
};
export {
  Xu as default
};
