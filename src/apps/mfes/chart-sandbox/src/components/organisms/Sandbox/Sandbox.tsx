import PageContent from '@pi-lib/page-content'
import { useSelector } from 'react-redux'

import AxisChart from '@pi-lib/axis-chart'
import ConfigEditor from '../../molecules/ConfigEditor'
import DataTable from '../../molecules/DataTable'
import { ChartValues } from './Sandbox.types'

/**
 * Layout element for the whole sandbox page
 */
const Sandbox = () => {
  const chartValues = useSelector((state) => state as ChartValues)
  return (
    <PageContent
      sidebar={
        <>
          <ConfigEditor />
          <DataTable />
        </>
      }
    >
      <AxisChart chartId="container-bar" chartType="bar" {...chartValues} />
      <AxisChart chartId="container-line" chartType="line" {...chartValues} />
    </PageContent>
  )
}

export default Sandbox
