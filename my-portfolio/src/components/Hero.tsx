import { motion } from "framer-motion";
import BG from "../assets/bg1.png";
// import Profile from "../assets/myiamge.jpg";
import Profile from "../assets/Image.jpg";

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
        className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-8 px-4 sm:px-6 text-center md:text-left z-10 max-w-6xl mx-auto"
      >
        <div className="flex-1 min-w-0">
          <p className="text-base sm:text-lg text-orange-500 font-medium mb-2">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            <span className="text-white">Christian </span>
            <span className="text-orange-600">Angcaya</span>
          </h1>

          <h2 className="mt-2 sm:mt-3 text-lg sm:text-2xl md:text-3xl text-gray-300 font-light">
            Full-Stack Developer
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            IT undergraduate with hands-on experience in full-stack
            development and IoT-integrated systems, seeking an internship or
            OJT. Proficient in building responsive user
            interfaces, implementing backend logic, and creating real-time
            features. Strong problem-solving skills and passionate about
            learning modern technologies to deliver practical solutions
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-medium shadow-lg transition-all text-center"
            >
              View My Projects
            </a>

            <a
              href="/CCA CV Resume (1).pdf"
              download="Christian-Angcaya-CV.pdf"
              className="w-full sm:w-auto px-6 py-3 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg font-medium transition-all shadow-lg text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        <motion.img
          src={Profile}
          alt="Profile"
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-orange-600 shadow-xl flex-shrink-0"
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
