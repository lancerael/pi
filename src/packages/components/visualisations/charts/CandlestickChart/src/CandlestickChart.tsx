import { useRef } from 'react'
import { CandlestickChartProps } from './CandlestickChart.types'
import {
  StyledCandlestickChart,
  StyledContainer,
  StyledLoaderContainer,
} from './CandlestickChart.style'
import {
  useAxes,
  useCandles,
  useChartControls,
  useDataRange,
  useScales,
  useSizes,
} from './hooks'
import {
  CandleTooltip,
  ClipPaths,
  Controls,
  CurrentIndicator,
} from './components'
import Loader from '@pi-lib/loader'
import { ZOOM_RANGE } from './CandlestickChart.constants'
import { useTouch } from '@pi-lib/use-touch'

/**
 * A candlestick chart React component used to show the movement of traded assets over time.
 */
export const CandlestickChart = ({ data = [] }: CandlestickChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useChartControls()
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

  useTouch<SVGSVGElement>({
    targetRef: svgRef,
    controls,
    zoomRange: ZOOM_RANGE,
    panRange: dataRange.totalWidth
      ? [
          [0, dataRange.totalWidth],
          [0, 0],
        ]
      : undefined,
    resetCallback: resetSelection,
  })

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
      <StyledCandlestickChart ref={svgRef} $isVisible={!!data?.length}>
        <ClipPaths {...sizes} />
      </StyledCandlestickChart>
      <CandleTooltip {...activeItem} />
      <CurrentIndicator
        {...{ sizes }}
        currentItem={dataRange.lastItem}
        yScale={scales.yScale}
      />
    </StyledContainer>
  )
}

export default CandlestickChart
