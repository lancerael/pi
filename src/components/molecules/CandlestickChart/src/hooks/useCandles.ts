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
import { C } from 'vitest/dist/global-fe52f84b'

const typeMap = {
  wicks: 'line',
  candles: 'rect',
}

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
  ) =>
    parent
      .selectAll(`${typeMap[type]}.${type}`)
      .data(data) as unknown as BarSelection

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
  const placeBars = (type: BarType, keys: ValueKeys[]) => {
    let bars = bindData(type, getGroup(type))

    if (bars.size() !== data.length) {
      bars = bars.enter().append(typeMap[type])
    }

    const getTransition = () =>
      bars.classed(type, true).transition().duration(TRANSITION_TIME)

    const x = (d: CandlestickDayData) =>
      Number(xScale(d.date)) +
      (type === 'wicks' ? +xScale.bandwidth() / 2 : 0) +
      offsetWidth

    const y = (d: CandlestickDayData) => scaledY(d[keys[0]], d[keys[1]])

    const height = (d: CandlestickDayData) =>
      scaledHeight(d[keys[0]], d[keys[1]])

    if (type === 'candles') {
      getTransition()
        .attr('width', () => +xScale.bandwidth())
        .attr('height', height)
        .attr('x', x)
        .attr('y', y)
    } else {
      getTransition()
        .attr('x1', x)
        .attr('y1', y)
        .attr('x2', x)
        .attr('y2', (d) => y(d) + height(d))
    }

    bars.exit().remove()

    return bars
  }

  // Initialise the canvas with groups for wicks and candles
  useEffect(() => {
    getGroup('wicks')
    getGroup('candles')
  }, [])

  // Update the chart whenever the data/scale changes
  useEffect(() => {
    if (xScale?.bandwidth?.()) {
      placeBars('wicks', ['low', 'high'])
      placeBars('candles', ['open', 'close']).attr('fill', (d) =>
        d.close < d.open ? 'red' : 'green'
      )
    }
  }, [xScale])
}
