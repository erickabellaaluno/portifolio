import { commonResponses, zBearer, zLanguages } from '@/rest/contract/common'
import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export const projectsContract = c.router(
  {
    list: {
      method: 'GET',
      path: '/api/projects',
      responses: {
        200: z.object({
          data: z.array(
            z.object({
              date: z.string(),
              slug: z.string(),
              title: zLanguages(),
              description: zLanguages(),
              tags: z.array(z.string()),
            }),
          ),
        }),
      },
      summary: 'List all projects',
      strictStatusCodes: true,
    },
    show: {
      method: 'GET',
      path: '/api/projects/:slug',
      responses: {
        200: z.object({
          data: z.object({
            slug: z.string(),
            title: zLanguages(),
            description: zLanguages(),
            content: zLanguages(),
            date: z.iso.date(),
            tags: z.array(z.string()),
            githubUrl: z.url({ hostname: /^github\.com$/ }).nullable(),
            classroomUrl: z
              .url({ hostname: /^classroom.google\.com$/ })
              .nullable(),
          }),
        }),
        404: z.object({
          error: z.object({
            message: z.literal('Project not found'),
            code: 1,
          }),
        }),
      },
      summary: 'Show a project',
      strictStatusCodes: true,
    },
    store: {
      method: 'POST',
      path: '/api/projects',
      headers: z.object({
        authorization: zBearer(),
      }),
      body: z.object({
        slug: z.string(),
        title: zLanguages(),
        description: zLanguages(),
        content: zLanguages(),
        date: z.iso.date(),
        tags: z.array(z.string()),
        githubUrl: z.url({ hostname: /^github\.com$/ }).optional(),
        classroomUrl: z.url({ hostname: /^classroom.google\.com$/ }).optional(),
      }),
      responses: {
        201: z.object({
          data: z.object({
            slug: z.string(),
            title: zLanguages(),
            description: zLanguages(),
            content: zLanguages(),
            date: z.iso.date(),
            tags: z.array(z.string()),
            githubUrl: z.url({ hostname: /^github\.com$/ }).nullable(),
            classroomUrl: z
              .url({ hostname: /^classroom.google\.com$/ })
              .nullable(),
          }),
        }),
        401: z.object({
          error: z.object({
            message: z.literal('Unauthorized'),
            code: z.literal(1),
          }),
        }),
      },
      summary: 'Store a new project',
      strictStatusCodes: true,
    },
    update: {
      method: 'PUT',
      path: '/api/projects/:slug',
      headers: z.object({
        authorization: zBearer(),
      }),
      body: z.object({
        slug: z.string().optional(),
        title: zLanguages().optional(),
        description: zLanguages().optional(),
        content: zLanguages().optional(),
        date: z.iso.date().optional(),
        tags: z.array(z.string()).optional(),
        githubUrl: z.url({ hostname: /^github\.com$/ }).optional(),
        classroomUrl: z.url({ hostname: /^classroom.google\.com$/ }).optional(),
      }),
      responses: {
        200: z.object({
          data: z.object({
            date: z.string(),
            slug: z.string(),
            title: zLanguages(),
            description: zLanguages(),
            tags: z.array(z.string()),
          }),
        }),
        401: z.object({
          error: z.object({
            message: z.literal('Unauthorized'),
            code: z.literal(1),
          }),
        }),
        404: z.object({
          error: z.object({
            message: z.literal('Project not found'),
            code: 1,
          }),
        }),
      },
      summary: 'Update a project',
      strictStatusCodes: true,
    },
    destroy: {
      method: 'DELETE',
      path: '/api/projects/:slug',
      headers: z.object({
        authorization: zBearer(),
      }),
      responses: {
        200: z.object({
          data: z.object({
            message: z.literal('Project deleted successfully'),
          }),
        }),
        401: z.object({
          error: z.object({
            message: z.literal('Unauthorized'),
            code: z.literal(1),
          }),
        }),
        404: z.object({
          error: z.object({
            message: z.literal('Project not found'),
            code: 1,
          }),
        }),
      },
      summary: 'Delete a project',
      strictStatusCodes: true,
    },
  },
  {
    commonResponses,
    strictStatusCodes: true,
  },
)
