import { schema } from '@/db/schema'
import getEnv from '@/lib/env'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'

const env = getEnv()

export const db = drizzle(env.db.url, {
  schema,
})

export default db
