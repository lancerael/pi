import { axisBottom, axisRight } from 'd3-axis'
import { select } from 'd3-selection'
import { useEffect, useState } from 'react'
import { CHART_PADDING, TRANSITION_TIME } from '../CandlestickChart.constants'
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

  const getDateLabel = (d: string = '', i: number) => {
    const candleWidth = xScale.bandwidth?.() || 0
    const date = new Date(d)
    const [year, month, day] = d.split('-')
    if (day === '01') {
      if (month === '01') return year
      return date.toLocaleString('en-UK', {
        month: 'short',
      })
    }
    const daysInMonth = new Date(+year, +month, 0).getDate()
    const halfDay = Math.ceil(daysInMonth / 2)
    const quarterDay = Math.round(halfDay / 2)
    let dayList = []
    if (candleWidth > 1) dayList.push(halfDay)
    if (candleWidth > 3) dayList.push(quarterDay, quarterDay * 3)
    if (candleWidth > 7) dayList = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
    if (dayList.includes(Number(day))) return day
    if (xScale.domain().length - 1 === i) return day
    return ''
  }

  // Set up the x and y axes
  useEffect(() => {
    if (!svgRef.current) return
    // Initialise the x axis
    setAxisX(
      select(svgRef.current)
        .append('g')
        .attr('clip-path', 'url(#bottom-axis)')
        .classed('x-axis', true)
        .append('g')
    )
    // Initialise the y axis
    setAxisY(select(svgRef.current).append('g').classed('y-axis', true))
  }, [svgRef])

  // Update the axes when the scales change
  useEffect(() => {
    if (!xScale.domain) return

    // Update the x axis text labels
    axisX
      .call(axisBottom(xScale))
      .attr(
        'transform',
        `translate(${offsetWidth},${height - AXIS_OFFSETS[0]})`
      )
      .selectAll('text')
      .attr('x', (d: string, i: number) => getDateLabel(d, i).length * -3 - 16)
      .attr('y', -4)
      .attr('transform', 'rotate(270)')
      .text(getDateLabel)

    // Update the x axis tick lines
    axisX
      .selectAll('line')
      .attr('stroke', (d: string, i: number) =>
        getDateLabel(d, i).length > 2 ? 'currentColor' : 'grey'
      )
      .attr('y2', (d: string, i: number) =>
        getDateLabel(d, i).length ? 12 : 6
      )

    // Update the y axis
    axisY
      .call(axisRight(yScale))
      .attr(
        'transform',
        `translate(${width - AXIS_OFFSETS[1] + CHART_PADDING},${CHART_PADDING})`
      )
  }, [xScale, yScale, panLevel])
}
