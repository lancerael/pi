import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@pi-lib/styles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="electron">
      <App />
    </Theme>
  </React.StrictMode>
)
