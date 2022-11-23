import t from "react";
import r, { css as l, keyframes as d } from "styled-components";
const i = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, s = "font-family: serif;", c = r.button(({ status: e }) => l`
  ${s}
  border: 2px solid ${i[e]};
  color:  ${i[e]};
  background-color: white;
  border-radius: 15px;
  width: 220px;
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  &:disabled {
    color: grey;
    cursor: default;
  }
`), p = ({ children: e, status: n = "default", dataSelector: a = "pi-lib-button", ...o }) => /* @__PURE__ */ t.createElement(c, {
  status: n,
  ...o,
  "data-selector": a
}, e), u = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, b = d`
  to {
    transform: rotate(360deg);
  }
`, m = r.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`, x = r.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${u.pending};
  overflow: hidden;
  clip-path: polygon(-5px -5px, 50% -5px, 50% 50%, 100% 50%, 100% 100%, -5px 100%);
  animation: ${b} 2s linear infinite;
`, f = () => /* @__PURE__ */ t.createElement(m, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ t.createElement(x, null)), g = r.div``, v = ({ isLoading: e, children: n, buttonProps: a }) => /* @__PURE__ */ t.createElement(g, null, /* @__PURE__ */ t.createElement(p, {
  status: e ? "pending" : "default",
  ...a
}, e ? /* @__PURE__ */ t.createElement(f, null) : n));
export {
  v as default
};
