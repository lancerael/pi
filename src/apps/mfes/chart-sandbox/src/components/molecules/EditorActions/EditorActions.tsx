import { useEffect, useRef, useState } from 'react'
import PageLoader from '@pi-lib/page-loader'
import CollapsibleMenu from '@pi-lib/collapsible-menu'
import { getEmptyData } from 'd-theia'
import { useDispatch, useSelector } from 'react-redux'
import {
  addRow,
  addDataColumn,
  replaceData,
  replaceConfig,
  addConfigColumn,
  ChartConfigState,
} from '../../../state'
import { StyledActionWrapper } from './EditorActions.style'
import { EditorAction } from '../../atoms/EditorAction/EditorAction'
import { ChartValues } from '../../organisms/Sandbox/Sandbox.types'

/**
 * Container for the editor actions collapsible menu
 */
export const EditorActions = () => {
  const [isLoading, setIsLoading] = useState(false)
  const chartConfig = useSelector(({ chartConfig }: ChartValues) => chartConfig)
  const chartData = useSelector(({ chartData }: ChartValues) => chartData)
  const importRef = useRef<any>(null)
  const exportRef = useRef<any>(null)
  const dispatch = useDispatch()

  /**
   * A handler to update the chart config and data
   */
  const updateChart = (chart: ChartValues) => {
    dispatch(replaceConfig(chart.chartConfig as ChartConfigState))
    dispatch(replaceData(chart.chartData))
  }

  /**
   * A handler to add a new column
   */
  const addColumn = () => {
    dispatch(addDataColumn())
    dispatch(addConfigColumn())
  }

  /**
   * A handler to load an imported file
   */
  const importChange = () => {
    const aFiles = importRef?.current?.files
    const aFileNameSplit = aFiles.length ? aFiles[0].name.split('.') : []
    if (aFiles.length && aFileNameSplit[aFileNameSplit.length - 1] === 'json') {
      const fr = new FileReader()
      fr.onload = ({ target }: any) => updateChart(JSON.parse(target.result))
      fr.readAsText(aFiles.item(0))
    } else {
      return false
    }
  }

  /**
   * A handler to generate random data
   */
  const getRandomData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_LAMBDA_URL ?? '__LAMBDA_URL__'
        }/default/chartRandom`
      )
      const randomChart = await response.json()
      updateChart(randomChart)
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  /**
   * A list of actions for the dropdown
   */
  const actions = [
    {
      label: 'Add row',
      title: 'Add a new row to the data',
      $isStroked: true,
      onPointerUp: () => dispatch(addRow()),
    },
    {
      label: 'Add column',
      title: 'Add a new column to the data',
      $isStroked: true,
      onPointerUp: addColumn,
    },
    {
      label: 'Clear',
      title: 'Reset the chart and remove all data',
      $isStroked: true,
      onPointerUp: () => updateChart(getEmptyData() as ChartValues),
    },
    {
      label: 'Randomise',
      title: 'Reset the chart and generate random data',
      $isFilled: true,
      onPointerUp: () => getRandomData(),
    },
    {
      label: 'Export',
      title: 'Export this chart as JSON',
      $isFilled: true,
      onPointerUp: () => exportRef?.current?.click(),
    },
    {
      label: 'Import',
      title: 'Import JSON for this chart',
      $isFilled: true,
      onPointerUp: () => importRef?.current?.click(),
    },
  ]

  useEffect(() => {
    if (!chartData?.[0]?.itemValues?.length) getRandomData()
  }, [])

  return (
    <>
      <PageLoader isActive={isLoading} />
      <CollapsibleMenu
        title="Table actions menu"
        iconName="Ellipsis"
        items={[
          <StyledActionWrapper>
            {actions.map((actionProps, i) => (
              <EditorAction key={i} {...actionProps} />
            ))}
            <input
              style={{ display: 'none' }}
              type="file"
              ref={importRef}
              accept="application/json"
              onChange={importChange}
            />
            <a
              style={{ display: 'none' }}
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify({ chartConfig, chartData })
              )}`}
              ref={exportRef}
              download="sandbox-export.json"
            ></a>
          </StyledActionWrapper>,
        ]}
      />
    </>
  )
}

export default EditorActions
