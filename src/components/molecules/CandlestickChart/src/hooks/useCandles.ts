import { useEffect, useRef } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import {
  BarSelection,
  BarType,
  CandlestickDayData,
  SVGSelection,
  ValueKeys,
} from '../CandlestickChart.types'
import { TRANSITION_TIME } from '../CandlestickChart.constants'

export const useCandles = (
  svgRef: any,
  data: CandlestickDayData[],
  panLevel: number,
  scales: any,
  dimensions: any,
  utils: any,
  visibleRange: any
) => {
  const { xScale } = scales
  const { offsetWidth } = dimensions
  const { scaledHeight, scaledY } = utils
  const { first, last } = visibleRange
  const groups = useRef<{ [key: string]: SVGSelection }>({})

  // Get d3 selection of SVG
  const getSvg = () => select(svgRef.current)

  // Bind the data to the chosen type of rectangles
  const bindData = (
    type: BarType,
    parent: SVGSelection = getSvg() as SVGSelection
  ) => parent.selectAll(`rect.${type}`).data(data) as unknown as BarSelection

  // Create the group and initialise the rectangles
  const getGroup = (type: BarType) => {
    groups.current[type] =
      groups.current[type] ??
      (getSvg()
        .append('g')
        .classed(`${type}-group`, true)
        .attr('clip-path', 'url(#chart-contents)') as SVGSelection)
    return groups.current[type]
  }

  // Place the rectangles based on latest data
  const placeRects = (type: BarType, keys: ValueKeys[]) => {
    let rects = bindData(type, getGroup(type))

    if (rects.size() !== data.length) {
      rects = rects.enter().append('rect')
    }

    rects
      .classed(type, true)
      .classed('is-offscreen', (d, i) => i < first - 10 || i > last + 10)
      .transition()
      .duration(TRANSITION_TIME)
      .attr('width', () => (type === 'wicks' ? 1 : Number(xScale.bandwidth())))
      .attr('height', (d) => scaledHeight(d[keys[0]], d[keys[1]]))
      .attr(
        'x',
        (d) =>
          Number(xScale(d.date)) +
          (type === 'wicks' ? (Number(xScale.bandwidth()) - 1) / 2 : 0) +
          offsetWidth
      )
      .attr('y', (d) => scaledY(d[keys[0]], d[keys[1]]))

    rects.exit().remove()

    return rects
  }

  // Initialise the canvas with groups for wicks and candles
  useEffect(() => {
    getGroup('wicks').attr('fill', 'grey')
    getGroup('candles')
  }, [])

  // Update the chart whenever the data/scale changes
  useEffect(() => {
    if (xScale?.bandwidth?.()) {
      placeRects('wicks', ['low', 'high'])
      placeRects('candles', ['open', 'close']).attr('fill', (d) =>
        d.close < d.open ? 'red' : 'green'
      )
    }
  }, [xScale])
}
