import throttle from 'lodash.throttle'
import { useEffect } from 'react'
import { ControlsProps, IControls } from '../components/Controls/Controls.types'

export const useTouch = (
  svgRef: { current: SVGSVGElement | null },
  setControls: ControlsProps['setControls']
) => {
  useEffect(() => {
    let isPressed = false
    let oldClientX = 0
    let oldPinchDist = 0
    let activePointers: {
      [key: string]: Pick<PointerEvent, 'pageX' | 'pageY'>
    } = {}

    // Changes the zoom level
    const zoom = (zoomChange: number) => {
      setControls(({ panLevel, zoomLevel }: IControls) => {
        let newZoom = zoomLevel - zoomChange
        newZoom = newZoom < 0.1 ? 0.1 : newZoom
        return {
          zoomLevel: Math.round(newZoom * 1000) / 1000,
          panLevel,
          transition: false,
        }
      })
    }

    const throttledZoom = throttle(zoom, 100)

    // Changes the pan level
    const pan = (panChange: number) => {
      setControls(({ panLevel, zoomLevel }: IControls) => {
        const newPan = panLevel + panChange / zoomLevel
        return {
          panLevel: newPan > 1 ? newPan : 1,
          zoomLevel,
          transition: false,
        }
      })
    }

    // Handles press start
    const start = ({ pointerId, pageX, pageY }: PointerEvent) => {
      isPressed = true
      oldClientX = 0
      oldPinchDist = 0
      activePointers[pointerId] = { pageX, pageY }
    }

    // Handles press stop
    const stop = (e: PointerEvent) => {
      isPressed = false
      delete activePointers[e.pointerId]
      setControls((controls: IControls) => {
        return {
          ...controls,
          transition: true,
        }
      })
    }

    // Handles movement - used to zoom or pan
    // Depending on number of pointers active
    const move = ({ clientX, pointerId, pageX, pageY }: PointerEvent) => {
      const pointerVals = Object.values(activePointers)
      if (isPressed) {
        if (pointerVals?.length === 2) {
          if (Object.keys(activePointers).indexOf(`${pointerId}`) !== 1) return
          activePointers[pointerId] = { pageX, pageY }
          const xDist = pointerVals[0].pageX - pointerVals[1].pageX
          const yDist = pointerVals[0].pageY - pointerVals[1].pageY
          const pinchDist = Math.sqrt(xDist * xDist + yDist * yDist)
          const zoomChange = oldPinchDist ? (oldPinchDist - pinchDist) / 120 : 0
          oldPinchDist = pinchDist
          zoom(zoomChange)
          return
        } else {
          const panChange = oldClientX ? clientX - oldClientX : 0
          oldClientX = clientX
          pan(panChange)
        }
      }
    }

    const throttledMove = throttle(move, 100)

    // Handler for trackpad pinch
    const pinch = (e: WheelEvent) => {
      if (e.ctrlKey) {
        throttledZoom(e.deltaY * 0.006)
        e.preventDefault()
      }
    }

    // Handler for pointer move to determine throttle
    const pointerMove = (e: PointerEvent) =>
      e.pointerType === 'mouse' ? throttledMove(e) : move(e)

    // Used to add and remove all the listeners
    const updateListeners = (
      action: 'add' | 'remove' = 'remove',
      pinchArgs?: { passive: boolean }
    ) => {
      const onWindow = window[`${action}EventListener`]
      const onSvg = svgRef.current?.[`${action}EventListener`]
      onWindow('pointerup', stop as EventListener)
      onSvg?.('pointerdown', start as EventListener)
      onSvg?.('pointermove', pointerMove as EventListener)
      onSvg?.('wheel', pinch as EventListener, pinchArgs)
    }

    updateListeners('add', { passive: false })
    return updateListeners
  }, [svgRef.current])
}
