/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export default (libNames: { name: string, fileName: string }) => defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["./node_modules/@pi/config/vitest-setup.ts"],
    coverage: {
      provider: 'istanbul'
    },
  },
  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), '../src/index.ts'),
      formats: ['es', 'umd'],
      ...libNames,
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
    }
  }
})
