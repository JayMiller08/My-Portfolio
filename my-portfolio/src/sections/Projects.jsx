import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchRepos, fetchRepoReadme } from '../api/github';

const featuredSlugs = [
  { slug: 'smart-farm01', display: 'Smart Farm' },
  { slug: 'ATM-Simulator', display: 'ATM Simulator' }
];

function parseReadmeToBlurb(readme, repo) {
  if (!readme) return 'No README available. Check the repo for details!';
  const firstPara = readme.split(/\n\n|\r\n\r\n/)[0].replace(/^#?\s?(.+)/, '$1').trim();
  return firstPara.length > 20 ? firstPara : `See full README in repo: ${repo.html_url}`;
}

const placeholderImage = '/images/placeholder.jpg';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const allRepos = await fetchRepos();
      const mapped = await Promise.all(featuredSlugs.map(async (item) => {
        const repo = allRepos.find(r => r.name === item.slug);
        let readme = '';
        if (repo) {
          try { readme = await fetchRepoReadme(repo.name); } catch {}
        }
        return repo ? {
          ...repo,
          blurb: parseReadmeToBlurb(readme, repo),
          techs: repo.language ? [repo.language] : [],
          image: placeholderImage,
        } : null;
      }));
      setFeatured(mapped.filter(Boolean));
      setRepos(allRepos);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section id="projects" className="max-w-5xl mx-auto my-24 px-4">
      <h2 className="text-4xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-600 to-blue-400 dark:from-blue-400 dark:via-fuchsia-400 dark:to-blue-700">Featured Projects</h2>
      {loading ? (<div className="py-24 text-2xl text-center font-bold text-blue-700/60 dark:text-blue-300/70">Loading GitHub projects…</div>) : (
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.22 } } }} className="grid md:grid-cols-2 gap-10">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 41, 55, 0.15)' }}
              className="relative bg-gradient-to-tr from-blue-100/70 via-white to-fuchsia-50 dark:from-gray-800/80 dark:via-gray-900 dark:to-blue-950 rounded-3xl shadow-xl flex flex-col gap-5 p-8 border-none backdrop-blur-[2px] overflow-hidden group transition"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-200/50 via-transparent to-fuchsia-200/40 dark:from-blue-800/30 dark:to-blue-950/70 pointer-events-none blur-sm opacity-90 group-hover:opacity-0 transition" />
              <div className="h-40 rounded-2xl overflow-hidden flex items-center justify-center mb-2 relative z-10">
                <img src={p.image} alt={p.name + ' screenshot'} className="object-cover w-full h-full mix-blend-multiply opacity-70" />
              </div>
              <div className="mb-2 z-10 relative">
                <h3 className="text-2xl font-black mb-1 text-blue-800 dark:text-blue-100 group-hover:text-fuchsia-600 transition">{p.name}</h3>
                <p className="mb-3 text-gray-700/90 dark:text-gray-200/90 text-base font-medium">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.techs.map(t => (
                    <span key={t} className="px-3 py-1 rounded-xl bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 text-xs font-bold uppercase tracking-wide shadow-sm">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={p.html_url} target="_blank" rel="noopener" className="underline text-blue-600 dark:text-blue-200 font-bold hover:text-fuchsia-600">GitHub</a>
                  {p.homepage && <a href={p.homepage} target="_blank" rel="noopener" className="underline text-green-700 font-bold hover:text-green-500">Live Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="mt-16 text-center">
        <a href="https://github.com/JayMiller08?tab=repositories" target="_blank" rel="noopener" className="inline-block text-lg font-bold text-blue-700 dark:text-blue-300 underline hover:text-fuchsia-600">See all projects on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
