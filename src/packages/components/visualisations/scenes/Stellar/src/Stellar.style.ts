import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
    0% {
        background-size: 100% 100%;
    }
    50% {
        background-size: 175% 75%;
    }
    100% {
        background-size: 100% 100%;
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
  animation: ${pulse} 8s linear infinite;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: clip;
`

export const StyledStar = styled.div`
  width: 5px;
  height: 5px;
  position: absolute;
  border-radius: 50%;
  transition: all 0.2s linear, opacity 0.5s linear;
  z-index: 1;
`

export const StyledContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1ps solid green;
  z-index: 2;
  overflow: auto;
  color: lightblue;
  padding: 2rem;
  box-sizing: border-box;
`
