import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'
import { useEffect } from 'react'

export const useAxes = (svg: any, xScale: any, height: number) => {
  useEffect(() => {
    if (xScale.domain) {
      select(svg.current)
        .append('g')
        .call(axisBottom(xScale))
        .attr('transform', `translate(0,${height - 70})`)
        .selectAll('text')
        .attr('x', -35)
        .attr('y', -4)
        .attr('transform', 'rotate(270)')
        .text((d, i) =>
          i % 5 && i < xScale.domain().length - 1 ? '' : String(d)
        )
    }
  }, [xScale])
}
