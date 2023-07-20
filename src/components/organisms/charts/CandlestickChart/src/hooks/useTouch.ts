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
        newZoom = newZoom < 0.1 ? 0.1 : newZoom
        newZoom = Math.round(newZoom * 1000) / 1000
        newZoom = newZoom < min ? min : newZoom
        newZoom = newZoom > max ? max : newZoom
        return newZoom
      })
    }

    const throttledZoom = throttle(zoom, 10)

    // Changes the pan level
    const pan = (panChange: number) => {
      controls.setPanLevel((panLevel) => {
        const newPan = panLevel + panChange / controls.zoomLevel
        return newPan > 1 ? newPan : 1
      })
    }

    // Handles press start
    const start = ({ pointerId, pageX, pageY }: PointerEvent) => {
      resetSelection()
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
          pan(panChange / controls.zoomLevel)
        }
      }
    }

    const throttledMove = throttle(move, 10)

    // Handler for trackpad pinch
    const pinch = (e: WheelEvent) => {
      if (e.ctrlKey) {
        throttledZoom(e.deltaY * 0.006)
        e.preventDefault()
      }
    }

    // Handler for pointer move to determine throttle
    const pointerMove = (e: PointerEvent) =>
      e.pointerType === 'mouse' ? throttledMove(e) : move(e)

    // Used to add and remove all the listeners
    const updateListeners = (
      action: 'add' | 'remove' = 'remove',
      pinchArgs?: { passive: boolean }
    ) => {
      const onWindow = window[`${action}EventListener`]
      const onSvg = svgRef.current?.[`${action}EventListener`]
      onWindow('pointerup', stop as EventListener)
      onSvg?.('pointerdown', start as EventListener)
      onSvg?.('pointermove', pointerMove as EventListener)
      onSvg?.('wheel', pinch as EventListener, pinchArgs)
    }

    updateListeners('add', { passive: false })
    return updateListeners
  }, [svgRef.current])
}
