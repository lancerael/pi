import e from "react";
import t, { keyframes as l, css as d } from "styled-components";
const a = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, o = l`
  to {
    rotate: 360deg;
  }
`, c = l`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`, p = t.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`, s = t.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${o} 2s linear infinite;
  margin: 2px;
`, n = t.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`, i = t.div(
  ({ delay: r }) => d`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${a.pending};
    animation: ${c} 0.3s linear alternate infinite;

    ${r ? "animation-delay: 0.2s;" : ""}
  `
);
t.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${a.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${o} 2s linear infinite;
`;
const x = () => /* @__PURE__ */ e.createElement(p, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ e.createElement(s, null, /* @__PURE__ */ e.createElement(n, null, /* @__PURE__ */ e.createElement(i, {
  delay: !0
}), /* @__PURE__ */ e.createElement(i, null)), /* @__PURE__ */ e.createElement(n, null, /* @__PURE__ */ e.createElement(i, null), /* @__PURE__ */ e.createElement(i, {
  delay: !0
}))));
export {
  x as default
};
