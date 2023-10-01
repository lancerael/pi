import { useCallback, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'
import {
  NumberRange,
  PanLevel,
  Trackers,
  UseTouchProps,
} from './useTouch.types'
import { doTransition } from '@pi-lib/utils'

/**
 * `useTouch` is a hook used to add touch controls to a React component.
 * It provides functionalities for zooming, panning, and handling various touch gestures.
 *
 * @template T - The type of the HTML element this hook is used with.
 * @param {Object} options - The options object.
 * @param {React.RefObject<T>} options.targetRef - The reference to the target element the touch controls are added to.
 * @param {TouchControls} options.controls - The touch controls object that includes methods for setting zoom and pan levels.
 * @param {NumberRange} [options.zoomRange=[0.25, 2]] - The range of allowable zoom levels.
 * @param {[NumberRange, NumberRange]} [options.panRange=[[0, 2000], [0, 2000]]] - The range of allowable pan levels for both x and y axis.
 * @param {() => void} [options.resetCallback] - An optional callback function to reset the state.
 */
export const useTouch = <T = HTMLElement>({
  targetRef,
  controls,
  zoomRange = [0.25, 2],
  panRange = [
    [0, 2000],
    [0, 2000],
  ],
  resetCallback,
}: UseTouchProps<T>) => {
  const trackers = useRef<Trackers>({
    isPressed: false,
    oldClientX: 0,
    oldClientY: 0,
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
      let newZoom = zoomLevel - zoomChange * 50
      newZoom = Math.round(newZoom * 1000) / 1000
      newZoom = newZoom < min ? min : newZoom
      newZoom = newZoom > max ? max : newZoom
      return newZoom
    })
  }, [])

  /**
   * Changes the pan level.
   * @param {PanLevel} panChange - The change in pan levels.
   */
  const pan = useCallback(
    (panChange: PanLevel) => {
      resetCallback?.()
      trackers.current.oldPanChange = { ...panChange }
      controls.setPanLevel((panLevel) => {
        const setVal = (axis: 'x' | 'y', [min, max]: NumberRange) => {
          let val = panLevel[axis] + panChange[axis]
          val = val < min ? min : val
          val = val > max ? max : val
          console.log(val, panChange)
          return val
        }
        return { x: setVal('x', panRange[0]), y: setVal('y', panRange[1]) }
      })
    },
    [controls.zoomLevel]
  )

  /**
   * Handles the start of a touch or pointer event.
   * @param {PointerEvent} event - The pointer event object.
   */
  const start = useCallback(({ pointerId, pageX, pageY }: PointerEvent) => {
    trackers.current?.clearTransition()
    trackers.current.isPressed = true
    trackers.current.oldClientX = 0
    trackers.current.oldClientY = 0
    trackers.current.oldPinchDist = 0
    trackers.current.activePointers[pointerId] = { pageX, pageY }
  }, []) as EventListener

  /**
   * Handles the end of a touch or pointer event.
   * @param {PointerEvent} event - The pointer event object.
   */
  const stop = useCallback(
    (e: PointerEvent) => {
      const swipeAxis = (axis: 'x' | 'y') => {
        const oldChange = trackers.current.oldPanChange[axis]
        const offset = Math.round(oldChange * 5) * controls.zoomLevel
        if (Math.abs(oldChange) > 5) {
          trackers.current.clearTransition = doTransition({
            value: controls.panLevel[axis],
            target: controls.panLevel[axis] + offset,
            callback: (val) =>
              controls.setPanLevel((panLevel) => ({
                ...panLevel,
                [axis]: val,
              })),
            speed: 10,
            intervalId: `swipe-${axis}`,
          })
        }
      }
      swipeAxis('x')
      swipeAxis('y')
      trackers.current.oldPanChange.x = 0
      trackers.current.oldPanChange.y = 0
      trackers.current.isPressed = false
      trackers.current.activePointers = {}
    },
    [controls.zoomLevel, trackers.current.oldPanChange.x]
  ) as EventListener

  /**
   * Handles movement events to zoom or pan based on the number of pointers active.
   * @param {PointerEvent} event - The pointer event object.
   */
  const move = useCallback(
    ({ clientX, clientY, pointerId, pageX, pageY }: PointerEvent) => {
      const pointerVals = Object.values(trackers.current.activePointers)
      if (!trackers.current.isPressed) return
      if (pointerVals?.length === 2) {
        // As there are 2 pointers, user is pinching
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
        // There is a single pointer - user is dragging
        const x = trackers.current.oldClientX
          ? clientX - trackers.current.oldClientX
          : 0
        const y = trackers.current.oldClientY
          ? clientY - trackers.current.oldClientY
          : 0
        trackers.current.oldClientX = clientX
        trackers.current.oldClientY = clientY
        // console.log(x, y, clientX, clientY)
        pan({ x, y })
      }
    },
    [controls.panLevel.x, trackers.current]
  )

  const throttledZoom = useCallback(throttle(zoom, 10), [zoom])
  const throttledMove = useCallback(throttle(move, 10), [move])
  const throttledPan = useCallback(throttle(pan, 10), [pan])

  /**
   * Handler for trackpad pinch.
   * @param {WheelEvent} event - The wheel event object.
   */
  const pinch = useCallback(
    (e: WheelEvent) => {
      if (!e.ctrlKey) {
        throttledZoom(e.deltaY * 0.00003)
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
      const actionMethod:
        | 'addEventListener'
        | 'removeEventListener' = `${action}EventListener`
      const target = targetRef.current as HTMLElement
      if (!target?.addEventListener) return
      window[actionMethod]('pointerup', stop, args(true))
      window[actionMethod]('pointermove', pointerMove, args(true))
      target?.[actionMethod]('pointerdown', start, args(true))
      target?.[actionMethod]('wheel', pinch, args(false))
    }
    updateListeners('add')
    return () => updateListeners('remove')
  }, [controls, targetRef.current])
}
