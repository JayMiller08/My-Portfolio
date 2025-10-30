const contentSchedule = [
  { day: "Monday", label: "Motivation Monday", icon: "🌟", desc: "Stories and tips to kickstart your week." },
  { day: "Tuesday", label: "Tip Tuesday", icon: "💡", desc: "Digestible coding and study tips." },
  { day: "Wednesday", label: "Code Challenge Wednesday", icon: "🏆", desc: "Fun coding problems and walkthroughs." },
  { day: "Friday", label: "Growth Friday", icon: "📈", desc: "Self-improvement and wins of the week." },
];

const Media = () => (
  <section id="media" className="max-w-5xl mx-auto my-24 px-6">
    <h2 className="text-4xl font-bold mb-12 text-accent-900 dark:text-white">Media & Content</h2>
    <div className="mb-10">
      <p className="mb-8 text-center text-lg text-accent-700 dark:text-accent-300">On TikTok and Instagram, I document my coding and self-improvement journey for young South Africans. My schedule:</p>
      <div className="grid md:grid-cols-2 gap-6">
        {contentSchedule.map(item => (
          <div key={item.day} className="flex items-center gap-4 rounded-lg px-6 py-4 hover:shadow-md transition-all bg-white dark:bg-accent-900 border border-accent-200 dark:border-accent-700 shadow-md">
            <span className="text-3xl md:text-4xl ">{item.icon}</span>
            <div>
              <span className="block font-semibold text-base text-accent-900 dark:text-white">{item.label}</span>
              <span className="block text-accent-700 dark:text-accent-300 text-sm">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-wrap gap-8 items-center justify-center mb-12">
      <a href="https://tiktok.com/@jaymiller08" target="_blank" rel="noopener" aria-label="Jay on TikTok" className="bg-white dark:bg-accent-900 rounded-lg shadow-md p-3 hover:shadow-xl border border-accent-200 dark:border-accent-700 transition-all">
        <img src="/images/tiktok-thumb.jpg" alt="Jay's TikTok" className="w-36 h-36 rounded-md object-cover" />
        <div className="text-center mt-3 font-semibold text-accent-900 dark:text-white text-base">TikTok</div>
      </a>
      <a href="https://instagram.com/jaymiller08" target="_blank" rel="noopener" aria-label="Jay on Instagram" className="bg-white/90 dark:bg-gray-900/60 rounded-xl shadow-md p-2 hover:ring-4 ring-fuchsia-200 dark:ring-blue-800 transition border-0">
        <img src="/images/ig-thumb.jpg" alt="Jay's Instagram" className="w-36 h-36 rounded-md object-cover" />
        <div className="text-center mt-3 font-semibold text-accent-900 dark:text-white text-base">Instagram</div>
      </a>
    </div>
    <div className="flex flex-col items-center gap-3 mb-2 mt-10">
      <span className="font-semibold text-lg text-accent-900 dark:text-white">Don’t miss an update!</span>
      <a href="#newsletter" className="rounded-lg px-8 py-3 font-semibold text-base bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transition-all">Subscribe to The Alphas Club</a>
    </div>
  </section>
);

export default Media;
