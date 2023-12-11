import styled, { css } from 'styled-components'
import { DEFAULT_THEME, box } from '@pi-lib/styles'
import { StyledButtonProps } from './Button.style.types'

/**
 * Generates the button styles based on the provided props.
 *
 * @param {StyledButtonProps} options - The props to customize the button styles.
 * @returns {FlattenSimpleInterpolation} The styled-components CSS.
 */
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
  const size = theme.fontSizes[$buttonSize! ?? 'medium']
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
    ${$status && $status !== 'default'
      ? `color: ${theme.colors[$status]};`
      : ''};
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
      background-color: ${theme!.colors['border']};
      border-color: ${theme!.colors['border']};
      color: ${theme!.colors['shadow']};
      cursor: default;
    }
    padding: ${$isSimple ? 0 : padding} !important;
  `
}

/**
 * Retrieves the styled component for the specified element type.
 *
 * @param {'button' | 'a'} elementType - The type of element ('button' or 'a').
 * @returns {React.FC<StyledButtonProps>} The styled component for the specified element type.
 */
export const getStyledButton = (elementType: 'button' | 'a') => {
  return {
    button: StyledButton,
    a: StyledLink,
  }[elementType]
}

/**
 * Styled button component with customizable styles.
 *
 * @type {React.FC<StyledButtonProps>}
 */
const StyledButton = styled.button<StyledButtonProps>(getButtonStyle)

/**
 * Styled link component with customizable styles.
 *
 * @type {React.FC<StyledButtonProps>}
 */
const StyledLink = styled.a<StyledButtonProps>(getButtonStyle)

// Set default theme for the styled components
StyledButton.defaultProps = DEFAULT_THEME
StyledLink.defaultProps = DEFAULT_THEME
