import { SiGithub } from 'react-icons/si'
import { FiGitBranch } from 'react-icons/fi'
import { personalInfo, publicRepos } from '../data/portfolio-data'

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  default: 'bg-gray-500'
}

export default function GitHubActivity() {
  return (
    <div className="glass-effect rounded-xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <SiGithub className="w-6 h-6 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-300">Código público</h3>
        </div>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 text-sm hover:underline"
        >
          Ver perfil
        </a>
      </div>

      <div className="space-y-3">
        {publicRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <FiGitBranch className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <span className="font-medium text-gray-200 truncate group-hover:text-primary-400 transition-colors">
                {repo.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
              <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || languageColors.default}`} />
              {repo.language}
            </div>
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        El código de los sistemas internos es privado.
      </p>
    </div>
  )
}
