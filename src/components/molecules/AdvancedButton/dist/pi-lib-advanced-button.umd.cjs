(function(i,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["react","styled-components"],n):(i=typeof globalThis<"u"?globalThis:i||self,i["@pi-lib/advanced-button"]=n(i.e,i.t))})(this,function(i,n){"use strict";const r=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},t=r(i),a=r(n),s={default:"black",pending:"blue",error:"red",success:"green"},f="font-family: serif;",m=a.default.button(({status:e,minWidth:l,margin:d})=>n.css`
    ${f}
    border: 1px solid ${s[e]};
    color: ${s[e]};
    background-color: white;
    border-radius: 6px;
    min-width: ${l};
    padding: 8px;
    margin: ${d};
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
  `),h=({children:e,status:l="default",dataSelector:d="pi-lib-button",minWidth:v="220px",margin:w="10px",...E})=>t.default.createElement(m,{status:l,...E,minWidth:v,margin:w,"data-selector":d},e),u={default:"black",pending:"blue",error:"red",success:"green"},c=n.keyframes`
  to {
    rotate: 360deg;
  }
`,x=n.keyframes`
  to {
    height: 3px;
    width: 3px;
    margin: 3px;
    opacity: 0.3;
  }
`,g=a.default.div`
  width: 24px;
  height: 24px;
  margin: -8px 0;
  position: relative;
  display: inline-block;
`,b=a.default.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${c} 2s linear infinite;
  margin: 2px;
`,p=a.default.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,o=a.default.div(({delay:e})=>n.css`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.6;
    display: inline-block;
    border-radius: 50%;
    background: ${u.pending};
    animation: ${x} 0.3s linear alternate infinite;

    ${e?"animation-delay: 0.2s;":""}
  `);a.default.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${u.pending};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${c} 2s linear infinite;
`;const y=()=>t.default.createElement(g,{title:"Loading...","data-selector":"pi-lib-loader"},t.default.createElement(b,null,t.default.createElement(p,null,t.default.createElement(o,{delay:!0}),t.default.createElement(o,null)),t.default.createElement(p,null,t.default.createElement(o,null),t.default.createElement(o,{delay:!0})))),$=a.default.div``;return({isLoading:e,buttonProps:l,children:d})=>t.default.createElement($,null,t.default.createElement(h,{status:e?"pending":"default",...l},e?t.default.createElement(y,null):d))});
