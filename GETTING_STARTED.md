# Guía de Inicio Rápido

## ¡Tu portfolio está listo!

El servidor de desarrollo está corriendo en: **http://localhost:3001/**

## Próximos pasos

### 1. Personaliza tu información

Edita el archivo [src/data/portfolio-data.ts](src/data/portfolio-data.ts):

```typescript
export const personalInfo = {
  name: "Tu Nombre Completo",           // ⬅️ Cambia esto
  role: "Desarrollador Full Stack Junior",
  bio: "Tu biografía personalizada...",  // ⬅️ Y esto
  email: "tu.email@ejemplo.com",        // ⬅️ Tu email real
  github: "https://github.com/tuusuario",     // ⬅️ Tu GitHub
  linkedin: "https://linkedin.com/in/tuusuario", // ⬅️ Tu LinkedIn
}
```

### 2. Actualiza tus proyectos

En el mismo archivo, modifica el array `projects`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Nombre de tu proyecto",
    description: "Descripción del proyecto...",
    image: "URL de la imagen",
    tags: ["React", "Node.js", "etc"],
    github: "https://github.com/tu/repo",
    demo: "https://tu-demo.vercel.app"
  },
  // Agrega más proyectos...
]
```

### 3. Ajusta tus skills

Puedes agregar, quitar o modificar skills en `skills` array:

```typescript
export const skills: Skill[] = [
  { name: "React", icon: "SiReact", category: "frontend" },
  // Agrega las tuyas...
]
```

## Personalización avanzada

### Cambiar colores

Edita [tailwind.config.js](tailwind.config.js) para cambiar el esquema de colores:

```javascript
colors: {
  primary: {
    500: '#tu-color-aquí',
    // ...
  }
}
```

### Agregar más secciones

Crea nuevos componentes en `src/sections/` y agrégalos a [src/App.tsx](src/App.tsx).

## Comandos disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Crear build de producción
npm run preview  # Preview del build
npm run lint     # Linter
```

## Deploy a producción

Sigue las instrucciones en [DEPLOYMENT.md](DEPLOYMENT.md) para publicar tu portfolio en Vercel.

### Deploy rápido con Vercel:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Tips

- **Imágenes**: Usa servicios como [Unsplash](https://unsplash.com) para imágenes temporales
- **Iconos**: Puedes cambiar los emojis por iconos de `react-icons/fi`
- **SEO**: Edita el `<title>` y `<meta>` tags en [index.html](index.html)
- **Favicon**: Reemplaza `/public/vite.svg` con tu propio favicon

## Solución de problemas

### El servidor no inicia
```bash
# Limpia node_modules y reinstala
rm -rf node_modules
npm install
```

### Errores de TypeScript
Los archivos ya están correctamente tipados, pero si ves errores, asegúrate de tener TypeScript actualizado.

### Puerto en uso
Si el puerto 3000 está ocupado, Vite automáticamente usa 3001 o el siguiente disponible.

## Recursos adicionales

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vercel Docs](https://vercel.com/docs)

---

**¿Necesitas ayuda?** Revisa la documentación o busca en GitHub issues similares.

¡Mucha suerte con tu portfolio! 🎉
