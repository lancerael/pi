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
import { DEFAULT_CONTROLS } from './CandlestickChart.constants'
import { CurrentIndicator } from './components/CurrentIndicator'
import { IControls } from './components/Controls/Controls.types'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [controls, setControls] = useState<IControls>(DEFAULT_CONTROLS)
  const dimensions = useDimensions(svgRef, containerRef, data.length, controls)
  const scaling = useScaling(data, dimensions)
  useAxes(svgRef, data, scaling.scales, dimensions)
  useTouch(svgRef, setControls)
  const candles = useCandles(
    svgRef,
    data,
    dimensions,
    scaling,
    controls.transition ?? false
  )

  return (
    <StyledContainer ref={containerRef}>
      {!data?.length ? (
        <StyledLoaderContainer>
          <Loader isLarge />
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
          x={dimensions.sizes.width + dimensions.sizes.left - 15}
          y={
            scaling.scales.yScale(data[data.length - 1].close) +
            +dimensions.sizes.top -
            15
          }
        />
      )}
    </StyledContainer>
  )
}

export default CandlestickChart
