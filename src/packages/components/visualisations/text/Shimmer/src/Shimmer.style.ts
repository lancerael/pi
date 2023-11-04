import styled, { css } from 'styled-components'
import { StyledLineProps } from './Shimmer.style.types'

export const StyledShimmer = styled.div``

export const StyledLine = styled.div<StyledLineProps>(
  ({ isVisible }) => css`
    font-size: 2rem;
    opacity: ${isVisible ? 1 : 0};
    height: ${isVisible ? '2rem' : '0'};
    transform: scaleY(${isVisible ? '100%' : '0%'});

    &::after {
      transition: all 1s linear;
      content: attr(data-content);
      filter: blur(${isVisible ? '0' : '20px'});
      background-image: linear-gradient(to right, #add8e6, #ffffff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &::before {
      transition: all 0.5s ease-in;
      content: attr(data-content);
      filter: blur(5px);
      border: 1px solid green;
      opacity: ${isVisible ? 0.6 : 0};
      color: pink;
      position: absolute;
    }
  `
)
