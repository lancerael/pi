import PageContent from '@pi-lib/page-content'
import { useSelector } from 'react-redux'

import AxisChart from '@pi-lib/axis-chart'
import Editor from './Editor'
import { ChartConfig, DataItem, Hash } from 'd-theia/src/types'

export interface ChartValues {
  chartConfig: ChartConfig
  chartData: (DataItem & Hash)[]
}

const Sandbox = () => {
  const chartValues = useSelector((state) => state as ChartValues)
  return (
    <PageContent sidebar={<Editor />}>
      <AxisChart chartId="container-bar" chartType="bar" {...chartValues} />
      <AxisChart chartId="container-line" chartType="line" {...chartValues} />
    </PageContent>
  )
}

export default Sandbox
