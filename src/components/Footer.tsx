import { personalInfo } from '../data/portfolio-data'

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="max-w-page mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between label">
        <span>© {new Date().getFullYear()} {personalInfo.name} · Buenos Aires</span>
        <a href="#top" className="hover:text-ink transition-colors">Volver arriba ↑</a>
      </div>
    </footer>
  )
}

export default Footer
