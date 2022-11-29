import React, { FC } from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'

export const Controls = ({
  zoomLevel,
  setZoomLevel: z,
  setPanLevel: p,
  multiplier,
  visibleRange,
  length,
}: ControlsProps) => {
  const buttonStyle = {
    minWidth: 'auto',
    margin: '5px',
  }
  return (
    <StyledControls>
      <Button
        {...buttonStyle}
        onClick={() => p((c: any) => c + multiplier * 100)}
        disabled={visibleRange.first <= 0}
      >
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button
        {...buttonStyle}
        onClick={() => z((c) => (c > multiplier ? c - multiplier : multiplier))}
        disabled={zoomLevel <= multiplier * 5}
      >
        ➖
      </Button>
      <Button
        {...buttonStyle}
        onClick={() => z((c: any) => c + multiplier)}
        disabled={zoomLevel >= multiplier * 30}
      >
        ➕
      </Button>
      <Button
        {...buttonStyle}
        onClick={() => p((c: any) => c - multiplier * 100)}
        disabled={visibleRange.last >= length}
      >
        <StyledEmoji rotate={90}>🔺</StyledEmoji>
      </Button>
    </StyledControls>
  )
}

export default Controls
