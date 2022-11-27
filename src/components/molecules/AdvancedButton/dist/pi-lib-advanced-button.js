import t from "react";
import n, { css as s, keyframes as c } from "styled-components";
const a = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, p = "font-family: serif;", u = n.button(
  ({ status: e, minWidth: i, margin: r }) => s`
    ${p}
    border: 2px solid ${a[e]};
    color: ${a[e]};
    background-color: white;
    border-radius: 15px;
    min-width: ${i};
    padding: 10px;
    margin: ${r};
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `
), m = ({
  children: e,
  status: i = "default",
  dataSelector: r = "pi-lib-button",
  minWidth: o = "220px",
  margin: d = "10px",
  ...l
}) => /* @__PURE__ */ t.createElement(u, {
  status: i,
  ...l,
  minWidth: o,
  margin: d,
  "data-selector": r
}, e), g = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, h = c`
  to {
    transform: rotate(360deg);
  }
`, b = n.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`, f = n.div`
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
`, x = () => /* @__PURE__ */ t.createElement(b, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ t.createElement(f, null)), $ = n.div``, y = ({
  isLoading: e,
  children: i,
  buttonProps: r
}) => /* @__PURE__ */ t.createElement($, null, /* @__PURE__ */ t.createElement(m, {
  status: e ? "pending" : "default",
  ...r
}, e ? /* @__PURE__ */ t.createElement(x, null) : i));
export {
  y as default
};
