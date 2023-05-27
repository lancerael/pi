import React from 'react'
import ReactDOM from 'react-dom/client'
import Candlestick from './components/Candlestick'
import { Theme } from '@pi-lib/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="andro">
      <Candlestick />
    </Theme>
  </React.StrictMode>
)
