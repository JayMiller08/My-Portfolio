const contentSchedule = [
  { day: "Monday", label: "Motivation Monday", icon: "🌟", desc: "Stories and tips to kickstart your week." },
  { day: "Tuesday", label: "Tip Tuesday", icon: "💡", desc: "Digestible coding and study tips." },
  { day: "Wednesday", label: "Code Challenge Wednesday", icon: "🏆", desc: "Fun coding problems and walkthroughs." },
  { day: "Friday", label: "Growth Friday", icon: "📈", desc: "Self-improvement and wins of the week." },
];

const Media = () => (
  <section id="media" className="max-w-4xl mx-auto my-24 px-4">
    <h2 className="text-4xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-600 to-blue-400 dark:from-blue-300 dark:via-fuchsia-300 dark:to-blue-700">Media & Content</h2>
    <div className="mb-10 text-lg">
      <p className="mb-6 text-center">On TikTok and Instagram, I document my coding and self-improvement journey for young South Africans. My schedule:</p>
      <div className="grid md:grid-cols-2 gap-6">
        {contentSchedule.map(item => (
          <div key={item.day} className="flex items-center gap-3 rounded-2xl px-5 py-4 bg-gradient-to-br from-fuchsia-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 shadow-md">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-blue-500 to-fuchsia-500 text-transparent bg-clip-text">{item.icon}</span>
            <div>
              <span className="block font-bold text-lg text-blue-700 dark:text-blue-200">{item.label}</span>
              <span className="block text-gray-700 dark:text-gray-200 text-base">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-wrap gap-8 items-center justify-center mb-12">
      <a href="https://tiktok.com/@jaymiller08" target="_blank" rel="noopener" aria-label="Jay on TikTok" className="bg-white/90 dark:bg-gray-900/60 rounded-xl shadow-md p-2 hover:ring-4 ring-blue-200 dark:ring-fuchsia-800 transition border-0">
        <img src="/images/tiktok-thumb.jpg" alt="Jay's TikTok" className="w-36 h-36 rounded-lg object-cover shadow border-0" />
        <div className="text-center mt-3 font-bold text-blue-700 dark:text-blue-200 text-lg">TikTok</div>
      </a>
      <a href="https://instagram.com/jaymiller08" target="_blank" rel="noopener" aria-label="Jay on Instagram" className="bg-white/90 dark:bg-gray-900/60 rounded-xl shadow-md p-2 hover:ring-4 ring-fuchsia-200 dark:ring-blue-800 transition border-0">
        <img src="/images/ig-thumb.jpg" alt="Jay's Instagram" className="w-36 h-36 rounded-lg object-cover shadow border-0" />
        <div className="text-center mt-3 font-bold text-fuchsia-800 dark:text-fuchsia-200 text-lg">Instagram</div>
      </a>
    </div>
    <div className="flex flex-col items-center gap-3 mb-2 mt-10">
      <span className="font-bold text-xl">Don’t miss an update!</span>
      <a href="#newsletter" className="rounded-full px-7 py-3 font-bold text-lg bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-lg hover:from-blue-700 hover:to-fuchsia-600 transition">Subscribe to The Alphas Club</a>
    </div>
  </section>
);

export default Media;
