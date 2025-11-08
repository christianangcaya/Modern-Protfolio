import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-gray-900 text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi! I'm <span className="text-orange-600 font-semibold">Christian C. Angcaya</span>, a
        passionate web developer who loves building modern, responsive, and
        interactive web experiences. I focus on creating seamless user
        interfaces using React, TypeScript, and TailwindCSS.
      </motion.p>
    </section>
  );
}

export default About;
