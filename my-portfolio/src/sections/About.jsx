const About = () => (
  <section id="about" className="max-w-3xl mx-auto my-24 px-4 ">
    <div className="rounded-3xl shadow-xl bg-white/90 dark:bg-gray-900/70 backdrop-blur-lg px-8 py-12 flex flex-col items-center relative border dark:border-gray-700">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-fuchsia-500 shadow-lg flex items-center justify-center overflow-hidden">
        {/* Placeholder avatar style circle */}
        <span className="text-5xl">🧑‍💻</span>
      </div>
      <h2 className="text-4xl font-black mb-2 mt-10 text-blue-700 dark:text-blue-400 relative after:block after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-fuchsia-400 after:rounded-full after:mx-auto after:mt-1">About Jay</h2>
      <p className="text-xl font-medium mb-5 mt-3 text-center text-gray-700 dark:text-gray-100">
        Hi, I’m <span className="font-semibold">Jay Mthethwa</span> — a 19-year-old South African tech storyteller. My strongest language is <span className="font-semibold text-blue-700 dark:text-blue-400">Java</span>, but I’m on an exciting mission: transition into <span className="font-semibold text-yellow-600">JavaScript</span> & <span className="font-semibold text-cyan-500">React</span>, documenting my journey for young learners everywhere.
      </p>
      <ul className="list-none space-y-4 mb-8 mt-4 text-base">
        <li className="flex items-center gap-2"><span className="text-blue-500">🎓</span><span>Currently studying for a <span className="font-semibold">Diploma in Computer Science (Extended)</span> at Tshwane University of Technology, eMalahleni campus</span></li>
        <li className="flex items-center gap-2"><span className="text-purple-500">🧑‍🏫</span><span>Host & tutor Java basics — online 1h30 workshops, including ArrayLists & Functions</span></li>
        <li className="flex items-center gap-2"><span className="text-pink-500">🎥</span><span>Content creator (TikTok/IG): I share Growth Motivation + Coding Challenges (Motivation Monday, Tip Tuesday, etc!)</span></li>
        <li className="flex items-center gap-2"><span className="text-green-500">💪</span><span>Committed to self-development and fitness as key to success</span></li>
        <li className="flex items-center gap-2"><span className="text-fuchsia-400">🌍</span><span>Driven to empower early career devs & teens in SA 🇿🇦</span></li>
      </ul>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <a href="/resume.pdf" download className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-400 text-white font-bold px-6 py-2 shadow transition hover:bg-blue-700 hover:to-fuchsia-500">Download Resume</a>
        <a href="#newsletter" className="rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-200 font-bold px-6 py-2 shadow transition hover:bg-blue-100 hover:dark:bg-fuchsia-900">Subscribe: The Alphas Club</a>
      </div>
    </div>
  </section>
);

export default About;
