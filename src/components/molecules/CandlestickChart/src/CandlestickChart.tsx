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
  const { dimensions, visibleRange } = useDimensions(
    svgRef,
    data.length,
    controls
  )
  const { scales, utils } = useScaling(data, dimensions, visibleRange)
  const { item, position } = useCandles(
    svgRef,
    data,
    scales,
    utils,
    visibleRange
  )
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
            controls,
            setControls,
            visibleRange,
            length: data.length,
          }}
        />
      )}
      <StyledCandlestickChart ref={svgRef}>
        <ClipPaths {...dimensions} />
      </StyledCandlestickChart>
      <CandleTooltip {...{ item, position }} />
    </StyledContainer>
  )
}

export default CandlestickChart
