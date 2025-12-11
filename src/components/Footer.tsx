import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio-data'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950/50 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <span>© {currentYear} {personalInfo.name}.</span>
            <span className="flex items-center">
              Hecho con <FiHeart className="mx-1 text-red-500" size={16} /> y React
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
