'use client'

import { apiClient } from '@/core/rest/client'
import { contract } from '@/core/rest/contract'
import { DictionaryInterface } from '@/lib/dictionaries'
import FormButton from '@/ui/components/button/form-button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
  DefaultValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form'
import z from 'zod'
import { en, pt } from 'zod/v4/locales'

const newProjectSchema = contract.projects.store.body
type NewProjectSchemaType = z.infer<typeof newProjectSchema>

const updateProjectSchema = contract.projects.store.body
type UpdateProjectSchemaType = z.infer<typeof updateProjectSchema>

export function NewProjectForm({
  dict,
  lang,
}: {
  dict: DictionaryInterface
  lang: string
}) {
  const router = useRouter()

  z.config(lang === 'pt' ? pt() : en())

  const form = useForm<NewProjectSchemaType>({
    resolver: zodResolver(newProjectSchema),
    defaultValues: {
      slug: '',
      title: {
        pt: '',
        en: '',
      },
      description: {
        pt: '',
        en: '',
      },
      content: {
        pt: '',
        en: '',
      },
      date: '',
      tags: [''],
      githubUrl: '',
      classroomUrl: '',
    },
  })

  const onSubmit: SubmitHandler<NewProjectSchemaType> = async (
    values: NewProjectSchemaType,
  ) => {
    const response = await apiClient.projects.store({ body: values })

    if (response.status !== 201) {
      alert(dict.errors.systemError)
    }

    if (response.status === 201) {
      router.push(`/${lang}/admin`)
      router.refresh()
    }
  }

  return <FormComponent form={form} onSubmit={onSubmit} dict={dict} />
}

export function UpdateProjectForm({
  defaultValues,
  dict,
  lang,
  slug,
}: {
  defaultValues: DefaultValues<UpdateProjectSchemaType>
  dict: DictionaryInterface
  lang: string
  slug: string
}) {
  const router = useRouter()

  z.config(lang === 'pt' ? pt() : en())

  const form = useForm<UpdateProjectSchemaType>({
    resolver: zodResolver(updateProjectSchema),
    defaultValues,
  })

  const onSubmit: SubmitHandler<UpdateProjectSchemaType> = async (
    values: UpdateProjectSchemaType,
  ) => {
    const response = await apiClient.projects.update({
      params: { slug },
      body: values,
    })

    if (response.status !== 200) {
      alert(dict.errors.systemError)
    }

    if (response.status === 200) {
      router.push(`/${lang}/admin`)
      router.refresh()
    }
  }

  return <FormComponent form={form} onSubmit={onSubmit} dict={dict} />
}

function FormComponent({
  form,
  onSubmit,
  dict,
}: {
  form: UseFormReturn<NewProjectSchemaType | UpdateProjectSchemaType>
  onSubmit: SubmitHandler<NewProjectSchemaType | UpdateProjectSchemaType>
  dict: DictionaryInterface
}) {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl"
    >
      {form.formState.errors.root && (
        <div className="rounded-lg bg-red-50 dark:bg-red-950 p-3 text-sm text-red-600 dark:text-red-400">
          {form.formState.errors.root.message}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
          Slug
        </label>
        <input
          type="text"
          placeholder="project-slug"
          {...form.register('slug')}
          className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 disabled:opacity-50"
        />
        {form.formState.errors.slug && (
          <p className="mt-1 text-sm text-red-600">
            {form.formState.errors.slug.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Title (PT)
          </label>
          <input
            type="text"
            {...form.register('title.pt')}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.title?.pt && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.title.pt.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Title (EN)
          </label>
          <input
            type="text"
            {...form.register('title.en')}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.title?.en && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.title.en.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Description (PT)
          </label>
          <textarea
            {...form.register('description.pt')}
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.description?.pt && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.description.pt.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Description (EN)
          </label>
          <textarea
            {...form.register('description.en')}
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.description?.en && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.description.en.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Content (PT)
          </label>
          <textarea
            {...form.register('content.pt')}
            rows={6}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.content?.pt && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.content.pt.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Content (EN)
          </label>
          <textarea
            {...form.register('content.en')}
            rows={6}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.content?.en && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.content.en.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
          Date
        </label>
        <input
          type="date"
          {...form.register('date')}
          className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
        />
        {form.formState.errors.date && (
          <p className="mt-1 text-sm text-red-600">
            {form.formState.errors.date.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
          Tags (comma separated)
        </label>
        <input
          type="text"
          placeholder="tag1, tag2, tag3"
          {...form.register('tags', {
            setValueAs: (v?: unknown) => {
              if (typeof v === 'string') {
                return v
                  .split(',')
                  .map((x) => x.trim())
                  .filter(Boolean)
              }
            },
          })}
          className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
        />
        {form.formState.errors.tags && (
          <p className="mt-1 text-sm text-red-600">
            {form.formState.errors.tags.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            GitHub URL (optional)
          </label>
          <input
            type="url"
            {...form.register('githubUrl', {
              setValueAs: (v) => (v === '' ? undefined : v),
            })}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.githubUrl && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.githubUrl.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
            Classroom URL (optional)
          </label>
          <input
            type="url"
            {...form.register('classroomUrl', {
              setValueAs: (v) => (v === '' ? undefined : v),
            })}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
          />
          {form.formState.errors.classroomUrl && (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.classroomUrl.message}
            </p>
          )}
        </div>
      </div>

      <FormButton
        isSubmitting={form.formState.isSubmitting}
        isSubmitSuccessful={form.formState.isSubmitSuccessful}
      >
        {dict.admin.projects.new}
      </FormButton>
    </form>
  )
}
