import e, { css as l, keyframes as s } from "styled-components";
import { box as u } from "@pi-lib/styles";
import { jsx as t, jsxs as d } from "react/jsx-runtime";
const m = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, x = e.button(
  ({ status: i, minWidth: n, margin: a }) => l`
    ${u({ color: i === "default" ? "" : m[i] })}
    min-width: ${n};
    margin: ${a};
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
), f = ({
  children: i,
  status: n = "default",
  dataSelector: a = "pi-lib-button",
  minWidth: c = "220px",
  margin: p = "10px",
  ...h
}) => /* @__PURE__ */ t(x, {
  status: n,
  ...h,
  minWidth: c,
  margin: p,
  "data-selector": a,
  children: i
}), g = s`
  to {
    rotate: 360deg;
  }
`, b = s`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, y = e.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`, v = e.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${g} 2s linear infinite;
  margin: 2px;
`, o = e.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, r = e.div(
  ({ delay: i }) => l`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${b} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${i ? "animation-delay: 0.3s;" : ""}
  `
), w = () => /* @__PURE__ */ t(y, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ d(v, {
    children: [/* @__PURE__ */ d(o, {
      children: [/* @__PURE__ */ t(r, {
        delay: !0
      }), /* @__PURE__ */ t(r, {})]
    }), /* @__PURE__ */ d(o, {
      children: [/* @__PURE__ */ t(r, {}), /* @__PURE__ */ t(r, {
        delay: !0
      })]
    })]
  })
}), $ = e.div``, W = ({
  isLoading: i,
  buttonProps: n,
  children: a
}) => /* @__PURE__ */ t($, {
  children: /* @__PURE__ */ t(f, {
    status: i ? "pending" : "default",
    ...n,
    children: i ? /* @__PURE__ */ t(w, {}) : a
  })
});
export {
  W as default
};
