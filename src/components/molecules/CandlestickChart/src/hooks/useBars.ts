import { useEffect } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import {
  BarType,
  CandlestickDayData,
  SVGSelection,
  ValueKeys,
} from '../CandlestickChart.types'
import { AXIS_OFFSETS, TRANSITION_TIME } from '../CandlestickChart.constants'

export const useBars = (
  svgRef: any,
  xScale: any,
  scaledHeight: any,
  scaledY: any,
  data: CandlestickDayData[],
  panLevel: number,
  offsetWidth: number = 0
) => {
  // Get d3 selection of SVG
  const getSvg = () => select(svgRef.current)

  // Bind the data to the chosen type of rectangles
  const bindData = (
    type: BarType,
    parent: SVGSelection = getSvg() as SVGSelection
  ) => parent.selectAll(`rect.${type}`).data(data)

  // Create the group and initialise the rectangles
  const createGroup = (type: BarType) =>
    bindData(type, getSvg().append('g') as SVGSelection)
      .enter()
      .append('rect')
      .attr('class', type)

  // Place the rectangles based on latest data
  const placeRects = (type: BarType, keys: ValueKeys[]) =>
    bindData(type)
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

  // Initialise the canvas with groups for wicks and candles
  useEffect(() => {
    createGroup('wicks').attr('fill', 'grey')
    createGroup('candles')
  }, [])

  // Update the wicks whenever the data (or scales) changes
  useEffect(() => {
    if (typeof xScale.bandwidth == 'function') {
      placeRects('wicks', ['low', 'high'])
      placeRects('candles', ['open', 'close']).attr('fill', (d) =>
        d.close < d.open ? 'red' : 'green'
      )
    }
  }, [data, xScale, panLevel])
}
