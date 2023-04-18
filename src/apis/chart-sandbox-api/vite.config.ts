import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/lambda.ts',
      formats: ['es'],
      name: `@pi-lib/chart-sandbox-api`,
      fileName: 'index',
    },
    outDir: 'vanilla',
  },
})
