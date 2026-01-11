import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users, Brain, Clock, Zap, Cpu } from "lucide-react";

function Skills() {
  const technicalSkills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive user interfaces using React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, with animations using Framer Motion and data visualization using Chart.js",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Developing RESTful APIs using Node.js, Express.js, MongoDB, and Mongoose, including real-time features with WebSockets and authentication using JWT",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT & Hardware",
      description:
        "Familiar with ESP32 and Arduino for sensor integration, serial communication, and connecting IoT devices to web applications",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tools & Platforms",
      description:
        "Experience using Git and GitHub for version control, Vite and Nodemon for development, Postman for API testing, VS Code for coding, and deploying using Vercel",
    },
  ];

  const softSkills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem-solving & Logical Thinking",
      description: "Analyzing complex problems and finding efficient solutions",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Strong Attention to Detail",
      description: "Ensuring precision and quality in every aspect of work",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Working effectively with diverse team members",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Management",
      description: "Prioritizing tasks and meeting deadlines consistently",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Willingness to Learn",
      description: "Eager to master new technologies and adapt quickly",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "Optimizing workflows and delivering quality work quickly",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Technical Skills
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)",
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-600/50 transition-all duration-300"
              >
                <motion.div
                  className="text-orange-600 mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Soft Skills
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300"
              >
                <motion.div
                  className="text-blue-400 mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
