import throttle from 'lodash.throttle'
import { useEffect } from 'react'

export const useTouch = (
  svgRef: { current: SVGSVGElement | null },
  setControls: any
) => {
  useEffect(() => {
    let isDragging = false
    let oldClientX = 0

    const start = () => {
      isDragging = true
      oldClientX = 0
    }

    const stop = () => {
      isDragging = false
    }

    const drag = throttle((e: any) => {
      if (isDragging) {
        const { clientX } = e.targetTouches?.[0] || e
        const movementX = oldClientX ? clientX - oldClientX : 0
        oldClientX = clientX
        setControls(({ panLevel, zoomLevel }: any) => {
          const newPanLevel = panLevel + movementX / zoomLevel
          return {
            panLevel: newPanLevel > 1 ? newPanLevel : 1,
            zoomLevel,
            transition: false,
          }
        })
      }
    }, 100)

    const zoom = throttle((e: any) => {
      setControls(({ panLevel, zoomLevel }: any) => {
        let newZoom = zoomLevel - e.deltaY * 0.006
        newZoom = newZoom < 0.1 ? 0.1 : newZoom
        return {
          zoomLevel: Math.round(newZoom * 1000) / 1000,
          panLevel,
          transition: false,
        }
      })
    }, 100)

    const pinch = (e: any) => {
      if (e.ctrlKey) {
        zoom(e)
        e.preventDefault()
      }
    }

    const updateListeners = (
      action: 'add' | 'remove' = 'remove',
      pinchArgs?: { passive: boolean }
    ) => {
      const onWindow = window[`${action}EventListener`]
      const onSvg = svgRef.current?.[`${action}EventListener`]
      onWindow('mousemove', drag)
      onWindow('touchmove', drag)
      onWindow('mouseup', stop)
      onWindow('touchend', stop)
      onSvg?.('mousedown', start)
      onSvg?.('touchstart', start)
      onSvg?.('wheel', pinch, pinchArgs)
    }

    updateListeners('add', { passive: false })
    return updateListeners
  }, [svgRef.current])
}
