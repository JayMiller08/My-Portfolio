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
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-accent-900/95 backdrop-blur-sm border-b border-accent-200 dark:border-accent-700 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        <span className="font-bold text-2xl tracking-tight text-primary-700 dark:text-primary-400">JayMthethwa.dev</span>
        <nav className="hidden md:flex gap-8 text-sm font-medium relative">
        {navLinks.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`pb-1 text-accent-700 dark:text-accent-300 hover:text-primary-600 dark:hover:text-primary-400 transition inline-block border-b-2 ${active===link.id?'border-primary-600 dark:border-primary-400':'border-transparent'}`}
            onClick={() => setActive(link.id)}
          >{link.label}</a>
        ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/resume.pdf" download className="rounded-lg px-5 py-2 text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md transition-all">Download Resume</a>
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
    <button aria-label="Toggle dark mode" onClick={toggleTheme} className="border border-accent-300 dark:border-accent-600 rounded-lg w-10 h-10 flex items-center justify-center bg-white dark:bg-accent-800 hover:bg-accent-50 dark:hover:bg-accent-700 shadow-sm transition-all">
      {dark ? (
        <span aria-hidden className="text-yellow-400 text-xl">🌙</span>
      ) : (
        <span aria-hidden className="text-primary-600 text-xl">☀️</span>
      )}
    </button>
  );
}

function Hero() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-24 md:py-32 px-6 flex flex-col items-center text-center bg-gradient-to-b from-primary-50/50 via-white to-white dark:from-accent-900 dark:via-accent-900 dark:to-accent-950">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-accent-900 dark:text-white">Jay Mthethwa</h1>
      <span className="inline-block font-semibold text-base md:text-lg mb-8 px-5 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">Java Developer • React Learner • Tech Storyteller</span>
      <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-accent-700 dark:text-accent-300">Building, teaching, and documenting my transition into freelance web and software development — inspiring South African teens to code, grow, and lead.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <a href="#projects" className="rounded-lg bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 font-semibold text-base shadow-md hover:shadow-lg transition-all">View Projects</a>
        <a href="https://www.tiktok.com/@jaymiller08" target="_blank" rel="noopener" className="rounded-lg border-2 border-primary-600 dark:border-primary-500 bg-white dark:bg-accent-800 text-primary-700 dark:text-primary-400 px-8 py-3 font-semibold text-base shadow-sm hover:bg-primary-50 dark:hover:bg-accent-700 transition-all">Watch my TikTok</a>
      </div>
    </motion.section>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-accent-950 text-accent-900 dark:text-accent-100 transition-colors">
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
