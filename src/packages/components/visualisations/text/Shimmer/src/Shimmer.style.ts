import styled, { css, keyframes } from 'styled-components'
import { StyledLineProps } from './Shimmer.style.types'
import { REDUCED_MOTION } from '@pi-lib/styles'

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
  margin: 0.5rem 0;
`

export const StyledLine = styled.div<StyledLineProps>(
  ({ $isVisible, $holdTime = 5000, $fadeTime = 5000 }) => css`
    --size: 2rem;

    @media screen and (max-width: 800px) {
      --size: 1.4rem;
    }

    height: ${$isVisible ? 'var(--size)' : '0'};
    transition: none;
    font-size: var(--size);

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
      animation: ${textPulse} ${REDUCED_MOTION ? 15 : $holdTime / 1000}s linear
        infinite;
    }

    &::before {
      transition: all 0.5s ease-in;
      content: attr(data-content);
      animation: ${blurPulse} ${REDUCED_MOTION ? 15 : $holdTime / 2}s linear
        infinite;
      opacity: ${$isVisible ? 0.7 : 0};
      position: absolute;
      margin-left: 0;
      transform: scale(1);
      filter: blur(8px);
      color: var(--text);
    }
  `
)
