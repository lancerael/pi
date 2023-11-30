import styled, { css } from 'styled-components'
import { StyledCardProps } from './Card.style.types'
import { container, maskGradient } from '@pi-lib/styles'

export const StyledCard = styled.div<StyledCardProps>(
  ({ $isClear }) => css`
    color: var(--textSoft);
    ${!$isClear &&
    css`
      ${container()}
      padding: 1rem;
    `}
  `
)

export const StyledTopSection = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 0.5rem -0.25rem;

  & svg {
    margin-top: 0.1rem;
    padding-right: 0.25rem;
  }
`

export const StyledHeader = styled.div`
  color: var(--text);
`

export const StyledTitle = styled.h2`
  margin: 0;
  padding: 0 0 0.15rem 0 !important;
  color: var(--text);
  ${maskGradient()}
  @media (max-width: 1036px) {
    font-size: 1.2rem;
    padding-top: 0.25rem !important;
  }
`

export const StyledSubTitle = styled.span`
  font-size: 1.1rem;
  color: var(--special);
`

export const StyledContent = styled.div`
  color: var(--text);
`

export const StyledIcon = styled.div`
  padding-top: -0.25rem;
  float: left;
  ${maskGradient()}
`
