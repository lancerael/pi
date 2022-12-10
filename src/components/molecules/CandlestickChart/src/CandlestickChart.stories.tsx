import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import { useFakeApi } from './hooks'

const CandlestickContainer = ({ length }: { length: number }) => {
  const chartData = useFakeApi(length)

  return (
    <div style={{ width: '800px', height: '500px' }}>
      <CandlestickChart data={chartData} />
    </div>
  )
}

export default {
  title: 'CandlestickChart',
  component: CandlestickChart,
} as ComponentMeta<typeof CandlestickChart>

const Template: ComponentStory<typeof CandlestickContainer> = (props) => (
  <CandlestickContainer {...props} />
)

export const Default = Template.bind({})
Default.args = {
  length: 390,
}
