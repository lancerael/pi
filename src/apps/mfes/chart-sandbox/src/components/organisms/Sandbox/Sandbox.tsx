import PageContent from '@pi-lib/page-content'
import { useSelector } from 'react-redux'

import AxisChart from '@pi-lib/axis-chart'
import ConfigEditor from '../../molecules/ConfigEditor'
import DataTable from '../../molecules/DataTable'
import { AppState } from './Sandbox.types'
import Theme from '@pi-lib/styles'

/**
 * Layout element for the whole sandbox page
 */
const Sandbox = () => {
  const { chartConfig, chartData, settings } = useSelector(
    (state: AppState) => state
  )
  return (
    <Theme
      themeName={settings?.themeName}
      scheme={settings?.scheme}
      includeGlobal={!settings?.themeName}
    >
      <PageContent
        sidebar={
          <>
            <ConfigEditor />
            <DataTable />
          </>
        }
      >
        <AxisChart
          chartId="container-bar"
          chartType="bar"
          {...{ chartConfig, chartData }}
        />
        <AxisChart
          chartId="container-line"
          chartType="line"
          {...{ chartConfig, chartData }}
        />
      </PageContent>
    </Theme>
  )
}

export default Sandbox
