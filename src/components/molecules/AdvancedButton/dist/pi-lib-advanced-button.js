import t from "react";
import r, { css as l, keyframes as s } from "styled-components";
const a = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, c = "font-family: serif;", p = r.button(
  ({ status: e, minWidth: i }) => l`
    ${c}
    border: 2px solid ${a[e]};
    color: ${a[e]};
    background-color: white;
    border-radius: 15px;
    min-width: ${i};
    padding: 10px;
    margin: 15px;
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
  `
), u = ({
  children: e,
  status: i = "default",
  dataSelector: n = "pi-lib-button",
  minWidth: o = "220px",
  ...d
}) => /* @__PURE__ */ t.createElement(p, {
  status: i,
  ...d,
  minWidth: o,
  "data-selector": n
}, e), m = {
  default: "black",
  pending: "blue",
  error: "red",
  success: "green"
}, b = s`
  to {
    transform: rotate(360deg);
  }
`, h = r.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`, x = r.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${m.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${b} 2s linear infinite;
`, f = () => /* @__PURE__ */ t.createElement(h, {
  title: "Loading...",
  "data-selector": "pi-lib-loader"
}, /* @__PURE__ */ t.createElement(x, null)), g = r.div``, w = ({
  isLoading: e,
  children: i,
  buttonProps: n
}) => /* @__PURE__ */ t.createElement(g, null, /* @__PURE__ */ t.createElement(u, {
  status: e ? "pending" : "default",
  ...n
}, e ? /* @__PURE__ */ t.createElement(f, null) : i));
export {
  w as default
};
