import { useState } from 'react'
import { TouchControls } from './useControls.types'

/**
 * `useControls` is a custom React hook that manages the zoom and pan levels of a chart.
 * It initializes the pan and zoom levels and returns the current state along with
 * functions to update them.  Provided seperately to the main hook so additional custom controls
 * can be implemented alongside it.
 *
 * @returns {TouchControls} - An object containing the current pan and zoom levels,
 * and the corresponding state setter functions.
 */
export const useControls = (): TouchControls => {
  const [panLevel, setPanLevel] = useState({ x: 0, y: 0 })
  const [zoomLevel, setZoomLevel] = useState(1)

  return {
    panLevel,
    setPanLevel,
    zoomLevel,
    setZoomLevel,
  }
}
