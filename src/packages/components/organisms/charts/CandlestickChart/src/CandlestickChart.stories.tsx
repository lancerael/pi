import type { Meta, StoryObj } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import data from './mocks/data.json'

const render = () => {
  return (
    <div style={{ width: '80%', height: '40vw' }}>
      <CandlestickChart {...{ data }} />
    </div>
  )
}

const meta: Meta<typeof CandlestickChart> = {
  title: 'Organisms/Charts/CandlestickChart',
  component: CandlestickChart,
}

export const Default: StoryObj<typeof CandlestickChart> = {
  render,
}

export default meta
