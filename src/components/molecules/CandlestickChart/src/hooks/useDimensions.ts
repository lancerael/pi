import { useEffect, useState, useRef, useCallback } from 'react'
import {
  AXIS_OFFSETS,
  CANDLE_PADDING,
  CANDLE_WIDTH,
  CHART_PADDING,
} from '../CandlestickChart.constants'
import throttle from 'lodash.throttle'

const { abs, round } = Math

export const useDimensions = (
  svgRef: any | null,
  length: number,
  zoomLevel: number,
  panLevel: number
) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })
  const [visibleRange, setVisibleRange] = useState({
    first: 0,
    last: 0,
    offset: 0,
    totalWidth: 0,
  })
  const resizeRef = useRef<void>()

  // Handler used to update the SVG sizes
  const updateSVG = useCallback(
    throttle(() => {
      const { clientWidth: width, clientHeight: height } = svgRef.current
      setDimensions({ width, height })
    }, 200),
    [svgRef.current]
  )

  // Add resize handler for responsiveness
  useEffect(() => {
    resizeRef.current = addEventListener('resize', updateSVG)
    return () => {
      removeEventListener('resize', updateSVG)
      resizeRef.current = undefined
    }
  }, [])

  // Recalculate dimensions
  useEffect(() => {
    updateSVG()
  }, [svgRef.current, length])

  // Recalculate offset and range
  useEffect(() => {
    if (!length) return
    const { width } = dimensions

    const fullCandleWidth = CANDLE_WIDTH * (1 + CANDLE_PADDING) * zoomLevel
    const totalWidth = fullCandleWidth * length
    const baseOffset = width - AXIS_OFFSETS[1] + CHART_PADDING * 2
    let offset = panLevel * zoomLevel - totalWidth + baseOffset
    offset = offset <= 0 ? offset : 0
    offset = totalWidth > width ? offset : baseOffset - totalWidth
    offset =
      abs(offset - baseOffset) <= totalWidth ? offset : -totalWidth + baseOffset

    const first = round((offset * -1 - CHART_PADDING) / fullCandleWidth)
    const last = round((offset * -1 + baseOffset) / fullCandleWidth)

    setVisibleRange({ first, last, offset, totalWidth })
  }, [zoomLevel, panLevel, length, dimensions.width])

  return { visibleRange, dimensions }
}
