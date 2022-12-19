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
import { DEFAULT_CONTROLS, CHART_PADDING } from './CandlestickChart.constants'
import { CurrentIndicator } from './components/CurrentIndicator'
import { scaleSequential } from 'd3-scale'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [controls, setControls] = useState(DEFAULT_CONTROLS)
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
      {data.length && (
        <CurrentIndicator
          value={data[data.length - 1].close}
          x={dimensions.sizes.width}
          y={scaling.scales.yScale(data[data.length - 1].close)}
        />
      )}
    </StyledContainer>
  )
}

export default CandlestickChart
