import React from 'react'
import { useDispatch } from 'react-redux'
import { updateLabel, updateValue } from '../../state/reducers/chartDataReducer'

const DataRow = ({ oDataItem, i1 }: any) => {
  const dispatch = useDispatch()

  return [
    <input
      type="text"
      value={oDataItem.sLabel}
      onChange={({ target: { value } }: any) =>
        dispatch(updateLabel({ value, i1 } as any))
      }
      title="Change the label of this data group."
    />,
    {
      ...oDataItem.aValues.map((iValue: number, i2: number) => (
        <input
          key={i2}
          type="number"
          value={iValue.toString()}
          onChange={({ target: { value } }: any) =>
            dispatch(updateValue({ value, i1, i2 } as any))
          }
          title="Change the value of this data item."
        />
      )),
    },
    <button onClick={() => dispatch(updateValue(i1))} title="Delete this row.">
      x
    </button>,
  ]
}

export default DataRow
