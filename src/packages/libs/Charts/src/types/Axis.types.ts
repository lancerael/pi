import { Tooltip } from '../components'
import { ChartScales, Dimensions, D3Svg } from './'

export interface AxisParams {
  d3Svg: D3Svg
  tooltip: Tooltip
  dimensions: Dimensions
  truncate?: number
  axisLabels?: [string, string]
  scales: ChartScales
}

export type ScaleType = 'band' | 'linear'
