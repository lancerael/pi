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
  const { zoom, panWithOffset } = controls.touchStateSignal.value
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <div
        ref={targetRef}
        style={{
          width: `${boxWidth * zoom}px`,
          height: `${boxWidth * zoom}px`,
          borderRadius: '25%',
          transition: 'none',
          background: 'purple',
          cursor: 'pointer',
          position: 'absolute',
          left: `${panWithOffset.x}px`,
          top: `${panWithOffset.y}px`,
          color: 'white',
          textAlign: 'center',
          padding: `${padding}px`,
          boxSizing: 'border-box',
          userSelect: 'none',
          fontSize: `${14 * zoom}px`,
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
