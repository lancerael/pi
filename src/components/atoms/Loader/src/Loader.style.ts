import { STATUS_COLOURS } from '@pi/constants'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledLoaderCircle = styled.div`
  border-radius: 50%;
  border: 2px solid ${STATUS_COLOURS['pending']};
  width: 22px;
  height: 22px;
  margin: -8px 0 -8px 28px;
  display: inline-block;
  clip-path: polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 0 100%);
  animation: ${rotate} 1s linear infinite;
`
