import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import { generateCandlestickData } from './utils/generateCandlestickData'

const candlestickData = generateCandlestickData(50)

export default {
  title: 'CandlestickChart',
  component: CandlestickChart,
} as ComponentMeta<typeof CandlestickChart>

const Template: ComponentStory<typeof CandlestickChart> = (props) => <CandlestickChart {...props} />

export const Default = Template.bind({})
Default.args = {
  data: candlestickData.dates,
}