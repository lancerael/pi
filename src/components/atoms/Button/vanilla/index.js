import { jsx as n } from "react/jsx-runtime";
import s, { css as i } from "styled-components";
import { box as a } from "@pi-lib/styles";
const c = {
  default: "#444444",
  pending: "blue",
  error: "red",
  success: "green"
}, u = s.button(
  ({ status: o, minWidth: r, margin: t }) => i`
    ${a({ color: o === "default" ? "" : c[o] })}
    min-width: ${r};
    margin: ${t};
    cursor: pointer;
    &:hover:not([disabled]) {
      filter: brightness(115%);
    }
    &:disabled {
      background-color: var(--border);
      color: var(--textSoft);
      cursor: default;
    }
  `
), m = ({
  children: o,
  status: r = "default",
  dataSelector: t = "pi-lib-button",
  minWidth: e = "220px",
  margin: d = "10px",
  ...l
}) => /* @__PURE__ */ n(
  u,
  {
    status: r,
    ...l,
    minWidth: e,
    margin: d,
    "data-selector": t,
    children: o
  }
);
export {
  m as default
};
