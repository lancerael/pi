import React, { FC, useEffect, useRef, useState } from 'react'
import throttle from 'lodash.throttle'
import { StyledTooltip } from './Tooltip.style'
import { TooltipProps } from './Tooltip.types'

export const Tooltip: FC<TooltipProps> = ({ children, isVisible = false }) => {
  const moveRef = useRef<void>()
  const containerRef = useRef<HTMLDivElement>(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const updateMousePos = throttle(
    ({ clientX, clientY }: MouseEvent) =>
      setPosition({
        x: clientX - (containerRef.current?.clientWidth ?? 0) / 2,
        y: clientY + 24,
      }),
    100
  )

  // Add mousemove handler
  useEffect(() => {
    moveRef.current = addEventListener('mousemove', updateMousePos)
    return () => {
      removeEventListener('mousemove', updateMousePos)
      moveRef.current = undefined
    }
  }, [])

  return (
    <StyledTooltip
      ref={containerRef}
      {...{ isVisible }}
      style={{ left: position.x, top: position.y }}
    >
      {children}
    </StyledTooltip>
  )
}

export default Tooltip
