"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ListPlus, Play } from "lucide-react";
import { useEffect, useState } from "react";

// type def is necessary for TypeScript cause it hates me
interface HeroSectionProps {
  isDev: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDev }) => {
  const [apkFilename, setApkFilename] = useState<string | null>(null);

  useEffect(() => {
    fetch("/latest.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch latest.json");
        return res.json();
      })
      .then((data) => setApkFilename(data.filename))
      .catch((err) => console.error("Error loading APK:", err));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/background-hero.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/icon.png"
            alt="Trailo App Icon"
            width={120}
            height={120}
            className="mx-auto mb-8 rounded-3xl shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Ride Together
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Stay Connected
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ride together, navigate as one — with live tracking, voice chat, and
          built-in safety for every journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.a
            href={isDev ? '' : `/${apkFilename}`}
            download
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDev ? (
              <ListPlus className="w-5 h-5" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>{isDev ? "Join Waitlist" : "Download Now"}</span>
          </motion.a>{" "}
          <motion.a
            href="#features"
            className="border-2 border-white/70 bg-black/20 hover:border-white/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-black/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            <span>See Features</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
