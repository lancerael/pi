import { useGesture } from '@use-gesture/react'
import { IControls, SvgRef } from '../CandlestickChart.types'
import { useRef } from 'react'
import { ZOOM_RANGE } from '../CandlestickChart.constants'

/**
 * A React hook to add touch gestures to the chart
 * @param svgRef
 * @param controls
 */
export const useTouch = (
  svgRef: SvgRef,
  controls: IControls,
  resetSelection: () => void
) => {
  const prevZoom = useRef(1)
  useGesture(
    {
      onDrag: ({ pinching, offset: [x] }: any) => {
        return !pinching && controls.setPanLevel(x)
      },
      onPinch: ({ offset: [s], movement: [ms] }: any) => {
        resetSelection()
        let zoomOffset = ms - prevZoom.current
        prevZoom.current = ms
        return controls.setZoomLevel((zoomLevel) => {
          const newZoom = Math.round((zoomLevel + zoomOffset) * 100) / 100
          return (newZoom > ZOOM_RANGE[1] && zoomOffset > 0) ||
            (newZoom < ZOOM_RANGE[0] && zoomOffset < 0)
            ? zoomLevel
            : newZoom
        })
      },
      onPinchEnd: () => (prevZoom.current = 1),
    },
    {
      target: svgRef,
    }
  )
}
