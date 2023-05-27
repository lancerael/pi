import styled, { css } from 'styled-components'
import { StyledLinkProps } from './Link.style.types'
import { Link } from 'react-router-dom'

export const getStyledLink = ($isInactive: boolean) =>
  $isInactive ? StyledSpan : StyledLink

const getLinkStyle = ({ $isMain, $isInactive }: StyledLinkProps) => {
  return css`
    ${$isMain &&
    css`
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.6em;
    `}

    color: var(--outline);

    ${$isInactive
      ? css`
          color: var(--shadow);
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

export const StyledRouterLink = styled(Link)`
  ${(props: StyledLinkProps) => getLinkStyle(props)}
`
export const StyledLink = styled.a(getLinkStyle)
export const StyledSpan = styled.span(getLinkStyle)
