import React, { FC } from 'react'
import Button from '@pi-lib/button'
import { StyledControls } from './Controls.style'
import { ControlsProps } from './Controls.types'

export const Controls = ({ setZoomLevel, setPanLevel }: ControlsProps) => (
  <StyledControls>
    <Button
      minWidth="auto"
      // margin="10px"
      onClick={() =>
        setZoomLevel((current: any) => (current > 0.1 ? current - 0.1 : 0.1))
      }
    >
      -
    </Button>
    <Button
      minWidth="auto"
      // margin="10px"
      onClick={() => setZoomLevel((current: any) => current + 0.1)}
    >
      +
    </Button>
    <Button
      minWidth="auto"
      // margin="10px"
      onClick={() => setPanLevel((current: any) => current + 10)}
    >
      &lt;
    </Button>
    <Button
      minWidth="auto"
      // margin="10px"
      onClick={() => setPanLevel((current: any) => current - 10)}
    >
      &gt;
    </Button>
  </StyledControls>
)

export default Controls
