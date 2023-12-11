import styled, { css } from 'styled-components'
import { StyledLinkProps, StyledLinkType } from './Link.style.types'
import { Link } from 'react-router-dom'
import { DEFAULT_THEME } from '@pi-lib/styles'

/**
 * Generates link styles based on the provided props.
 *
 * @param {StyledLinkProps} props - The props to customize the link styles.
 * @returns {FlattenSimpleInterpolation} The styled-components CSS.
 */
const getLinkStyle = ({
  $isMain,
  $isInactive,
  $color,
  theme,
}: StyledLinkProps) => {
  return css`
    text-decoration: none;
    color: ${theme.colors[$color ?? 'special']};
    font-weight: bold;

    ${$isMain &&
    css`
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2em;
    `}

    ${$isInactive
      ? css`
          color: ${theme.colors[`${$color ?? 'special'}A`]};
          cursor: default;
        `
      : css`
          &:hover {
            filter: brightness(85%) contrast(120%) saturate(120%);
            text-shadow: 1px 1px 1px ${theme.colors['outlineA']};
          }
        `}
  `
}

/**
 * Determines the appropriate styled element based on the given condition.
 *
 * @param {boolean} $isInactive - Indicates whether the link is inactive.
 * @returns {React.FC<StyledLinkProps>} The appropriate styled component based on the condition.
 */
export const getStyledLink = ($isInactive: boolean) =>
  $isInactive ? StyledSpan : StyledLink

/**
 * Styled link component for use with React Router.
 *
 * @type {React.FC<StyledLinkProps>}
 */
export const StyledRouterLink: StyledLinkType = styled(Link)`
  ${(props) => getLinkStyle(props)}
`

/**
 * Styled link component for use as a standard link.
 *
 * @type {React.FC<StyledLinkProps>}
 */
export const StyledLink: StyledLinkType = styled.a(getLinkStyle)

/**
 * Styled span component for use as an inactive link.
 *
 * @type {React.FC<StyledLinkProps>}
 */
export const StyledSpan: StyledLinkType = styled.span(getLinkStyle)

// Set default theme for the styled components
StyledRouterLink.defaultProps = DEFAULT_THEME
StyledLink.defaultProps = DEFAULT_THEME
StyledSpan.defaultProps = DEFAULT_THEME
