import React, { FC } from 'react'
import Button from '@pi-lib/button'
import { StyledControls, StyledEmoji } from './Controls.style'
import { ControlsProps } from './Controls.types'

export const Controls = ({
  setZoomLevel: z,
  setPanLevel: p,
}: ControlsProps) => {
  const css = {
    minWidth: 'auto',
    margin: '5px',
  }
  return (
    <StyledControls>
      <Button {...css} onClick={() => z((c) => (c > 0.1 ? c - 0.1 : 0.1))}>
        ➖
      </Button>
      <Button {...css} onClick={() => z((c: any) => c + 0.1)}>
        ➕
      </Button>
      <Button {...css} onClick={() => p((c: any) => c + 10)}>
        <StyledEmoji rotate={-90}>🔺</StyledEmoji>
      </Button>
      <Button {...css} onClick={() => p((c: any) => c - 10)}>
        <StyledEmoji rotate={90}>🔺</StyledEmoji>
      </Button>
    </StyledControls>
  )
}

export default Controls
