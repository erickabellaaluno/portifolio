import { LocaleType } from '@/i18n/dictionaries'
import z from 'zod'

const errorMessages = {
  en: {
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    passwordRequired: 'Password is required',
    passwordTooShort: 'Password must be at least 6 characters',
  },
  pt: {
    emailRequired: 'Email é obrigatório',
    emailInvalid: 'Por favor, insira um endereço de email válido',
    passwordRequired: 'Senha é obrigatória',
    passwordTooShort: 'Senha deve ter pelo menos 6 caracteres',
  },
}

export function createLoginSchema(locale: LocaleType = 'pt') {
  const messages = errorMessages[locale]

  return z.object({
    email: z
      .string({ message: messages.emailRequired })
      .email(messages.emailInvalid),
    password: z
      .string({ message: messages.passwordRequired })
      .min(1, messages.passwordRequired),
    callbackUrl: z.string(),
  })
}

export const loginSchema = createLoginSchema('pt')
export type LoginSchemaType = z.infer<typeof loginSchema>
