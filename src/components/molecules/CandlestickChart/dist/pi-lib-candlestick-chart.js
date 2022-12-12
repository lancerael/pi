import Qt, { useState as zt, useEffect as Me, useCallback as Hn, useRef as Tr } from "react";
import mt, { css as Cn, keyframes as Cr } from "styled-components";
const gi = 500, at = 10, Gt = [65, 55], mi = mt.svg`
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
`, vi = mt.div`
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
`, _i = mt.div`
  position: absolute;
  margin-top: -12px;
  margin-left: -12px;
  width: calc(100% - ${at * 2}px);
  height: calc(100% - ${at * 2}px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
function wi(t) {
  return t;
}
var dn = 1, Ge = 2, _n = 3, We = 4, qn = 1e-6;
function bi(t) {
  return "translate(" + t + ",0)";
}
function xi(t) {
  return "translate(0," + t + ")";
}
function ki(t) {
  return (e) => +t(e);
}
function Ei(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (r) => +t(r) + e;
}
function Si() {
  return !this.__axis;
}
function Ar(t, e) {
  var r = [], i = null, o = null, a = 6, s = 6, c = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, h = t === dn || t === We ? -1 : 1, p = t === We || t === Ge ? "x" : "y", y = t === dn || t === _n ? bi : xi;
  function d(m) {
    var k = i == null ? e.ticks ? e.ticks.apply(e, r) : e.domain() : i, R = o == null ? e.tickFormat ? e.tickFormat.apply(e, r) : wi : o, M = Math.max(a, 0) + c, T = e.range(), b = +T[0] + l, C = +T[T.length - 1] + l, D = (e.bandwidth ? Ei : ki)(e.copy(), l), A = m.selection ? m.selection() : m, z = A.selectAll(".domain").data([null]), U = A.selectAll(".tick").data(k, e).order(), X = U.exit(), L = U.enter().append("g").attr("class", "tick"), G = U.select("line"), $ = U.select("text");
    z = z.merge(z.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), U = U.merge(L), G = G.merge(L.append("line").attr("stroke", "currentColor").attr(p + "2", h * a)), $ = $.merge(L.append("text").attr("fill", "currentColor").attr(p, h * M).attr("dy", t === dn ? "0em" : t === _n ? "0.71em" : "0.32em")), m !== A && (z = z.transition(m), U = U.transition(m), G = G.transition(m), $ = $.transition(m), X = X.transition(m).attr("opacity", qn).attr("transform", function(I) {
      return isFinite(I = D(I)) ? y(I + l) : this.getAttribute("transform");
    }), L.attr("opacity", qn).attr("transform", function(I) {
      var O = this.parentNode.__axis;
      return y((O && isFinite(O = O(I)) ? O : D(I)) + l);
    })), X.remove(), z.attr("d", t === We || t === Ge ? s ? "M" + h * s + "," + b + "H" + l + "V" + C + "H" + h * s : "M" + l + "," + b + "V" + C : s ? "M" + b + "," + h * s + "V" + l + "H" + C + "V" + h * s : "M" + b + "," + l + "H" + C), U.attr("opacity", 1).attr("transform", function(I) {
      return y(D(I) + l);
    }), G.attr(p + "2", h * a), $.attr(p, h * M).text(R), A.filter(Si).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ge ? "start" : t === We ? "end" : "middle"), A.each(function() {
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
    return arguments.length ? (l = +m, d) : l;
  }, d;
}
function Ri(t) {
  return Ar(Ge, t);
}
function Oi(t) {
  return Ar(_n, t);
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
function $i(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Pr(t) {
  var e = fn(t);
  return (e.local ? $i : Ni)(e);
}
function Ti() {
}
function An(t) {
  return t == null ? Ti : function() {
    return this.querySelector(t);
  };
}
function Ci(t) {
  typeof t != "function" && (t = An(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), l, h, p = 0; p < s; ++p)
      (l = a[p]) && (h = t.call(l, l.__data__, p, a)) && ("__data__" in l && (h.__data__ = l.__data__), c[p] = h);
  return new ot(i, this._parents);
}
function Ai(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Pi() {
  return [];
}
function Mr(t) {
  return t == null ? Pi : function() {
    return this.querySelectorAll(t);
  };
}
function Mi(t) {
  return function() {
    return Ai(t.apply(this, arguments));
  };
}
function Fi(t) {
  typeof t == "function" ? t = Mi(t) : t = Mr(t);
  for (var e = this._groups, r = e.length, i = [], o = [], a = 0; a < r; ++a)
    for (var s = e[a], c = s.length, l, h = 0; h < c; ++h)
      (l = s[h]) && (i.push(t.call(l, l.__data__, h, s)), o.push(l));
  return new ot(i, o);
}
function Fr(t) {
  return function() {
    return this.matches(t);
  };
}
function jr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var ji = Array.prototype.find;
function Di(t) {
  return function() {
    return ji.call(this.children, t);
  };
}
function Ii() {
  return this.firstElementChild;
}
function Li(t) {
  return this.select(t == null ? Ii : Di(typeof t == "function" ? t : jr(t)));
}
var Wi = Array.prototype.filter;
function Yi() {
  return Array.from(this.children);
}
function Vi(t) {
  return function() {
    return Wi.call(this.children, t);
  };
}
function zi(t) {
  return this.selectAll(t == null ? Yi : Vi(typeof t == "function" ? t : jr(t)));
}
function Ui(t) {
  typeof t != "function" && (t = Fr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], l, h = 0; h < s; ++h)
      (l = a[h]) && t.call(l, l.__data__, h, a) && c.push(l);
  return new ot(i, this._parents);
}
function Dr(t) {
  return new Array(t.length);
}
function Hi() {
  return new ot(this._enter || this._groups.map(Dr), this._parents);
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
function qi(t) {
  return function() {
    return t;
  };
}
function Bi(t, e, r, i, o, a) {
  for (var s = 0, c, l = e.length, h = a.length; s < h; ++s)
    (c = e[s]) ? (c.__data__ = a[s], i[s] = c) : r[s] = new en(t, a[s]);
  for (; s < l; ++s)
    (c = e[s]) && (o[s] = c);
}
function Xi(t, e, r, i, o, a, s) {
  var c, l, h = /* @__PURE__ */ new Map(), p = e.length, y = a.length, d = new Array(p), m;
  for (c = 0; c < p; ++c)
    (l = e[c]) && (d[c] = m = s.call(l, l.__data__, c, e) + "", h.has(m) ? o[c] = l : h.set(m, l));
  for (c = 0; c < y; ++c)
    m = s.call(t, a[c], c, a) + "", (l = h.get(m)) ? (i[c] = l, l.__data__ = a[c], h.delete(m)) : r[c] = new en(t, a[c]);
  for (c = 0; c < p; ++c)
    (l = e[c]) && h.get(d[c]) === l && (o[c] = l);
}
function Gi(t) {
  return t.__data__;
}
function Ji(t, e) {
  if (!arguments.length)
    return Array.from(this, Gi);
  var r = e ? Xi : Bi, i = this._parents, o = this._groups;
  typeof t != "function" && (t = qi(t));
  for (var a = o.length, s = new Array(a), c = new Array(a), l = new Array(a), h = 0; h < a; ++h) {
    var p = i[h], y = o[h], d = y.length, m = Ki(t.call(p, p && p.__data__, h, i)), k = m.length, R = c[h] = new Array(k), M = s[h] = new Array(k), T = l[h] = new Array(d);
    r(p, y, R, M, T, m, e);
    for (var b = 0, C = 0, D, A; b < k; ++b)
      if (D = R[b]) {
        for (b >= C && (C = b + 1); !(A = M[C]) && ++C < k; )
          ;
        D._next = A || null;
      }
  }
  return s = new ot(s, i), s._enter = c, s._exit = l, s;
}
function Ki(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Zi() {
  return new ot(this._exit || this._groups.map(Dr), this._parents);
}
function Qi(t, e, r) {
  var i = this.enter(), o = this, a = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), r == null ? a.remove() : r(a), i && o ? i.merge(o).order() : o;
}
function to(t) {
  for (var e = t.selection ? t.selection() : t, r = this._groups, i = e._groups, o = r.length, a = i.length, s = Math.min(o, a), c = new Array(o), l = 0; l < s; ++l)
    for (var h = r[l], p = i[l], y = h.length, d = c[l] = new Array(y), m, k = 0; k < y; ++k)
      (m = h[k] || p[k]) && (d[k] = m);
  for (; l < o; ++l)
    c[l] = r[l];
  return new ot(c, this._parents);
}
function eo() {
  for (var t = this._groups, e = -1, r = t.length; ++e < r; )
    for (var i = t[e], o = i.length - 1, a = i[o], s; --o >= 0; )
      (s = i[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function no(t) {
  t || (t = ro);
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
function ro(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function io() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function oo() {
  return Array.from(this);
}
function ao() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length; o < a; ++o) {
      var s = i[o];
      if (s)
        return s;
    }
  return null;
}
function so() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function uo() {
  return !this.node();
}
function co(t) {
  for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
    for (var o = e[r], a = 0, s = o.length, c; a < s; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o);
  return this;
}
function lo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function fo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ho(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function po(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function yo(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function go(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
  };
}
function mo(t, e) {
  var r = fn(t);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((e == null ? r.local ? fo : lo : typeof e == "function" ? r.local ? go : yo : r.local ? po : ho)(r, e));
}
function Ir(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function vo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _o(t, e, r) {
  return function() {
    this.style.setProperty(t, e, r);
  };
}
function wo(t, e, r) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, r);
  };
}
function bo(t, e, r) {
  return arguments.length > 1 ? this.each((e == null ? vo : typeof e == "function" ? wo : _o)(t, e, r == null ? "" : r)) : Jt(this.node(), t);
}
function Jt(t, e) {
  return t.style.getPropertyValue(e) || Ir(t).getComputedStyle(t, null).getPropertyValue(e);
}
function xo(t) {
  return function() {
    delete this[t];
  };
}
function ko(t, e) {
  return function() {
    this[t] = e;
  };
}
function Eo(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? delete this[t] : this[t] = r;
  };
}
function So(t, e) {
  return arguments.length > 1 ? this.each((e == null ? xo : typeof e == "function" ? Eo : ko)(t, e)) : this.node()[t];
}
function Lr(t) {
  return t.trim().split(/^|\s+/);
}
function Pn(t) {
  return t.classList || new Wr(t);
}
function Wr(t) {
  this._node = t, this._names = Lr(t.getAttribute("class") || "");
}
Wr.prototype = {
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
function Yr(t, e) {
  for (var r = Pn(t), i = -1, o = e.length; ++i < o; )
    r.add(e[i]);
}
function Vr(t, e) {
  for (var r = Pn(t), i = -1, o = e.length; ++i < o; )
    r.remove(e[i]);
}
function Ro(t) {
  return function() {
    Yr(this, t);
  };
}
function Oo(t) {
  return function() {
    Vr(this, t);
  };
}
function No(t, e) {
  return function() {
    (e.apply(this, arguments) ? Yr : Vr)(this, t);
  };
}
function $o(t, e) {
  var r = Lr(t + "");
  if (arguments.length < 2) {
    for (var i = Pn(this.node()), o = -1, a = r.length; ++o < a; )
      if (!i.contains(r[o]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? No : e ? Ro : Oo)(r, e));
}
function To() {
  this.textContent = "";
}
function Co(t) {
  return function() {
    this.textContent = t;
  };
}
function Ao(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e == null ? "" : e;
  };
}
function Po(t) {
  return arguments.length ? this.each(t == null ? To : (typeof t == "function" ? Ao : Co)(t)) : this.node().textContent;
}
function Mo() {
  this.innerHTML = "";
}
function Fo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function jo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e == null ? "" : e;
  };
}
function Do(t) {
  return arguments.length ? this.each(t == null ? Mo : (typeof t == "function" ? jo : Fo)(t)) : this.node().innerHTML;
}
function Io() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Lo() {
  return this.each(Io);
}
function Wo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Yo() {
  return this.each(Wo);
}
function Vo(t) {
  var e = typeof t == "function" ? t : Pr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function zo() {
  return null;
}
function Uo(t, e) {
  var r = typeof t == "function" ? t : Pr(t), i = e == null ? zo : typeof e == "function" ? e : An(e);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Ho() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function qo() {
  return this.each(Ho);
}
function Bo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Xo() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Go(t) {
  return this.select(t ? Xo : Bo);
}
function Jo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ko(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Zo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    return i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: r };
  });
}
function Qo(t) {
  return function() {
    var e = this.__on;
    if (!!e) {
      for (var r = 0, i = -1, o = e.length, a; r < o; ++r)
        a = e[r], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++i] = a;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function ta(t, e, r) {
  return function() {
    var i = this.__on, o, a = Ko(e);
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
function ea(t, e, r) {
  var i = Zo(t + ""), o, a = i.length, s;
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
  for (c = e ? ta : Qo, o = 0; o < a; ++o)
    this.each(c(i[o], e, r));
  return this;
}
function zr(t, e, r) {
  var i = Ir(t), o = i.CustomEvent;
  typeof o == "function" ? o = new o(e, r) : (o = i.document.createEvent("Event"), r ? (o.initEvent(e, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function na(t, e) {
  return function() {
    return zr(this, t, e);
  };
}
function ra(t, e) {
  return function() {
    return zr(this, t, e.apply(this, arguments));
  };
}
function ia(t, e) {
  return this.each((typeof e == "function" ? ra : na)(t, e));
}
function* oa() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && (yield s);
}
var Ur = [null];
function ot(t, e) {
  this._groups = t, this._parents = e;
}
function Ie() {
  return new ot([[document.documentElement]], Ur);
}
function aa() {
  return this;
}
ot.prototype = Ie.prototype = {
  constructor: ot,
  select: Ci,
  selectAll: Fi,
  selectChild: Li,
  selectChildren: zi,
  filter: Ui,
  data: Ji,
  enter: Hi,
  exit: Zi,
  join: Qi,
  merge: to,
  selection: aa,
  order: eo,
  sort: no,
  call: io,
  nodes: oo,
  node: ao,
  size: so,
  empty: uo,
  each: co,
  attr: mo,
  style: bo,
  property: So,
  classed: $o,
  text: Po,
  html: Do,
  raise: Lo,
  lower: Yo,
  append: Vo,
  insert: Uo,
  remove: qo,
  clone: Go,
  datum: Jo,
  on: ea,
  dispatch: ia,
  [Symbol.iterator]: oa
};
function Je(t) {
  return typeof t == "string" ? new ot([[document.querySelector(t)]], [document.documentElement]) : new ot([[t]], Ur);
}
const yn = {}, Se = (t = "", e, r) => {
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
}, sa = (t, e, r, i, o) => {
  const [a, s] = zt(), [c, l] = zt(), { xScale: h, yScale: p } = i, { width: y, height: d, offsetWidth: m } = o;
  Me(() => {
    !t.current || (Je(t.current).select("g.x-axis, y.y-axis").remove(), s(
      Je(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), l(Je(t.current).append("g").classed("y-axis", !0)));
  }, []), Me(() => {
    !h.domain || !e || (a.call(Oi(h)).attr(
      "transform",
      `translate(${m},${d - Gt[0]})`
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
    ), c.call(Ri(p)).attr(
      "transform",
      `translate(${y - Gt[1] + at},${at})`
    ));
  }, [h, p]);
};
function Ke(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ua(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Hr(t) {
  let e, r, i;
  t.length !== 2 ? (e = Ke, r = (c, l) => Ke(t(c), l), i = (c, l) => t(c) - l) : (e = t === Ke || t === ua ? t : ca, r = t, i = t);
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
function ca() {
  return 0;
}
function la(t) {
  return t === null ? NaN : +t;
}
const fa = Hr(Ke), ha = fa.right;
Hr(la).center;
const pa = ha;
class Xn extends Map {
  constructor(e, r = ga) {
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
    return super.set(da(this, e), r);
  }
  delete(e) {
    return super.delete(ya(this, e));
  }
}
function Gn({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : r;
}
function da({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : (t.set(i, r), r);
}
function ya({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) && (r = t.get(i), t.delete(i)), r;
}
function ga(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var bn = Math.sqrt(50), xn = Math.sqrt(10), kn = Math.sqrt(2);
function ma(t, e, r) {
  var i, o = -1, a, s, c;
  if (e = +e, t = +t, r = +r, t === e && r > 0)
    return [t];
  if ((i = e < t) && (a = t, t = e, e = a), (c = qr(t, e, r)) === 0 || !isFinite(c))
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
function qr(t, e, r) {
  var i = (e - t) / Math.max(0, r), o = Math.floor(Math.log(i) / Math.LN10), a = i / Math.pow(10, o);
  return o >= 0 ? (a >= bn ? 10 : a >= xn ? 5 : a >= kn ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= bn ? 10 : a >= xn ? 5 : a >= kn ? 2 : 1);
}
function va(t, e, r) {
  var i = Math.abs(e - t) / Math.max(0, r), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), a = i / o;
  return a >= bn ? o *= 10 : a >= xn ? o *= 5 : a >= kn && (o *= 2), e < t ? -o : o;
}
function _a(t, e, r) {
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
function Br() {
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
    return Br(e, r).unknown(i);
  }, Mn.apply(o, arguments), o;
}
function Xr() {
  var t = Br().unknown(void 0), e = t.domain, r = t.range, i = 0, o = 1, a, s, c = !1, l = 0, h = 0, p = 0.5;
  delete t.unknown;
  function y() {
    var d = e().length, m = o < i, k = m ? o : i, R = m ? i : o;
    a = (R - k) / Math.max(1, d - l + h * 2), c && (a = Math.floor(a)), k += (R - k - a * (d - l)) * p, s = a * (1 - l), c && (k = Math.round(k), s = Math.round(s));
    var M = _a(d).map(function(T) {
      return k + a * T;
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
    return arguments.length ? (l = Math.min(1, h = +d), y()) : l;
  }, t.paddingInner = function(d) {
    return arguments.length ? (l = Math.min(1, d), y()) : l;
  }, t.paddingOuter = function(d) {
    return arguments.length ? (h = +d, y()) : h;
  }, t.align = function(d) {
    return arguments.length ? (p = Math.max(0, Math.min(1, d)), y()) : p;
  }, t.copy = function() {
    return Xr(e(), [i, o]).round(c).paddingInner(l).paddingOuter(h).align(p);
  }, Mn.apply(y(), arguments);
}
function Fn(t, e, r) {
  t.prototype = e.prototype = r, r.constructor = t;
}
function Gr(t, e) {
  var r = Object.create(t.prototype);
  for (var i in e)
    r[i] = e[i];
  return r;
}
function Le() {
}
var Fe = 0.7, nn = 1 / Fe, Xt = "\\s*([+-]?\\d+)\\s*", je = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", _t = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", wa = /^#([0-9a-f]{3,8})$/, ba = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), xa = new RegExp(`^rgb\\(${_t},${_t},${_t}\\)$`), ka = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${je}\\)$`), Ea = new RegExp(`^rgba\\(${_t},${_t},${_t},${je}\\)$`), Sa = new RegExp(`^hsl\\(${je},${_t},${_t}\\)$`), Ra = new RegExp(`^hsla\\(${je},${_t},${_t},${je}\\)$`), Kn = {
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
  formatHex8: Oa,
  formatHsl: Na,
  formatRgb: Qn,
  toString: Qn
});
function Zn() {
  return this.rgb().formatHex();
}
function Oa() {
  return this.rgb().formatHex8();
}
function Na() {
  return Jr(this).formatHsl();
}
function Qn() {
  return this.rgb().formatRgb();
}
function Ht(t) {
  var e, r;
  return t = (t + "").trim().toLowerCase(), (e = wa.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? tr(e) : r === 3 ? new et(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? Ye(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? Ye(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ba.exec(t)) ? new et(e[1], e[2], e[3], 1) : (e = xa.exec(t)) ? new et(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ka.exec(t)) ? Ye(e[1], e[2], e[3], e[4]) : (e = Ea.exec(t)) ? Ye(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Sa.exec(t)) ? rr(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ra.exec(t)) ? rr(e[1], e[2] / 100, e[3] / 100, e[4]) : Kn.hasOwnProperty(t) ? tr(Kn[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function tr(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ye(t, e, r, i) {
  return i <= 0 && (t = e = r = NaN), new et(t, e, r, i);
}
function $a(t) {
  return t instanceof Le || (t = Ht(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function En(t, e, r, i) {
  return arguments.length === 1 ? $a(t) : new et(t, e, r, i == null ? 1 : i);
}
function et(t, e, r, i) {
  this.r = +t, this.g = +e, this.b = +r, this.opacity = +i;
}
Fn(et, En, Gr(Le, {
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
    return new et(Ut(this.r), Ut(this.g), Ut(this.b), rn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: er,
  formatHex: er,
  formatHex8: Ta,
  formatRgb: nr,
  toString: nr
}));
function er() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}`;
}
function Ta() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}${Vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nr() {
  const t = rn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function rn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ut(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Vt(t) {
  return t = Ut(t), (t < 16 ? "0" : "") + t.toString(16);
}
function rr(t, e, r, i) {
  return i <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new gt(t, e, r, i);
}
function Jr(t) {
  if (t instanceof gt)
    return new gt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Le || (t = Ht(t)), !t)
    return new gt();
  if (t instanceof gt)
    return t;
  t = t.rgb();
  var e = t.r / 255, r = t.g / 255, i = t.b / 255, o = Math.min(e, r, i), a = Math.max(e, r, i), s = NaN, c = a - o, l = (a + o) / 2;
  return c ? (e === a ? s = (r - i) / c + (r < i) * 6 : r === a ? s = (i - e) / c + 2 : s = (e - r) / c + 4, c /= l < 0.5 ? a + o : 2 - a - o, s *= 60) : c = l > 0 && l < 1 ? 0 : s, new gt(s, c, l, t.opacity);
}
function Ca(t, e, r, i) {
  return arguments.length === 1 ? Jr(t) : new gt(t, e, r, i == null ? 1 : i);
}
function gt(t, e, r, i) {
  this.h = +t, this.s = +e, this.l = +r, this.opacity = +i;
}
Fn(gt, Ca, Gr(Le, {
  brighter(t) {
    return t = t == null ? nn : Math.pow(nn, t), new gt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Fe : Math.pow(Fe, t), new gt(this.h, this.s, this.l * t, this.opacity);
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
    return new gt(ir(this.h), Ve(this.s), Ve(this.l), rn(this.opacity));
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
function Aa(t, e) {
  return function(r) {
    return t + r * e;
  };
}
function Pa(t, e, r) {
  return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(i) {
    return Math.pow(t + i * e, r);
  };
}
function Ma(t) {
  return (t = +t) == 1 ? Kr : function(e, r) {
    return r - e ? Pa(e, r, t) : jn(isNaN(e) ? r : e);
  };
}
function Kr(t, e) {
  var r = e - t;
  return r ? Aa(t, r) : jn(isNaN(t) ? e : t);
}
const on = function t(e) {
  var r = Ma(e);
  function i(o, a) {
    var s = r((o = En(o)).r, (a = En(a)).r), c = r(o.g, a.g), l = r(o.b, a.b), h = Kr(o.opacity, a.opacity);
    return function(p) {
      return o.r = s(p), o.g = c(p), o.b = l(p), o.opacity = h(p), o + "";
    };
  }
  return i.gamma = t, i;
}(1);
function Fa(t, e) {
  e || (e = []);
  var r = t ? Math.min(e.length, t.length) : 0, i = e.slice(), o;
  return function(a) {
    for (o = 0; o < r; ++o)
      i[o] = t[o] * (1 - a) + e[o] * a;
    return i;
  };
}
function ja(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Da(t, e) {
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
function Ia(t, e) {
  var r = new Date();
  return t = +t, e = +e, function(i) {
    return r.setTime(t * (1 - i) + e * i), r;
  };
}
function yt(t, e) {
  return t = +t, e = +e, function(r) {
    return t * (1 - r) + e * r;
  };
}
function La(t, e) {
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
function Wa(t) {
  return function() {
    return t;
  };
}
function Ya(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Zr(t, e) {
  var r = Sn.lastIndex = mn.lastIndex = 0, i, o, a, s = -1, c = [], l = [];
  for (t = t + "", e = e + ""; (i = Sn.exec(t)) && (o = mn.exec(e)); )
    (a = o.index) > r && (a = e.slice(r, a), c[s] ? c[s] += a : c[++s] = a), (i = i[0]) === (o = o[0]) ? c[s] ? c[s] += o : c[++s] = o : (c[++s] = null, l.push({ i: s, x: yt(i, o) })), r = mn.lastIndex;
  return r < e.length && (a = e.slice(r), c[s] ? c[s] += a : c[++s] = a), c.length < 2 ? l[0] ? Ya(l[0].x) : Wa(e) : (e = l.length, function(h) {
    for (var p = 0, y; p < e; ++p)
      c[(y = l[p]).i] = y.x(h);
    return c.join("");
  });
}
function Dn(t, e) {
  var r = typeof e, i;
  return e == null || r === "boolean" ? jn(e) : (r === "number" ? yt : r === "string" ? (i = Ht(e)) ? (e = i, on) : Zr : e instanceof Ht ? on : e instanceof Date ? Ia : ja(e) ? Fa : Array.isArray(e) ? Da : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? La : yt)(t, e);
}
function Va(t, e) {
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
function Qr(t, e, r, i, o, a) {
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
var ze;
function za(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Rn : Qr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ua(t) {
  return t == null || (ze || (ze = document.createElementNS("http://www.w3.org/2000/svg", "g")), ze.setAttribute("transform", t), !(t = ze.transform.baseVal.consolidate())) ? Rn : (t = t.matrix, Qr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ti(t, e, r, i) {
  function o(h) {
    return h.length ? h.pop() + " " : "";
  }
  function a(h, p, y, d, m, k) {
    if (h !== y || p !== d) {
      var R = m.push("translate(", null, e, null, r);
      k.push({ i: R - 4, x: yt(h, y) }, { i: R - 2, x: yt(p, d) });
    } else
      (y || d) && m.push("translate(" + y + e + d + r);
  }
  function s(h, p, y, d) {
    h !== p ? (h - p > 180 ? p += 360 : p - h > 180 && (h += 360), d.push({ i: y.push(o(y) + "rotate(", null, i) - 2, x: yt(h, p) })) : p && y.push(o(y) + "rotate(" + p + i);
  }
  function c(h, p, y, d) {
    h !== p ? d.push({ i: y.push(o(y) + "skewX(", null, i) - 2, x: yt(h, p) }) : p && y.push(o(y) + "skewX(" + p + i);
  }
  function l(h, p, y, d, m, k) {
    if (h !== y || p !== d) {
      var R = m.push(o(m) + "scale(", null, ",", null, ")");
      k.push({ i: R - 4, x: yt(h, y) }, { i: R - 2, x: yt(p, d) });
    } else
      (y !== 1 || d !== 1) && m.push(o(m) + "scale(" + y + "," + d + ")");
  }
  return function(h, p) {
    var y = [], d = [];
    return h = t(h), p = t(p), a(h.translateX, h.translateY, p.translateX, p.translateY, y, d), s(h.rotate, p.rotate, y, d), c(h.skewX, p.skewX, y, d), l(h.scaleX, h.scaleY, p.scaleX, p.scaleY, y, d), h = p = null, function(m) {
      for (var k = -1, R = d.length, M; ++k < R; )
        y[(M = d[k]).i] = M.x(m);
      return y.join("");
    };
  };
}
var Ha = ti(za, "px, ", "px)", "deg)"), qa = ti(Ua, ", ", ")", ")");
function Ba(t) {
  return function() {
    return t;
  };
}
function Xa(t) {
  return +t;
}
var ar = [0, 1];
function Bt(t) {
  return t;
}
function On(t, e) {
  return (e -= t = +t) ? function(r) {
    return (r - t) / e;
  } : Ba(isNaN(e) ? NaN : 0.5);
}
function Ga(t, e) {
  var r;
  return t > e && (r = t, t = e, e = r), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Ja(t, e, r) {
  var i = t[0], o = t[1], a = e[0], s = e[1];
  return o < i ? (i = On(o, i), a = r(s, a)) : (i = On(i, o), a = r(a, s)), function(c) {
    return a(i(c));
  };
}
function Ka(t, e, r) {
  var i = Math.min(t.length, e.length) - 1, o = new Array(i), a = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    o[s] = On(t[s], t[s + 1]), a[s] = r(e[s], e[s + 1]);
  return function(c) {
    var l = pa(t, c, 1, i) - 1;
    return a[l](o[l](c));
  };
}
function Za(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Qa() {
  var t = ar, e = ar, r = Dn, i, o, a, s = Bt, c, l, h;
  function p() {
    var d = Math.min(t.length, e.length);
    return s !== Bt && (s = Ga(t[0], t[d - 1])), c = d > 2 ? Ka : Ja, l = h = null, y;
  }
  function y(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = c(t.map(i), e, r)))(i(s(d)));
  }
  return y.invert = function(d) {
    return s(o((h || (h = c(e, t.map(i), yt)))(d)));
  }, y.domain = function(d) {
    return arguments.length ? (t = Array.from(d, Xa), p()) : t.slice();
  }, y.range = function(d) {
    return arguments.length ? (e = Array.from(d), p()) : e.slice();
  }, y.rangeRound = function(d) {
    return e = Array.from(d), r = Va, p();
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
function ts() {
  return Qa()(Bt, Bt);
}
function es(t) {
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
function ns(t, e) {
  return function(r, i) {
    for (var o = r.length, a = [], s = 0, c = t[0], l = 0; o > 0 && c > 0 && (l + c + 1 > i && (c = Math.max(1, i - l)), a.push(r.substring(o -= c, o + c)), !((l += c + 1) > i)); )
      c = t[s = (s + 1) % t.length];
    return a.reverse().join(e);
  };
}
function rs(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return t[+r];
    });
  };
}
var is = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function sn(t) {
  if (!(e = is.exec(t)))
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
function os(t) {
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
var ei;
function as(t, e) {
  var r = an(t, e);
  if (!r)
    return t + "";
  var i = r[0], o = r[1], a = o - (ei = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = i.length;
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
  d: es,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => sr(t * 100, e),
  r: sr,
  s: as,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function cr(t) {
  return t;
}
var lr = Array.prototype.map, fr = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ss(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? cr : ns(lr.call(t.grouping, Number), t.thousands + ""), r = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? cr : rs(lr.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", c = t.minus === void 0 ? "\u2212" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function h(y) {
    y = sn(y);
    var d = y.fill, m = y.align, k = y.sign, R = y.symbol, M = y.zero, T = y.width, b = y.comma, C = y.precision, D = y.trim, A = y.type;
    A === "n" ? (b = !0, A = "g") : ur[A] || (C === void 0 && (C = 12), D = !0, A = "g"), (M || d === "0" && m === "=") && (M = !0, d = "0", m = "=");
    var z = R === "$" ? r : R === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", U = R === "$" ? i : /[%p]/.test(A) ? s : "", X = ur[A], L = /[defgprs%]/.test(A);
    C = C === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function G($) {
      var I = z, O = U, F, W, nt;
      if (A === "c")
        O = X($) + O, $ = "";
      else {
        $ = +$;
        var rt = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? l : X(Math.abs($), C), D && ($ = os($)), rt && +$ == 0 && k !== "+" && (rt = !1), I = (rt ? k === "(" ? k : c : k === "-" || k === "(" ? "" : k) + I, O = (A === "s" ? fr[8 + ei / 3] : "") + O + (rt && k === "(" ? ")" : ""), L) {
          for (F = -1, W = $.length; ++F < W; )
            if (nt = $.charCodeAt(F), 48 > nt || nt > 57) {
              O = (nt === 46 ? o + $.slice(F + 1) : $.slice(F)) + O, $ = $.slice(0, F);
              break;
            }
        }
      }
      b && !M && ($ = e($, 1 / 0));
      var it = I.length + $.length + O.length, H = it < T ? new Array(T - it + 1).join(d) : "";
      switch (b && M && ($ = e(H + $, H.length ? T - O.length : 1 / 0), H = ""), m) {
        case "<":
          $ = I + $ + O + H;
          break;
        case "=":
          $ = I + H + $ + O;
          break;
        case "^":
          $ = H.slice(0, it = H.length >> 1) + I + $ + O + H.slice(it);
          break;
        default:
          $ = H + I + $ + O;
          break;
      }
      return a($);
    }
    return G.toString = function() {
      return y + "";
    }, G;
  }
  function p(y, d) {
    var m = h((y = sn(y), y.type = "f", y)), k = Math.max(-8, Math.min(8, Math.floor(Kt(d) / 3))) * 3, R = Math.pow(10, -k), M = fr[8 + k / 3];
    return function(T) {
      return m(R * T) + M;
    };
  }
  return {
    format: h,
    formatPrefix: p
  };
}
var Ue, ni, ri;
us({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function us(t) {
  return Ue = ss(t), ni = Ue.format, ri = Ue.formatPrefix, Ue;
}
function cs(t) {
  return Math.max(0, -Kt(Math.abs(t)));
}
function ls(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Kt(e) / 3))) * 3 - Kt(Math.abs(t)));
}
function fs(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Kt(e) - Kt(t)) + 1;
}
function hs(t, e, r, i) {
  var o = va(t, e, r), a;
  switch (i = sn(i == null ? ",f" : i), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(a = ls(o, s)) && (i.precision = a), ri(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(a = fs(o, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = a - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(a = cs(o)) && (i.precision = a - (i.type === "%") * 2);
      break;
    }
  }
  return ni(i);
}
function ps(t) {
  var e = t.domain;
  return t.ticks = function(r) {
    var i = e();
    return ma(i[0], i[i.length - 1], r == null ? 10 : r);
  }, t.tickFormat = function(r, i) {
    var o = e();
    return hs(o[0], o[o.length - 1], r == null ? 10 : r, i);
  }, t.nice = function(r) {
    r == null && (r = 10);
    var i = e(), o = 0, a = i.length - 1, s = i[o], c = i[a], l, h, p = 10;
    for (c < s && (h = s, s = c, c = h, h = o, o = a, a = h); p-- > 0; ) {
      if (h = qr(s, c, r), h === l)
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
function ii() {
  var t = ts();
  return t.copy = function() {
    return Za(t, ii());
  }, Mn.apply(t, arguments), ps(t);
}
const { abs: ds, min: hr, max: ys, round: pr } = Math, dr = 0.3, gs = 10, ms = (t, e, r, i) => {
  const [o, a] = zt({
    width: 0,
    height: 0,
    offsetWidth: 0
  }), [s, c] = zt({
    xScale: (d) => d,
    yScale: (d) => d
  }), [l, h] = zt({ first: 0, last: 0 }), p = Hn(
    (d, m) => ds(s.yScale(m) - s.yScale(d)) || 1,
    [s.yScale]
  ), y = Hn(
    (d, m) => s.yScale(hr(d, m)) - p(d, m) + at,
    [s.yScale]
  );
  return Me(() => {
    if (!(e != null && e.length))
      return;
    const { clientWidth: d, clientHeight: m } = t.current, k = gs * (1 + dr) * r, R = k * e.length, M = Xr().range([at, R - at]).domain(e.map(({ date: L }) => L)).padding(dr), T = d - Gt[1] + at * 2;
    let b = i - R + T;
    b = b > 0 ? 0 : b, b = R > d ? b : d - R;
    const C = pr((b * -1 - at) / k), D = pr((b * -1 + T) / k), A = e.slice(C > 0 ? C : 0, D), z = hr(...A.map(({ low: L }) => L)), U = ys(...A.map(({ high: L }) => L)), X = ii().domain([z - 20, U + 20]).range([m - Gt[0] - at, at]);
    h({ first: C, last: D }), a({ width: d, height: m, offsetWidth: b }), c({ xScale: M, yScale: X });
  }, [r, i, e]), { utils: { scaledHeight: p, scaledY: y }, visibleRange: l, dimensions: o, scales: s };
};
var vs = { value: () => {
} };
function oi() {
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
function _s(t, e) {
  return t.trim().split(/^|\s+/).map(function(r) {
    var i = "", o = r.indexOf(".");
    if (o >= 0 && (i = r.slice(o + 1), r = r.slice(0, o)), r && !e.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
Ze.prototype = oi.prototype = {
  constructor: Ze,
  on: function(t, e) {
    var r = this._, i = _s(t + "", r), o, a = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((o = (t = i[a]).type) && (o = ws(r[o], t.name)))
          return o;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < s; )
      if (o = (t = i[a]).type)
        r[o] = yr(r[o], t.name, e);
      else if (e == null)
        for (o in r)
          r[o] = yr(r[o], t.name, null);
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
function ws(t, e) {
  for (var r = 0, i = t.length, o; r < i; ++r)
    if ((o = t[r]).name === e)
      return o.value;
}
function yr(t, e, r) {
  for (var i = 0, o = t.length; i < o; ++i)
    if (t[i].name === e) {
      t[i] = vs, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return r != null && t.push({ name: e, value: r }), t;
}
var Zt = 0, Ae = 0, Re = 0, ai = 1e3, un, Pe, cn = 0, qt = 0, hn = 0, De = typeof performance == "object" && performance.now ? performance : Date, si = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ln() {
  return qt || (si(bs), qt = De.now() + hn);
}
function bs() {
  qt = 0;
}
function ln() {
  this._call = this._time = this._next = null;
}
ln.prototype = ui.prototype = {
  constructor: ln,
  restart: function(t, e, r) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Ln() : +r) + (e == null ? 0 : +e), !this._next && Pe !== this && (Pe ? Pe._next = this : un = this, Pe = this), this._call = t, this._time = r, Nn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Nn());
  }
};
function ui(t, e, r) {
  var i = new ln();
  return i.restart(t, e, r), i;
}
function xs() {
  Ln(), ++Zt;
  for (var t = un, e; t; )
    (e = qt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Zt;
}
function gr() {
  qt = (cn = De.now()) + hn, Zt = Ae = 0;
  try {
    xs();
  } finally {
    Zt = 0, Es(), qt = 0;
  }
}
function ks() {
  var t = De.now(), e = t - cn;
  e > ai && (hn -= e, cn = t);
}
function Es() {
  for (var t, e = un, r, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : un = r);
  Pe = t, Nn(i);
}
function Nn(t) {
  if (!Zt) {
    Ae && (Ae = clearTimeout(Ae));
    var e = t - qt;
    e > 24 ? (t < 1 / 0 && (Ae = setTimeout(gr, t - De.now() - hn)), Re && (Re = clearInterval(Re))) : (Re || (cn = De.now(), Re = setInterval(ks, ai)), Zt = 1, si(gr));
  }
}
function mr(t, e, r) {
  var i = new ln();
  return e = e == null ? 0 : +e, i.restart((o) => {
    i.stop(), t(o + e);
  }, e, r), i;
}
var Ss = oi("start", "end", "cancel", "interrupt"), Rs = [], ci = 0, vr = 1, $n = 2, Qe = 3, _r = 4, Tn = 5, tn = 6;
function pn(t, e, r, i, o, a) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (r in s)
    return;
  Os(t, r, {
    name: e,
    index: i,
    group: o,
    on: Ss,
    tween: Rs,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ci
  });
}
function Wn(t, e) {
  var r = vt(t, e);
  if (r.state > ci)
    throw new Error("too late; already scheduled");
  return r;
}
function wt(t, e) {
  var r = vt(t, e);
  if (r.state > Qe)
    throw new Error("too late; already running");
  return r;
}
function vt(t, e) {
  var r = t.__transition;
  if (!r || !(r = r[e]))
    throw new Error("transition not found");
  return r;
}
function Os(t, e, r) {
  var i = t.__transition, o;
  i[e] = r, r.timer = ui(a, 0, r.time);
  function a(h) {
    r.state = vr, r.timer.restart(s, r.delay, r.time), r.delay <= h && s(h - r.delay);
  }
  function s(h) {
    var p, y, d, m;
    if (r.state !== vr)
      return l();
    for (p in i)
      if (m = i[p], m.name === r.name) {
        if (m.state === Qe)
          return mr(s);
        m.state === _r ? (m.state = tn, m.timer.stop(), m.on.call("interrupt", t, t.__data__, m.index, m.group), delete i[p]) : +p < e && (m.state = tn, m.timer.stop(), m.on.call("cancel", t, t.__data__, m.index, m.group), delete i[p]);
      }
    if (mr(function() {
      r.state === Qe && (r.state = _r, r.timer.restart(c, r.delay, r.time), c(h));
    }), r.state = $n, r.on.call("start", t, t.__data__, r.index, r.group), r.state === $n) {
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
      o = i.state > $n && i.state < Tn, i.state = tn, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete r[s];
    }
    a && delete t.__transition;
  }
}
function $s(t) {
  return this.each(function() {
    Ns(this, t);
  });
}
function Ts(t, e) {
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
function Cs(t, e, r) {
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
function As(t, e) {
  var r = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = vt(this.node(), r).tween, o = 0, a = i.length, s; o < a; ++o)
      if ((s = i[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Ts : Cs)(r, t, e));
}
function Yn(t, e, r) {
  var i = t._id;
  return t.each(function() {
    var o = wt(this, i);
    (o.value || (o.value = {}))[e] = r.apply(this, arguments);
  }), function(o) {
    return vt(o, i).value[e];
  };
}
function li(t, e) {
  var r;
  return (typeof e == "number" ? yt : e instanceof Ht ? on : (r = Ht(e)) ? (e = r, on) : Zr)(t, e);
}
function Ps(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ms(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fs(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function js(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function Ds(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), l;
    return c == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = c + "", s === l ? null : s === i && l === o ? a : (o = l, a = e(i = s, c)));
  };
}
function Is(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), l;
    return c == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = c + "", s === l ? null : s === i && l === o ? a : (o = l, a = e(i = s, c)));
  };
}
function Ls(t, e) {
  var r = fn(t), i = r === "transform" ? qa : li;
  return this.attrTween(t, typeof e == "function" ? (r.local ? Is : Ds)(r, i, Yn(this, "attr." + t, e)) : e == null ? (r.local ? Ms : Ps)(r) : (r.local ? js : Fs)(r, i, e));
}
function Ws(t, e) {
  return function(r) {
    this.setAttribute(t, e.call(this, r));
  };
}
function Ys(t, e) {
  return function(r) {
    this.setAttributeNS(t.space, t.local, e.call(this, r));
  };
}
function Vs(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Ys(t, a)), r;
  }
  return o._value = e, o;
}
function zs(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Ws(t, a)), r;
  }
  return o._value = e, o;
}
function Us(t, e) {
  var r = "attr." + t;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  var i = fn(t);
  return this.tween(r, (i.local ? Vs : zs)(i, e));
}
function Hs(t, e) {
  return function() {
    Wn(this, t).delay = +e.apply(this, arguments);
  };
}
function qs(t, e) {
  return e = +e, function() {
    Wn(this, t).delay = e;
  };
}
function Bs(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Hs : qs)(e, t)) : vt(this.node(), e).delay;
}
function Xs(t, e) {
  return function() {
    wt(this, t).duration = +e.apply(this, arguments);
  };
}
function Gs(t, e) {
  return e = +e, function() {
    wt(this, t).duration = e;
  };
}
function Js(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Xs : Gs)(e, t)) : vt(this.node(), e).duration;
}
function Ks(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    wt(this, t).ease = e;
  };
}
function Zs(t) {
  var e = this._id;
  return arguments.length ? this.each(Ks(e, t)) : vt(this.node(), e).ease;
}
function Qs(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    wt(this, t).ease = r;
  };
}
function tu(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Qs(this._id, t));
}
function eu(t) {
  typeof t != "function" && (t = Fr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], l, h = 0; h < s; ++h)
      (l = a[h]) && t.call(l, l.__data__, h, a) && c.push(l);
  return new xt(i, this._parents, this._name, this._id);
}
function nu(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, r = t._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var l = e[c], h = r[c], p = l.length, y = s[c] = new Array(p), d, m = 0; m < p; ++m)
      (d = l[m] || h[m]) && (y[m] = d);
  for (; c < i; ++c)
    s[c] = e[c];
  return new xt(s, this._parents, this._name, this._id);
}
function ru(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var r = e.indexOf(".");
    return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
  });
}
function iu(t, e, r) {
  var i, o, a = ru(e) ? Wn : wt;
  return function() {
    var s = a(this, t), c = s.on;
    c !== i && (o = (i = c).copy()).on(e, r), s.on = o;
  };
}
function ou(t, e) {
  var r = this._id;
  return arguments.length < 2 ? vt(this.node(), r).on.on(t) : this.each(iu(r, t, e));
}
function au(t) {
  return function() {
    var e = this.parentNode;
    for (var r in this.__transition)
      if (+r !== t)
        return;
    e && e.removeChild(this);
  };
}
function su() {
  return this.on("end.remove", au(this._id));
}
function uu(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = An(t));
  for (var i = this._groups, o = i.length, a = new Array(o), s = 0; s < o; ++s)
    for (var c = i[s], l = c.length, h = a[s] = new Array(l), p, y, d = 0; d < l; ++d)
      (p = c[d]) && (y = t.call(p, p.__data__, d, c)) && ("__data__" in p && (y.__data__ = p.__data__), h[d] = y, pn(h[d], e, r, d, h, vt(p, r)));
  return new xt(a, this._parents, e, r);
}
function cu(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = Mr(t));
  for (var i = this._groups, o = i.length, a = [], s = [], c = 0; c < o; ++c)
    for (var l = i[c], h = l.length, p, y = 0; y < h; ++y)
      if (p = l[y]) {
        for (var d = t.call(p, p.__data__, y, l), m, k = vt(p, r), R = 0, M = d.length; R < M; ++R)
          (m = d[R]) && pn(m, e, r, R, d, k);
        a.push(d), s.push(p);
      }
  return new xt(a, s, e, r);
}
var lu = Ie.prototype.constructor;
function fu() {
  return new lu(this._groups, this._parents);
}
function hu(t, e) {
  var r, i, o;
  return function() {
    var a = Jt(this, t), s = (this.style.removeProperty(t), Jt(this, t));
    return a === s ? null : a === r && s === i ? o : o = e(r = a, i = s);
  };
}
function fi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function pu(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = Jt(this, t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function du(t, e, r) {
  var i, o, a;
  return function() {
    var s = Jt(this, t), c = r(this), l = c + "";
    return c == null && (l = c = (this.style.removeProperty(t), Jt(this, t))), s === l ? null : s === i && l === o ? a : (o = l, a = e(i = s, c));
  };
}
function yu(t, e) {
  var r, i, o, a = "style." + e, s = "end." + a, c;
  return function() {
    var l = wt(this, t), h = l.on, p = l.value[a] == null ? c || (c = fi(e)) : void 0;
    (h !== r || o !== p) && (i = (r = h).copy()).on(s, o = p), l.on = i;
  };
}
function gu(t, e, r) {
  var i = (t += "") == "transform" ? Ha : li;
  return e == null ? this.styleTween(t, hu(t, i)).on("end.style." + t, fi(t)) : typeof e == "function" ? this.styleTween(t, du(t, i, Yn(this, "style." + t, e))).each(yu(this._id, t)) : this.styleTween(t, pu(t, i, e), r).on("end.style." + t, null);
}
function mu(t, e, r) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), r);
  };
}
function vu(t, e, r) {
  var i, o;
  function a() {
    var s = e.apply(this, arguments);
    return s !== o && (i = (o = s) && mu(t, s, r)), i;
  }
  return a._value = e, a;
}
function _u(t, e, r) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, vu(t, e, r == null ? "" : r));
}
function wu(t) {
  return function() {
    this.textContent = t;
  };
}
function bu(t) {
  return function() {
    var e = t(this);
    this.textContent = e == null ? "" : e;
  };
}
function xu(t) {
  return this.tween("text", typeof t == "function" ? bu(Yn(this, "text", t)) : wu(t == null ? "" : t + ""));
}
function ku(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Eu(t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && ku(o)), e;
  }
  return i._value = t, i;
}
function Su(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Eu(t));
}
function Ru() {
  for (var t = this._name, e = this._id, r = hi(), i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, l, h = 0; h < c; ++h)
      if (l = s[h]) {
        var p = vt(l, e);
        pn(l, t, r, h, s, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new xt(i, this._parents, t, r);
}
function Ou() {
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
function hi() {
  return ++Nu;
}
var bt = Ie.prototype;
xt.prototype = {
  constructor: xt,
  select: uu,
  selectAll: cu,
  selectChild: bt.selectChild,
  selectChildren: bt.selectChildren,
  filter: eu,
  merge: nu,
  selection: fu,
  transition: Ru,
  call: bt.call,
  nodes: bt.nodes,
  node: bt.node,
  size: bt.size,
  empty: bt.empty,
  each: bt.each,
  on: ou,
  attr: Ls,
  attrTween: Us,
  style: gu,
  styleTween: _u,
  text: xu,
  textTween: Su,
  remove: su,
  tween: As,
  delay: Bs,
  duration: Js,
  ease: Zs,
  easeVarying: tu,
  end: Ou,
  [Symbol.iterator]: bt[Symbol.iterator]
};
function $u(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Tu = {
  time: null,
  delay: 0,
  duration: 250,
  ease: $u
};
function Cu(t, e) {
  for (var r; !(r = t.__transition) || !(r = r[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return r;
}
function Au(t) {
  var e, r;
  t instanceof xt ? (e = t._id, t = t._name) : (e = hi(), (r = Tu).time = Ln(), t = t == null ? null : t + "");
  for (var i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, l, h = 0; h < c; ++h)
      (l = s[h]) && pn(l, t, e, h, s, r || Cu(l, e));
  return new xt(i, this._parents, t, e);
}
Ie.prototype.interrupt = $s;
Ie.prototype.transition = Au;
const Pu = (t, e, r, i, o, a, s) => {
  const { xScale: c } = i, { offsetWidth: l } = o, { scaledHeight: h, scaledY: p } = a, { first: y, last: d } = s, m = Tr({}), k = () => Je(t.current), R = (b, C = k()) => C.selectAll(`rect.${b}`).data(e), M = (b) => {
    var C;
    return m.current[b] = (C = m.current[b]) != null ? C : k().append("g").classed(`${b}-group`, !0).attr("clip-path", "url(#chart-contents)"), m.current[b];
  }, T = (b, C) => {
    let D = R(b, M(b));
    return D.size() !== e.length && (D = D.enter().append("rect")), D.classed(b, !0).classed("is-offscreen", (A, z) => z < y - 10 || z > d + 10).transition().duration(gi).attr("width", () => b === "wicks" ? 1 : Number(c.bandwidth())).attr("height", (A) => h(A[C[0]], A[C[1]])).attr(
      "x",
      (A) => Number(c(A.date)) + (b === "wicks" ? (Number(c.bandwidth()) - 1) / 2 : 0) + l
    ).attr("y", (A) => p(A[C[0]], A[C[1]])), D.exit().remove(), D;
  };
  Me(() => {
    M("wicks").attr("fill", "grey"), M("candles");
  }, []), Me(() => {
    var b;
    (b = c == null ? void 0 : c.bandwidth) != null && b.call(c) && (T("wicks", ["low", "high"]), T("candles", ["open", "close"]).attr(
      "fill",
      (C) => C.close < C.open ? "red" : "green"
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
var wr;
function Mu() {
  if (wr)
    return Oe;
  wr = 1;
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
var Ne = {};
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
function Fu() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, R = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[R];
      return typeof u == "function" ? u : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(n) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          f[g - 1] = arguments[g];
        C("error", n, f);
      }
    }
    function C(n, u, f) {
      {
        var g = T.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", f = f.concat([w]));
        var x = f.map(function(_) {
          return String(_);
        });
        x.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var D = !1, A = !1, z = !1, U = !1, X = !1, L;
    L = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || X || n === o || n === h || n === p || U || n === m || D || A || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === L || n.getModuleId !== void 0));
    }
    function $(n, u, f) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? f + "(" + w + ")" : f;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function O(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
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
            return $(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case d: {
            var w = n, x = w._payload, _ = w._init;
            try {
              return O(_(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, nt, rt, it, H, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function te() {
      {
        if (W === 0) {
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
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var st = T.ReactCurrentDispatcher, ut;
    function J(n, u, f) {
      {
        if (ut === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            ut = g && g[1] || "";
          }
        return `
` + ut + n;
      }
    }
    var ct = !1, K;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ne();
    }
    function Ot(n, u) {
      if (!n || ct)
        return "";
      {
        var f = K.get(n);
        if (f !== void 0)
          return f;
      }
      var g;
      ct = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = st.current, st.current = null, te();
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
        ct = !1, st.current = x, ee(), Error.prepareStackTrace = w;
      }
      var V = n ? n.displayName || n.name : "", Wt = V ? J(V) : "";
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
            var g = n, w = g._payload, x = g._init;
            try {
              return Z(x(w), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Nt = {}, $t = T.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        $t.setExtraStackFrame(f);
      } else
        $t.setExtraStackFrame(null);
    }
    function oe(n, u, f, g, w) {
      {
        var x = Function.call.bind(Q);
        for (var _ in n)
          if (x(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var N = Error((g || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              v = n[_](u, _, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, _, typeof v), tt(null)), v instanceof Error && !(v.message in Nt) && (Nt[v.message] = !0, tt(w), b("Failed %s type: %s", f, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function lt(n) {
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
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = T.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, ft;
    ft = {};
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
        var f = O(q.current.type);
        ft[f] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), n.ref), ft[f] = !0);
      }
    }
    function pe(n, u) {
      {
        var f = function() {
          At || (At = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
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
          Pt || (Pt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, f, g, w, x, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: f,
        props: _,
        _owner: x
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
        var x, _ = {}, v = null, N = null;
        f !== void 0 && (Ct(f), v = "" + f), fe(u) && (Ct(u.key), v = "" + u.key), le(u) && (N = u.ref, he(u, w));
        for (x in u)
          Q.call(u, x) && !ce.hasOwnProperty(x) && (_[x] = u[x]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (x in E)
            _[x] === void 0 && (_[x] = E[x]);
        }
        if (v || N) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), N && de(_, S);
        }
        return ye(n, v, N, w, g, q.current, _);
      }
    }
    var ht = T.ReactCurrentOwner, Mt = T.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(f);
      } else
        Mt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Ft() {
      {
        if (ht.current) {
          var n = O(ht.current.type);
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
        n && n._owner && n._owner !== ht.current && (g = " It was passed a child from " + O(n._owner.type) + "."), Y(n), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), Y(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (lt(n))
          for (var f = 0; f < n.length; f++) {
            var g = n[f];
            dt(g) && Dt(g, u);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = M(n);
          if (typeof w == "function" && w !== n.entries)
            for (var x = w.call(n), _; !(_ = x.next()).done; )
              dt(_.value) && Dt(_.value, u);
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
          var g = O(u);
          oe(f, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !pt) {
          pt = !0;
          var w = O(u);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), f = 0; f < u.length; f++) {
          var g = u[f];
          if (g !== "children" && g !== "key") {
            Y(n), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Y(null);
            break;
          }
        }
        n.ref !== null && (Y(n), b("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Lt(n, u, f, g, w, x) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = me(w);
          N ? v += N : v += Ft();
          var E;
          n === null ? E = "null" : lt(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, f, w, x);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (lt(P)) {
                for (var V = 0; V < P.length; V++)
                  It(P[V], n);
                Object.freeze && Object.freeze(P);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(P, n);
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
    Ne.Fragment = i, Ne.jsx = ke, Ne.jsxs = Ee;
  }()), Ne;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Mu() : t.exports = Fu();
})(Vn);
const B = Vn.exports.jsx, zn = Vn.exports.jsxs, ju = ({
  width: t,
  height: e
}) => {
  const r = {
    x: 0,
    y: 0,
    width: t ? t - Gt[1] + at : 0,
    height: e ? e - Gt[0] : 0
  };
  return /* @__PURE__ */ zn("defs", {
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
}, xr = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, Du = "font-family: serif;", Iu = mt.button(
  ({ status: t, minWidth: e, margin: r }) => Cn`
    ${Du}
    border: 1px solid ${xr[t]};
    color: ${xr[t]};
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
var pi = { exports: {} }, $e = {};
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
function Lu() {
  if (kr)
    return $e;
  kr = 1;
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
  return $e.Fragment = r, $e.jsx = s, $e.jsxs = s, $e;
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
var Er;
function Wu() {
  return Er || (Er = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, R = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[R];
      return typeof u == "function" ? u : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(n) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          f[g - 1] = arguments[g];
        C("error", n, f);
      }
    }
    function C(n, u, f) {
      {
        var g = T.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", f = f.concat([w]));
        var x = f.map(function(_) {
          return String(_);
        });
        x.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var D = !1, A = !1, z = !1, U = !1, X = !1, L;
    L = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || X || n === o || n === h || n === p || U || n === m || D || A || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === L || n.getModuleId !== void 0));
    }
    function $(n, u, f) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? f + "(" + w + ")" : f;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function O(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
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
            return $(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case d: {
            var w = n, x = w._payload, _ = w._init;
            try {
              return O(_(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, nt, rt, it, H, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function te() {
      {
        if (W === 0) {
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
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var st = T.ReactCurrentDispatcher, ut;
    function J(n, u, f) {
      {
        if (ut === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            ut = g && g[1] || "";
          }
        return `
` + ut + n;
      }
    }
    var ct = !1, K;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ne();
    }
    function Ot(n, u) {
      if (!n || ct)
        return "";
      {
        var f = K.get(n);
        if (f !== void 0)
          return f;
      }
      var g;
      ct = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = st.current, st.current = null, te();
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
        ct = !1, st.current = x, ee(), Error.prepareStackTrace = w;
      }
      var V = n ? n.displayName || n.name : "", Wt = V ? J(V) : "";
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
            var g = n, w = g._payload, x = g._init;
            try {
              return Z(x(w), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Nt = {}, $t = T.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        $t.setExtraStackFrame(f);
      } else
        $t.setExtraStackFrame(null);
    }
    function oe(n, u, f, g, w) {
      {
        var x = Function.call.bind(Q);
        for (var _ in n)
          if (x(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var N = Error((g || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              v = n[_](u, _, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, _, typeof v), tt(null)), v instanceof Error && !(v.message in Nt) && (Nt[v.message] = !0, tt(w), b("Failed %s type: %s", f, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function lt(n) {
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
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = T.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, ft;
    ft = {};
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
        var f = O(q.current.type);
        ft[f] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), n.ref), ft[f] = !0);
      }
    }
    function pe(n, u) {
      {
        var f = function() {
          At || (At = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
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
          Pt || (Pt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, f, g, w, x, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: f,
        props: _,
        _owner: x
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
        var x, _ = {}, v = null, N = null;
        f !== void 0 && (Ct(f), v = "" + f), fe(u) && (Ct(u.key), v = "" + u.key), le(u) && (N = u.ref, he(u, w));
        for (x in u)
          Q.call(u, x) && !ce.hasOwnProperty(x) && (_[x] = u[x]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (x in E)
            _[x] === void 0 && (_[x] = E[x]);
        }
        if (v || N) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), N && de(_, S);
        }
        return ye(n, v, N, w, g, q.current, _);
      }
    }
    var ht = T.ReactCurrentOwner, Mt = T.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(f);
      } else
        Mt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Ft() {
      {
        if (ht.current) {
          var n = O(ht.current.type);
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
        n && n._owner && n._owner !== ht.current && (g = " It was passed a child from " + O(n._owner.type) + "."), Y(n), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), Y(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (lt(n))
          for (var f = 0; f < n.length; f++) {
            var g = n[f];
            dt(g) && Dt(g, u);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = M(n);
          if (typeof w == "function" && w !== n.entries)
            for (var x = w.call(n), _; !(_ = x.next()).done; )
              dt(_.value) && Dt(_.value, u);
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
          var g = O(u);
          oe(f, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !pt) {
          pt = !0;
          var w = O(u);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), f = 0; f < u.length; f++) {
          var g = u[f];
          if (g !== "children" && g !== "key") {
            Y(n), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Y(null);
            break;
          }
        }
        n.ref !== null && (Y(n), b("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Lt(n, u, f, g, w, x) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = me(w);
          N ? v += N : v += Ft();
          var E;
          n === null ? E = "null" : lt(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, f, w, x);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (lt(P)) {
                for (var V = 0; V < P.length; V++)
                  It(P[V], n);
                Object.freeze && Object.freeze(P);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(P, n);
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
  process.env.NODE_ENV === "production" ? t.exports = Lu() : t.exports = Wu();
})(pi);
const Yu = pi.exports.jsx, qe = ({
  children: t,
  status: e = "default",
  dataSelector: r = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...a
}) => /* @__PURE__ */ Yu(Iu, {
  status: e,
  ...a,
  minWidth: i,
  margin: o,
  "data-selector": r,
  children: t
}), Vu = mt.div`
  margin: 10px;
  position: absolute;
`, Sr = mt.div(
  ({ rotate: t }) => Cn`
    rotate: ${t}deg;
  `
), Yt = 0.2, Rr = 100, zu = ({
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
  return /* @__PURE__ */ zn(Vu, {
    children: [/* @__PURE__ */ B(qe, {
      ...a,
      onClick: () => r((s) => s + Rr),
      disabled: i.first <= 0,
      children: /* @__PURE__ */ B(Sr, {
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
      onClick: () => r((s) => s - Rr),
      disabled: i.last >= o - 1 || i.last - i.first > o,
      children: /* @__PURE__ */ B(Sr, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, di = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, yi = Cr`
  to {
    rotate: 360deg;
  }
`, Uu = Cr`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, Hu = mt.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, qu = mt.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${yi} 2s linear infinite;
  margin: 2px;
`, Or = mt.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Be = mt.div(
  ({ delay: t }) => Cn`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${di.pending};
    animation: ${Uu} 0.3s linear alternate infinite;

    ${t ? "animation-delay: 0.2s;" : ""}
  `
);
mt.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${di.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${yi} 2s linear infinite;
`;
var Un = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Bu() {
  if (Nr)
    return Te;
  Nr = 1;
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
var $r;
function Xu() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Qt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), k = Symbol.iterator, R = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = k && n[k] || n[R];
      return typeof u == "function" ? u : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(n) {
      {
        for (var u = arguments.length, f = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          f[g - 1] = arguments[g];
        C("error", n, f);
      }
    }
    function C(n, u, f) {
      {
        var g = T.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", f = f.concat([w]));
        var x = f.map(function(_) {
          return String(_);
        });
        x.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var D = !1, A = !1, z = !1, U = !1, X = !1, L;
    L = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || X || n === o || n === h || n === p || U || n === m || D || A || z || typeof n == "object" && n !== null && (n.$$typeof === d || n.$$typeof === y || n.$$typeof === s || n.$$typeof === c || n.$$typeof === l || n.$$typeof === L || n.getModuleId !== void 0));
    }
    function $(n, u, f) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? f + "(" + w + ")" : f;
    }
    function I(n) {
      return n.displayName || "Context";
    }
    function O(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
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
            return $(n, n.render, "ForwardRef");
          case y:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case d: {
            var w = n, x = w._payload, _ = w._init;
            try {
              return O(_(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, nt, rt, it, H, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function te() {
      {
        if (W === 0) {
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
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var st = T.ReactCurrentDispatcher, ut;
    function J(n, u, f) {
      {
        if (ut === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            ut = g && g[1] || "";
          }
        return `
` + ut + n;
      }
    }
    var ct = !1, K;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ne();
    }
    function Ot(n, u) {
      if (!n || ct)
        return "";
      {
        var f = K.get(n);
        if (f !== void 0)
          return f;
      }
      var g;
      ct = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = st.current, st.current = null, te();
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
        ct = !1, st.current = x, ee(), Error.prepareStackTrace = w;
      }
      var V = n ? n.displayName || n.name : "", Wt = V ? J(V) : "";
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
            var g = n, w = g._payload, x = g._init;
            try {
              return Z(x(w), u, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Nt = {}, $t = T.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        $t.setExtraStackFrame(f);
      } else
        $t.setExtraStackFrame(null);
    }
    function oe(n, u, f, g, w) {
      {
        var x = Function.call.bind(Q);
        for (var _ in n)
          if (x(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var N = Error((g || "React class") + ": " + f + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              v = n[_](u, _, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, _, typeof v), tt(null)), v instanceof Error && !(v.message in Nt) && (Nt[v.message] = !0, tt(w), b("Failed %s type: %s", f, v.message), tt(null));
          }
      }
    }
    var ae = Array.isArray;
    function lt(n) {
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
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(n)), Tt(n);
    }
    var q = T.ReactCurrentOwner, ce = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, ft;
    ft = {};
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
        var f = O(q.current.type);
        ft[f] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(q.current.type), n.ref), ft[f] = !0);
      }
    }
    function pe(n, u) {
      {
        var f = function() {
          At || (At = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
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
          Pt || (Pt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        f.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var ye = function(n, u, f, g, w, x, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: f,
        props: _,
        _owner: x
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
        var x, _ = {}, v = null, N = null;
        f !== void 0 && (Ct(f), v = "" + f), fe(u) && (Ct(u.key), v = "" + u.key), le(u) && (N = u.ref, he(u, w));
        for (x in u)
          Q.call(u, x) && !ce.hasOwnProperty(x) && (_[x] = u[x]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (x in E)
            _[x] === void 0 && (_[x] = E[x]);
        }
        if (v || N) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && pe(_, S), N && de(_, S);
        }
        return ye(n, v, N, w, g, q.current, _);
      }
    }
    var ht = T.ReactCurrentOwner, Mt = T.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var u = n._owner, f = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(f);
      } else
        Mt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function Ft() {
      {
        if (ht.current) {
          var n = O(ht.current.type);
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
        n && n._owner && n._owner !== ht.current && (g = " It was passed a child from " + O(n._owner.type) + "."), Y(n), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), Y(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (lt(n))
          for (var f = 0; f < n.length; f++) {
            var g = n[f];
            dt(g) && Dt(g, u);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = M(n);
          if (typeof w == "function" && w !== n.entries)
            for (var x = w.call(n), _; !(_ = x.next()).done; )
              dt(_.value) && Dt(_.value, u);
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
          var g = O(u);
          oe(f, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !pt) {
          pt = !0;
          var w = O(u);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function we(n) {
      {
        for (var u = Object.keys(n.props), f = 0; f < u.length; f++) {
          var g = u[f];
          if (g !== "children" && g !== "key") {
            Y(n), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Y(null);
            break;
          }
        }
        n.ref !== null && (Y(n), b("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Lt(n, u, f, g, w, x) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = me(w);
          N ? v += N : v += Ft();
          var E;
          n === null ? E = "null" : lt(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ge(n, u, f, w, x);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (lt(P)) {
                for (var V = 0; V < P.length; V++)
                  It(P[V], n);
                Object.freeze && Object.freeze(P);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(P, n);
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
  process.env.NODE_ENV === "production" ? t.exports = Bu() : t.exports = Xu();
})(Un);
const Ce = Un.exports.jsx, vn = Un.exports.jsxs, Gu = () => /* @__PURE__ */ Ce(Hu, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ vn(qu, {
    children: [/* @__PURE__ */ vn(Or, {
      children: [/* @__PURE__ */ Ce(Be, {
        delay: !0
      }), /* @__PURE__ */ Ce(Be, {})]
    }), /* @__PURE__ */ vn(Or, {
      children: [/* @__PURE__ */ Ce(Be, {}), /* @__PURE__ */ Ce(Be, {
        delay: !0
      })]
    })]
  })
}), Zu = ({
  data: t = []
}) => {
  const [e, r] = zt(1), [i, o] = zt(0), a = Tr(null), {
    scales: s,
    dimensions: c,
    utils: l,
    visibleRange: h
  } = ms(a, t, e, i);
  return Pu(a, t, i, s, c, l, h), sa(a, t, i, s, c), /* @__PURE__ */ zn(vi, {
    children: [t != null && t.length ? /* @__PURE__ */ B(zu, {
      zoomLevel: e,
      setZoomLevel: r,
      setPanLevel: o,
      visibleRange: h,
      length: t.length
    }) : /* @__PURE__ */ B(_i, {
      children: /* @__PURE__ */ B(Gu, {})
    }), /* @__PURE__ */ B(mi, {
      ref: a,
      children: /* @__PURE__ */ B(ju, {
        ...c
      })
    })]
  });
};
export {
  Zu as default
};
