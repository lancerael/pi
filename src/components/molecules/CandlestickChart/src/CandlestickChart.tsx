import React, { FC, useRef, useState } from 'react'
import Button from '@pi-lib/button'
import {
  StyledCandlestickChart,
  StyledContainer,
  StyledControls,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import { useScaling } from './hooks/useScaling'
import { useAxes } from './hooks/useAxes'
import { useBars } from './hooks/useBars'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const { scaledHeight, scaledY, xScale, height } = useScaling(svgRef, data)
  const [zoomLevel, setZoomLevel] = useState(1)
  useBars(svgRef, xScale, scaledHeight, scaledY, data)
  useAxes(svgRef, xScale, height)

  return (
    <StyledContainer>
      <StyledControls>
        <Button minWidth="auto">-</Button>
        <Button minWidth="auto">+</Button>
      </StyledControls>
      <StyledCandlestickChart ref={svgRef} />
    </StyledContainer>
  )
}

export default CandlestickChart
