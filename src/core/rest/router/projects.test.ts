import { contract } from '@/core/rest/contract'
import { ServerInferRequest } from '@ts-rest/core'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const listMock = vi.fn()
const findBySlugMock = vi.fn()
const saveMock = vi.fn()
const updateMock = vi.fn()
const destroyMock = vi.fn()

vi.mock('@/core/projects.repository', () => ({
  projectsRepository: {
    list: listMock,
    findBySlug: findBySlugMock,
    save: saveMock,
    update: updateMock,
    destroy: destroyMock,
  },
}))

describe('projects router handlers', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('handleList returns project list', async () => {
    listMock.mockResolvedValueOnce([{ slug: 'test' }])
    const { handleList } = await import('./projects')
    const response = await handleList({})
    expect(response).toEqual({
      body: { data: [{ slug: 'test' }] },
      status: 200,
    })
  })

  it('handleShow returns 404 when project is missing', async () => {
    findBySlugMock.mockResolvedValueOnce(undefined)
    const { handleShow } = await import('./projects')
    const response = await handleShow({ params: { slug: 'missing' } })

    expect(response).toEqual({
      body: { error: { message: 'Project not found', code: 1 } },
      status: 404,
    })
  })

  it('handleShow returns project when found', async () => {
    findBySlugMock.mockResolvedValueOnce({ slug: 'ok' })
    const { handleShow } = await import('./projects')
    const response = await handleShow({ params: { slug: 'ok' } })

    expect(response).toEqual({ body: { data: { slug: 'ok' } }, status: 200 })
  })

  it('handleStore returns created project', async () => {
    saveMock.mockResolvedValueOnce({ slug: 'created' })
    const { handleStore } = await import('./projects')
    const response = await handleStore({
      body: { slug: 'created' },
    } as ServerInferRequest<typeof contract.projects.store>)

    expect(response).toEqual({
      body: { data: { slug: 'created' } },
      status: 201,
    })
  })

  it('handleUpdate returns 404 when project is missing', async () => {
    findBySlugMock.mockResolvedValueOnce(undefined)
    const { handleUpdate } = await import('./projects')
    const response = await handleUpdate({
      params: { slug: 'missing' },
      body: {},
    })

    expect(response).toEqual({
      body: { error: { message: 'Project not found', code: 1 } },
      status: 404,
    })
  })

  it('handleUpdate returns updated project when found', async () => {
    findBySlugMock.mockResolvedValueOnce({ slug: 'ok' })
    updateMock.mockResolvedValueOnce({ slug: 'updated' })
    const { handleUpdate } = await import('./projects')
    const response = await handleUpdate({
      params: { slug: 'ok' },
      body: { title: { en: 'Updated', pt: 'Atualizado' } },
    })

    expect(response).toEqual({
      body: { data: { slug: 'updated' } },
      status: 200,
    })
  })

  it('handleDestroy returns 404 when project is missing', async () => {
    findBySlugMock.mockResolvedValueOnce(undefined)
    const { handleDestroy } = await import('./projects')
    const response = await handleDestroy({ params: { slug: 'missing' } })

    expect(response).toEqual({
      body: { error: { message: 'Project not found', code: 1 } },
      status: 404,
    })
  })

  it('handleDestroy returns success when project is deleted', async () => {
    findBySlugMock.mockResolvedValueOnce({ slug: 'ok' })
    destroyMock.mockResolvedValueOnce(undefined)
    const { handleDestroy } = await import('./projects')
    const response = await handleDestroy({ params: { slug: 'ok' } })

    expect(response).toEqual({
      body: { data: { message: 'Project deleted successfully' } },
      status: 200,
    })
  })
})
