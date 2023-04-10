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
  background: var(--subtle);
  border: 1px solid var(--border);

  & svg {
    /* padding: 0; */

    & rect,
    & line,
    & text {
      transition: all 0.2s !important;
    }
  }

  .y-axis .tick line {
    opacity: 0.2;
  }

  .labels:first-of-type {
    padding-left: 8px;
  }

  .title {
    position: absolute;
    text-align: center;
    width: 96%;
    margin-top: 8px;
    color: var(--textSoft);
    font-size: 12px;
    font-weight: bold;
  }

  line,
  path:not(.line) {
    stroke: var(--special);
  }

  .tick text,
  .key text {
    font-size: 10px;
  }

  text {
    fill: var(--textStrong) !important;
    font-weight: bold;
    font-size: 12px;
  }

  .tooltip {
    ${box()}
    position: absolute;
    opacity: 0.9;
    transition: all 0.2s !important;
  }

  .is-transparent {
    opacity: 0;
  }

  .is-hidden {
    visibility: hidden;
  }

  svg.chart {
    width: 100%;
    height: 100%;
  }

  .bars,
  .circles {
    cursor: pointer;
  }

  path.line {
    fill: none;
    stroke-width: 2px;
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
