import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  cacheDir: 'node_modules/.cacheDir',
  plugins: [react()],
  server: {
    https: false,
  },
})
