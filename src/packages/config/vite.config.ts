/// <reference types="vitest" />
import { defineConfig, PluginOption, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { RollupOptions } from 'rollup'

import type { InlineConfig } from 'vitest'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

export default (
  libName: string,
  customRollup?: RollupOptions,
  extraPlugins: PluginOption[] = []
) => {
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
      rollupOptions: customRollup ?? {
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
    plugins: [react(), ...extraPlugins],
  } as VitestConfigExport)
}
