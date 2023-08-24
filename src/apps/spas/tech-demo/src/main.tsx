import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state'

//@ts-ignore
import Sandbox from 'remoteSandbox/Sandbox'
//@ts-ignore
import Candlestick from 'remoteCandlestick/Candlestick'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
      <RouterProvider {...{ router }} />
    </Provider>
  </React.StrictMode>
)

export const CLOUDFRONT_URL =
  import.meta.env.VITE_CLOUDFRONT_URL ?? '__CLOUDFRONT_URL__'
