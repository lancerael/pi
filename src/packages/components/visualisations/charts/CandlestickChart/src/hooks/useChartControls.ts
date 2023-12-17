import { useRef, useState } from 'react'
import { ChartControls } from '../CandlestickChart.types'
import { TouchState, useControls } from '@pi-lib/use-touch'
import { flushTransition } from '@pi-lib/do-transition'

/**
 * A React hook that manages controls on the chart
 * @returns
 */
export const useChartControls = (): ChartControls => {
  const controls = useControls()
  const [period, setPeriod] = useState<ChartControls['period']>('days')
  const zoomTracker = useRef(1)

  /*
   * Intercept zoom level controls to keep the candles centered
   */
  const setTouchState = ((update: (touchState: TouchState) => TouchState) => {
    controls.setTouchState(({ pan, zoom }) => {
      const panMultiplier = (1 / zoomTracker.current) * zoom
      zoomTracker.current = zoom
      const newPan = { ...pan, x: pan.x * panMultiplier }
      if (panMultiplier !== 1) flushTransition('pan')
      return update({ pan: newPan, zoom })
    })
  }) as ChartControls['setTouchState']

  return {
    ...controls,
    setTouchState,
    period,
    setPeriod,
  }
}
