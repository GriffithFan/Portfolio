import * as SimpleIcons from 'react-icons/si'
import * as FeatherIcons from 'react-icons/fi'
import { skills } from '../data/portfolio-data'
import { IconType } from 'react-icons'

const Skills = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas & DevOps',
    ai: 'IA & Automatización',
  }

  // Dynamically resolve icon component from library with fallback
  const getIcon = (iconName: string): IconType => {
    if (iconName.startsWith('Si')) {
      return (SimpleIcons as any)[iconName] || SimpleIcons.SiReact
    }
    return (FeatherIcons as any)[iconName] || FeatherIcons.FiCode
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(categories).map(([key, label]) => {
            const categorySkills = skills.filter((skill) => skill.category === key)
            
            return (
              <div key={key}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-primary-400 mr-3">{'///'}</span>
                  {label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {categorySkills.map((skill, index) => {
                    const IconComponent = getIcon(skill.icon)
                    
                    return (
                      <div
                        key={index}
                        className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/30 group cursor-pointer"
                      >
                        <div className="text-center">
                          <div className="text-primary-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent size={40} />
                          </div>
                          <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-effect p-8 rounded-xl text-center border border-primary-500/20">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-primary-500 rounded mr-3"></div>
            <p className="text-xl font-semibold text-white">
              Enfoque en Clean Code & Best Practices
            </p>
            <div className="w-12 h-1 bg-primary-500 rounded ml-3"></div>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Combino sólidos fundamentos de programación con herramientas modernas de IA para 
            entregar soluciones escalables, bien documentadas y mantenibles. Comprometido con 
            el aprendizaje continuo y la excelencia técnica.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
