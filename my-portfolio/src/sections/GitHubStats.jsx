import { useEffect, useState } from 'react';
import { fetchProfile, fetchRepos } from '../api/github';

function getLangStats(repos) {
  const langMap = {};
  repos.forEach(repo => {
    if (repo.language) langMap[repo.language] = (langMap[repo.language] || 0) + 1;
  });
  // Sort languages descending by count
  return Object.entries(langMap).sort((a, b) => b[1] - a[1]);
}

const colors = {
  Java: 'bg-orange-500',
  JavaScript: 'bg-yellow-500',
  HTML: 'bg-pink-500',
  CSS: 'bg-primary-500',
  'C#': 'bg-accent-600',
  Python: 'bg-green-500',
  Other: 'bg-accent-400',
};

const GitHubStats = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [p, r] = await Promise.all([
        fetchProfile(),
        fetchRepos(),
      ]);
      setProfile(p);
      setRepos(r);
      setLoading(false);
    }
    load();
  }, []);

  const languages = getLangStats(repos);
  const starCount = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

  return (
    <section aria-label="GitHub stats" className="max-w-4xl mx-auto w-full px-6 bg-white dark:bg-accent-900 border border-accent-200 dark:border-accent-700 rounded-xl shadow-lg mb-16 py-8 relative z-10 text-center">
      <h3 className="font-bold text-2xl mb-8 text-accent-900 dark:text-white">GitHub Highlights</h3>
      {loading ? (<div className="py-10 animate-pulse font-semibold text-accent-500 dark:text-accent-400">Loading…</div>) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center w-full">
          <div className="flex flex-col gap-3 text-center">
            <div>
              <span className="block text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400">{profile.public_repos}</span>
              <span className="font-medium text-sm text-accent-700 dark:text-accent-300">Public Repos</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-bold text-accent-700 dark:text-accent-300">{starCount}</span>
              <span className="font-medium text-sm text-accent-700 dark:text-accent-300">Stars</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400">{profile.followers}</span>
              <span className="font-medium text-sm text-accent-700 dark:text-accent-300">Followers</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="font-semibold mb-3 text-left text-accent-900 dark:text-white">Most Used Languages</div>
            <div className="flex flex-col gap-2">
              {languages.map(([lang, count]) => (
                <div key={lang || 'Other'} className="flex items-center gap-2 w-full">
                  <span className={`block w-4 h-4 shrink-0 rounded-full ${colors[lang] || colors.Other}`} title={lang} />
                  <span className="text-sm font-semibold w-24 text-accent-900 dark:text-white">{lang}</span>
                  <div className="flex-1 h-3 bg-accent-200 dark:bg-accent-800 rounded-md overflow-hidden">
                    <div className={`h-3 rounded-l-full ${colors[lang] || colors.Other}`} style={{width: Math.max((count / Math.max(languages[0]?.[1] || 1, 1)) * 100, 8) + '%'}} />
                  </div>
                  <span className="text-xs ml-2 font-semibold text-accent-700 dark:text-accent-300">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GitHubStats;
