import n from "react";
import a, { css as c } from "styled-components";
const r = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, l = "font-family: serif;", s = a.button(({ status: o }) => c`
  ${l}
  border: 2px solid ${r[o]};
  color:  ${r[o]};
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
`), p = ({ children: o, status: t = "default", dataSelector: e = "pi-lib-button", ...d }) => /* @__PURE__ */ n.createElement(s, {
  status: t,
  ...d,
  "data-selector": e
}, o);
export {
  p as default
};
