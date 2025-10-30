const socials = [
  { label: "GitHub", href: "https://github.com/JayMiller08", icon: "🐙" },
  { label: "TikTok", href: "https://tiktok.com/@jaymiller08", icon: "🎵" },
  { label: "Instagram", href: "https://instagram.com/jaymiller08", icon: "📸" },
  { label: "LinkedIn", href: "#", icon: "💼" }, // Replace # if LinkedIn is available
];

const Contact = () => (
  <section id="contact" className="max-w-2xl mx-auto my-24 px-4 ">
    <h2 className="text-4xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-600 to-blue-400 dark:from-blue-400 dark:to-fuchsia-500">Contact / Hire Me</h2>
    <form
      action="https://formspree.io/f/your-form-id" // TODO: swap form id or fallback to mailto:
      method="POST"
      className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-2 border-blue-50 dark:border-fuchsia-900 flex flex-col gap-7"
    >
      <label className="flex flex-col gap-2 font-bold text-lg">
        <span>Name</span>
        <input type="text" name="name" required className="rounded-full border py-3 px-5 font-normal text-base bg-blue-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" autoComplete="name" />
      </label>
      <label className="flex flex-col gap-2 font-bold text-lg">
        <span>Email</span>
        <input type="email" name="email" required className="rounded-full border py-3 px-5 font-normal text-base bg-blue-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" autoComplete="email" />
      </label>
      <label className="flex flex-col gap-2 font-bold text-lg">
        <span>Interest</span>
        <select name="interest" required className="rounded-full border py-3 px-5 font-normal text-base bg-blue-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none">
          <option value="">Select an option</option>
          <option value="internship">Internship</option>
          <option value="freelance">Freelance</option>
          <option value="collab">Collab</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 font-bold text-lg">
        <span>Message</span>
        <textarea name="message" rows={4} required className="rounded-2xl border py-3 px-5 font-normal text-base bg-blue-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
      </label>
      <button type="submit" className="rounded-full bg-gradient-to-tr from-blue-600 to-fuchsia-500 text-white py-4 px-10 text-xl font-black shadow-lg mt-3 hover:from-blue-700 hover:to-fuchsia-600 transition">Send</button>
      <div className="text-sm text-gray-500 dark:text-gray-300 mt-2">Prefer email? <a href="mailto:jay@yourmail.com" className="underline text-blue-600 font-bold">jay@yourmail.com</a></div>
    </form>
    <div className="flex gap-8 mt-10 justify-center">
      {socials.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener"
          aria-label={s.label}
          className="text-4xl p-3 rounded-full bg-gradient-to-tr from-blue-50 to-fuchsia-50 dark:from-gray-900 dark:to-blue-950 hover:ring-8 ring-blue-100 dark:ring-fuchsia-950 shadow-md transition"
        >
          <span aria-hidden>{s.icon}</span>
          <span className="sr-only">{s.label}</span>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
