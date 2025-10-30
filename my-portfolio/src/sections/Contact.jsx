const socials = [
  { label: "GitHub", href: "https://github.com/JayMiller08", icon: "🐙" },
  { label: "TikTok", href: "https://tiktok.com/@jaymiller08", icon: "🎵" },
  { label: "Instagram", href: "https://instagram.com/jaymiller08", icon: "📸" },
  { label: "LinkedIn", href: "#", icon: "💼" }, // Replace # if LinkedIn is available
];

const Contact = () => (
  <section id="contact" className="max-w-2xl mx-auto my-24 px-6">
    <h2 className="text-4xl font-bold mb-12 text-accent-900 dark:text-white text-center">Contact / Hire Me</h2>
    <form
      action="https://formspree.io/f/your-form-id" // TODO: swap form id or fallback to mailto:
      method="POST"
      className="bg-white dark:bg-accent-900 p-10 rounded-xl shadow-lg border border-accent-200 dark:border-accent-700 flex flex-col gap-6"
    >
      <label className="flex flex-col gap-2 font-semibold text-base">
        <span>Name</span>
        <input type="text" name="name" required className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" autoComplete="name" />
      </label>
      <label className="flex flex-col gap-2 font-semibold text-base">
        <span>Email</span>
        <input type="email" name="email" required className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" autoComplete="email" />
      </label>
      <label className="flex flex-col gap-2 font-semibold text-base">
        <span>Interest</span>
        <select name="interest" required className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all">
          <option value="">Select an option</option>
          <option value="internship">Internship</option>
          <option value="freelance">Freelance</option>
          <option value="collab">Collab</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 font-semibold text-base">
        <span>Message</span>
        <textarea name="message" rows={4} required className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"></textarea>
      </label>
      <button type="submit" className="rounded-lg bg-primary-600 hover:bg-primary-700 text-white py-3 px-10 text-base font-semibold shadow-md hover:shadow-lg mt-2 transition-all">Send</button>
      <div className="text-sm text-accent-600 dark:text-accent-400 mt-1">Prefer email? <a href="mailto:jay@yourmail.com" className="underline text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300">jay@yourmail.com</a></div>
    </form>
    <div className="flex gap-8 mt-10 justify-center">
      {socials.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener"
          aria-label={s.label}
          className="text-3xl p-3 rounded-lg bg-white dark:bg-accent-900 border border-accent-200 dark:border-accent-700 hover:shadow-lg shadow-sm transition-all"
        >
          <span aria-hidden>{s.icon}</span>
          <span className="sr-only">{s.label}</span>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
