import React, { useRef } from 'react'
import Button from '@pi-lib/Button'
import Theia from 'd-theia'
import { useDispatch, useSelector } from 'react-redux'
import {
  addRow,
  addDataColumn,
  replaceData,
} from '../../state/reducers/chartDataReducer'
import {
  replaceConfig,
  addConfigColumn,
} from '../../state/reducers/chartConfigReducer'

export const EditorActions = () => {
  const jConfig = useSelector(({ jConfig }: any) => jConfig)
  const aData = useSelector(({ aData }: any) => aData)
  const importRef = useRef<any>(null)
  const exportRef = useRef<any>(null)
  const dispatch = useDispatch()

  const updateData = ({ jConfig, aData }: any) => {
    dispatch(replaceConfig(jConfig))
    dispatch(replaceData(aData))
  }

  const addColumn = () => {
    dispatch(addDataColumn())
    dispatch(addConfigColumn())
  }

  const importChange = () => {
    const aFiles = importRef?.current?.files
    const aFileNameSplit = aFiles.length ? aFiles[0].name.split('.') : []
    if (aFiles.length && aFileNameSplit[aFileNameSplit.length - 1] === 'json') {
      const fr = new FileReader()
      fr.onload = ({ target }: any) => updateData(JSON.parse(target.result))
      fr.readAsText(aFiles.item(0))
    } else {
      return false
    }
  }

  return (
    <div style={{ display: 'flex', gap: '4px', marginTop: '16px' }}>
      <Button
        onClick={() => dispatch(addRow())}
        title="Add a new row to the data"
      >
        ADD ROW
      </Button>
      <Button onClick={addColumn} title="Add a new column to the data">
        ADD COLUMN
      </Button>
      <Button
        onClick={() => updateData(Theia.getDataOps().getEmptyData())}
        title="Reset the chart and remove all data"
      >
        CLEAR
      </Button>
      <Button
        onClick={() => updateData(Theia.getDataOps().getRandomData())}
        title="Reset the chart and generate new random data"
      >
        RANDOMISE
      </Button>
      <br />
      <Button
        onClick={() => exportRef?.current?.click()}
        title="Export this chart as JSON"
      >
        EXPORT
      </Button>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={importRef}
        accept="application/json"
        onChange={importChange}
      />
      <Button
        title="Import JSON for this chart."
        onClick={() => importRef?.current?.click()}
      >
        IMPORT
      </Button>
      <a
        style={{ display: 'none' }}
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify({ jConfig, aData })
        )}`}
        ref={exportRef}
        download="sandbox-export.json"
      ></a>
    </div>
  )
}

export default EditorActions
