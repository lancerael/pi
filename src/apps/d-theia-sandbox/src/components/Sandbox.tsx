import React from 'react'

//@ts-ignore
import Chart from './Chart.js'
//@ts-ignore
import Editor from './Editor'

const Sandbox = () => {
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <div style={{ width: '40%', height: '50%' }}>
        <Editor />
      </div>
      <div
        style={{
          flexGrow: '1',
          height: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          padding: '4%',
        }}
      >
        <Chart sId="container-bar-test" sType="bar" />
        <Chart sId="container-line-test" sType="line" />
      </div>
    </div>
  )
}

export default Sandbox
