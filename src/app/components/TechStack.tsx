"use client";

import { motion } from "framer-motion";

const techStack = ["Flutter", "Google Navigation SDK", "Firebase"];

export default function TechStack() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {" "}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Motorcycle Riders
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trailo provides reliable tracking and communication for your riding
            adventures
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
