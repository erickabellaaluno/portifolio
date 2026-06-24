import { getDictionary } from '@/lib/dictionaries'
import { describe, expect, it } from 'vitest'

describe('getDictionary', () => {
  it('returns the English dictionary for en', () => {
    const dict = getDictionary('en')

    expect(dict.nav.home).toBe('Home')
    expect(dict.login.title).toBe('Sign in')
  })

  it('returns the Portuguese dictionary for pt', () => {
    const dict = getDictionary('pt')

    expect(dict.nav.home).toBe('Início')
    expect(dict.login.title).toBe('Entrar')
  })
})
