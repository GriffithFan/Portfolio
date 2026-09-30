import Section from '../components/Section'

interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Desarrollador · Coordinación de Operaciones Técnicas",
    company: "THNET",
    period: "Nov 2024 — Actualidad",
    summary: "Coordino el trabajo de cuadrillas de técnicos de redes en campo y desarrollo los sistemas internos con los que se gestiona.",
    highlights: [
      "Planificación de salidas y carga de cronogramas para proyectos de conectividad en escuelas de todo el país.",
      "Desarrollo y mantenimiento del sistema de gestión de operaciones que el equipo usa a diario: estados, evidencias, cronogramas, reportes semanales de facturación, generación automática de actas y tableros de rendimiento. Next.js, TypeScript, PostgreSQL y Python, desplegado en VPS propio. El sistema fue comercializado por la empresa a un cliente del sector.",
      "Integraciones con el CRM del cliente y automatización de la carga de datos.",
      "Administración y carga de datos para un proyecto de infraestructura ferroviaria.",
      "Soporte a instaladores y técnicos de mantenimiento en campo.",
    ],
    technologies: ["Gestión de operaciones", "Automatización de procesos", "Next.js", "TypeScript", "PostgreSQL", "Python"]
  }
]

const Experience = () => {
  return (
    <Section id="experience" title="Experiencia">
      <div className="border-t border-line">
        {experiences.map((exp) => (
          <article key={exp.id} className="py-10 md:py-14 grid md:grid-cols-12 gap-y-5 md:gap-x-12">
            <div className="md:col-span-4">
              <p className="font-mono text-sm text-faint mb-3">{exp.period}</p>
              <p className="text-lg font-medium">{exp.company}</p>
            </div>

            <div className="md:col-span-8">
              <h3 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight mb-4">
                {exp.role}
              </h3>
              <p className="text-lg leading-relaxed mb-6">{exp.summary}</p>

              <ul className="border-t border-line mb-6">
                {exp.highlights.map((item) => (
                  <li key={item} className="py-3 border-b border-line text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-mono text-sm text-muted">{exp.technologies.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Experience
