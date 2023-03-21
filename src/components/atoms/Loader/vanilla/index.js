import { jsx as i, jsxs as n } from 'react/jsx-runtime'
import t, { keyframes as o, css as d } from 'styled-components'
const r = o`
  to {
    rotate: 360deg;
  }
`,
  s = o`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`,
  c = t.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`,
  p = t.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${r} 2s linear infinite;
  margin: 2px;
`,
  a = t.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,
  e = t.div(
    ({ delay: l }) => d`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${s} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${l ? 'animation-delay: 0.3s;' : ''}
  `
  ),
  y = () =>
    /* @__PURE__ */ i(c, {
      title: 'Loading...',
      'data-selector': 'pi-lib-loader',
      children: /* @__PURE__ */ n(p, {
        children: [
          /* @__PURE__ */ n(a, {
            children: [
              /* @__PURE__ */ i(e, { delay: !0 }),
              /* @__PURE__ */ i(e, {}),
            ],
          }),
          /* @__PURE__ */ n(a, {
            children: [
              /* @__PURE__ */ i(e, {}),
              /* @__PURE__ */ i(e, { delay: !0 }),
            ],
          }),
        ],
      }),
    })
export { y as default }
