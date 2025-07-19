"use client";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Users, MapPin, ListPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import withAuth from "../components/withAuth";
import MeetTheDevsSection from "./MeetTheDevsSection";

const stats = [
  { icon: <Star className="w-6 h-6" />, value: "0", label: "Waitlist users" },
  { icon: <Users className="w-6 h-6" />, value: "0", label: "Beta testers" },
  { icon: <MapPin className="w-6 h-6" />, value: "0", label: "Discord members" },
];

function Dashboard() {
  const { user } = useAuth(); // Get user info from AuthContext
  const [isInWaitlist, setIsInWaitlist] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWaitlistStatus = async () => {
      if (!user) return;

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setIsInWaitlist(data.waitlist || false);
      } else {
        setIsInWaitlist(false); // fallback if user doc doesn't exist
      }

      setLoading(false);
    };

    fetchWaitlistStatus();
  }, [user]);


  const joinWaitlist = async () => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    try {
      await updateDoc(userRef, { waitlist: true });
      setIsInWaitlist(true); // Update UI
      console.log("User added to waitlist.");
    } catch (error) {
      console.error("Failed to update waitlist status:", error);
    }
  };


  return (
    <section className="py-20 mt-14 relative">
      <h1 className="text-4xl font-bold text-center text-white mb-16">
        Welcome to Trailo, {user ? user.displayName?.split(" ")[0] : "Rider"}
      </h1>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid g
        rid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Image
                src="/icon.png"
                alt="Trailo App"
                width={115}
                height={115}
                className="mx-auto lg:mx-0 rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-md mx-auto lg:mx-0"
            >
              <a href="https://discord.gg/cEsXuJbzXG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Join our discord community</a> to stay updated, connect with fellow riders and to be a beta tester.<br/> Be part of the Trailo journey!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Join Waitlist
              </h3>
              <p className="text-gray-300 mb-8">
                 Be the first to be notified when the app is available for download, and stay updated with the latest features and improvements.
              </p>
            </div>

            <div className="space-y-4">
                  {!loading && isInWaitlist === false && (
                    <motion.a
                      onClick={joinWaitlist}
                      className="hover:cursor-pointer w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl border border-white/20"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ListPlus className="w-6 h-6" />
                      <span>Join the waitlist</span>
                    </motion.a>
                  )}

                  {!loading && isInWaitlist && (
                    <div className="text-center text-sm text-green-400 pb-2">
                      You’re already on the waitlist. Thank you!
                    </div>
                  )}

                  {!loading && isInWaitlist === false && (
                    <p className="text-sm text-gray-400 text-center">
                      By joining the waitlist, you will be among the first to know when the app is ready for download. We appreciate your support and enthusiasm!
                    </p>
                  )}

                  {!loading && isInWaitlist && (
                    <p className="text-sm text-gray-400 text-center">
                      Thank you for your interest in Trailo! By joining the waitlist, you will be among the first to know when the app is ready for download. We appreciate your support and enthusiasm!
                    </p>
                  )}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">
                Want to be a beta tester?
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <a href="https://discord.gg/cEsXuJbzXG" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Join our discord server</a>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Apply to be a beta tester</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Wait for your acceptance email</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Help us improve Trailo</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <MeetTheDevsSection />
    </section>
  );
}

export default withAuth(Dashboard);
