import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
}

export function Skeleton({ 
  className = '', 
  variant = 'rectangular',
  width,
  height 
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-700/50'
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  }

  const style = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%')
  }

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="glass-effect rounded-xl p-6 space-y-4">
      <Skeleton height={200} className="rounded-lg" />
      <Skeleton variant="text" height={24} width="70%" />
      <Skeleton variant="text" height={16} />
      <Skeleton variant="text" height={16} width="80%" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rectangular" height={24} width={60} className="rounded-full" />
        <Skeleton variant="rectangular" height={24} width={80} className="rounded-full" />
        <Skeleton variant="rectangular" height={24} width={50} className="rounded-full" />
      </div>
    </div>
  )
}

export function SkeletonGitHubActivity() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-effect rounded-xl p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Skeleton variant="circular" width={24} height={24} />
        <Skeleton variant="text" width={120} height={20} />
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-3 rounded-lg bg-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Skeleton variant="circular" width={16} height={16} />
              <Skeleton variant="text" width="60%" height={16} />
            </div>
            <Skeleton variant="text" width="80%" height={12} />
            <div className="flex gap-4 mt-2">
              <Skeleton variant="text" width={50} height={10} />
              <Skeleton variant="text" width={80} height={10} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function SkeletonSkillCard() {
  return (
    <div className="glass-effect p-6 rounded-xl">
      <div className="text-center">
        <Skeleton variant="circular" width={40} height={40} className="mx-auto mb-3" />
        <Skeleton variant="text" height={14} width="60%" className="mx-auto" />
      </div>
    </div>
  )
}
