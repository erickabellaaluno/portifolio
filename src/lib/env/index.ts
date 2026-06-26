export type EnvType = {
  db: {
    url: string
  }
  jwt: {
    secret: string
  }
  baseUrl: string
}

export default function getEnv(): EnvType {
  return {
    db: {
      url: process.env.DATABASE_URL!,
    },
    jwt: {
      secret: process.env.JWT_SECRET!,
    },
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL!,
  }
}
