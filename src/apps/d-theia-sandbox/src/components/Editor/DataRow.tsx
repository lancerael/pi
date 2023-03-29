import React from 'react'
import PropTypes from 'prop-types'

import { DataRowHandlerProps } from './../../sharedPropTypes/handlers'

const DataRow = () => {
  const aValueInputs = oDataItem.aValues.map((iValue, i) => (
    <td key={`data-item${i}`}>
      <input
        type="number"
        value={iValue.toString()}
        onChange={hnChangeValue.bind(this, iIndex.toString(), i.toString())}
        title="Change the value of this data item."
        className="dt-value-input"
      />
    </td>
  ))
  return (
    <tr className="dt-data-row">
      <td>
        <input
          type="text"
          value={oDataItem.sLabel}
          onChange={hnChangeLabel.bind(this, iIndex.toString())}
          title="Change the label of this data group."
          className="dt-label-input"
        />
      </td>
      {aValueInputs}
      <td>
        <button
          className="dt-delete-row-btn"
          onClick={hnDeleteRow.bind(this, iIndex)}
          title="Delete this row."
        >
          x
        </button>
      </td>
    </tr>
  )
}

DataRow.propTypes = {
  oDataItem: PropTypes.object.isRequired,
  iIndex: PropTypes.number.isRequired,
  ...DataRowHandlerProps,
}

export default DataRow
