import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'
import { useEffect } from 'react'
import { CHART_PADDING } from '../CandlestickChart.constants'
import { AXIS_OFFSETS } from './../CandlestickChart.constants'

export const useAxes = (
  svgRef: any,
  xScale: any,
  height: number,
  panLevel: number
) => {
  useEffect(() => {
    if (xScale.domain) {
      select(svgRef.current).selectAll(`g.x-axis`).remove()
      select(svgRef.current)
        .append('g')
        .attr('class', 'x-axis')
        .call(axisBottom(xScale))
        .attr(
          'transform',
          `translate(${panLevel},${height - CHART_PADDING - AXIS_OFFSETS[0]})`
        )
        .selectAll('text')
        .attr('x', -35)
        .attr('y', -4)
        .attr('transform', 'rotate(270)')
        .text((d, i) =>
          i % 5 && i < xScale.domain().length - 1 ? '' : String(d)
        )
    }
  }, [xScale, panLevel])
}
