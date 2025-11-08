import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/bg1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-4 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-2">
        {/* <img src={Logo} alt="Logo" className="w-8 h-8" /> */}
        <span className="text-white font-bold text-lg">ChristianAngcaya</span>
      </div>

      <div className="hidden md:flex gap-8 text-white font-medium">
        <a href="#home" className="hover:text-orange-500 transition">Home</a>
        <a href="#about" className="hover:text-orange-500 transition">About</a>
        <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
        <a href="#techstack" className="hover:text-orange-500 transition">Tech Stack</a>
        <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
      </div>


      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none text-2xl"
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 right-6 bg-black/80 backdrop-blur-lg rounded-lg p-4 flex flex-col gap-3 md:hidden"
        >
          <a href="#home" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#techstack" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Tech Stack</a>
          <a href="#contact" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
