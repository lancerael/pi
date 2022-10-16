/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["./config/vitest-setup.ts"],
    coverage: {
      provider: 'istanbul'
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      formats: ['es', 'umd'],
      name: '@pi/button',
      fileName: 'pi-button',
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
    }
  }
})
