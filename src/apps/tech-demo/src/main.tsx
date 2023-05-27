import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './state'

//@ts-ignore
import Sandbox from 'remoteSandbox/Sandbox'
//@ts-ignore
import Candlestick from 'remoteCandlestick/Candlestick'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Sandbox />,
      },
      {
        path: 'candlestick',
        element: <Candlestick />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
