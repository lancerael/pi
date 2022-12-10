import React, { FC, useEffect, useRef, useState } from 'react'
import {
  StyledCandlestickChart,
  StyledContainer,
  StyledLoaderContainer,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import { useScaling, useAxes, useCandles } from './hooks'
import Controls from './components/Controls'
import ClipPaths from './components/ClipPaths'
import Loader from '@pi-lib/loader'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const [zoomLevel, setZoomLevel] = useState(data.length / 100 || 1)
  const [panLevel, setPanLevel] = useState(0)
  const svgRef = useRef<SVGSVGElement>(null)
  const { scales, dimensions, utils, visibleRange } = useScaling(
    svgRef,
    data,
    zoomLevel,
    panLevel
  )
  useCandles(svgRef, data, panLevel, scales, dimensions, utils, visibleRange)
  useAxes(svgRef, data, panLevel, scales, dimensions)

  useEffect(() => {
    setZoomLevel(data.length / 100 || 1)
  }, [data.length])

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
            multiplier: data.length / 1000,
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
