import { FiHome, FiArrowLeft } from 'react-icons/fi'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-9xl font-bold text-gradient mb-4"
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Página no encontrada
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          La página que buscas no existe o ha sido movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <FiHome size={20} />
            Ir al inicio
          </a>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 glass-effect text-gray-200 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <FiArrowLeft size={20} />
            Volver atrás
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
