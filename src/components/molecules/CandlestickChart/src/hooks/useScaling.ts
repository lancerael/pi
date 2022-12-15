import { useCallback, useEffect, useState } from 'react'
import { CandlestickDayData } from '../CandlestickChart.types'
import { scaleBand, scaleLinear, ScaleBand } from 'd3-scale'
import {
  AXIS_OFFSETS,
  CHART_PADDING,
  CANDLE_PADDING,
} from '../CandlestickChart.constants'

const { abs, min, max } = Math

export const useScaling = (data: CandlestickDayData[], dimensions: any) => {
  const { sizes, visibleRange } = dimensions

  const [scales, setScales] = useState({
    xScale: ((x: string) => x) as unknown as ScaleBand<string>,
    yScale: (y: number) => y,
  })

  // A helper to scale the candle height
  const scaledHeight = useCallback(
    (low: number, high: number) =>
      abs(scales.yScale(high) - scales.yScale(low)) || 1,
    [scales.yScale]
  )

  // A helper to scale the candle Y axis position
  const scaledY = useCallback(
    (low: number, high: number) =>
      scales.yScale(min(low, high)) - scaledHeight(low, high) + CHART_PADDING ||
      1,
    [scales.yScale]
  )

  // Recalculate the scales when necessary
  useEffect(() => {
    if (!data?.length) return

    const { first, last, totalWidth } = visibleRange
    const { height } = sizes

    const visibleData = data.slice(first > 0 ? first : 0, last)
    const minY = min(...visibleData.map(({ low }) => low))
    const maxY = max(...visibleData.map(({ high }) => high))

    const xScale = scaleBand()
      .range([CHART_PADDING, totalWidth - CHART_PADDING])
      .domain(data.map(({ date }) => date))
      .padding(CANDLE_PADDING)

    const yScale = scaleLinear()
      .domain([minY - 20, maxY + 20])
      .range([height - AXIS_OFFSETS[0] - CHART_PADDING, CHART_PADDING])

    setScales({ xScale, yScale })
  }, [visibleRange, sizes.height, data])

  return { utils: { scaledHeight, scaledY }, scales }
}
