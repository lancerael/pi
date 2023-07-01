import { axisBottom, axisRight } from 'd3-axis'
import { select } from 'd3-selection'
import { useEffect, useRef } from 'react'
import { CHART_PADDING } from '../CandlestickChart.constants'
import { SvgRef, IAxis, Scales } from '../CandlestickChart.types'
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
  sizes: any,
  dataRange: any,
  scales: any
) => {
  const axisX = useRef<IAxis>()
  const axisY = useRef<IAxis>()

  const { height, width } = sizes
  const { dataSlice, offset } = dataRange
  const { xScale, yScale } = scales

  // Set up the x and y axes
  useEffect(() => {
    if (!svgRef.current) return

    // Cleanup if needed
    select(svgRef.current).select('g.x-axis, y.y-axis').remove()

    // Initialise the x axis
    axisX.current = select(svgRef.current)
      .append('g')
      .attr('clip-path', 'url(#bottom-axis)')
      .classed('x-axis', true)
      .append('g')

    // Initialise the y axis
    axisY.current = select(svgRef.current).append('g').classed('y-axis', true)
  }, [])

  // Update the axes when the scales change
  useEffect(() => {
    if (!xScale.domain || !dataSlice || !axisX) return

    // Update the x axis and text labels
    axisX.current
      ?.call(axisBottom(xScale))
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
    axisX.current?.selectAll('line.clone').remove()
    axisX.current
      ?.selectAll('line')
      .attr('y2', (d, i) =>
        getDateLabel(d as string, i, xScale).length ? 12 : 6
      )
      .each((d, i, e: any) => {
        if (getDateLabel(d as string, i, xScale).length) {
          var clone = e[i].parentNode.appendChild(e[i].cloneNode(true))
          select(clone)
            .classed('clone', true)
            .attr('y1', -height + 1 + AXIS_OFFSETS[0] + CHART_PADDING)
            .attr('y2', -1)
        }
      })

    // Update the y axis
    axisY.current
      ?.call(axisRight(yScale))
      .attr(
        'transform',
        `translate(${width - AXIS_OFFSETS[1] + CHART_PADDING}, 0)`
      )

    // Update the y axis tick lines
    axisY.current?.selectAll('line.clone').remove()
    axisY.current?.selectAll('line').each((d, i: number, e: any) => {
      var clone = e[i].parentNode.appendChild(e[i].cloneNode(true))
      select(clone)
        .classed('clone', true)
        .attr('x2', -width + 1 + AXIS_OFFSETS[1])
        .attr('x1', -1)
    })
  }, [xScale])
}
