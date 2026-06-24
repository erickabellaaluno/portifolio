import { LocaleType } from '@/lib/dictionaries'
import LoginForm from '@/ui/blocks/forms/login'

export default async function LoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ email?: string; callbackUrl?: string }>
}) {
  const { lang } = await params
  const { email = '', callbackUrl = '/' } = await searchParams

  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Sign In
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Welcome back to your portfolio
          </p>
        </div>

        <LoginForm
          callbackUrl={callbackUrl}
          email={email}
          lang={lang as LocaleType}
        />
      </div>
    </main>
  )
}
