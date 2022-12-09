import { useCallback, useEffect, useState } from 'react'
import { CandlestickDayData } from '../CandlestickChart.types'
import { scaleBand, scaleLinear, ScaleBand } from 'd3-scale'
import { AXIS_OFFSETS, CHART_PADDING } from '../CandlestickChart.constants'

const { abs, min, round } = Math

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

    const xScale = scaleBand()
      .range([20, width * zoomLevel - 20])
      .domain(data.map(({ date }) => date))
      .padding(0.3)

    const candleWidth = xScale.bandwidth?.() * 1.44
    const totalWidth = candleWidth * data.length
    const offsetWidth =
      panLevel - totalWidth + width - AXIS_OFFSETS[1] + CHART_PADDING
    const first = round((abs(offsetWidth) - CHART_PADDING) / candleWidth)
    const last =
      round((abs(offsetWidth) + width - AXIS_OFFSETS[1]) / candleWidth) + 1
    const visibleData = data.slice(first > 0 ? first : 0, last)
    const min = Math.min(...visibleData.map(({ low }) => low))
    const max = Math.max(...visibleData.map(({ high }) => high))

    const yScale = scaleLinear()
      .domain([min - 20, max + 20])
      .range([height - AXIS_OFFSETS[0] - CHART_PADDING, CHART_PADDING])

    setVisibleRange({ first, last })
    setDimensions({ width, height, offsetWidth })
    setScales({ xScale, yScale })
  }, [zoomLevel, panLevel, data])

  return { utils: { scaledHeight, scaledY }, visibleRange, dimensions, scales }
}
