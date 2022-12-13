import React, { FC, useEffect, useRef, useState } from 'react'
import {
  StyledCandlestickChart,
  StyledContainer,
  StyledLoaderContainer,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import { useScaling, useAxes, useCandles, useDimensions } from './hooks'
import ClipPaths from './components/ClipPaths'
import Controls from './components/Controls'
import Loader from '@pi-lib/loader'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const [zoomLevel, setZoomLevel] = useState(1)
  const [panLevel, setPanLevel] = useState(0)
  const svgRef = useRef<SVGSVGElement>(null)
  const { dimensions, visibleRange } = useDimensions(
    svgRef,
    data.length,
    zoomLevel,
    panLevel
  )
  const { scales, utils } = useScaling(data, dimensions, visibleRange)
  useCandles(svgRef, data, scales, utils, visibleRange)
  useAxes(svgRef, data, visibleRange.offset, scales, dimensions)

  return (
    <StyledContainer>
      {!data?.length ? (
        <StyledLoaderContainer>
          <Loader />
        </StyledLoaderContainer>
      ) : (
        <Controls
          {...{
            zoomLevel,
            setZoomLevel,
            setPanLevel,
            visibleRange,
            length: data.length,
          }}
        />
      )}
      <StyledCandlestickChart ref={svgRef}>
        <ClipPaths {...dimensions} />
      </StyledCandlestickChart>
    </StyledContainer>
  )
}

export default CandlestickChart
