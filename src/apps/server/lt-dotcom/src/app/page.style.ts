import styled from 'styled-components'
import { gradient } from '@pi-lib/styles'

export const StyledFullGradient = styled.div`
  ${gradient({ isTransparent: true })}
  padding: 1rem 0;

  & svg {
    filter: saturate(50%) brightness(80%) contrast(160%);
  }
`
