import { motion } from "framer-motion";
import BG from "../assets/bg1.png";
import Profile from "../assets/myiamge.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <img
        src={BG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-8 px-6 text-center md:text-left z-10"
      >
        <div>
          <p className="text-lg text-orange-500 font-medium mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            <span className="text-white">Christian </span>
            <span className="text-orange-600">Angcaya</span>
          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl text-gray-300 font-light">
            Full Stack Web Developer
          </h2>

          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            I build fast, responsive, and visually engaging web applications using
            modern technologies like React, TypeScript, Node.js, and TailwindCSS.
            Passionate about solving real-world problems and turning ideas into
            high-quality digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-medium shadow-lg transition-all"
            >
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg font-medium transition-all shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>

        <motion.img
          src={Profile}
          alt="Profile"
          className="w-96 h-96 rounded-full object-cover border-4 border-orange-600 shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div className="absolute bottom-10 text-gray-400 animate-bounce z-10">
        <i className="ri-arrow-down-s-line text-3xl"></i>
      </div>
    </section>
  );
}

export default Hero;
