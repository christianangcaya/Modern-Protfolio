import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-gradient-to-b  from-black via-gray-900 to-black text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-10 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have a project in mind or want to connect? Let’s talk!
      </motion.p>

      <motion.form
        className="max-w-lg mx-auto flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="mt-2 px-6 py-3 bg-orange-500 rounded-lg font-semibold text-white hover:bg-orange-600 transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-8 mt-10 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/christianangcaya"
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:angcayachristian2004@gmail.com"
          className="text-gray-400 hover:text-white"
          onClick={(e) => {
            e.preventDefault(); 
            window.location.href = "mailto:angcayachristian2004@gmail.com"; 
          }}
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
