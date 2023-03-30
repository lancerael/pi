import React from 'react'
import ReactDOM from 'react-dom/client'
//@ts-ignore
import { Provider } from 'react-redux'
//@ts-ignore
import Sandbox from './components/Sandbox'
//@ts-ignore
import store from './state'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <Sandbox />
    </Provider>
  </React.StrictMode>
)
