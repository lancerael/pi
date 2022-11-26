(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],t):(e=typeof globalThis<"u"?globalThis:e||self,e["@pi-lib/loader"]=t(e.React,e.styled))})(this,function(e,t){"use strict";const i=n=>n&&typeof n=="object"&&"default"in n?n:{default:n},o=i(e),d=i(t),r={default:"black",pending:"blue",error:"red",success:"green"},a=t.keyframes`
  to {
    transform: rotate(360deg);
  }
`,l=d.default.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`,s=d.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${r.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${a} 2s linear infinite;
`;return()=>o.default.createElement(l,{title:"Loading...","data-selector":"pi-lib-loader"},o.default.createElement(s,null))});
