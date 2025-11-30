import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const techs = [
  { icon: <FaReact size={50} className="text-cyan-400" />, name: "React" },
  { icon: <SiTypescript size={50} className="text-blue-400" />, name: "TypeScript" },
  { icon: <SiTailwindcss size={50} className="text-sky-400" />, name: "TailwindCSS" },
  { icon: <FaNodeJs size={50} className="text-green-500" />, name: "Node.js" },
  { icon: <FaHtml5 size={50} className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt size={50} className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJsSquare size={50} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaGitAlt size={50} className="text-red-500" />, name: "Git" },
];

function TechStack() {
  return (
    <section
      id="techstack"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center space-y-3 hover:scale-110 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {tech.icon}
            <span className="text-gray-300">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
