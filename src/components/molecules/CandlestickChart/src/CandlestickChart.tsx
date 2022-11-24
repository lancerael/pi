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

const xAxis = {
  wicks: [1, 52],
  candles: [5, 50],
}

const TRANSITION_TIME = 300

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const { scaledHeight, scaledY } = useScaling(svgRef, data)

  // Short cut to d3 selection of SVG
  const getSvg = () => select(svgRef.current)

  // Bind the data to the current rectangles
  const bindData = (
    type: BarType,
    parent: SVGSelection = getSvg() as SVGSelection
  ) => parent.selectAll(`rect.${type}`).data(data)

  // Create the group to contain the rectangles
  const createGroup = (type: BarType) =>
    bindData(type, getSvg().append('g') as SVGSelection)
      .enter()
      .append('rect')
      .attr('class', type)
      .attr('width', xAxis[type][0])
      .attr('x', (d, i) => xAxis[type][1] + 10 * i)

  const placeRects = (type: BarType, valueKeys: ValueKeys[]) =>
    bindData(type)
      .transition()
      .duration(TRANSITION_TIME)
      .attr('height', (d) => scaledHeight(d[valueKeys[0]], d[valueKeys[1]]))
      .attr('y', (d) => scaledY(d[valueKeys[0]], d[valueKeys[1]]))

  // Initialise the canvas with groups for wicks and candles
  useEffect(() => {
    createGroup('wicks').attr('fill', 'grey')
    createGroup('candles')
  }, [])

  // Update the wicks whenever the data (or scales) changes
  useEffect(() => {
    placeRects('wicks', ['low', 'high'])
    placeRects('candles', ['open', 'close']).attr('fill', (d) =>
      d.close < d.open ? 'red' : 'green'
    )
  }, [data, scaledHeight])

  return <StyledCandlestickChart ref={svgRef} />
}

export default CandlestickChart
