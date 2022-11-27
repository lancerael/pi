import styled from 'styled-components'
import { STATUS_COLOURS } from '@pi-lib/constants'

export const StyledCandlestickChart = styled.svg`
  border: 1px solid ${STATUS_COLOURS['success']};
  width: 100%;
  height: 100%;
`

export const StyledContainer = styled.div`
  background: linear-gradient(
    135deg,
    #f8f8f8 0%,
    #f6f6f6 50%,
    #f4f4f4 51%,
    #ffffff 100%
  );
  width: 100%;
  height: 100%;
`
