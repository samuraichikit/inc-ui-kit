import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
      name: 'inc-ui-kit',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      output: {},
    },
    sourcemap: true,
    target: 'esnext',
  },
})
