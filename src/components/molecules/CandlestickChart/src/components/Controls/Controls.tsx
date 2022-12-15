import React from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'

const zoomSpeed = 0.2
const panSpeed = 100

export const Controls = ({
  controls: { zoomLevel },
  setControls,
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
        onClick={() =>
          setControls(({ panLevel, zoomLevel }: any) => ({
            panLevel: panLevel + panSpeed / zoomLevel,
            zoomLevel,
          }))
        }
        disabled={visibleRange.first <= 0}
      >
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button
        {...buttonStyle}
        onClick={() =>
          setControls(({ panLevel, zoomLevel }: any) => ({
            zoomLevel: +(
              zoomLevel - zoomSpeed > 0 ? zoomLevel - zoomSpeed : zoomSpeed / 2
            ).toFixed(2),
            panLevel,
          }))
        }
        disabled={zoomLevel < zoomSpeed}
      >
        ➖
      </Button>
      <Button
        {...buttonStyle}
        onClick={() =>
          setControls(({ panLevel, zoomLevel }: any) => ({
            zoomLevel: +(
              zoomLevel === zoomSpeed / 2 ? zoomSpeed : zoomLevel + zoomSpeed
            ).toFixed(2),
            panLevel,
          }))
        }
        disabled={zoomLevel >= zoomSpeed * 10}
      >
        ➕
      </Button>
      <Button
        {...buttonStyle}
        onClick={() =>
          setControls(({ panLevel, zoomLevel }: any) => ({
            panLevel: panLevel - panSpeed / zoomLevel,
            zoomLevel,
          }))
        }
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
