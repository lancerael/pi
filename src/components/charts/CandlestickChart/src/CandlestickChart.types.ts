import { ScaleBand } from 'd3-scale'
import { Selection } from 'd3-selection'
import { CandleTooltipProps } from './components/CandleTooltip/CandleTooltip.types'

export interface CandlestickDayData {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  trades: number
  width?: number
}

export interface CandlestickChartProps {
  /**
   * The candlestick chart data
   */
  data?: CandlestickDayData[]
}

export interface ActiveItem {
  item?: CandlestickDayData
  isActive?: Boolean
  position?: CandleTooltipProps['position']
}

export interface VisibleRange {
  offset: number
  first: number
  last: number
  totalWidth: number
}

export interface Dimensions {
  visibleRange: VisibleRange
  sizes: {
    width: number
    height: number
  }
}

export type SVGSelection = Selection<
  SVGSVGElement | SVGGElement | null,
  unknown,
  null,
  undefined
>

export type BarSelection = Selection<
  SVGRectElement,
  CandlestickDayData,
  SVGSVGElement | SVGGElement | null,
  unknown
>

export interface Scales {
  xScale: ScaleBand<string>
  yScale: (y: number) => number
}

export interface Utils {
  scaledHeight: (low: number, high: number) => number
  scaledY: (low: number, high: number) => number
}

export interface Scaling {
  utils: Utils
  scales: Scales
}

export type SvgRef = React.RefObject<SVGSVGElement>

export type IAxis = Selection<SVGGElement, unknown, null, undefined>

export type BarType = 'wicks' | 'candles'

export type ValueKeys = 'low' | 'high' | 'open' | 'close'
