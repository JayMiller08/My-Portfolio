import { useState } from 'react';
import './index.css';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Media from './sections/Media';
import WorkTimeline from './sections/WorkTimeline';
import Contact from './sections/Contact';
import GitHubStats from './sections/GitHubStats';
import { motion } from 'framer-motion';
import './App.css';

function Header() {
  // Determine active section for nav underline
  const [active, setActive] = useState('about');
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work & Education' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-transparent shadow-none transition-all">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4 ">
        <span className="font-black text-3xl tracking-tighter text-blue-700 dark:text-blue-400">JayMthethwa.dev</span>
        <nav className="hidden md:flex gap-6 text-lg font-semibold relative">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`pb-1 hover:text-blue-500 transition inline-block border-b-2 ${active===link.id?'border-blue-500':'border-transparent'}`}
            onClick={() => setActive(link.id)}
          >{link.label}</a>
        ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="/resume.pdf" download className="rounded-xl px-4 py-2 font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md hover:shadow-lg transition">Download Resume</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const toggleTheme = () => {
    const d = !dark;
    setDark(d);
    if(typeof window !== 'undefined') {
      window.localStorage.setItem('theme', d ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', d);
    }
  };
  return (
    <button aria-label="Toggle dark mode" onClick={toggleTheme} className="border-2 border-gray-300 dark:border-gray-700 rounded-full w-11 h-11 flex items-center justify-center bg-white/80 dark:bg-gray-900/70 shadow">
      {dark ? (
        <span aria-hidden className="text-yellow-400 text-2xl">🌙</span>
      ) : (
        <span aria-hidden className="text-blue-600 text-2xl">☀️</span>
      )}
    </button>
  );
}

function Hero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 md:py-36 px-4 flex flex-col items-center text-center bg-gradient-to-b from-blue-50/80 via-white to-transparent dark:from-gray-900 dark:via-gray-950 dark:to-transparent">
      <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight bg-gradient-to-r from-blue-700 via-blue-400 to-fuchsia-500 text-transparent bg-clip-text">Jay Mthethwa</h1>
      <span className="inline-block font-bold text-lg md:text-2xl mb-8 px-3 py-1 rounded-xl bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-200">Java Dev • React Learner • Tech Storyteller</span>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium text-gray-800 dark:text-gray-200">Building, teaching, and documenting my transition into freelance web/software development — inspiring SA teens to code, grow, and lead.</p>
      <div className="flex gap-5 justify-center mb-10">
        <a href="#projects" className="rounded-2xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white px-8 py-3 font-bold text-lg shadow-lg hover:from-blue-600 hover:to-fuchsia-600 transition">View Projects</a>
        <a href="https://www.tiktok.com/@jaymiller08" target="_blank" rel="noopener" className="rounded-2xl border border-blue-400 dark:border-blue-600 bg-white/50 dark:bg-blue-900/30 text-blue-700 dark:text-white px-8 py-3 font-semibold text-lg shadow hover:bg-blue-50 dark:hover:bg-blue-800/70 transition">Watch my TikTok</a>
      </div>
      <div className="flex flex-col gap-2 mt-8 opacity-80 text-base">
        <span>GitHub stats coming soon…</span>
      </div>
    </motion.section>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-blue-50 via-white to-fuchsia-100 dark:from-gray-950 dark:via-black dark:to-blue-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />
      <main>
        <Hero />
        <GitHubStats />
        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}><About /></motion.div>
        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }}><Projects /></motion.div>
        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .2 }}><Skills /></motion.div>
        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .3 }}><Media /></motion.div>
        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .4 }}><WorkTimeline /></motion.div>
        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .5 }}><Contact /></motion.div>
      </main>
    </div>
  );
}

export default App;
