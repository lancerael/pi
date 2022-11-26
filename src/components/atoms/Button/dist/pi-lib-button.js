import a from "react";
import c, { css as l } from "styled-components";
const t = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, s = "font-family: serif;", i = c.button(
  ({ status: o, minWidth: r }) => l`
    ${s}
    border: 2px solid ${t[o]};
    color: ${t[o]};
    background-color: white;
    border-radius: 15px;
    min-width: ${r};
    padding: 10px;
    margin: 15px;
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `
), b = ({
  children: o,
  status: r = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: d = "220px",
  ...n
}) => /* @__PURE__ */ a.createElement(i, {
  status: r,
  ...n,
  minWidth: d,
  "data-selector": e
}, o);
export {
  b as default
};
