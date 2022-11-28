import { useEffect, useState } from 'react'
import { CandlestickDayData } from '../CandlestickChart.types'
import { scaleBand, scaleLinear, ScaleBand } from 'd3-scale'
import { AXIS_OFFSETS, CHART_PADDING } from '../CandlestickChart.constants'

const { abs, min } = Math

export const useScaling = (
  svgRef: any | null,
  data: CandlestickDayData[],
  zoomLevel: number,
  panLevel: number
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [scales, setScales] = useState({
    xScale: ((x: string) => x) as unknown as ScaleBand<string>,
    yScale: (y: number) => y,
  })

  const scaledHeight = (low: number, high: number) =>
    dimensions.height -
      AXIS_OFFSETS[0] -
      CHART_PADDING -
      scales.yScale(abs(high - low)) || 1

  const scaledY = (low: number, high: number) =>
    scales.yScale(min(low, high)) - scaledHeight(low, high) + CHART_PADDING

  const totalWidth = scales.xScale.bandwidth?.() * 1.42 * data.length

  const offsetWidth =
    panLevel -
    totalWidth +
    dimensions.width -
    AXIS_OFFSETS[1] * 2 +
    CHART_PADDING

  // const firstVisible =

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
        .range([height - AXIS_OFFSETS[0] - CHART_PADDING, CHART_PADDING]),
    })
  }, [zoomLevel])

  return { scaledHeight, scaledY, offsetWidth, ...dimensions, ...scales }
}
