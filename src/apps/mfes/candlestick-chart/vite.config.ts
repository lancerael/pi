import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: {
    https: false,
    host: '0.0.0.0',
    port: 5002,
  },
  cacheDir: 'node_modules/.cacheDir',
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteCandlestick.js',
      exposes: {
        './Candlestick': './src/components/Candlestick',
        './candlestickDataReducer':
          './src/state/reducers/candlestickDataReducer',
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
    target: 'esnext',
  },
})
