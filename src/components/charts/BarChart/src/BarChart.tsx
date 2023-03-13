import React, { FC, useEffect, useRef } from 'react'
import { StyledBarChart } from './BarChart.style'
import { BarChartProps } from './BarChart.types'
//@ts-ignore
import { Chart, randomData } from '@pi-lib/charts'

export const BarChart: FC<BarChartProps> = () => {
  const divRef = useRef(null)

  useEffect(() => {
    Chart({ container: divRef, ...randomData() }).addDefaults()
  }, [])

  return (
    <>
      <div ref={divRef}></div>
    </>
  )
}

export default BarChart
