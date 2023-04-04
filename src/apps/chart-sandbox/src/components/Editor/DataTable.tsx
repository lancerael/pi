import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@pi-lib/table'
import Button from '@pi-lib/button'

import {
  switchTrim,
  updateColor,
  updateType,
} from '../../state/reducers/chartConfigReducer'
import {
  deleteRow,
  updateLabel,
  updateValue,
} from '../../state/reducers/chartDataReducer'

const DataTable = () => {
  const { aValues, bTrim } = useSelector(({ jConfig }: any) => jConfig)
  const aData = useSelector(({ aData }: any) => aData)
  const dispatch = useDispatch()

  return (
    <div style={{ padding: '0 16px' }}>
      <Table
        headers={[
          <div title="Trim extremes of the chart values.">
            <label htmlFor="dt-trim">Trim:</label>
            <input
              type="checkbox"
              checked={bTrim}
              onChange={(e: any) => dispatch(switchTrim(e.target.checked))}
              name="dt-trim"
            />
          </div>,
          ...aValues.map(({ sName }: any, i: number) => (
            <input
              key={i}
              style={{ width: 'calc(100% - 8px)', height: '22px' }}
              type="text"
              value={sName}
              onChange={({ target: { value } }: any) =>
                dispatch(updateType({ value, i } as any))
              }
              title="Change the name of this key value."
            />
          )),
          '',
        ]}
        rows={[
          {
            cols: [
              '',
              ...aValues.map(({ sColor }: any, i: number) => (
                <div style={{ textAlign: 'center' }}>
                  <input
                    style={{ width: '100%', height: '30px' }}
                    type="color"
                    value={sColor}
                    onChange={({ target: { value } }: any) =>
                      dispatch(updateColor({ value, i } as any))
                    }
                    title="Change colour of this key value."
                  />
                </div>
              )),
              '',
            ],
          },
          ...aData.map((oDataItem: any, i1: number) => ({
            cols: [
              <input
                style={{ width: 'calc(100% - 8px)', height: '22px' }}
                type="text"
                value={oDataItem.sLabel}
                onChange={({ target: { value } }: any) =>
                  dispatch(updateLabel({ value, i1 } as any))
                }
                title="Change the label of this data group."
              />,
              ...oDataItem.aValues.map((iValue: number, i2: number) => (
                <input
                  style={{ width: 'calc(100% - 8px)', height: '22px' }}
                  key={i2}
                  type="number"
                  value={iValue.toString()}
                  onChange={({ target: { value } }: any) =>
                    dispatch(updateValue({ value, i1, i2 } as any))
                  }
                  title="Change the value of this data item."
                />
              )),
              ,
              <Button
                onClick={() => dispatch(deleteRow(i1 as any))}
                title="Delete this row."
                status="error"
                isCompact
              >
                x
              </Button>,
            ],
          })),
          {
            cols: [
              '',
              ...aValues.map((oItem: any, i: number) => (
                <Button
                  onClick={() => dispatch(deleteRow(i as any))}
                  title="Delete this column."
                  status="error"
                  isCompact
                >
                  x
                </Button>
              )),
              '',
            ],
          },
        ]}
      />
    </div>
  )
}

export default DataTable
