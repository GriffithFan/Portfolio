# Portfolio Online - Guía de Deployment

## Deploy en Vercel (Recomendado)

### Opción 1: Deploy desde GitHub (Más fácil)

1. **Subir el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio online"
   git branch -M main
   git remote add origin https://github.com/tuusuario/portfolio-online.git
   git push -u origin main
   ```

2. **Deploy en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración de Vite
   - Haz clic en "Deploy"

### Opción 2: Deploy directo con Vercel CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Deploy a producción:**
   ```bash
   vercel --prod
   ```

## Antes de hacer deploy

1. **Personaliza tu información:**
   - Edita `src/data/portfolio-data.ts`
   - Actualiza tu nombre, email, links de GitHub/LinkedIn
   - Agrega tus proyectos reales

2. **Actualiza las imágenes:**
   - Reemplaza las URLs de ejemplo de los proyectos
   - Agrega tus propias capturas de pantalla

3. **Configura el dominio personalizado (opcional):**
   - En el dashboard de Vercel, ve a Settings > Domains
   - Agrega tu dominio personalizado

## Variables de entorno

Si necesitas agregar variables de entorno (por ejemplo, para un servicio de email):

1. Crea un archivo `.env.local` (ya está en .gitignore)
2. Agrega tus variables:
   ```
   VITE_EMAIL_SERVICE_ID=tu_id
   VITE_EMAIL_TEMPLATE_ID=tu_template
   ```
3. En Vercel: Settings > Environment Variables > Agregar cada variable

## Actualizaciones automáticas

Una vez conectado a GitHub:
- Cada push a `main` genera un deploy automático a producción
- Cada PR genera un preview deployment único

## Otros servicios de hosting

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a netlify.com/drop
```

### GitHub Pages
1. Instala `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Agrega a `package.json`:
   ```json
   "homepage": "https://tuusuario.github.io/portfolio-online",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
