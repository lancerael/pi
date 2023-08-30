import styled, { css } from 'styled-components'
import { StyledLinkProps } from './Link.style.types'
import { Link } from 'react-router-dom'

/**
 * A helper to determine what type of styled element to use
 */
export const getStyledLink = ($isInactive: boolean) =>
  $isInactive ? StyledSpan : StyledLink

/**
 * A helper to get the link style for any element type
 */
const getLinkStyle = ({ $isMain, $isInactive }: StyledLinkProps) => {
  return css`
    text-decoration: none;
    color: var(--outline);

    ${$isMain &&
    css`
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2em;
    `}

    ${$isInactive
      ? css`
          color: var(--special);
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
export const StyledRouterLink = styled(Link)`
  ${(props: StyledLinkProps) => getLinkStyle(props)}
`

/**
 * A styled link component for use as a standard link
 */
export const StyledLink = styled.a(getLinkStyle)

/**
 * A styled span component for use as an inactive link
 */
export const StyledSpan = styled.span(getLinkStyle)
