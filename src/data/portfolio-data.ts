export interface Project {
  id: number
  title: string
  problem: string
  description: string
  tags: string[]
  status?: string
  github?: string
  demo?: string
  note?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface PublicRepo {
  name: string
  description: string
  language: string
  url: string
}

export const personalInfo = {
  name: "Ulises Lazarte",
  role: "Coordinador de Operaciones Técnicas · Desarrollo de sistemas internos y automatización",
  tagline: "Redes · Next.js · TypeScript · Python · Técnico electromecánico",
  bio: "Coordino operaciones de técnicos de redes en campo y desarrollo los sistemas que las gestionan. Construí y mantengo en producción el sistema de gestión que usa el equipo a diario: cronogramas, evidencias, facturación semanal, actas automáticas y tableros. Next.js, TypeScript, PostgreSQL, Python. Técnico electromecánico: entiendo la instalación física, no solo el software que la registra.",
  email: "ulises@thnet.com.ar",
  github: "https://github.com/GriffithFan",
  linkedin: "https://www.linkedin.com/in/ulises-lazarte-82a9412ab/",
}

export const about: string[] = [
  "Trabajo en el punto donde se cruzan la operación en campo y el software: en THNET coordino el trabajo de cuadrillas de técnicos de redes y, en paralelo, construyo los sistemas con los que ese trabajo se gestiona.",
  "Empecé en mesa de ayuda dando soporte a instaladores y técnicos de mantenimiento de redes en campo. Ahí aprendí dónde se rompen los procesos de verdad: cronogramas que no llegan, evidencias que se pierden, trabajo hecho que nadie puede facturar porque no quedó registrado. Hoy coordino salidas, planificación y carga de cronogramas para proyectos de conectividad en escuelas de todo el país, y participo en la administración y carga de datos de un proyecto de infraestructura ferroviaria.",
  "Esa experiencia se volvió software. Desarrollé y mantengo en producción el sistema de gestión de operaciones que usa el equipo todos los días: reparto de trabajo por cuadrilla, seguimiento de estados, evidencias, cronogramas, reportes semanales de facturación, generación automática de actas y tableros de rendimiento. Está construido con Next.js, TypeScript, PostgreSQL y Python, corre en un VPS propio y lo sostengo yo: desde el modelo de datos y los permisos hasta el despliegue, los respaldos y el monitoreo. La empresa terminó comercializándolo a un cliente del sector.",
  "Alrededor de eso hay una constante: automatizar lo repetitivo. Scrapers, integraciones con CRM, generadores de documentos, aplicaciones de escritorio, apps móviles y scripts que le ahorran horas a gente que no debería estar copiando datos a mano.",
  "Mi formación es de técnico electromecánico, y eso se nota: entiendo la instalación física, no solo el sistema que la registra. Puedo leer un plano, diseñar una pieza y mandarla a imprimir en 3D, y después escribir el software que la administra.",
  "Actualmente me estoy formando en Odoo para llevar la gestión comercial al mismo lugar que ya llevé la operativa.",
]

export const skillGroups: SkillGroup[] = [
  {
    title: "Gestión de operaciones",
    items: [
      "Coordinación de cuadrillas en campo",
      "Planificación de salidas y cronogramas",
      "Administración y carga de datos de proyectos",
      "Soporte a instaladores y técnicos",
    ],
  },
  {
    title: "Automatización de procesos",
    items: [
      "Python",
      "Scraping (Selenium)",
      "Integración con CRM",
      "Generación automática de documentos",
      "SNMP",
      "Scripts CLI",
    ],
  },
  {
    title: "Desarrollo de sistemas",
    items: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "PWA", "Capacitor (Android)"],
  },
  {
    title: "Infraestructura",
    items: ["VPS Linux", "nginx", "PM2", "Respaldos y monitoreo", "Git", "Docker"],
  },
  {
    title: "Base técnica",
    items: ["Técnico electromecánico", "Lectura de planos", "Diseño e impresión 3D"],
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de gestión de operaciones de campo",
    status: "En producción, usado a diario por el equipo",
    problem: "Cronogramas que no llegan, evidencias que se pierden y trabajo hecho que no se puede facturar porque no quedó registrado.",
    description: "Sistema web para operaciones de campo en proyectos de conectividad escolar: reparto de trabajo por cuadrilla y seguimiento de estados sobre miles de sitios, evidencias, cronogramas y actas automáticas en Word, reportes semanales de facturación y tableros de rendimiento por técnico. Integración con el CRM del cliente, roles y permisos, auditoría de cambios, notificaciones push y PWA. Desarrollado dentro de THNET, que después lo comercializó a un cliente del sector.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Python", "Leaflet", "nginx", "PM2"],
    note: "Acceso de demostración a pedido.",
  },
  {
    id: 2,
    title: "Plataforma de operaciones en campo white-label",
    problem: "Un contratista con técnicos repartidos por el territorio necesita saber cada día quién hace qué, si el trabajo pasa la inspección y qué se puede facturar, y eso suele vivir en planillas sueltas y grupos de chat.",
    description: "Plataforma para contratistas que instalan y mantienen infraestructura de red: reparte el trabajo entre cuadrillas, sigue el estado de cada sitio, guarda la evidencia de lo hecho y liquida lo facturable. Incluye stock por número de serie, calendario, mapa de cuadrillas, métricas y mesa de ayuda interna. Pensada para revenderse bajo la marca del comprador: nombre, logos y colores salen de un único archivo de configuración, y los módulos opcionales se activan por variable de entorno. Tests unitarios y pruebas en navegador que recorren el flujo diario y verifican el control de acceso.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Leaflet", "Recharts", "nginx", "PM2"],
  },
  {
    id: 3,
    title: "Suite de automatización de infraestructura de red",
    problem: "El inventario de equipos, los relevamientos y los reportes de la red se mantenían a mano.",
    description: "Suite de automatización en Python para gestión de infraestructura de red y control de inventario de equipos en proyectos de conectividad educativa. Herramientas de línea de comandos para análisis WAN y gestión de dispositivos, integración con CRM para inventario y relevamientos, generación automática de reportes, consultas SNMP y scraping para tableros de seguimiento.",
    tags: ["Python", "APIs REST", "SNMP", "Selenium"],
  },
  {
    id: 4,
    title: "Generador automático de actas",
    problem: "Las actas de cada trabajo se completaban a mano, una por una.",
    description: "Genera las actas en Word a partir de los datos de cada caso. Procesa listas de forma secuencial, permite retomar una corrida interrumpida y deja un resumen por caso. Funciona integrado al sistema de gestión y también como ejecutable autónomo para Windows, con interfaz propia.",
    tags: ["Python", "Selenium", "python-docx", "tkinter", "PyInstaller"],
  },
  {
    id: 5,
    title: "App móvil de evidencias en campo",
    problem: "Ordenar y renombrar a mano las fotos de cada trabajo según el formulario que las pide.",
    description: "App Android para que el técnico cargue las evidencias desde el sitio. Genera un ZIP con las fotos y los PDF nombrados según cada apartado del formulario, listo para entregar.",
    tags: ["TypeScript", "Capacitor", "Android"],
  },
  {
    id: 6,
    title: "Tienda online de indumentaria",
    status: "En producción",
    problem: "Vender indumentaria online con catálogo, stock y pedidos administrados desde un panel propio.",
    description: "E-commerce de ropa de estilo alternativo japonés: catálogo, carrito, autenticación de usuarios y pasarela de pagos, con panel administrativo para inventario, productos y órdenes. Diseño mobile-first.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/GriffithFan/tienda_de_ropa_online",
    demo: "https://tienda-de-ropa-online.vercel.app",
  },
]

// Elegidos a mano: el código de los sistemas internos es privado.
export const publicRepos: PublicRepo[] = [
  {
    name: "tienda_de_ropa_online",
    description: "Tienda online de indumentaria, en producción",
    language: "TypeScript",
    url: "https://github.com/GriffithFan/tienda_de_ropa_online",
  },
  {
    name: "Portfolio",
    description: "Este sitio",
    language: "TypeScript",
    url: "https://github.com/GriffithFan/Portfolio",
  },
]
