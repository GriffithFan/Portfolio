import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { personalInfo } from '../data/portfolio-data'

const navItems = [
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-paper border-b transition-colors ${
        scrolled || isOpen ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav className="max-w-page mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg leading-none hover:text-accent transition-colors">
          {personalInfo.name}
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-muted">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink transition-colors">
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-mono text-xs text-muted px-2 py-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-line">
          <ul className="max-w-page mx-auto px-5 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 border-b border-line last:border-0 text-ink"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
