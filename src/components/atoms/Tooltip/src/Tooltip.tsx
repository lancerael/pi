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

  // Update the tooltip to the correct position
  const updatePosition = useCallback(
    (xPos: number, yPos: number) =>
      setPosition({
        x: xPos - (containerRef.current?.clientWidth ?? 0) / 2,
        y: yPos + 24,
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

    if (x || y) removeListener()
    else addEventListener('mousemove', updateMousePos)
    return removeListener
  }, [x, y])

  return (
    <StyledTooltip
      ref={containerRef}
      {...{ isVisible, children }}
      style={{ left: position.x, top: position.y }}
    />
  )
}

export default Tooltip
