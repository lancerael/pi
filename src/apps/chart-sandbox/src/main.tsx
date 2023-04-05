import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Sandbox from './components/Sandbox'
import store from './state'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <Sandbox />
    </Provider>
  </React.StrictMode>
)
