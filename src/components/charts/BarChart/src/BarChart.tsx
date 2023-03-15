import React, { FC, useEffect, useRef } from 'react'
import { StyledBarChart } from './BarChart.style'
import { BarChartProps } from './BarChart.types'
import { Chart, randomData } from '@pi-lib/charts'

export const BarChart: FC<BarChartProps> = () => {
  const divRef = useRef(null)

  useEffect(() => {
    if (divRef.current) {
      new Chart({ container: divRef.current, ...randomData() }).addDefaults()
    }
  }, [divRef.current])

  return (
    <>
      <div ref={divRef}></div>
    </>
  )
}

export default BarChart
