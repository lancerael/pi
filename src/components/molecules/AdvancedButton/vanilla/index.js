import i, { css as l, keyframes as s } from "styled-components";
import { box as h } from "@pi-lib/styles";
import { jsx as t, jsxs as a } from "react/jsx-runtime";
const x = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, f = i.button(
  ({ status: e, minWidth: n, margin: o }) => l`
    ${h({ color: e === "default" ? "" : x[e] })}
    min-width: ${n};
    margin: ${o};
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
), b = ({
  children: e,
  status: n = "default",
  dataSelector: o = "pi-lib-button",
  minWidth: c = "220px",
  margin: p = "10px",
  ...u
}) => /* @__PURE__ */ t(f, {
  status: n,
  ...u,
  minWidth: c,
  margin: p,
  "data-selector": o,
  children: e
}), y = s`
  to {
    rotate: 360deg;
  }
`, g = s`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`, m = i.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`, v = i.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${y} 2s linear infinite;
  margin: 2px;
`, d = i.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, r = i.div(
  ({ delay: e }) => l`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${g} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${e ? "animation-delay: 0.3s;" : ""}
  `
), S = () => /* @__PURE__ */ t(m, {
  title: "Loading...",
  "data-selector": "pi-lib-loader",
  children: /* @__PURE__ */ a(v, {
    children: [/* @__PURE__ */ a(d, {
      children: [/* @__PURE__ */ t(r, {
        delay: !0
      }), /* @__PURE__ */ t(r, {})]
    }), /* @__PURE__ */ a(d, {
      children: [/* @__PURE__ */ t(r, {}), /* @__PURE__ */ t(r, {
        delay: !0
      })]
    })]
  })
}), w = i.div``, B = ({
  isLoading: e,
  buttonProps: n,
  children: o
}) => /* @__PURE__ */ t(w, {
  children: /* @__PURE__ */ t(b, {
    status: e ? "pending" : "default",
    ...n,
    children: e ? /* @__PURE__ */ t(S, {}) : o
  })
});
export {
  B as default
};
