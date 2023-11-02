import { ChartConfig, DataItem, Hash } from 'd-theia/src/types'

/**
 * The main prop interface for the chart component
 */
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
