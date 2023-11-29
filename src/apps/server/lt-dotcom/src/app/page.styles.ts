import styled from 'styled-components'
import { gradient } from '@pi-lib/styles'

export const StyledFullGradient = styled.div`
  ${gradient({ isTransparent: true })}
  padding: 2rem 0;

  & svg {
    filter: saturate(40%) brightness(80%) contrast(140%);
  }
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

export const SkillsContainer = styled.div`
  padding: 3rem 1rem;
`

export const StyledCardWrapper = styled.div`
  @media (max-width: 1036px) {
    margin: 0 auto;
  }
  & h2 {
    margin: 0;
    padding: 0;
    font-family: T, sans-serif !important;
  }
`
