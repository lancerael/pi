import { useCallback, useEffect, useRef } from 'react'
import {
  ActionMethods,
  NumberRange,
  Trackers,
  UseTouchProps,
} from './useTouch.types'
import { clampValue, doTransition, throttle } from '@pi-lib/utils'
import { PanLevel } from './hooks/useControls'

/**
 * `useTouch` is a hook used to add touch controls to a React component.
 * It provides functionalities for zooming, panning, and handling various touch gestures.
 *
 * @template T - The type of the HTML element this hook is used with.
 * @param {UseTouchProps} options - The options object.
 * @param {() => void} [options.resetCallback] - An optional callback function to reset the state.
 */
export const useTouch = <T = HTMLElement>({
  targetRef,
  controls,
  zoomRange = [0.25, 2],
  panRange,
  resetCallback,
  stopCallback,
}: UseTouchProps<T>) => {
  const trackers = useRef<Trackers>({
    isPressed: false,
    oldPinchDist: 0,
    oldPanChange: { x: 0, y: 0 },
    activePointers: {},
    clearTransition: () => {},
  })

  /**
   * Changes the zoom level.
   * @param {number} zoomChange - The change in zoom level.
   */
  const zoom = useCallback((zoomChange: number) => {
    resetCallback?.()
    const [min, max] = zoomRange
    controls.setZoomLevel((zoomLevel) => {
      const newZoom = zoomLevel - zoomChange * 50
      return clampValue(Math.round(newZoom * 1000) / 1000, min, max)
    })
  }, [])

  /**
   * Changes the pan level.
   * @param {PanLevel} panChange - The change in pan levels along x and y axes.
   */
  const pan = useCallback(
    (panChange: PanLevel) => {
      resetCallback?.()
      trackers.current.oldPanChange = { ...panChange }
      controls.setPanLevel((panLevel) => {
        const setVal = (
          axis: 'x' | 'y',
          [min, max]: NumberRange = [-99999, 99999]
        ) => {
          return clampValue(panLevel[axis] + panChange[axis], min, max)
        }
        return {
          x: setVal('x', panRange?.[0]),
          y: setVal('y', panRange?.[1]),
        }
      })
    },
    [controls.zoomLevel, panRange]
  )

  /**
   * Handles the start of a touch or pointer event.
   * @param {PointerEvent} event - The pointer event object.
   */
  const start = useCallback((e: PointerEvent) => {
    e.preventDefault()
    trackers.current?.clearTransition()
    trackers.current.isPressed = true
    trackers.current.oldPinchDist = 0
    trackers.current.activePointers[e.pointerId] = {
      pageX: e.pageX,
      pageY: e.pageY,
      oldPageX: e.pageX,
      oldPageY: e.pageY,
    }
  }, []) as EventListener

  /**
   * Handles the end of a touch or pointer event.
   * @param {PointerEvent} event - The pointer event object.
   */
  const stop = useCallback(
    (e: PointerEvent) => {
      if (trackers.current.isPressed) stopCallback?.()
      const { x, y } = trackers.current.oldPanChange
      if (Math.abs(x) + Math.abs(y) > 10) {
        const values = Object.values(controls.panLevel)
        const targets = [x, y].map(
          (old, i) => values[i] + Math.round(old * 5) * controls.zoomLevel
        )
        trackers.current.clearTransition = doTransition({
          values,
          targets,
          callback: ([newX, newY]) =>
            controls.setPanLevel(() => ({
              x: newX,
              y: newY,
            })),
          speed: 10,
          intervalId: `swipe`,
        })
      }
      trackers.current.oldPanChange = { x: 0, y: 0 }
      trackers.current.isPressed = false
      delete trackers.current.activePointers[e.pointerId]
    },
    [controls.zoomLevel, trackers.current.oldPanChange.x]
  ) as EventListener

  /**
   * Handles movement events to zoom or pan based on the number of pointers active.
   * @param {PointerEvent} event - The pointer event object.
   */
  const move = useCallback(
    (e: PointerEvent) => {
      e.preventDefault()
      const { activePointers, isPressed, oldPinchDist } = trackers.current
      const pointerVals = Object.values(activePointers)
      if (pointerVals?.length > 1) {
        //User is pinching
        if (Object.keys(activePointers)[1] !== String(e.pointerId)) return
        activePointers[e.pointerId] = { pageX: e.pageX, pageY: e.pageY }
        const xDist = pointerVals[0].pageX - pointerVals[1].pageX
        const yDist = pointerVals[0].pageY - pointerVals[1].pageY
        const pinchDist = Math.sqrt(xDist * xDist + yDist * yDist)
        const zoomChange = oldPinchDist ? (oldPinchDist - pinchDist) / 200 : 0
        trackers.current.oldPinchDist = pinchDist
        zoom(zoomChange)
      } else if (isPressed) {
        // User is dragging
        const x = pointerVals[0].oldPageX
          ? e.pageX - pointerVals[0].oldPageX
          : 0
        const y = pointerVals[0].oldPageY
          ? e.pageY - pointerVals[0].oldPageY
          : 0
        pointerVals[0].oldPageX = e.pageX
        pointerVals[0].oldPageY = e.pageY
        pan({ x, y })
      }
    },
    [controls.panLevel.x, trackers.current]
  )

  const throttledZoom = useCallback(throttle(zoom, 10), [zoom])
  const throttledMove = useCallback(throttle(move, 10), [move])
  const throttledPan = useCallback(throttle(pan, 10), [pan])

  /**
   * Handler for trackpad pinch or mousewheel zoom.
   * @param {WheelEvent} event - The wheel event object.
   */
  const pinch = useCallback(
    (e: WheelEvent) => {
      if (e.ctrlKey) {
        throttledZoom(e.deltaY * 0.0003)
      } else {
        throttledPan({ x: e.deltaY * 0.05, y: 0 })
      }
      e.preventDefault()
    },
    [throttledZoom, throttledPan]
  ) as EventListener

  /**
   * Handler for pointer movement to determine throttle.
   * @param {PointerEvent} event - The pointer event object.
   */
  const pointerMove = useCallback(
    (e: PointerEvent) =>
      e.pointerType === 'mouse' ? throttledMove(e) : move(e),
    [throttledMove, move]
  ) as EventListener

  useEffect(() => {
    // Add/remove all the listeners
    const updateListeners = (action: 'add' | 'remove') => {
      const args = (passive: boolean) =>
        action === 'add' ? { passive } : undefined
      const actionMethod: ActionMethods = `${action}EventListener`
      const target = targetRef.current as HTMLElement
      if (!target?.addEventListener) return
      window[actionMethod]('pointerup', stop, args(true))
      window[actionMethod]('pointermove', pointerMove, args(false))
      target?.[actionMethod]('pointerdown', start, args(false))
      target?.[actionMethod]('wheel', pinch, args(false))
      target.style.userSelect = 'none'
      target.style.touchAction = 'none'
    }
    updateListeners('add')
    return () => updateListeners('remove')
  }, [controls, targetRef.current])
}
