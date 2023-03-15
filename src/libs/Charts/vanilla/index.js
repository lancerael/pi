import { rgb as F } from "d3-color";
import { min as L, max as H } from "d3-array";
import { select as S } from "d3-selection";
import { axisBottom as it, axisLeft as st } from "d3-axis";
import { scaleBand as rt, scaleLinear as nt } from "d3-scale";
import { easeLinear as ot } from "d3-ease";
import "d3-transition";
const at = (e, t) => e.length > t ? `${e.slice(0, t)}[...]` : e, y = (e = 0, t = 1e4, i) => {
  let s = Math.floor(Math.random() * (e - t - 1)) + t + 1;
  for (; s === i; )
    s = y(e, t);
  return s;
}, E = (e, t) => new Array(e).fill(null).map(t), w = (e = void 0) => e == null ? !1 : Boolean(e), B = (e, t = 15) => {
  let i = !1;
  return (...s) => {
    let r;
    return i || (r = e.apply(void 0, s), i = !0, setTimeout(() => {
      i = !1;
    }, t)), r;
  };
}, j = (e, t = "", i) => {
  const s = document.createElement(e);
  return s.className = t, i == null || i.appendChild(s), s;
}, I = (e) => e.replace(/( {2}|\r\n|\n|\r)/g, ""), ht = (e) => I(e.replace(/ /g, "")), lt = (e) => e.replace(/[^0-9a-z ]/gi, ""), ct = ([e, t, i], s = "light", r = 170) => {
  const o = (e * 299 + t * 587 + i * 114) / 1e3;
  return {
    light: o < r,
    dark: o > r
  }[s];
}, dt = () => y(0, 255), K = (e = "light", t = 170) => {
  const i = () => E(3, dt);
  let s;
  for (; s === void 0 || !ct(s, e, t); )
    s = i();
  return F(...s);
}, Jt = (e = 10) => E(e, () => K()), ut = (e) => e.darker(0.5), ft = (e, t = !0) => e.map(
  ({
    color: i = K().formatHex(),
    ...s
  }) => ({
    color: i,
    rgbColor: t && F(i),
    ...s
  })
), Qt = (e, t = 3, i = 50) => {
  if (e.length < t)
    throw new Error("Data set is too short to sample.");
  if (e.length === t)
    return e;
  const s = i > e.length, r = e.length - t, o = y(
    0,
    s ? r : e.length - i
  ), n = o + t, a = y(
    n,
    n + (s ? r : i - t)
  );
  return e.slice(o, a);
}, Zt = (e = y(3, 10), t = y(1, 4), i = y(1, 50), s = y(i, 200)) => ({
  label: "Random Chart Data",
  config: {
    axisLabels: ["Y Axis", "X Axis"],
    trim: !0,
    values: E(
      t,
      (r, o) => ({
        name: `Type ${Number(o) + 1}`
      })
    )
  },
  data: E(
    e,
    (r, o) => ({
      label: `Item ${Number(o) + 1}`,
      values: E(t, () => y(i, s))
    })
  )
}), te = () => ({
  label: "",
  config: {
    axisLabels: ["", ""],
    values: [],
    trim: !0
  },
  data: []
}), pt = (e, t) => e === void 0 ? t : t.map((i) => (i.values = e.values.map(({ key: s }, r) => {
  if (typeof s != "string" && Array.isArray(i.values))
    return i.values[r];
  const o = parseInt(i[s ?? ""]);
  return isNaN(o) ? 0 : o;
}), Array.isArray(e.axisKeys) && typeof i.label != "string" && (i.label = i[e.axisKeys[0]], typeof i.label != "string" && (i.label = "AXIS KEY MISMATCH")), i)), ee = (e, t) => {
  const i = document.createEvent("MouseEvents");
  return i.initEvent(t, !0, !0), e.dispatchEvent(i), i;
};
var P = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, i) {
    var s = -1;
    return t.some(function(r, o) {
      return r[0] === i ? (s = o, !0) : !1;
    }), s;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(i) {
        var s = e(this.__entries__, i), r = this.__entries__[s];
        return r && r[1];
      }, t.prototype.set = function(i, s) {
        var r = e(this.__entries__, i);
        ~r ? this.__entries__[r][1] = s : this.__entries__.push([i, s]);
      }, t.prototype.delete = function(i) {
        var s = this.__entries__, r = e(s, i);
        ~r && s.splice(r, 1);
      }, t.prototype.has = function(i) {
        return !!~e(this.__entries__, i);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(i, s) {
        s === void 0 && (s = null);
        for (var r = 0, o = this.__entries__; r < o.length; r++) {
          var n = o[r];
          i.call(s, n[1], n[0]);
        }
      }, t;
    }()
  );
}(), D = typeof window < "u" && typeof document < "u" && window.document === document, T = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), vt = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(T) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), mt = 2;
function bt(e, t) {
  var i = !1, s = !1, r = 0;
  function o() {
    i && (i = !1, e()), s && a();
  }
  function n() {
    vt(o);
  }
  function a() {
    var h = Date.now();
    if (i) {
      if (h - r < mt)
        return;
      s = !0;
    } else
      i = !0, s = !1, setTimeout(n, t);
    r = h;
  }
  return a;
}
var gt = 20, yt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], wt = typeof MutationObserver < "u", xt = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = bt(this.refresh.bind(this), gt);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var i = this.observers_, s = i.indexOf(t);
      ~s && i.splice(s, 1), !i.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(i) {
        return i.gatherActive(), i.hasActive();
      });
      return t.forEach(function(i) {
        return i.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !D || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), wt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !D || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var i = t.propertyName, s = i === void 0 ? "" : i, r = yt.some(function(o) {
        return !!~s.indexOf(o);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Y = function(e, t) {
  for (var i = 0, s = Object.keys(t); i < s.length; i++) {
    var r = s[i];
    Object.defineProperty(e, r, {
      value: t[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, _ = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || T;
}, X = R(0, 0, 0, 0);
function M(e) {
  return parseFloat(e) || 0;
}
function N(e) {
  for (var t = [], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i];
  return t.reduce(function(s, r) {
    var o = e["border-" + r + "-width"];
    return s + M(o);
  }, 0);
}
function _t(e) {
  for (var t = ["top", "right", "bottom", "left"], i = {}, s = 0, r = t; s < r.length; s++) {
    var o = r[s], n = e["padding-" + o];
    i[o] = M(n);
  }
  return i;
}
function Et(e) {
  var t = e.getBBox();
  return R(0, 0, t.width, t.height);
}
function Ot(e) {
  var t = e.clientWidth, i = e.clientHeight;
  if (!t && !i)
    return X;
  var s = _(e).getComputedStyle(e), r = _t(s), o = r.left + r.right, n = r.top + r.bottom, a = M(s.width), h = M(s.height);
  if (s.boxSizing === "border-box" && (Math.round(a + o) !== t && (a -= N(s, "left", "right") + o), Math.round(h + n) !== i && (h -= N(s, "top", "bottom") + n)), !St(e)) {
    var c = Math.round(a + o) - t, l = Math.round(h + n) - i;
    Math.abs(c) !== 1 && (a -= c), Math.abs(l) !== 1 && (h -= l);
  }
  return R(r.left, r.top, a, h);
}
var At = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof _(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof _(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function St(e) {
  return e === _(e).document.documentElement;
}
function Tt(e) {
  return D ? At(e) ? Et(e) : Ot(e) : X;
}
function Mt(e) {
  var t = e.x, i = e.y, s = e.width, r = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, n = Object.create(o.prototype);
  return Y(n, {
    x: t,
    y: i,
    width: s,
    height: r,
    top: i,
    right: t + s,
    bottom: r + i,
    left: t
  }), n;
}
function R(e, t, i, s) {
  return { x: e, y: t, width: i, height: s };
}
var Rt = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = R(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Tt(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), $t = (
  /** @class */
  function() {
    function e(t, i) {
      var s = Mt(i);
      Y(this, { target: t, contentRect: s });
    }
    return e;
  }()
), Ct = (
  /** @class */
  function() {
    function e(t, i, s) {
      if (this.activeObservations_ = [], this.observations_ = new P(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = i, this.callbackCtx_ = s;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof _(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(t) || (i.set(t, new Rt(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof _(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(t) && (i.delete(t), i.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(i) {
        i.isActive() && t.activeObservations_.push(i);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, i = this.activeObservations_.map(function(s) {
          return new $t(s.target, s.broadcastRect());
        });
        this.callback_.call(t, i, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), q = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new P(), U = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var i = xt.getInstance(), s = new Ct(t, i, this);
      q.set(this, s);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  U.prototype[e] = function() {
    var t;
    return (t = q.get(this))[e].apply(t, arguments);
  };
});
var Dt = function() {
  return typeof T.ResizeObserver < "u" ? T.ResizeObserver : U;
}();
const kt = {
  "pi-chart-text": "#A8D4FF",
  "pi-chart-background": "#000E1A"
}, zt = {
  "pi-chart-text": "#003A73",
  "pi-chart-background": "#F0F8FF"
}, k = { dark: kt, light: zt }, J = (e, t, i) => {
  const s = (o) => lt(ht(o));
  let r = document.querySelector(`[data-selector=${e}]`);
  r === null && (r = j("style", "", document.head), r.setAttribute("data-selector", e)), s(r.innerHTML).match(s(t)) === null && (r.innerHTML = I(
    `${w(i) ? "" : r.innerHTML} ${t}`
  ));
}, ie = (e, t) => k[e] = t, se = (e) => k[e], Wt = (e) => {
  let t = Object.entries(k[e]).map(([i, s]) => `--${i}: ${s};`).join("");
  return t = `:root { ${t} }`, J("pic-variables", t, !0), t;
}, z = (e, ...t) => {
  const i = e.map((s, r) => `${s}${t[r] ?? ""}`).join("");
  return J("pic-styles", i), i;
}, Q = (
  /* css */
  `
  border-radius: 5px;
  box-shadow: 3px 3px 6px -4px rgba(0, 0, 0, 0.45);
  color: var(--pi-chart-text);
  border: 1px solid var(--pi-chart-text);
  background-color: var(--pi-chart-background);
`
), Gt = () => {
  z`
    .pic-svg {
      ${Q}
      min-width: 512px;
    }

    .pic-title {
      position: absolute;
      width: 100%;
      text-align: center;
      margin: 8px 0;
      font-weight: bold;
      color: var(--text);
    }
  `;
};
class re {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param label label for chart
   * @param config configuration object
   * @param data the data to be displayed
   * @param containerElement optionally DOM node in place of ID
   * @param containerSelector selector to select DOM object
   * @param theme the selected theme for the chart
   */
  constructor({
    label: t,
    container: i,
    config: s,
    data: r,
    theme: o = "light"
  }) {
    this.padding = { l: 45, r: 5, t: 25, b: 85 }, this.dimensions = {
      left: 0,
      width: 0,
      top: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      resizeOffset: 0,
      padding: this.padding
    }, this.initialWidth = 0, this.configs = /* @__PURE__ */ new Map(), this.dataSets = /* @__PURE__ */ new Map(), this.scales = /* @__PURE__ */ new Map(), this.axes = /* @__PURE__ */ new Map(), this.keys = /* @__PURE__ */ new Map(), this.visuals = /* @__PURE__ */ new Map(), this.setContainer = (n) => {
      if (n !== null && w(n == null ? void 0 : n.nodeName))
        return n;
      throw new Error("No valid DOM element or selector provided for chart.");
    }, this.setConfig = (n, a = "default") => {
      if (!Array.isArray(n == null ? void 0 : n.values))
        throw new Error("No valid configuration provided for chart.");
      return n.values = ft(n.values), this.configs.set(a, n), this.draw(), this;
    }, this.setData = (n, a = "default", h = "default", c = !0) => {
      const l = this.configs.get(h);
      if (!Array.isArray(n))
        throw new Error("No valid data provided for chart.");
      const u = Array.isArray(l == null ? void 0 : l.values) ? pt(l, n) : n;
      let d = c ? Number(L(u, (b) => L(b.values))) : 0, f = Number(H(u, (b) => H(b.values)));
      const m = Math.ceil(f / 15);
      if (c) {
        const b = d > m ? d - m : 0;
        d = d > 0 ? b : d, d = d < 0 ? d - m : d, f += m;
      }
      return this.dataSets.set(a, { data: u, minValue: d, maxValue: f }), this.draw(), this;
    }, this.addScale = (n = { x: "band", y: "linear" }, a = "default", h = "default") => {
      if (this.dataSets.get(h) === void 0)
        throw new Error("No valid config provided for scale.");
      return this.scales.set(
        a,
        Object.entries(n).reduce(
          (l, [u, d]) => ({
            ...l,
            [u]: new Ft({
              scaleType: d,
              dataSet: this.dataSets.get(h),
              dimensions: this.dimensions
            })
          }),
          {}
        )
      ), this.draw(), this;
    }, this.addAxis = (n = "default", a = "default", h = "default") => {
      var l;
      const c = this.scales.get(a);
      if (c === void 0)
        throw new Error("No valid config provided for axis.");
      return this.axes.set(
        n,
        new Vt({
          d3Svg: this.d3Svg,
          tooltip: this.tooltip,
          dimensions: this.dimensions,
          truncate: 10,
          axisLabels: ((l = this.configs.get(h)) == null ? void 0 : l.axisLabels) ?? ["", ""],
          scales: c
        })
      ), this.draw(), this;
    }, this.addKey = (n = "default", a = "default") => {
      const h = this.configs.get(a);
      if (h === void 0)
        throw new Error("No valid config provided for key.");
      return this.keys.set(
        n,
        new Bt({
          d3Svg: this.d3Svg,
          values: (h == null ? void 0 : h.values) ?? [],
          dimensions: this.dimensions
        })
      ), this.draw(), this;
    }, this.addVisual = (n = "default", a = "default", h = "default", c = "default", l = "bar", u = 1e3) => {
      const d = this.configs.get(a), f = this.dataSets.get(h), m = this.scales.get(c);
      if ([d, f, m].includes(void 0))
        throw new Error("No valid config provided for visual.");
      const O = {
        d3Svg: this.d3Svg,
        config: d,
        dataSet: f,
        scales: m,
        transitionTime: u,
        tooltip: this.tooltip,
        dimensions: this.dimensions
      };
      switch (l) {
        default:
          setTimeout(() => this.visuals.set(n, new jt(O)));
      }
      return setTimeout(this.draw, u), this;
    }, this.deleteMapItem = (n, a) => {
      var c;
      if (((c = this[n]) == null ? void 0 : c.get(a)) === void 0)
        throw new Error(
          `Failed attempting to delete "${a}" from "this.${n}".`
        );
      return this[n].delete(a), this.draw(), this;
    }, this.addDefaults = () => this.addScale().addAxis().addKey().addVisual(), this.updateDimensions = () => {
      const { left: n, width: a, top: h, height: c } = this.container.getBoundingClientRect(), { l, r: u, t: d, b: f } = this.padding;
      this.dimensions.left = n, this.dimensions.width = a, this.dimensions.top = h, this.dimensions.height = c, this.dimensions.innerWidth = a - l - u, this.dimensions.innerHeight = c - d - f, this.dimensions.resizeOffset = a - this.initialWidth, this.dimensions.padding = this.padding;
    }, this.renderChart = () => {
      if (this.title !== void 0 && w(this.label))
        this.title.text(this.label);
      else
        throw new Error("Unable to render the chart.");
    }, this.draw = () => {
      this.updateDimensions(), this.renderChart(), this.scales.forEach(
        (n) => Object.values(n).forEach((a) => a.render())
      ), this.axes.forEach((n) => n.render()), this.keys.forEach((n) => n.render()), this.visuals.forEach((n) => n.render({ reset: !0 }));
    }, this.redraw = B(this.draw), this.resizeWatcher = new Dt(this.redraw), this.label = t, this.container = this.setContainer(
      typeof i == "string" ? document.querySelector(i) : i
    ), this.title = S(this.container).append("div").attr("class", "pic-title"), this.d3Svg = S(this.container).append("svg").attr("class", "pic-svg").attr("width", "100%").attr("height", "100%"), this.resizeWatcher.observe(this.container), this.tooltip = new Ht(this.container), this.draw(), this.initialWidth = this.dimensions.width, s !== void 0 && this.setConfig(s), r !== void 0 && this.setData(r), Wt(o), Gt();
  }
}
const Lt = () => {
  z`
    .pic-tooltip {
      transition: opacity 0.5s;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      padding: 8px;
      ${Q}
    }
  `;
};
class Ht {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param container DOM object
   * @throws {Error} invalid DOM element
   */
  constructor(t) {
    if (this.ping = (i, s) => {
      const r = typeof i == "string" ? i : `<strong>${i[0]}</strong><br>${i[1]}: <em>${i[2]}</em>`;
      this.tooltip.innerHTML = r, this.tooltip.style.visibility = "visible", this.tooltip.style.opacity = "0.9", this.move(s), this.cleanup(), this.showTimeout = setTimeout(() => {
        this.hide();
      }, 5e3);
    }, this.move = B((i) => {
      const { left: r, width: o, top: n, height: a } = this.container.getBoundingClientRect(), { width: h, height: c } = this.tooltip.getBoundingClientRect(), { clientX: l, clientY: u } = i, d = o + r - l < h + 10, f = a + n - u < c + 10;
      this.tooltip.style.left = `${l - r + (d ? -h - 10 : 10)}px`, this.tooltip.style.top = `${u - n + (f ? -c - 10 : 10)}px`;
    }), this.hide = () => {
      this.cleanup(), this.tooltip.style.opacity = "0", this.hideTimeout = setTimeout(() => {
        this.tooltip.style.visibility = "hidden";
      }, 500);
    }, this.cleanup = () => {
      this.showTimeout !== void 0 && clearTimeout(this.showTimeout), this.hideTimeout !== void 0 && clearTimeout(this.hideTimeout);
    }, !w(t.nodeName))
      throw new Error("The tooltip has no valid container element.");
    this.container = t, this.tooltip = j("div", "pic-tooltip", t), Lt();
  }
}
const Nt = () => {
  z`
    .pic-axis {
      font-size: 0.8em;
    }

    .pic-line {
      opacity: 0.2;
    }
  `;
};
class Vt {
  /**
   * Constructor function which sets up the local object.
   *
   * @method constructor
   * @param d3Svg containing d3 SVG
   * @param tooltip tooltip div
   * @param dimensions chart dimensions
   * @param truncate text truncate length
   * @param axisLabels chart axis labels
   * @param scales chart axis scales
   * @throws {Error} invalid parameters
   */
  constructor({
    d3Svg: t,
    tooltip: i,
    dimensions: s,
    truncate: r = 2,
    axisLabels: o,
    scales: n
  }) {
    if (!w(t))
      throw new Error("No SVG provided to Axis constructor.");
    this.dimensions = s, this.d3Svg = t, this.tooltip = i, this.truncate = r, this.axisLabels = o ?? ["", ""], this.scales = n, this.axisGroupX = t.append("g").attr("class", "pic-axis pic-axis-x"), this.axisGroupY = t.append("g").attr("class", "pic-axis pic-axis-y"), this.render(), Nt();
  }
  /**
   * Master render to call all rendering methods
   *
   * @method render
   */
  render(t) {
    t !== void 0 && (this.dimensions = t), this.dimensions !== void 0 && (this.renderAxisX(), this.renderAxisY(), this.renderLabels());
  }
  /**
   * Render the x axis
   *
   * @method renderAxisX
   */
  renderAxisX() {
    const { height: t, padding: i } = this.dimensions;
    this.scales.x !== void 0 && this.axisGroupX.call(it(this.scales.x.axisScale)).attr("transform", `translate(${i.l},${t - i.b})`).selectAll("text").attr("x", -5).attr("y", 6).attr("transform", "rotate(310)").attr("class", "pic-axis-label pic-axis-label-x").text((s) => at(s, this.truncate)).style("text-anchor", "end").on("mousemove", (s, r) => {
      r.length > this.truncate && this.tooltip.ping(`<strong>${r}</strong>`, s);
    }).on("mouseout", this.tooltip.hide);
  }
  /**
   * Render the y axis
   *
   * @method renderAxisY
   */
  renderAxisY() {
    const { innerWidth: t, padding: i } = this.dimensions;
    this.scales.y !== void 0 && this.axisGroupY.call(st(this.scales.y.axisScale)).attr("transform", `translate(${i.l},0)`).selectAll(".pic-axis-y .tick line").attr("class", "pic-line").attr("x2", () => t);
  }
  /**
   * Render the labels
   *
   * @method renderLabels
   */
  renderLabels() {
    var r, o, n, a;
    const { height: t, width: i, padding: s } = this.dimensions;
    this.d3Svg.selectAll("text.pic-label").remove(), w((r = this.axisLabels) == null ? void 0 : r[0]) && this.d3Svg.append("text").attr("class", "pic-label pic-label-x").attr("x", t / -2 + s.b / 2).attr("y", 20).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text(((o = this.axisLabels) == null ? void 0 : o[0]) ?? ""), w((n = this.axisLabels) == null ? void 0 : n[1]) && this.d3Svg.append("text").attr("class", "pic-label pic-label-y").attr("x", (i + s.l + s.r) / 2).attr("y", t - s.b / 3).attr("text-anchor", "middle").text(((a = this.axisLabels) == null ? void 0 : a[1]) ?? "");
  }
}
const C = {
  band: () => rt().padding(0.2),
  linear: () => nt()
};
class Ft {
  constructor({
    scaleType: t = "band",
    dataSet: i,
    dimensions: s
  }) {
    var r;
    this.setData = (o) => {
      if (o === void 0)
        throw new Error("No data to set!");
      return this.dataSet = o, this;
    }, this.render = () => {
      const { padding: o, height: n, innerWidth: a } = this.dimensions;
      if (this.dataSet === void 0)
        throw new Error("No data to render scale!");
      if (this.scaleType === void 0 || !["band", "linear"].includes(this.scaleType))
        throw new Error("Unknown chart type!");
      const h = {
        band: [this.dataSet.data.map((c) => c.label), [0, a]],
        linear: [
          [this.dataSet.minValue, this.dataSet.maxValue],
          [n - o.b, o.t]
        ]
      }[this.scaleType];
      this.axisScale.domain(h[0]), this.axisScale.range(h[1]);
    }, this.scaleType = t, this.axisScale = (r = C[t]) == null ? void 0 : r.call(C), this.dimensions = s, this.dataSet = i, this.dataSet !== void 0 && this.render();
  }
}
const V = (e, t = 0) => e.slice(0, t).reduce((i, { labelWidth: s = 0 }) => i + s, 0);
class Bt {
  /**
   * Constructor function that sets up the local object.
   *
   * @method constructor
   * @param {Object} d3Svg A d3 wrapped container element
   * @param {Array} values the config for the data to be displayed
   * @param {Integer} dimensions the chart dimensions
   */
  constructor({ d3Svg: t, values: i, dimensions: s }) {
    if (![t, i, s].every(w))
      throw new Error("Incorrect parameters provided to Key constructor.");
    this.d3Svg = t, this.values = [...i], this.dimensions = s, this.render();
  }
  /**
   * Render the key showing the labels for the color values
   *
   * @method render
   * @chainable
   */
  render() {
    const { innerWidth: t, height: i, padding: s } = this.dimensions;
    let r = 0;
    const o = t / 2 + s.l, n = i - 20;
    this.d3Svg.selectAll("g.pic-key-group").remove();
    const a = this.d3Svg.append("g").attr("class", "pic-key-group");
    a.selectAll("text.pic-key-label").data(this.values).enter().append("text").text(({ name: l }) => l).each((l, u, d) => {
      const f = d[u].getBoundingClientRect().width + 22;
      this.values[u].labelWidth = f, r += f - 2;
    }).attr("class", "pic-key-label").attr("x", (l, u) => V(this.values, u)).attr("y", 10).attr("width", 12).attr("height", 12).attr("font-family", "sans-serif").attr("font-size", "12px").attr("fill", "#222222"), a.selectAll("rect.pic-key").data(this.values).enter().append("rect").attr("class", "pic-key").attr("fill", ({ color: l }) => l).attr("x", (l, u) => V(this.values, u) - 16).attr("y", 0).attr("width", 12).attr("height", 12), r = o - r / 2, a.attr("transform", `translate(${r},${n})`);
  }
}
class jt {
  /**
   * Optional callback for clicking on the chart
   *
   * @property config
   */
  // clickCallback: (e: MouseEvent, d: TableItem) => void
  /**
   * Constructor used to set chart type
   *
   * @method constructor
   */
  constructor({
    d3Svg: t,
    config: i,
    dataSet: s,
    scales: r,
    tooltip: o,
    dimensions: n,
    transitionTime: a
  }) {
    if (this.bars = [], this.render = ({
      reset: h = !1,
      transition: c = !1
    } = {}) => {
      if (this.scales.x === void 0 || this.scales.y === void 0)
        return;
      const { data: l, minValue: u, maxValue: d } = this.dataSet, { values: f } = this.config, { innerHeight: m, padding: b } = this.dimensions, O = this.scales.x.axisScale, W = this.scales.y.axisScale, G = O.bandwidth() / f.length, Z = c ? this.transitionTime : 0;
      h && (this.bars.forEach((x, $) => {
        x = this.chartGroup.selectAll(`rect.pic-bars-${$}`).data([]), x.exit().remove(), x = void 0;
      }), this.bars = []), f.forEach(({ rgbColor: x, name: $ }, v) => {
        const tt = G * v;
        this.bars[v] === void 0 && (this.bars[v] = this.chartGroup.selectAll(`rect.pic-bars-${v}`).data(l), this.bars[v].enter().append("rect").on("mousemove", (p, g) => {
          this.tooltip.ping([g.label, $, String(g.values[v])], p);
        }).on("mouseover", ({ target: p }) => {
          S(p).attr(
            "fill",
            ut(x).formatHex()
          );
        }).on("mouseout", ({ target: p }) => {
          this.tooltip.hide(), S(p).attr(
            "fill",
            x.formatHex()
          );
        }).attr("class", `pic-bars pic-bars-${v}`).attr("fill", x.formatHex()).attr("y", m + b.t).attr("height", 0));
        let A = this.chartGroup.selectAll(`rect.pic-bars-${v}`).data(l).attr("x", (p) => Number(O(p.label)) + tt).attr("width", G);
        typeof A.transition == "function" && (A = A.transition().ease(ot).duration(Z)), A.attr("y", (p) => {
          let g = p.values[v];
          return g = g < 0 ? Math.abs(g) : 0, W(p.values[v] + g);
        }).attr("height", (p) => {
          const g = u < 0 ? Math.abs(d) : 0, et = Math.abs(p.values[v]) - g;
          return m - W(et) + b.t;
        });
      });
    }, i === void 0 || s === void 0 || r === void 0)
      throw new Error("Table is incorrectly initialised.");
    this.config = i, this.dataSet = s, this.scales = r, this.tooltip = o, this.dimensions = n, this.transitionTime = a, this.chartGroup = t.append("g").attr("class", "pic-bars-group").attr("transform", `translate(${n.padding.l}, 0)`), this.render({ transition: !0 });
  }
}
export {
  Vt as Axis,
  jt as Bars,
  re as Chart,
  Bt as Key,
  Ft as Scale,
  Ht as Tooltip,
  ft as addColorsToConfig,
  J as addStyleToDom,
  ie as addTheme,
  Q as box,
  ct as colorFilter,
  ht as compress,
  j as createNode,
  z as css,
  ut as darkerColor,
  ee as dispatchEvent,
  te as emptyTable,
  I as flatten,
  se as getTheme,
  E as newArray,
  Wt as publishTheme,
  dt as random256,
  K as randomColor,
  Zt as randomData,
  y as randomNumber,
  Jt as randomPalette,
  lt as sanitise,
  Qt as sliceSampleData,
  B as throttle,
  V as totalMargin,
  pt as transformDataKeys,
  at as truncateString,
  w as truthy
};
