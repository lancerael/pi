import { useEffect, useRef } from 'react'
import { Chart } from '@pi-lib/charts'
import { BarChartProps } from './BarChart.types'

/**
 * A React component for a bar chart
 */
export const BarChart = ({ config, theme, data, label }: BarChartProps) => {
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
