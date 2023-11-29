// useHashComparison.stories.jsx
import { useState } from 'react'
import useHashComparison from './useHashComparison'
import type { Meta, StoryObj } from '@storybook/react'

const HashComparisonDemo = () => {
  const [inputValue, setInputValue] = useState('initialValue')
  const hashCode = useHashComparison(inputValue)

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <div>
        <label htmlFor="input">Input Value: </label>
        <input
          id="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div>Hash Code: {hashCode}</div>
    </div>
  )
}

const meta: Meta<typeof useHashComparison> = {
  title: 'Utils/Hooks/useHashComparison',
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * Always get a consistent hash for your value. It can be used eg. for simple deep comparison of dependencies
 */
export const Default: StoryObj<typeof useHashComparison> = {
  args: {},
  render: HashComparisonDemo,
}

export default meta
