import { axisBottom, axisRight, AxisScale } from 'd3-axis'
import { BaseType, select, Selection } from 'd3-selection'
import { useEffect, useState } from 'react'
import { CHART_PADDING } from '../CandlestickChart.constants'
import {
  CandlestickDayData,
  Dimensions,
  SvgRef,
  IAxis,
  Scales,
} from '../CandlestickChart.types'
import { AXIS_OFFSETS } from './../CandlestickChart.constants'

// Used to cache date labels
const dateMap: { [key: string]: string } = {}

// Compute the date labels based on the specified date
const getDateLabel = (d: string = '', i: number, xScale: Scales['xScale']) => {
  const c = Math.round(xScale.bandwidth?.()) || 0
  const mapKey = `${d}-${i}-${c}`
  if (dateMap[mapKey] !== undefined) return dateMap[mapKey]
  let dateLabel = ''

  const date = new Date(d)
  const [year, month, day] = d.split('-')
  if (day === '01') {
    if (month === '01') dateLabel = year
    else
      dateLabel = date.toLocaleString('en-UK', {
        month: 'short',
      })
  }
  let dayList = []
  if (c > 1) dayList.push(16)
  if (c > 3) dayList.push(8, 24)
  if (c > 7) dayList = [4, 7, 10, 13, 16, 19, 22, 25, 28]
  if (dayList.includes(Number(day))) dateLabel = day
  if (xScale.domain().length - 1 === i) dateLabel = day
  dateMap[mapKey] = dateLabel
  return dateLabel
}

export const useAxes = (
  svgRef: SvgRef,
  data: CandlestickDayData[],
  scales: Scales,
  dimensions: Dimensions
) => {
  const [axisX, setAxisX] = useState<IAxis>()
  const [axisY, setAxisY] = useState<IAxis>()
  const { xScale, yScale } = scales
  const {
    sizes: { width, height },
    visibleRange: { offset, first, last },
  } = dimensions

  // Set up the x and y axes
  useEffect(() => {
    if (!svgRef.current) return

    // Cleanup if needed
    select(svgRef.current).select('g.x-axis, y.y-axis').remove()

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
  }, [])

  // Update the axes when the scales change
  useEffect(() => {
    if (!xScale.domain || !data || !axisX || !axisY) return

    // Update the x axis and text labels
    axisX
      .call(axisBottom(xScale))
      .attr('transform', `translate(${offset},${height - AXIS_OFFSETS[0]})`)
      .selectAll('text')
      .classed(
        'emphasise',
        (d, i) => getDateLabel(d as string, i, xScale).length > 2
      )
      .attr('text-anchor', 'end')
      .attr('x', -16)
      .attr('y', -4)
      .attr('transform', 'rotate(270)')
      .text((d, i) => getDateLabel(d as string, i, xScale))

    // Update the x axis tick lines
    axisX.selectAll('line.clone').remove()
    axisX
      .selectAll('line')
      .attr('y2', (d, i) =>
        getDateLabel(d as string, i, xScale).length ? 12 : 6
      )
      .each((d, i, e: any) => {
        if (
          i > first &&
          i < last &&
          getDateLabel(d as string, i, xScale).length
        ) {
          var clone = e[i].parentNode.appendChild(e[i].cloneNode(true))
          select(clone)
            .classed('clone', true)
            .attr('y1', -height + 1 + AXIS_OFFSETS[0] + CHART_PADDING)
            .attr('y2', -1)
        }
      })

    // Update the y axis
    axisY
      .call(axisRight(yScale as AxisScale<number>))
      .attr(
        'transform',
        `translate(${width - AXIS_OFFSETS[1] + CHART_PADDING}, 0)`
      )

    // Update the y axis tick lines
    axisY.selectAll('line.clone').remove()
    axisY.selectAll('line').each((d, i: number, e: any) => {
      var clone = e[i].parentNode.appendChild(e[i].cloneNode(true))
      select(clone)
        .classed('clone', true)
        .attr('x2', -width + 1 + AXIS_OFFSETS[1])
        .attr('x1', -1)
    })
  }, [xScale, yScale])

  return [axisX, axisY]
}
