import styled, { css, keyframes } from 'styled-components'
import { StyledLineProps } from './Shimmer.style.types'

const blurPulse = keyframes`
    0% {
      margin-left: 0;
      transform: scale(1);
      filter: blur(8px);
      color: pink;
    }
    50% {
      margin-left: 0;
      transform: scale(1.03);
      filter: blur(4px);
      color: antiquewhite;
    }
    100% {
      margin-left: 0;
      transform: scale(1);
      filter: blur(8px);
      color: pink;
    }
`

const textPulse = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
`

export const StyledShimmer = styled.div`
  height: 2rem;
`

export const StyledLine = styled.div<StyledLineProps>(
  ({ $isVisible }) => css`
    font-size: 2rem;
    height: ${$isVisible ? '2rem' : '0'};

    &::after {
      transition: all 1.5s linear;
      content: attr(data-content);
      opacity: ${$isVisible ? 1 : 0};
      filter: blur(${$isVisible ? '0' : '20px'});
      background-image: linear-gradient(90deg, #add8e6, white, #add8e6);
      background-clip: text;
      background-size: 200%;
      background-position: 0% 50%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${textPulse} 2.5s linear infinite;
    }

    &::before {
      transition: all 0.5s ease-in;
      content: attr(data-content);
      animation: ${blurPulse} 2.5s linear infinite;
      opacity: ${$isVisible ? 0.7 : 0};
      position: absolute;
    }
  `
)
