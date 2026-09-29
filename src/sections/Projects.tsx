import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio-data'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Proyectos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Qué problema resuelve cada uno, qué hace y con qué está hecho
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="glass-effect rounded-lg p-5 md:p-6 flex flex-col hover:shadow-xl hover:shadow-primary-500/20 transition-shadow duration-300"
            >
              {project.status && (
                <span className="self-start mb-3 px-2.5 py-0.5 text-xs font-medium bg-green-500/15 text-green-400 rounded-full border border-green-500/30">
                  {project.status}
                </span>
              )}

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-primary-400 font-medium mb-3">
                {project.problem}
              </p>

              <p className="text-gray-400 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex space-x-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors py-1"
                    >
                      <FiExternalLink size={20} />
                      <span className="text-sm">Ver en producción</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors py-1"
                    >
                      <FiGithub size={20} />
                      <span className="text-sm">Código</span>
                    </a>
                  )}
                </div>
              )}
              {project.note && (
                <p className="text-xs text-gray-500 italic border-t border-gray-700/50 pt-3">
                  {project.note}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
