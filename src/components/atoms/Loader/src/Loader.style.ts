import { STATUS_COLOURS } from '@pi-lib/constants'
import styled, { keyframes, css } from 'styled-components'
import { StyledLoaderProps } from './Loader.style.types'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledLoader = styled.div`
  width: 14px;
  height: 14px;
  display: inline-block;
`
export const StyledLoaderCircle = styled.div(({ secondary }: StyledLoaderProps) => css`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 0px 2px ${STATUS_COLOURS['pending']};
  overflow: hidden;
  clip-path: polygon(-3px -3px, 50% -3px, 50% 23px, -3px 23px);
  animation: ${rotate} ${secondary ? '2' : '3'}s linear infinite;
`)
