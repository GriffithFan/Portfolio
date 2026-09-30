import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/portfolio-data'
import Section from '../components/Section'

const EMAILJS_SERVICE_ID = 'service_fekb7so'
const EMAILJS_TEMPLATE_ID = 'template_f6cokdq'
const EMAILJS_PUBLIC_KEY = 'LojOQ6mBHrJE-stTC'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fieldClass =
    'w-full bg-transparent border-0 border-b border-line px-0 py-3 text-ink placeholder:text-faint focus:outline-none focus:border-ink focus:ring-0 transition-colors'

  return (
    <Section id="contact" title="Contacto">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-lg leading-relaxed mb-8">
            Me interesa conversar sobre operaciones en campo, sistemas de gestión
            y automatización de procesos.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="font-serif text-2xl md:text-3xl tracking-tight break-all hover:text-accent transition-colors"
          >
            {personalInfo.email}
          </a>

          <ul className="mt-8 border-t border-line text-sm">
            <li className="border-b border-line">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-between py-3 hover:text-accent transition-colors">
                LinkedIn <span className="label">↗</span>
              </a>
            </li>
            <li className="border-b border-line">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex justify-between py-3 hover:text-accent transition-colors">
                GitHub <span className="label">@GriffithFan ↗</span>
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-6 md:col-start-7 space-y-8">
          <div>
            <label htmlFor="name" className="label block">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="label block">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="label block">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-ink text-paper px-5 py-3 text-sm font-medium hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === 'success' && <span className="text-muted">Mensaje enviado. Gracias.</span>}
              {status === 'error' && (
                <span className="text-accent">
                  No se pudo enviar. Escribime a {personalInfo.email}.
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}

export default Contact
