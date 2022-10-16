/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export default (libName: string) => defineConfig({
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
      // entry: resolve(dirname(fileURLToPath(import.meta.url)), '../../../../src/index.ts'),
      entry: './src/index.ts',
      formats: ['es', 'umd'],
      name: `@pi/${libName}`,
      fileName: `pi-${libName}`
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
    }
  }
})
