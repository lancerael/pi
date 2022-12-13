import { useCallback, useEffect, useState } from 'react'
import { CandlestickDayData } from '../CandlestickChart.types'
import { scaleBand, scaleLinear, ScaleBand } from 'd3-scale'
import { AXIS_OFFSETS, CHART_PADDING } from '../CandlestickChart.constants'

const { abs, min, max, round } = Math

const candlePadding = 0.3
const candleWidth = 10

export const useScaling = (
  svgRef: any | null,
  data: CandlestickDayData[],
  zoomLevel: number,
  panLevel: number
) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    offsetWidth: 0,
  })
  const [scales, setScales] = useState({
    xScale: ((x: string) => x) as unknown as ScaleBand<string>,
    yScale: (y: number) => y,
  })
  const [visibleRange, setVisibleRange] = useState({ first: 0, last: 0 })

  // A helper to scale the candle height
  const scaledHeight = useCallback(
    (low: number, high: number) =>
      abs(scales.yScale(high) - scales.yScale(low)) || 1,
    [scales.yScale]
  )

  // A helper to scale the candle Y axis position
  const scaledY = useCallback(
    (low: number, high: number) =>
      scales.yScale(min(low, high)) - scaledHeight(low, high) + CHART_PADDING,
    [scales.yScale]
  )

  // Recalculate the scales when necessary
  useEffect(() => {
    if (!data?.length) return

    const { clientWidth: width, clientHeight: height } = svgRef.current
    const fullCandleWidth = candleWidth * (1 + candlePadding) * zoomLevel
    const totalWidth = fullCandleWidth * data.length
    const baseOffset = width - AXIS_OFFSETS[1] + CHART_PADDING * 2
    let offsetWidth = panLevel * zoomLevel - totalWidth + baseOffset
    offsetWidth = offsetWidth <= 0 ? offsetWidth : 0
    offsetWidth = totalWidth > width ? offsetWidth : baseOffset - totalWidth
    offsetWidth =
      abs(offsetWidth - baseOffset) <= totalWidth
        ? offsetWidth
        : -totalWidth + baseOffset

    const first = round((offsetWidth * -1 - CHART_PADDING) / fullCandleWidth)
    const last = round((offsetWidth * -1 + baseOffset) / fullCandleWidth)
    const visibleData = data.slice(first > 0 ? first : 0, last)
    const minY = min(...visibleData.map(({ low }) => low))
    const maxY = max(...visibleData.map(({ high }) => high))

    const xScale = scaleBand()
      .range([CHART_PADDING, totalWidth - CHART_PADDING])
      .domain(data.map(({ date }) => date))
      .padding(candlePadding)

    const yScale = scaleLinear()
      .domain([minY - 20, maxY + 20])
      .range([height - AXIS_OFFSETS[0] - CHART_PADDING, CHART_PADDING])

    setVisibleRange({ first, last })
    setDimensions({ width, height, offsetWidth })
    setScales({ xScale, yScale })
  }, [zoomLevel, panLevel, data])

  return { utils: { scaledHeight, scaledY }, visibleRange, dimensions, scales }
}
