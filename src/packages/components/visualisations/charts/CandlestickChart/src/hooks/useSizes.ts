import { useCallback, useState } from 'react'
import { ContainerRef, SvgRef } from '../CandlestickChart.types'
import useLimitedEvents from '@pi-lib/use-limited-events'

/**
 * Set the sizes for the chart and container, and bind resize events
 * @param svgRef
 * @param containerRef
 * @returns sizes
 */
export const useSizes = (svgRef: SvgRef, containerRef: ContainerRef) => {
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  })

  // The callback to bind to the resize event
  const updateSizes = useCallback(() => {
    const { clientWidth: width = 0, clientHeight: height = 0 } =
      svgRef?.current ?? {}
    const { offsetLeft: left = 0, offsetTop: top = 0 } =
      containerRef?.current ?? {}

    setSizes({
      width,
      height,
      left,
      top,
    })
  }, [svgRef.current, containerRef.current])

  useLimitedEvents(updateSizes, { doInit: true })

  return sizes
}
