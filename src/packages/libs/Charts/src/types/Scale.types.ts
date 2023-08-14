import { ScaleBand, ScaleLinear } from 'd3-scale'
import { Scale } from '../components'

export type AxisScale = ScaleLinear<any, any, any> | ScaleBand<any>

export interface ChartScales {
  x?: Scale
  y?: Scale
}
