import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'

import { StyledButtonProps } from './Button.style.types'

/**
 * The main styles for the button
 */
export const StyledButton = styled.button<StyledButtonProps>(
  ({
    $status,
    $isCompact,
    $isInverted,
    $isShadowed,
    $buttonSize,
    disabled,
    theme,
  }) => {
    const size = theme.fontSizes[$buttonSize!]
    return css`
      ${box({
        isInverted: $isInverted,
        shadowProps: $isShadowed ? undefined : null,
      })}
      ${disabled && 'pointer-events: none;'}
      ${$status !== 'default' ? `color: var(--${$status})` : ''};
      width: 100%;
      padding: ${$isCompact
        ? `calc(${size} / 4)`
        : `calc(${size} / 2) ${size}`};
      cursor: pointer;
      display: inline-block;
      font-weight: bold;
      font-size: ${size};
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
