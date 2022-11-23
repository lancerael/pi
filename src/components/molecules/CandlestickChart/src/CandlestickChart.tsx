import React, { FC, useEffect, useRef } from 'react'
import { select } from 'd3-selection'
import { StyledCandlestickChart } from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  let candles, wicks

  const bindDataToGroup = (type: string) => select(svgRef.current)
      .append('g')
      .selectAll(`rect.${type}`)
      .data(data)
      .enter()
      .append('rect')
      .attr('class', type)

  useEffect(() => {
    wicks = bindDataToGroup('wicks')
      .attr('fill', 'grey')
      .attr('width', 1)
      .attr('height', ({ low, high }) => Math.abs(low-high))
      .attr('x', (d, i) => 52 + (10 * i))
      .attr('y', ({ low, high }, i) =>  500 - Math.min(low, high) - Math.abs(low-high))

    candles = bindDataToGroup('candles')
      .attr('fill', ({ open, close }, i) => close < open ? 'red' : 'green')
      .attr('width', 5)
      .attr('height', ({ open, close }) => Math.abs(open-close))
      .attr('y', ({ open, close }, i) =>  500 - Math.min(open, close) - Math.abs(open-close))
      .attr('x', (d, i) => 50 + (10 * i))

  }, [])

  return <StyledCandlestickChart ref={svgRef}/>
}

export default CandlestickChart