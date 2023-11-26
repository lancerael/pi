// useTimer.stories.jsx
import React, { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useTimer } from './'

const render = ({ type, waitTime }) => {
  const [count, setCount] = useState(0)

  const updateTimer = useCallback(
    () => setCount((c) => c + 1),
    [type, waitTime]
  )

  // Use the timer hook to increment the count
  useTimer(updateTimer, type, waitTime)

  return (
    <div
      style={{
        userSelect: 'none',
        width: '100%',
        padding: '20px',
      }}
    >
      The counter will increment {type === 'Timeout' ? 'after' : 'every'}{' '}
      {waitTime}ms: <strong>{count}</strong>
    </div>
  )
}

const meta: Meta<typeof useTimer> = {
  title: 'Utils/Hooks/useTimer',
  argTypes: {
    type: {
      control: 'select',
      options: ['Timeout', 'Interval'],
    },
    waitTime: {
      control: 'number',
    },
  },
  tags: ['autodocs'],
}

/**
 * Demonstrates a simple interval timer that increments a counter every second.
 */
export const Interval: StoryObj<typeof render> = {
  args: {
    type: 'Interval',
    waitTime: 1000,
  },
  render,
}

/**
 * Demonstrates a simple timeout timer that increments a counter after 5 seconds.
 */
export const Timeout: StoryObj<typeof render> = {
  args: {
    type: 'Timeout',
    waitTime: 5000,
  },
  render,
}

export default meta
