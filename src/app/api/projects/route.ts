import { projectsRepository } from '@/core/projects.repository'
import { NextResponse } from 'next/server'

export async function GET() {
  const projects = await projectsRepository.list()

  return NextResponse.json({ data: projects }, { status: 200 })
}
