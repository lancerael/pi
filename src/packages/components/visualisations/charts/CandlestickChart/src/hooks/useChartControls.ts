import { useState } from 'react'
import { ChartControls } from '../CandlestickChart.types'
import { useControls } from '@pi-lib/use-touch'

/**
 * A React hook that manages controls on the chart
 * @returns
 */
export const useChartControls = (): ChartControls => {
  const controls = useControls()
  const [period, setPeriod] = useState<ChartControls['period']>('days')

  return {
    ...controls,
    period,
    setPeriod,
  }
}
