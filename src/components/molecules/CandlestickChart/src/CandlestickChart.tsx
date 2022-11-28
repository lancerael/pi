import React, { FC, useRef, useState } from 'react'
import {
  StyledCandlestickChart,
  StyledContainer,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import { useScaling, useAxes, useCandles } from './hooks'
import Controls from './components/Controls'
import ClipPaths from './components/ClipPaths'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const [zoomLevel, setZoomLevel] = useState(data.length / 100)
  const [panLevel, setPanLevel] = useState(0)
  const svgRef = useRef<SVGSVGElement>(null)
  const { scaledHeight, scaledY, xScale, yScale, width, height, offsetWidth } =
    useScaling(svgRef, data, zoomLevel, panLevel)
  useCandles(svgRef, xScale, scaledHeight, scaledY, data, panLevel, offsetWidth)
  useAxes(svgRef, xScale, yScale, width, height, panLevel, offsetWidth)

  return (
    <StyledContainer>
      <Controls
        {...{ setZoomLevel, setPanLevel, multiplier: data.length / 1000 }}
      />
      <StyledCandlestickChart ref={svgRef}>
        <ClipPaths {...{ width, height }} />
      </StyledCandlestickChart>
    </StyledContainer>
  )
}

export default CandlestickChart
