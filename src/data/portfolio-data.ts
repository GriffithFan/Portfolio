export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools' | 'ai'
}

export const personalInfo = {
  name: "Tu Nombre",
  role: "Full Stack Developer · AI Integration",
  bio: "Desarrollador Full Stack con enfoque en arquitecturas modernas y soluciones impulsadas por IA. Experiencia construyendo aplicaciones escalables con React, Node.js y Python. Especializado en automatización, CLI tools y optimización de workflows de desarrollo.",
  email: "tu.email@ejemplo.com",
  github: "https://github.com/tuusuario",
  linkedin: "https://linkedin.com/in/tuusuario",
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "SiReact", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend" },
  { name: "JavaScript", icon: "SiJavascript", category: "frontend" },
  { name: "HTML5", icon: "SiHtml5", category: "frontend" },
  { name: "CSS3", icon: "SiCss3", category: "frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "backend" },
  { name: "Express", icon: "SiExpress", category: "backend" },
  { name: "Python", icon: "SiPython", category: "backend" },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "backend" },
  { name: "Prisma", icon: "SiPrisma", category: "backend" },
  { name: "Pandas", icon: "SiPandas", category: "backend" },
  
  // Tools & DevOps
  { name: "Git", icon: "SiGit", category: "tools" },
  { name: "GitHub", icon: "SiGithub", category: "tools" },
  { name: "VS Code", icon: "SiVisualstudiocode", category: "tools" },
  { name: "Docker", icon: "SiDocker", category: "tools" },
  { name: "Vercel", icon: "SiVercel", category: "tools" },
  
  // AI & Automation
  { name: "OpenAI", icon: "SiOpenai", category: "ai" },
  { name: "Terminal", icon: "FiTerminal", category: "ai" },
  { name: "Automatización", icon: "FiZap", category: "ai" },
  { name: "Web Scraping", icon: "FiCode", category: "ai" },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Platform · Full Stack",
    description: "Aplicación web escalable con arquitectura cliente-servidor. Autenticación JWT, API RESTful, migraciones de base de datos con Prisma y UI responsiva con Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Analytics Dashboard · Data Viz",
    description: "Dashboard de visualización de datos en tiempo real con ETL pipeline. Procesamiento de datasets complejos usando Pandas, análisis estadístico y gráficos interactivos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Python", "Pandas", "React", "Data Analysis", "API"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Automation Suite · CLI Tools",
    description: "Suite de herramientas CLI para automatización de workflows. Web scraping con manejo de errores, procesamiento batch de datos y scripts de deployment automatizado.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    tags: ["Python", "Node.js", "CLI", "Automation", "Docker"],
    github: "#"
  },
]

export const experience = {
  years: "3 años",
  activeMonths: "4 meses",
  projects: "3+",
  technologies: "15+"
}
