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
    font-size: 0.8em;
    font-weight: bold;
  }

  line,
  path:not(.line) {
    stroke: var(--special);
  }

  .tick text,
  .key text {
    font-size: 0.8em;
  }

  .x-labels {
    font-size: 0.7rem;
  }

  text {
    fill: var(--textStrong) !important;
    font-weight: bold;
    font-size: 0.8em;
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

const Chart = ({ chartId, chartType }: any) => {
  const chartContainer = useRef(null)
  const dtChart = useRef<IChart>()
  const chartData = useSelector(({ chartData }: any) => chartData)
  const chartConfig = useSelector(({ chartConfig }: any) => chartConfig)
  const skipUpdate =
    !dtChart.current ||
    chartData[0].itemValues.length !== chartConfig.itemValues.length

  useEffect(() => {
    if (!chartContainer.current || dtChart.current) return
    dtChart.current = Theia.chart(chartId, chartType, {
      chartData,
      chartConfig,
    }) as IChart
  }, [chartContainer.current])

  useEffect(() => {
    !skipUpdate && dtChart.current?.updateData(chartData)
    !skipUpdate && dtChart.current?.updateConfig(chartConfig)
  }, [chartData, chartConfig])

  return <StyledChartContainer id={chartId} ref={chartContainer} />
}

export default Chart
