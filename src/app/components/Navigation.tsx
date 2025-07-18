"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, ListPlus } from "lucide-react";
import { useEffect, useState } from "react";

// Navigation type def cause ts is lill pain in the ass
interface NavigationProps {
  isDev: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isDev }) => {
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/icon.png"
                alt="Trailo Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />

              <span className="text-2xl font-bold text-white">Trailo</span>
            </motion.div>
          </Link>
          <motion.a
            href={isDev ? '' : `/${apkFilename}`}
            download
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDev ? (
              <ListPlus className="w-5 h-5" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>{isDev ? "Join Waitlist" : "Download Now"}</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
