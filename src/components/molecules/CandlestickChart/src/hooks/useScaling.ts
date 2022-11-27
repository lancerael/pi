import { useEffect, useState } from 'react'
import { CandlestickDayData } from '../CandlestickChart.types'
import { scaleBand, scaleLinear, ScaleBand } from 'd3-scale'
import { AXIS_OFFSETS, CHART_PADDING } from '../CandlestickChart.constants'

const { abs, min } = Math

export const useScaling = (
  svgRef: any | null,
  data: CandlestickDayData[],
  zoomLevel: number
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [scales, setScales] = useState({
    xScale: ((x: string) => x) as unknown as ScaleBand<string>,
    yScale: (y: number) => y,
  })

  useEffect(() => {
    const { clientWidth: width, clientHeight: height } = svgRef.current
    setDimensions({ width, height })
    const max = Math.max(...data.map(({ high }) => high))
    setScales({
      xScale: scaleBand()
        .range([20, width * zoomLevel - 20])
        .domain(data.map(({ date }) => date))
        .padding(0.3),
      yScale: scaleLinear()
        .domain([0, max])
        .range([0, height - AXIS_OFFSETS[0] - CHART_PADDING * 3]),
    })
  }, [zoomLevel])

  const scaledHeight = (low: number, high: number) =>
    scales.yScale(abs(low - high)) || 1
  const scaledY = (low: number, high: number) =>
    dimensions.height -
    scales.yScale(min(low, high)) -
    scaledHeight(low, high) -
    AXIS_OFFSETS[0] -
    CHART_PADDING * 2

  return { scaledHeight, scaledY, ...dimensions, ...scales }
}
