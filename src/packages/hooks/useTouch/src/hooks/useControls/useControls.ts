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
 * The scaffold for a new signal
 */
const basicState: TouchState = {
  pan: { x: 0, y: 0 },
  zoom: 1,
  zoomCenter: { x: 0, y: 0 },
  zoomOffset: { x: 0, y: 0 },
  panWithOffset: { x: 0, y: 0 },
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
export const useControls = (): TouchControls => {
  const touchIdRef = useRef(randomString())
  const targetId = touchIdRef.current
  if (!touchStateSignals[targetId]) addSignal(targetId)
  const touchState = useSignalValue(touchStateSignals[targetId])
  const signal = touchStateSignals[targetId]

  const setTouchState = ({
    zoom = signal.value.zoom,
    pan = { ...signal.value.pan },
    zoomCenter = { ...signal.value.zoomCenter },
    modifier = (state: SimpleTouchState) => state,
  }: TouchOptions) => {
    const { x: centerX, y: centerY } = zoomCenter
    const zoomOffset = {
      x: centerX - centerX * zoom,
      y: centerY - centerY * zoom,
    }
    touchStateSignals[targetId].value = {
      ...modifier({
        zoom,
        pan,
      }),
      zoomCenter,
      zoomOffset,
      panWithOffset: {
        x: pan.x + zoomOffset.x,
        y: pan.y + zoomOffset.y,
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
