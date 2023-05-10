import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main'
import { Theme } from '@pi-lib/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="andro">
      <Main />
    </Theme>
  </React.StrictMode>
)
