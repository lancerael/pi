import throttle from 'lodash.throttle'
import { useEffect } from 'react'

export const useTouch = (
  svgRef: { current: SVGSVGElement | null },
  setControls: any
) => {
  useEffect(() => {
    let isDragging = false
    const start = () => {
      isDragging = true
    }
    const drag = throttle(({ movementX }: any) => {
      if (isDragging) {
        setControls(({ panLevel, zoomLevel }: any) => {
          const newPanLevel = panLevel + (movementX * 2.2) / zoomLevel
          return {
            panLevel: newPanLevel > 1 ? newPanLevel : 1,
            zoomLevel,
            transition: false,
          }
        })
      }
    }, 100)
    const stop = () => {
      isDragging = false
    }

    const pinch = (e: any) => {
      if (e.ctrlKey) {
        e.preventDefault()
        stop()
        setControls(({ panLevel, zoomLevel }: any) => {
          let newZoom = zoomLevel - e.deltaY * 0.001
          newZoom = newZoom < 0.1 ? 0.1 : newZoom
          return {
            zoomLevel: Math.round(newZoom * 1000) / 1000,
            panLevel,
            transition: false,
          }
        })
      }
    }

    svgRef.current?.addEventListener('mousedown', start)
    addEventListener('mousemove', drag)
    addEventListener('mouseup', stop)
    svgRef.current?.addEventListener('wheel', pinch, { passive: false })
    return () => {
      svgRef.current?.removeEventListener('mousedown', start)
      removeEventListener('mousemove', drag)
      removeEventListener('mouseup', stop)
    }
  }, [svgRef.current])
}
