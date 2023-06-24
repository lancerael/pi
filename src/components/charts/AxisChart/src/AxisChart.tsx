import { useEffect, useRef, FC } from 'react'
import Theia from 'd-theia'
import { StyledAxisChart } from './AxisChart.style'
import { AxisChartProps } from './AxisChart.types'
import Chart from 'd-theia/src/components/Chart'

/**
 * A React component used to display a bar ot line chart
 */
export const AxisChart: FC<AxisChartProps> = ({
  chartId,
  chartType,
  chartData,
  chartConfig,
}) => {
  const chartContainer = useRef(null)
  const dtChart = useRef<Chart>()
  const skipUpdate =
    !dtChart.current ||
    chartData[0].itemValues.length !== chartConfig.itemValues.length

  // Set up chart
  useEffect(() => {
    if (!chartContainer.current || dtChart.current) return
    dtChart.current = Theia.chart(chartId, chartType, {
      chartData,
      chartConfig,
    })
  }, [chartContainer.current])

  // Update chart
  useEffect(() => {
    !skipUpdate && dtChart.current?.updateData(chartData)
    !skipUpdate && dtChart.current?.updateConfig(chartConfig)
  }, [chartData, chartConfig])

  // Keep chart in proportion in case of font resize
  setInterval(() => dtChart.current?.onResize(), 10000)

  return <StyledAxisChart id={chartId} ref={chartContainer} />
}

export default AxisChart
