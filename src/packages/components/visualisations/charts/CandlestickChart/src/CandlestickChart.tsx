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
import { PanRange, useTouch } from '@pi-lib/use-touch'
import { flushTransition } from '@pi-lib/do-transition'

/**
 * A candlestick chart React component used to show the movement of traded assets over time.
 */
export const CandlestickChart = ({ data = [], id }: CandlestickChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const panRange = useRef<PanRange>([
    [0, 0],
    [0, 0],
  ])
  const controls = useChartControls(id)
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

  if (dataRange.panExtent) {
    panRange.current = [
      [
        controls.touchState.zoomOffset.x,
        dataRange.panExtent + controls.touchState.zoomOffset.x,
      ],
      [0, 0],
    ]
  }

  useTouch<SVGSVGElement>({
    targetRef: svgRef,
    controls,
    isScroller: true,
    zoomRange: ZOOM_RANGE,
    panRange: panRange.current,
    resetCallback: () => {
      resetSelection()
      flushTransition('zoom')
      flushTransition('pan')
    },
  })

  return (
    <StyledContainer ref={containerRef}>
      {!data?.length ? (
        <StyledLoaderContainer>
          <Loader isLarge />
        </StyledLoaderContainer>
      ) : (
        <Controls {...{ resetSelection, controls, dataRange, panRange }} />
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
