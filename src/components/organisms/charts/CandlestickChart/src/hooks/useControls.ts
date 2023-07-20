import { useState } from 'react'
import { IControls } from '../CandlestickChart.types'

/**
 * A React hook that manages controls on the chart
 * @returns
 */
export const useControls = (): IControls => {
  const [panLevel, setPanLevel] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)

  return {
    panLevel,
    setPanLevel,
    zoomLevel,
    setZoomLevel,
  }
}
