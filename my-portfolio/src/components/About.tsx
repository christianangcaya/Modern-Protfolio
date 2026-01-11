import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

function About() {

  return (
    <section
      id="about"
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
            About Me
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-red-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-orange-600/20 to-red-600/20 flex items-center justify-center">
                  <Code2 className="w-24 h-24 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              React
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Arduino
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-6">
              Hi! I'm{" "}
              <span className="text-orange-600 font-bold">
                Christian C. Angcaya
              </span>
              , an{" "}
              <span className="font-semibold">
                Information Technology student
              </span>{" "}
              with a strong interest in{" "}
              <span className="font-semibold">
                Full-Stack Web & IoT Development
              </span>{" "}
              who enjoys building modern, responsive, and interactive web
              applications.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-2">
              I build modern and responsive web applications using{" "}
              <span className="font-semibold">
                React, TypeScript, Tailwind CSS, and Framer Motion
              </span>
              , develop backend systems with{" "}
              <span className="font-semibold">
                Node.js, Express, and MongoDB
              </span>
              , and implement real-time features through{" "}
              <span className="font-semibold">WebSockets</span>. I also work
              with <span className="font-semibold">ESP32 and Arduino</span> to
              integrate IoT devices with web platforms, creating user-friendly
              and efficient solutions while continuously improving my skills
              through hands-on projects and learning new technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
