/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default (libName: string) =>
  defineConfig({
    test: {
      globals: true,
      watch: false,
      environment: 'jsdom',
      setupFiles: ['./node_modules/@pi-lib/config/vitest-setup.ts'],
      coverage: {
        provider: 'istanbul',
      },
    },
    build: {
      lib: {
        entry: './src/index.ts',
        formats: ['es', 'umd'],
        name: `@pi-lib/${libName}`,
        fileName: `pi-lib-${libName}`,
      },
      rollupOptions: {
        external: [
          'react',
          'styled-components',
          'react/jsx-runtime',
          '@pi-lib/styles',
        ],
        output: {
          globals: {
            react: 'React',
          },
        },
      },
    },
    plugins: [react()],
  })
