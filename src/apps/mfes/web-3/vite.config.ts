import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: {
    https: false,
    host: '0.0.0.0',
    port: 5003,
  },
  cacheDir: 'node_modules/.cacheDir',
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteWeb3.js',
      exposes: {
        './Transactions': './src/components/Transactions',
        './web3Reducer': './src/state/reducers/web3Reducer',
        './web3Sagas': './src/state/sagas',
      },
      shared: [
        'react',
        'react-dom',
        '@reduxjs/toolkit',
        'react-redux',
        'redux',
        'redux-saga',
      ],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
