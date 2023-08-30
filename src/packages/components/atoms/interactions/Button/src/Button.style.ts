import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'

import { StyledButtonProps } from './Button.style.types'

/**
 * The main styles for the button
 */
export const StyledButton = styled.button(
  ({ status, isCompact, isInverted }: StyledButtonProps) => {
    return css`
      ${box({
        isInverted,
      })}

      ${status === 'default' ? `var(--${status})` : ''};
      width: 100%;
      padding: ${isCompact ? '4px' : '8px 16px'};
      cursor: pointer;
      display: inline-block;
      font-weight: bold;
      font-size: 0.7em;
      transition: all 0.2s;
      &:hover:not([disabled]) {
        background-color: var(--dark);
        color: var(--outline);
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
