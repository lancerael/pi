import { Selection } from 'd3-selection'

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
  position?: any
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

export type BarType = 'wicks' | 'candles'

export type ValueKeys = 'low' | 'high' | 'open' | 'close'
