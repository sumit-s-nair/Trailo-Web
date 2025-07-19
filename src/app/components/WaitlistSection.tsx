"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ListPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function WaitlistSection() {
  const { signInWithGoogle } = useAuth();

  return (
    <section id='waitlist' className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Image
                src="/icon.png"
                alt="Trailo App"
                width={130}
                height={130}
                className="mx-auto lg:mx-0 rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Join our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Community
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-md mx-auto lg:mx-0"
            >
              <a href="https://discord.gg/cEsXuJbzXG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Join our Discord community</a> to stay updated, share your experiences, and connect with fellow riders. Be part of the Trailo journey!
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Join the Waitlist
              </h3>
              <p className="text-gray-300 mb-8">
                Register and Login to join the waitlist for
                Trailo. Be the first to be notified when the app is available for download, and stay updated with the latest features and improvements.
              </p>
            </div>
            <motion.a
              onClick={signInWithGoogle}
              className="hover:cursor-pointer w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl border border-white/20"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ListPlus className="w-6 h-6" />
              <span>Register now</span>
            </motion.a>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Apply for beta testing
              </h3>
              <p className="text-gray-300 mb-8">
                Register, Login and join our <a href="https://discord.gg/cEsXuJbzXG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">discord server</a> to apply for beta access to Trailo. Help us
                shape the future of motorcycle riding with your feedback and
                insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
