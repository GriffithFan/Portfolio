import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

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
    period: "Nov 2024 - Presente",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Experiencia</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Operación en campo y desarrollo interno
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-transparent hidden md:block" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-0 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-900 hidden md:block" />

              <div className="glass-effect rounded-xl p-5 md:p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-100 flex items-start gap-2">
                      <FiBriefcase className="text-primary-400 mt-1 flex-shrink-0" />
                      {exp.role}
                    </h3>
                    <p className="text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                    <FiCalendar />
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{exp.summary}</p>

                <ul className="space-y-2 mb-5 list-disc pl-5 marker:text-primary-400">
                  {exp.highlights.map((item) => (
                    <li key={item} className="text-gray-400 leading-relaxed">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
