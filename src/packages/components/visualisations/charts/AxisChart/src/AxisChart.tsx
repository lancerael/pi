import { useEffect, useRef } from 'react'
import Theia from 'd-theia'
import Chart from 'd-theia/src/components/Chart'
import { StyledAxisChart } from './AxisChart.style'
import { AxisChartProps } from './AxisChart.types'

/**
 * A React component used to display a bar ot line chart
 */
export const AxisChart = ({
  chartId,
  chartType,
  chartData,
  chartConfig,
}: AxisChartProps) => {
  const container = useRef(null)
  const dtChart = useRef<Chart>()
  const skipUpdate =
    !dtChart.current ||
    chartData[0].itemValues.length !== chartConfig.itemValues.length

  // Set up chart
  useEffect(() => {
    if (!container.current || dtChart.current) return
    dtChart.current = Theia.chart(chartId, chartType, {
      chartData,
      chartConfig,
    })
  }, [container.current])

  // Update chart
  useEffect(() => {
    !skipUpdate && dtChart.current?.updateData(chartData)
    !skipUpdate && dtChart.current?.updateConfig(chartConfig)
  }, [chartData, chartConfig])

  // Keep chart in proportion in case of font resize
  setInterval(() => dtChart.current?.onResize(), 10000)

  return <StyledAxisChart id={chartId} ref={container} />
}

export default AxisChart
