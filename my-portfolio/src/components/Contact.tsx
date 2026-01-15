import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Inquiry via Portfolio Website";

    const body = `Good day,

I hope this message finds you well.

My name is ${name}, and I am reaching out through your portfolio website to express my interest in connecting with you.

Contact Details:
Name: ${name}
Email: ${email}

Message:
${message}

Thank you for your time and consideration. I look forward to your response.

Best regards,
${name}`;

    // Use mailto: for better mobile compatibility
    const mailtoURL = `mailto:angcayachristian2004@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoURL;

    // Optional: clear form after sending
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 100);
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center"
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
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
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
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/christian-angcaya-4125163a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&to=angcayachristian2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
