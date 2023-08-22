import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
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
    },
    define: {
      'process.env.CLOUDFRONT_URL':
        env.CLOUDFRONT_URL ?? 'https://d3bjzq1zo2el1w.cloudfront.net',
    },
  }
})
