import { contract } from '@/rest/contract'
import { initClient } from '@ts-rest/core'

export const apiClient = initClient(contract, {
  baseUrl: 'http://localhost:3000',
  baseHeaders: {},
})
