import type { Meta, StoryObj } from '@storybook/react'
import { CandlestickChart } from './CandlestickChart'
import data from './mocks/data.json'

const render = () => {
  return (
    <div style={{ margin: '2.5dvh 2.5dvw', width: '90dvw', height: '90dvh' }}>
      <CandlestickChart {...{ data }} />
    </div>
  )
}

const meta: Meta<typeof CandlestickChart> = {
  title: 'Visualisations/Charts/CandlestickChart',
  component: CandlestickChart,
}

export const Default: StoryObj<typeof CandlestickChart> = {
  render,
}

export default meta
