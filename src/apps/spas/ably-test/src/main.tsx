import React from 'react'
import ReactDOM from 'react-dom/client'
import Ably from './pages/Ably'
import Theme from '@pi-lib/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="electron" scheme="light">
      <Ably />
    </Theme>
  </React.StrictMode>
)
