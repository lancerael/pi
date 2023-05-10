import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const IS_DEV = process.env.NODE_ENV === 'development'
const ASSET_PATH = 'https://pi-lib-mfes.s3.eu-west-2.amazonaws.com'
const getPath = (port) => (IS_DEV ? `http://localhost:${port}` : ASSET_PATH)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        remoteSandbox: `${getPath(5001)}/assets/remoteSandbox.js`,
        remoteCandlestick: `${getPath(5002)}/assets/remoteCandlestick.js`,
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
