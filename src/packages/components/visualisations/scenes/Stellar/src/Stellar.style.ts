import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  50% {
      background-size: 185% 75%;
  }
`

export const StyledStellar = styled.div`
  background: radial-gradient(
    circle at center,
    #0c0c0c,
    #110d1f,
    #060b24,
    #020719,
    #010408
  );
  background-size: 100% 100%;
  animation: ${pulse} 8s linear infinite;
  background-position: center center;
  width: 100%;
  height: 100dvh;
  position: relative;
  overflow: clip;
`

export const StyledStar = styled.div`
  width: 5px;
  height: 5px;
  position: absolute;
  border-radius: 50%;
  transition: all 0.1s linear, opacity 0.5s linear;
  transition-delay: 0s;
  z-index: 1;
`

export const StyledContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
`
