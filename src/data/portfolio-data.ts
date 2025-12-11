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
  name: "Ulises Lazarte",
  role: "Full Stack Developer · AI Integration",
  bio: "Desarrollador Full Stack con enfoque en arquitecturas modernas y soluciones impulsadas por IA. Experiencia construyendo aplicaciones escalables con React, Node.js y Python. Especializado en automatización, CLI tools y optimización de workflows de desarrollo.",
  email: "uisesl380@gmail.com",
  github: "https://github.com/GriffithFan",
  linkedin: "https://linkedin.com/in/ulises-lazarte",
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
    title: "Tienda de Ropa Online · E-commerce",
    description: "Plataforma e-commerce completa con TypeScript. Sistema de gestión de inventario, carrito de compras, procesamiento de pagos y panel administrativo. Desplegada en Vercel con CI/CD automatizado.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["TypeScript", "React", "Next.js", "Vercel", "E-commerce"],
    github: "https://github.com/GriffithFan/tienda_de_ropa_online",
    demo: "https://tienda-de-ropa-online.vercel.app"
  },
  {
    id: 2,
    title: "Portal Meraki · Sistema de Gestión",
    description: "Sistema integral de gestión empresarial con arquitectura frontend/backend. Proyecto vendido y desplegado en VPS. Manejo de dispositivos, autenticación segura, PWA con caché optimizado y dashboards interactivos en producción.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["JavaScript", "Node.js", "React", "PWA", "Express"],
    github: "https://github.com/GriffithFan/portal_meraki_final",
    demo: "https://portalmeraki.info"
  },
  {
    id: 3,
    title: "LoL Statistics · Analytics Platform",
    description: "Aplicación web para análisis de estadísticas de League of Legends. Integración con API oficial de Riot Games, procesamiento de datos en Python, visualizaciones interactivas y perfiles de jugadores detallados.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    tags: ["Python", "JavaScript", "API", "Data Analysis", "Gaming"],
    github: "https://github.com/GriffithFan/estadisticas_lol"
  },
  {
    id: 4,
    title: "Meraki Automation Suite · Network Tools",
    description: "Suite completa de scripts Python para automatización de redes Cisco Meraki. Gestión de dispositivos, análisis de velocidad WAN, recolección de relevamientos, consultas SNMP, web scraping de dashboards y reportes automatizados en Excel. Herramientas CLI portables.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Python", "Automation", "Network", "CLI", "Excel", "SNMP"],
    github: "https://github.com/GriffithFan"
  },
]

export const experience = {
  years: "3 años",
  activeMonths: "4 meses",
  projects: "3+",
  technologies: "15+"
}
