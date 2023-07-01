import { scaleBand, scaleLinear } from 'd3-scale'
import { useCallback } from 'react'
import {
  AXIS_OFFSETS,
  CANDLE_PADDING,
  CANDLE_WIDTH,
  CHART_PADDING,
} from '../CandlestickChart.constants'
import { DataRange, Sizes } from '../CandlestickChart.types'

/**
 * A React hook to add d3 scales for the axes and candles
 * @param sizes
 * @param dataRange
 * @returns
 */
export const useScales = (sizes: Sizes, dataRange: DataRange) => {
  // The horizontal scale
  const xScale = useCallback(
    scaleBand()
      .range([CHART_PADDING, sizes.width - AXIS_OFFSETS[1] + CANDLE_WIDTH])
      .domain(dataRange.dataSlice.map(({ date }: any) => date))
      .paddingInner(CANDLE_PADDING),
    [sizes, dataRange]
  )

  // The vertical scale
  const yScale = useCallback(
    scaleLinear()
      .domain([dataRange.min - 20, dataRange.max + 20])
      .range([sizes.height - AXIS_OFFSETS[0], CHART_PADDING]),
    [sizes, dataRange]
  )

  return { xScale, yScale }
}
