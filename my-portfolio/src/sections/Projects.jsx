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
    <section id="projects" className="max-w-6xl mx-auto my-24 px-6">
      <h2 className="text-4xl font-bold mb-12 text-accent-900 dark:text-white">Featured Projects</h2>
      {loading ? (<div className="py-24 text-xl text-center font-semibold text-accent-500 dark:text-accent-400">Loading GitHub projects…</div>) : (
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.22 } } }} className="grid md:grid-cols-2 gap-10">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(31, 41, 55, 0.15)' }}
              className="relative bg-white dark:bg-accent-900 rounded-xl shadow-md hover:shadow-xl border border-accent-200 dark:border-accent-700 flex flex-col gap-5 p-8 overflow-hidden group transition-all"
            >
              <div className="h-48 rounded-lg overflow-hidden flex items-center justify-center mb-2 relative bg-accent-100 dark:bg-accent-800">
                <img src={p.image} alt={p.name + ' screenshot'} className="object-cover w-full h-full opacity-80" />
              </div>
              <div className="mb-2 relative">
                <h3 className="text-2xl font-bold mb-2 text-accent-900 dark:text-white">{p.name}</h3>
                <p className="mb-4 text-accent-700 dark:text-accent-300 text-base leading-relaxed">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.techs.map(t => (
                    <span key={t} className="px-3 py-1 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-wide">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={p.html_url} target="_blank" rel="noopener" className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 underline">GitHub</a>
                  {p.homepage && <a href={p.homepage} target="_blank" rel="noopener" className="text-accent-700 dark:text-accent-300 font-semibold hover:text-accent-900 dark:hover:text-white underline">Live Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="mt-16 text-center">
        <a href="https://github.com/JayMiller08?tab=repositories" target="_blank" rel="noopener" className="inline-block text-base font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline">See all projects on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
