import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import throttle from 'lodash.throttle'
import { StyledTooltip } from './Tooltip.style'
import { TooltipProps } from './Tooltip.types'

export const Tooltip: FC<TooltipProps> = ({
  children,
  isVisible = false,
  x = 0,
  y = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x, y })
  const [isRendered, setIsRendered] = useState(false)
  const displayTimeout = useRef<NodeJS.Timeout>()

  // Update the tooltip to the correct position
  const updatePosition = useCallback(
    (xPos: number, yPos: number) =>
      setPosition({
        x: xPos - (containerRef.current?.clientWidth ?? 0) / 2,
        y: yPos + (isRendered ? 24 : 16),
      }),
    [containerRef.current]
  )

  // Allow  positioning
  useEffect(() => {
    updatePosition(x, y)

    // Update the position based on mouse location
    const updateMousePos = throttle(
      ({ clientX, clientY }: MouseEvent) =>
        !x && !y && updatePosition(clientX, clientY),
      100
    )

    const removeListener = () => {
      removeEventListener('mousemove', updateMousePos)
    }

    if (x && y) removeListener()
    else addEventListener('mousemove', updateMousePos)
    return removeListener
  }, [x, y])

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true)
      clearTimeout(displayTimeout.current)
      return
    }
    displayTimeout.current = setTimeout(() => setIsRendered(false), 200)
  }, [isVisible])

  return (
    <StyledTooltip
      ref={containerRef}
      {...{ isVisible, isRendered }}
      style={{ left: position.x, top: position.y }}
    >
      {isRendered && children}
    </StyledTooltip>
  )
}

export default Tooltip
