(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/advanced-button"]=n(t.React,t.t))})(this,function(t,n){"use strict";const r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},d=r(t),o=r(n),l={default:"black",pending:"blue",error:"red",success:"green"},u="font-family: serif;",s=o.default.button(({status:e,minWidth:i,margin:a})=>n.css`
    ${u}
    border: 1px solid ${l[e]};
    color: ${l[e]};
    background-color: white;
    border-radius: 10px;
    min-width: ${i};
    padding: 10px;
    margin: ${a};
    cursor: pointer;
    &:disabled {
      color: grey;
      cursor: default;
    }
    &:hover {
      filter: brightness(85%);
    }
  `),c=({children:e,status:i="default",dataSelector:a="pi-lib-button",minWidth:x="220px",margin:y="10px",...v})=>d.default.createElement(s,{status:i,...v,minWidth:x,margin:y,"data-selector":a},e),f={default:"black",pending:"blue",error:"red",success:"green"},p=n.keyframes`
  to {
    transform: rotate(360deg);
  }
`,m=o.default.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`,h=o.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${f.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${p} 2s linear infinite;
`,b=()=>d.default.createElement(m,{title:"Loading...","data-selector":"pi-lib-loader"},d.default.createElement(h,null)),g=o.default.div``;return({isLoading:e,children:i,buttonProps:a})=>d.default.createElement(g,null,d.default.createElement(c,{status:e?"pending":"default",...a},e?d.default.createElement(b,null):i))});
