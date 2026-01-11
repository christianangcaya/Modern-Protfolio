import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "sustainable-smart-agri",
    title: "Sustainable Smart Agriculture System",
    description: "A smart agriculture system that uses IoT sensors to optimize crop yield and reduce resource waste.",
  },
  {
    id: "lgu-scholar",
    title: "LGU Scholar Filling Management System",
    description: "A full CRUD system with authentication and dashboard analytics.",
  },
  {
    id: "vendo-dito-vendo-doon",
    title: "Vendo Dito Vendo Doon Website",
    description: "Smart vending machine interface powered by React and Node.js.",
  },
  // {
  //   id: "todo-webapp",
  //   title: "To Do web App",
  //   description: "A task management app built with React and Node.js.",
  // },
  // {
  //   id: "ai-automated-posting",
  //   title: "AI Attorney",
  //   description: "An AI-powered tool for automated social media posting.",
  // },
  // {
  //   id: "sales-ai-agent",
  //   title: "Sales AI Agent",
  //   description: "An AI-driven sales assistant to optimize customer interactions and boost revenue.",
  // }, 
  
];

function Projects() {
  const getProjectPath = (id: string) => {
    return `/project/${id}`;
  };

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
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-600/30 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Link to={getProjectPath(project.id)} className="block">
              <h3 className="text-2xl font-semibold mb-3 text-orange-600">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="text-orange-500 hover:text-orange-400 font-semibold">
                View Details →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
