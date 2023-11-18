import styled, { css } from 'styled-components'
import { StyledCardProps } from './Card.style.types'
import { container } from '@pi-lib/styles'

export const StyledCard = styled.div<StyledCardProps>(
  ({ $isClear }) => css`
    ${!$isClear &&
    css`
      ${container()}
      padding: 1rem;
    `}
    color: var(--textSoft);
  `
)

export const StyledHeader = styled.div`
  margin: 0 0 1rem 0;
  color: var(--text);
`

export const StyledTitle = styled.h2`
  margin: 0;
  color: var(--textStrong);
`

export const StyledSubTitle = styled.span`
  font-size: 1.1rem;
  color: var(--special);
`

export const StyledContent = styled.div`
  color: var(--text);
`
