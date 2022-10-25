(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],t):(e=typeof globalThis<"u"?globalThis:e||self,e["@pi-lib/loader"]=t(e.React,e.styled))})(this,function(e,t){"use strict";const o=n=>n&&typeof n=="object"&&"default"in n?n:{default:n},i=o(e),d=o(t),a={default:"black",pending:"blue",error:"red",success:"green"},l=t.keyframes`
  to {
    transform: rotate(360deg);
  }
`,s=d.default.div`
  width: 14px;
  height: 14px;
  display: inline-block;
`,r=d.default.div(({secondary:n})=>t.css`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 0px 2px ${a.pending};
  overflow: hidden;
  clip-path: polygon(-3px -3px, 50% -3px, 50% 23px, -3px 23px);
  animation: ${l} ${n?"2":"3"}s linear infinite;
`);return()=>i.default.createElement(s,{title:"Loading...","data-selector":"pi-lib-loader"},i.default.createElement(r,null),i.default.createElement(r,{secondary:!0}))});
