import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteSandbox.js',
      exposes: {
        './Sandbox': './src/components/organisms/Sandbox/Sandbox',
        './chartConfigReducer': './src/state/reducers/chartConfigReducer',
        './chartDataReducer': './src/state/reducers/chartDataReducer',
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
    rollupOptions: {
      plugins: [
        replace({
          ___CLOUDFRONT_URL___: process.env.CLOUDFRONT_URL,
        }),
      ],
    },
  },
})
