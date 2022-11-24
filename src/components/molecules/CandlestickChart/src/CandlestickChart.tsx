import React, { FC, useEffect, useRef, useState } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import { StyledCandlestickChart } from './CandlestickChart.style'
import {
  BarType,
  CandlestickChartProps,
  CandlestickDayData,
  SVGSelection,
} from './CandlestickChart.types'

const xAxis = {
  wicks: [1, 52],
  candles: [5, 50],
}

const TRANSITION_TIME = 300

const { abs, min } = Math

import { scaleBand, scaleLinear } from 'd3-scale'

const useScales = (svg: any | null, data: CandlestickDayData[]) => {
  // console.log('h', svg.current, data)
  if (!svg)
    return { height: 0, xScale: (x: number) => x, yScale: (x: number) => x }
  // const { width, height } = svg.getBBox()
  const height = 500
  const width = 800
  const max = Math.max(...data.map(({ high }) => high))
  const xScale = scaleBand().rangeRound([0, width]).padding(0.1)
  const yScale = scaleLinear().domain([0, max]).range([0, height])
  return { height, xScale, yScale }
}

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const { height, xScale, yScale } = useScales(svgRef, data)

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
      .attr('height', (d) => yScale(abs(d.low - d.high)))
      .attr(
        'y',
        (d) => height - yScale(min(d.low, d.high)) - yScale(abs(d.low - d.high))
      )

  const placeCandles = () =>
    bindData('candles')
      .transition()
      .duration(TRANSITION_TIME)
      .attr('fill', (d) => (d.close < d.open ? 'red' : 'green'))
      .attr('height', (d, i) => yScale?.(abs(d.open - d.close)) ?? 0)
      .attr(
        'y',
        (d) =>
          height - yScale(min(d.open, d.close)) - yScale(abs(d.open - d.close))
      )

  useEffect(() => {
    bindGroup('wicks').attr('fill', 'grey')
    bindGroup('candles')
  }, [])

  useEffect(() => {
    placeWicks()
    placeCandles()
    console.log(data)
  }, [data, yScale])

  return <StyledCandlestickChart ref={svgRef} />
}

export default CandlestickChart
