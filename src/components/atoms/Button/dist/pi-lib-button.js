import i from "react";
import l, { css as a } from "styled-components";
const o = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, c = "font-family: serif;", u = l.button(
  ({ status: r, minWidth: t, margin: e }) => a`
    ${c}
    border: 1px solid ${o[r]};
    color: ${o[r]};
    background-color: white;
    border-radius: 10px;
    min-width: ${t};
    padding: 10px;
    margin: ${e};
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
    &:hover {
      filter: brightness(85%);
    }
  `
), f = ({
  children: r,
  status: t = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: d = "220px",
  margin: n = "10px",
  ...s
}) => /* @__PURE__ */ i.createElement(u, {
  status: t,
  ...s,
  minWidth: d,
  margin: n,
  "data-selector": e
}, r);
export {
  f as default
};
