import type { Meta, StoryObj } from '@storybook/react'
import { AxisChart } from './AxisChart'
import { getRandomData } from 'd-theia'
import { AxisChartProps } from './AxisChart.types'

const baseProps = getRandomData() as Pick<
  AxisChartProps,
  'chartConfig' | 'chartData'
>

const render = (props: AxisChartProps) => {
  return (
    <div style={{ width: '80%', height: '40vw' }}>
      <AxisChart {...props} />
    </div>
  )
}

const meta: Meta<typeof AxisChart> = {
  title: 'Organisms/Charts/AxisChart',
  component: AxisChart,
}

/**
 * The axis chart in bar form
 */
export const Bar: StoryObj<typeof AxisChart> = {
  args: {
    chartId: 'test',
    chartType: 'bar',
    ...baseProps,
  },
  render,
}

/**
 * The axis chart in line form
 */
export const Line: StoryObj<typeof AxisChart> = {
  args: {
    chartId: 'test2',
    chartType: 'line',
    ...baseProps,
  },
  render,
}

export default meta
