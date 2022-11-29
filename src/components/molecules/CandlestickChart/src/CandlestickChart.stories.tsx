import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import { generateCandlestickData } from './utils/generateCandlestickData'

const candlestickData = generateCandlestickData(390)

const CandlestickContainer = ({ data }) => {
  const [chartData, setChartData] = useState(data)

  useEffect(() => {
    setInterval(() => {
      setChartData((currentData) => {
        const newData = [...currentData]
        const lastItem = newData[newData.length - 1]
        lastItem.close = lastItem.close + (+`${+new Date()}`[12] > 5 ? 2 : -2)
        lastItem.low = Math.min(lastItem.close, lastItem.low)
        lastItem.high = Math.max(lastItem.open, lastItem.high)
        return newData
      })
    }, 1000)
  }, [])

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

const Template: ComponentStory<typeof CandlestickChart> = (props) => (
  <CandlestickContainer {...props} />
)

export const Default = Template.bind({})
Default.args = {
  data: candlestickData.dates,
}
