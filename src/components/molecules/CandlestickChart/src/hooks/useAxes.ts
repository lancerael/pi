import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'
import { useEffect } from 'react'

export const useAxes = (svg: any, xScale: any, height: number) => {
  useEffect(() => {
    if (xScale.domain) {
      select(svg.current)
        .append('g')
        .attr('class', 'pic-axis pic-axis-x')
        .call(axisBottom(xScale))
        .attr('transform', `translate(0,${height - 100})`)
        .selectAll('text')
        .attr('x', -35)
        .attr('y', -4)
        .attr('transform', 'rotate(270)')
        .attr('class', 'pic-axis-label pic-axis-label-x')
        .text((d) => d as string)
    }
  }, [xScale])
}
