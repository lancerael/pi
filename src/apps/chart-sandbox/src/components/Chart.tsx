import Theia from 'd-theia'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

interface IChart {
  updateData: (...args: any) => void
  updateConfig: (...args: any) => void
}

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
  }, [aData])

  useEffect(() => {
    !skipUpdate && dtChart.current?.updateConfig(jConfig)
  }, [jConfig])

  return (
    <div
      id={sId}
      ref={chartContainer}
      style={{ flexGrow: '1', position: 'relative' }}
    />
  )
}

export default Chart
