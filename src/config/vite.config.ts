/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  // resolve: {
  //   alias: [
  //     { find: '@config', replacement: resolve(__dirname, 'src/config') },
  //   ],
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["vitest-setup.ts"],
    coverage: {
      provider: 'istanbul'
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: '@pi/button',
      fileName: 'pi-button',
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
    }
  }
})
