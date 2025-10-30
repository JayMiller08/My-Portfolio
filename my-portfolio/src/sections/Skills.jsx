import { motion } from 'framer-motion';

const skills = [
  { name: "Java", level: "Confident" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Novice" },
  { name: "HTML/CSS", level: "Confident" },
  { name: "Git/GitHub", level: "Confident" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node", level: "Novice" },
  { name: "Supabase", level: "Novice" },
  { name: "Docker", level: "Novice" },
  { name: "Testing", level: "Novice" },
];

const levelStyle = {
  "Confident": "bg-accent text-white",
  "Intermediate": "bg-accent/70 text-white",
  "Novice": "bg-slate-200 dark:bg-accent-900 text-accent-800 dark:text-accent-200 border border-accent-200 dark:border-accent-700",
};

const Skills = () => (
  <section id="skills" className="max-w-6xl mx-auto my-24 px-6">
    <h2 className="text-4xl font-bold mb-12 text-accent-900 dark:text-white">Skills & Tech Stack</h2>
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.11 } } }}
    >
      {skills.map(skill => (
        <motion.div
          key={skill.name}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          className="rounded-lg px-6 py-7 flex flex-col items-center border border-border-muted dark:border-accent-800 shadow-sm bg-slate-50 dark:bg-accent-900 text-center text-base font-semibold transition-all"
          role="listitem"
          aria-label={skill.name + ' – ' + skill.level}
        >
          <span className="block text-2xl mb-2" aria-hidden>💡</span>
          <span>{skill.name}</span>
          <span
            className={`mt-3 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${levelStyle[skill.level]}`}
            aria-label={skill.level}
          >
            {skill.level}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
