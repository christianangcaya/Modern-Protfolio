import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React and TailwindCSS.",
  },
  {
    title: "Inventory Management",
    description: "A full CRUD system with authentication and dashboard analytics.",
  },
  {
    title: "IoT Vending Machine",
    description: "Smart vending machine interface powered by React and Node.js.",
  },
  {
    title: "IoT Vending Machine",
    description: "Smart vending machine interface powered by React and Node.js.",
  },
  {
    title: "IoT Vending Machine",
    description: "Smart vending machine interface powered by React and Node.js.",
  },
  {
    title: "IoT Vending Machine",
    description: "Smart vending machine interface powered by React and Node.js.",
  }, 
  
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-600/30 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-orange-600">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
