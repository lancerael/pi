import { container } from '@pi-lib/styles'
import styled from 'styled-components'

export const StyledCard = styled.div`
  ${container()}
  /* background: rgba(25,25,55,0.3); */
  padding: 1rem;
  color: var(--textSoft);
`

export const StyledHeader = styled.div`
  margin: 0 0 1rem 0;
  color: var(--text);
`

export const StyledTitle = styled.h2`
  margin: 0;
  color: var(--textStrong);
`

export const StyledSubTitle = styled.em`
  color: var(--outline);
`

export const StyledContent = styled.em`
  color: var(--text);
`
