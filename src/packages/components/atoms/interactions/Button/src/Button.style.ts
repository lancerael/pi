import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'

import { StyledButtonProps } from './Button.style.types'

const getButtonStyle = ({
  $status,
  $isCompact,
  $isInverted,
  $isShadowed,
  $isSimple,
  $isInline,
  $boxName,
  $buttonSize,
  disabled,
  theme,
}: StyledButtonProps) => {
  const size = theme?.fontSizes?.[$buttonSize!] ?? '1rem'
  let padding = $isCompact ? `calc(${size} / 4)` : `calc(${size} / 2) ${size}`
  return css`
    ${$isSimple
      ? css`
          background: none;
          border: none;
        `
      : box({
          name: $boxName,
          isInverted: $isInverted,
          shadowProps: $isShadowed ? undefined : null,
        })}
    ${disabled && 'pointer-events: none;'}
    ${$status !== 'default' ? `color: var(--${$status})` : ''};
    ${!$isInline && 'width: 100%;'}
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: ${size};
    transition: all 0.3s;
    &:hover:not([disabled]) {
      filter: brightness(80%) contrast(150%) saturate(135%);
    }
    &:disabled {
      background-color: var(--border);
      border-color: var(--border);
      color: var(--shadow);
      cursor: default;
    }
    padding: ${$isSimple ? 0 : padding} !important;
  `
}

/**
 * The main styles for the button
 */
export const getStyledButton = (elementType: 'button' | 'a') => {
  return {
    button: StyledButton,
    a: StyledLink,
  }[elementType]
}

const StyledButton = styled.button<StyledButtonProps>(getButtonStyle)
const StyledLink = styled.a<StyledButtonProps>(getButtonStyle)
