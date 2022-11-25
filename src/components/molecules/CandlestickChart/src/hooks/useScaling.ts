import { useEffect, useState } from 'react'
import { CandlestickDayData } from '../CandlestickChart.types'
import { scaleBand, scaleLinear, ScaleBand } from 'd3-scale'

const { abs, min } = Math

export const useScaling = (svg: any | null, data: CandlestickDayData[]) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [scales, setScales] = useState({
    xScale: ((x: string) => x) as unknown as ScaleBand<string>,
    yScale: (y: number) => y,
  })

  useEffect(() => {
    const { clientWidth: width, clientHeight: height } = svg.current
    setDimensions({ width, height })
    const max = Math.max(...data.map(({ high }) => high))
    setScales({
      xScale: scaleBand()
        .range([20, width - 20])
        .domain(data.map(({ date }) => date))
        .padding(1),
      yScale: scaleLinear().domain([0, max]).range([0, height]),
    })
  }, [])

  const scaledHeight = (low: number, high: number) =>
    scales.yScale(abs(low - high)) || 1
  const scaledY = (low: number, high: number) =>
    dimensions.height - scales.yScale(min(low, high)) - scaledHeight(low, high)

  return { scaledHeight, scaledY, ...dimensions, ...scales }
}
