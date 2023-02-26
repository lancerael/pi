import { useState as Y, useEffect as P, useRef as lt, useCallback as F } from "react";
import I, { keyframes as ce, css as Yt } from "styled-components";
import { jsx as M, jsxs as O, Fragment as le } from "react/jsx-runtime";
import { box as pn } from "@pi-lib/styles";
const Ke = ce`
  to {
    rotate: 360deg;
  }
`, Ze = ce`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, je = I.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`, Je = I.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Ke} 2s linear infinite;
  margin: 2px;
`, $n = I.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, vt = I.div(
  ({ delay: t }) => Yt`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${Ze} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${t ? "animation-delay: 0.3s;" : ""}
  `
), Qe = () => /* @__PURE__ */ M(je, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ O(Je, {
    children: [/* @__PURE__ */ O($n, {
      children: [/* @__PURE__ */ M(vt, {
        delay: !0
      }), /* @__PURE__ */ M(vt, {})]
    }), /* @__PURE__ */ O($n, {
      children: [/* @__PURE__ */ M(vt, {}), /* @__PURE__ */ M(vt, {
        delay: !0
      })]
    })]
  })
});
function tr(t) {
  return t;
}
var Kt = 1, Et = 2, nn = 3, xt = 4, Sn = 1e-6;
function nr(t) {
  return "translate(" + t + ",0)";
}
function er(t) {
  return "translate(0," + t + ")";
}
function rr(t) {
  return (n) => +t(n);
}
function ir(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function or() {
  return !this.__axis;
}
function fe(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = t === Kt || t === xt ? -1 : 1, l = t === xt || t === Et ? "x" : "y", f = t === Kt || t === nn ? nr : er;
  function h(d) {
    var y = r == null ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r, v = i == null ? n.tickFormat ? n.tickFormat.apply(n, e) : tr : i, p = Math.max(o, 0) + s, g = n.range(), x = +g[0] + u, w = +g[g.length - 1] + u, N = (n.bandwidth ? ir : rr)(n.copy(), u), _ = d.selection ? d.selection() : d, m = _.selectAll(".domain").data([null]), k = _.selectAll(".tick").data(y, n).order(), $ = k.exit(), A = k.enter().append("g").attr("class", "tick"), T = k.select("line"), b = k.select("text");
    m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), k = k.merge(A), T = T.merge(A.append("line").attr("stroke", "currentColor").attr(l + "2", c * o)), b = b.merge(A.append("text").attr("fill", "currentColor").attr(l, c * p).attr("dy", t === Kt ? "0em" : t === nn ? "0.71em" : "0.32em")), d !== _ && (m = m.transition(d), k = k.transition(d), T = T.transition(d), b = b.transition(d), $ = $.transition(d).attr("opacity", Sn).attr("transform", function(E) {
      return isFinite(E = N(E)) ? f(E + u) : this.getAttribute("transform");
    }), A.attr("opacity", Sn).attr("transform", function(E) {
      var S = this.parentNode.__axis;
      return f((S && isFinite(S = S(E)) ? S : N(E)) + u);
    })), $.remove(), m.attr("d", t === xt || t === Et ? a ? "M" + c * a + "," + x + "H" + u + "V" + w + "H" + c * a : "M" + u + "," + x + "V" + w : a ? "M" + x + "," + c * a + "V" + u + "H" + w + "V" + c * a : "M" + x + "," + u + "H" + w), k.attr("opacity", 1).attr("transform", function(E) {
      return f(N(E) + u);
    }), T.attr(l + "2", c * o), b.attr(l, c * p).text(v), _.filter(or).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Et ? "start" : t === xt ? "end" : "middle"), _.each(function() {
      this.__axis = N;
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
    return arguments.length ? (o = a = +d, h) : o;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.tickPadding = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h.offset = function(d) {
    return arguments.length ? (u = +d, h) : u;
  }, h;
}
function ar(t) {
  return fe(Et, t);
}
function sr(t) {
  return fe(nn, t);
}
var en = "http://www.w3.org/1999/xhtml";
const En = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: en,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Bt(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), En.hasOwnProperty(n) ? { space: En[n], local: t } : t;
}
function ur(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === en && n.documentElement.namespaceURI === en ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function cr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function he(t) {
  var n = Bt(t);
  return (n.local ? cr : ur)(n);
}
function lr() {
}
function mn(t) {
  return t == null ? lr : function() {
    return this.querySelector(t);
  };
}
function fr(t) {
  typeof t != "function" && (t = mn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, c, l = 0; l < a; ++l)
      (u = o[l]) && (c = t.call(u, u.__data__, l, o)) && ("__data__" in u && (c.__data__ = u.__data__), s[l] = c);
  return new D(r, this._parents);
}
function hr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function dr() {
  return [];
}
function de(t) {
  return t == null ? dr : function() {
    return this.querySelectorAll(t);
  };
}
function gr(t) {
  return function() {
    return hr(t.apply(this, arguments));
  };
}
function pr(t) {
  typeof t == "function" ? t = gr(t) : t = de(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, c = 0; c < s; ++c)
      (u = a[c]) && (r.push(t.call(u, u.__data__, c, a)), i.push(u));
  return new D(r, i);
}
function ge(t) {
  return function() {
    return this.matches(t);
  };
}
function pe(t) {
  return function(n) {
    return n.matches(t);
  };
}
var mr = Array.prototype.find;
function yr(t) {
  return function() {
    return mr.call(this.children, t);
  };
}
function wr() {
  return this.firstElementChild;
}
function vr(t) {
  return this.select(t == null ? wr : yr(typeof t == "function" ? t : pe(t)));
}
var xr = Array.prototype.filter;
function _r() {
  return Array.from(this.children);
}
function br(t) {
  return function() {
    return xr.call(this.children, t);
  };
}
function kr(t) {
  return this.selectAll(t == null ? _r : br(typeof t == "function" ? t : pe(t)));
}
function Mr(t) {
  typeof t != "function" && (t = ge(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, c = 0; c < a; ++c)
      (u = o[c]) && t.call(u, u.__data__, c, o) && s.push(u);
  return new D(r, this._parents);
}
function me(t) {
  return new Array(t.length);
}
function Ar() {
  return new D(this._enter || this._groups.map(me), this._parents);
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
function Nr(t) {
  return function() {
    return t;
  };
}
function $r(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, c = o.length; a < c; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new It(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Sr(t, n, e, r, i, o, a) {
  var s, u, c = /* @__PURE__ */ new Map(), l = n.length, f = o.length, h = new Array(l), d;
  for (s = 0; s < l; ++s)
    (u = n[s]) && (h[s] = d = a.call(u, u.__data__, s, n) + "", c.has(d) ? i[s] = u : c.set(d, u));
  for (s = 0; s < f; ++s)
    d = a.call(t, o[s], s, o) + "", (u = c.get(d)) ? (r[s] = u, u.__data__ = o[s], c.delete(d)) : e[s] = new It(t, o[s]);
  for (s = 0; s < l; ++s)
    (u = n[s]) && c.get(h[s]) === u && (i[s] = u);
}
function Er(t) {
  return t.__data__;
}
function Tr(t, n) {
  if (!arguments.length)
    return Array.from(this, Er);
  var e = n ? Sr : $r, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Nr(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), c = 0; c < o; ++c) {
    var l = r[c], f = i[c], h = f.length, d = Cr(t.call(l, l && l.__data__, c, r)), y = d.length, v = s[c] = new Array(y), p = a[c] = new Array(y), g = u[c] = new Array(h);
    e(l, f, v, p, g, d, n);
    for (var x = 0, w = 0, N, _; x < y; ++x)
      if (N = v[x]) {
        for (x >= w && (w = x + 1); !(_ = p[w]) && ++w < y; )
          ;
        N._next = _ || null;
      }
  }
  return a = new D(a, r), a._enter = s, a._exit = u, a;
}
function Cr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Lr() {
  return new D(this._exit || this._groups.map(me), this._parents);
}
function Dr(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Ir(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var c = e[u], l = r[u], f = c.length, h = s[u] = new Array(f), d, y = 0; y < f; ++y)
      (d = c[y] || l[y]) && (h[y] = d);
  for (; u < i; ++u)
    s[u] = e[u];
  return new D(s, this._parents);
}
function Or() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Rr(t) {
  t || (t = zr);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), c, l = 0; l < s; ++l)
      (c = a[l]) && (u[l] = c);
    u.sort(n);
  }
  return new D(i, this._parents).order();
}
function zr(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Fr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Pr() {
  return Array.from(this);
}
function Hr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function Vr() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Xr() {
  return !this.node();
}
function qr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Wr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Yr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Br(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ur(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Gr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Kr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Zr(t, n) {
  var e = Bt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Yr : Wr : typeof n == "function" ? e.local ? Kr : Gr : e.local ? Ur : Br)(e, n));
}
function ye(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function jr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Jr(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Qr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ti(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? jr : typeof n == "function" ? Qr : Jr)(t, n, e == null ? "" : e)) : it(this.node(), t);
}
function it(t, n) {
  return t.style.getPropertyValue(n) || ye(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ni(t) {
  return function() {
    delete this[t];
  };
}
function ei(t, n) {
  return function() {
    this[t] = n;
  };
}
function ri(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ii(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ni : typeof n == "function" ? ri : ei)(t, n)) : this.node()[t];
}
function we(t) {
  return t.trim().split(/^|\s+/);
}
function yn(t) {
  return t.classList || new ve(t);
}
function ve(t) {
  this._node = t, this._names = we(t.getAttribute("class") || "");
}
ve.prototype = {
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
function xe(t, n) {
  for (var e = yn(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function _e(t, n) {
  for (var e = yn(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function oi(t) {
  return function() {
    xe(this, t);
  };
}
function ai(t) {
  return function() {
    _e(this, t);
  };
}
function si(t, n) {
  return function() {
    (n.apply(this, arguments) ? xe : _e)(this, t);
  };
}
function ui(t, n) {
  var e = we(t + "");
  if (arguments.length < 2) {
    for (var r = yn(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? si : n ? oi : ai)(e, n));
}
function ci() {
  this.textContent = "";
}
function li(t) {
  return function() {
    this.textContent = t;
  };
}
function fi(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n == null ? "" : n;
  };
}
function hi(t) {
  return arguments.length ? this.each(t == null ? ci : (typeof t == "function" ? fi : li)(t)) : this.node().textContent;
}
function di() {
  this.innerHTML = "";
}
function gi(t) {
  return function() {
    this.innerHTML = t;
  };
}
function pi(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n == null ? "" : n;
  };
}
function mi(t) {
  return arguments.length ? this.each(t == null ? di : (typeof t == "function" ? pi : gi)(t)) : this.node().innerHTML;
}
function yi() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function wi() {
  return this.each(yi);
}
function vi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xi() {
  return this.each(vi);
}
function _i(t) {
  var n = typeof t == "function" ? t : he(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function bi() {
  return null;
}
function ki(t, n) {
  var e = typeof t == "function" ? t : he(t), r = n == null ? bi : typeof n == "function" ? n : mn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Mi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ai() {
  return this.each(Mi);
}
function Ni() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function $i() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Si(t) {
  return this.select(t ? $i : Ni);
}
function Ei(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ti(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ci(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Li(t) {
  return function() {
    var n = this.__on;
    if (!!n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Di(t, n, e) {
  return function() {
    var r = this.__on, i, o = Ti(n);
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
function Ii(t, n, e) {
  var r = Ci(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, c = s.length, l; u < c; ++u)
        for (i = 0, l = s[u]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = n ? Di : Li, i = 0; i < o; ++i)
    this.each(s(r[i], n, e));
  return this;
}
function be(t, n, e) {
  var r = ye(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Oi(t, n) {
  return function() {
    return be(this, t, n);
  };
}
function Ri(t, n) {
  return function() {
    return be(this, t, n.apply(this, arguments));
  };
}
function zi(t, n) {
  return this.each((typeof n == "function" ? Ri : Oi)(t, n));
}
function* Fi() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ke = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function gt() {
  return new D([[document.documentElement]], ke);
}
function Pi() {
  return this;
}
D.prototype = gt.prototype = {
  constructor: D,
  select: fr,
  selectAll: pr,
  selectChild: vr,
  selectChildren: kr,
  filter: Mr,
  data: Tr,
  enter: Ar,
  exit: Lr,
  join: Dr,
  merge: Ir,
  selection: Pi,
  order: Or,
  sort: Rr,
  call: Fr,
  nodes: Pr,
  node: Hr,
  size: Vr,
  empty: Xr,
  each: qr,
  attr: Zr,
  style: ti,
  property: ii,
  classed: ui,
  text: hi,
  html: mi,
  raise: wi,
  lower: xi,
  append: _i,
  insert: ki,
  remove: Ai,
  clone: Si,
  datum: Ei,
  on: Ii,
  dispatch: zi,
  [Symbol.iterator]: Fi
};
function K(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], ke);
}
const Hi = 500, L = 10, G = [55, 50], Me = 0.3, Vi = 10, Xi = {
  zoomLevel: 1,
  panLevel: 1,
  transition: !0
}, Zt = {}, _t = (t = "", n, e) => {
  var f;
  const r = Math.round((f = e.bandwidth) == null ? void 0 : f.call(e)) || 0, i = `${t}-${n}-${r}`;
  if (Zt[i] !== void 0)
    return Zt[i];
  let o = "";
  const a = new Date(t), [s, u, c] = t.split("-");
  c === "01" && (u === "01" ? o = s : o = a.toLocaleString("en-UK", {
    month: "short"
  }));
  let l = [];
  return r > 1 && l.push(16), r > 3 && l.push(8, 24), r > 7 && (l = [4, 7, 10, 13, 16, 19, 22, 25, 28]), l.includes(Number(c)) && (o = c), e.domain().length - 1 === n && (o = c), Zt[i] = o, o;
}, qi = (t, n, e, r) => {
  const [i, o] = Y(), [a, s] = Y(), { xScale: u, yScale: c } = e, {
    sizes: { width: l, height: f },
    visibleRange: { offset: h, first: d, last: y }
  } = r;
  P(() => {
    !t.current || (K(t.current).select("g.x-axis, y.y-axis").remove(), o(
      K(t.current).append("g").attr("clip-path", "url(#bottom-axis)").classed("x-axis", !0).append("g")
    ), s(K(t.current).append("g").classed("y-axis", !0)));
  }, []), P(() => {
    !u.domain || !n || (i.call(sr(u)).attr("transform", `translate(${h},${f - G[0]})`).selectAll("text").classed(
      "emphasise",
      (v, p) => _t(v, p, u).length > 2
    ).attr("text-anchor", "end").attr("x", () => -16).attr("y", -4).attr("transform", "rotate(270)").text((v, p) => _t(v, p, u)), i.selectAll("line.clone").remove(), i.selectAll("line").attr(
      "y2",
      (v, p) => _t(v, p, u).length ? 12 : 6
    ).each((v, p, g) => {
      if (p > d && p < y && _t(v, p, u).length) {
        var x = g[p].parentNode.appendChild(g[p].cloneNode(!0));
        K(x).classed("clone", !0).attr("y1", -f + 1 + G[0] + L).attr("y2", -1);
      }
    }), a.call(ar(c)).attr(
      "transform",
      `translate(${l - G[1] + L}, 0)`
    ), a.selectAll("line.clone").remove(), a.selectAll("line").each((v, p, g) => {
      var x = g[p].parentNode.appendChild(g[p].cloneNode(!0));
      K(x).classed("clone", !0).attr("x2", -l + 1 + G[1]).attr("x1", -1);
    }));
  }, [u, c]);
};
var Wi = { value: () => {
} };
function Ae() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Tt(e);
}
function Tt(t) {
  this._ = t;
}
function Yi(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Tt.prototype = Ae.prototype = {
  constructor: Tt,
  on: function(t, n) {
    var e = this._, r = Yi(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = Bi(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = Tn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Tn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new Tt(t);
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
function Bi(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Tn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Wi, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var ot = 0, ut = 0, st = 0, Ne = 1e3, Ot, ct, Rt = 0, J = 0, Ut = 0, ft = typeof performance == "object" && performance.now ? performance : Date, $e = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function wn() {
  return J || ($e(Ui), J = ft.now() + Ut);
}
function Ui() {
  J = 0;
}
function zt() {
  this._call = this._time = this._next = null;
}
zt.prototype = Se.prototype = {
  constructor: zt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? wn() : +e) + (n == null ? 0 : +n), !this._next && ct !== this && (ct ? ct._next = this : Ot = this, ct = this), this._call = t, this._time = e, rn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, rn());
  }
};
function Se(t, n, e) {
  var r = new zt();
  return r.restart(t, n, e), r;
}
function Gi() {
  wn(), ++ot;
  for (var t = Ot, n; t; )
    (n = J - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --ot;
}
function Cn() {
  J = (Rt = ft.now()) + Ut, ot = ut = 0;
  try {
    Gi();
  } finally {
    ot = 0, Zi(), J = 0;
  }
}
function Ki() {
  var t = ft.now(), n = t - Rt;
  n > Ne && (Ut -= n, Rt = t);
}
function Zi() {
  for (var t, n = Ot, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Ot = e);
  ct = t, rn(r);
}
function rn(t) {
  if (!ot) {
    ut && (ut = clearTimeout(ut));
    var n = t - J;
    n > 24 ? (t < 1 / 0 && (ut = setTimeout(Cn, t - ft.now() - Ut)), st && (st = clearInterval(st))) : (st || (Rt = ft.now(), st = setInterval(Ki, Ne)), ot = 1, $e(Cn));
  }
}
function Ln(t, n, e) {
  var r = new zt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var ji = Ae("start", "end", "cancel", "interrupt"), Ji = [], Ee = 0, Dn = 1, on = 2, Ct = 3, In = 4, an = 5, Lt = 6;
function Gt(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  Qi(t, e, {
    name: n,
    index: r,
    group: i,
    on: ji,
    tween: Ji,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ee
  });
}
function vn(t, n) {
  var e = H(t, n);
  if (e.state > Ee)
    throw new Error("too late; already scheduled");
  return e;
}
function X(t, n) {
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
function Qi(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Se(o, 0, e.time);
  function o(c) {
    e.state = Dn, e.timer.restart(a, e.delay, e.time), e.delay <= c && a(c - e.delay);
  }
  function a(c) {
    var l, f, h, d;
    if (e.state !== Dn)
      return u();
    for (l in r)
      if (d = r[l], d.name === e.name) {
        if (d.state === Ct)
          return Ln(a);
        d.state === In ? (d.state = Lt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[l]) : +l < n && (d.state = Lt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[l]);
      }
    if (Ln(function() {
      e.state === Ct && (e.state = In, e.timer.restart(s, e.delay, e.time), s(c));
    }), e.state = on, e.on.call("start", t, t.__data__, e.index, e.group), e.state === on) {
      for (e.state = Ct, i = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
        (d = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function s(c) {
    for (var l = c < e.duration ? e.ease.call(null, c / e.duration) : (e.timer.restart(u), e.state = an, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    e.state === an && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = Lt, e.timer.stop(), delete r[n];
    for (var c in r)
      return;
    delete t.__transition;
  }
}
function to(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (!!e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > on && r.state < an, r.state = Lt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function no(t) {
  return this.each(function() {
    to(this, t);
  });
}
function xn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Te(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function pt() {
}
var ht = 0.7, Ft = 1 / ht, rt = "\\s*([+-]?\\d+)\\s*", dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", V = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eo = /^#([0-9a-f]{3,8})$/, ro = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), io = new RegExp(`^rgb\\(${V},${V},${V}\\)$`), oo = new RegExp(`^rgba\\(${rt},${rt},${rt},${dt}\\)$`), ao = new RegExp(`^rgba\\(${V},${V},${V},${dt}\\)$`), so = new RegExp(`^hsl\\(${dt},${V},${V}\\)$`), uo = new RegExp(`^hsla\\(${dt},${V},${V},${dt}\\)$`), On = {
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
xn(pt, Q, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Rn,
  formatHex: Rn,
  formatHex8: co,
  formatHsl: lo,
  formatRgb: zn,
  toString: zn
});
function Rn() {
  return this.rgb().formatHex();
}
function co() {
  return this.rgb().formatHex8();
}
function lo() {
  return Ce(this).formatHsl();
}
function zn() {
  return this.rgb().formatRgb();
}
function Q(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = eo.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Fn(n) : e === 3 ? new C(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? bt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? bt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ro.exec(t)) ? new C(n[1], n[2], n[3], 1) : (n = io.exec(t)) ? new C(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = oo.exec(t)) ? bt(n[1], n[2], n[3], n[4]) : (n = ao.exec(t)) ? bt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = so.exec(t)) ? Vn(n[1], n[2] / 100, n[3] / 100, 1) : (n = uo.exec(t)) ? Vn(n[1], n[2] / 100, n[3] / 100, n[4]) : On.hasOwnProperty(t) ? Fn(On[t]) : t === "transparent" ? new C(NaN, NaN, NaN, 0) : null;
}
function Fn(t) {
  return new C(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function bt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new C(t, n, e, r);
}
function fo(t) {
  return t instanceof pt || (t = Q(t)), t ? (t = t.rgb(), new C(t.r, t.g, t.b, t.opacity)) : new C();
}
function sn(t, n, e, r) {
  return arguments.length === 1 ? fo(t) : new C(t, n, e, r == null ? 1 : r);
}
function C(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
xn(C, sn, Te(pt, {
  brighter(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ht : Math.pow(ht, t), new C(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new C(j(this.r), j(this.g), j(this.b), Pt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Pn,
  formatHex: Pn,
  formatHex8: ho,
  formatRgb: Hn,
  toString: Hn
}));
function Pn() {
  return `#${Z(this.r)}${Z(this.g)}${Z(this.b)}`;
}
function ho() {
  return `#${Z(this.r)}${Z(this.g)}${Z(this.b)}${Z((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Hn() {
  const t = Pt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${j(this.r)}, ${j(this.g)}, ${j(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Pt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function j(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Z(t) {
  return t = j(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Vn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new z(t, n, e, r);
}
function Ce(t) {
  if (t instanceof z)
    return new z(t.h, t.s, t.l, t.opacity);
  if (t instanceof pt || (t = Q(t)), !t)
    return new z();
  if (t instanceof z)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new z(a, s, u, t.opacity);
}
function go(t, n, e, r) {
  return arguments.length === 1 ? Ce(t) : new z(t, n, e, r == null ? 1 : r);
}
function z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
xn(z, go, Te(pt, {
  brighter(t) {
    return t = t == null ? Ft : Math.pow(Ft, t), new z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ht : Math.pow(ht, t), new z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new C(
      jt(t >= 240 ? t - 240 : t + 120, i, r),
      jt(t, i, r),
      jt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new z(Xn(this.h), kt(this.s), kt(this.l), Pt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Pt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Xn(this.h)}, ${kt(this.s) * 100}%, ${kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Xn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function jt(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const _n = (t) => () => t;
function po(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function mo(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function yo(t) {
  return (t = +t) == 1 ? Le : function(n, e) {
    return e - n ? mo(n, e, t) : _n(isNaN(n) ? e : n);
  };
}
function Le(t, n) {
  var e = n - t;
  return e ? po(t, e) : _n(isNaN(t) ? n : t);
}
const Ht = function t(n) {
  var e = yo(n);
  function r(i, o) {
    var a = e((i = sn(i)).r, (o = sn(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), c = Le(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = s(l), i.b = u(l), i.opacity = c(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function wo(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function vo(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function xo(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = bn(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](s);
    return o;
  };
}
function _o(t, n) {
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
function bo(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = bn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var un = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Jt = new RegExp(un.source, "g");
function ko(t) {
  return function() {
    return t;
  };
}
function Mo(t) {
  return function(n) {
    return t(n) + "";
  };
}
function De(t, n) {
  var e = un.lastIndex = Jt.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = un.exec(t)) && (i = Jt.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: R(r, i) })), e = Jt.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Mo(u[0].x) : ko(n) : (n = u.length, function(c) {
    for (var l = 0, f; l < n; ++l)
      s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function bn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? _n(n) : (e === "number" ? R : e === "string" ? (r = Q(n)) ? (n = r, Ht) : De : n instanceof Q ? Ht : n instanceof Date ? _o : vo(n) ? wo : Array.isArray(n) ? xo : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? bo : R)(t, n);
}
function Ao(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var qn = 180 / Math.PI, cn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ie(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * qn,
    skewX: Math.atan(u) * qn,
    scaleX: a,
    scaleY: s
  };
}
var Mt;
function No(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? cn : Ie(n.a, n.b, n.c, n.d, n.e, n.f);
}
function $o(t) {
  return t == null || (Mt || (Mt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Mt.setAttribute("transform", t), !(t = Mt.transform.baseVal.consolidate())) ? cn : (t = t.matrix, Ie(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Oe(t, n, e, r) {
  function i(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, l, f, h, d, y) {
    if (c !== f || l !== h) {
      var v = d.push("translate(", null, n, null, e);
      y.push({ i: v - 4, x: R(c, f) }, { i: v - 2, x: R(l, h) });
    } else
      (f || h) && d.push("translate(" + f + n + h + e);
  }
  function a(c, l, f, h) {
    c !== l ? (c - l > 180 ? l += 360 : l - c > 180 && (c += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: R(c, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function s(c, l, f, h) {
    c !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: R(c, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function u(c, l, f, h, d, y) {
    if (c !== f || l !== h) {
      var v = d.push(i(d) + "scale(", null, ",", null, ")");
      y.push({ i: v - 4, x: R(c, f) }, { i: v - 2, x: R(l, h) });
    } else
      (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(c, l) {
    var f = [], h = [];
    return c = t(c), l = t(l), o(c.translateX, c.translateY, l.translateX, l.translateY, f, h), a(c.rotate, l.rotate, f, h), s(c.skewX, l.skewX, f, h), u(c.scaleX, c.scaleY, l.scaleX, l.scaleY, f, h), c = l = null, function(d) {
      for (var y = -1, v = h.length, p; ++y < v; )
        f[(p = h[y]).i] = p.x(d);
      return f.join("");
    };
  };
}
var So = Oe(No, "px, ", "px)", "deg)"), Eo = Oe($o, ", ", ")", ")");
function To(t, n) {
  var e, r;
  return function() {
    var i = X(this, t), o = i.tween;
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
function Co(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = X(this, t), a = o.tween;
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
    for (var r = H(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? To : Co)(e, t, n));
}
function kn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = X(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return H(i, r).value[n];
  };
}
function Re(t, n) {
  var e;
  return (typeof n == "number" ? R : n instanceof Q ? Ht : (e = Q(n)) ? (n = e, Ht) : De)(t, n);
}
function Do(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Io(t) {
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
function Ro(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function zo(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Fo(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Po(t, n) {
  var e = Bt(t), r = e === "transform" ? Eo : Re;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Fo : zo)(e, r, kn(this, "attr." + t, n)) : n == null ? (e.local ? Io : Do)(e) : (e.local ? Ro : Oo)(e, r, n));
}
function Ho(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Vo(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Xo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vo(t, o)), e;
  }
  return i._value = n, i;
}
function qo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Ho(t, o)), e;
  }
  return i._value = n, i;
}
function Wo(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = Bt(t);
  return this.tween(e, (r.local ? Xo : qo)(r, n));
}
function Yo(t, n) {
  return function() {
    vn(this, t).delay = +n.apply(this, arguments);
  };
}
function Bo(t, n) {
  return n = +n, function() {
    vn(this, t).delay = n;
  };
}
function Uo(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Yo : Bo)(n, t)) : H(this.node(), n).delay;
}
function Go(t, n) {
  return function() {
    X(this, t).duration = +n.apply(this, arguments);
  };
}
function Ko(t, n) {
  return n = +n, function() {
    X(this, t).duration = n;
  };
}
function Zo(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Go : Ko)(n, t)) : H(this.node(), n).duration;
}
function jo(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    X(this, t).ease = n;
  };
}
function Jo(t) {
  var n = this._id;
  return arguments.length ? this.each(jo(n, t)) : H(this.node(), n).ease;
}
function Qo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    X(this, t).ease = e;
  };
}
function ta(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Qo(this._id, t));
}
function na(t) {
  typeof t != "function" && (t = ge(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, c = 0; c < a; ++c)
      (u = o[c]) && t.call(u, u.__data__, c, o) && s.push(u);
  return new B(r, this._parents, this._name, this._id);
}
function ea(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], c = e[s], l = u.length, f = a[s] = new Array(l), h, d = 0; d < l; ++d)
      (h = u[d] || c[d]) && (f[d] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new B(a, this._parents, this._name, this._id);
}
function ra(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function ia(t, n, e) {
  var r, i, o = ra(n) ? vn : X;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function oa(t, n) {
  var e = this._id;
  return arguments.length < 2 ? H(this.node(), e).on.on(t) : this.each(ia(e, t, n));
}
function aa(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function sa() {
  return this.on("end.remove", aa(this._id));
}
function ua(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = mn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, c = o[a] = new Array(u), l, f, h = 0; h < u; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), c[h] = f, Gt(c[h], n, e, h, c, H(l, e)));
  return new B(o, this._parents, n, e);
}
function ca(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = de(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], c = u.length, l, f = 0; f < c; ++f)
      if (l = u[f]) {
        for (var h = t.call(l, l.__data__, f, u), d, y = H(l, e), v = 0, p = h.length; v < p; ++v)
          (d = h[v]) && Gt(d, n, e, v, h, y);
        o.push(h), a.push(l);
      }
  return new B(o, a, n, e);
}
var la = gt.prototype.constructor;
function fa() {
  return new la(this._groups, this._parents);
}
function ha(t, n) {
  var e, r, i;
  return function() {
    var o = it(this, t), a = (this.style.removeProperty(t), it(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ze(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function da(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = it(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ga(t, n, e) {
  var r, i, o;
  return function() {
    var a = it(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), it(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function pa(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = X(this, t), c = u.on, l = u.value[o] == null ? s || (s = ze(n)) : void 0;
    (c !== e || i !== l) && (r = (e = c).copy()).on(a, i = l), u.on = r;
  };
}
function ma(t, n, e) {
  var r = (t += "") == "transform" ? So : Re;
  return n == null ? this.styleTween(t, ha(t, r)).on("end.style." + t, ze(t)) : typeof n == "function" ? this.styleTween(t, ga(t, r, kn(this, "style." + t, n))).each(pa(this._id, t)) : this.styleTween(t, da(t, r, n), e).on("end.style." + t, null);
}
function ya(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function wa(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && ya(t, a, e)), r;
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
  return this.tween(r, wa(t, n, e == null ? "" : e));
}
function xa(t) {
  return function() {
    this.textContent = t;
  };
}
function _a(t) {
  return function() {
    var n = t(this);
    this.textContent = n == null ? "" : n;
  };
}
function ba(t) {
  return this.tween("text", typeof t == "function" ? _a(kn(this, "text", t)) : xa(t == null ? "" : t + ""));
}
function ka(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Ma(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && ka(i)), n;
  }
  return r._value = t, r;
}
function Aa(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Ma(t));
}
function Na() {
  for (var t = this._name, n = this._id, e = Fe(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, c = 0; c < s; ++c)
      if (u = a[c]) {
        var l = H(u, n);
        Gt(u, t, e, c, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new B(r, this._parents, t, e);
}
function $a() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var c = X(this, r), l = c.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), c.on = n;
    }), i === 0 && o();
  });
}
var Sa = 0;
function B(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Fe() {
  return ++Sa;
}
var W = gt.prototype;
B.prototype = {
  constructor: B,
  select: ua,
  selectAll: ca,
  selectChild: W.selectChild,
  selectChildren: W.selectChildren,
  filter: na,
  merge: ea,
  selection: fa,
  transition: Na,
  call: W.call,
  nodes: W.nodes,
  node: W.node,
  size: W.size,
  empty: W.empty,
  each: W.each,
  on: oa,
  attr: Po,
  attrTween: Wo,
  style: ma,
  styleTween: va,
  text: ba,
  textTween: Aa,
  remove: sa,
  tween: Lo,
  delay: Uo,
  duration: Zo,
  ease: Jo,
  easeVarying: ta,
  end: $a,
  [Symbol.iterator]: W[Symbol.iterator]
};
function Ea(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ta = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Ea
};
function Ca(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function La(t) {
  var n, e;
  t instanceof B ? (n = t._id, t = t._name) : (n = Fe(), (e = Ta).time = wn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, c = 0; c < s; ++c)
      (u = a[c]) && Gt(u, t, n, c, a, e || Ca(u, n));
  return new B(r, this._parents, t, n);
}
gt.prototype.interrupt = no;
gt.prototype.transition = La;
const Wn = {
  wicks: "line",
  candles: "rect"
}, Da = (t, n, e, r, i) => {
  const {
    scales: { xScale: o },
    utils: { scaledHeight: a, scaledY: s }
  } = r, {
    visibleRange: { offset: u }
  } = e, c = lt({}), l = lt(!1), [f, h] = Y({
    item: void 0,
    position: void 0
  }), d = F(() => K(t.current), [t.current]), y = F(
    (g, x = d()) => x.selectAll(`${Wn[g]}.${g}`).data(n),
    [n]
  ), v = F(
    (g) => {
      var x;
      return c.current[g] = (x = c.current[g]) != null ? x : d().append("g").classed(`${g}-group`, !0).attr("clip-path", "url(#chart-contents)"), c.current[g];
    },
    [c]
  ), p = F(
    (g, x) => {
      let w = y(g, v(g));
      w.size() !== n.length && (w = w.enter().append(Wn[g]));
      const N = () => w.transition().duration(i ? Hi : 50), _ = (A) => Number(o(A.date)) + (g === "wicks" ? +o.bandwidth() / 2 : 0) + u, m = (A) => s(A[x[0]], A[x[1]]), k = (A) => a(A[x[0]], A[x[1]]), $ = (A) => m(A) + k(A);
      return g === "candles" ? (N().attr("width", () => +o.bandwidth()).attr("height", k).attr("x", _).attr("y", m), w.classed("is-increased", (A) => A.close > A.open).classed("is-decreased", (A) => A.close < A.open).classed("is-zoomed", (A) => +o.bandwidth() > 10).on("click", ({ target: A }, T) => {
        w.classed("is-active", !1), K(A).classed("is-active", !0), l.current = !0, h({
          item: T,
          position: {
            x: _(T) + o.bandwidth() + L,
            y: $(T) + 8
          }
        });
      }).on("mouseover", (A, T) => {
        l.current || h({
          item: T
        });
      }).on("mouseout", (A, T) => {
        l.current || h({
          item: void 0
        });
      })) : N().attr("x1", _).attr("y1", m).attr("x2", _).attr("y2", $), w.classed(g, !0).exit().remove(), w;
    },
    [o, s]
  );
  return P(() => {
    v("wicks"), v("candles");
    const g = ({ target: x }) => {
      x.nodeName !== "rect" && (d().selectAll("rect").classed("is-active", !1), l.current = !1, h(({ position: w }) => ({ item: void 0, position: w })));
    };
    return addEventListener("resize", g), addEventListener("pointerdown", g), () => {
      removeEventListener("pointerdown", g), removeEventListener("resize", g);
    };
  }, []), P(() => {
    var g;
    (g = o == null ? void 0 : o.bandwidth) != null && g.call(o) && (p("wicks", ["low", "high"]), p("candles", ["open", "close"]));
  }, [o, s]), f;
};
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pe = "Expected a function", Yn = 0 / 0, Ia = "[object Symbol]", Oa = /^\s+|\s+$/g, Ra = /^[-+]0x[0-9a-f]+$/i, za = /^0b[01]+$/i, Fa = /^0o[0-7]+$/i, Pa = parseInt, Ha = typeof At == "object" && At && At.Object === Object && At, Va = typeof self == "object" && self && self.Object === Object && self, Xa = Ha || Va || Function("return this")(), qa = Object.prototype, Wa = qa.toString, Ya = Math.max, Ba = Math.min, Qt = function() {
  return Xa.Date.now();
};
function Ua(t, n, e) {
  var r, i, o, a, s, u, c = 0, l = !1, f = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(Pe);
  n = Bn(n) || 0, Vt(e) && (l = !!e.leading, f = "maxWait" in e, o = f ? Ya(Bn(e.maxWait) || 0, n) : o, h = "trailing" in e ? !!e.trailing : h);
  function d(m) {
    var k = r, $ = i;
    return r = i = void 0, c = m, a = t.apply($, k), a;
  }
  function y(m) {
    return c = m, s = setTimeout(g, n), l ? d(m) : a;
  }
  function v(m) {
    var k = m - u, $ = m - c, A = n - k;
    return f ? Ba(A, o - $) : A;
  }
  function p(m) {
    var k = m - u, $ = m - c;
    return u === void 0 || k >= n || k < 0 || f && $ >= o;
  }
  function g() {
    var m = Qt();
    if (p(m))
      return x(m);
    s = setTimeout(g, v(m));
  }
  function x(m) {
    return s = void 0, h && r ? d(m) : (r = i = void 0, a);
  }
  function w() {
    s !== void 0 && clearTimeout(s), c = 0, r = u = i = s = void 0;
  }
  function N() {
    return s === void 0 ? a : x(Qt());
  }
  function _() {
    var m = Qt(), k = p(m);
    if (r = arguments, i = this, u = m, k) {
      if (s === void 0)
        return y(u);
      if (f)
        return s = setTimeout(g, n), d(u);
    }
    return s === void 0 && (s = setTimeout(g, n)), a;
  }
  return _.cancel = w, _.flush = N, _;
}
function Ga(t, n, e) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(Pe);
  return Vt(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), Ua(t, n, {
    leading: r,
    maxWait: n,
    trailing: i
  });
}
function Vt(t) {
  var n = typeof t;
  return !!t && (n == "object" || n == "function");
}
function Ka(t) {
  return !!t && typeof t == "object";
}
function Za(t) {
  return typeof t == "symbol" || Ka(t) && Wa.call(t) == Ia;
}
function Bn(t) {
  if (typeof t == "number")
    return t;
  if (Za(t))
    return Yn;
  if (Vt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Vt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(Oa, "");
  var e = za.test(t);
  return e || Fa.test(t) ? Pa(t.slice(2), e ? 2 : 8) : Ra.test(t) ? Yn : +t;
}
var ln = Ga;
const { abs: ja, round: Un } = Math, Ja = (t, n, e) => {
  const [r, i] = Y({
    width: 0,
    height: 0
  }), [o, a] = Y({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0
  }), { zoomLevel: s, panLevel: u } = e;
  return P(() => {
    const c = ln(() => {
      const { clientWidth: l, clientHeight: f } = t.current;
      i({ width: l, height: f });
    }, 200);
    return c(), addEventListener("resize", c), () => removeEventListener("resize", c);
  }, []), P(() => {
    if (!n)
      return;
    const { width: c } = r, l = Vi * (1 + Me) * s, f = l * n, h = c - G[1] + L * 2;
    let d = u * s - f + h;
    d = d <= 0 ? d : 0, d = f > c ? d : h - f, d = ja(d - h) <= f ? d : -f + h;
    const y = Un((d * -1 - L) / l), v = Un((d * -1 + h) / l);
    a({ first: y, last: v, offset: d, totalWidth: f });
  }, [s, u, n, r.width]), { visibleRange: o, sizes: r };
}, Qa = (t) => {
  var n;
  return (n = t.toISOString().split("T")) == null ? void 0 : n[0];
}, ts = (t = "") => new Date(t).toLocaleDateString("en-UK"), nt = (t = 0, n = 1e4) => Math.floor(Math.random() * (t - n - 1)) + n + 1, Gn = (t, n = 100) => Math.abs(t + (t - nt(t - n, t + n))), ns = (t, n) => {
  let r = new Date();
  r.setDate(r.getDate() - t);
  const i = n ? Gn(n.close, 3) : nt(100, 400), o = Gn(i, 50), a = nt(Math.max(i, o), Math.max(i, o) + 20), s = nt(
    Math.abs(Math.min(i, o) - 20),
    Math.min(i, o)
  );
  return {
    date: Qa(r),
    high: a,
    low: s > 0 ? s : 0,
    open: i,
    close: o > 0 ? o : 0,
    volume: nt(5e3, 1e4),
    trades: nt(50, 100)
  };
}, _u = (t) => {
  let n;
  return {
    company: "Bortus",
    dates: new Array(t + 1).fill("").map((r, i) => {
      const o = ns(t - i, n);
      return n = o, o;
    })
  };
};
function Dt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function es(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function He(t) {
  let n, e, r;
  t.length !== 2 ? (n = Dt, e = (s, u) => Dt(t(s), u), r = (s, u) => t(s) - u) : (n = t === Dt || t === es ? t : rs, e = t, r = t);
  function i(s, u, c = 0, l = s.length) {
    if (c < l) {
      if (n(u, u) !== 0)
        return l;
      do {
        const f = c + l >>> 1;
        e(s[f], u) < 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function o(s, u, c = 0, l = s.length) {
    if (c < l) {
      if (n(u, u) !== 0)
        return l;
      do {
        const f = c + l >>> 1;
        e(s[f], u) <= 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function a(s, u, c = 0, l = s.length) {
    const f = i(s, u, c, l - 1);
    return f > c && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function rs() {
  return 0;
}
function is(t) {
  return t === null ? NaN : +t;
}
const os = He(Dt), as = os.right;
He(is).center;
const ss = as;
class Kn extends Map {
  constructor(n, e = ls) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(Zn(this, n));
  }
  has(n) {
    return super.has(Zn(this, n));
  }
  set(n, e) {
    return super.set(us(this, n), e);
  }
  delete(n) {
    return super.delete(cs(this, n));
  }
}
function Zn({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function us({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function cs({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ls(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
var fn = Math.sqrt(50), hn = Math.sqrt(10), dn = Math.sqrt(2);
function fs(t, n, e) {
  var r, i = -1, o, a, s;
  if (n = +n, t = +t, e = +e, t === n && e > 0)
    return [t];
  if ((r = n < t) && (o = t, t = n, n = o), (s = Ve(t, n, e)) === 0 || !isFinite(s))
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
function Ve(t, n, e) {
  var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
  return i >= 0 ? (o >= fn ? 10 : o >= hn ? 5 : o >= dn ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= fn ? 10 : o >= hn ? 5 : o >= dn ? 2 : 1);
}
function hs(t, n, e) {
  var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
  return o >= fn ? i *= 10 : o >= hn ? i *= 5 : o >= dn && (i *= 2), n < t ? -i : i;
}
function ds(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function Mn(t, n) {
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
const jn = Symbol("implicit");
function Xe() {
  var t = new Kn(), n = [], e = [], r = jn;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== jn)
        return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new Kn();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Xe(n, e).unknown(r);
  }, Mn.apply(i, arguments), i;
}
function qe() {
  var t = Xe().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, a, s = !1, u = 0, c = 0, l = 0.5;
  delete t.unknown;
  function f() {
    var h = n().length, d = i < r, y = d ? i : r, v = d ? r : i;
    o = (v - y) / Math.max(1, h - u + c * 2), s && (o = Math.floor(o)), y += (v - y - o * (h - u)) * l, a = o * (1 - u), s && (y = Math.round(y), a = Math.round(a));
    var p = ds(h).map(function(g) {
      return y + o * g;
    });
    return e(d ? p.reverse() : p);
  }
  return t.domain = function(h) {
    return arguments.length ? (n(h), f()) : n();
  }, t.range = function(h) {
    return arguments.length ? ([r, i] = h, r = +r, i = +i, f()) : [r, i];
  }, t.rangeRound = function(h) {
    return [r, i] = h, r = +r, i = +i, s = !0, f();
  }, t.bandwidth = function() {
    return a;
  }, t.step = function() {
    return o;
  }, t.round = function(h) {
    return arguments.length ? (s = !!h, f()) : s;
  }, t.padding = function(h) {
    return arguments.length ? (u = Math.min(1, c = +h), f()) : u;
  }, t.paddingInner = function(h) {
    return arguments.length ? (u = Math.min(1, h), f()) : u;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (c = +h, f()) : c;
  }, t.align = function(h) {
    return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l;
  }, t.copy = function() {
    return qe(n(), [r, i]).round(s).paddingInner(u).paddingOuter(c).align(l);
  }, Mn.apply(f(), arguments);
}
function gs(t) {
  return function() {
    return t;
  };
}
function ps(t) {
  return +t;
}
var Jn = [0, 1];
function et(t) {
  return t;
}
function gn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : gs(isNaN(n) ? NaN : 0.5);
}
function ms(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function ys(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = gn(i, r), o = e(a, o)) : (r = gn(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function ws(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = gn(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = ss(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function vs(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function xs() {
  var t = Jn, n = Jn, e = bn, r, i, o, a = et, s, u, c;
  function l() {
    var h = Math.min(t.length, n.length);
    return a !== et && (a = ms(t[0], t[h - 1])), s = h > 2 ? ws : ys, u = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((c || (c = s(n, t.map(r), R)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, ps), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), l()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Ao, l();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : et, l()) : a !== et;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, l()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, d) {
    return r = h, i = d, l();
  };
}
function _s() {
  return xs()(et, et);
}
function bs(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Xt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function at(t) {
  return t = Xt(Math.abs(t)), t ? t[1] : NaN;
}
function ks(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Ms(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var As = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function qt(t) {
  if (!(n = As.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new An({
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
qt.prototype = An.prototype;
function An(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
An.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ns(t) {
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
var We;
function $s(t, n) {
  var e = Xt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (We = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Xt(t, Math.max(0, n + o - 1))[0];
}
function Qn(t, n) {
  var e = Xt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const te = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: bs,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Qn(t * 100, n),
  r: Qn,
  s: $s,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ne(t) {
  return t;
}
var ee = Array.prototype.map, re = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ss(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ne : ks(ee.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? ne : Ms(ee.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "\u2212" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(f) {
    f = qt(f);
    var h = f.fill, d = f.align, y = f.sign, v = f.symbol, p = f.zero, g = f.width, x = f.comma, w = f.precision, N = f.trim, _ = f.type;
    _ === "n" ? (x = !0, _ = "g") : te[_] || (w === void 0 && (w = 12), N = !0, _ = "g"), (p || h === "0" && d === "=") && (p = !0, h = "0", d = "=");
    var m = v === "$" ? e : v === "#" && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "", k = v === "$" ? r : /[%p]/.test(_) ? a : "", $ = te[_], A = /[defgprs%]/.test(_);
    w = w === void 0 ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function T(b) {
      var E = m, S = k, tt, Nn, mt;
      if (_ === "c")
        S = $(b) + S, b = "";
      else {
        b = +b;
        var yt = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? u : $(Math.abs(b), w), N && (b = Ns(b)), yt && +b == 0 && y !== "+" && (yt = !1), E = (yt ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + E, S = (_ === "s" ? re[8 + We / 3] : "") + S + (yt && y === "(" ? ")" : ""), A) {
          for (tt = -1, Nn = b.length; ++tt < Nn; )
            if (mt = b.charCodeAt(tt), 48 > mt || mt > 57) {
              S = (mt === 46 ? i + b.slice(tt + 1) : b.slice(tt)) + S, b = b.slice(0, tt);
              break;
            }
        }
      }
      x && !p && (b = n(b, 1 / 0));
      var wt = E.length + b.length + S.length, q = wt < g ? new Array(g - wt + 1).join(h) : "";
      switch (x && p && (b = n(q + b, q.length ? g - S.length : 1 / 0), q = ""), d) {
        case "<":
          b = E + b + S + q;
          break;
        case "=":
          b = E + q + b + S;
          break;
        case "^":
          b = q.slice(0, wt = q.length >> 1) + E + b + S + q.slice(wt);
          break;
        default:
          b = q + E + b + S;
          break;
      }
      return o(b);
    }
    return T.toString = function() {
      return f + "";
    }, T;
  }
  function l(f, h) {
    var d = c((f = qt(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(at(h) / 3))) * 3, v = Math.pow(10, -y), p = re[8 + y / 3];
    return function(g) {
      return d(v * g) + p;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var Nt, Ye, Be;
Es({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Es(t) {
  return Nt = Ss(t), Ye = Nt.format, Be = Nt.formatPrefix, Nt;
}
function Ts(t) {
  return Math.max(0, -at(Math.abs(t)));
}
function Cs(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(at(n) / 3))) * 3 - at(Math.abs(t)));
}
function Ls(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, at(n) - at(t)) + 1;
}
function Ds(t, n, e, r) {
  var i = hs(t, n, e), o;
  switch (r = qt(r == null ? ",f" : r), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Cs(i, a)) && (r.precision = o), Be(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ls(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ts(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ye(r);
}
function Is(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return fs(r[0], r[r.length - 1], e == null ? 10 : e);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Ds(i[0], i[i.length - 1], e == null ? 10 : e, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, c, l = 10;
    for (s < a && (c = a, a = s, s = c, c = i, i = o, o = c); l-- > 0; ) {
      if (c = Ve(a, s, e), c === u)
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
function Ue() {
  var t = _s();
  return t.copy = function() {
    return vs(t, Ue());
  }, Mn.apply(t, arguments), Is(t);
}
const { abs: Os, min: ie, max: Rs } = Math, zs = (t, n) => {
  const { sizes: e, visibleRange: r } = n, [i, o] = Y({
    xScale: (u) => u,
    yScale: (u) => u
  }), a = F(
    (u, c) => Os(i.yScale(c) - i.yScale(u)) || 1,
    [i.yScale]
  ), s = F(
    (u, c) => i.yScale(ie(u, c)) - a(u, c) || 1,
    [i.yScale]
  );
  return P(() => {
    if (!(t != null && t.length))
      return;
    const { first: u, last: c, totalWidth: l } = r, { height: f } = e, h = t.slice(u > 0 ? u : 0, c), d = ie(...h.map(({ low: g }) => g)), y = Rs(...h.map(({ high: g }) => g)), v = qe().range([L, l - L]).domain(t.map(({ date: g }) => g)).padding(Me), p = Ue().domain([d - 20, y + 20]).range([f - G[0], L]);
    o({ xScale: v, yScale: p });
  }, [r, e.height, t]), { utils: { scaledHeight: a, scaledY: s }, scales: i };
};
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ge = "Expected a function", oe = 0 / 0, Fs = "[object Symbol]", Ps = /^\s+|\s+$/g, Hs = /^[-+]0x[0-9a-f]+$/i, Vs = /^0b[01]+$/i, Xs = /^0o[0-7]+$/i, qs = parseInt, Ws = typeof $t == "object" && $t && $t.Object === Object && $t, Ys = typeof self == "object" && self && self.Object === Object && self, Bs = Ws || Ys || Function("return this")(), Us = Object.prototype, Gs = Us.toString, Ks = Math.max, Zs = Math.min, tn = function() {
  return Bs.Date.now();
};
function js(t, n, e) {
  var r, i, o, a, s, u, c = 0, l = !1, f = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(Ge);
  n = ae(n) || 0, Wt(e) && (l = !!e.leading, f = "maxWait" in e, o = f ? Ks(ae(e.maxWait) || 0, n) : o, h = "trailing" in e ? !!e.trailing : h);
  function d(m) {
    var k = r, $ = i;
    return r = i = void 0, c = m, a = t.apply($, k), a;
  }
  function y(m) {
    return c = m, s = setTimeout(g, n), l ? d(m) : a;
  }
  function v(m) {
    var k = m - u, $ = m - c, A = n - k;
    return f ? Zs(A, o - $) : A;
  }
  function p(m) {
    var k = m - u, $ = m - c;
    return u === void 0 || k >= n || k < 0 || f && $ >= o;
  }
  function g() {
    var m = tn();
    if (p(m))
      return x(m);
    s = setTimeout(g, v(m));
  }
  function x(m) {
    return s = void 0, h && r ? d(m) : (r = i = void 0, a);
  }
  function w() {
    s !== void 0 && clearTimeout(s), c = 0, r = u = i = s = void 0;
  }
  function N() {
    return s === void 0 ? a : x(tn());
  }
  function _() {
    var m = tn(), k = p(m);
    if (r = arguments, i = this, u = m, k) {
      if (s === void 0)
        return y(u);
      if (f)
        return s = setTimeout(g, n), d(u);
    }
    return s === void 0 && (s = setTimeout(g, n)), a;
  }
  return _.cancel = w, _.flush = N, _;
}
function Js(t, n, e) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(Ge);
  return Wt(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), js(t, n, {
    leading: r,
    maxWait: n,
    trailing: i
  });
}
function Wt(t) {
  var n = typeof t;
  return !!t && (n == "object" || n == "function");
}
function Qs(t) {
  return !!t && typeof t == "object";
}
function tu(t) {
  return typeof t == "symbol" || Qs(t) && Gs.call(t) == Fs;
}
function ae(t) {
  if (typeof t == "number")
    return t;
  if (tu(t))
    return oe;
  if (Wt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Wt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(Ps, "");
  var e = Vs.test(t);
  return e || Xs.test(t) ? qs(t.slice(2), e ? 2 : 8) : Hs.test(t) ? oe : +t;
}
var nu = Js;
const eu = I.div(
  ({ isVisible: t = !1 }) => Yt`
    position: absolute;
    transition: all 0.2s;
    opacity: ${t ? 0.9 : 0};
    ${pn()}
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
), ru = ({
  children: t,
  isVisible: n = !1,
  x: e = 0,
  y: r = 0
}) => {
  const i = lt(null), [o, a] = Y({
    x: e,
    y: r
  }), s = F((u, c) => {
    var l, f;
    return a({
      x: u - ((f = (l = i.current) == null ? void 0 : l.clientWidth) != null ? f : 0) / 2,
      y: c + 24
    });
  }, [i.current]);
  return P(() => {
    s(e, r);
    const u = nu(({
      clientX: l,
      clientY: f
    }) => !e && !r && s(l, f), 100), c = () => {
      removeEventListener("mousemove", u);
    };
    return e && r ? c() : addEventListener("mousemove", u), c;
  }, [e, r]), /* @__PURE__ */ M(eu, {
    ref: i,
    isVisible: n,
    children: t,
    style: {
      left: o.x,
      top: o.y
    }
  });
}, iu = I.div`
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
`, ou = ({
  item: t,
  position: n
}) => {
  const [e, r] = Y(t), i = lt();
  return P(() => {
    if (t) {
      r(t), clearTimeout(i.current);
      return;
    }
    i.current = setTimeout(() => r(t), 200);
  }, [t]), /* @__PURE__ */ M(ru, {
    isVisible: !!t,
    ...n,
    children: /* @__PURE__ */ O(iu, {
      children: [/* @__PURE__ */ M("div", {
        children: /* @__PURE__ */ M("strong", {
          children: ts(e == null ? void 0 : e.date)
        })
      }), /* @__PURE__ */ O("div", {
        children: ["Open: ", /* @__PURE__ */ M("em", {
          children: e == null ? void 0 : e.open
        })]
      }), /* @__PURE__ */ O("div", {
        children: ["Close: ", /* @__PURE__ */ M("em", {
          children: e == null ? void 0 : e.close
        })]
      }), /* @__PURE__ */ O("div", {
        children: ["High: ", /* @__PURE__ */ M("em", {
          children: e == null ? void 0 : e.high
        })]
      }), /* @__PURE__ */ O("div", {
        children: ["Low: ", /* @__PURE__ */ M("em", {
          children: e == null ? void 0 : e.low
        })]
      })]
    })
  });
}, au = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, su = I.button(
  ({ status: t, minWidth: n, margin: e }) => Yt`
    ${pn({ color: t === "default" ? "" : au[t] })}
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
}) => /* @__PURE__ */ M(su, {
  status: n,
  ...o,
  minWidth: r,
  margin: i,
  "data-selector": e,
  children: t
}), uu = I.div`
  margin: 10px;
  position: absolute;
`, se = I.div(
  ({ rotate: t }) => Yt`
    rotate: ${t}deg;
  `
), U = 0.2, ue = 100, cu = ({
  controls: {
    zoomLevel: t
  },
  setControls: n,
  visibleRange: e,
  length: r
}) => {
  const i = {
    minWidth: "auto",
    margin: "5px"
  }, o = F(() => n(({
    panLevel: c,
    zoomLevel: l
  }) => {
    const f = c + ue / l;
    return {
      panLevel: e.first <= 0 ? c : f,
      zoomLevel: l,
      transition: !0
    };
  }), [e.first]), a = F(() => n(({
    panLevel: c,
    zoomLevel: l
  }) => {
    const f = c - ue / l;
    return {
      panLevel: f > 1 ? f : 1,
      zoomLevel: l,
      transition: !0
    };
  }), []), s = F(() => n(({
    panLevel: c,
    zoomLevel: l
  }) => ({
    zoomLevel: +(l - U > 0 ? l - U : U / 2).toFixed(2),
    panLevel: c,
    transition: !0
  })), []), u = F(() => n(({
    panLevel: c,
    zoomLevel: l
  }) => ({
    zoomLevel: +(l === U / 2 ? U : l + U).toFixed(2),
    panLevel: c,
    transition: !0
  })), []);
  return P(() => {
    const c = ({
      key: l
    }) => {
      var h;
      const f = {
        ArrowLeft: o,
        ArrowRight: a
      };
      (h = f[l]) == null || h.call(f);
    };
    return addEventListener("keydown", c), () => removeEventListener("keydown", c);
  }, [e.first]), /* @__PURE__ */ O(uu, {
    children: [/* @__PURE__ */ M(St, {
      ...i,
      onClick: o,
      disabled: e.first <= 0,
      children: /* @__PURE__ */ M(se, {
        rotate: -90,
        children: "\u{1F53A}"
      })
    }), /* @__PURE__ */ M(St, {
      ...i,
      onClick: s,
      disabled: t < U,
      children: "\u2796"
    }), /* @__PURE__ */ M(St, {
      ...i,
      onClick: u,
      disabled: t >= U * 10,
      children: "\u2795"
    }), /* @__PURE__ */ M(St, {
      ...i,
      onClick: a,
      disabled: e.last >= r - 1 || e.last - e.first > r,
      children: /* @__PURE__ */ M(se, {
        rotate: 90,
        children: "\u{1F53A}"
      })
    })]
  });
}, lu = ({
  width: t,
  height: n
}) => {
  const e = L, r = L, i = {
    x: e,
    y: r,
    width: t ? t - G[1] : 0,
    height: n ? n - G[0] : 0
  };
  return /* @__PURE__ */ O(le, {
    children: [/* @__PURE__ */ M("line", {
      x1: e,
      y1: r,
      x2: e + i.width,
      y2: r,
      stroke: "#dedede",
      strokeWidth: 1
    }), /* @__PURE__ */ M("line", {
      x1: e,
      y1: r,
      x2: e,
      y2: r + i.height - L,
      stroke: "#dedede",
      strokeWidth: 1
    }), /* @__PURE__ */ O("defs", {
      children: [/* @__PURE__ */ M("clipPath", {
        id: "chart-contents",
        children: /* @__PURE__ */ M("rect", {
          ...i
        })
      }), /* @__PURE__ */ M("clipPath", {
        id: "bottom-axis",
        children: /* @__PURE__ */ M("rect", {
          ...i,
          height: `${n}`
        })
      })]
    })]
  });
}, fu = I.svg`
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
`, hu = I.div`
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
`, du = I.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`, gu = (t, n) => {
  P(() => {
    let e = !1, r = 0, i = 0, o = {};
    const a = (p) => {
      n(({ panLevel: g, zoomLevel: x }) => {
        let w = x - p;
        return w = w < 0.1 ? 0.1 : w, {
          zoomLevel: Math.round(w * 1e3) / 1e3,
          panLevel: g,
          transition: !1
        };
      });
    }, s = ln(a, 100), u = (p) => {
      n(({ panLevel: g, zoomLevel: x }) => {
        const w = g + p / x;
        return {
          panLevel: w > 1 ? w : 1,
          zoomLevel: x,
          transition: !1
        };
      });
    }, c = ({ pointerId: p, pageX: g, pageY: x }) => {
      e = !0, r = 0, i = 0, o[p] = { pageX: g, pageY: x };
    }, l = (p) => {
      e = !1, delete o[p.pointerId], n((g) => ({
        ...g,
        transition: !0
      }));
    }, f = ({ clientX: p, pointerId: g, pageX: x, pageY: w }) => {
      const N = Object.values(o);
      if (e)
        if ((N == null ? void 0 : N.length) === 2) {
          if (Object.keys(o).indexOf(`${g}`) !== 1)
            return;
          o[g] = { pageX: x, pageY: w };
          const _ = N[0].pageX - N[1].pageX, m = N[0].pageY - N[1].pageY, k = Math.sqrt(_ * _ + m * m), $ = i ? (i - k) / 120 : 0;
          i = k, a($);
          return;
        } else {
          const _ = r ? p - r : 0;
          r = p, u(_);
        }
    }, h = ln(f, 100), d = (p) => {
      p.ctrlKey && (s(p.deltaY * 6e-3), p.preventDefault());
    }, y = (p) => p.pointerType === "mouse" ? h(p) : f(p), v = (p = "remove", g) => {
      var N;
      const x = window[`${p}EventListener`], w = (N = t.current) == null ? void 0 : N[`${p}EventListener`];
      x("pointerup", l), w == null || w("pointerdown", c), w == null || w("pointermove", y), w == null || w("wheel", d, g);
    };
    return v("add", { passive: !1 }), v;
  }, [t.current]);
}, pu = I.div`
  position: absolute;
  ${pn()}
  padding: 3px;
  font-size: 0.65em;
  font-weight: bold;
  transition: all 0.2s;
`, mu = ({
  value: t,
  x: n,
  y: e
}) => e > L ? /* @__PURE__ */ M(pu, {
  style: {
    left: n - L * 2 + 2,
    top: e + L - 4
  },
  children: t.toLocaleString("en-US")
}) : /* @__PURE__ */ M(le, {}), bu = ({
  data: t = []
}) => {
  const n = lt(null), [e, r] = Y(Xi), i = Ja(n, t.length, e), o = zs(t, i);
  qi(n, t, o.scales, i);
  const a = Da(n, t, i, o, e.transition);
  return gu(n, r), /* @__PURE__ */ O(hu, {
    children: [t != null && t.length ? /* @__PURE__ */ M(cu, {
      svgRef: n,
      controls: e,
      setControls: r,
      visibleRange: i.visibleRange,
      length: t.length
    }) : /* @__PURE__ */ M(du, {
      children: /* @__PURE__ */ M(Qe, {})
    }), /* @__PURE__ */ M(fu, {
      ref: n,
      children: /* @__PURE__ */ M(lu, {
        ...i.sizes
      })
    }), /* @__PURE__ */ M(ou, {
      ...a
    }), t.length && /* @__PURE__ */ M(mu, {
      value: t[t.length - 1].close,
      x: i.sizes.width,
      y: o.scales.yScale(t[t.length - 1].close)
    })]
  });
};
export {
  bu as default,
  ts as formatDate,
  _u as generateCandlestickData,
  Gn as movePrevValue
};
