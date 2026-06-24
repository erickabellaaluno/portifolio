import { contract } from '@/core/rest/contract'
import { generateOpenApi } from '@ts-rest/open-api'

export const openApiDocument = generateOpenApi(contract, {
  info: {
    title: 'Portifolio API',
    version: '1.0.0',
  },
})
