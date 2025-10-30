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
      action="https://formspree.io/f/your-form-id" // TODO: Replace with your real Formspree form ID. See README for Netlify fallback.
      method="POST"
      className="bg-white dark:bg-accent-900 p-10 rounded-xl shadow-lg border border-border-muted dark:border-accent-700 flex flex-col gap-6"
    >
      <label htmlFor="name" className="flex flex-col gap-2 font-semibold text-base">
        <span>Name</span>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          autoComplete="name"
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-2 font-semibold text-base">
        <span>Email</span>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          autoComplete="email"
        />
      </label>
      <label htmlFor="interest" className="flex flex-col gap-2 font-semibold text-base">
        <span>Interest</span>
        <select
          id="interest"
          name="interest"
          required
          className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        >
          <option value="">Select an option</option>
          <option value="internship">Internship</option>
          <option value="freelance">Freelance</option>
          <option value="collab">Collab</option>
        </select>
      </label>
      <label htmlFor="message" className="flex flex-col gap-2 font-semibold text-base">
        <span>Message</span>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="rounded-lg border border-accent-300 dark:border-accent-700 py-2.5 px-4 font-normal text-base bg-white dark:bg-accent-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        ></textarea>
      </label>
      <button
        type="submit"
        className="rounded-lg bg-accent hover:bg-accent/90 text-white py-3 px-10 text-base font-semibold shadow-md hover:shadow-lg mt-2 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Send
      </button>
      <div className="text-sm text-accent-600 dark:text-accent-400 mt-1">Prefer email? <a href="mailto:jay@yourmail.com" className="underline text-accent font-semibold hover:text-accent/80">jay@yourmail.com</a></div>
    </form>
    <div className="flex gap-6 mt-10 justify-center">
      {socials.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener"
          aria-label={s.label}
          className="text-2xl p-3 rounded-xl border border-border-muted dark:border-accent-700 bg-white dark:bg-accent-900 hover:shadow-md shadow-sm transition-all focus:outline-none focus-visible:ring-2 ring-accent"
        >
          <span aria-hidden>{s.icon}</span>
          <span className="sr-only">{s.label}</span>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
