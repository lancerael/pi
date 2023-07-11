import { useGesture } from '@use-gesture/react'
import { IControls, SvgRef } from '../CandlestickChart.types'
import { useCallback, useRef } from 'react'
import { ZOOM_RANGE } from '../CandlestickChart.constants'
import throttle from 'lodash.throttle'

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
  const prevPan = useRef(0)
  const prevZoom = useRef(1)

  const handleDrag = useCallback(({ pinching, offset: [x] }: any) => {
    let panOffset = (x - prevPan.current) * 1.55
    prevPan.current = x
    return (
      !pinching &&
      controls.setPanLevel((panLevel) => {
        const newPan = Math.round((panLevel + panOffset) * 100) / 100
        return newPan
      })
    )
  }, [])

  const handlePinch = useCallback(({ movement: [ms] }: any) => {
    resetSelection()
    let zoomOffset = (ms - prevZoom.current) * 0.8
    if (Math.abs(zoomOffset) > 0.2) zoomOffset = 0
    console.log(ms, prevZoom.current, zoomOffset.toFixed(2))
    prevZoom.current = ms
    return controls.setZoomLevel((zoomLevel) => {
      console.log(zoomLevel)
      const newZoom = Math.round((zoomLevel + zoomOffset) * 100) / 100
      return (newZoom > ZOOM_RANGE[1] && zoomOffset > 0) ||
        (newZoom < ZOOM_RANGE[0] && zoomOffset < 0)
        ? zoomLevel
        : newZoom
    })
  }, [])

  const throttledDrag = useCallback(throttle(handleDrag, 30), [])
  const throttledZoom = useCallback(throttle(handlePinch, 50), [])

  useGesture(
    {
      onDrag: throttledDrag,
      onPinch: throttledZoom,
      onPinchEnd: () => setTimeout(() => (prevZoom.current = 1)),
    },
    {
      target: svgRef,
    }
  )
}
