import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const portMap = {
  'chart-sandbox': 5001,
  'candlestick-chart': 5002,
}

const IS_DEV = process.env.NODE_ENV === 'development'
const ASSET_PATH = 'https://pi-lib-mfes.s3.eu-west-2.amazonaws.com'
const getPath = (id) =>
  IS_DEV ? `http://localhost:${portMap[id]}` : `${ASSET_PATH}/${id}`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        remoteSandbox: `${getPath('chart-sandbox')}/assets/remoteSandbox.js`,
        remoteCandlestick: `${getPath(
          'candlestick-chart'
        )}/assets/remoteCandlestick.js`,
      },
      shared: [
        'react',
        'react-dom',
        '@reduxjs/toolkit',
        'react-redux',
        'redux',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
