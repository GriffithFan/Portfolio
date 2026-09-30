import { projects } from '../data/portfolio-data'
import Section from '../components/Section'

const Projects = () => {
  return (
    <Section id="projects" title="Proyectos" aside={`${String(projects.length).padStart(2, '0')} proyectos`}>
      <ol className="border-t border-line">
        {projects.map((project, index) => (
          <li key={project.id} className="border-b border-line py-10 md:py-14 grid md:grid-cols-12 gap-y-5 md:gap-x-12">
            <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
              <div className="flex items-center gap-4 md:block">
                <span className="font-mono text-sm text-faint">{String(index + 1).padStart(2, '0')}</span>
                {project.status && (
                  <span className="flex items-center gap-2 font-mono text-xs text-muted md:mt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight mt-4">
                {project.title}
              </h3>
            </div>

            <dl className="md:col-span-8 space-y-6">
              <div>
                <dt className="label mb-2">Problema</dt>
                <dd className="md:text-lg leading-relaxed">{project.problem}</dd>
              </div>
              <div>
                <dt className="label mb-2">Qué hace</dt>
                <dd className="text-muted leading-relaxed">{project.description}</dd>
              </div>
              <div>
                <dt className="label mb-2">Stack</dt>
                <dd className="font-mono text-sm leading-relaxed">{project.tags.join(' · ')}</dd>
              </div>

              {(project.demo || project.github || project.note) && (
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm pt-1">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link">
                      Ver en producción ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link">
                      Código ↗
                    </a>
                  )}
                  {project.note && <span className="text-faint">{project.note}</span>}
                </div>
              )}
            </dl>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Projects
