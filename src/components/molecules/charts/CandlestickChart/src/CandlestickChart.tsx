import { FC, useRef } from 'react'

import { CandlestickChartProps } from './CandlestickChart.types'
import {
  StyledCandlestickChart,
  StyledContainer,
  StyledLoaderContainer,
} from './CandlestickChart.style'
import {
  useAxes,
  useCandles,
  useControls,
  useDataRange,
  useScales,
  useSizes,
  useTouch,
} from './hooks'
import {
  CandleTooltip,
  ClipPaths,
  Controls,
  CurrentIndicator,
} from './components'
import Loader from '@pi-lib/loader'

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
  const { activeItem, resetSelection } = useCandles(
    svgRef,
    sizes,
    dataRange,
    scales
  )
  useTouch(svgRef, controls, resetSelection)

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
        }}
      >
        <ClipPaths {...sizes} />
      </StyledCandlestickChart>

      <CandleTooltip {...activeItem} />
      {!!data?.length && (
        <CurrentIndicator
          {...{ sizes }}
          currentItem={data[data.length - 1]}
          yScale={scales.yScale}
        />
      )}
    </StyledContainer>
  )
}

export default CandlestickChart
