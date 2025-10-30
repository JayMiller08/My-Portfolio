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
  <section id="work" className="max-w-4xl mx-auto my-24 px-4">
    <h2 className="text-4xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-600 to-blue-400 dark:from-blue-400 dark:to-fuchsia-500">Work & Education</h2>
    <div className="rounded-3xl bg-white/85 dark:bg-gray-900/70 backdrop-blur-lg shadow-2xl py-12 px-6 md:px-12">
      <ol className="relative border-l-8 border-fuchsia-200 dark:border-fuchsia-900 ml-4">
        {timeline.map((item, i) => (
          <li key={item.title} className="mb-12 ml-8 relative">
            <span className="absolute flex items-center justify-center w-12 h-12 text-3xl rounded-full -left-14 ring-8 ring-fuchsia-100 dark:ring-fuchsia-900 bg-blue-500 text-white shadow-lg">{item.icon}</span>
            <h3 className="text-2xl font-black leading-tight text-blue-900 dark:text-blue-200 mb-1">{item.title}</h3>
            <p className="text-base font-bold text-blue-500 dark:text-fuchsia-300 mb-1">{item.org}</p>
            <span className="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-400">{item.date}</span>
            <p className="text-lg text-gray-800 dark:text-gray-100">{item.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WorkTimeline;
