import { ScaleLinear } from 'd3-scale'
import { CandlestickDayData, Sizes } from '../../CandlestickChart.types'

export interface CurrentIndicatorProps {
  currentItem: CandlestickDayData
  yScale: ScaleLinear<number, number, never>
  sizes: Sizes
}

export interface StyledIndicatorProps {
  isPositive: boolean
}
