/**
 * The time in miliseconds for a transition to complete
 */
export const TRANSITION_TIME = 500

/**
 * The padding around the edges of the chart
 */
export const CHART_PADDING = 10

/**
 * The offsets for the X and Y axes
 */
export const AXIS_OFFSETS = [55, 65]

/**
 * The padding between each candle bar where 1 is equal to candle width
 */
export const CANDLE_PADDING = 0.3

/**
 * The defalt width of the candles before zooming
 */
export const CANDLE_WIDTH = 10

/**
 * The min/max extent for the zoom miltipliers
 */
export const ZOOM_RANGE: [number, number] = [0.25, 2]

/**
 * The filters for the days that are used to filter by period
 */
export const FILTER_PERIOD_MAP = {
  days: [''],
  weeks: ['01', '08', '15', '22', '29'],
  months: ['01'],
}

/**
 * The contents of an empty item
 */
export const EMPTY_ITEM = {
  date: '--',
  open: 0,
  high: 0,
  low: 0,
  close: 0,
}
