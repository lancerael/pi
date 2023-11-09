import { container } from '@pi-lib/styles'
import styled from 'styled-components'

export const StyledCard = styled.div`
  ${container()}
  background: rgba(25,25,55,0.3);
  padding: 1rem;
  color: var(--textSoft);
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0 1rem 0;
`

export const StyledTitle = styled.h2`
  margin: 0;
  color: var(--text);
`

export const StyledSubTitle = styled.em`
  color: var(--textStrong);
`
