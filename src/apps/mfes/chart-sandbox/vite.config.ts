import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  server: {
    https: false,
    host: '0.0.0.0',
    port: 5001,
  },
  cacheDir: 'node_modules/.cacheDir',
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
          __CLOUDFRONT_URL__: `${process.env.CLOUDFRONT_URL}`,
          __LAMBDA_URL__: `${process.env.LAMBDA_URL}`,
        }),
      ],
    },
  },
})
