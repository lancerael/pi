import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  changeAxisX,
  changeAxisY,
  changeTitle,
} from '../../state/reducers/chartConfigReducer'

const StyledInputRow = styled.div`
  margin-bottom: 16px;
  font-size: 1.4em;

  & label {
    display: inline-block;
    min-width: 20%;
  }

  & input {
    min-width: 70%;
  }
`

const ConfigEditor = () => {
  const { sTitle, aAxisLabels } = useSelector(({ jConfig }: any) => jConfig)
  const dispatch = useDispatch()

  return (
    <div
      style={{
        padding: '5%',
        background: 'var(--border)',
        color: 'var(--textSoft)',
        minWidth: '180px',
      }}
    >
      <div>
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
    </div>
  )
}

export default ConfigEditor
