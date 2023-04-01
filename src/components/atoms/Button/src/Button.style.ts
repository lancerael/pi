import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'

import { StyledButtonProps } from './Button.style.types'

export const StyledButton = styled.button(
  ({ status, minWidth, margin, isCompact }: StyledButtonProps) => {
    return css`
      ${box({ color: status === 'default' ? '' : `var(--${status})` })}
      min-width: ${isCompact ? 'auto' : minWidth};
      margin: ${isCompact ? '0' : margin};
      cursor: pointer;
      &:hover:not([disabled]) {
        background-color: var(--subtle);
        border-color: var(--shadow);
      }
      &:disabled {
        background-color: var(--shadow);
        border-color: var(--outline);
        color: var(--textSoft);
        cursor: default;
      }
    `
  }
)
