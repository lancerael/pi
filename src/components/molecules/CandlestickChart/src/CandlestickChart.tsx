import React, { FC, useEffect, useRef, useState } from 'react'
import Loader from '@pi-lib/loader'
import { useScaling, useAxes, useCandles, useDimensions } from './hooks'
import { ClipPaths, Controls, CandleTooltip } from './components'
import {
  StyledCandlestickChart,
  StyledContainer,
  StyledLoaderContainer,
} from './CandlestickChart.style'
import { CandlestickChartProps } from './CandlestickChart.types'
import throttle from 'lodash.throttle'

export const CandlestickChart: FC<CandlestickChartProps> = ({ data = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [controls, setControls] = useState({ zoomLevel: 1, panLevel: 1 })
  const dimensions = useDimensions(svgRef, data.length, controls)
  const scaling = useScaling(data, dimensions)
  useAxes(svgRef, data, scaling.scales, dimensions)
  const candles = useCandles(svgRef, data, dimensions, scaling)

  useEffect(() => {
    let isDragging = false
    const start = () => {
      isDragging = true
    }
    const drag = throttle(({ movementX }: any) => {
      if (isDragging) {
        setControls(({ panLevel, zoomLevel }: any) => ({
          panLevel: panLevel + (movementX * 2.2) / zoomLevel,
          zoomLevel,
        }))
      }
    }, 100)
    const stop = () => {
      isDragging = false
    }
    const zoom = throttle((e: any) => {
      if (e.ctrlKey) {
        e.preventDefault()
        setControls(({ panLevel, zoomLevel }: any) => {
          let newZoom = zoomLevel - e.deltaY * 0.006
          newZoom = newZoom < 0.1 ? 0.1 : newZoom
          console.log(newZoom)
          return {
            zoomLevel: newZoom,
            panLevel,
          }
        })
      }
    }, 300)

    svgRef.current?.addEventListener('mousedown', start)
    addEventListener('mousemove', drag)
    addEventListener('mouseup', stop)
    svgRef.current?.addEventListener('wheel', zoom, { passive: false })
    return () => {
      svgRef.current?.removeEventListener('mousedown', start)
      removeEventListener('mousemove', drag)
      removeEventListener('mouseup', stop)
    }
  }, [svgRef.current])
  return (
    <StyledContainer>
      {!data?.length ? (
        <StyledLoaderContainer>
          <Loader />
        </StyledLoaderContainer>
      ) : (
        <Controls
          {...{
            svgRef,
            controls,
            setControls,
            visibleRange: dimensions.visibleRange,
            length: data.length,
          }}
        />
      )}
      <StyledCandlestickChart ref={svgRef}>
        <ClipPaths {...dimensions.sizes} />
      </StyledCandlestickChart>
      <CandleTooltip {...candles} />
    </StyledContainer>
  )
}

export default CandlestickChart
