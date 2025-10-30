import { useEffect, useState } from 'react';
import { fetchRepos, fetchRepoReadme } from '../api/github';
import { motion } from 'framer-motion';

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
          try { readme = await fetchRepoReadme(repo.name); } catch (error) { console.error('Error fetching README:', error); }
        }
        return repo ? {
          ...repo,
          blurb: parseReadmeToBlurb(readme, repo),
          techs: repo.language ? [repo.language] : [],
          image: placeholderImage,
        } : null;
      }));
      setFeatured(mapped.filter(Boolean));
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto my-24 px-6">
      <h2 className="text-4xl font-bold mb-12 text-accent-900 dark:text-white">Featured Projects</h2>
      {loading ? (
        <div className="py-24 text-xl text-center font-semibold text-accent-500 dark:text-accent-400">Loading GitHub projects…</div>
      ) : (
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.22 } } }} className="grid md:grid-cols-2 gap-10">
          {featured.map((p) => (
            <motion.article
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(31, 41, 55, 0.13)' }}
              tabIndex={0}
              className="group bg-white dark:bg-accent-900 rounded-2xl shadow-sm hover:shadow-md border border-border-muted dark:border-accent-800 flex flex-col gap-4 p-6 transition-all focus:outline-none focus-visible:ring-2 ring-accent"
            >
              <div className="w-full aspect-video h-44 bg-accent-100 dark:bg-accent-800 rounded-lg overflow-hidden mb-2 flex items-center justify-center relative">
                <img src={p.image} alt={p.name + ' screenshot'} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold text-accent-900 dark:text-white mb-1">{p.name}</h3>
                <p className="text-sm text-accent-700 dark:text-accent-300 mb-3 line-clamp-2 font-normal">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.techs.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full border border-accent-300 dark:border-accent-700 bg-accent-50 dark:bg-accent-900 text-xs text-accent-700 dark:text-accent-300 font-medium">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a href={p.html_url} target="_blank" rel="noopener" className="text-accent font-semibold hover:underline focus:outline-none focus-visible:ring-2 ring-accent">View Code →</a>
                  {p.homepage && <a href={p.homepage} target="_blank" rel="noopener" className="text-accent-700 dark:text-accent-300 font-semibold hover:underline focus:outline-none focus-visible:ring-2 ring-accent">Live Demo →</a>}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
      <div className="mt-16 text-center">
        <a href="https://github.com/JayMiller08?tab=repositories" target="_blank" rel="noopener" className="inline-block text-base font-semibold text-accent hover:underline">See all projects on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
