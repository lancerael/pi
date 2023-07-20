import { AXIS_OFFSETS, CHART_PADDING } from '../../CandlestickChart.constants'
import { StyledIndicator } from './CurrentIndicator.style'
import { CurrentIndicatorProps } from './CurrentIndicator.types'

export const CurrentIndicator = ({
  currentItem,
  yScale,
  sizes,
}: CurrentIndicatorProps) => {
  const indicatorBottom = sizes.height - AXIS_OFFSETS[0] - CHART_PADDING
  const indicatorTop = CHART_PADDING
  const left = sizes.width - AXIS_OFFSETS[1] + CHART_PADDING + 4 + sizes.left
  let top = yScale(currentItem?.close) + -13
  top = top > indicatorBottom ? indicatorBottom : top
  top = top < indicatorTop ? indicatorTop : top + 4
  top += +sizes.top
  if (isNaN(top)) return <></>
  return (
    <StyledIndicator
      isPositive={currentItem.close > currentItem.open}
      style={{ left, top }}
    >
      {currentItem.close.toLocaleString('en-US')}
    </StyledIndicator>
  )
}

export default CurrentIndicator