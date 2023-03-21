import React, { useEffect, useRef } from 'react'
import { Chart, randomData } from '@pi-lib/charts'

function App() {
  const divRef = useRef(null)
  const chartRef = useRef<Chart>()

  useEffect(() => {
    if (divRef.current && !chartRef.current) {
      chartRef.current = new Chart({
        container: divRef.current,
        ...randomData(),
      }).addDefaults()
    }
  }, [divRef.current])

  return (
    <>
      <div ref={divRef} style={{ height: '350px' }}></div>
    </>
  )
}

export default App
