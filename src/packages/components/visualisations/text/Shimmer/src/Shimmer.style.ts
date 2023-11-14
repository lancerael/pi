import styled, { css, keyframes } from 'styled-components'
import { StyledLineProps } from './Shimmer.style.types'

const blurPulse = keyframes`
    50% {
      margin-left: 0;
      transform: scale(1.03);
      filter: blur(4px);
      color: var(--special);
    }
`

const textPulse = keyframes`
    50% {
      background-position: 100% 50%;
      transform: scale(1.01);
    }
    100% {
      background-position: 200% 50%;
    }
`

export const StyledShimmer = styled.div`
  /* height: 4rem; */
`

export const StyledLine = styled.div<StyledLineProps>(
  ({ $isVisible, $fadeTime = 5000 }) => css`
    height: ${$isVisible ? '2rem' : '0'};
    transition: none;
    font-size: 2rem;

    &::after {
      transition: all ${$fadeTime / 1000}s linear;
      content: attr(data-content);
      opacity: ${$isVisible ? 1 : 0};
      filter: blur(${$isVisible ? '0' : '20px'});
      background-image: linear-gradient(
        90deg,
        var(--text),
        var(--text),
        var(--special),
        var(--text),
        var(--text)
      );
      background-clip: text;
      background-size: 200%;
      background-position: 0% 50%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${textPulse} 5s linear infinite;
    }

    &::before {
      transition: all 0.5s ease-in;
      content: attr(data-content);
      animation: ${blurPulse} 2.5s linear infinite;
      opacity: ${$isVisible ? 0.5 : 0};
      position: absolute;
      margin-left: 0;
      transform: scale(1);
      filter: blur(8px);
      color: var(--text);
    }
  `
)
