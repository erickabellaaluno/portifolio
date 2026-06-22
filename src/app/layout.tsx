import '@/app/globals.css'
import { ThemeProvider } from '@/ui/components/theme-provider'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Erick Bilhalba Abella - Portfólio',
  description:
    'Portfólio de atividades da disciplina de Algoritmos e Programação - Engenharia Elétrica | Unipampa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} light scroll-smooth h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
