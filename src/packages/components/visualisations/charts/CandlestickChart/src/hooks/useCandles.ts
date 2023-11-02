import { useEffect, useRef, useCallback, useState } from 'react'
import { select } from 'd3-selection'
import 'd3-transition'
import {
  getAttributes,
  useHashComparison,
  useThrottledEvents,
} from '@pi-lib/utils'
import {
  ActiveItem,
  BarSelection,
  BarType,
  CandlestickDayData,
  ChartTransition,
  SvgRef,
  SVGSelection,
  ValueKeys,
} from '../CandlestickChart.types'
import {
  CANDLE_PADDING,
  CANDLE_WIDTH,
  TRANSITION_TIME,
} from '../CandlestickChart.constants'

const typeMap = {
  wicks: 'line',
  candles: 'rect',
}

export const useCandles = (
  svgRef: SvgRef,
  sizes: any,
  dataRange: any,
  scales: any
) => {
  const { xScale, yScale } = scales
  const { left = 0, top = 0 } = sizes
  const { dataSlice, offset } = dataRange
  const lastItem = dataSlice[dataSlice.length - 1]
  const groups = useRef<{ [key: string]: SVGSelection }>({})
  const selectedItem = useRef<string>()
  const prevLastItem = useRef(lastItem)
  const dataHash = useHashComparison(dataSlice)
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    item: undefined,
    position: undefined,
  })
  const doTransition =
    prevLastItem.current?.date === lastItem?.date &&
    prevLastItem.current?.close !== lastItem?.close
  prevLastItem.current = structuredClone(lastItem)

  // Get d3 selection of SVG
  const getSvg = useCallback(() => select(svgRef.current), [svgRef.current])

  // Bind the data to the chosen type of bars
  const bindData = useCallback(
    (type: BarType, parent: SVGSelection = getSvg() as SVGSelection) => {
      !doTransition &&
        parent.selectAll(`${typeMap[type]}.${type}`).data([]).exit().remove()
      return parent
        .selectAll(`${typeMap[type]}.${type}`)
        .data(dataRange.dataSlice) as unknown as BarSelection
    },
    [dataHash]
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
    [yScale]
  )

  // A helper to scale the candle Y axis position
  const scaledY = useCallback(
    (low: number, high: number) =>
      yScale(Math.min(low, high)) - scaledHeight(low, high) || 1,
    [yScale]
  )

  // Clear the tooltip selection on window resize or click
  const resetSelection = useCallback((e?: UIEvent) => {
    if (!e || (e?.target as SVGElement)?.nodeName !== 'rect') {
      selectedItem.current = undefined
      setActiveItem(() => ({}))
    }
  }, [])

  useThrottledEvents(resetSelection, ['resize', 'pointerdown'], false)

  // Place the bars based on latest data
  const placeBars = useCallback(
    (type: BarType, keys: ValueKeys[]) => {
      let bars = bindData(type, getGroup(type))

      if (bars.size() !== dataSlice.length) {
        bars = bars.enter().append(typeMap[type])
      }

      const getTransition = () =>
        doTransition ? bars.transition().duration(TRANSITION_TIME) : bars

      const x = (d: CandlestickDayData) =>
        Number(xScale(d.date)) +
        (type === 'wicks' ? +xScale.bandwidth() / 2 : 0) +
        offset +
        CANDLE_WIDTH -
        CANDLE_WIDTH * CANDLE_PADDING

      const y = (d: CandlestickDayData) => scaledY(d[keys[0]], d[keys[1]])

      const height = (d: CandlestickDayData) =>
        scaledHeight(d[keys[0]], d[keys[1]])

      const y2 = (d: CandlestickDayData) => y(d) + height(d)

      const activateItem = (d: CandlestickDayData, candle: SVGRectElement) => {
        const { x, y, width, height } = getAttributes(candle, [
          'x',
          'y',
          'width',
          'height',
        ])
        setActiveItem({
          item: d,
          position: {
            x: +x - 1 + +width / 2 + left,
            y: +y + +height + top,
          },
        })
      }

      if (type === 'candles') {
        bars.attr('width', () => +xScale.bandwidth()).attr('x', x)
        ;(getTransition().attr('y', y) as ChartTransition).attr(
          'height',
          height
        )
        bars
          .classed('is-increased', (d) => d.close > d.open)
          .classed('is-decreased', (d) => d.close < d.open)
          .classed('is-zoomed', () => +xScale.bandwidth() > 10)
          .classed('is-active', (d) => d.date === selectedItem.current)
          .attr('data-date', (d) => d.date)
          .on('pointerup', ({ currentTarget }, d) => {
            selectedItem.current = d.date
            activateItem(d, currentTarget as SVGRectElement)
          })
          .on('pointerover', ({ currentTarget }, d) => {
            if (!selectedItem.current) {
              activateItem(d, currentTarget as SVGRectElement)
            }
          })
          .on('pointerout', () => {
            if (!selectedItem.current) {
              resetSelection()
            }
          })
      } else {
        bars.attr('x1', x).attr('y1', y).attr('x2', x).attr('y2', y2)
      }

      bars.classed(type, true).exit().remove()

      return bars
    },
    [dataHash, offset]
  )

  // Add the style for the currently selected item
  useEffect(() => {
    getSvg().selectAll('rect.candles').classed('is-active', false)
    if (selectedItem.current) {
      getSvg()
        .select(`rect.candles[data-date="${selectedItem.current}"]`)
        .classed('is-active', true)
    }
  }, [selectedItem.current])

  // Update the chart whenever the data/scale changes
  useEffect(() => {
    if (xScale?.bandwidth?.()) {
      placeBars('wicks', ['low', 'high'])
      placeBars('candles', ['open', 'close'])
    }
  }, [dataHash, offset])

  return { activeItem, resetSelection }
}
