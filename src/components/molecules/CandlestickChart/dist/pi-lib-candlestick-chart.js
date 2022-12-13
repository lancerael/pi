import ee, { useState as qt, useEffect as Vt, useRef as jn, useCallback as zt } from "react";
import gt, { css as Fn, keyframes as Fr } from "styled-components";
const ki = gt.svg`
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
`, Ei = gt.div`
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
`, Si = gt.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Ri(t) {
  return t;
}
var mn = 1, Ke = 2, kn = 3, Ye = 4, Jn = 1e-6;
function Oi(t) {
  return "translate(" + t + ",0)";
}
function Ti(t) {
  return "translate(0," + t + ")";
}
function $i(t) {
  return (e) => +t(e);
}
function Ni(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (r) => +t(r) + e;
}
function Ci() {
  return !this.__axis;
}
function Dr(t, e) {
  var r = [], i = null, o = null, a = 6, s = 6, c = 3, f = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === mn || t === Ye ? -1 : 1, p = t === Ye || t === Ke ? "x" : "y", d = t === mn || t === kn ? Oi : Ti;
  function y(m) {
    var b = i == null ? e.ticks ? e.ticks.apply(e, r) : e.domain() : i, R = o == null ? e.tickFormat ? e.tickFormat.apply(e, r) : Ri : o, $ = Math.max(a, 0) + c, C = e.range(), k = +C[0] + f, F = +C[C.length - 1] + f, W = (e.bandwidth ? Ni : $i)(e.copy(), f), A = m.selection ? m.selection() : m, M = A.selectAll(".domain").data([null]), I = A.selectAll(".tick").data(b, e).order(), U = I.exit(), H = I.enter().append("g").attr("class", "tick"), G = I.select("line"), N = I.select("text");
    M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), I = I.merge(H), G = G.merge(H.append("line").attr("stroke", "currentColor").attr(p + "2", l * a)), N = N.merge(H.append("text").attr("fill", "currentColor").attr(p, l * $).attr("dy", t === mn ? "0em" : t === kn ? "0.71em" : "0.32em")), m !== A && (M = M.transition(m), I = I.transition(m), G = G.transition(m), N = N.transition(m), U = U.transition(m).attr("opacity", Jn).attr("transform", function(L) {
      return isFinite(L = W(L)) ? d(L + f) : this.getAttribute("transform");
    }), H.attr("opacity", Jn).attr("transform", function(L) {
      var O = this.parentNode.__axis;
      return d((O && isFinite(O = O(L)) ? O : W(L)) + f);
    })), U.remove(), M.attr("d", t === Ye || t === Ke ? s ? "M" + l * s + "," + k + "H" + f + "V" + F + "H" + l * s : "M" + f + "," + k + "V" + F : s ? "M" + k + "," + l * s + "V" + f + "H" + F + "V" + l * s : "M" + k + "," + f + "H" + F), I.attr("opacity", 1).attr("transform", function(L) {
      return d(W(L) + f);
    }), G.attr(p + "2", l * a), N.attr(p, l * $).text(R), A.filter(Ci).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ke ? "start" : t === Ye ? "end" : "middle"), A.each(function() {
      this.__axis = W;
    });
  }
  return y.scale = function(m) {
    return arguments.length ? (e = m, y) : e;
  }, y.ticks = function() {
    return r = Array.from(arguments), y;
  }, y.tickArguments = function(m) {
    return arguments.length ? (r = m == null ? [] : Array.from(m), y) : r.slice();
  }, y.tickValues = function(m) {
    return arguments.length ? (i = m == null ? null : Array.from(m), y) : i && i.slice();
  }, y.tickFormat = function(m) {
    return arguments.length ? (o = m, y) : o;
  }, y.tickSize = function(m) {
    return arguments.length ? (a = s = +m, y) : a;
  }, y.tickSizeInner = function(m) {
    return arguments.length ? (a = +m, y) : a;
  }, y.tickSizeOuter = function(m) {
    return arguments.length ? (s = +m, y) : s;
  }, y.tickPadding = function(m) {
    return arguments.length ? (c = +m, y) : c;
  }, y.offset = function(m) {
    return arguments.length ? (f = +m, y) : f;
  }, y;
}
function Ai(t) {
  return Dr(Ke, t);
}
function Pi(t) {
  return Dr(kn, t);
}
var En = "http://www.w3.org/1999/xhtml";
const Kn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: En,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function dn(t) {
  var e = t += "", r = e.indexOf(":");
  return r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)), Kn.hasOwnProperty(e) ? { space: Kn[e], local: t } : t;
}
function Mi(t) {
  return function() {
    var e = this.ownerDocument, r = this.namespaceURI;
    return r === En && e.documentElement.namespaceURI === En ? e.createElement(t) : e.createElementNS(r, t);
  };
}
function ji(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ir(t) {
  var e = dn(t);
  return (e.local ? ji : Mi)(e);
}
function Fi() {
}
function Dn(t) {
  return t == null ? Fi : function() {
    return this.querySelector(t);
  };
}
function Di(t) {
  typeof t != "function" && (t = Dn(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = new Array(s), f, l, p = 0; p < s; ++p)
      (f = a[p]) && (l = t.call(f, f.__data__, p, a)) && ("__data__" in f && (l.__data__ = f.__data__), c[p] = l);
  return new ot(i, this._parents);
}
function Ii(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Li() {
  return [];
}
function Lr(t) {
  return t == null ? Li : function() {
    return this.querySelectorAll(t);
  };
}
function Wi(t) {
  return function() {
    return Ii(t.apply(this, arguments));
  };
}
function Yi(t) {
  typeof t == "function" ? t = Wi(t) : t = Lr(t);
  for (var e = this._groups, r = e.length, i = [], o = [], a = 0; a < r; ++a)
    for (var s = e[a], c = s.length, f, l = 0; l < c; ++l)
      (f = s[l]) && (i.push(t.call(f, f.__data__, l, s)), o.push(f));
  return new ot(i, o);
}
function Wr(t) {
  return function() {
    return this.matches(t);
  };
}
function Yr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Vi = Array.prototype.find;
function zi(t) {
  return function() {
    return Vi.call(this.children, t);
  };
}
function Ui() {
  return this.firstElementChild;
}
function Hi(t) {
  return this.select(t == null ? Ui : zi(typeof t == "function" ? t : Yr(t)));
}
var qi = Array.prototype.filter;
function Bi() {
  return Array.from(this.children);
}
function Xi(t) {
  return function() {
    return qi.call(this.children, t);
  };
}
function Gi(t) {
  return this.selectAll(t == null ? Bi : Xi(typeof t == "function" ? t : Yr(t)));
}
function Ji(t) {
  typeof t != "function" && (t = Wr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], f, l = 0; l < s; ++l)
      (f = a[l]) && t.call(f, f.__data__, l, a) && c.push(f);
  return new ot(i, this._parents);
}
function Vr(t) {
  return new Array(t.length);
}
function Ki() {
  return new ot(this._enter || this._groups.map(Vr), this._parents);
}
function rn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
rn.prototype = {
  constructor: rn,
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
function Zi(t) {
  return function() {
    return t;
  };
}
function Qi(t, e, r, i, o, a) {
  for (var s = 0, c, f = e.length, l = a.length; s < l; ++s)
    (c = e[s]) ? (c.__data__ = a[s], i[s] = c) : r[s] = new rn(t, a[s]);
  for (; s < f; ++s)
    (c = e[s]) && (o[s] = c);
}
function to(t, e, r, i, o, a, s) {
  var c, f, l = /* @__PURE__ */ new Map(), p = e.length, d = a.length, y = new Array(p), m;
  for (c = 0; c < p; ++c)
    (f = e[c]) && (y[c] = m = s.call(f, f.__data__, c, e) + "", l.has(m) ? o[c] = f : l.set(m, f));
  for (c = 0; c < d; ++c)
    m = s.call(t, a[c], c, a) + "", (f = l.get(m)) ? (i[c] = f, f.__data__ = a[c], l.delete(m)) : r[c] = new rn(t, a[c]);
  for (c = 0; c < p; ++c)
    (f = e[c]) && l.get(y[c]) === f && (o[c] = f);
}
function eo(t) {
  return t.__data__;
}
function no(t, e) {
  if (!arguments.length)
    return Array.from(this, eo);
  var r = e ? to : Qi, i = this._parents, o = this._groups;
  typeof t != "function" && (t = Zi(t));
  for (var a = o.length, s = new Array(a), c = new Array(a), f = new Array(a), l = 0; l < a; ++l) {
    var p = i[l], d = o[l], y = d.length, m = ro(t.call(p, p && p.__data__, l, i)), b = m.length, R = c[l] = new Array(b), $ = s[l] = new Array(b), C = f[l] = new Array(y);
    r(p, d, R, $, C, m, e);
    for (var k = 0, F = 0, W, A; k < b; ++k)
      if (W = R[k]) {
        for (k >= F && (F = k + 1); !(A = $[F]) && ++F < b; )
          ;
        W._next = A || null;
      }
  }
  return s = new ot(s, i), s._enter = c, s._exit = f, s;
}
function ro(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function io() {
  return new ot(this._exit || this._groups.map(Vr), this._parents);
}
function oo(t, e, r) {
  var i = this.enter(), o = this, a = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), r == null ? a.remove() : r(a), i && o ? i.merge(o).order() : o;
}
function ao(t) {
  for (var e = t.selection ? t.selection() : t, r = this._groups, i = e._groups, o = r.length, a = i.length, s = Math.min(o, a), c = new Array(o), f = 0; f < s; ++f)
    for (var l = r[f], p = i[f], d = l.length, y = c[f] = new Array(d), m, b = 0; b < d; ++b)
      (m = l[b] || p[b]) && (y[b] = m);
  for (; f < o; ++f)
    c[f] = r[f];
  return new ot(c, this._parents);
}
function so() {
  for (var t = this._groups, e = -1, r = t.length; ++e < r; )
    for (var i = t[e], o = i.length - 1, a = i[o], s; --o >= 0; )
      (s = i[o]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function uo(t) {
  t || (t = co);
  function e(d, y) {
    return d && y ? t(d.__data__, y.__data__) : !d - !y;
  }
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
    for (var s = r[a], c = s.length, f = o[a] = new Array(c), l, p = 0; p < c; ++p)
      (l = s[p]) && (f[p] = l);
    f.sort(e);
  }
  return new ot(o, this._parents).order();
}
function co(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function fo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function lo() {
  return Array.from(this);
}
function ho() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length; o < a; ++o) {
      var s = i[o];
      if (s)
        return s;
    }
  return null;
}
function po() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function yo() {
  return !this.node();
}
function go(t) {
  for (var e = this._groups, r = 0, i = e.length; r < i; ++r)
    for (var o = e[r], a = 0, s = o.length, c; a < s; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o);
  return this;
}
function mo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function vo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _o(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function wo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function bo(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttribute(t) : this.setAttribute(t, r);
  };
}
function xo(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r);
  };
}
function ko(t, e) {
  var r = dn(t);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((e == null ? r.local ? vo : mo : typeof e == "function" ? r.local ? xo : bo : r.local ? wo : _o)(r, e));
}
function zr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Eo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function So(t, e, r) {
  return function() {
    this.style.setProperty(t, e, r);
  };
}
function Ro(t, e, r) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, r);
  };
}
function Oo(t, e, r) {
  return arguments.length > 1 ? this.each((e == null ? Eo : typeof e == "function" ? Ro : So)(t, e, r == null ? "" : r)) : Kt(this.node(), t);
}
function Kt(t, e) {
  return t.style.getPropertyValue(e) || zr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function To(t) {
  return function() {
    delete this[t];
  };
}
function $o(t, e) {
  return function() {
    this[t] = e;
  };
}
function No(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? delete this[t] : this[t] = r;
  };
}
function Co(t, e) {
  return arguments.length > 1 ? this.each((e == null ? To : typeof e == "function" ? No : $o)(t, e)) : this.node()[t];
}
function Ur(t) {
  return t.trim().split(/^|\s+/);
}
function In(t) {
  return t.classList || new Hr(t);
}
function Hr(t) {
  this._node = t, this._names = Ur(t.getAttribute("class") || "");
}
Hr.prototype = {
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
function qr(t, e) {
  for (var r = In(t), i = -1, o = e.length; ++i < o; )
    r.add(e[i]);
}
function Br(t, e) {
  for (var r = In(t), i = -1, o = e.length; ++i < o; )
    r.remove(e[i]);
}
function Ao(t) {
  return function() {
    qr(this, t);
  };
}
function Po(t) {
  return function() {
    Br(this, t);
  };
}
function Mo(t, e) {
  return function() {
    (e.apply(this, arguments) ? qr : Br)(this, t);
  };
}
function jo(t, e) {
  var r = Ur(t + "");
  if (arguments.length < 2) {
    for (var i = In(this.node()), o = -1, a = r.length; ++o < a; )
      if (!i.contains(r[o]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Mo : e ? Ao : Po)(r, e));
}
function Fo() {
  this.textContent = "";
}
function Do(t) {
  return function() {
    this.textContent = t;
  };
}
function Io(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e == null ? "" : e;
  };
}
function Lo(t) {
  return arguments.length ? this.each(t == null ? Fo : (typeof t == "function" ? Io : Do)(t)) : this.node().textContent;
}
function Wo() {
  this.innerHTML = "";
}
function Yo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Vo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e == null ? "" : e;
  };
}
function zo(t) {
  return arguments.length ? this.each(t == null ? Wo : (typeof t == "function" ? Vo : Yo)(t)) : this.node().innerHTML;
}
function Uo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ho() {
  return this.each(Uo);
}
function qo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Bo() {
  return this.each(qo);
}
function Xo(t) {
  var e = typeof t == "function" ? t : Ir(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Go() {
  return null;
}
function Jo(t, e) {
  var r = typeof t == "function" ? t : Ir(t), i = e == null ? Go : typeof e == "function" ? e : Dn(e);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Ko() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Zo() {
  return this.each(Ko);
}
function Qo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ta() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ea(t) {
  return this.select(t ? ta : Qo);
}
function na(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ra(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function ia(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    return i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: r };
  });
}
function oa(t) {
  return function() {
    var e = this.__on;
    if (!!e) {
      for (var r = 0, i = -1, o = e.length, a; r < o; ++r)
        a = e[r], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++i] = a;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function aa(t, e, r) {
  return function() {
    var i = this.__on, o, a = ra(e);
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
function sa(t, e, r) {
  var i = ia(t + ""), o, a = i.length, s;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var f = 0, l = c.length, p; f < l; ++f)
        for (o = 0, p = c[f]; o < a; ++o)
          if ((s = i[o]).type === p.type && s.name === p.name)
            return p.value;
    }
    return;
  }
  for (c = e ? aa : oa, o = 0; o < a; ++o)
    this.each(c(i[o], e, r));
  return this;
}
function Xr(t, e, r) {
  var i = zr(t), o = i.CustomEvent;
  typeof o == "function" ? o = new o(e, r) : (o = i.document.createEvent("Event"), r ? (o.initEvent(e, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function ua(t, e) {
  return function() {
    return Xr(this, t, e);
  };
}
function ca(t, e) {
  return function() {
    return Xr(this, t, e.apply(this, arguments));
  };
}
function fa(t, e) {
  return this.each((typeof e == "function" ? ca : ua)(t, e));
}
function* la() {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && (yield s);
}
var Gr = [null];
function ot(t, e) {
  this._groups = t, this._parents = e;
}
function Le() {
  return new ot([[document.documentElement]], Gr);
}
function ha() {
  return this;
}
ot.prototype = Le.prototype = {
  constructor: ot,
  select: Di,
  selectAll: Yi,
  selectChild: Hi,
  selectChildren: Gi,
  filter: Ji,
  data: no,
  enter: Ki,
  exit: io,
  join: oo,
  merge: ao,
  selection: ha,
  order: so,
  sort: uo,
  call: fo,
  nodes: lo,
  node: ho,
  size: po,
  empty: yo,
  each: go,
  attr: ko,
  style: Oo,
  property: Co,
  classed: jo,
  text: Lo,
  html: zo,
  raise: Ho,
  lower: Bo,
  append: Xo,
  insert: Jo,
  remove: Zo,
  clone: ea,
  datum: na,
  on: sa,
  dispatch: fa,
  [Symbol.iterator]: la
};
function Ze(t) {
  return typeof t == "string" ? new ot([[document.querySelector(t)]], [document.documentElement]) : new ot([[t]], Gr);
}
const pa = 500, vt = 10, Zt = [65, 55], Jr = 0.3, da = 10, vn = {}, Oe = (t = "", e, r) => {
  var d;
  const i = Math.round((d = r.bandwidth) == null ? void 0 : d.call(r)) || 0, o = `${t}-${e}-${i}`;
  if (vn[o] !== void 0)
    return vn[o];
  let a = "";
  const s = new Date(t), [c, f, l] = t.split("-");
  l === "01" && (f === "01" ? a = c : a = s.toLocaleString("en-UK", {
    month: "short"
  }));
  let p = [];
  return i > 1 && p.push(16), i > 3 && p.push(8, 24), i > 7 && (p = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), p.includes(Number(l)) && (a = l), r.domain().length - 1 === e && (a = l), vn[o] = a, a;
}, ya = (t, e, r, i, o) => {
  const [a, s] = qt(), [c, f] = qt(), { xScale: l, yScale: p } = i, { width: d, height: y } = o;
  Vt(() => {
    !t.current || (Ze(t.current).select("g.x-axis, y.y-axis").remove(), s(
      Ze(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), f(Ze(t.current).append("g").classed("y-axis", !0)));
  }, []), Vt(() => {
    !l.domain || !e || (a.call(Pi(l)).attr("transform", `translate(${r},${y - Zt[0]})`).selectAll("text").classed(
      "emphasise",
      (m, b) => Oe(m, b, l).length > 2
    ).attr(
      "x",
      (m, b) => Oe(m, b, l).length * -4 - 16
    ).attr("y", -4).attr("transform", "rotate(270)").text((m, b) => Oe(m, b, l)), a.selectAll("line").attr(
      "stroke",
      (m, b) => Oe(m, b, l).length > 2 ? "currentColor" : "grey"
    ).attr(
      "y2",
      (m, b) => Oe(m, b, l).length ? 12 : 6
    ), c.call(Ai(p)).attr(
      "transform",
      `translate(${d - Zt[1] + vt},${vt})`
    ));
  }, [l, p]);
};
var ga = { value: () => {
} };
function Kr() {
  for (var t = 0, e = arguments.length, r = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in r || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new Qe(r);
}
function Qe(t) {
  this._ = t;
}
function ma(t, e) {
  return t.trim().split(/^|\s+/).map(function(r) {
    var i = "", o = r.indexOf(".");
    if (o >= 0 && (i = r.slice(o + 1), r = r.slice(0, o)), r && !e.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
Qe.prototype = Kr.prototype = {
  constructor: Qe,
  on: function(t, e) {
    var r = this._, i = ma(t + "", r), o, a = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((o = (t = i[a]).type) && (o = va(r[o], t.name)))
          return o;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < s; )
      if (o = (t = i[a]).type)
        r[o] = Zn(r[o], t.name, e);
      else if (e == null)
        for (o in r)
          r[o] = Zn(r[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var r in e)
      t[r] = e[r].slice();
    return new Qe(t);
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
function va(t, e) {
  for (var r = 0, i = t.length, o; r < i; ++r)
    if ((o = t[r]).name === e)
      return o.value;
}
function Zn(t, e, r) {
  for (var i = 0, o = t.length; i < o; ++i)
    if (t[i].name === e) {
      t[i] = ga, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return r != null && t.push({ name: e, value: r }), t;
}
var Qt = 0, Me = 0, Te = 0, Zr = 1e3, on, je, an = 0, Bt = 0, yn = 0, Fe = typeof performance == "object" && performance.now ? performance : Date, Qr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ln() {
  return Bt || (Qr(_a), Bt = Fe.now() + yn);
}
function _a() {
  Bt = 0;
}
function sn() {
  this._call = this._time = this._next = null;
}
sn.prototype = ti.prototype = {
  constructor: sn,
  restart: function(t, e, r) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? Ln() : +r) + (e == null ? 0 : +e), !this._next && je !== this && (je ? je._next = this : on = this, je = this), this._call = t, this._time = r, Sn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Sn());
  }
};
function ti(t, e, r) {
  var i = new sn();
  return i.restart(t, e, r), i;
}
function wa() {
  Ln(), ++Qt;
  for (var t = on, e; t; )
    (e = Bt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Qt;
}
function Qn() {
  Bt = (an = Fe.now()) + yn, Qt = Me = 0;
  try {
    wa();
  } finally {
    Qt = 0, xa(), Bt = 0;
  }
}
function ba() {
  var t = Fe.now(), e = t - an;
  e > Zr && (yn -= e, an = t);
}
function xa() {
  for (var t, e = on, r, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (r = e._next, e._next = null, e = t ? t._next = r : on = r);
  je = t, Sn(i);
}
function Sn(t) {
  if (!Qt) {
    Me && (Me = clearTimeout(Me));
    var e = t - Bt;
    e > 24 ? (t < 1 / 0 && (Me = setTimeout(Qn, t - Fe.now() - yn)), Te && (Te = clearInterval(Te))) : (Te || (an = Fe.now(), Te = setInterval(ba, Zr)), Qt = 1, Qr(Qn));
  }
}
function tr(t, e, r) {
  var i = new sn();
  return e = e == null ? 0 : +e, i.restart((o) => {
    i.stop(), t(o + e);
  }, e, r), i;
}
var ka = Kr("start", "end", "cancel", "interrupt"), Ea = [], ei = 0, er = 1, Rn = 2, tn = 3, nr = 4, On = 5, en = 6;
function gn(t, e, r, i, o, a) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (r in s)
    return;
  Sa(t, r, {
    name: e,
    index: i,
    group: o,
    on: ka,
    tween: Ea,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ei
  });
}
function Wn(t, e) {
  var r = mt(t, e);
  if (r.state > ei)
    throw new Error("too late; already scheduled");
  return r;
}
function wt(t, e) {
  var r = mt(t, e);
  if (r.state > tn)
    throw new Error("too late; already running");
  return r;
}
function mt(t, e) {
  var r = t.__transition;
  if (!r || !(r = r[e]))
    throw new Error("transition not found");
  return r;
}
function Sa(t, e, r) {
  var i = t.__transition, o;
  i[e] = r, r.timer = ti(a, 0, r.time);
  function a(l) {
    r.state = er, r.timer.restart(s, r.delay, r.time), r.delay <= l && s(l - r.delay);
  }
  function s(l) {
    var p, d, y, m;
    if (r.state !== er)
      return f();
    for (p in i)
      if (m = i[p], m.name === r.name) {
        if (m.state === tn)
          return tr(s);
        m.state === nr ? (m.state = en, m.timer.stop(), m.on.call("interrupt", t, t.__data__, m.index, m.group), delete i[p]) : +p < e && (m.state = en, m.timer.stop(), m.on.call("cancel", t, t.__data__, m.index, m.group), delete i[p]);
      }
    if (tr(function() {
      r.state === tn && (r.state = nr, r.timer.restart(c, r.delay, r.time), c(l));
    }), r.state = Rn, r.on.call("start", t, t.__data__, r.index, r.group), r.state === Rn) {
      for (r.state = tn, o = new Array(y = r.tween.length), p = 0, d = -1; p < y; ++p)
        (m = r.tween[p].value.call(t, t.__data__, r.index, r.group)) && (o[++d] = m);
      o.length = d + 1;
    }
  }
  function c(l) {
    for (var p = l < r.duration ? r.ease.call(null, l / r.duration) : (r.timer.restart(f), r.state = On, 1), d = -1, y = o.length; ++d < y; )
      o[d].call(t, p);
    r.state === On && (r.on.call("end", t, t.__data__, r.index, r.group), f());
  }
  function f() {
    r.state = en, r.timer.stop(), delete i[e];
    for (var l in i)
      return;
    delete t.__transition;
  }
}
function Ra(t, e) {
  var r = t.__transition, i, o, a = !0, s;
  if (!!r) {
    e = e == null ? null : e + "";
    for (s in r) {
      if ((i = r[s]).name !== e) {
        a = !1;
        continue;
      }
      o = i.state > Rn && i.state < On, i.state = en, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete r[s];
    }
    a && delete t.__transition;
  }
}
function Oa(t) {
  return this.each(function() {
    Ra(this, t);
  });
}
function Yn(t, e, r) {
  t.prototype = e.prototype = r, r.constructor = t;
}
function ni(t, e) {
  var r = Object.create(t.prototype);
  for (var i in e)
    r[i] = e[i];
  return r;
}
function We() {
}
var De = 0.7, un = 1 / De, Jt = "\\s*([+-]?\\d+)\\s*", Ie = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", _t = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ta = /^#([0-9a-f]{3,8})$/, $a = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), Na = new RegExp(`^rgb\\(${_t},${_t},${_t}\\)$`), Ca = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${Ie}\\)$`), Aa = new RegExp(`^rgba\\(${_t},${_t},${_t},${Ie}\\)$`), Pa = new RegExp(`^hsl\\(${Ie},${_t},${_t}\\)$`), Ma = new RegExp(`^hsla\\(${Ie},${_t},${_t},${Ie}\\)$`), rr = {
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
Yn(We, Xt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ir,
  formatHex: ir,
  formatHex8: ja,
  formatHsl: Fa,
  formatRgb: or,
  toString: or
});
function ir() {
  return this.rgb().formatHex();
}
function ja() {
  return this.rgb().formatHex8();
}
function Fa() {
  return ri(this).formatHsl();
}
function or() {
  return this.rgb().formatRgb();
}
function Xt(t) {
  var e, r;
  return t = (t + "").trim().toLowerCase(), (e = Ta.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? ar(e) : r === 3 ? new et(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? Ve(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? Ve(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = $a.exec(t)) ? new et(e[1], e[2], e[3], 1) : (e = Na.exec(t)) ? new et(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Ca.exec(t)) ? Ve(e[1], e[2], e[3], e[4]) : (e = Aa.exec(t)) ? Ve(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Pa.exec(t)) ? cr(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ma.exec(t)) ? cr(e[1], e[2] / 100, e[3] / 100, e[4]) : rr.hasOwnProperty(t) ? ar(rr[t]) : t === "transparent" ? new et(NaN, NaN, NaN, 0) : null;
}
function ar(t) {
  return new et(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Ve(t, e, r, i) {
  return i <= 0 && (t = e = r = NaN), new et(t, e, r, i);
}
function Da(t) {
  return t instanceof We || (t = Xt(t)), t ? (t = t.rgb(), new et(t.r, t.g, t.b, t.opacity)) : new et();
}
function Tn(t, e, r, i) {
  return arguments.length === 1 ? Da(t) : new et(t, e, r, i == null ? 1 : i);
}
function et(t, e, r, i) {
  this.r = +t, this.g = +e, this.b = +r, this.opacity = +i;
}
Yn(et, Tn, ni(We, {
  brighter(t) {
    return t = t == null ? un : Math.pow(un, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? De : Math.pow(De, t), new et(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new et(Ht(this.r), Ht(this.g), Ht(this.b), cn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: sr,
  formatHex: sr,
  formatHex8: Ia,
  formatRgb: ur,
  toString: ur
}));
function sr() {
  return `#${Ut(this.r)}${Ut(this.g)}${Ut(this.b)}`;
}
function Ia() {
  return `#${Ut(this.r)}${Ut(this.g)}${Ut(this.b)}${Ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ur() {
  const t = cn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ht(this.r)}, ${Ht(this.g)}, ${Ht(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function cn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ht(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ut(t) {
  return t = Ht(t), (t < 16 ? "0" : "") + t.toString(16);
}
function cr(t, e, r, i) {
  return i <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new yt(t, e, r, i);
}
function ri(t) {
  if (t instanceof yt)
    return new yt(t.h, t.s, t.l, t.opacity);
  if (t instanceof We || (t = Xt(t)), !t)
    return new yt();
  if (t instanceof yt)
    return t;
  t = t.rgb();
  var e = t.r / 255, r = t.g / 255, i = t.b / 255, o = Math.min(e, r, i), a = Math.max(e, r, i), s = NaN, c = a - o, f = (a + o) / 2;
  return c ? (e === a ? s = (r - i) / c + (r < i) * 6 : r === a ? s = (i - e) / c + 2 : s = (e - r) / c + 4, c /= f < 0.5 ? a + o : 2 - a - o, s *= 60) : c = f > 0 && f < 1 ? 0 : s, new yt(s, c, f, t.opacity);
}
function La(t, e, r, i) {
  return arguments.length === 1 ? ri(t) : new yt(t, e, r, i == null ? 1 : i);
}
function yt(t, e, r, i) {
  this.h = +t, this.s = +e, this.l = +r, this.opacity = +i;
}
Yn(yt, La, ni(We, {
  brighter(t) {
    return t = t == null ? un : Math.pow(un, t), new yt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? De : Math.pow(De, t), new yt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * e, o = 2 * r - i;
    return new et(
      _n(t >= 240 ? t - 240 : t + 120, o, i),
      _n(t, o, i),
      _n(t < 120 ? t + 240 : t - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new yt(fr(this.h), ze(this.s), ze(this.l), cn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = cn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${fr(this.h)}, ${ze(this.s) * 100}%, ${ze(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function fr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ze(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function _n(t, e, r) {
  return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255;
}
const Vn = (t) => () => t;
function Wa(t, e) {
  return function(r) {
    return t + r * e;
  };
}
function Ya(t, e, r) {
  return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r, function(i) {
    return Math.pow(t + i * e, r);
  };
}
function Va(t) {
  return (t = +t) == 1 ? ii : function(e, r) {
    return r - e ? Ya(e, r, t) : Vn(isNaN(e) ? r : e);
  };
}
function ii(t, e) {
  var r = e - t;
  return r ? Wa(t, r) : Vn(isNaN(t) ? e : t);
}
const fn = function t(e) {
  var r = Va(e);
  function i(o, a) {
    var s = r((o = Tn(o)).r, (a = Tn(a)).r), c = r(o.g, a.g), f = r(o.b, a.b), l = ii(o.opacity, a.opacity);
    return function(p) {
      return o.r = s(p), o.g = c(p), o.b = f(p), o.opacity = l(p), o + "";
    };
  }
  return i.gamma = t, i;
}(1);
function za(t, e) {
  e || (e = []);
  var r = t ? Math.min(e.length, t.length) : 0, i = e.slice(), o;
  return function(a) {
    for (o = 0; o < r; ++o)
      i[o] = t[o] * (1 - a) + e[o] * a;
    return i;
  };
}
function Ua(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ha(t, e) {
  var r = e ? e.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(i), a = new Array(r), s;
  for (s = 0; s < i; ++s)
    o[s] = zn(t[s], e[s]);
  for (; s < r; ++s)
    a[s] = e[s];
  return function(c) {
    for (s = 0; s < i; ++s)
      a[s] = o[s](c);
    return a;
  };
}
function qa(t, e) {
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
function Ba(t, e) {
  var r = {}, i = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? r[o] = zn(t[o], e[o]) : i[o] = e[o];
  return function(a) {
    for (o in r)
      i[o] = r[o](a);
    return i;
  };
}
var $n = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wn = new RegExp($n.source, "g");
function Xa(t) {
  return function() {
    return t;
  };
}
function Ga(t) {
  return function(e) {
    return t(e) + "";
  };
}
function oi(t, e) {
  var r = $n.lastIndex = wn.lastIndex = 0, i, o, a, s = -1, c = [], f = [];
  for (t = t + "", e = e + ""; (i = $n.exec(t)) && (o = wn.exec(e)); )
    (a = o.index) > r && (a = e.slice(r, a), c[s] ? c[s] += a : c[++s] = a), (i = i[0]) === (o = o[0]) ? c[s] ? c[s] += o : c[++s] = o : (c[++s] = null, f.push({ i: s, x: dt(i, o) })), r = wn.lastIndex;
  return r < e.length && (a = e.slice(r), c[s] ? c[s] += a : c[++s] = a), c.length < 2 ? f[0] ? Ga(f[0].x) : Xa(e) : (e = f.length, function(l) {
    for (var p = 0, d; p < e; ++p)
      c[(d = f[p]).i] = d.x(l);
    return c.join("");
  });
}
function zn(t, e) {
  var r = typeof e, i;
  return e == null || r === "boolean" ? Vn(e) : (r === "number" ? dt : r === "string" ? (i = Xt(e)) ? (e = i, fn) : oi : e instanceof Xt ? fn : e instanceof Date ? qa : Ua(e) ? za : Array.isArray(e) ? Ha : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ba : dt)(t, e);
}
function Ja(t, e) {
  return t = +t, e = +e, function(r) {
    return Math.round(t * (1 - r) + e * r);
  };
}
var lr = 180 / Math.PI, Nn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ai(t, e, r, i, o, a) {
  var s, c, f;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (f = t * r + e * i) && (r -= t * f, i -= e * f), (c = Math.sqrt(r * r + i * i)) && (r /= c, i /= c, f /= c), t * i < e * r && (t = -t, e = -e, f = -f, s = -s), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(e, t) * lr,
    skewX: Math.atan(f) * lr,
    scaleX: s,
    scaleY: c
  };
}
var Ue;
function Ka(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Nn : ai(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Za(t) {
  return t == null || (Ue || (Ue = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ue.setAttribute("transform", t), !(t = Ue.transform.baseVal.consolidate())) ? Nn : (t = t.matrix, ai(t.a, t.b, t.c, t.d, t.e, t.f));
}
function si(t, e, r, i) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function a(l, p, d, y, m, b) {
    if (l !== d || p !== y) {
      var R = m.push("translate(", null, e, null, r);
      b.push({ i: R - 4, x: dt(l, d) }, { i: R - 2, x: dt(p, y) });
    } else
      (d || y) && m.push("translate(" + d + e + y + r);
  }
  function s(l, p, d, y) {
    l !== p ? (l - p > 180 ? p += 360 : p - l > 180 && (l += 360), y.push({ i: d.push(o(d) + "rotate(", null, i) - 2, x: dt(l, p) })) : p && d.push(o(d) + "rotate(" + p + i);
  }
  function c(l, p, d, y) {
    l !== p ? y.push({ i: d.push(o(d) + "skewX(", null, i) - 2, x: dt(l, p) }) : p && d.push(o(d) + "skewX(" + p + i);
  }
  function f(l, p, d, y, m, b) {
    if (l !== d || p !== y) {
      var R = m.push(o(m) + "scale(", null, ",", null, ")");
      b.push({ i: R - 4, x: dt(l, d) }, { i: R - 2, x: dt(p, y) });
    } else
      (d !== 1 || y !== 1) && m.push(o(m) + "scale(" + d + "," + y + ")");
  }
  return function(l, p) {
    var d = [], y = [];
    return l = t(l), p = t(p), a(l.translateX, l.translateY, p.translateX, p.translateY, d, y), s(l.rotate, p.rotate, d, y), c(l.skewX, p.skewX, d, y), f(l.scaleX, l.scaleY, p.scaleX, p.scaleY, d, y), l = p = null, function(m) {
      for (var b = -1, R = y.length, $; ++b < R; )
        d[($ = y[b]).i] = $.x(m);
      return d.join("");
    };
  };
}
var Qa = si(Ka, "px, ", "px)", "deg)"), ts = si(Za, ", ", ")", ")");
function es(t, e) {
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
function ns(t, e, r) {
  var i, o;
  if (typeof r != "function")
    throw new Error();
  return function() {
    var a = wt(this, t), s = a.tween;
    if (s !== i) {
      o = (i = s).slice();
      for (var c = { name: e, value: r }, f = 0, l = o.length; f < l; ++f)
        if (o[f].name === e) {
          o[f] = c;
          break;
        }
      f === l && o.push(c);
    }
    a.tween = o;
  };
}
function rs(t, e) {
  var r = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = mt(this.node(), r).tween, o = 0, a = i.length, s; o < a; ++o)
      if ((s = i[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? es : ns)(r, t, e));
}
function Un(t, e, r) {
  var i = t._id;
  return t.each(function() {
    var o = wt(this, i);
    (o.value || (o.value = {}))[e] = r.apply(this, arguments);
  }), function(o) {
    return mt(o, i).value[e];
  };
}
function ui(t, e) {
  var r;
  return (typeof e == "number" ? dt : e instanceof Xt ? fn : (r = Xt(e)) ? (e = r, fn) : oi)(t, e);
}
function is(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function os(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function as(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function ss(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function us(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), f;
    return c == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), f = c + "", s === f ? null : s === i && f === o ? a : (o = f, a = e(i = s, c)));
  };
}
function cs(t, e, r) {
  var i, o, a;
  return function() {
    var s, c = r(this), f;
    return c == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), f = c + "", s === f ? null : s === i && f === o ? a : (o = f, a = e(i = s, c)));
  };
}
function fs(t, e) {
  var r = dn(t), i = r === "transform" ? ts : ui;
  return this.attrTween(t, typeof e == "function" ? (r.local ? cs : us)(r, i, Un(this, "attr." + t, e)) : e == null ? (r.local ? os : is)(r) : (r.local ? ss : as)(r, i, e));
}
function ls(t, e) {
  return function(r) {
    this.setAttribute(t, e.call(this, r));
  };
}
function hs(t, e) {
  return function(r) {
    this.setAttributeNS(t.space, t.local, e.call(this, r));
  };
}
function ps(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && hs(t, a)), r;
  }
  return o._value = e, o;
}
function ds(t, e) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && ls(t, a)), r;
  }
  return o._value = e, o;
}
function ys(t, e) {
  var r = "attr." + t;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  var i = dn(t);
  return this.tween(r, (i.local ? ps : ds)(i, e));
}
function gs(t, e) {
  return function() {
    Wn(this, t).delay = +e.apply(this, arguments);
  };
}
function ms(t, e) {
  return e = +e, function() {
    Wn(this, t).delay = e;
  };
}
function vs(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? gs : ms)(e, t)) : mt(this.node(), e).delay;
}
function _s(t, e) {
  return function() {
    wt(this, t).duration = +e.apply(this, arguments);
  };
}
function ws(t, e) {
  return e = +e, function() {
    wt(this, t).duration = e;
  };
}
function bs(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? _s : ws)(e, t)) : mt(this.node(), e).duration;
}
function xs(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    wt(this, t).ease = e;
  };
}
function ks(t) {
  var e = this._id;
  return arguments.length ? this.each(xs(e, t)) : mt(this.node(), e).ease;
}
function Es(t, e) {
  return function() {
    var r = e.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    wt(this, t).ease = r;
  };
}
function Ss(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Es(this._id, t));
}
function Rs(t) {
  typeof t != "function" && (t = Wr(t));
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o)
    for (var a = e[o], s = a.length, c = i[o] = [], f, l = 0; l < s; ++l)
      (f = a[l]) && t.call(f, f.__data__, l, a) && c.push(f);
  return new xt(i, this._parents, this._name, this._id);
}
function Os(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, r = t._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var f = e[c], l = r[c], p = f.length, d = s[c] = new Array(p), y, m = 0; m < p; ++m)
      (y = f[m] || l[m]) && (d[m] = y);
  for (; c < i; ++c)
    s[c] = e[c];
  return new xt(s, this._parents, this._name, this._id);
}
function Ts(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var r = e.indexOf(".");
    return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
  });
}
function $s(t, e, r) {
  var i, o, a = Ts(e) ? Wn : wt;
  return function() {
    var s = a(this, t), c = s.on;
    c !== i && (o = (i = c).copy()).on(e, r), s.on = o;
  };
}
function Ns(t, e) {
  var r = this._id;
  return arguments.length < 2 ? mt(this.node(), r).on.on(t) : this.each($s(r, t, e));
}
function Cs(t) {
  return function() {
    var e = this.parentNode;
    for (var r in this.__transition)
      if (+r !== t)
        return;
    e && e.removeChild(this);
  };
}
function As() {
  return this.on("end.remove", Cs(this._id));
}
function Ps(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = Dn(t));
  for (var i = this._groups, o = i.length, a = new Array(o), s = 0; s < o; ++s)
    for (var c = i[s], f = c.length, l = a[s] = new Array(f), p, d, y = 0; y < f; ++y)
      (p = c[y]) && (d = t.call(p, p.__data__, y, c)) && ("__data__" in p && (d.__data__ = p.__data__), l[y] = d, gn(l[y], e, r, y, l, mt(p, r)));
  return new xt(a, this._parents, e, r);
}
function Ms(t) {
  var e = this._name, r = this._id;
  typeof t != "function" && (t = Lr(t));
  for (var i = this._groups, o = i.length, a = [], s = [], c = 0; c < o; ++c)
    for (var f = i[c], l = f.length, p, d = 0; d < l; ++d)
      if (p = f[d]) {
        for (var y = t.call(p, p.__data__, d, f), m, b = mt(p, r), R = 0, $ = y.length; R < $; ++R)
          (m = y[R]) && gn(m, e, r, R, y, b);
        a.push(y), s.push(p);
      }
  return new xt(a, s, e, r);
}
var js = Le.prototype.constructor;
function Fs() {
  return new js(this._groups, this._parents);
}
function Ds(t, e) {
  var r, i, o;
  return function() {
    var a = Kt(this, t), s = (this.style.removeProperty(t), Kt(this, t));
    return a === s ? null : a === r && s === i ? o : o = e(r = a, i = s);
  };
}
function ci(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Is(t, e, r) {
  var i, o = r + "", a;
  return function() {
    var s = Kt(this, t);
    return s === o ? null : s === i ? a : a = e(i = s, r);
  };
}
function Ls(t, e, r) {
  var i, o, a;
  return function() {
    var s = Kt(this, t), c = r(this), f = c + "";
    return c == null && (f = c = (this.style.removeProperty(t), Kt(this, t))), s === f ? null : s === i && f === o ? a : (o = f, a = e(i = s, c));
  };
}
function Ws(t, e) {
  var r, i, o, a = "style." + e, s = "end." + a, c;
  return function() {
    var f = wt(this, t), l = f.on, p = f.value[a] == null ? c || (c = ci(e)) : void 0;
    (l !== r || o !== p) && (i = (r = l).copy()).on(s, o = p), f.on = i;
  };
}
function Ys(t, e, r) {
  var i = (t += "") == "transform" ? Qa : ui;
  return e == null ? this.styleTween(t, Ds(t, i)).on("end.style." + t, ci(t)) : typeof e == "function" ? this.styleTween(t, Ls(t, i, Un(this, "style." + t, e))).each(Ws(this._id, t)) : this.styleTween(t, Is(t, i, e), r).on("end.style." + t, null);
}
function Vs(t, e, r) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), r);
  };
}
function zs(t, e, r) {
  var i, o;
  function a() {
    var s = e.apply(this, arguments);
    return s !== o && (i = (o = s) && Vs(t, s, r)), i;
  }
  return a._value = e, a;
}
function Us(t, e, r) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, zs(t, e, r == null ? "" : r));
}
function Hs(t) {
  return function() {
    this.textContent = t;
  };
}
function qs(t) {
  return function() {
    var e = t(this);
    this.textContent = e == null ? "" : e;
  };
}
function Bs(t) {
  return this.tween("text", typeof t == "function" ? qs(Un(this, "text", t)) : Hs(t == null ? "" : t + ""));
}
function Xs(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Gs(t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && Xs(o)), e;
  }
  return i._value = t, i;
}
function Js(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Gs(t));
}
function Ks() {
  for (var t = this._name, e = this._id, r = fi(), i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, f, l = 0; l < c; ++l)
      if (f = s[l]) {
        var p = mt(f, e);
        gn(f, t, r, l, s, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new xt(i, this._parents, t, r);
}
function Zs() {
  var t, e, r = this, i = r._id, o = r.size();
  return new Promise(function(a, s) {
    var c = { value: s }, f = { value: function() {
      --o === 0 && a();
    } };
    r.each(function() {
      var l = wt(this, i), p = l.on;
      p !== t && (e = (t = p).copy(), e._.cancel.push(c), e._.interrupt.push(c), e._.end.push(f)), l.on = e;
    }), o === 0 && a();
  });
}
var Qs = 0;
function xt(t, e, r, i) {
  this._groups = t, this._parents = e, this._name = r, this._id = i;
}
function fi() {
  return ++Qs;
}
var bt = Le.prototype;
xt.prototype = {
  constructor: xt,
  select: Ps,
  selectAll: Ms,
  selectChild: bt.selectChild,
  selectChildren: bt.selectChildren,
  filter: Rs,
  merge: Os,
  selection: Fs,
  transition: Ks,
  call: bt.call,
  nodes: bt.nodes,
  node: bt.node,
  size: bt.size,
  empty: bt.empty,
  each: bt.each,
  on: Ns,
  attr: fs,
  attrTween: ys,
  style: Ys,
  styleTween: Us,
  text: Bs,
  textTween: Js,
  remove: As,
  tween: rs,
  delay: vs,
  duration: bs,
  ease: ks,
  easeVarying: Ss,
  end: Zs,
  [Symbol.iterator]: bt[Symbol.iterator]
};
function tu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var eu = {
  time: null,
  delay: 0,
  duration: 250,
  ease: tu
};
function nu(t, e) {
  for (var r; !(r = t.__transition) || !(r = r[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return r;
}
function ru(t) {
  var e, r;
  t instanceof xt ? (e = t._id, t = t._name) : (e = fi(), (r = eu).time = Ln(), t = t == null ? null : t + "");
  for (var i = this._groups, o = i.length, a = 0; a < o; ++a)
    for (var s = i[a], c = s.length, f, l = 0; l < c; ++l)
      (f = s[l]) && gn(f, t, e, l, s, r || nu(f, e));
  return new xt(i, this._parents, t, e);
}
Le.prototype.interrupt = Oa;
Le.prototype.transition = ru;
const hr = {
  wicks: "line",
  candles: "rect"
}, iu = (t, e, r, i, o) => {
  const { xScale: a } = r, { offset: s } = o, { scaledHeight: c, scaledY: f } = i, l = jn({}), p = zt(() => Ze(t.current), [t.current]), d = zt(
    (b, R = p()) => R.selectAll(`${hr[b]}.${b}`).data(e),
    [e]
  ), y = zt(
    (b) => {
      var R;
      return l.current[b] = (R = l.current[b]) != null ? R : p().append("g").classed(`${b}-group`, !0).attr("clip-path", "url(#chart-contents)"), l.current[b];
    },
    [l]
  ), m = zt(
    (b, R) => {
      let $ = d(b, y(b));
      $.size() !== e.length && ($ = $.enter().append(hr[b]));
      const C = () => $.transition().duration(pa), k = (A) => Number(a(A.date)) + (b === "wicks" ? +a.bandwidth() / 2 : 0) + s, F = (A) => f(A[R[0]], A[R[1]]), W = (A) => c(A[R[0]], A[R[1]]);
      return b === "candles" ? C().attr("width", () => +a.bandwidth()).attr("height", W).attr("x", k).attr("y", F) : C().attr("x1", k).attr("y1", F).attr("x2", k).attr("y2", (A) => F(A) + W(A)), $.classed(b, !0).exit().remove(), $;
    },
    [a, f]
  );
  Vt(() => {
    y("wicks"), y("candles");
  }, []), Vt(() => {
    var b;
    (b = a == null ? void 0 : a.bandwidth) != null && b.call(a) && (m("wicks", ["low", "high"]), m("candles", ["open", "close"]).attr(
      "fill",
      (R) => R.close < R.open ? "red" : "green"
    ));
  }, [a, f]);
};
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, li = "Expected a function", pr = 0 / 0, ou = "[object Symbol]", au = /^\s+|\s+$/g, su = /^[-+]0x[0-9a-f]+$/i, uu = /^0b[01]+$/i, cu = /^0o[0-7]+$/i, fu = parseInt, lu = typeof He == "object" && He && He.Object === Object && He, hu = typeof self == "object" && self && self.Object === Object && self, pu = lu || hu || Function("return this")(), du = Object.prototype, yu = du.toString, gu = Math.max, mu = Math.min, bn = function() {
  return pu.Date.now();
};
function vu(t, e, r) {
  var i, o, a, s, c, f, l = 0, p = !1, d = !1, y = !0;
  if (typeof t != "function")
    throw new TypeError(li);
  e = dr(e) || 0, ln(r) && (p = !!r.leading, d = "maxWait" in r, a = d ? gu(dr(r.maxWait) || 0, e) : a, y = "trailing" in r ? !!r.trailing : y);
  function m(M) {
    var I = i, U = o;
    return i = o = void 0, l = M, s = t.apply(U, I), s;
  }
  function b(M) {
    return l = M, c = setTimeout(C, e), p ? m(M) : s;
  }
  function R(M) {
    var I = M - f, U = M - l, H = e - I;
    return d ? mu(H, a - U) : H;
  }
  function $(M) {
    var I = M - f, U = M - l;
    return f === void 0 || I >= e || I < 0 || d && U >= a;
  }
  function C() {
    var M = bn();
    if ($(M))
      return k(M);
    c = setTimeout(C, R(M));
  }
  function k(M) {
    return c = void 0, y && i ? m(M) : (i = o = void 0, s);
  }
  function F() {
    c !== void 0 && clearTimeout(c), l = 0, i = f = o = c = void 0;
  }
  function W() {
    return c === void 0 ? s : k(bn());
  }
  function A() {
    var M = bn(), I = $(M);
    if (i = arguments, o = this, f = M, I) {
      if (c === void 0)
        return b(f);
      if (d)
        return c = setTimeout(C, e), m(f);
    }
    return c === void 0 && (c = setTimeout(C, e)), s;
  }
  return A.cancel = F, A.flush = W, A;
}
function _u(t, e, r) {
  var i = !0, o = !0;
  if (typeof t != "function")
    throw new TypeError(li);
  return ln(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o), vu(t, e, {
    leading: i,
    maxWait: e,
    trailing: o
  });
}
function ln(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function wu(t) {
  return !!t && typeof t == "object";
}
function bu(t) {
  return typeof t == "symbol" || wu(t) && yu.call(t) == ou;
}
function dr(t) {
  if (typeof t == "number")
    return t;
  if (bu(t))
    return pr;
  if (ln(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ln(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(au, "");
  var r = uu.test(t);
  return r || cu.test(t) ? fu(t.slice(2), r ? 2 : 8) : su.test(t) ? pr : +t;
}
var xu = _u;
const { abs: ku, round: yr } = Math, Eu = (t, e, r, i) => {
  const [o, a] = qt({
    width: 0,
    height: 0
  }), [s, c] = qt({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), f = jn(), l = zt(
    xu(() => {
      const { clientWidth: p, clientHeight: d } = t.current;
      a({ width: p, height: d });
    }, 200),
    [t.current]
  );
  return Vt(() => (f.current = addEventListener("resize", l), () => {
    removeEventListener("resize", l), f.current = void 0;
  }), []), Vt(() => {
    l();
  }, [t.current, e]), Vt(() => {
    if (!e)
      return;
    const { width: p } = o, d = da * (1 + Jr) * r, y = d * e, m = p - Zt[1] + vt * 2;
    let b = i * r - y + m;
    b = b <= 0 ? b : 0, b = y > p ? b : m - y, b = ku(b - m) <= y ? b : -y + m;
    const R = yr((b * -1 - vt) / d), $ = yr((b * -1 + m) / d);
    c({ first: R, last: $, offset: b, totalWidth: y });
  }, [r, i, e, o.width]), { visibleRange: s, dimensions: o };
};
function nn(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Su(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function hi(t) {
  let e, r, i;
  t.length !== 2 ? (e = nn, r = (c, f) => nn(t(c), f), i = (c, f) => t(c) - f) : (e = t === nn || t === Su ? t : Ru, r = t, i = t);
  function o(c, f, l = 0, p = c.length) {
    if (l < p) {
      if (e(f, f) !== 0)
        return p;
      do {
        const d = l + p >>> 1;
        r(c[d], f) < 0 ? l = d + 1 : p = d;
      } while (l < p);
    }
    return l;
  }
  function a(c, f, l = 0, p = c.length) {
    if (l < p) {
      if (e(f, f) !== 0)
        return p;
      do {
        const d = l + p >>> 1;
        r(c[d], f) <= 0 ? l = d + 1 : p = d;
      } while (l < p);
    }
    return l;
  }
  function s(c, f, l = 0, p = c.length) {
    const d = o(c, f, l, p - 1);
    return d > l && i(c[d - 1], f) > -i(c[d], f) ? d - 1 : d;
  }
  return { left: o, center: s, right: a };
}
function Ru() {
  return 0;
}
function Ou(t) {
  return t === null ? NaN : +t;
}
const Tu = hi(nn), $u = Tu.right;
hi(Ou).center;
const Nu = $u;
class gr extends Map {
  constructor(e, r = Pu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), e != null)
      for (const [i, o] of e)
        this.set(i, o);
  }
  get(e) {
    return super.get(mr(this, e));
  }
  has(e) {
    return super.has(mr(this, e));
  }
  set(e, r) {
    return super.set(Cu(this, e), r);
  }
  delete(e) {
    return super.delete(Au(this, e));
  }
}
function mr({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : r;
}
function Cu({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) ? t.get(i) : (t.set(i, r), r);
}
function Au({ _intern: t, _key: e }, r) {
  const i = e(r);
  return t.has(i) && (r = t.get(i), t.delete(i)), r;
}
function Pu(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var Cn = Math.sqrt(50), An = Math.sqrt(10), Pn = Math.sqrt(2);
function Mu(t, e, r) {
  var i, o = -1, a, s, c;
  if (e = +e, t = +t, r = +r, t === e && r > 0)
    return [t];
  if ((i = e < t) && (a = t, t = e, e = a), (c = pi(t, e, r)) === 0 || !isFinite(c))
    return [];
  if (c > 0) {
    let f = Math.round(t / c), l = Math.round(e / c);
    for (f * c < t && ++f, l * c > e && --l, s = new Array(a = l - f + 1); ++o < a; )
      s[o] = (f + o) * c;
  } else {
    c = -c;
    let f = Math.round(t * c), l = Math.round(e * c);
    for (f / c < t && ++f, l / c > e && --l, s = new Array(a = l - f + 1); ++o < a; )
      s[o] = (f + o) / c;
  }
  return i && s.reverse(), s;
}
function pi(t, e, r) {
  var i = (e - t) / Math.max(0, r), o = Math.floor(Math.log(i) / Math.LN10), a = i / Math.pow(10, o);
  return o >= 0 ? (a >= Cn ? 10 : a >= An ? 5 : a >= Pn ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= Cn ? 10 : a >= An ? 5 : a >= Pn ? 2 : 1);
}
function ju(t, e, r) {
  var i = Math.abs(e - t) / Math.max(0, r), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), a = i / o;
  return a >= Cn ? o *= 10 : a >= An ? o *= 5 : a >= Pn && (o *= 2), e < t ? -o : o;
}
function Fu(t, e, r) {
  t = +t, e = +e, r = (o = arguments.length) < 2 ? (e = t, t = 0, 1) : o < 3 ? 1 : +r;
  for (var i = -1, o = Math.max(0, Math.ceil((e - t) / r)) | 0, a = new Array(o); ++i < o; )
    a[i] = t + i * r;
  return a;
}
function Hn(t, e) {
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
const vr = Symbol("implicit");
function di() {
  var t = new gr(), e = [], r = [], i = vr;
  function o(a) {
    let s = t.get(a);
    if (s === void 0) {
      if (i !== vr)
        return i;
      t.set(a, s = e.push(a) - 1);
    }
    return r[s % r.length];
  }
  return o.domain = function(a) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new gr();
    for (const s of a)
      t.has(s) || t.set(s, e.push(s) - 1);
    return o;
  }, o.range = function(a) {
    return arguments.length ? (r = Array.from(a), o) : r.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (i = a, o) : i;
  }, o.copy = function() {
    return di(e, r).unknown(i);
  }, Hn.apply(o, arguments), o;
}
function yi() {
  var t = di().unknown(void 0), e = t.domain, r = t.range, i = 0, o = 1, a, s, c = !1, f = 0, l = 0, p = 0.5;
  delete t.unknown;
  function d() {
    var y = e().length, m = o < i, b = m ? o : i, R = m ? i : o;
    a = (R - b) / Math.max(1, y - f + l * 2), c && (a = Math.floor(a)), b += (R - b - a * (y - f)) * p, s = a * (1 - f), c && (b = Math.round(b), s = Math.round(s));
    var $ = Fu(y).map(function(C) {
      return b + a * C;
    });
    return r(m ? $.reverse() : $);
  }
  return t.domain = function(y) {
    return arguments.length ? (e(y), d()) : e();
  }, t.range = function(y) {
    return arguments.length ? ([i, o] = y, i = +i, o = +o, d()) : [i, o];
  }, t.rangeRound = function(y) {
    return [i, o] = y, i = +i, o = +o, c = !0, d();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return a;
  }, t.round = function(y) {
    return arguments.length ? (c = !!y, d()) : c;
  }, t.padding = function(y) {
    return arguments.length ? (f = Math.min(1, l = +y), d()) : f;
  }, t.paddingInner = function(y) {
    return arguments.length ? (f = Math.min(1, y), d()) : f;
  }, t.paddingOuter = function(y) {
    return arguments.length ? (l = +y, d()) : l;
  }, t.align = function(y) {
    return arguments.length ? (p = Math.max(0, Math.min(1, y)), d()) : p;
  }, t.copy = function() {
    return yi(e(), [i, o]).round(c).paddingInner(f).paddingOuter(l).align(p);
  }, Hn.apply(d(), arguments);
}
function Du(t) {
  return function() {
    return t;
  };
}
function Iu(t) {
  return +t;
}
var _r = [0, 1];
function Gt(t) {
  return t;
}
function Mn(t, e) {
  return (e -= t = +t) ? function(r) {
    return (r - t) / e;
  } : Du(isNaN(e) ? NaN : 0.5);
}
function Lu(t, e) {
  var r;
  return t > e && (r = t, t = e, e = r), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Wu(t, e, r) {
  var i = t[0], o = t[1], a = e[0], s = e[1];
  return o < i ? (i = Mn(o, i), a = r(s, a)) : (i = Mn(i, o), a = r(a, s)), function(c) {
    return a(i(c));
  };
}
function Yu(t, e, r) {
  var i = Math.min(t.length, e.length) - 1, o = new Array(i), a = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    o[s] = Mn(t[s], t[s + 1]), a[s] = r(e[s], e[s + 1]);
  return function(c) {
    var f = Nu(t, c, 1, i) - 1;
    return a[f](o[f](c));
  };
}
function Vu(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function zu() {
  var t = _r, e = _r, r = zn, i, o, a, s = Gt, c, f, l;
  function p() {
    var y = Math.min(t.length, e.length);
    return s !== Gt && (s = Lu(t[0], t[y - 1])), c = y > 2 ? Yu : Wu, f = l = null, d;
  }
  function d(y) {
    return y == null || isNaN(y = +y) ? a : (f || (f = c(t.map(i), e, r)))(i(s(y)));
  }
  return d.invert = function(y) {
    return s(o((l || (l = c(e, t.map(i), dt)))(y)));
  }, d.domain = function(y) {
    return arguments.length ? (t = Array.from(y, Iu), p()) : t.slice();
  }, d.range = function(y) {
    return arguments.length ? (e = Array.from(y), p()) : e.slice();
  }, d.rangeRound = function(y) {
    return e = Array.from(y), r = Ja, p();
  }, d.clamp = function(y) {
    return arguments.length ? (s = y ? !0 : Gt, p()) : s !== Gt;
  }, d.interpolate = function(y) {
    return arguments.length ? (r = y, p()) : r;
  }, d.unknown = function(y) {
    return arguments.length ? (a = y, d) : a;
  }, function(y, m) {
    return i = y, o = m, p();
  };
}
function Uu() {
  return zu()(Gt, Gt);
}
function Hu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function hn(t, e) {
  if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var r, i = t.slice(0, r);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(r + 1)
  ];
}
function te(t) {
  return t = hn(Math.abs(t)), t ? t[1] : NaN;
}
function qu(t, e) {
  return function(r, i) {
    for (var o = r.length, a = [], s = 0, c = t[0], f = 0; o > 0 && c > 0 && (f + c + 1 > i && (c = Math.max(1, i - f)), a.push(r.substring(o -= c, o + c)), !((f += c + 1) > i)); )
      c = t[s = (s + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Bu(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return t[+r];
    });
  };
}
var Xu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pn(t) {
  if (!(e = Xu.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new qn({
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
pn.prototype = qn.prototype;
function qn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
qn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Gu(t) {
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
var gi;
function Ju(t, e) {
  var r = hn(t, e);
  if (!r)
    return t + "";
  var i = r[0], o = r[1], a = o - (gi = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = i.length;
  return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + hn(t, Math.max(0, e + a - 1))[0];
}
function wr(t, e) {
  var r = hn(t, e);
  if (!r)
    return t + "";
  var i = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const br = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Hu,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => wr(t * 100, e),
  r: wr,
  s: Ju,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function xr(t) {
  return t;
}
var kr = Array.prototype.map, Er = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ku(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? xr : qu(kr.call(t.grouping, Number), t.thousands + ""), r = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", o = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? xr : Bu(kr.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", c = t.minus === void 0 ? "\u2212" : t.minus + "", f = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(d) {
    d = pn(d);
    var y = d.fill, m = d.align, b = d.sign, R = d.symbol, $ = d.zero, C = d.width, k = d.comma, F = d.precision, W = d.trim, A = d.type;
    A === "n" ? (k = !0, A = "g") : br[A] || (F === void 0 && (F = 12), W = !0, A = "g"), ($ || y === "0" && m === "=") && ($ = !0, y = "0", m = "=");
    var M = R === "$" ? r : R === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", I = R === "$" ? i : /[%p]/.test(A) ? s : "", U = br[A], H = /[defgprs%]/.test(A);
    F = F === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, F)) : Math.max(0, Math.min(20, F));
    function G(N) {
      var L = M, O = I, j, Y, nt;
      if (A === "c")
        O = U(N) + O, N = "";
      else {
        N = +N;
        var rt = N < 0 || 1 / N < 0;
        if (N = isNaN(N) ? f : U(Math.abs(N), F), W && (N = Gu(N)), rt && +N == 0 && b !== "+" && (rt = !1), L = (rt ? b === "(" ? b : c : b === "-" || b === "(" ? "" : b) + L, O = (A === "s" ? Er[8 + gi / 3] : "") + O + (rt && b === "(" ? ")" : ""), H) {
          for (j = -1, Y = N.length; ++j < Y; )
            if (nt = N.charCodeAt(j), 48 > nt || nt > 57) {
              O = (nt === 46 ? o + N.slice(j + 1) : N.slice(j)) + O, N = N.slice(0, j);
              break;
            }
        }
      }
      k && !$ && (N = e(N, 1 / 0));
      var it = L.length + N.length + O.length, q = it < C ? new Array(C - it + 1).join(y) : "";
      switch (k && $ && (N = e(q + N, q.length ? C - O.length : 1 / 0), q = ""), m) {
        case "<":
          N = L + N + O + q;
          break;
        case "=":
          N = L + q + N + O;
          break;
        case "^":
          N = q.slice(0, it = q.length >> 1) + L + N + O + q.slice(it);
          break;
        default:
          N = q + L + N + O;
          break;
      }
      return a(N);
    }
    return G.toString = function() {
      return d + "";
    }, G;
  }
  function p(d, y) {
    var m = l((d = pn(d), d.type = "f", d)), b = Math.max(-8, Math.min(8, Math.floor(te(y) / 3))) * 3, R = Math.pow(10, -b), $ = Er[8 + b / 3];
    return function(C) {
      return m(R * C) + $;
    };
  }
  return {
    format: l,
    formatPrefix: p
  };
}
var qe, mi, vi;
Zu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Zu(t) {
  return qe = Ku(t), mi = qe.format, vi = qe.formatPrefix, qe;
}
function Qu(t) {
  return Math.max(0, -te(Math.abs(t)));
}
function tc(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(te(e) / 3))) * 3 - te(Math.abs(t)));
}
function ec(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, te(e) - te(t)) + 1;
}
function nc(t, e, r, i) {
  var o = ju(t, e, r), a;
  switch (i = pn(i == null ? ",f" : i), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(a = tc(o, s)) && (i.precision = a), vi(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(a = ec(o, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = a - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(a = Qu(o)) && (i.precision = a - (i.type === "%") * 2);
      break;
    }
  }
  return mi(i);
}
function rc(t) {
  var e = t.domain;
  return t.ticks = function(r) {
    var i = e();
    return Mu(i[0], i[i.length - 1], r == null ? 10 : r);
  }, t.tickFormat = function(r, i) {
    var o = e();
    return nc(o[0], o[o.length - 1], r == null ? 10 : r, i);
  }, t.nice = function(r) {
    r == null && (r = 10);
    var i = e(), o = 0, a = i.length - 1, s = i[o], c = i[a], f, l, p = 10;
    for (c < s && (l = s, s = c, c = l, l = o, o = a, a = l); p-- > 0; ) {
      if (l = pi(s, c, r), l === f)
        return i[o] = s, i[a] = c, e(i);
      if (l > 0)
        s = Math.floor(s / l) * l, c = Math.ceil(c / l) * l;
      else if (l < 0)
        s = Math.ceil(s * l) / l, c = Math.floor(c * l) / l;
      else
        break;
      f = l;
    }
    return t;
  }, t;
}
function _i() {
  var t = Uu();
  return t.copy = function() {
    return Vu(t, _i());
  }, Hn.apply(t, arguments), rc(t);
}
const { abs: ic, min: Sr, max: oc } = Math, ac = (t, e, r) => {
  const [i, o] = qt({
    xScale: (c) => c,
    yScale: (c) => c
  }), a = zt(
    (c, f) => ic(i.yScale(f) - i.yScale(c)) || 1,
    [i.yScale]
  ), s = zt(
    (c, f) => i.yScale(Sr(c, f)) - a(c, f) + vt || 1,
    [i.yScale]
  );
  return Vt(() => {
    if (!(t != null && t.length))
      return;
    const { first: c, last: f, totalWidth: l } = r, { height: p } = e, d = t.slice(c > 0 ? c : 0, f), y = Sr(...d.map(({ low: $ }) => $)), m = oc(...d.map(({ high: $ }) => $)), b = yi().range([vt, l - vt]).domain(t.map(({ date: $ }) => $)).padding(Jr), R = _i().domain([y - 20, m + 20]).range([p - Zt[0] - vt, vt]);
    o({ xScale: b, yScale: R });
  }, [r, e.height, t]), { utils: { scaledHeight: a, scaledY: s }, scales: i };
};
var Bn = { exports: {} }, $e = {};
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
function sc() {
  if (Rr)
    return $e;
  Rr = 1;
  var t = ee, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, l) {
    var p, d = {}, y = null, m = null;
    l !== void 0 && (y = "" + l), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (p in f)
      i.call(f, p) && !a.hasOwnProperty(p) && (d[p] = f[p]);
    if (c && c.defaultProps)
      for (p in f = c.defaultProps, f)
        d[p] === void 0 && (d[p] = f[p]);
    return { $$typeof: e, type: c, key: y, ref: m, props: d, _owner: o.current };
  }
  return $e.Fragment = r, $e.jsx = s, $e.jsxs = s, $e;
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
var Or;
function uc() {
  return Or || (Or = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ee, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, R = "@@iterator";
    function $(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = b && n[b] || n[R];
      return typeof u == "function" ? u : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(n) {
      {
        for (var u = arguments.length, h = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          h[g - 1] = arguments[g];
        F("error", n, h);
      }
    }
    function F(n, u, h) {
      {
        var g = C.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", h = h.concat([w]));
        var x = h.map(function(_) {
          return String(_);
        });
        x.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var W = !1, A = !1, M = !1, I = !1, U = !1, H;
    H = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || U || n === o || n === l || n === p || I || n === m || W || A || M || typeof n == "object" && n !== null && (n.$$typeof === y || n.$$typeof === d || n.$$typeof === s || n.$$typeof === c || n.$$typeof === f || n.$$typeof === H || n.getModuleId !== void 0));
    }
    function N(n, u, h) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? h + "(" + w + ")" : h;
    }
    function L(n) {
      return n.displayName || "Context";
    }
    function O(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
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
        case l:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var u = n;
            return L(u) + ".Consumer";
          case s:
            var h = n;
            return L(h._context) + ".Provider";
          case f:
            return N(n, n.render, "ForwardRef");
          case d:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case y: {
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
    var j = Object.assign, Y = 0, nt, rt, it, q, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function ne() {
      {
        if (Y === 0) {
          nt = console.log, rt = console.info, it = console.warn, q = console.error, kt = console.group, Et = console.groupCollapsed, St = console.groupEnd;
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
    function re() {
      {
        if (Y--, Y === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, n, {
              value: nt
            }),
            info: j({}, n, {
              value: rt
            }),
            warn: j({}, n, {
              value: it
            }),
            error: j({}, n, {
              value: q
            }),
            group: j({}, n, {
              value: kt
            }),
            groupCollapsed: j({}, n, {
              value: Et
            }),
            groupEnd: j({}, n, {
              value: St
            })
          });
        }
        Y < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = C.ReactCurrentDispatcher, st;
    function J(n, u, h) {
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
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ie();
    }
    function Ot(n, u) {
      if (!n || ut)
        return "";
      {
        var h = K.get(n);
        if (h !== void 0)
          return h;
      }
      var g;
      ut = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = at.current, at.current = null, ne();
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
                    var P = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, P), P;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = x, re(), Error.prepareStackTrace = w;
      }
      var z = n ? n.displayName || n.name : "", Wt = z ? J(z) : "";
      return typeof n == "function" && K.set(n, Wt), Wt;
    }
    function oe(n, u, h) {
      return Ot(n, !1);
    }
    function ae(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, h) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ot(n, ae(n));
      if (typeof n == "string")
        return J(n);
      switch (n) {
        case l:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            return oe(n.render);
          case d:
            return Z(n.type, u, h);
          case y: {
            var g = n, w = g._payload, x = g._init;
            try {
              return Z(x(w), u, h);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Tt = {}, $t = C.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, h = Z(n.type, n._source, u ? u.type : null);
        $t.setExtraStackFrame(h);
      } else
        $t.setExtraStackFrame(null);
    }
    function se(n, u, h, g, w) {
      {
        var x = Function.call.bind(Q);
        for (var _ in n)
          if (x(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var T = Error((g || "React class") + ": " + h + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = n[_](u, _, g, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", h, _, typeof v), tt(null)), v instanceof Error && !(v.message in Tt) && (Tt[v.message] = !0, tt(w), k("Failed %s type: %s", h, v.message), tt(null));
          }
      }
    }
    var ue = Array.isArray;
    function ct(n) {
      return ue(n);
    }
    function ce(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, h = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return h;
      }
    }
    function fe(n) {
      try {
        return Nt(n), !1;
      } catch {
        return !0;
      }
    }
    function Nt(n) {
      return "" + n;
    }
    function Ct(n) {
      if (fe(n))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(n)), Nt(n);
    }
    var B = C.ReactCurrentOwner, le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, ft;
    ft = {};
    function he(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function pe(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function de(n, u) {
      if (typeof n.ref == "string" && B.current && u && B.current.stateNode !== u) {
        var h = O(B.current.type);
        ft[h] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(B.current.type), n.ref), ft[h] = !0);
      }
    }
    function ye(n, u) {
      {
        var h = function() {
          At || (At = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function ge(n, u) {
      {
        var h = function() {
          Pt || (Pt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var me = function(n, u, h, g, w, x, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: h,
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
    function ve(n, u, h, g, w) {
      {
        var x, _ = {}, v = null, T = null;
        h !== void 0 && (Ct(h), v = "" + h), pe(u) && (Ct(u.key), v = "" + u.key), he(u) && (T = u.ref, de(u, w));
        for (x in u)
          Q.call(u, x) && !le.hasOwnProperty(x) && (_[x] = u[x]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (x in E)
            _[x] === void 0 && (_[x] = E[x]);
        }
        if (v || T) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && ye(_, S), T && ge(_, S);
        }
        return me(n, v, T, w, g, B.current, _);
      }
    }
    var lt = C.ReactCurrentOwner, Mt = C.ReactDebugCurrentFrame;
    function V(n) {
      if (n) {
        var u = n._owner, h = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(h);
      } else
        Mt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function jt() {
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
    function _e(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), h = n.lineNumber;
          return `

Check your code at ` + u + ":" + h + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function we(n) {
      {
        var u = jt();
        if (!u) {
          var h = typeof n == "string" ? n : n.displayName || n.name;
          h && (u = `

Check the top-level render call using <` + h + ">.");
        }
        return u;
      }
    }
    function Dt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var h = we(u);
        if (Ft[h])
          return;
        Ft[h] = !0;
        var g = "";
        n && n._owner && n._owner !== lt.current && (g = " It was passed a child from " + O(n._owner.type) + "."), V(n), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, g), V(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var h = 0; h < n.length; h++) {
            var g = n[h];
            pt(g) && Dt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = $(n);
          if (typeof w == "function" && w !== n.entries)
            for (var x = w.call(n), _; !(_ = x.next()).done; )
              pt(_.value) && Dt(_.value, u);
        }
      }
    }
    function be(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var h;
        if (typeof u == "function")
          h = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === f || u.$$typeof === d))
          h = u.propTypes;
        else
          return;
        if (h) {
          var g = O(u);
          se(h, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = O(u);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xe(n) {
      {
        for (var u = Object.keys(n.props), h = 0; h < u.length; h++) {
          var g = u[h];
          if (g !== "children" && g !== "key") {
            V(n), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        n.ref !== null && (V(n), k("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Lt(n, u, h, g, w, x) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = _e(w);
          T ? v += T : v += jt();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ve(n, u, h, w, x);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (ct(P)) {
                for (var z = 0; z < P.length; z++)
                  It(P[z], n);
                Object.freeze && Object.freeze(P);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(P, n);
        }
        return n === i ? xe(S) : be(S), S;
      }
    }
    function ke(n, u, h) {
      return Lt(n, u, h, !0);
    }
    function Ee(n, u, h) {
      return Lt(n, u, h, !1);
    }
    var Se = Ee, Re = ke;
    Ne.Fragment = i, Ne.jsx = Se, Ne.jsxs = Re;
  }()), Ne;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = sc() : t.exports = uc();
})(Bn);
const X = Bn.exports.jsx, Xn = Bn.exports.jsxs, cc = ({
  width: t,
  height: e
}) => {
  const r = {
    x: 0,
    y: 0,
    width: t ? t - Zt[1] + vt : 0,
    height: e ? e - Zt[0] : 0
  };
  return /* @__PURE__ */ Xn("defs", {
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
}, Tr = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, fc = "font-family: serif;", lc = gt.button(
  ({ status: t, minWidth: e, margin: r }) => Fn`
    ${fc}
    border: 1px solid ${Tr[t]};
    color: ${Tr[t]};
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
var wi = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function hc() {
  if ($r)
    return Ce;
  $r = 1;
  var t = ee, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, l) {
    var p, d = {}, y = null, m = null;
    l !== void 0 && (y = "" + l), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (p in f)
      i.call(f, p) && !a.hasOwnProperty(p) && (d[p] = f[p]);
    if (c && c.defaultProps)
      for (p in f = c.defaultProps, f)
        d[p] === void 0 && (d[p] = f[p]);
    return { $$typeof: e, type: c, key: y, ref: m, props: d, _owner: o.current };
  }
  return Ce.Fragment = r, Ce.jsx = s, Ce.jsxs = s, Ce;
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
var Nr;
function pc() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ee, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, R = "@@iterator";
    function $(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = b && n[b] || n[R];
      return typeof u == "function" ? u : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(n) {
      {
        for (var u = arguments.length, h = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          h[g - 1] = arguments[g];
        F("error", n, h);
      }
    }
    function F(n, u, h) {
      {
        var g = C.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", h = h.concat([w]));
        var x = h.map(function(_) {
          return String(_);
        });
        x.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var W = !1, A = !1, M = !1, I = !1, U = !1, H;
    H = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || U || n === o || n === l || n === p || I || n === m || W || A || M || typeof n == "object" && n !== null && (n.$$typeof === y || n.$$typeof === d || n.$$typeof === s || n.$$typeof === c || n.$$typeof === f || n.$$typeof === H || n.getModuleId !== void 0));
    }
    function N(n, u, h) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? h + "(" + w + ")" : h;
    }
    function L(n) {
      return n.displayName || "Context";
    }
    function O(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
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
        case l:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var u = n;
            return L(u) + ".Consumer";
          case s:
            var h = n;
            return L(h._context) + ".Provider";
          case f:
            return N(n, n.render, "ForwardRef");
          case d:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case y: {
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
    var j = Object.assign, Y = 0, nt, rt, it, q, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function ne() {
      {
        if (Y === 0) {
          nt = console.log, rt = console.info, it = console.warn, q = console.error, kt = console.group, Et = console.groupCollapsed, St = console.groupEnd;
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
    function re() {
      {
        if (Y--, Y === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, n, {
              value: nt
            }),
            info: j({}, n, {
              value: rt
            }),
            warn: j({}, n, {
              value: it
            }),
            error: j({}, n, {
              value: q
            }),
            group: j({}, n, {
              value: kt
            }),
            groupCollapsed: j({}, n, {
              value: Et
            }),
            groupEnd: j({}, n, {
              value: St
            })
          });
        }
        Y < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = C.ReactCurrentDispatcher, st;
    function J(n, u, h) {
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
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ie();
    }
    function Ot(n, u) {
      if (!n || ut)
        return "";
      {
        var h = K.get(n);
        if (h !== void 0)
          return h;
      }
      var g;
      ut = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = at.current, at.current = null, ne();
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
                    var P = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, P), P;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = x, re(), Error.prepareStackTrace = w;
      }
      var z = n ? n.displayName || n.name : "", Wt = z ? J(z) : "";
      return typeof n == "function" && K.set(n, Wt), Wt;
    }
    function oe(n, u, h) {
      return Ot(n, !1);
    }
    function ae(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, h) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ot(n, ae(n));
      if (typeof n == "string")
        return J(n);
      switch (n) {
        case l:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            return oe(n.render);
          case d:
            return Z(n.type, u, h);
          case y: {
            var g = n, w = g._payload, x = g._init;
            try {
              return Z(x(w), u, h);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Tt = {}, $t = C.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, h = Z(n.type, n._source, u ? u.type : null);
        $t.setExtraStackFrame(h);
      } else
        $t.setExtraStackFrame(null);
    }
    function se(n, u, h, g, w) {
      {
        var x = Function.call.bind(Q);
        for (var _ in n)
          if (x(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var T = Error((g || "React class") + ": " + h + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = n[_](u, _, g, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", h, _, typeof v), tt(null)), v instanceof Error && !(v.message in Tt) && (Tt[v.message] = !0, tt(w), k("Failed %s type: %s", h, v.message), tt(null));
          }
      }
    }
    var ue = Array.isArray;
    function ct(n) {
      return ue(n);
    }
    function ce(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, h = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return h;
      }
    }
    function fe(n) {
      try {
        return Nt(n), !1;
      } catch {
        return !0;
      }
    }
    function Nt(n) {
      return "" + n;
    }
    function Ct(n) {
      if (fe(n))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(n)), Nt(n);
    }
    var B = C.ReactCurrentOwner, le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, ft;
    ft = {};
    function he(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function pe(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function de(n, u) {
      if (typeof n.ref == "string" && B.current && u && B.current.stateNode !== u) {
        var h = O(B.current.type);
        ft[h] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(B.current.type), n.ref), ft[h] = !0);
      }
    }
    function ye(n, u) {
      {
        var h = function() {
          At || (At = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function ge(n, u) {
      {
        var h = function() {
          Pt || (Pt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var me = function(n, u, h, g, w, x, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: h,
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
    function ve(n, u, h, g, w) {
      {
        var x, _ = {}, v = null, T = null;
        h !== void 0 && (Ct(h), v = "" + h), pe(u) && (Ct(u.key), v = "" + u.key), he(u) && (T = u.ref, de(u, w));
        for (x in u)
          Q.call(u, x) && !le.hasOwnProperty(x) && (_[x] = u[x]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (x in E)
            _[x] === void 0 && (_[x] = E[x]);
        }
        if (v || T) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && ye(_, S), T && ge(_, S);
        }
        return me(n, v, T, w, g, B.current, _);
      }
    }
    var lt = C.ReactCurrentOwner, Mt = C.ReactDebugCurrentFrame;
    function V(n) {
      if (n) {
        var u = n._owner, h = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(h);
      } else
        Mt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function jt() {
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
    function _e(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), h = n.lineNumber;
          return `

Check your code at ` + u + ":" + h + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function we(n) {
      {
        var u = jt();
        if (!u) {
          var h = typeof n == "string" ? n : n.displayName || n.name;
          h && (u = `

Check the top-level render call using <` + h + ">.");
        }
        return u;
      }
    }
    function Dt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var h = we(u);
        if (Ft[h])
          return;
        Ft[h] = !0;
        var g = "";
        n && n._owner && n._owner !== lt.current && (g = " It was passed a child from " + O(n._owner.type) + "."), V(n), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, g), V(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var h = 0; h < n.length; h++) {
            var g = n[h];
            pt(g) && Dt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = $(n);
          if (typeof w == "function" && w !== n.entries)
            for (var x = w.call(n), _; !(_ = x.next()).done; )
              pt(_.value) && Dt(_.value, u);
        }
      }
    }
    function be(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var h;
        if (typeof u == "function")
          h = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === f || u.$$typeof === d))
          h = u.propTypes;
        else
          return;
        if (h) {
          var g = O(u);
          se(h, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = O(u);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xe(n) {
      {
        for (var u = Object.keys(n.props), h = 0; h < u.length; h++) {
          var g = u[h];
          if (g !== "children" && g !== "key") {
            V(n), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        n.ref !== null && (V(n), k("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Lt(n, u, h, g, w, x) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = _e(w);
          T ? v += T : v += jt();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ve(n, u, h, w, x);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (ct(P)) {
                for (var z = 0; z < P.length; z++)
                  It(P[z], n);
                Object.freeze && Object.freeze(P);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(P, n);
        }
        return n === i ? xe(S) : be(S), S;
      }
    }
    function ke(n, u, h) {
      return Lt(n, u, h, !0);
    }
    function Ee(n, u, h) {
      return Lt(n, u, h, !1);
    }
    var Se = Ee, Re = ke;
    Be.Fragment = i, Be.jsx = Se, Be.jsxs = Re;
  }()), Be;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = hc() : t.exports = pc();
})(wi);
const dc = wi.exports.jsx, Xe = ({
  children: t,
  status: e = "default",
  dataSelector: r = "pi-lib-button",
  minWidth: i = "220px",
  margin: o = "10px",
  ...a
}) => /* @__PURE__ */ dc(lc, {
  status: e,
  ...a,
  minWidth: i,
  margin: o,
  "data-selector": r,
  children: t
}), yc = gt.div`
  margin: 10px;
  position: absolute;
`, Cr = gt.div(
  ({ rotate: t }) => Fn`
    rotate: ${t}deg;
  `
), Yt = 0.2, Ar = 100, gc = ({
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
  return /* @__PURE__ */ Xn(yc, {
    children: [/* @__PURE__ */ X(Xe, {
      ...a,
      onClick: () => r((s) => s + Ar / t),
      disabled: i.first <= 0,
      children: /* @__PURE__ */ X(Cr, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ X(Xe, {
      ...a,
      onClick: () => e((s) => +(s - Yt > 0 ? s - Yt : Yt / 2).toFixed(2)),
      disabled: t < Yt,
      children: "\u2796"
    }), /* @__PURE__ */ X(Xe, {
      ...a,
      onClick: () => e((s) => +(s === Yt / 2 ? Yt : s + Yt).toFixed(2)),
      disabled: t >= Yt * 10,
      children: "\u2795"
    }), /* @__PURE__ */ X(Xe, {
      ...a,
      onClick: () => r((s) => s - Ar / t),
      disabled: i.last >= o - 1 || i.last - i.first > o,
      children: /* @__PURE__ */ X(Cr, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, bi = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, xi = Fr`
  to {
    rotate: 360deg;
  }
`, mc = Fr`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, vc = gt.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, _c = gt.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${xi} 2s linear infinite;
  margin: 2px;
`, Pr = gt.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, Ge = gt.div(
  ({ delay: t }) => Fn`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${bi.pending};
    animation: ${mc} 0.3s linear alternate infinite;

    ${t ? "animation-delay: 0.2s;" : ""}
  `
);
gt.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${bi.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${xi} 2s linear infinite;
`;
var Gn = { exports: {} }, Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function wc() {
  if (Mr)
    return Ae;
  Mr = 1;
  var t = ee, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, l) {
    var p, d = {}, y = null, m = null;
    l !== void 0 && (y = "" + l), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (p in f)
      i.call(f, p) && !a.hasOwnProperty(p) && (d[p] = f[p]);
    if (c && c.defaultProps)
      for (p in f = c.defaultProps, f)
        d[p] === void 0 && (d[p] = f[p]);
    return { $$typeof: e, type: c, key: y, ref: m, props: d, _owner: o.current };
  }
  return Ae.Fragment = r, Ae.jsx = s, Ae.jsxs = s, Ae;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function bc() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ee, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, R = "@@iterator";
    function $(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = b && n[b] || n[R];
      return typeof u == "function" ? u : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(n) {
      {
        for (var u = arguments.length, h = new Array(u > 1 ? u - 1 : 0), g = 1; g < u; g++)
          h[g - 1] = arguments[g];
        F("error", n, h);
      }
    }
    function F(n, u, h) {
      {
        var g = C.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (u += "%s", h = h.concat([w]));
        var x = h.map(function(_) {
          return String(_);
        });
        x.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, x);
      }
    }
    var W = !1, A = !1, M = !1, I = !1, U = !1, H;
    H = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === i || n === a || U || n === o || n === l || n === p || I || n === m || W || A || M || typeof n == "object" && n !== null && (n.$$typeof === y || n.$$typeof === d || n.$$typeof === s || n.$$typeof === c || n.$$typeof === f || n.$$typeof === H || n.getModuleId !== void 0));
    }
    function N(n, u, h) {
      var g = n.displayName;
      if (g)
        return g;
      var w = u.displayName || u.name || "";
      return w !== "" ? h + "(" + w + ")" : h;
    }
    function L(n) {
      return n.displayName || "Context";
    }
    function O(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
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
        case l:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var u = n;
            return L(u) + ".Consumer";
          case s:
            var h = n;
            return L(h._context) + ".Provider";
          case f:
            return N(n, n.render, "ForwardRef");
          case d:
            var g = n.displayName || null;
            return g !== null ? g : O(n.type) || "Memo";
          case y: {
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
    var j = Object.assign, Y = 0, nt, rt, it, q, kt, Et, St;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function ne() {
      {
        if (Y === 0) {
          nt = console.log, rt = console.info, it = console.warn, q = console.error, kt = console.group, Et = console.groupCollapsed, St = console.groupEnd;
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
    function re() {
      {
        if (Y--, Y === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, n, {
              value: nt
            }),
            info: j({}, n, {
              value: rt
            }),
            warn: j({}, n, {
              value: it
            }),
            error: j({}, n, {
              value: q
            }),
            group: j({}, n, {
              value: kt
            }),
            groupCollapsed: j({}, n, {
              value: Et
            }),
            groupEnd: j({}, n, {
              value: St
            })
          });
        }
        Y < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = C.ReactCurrentDispatcher, st;
    function J(n, u, h) {
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
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ie();
    }
    function Ot(n, u) {
      if (!n || ut)
        return "";
      {
        var h = K.get(n);
        if (h !== void 0)
          return h;
      }
      var g;
      ut = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = at.current, at.current = null, ne();
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
                    var P = `
` + v[E].replace(" at new ", " at ");
                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, P), P;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ut = !1, at.current = x, re(), Error.prepareStackTrace = w;
      }
      var z = n ? n.displayName || n.name : "", Wt = z ? J(z) : "";
      return typeof n == "function" && K.set(n, Wt), Wt;
    }
    function oe(n, u, h) {
      return Ot(n, !1);
    }
    function ae(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function Z(n, u, h) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ot(n, ae(n));
      if (typeof n == "string")
        return J(n);
      switch (n) {
        case l:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            return oe(n.render);
          case d:
            return Z(n.type, u, h);
          case y: {
            var g = n, w = g._payload, x = g._init;
            try {
              return Z(x(w), u, h);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Tt = {}, $t = C.ReactDebugCurrentFrame;
    function tt(n) {
      if (n) {
        var u = n._owner, h = Z(n.type, n._source, u ? u.type : null);
        $t.setExtraStackFrame(h);
      } else
        $t.setExtraStackFrame(null);
    }
    function se(n, u, h, g, w) {
      {
        var x = Function.call.bind(Q);
        for (var _ in n)
          if (x(n, _)) {
            var v = void 0;
            try {
              if (typeof n[_] != "function") {
                var T = Error((g || "React class") + ": " + h + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              v = n[_](u, _, g, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (tt(w), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", h, _, typeof v), tt(null)), v instanceof Error && !(v.message in Tt) && (Tt[v.message] = !0, tt(w), k("Failed %s type: %s", h, v.message), tt(null));
          }
      }
    }
    var ue = Array.isArray;
    function ct(n) {
      return ue(n);
    }
    function ce(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, h = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return h;
      }
    }
    function fe(n) {
      try {
        return Nt(n), !1;
      } catch {
        return !0;
      }
    }
    function Nt(n) {
      return "" + n;
    }
    function Ct(n) {
      if (fe(n))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(n)), Nt(n);
    }
    var B = C.ReactCurrentOwner, le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Pt, ft;
    ft = {};
    function he(n) {
      if (Q.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function pe(n) {
      if (Q.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function de(n, u) {
      if (typeof n.ref == "string" && B.current && u && B.current.stateNode !== u) {
        var h = O(B.current.type);
        ft[h] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(B.current.type), n.ref), ft[h] = !0);
      }
    }
    function ye(n, u) {
      {
        var h = function() {
          At || (At = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function ge(n, u) {
      {
        var h = function() {
          Pt || (Pt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var me = function(n, u, h, g, w, x, _) {
      var v = {
        $$typeof: e,
        type: n,
        key: u,
        ref: h,
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
    function ve(n, u, h, g, w) {
      {
        var x, _ = {}, v = null, T = null;
        h !== void 0 && (Ct(h), v = "" + h), pe(u) && (Ct(u.key), v = "" + u.key), he(u) && (T = u.ref, de(u, w));
        for (x in u)
          Q.call(u, x) && !le.hasOwnProperty(x) && (_[x] = u[x]);
        if (n && n.defaultProps) {
          var E = n.defaultProps;
          for (x in E)
            _[x] === void 0 && (_[x] = E[x]);
        }
        if (v || T) {
          var S = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          v && ye(_, S), T && ge(_, S);
        }
        return me(n, v, T, w, g, B.current, _);
      }
    }
    var lt = C.ReactCurrentOwner, Mt = C.ReactDebugCurrentFrame;
    function V(n) {
      if (n) {
        var u = n._owner, h = Z(n.type, n._source, u ? u.type : null);
        Mt.setExtraStackFrame(h);
      } else
        Mt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function pt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === e;
    }
    function jt() {
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
    function _e(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), h = n.lineNumber;
          return `

Check your code at ` + u + ":" + h + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function we(n) {
      {
        var u = jt();
        if (!u) {
          var h = typeof n == "string" ? n : n.displayName || n.name;
          h && (u = `

Check the top-level render call using <` + h + ">.");
        }
        return u;
      }
    }
    function Dt(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var h = we(u);
        if (Ft[h])
          return;
        Ft[h] = !0;
        var g = "";
        n && n._owner && n._owner !== lt.current && (g = " It was passed a child from " + O(n._owner.type) + "."), V(n), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, g), V(null);
      }
    }
    function It(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var h = 0; h < n.length; h++) {
            var g = n[h];
            pt(g) && Dt(g, u);
          }
        else if (pt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var w = $(n);
          if (typeof w == "function" && w !== n.entries)
            for (var x = w.call(n), _; !(_ = x.next()).done; )
              pt(_.value) && Dt(_.value, u);
        }
      }
    }
    function be(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var h;
        if (typeof u == "function")
          h = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === f || u.$$typeof === d))
          h = u.propTypes;
        else
          return;
        if (h) {
          var g = O(u);
          se(h, n.props, "prop", g, n);
        } else if (u.PropTypes !== void 0 && !ht) {
          ht = !0;
          var w = O(u);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xe(n) {
      {
        for (var u = Object.keys(n.props), h = 0; h < u.length; h++) {
          var g = u[h];
          if (g !== "children" && g !== "key") {
            V(n), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), V(null);
            break;
          }
        }
        n.ref !== null && (V(n), k("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Lt(n, u, h, g, w, x) {
      {
        var _ = G(n);
        if (!_) {
          var v = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = _e(w);
          T ? v += T : v += jt();
          var E;
          n === null ? E = "null" : ct(n) ? E = "array" : n !== void 0 && n.$$typeof === e ? (E = "<" + (O(n.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof n, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var S = ve(n, u, h, w, x);
        if (S == null)
          return S;
        if (_) {
          var P = u.children;
          if (P !== void 0)
            if (g)
              if (ct(P)) {
                for (var z = 0; z < P.length; z++)
                  It(P[z], n);
                Object.freeze && Object.freeze(P);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(P, n);
        }
        return n === i ? xe(S) : be(S), S;
      }
    }
    function ke(n, u, h) {
      return Lt(n, u, h, !0);
    }
    function Ee(n, u, h) {
      return Lt(n, u, h, !1);
    }
    var Se = Ee, Re = ke;
    Je.Fragment = i, Je.jsx = Se, Je.jsxs = Re;
  }()), Je;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = wc() : t.exports = bc();
})(Gn);
const Pe = Gn.exports.jsx, xn = Gn.exports.jsxs, xc = () => /* @__PURE__ */ Pe(vc, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ xn(_c, {
    children: [/* @__PURE__ */ xn(Pr, {
      children: [/* @__PURE__ */ Pe(Ge, {
        delay: !0
      }), /* @__PURE__ */ Pe(Ge, {})]
    }), /* @__PURE__ */ xn(Pr, {
      children: [/* @__PURE__ */ Pe(Ge, {}), /* @__PURE__ */ Pe(Ge, {
        delay: !0
      })]
    })]
  })
}), Sc = ({
  data: t = []
}) => {
  const [e, r] = qt(1), [i, o] = qt(0), a = jn(null), {
    dimensions: s,
    visibleRange: c
  } = Eu(a, t.length, e, i), {
    scales: f,
    utils: l
  } = ac(t, s, c);
  return iu(a, t, f, l, c), ya(a, t, c.offset, f, s), /* @__PURE__ */ Xn(Ei, {
    children: [t != null && t.length ? /* @__PURE__ */ X(gc, {
      zoomLevel: e,
      setZoomLevel: r,
      setPanLevel: o,
      visibleRange: c,
      length: t.length
    }) : /* @__PURE__ */ X(Si, {
      children: /* @__PURE__ */ X(xc, {})
    }), /* @__PURE__ */ X(ki, {
      ref: a,
      children: /* @__PURE__ */ X(cc, {
        ...s
      })
    })]
  });
};
export {
  Sc as default
};
