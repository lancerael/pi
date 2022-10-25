import n from "react";
import s, { css as a } from "styled-components";
const r = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, c = "font-family: sans-serif;", l = s.button(({ status: o }) => a`
  ${c}
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
`), p = ({ children: o, status: t = "default", dataSelector: e = "pi-lib-button", ...d }) => /* @__PURE__ */ n.createElement(l, {
  status: t,
  ...d,
  "data-selector": e
}, o);
export {
  p as default
};
