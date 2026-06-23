import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    env: loadEnv('test', process.cwd(), ''),
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    setupFiles: ['tests/utils/setup/jest-dom.ts'],
    environment: 'jsdom',
    silent: true,
  },
})
