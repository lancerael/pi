import { signal, useSignalValue } from 'signals-react-safe'
import {
  SimpleTouchState,
  TouchControls,
  TouchOptions,
  TouchState,
  TouchStateSignals,
} from './useControls.types'
import { randomString } from '@pi-lib/utils'
import { useEffect, useRef } from 'react'

/**
 * Is the code running in a client environment
 */
export const IS_CLIENT = typeof window !== 'undefined' && window.matchMedia

/**
 * The scaffold for a new signal
 */
const basicState: TouchState = {
  pan: { x: 0, y: 0 },
  zoom: 1,
  zoomOffset: { x: 0, y: 0 },
  panWithOffset: { x: 0, y: 0 },
  sizes: { width: 0, height: 0 },
}

/**
 * Container object for the signal references
 */
const touchStateSignals: TouchStateSignals = {}

/**
 * A helper to add a signal with an ID
 */
const addSignal = (id: string) => {
  touchStateSignals[id] = signal<TouchState>(structuredClone(basicState))
}

/**
 * `useControls` is a custom React hook that manages the zoom and pan levels of a chart.
 * It initializes the pan and zoom levels and returns the current state along with
 * functions to update them.  Provided seperately to the main hook so additional custom controls
 * can be implemented alongside it.
 *
 * @returns {TouchControls} - An object containing the current pan and zoom state,
 * and the corresponding state setter function.
 */
export const useControls = (
  isScroller?: boolean,
  id: string = randomString()
): TouchControls => {
  const touchIdRef = useRef(id)
  const targetId = touchIdRef.current
  if (!touchStateSignals[targetId]) addSignal(targetId)
  const touchState = useSignalValue(touchStateSignals[targetId])

  const setTouchState = ({
    zoom = touchStateSignals[targetId]?.value.zoom,
    pan = { ...touchStateSignals[targetId]?.value.pan },
    sizes = { ...touchStateSignals[targetId]?.value.sizes },
    modifier = (state: SimpleTouchState) => state,
  }: TouchOptions) => {
    if (!IS_CLIENT || !touchStateSignals[targetId]) return
    const zoomCenter = {
      x: sizes.width / 2 + (isScroller ? pan.x : 0),
      y: sizes.height / 2 + (isScroller ? pan.y : 0),
    }
    const zoomOffset = {
      x: zoomCenter.x - zoomCenter.x * zoom,
      y: zoomCenter.y - zoomCenter.y * zoom,
    }
    const modifiedValues = modifier({
      zoom,
      pan,
    })
    touchStateSignals[targetId].value = {
      ...modifiedValues,
      sizes,
      zoomOffset,
      panWithOffset: {
        x: modifiedValues.pan.x + zoomOffset.x,
        y: modifiedValues.pan.y + zoomOffset.y,
      },
    }
  }

  /**
   * Clear up the signal when done
   */
  useEffect(() => {
    return () => {
      delete touchStateSignals[targetId]
    }
  }, [targetId])

  return {
    touchState,
    setTouchState,
    touchStateSignal: touchStateSignals[targetId],
  }
}
