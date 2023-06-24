import React, { SyntheticEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@pi-lib/table'
import Button from '@pi-lib/button'
import Input from '@pi-lib/input'
import {
  ChartConfigState,
  deleteConfigColumn,
  switchTrim,
  updateColor,
  updateType,
  deleteRow,
  deleteDataColumn,
  updateLabel,
  updateValue,
  ChartDataState,
  ChartDataItem,
} from '../../state'
import EditorActions from './EditorActions'

const DataTable = () => {
  const { itemValues, doTrim } = useSelector(
    ({ chartConfig }: { chartConfig: ChartConfigState }) => chartConfig
  )
  const chartData = useSelector(
    ({ chartData }: { chartData: ChartDataState }) => chartData
  )
  const dispatch = useDispatch()

  const deleteColumn = (i: number) => {
    dispatch(deleteDataColumn(i))
    dispatch(deleteConfigColumn(i))
  }

  useEffect(() => {
    dispatch(switchTrim(false))
    dispatch(switchTrim(true))
  }, [])

  return (
    <Table
      headers={[
        <div
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          title="Trim extremes of the chart values"
        >
          <label htmlFor="dt-trim">Trim:</label>
          <input
            type="checkbox"
            checked={doTrim}
            onChange={(e: SyntheticEvent<HTMLInputElement>) =>
              dispatch(switchTrim(e.currentTarget.checked))
            }
            name="dt-trim"
          />
        </div>,
        ...itemValues.map(({ name }: { name: string }, i: number) => (
          <Input
            key={i}
            longTitle="Change the name of this column"
            value={name}
            onChange={({
              currentTarget: { value },
            }: SyntheticEvent<HTMLInputElement>) =>
              dispatch(updateType({ value, i }))
            }
          />
        )),
        <EditorActions />,
      ]}
      rows={[
        {
          cols: [
            '',
            ...itemValues.map(({ color }: { color: string }, i: number) => (
              <Input
                key={i}
                type="color"
                longTitle="Change colour of this column"
                value={color}
                onChange={({
                  currentTarget: { value },
                }: SyntheticEvent<HTMLInputElement>) =>
                  dispatch(updateColor({ value, i }))
                }
              />
            )),
            '',
          ],
        },
        ...chartData.map((dataItem: ChartDataItem, i1: number) => ({
          cols: [
            <Input
              key={i1}
              longTitle="Change the label of this data group"
              value={dataItem.itemLabel}
              onChange={({
                currentTarget: { value },
              }: SyntheticEvent<HTMLInputElement>) =>
                dispatch(updateLabel({ value, i1 }))
              }
            />,
            ...dataItem.itemValues.map((value: number, i2: number) => (
              <Input
                key={i2}
                type="number"
                longTitle="Change the value of this data item"
                value={value.toString()}
                onChange={({
                  currentTarget: { value },
                }: SyntheticEvent<HTMLInputElement>) =>
                  dispatch(updateValue({ value, i1, i2 }))
                }
              />
            )),
            <Button
              onPointerUp={() => dispatch(deleteRow(i1))}
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
            ...itemValues.map((item: any, i1: number) => (
              <Button
                onPointerUp={() => deleteColumn(i1)}
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
