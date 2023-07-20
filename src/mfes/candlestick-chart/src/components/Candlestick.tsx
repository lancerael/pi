import PageContent from '@pi-lib/page-content'
import { Sidebar } from './Sidebar'

import CandlestickChart from '@pi-lib/candlestick-chart'
import { useFakeApi } from '@pi-lib/candlestick-chart/src/hooks'
import { CandlestickDayData } from '@pi-lib/candlestick-chart/src/CandlestickChart.types'

export const Candlestick = () => {
  const chartData = useFakeApi(400, 1) as CandlestickDayData[]
  return (
    <PageContent sidebar={<Sidebar {...{ chartData }} />}>
      <CandlestickChart data={chartData} />
    </PageContent>
  )
}

export default Candlestick
