import { Tooltip } from '../components'
import { Bars } from '../components/Bars'
import { Dimensions, TableConfig, TableData, TableItem } from './'
import { D3Svg } from './general.types'
import { ChartScales } from './Scale.types'

export type Visual = Bars

export interface VisualParams {
  d3Svg: D3Svg
  config?: TableConfig
  dataSet?: TableData
  scales?: ChartScales
  tooltip: Tooltip
  dimensions: Dimensions
  transitionTime: number
  clickCallback?: (e: MouseEvent, d: TableItem) => void
}

export interface VisualRenderParams {
  reset?: boolean
  transition?: boolean
}
