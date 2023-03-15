import n, { css as s } from 'styled-components'
import { box as i } from '@pi-lib/styles'
import { jsx as a } from 'react/jsx-runtime'
const c = {
    default: '#444444',
    pending: 'blue',
    error: 'red',
    success: 'green',
  },
  u = n.button(
    ({ status: o, minWidth: r, margin: t }) => s`
    ${i({ color: o === 'default' ? '' : c[o] })}
    min-width: ${r};
    margin: ${t};
    cursor: pointer;
    &:hover:not([disabled]) {
      filter: brightness(115%);
    }
    &:disabled {
      background-color: var(--border);
      color: var(--textSoft);
      cursor: default;
    }
  `
  ),
  m = ({
    children: o,
    status: r = 'default',
    dataSelector: t = 'pi-lib-button',
    minWidth: e = '220px',
    margin: d = '10px',
    ...l
  }) =>
    /* @__PURE__ */ a(u, {
      status: r,
      ...l,
      minWidth: e,
      margin: d,
      'data-selector': t,
      children: o,
    })
export { m as default }
