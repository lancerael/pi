import React, { FC, useEffect, useRef } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import { StyledCandlestickChart } from './CandlestickChart.style'
import {
  BarType,
  CandlestickChartProps,
  SVGSelection,
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

  const getSvg = () => select(svgRef.current)

  const bindData = (
    type: BarType,
    parent: SVGSelection = getSvg() as SVGSelection
  ) => parent.selectAll(`rect.${type}`).data(data)

  const bindGroup = (type: BarType) =>
    bindData(type, getSvg().append('g') as SVGSelection)
      .enter()
      .append('rect')
      .attr('class', type)
      .attr('width', xAxis[type][0])
      .attr('x', (d, i) => xAxis[type][1] + 10 * i)

  const placeWicks = () =>
    bindData('wicks')
      .transition()
      .duration(TRANSITION_TIME)
      .attr('height', ({ low, high }) => scaledHeight(low, high))
      .attr('y', ({ low, high }) => scaledY(low, high))

  const placeCandles = () =>
    bindData('candles')
      .transition()
      .duration(TRANSITION_TIME)
      .attr('fill', (d) => (d.close < d.open ? 'red' : 'green'))
      .attr('height', ({ open, close }) => scaledHeight(open, close))
      .attr('y', ({ open, close }) => scaledY(open, close))

  useEffect(() => {
    bindGroup('wicks').attr('fill', 'grey')
    bindGroup('candles')
  }, [])

  useEffect(() => {
    placeWicks()
    placeCandles()
  }, [data, scaledHeight])

  return <StyledCandlestickChart ref={svgRef} />
}

export default CandlestickChart
