import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BarChart } from './BarChart'
import { randomData } from '@pi-lib/charts'
import React from 'react'

export default {
  title: 'Charts/BarChart',
  component: BarChart,
} as ComponentMeta<typeof BarChart>

const Template: ComponentStory<typeof BarChart> = () => (
  <BarChart {...randomData()} />
)

export const Default = Template.bind({})
