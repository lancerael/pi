import i from "react";
import l, { css as a } from "styled-components";
const o = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, c = "font-family: serif;", p = l.button(
  ({ status: r, minWidth: t, margin: e }) => a`
    ${c}
    border: 1px solid ${o[r]};
    color: ${o[r]};
    background-color: white;
    border-radius: 6px;
    min-width: ${t};
    padding: 8px;
    margin: ${e};
    cursor: pointer;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
    &:hover {
      filter: brightness(85%);
    }
    &:disabled {
      color: grey;
      cursor: default;
      filter: brightness(95%);
    }
  `
), f = ({
  children: r,
  status: t = "default",
  dataSelector: e = "pi-lib-button",
  minWidth: d = "220px",
  margin: n = "10px",
  ...s
}) => /* @__PURE__ */ i.createElement(
  p,
  {
    status: t,
    ...s,
    minWidth: d,
    margin: n,
    "data-selector": e
  },
  r
);
export {
  f as default
};
