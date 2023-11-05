import styled, { keyframes, css } from 'styled-components'
import { StyledCircleProps } from './Loader.style.types'
import { LoaderProps } from './Loader.types'

/**
 * The keyframe animation for the loader
 */
const rotate = keyframes`
  to {
    rotate: 360deg;
  }
`

/**
 * A helper function to generate keyframes for a circle animation
 */
const circle = (isLarge: Boolean) => keyframes`
  to {
    height: ${isLarge ? '20px' : '4px'};
    width: ${isLarge ? '20px' : '4px'};
    margin: 4px;
    opacity: 0.3;
  }
`

/**
 * The main container for the loader styles
 */
export const StyledLoader = styled.div<LoaderProps>(
  ({ isLarge }) => css`
    width: ${isLarge ? '58px' : '24px'};
    height: ${isLarge ? '58px' : '24px'};
    margin: -7px 0;
    position: relative;
    display: inline-block;
  `
)

/**
 * The inner container element for loader inner styles
 */
export const StyledLoaderInner = styled.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${rotate} 2s linear infinite;
  margin: 2px;
`

/**
 * The styles for the container for each row of circles
 */
export const StyledCircleRow = styled.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`

/**
 * The style for each individual circle
 */
export const StyledCircle = styled.div<StyledCircleProps>(
  ({ hasDelay, isLarge = false }) => css`
    width: ${isLarge ? '25px' : '7px'};
    height: ${isLarge ? '25px' : '7px'};
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${circle(isLarge)} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${hasDelay ? 'animation-hasDelay: 0.3s;' : ''}
  `
)
