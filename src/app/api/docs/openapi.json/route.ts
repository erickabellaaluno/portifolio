import { openApiDocument } from '@/core/rest/openapi'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(openApiDocument)
}
