import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  changeAxisX,
  changeAxisY,
  changeTitle,
} from '../../state/reducers/chartConfigReducer'
import Input from '@pi-lib/input'

const ConfigEditor = () => {
  const { sTitle, aAxisLabels } = useSelector(({ jConfig }: any) => jConfig)
  const dispatch = useDispatch()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '8px 2px',
        marginBottom: '12px',
      }}
    >
      <Input
        title="Title"
        longTitle="Change the title of the chart"
        value={sTitle}
        onChange={(e: any) => dispatch(changeTitle(e.target.value))}
      />
      <Input
        title="X Axis"
        longTitle="Change the title of the X axis"
        value={aAxisLabels[1]}
        onChange={(e: any) => dispatch(changeAxisX(e.target.value))}
      />
      <Input
        title="Y Axis"
        longTitle="Change the title of the Y axis"
        value={aAxisLabels[0]}
        onChange={(e: any) => dispatch(changeAxisY(e.target.value))}
      />
    </div>
  )
}

export default ConfigEditor
