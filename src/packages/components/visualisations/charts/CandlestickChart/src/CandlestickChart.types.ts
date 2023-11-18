import { ScaleBand } from 'd3-scale'
import { Selection } from 'd3-selection'
import { CandleTooltipProps } from './components/CandleTooltip/CandleTooltip.types'
import { Transition } from 'd3-transition'
import { FILTER_PERIOD_MAP } from './CandlestickChart.constants'
import { TouchControls } from '@pi-lib/use-touch'

/**
 * The individual items in the array of chart data
 */
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

/**
 * The main prop interface for the component
 */
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

/**
 * The type of period (day/month/year)
 */
export type Period = keyof typeof FILTER_PERIOD_MAP

/**
 * The details of the currently selected bar
 */
export interface ActiveItem {
  item?: CandlestickDayData
  isActive?: Boolean
  position?: CandleTooltipProps['position']
}

/**
 * The chart controls extended to include the period
 */
export interface ChartControls extends TouchControls {
  period: Period
  setPeriod: React.Dispatch<React.SetStateAction<Period>>
}

/**
 * The sizes for the positioning of the chart
 */
export interface Sizes {
  width: number
  height: number
  left: number
  top: number
}

/**
 * The details of the data that falls into the visible range
 */
export interface DataRange {
  start: number
  end: number
  min: number
  max: number
  offset: number
  dataSlice: CandlestickDayData[]
  lastItem: CandlestickDayData
  length: number
  totalWidth: number
}

/**
 * The d3 selector object for the SVG
 */
export type SVGSelection = Selection<
  SVGSVGElement | SVGGElement | null,
  unknown,
  null,
  undefined
>

/**
 * The d3 selection object for the bar
 */
export type BarSelection = Selection<
  SVGRectElement,
  CandlestickDayData,
  SVGSVGElement | SVGGElement | null,
  unknown
>

/**
 * The collections of scales for the x and y axis
 */
export interface Scales {
  xScale: ScaleBand<string>
  yScale: (y: number) => number
}

/**
 * The d3 transition object for the SVG rect element
 */
export type ChartTransition = Transition<
  SVGRectElement,
  CandlestickDayData,
  SVGSVGElement | SVGGElement | null,
  unknown
>

/**
 * A react ref for the SVG element
 */
export type SvgRef = React.RefObject<SVGSVGElement>

/**
 * A react ref for a container div
 */
export type ContainerRef = React.RefObject<HTMLDivElement>

/**
 * A d3 selectiin for the SVG axus
 */
export type IAxis = Selection<SVGGElement, unknown, null, undefined>

/**
 * A union of bar types (wicks or candles)
 */
export type BarType = 'wicks' | 'candles'

/**
 * A union of value keys (low/high/open/close)
 */
export type ValueKeys = 'low' | 'high' | 'open' | 'close'

/**
 * Props for the style of the chart
 */
export interface ChartStyleProps {
  /**
   * Whether the chart is visible
   */
  $isVisible: boolean
}
