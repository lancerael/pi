import { useEffect, useRef, useState } from 'react'
import Button from '@pi-lib/button'
import PageLoader from '@pi-lib/page-loader'
import IconButton from '@pi-lib/icon-button'
import CollapsibleMenu from '@pi-lib/collapsible-menu'
import { getEmptyData } from 'd-theia'
import { useDispatch, useSelector } from 'react-redux'
import {
  addRow,
  addDataColumn,
  replaceData,
  replaceConfig,
  addConfigColumn,
} from '../../state'
import styled from 'styled-components'

const StyledActionWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-around;

  @media (max-width: 801px) {
    flex-direction: column;
  }

  & button {
    width: 100%;
  }
`

const StyledAction = styled.div`
  width: 100%;
`

const StyledIconButton = styled.div`
  @media (max-width: 801px) {
    display: none;
  }
`

const StyledButton = styled.div`
  width: !100%;
  @media (min-width: 800px) {
    display: none;
  }
`

interface ActionProps {
  title: string
  label: string
  $isStroked?: boolean
  $isFilled?: boolean
  onPointerUp: (args: unknown) => unknown
}

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

  const Action = ({
    title,
    label,
    onPointerUp,
    $isStroked = false,
    $isFilled = false,
  }: ActionProps) => {
    const iconPath = `https://d3bjzq1zo2el1w.cloudfront.net/${label
      .toLowerCase()
      .split(' ')
      .join('-')}.svg`
    return (
      <StyledAction>
        <StyledIconButton>
          <IconButton
            {...{ title, onPointerUp, $isStroked, $isFilled }}
            isSmall
            src={iconPath}
          />
        </StyledIconButton>
        <StyledButton>
          <Button {...{ title, onPointerUp }}>{label.toUpperCase()}</Button>
        </StyledButton>
      </StyledAction>
    )
  }

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
      onPointerUp: () => updateChart(getEmptyData()),
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

  return (
    <>
      <PageLoader isActive={isLoading} />
      <CollapsibleMenu
        title="Table actions menu"
        icon="Ellipsis"
        items={[
          <StyledActionWrapper>
            {actions.map((actionProps, i) => (
              <Action key={i} {...actionProps} />
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
