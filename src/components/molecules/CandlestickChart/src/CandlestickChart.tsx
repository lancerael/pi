import React, { FC, useEffect, useRef } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import { StyledCandlestickChart } from './CandlestickChart.style'
import {
  BarType,
  CandlestickChartProps,
  SVGSelection,
  ValueKeys,
} from './CandlestickChart.types'
import { useScaling } from './hooks/useScaling'
import { useAxes } from './hooks/useAxes'

const xAxis = {
  wicks: [1, 52],
  candles: [5, 50],
}

const TRANSITION_TIME = 300

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const { scaledHeight, scaledY, xScale, height } = useScaling(svgRef, data)
  useAxes(svgRef, xScale, height)

  // Alias to d3 selection of SVG
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
      .attr('width', xAxis[type][0])
  // .attr('x', (d, i) => xAxis[type][1] + 10 * i)

  // Place the rectangles based on latest data
  const placeRects = (type: BarType, keys: ValueKeys[]) =>
    bindData(type)
      .transition()
      .duration(TRANSITION_TIME)
      .attr('height', (d) => scaledHeight(d[keys[0]], d[keys[1]]))
      .attr('y', (d) => scaledY(d[keys[0]], d[keys[1]]))
      // .attr('width', Number(xScale.bandwidth()))
      .attr('x', ({ date }) => Number(xScale(date)) - xAxis[type][0] / 2)

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
  }, [data, xScale])

  return <StyledCandlestickChart ref={svgRef} />
}

export default CandlestickChart
