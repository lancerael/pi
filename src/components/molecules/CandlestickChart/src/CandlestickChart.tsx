import React, { FC, useRef, useState } from 'react'
import Loader from '@pi-lib/loader'
import { useScaling, useAxes, useCandles, useDimensions } from './hooks'
import { ClipPaths, Controls, CandleTooltip } from './components'
import {
  StyledCandlestickChart,
  StyledContainer,
  StyledLoaderContainer,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import { useTouch } from './hooks/useTouch'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [controls, setControls] = useState({
    zoomLevel: 1,
    panLevel: 1,
    transition: true,
  })
  const dimensions = useDimensions(svgRef, data.length, controls)
  const scaling = useScaling(data, dimensions)
  useAxes(svgRef, data, scaling.scales, dimensions)
  const candles = useCandles(
    svgRef,
    data,
    dimensions,
    scaling,
    controls.transition
  )
  useTouch(svgRef, setControls)

  return (
    <StyledContainer>
      {!data?.length ? (
        <StyledLoaderContainer>
          <Loader />
        </StyledLoaderContainer>
      ) : (
        <Controls
          {...{
            svgRef,
            controls,
            setControls,
            visibleRange: dimensions.visibleRange,
            length: data.length,
          }}
        />
      )}
      <StyledCandlestickChart ref={svgRef}>
        <ClipPaths {...dimensions.sizes} />
      </StyledCandlestickChart>
      <CandleTooltip {...candles} />
    </StyledContainer>
  )
}

export default CandlestickChart
