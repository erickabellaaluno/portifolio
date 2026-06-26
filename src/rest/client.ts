import getPublicEnv from '@/lib/env/public'
import { contract } from '@/rest/contract'
import { initClient } from '@ts-rest/core'

const { baseUrl } = getPublicEnv()

export const apiClient = initClient(contract, {
  baseUrl: baseUrl,
  baseHeaders: {},
})
