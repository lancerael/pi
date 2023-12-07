import { REDUCED_MOTION } from '@pi-lib/styles'
import styled, { css, keyframes } from 'styled-components'
import { StyledChevronProps } from './Ticker.style.types'

const chevronBounce = keyframes`
  100% {
    transform: translate(0, 5px);
    opacity: 0.5;
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

export const StyledChevron = styled.div<StyledChevronProps>(
  ({ $isVisible }) => css`
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 1.5rem;
    opacity: ${$isVisible ? 1 : 0};
  `
)

export const StyledChevronInner = styled.a`
  display: inline-block;
  margin: 0 auto;

  & :hover {
    filter: contrast(200%);
  }

  & svg {
    animation: ${chevronBounce} ${REDUCED_MOTION ? 15 : 1}s linear infinite
      alternate;
  }
`
