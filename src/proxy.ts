import { defaultLocale, locales, LocaleType } from '@/lib/dictionaries'
import { decrypt } from '@/lib/session'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

function getLocale(request: NextRequest): LocaleType {
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const preferred = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim().slice(0, 2).toLowerCase())

  for (const lang of preferred) {
    if (locales.includes(lang as LocaleType)) return lang as LocaleType
  }

  return defaultLocale
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  const locale = getLocale(request)

  const strippedPathname = pathnameHasLocale
    ? pathname.replace(/^\/[^/]+/, '')
    : pathname

  const isAdminLogin = strippedPathname === '/admin/login'
  const isAdminArea = strippedPathname.startsWith('/admin')

  if (isAdminArea) {
    const token = request.cookies.get('token')?.value
    const session = await decrypt(token)
    const isLoggedIn = session !== null

    if (isAdminLogin && isLoggedIn) {
      return NextResponse.redirect(new URL(`/${locale}/admin`, request.url))
    }

    if (!isAdminLogin && !isLoggedIn) {
      return NextResponse.redirect(
        new URL(`/${locale}/admin/login`, request.url),
      )
    }

    if (!pathnameHasLocale) {
      request.nextUrl.pathname = `/${locale}${pathname}`
      return NextResponse.redirect(request.nextUrl)
    }

    return NextResponse.next()
  }

  if (pathnameHasLocale) return NextResponse.next()

  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
}
