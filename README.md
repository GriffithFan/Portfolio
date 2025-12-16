# Portfolio - Ulises Lazarte

Portfolio profesional desarrollado con React, TypeScript, Vite y Tailwind CSS.

**Demo:** [portfolio-mocha-three-38.vercel.app](https://portfolio-mocha-three-38.vercel.app)

## Stack Tecnologico

- **React 18** + TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **EmailJS** - Formulario de contacto

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

El servidor se ejecuta en `http://localhost:3001`

## Build

```bash
npm run build
```

## Deploy

Proyecto configurado para Vercel con deploy automatico desde GitHub.

## Estructura

```
src/
├── components/     # Navbar, Footer, ScrollProgress, ThemeToggle, etc.
├── sections/       # Hero, About, Skills, Experience, Projects, Contact
├── context/        # ThemeContext
├── data/           # portfolio-data.ts
└── pages/          # NotFound
```

## Personalizacion

Edita `src/data/portfolio-data.ts` para actualizar informacion personal, proyectos y skills.

## Caracteristicas

- Dark/Light mode con persistencia
- Animaciones con Framer Motion
- Skeleton loaders
- Tooltips en skills
- Lazy loading de secciones
- SEO optimizado (Open Graph, Schema.org)
- Formulario de contacto funcional
- GitHub Activity widget
- Seccion de experiencia con timeline
- Responsive design

## Licencia

MIT
