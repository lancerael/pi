import { useState } from 'react'
import { ChartControls } from '../CandlestickChart.types'

/**
 * A React hook that manages controls on the chart
 * @returns
 */
export const useControls = (): ChartControls => {
  const [panLevel, setPanLevel] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [period, setPeriod] = useState<ChartControls['period']>('days')

  return {
    panLevel,
    setPanLevel,
    zoomLevel,
    setZoomLevel,
    period,
    setPeriod,
  }
}
