import { ChartConfig, DataItem, Hash } from 'd-theia/src/types'

export interface ChartValues {
  /**
   * Config for the chart
   */
  chartConfig: ChartConfig
  /**
   * Data for the chart
   */
  chartData: (DataItem & Hash)[]
}
