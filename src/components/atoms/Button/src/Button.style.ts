import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'
import { STATUS_COLOURS } from '@pi-lib/constants'

import { StyledButtonProps } from './Button.style.types'

export const StyledButton = styled.button(
  ({ status, minWidth, margin }: StyledButtonProps) => css`
    ${box({ color: status === 'default' ? '' : STATUS_COLOURS[status] })}
    min-width: ${minWidth};
    margin: ${margin};
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
)
