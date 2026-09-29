import { FiTool, FiCode, FiBookOpen } from 'react-icons/fi'
import { about } from '../data/portfolio-data'
import GitHubActivity from '../components/GitHubActivity'

const About = () => {
  const highlights = [
    {
      icon: <FiTool size={28} />,
      title: 'Operaciones',
      description: 'Coordinación de cuadrillas, planificación de salidas y cronogramas para proyectos de conectividad en escuelas de todo el país.',
    },
    {
      icon: <FiCode size={28} />,
      title: 'Desarrollo',
      description: 'Sistema de gestión en producción, usado a diario por el equipo. Next.js, TypeScript, PostgreSQL y Python.',
    },
    {
      icon: <FiBookOpen size={28} />,
      title: 'Formación',
      description: 'Técnico electromecánico. Ampliando hacia Odoo.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Sobre Mí
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Operación en campo y software, del mismo lado
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-12">
          {/* Text Content */}
          <div className="space-y-5">
            {about.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights Cards */}
          <div className="space-y-4 md:space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-effect p-5 md:p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <GitHubActivity />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
