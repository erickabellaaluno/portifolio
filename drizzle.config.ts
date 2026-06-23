import getEnv from '@/lib/env'
import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

const env = getEnv()

export default defineConfig({
  out: './src/db/migrations',
  schema: './src/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.db.url,
  },
})
