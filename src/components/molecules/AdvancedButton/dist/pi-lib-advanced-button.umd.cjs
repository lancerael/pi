(function(t,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(t=typeof globalThis<"u"?globalThis:t||self,t["@pi-lib/advanced-button"]=n(t.React,t.t))})(this,function(t,n){"use strict";const o=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},i=o(t),r=o(n),l={default:"black",pending:"blue",error:"red",success:"green"},s="font-family: serif;",u=r.default.button(({status:e,minWidth:d,margin:a})=>n.css`
    ${s}
    border: 1px solid ${l[e]};
    color: ${l[e]};
    background-color: white;
    border-radius: 10px;
    min-width: ${d};
    padding: 10px;
    margin: ${a};
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
  `),c=({children:e,status:d="default",dataSelector:a="pi-lib-button",minWidth:g="220px",margin:y="10px",...v})=>i.default.createElement(u,{status:d,...v,minWidth:g,margin:y,"data-selector":a},e),p={default:"black",pending:"blue",error:"red",success:"green"},f=n.keyframes`
  to {
    transform: rotate(360deg);
  }
`,h=r.default.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`,m=r.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${p.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${f} 2s linear infinite;
`,b=()=>i.default.createElement(h,{title:"Loading...","data-selector":"pi-lib-loader"},i.default.createElement(m,null)),x=r.default.div``;return({isLoading:e,children:d,buttonProps:a})=>i.default.createElement(x,null,i.default.createElement(c,{status:e?"pending":"default",...a},e?i.default.createElement(b,null):d))});
