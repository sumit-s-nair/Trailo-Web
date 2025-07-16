"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Star, Users, MapPin } from "lucide-react";

const stats = [
  { icon: <Star className="w-6 h-6" />, value: "0", label: "User Rating" },
  { icon: <Users className="w-6 h-6" />, value: "0", label: "Active Riders" },
  { icon: <MapPin className="w-6 h-6" />, value: "0", label: "Group Rides" }
];

type ApkInfo = {
  version: string;
  filename: string;
  date: string; 
};

export default function DownloadSection() {
  const [apkInfo, setApkInfo] = useState<ApkInfo | null>(null);

  useEffect(() => {
    fetch("/latest.json")
      .then((res) => res.json())
      .then((data) => setApkInfo(data))
      .catch((err) => console.error("Failed to load APK info:", err));
  }, []);

  const formatDateTime = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleString(undefined, {
      dateStyle: "long",
      timeStyle: "short"
    });
  };

  return (
    <section className="py-20 relative">
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
                width={150}
                height={150}
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
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ride Together?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-md mx-auto lg:mx-0"
            >
              Join the community of motorcycle riders and start your connected adventures with Trailo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-blue-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
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
                Download the App
              </h3>
              <p className="text-gray-300 mb-8">
                Available for Android devices. Connect with your riding crew and start exploring together.
              </p>
            </div>

            <div className="space-y-4">
              {apkInfo ? (
                <>
                  <motion.a
                    href={`/${apkInfo.filename}`}
                    download
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl border border-white/20"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-6 h-6" />
                    <span>Download for Android</span>
                  </motion.a>

                  <p className="text-sm text-gray-400 text-center">
                    Version {apkInfo.version} • Last updated {formatDateTime(apkInfo.date)}
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-400 text-center">
                  Loading latest APK info...
                </p>
              )}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">
                What&apos;s New
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Enhanced real-time location tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Improved group chat functionality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>New SOS and emergency features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Better route planning and navigation</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
