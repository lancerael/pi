import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BarChart } from './BarChart'

export default {
  title: 'Charts/BarChart',
  component: BarChart,
} as ComponentMeta<typeof BarChart>

const Template: ComponentStory<typeof BarChart> = () => <BarChart />

export const Default = Template.bind({})
