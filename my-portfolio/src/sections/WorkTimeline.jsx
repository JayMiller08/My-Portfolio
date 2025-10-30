const timeline = [
  {
    title: "Diploma in Computer Science (Extended)",
    org: "Tshwane University of Technology, eMalahleni Campus",
    date: "Current",
    desc: "Focused on Java, software engineering fundamentals, and collaborative projects.",
    icon: "🎓"
  },
  {
    title: "Java Tutoring & Online Classes",
    org: "Self-initiated workshops (SA & online)",
    date: "2024–now",
    desc: "Hosted 1h30 Java basic sessions: taught ArrayLists, Functions, OOP principles to new coders, focusing on making programming fun and accessible.",
    icon: "🧑‍🏫"
  }
];

const WorkTimeline = () => (
  <section id="work" className="max-w-5xl mx-auto my-24 px-6">
    <h2 className="text-4xl font-bold mb-12 text-accent-900 dark:text-white">Work & Education</h2>
    <div className="rounded-xl bg-white dark:bg-accent-900 border border-accent-200 dark:border-accent-700 shadow-lg py-12 px-6 md:px-12">
      <ol className="relative border-l-4 border-primary-300 dark:border-primary-700 ml-4">
        {timeline.map((item) => (
          <li key={item.title} className="mb-12 ml-8 relative">
            <span className="absolute flex items-center justify-center w-12 h-12 text-3xl rounded-full -left-8 ring-4 ring-white dark:ring-accent-950 bg-primary-600 text-white shadow-md">{item.icon}</span>
            <h3 className="text-2xl font-bold leading-tight text-accent-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-base font-semibold text-primary-600 dark:text-primary-400 mb-1">{item.org}</p>
            <span className="block mb-3 text-sm font-medium text-accent-500 dark:text-accent-400">{item.date}</span>
            <p className="text-base leading-relaxed text-accent-700 dark:text-accent-300">{item.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WorkTimeline;
