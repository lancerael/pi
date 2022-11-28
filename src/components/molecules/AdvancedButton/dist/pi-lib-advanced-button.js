import t from "react";
import n, { css as s, keyframes as p } from "styled-components";
const o = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, c = "font-family: serif;", u = n.button(
  ({ status: e, minWidth: r, margin: i }) => s`
    ${c}
    border: 1px solid ${o[e]};
    color: ${o[e]};
    background-color: white;
    border-radius: 10px;
    min-width: ${r};
    padding: 10px;
    margin: ${i};
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
), m = ({
  children: e,
  status: r = "default",
  dataSelector: i = "pi-lib-button",
  minWidth: a = "220px",
  margin: d = "10px",
  ...l
}) => /* @__PURE__ */ t.createElement(u, {
  status: r,
  ...l,
  minWidth: a,
  margin: d,
  "data-selector": i
}, e), g = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, h = p`
  to {
    transform: rotate(360deg);
  }
`, x = n.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`, b = n.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${g.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${h} 2s linear infinite;
`, f = () => /* @__PURE__ */ t.createElement(x, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ t.createElement(b, null)), $ = n.div``, y = ({
  isLoading: e,
  children: r,
  buttonProps: i
}) => /* @__PURE__ */ t.createElement($, null, /* @__PURE__ */ t.createElement(m, {
  status: e ? "pending" : "default",
  ...i
}, e ? /* @__PURE__ */ t.createElement(f, null) : r));
export {
  y as default
};
