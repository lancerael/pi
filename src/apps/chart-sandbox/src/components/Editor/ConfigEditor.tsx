import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  changeAxisX,
  changeAxisY,
  changeTitle,
} from '../../state/reducers/chartConfigReducer'
import { formInput } from '@pi-lib/styles'
import TextInput from '@pi-lib/text-input'

const StyledInputRow = styled.div`
  font-size: 1.4em;
  display: flex;

  & label {
    display: inline-block;
    min-width: 20%;
  }

  & input {
    flex-grow: 1;

    ${formInput()}
  }
`

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
      <TextInput
        title="Title"
        longTitle="Change the title of the chart"
        value={sTitle}
        onChange={(e: any) => dispatch(changeTitle(e.target.value))}
      />
      <TextInput
        title="X Axis"
        longTitle="Change the title of the X axis"
        value={aAxisLabels[1]}
        onChange={(e: any) => dispatch(changeAxisX(e.target.value))}
      />
      <TextInput
        title="Y Axis"
        longTitle="Change the title of the Y axis"
        value={aAxisLabels[0]}
        onChange={(e: any) => dispatch(changeTitle(e.target.value))}
      />
    </div>
  )
}

export default ConfigEditor
