import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiPrisma, SiPandas,
  SiGit, SiGithub, SiDocker, SiVercel, SiOpenai
} from 'react-icons/si'
import { FiTerminal, FiZap, FiCode } from 'react-icons/fi'
import { VscVscode } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio-data'
import { IconType } from 'react-icons'
import Tooltip from '../components/Tooltip'

// Icon map for tree-shaking optimization
const iconMap: Record<string, IconType> = {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiPrisma, SiPandas,
  SiGit, SiGithub, SiDocker, SiVercel, SiOpenai,
  SiVisualstudiocode: VscVscode,
  FiTerminal, FiZap, FiCode
}

const Skills = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Herramientas & DevOps',
    ai: 'IA & Automatización',
  }

  // Get icon from pre-imported map for optimal bundle size
  const getIcon = (iconName: string): IconType => {
    return iconMap[iconName] || SiReact
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(categories).map(([key, label]) => {
            const categorySkills = skills.filter((skill) => skill.category === key)
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="text-primary-400 mr-3">{'///'}</span>
                  {label}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
                >
                  {categorySkills.map((skill, index) => {
                    const IconComponent = getIcon(skill.icon)
                    
                    return (
                      <Tooltip key={index} content={skill.description || skill.name} position="top">
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ y: -8, scale: 1.05 }}
                          className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 hover:shadow-lg hover:shadow-primary-500/30 group cursor-pointer"
                        >
                          <div className="text-center">
                            <div className="text-primary-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent size={40} />
                            </div>
                            <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                          </div>
                        </motion.div>
                      </Tooltip>
                    )
                  })}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 glass-effect p-8 rounded-xl text-center border border-primary-500/20"
        >
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
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
