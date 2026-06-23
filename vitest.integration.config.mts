import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {
    env: loadEnv('test', process.cwd(), ''),
    include: ['tests/integration/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    fileParallelism: false,
  },
})
