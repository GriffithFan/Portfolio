import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  aside?: string
  children: ReactNode
}

// Encabezado común: título a la izquierda y contenido en la columna de lectura
export default function Section({ id, title, aside, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line">
      <div className="max-w-page mx-auto px-5 md:px-8 py-16 md:py-24">
        <header className="flex items-baseline justify-between gap-4 mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">{title}</h2>
          {aside && <span className="label">{aside}</span>}
        </header>
        {children}
      </div>
    </section>
  )
}
