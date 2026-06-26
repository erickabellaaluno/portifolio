export type PublicEnvType = {
  baseUrl: string
}

export default function getPublicEnv(): PublicEnvType {
  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  }
}
