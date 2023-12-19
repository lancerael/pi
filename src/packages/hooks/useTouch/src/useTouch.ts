import { useCallback, useEffect, useRef } from 'react'
import {
  ActionMethods,
  NumberRange,
  Trackers,
  UseTouchProps,
} from './useTouch.types'
import { clampValue, throttle } from '@pi-lib/utils'
import doTransition from '@pi-lib/do-transition'
import { Coords } from './hooks'

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
  modifier,
  isScroller,
  resetCallback,
  stopCallback,
}: UseTouchProps<T>) => {
  const trackers = useRef<Trackers>({
    isPressed: false,
    oldPinchDist: 0,
    oldPanChange: { x: 0, y: 0 },
    activePointers: {},
    clearTransition: () => {},
    ranges: { panRange, zoomRange },
  })

  trackers.current.ranges = { panRange, zoomRange }

  /**
   * Changes the zoom level.
   * @param {number} zoomChange - The change in zoom level.
   */
  const zoom = useCallback((zoomChange: number) => {
    resetCallback?.()
    const [min, max] = trackers.current.ranges.zoomRange
    controls.setTouchState({
      modifier,
      zoom: clampValue(
        controls.touchStateSignal.value.zoom - zoomChange * 50,
        min,
        max
      ),
    })
  }, [])

  /**
   * Changes the pan level.
   * @param {PanLevel} panChange - The change in pan levels along x and y axes.
   */
  const pan = useCallback((panChange: Coords) => {
    resetCallback?.()
    trackers.current.oldPanChange = { ...panChange }
    const setVal = (
      axis: 'x' | 'y',
      [min, max]: NumberRange = [-99999, 99999]
    ) => {
      return clampValue(
        controls.touchStateSignal.value.pan[axis] + panChange[axis],
        min,
        max
      )
    }
    const { panRange } = trackers.current.ranges
    controls.setTouchState({
      modifier,
      pan: {
        x: setVal('x', panRange?.[0]),
        y: setVal('y', panRange?.[1]),
      },
    })
  }, [])

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
      const { x, y } = trackers.current.oldPanChange
      const { pan, zoom } = controls.touchStateSignal.value
      if (Math.abs(x) + Math.abs(y) > 10) {
        const values = Object.values(pan)
        const targets = [x, y].map(
          (old, i) => values[i] + Math.round(old * 5) * zoom
        )
        trackers.current.clearTransition = doTransition({
          values,
          targets,
          callback: ([newX, newY]) => {
            controls.setTouchState({
              modifier,
              pan: {
                x: newX,
                y: newY,
              },
            })
          },
          endCallback: () => stopCallback?.(),
          increments: 10,
          intervalId: `swipe`,
        })
      } else {
        if (trackers.current.isPressed) stopCallback?.()
      }
      trackers.current.isPressed = false
      trackers.current.oldPanChange = { x: 0, y: 0 }
      !!e && delete trackers.current.activePointers[e.pointerId]
    },
    [
      JSON.stringify(controls.touchStateSignal.value),
      trackers.current.oldPanChange.x,
      trackers.current.oldPanChange.y,
    ]
  ) as EventListener

  /**
   * Handles movement events to zoom or pan based on the number of pointers active.
   * @param {PointerEvent} event - The pointer event object.
   */
  const move = useCallback((e: PointerEvent) => {
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
      const zoomChange = oldPinchDist ? (oldPinchDist - pinchDist) / 3000 : 0
      trackers.current.oldPinchDist = pinchDist
      zoom(zoomChange)
    } else if (isPressed) {
      // User is dragging
      const { oldPageX: oldX, oldPageY: oldY } = pointerVals[0]
      const x = oldX ? e.pageX - oldX : 0
      const y = oldY ? e.pageY - oldY : 0
      pointerVals[0].oldPageX = e.pageX
      pointerVals[0].oldPageY = e.pageY
      pan({ x, y })
    }
  }, [])

  const throttledZoom = useCallback(throttle(zoom, 20), [zoom])
  const throttledMove = useCallback(throttle(move, 20), [move])
  const throttledPan = useCallback(throttle(pan, 20), [pan])

  /**
   * Handler for trackpad pinch or mousewheel zoom.
   * @param {WheelEvent} event - The wheel event object.
   */
  const pinch = useCallback(
    (e: WheelEvent) => {
      if (e.ctrlKey) {
        throttledZoom(e.deltaY * 0.0001)
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

  /**
   * Reset the zoom center for x/y offset
   */
  useEffect(() => {
    const target = targetRef.current as HTMLElement
    if (!target) return
    const sizes = target.getBoundingClientRect()
    const { x, y } = controls.touchStateSignal.value.pan
    controls.setTouchState({
      zoomCenter: {
        x: sizes.width / 2 + (isScroller ? x : 0),
        y: sizes.height / 2 + (isScroller ? y : 0),
      },
    })
  }, [
    targetRef.current,
    isScroller && JSON.stringify(controls.touchStateSignal.value),
  ])

  /**
   * Add/remove all the listeners
   */
  useEffect(() => {
    const updateListeners = (action: ActionMethods) => {
      const target = targetRef.current as HTMLElement
      if (!target?.addEventListener) return
      window[action]('pointerup', stop)
      window[action]('pointermove', pointerMove)
      target?.[action]('pointerdown', start)
      target?.[action]('wheel', pinch)
      target.style.userSelect = 'none'
      target.style.touchAction = 'none'
    }
    updateListeners('addEventListener')
    return () => updateListeners('removeEventListener')
  }, [targetRef.current])
}
