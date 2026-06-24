import getEnv from '@/lib/env'
import { beforeEach, describe, expect, it } from 'vitest'

describe('getEnv', () => {
  beforeEach(() => {
    process.env.DATABASE_URL = 'postgres://user:pass@localhost/db'
    process.env.JWT_SECRET = 'super-secret'
  })

  it('returns environment variables as typed config', () => {
    const env = getEnv()

    expect(env).toEqual({
      db: {
        url: 'postgres://user:pass@localhost/db',
      },
      jwt: {
        secret: 'super-secret',
      },
    })
  })
})
