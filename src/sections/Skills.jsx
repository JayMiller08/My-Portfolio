import { motion } from 'framer-motion';

const skills = [
  { name: "Java", level: "Confident", color: "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" },
  { name: "JavaScript", level: "Intermediate", color: "bg-accent-100 dark:bg-accent-800 text-accent-700 dark:text-accent-300" },
  { name: "React", level: "Learning", color: "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" },
  { name: "HTML/CSS", level: "Moderate", color: "bg-accent-100 dark:bg-accent-800 text-accent-700 dark:text-accent-300" },
  { name: "Git/GitHub", level: "Confident", color: "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" },
  { name: "Tailwind CSS", level: "Intermediate", color: "bg-accent-100 dark:bg-accent-800 text-accent-700 dark:text-accent-300" },
  { name: "Node (basics)", level: "Entry", color: "bg-accent-100 dark:bg-accent-800 text-accent-700 dark:text-accent-300" },
  { name: "Supabase", level: "Exploring", color: "bg-accent-100 dark:bg-accent-800 text-accent-700 dark:text-accent-300" },
  { name: "Docker", level: "Exploring", color: "bg-accent-100 dark:bg-accent-800 text-accent-700 dark:text-accent-300" },
  { name: "Testing (basics)", level: "Entry", color: "bg-accent-100 dark:bg-accent-800 text-accent-700 dark:text-accent-300" },
];

const levels = {
  Confident: "bg-primary-600 text-white",
  Intermediate: "bg-primary-500 text-white",
  Moderate: "bg-accent-600 dark:bg-accent-500 text-white",
  Learning: "bg-primary-600 text-white",
  Entry: "bg-accent-600 dark:bg-accent-500 text-white",
  Exploring: "bg-accent-600 dark:bg-accent-500 text-white",
};

const Skills = () => (
  <section id="skills" className="max-w-6xl mx-auto my-24 px-6">
    <h2 className="text-4xl font-bold mb-12 text-accent-900 dark:text-white">Skills & Tech Stack</h2>
    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.11 } } }}>
      {skills.map(skill => (
        <motion.div key={skill.name} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className={`rounded-lg px-6 py-5 flex flex-col items-center border border-accent-200 dark:border-accent-700 shadow-sm hover:shadow-md ${skill.color} text-center text-base font-semibold transition-all`}
        >
          <span>{skill.name}</span>
          <span className={`mt-2 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider ${levels[skill.level]}`}>{skill.level}</span>
        </motion.div>
      ))}
    </motion.div>
    <div className="mt-2 w-full flex justify-center">
      <select id="filter" className="rounded-lg border border-accent-300 dark:border-accent-700 shadow-sm px-4 py-2.5 text-sm font-medium text-accent-900 dark:text-accent-100 bg-white dark:bg-accent-900 w-full max-w-xs focus:ring-2 ring-primary-500 focus:border-primary-500 hover:bg-accent-50 dark:hover:bg-accent-800 cursor-pointer transition-all">
        <option>Show all</option>
        {skills.map(skill => (<option key={skill.name}>{skill.name}</option>))}
      </select>
    </div>
  </section>
);

export default Skills;
