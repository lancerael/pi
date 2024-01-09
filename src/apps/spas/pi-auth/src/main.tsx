import React from 'react'
import ReactDOM from 'react-dom/client'
import Auth from './pages/Auth'
import Theme from '@pi-lib/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="andro">
      <Auth />
    </Theme>
  </React.StrictMode>
)
