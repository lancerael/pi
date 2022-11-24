import { STATUS_COLOURS } from '@pi-lib/constants'
import styled, { keyframes, css } from 'styled-components'
import { StyledLoaderProps } from './Loader.style.types'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledLoader = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: -8px 0;
`

export const StyledLoaderCircle = styled.div`
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0px 2px ${STATUS_COLOURS['pending']};
  overflow: hidden;
  clip-path: polygon(
    -5px -5px,
    50% -5px,
    50% 50%,
    100% 50%,
    100% 100%,
    -5px 100%
  );
  animation: ${rotate} 2s linear infinite;
`
