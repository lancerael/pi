import type { Meta, StoryObj } from '@storybook/react'
import { useTouch, useControls } from './'
import { useRef } from 'react'
import React from 'react'

const boxWidth = 400
const halfWidth = boxWidth / 2
const padding = 18

const render = () => {
  const targetRef = useRef(null)
  const controls = useControls()
  useTouch<any>({
    targetRef,
    controls,
    zoomRange: [0.25, 2],
    panRange: [
      [-2000, 2000],
      [-2000, 2000],
    ],
  })
  const { zoomLevel, panLevel } = controls
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <div
        ref={targetRef}
        style={{
          width: `${boxWidth * zoomLevel}px`,
          height: `${boxWidth * zoomLevel}px`,
          borderRadius: '25%',
          transition: 'none',
          background: 'purple',
          cursor: 'pointer',
          position: 'absolute',
          left: `${halfWidth + panLevel.x - zoomLevel * halfWidth}px`,
          top: `${halfWidth + panLevel.y - zoomLevel * halfWidth}px`,
          color: 'white',
          textAlign: 'center',
          padding: `${padding}px`,
          boxSizing: 'border-box',
          userSelect: 'none',
          fontSize: `${14 * zoomLevel}px`,
          touchAction: 'none',
        }}
      ></div>
    </div>
  )
}

const meta: Meta<typeof useTouch> = {
  title: 'Utilities/Hooks/useTouch',
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * Drag the purple box around, pinch to zoom
 */
export const Default: StoryObj<typeof useTouch> = {
  args: {},
  render,
}

export default meta

React
