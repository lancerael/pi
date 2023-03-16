import React, { FC, useEffect, useRef } from 'react'
import { StyledBarChart } from './BarChart.style'
import { BarChartProps } from './BarChart.types'
import { Chart } from '@pi-lib/charts'

export const BarChart: FC<BarChartProps> = ({ config, theme, data, label }) => {
  const divRef = useRef(null)
  const chart = useRef<Chart>()

  useEffect(() => {
    if (divRef.current && !chart.current) {
      chart.current = new Chart({
        container: divRef.current,
        config,
        theme,
        data,
        label,
      }).addDefaults()
    }
  }, [divRef.current])

  return <div ref={divRef} style={{ height: '400px' }}></div>
}

export default BarChart
