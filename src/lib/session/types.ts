export type SessionPayload = {
  email: string
}

export type SessionType = { payload: SessionPayload; token: string }
