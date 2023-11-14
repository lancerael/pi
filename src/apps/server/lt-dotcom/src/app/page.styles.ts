import styled from 'styled-components'
import { gradient } from '@pi-lib/styles'

export const StyledFullGradient = styled.div`
  ${gradient({ isTransparent: true })}
  margin: 5rem 0;
  padding: 5rem 1rem;
`

export const ShimmerOuter = styled.div`
  text-align: center;
  height: 100dvh;
  position: relative;
  padding-bottom: 5rem;
  overflow: clip;
`

export const ShimmerInner = styled.div`
  position: sticky;
  top: calc(50dvh - 1.5rem);
  z-index: 0;
`
