import e from "react";
import t, { keyframes as r } from "styled-components";
const o = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, i = r`
  to {
    transform: rotate(360deg);
  }
`, a = t.div`
  border-radius: 50%;
  border: 2px solid ${o.pending};
  width: 22px;
  height: 22px;
  margin: -8px 0 -8px 28px;
  display: inline-block;
  clip-path: polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 0 100%);
  animation: ${i} 1s linear infinite;
`, l = () => /* @__PURE__ */ e.createElement(a, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
});
export {
  l as default
};
