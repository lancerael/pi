import React from 'react'
import ConfigEditor from './ConfigEditor'
import DataTable from './DataTable'
import EditorActions from './EditorActions'

const Editor = () => (
  <div
    style={{
      flexGrow: 1,
      background: 'var(--shadow)',
      color: 'var(--textSoft)',
      borderRight: '1px solid var(--specialBg)',
      padding: '16px',
    }}
  >
    <ConfigEditor />
    <DataTable />
    <EditorActions />
  </div>
)

export default Editor
