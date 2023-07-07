import type { Meta, StoryObj } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import { useFakeApi } from './hooks'

const render = () => {
  const chartData = useFakeApi(400, 3, 20)

  return (
    <div style={{ width: '80%', height: '40vw' }}>
      <CandlestickChart data={chartData} />
    </div>
  )
}

const meta: Meta<typeof CandlestickChart> = {
  title: 'Molecules/Charts/CandlestickChart',
  component: CandlestickChart,
}

export const Default: StoryObj<typeof CandlestickChart> = {
  render,
}

export default meta
