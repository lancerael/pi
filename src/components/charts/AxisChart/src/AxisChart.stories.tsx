import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AxisChart } from './AxisChart'
import { getRandomData } from 'd-theia'
import { AxisChartProps } from './AxisChart.types'

const baseProps = getRandomData() as Pick<
  AxisChartProps,
  'chartConfig' | 'chartData'
>

const StoryTemplate = (props: AxisChartProps) => {
  return (
    <div style={{ width: '80%', height: '40vw' }}>
      <AxisChart {...props} />
    </div>
  )
}

const meta: Meta<typeof StoryTemplate> = {
  title: 'Charts/AxisChart',
  component: StoryTemplate,
  tags: ['autodocs'],
}

export const Bar: StoryObj<typeof StoryTemplate> = {
  args: {
    chartId: 'test',
    chartType: 'bar',
    ...baseProps,
  },
}

export const Line: StoryObj<typeof StoryTemplate> = {
  args: {
    chartId: 'test2',
    chartType: 'line',
    ...baseProps,
  },
}

export default meta
