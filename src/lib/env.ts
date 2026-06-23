export type EnvType = {
  db: {
    url: string
  }
}

export default function getEnv(): EnvType {
  return {
    db: {
      url: process.env.DATABASE_URL!,
    },
  }
}
