// doTransition.stories.jsx
import { useState, useEffect } from 'react'
import doTransition from './doTransition'
import type { Meta, StoryObj } from '@storybook/react'

const TransitionDemo = () => {
  const [value, setValue] = useState(0)
  // const [targetValue, setTargetValue] = useState(1000)
  const targetValue = 1000

  const transition = (value: number = 0) =>
    doTransition({
      values: [value],
      targets: [targetValue],
      callback: ([newValue]) => setValue(newValue),
      increments: 10,
      isGradual: false,
      interval: 50,
    })

  useEffect(() => {
    const clear = transition()

    return () => clear()
  }, [])

  return (
    <div>
      <div>Current Value: {value}</div>
      <div>Target Value: {targetValue}</div>
      <button
        onClick={() => {
          setValue(0)
          transition()
        }}
      >
        Reset
      </button>
    </div>
  )
}

const meta: Meta<typeof doTransition> = {
  title: 'Utilities/Helpers/doTransition',
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * Demonstrates a smooth transition of a numeric value using doTransition.
 */
export const Default: StoryObj<typeof doTransition> = {
  args: {},
  render: TransitionDemo,
}

export default meta
