export type EnvType = {
  db: {
    url: string
  }
  jwt: {
    secret: string
  }
}

export default function getEnv(): EnvType {
  return {
    db: {
      url: process.env.DATABASE_URL!,
    },
    jwt: {
      secret: process.env.JWT_SECRET!,
    },
  }
}
