import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'

import { StyledButtonProps } from './Button.style.types'

export const StyledButton = styled.button(
  ({ status, minWidth, margin, isCompact }: StyledButtonProps) => {
    return css`
      ${box({ color: status === 'default' ? '' : `var(--${status})` })}
      width: 100%;
      padding: ${isCompact ? '3px 4px 4px 4px' : 'auto'};
      cursor: pointer;
      display: inline-block;
      &:hover:not([disabled]) {
        background-color: var(--border);
        border-color: var(--outline);
      }
      &:disabled {
        background-color: var(--shadow);
        border-color: var(--shadow);
        color: var(--textSoft);
        cursor: default;
      }
    `
  }
)
