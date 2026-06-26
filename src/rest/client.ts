import getPublicEnv from '@/lib/env/public'
import { contract } from '@/rest/contract'
import { ApiFetcherArgs, initClient, tsRestFetchApi } from '@ts-rest/core'

const { baseUrl } = getPublicEnv()

export const apiClient = initClient(contract, {
  baseUrl: baseUrl,
  baseHeaders: {},
  api: async (args: ApiFetcherArgs) => {
    try {
      return await tsRestFetchApi({
        ...args,
        fetchOptions: {
          ...args.fetchOptions,
          next: {
            revalidate: 60,
          },
        },
      })
    } catch {
      return new Response(
        JSON.stringify({
          error: {
            message: 'Internal Server Error',
            code: -1,
          },
        }),
        {
          status: 500,
          headers: {
            'content-type': 'application/json',
          },
        },
      )
    }
  },
})
