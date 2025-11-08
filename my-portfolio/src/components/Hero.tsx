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
          <h1 className="text-5xl md:text-7xl font-semibold">
            <span className="text-white">Christian </span>
            <span className="text-orange-600">Angcaya</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            CNSC | 3rd Year | BSIT Student
          </p>
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
