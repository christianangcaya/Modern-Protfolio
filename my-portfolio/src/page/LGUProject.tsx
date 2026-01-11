import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Palette,
  Database,
  CheckCircle2,
  FileText,
  Users,
  Clock,
  Upload,
  ShieldCheck,
  Download,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import VDVD from "../assets/LGUscholar.png";

function LGUProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Online Application",
      description:
        "Allows students to submit scholarship applications digitally with required details.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Applicant Management",
      description:
        "Centralized system for managing scholar profiles and personal information.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Application Tracking",
      description:
        "Enables applicants to track the real-time status of their scholarship application.",
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Document Submission",
      description:
        "Secure upload and review of required documents for verification.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Admin Review & Approval",
      description:
        "LGU administrators can review, approve, reject, or request revisions.",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Reports & Export",
      description:
        "Generate reports and export scholar data for evaluation and record-keeping.",
    },
  ];

  const techStack = {
    frontend: ["React", "JavaScript", "Vite"],
    backend: ["Flask", "Python", "MySQL"],
  };

  const highlights = [
    "Digitizes scholar applications, reducing manual paperwork and processing time.",
    "Provides LGUs with a single platform to manage scholar records and documents.",
    "Enables applicants to monitor their application status transparently",
    "Simplifies evaluation, approval, and verification workflows for LGU staff",
    "Ensures safe storage and validation of sensitive applicant information",
    "Generates organized reports for decision-making and long-term records",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Back Button */}
      <motion.div
        className="px-6 pt-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
      </motion.div>
      {/* Hero Section */}
      <motion.section
        className="relative px-6 py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-orange-600/20 border border-orange-600/50 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-orange-400 text-sm font-semibold">
                Featured Project
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              LGU Scholar Filling Management System
            </h1>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              LGU Scholar Filing System – A web-based application that
              streamlines scholar application submission, record management, and
              status tracking for local government units through a centralized
              and efficient digital platform.
            </p>
            <motion.div
              className="flex gap-4 justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            ></motion.div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange-600/30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-red-600/20"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src={VDVD}
                alt="Vendo Dashboard"
                className="w-full h-auto relative z-10"
              />
            </div>

            {/* Floating tech badges */}
            <motion.div
              className="absolute -top-6 -left-6 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              React + JavaScript
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Flask Python
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="px-6 py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              My Contribution
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-orange-600/30"
            >
              <Code className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Frontend Contribution
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I led the frontend development of the LGU Scholar Filing System,
                focusing on building a user-friendly, responsive, and accessible
                interface that simplifies the scholarship application process
                for both applicants and LGU administrators. I designed intuitive
                forms, clear dashboards, and well-structured layouts to ensure
                ease of use even for non-technical users, while applying a
                mobile-first approach to support various devices. Through
                consistent styling, reusable UI components, and thoughtful user
                experience design, the system delivers a smooth and efficient
                digital workflow that replaces traditional manual filing.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-red-600/30"
            >
              <Code className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Backend Contribution
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My Contribution in backend development of the LGU Scholar Filing
                System focuses on database design and data
                organization to ensure reliability and scalability. I structured
                the database to efficiently manage scholar profiles, application
                records, documents, and application statuses, establishing clear
                relationships between entities for accurate data tracking. This
                design supports fast data retrieval, consistent record
                management, and long-term maintainability, enabling the system
                to handle growing numbers of applicants while ensuring data
                integrity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Frontend Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-600/50 transition-all duration-300 group"
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-white">{feature.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="px-6 py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Key Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-orange-600/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-orange-600/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.frontend.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-orange-600/20 text-orange-300 rounded-lg border border-orange-600/50 font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-red-600/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">
                  Backend Support
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.backend.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-red-600/20 text-red-300 rounded-lg border border-red-600/50 font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <Link 
              to="/project/sustainable-smart-agri"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-700 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-600/50 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous Project
            </Link>
            <Link 
              to="/project/vendo-dito-vendo-doon"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-700 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-600/50 transition-all flex items-center gap-2"
            >
              Next Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LGUProject;
