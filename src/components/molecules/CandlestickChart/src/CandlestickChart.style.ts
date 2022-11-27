import styled from 'styled-components'
import { STATUS_COLOURS } from '@pi-lib/constants'

export const StyledCandlestickChart = styled.svg`
  border: 1px solid ${STATUS_COLOURS['success']};
  width: 100%;
  height: 100%;
`

export const StyledContainer = styled.div`
  background: radial-gradient(ellipse at center, #e9f2f7 0%, #ffffff 100%);
  width: 100%;
  height: 100%;
`
