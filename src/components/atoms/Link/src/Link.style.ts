import styled, { css } from 'styled-components'
import { StyledLinkProps } from './Link.style.types'

export const StyledLink = styled.a(({ isMain }: StyledLinkProps) => {
  return css`
    ${isMain &&
    css`
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.6em;
    `}

    color: var(--outline);

    &:active {
      color: var(--shadow);
    }

    &:hover {
      color: var(--specialText);
      text-shadow: 2px 2px 3px rgb(0 0 0 / 40%);
    }
  `
})
