import { box } from '@pi-lib/styles'
import Theia from 'd-theia'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

interface IChart {
  updateData: (...args: any) => void
  updateConfig: (...args: any) => void
}

const StyledChartContainer = styled.div`
  flex-grow: 1;
  position: relative;

  & svg {
    /* ${box()} */
    background: var(--subtle); //${({ theme }) => theme.chartBackground};
    border: 1px solid var(--border);
    padding: 0;
  }
  & g.key text.label {
    fill: var(--text) !important;
    border: 1px solid green;
  }
`

const Chart = ({ sId, sType }: any) => {
  const chartContainer = useRef(null)
  const dtChart = useRef<IChart>()
  const aData = useSelector(({ aData }: any) => aData)
  const jConfig = useSelector(({ jConfig }: any) => jConfig)
  const skipUpdate =
    !dtChart.current || aData[0].aValues.length !== jConfig.aValues.length

  useEffect(() => {
    if (!chartContainer.current || dtChart.current) return
    dtChart.current = Theia.chart(sId, sType, { aData, jConfig }) as IChart
  }, [chartContainer.current])

  useEffect(() => {
    !skipUpdate && dtChart.current?.updateData(aData)
    !skipUpdate && dtChart.current?.updateConfig(jConfig)
  }, [aData, jConfig])

  return <StyledChartContainer id={sId} ref={chartContainer} />
}

export default Chart
