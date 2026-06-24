import { beforeEach, describe, expect, it, vi } from 'vitest'

const selectMock = vi.fn()
const queryMock = vi.fn()
const insertMock = vi.fn()
const insertValuesMock = vi.fn()
const updateMock = vi.fn()
const updateSetMock = vi.fn()
const deleteMock = vi.fn()
const deleteWhereMock = vi.fn()

vi.mock('@/db', () => ({
  default: {
    select: selectMock,
    query: {
      projects: {
        findFirst: queryMock,
      },
    },
    insert: insertMock.mockImplementation(() => ({ values: insertValuesMock })),
    update: updateMock.mockImplementation(() => ({ set: updateSetMock })),
    delete: deleteMock.mockImplementation(() => ({ where: deleteWhereMock })),
  },
}))

vi.mock('@/db/schema/projects', () => ({
  projectsTable: {},
}))

vi.mock('drizzle-orm', () => ({
  eq: vi.fn((field: unknown, value: unknown) => ({ field, value })),
}))

describe('projectsRepository', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    selectMock.mockReturnValueOnce({ from: () => Promise.resolve([]) })
  })

  it('lists projects', async () => {
    selectMock.mockReturnValueOnce({ from: vi.fn(async () => []) })

    const { projectsRepository } = await import('./projects.repository')
    const result = await projectsRepository.list()

    expect(result).toEqual([])
  })

  it('finds a project by slug', async () => {
    queryMock.mockResolvedValueOnce({ slug: 'test' })

    const { projectsRepository } = await import('./projects.repository')
    const result = await projectsRepository.findBySlug('test')

    expect(result).toEqual({ slug: 'test' })
    expect(queryMock).toHaveBeenCalledOnce()
  })

  it('saves a project', async () => {
    insertValuesMock.mockReturnValueOnce({
      returning: vi.fn(() => [{ slug: 'test' }]),
    })

    const { projectsRepository } = await import('./projects.repository')
    const result = await projectsRepository.save({
      slug: 'test',
      date: '2024-01-01',
      title: { en: 'Test', pt: 'Teste' },
      description: { en: 'Test', pt: 'Teste' },
      content: { en: 'Test', pt: 'Teste' },
      tags: ['a'],
    })

    expect(result).toEqual({ slug: 'test' })
    expect(insertMock).toHaveBeenCalledOnce()
    expect(insertValuesMock).toHaveBeenCalledOnce()
  })

  it('updates a project', async () => {
    updateSetMock.mockReturnValueOnce({
      where: vi.fn(() => ({ returning: vi.fn(() => [{ slug: 'test' }]) })),
    })

    const { projectsRepository } = await import('./projects.repository')
    const result = await projectsRepository.update('test', {
      title: { en: 'x', pt: 'x' },
    })

    expect(result).toEqual({ slug: 'test' })
    expect(updateMock).toHaveBeenCalledOnce()
    expect(updateSetMock).toHaveBeenCalledOnce()
  })

  it('destroys a project', async () => {
    deleteWhereMock.mockReturnValueOnce({ returning: vi.fn(() => []) })

    const { projectsRepository } = await import('./projects.repository')
    await projectsRepository.destroy('test')

    expect(deleteMock).toHaveBeenCalledOnce()
    expect(deleteWhereMock).toHaveBeenCalledOnce()
  })
})
