import { useCallback, useEffect, useRef, useState } from 'react'
import { getTransientProps } from '@pi-lib/styles'
import { throttle } from '@pi-lib/utils'
import { StyledTooltip } from './Tooltip.style'
import { TooltipProps } from './Tooltip.types'

/**
 * A React component used to show and position a tooltip containing content
 */
export const Tooltip = ({
  children,
  isActive = false,
  x = 0,
  y = 0,
}: TooltipProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastWidth = useRef<number>()
  const timeouts = useRef<{ [key: string]: NodeJS.Timeout }>({})
  const [position, setPosition] = useState({ x, y })
  const [isRendered, setIsRendered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  /**
   * Update the tooltip to the correct position
   */
  const updatePosition = useCallback(
    (xPos: number, yPos: number) => {
      if (!xPos || !yPos) return
      setPosition({
        x: xPos - (lastWidth.current ?? 0) / 2,
        y: yPos + (isRendered ? 24 : 16),
      })
    },
    [containerRef.current, isRendered]
  )

  // Enable positioning
  useEffect(() => {
    updatePosition(x, y)

    // Update the position based on mouse location
    const updateMousePos = throttle(
      ({ clientX, clientY }: MouseEvent) =>
        !x && !y && clientX && clientY && updatePosition(clientX, clientY),
      100
    )

    const removeListener = () => {
      removeEventListener('mousemove', updateMousePos)
    }

    if (x && y) removeListener()
    else addEventListener('mousemove', updateMousePos)
    return removeListener
  }, [x, y])

  // Manage styles for a smooth transition
  useEffect(() => {
    const clearTimeouts = () => {
      clearTimeout(timeouts.current?.unrender)
      clearTimeout(timeouts.current?.position)
      clearTimeout(timeouts.current?.show)
    }
    clearTimeouts()
    if (isActive) {
      setIsRendered(true)
      timeouts.current = {
        position: setTimeout(() => {
          lastWidth.current = containerRef.current?.clientWidth
          updatePosition(x, y)
        }, 100),
        show: setTimeout(() => {
          setIsVisible(true)
        }, 150),
      }
    } else {
      setIsVisible(false)
      timeouts.current.unrender = setTimeout(() => setIsRendered(false), 200)
    }
    return clearTimeouts
  }, [isActive])

  return (
    <StyledTooltip
      ref={containerRef}
      {...getTransientProps({ isVisible, isRendered })}
      style={{ left: position.x, top: position.y }}
    >
      {isRendered && children}
    </StyledTooltip>
  )
}

export default Tooltip
