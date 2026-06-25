import { contract } from '@/core/rest/contract'
import { generateOpenApi, SchemaTransformerSync } from '@ts-rest/open-api'
import { z } from 'zod'

const ZOD_4_SYNC: SchemaTransformerSync = ({ schema }) => {
  if (!schema) return null

  if (schema instanceof z.core.$ZodType) {
    try {
      const jsonSchema = z.toJSONSchema(schema, {
        reused: 'inline',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any
      return jsonSchema
    } catch {
      return null
    }
  }
  return null
}

export const openApiDocument = generateOpenApi(
  contract,
  {
    info: {
      title: 'Portifolio API',
      version: '1.0.0',
    },
  },
  {
    schemaTransformer: ZOD_4_SYNC,
  },
)
