import { useGesture } from '@use-gesture/react'
import { IControls, SvgRef } from '../CandlestickChart.types'

/**
 * A React hook to add touch gestures to the chart
 * @param svgRef
 * @param controls
 */
export const useTouch = (svgRef: SvgRef, controls: IControls) => {
  useGesture(
    {
      onDrag: ({ pinching, offset: [x] }: any) =>
        !pinching && controls.setPanLevel(x),
      onPinch: ({ offset: [s] }: any) => controls.setZoomLevel(s),
    },
    {
      target: svgRef,
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
    }
  )
}
