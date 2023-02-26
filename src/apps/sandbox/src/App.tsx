import React from 'react'

import { Theme } from '@pi-lib/styles'
import CandlestickChart from '@pi-lib/candlestick-chart'
import { useFakeApi } from '../../../components/molecules/CandlestickChart/src/hooks'

function App() {
  const chartData = useFakeApi(390)

  return (
    <div style={{ width: '800px', height: '500px' }}>
      <Theme themeName="electron">
        <CandlestickChart data={chartData} />
      </Theme>
    </div>
  )
}

export default App
