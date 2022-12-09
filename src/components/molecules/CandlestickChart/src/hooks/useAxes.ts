import { axisBottom, axisRight, AxisScale } from 'd3-axis'
import { select } from 'd3-selection'
import { useEffect, useState } from 'react'
import { CHART_PADDING } from '../CandlestickChart.constants'
import { CandlestickDayData } from '../CandlestickChart.types'
import { AXIS_OFFSETS } from './../CandlestickChart.constants'
import { useScaling } from './useScaling'

// Used to cache date labels
const dateMap: { [key: string]: string } = {}

// Compute the date labels based on the specified date
const getDateLabel = (d: string = '', i: number, xScale: any) => {
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
  if (c > 7) dayList = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
  if (dayList.includes(Number(day))) dateLabel = day
  if (xScale.domain().length - 1 === i) dateLabel = day
  dateMap[mapKey] = dateLabel
  return dateLabel
}

export const useAxes = (
  svgRef: any | null,
  data: CandlestickDayData[],
  panLevel: number,
  scales: any,
  dimensions: any
) => {
  const [axisX, setAxisX] = useState<any>()
  const [axisY, setAxisY] = useState<any>()
  const { xScale, yScale } = scales
  const { width, height, offsetWidth } = dimensions

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
  }, [])

  // Update the axes when the scales change
  useEffect(() => {
    if (!xScale.domain || !data) return

    // Update the x axis text labels
    axisX
      .call(axisBottom(xScale))
      .attr(
        'transform',
        `translate(${offsetWidth},${height - AXIS_OFFSETS[0]})`
      )
      .selectAll('text')
      .classed(
        'emphasise',
        (d: string, i: number) => getDateLabel(d, i, xScale).length > 2
      )
      .attr(
        'x',
        (d: string, i: number) => getDateLabel(d, i, xScale).length * -4 - 16
      )
      .attr('y', -4)
      .attr('transform', 'rotate(270)')
      .text((d: string, i: number) => getDateLabel(d, i, xScale))

    // Update the x axis tick lines
    axisX
      .selectAll('line')
      .attr('stroke', (d: string, i: number) =>
        getDateLabel(d, i, xScale).length > 2 ? 'currentColor' : 'grey'
      )
      .attr('y2', (d: string, i: number) =>
        getDateLabel(d, i, xScale).length ? 12 : 6
      )

    // Update the y axis
    axisY
      .call(axisRight(yScale as AxisScale<number>))
      .attr(
        'transform',
        `translate(${width - AXIS_OFFSETS[1] + CHART_PADDING},${CHART_PADDING})`
      )
  }, [xScale, yScale])
}
