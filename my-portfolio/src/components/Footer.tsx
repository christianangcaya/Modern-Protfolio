import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-black text-gray-400 text-center py-6 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} CCA Portfolio. Built with ❤️ using React,
        TailwindCSS & Framer Motion.
      </p>
    </motion.footer>
  );
}

export default Footer;
