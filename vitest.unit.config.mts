import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    env: loadEnv('test', process.cwd(), ''),
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    setupFiles: [
      'tests/utils/setup/vitest.setup.ts',
      'tests/utils/setup/jest-dom.ts',
    ],
    environment: 'jsdom',
    silent: true,
  },
})
