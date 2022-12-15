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

export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [controls, setControls] = useState({ zoomLevel: 1, panLevel: 1 })
  const dimensions = useDimensions(svgRef, data.length, controls)
  const scaling = useScaling(data, dimensions)
  const candles = useCandles(svgRef, data, dimensions, scaling)
  useAxes(svgRef, data, scaling.scales, dimensions)

  return (
    <StyledContainer>
      {!data?.length ? (
        <StyledLoaderContainer>
          <Loader />
        </StyledLoaderContainer>
      ) : (
        <Controls
          {...{
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
