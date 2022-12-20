import React from 'react'
import { CHART_PADDING } from '../../CandlestickChart.constants'
import { StyledIndicator } from './CurrentIndicator.style'
import { CurrentIndicatorProps } from './CurrentIndicator.types'

export const CurrentIndicator = ({ value, x, y }: CurrentIndicatorProps) => {
  return y > CHART_PADDING ? (
    <StyledIndicator
      style={{ left: x - CHART_PADDING * 2 + 2, top: y + CHART_PADDING - 4 }}
    >
      {value.toLocaleString('en-US')}
    </StyledIndicator>
  ) : (
    <></>
  )
}

export default CurrentIndicator
