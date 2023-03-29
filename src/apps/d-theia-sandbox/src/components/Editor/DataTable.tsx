import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@pi-lib/table'

import DataRow from './DataRow'
import { switchTrim, updateType } from '../../state/reducers/chartConfigReducer'

const DataTable = () => {
  const { aValues, bTrim } = useSelector(({ jConfig }: any) => jConfig)
  const { aData } = useSelector(({ aData }: any) => aData)
  const dispatch = useDispatch()

  // const aKeyNames = aValues.map((oItem, i) => (
  //   <td key={`header${i}`}>
  //     <input
  //       type="text"
  //       value={oItem.sName}
  //       onChange={hnChangeType.bind(this, i.toString())}
  //       title="Change the name of this key value."
  //       className="dt-key-input"
  //     />
  //   </td>
  // ))
  // const aColors = aValues.map((oItem, i) => (
  //   <td key={`color${i}`}>
  //     <input
  //       type="color"
  //       value={oItem.sColor}
  //       onChange={hnChangeColor.bind(this, i.toString())}
  //       title="Change colour of this key value."
  //       className="dt-color-input"
  //     />
  //   </td>
  // ))
  // const aDataRows = aData.map(
  //   (oDataItem, i) => 'a'
  //   // <DataRow key={`data-row${i}`} oDataItem={oDataItem} iIndex={i} {...{hnChangeLabel, hnChangeValue, hnDeleteRow}} />
  // )
  // const aFinalRow = aValues.map((oItem, i) => (
  //   <td key={`color${i}`}>
  //     <button
  //       onClick={hnDeleteColumn.bind(this, i)}
  //       className="dt-delete-col-btn"
  //       title="Delete this column."
  //     >
  //       x
  //     </button>
  //   </td>
  // ))
  return (
    <Table
      headers={[
        <div title="Trim extremes of the chart values.">
          <label htmlFor="dt-trim">Trim:</label>
          <input
            type="checkbox"
            checked={bTrim}
            onChange={(e: any) => dispatch(switchTrim(e.target.value))}
            name="dt-trim"
          />
        </div>,
        ...aValues.map((oItem: any, i: number) => (
          <input
            key={i}
            style={{ maxWidth: '100px' }}
            type="text"
            value={oItem.sName}
            onChange={(e: any) => dispatch(updateType(e.target.value))}
            title="Change the name of this key value."
          />
        )),
      ]}
      tableRows={[]}
    />
  )
}

export default DataTable
