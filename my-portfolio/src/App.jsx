import { useState } from 'react';
import './index.css';
import './App.css'; // Fixed incorrect import
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Media from './sections/Media';
import WorkTimeline from './sections/WorkTimeline';
import Contact from './sections/Contact';
import GitHubStats from './sections/GitHubStats';
import { motion } from 'framer-motion'; // Keep if you plan to use it

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work & Education' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-accent-950/95 backdrop-blur border-b border-border-muted shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Branding */}
        <a href="#hero" className="font-extrabold text-xl sm:text-2xl text-accent-900 dark:text-white tracking-wide">Jay Mthethwa</a>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.id}
              href={`#${link.id}`}
              className="inline-block px-4 py-2 font-medium text-accent-700 dark:text-accent-100 hover:text-accent transition relative group focus:outline-none focus-visible:ring-2 ring-offset-4 ring-accent"
            >
              <span>{link.label}</span>
              <span className="block h-0.5 w-0 group-hover:w-full bg-accent transition-all duration-200 mt-1"></span>
            </a>
          ))}
          <a href="#projects" className="ml-4 inline-block bg-accent text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-accent/90 transition font-semibold text-base">View Projects</a>
        </nav>
        {/* Mobile hamburger */}
        <button aria-label="Open Mobile Nav" className="flex md:hidden items-center p-3 rounded-lg hover:bg-accent-50 dark:hover:bg-accent-900 focus:outline-none focus-visible:ring-2 ring-accent" onClick={() => setMenuOpen(true)}>
          <svg className="w-7 h-7 text-accent-900 dark:text-accent-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16"/></svg>
        </button>
        {/* Mobilenav panel */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-end md:hidden" aria-modal="true" role="dialog">
            <div className="w-full bg-white dark:bg-accent-950 p-8 rounded-t-3xl shadow-2xl transition-transform animate-in slide-in-from-bottom-6 min-h-3/5 flex flex-col gap-6">
              <button aria-label="Close Nav" className="mb-4 self-end text-2xl p-2 rounded-md hover:bg-accent-100 dark:hover:bg-accent-900" onClick={() => setMenuOpen(false)}>&times;</button>
              {navLinks.map(link => (
                <a key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-4 py-4 text-xl font-medium rounded-lg text-accent-900 dark:text-accent-100 hover:bg-accent-50 dark:hover:bg-accent-900 transition"
                >{link.label}</a>
              ))}
              <a href="#projects" className="block mt-2 w-full bg-accent text-white px-4 py-3 rounded-lg text-xl font-semibold text-center shadow-md hover:shadow-lg hover:bg-accent/90 transition">View Projects</a>
            </div>
          </div>
        )}
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
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10 md:gap-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-left"
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold mb-7 leading-tight tracking-tight text-accent-900 dark:text-white">
          Jay Mthethwa  A <span className="text-accent">Java Dev</span>  A  A React Learner & Tech Storyteller
        </h1>
        <p className="text-lg md:text-2xl text-accent-700 dark:text-accent-300 mb-10 max-w-2xl leading-relaxed font-sans">
          Building, teaching, and documenting my transition into freelance software development—
          inspiring South African teens to code, grow, and lead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <a href="#projects" className="inline-block bg-accent text-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition font-semibold text-base">View Projects</a>
          <a href="https://www.tiktok.com/@jaymiller08" target="_blank" rel="noopener" className="inline-block border-2 border-accent text-accent px-5 py-3 rounded-xl shadow-sm bg-white dark:bg-accent-900 hover:bg-accent-50 dark:hover:bg-accent-800 transition font-semibold text-base">See TikTok</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="flex-1 w-full max-w-md"
      >
        <div className="bg-white dark:bg-accent-900 rounded-2xl shadow-md p-0 overflow-hidden flex flex-col items-center">
          <img
            src="/images/placeholder.jpg"
            alt="Hero visual or project screenshot"
            className="w-full h-56 object-cover rounded-t-2xl"
            loading="lazy"
          />
          <span className="text-base text-accent-700 dark:text-accent-300 font-medium py-4">Featured GitHub project coming soon</span>
        </div>
      </motion.div>
    </section>
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
