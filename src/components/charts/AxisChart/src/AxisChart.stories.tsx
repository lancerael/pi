import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AxisChart } from './AxisChart'
import { getRandomData } from 'd-theia'

export const { chartData, chartConfig } = getRandomData() as any

export default {
  title: 'Charts/AxisChart',
  component: AxisChart,
} as ComponentMeta<typeof AxisChart>

const Template: ComponentStory<typeof AxisChart> = (props: any) => (
  <div style={{ width: '80%', height: '40vw' }}>
    <AxisChart {...{ chartData, chartConfig, ...props }} />
  </div>
)

export const Bar = Template.bind({})
Bar.args = {
  chartId: 'test',
  chartType: 'bar',
}

export const Line = Template.bind({})
Line.args = {
  chartId: 'test2',
  chartType: 'line',
}
