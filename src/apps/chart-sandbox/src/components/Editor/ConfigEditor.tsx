import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  changeAxisX,
  changeAxisY,
  changeTitle,
} from '../../state/reducers/chartConfigReducer'
import { formInput } from '@pi-lib/styles'

const StyledInputRow = styled.div`
  font-size: 1.4em;
  display: flex;

  & label {
    display: inline-block;
    min-width: 20%;
  }

  & input {
    flex-grow: 1;

    ${formInput({})}
  }
`

const ConfigEditor = () => {
  const { sTitle, aAxisLabels } = useSelector(({ jConfig }: any) => jConfig)
  const dispatch = useDispatch()

  return (
    <div
      style={{
        padding: '5%',
        minWidth: '180px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <StyledInputRow>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          type="text"
          title="Change the title of the chart."
          value={sTitle}
          onChange={(e: any) => dispatch(changeTitle(e.target.value))}
        />
      </StyledInputRow>
      <StyledInputRow>
        <label htmlFor="x-axis">X Axis:</label>
        <input
          name="x-axis"
          type="text"
          title="Change the title of the X axis."
          value={aAxisLabels[1]}
          onChange={(e: any) => dispatch(changeAxisX(e.target.value))}
        />
      </StyledInputRow>
      <StyledInputRow>
        <label htmlFor="y-axis">Y Axis:</label>
        <input
          name="y-axis"
          type="text"
          title="Change the title of the Y axis."
          value={aAxisLabels[0]}
          onChange={(e: any) => dispatch(changeAxisY(e.target.value))}
        />
      </StyledInputRow>
    </div>
  )
}

export default ConfigEditor
