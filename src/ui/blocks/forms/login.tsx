'use client'

import { loginAction } from '@/actions/login'
import { contract } from '@/core/rest/contract'
import { LocaleType } from '@/lib/dictionaries'
import FormButton from '@/ui/components/button/form-button'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = contract.auth.login.body
type LoginSchemaType = z.infer<typeof loginSchema>

export default function LoginForm({
  email: initialEmail,
}: {
  callbackUrl: string
  email: string
  lang: LocaleType
}) {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: initialEmail ?? '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<LoginSchemaType> = async (
    values: LoginSchemaType,
  ) => {
    const response = await loginAction(values)

    if (response === true) {
      redirect('/admin')
    }

    form.setError('root', {
      message: response,
    })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...form.register('email')}
          className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          {...form.register('password')}
          className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {form.formState.errors.password && (
          <p className="mt-1 text-sm text-red-600">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>

      {form.formState.errors.root && (
        <div className="rounded-lg bg-red-50 dark:bg-red-950 p-3 text-sm text-red-600 dark:text-red-400">
          {form.formState.errors.root.message}
        </div>
      )}

      <FormButton
        isSubmitting={form.formState.isSubmitting}
        isSubmitSuccessful={form.formState.isSubmitSuccessful}
      >
        Sign In
      </FormButton>
    </form>
  )
}
