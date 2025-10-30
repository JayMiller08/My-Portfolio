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
  Java: 'bg-orange-400',
  JavaScript: 'bg-yellow-300',
  HTML: 'bg-pink-400',
  CSS: 'bg-blue-400',
  'C#': 'bg-indigo-500',
  Python: 'bg-green-500',
  Other: 'bg-gray-300',
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
    <section aria-label="GitHub stats" className="max-w-2xl mx-auto w-full px-4 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg mb-12 py-7 backdrop-blur relative z-10 text-center">
      <h3 className="font-extrabold text-2xl mb-8 text-blue-700 dark:text-blue-200 tracking-tight">GitHub Highlights</h3>
      {loading ? (<div className="py-10 animate-pulse font-bold text-blue-500">Loading…</div>) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center w-full">
          <div className="flex flex-col gap-3 text-center">
            <div>
              <span className="block text-4xl md:text-5xl font-black text-blue-700 dark:text-blue-300">{profile.public_repos}</span>
              <span className="font-medium text-base">Public Repos</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-black text-fuchsia-500">{starCount}</span>
              <span className="font-medium text-base">Stars</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-black text-green-500">{profile.followers}</span>
              <span className="font-medium text-base">Followers</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="font-semibold mb-2 text-left text-gray-800 dark:text-gray-100">Most Used Languages</div>
            <div className="flex flex-col gap-2">
              {languages.map(([lang, count]) => (
                <div key={lang || 'Other'} className="flex items-center gap-2 w-full">
                  <span className={`block w-4 h-4 shrink-0 rounded-full ${colors[lang] || colors.Other}`} title={lang} />
                  <span className="text-base font-bold w-24">{lang}</span>
                  <div className="flex-1 h-3 bg-blue-100 dark:bg-blue-950 rounded-md overflow-hidden">
                    <div className={`h-3 rounded-l-full ${colors[lang] || colors.Other}`} style={{width: Math.max((count / Math.max(languages[0]?.[1] || 1, 1)) * 100, 8) + '%'}} />
                  </div>
                  <span className="text-xs ml-2 font-semibold">{count}</span>
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
