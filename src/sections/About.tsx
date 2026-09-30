import { about } from '../data/portfolio-data'
import Section from '../components/Section'
import GitHubActivity from '../components/GitHubActivity'

const highlights = [
  {
    title: 'Operaciones',
    description: 'Coordinación de cuadrillas, planificación de salidas y cronogramas para proyectos de conectividad en escuelas de todo el país.',
  },
  {
    title: 'Desarrollo',
    description: 'Sistema de gestión en producción, usado a diario por el equipo. Next.js, TypeScript, PostgreSQL y Python.',
  },
  {
    title: 'Formación',
    description: 'Técnico electromecánico. Ampliando hacia Odoo.',
  },
]

const About = () => {
  const [lead, ...rest] = about

  return (
    <Section id="about" title="Sobre mí">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-8 md:col-start-5">
          <p className="font-serif text-2xl md:text-3xl leading-snug tracking-tight mb-8">
            {lead}
          </p>
          <div className="space-y-5 text-muted leading-relaxed md:text-lg">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="md:col-span-12 grid sm:grid-cols-3 border-t border-line">
          {highlights.map((item) => (
            <div key={item.title} className="py-6 sm:pr-8 border-b sm:border-b-0 border-line last:border-0">
              <dt className="label mb-2">{item.title}</dt>
              <dd className="text-sm leading-relaxed">{item.description}</dd>
            </div>
          ))}
        </dl>

        <div className="md:col-span-8 md:col-start-5">
          <GitHubActivity />
        </div>
      </div>
    </Section>
  )
}

export default About
