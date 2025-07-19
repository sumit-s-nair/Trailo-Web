"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, Info, ListPlus, Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// type def is necessary for TypeScript cause it hates me
interface HeroSectionProps {
  isDev: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDev }) => {
  const [apkFilename, setApkFilename] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/latest.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch latest.json");
        return res.json();
      })
      .then((data) => setApkFilename(data.filename))
      .catch((err) => console.error("Error loading APK:", err));
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    }

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  function handleInfoClick() {
    setModalOpen(!modalOpen);
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-8">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/background-hero.jpeg"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bottom-4 right-4 bg-black/20 hover:bg-black/40 rounded-lg">
          <button onClick={handleInfoClick} className="text-white p-2 rounded">
            <Info className="text-white hover:text-white transition-colors duration-300 cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Ride Together
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
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
            href={isDev ? "" : `/${apkFilename}`}
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
            onClick={() => {
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-white/70 bg-black/20 hover:border-white/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-black/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            <span>See Features</span>
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute bottom-4 right-4 bg-black/20 hover:bg-black/40 rounded-lg">
        <button onClick={handleInfoClick} className="text-white p-2 rounded">
          <Info className="text-white hover:text-white transition-colors duration-300 cursor-pointer" />
        </button>
      </div>
      {modalOpen && (
        <div
          ref={modalRef}
          className="absolute bottom-16 right-4 p-4 sm:w-lg bg-black/50 flex items-center justify-center rounded-lg w-96 z-20 backdrop-blur-sm"
        >
          <p className="text-white text-sm">
            I know this is an AI generated image, but it looks nice and I
            don&apos;t have the resources to create a custom one right now (im
            broke). If your an artist and want to help, reach out to me by
            clicking any link in my portfolio. I cant pay you if you havent
            realised it but I can surely give you some credit for creating the
            artwork.
            <br />
            <br />
            Moral of the story: If you want to help, reach out to me, If you
            can&apos;t, don&apos;t get offended. Thanks for reading, love you.
            <br />
            <Link
              href="https://sumit-s-nair.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Portfolio Link
            </Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
