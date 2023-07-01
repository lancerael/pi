import { useEffect, useRef, useCallback, useState } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import {
  ActiveItem,
  BarSelection,
  BarType,
  CandlestickDayData,
  SvgRef,
  SVGSelection,
  ValueKeys,
} from '../CandlestickChart.types'
import { CHART_PADDING } from '../CandlestickChart.constants'

const typeMap = {
  wicks: 'line',
  candles: 'rect',
}

export const useCandles = (
  svgRef: SvgRef,
  sizes: any,
  dataSlice: any,
  scales: any
) => {
  const { xScale, yScale } = scales
  const { left = 0, top = 0 } = sizes
  const groups = useRef<{ [key: string]: SVGSelection }>({})
  const isActive = useRef<boolean>(false)
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    item: undefined,
    position: undefined,
  })

  // Get d3 selection of SVG
  const getSvg = useCallback(() => select(svgRef.current), [svgRef.current])

  // Bind the data to the chosen type of bars
  const bindData = useCallback(
    (type: BarType, parent: SVGSelection = getSvg() as SVGSelection) => {
      parent.selectAll(`${typeMap[type]}.${type}`).data([]).exit().remove()
      return parent
        .selectAll(`${typeMap[type]}.${type}`)
        .data(dataSlice) as unknown as BarSelection
    },
    [dataSlice]
  )

  // Create the groups
  const getGroup = useCallback(
    (type: BarType) => {
      groups.current[type] =
        groups.current[type] ??
        (getSvg()
          .append('g')
          .classed(`${type}-group`, true)
          .attr('clip-path', 'url(#chart-contents)') as SVGSelection)
      return groups.current[type]
    },
    [groups]
  )

  // A helper to scale the candle height
  const scaledHeight = useCallback(
    (low: number, high: number) => Math.abs(yScale(high) - yScale(low)) || 1,
    [scales.yScale]
  )

  // A helper to scale the candle Y axis position
  const scaledY = useCallback(
    (low: number, high: number) =>
      yScale(Math.min(low, high)) - scaledHeight(low, high) || 1,
    [scales.yScale]
  )

  // Place the bars based on latest data
  const placeBars = useCallback(
    (type: BarType, keys: ValueKeys[]) => {
      let bars = bindData(type, getGroup(type))

      if (bars.size() !== dataSlice.length) {
        bars = bars.enter().append(typeMap[type])
      }

      const x = (d: CandlestickDayData) =>
        Number(xScale(d.date)) +
        (type === 'wicks' ? +xScale.bandwidth() / 2 : 0)

      const y = (d: CandlestickDayData) => scaledY(d[keys[0]], d[keys[1]])

      const height = (d: CandlestickDayData) =>
        scaledHeight(d[keys[0]], d[keys[1]])

      const y2 = (d: CandlestickDayData) => y(d) + height(d)

      if (type === 'candles') {
        bars
          .attr('width', () => +xScale.bandwidth())
          .attr('height', height)
          .attr('x', x)
          .attr('y', y)
        bars
          .classed('is-increased', (d) => d.close > d.open)
          .classed('is-decreased', (d) => d.close < d.open)
          .classed('is-zoomed', (d) => +xScale.bandwidth() > 10)
          .on('click', ({ target }, d) => {
            bars.classed('is-active', false)
            select(target).classed('is-active', true)
            isActive.current = true
            setActiveItem({
              item: d,
              position: {
                x: x(d) + xScale.bandwidth() + CHART_PADDING + left - 16,
                y: y2(d) + top,
              },
            })
          })
          .on('mouseover', (e, d) => {
            if (!isActive.current) {
              setActiveItem({
                item: d,
              })
            }
          })
          .on('mouseout', (e, d) => {
            if (!isActive.current) {
              setActiveItem({
                item: undefined,
              })
            }
          })
      } else {
        bars.attr('x1', x).attr('y1', y).attr('x2', x).attr('y2', y2)
      }

      bars.classed(type, true).exit().remove()

      return bars
    },
    [xScale, scaledY]
  )

  // Initialise the canvas with groups for wicks and candles
  // and add reset listener
  useEffect(() => {
    setTimeout(() => {
      getGroup('wicks')
      getGroup('candles')
    })
    const resetSelection = ({ target }: UIEvent) => {
      if ((target as SVGElement)?.nodeName !== 'rect') {
        getSvg().selectAll('rect').classed('is-active', false)
        isActive.current = false
        setActiveItem(({ position }) => ({ item: undefined, position }))
      }
    }
    addEventListener('resize', resetSelection)
    addEventListener('pointerdown', resetSelection)
    return () => {
      removeEventListener('pointerdown', resetSelection)
      removeEventListener('resize', resetSelection)
    }
  }, [])

  // Update the chart whenever the data/scale changes
  useEffect(() => {
    if (xScale?.bandwidth?.()) {
      placeBars('wicks', ['low', 'high'])
      placeBars('candles', ['open', 'close'])
    }
  }, [xScale, scaledY])

  return activeItem
}
