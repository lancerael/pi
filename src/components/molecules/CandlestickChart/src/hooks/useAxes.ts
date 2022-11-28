import { axisBottom, axisRight } from 'd3-axis'
import { select } from 'd3-selection'
import { useEffect, useState } from 'react'
import { CHART_PADDING, TRANSITION_TIME } from '../CandlestickChart.constants'
import { CandlestickDayData } from '../CandlestickChart.types'
import { AXIS_OFFSETS } from './../CandlestickChart.constants'

export const useAxes = (
  svgRef: any,
  xScale: any,
  yScale: any,
  width: number,
  height: number,
  panLevel: number,
  offsetWidth: number = 0
) => {
  const [axisX, setAxisX] = useState<any>()
  const [axisY, setAxisY] = useState<any>()

  useEffect(() => {
    if (!svgRef.current) return
    setAxisX(
      select(svgRef.current)
        .append('g')
        .attr('clip-path', 'url(#bottom-axis)')
        .attr('class', 'x-axis')
        .append('g')
    )
    setAxisY(select(svgRef.current).append('g').attr('class', 'y-axis'))
  }, [svgRef])

  useEffect(() => {
    if (!xScale.domain) return
    axisX
      .call(axisBottom(xScale))
      .transition()
      .duration(TRANSITION_TIME)
      .attr(
        'transform',
        `translate(${offsetWidth},${height - AXIS_OFFSETS[0]})`
      )
      .selectAll('text')
      .attr('x', -35)
      .attr('y', -4)
      .attr('transform', 'rotate(270)')
      .text((d: CandlestickDayData, i: number) =>
        i % 5 && i < xScale.domain().length - 1 ? '' : String(d)
      )

    axisY
      .call(axisRight(yScale))
      .attr(
        'transform',
        `translate(${width - AXIS_OFFSETS[0]},${CHART_PADDING})`
      )
  }, [xScale, panLevel])
}
