import styled, { css } from 'styled-components'
import { StyledLinkProps, StyledLinkType } from './Link.style.types'
import { Link } from 'react-router-dom'

/**
 * A helper to determine what type of styled element to use
 */
export const getStyledLink = ($isInactive: boolean) =>
  $isInactive ? StyledSpan : StyledLink

/**
 * A helper to get the link style for any element type
 */
const getLinkStyle = ({ $isMain, $isInactive, $color }: StyledLinkProps) => {
  return css`
    text-decoration: none;
    color: var(--${$color ?? 'special'});

    ${$isMain &&
    css`
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2em;
    `}

    ${$isInactive
      ? css`
          color: var(--${$color ?? 'special'}A);
          cursor: default;
        `
      : css`
          &:hover {
            filter: brightness(85%);
            text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
          }
        `}
  `
}

/**
 * A styled link for use with React router
 */
export const StyledRouterLink: StyledLinkType = styled(Link)`
  ${(props) => getLinkStyle(props)}
`

/**
 * A styled link component for use as a standard link
 */
export const StyledLink: StyledLinkType = styled.a(getLinkStyle)

/**
 * A styled span component for use as an inactive link
 */
export const StyledSpan: StyledLinkType = styled.span(getLinkStyle)
