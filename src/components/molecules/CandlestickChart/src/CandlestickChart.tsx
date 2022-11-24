import React, { FC, useEffect, useRef, useState } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import { StyledCandlestickChart } from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'

const xAxis = {
  wicks: [1, 52],
  candles: [5, 50],
}

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  // let candles: any, wicks: any

  // const svg = select(svgRef.current)

  // const bindData = (type: 'wicks' | 'candles', addGroup = false) => {
  //   const svg = select(svgRef.current)
  //   if (addGroup) svg.append('g')
  // }

  const bindGroup = (type: 'wicks' | 'candles') =>
    select(svgRef.current)
      .append('g')
      .selectAll(`rect.${type}`)
      .data(data)
      .enter()
      .append('rect')
      .attr('class', type)
      .attr('width', xAxis[type][0])
      .attr('x', (d, i) => xAxis[type][1] + 10 * i)

  const placeWicks = () => {
    // console.log(data)
    return select(svgRef.current)
      .selectAll(`g rect.wicks`)
      .data(data)
      .transition()
      .duration(300)
      .attr('height', ({ low, high }) => Math.abs(low - high))
      .attr(
        'y',
        ({ low, high }, i) => 500 - Math.min(low, high) - Math.abs(low - high)
      )
  }

  const placeCandles = () =>
    select(svgRef.current)
      .selectAll(`g rect.candles`)
      .data(data)
      .transition()
      .duration(300)
      .attr('fill', ({ open, close }, i) => (close < open ? 'red' : 'green'))
      .attr('height', ({ open, close }) => Math.abs(open - close))
      .attr(
        'y',
        ({ open, close }, i) =>
          500 - Math.min(open, close) - Math.abs(open - close)
      )

  useEffect(() => {
    wicks = bindGroup('wicks').attr('fill', 'grey')
    candles = bindGroup('candles')
  }, [])

  useEffect(() => {
    placeWicks()
    placeCandles()
  }, [data])

  return <StyledCandlestickChart ref={svgRef} />
}

export default CandlestickChart
