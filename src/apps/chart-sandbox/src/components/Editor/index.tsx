import React from 'react'
import ConfigEditor from './ConfigEditor'
import DataTable from './DataTable'
// import EditorActions from './EditorActions'

const Editor = () => (
  <div
    style={{
      height: '100%',
      flexGrow: 1,
      background: 'var(--subtle)',
      color: 'var(--textSoft)',
      borderRight: '1px solid var(--border)',
    }}
  >
    <ConfigEditor />
    <DataTable />
    {/* <EditorActions {...{oChart, hnReplaceChart, hnAddRow, hnAddColumn}} /> */}
  </div>
)

export default Editor
