import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import { generateCandlestickData } from './utils/generateCandlestickData'

const candlestickData = generateCandlestickData(700)

const CandlestickContainer = ({ data }) => {
  // const [chartData, setChartData] = useState(data)

  // useEffect(() => {
  //   setInterval(() => {
  //     setChartData((currentData) => {
  //       const newData = [...currentData]
  //       newData[newData.length - 1].close =
  //         newData[newData.length - 1].close +
  //         (+`${+new Date()}`[12] > 5 ? 2 : -2)
  //       newData[newData.length - 1].low = Math.min(
  //         newData[newData.length - 1].close,
  //         newData[newData.length - 1].low
  //       )
  //       newData[newData.length - 1].high = Math.max(
  //         newData[newData.length - 1].open,
  //         newData[newData.length - 1].high
  //       )
  //       return newData
  //     })
  //   }, 1000)
  // }, [])

  return (
    <div style={{ width: '800px', height: '500px' }}>
      <CandlestickChart data={data} />
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
