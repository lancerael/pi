import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Sandbox from './components/organisms/Sandbox'
import store from './state'
import { Theme } from '@pi-lib/styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="andro">
      <Provider {...{ store }}>
        <Sandbox />
      </Provider>
    </Theme>
  </React.StrictMode>
)

export const CLOUDFRONT_URL =
  import.meta.env.VITE_CLOUDFRONT_URL ?? process.env.CLOUDFRONT_URL
