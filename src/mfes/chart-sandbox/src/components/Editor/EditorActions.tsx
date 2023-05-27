import React, { useEffect, useRef, useState } from 'react'
import Button from '@pi-lib/button'
import PageLoader from '@pi-lib/page-loader'
import { getEmptyData } from 'd-theia'
import { useDispatch, useSelector } from 'react-redux'
import {
  addRow,
  addDataColumn,
  replaceData,
} from '../../state/reducers/chartDataReducer'
import {
  replaceConfig,
  addConfigColumn,
} from '../../state/reducers/chartConfigReducer'
import styled from 'styled-components'

const StyledActionWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: space-around;

  & button {
    width: auto;
  }
`

export const EditorActions = () => {
  const [isLoading, setIsLoading] = useState(false)
  const chartConfig = useSelector(({ chartConfig }: any) => chartConfig)
  const chartData = useSelector(({ chartData }: any) => chartData)
  const importRef = useRef<any>(null)
  const exportRef = useRef<any>(null)
  const dispatch = useDispatch()

  const updateChart = (chart: any) => {
    dispatch(replaceConfig(chart.chartConfig))
    dispatch(replaceData(chart.chartData))
  }

  const addColumn = () => {
    dispatch(addDataColumn())
    dispatch(addConfigColumn())
  }

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

  const getRandomData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'https://3ce64aq6e3.execute-api.eu-west-2.amazonaws.com/default/chartRandom'
      )
      const randomChart = await response.json()
      updateChart(randomChart)
    } catch (e) {
      console.error(e)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (!chartData?.[0]?.itemValues?.length) getRandomData()
  }, [])

  return (
    <StyledActionWrapper>
      <PageLoader isActive={isLoading} />
      <Button
        onClick={() => dispatch(addRow())}
        title="Add a new row to the data"
      >
        ADD ROW
      </Button>
      <Button onClick={addColumn} title="Add a new column to the data">
        ADD COLUMN
      </Button>
      <Button
        onClick={() => updateChart(getEmptyData())}
        title="Reset the chart and remove all data"
      >
        CLEAR
      </Button>
      <Button
        onClick={() => getRandomData()}
        title="Reset the chart and generate random data"
      >
        RANDOMISE
      </Button>
      <Button
        onClick={() => exportRef?.current?.click()}
        title="Export this chart as JSON"
      >
        EXPORT
      </Button>
      <Button
        title="Import JSON for this chart."
        onClick={() => importRef?.current?.click()}
      >
        IMPORT
      </Button>
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
    </StyledActionWrapper>
  )
}

export default EditorActions
