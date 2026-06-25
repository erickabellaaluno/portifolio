export const unauthorizedResponse = {
  status: 401,
  body: {
    error: {
      message: 'Unauthorized',
      code: 1,
    },
  },
} as const
