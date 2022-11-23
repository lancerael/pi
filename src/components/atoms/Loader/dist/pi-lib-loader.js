import e from "react";
import t, { keyframes as i } from "styled-components";
const o = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, r = i`
  to {
    transform: rotate(360deg);
  }
`, n = t.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`, a = t.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${o.pending};
  overflow: hidden;
  clip-path: polygon(-5px -5px, 50% -5px, 50% 50%, 100% 50%, 100% 100%, -5px 100%);
  animation: ${r} 2s linear infinite;
`, p = () => /* @__PURE__ */ e.createElement(n, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ e.createElement(a, null));
export {
  p as default
};
