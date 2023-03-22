import { RGBColor } from 'd3-color'

export interface ValueConfig {
  name: string
  color?: string
  key?: string
  rgbColor?: RGBColor | false
  labelWidth?: number
}

export interface TableConfig {
  values: ValueConfig[]
  axisLabels?: [string, string]
  axisKeys?: string[]
  trim?: boolean
}

export interface TableItem {
  values: number[]
  label: string
  color?: string
}

// type TableData = TableItem[]

export interface TableData {
  data: TableItem[]
  minValue: number
  maxValue: number
}

export interface ChartTable {
  label: string
  config: TableConfig
  data: TableItem[]
}
