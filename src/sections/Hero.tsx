import { personalInfo } from '../data/portfolio-data'

const Hero = () => {
  const [roleMain, roleSecondary] = personalInfo.role.split(' · ')

  return (
    <section id="top" className="max-w-page mx-auto px-5 md:px-8 pt-14 pb-16 md:pt-28 md:pb-24">
      <p className="label mb-8 md:mb-10">
        Buenos Aires · THNET, desde nov. 2024
      </p>

      <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight leading-[0.95] mb-8 md:mb-10">
        {personalInfo.name}
      </h1>

      <p className="font-serif text-2xl md:text-4xl leading-snug tracking-tight max-w-4xl mb-8">
        {roleMain}
        <span className="block italic text-muted">{roleSecondary}</span>
      </p>

      <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-6">
        {personalInfo.bio}
      </p>

      <p className="font-mono text-xs md:text-sm text-faint mb-10">
        {personalInfo.tagline}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
        <a
          href="/CV - Ulises Lazarte.pdf"
          download
          className="inline-flex items-center justify-center gap-3 bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
        >
          Descargar CV
          <span className="font-mono text-xs opacity-70">PDF</span>
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a href={`mailto:${personalInfo.email}`} className="link">{personalInfo.email}</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn ↗</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
