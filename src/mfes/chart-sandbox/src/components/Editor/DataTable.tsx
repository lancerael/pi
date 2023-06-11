import React, { useEffect } from 'react'
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
import Input from '@pi-lib/input'
import EditorActions from './EditorActions'

const DataTable = () => {
  const { itemValues, doTrim } = useSelector(
    ({ chartConfig }: any) => chartConfig
  )
  const chartData = useSelector(({ chartData }: any) => chartData)
  const dispatch = useDispatch()

  const deleteColumn = (i: number) => {
    dispatch(deleteDataColumn(i as any))
    dispatch(deleteConfigColumn(i as any))
  }

  useEffect(() => {
    dispatch(switchTrim(false as any))
    dispatch(switchTrim(true as any))
  }, [])

  return (
    <Table
      headers={[
        <div title="Trim extremes of the chart values">
          <label htmlFor="dt-trim">Trim:</label>
          <input
            type="checkbox"
            checked={doTrim}
            onChange={(e: any) => dispatch(switchTrim(e.target.checked))}
            name="dt-trim"
          />
        </div>,
        ...itemValues.map(({ name }: any, i: number) => (
          <Input
            key={i}
            longTitle="Change the name of this column"
            value={name}
            onChange={({ target: { value } }: any) =>
              dispatch(updateType({ value, i } as any))
            }
          />
        )),
        <EditorActions />,
      ]}
      rows={[
        {
          cols: [
            '',
            ...itemValues.map(({ color }: any, i: number) => (
              <Input
                key={i}
                type="color"
                longTitle="Change colour of this column"
                value={color}
                onChange={({ target: { value } }: any) =>
                  dispatch(updateColor({ value, i } as any))
                }
              />
            )),
            '',
          ],
        },
        ...chartData.map((dataItem: any, i1: number) => ({
          cols: [
            <Input
              key={i1}
              longTitle="Change the label of this data group"
              value={dataItem.itemLabel}
              onChange={({ target: { value } }: any) =>
                dispatch(updateLabel({ value, i1 } as any))
              }
            />,
            ...dataItem.itemValues.map((iValue: number, i2: number) => (
              <Input
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
            ...itemValues.map((oItem: any, i1: number) => (
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
