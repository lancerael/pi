import e from "react";
import o, { keyframes as r, css as n } from "styled-components";
const a = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, d = r`
  to {
    transform: rotate(360deg);
  }
`, l = o.div`
  width: 14px;
  height: 14px;
  display: inline-block;
`, t = o.div(({ secondary: i }) => n`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 0px 2px ${a.pending};
  overflow: hidden;
  clip-path: polygon(-3px -3px, 50% -3px, 50% 23px, -3px 23px);
  animation: ${d} ${i ? "2" : "3"}s linear infinite;
`), c = () => /* @__PURE__ */ e.createElement(l, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ e.createElement(t, null), /* @__PURE__ */ e.createElement(t, {
  secondary: !0
}));
export {
  c as default
};
