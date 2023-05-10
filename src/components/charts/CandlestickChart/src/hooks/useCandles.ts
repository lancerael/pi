import { useEffect, useRef, useCallback, useState } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import {
  ActiveItem,
  BarSelection,
  BarType,
  CandlestickDayData,
  Dimensions,
  Scaling,
  SvgRef,
  SVGSelection,
  ValueKeys,
} from '../CandlestickChart.types'
import { TRANSITION_TIME, CHART_PADDING } from '../CandlestickChart.constants'

const typeMap = {
  wicks: 'line',
  candles: 'rect',
}

export const useCandles = (
  svgRef: SvgRef,
  data: CandlestickDayData[],
  dimensions: Dimensions,
  scaling: Scaling,
  transition: boolean
) => {
  const {
    scales: { xScale },
    utils: { scaledHeight, scaledY },
  } = scaling
  const {
    visibleRange: { offset },
    sizes: { left, top },
  } = dimensions
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
    (type: BarType, parent: SVGSelection = getSvg() as SVGSelection) =>
      parent
        .selectAll(`${typeMap[type]}.${type}`)
        .data(data) as unknown as BarSelection,
    [data]
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

  // Place the bars based on latest data
  const placeBars = useCallback(
    (type: BarType, keys: ValueKeys[]) => {
      let bars = bindData(type, getGroup(type))

      if (bars.size() !== data.length) {
        bars = bars.enter().append(typeMap[type])
      }

      const getTransition = () =>
        bars.transition().duration(transition ? TRANSITION_TIME : 50)

      const x = (d: CandlestickDayData) =>
        Number(xScale(d.date)) +
        (type === 'wicks' ? +xScale.bandwidth() / 2 : 0) +
        offset

      const y = (d: CandlestickDayData) => scaledY(d[keys[0]], d[keys[1]])

      const height = (d: CandlestickDayData) =>
        scaledHeight(d[keys[0]], d[keys[1]])

      const y2 = (d: CandlestickDayData) => y(d) + height(d)

      if (type === 'candles') {
        getTransition()
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
        getTransition().attr('x1', x).attr('y1', y).attr('x2', x).attr('y2', y2)
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
