import styled from 'styled-components'
import { box } from '@pi-lib/styles'

export const StyledIconButton = styled.a`
  ${box()}
  cursor: pointer;
  display: inline-block;
  background: var(--specialText);

  &:hover {
    background: var(--light);
    border-color: var(--outline);
  }
`
