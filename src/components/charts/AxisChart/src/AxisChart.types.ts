import { ChartConfig, ChartData, DataItem, Hash } from 'd-theia/src/types'

export interface AxisChartProps {
  /**
   * The ID for the chart
   */
  chartId: string
  /**
   * The type of chart
   */
  chartType?: 'bar' | 'line'
  /**
   * The config for the chart
   */
  chartConfig: ChartConfig
  /**
   * The data for the chart
   */
  chartData: (DataItem & Hash)[]
}

export interface IChart {
  updateData: (...args: any) => void
  updateConfig: (...args: any) => void
}
