import { TableConfig, TableItem } from './'

export interface ChartParams {
  config?: TableConfig
  data?: TableItem[]
  theme?: string
  container: HTMLDivElement | string
  label: string
}

export interface Padding {
  l: number
  r: number
  t: number
  b: number
}

export interface Dimensions {
  padding: Padding
  left: number
  width: number
  top: number
  height: number
  innerWidth: number
  innerHeight: number
  resizeOffset: number
}

export type mapTypes = 'configs' | 'dataSets' | 'scales' | 'axes'
