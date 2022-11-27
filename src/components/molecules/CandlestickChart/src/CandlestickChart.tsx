import React, { FC, useRef, useState } from 'react'
import {
  StyledCandlestickChart,
  StyledContainer,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import { useScaling, useAxes, useBars } from './hooks'
import Controls from './components/Controls'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const [zoomLevel, setZoomLevel] = useState(data.length / 100)
  const [panLevel, setPanLevel] = useState(0)
  const svgRef = useRef<SVGSVGElement>(null)
  const { scaledHeight, scaledY, xScale, height } = useScaling(
    svgRef,
    data,
    zoomLevel
  )
  useBars(svgRef, xScale, scaledHeight, scaledY, data, panLevel)
  useAxes(svgRef, xScale, height, panLevel)

  return (
    <StyledContainer>
      <Controls
        {...{ setZoomLevel, setPanLevel, multiplier: data.length / 1000 }}
      />
      <StyledCandlestickChart ref={svgRef} />
    </StyledContainer>
  )
}

export default CandlestickChart
