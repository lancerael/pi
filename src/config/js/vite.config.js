/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default (libName, customRollup) => {
  return defineConfig({
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
        formats: ['es'],
        name: `@pi-lib/${libName}`,
        fileName: 'index',
      },
      outDir: 'vanilla',
      rollupOptions:
        customRollup !== null && customRollup !== void 0
          ? customRollup
          : {
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
}
