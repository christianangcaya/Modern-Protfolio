import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      // This will be handled by the link
    } else {
      // Scroll to section if already on home page
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "/", id: "home" },
    { label: "About", href: "/#about", id: "about" },
    { label: "Projects", href: "/#projects", id: "projects" },
    { label: "Tech Stack", href: "/#techstack", id: "techstack" },
    { label: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-4 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <Code2 className="w-8 h-8 text-orange-600" />
        <span className="text-white font-bold text-lg">CCA</span>
      </Link>

      <div className="hidden md:flex gap-8 text-white font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.href}
            onClick={() => handleNavClick(link.id)}
            className="hover:text-orange-500 transition"
          >
            {link.label}
          </Link>
        ))}
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
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-orange-500 transition text-white"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
