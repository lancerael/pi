// useWindowClick.stories.jsx
import React, { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useWindowClick } from './useWindowClick'

const render = () => {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null)

  useWindowClick(() => setCount((x) => x + 1), containerRef)

  return (
    <div
      style={{
        userSelect: 'none',
        width: '100%',
        padding: '20px',
      }}
    >
      Click outside the blue box or press the Escape key.
      <br />
      <br />
      <div
        ref={containerRef}
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'lightblue',
          margin: 'auto',
          padding: '2rem',
        }}
      >
        Clicking inside does nothing. Can be used to close modals etc.
      </div>
      <div>Count: {count}</div>
    </div>
  )
}

const meta: Meta<typeof useWindowClick> = {
  title: 'Utilities/Hooks/useWindowClick',
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * Click outside the blue box or press the Escape key to see the counts increase.
 */
export const Default: StoryObj<typeof useWindowClick> = {
  args: {},
  render,
}

export default meta
