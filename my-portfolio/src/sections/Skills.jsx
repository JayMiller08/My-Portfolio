import { motion } from 'framer-motion';

const skills = [
  { name: "Java", level: "Confident", color: "bg-green-200 text-green-900" },
  { name: "JavaScript", level: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
  { name: "React", level: "Learning", color: "bg-blue-100 text-blue-900" },
  { name: "HTML/CSS", level: "Moderate", color: "bg-pink-100 text-pink-900" },
  { name: "Git/GitHub", level: "Confident", color: "bg-gray-100 text-gray-800" },
  { name: "Tailwind CSS", level: "Intermediate", color: "bg-cyan-100 text-cyan-900" },
  { name: "Node (basics)", level: "Entry", color: "bg-lime-100 text-lime-900" },
  { name: "Supabase (if applicable)", level: "Exploring", color: "bg-purple-100 text-purple-900" },
  { name: "Docker (if applicable)", level: "Exploring", color: "bg-sky-100 text-sky-900" },
  { name: "Testing (basics)", level: "Entry", color: "bg-orange-100 text-orange-900" },
];

const levels = {
  Confident: "bg-green-500 text-white",
  Intermediate: "bg-yellow-500 text-white",
  Moderate: "bg-pink-500 text-white",
  Learning: "bg-blue-600 text-white",
  Entry: "bg-gray-500 text-white",
  Exploring: "bg-purple-500 text-white",
};

const Skills = () => (
  <section id="skills" className="max-w-5xl mx-auto my-24 px-4 ">
    <h2 className="text-4xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-fuchsia-600 to-blue-400 dark:from-blue-300 dark:via-fuchsia-300 dark:to-blue-700">Skills & Tech Stack</h2>
    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.11 } } }}>
      {skills.map(skill => (
        <motion.div key={skill.name} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className={`rounded-2xl px-6 py-5 flex flex-col items-center border-0 shadow-sm ${skill.color} text-center text-lg font-bold tracking-tight shadow-md`}
        >
          <span>{skill.name}</span>
          <span className={`mt-1 text-xs px-2 py-1 rounded-full font-black uppercase tracking-wider mt-2 ${levels[skill.level]}`}>{skill.level}</span>
        </motion.div>
      ))}
    </motion.div>
    <div className="mt-2 w-full flex justify-center">
      <select id="filter" className="rounded-full border-none shadow-md px-4 py-3 text-base font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 w-full max-w-xs focus:ring-2 ring-blue-500 hover:bg-blue-100 dark:hover:bg-fuchsia-900 cursor-pointer">
        <option>Show all</option>
        {skills.map(skill => (<option key={skill.name}>{skill.name}</option>))}
      </select>
    </div>
  </section>
);

export default Skills;
