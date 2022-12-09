import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import {
  generateCandlestickData,
  movePrevValue,
} from './utils/generateCandlestickData'

const candlestickData = generateCandlestickData(390)

const CandlestickContainer = ({ data }: { data?: any }) => {
  const [chartData, setChartData] = useState<any[]>()

  // Simulate an API request
  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        setChartData((currentData) => {
          const newData = [...(currentData ?? data)]
          const lastItem = newData[newData.length - 1]
          lastItem.close = movePrevValue(lastItem.close, 50)
          lastItem.low = Math.min(lastItem.close, lastItem.low)
          lastItem.high = Math.max(lastItem.close, lastItem.high)
          return newData
        })
      }, 2000)
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
