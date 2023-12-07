// useLimitedEvents.stories.jsx
import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useLimitedEvents } from './useLimitedEvents' // Adjust the import path as needed

const Render = () => {
  const [throttleCount, setThrottleCount] = useState(0)
  const [debounceCount, setDebounceCount] = useState(0)
  const throttleCallback = () => setThrottleCount((prevCount) => prevCount + 1)
  const debounceCallback = () => setDebounceCount((prevCount) => prevCount + 1)

  useLimitedEvents(throttleCallback, { timeout: 500, type: 'throttle' })
  useLimitedEvents(debounceCallback, { timeout: 500, type: 'debounce' })

  const [standardCount, setStandardCount] = useState(0)

  useEffect(() => {
    const resizer = () => setStandardCount((thisCount) => thisCount + 1)
    addEventListener('resize', resizer)
    return () => removeEventListener('resize', resizer)
  }, [])

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <div>Throttled Resize Event Count: {throttleCount}</div>
      <div>Debounced Resize Event Count: {debounceCount}</div>
      <div>Standard Resize Event Count: {standardCount}</div>
    </div>
  )
}

const meta: Meta<typeof useLimitedEvents> = {
  title: 'Utilities/Hooks/useLimitedEvents',
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * Resize the window to see the counts increase.
 */
export const Default: StoryObj<typeof useLimitedEvents> = {
  args: {},
  render: Render,
}

export default meta
