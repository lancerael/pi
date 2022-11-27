import c from "react";
import l, { css as s } from "styled-components";
const e = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, i = "font-family: serif;", u = l.button(
  ({ status: o, minWidth: r, margin: t }) => s`
    ${i}
    border: 2px solid ${e[o]};
    color: ${e[o]};
    background-color: white;
    border-radius: 15px;
    min-width: ${r};
    padding: 10px;
    margin: ${t};
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `
), f = ({
  children: o,
  status: r = "default",
  dataSelector: t = "pi-lib-button",
  minWidth: d = "220px",
  margin: n = "10px",
  ...a
}) => /* @__PURE__ */ c.createElement(u, {
  status: r,
  ...a,
  minWidth: d,
  margin: n,
  "data-selector": t
}, o);
export {
  f as default
};
