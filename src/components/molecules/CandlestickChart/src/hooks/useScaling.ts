import { useEffect, useState } from 'react'
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

  const scaledHeight = (low: number, high: number) =>
    abs(scales.yScale(high) - scales.yScale(low)) || 1

  const scaledY = (low: number, high: number) =>
    scales.yScale(min(low, high)) - scaledHeight(low, high) + CHART_PADDING

  useEffect(() => {
    const { clientWidth: width, clientHeight: height } = svgRef.current
    const xScale = scaleBand()
      .range([20, width * zoomLevel - 20])
      .domain(data.map(({ date }) => date))
      .padding(0.3)

    const candleWidth = xScale.bandwidth?.() * 1.44
    const totalWidth = candleWidth * data.length
    const offsetWidth =
      panLevel - totalWidth + width - AXIS_OFFSETS[1] + CHART_PADDING
    const firstVisible = round(abs(offsetWidth) / candleWidth)
    const lastVisible = round((abs(offsetWidth) + width) / candleWidth)
    const visibleData = data.slice(firstVisible, lastVisible)

    const min = Math.min(...visibleData.map(({ low }) => low))
    const max = Math.max(...visibleData.map(({ high }) => high))
    const yScale = scaleLinear()
      .domain([min - 20, max + 20])
      .range([height - AXIS_OFFSETS[0] - CHART_PADDING, CHART_PADDING])

    setDimensions({ width, height, offsetWidth })
    setScales({ xScale, yScale })
  }, [svgRef, zoomLevel, panLevel])

  return { scaledHeight, scaledY, ...dimensions, ...scales }
}
