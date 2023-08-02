import { useCallback, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'
import { doTransition } from '../methods'

export interface PanLevel {
  x: number
  y: number
}

export interface IControls {
  zoomLevel: number
  panLevel: PanLevel
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>
  setPanLevel: React.Dispatch<React.SetStateAction<PanLevel>>
}

export interface Trackers {
  isPressed: boolean
  oldClientX: number
  oldClientY: number
  oldPinchDist: number
  oldPanChange: PanLevel
  activePointers: {
    [key: string]: Pick<PointerEvent, 'pageX' | 'pageY'>
  }
}

/**
 * A React hook to add touch gestures to the chart
 * @param targetRef
 * @param controls
 * @param zoomRange
 * @param resetSelection
 */
export const useTouch = <T = HTMLElement>(
  targetRef: React.RefObject<T>,
  controls: IControls,
  zoomRange: [number, number] = [0.25, 2],
  resetCallback?: () => void
) => {
  const trackers = useRef<Trackers>({
    isPressed: false,
    oldClientX: 0,
    oldClientY: 0,
    oldPinchDist: 0,
    oldPanChange: { x: 0, y: 0 },
    activePointers: {},
  })

  // Changes the zoom level
  const zoom = useCallback((zoomChange: number) => {
    resetCallback?.()
    const [min, max] = zoomRange
    controls.setZoomLevel((zoomLevel) => {
      let newZoom = zoomLevel - zoomChange
      newZoom = Math.round(newZoom * 1000) / 1000
      newZoom = newZoom < min ? min : newZoom
      newZoom = newZoom > max ? max : newZoom
      return newZoom
    })
  }, [])

  // Changes the pan level
  const pan = useCallback(
    (panChange: PanLevel) => {
      resetCallback?.()
      trackers.current.oldPanChange = { ...panChange }
      controls.setPanLevel((panLevel) => ({
        x: panLevel.x + panChange.x / controls.zoomLevel,
        y: panLevel.y + panChange.y / controls.zoomLevel,
      }))
    },
    [controls.zoomLevel]
  )

  // Handles press start
  const start = useCallback(({ pointerId, pageX, pageY }: PointerEvent) => {
    trackers.current.isPressed = true
    trackers.current.oldClientX = 0
    trackers.current.oldPinchDist = 0
    trackers.current.activePointers[pointerId] = { pageX, pageY }
  }, [])

  // Handles press stop
  const stop = useCallback(
    (e: PointerEvent) => {
      if (Math.abs(trackers.current.oldPanChange.x) > 15) {
        doTransition({
          value: controls.panLevel.x,
          target: controls.panLevel.x + trackers.current.oldPanChange.x * 3,
          callback: (x) => controls.setPanLevel({ ...controls.panLevel, x }),
          speed: 3 + trackers.current.oldPanChange.x / 10 / controls.zoomLevel,
          intervalId: 'swipe',
        })
      }
      trackers.current.oldPanChange.x = 0
      trackers.current.isPressed = false
      trackers.current.activePointers = {}
    },
    [controls.panLevel.x, trackers.current.oldPanChange.x]
  )

  // Handles movement - used to zoom or pan
  // Depending on number of pointers active
  const move = useCallback(
    ({ clientX, clientY, pointerId, pageX, pageY }: PointerEvent) => {
      const pointerVals = Object.values(trackers.current.activePointers)
      if (trackers.current.isPressed) {
        if (pointerVals?.length === 2) {
          if (
            Object.keys(trackers.current.activePointers).indexOf(
              `${pointerId}`
            ) !== 1
          )
            return
          trackers.current.activePointers[pointerId] = { pageX, pageY }
          const xDist = pointerVals[0].pageX - pointerVals[1].pageX
          const yDist = pointerVals[0].pageY - pointerVals[1].pageY
          const pinchDist = Math.sqrt(xDist * xDist + yDist * yDist)
          const zoomChange = trackers.current.oldPinchDist
            ? (trackers.current.oldPinchDist - pinchDist) / 160
            : 0
          trackers.current.oldPinchDist = pinchDist
          zoom(zoomChange)
          return
        } else {
          const x = trackers.current.oldClientX
            ? clientX - trackers.current.oldClientX
            : 0
          const y = trackers.current.oldClientY
            ? clientY - trackers.current.oldClientY
            : 0
          trackers.current.oldClientX = clientX
          trackers.current.oldClientY = clientY
          pan({ x, y })
        }
      }
    },
    [controls.panLevel.x, trackers.current]
  )

  const throttledZoom = useCallback(throttle(zoom, 10), [zoom])
  const throttledMove = useCallback(throttle(move, 10), [move])
  const throttledPan = useCallback(throttle(pan, 10), [pan])

  // Handler for trackpad pinch
  const pinch = useCallback(
    (e: WheelEvent) => {
      if (e.ctrlKey) {
        throttledZoom(e.deltaY * 0.0005)
      } else {
        throttledPan({ x: e.deltaY, y: 0 })
      }
      e.preventDefault()
    },
    [throttledZoom, throttledPan]
  )

  // Handler for pointer move to determine throttle
  const pointerMove = useCallback(
    (e: PointerEvent) =>
      e.pointerType === 'mouse' ? throttledMove(e) : move(e),
    [throttledMove, move]
  )

  useEffect(() => {
    // Used to add and remove all the listeners
    const updateListeners = (
      action: 'addEventListener' | 'removeEventListener',
      pinchArgs?: { passive: boolean }
    ) => {
      const target = targetRef.current as HTMLElement
      if (!target?.addEventListener) return
      window[action]('pointerup', stop as EventListener)
      window[action]('pointermove', pointerMove as EventListener)
      target?.[action]('pointerdown', start as EventListener)
      target?.[action]('wheel', pinch as EventListener, pinchArgs)
    }
    updateListeners('addEventListener', { passive: false })

    return () => updateListeners('removeEventListener')
  }, [targetRef.current])
}
