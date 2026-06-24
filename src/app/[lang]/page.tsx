import { projectsRepository } from '@/core/projects.repository'
import { getDictionary, LocaleType } from '@/lib/dictionaries'
import HeroSection from '@/ui/blocks/hero-section'
import ProjectCard from '@/ui/components/project-card'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: LocaleType }>
}) {
  const projects = await projectsRepository.list()
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <>
      <HeroSection lang={lang} dict={dict} />

      <section
        id="projects"
        className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="mb-10">
          <p
            className="text-sm font-mono tracking-widest uppercase mb-2
            text-amber-500 dark:text-amber-400"
          >
            {dict.works.subtitle}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold
            text-neutral-900 dark:text-neutral-100"
          >
            {dict.works.title}
          </h2>
        </div>

        {projects.length === 0 ? (
          <p className="text-neutral-400 dark:text-neutral-500">
            {dict.works.noWorks}
          </p>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} lang={lang} dict={dict} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
