export interface CandlestickDayData {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  trades: number
}

export interface CandlestickChartProps {
  /**
   * The candlestick chart data
   */
  data: CandlestickDayData[]
}
