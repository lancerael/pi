import { useDispatch, useSelector } from 'react-redux'
import Table from '@pi-lib/table'
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
} from '../../../state'
import EditorActions from '../EditorActions'
import { HTMLEvent } from './DataTable.types'
import DeleteButton from '../../atoms/DeleteButton'

/**
 * Component for the table to manage the chart data
 */
const DataTable = () => {
  const { itemValues, doTrim } = useSelector(
    ({ chartConfig }: { chartConfig: ChartConfigState }) => chartConfig
  )
  const chartData = useSelector(
    ({ chartData }: { chartData: ChartDataState }) => chartData
  )
  const dispatch = useDispatch()

  /**
   * Handler used to delete a table column
   */
  const deleteColumn = (i: number) => {
    dispatch(deleteDataColumn(i))
    dispatch(deleteConfigColumn(i))
  }

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
            onChange={({ currentTarget: { checked } }: HTMLEvent) =>
              dispatch(switchTrim(checked))
            }
            name="dt-trim"
          />
        </div>,
        ...itemValues.map(({ name }: { name: string }, i: number) => (
          <Input
            key={i}
            longTitle="Change the name of this column"
            value={name}
            onChange={({ currentTarget: { value } }: HTMLEvent) =>
              dispatch(updateType({ value, i }))
            }
            data-selector="chart-key-input"
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
                onChange={({ currentTarget: { value } }: HTMLEvent) =>
                  dispatch(updateColor({ value, i }))
                }
                data-selector="chart-color-input"
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
              onChange={({ currentTarget: { value } }: HTMLEvent) =>
                dispatch(updateLabel({ value, i1 }))
              }
              data-selector="chart-label-input"
            />,
            ...dataItem.itemValues.map((value: number, i2: number) => (
              <Input
                key={i2}
                type="number"
                longTitle="Change the value of this data item"
                value={value.toString()}
                onChange={({ currentTarget: { value } }: HTMLEvent) =>
                  dispatch(updateValue({ value, i1, i2 }))
                }
                data-selector="chart-value-input"
              />
            )),
            <DeleteButton
              callback={() => dispatch(deleteRow(i1))}
              label="row"
            />,
          ],
        })),
        {
          cols: [
            '',
            ...itemValues.map((item: any, i1: number) => (
              <DeleteButton callback={() => deleteColumn(i1)} label="column" />
            )),
            '',
          ],
        },
      ]}
    />
  )
}

export default DataTable
