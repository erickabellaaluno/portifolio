import '@/app/globals.css'
import { getDictionary, locales, LocaleType } from '@/lib/dictionaries'
import Footer from '@/ui/blocks/footer'
import Navbar from '@/ui/blocks/navbar'
import ThemeProvider from '@/ui/providers/theme-provider'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Erick Bilhalba Abella - Portfólio',
  description:
    'Portfólio de trabalhos da disciplina de Algoritmos e Programação — Engenharia Elétrica, Unipampa Alegrete.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const language = (await params).lang as LocaleType
  const dict = getDictionary(language)

  return (
    <html
      lang={language}
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 min-h-screen flex flex-col antialiased transition-colors duration-150">
        <ThemeProvider>
          <Navbar lang={language} dict={dict} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  )
}
