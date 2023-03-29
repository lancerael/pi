import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@pi-lib/styles'
//@ts-ignore
import { Provider } from 'react-redux'
//@ts-ignore
import Sandbox from './components/Sandbox'
//@ts-ignore
import store from './state'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="electron">
      <Provider store={store}>
        <Sandbox />
      </Provider>
    </Theme>
  </React.StrictMode>
)
