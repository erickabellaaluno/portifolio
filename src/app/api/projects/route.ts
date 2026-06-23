import { getProjects } from '@/db/projects'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ data: await getProjects() }, { status: 200 })
}
