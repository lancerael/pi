import React from 'react'
import ReactDOM from 'react-dom/client'
import Candlestick from './components/Candlestick'
import { Provider } from 'react-redux'
import store from './state'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <Candlestick />
    </Provider>
  </React.StrictMode>
)
