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

const TRANSITION_TIME = 300

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const { scaledHeight, scaledY, xScale, height } = useScaling(svgRef, data)
  // const { createGroup, placeRects }
  useAxes(svgRef, xScale, height)

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
      .each(
        (d) => (d.width = type === 'wicks' ? 1 : Number(xScale.bandwidth()))
      )
      .transition()
      .duration(TRANSITION_TIME)
      .attr('width', (d) => d.width ?? 0)
      .attr('height', (d) => scaledHeight(d[keys[0]], d[keys[1]]))
      .attr(
        'x',
        (d) =>
          Number(xScale(d.date)) + (type === 'wicks' ? (d?.width ?? 0) + 2 : 0)
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
  }, [data, xScale])

  return <StyledCandlestickChart ref={svgRef} />
}

export default CandlestickChart
