import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FiGitCommit, FiStar, FiGitBranch } from 'react-icons/fi'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
}

const GITHUB_USERNAME = 'GriffithFan'

export default function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`
        )
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError('Unable to load GitHub activity')
        console.error('GitHub API error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-AR', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  const languageColors: Record<string, string> = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-400',
    Python: 'bg-green-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-purple-500',
    default: 'bg-gray-500'
  }

  if (loading) {
    return (
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <SiGithub className="w-6 h-6 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-300">GitHub Activity</h3>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-800 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <SiGithub className="w-6 h-6 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-300">GitHub Activity</h3>
        </div>
        <p className="text-gray-500 text-sm">{error}</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <SiGithub className="w-6 h-6 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-300">Recent Activity</h3>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 text-sm hover:underline"
        >
          View Profile
        </a>
      </div>

      <div className="space-y-4">
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            whileHover={{ x: 4 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <FiGitBranch className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="font-medium text-gray-200 truncate group-hover:text-primary-400 transition-colors">
                    {repo.name}
                  </span>
                </div>
                {repo.description && (
                  <p className="text-gray-400 text-sm mt-1 line-clamp-1">
                    {repo.description}
                  </p>
                )}
              </div>
              {repo.stargazers_count > 0 && (
                <div className="flex items-center gap-1 text-gray-400 text-sm ml-2">
                  <FiStar className="w-3.5 h-3.5" />
                  {repo.stargazers_count}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              {repo.language && (
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || languageColors.default}`} />
                  {repo.language}
                </div>
              )}
              <div className="flex items-center gap-1">
                <FiGitCommit className="w-3 h-3" />
                Updated {formatDate(repo.updated_at)}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
