import { IControls, SvgRef } from '../CandlestickChart.types'
import { useEffect } from 'react'
import throttle from 'lodash.throttle'
import { ZOOM_RANGE } from '../CandlestickChart.constants'

/**
 * A React hook to add touch gestures to the chart
 * @param svgRef
 * @param controls
 * @param resetSelection
 */
export const useTouch = (
  svgRef: SvgRef,
  controls: IControls,
  resetSelection: () => void
) => {
  useEffect(() => {
    let isPressed = false
    let oldClientX = 0
    let oldPinchDist = 0
    let activePointers: {
      [key: string]: Pick<PointerEvent, 'pageX' | 'pageY'>
    } = {}

    // Changes the zoom level
    const zoom = (zoomChange: number) => {
      const [min, max] = ZOOM_RANGE
      controls.setZoomLevel((zoomLevel) => {
        let newZoom = zoomLevel - zoomChange
        newZoom = Math.round(newZoom * 1000) / 1000
        newZoom = newZoom < min ? min : newZoom
        newZoom = newZoom > max ? max : newZoom
        return newZoom
      })
    }

    // Changes the pan level
    const pan = (panChange: number) => {
      controls.setPanLevel((panLevel) => {
        return panLevel + panChange / controls.zoomLevel
      })
    }

    // Handles press start
    const start = ({ pointerId, pageX, pageY }: PointerEvent) => {
      isPressed = true
      oldClientX = 0
      oldPinchDist = 0
      activePointers[pointerId] = { pageX, pageY }
    }

    // Handles press stop
    const stop = (e: PointerEvent) => {
      isPressed = false
      activePointers = {}
    }

    // Handles movement - used to zoom or pan
    // Depending on number of pointers active
    const move = ({ clientX, pointerId, pageX, pageY }: PointerEvent) => {
      const pointerVals = Object.values(activePointers)
      if (isPressed) {
        resetSelection()
        if (pointerVals?.length === 2) {
          if (Object.keys(activePointers).indexOf(`${pointerId}`) !== 1) return
          activePointers[pointerId] = { pageX, pageY }
          const xDist = pointerVals[0].pageX - pointerVals[1].pageX
          const yDist = pointerVals[0].pageY - pointerVals[1].pageY
          const pinchDist = Math.sqrt(xDist * xDist + yDist * yDist)
          const zoomChange = oldPinchDist ? (oldPinchDist - pinchDist) / 160 : 0
          oldPinchDist = pinchDist
          zoom(zoomChange)
          return
        } else {
          const panChange = oldClientX ? clientX - oldClientX : 0
          oldClientX = clientX
          pan(panChange)
        }
      }
    }

    const throttledZoom = throttle(zoom, 10)
    const throttledMove = throttle(move, 10)
    const throttledPan = throttle((panChange) => pan(panChange), 10)

    // Handler for trackpad pinch
    const pinch = (e: WheelEvent) => {
      if (e.ctrlKey) {
        throttledZoom(e.deltaY * 0.006)
        e.preventDefault()
      } else {
        throttledPan(e.deltaY * 0.006)
      }
    }

    // Handler for pointer move to determine throttle
    const pointerMove = (e: PointerEvent) =>
      e.pointerType === 'mouse' ? throttledMove(e) : move(e)

    // Used to add and remove all the listeners
    const updateListeners = (
      action:
        | 'addEventListener'
        | 'removeEventListener' = 'removeEventListener',
      pinchArgs?: { passive: boolean }
    ) => {
      window[action]('pointerup', stop as EventListener)
      window[action]('pointermove', pointerMove as EventListener)
      svgRef.current?.[action]('pointerdown', start as EventListener)
      svgRef.current?.[action]('wheel', pinch as EventListener, pinchArgs)
    }
    updateListeners('addEventListener', { passive: false })

    return updateListeners
  }, [svgRef.current])
}
