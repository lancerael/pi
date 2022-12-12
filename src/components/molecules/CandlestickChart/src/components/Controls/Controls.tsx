import React, { FC } from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'

const zoomSpeed = 0.2
const panSpeed = 100

export const Controls = ({
  zoomLevel,
  setZoomLevel: z,
  setPanLevel: p,
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
        onClick={() => p((c: any) => c + panSpeed)}
        disabled={visibleRange.first <= 0}
      >
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button
        {...buttonStyle}
        onClick={() =>
          z(
            (c) =>
              +(c - zoomSpeed > 0 ? c - zoomSpeed : zoomSpeed / 2).toFixed(2)
          )
        }
        disabled={zoomLevel < zoomSpeed || visibleRange.first <= 0}
      >
        ➖
      </Button>
      <Button
        {...buttonStyle}
        onClick={() =>
          z(
            (c) => +(c === zoomSpeed / 2 ? zoomSpeed : c + zoomSpeed).toFixed(2)
          )
        }
        disabled={zoomLevel >= zoomSpeed * 10}
      >
        ➕
      </Button>
      <Button
        {...buttonStyle}
        onClick={() => p((c: any) => c - panSpeed)}
        disabled={
          visibleRange.last >= length - 1 ||
          visibleRange.last - visibleRange.first > length
        }
      >
        <StyledEmoji rotate={90}>🔺</StyledEmoji>
      </Button>
    </StyledControls>
  )
}

export default Controls
