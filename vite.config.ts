import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'vendor-react': ['react', 'react-dom'],
          // Animation library
          'vendor-motion': ['framer-motion'],
          // Icons library (large)
          'vendor-icons': ['react-icons'],
          // Email service
          'vendor-email': ['@emailjs/browser']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
