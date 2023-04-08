import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@pi-lib/table'
import Button from '@pi-lib/button'

import {
  deleteConfigColumn,
  switchTrim,
  updateColor,
  updateType,
} from '../../state/reducers/chartConfigReducer'
import {
  deleteRow,
  deleteDataColumn,
  updateLabel,
  updateValue,
} from '../../state/reducers/chartDataReducer'
import TextInput from '@pi-lib/text-input'

const DataTable = () => {
  const { aValues, bTrim } = useSelector(({ jConfig }: any) => jConfig)
  const aData = useSelector(({ aData }: any) => aData)
  const dispatch = useDispatch()

  const deleteColumn = (i: number) => {
    dispatch(deleteDataColumn(i as any))
    dispatch(deleteConfigColumn(i as any))
  }

  return (
    <Table
      headers={[
        <div title="Trim extremes of the chart values">
          <label htmlFor="dt-trim">Trim:</label>
          <input
            type="checkbox"
            checked={bTrim}
            onChange={(e: any) => dispatch(switchTrim(e.target.checked))}
            name="dt-trim"
          />
        </div>,
        ...aValues.map(({ sName }: any, i: number) => (
          <TextInput
            key={i}
            longTitle="Change the name of this column"
            value={sName}
            onChange={({ target: { value } }: any) =>
              dispatch(updateType({ value, i } as any))
            }
          />
        )),
        '',
      ]}
      rows={[
        {
          cols: [
            '',
            ...aValues.map(({ sColor }: any, i: number) => (
              <TextInput
                key={i}
                type="color"
                longTitle="Change colour of this column"
                value={sColor}
                onChange={({ target: { value } }: any) =>
                  dispatch(updateColor({ value, i } as any))
                }
              />
            )),
            '',
          ],
        },
        ...aData.map((oDataItem: any, i1: number) => ({
          cols: [
            <TextInput
              key={i1}
              longTitle="Change the label of this data group"
              value={oDataItem.sLabel}
              onChange={({ target: { value } }: any) =>
                dispatch(updateLabel({ value, i1 } as any))
              }
            />,
            ...oDataItem.aValues.map((iValue: number, i2: number) => (
              <TextInput
                key={i2}
                type="number"
                longTitle="Change the value of this data item"
                value={iValue.toString()}
                onChange={({ target: { value } }: any) =>
                  dispatch(updateValue({ value, i1, i2 } as any))
                }
              />
            )),
            ,
            <Button
              onClick={() => dispatch(deleteRow(i1 as any))}
              title="Delete this row"
              status="error"
              isCompact
            >
              ❌
            </Button>,
          ],
        })),
        {
          cols: [
            '',
            ...aValues.map((oItem: any, i1: number) => (
              <Button
                onClick={() => deleteColumn(i1)}
                title="Delete this column"
                status="error"
                isCompact
              >
                ❌
              </Button>
            )),
            '',
          ],
        },
      ]}
    />
  )
}

export default DataTable
