// useThrottledEvents.stories.jsx
import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useThrottledEvents } from './useThrottledEvents' // Adjust the import path as needed

const Render = () => {
  const [count, setCount] = useState(0)
  const callback = () => setCount((prevCount) => prevCount + 1)

  useThrottledEvents(callback, { timeout: 500, doInit: false })

  const [standardCount, setStandardCount] = useState(0)

  useEffect(() => {
    const resizer = () => setStandardCount((thisCount) => thisCount + 1)
    addEventListener('resize', resizer)
    return () => removeEventListener('resize', resizer)
  }, [])

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <div>Throttled Resize Event Count: {count}</div>
      <div>Standard Resize Event Count: {standardCount}</div>
    </div>
  )
}

const meta: Meta<typeof useThrottledEvents> = {
  title: 'Utilities/Hooks/useThrottledEvents',
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * Resize the window to see the count increase (throttled).
 */
export const Default: StoryObj<typeof useThrottledEvents> = {
  args: {},
  render: Render,
}

export default meta
