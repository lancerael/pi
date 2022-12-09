(function(i,e){typeof exports=="object"&&typeof module<"u"?module.exports=e(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],e):(i=typeof globalThis<"u"?globalThis:i||self,i["@pi-lib/loader"]=e(i.React,i.styled))})(this,function(i,e){"use strict";const d=n=>n&&typeof n=="object"&&"default"in n?n:{default:n},t=d(i),a=d(e),o={default:"black",pending:"blue",error:"red",success:"green"},r=e.keyframes`
  to {
    rotate: 360deg;
  }
`,s=e.keyframes`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`,u=a.default.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`,p=a.default.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${r} 2s linear infinite;
  margin: 2px;
`,c=a.default.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,l=a.default.div(({delay:n})=>e.css`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${o.pending};
    animation: ${s} 0.3s linear alternate infinite;

    ${n?"animation-delay: 0.2s;":""}
  `);return a.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${o.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${r} 2s linear infinite;
`,()=>t.default.createElement(u,{title:"Loading...","data-selector":"pi-lib-loader"},t.default.createElement(p,null,t.default.createElement(c,null,t.default.createElement(l,{delay:!0}),t.default.createElement(l,null)),t.default.createElement(c,null,t.default.createElement(l,null),t.default.createElement(l,{delay:!0}))))});
