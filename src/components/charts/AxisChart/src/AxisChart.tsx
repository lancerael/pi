import React, { useEffect, useRef, FC } from 'react'
import Theia from 'd-theia'
import throttle from 'lodash.throttle'
import { StyledAxisChart } from './AxisChart.style'
import { AxisChartProps, IChart } from './AxisChart.types'

export const AxisChart: FC<AxisChartProps> = ({
  chartId,
  chartType,
  chartData,
  chartConfig,
}) => {
  const chartContainer = useRef(null)
  const dtChart = useRef<IChart>()
  const skipUpdate =
    !dtChart.current ||
    chartData[0].itemValues.length !== chartConfig.itemValues.length

  // Set up chart
  useEffect(() => {
    if (!chartContainer.current || dtChart.current) return
    dtChart.current = Theia.chart(chartId, chartType, {
      chartData,
      chartConfig,
    }) as IChart
  }, [chartContainer.current])

  // Update chart
  useEffect(() => {
    !skipUpdate && dtChart.current?.updateData(chartData)
    !skipUpdate && dtChart.current?.updateConfig(chartConfig)
  }, [chartData, chartConfig])

  // Resize chart
  useEffect(() => {
    let updateTimeout: NodeJS.Timeout
    const updateDimensions = throttle(() => {
      updateTimeout = setTimeout(() => {
        dtChart.current?.updateData(chartData)
      }, 500)
    }, 200)
    addEventListener('resize', updateDimensions)
    return () => {
      removeEventListener('resize', updateDimensions)
      clearTimeout(updateTimeout)
    }
  }, [])

  return <StyledAxisChart id={chartId} ref={chartContainer} />
}

export default AxisChart
