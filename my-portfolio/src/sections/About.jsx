const About = () => (
  <section id="about" className="max-w-4xl mx-auto my-24 px-6">
    <div className="rounded-2xl shadow-lg bg-white dark:bg-accent-900 border border-accent-200 dark:border-accent-700 px-8 md:px-12 py-16 flex flex-col items-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary-600 dark:bg-primary-700 shadow-md flex items-center justify-center overflow-hidden">
        <span className="text-4xl">🧑‍💻</span>
      </div>
      <h2 className="text-4xl font-bold mb-6 mt-8 text-accent-900 dark:text-white text-center">About Jay</h2>
      <p className="text-lg leading-relaxed mb-6 text-center text-accent-700 dark:text-accent-300 max-w-2xl">
        Hi, I'm <span className="font-semibold text-accent-900 dark:text-white">Jay Mthethwa</span> — a 19-year-old South African tech storyteller. My strongest language is <span className="font-semibold text-primary-700 dark:text-primary-400">Java</span>, but I'm on an exciting mission: transition into <span className="font-semibold text-primary-700 dark:text-primary-400">JavaScript</span> and <span className="font-semibold text-primary-700 dark:text-primary-400">React</span>, documenting my journey for young learners everywhere.
      </p>
      <ul className="list-none space-y-3 mb-10 mt-6 text-base text-accent-700 dark:text-accent-300 max-w-2xl">
        <li className="flex items-start gap-3"><span className="text-primary-600 text-xl flex-shrink-0">🎓</span><span>Currently studying for a <span className="font-semibold">Diploma in Computer Science (Extended)</span> at Tshwane University of Technology, eMalahleni campus</span></li>
        <li className="flex items-start gap-3"><span className="text-primary-600 text-xl flex-shrink-0">🧑‍🏫</span><span>Host and tutor Java basics — online 1h30 workshops, including ArrayLists and Functions</span></li>
        <li className="flex items-start gap-3"><span className="text-primary-600 text-xl flex-shrink-0">🎥</span><span>Content creator (TikTok/IG): I share Growth Motivation and Coding Challenges (Motivation Monday, Tip Tuesday, etc.)</span></li>
        <li className="flex items-start gap-3"><span className="text-primary-600 text-xl flex-shrink-0">💪</span><span>Committed to self-development and fitness as key to success</span></li>
        <li className="flex items-start gap-3"><span className="text-primary-600 text-xl flex-shrink-0">🌍</span><span>Driven to empower early career devs and teens in SA 🇿🇦</span></li>
      </ul>
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        <a href="/resume.pdf" download className="rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2.5 shadow-md transition-all">Download Resume</a>
        <a href="#newsletter" className="rounded-lg bg-accent-100 dark:bg-accent-800 text-accent-900 dark:text-accent-100 font-semibold px-6 py-2.5 shadow-sm hover:bg-accent-200 dark:hover:bg-accent-700 transition-all">Subscribe: The Alphas Club</a>
      </div>
    </div>
  </section>
);

export default About;
