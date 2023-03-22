import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'

import { StyledButtonProps } from './Button.style.types'

export const StyledButton = styled.button(
  ({ status, minWidth, margin }: StyledButtonProps) => {
    return css`
      ${box({ color: status === 'default' ? '' : `var(--${status})` })}
      min-width: ${minWidth};
      margin: ${margin};
      cursor: pointer;
      &:hover:not([disabled]) {
        background-color: var(--input);
        border-color: var(--dark);
      }
      &:disabled {
        background-color: var(--border);
        color: var(--textSoft);
        cursor: default;
      }
    `
  }
)
