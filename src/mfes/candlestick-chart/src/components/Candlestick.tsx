import React from 'react'
import PageContent from '@pi-lib/page-content'
import { Sidebar } from './Sidebar'

import CandlestickChart from '@pi-lib/candlestick-chart'
import { useFakeApi } from '@pi-lib/candlestick-chart/src/hooks'

export const Candlestick = () => {
  const chartData = useFakeApi(400, 1)
  return (
    <PageContent sidebar={<Sidebar />}>
      <CandlestickChart data={chartData} />
    </PageContent>
  )
}

export default Candlestick
