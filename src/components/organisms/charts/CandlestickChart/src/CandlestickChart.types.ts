import { ScaleBand } from 'd3-scale'
import { Selection } from 'd3-selection'
import { CandleTooltipProps } from './components/CandleTooltip/CandleTooltip.types'
import { Transition } from 'd3-transition'
import { FILTER_PERIOD_MAP } from './CandlestickChart.constants'

export interface CandlestickDayData {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume?: number
  trades?: number
  width?: number
}

export interface CandlestickChartProps {
  /**
   * The candlestick chart data
   *
   * ```
   * data: [
   *   {
   *    date: 'YYYY-MM-DD',
   *     open: 10,
   *     high: 25,
   *     low: 5,
   *     close: 20,
   *   },
   * ],
   * ```
   *
   */
  data?: CandlestickDayData[]
}

export type Period = keyof typeof FILTER_PERIOD_MAP

export interface ActiveItem {
  item?: CandlestickDayData
  isActive?: Boolean
  position?: CandleTooltipProps['position']
}

export interface IControls {
  zoomLevel: number
  panLevel: number
  period: Period
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>
  setPanLevel: React.Dispatch<React.SetStateAction<number>>
  setPeriod: React.Dispatch<React.SetStateAction<Period>>
}

export interface Sizes {
  width: number
  height: number
  left: number
  top: number
}

export interface DataRange {
  start: number
  end: number
  min: number
  max: number
  offset: number
  dataSlice: CandlestickDayData[]
  lastItem: CandlestickDayData
  length: number
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

export type ChartTransition = Transition<
  SVGRectElement,
  CandlestickDayData,
  SVGSVGElement | SVGGElement | null,
  unknown
>

export type SvgRef = React.RefObject<SVGSVGElement>

export type ContainerRef = React.RefObject<HTMLDivElement>

export type IAxis = Selection<SVGGElement, unknown, null, undefined>

export type BarType = 'wicks' | 'candles'

export type ValueKeys = 'low' | 'high' | 'open' | 'close'

export interface ChartStyleProps {
  isVisible: boolean
}
