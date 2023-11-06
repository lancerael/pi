import styled, { css, keyframes } from 'styled-components'
import { StyledLineProps } from './Shimmer.style.types'

const pulse = keyframes`
    0% {
      margin-left: 0;
      filter: blur(8px);
      color: pink;
    }
    50% {
      margin-left: 5px;
      filter: blur(4px);
      color: antiquewhite;
    }
    100% {
      margin-left: 0;
      filter: blur(8px);
      color: pink;
    }
`

export const StyledShimmer = styled.div``

export const StyledLine = styled.div<StyledLineProps>(
  ({ isVisible }) => css`
    font-size: 2rem;
    height: ${isVisible ? '2rem' : '0'};

    &::after {
      transition: all 1.5s linear;
      content: attr(data-content);
      opacity: ${isVisible ? 1 : 0};
      filter: blur(${isVisible ? '0' : '20px'});
      background-image: linear-gradient(to right, #add8e6, #ffffff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &::before {
      transition: all 0.5s ease-in;
      content: attr(data-content);
      animation: ${pulse} 2s linear infinite;
      opacity: ${isVisible ? 0.7 : 0};
      position: absolute;
    }
  `
)
