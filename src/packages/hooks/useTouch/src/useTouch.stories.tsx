import type { Meta, StoryObj } from '@storybook/react'
import { useTouch, useControls } from './'
import { useRef } from 'react'
import React from 'react'

const render = () => {
  const targetRef = useRef(null)
  const controls = useControls()
  useTouch<any>({ targetRef, controls, zoomRange: [0.5, 20] })
  const { zoomLevel, panLevel } = controls
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <div
        ref={targetRef}
        style={{
          width: `${100 * zoomLevel}px`,
          height: `${100 * zoomLevel}px`,
          borderRadius: '25%',
          transition: 'none',
          background: 'purple',
          cursor: 'pointer',
          position: 'absolute',
          left: `${50 + panLevel.x - zoomLevel * 50}px`,
          top: `${50 + panLevel.y - zoomLevel * 50}px`,
          color: 'white',
          textAlign: 'center',
          padding: `${12 * zoomLevel}px`,
          boxSizing: 'border-box',
          userSelect: 'none',
          fontSize: `${14 * zoomLevel}px`,
        }}
      >
        DRAG ME!
        <br />
        <br />
        PINCH ME!
      </div>
    </div>
  )
}

const meta: Meta<typeof useTouch> = {
  title: 'hooks/useTouch',
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
