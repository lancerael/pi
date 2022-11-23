import r, { css as l, keyframes as c } from "styled-components";
import t from "react";
const s = r.div``, n = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, p = "font-family: serif;", u = r.button(({ status: e }) => l`
  ${p}
  border: 2px solid ${n[e]};
  color:  ${n[e]};
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
`), x = ({ children: e, status: a = "default", dataSelector: i = "pi-lib-button", ...d }) => /* @__PURE__ */ t.createElement(u, {
  status: a,
  ...d,
  "data-selector": i
}, e), b = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, m = c`
  to {
    transform: rotate(360deg);
  }
`, f = r.div`
  width: 14px;
  height: 14px;
  display: inline-block;
`, o = r.div(({ secondary: e }) => l`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 0px 2px ${b.pending};
  overflow: hidden;
  clip-path: polygon(-3px -3px, 50% -3px, 50% 23px, -3px 23px);
  animation: ${m} ${e ? "2" : "3"}s linear infinite;
`), g = () => /* @__PURE__ */ t.createElement(f, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ t.createElement(o, null), /* @__PURE__ */ t.createElement(o, {
  secondary: !0
})), E = ({ isLoading: e, children: a }) => /* @__PURE__ */ React.createElement(s, null, /* @__PURE__ */ React.createElement(x, null, e ? /* @__PURE__ */ React.createElement(g, null) : a));
export {
  E as default
};
