(function(t,e){typeof exports=="object"&&typeof module<"u"?module.exports=e(require("styled-components"),require("react/jsx-runtime")):typeof define=="function"&&define.amd?define(["styled-components","react/jsx-runtime"],e):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/loader"]=e(t.styled,t.jsxRuntime))})(this,function(t,e){"use strict";const n=(i=>i&&typeof i=="object"&&"default"in i?i:{default:i})(t),d=t.keyframes`
  to {
    rotate: 360deg;
  }
`,s=t.keyframes`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`,l=n.default.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`,r=n.default.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${d} 2s linear infinite;
  margin: 2px;
`,a=n.default.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,o=n.default.div(({delay:i})=>t.css`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${s} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${i?"animation-delay: 0.3s;":""}
  `);return()=>e.jsx(l,{title:"Loading...","data-selector":"pi-lib-loader",children:e.jsxs(r,{children:[e.jsxs(a,{children:[e.jsx(o,{delay:!0}),e.jsx(o,{})]}),e.jsxs(a,{children:[e.jsx(o,{}),e.jsx(o,{delay:!0})]})]})})});
