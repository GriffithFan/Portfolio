import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio-data'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Greeting */}
        <div className="mb-6">
          <span className="text-primary-400 text-lg font-medium">Hola, soy</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient">{personalInfo.name}</span>
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 animate-slide-up">
          {personalInfo.role}
        </h2>

        {/* Bio */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 glass-effect text-gray-200 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            Contactar
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub size={28} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FiMail size={28} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center text-gray-500 hover:text-primary-400 transition-colors animate-float"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <FiArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

export default Hero
