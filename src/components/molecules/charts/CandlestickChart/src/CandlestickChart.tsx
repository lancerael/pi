import { FC, useRef } from 'react'

import {
  StyledCandlestickChart,
  StyledContainer,
  StyledLoaderContainer,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import {
  useAxes,
  useCandles,
  useSizes,
  useDataRange,
  useScales,
  useControls,
  useTouch,
} from './hooks'
import { CandleTooltip, ClipPaths, Controls } from './components'
import Loader from '@pi-lib/loader'
import { CurrentIndicator } from './components/CurrentIndicator'

/**
 * A candlestick chart React component used to show the movement of traded assets.
 */
export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useControls()
  const sizes = useSizes(svgRef, containerRef)
  const dataRange = useDataRange(sizes.width, data, controls)
  const scales = useScales(sizes, dataRange)
  useAxes(svgRef, sizes, dataRange, scales)
  const candles = useCandles(svgRef, sizes, dataRange, scales)
  useTouch(svgRef, controls)

  return (
    <StyledContainer ref={containerRef}>
      {!data?.length ? (
        <StyledLoaderContainer>
          <Loader isLarge />
        </StyledLoaderContainer>
      ) : (
        <Controls
          {...{
            controls,
            dataRange,
          }}
        />
      )}

      <StyledCandlestickChart
        ref={svgRef}
        style={{
          visibility: !data?.length ? 'hidden' : 'visible',
          touchAction: 'none',
        }}
      >
        <ClipPaths {...sizes} />
      </StyledCandlestickChart>
      <CandleTooltip {...candles} />
      {!!data?.length && (
        <CurrentIndicator
          value={data[data.length - 1].close}
          x={sizes.width + sizes.left - 15}
          y={scales.yScale(data[data.length - 1].close) + +sizes.top - 15}
        />
      )}
    </StyledContainer>
  )
}

export default CandlestickChart
