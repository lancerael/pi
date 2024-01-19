import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './state'
import Transactions from './components/Transactions'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <Transactions />
    </Provider>
  </React.StrictMode>
)
