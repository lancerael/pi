import e from "react";
import i, { css as d, keyframes as s } from "styled-components";
const r = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, h = "font-family: serif;", g = i.button(
  ({ status: t, minWidth: n, margin: a }) => d`
    ${h}
    border: 1px solid ${r[t]};
    color: ${r[t]};
    background-color: white;
    border-radius: 6px;
    min-width: ${n};
    padding: 8px;
    margin: ${a};
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
), b = ({
  children: t,
  status: n = "default",
  dataSelector: a = "pi-lib-button",
  minWidth: u = "220px",
  margin: m = "10px",
  ...x
}) => /* @__PURE__ */ e.createElement(g, {
  status: n,
  ...x,
  minWidth: u,
  margin: m,
  "data-selector": a
}, t), p = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, c = s`
  to {
    rotate: 360deg;
  }
`, f = s`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, y = i.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, $ = i.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${c} 2s linear infinite;
  margin: 2px;
`, o = i.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, l = i.div(
  ({ delay: t }) => d`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${p.pending};
    animation: ${f} 0.3s linear alternate infinite;

    ${t ? "animation-delay: 0.2s;" : ""}
  `
);
i.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${p.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${c} 2s linear infinite;
`;
const w = () => /* @__PURE__ */ e.createElement(y, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement(l, {
  delay: !0
}), /* @__PURE__ */ e.createElement(l, null)), /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement(l, null), /* @__PURE__ */ e.createElement(l, {
  delay: !0
})))), E = i.div``, W = ({
  isLoading: t,
  buttonProps: n,
  children: a
}) => /* @__PURE__ */ e.createElement(E, null, /* @__PURE__ */ e.createElement(b, {
  status: t ? "pending" : "default",
  ...n
}, t ? /* @__PURE__ */ e.createElement(w, null) : a));
export {
  W as default
};
