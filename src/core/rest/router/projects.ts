import { projectsRepository } from '@/core/projects.repository'
import { contract } from '@/core/rest/contract'
import { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'
import { tsr } from '@ts-rest/serverless/next'

async function handleList(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request: ServerInferRequest<typeof contract.projects.list>,
): Promise<ServerInferResponses<typeof contract.projects.list>> {
  const projects = await projectsRepository.list()

  return { body: { data: projects }, status: 200 }
}

async function handleShow(
  request: ServerInferRequest<typeof contract.projects.show>,
): Promise<ServerInferResponses<typeof contract.projects.show>> {
  const project = await projectsRepository.findBySlug(request.params.slug)

  if (!project) {
    return {
      body: { error: { message: 'Project not found', code: 1 } },
      status: 404,
    }
  }

  return { body: { data: project }, status: 200 }
}

async function handleStore(
  request: ServerInferRequest<typeof contract.projects.store>,
): Promise<ServerInferResponses<typeof contract.projects.store>> {
  const project = await projectsRepository.save(request.body)

  return { body: { data: project }, status: 201 }
}

async function handleUpdate(
  request: ServerInferRequest<typeof contract.projects.update>,
): Promise<ServerInferResponses<typeof contract.projects.update>> {
  const project = await projectsRepository.findBySlug(request.params.slug)

  if (!project) {
    return {
      body: { error: { message: 'Project not found', code: 1 } },
      status: 404,
    }
  }

  const updatedProject = await projectsRepository.update(
    request.params.slug,
    request.body,
  )

  return { body: { data: updatedProject }, status: 200 }
}

async function handleDestroy(
  request: ServerInferRequest<typeof contract.projects.destroy>,
): Promise<ServerInferResponses<typeof contract.projects.destroy>> {
  const project = await projectsRepository.findBySlug(request.params.slug)

  if (!project) {
    return {
      body: { error: { message: 'Project not found', code: 1 } },
      status: 404,
    }
  }

  await projectsRepository.destroy(request.params.slug)

  return {
    body: { data: { message: 'Project deleted successfully' } },
    status: 200,
  }
}

export const projectsRouter = tsr.router(contract.projects, {
  list: handleList,
  store: handleStore,
  show: handleShow,
  update: handleUpdate,
  destroy: handleDestroy,
})
