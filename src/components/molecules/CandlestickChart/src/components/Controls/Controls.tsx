import React, { FC } from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'

export const Controls = ({
  setZoomLevel: z,
  setPanLevel: p,
  multiplier,
}: ControlsProps) => {
  const css = {
    minWidth: 'auto',
    margin: '5px',
  }
  return (
    <StyledControls>
      <Button {...css} onClick={() => p((c: any) => c + multiplier * 100)}>
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button
        {...css}
        onClick={() => z((c) => (c > multiplier ? c - multiplier : multiplier))}
      >
        ➖
      </Button>
      <Button {...css} onClick={() => z((c: any) => c + multiplier)}>
        ➕
      </Button>
      <Button {...css} onClick={() => p((c: any) => c - multiplier * 100)}>
        <StyledEmoji rotate={90}>🔺</StyledEmoji>
      </Button>
    </StyledControls>
  )
}

export default Controls
