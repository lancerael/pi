import { useState } from 'react'
import { ChartControls } from '../CandlestickChart.types'
import { useControls } from '@pi-lib/use-touch'

/**
 * A React hook that manages controls on the chart
 * @returns
 */
export const useChartControls = (id?: string): ChartControls => {
  const controls = useControls(true, id)
  const [period, setPeriod] = useState<ChartControls['period']>('days')

  return {
    ...controls,
    period,
    setPeriod,
  }
}
