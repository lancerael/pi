import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import { useFakeApi } from './hooks'

const StoryTemplate = ({ length }: { length: number }) => {
  const chartData = useFakeApi(length, 1)

  return (
    <div style={{ width: '80%', height: '40vw' }}>
      <CandlestickChart data={chartData} />
    </div>
  )
}

const meta: Meta<typeof StoryTemplate> = {
  title: 'Charts/CandlestickChart',
  component: StoryTemplate,
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof StoryTemplate> = {
  args: {
    length: 400,
  },
}

export default meta
