import { STATUS_COLOURS } from '@pi-lib/constants'
import styled, { keyframes, css } from 'styled-components'
import { StyledCircleProps } from './Loader.style.types'

const rotate = keyframes`
  to {
    rotate: 360deg;
  }
`

const circle = keyframes`
  to {
    height: 4px;
    width: 4px;
    margin: 4px;
    opacity: 0.3;
  }
`

export const StyledLoader = styled.div`
  width: 24px;
  height: 24px;
  margin: -7px 0;
  position: relative;
  display: inline-block;
`

export const StyledLoaderInner = styled.div`
  position: absolute;
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${rotate} 2s linear infinite;
  margin: 2px;
`

export const StyledCircleRow = styled.div`
  height: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
`
export const StyledCircle = styled.div(
  ({ delay }: StyledCircleProps) => css`
    width: 7px;
    height: 7px;
    margin: 2px;
    opacity: 0.7;
    display: inline-block;
    border-radius: 50%;
    background: var(--special);
    animation: ${circle} 0.3s linear alternate infinite;
    box-shadow: inset 0 0 0px 1px var(--specialShadow);

    ${delay ? 'animation-delay: 0.3s;' : ''}
  `
)
