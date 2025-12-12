import { FiCode, FiTrendingUp, FiAward } from 'react-icons/fi'
import { experience } from '../data/portfolio-data'
import GitHubActivity from '../components/GitHubActivity'

const About = () => {
  const highlights = [
    {
      icon: <FiCode size={32} />,
      title: 'Desarrollo',
      description: `${experience.activeMonths} de desarrollo activo · ${experience.years} de conocimientos en programación`,
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Proyectos',
      description: `${experience.projects} aplicaciones web en producción · Scripts de automatización y ETL`,
    },
    {
      icon: <FiAward size={32} />,
      title: 'Especialización',
      description: 'IA, Automatización, CLI, Full Stack Development',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Sobre Mí
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desarrollador junior apasionado por la tecnología y el aprendizaje continuo
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Desarrollador <span className="text-primary-400 font-semibold">Full Stack Junior</span> especializado en 
              la integración de <span className="text-primary-400 font-semibold">Inteligencia Artificial</span> en 
              soluciones web modernas. Experiencia práctica con React, Node.js, Python y herramientas de automatización.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Con <span className="text-primary-400 font-semibold">4 meses de desarrollo activo intensivo</span> y 
              3 años de fundamentos en programación, mi enfoque está en crear soluciones escalables y 
              bien documentadas. Capacidad demostrada para transformar requisitos complejos en código funcional.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Portfolio incluye <span className="text-primary-400 font-semibold">3 aplicaciones web en producción</span>, 
              múltiples <span className="text-primary-400 font-semibold">pipelines de automatización</span> y 
              scripts ETL. Comprometido con las mejores prácticas, código limpio y aprendizaje continuo.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: experience.years, label: 'Años en Tech' },
            { value: experience.activeMonths, label: 'Desarrollo Activo' },
            { value: experience.projects, label: 'Apps en Producción' },
            { value: experience.technologies, label: 'Tecnologías' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-lg text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Activity */}
        <div className="max-w-xl mx-auto">
          <GitHubActivity />
        </div>
      </div>
    </section>
  )
}

export default About
