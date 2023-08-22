import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import replace from '@rollup/plugin-replace'

const portMap = {
  'chart-sandbox': 5001,
  'candlestick-chart': 5002,
}

const IS_DEV = process.env.NODE_ENV === 'development'
const ASSET_PATH = process.env.MFE_ASSET_PATH

const getPath = (id) => {
  const devUrl = `http://localhost:${portMap[id]}`
  if (IS_DEV) return devUrl
  if (ASSET_PATH) return `${ASSET_PATH}/${id}`
  return devUrl
}

export default defineConfig({
  cacheDir: 'node_modules/.cacheDir',
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
    rollupOptions: {
      plugins: [
        replace({
          ___CLOUDFRONT_URL___: process.env.CLOUDFRONT_URL,
        }),
      ],
    },
  },
})
