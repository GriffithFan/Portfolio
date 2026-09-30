import { personalInfo, publicRepos } from '../data/portfolio-data'

export default function GitHubActivity() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="label">Código público</h3>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="label hover:text-ink transition-colors">
          github.com/GriffithFan ↗
        </a>
      </div>

      <ul className="border-t border-line">
        {publicRepos.map((repo) => (
          <li key={repo.name} className="border-b border-line">
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 py-3"
            >
              <span className="min-w-0">
                <span className="font-mono text-sm group-hover:text-accent transition-colors">{repo.name}</span>
                <span className="block sm:inline sm:ml-3 text-sm text-muted">{repo.description}</span>
              </span>
              <span className="label shrink-0">{repo.language}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="label mt-3">El código de los sistemas internos es privado.</p>
    </div>
  )
}
