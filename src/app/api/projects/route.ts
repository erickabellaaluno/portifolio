import { projects } from '@/db/projects'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ data: projects }, { status: 200 })
}
