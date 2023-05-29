import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteCandlestick.js',
      exposes: {
        './Candlestick': './src/components/Candlestick',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
})
