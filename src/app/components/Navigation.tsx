"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LogInIcon, LogOutIcon, LayoutDashboard } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
  const { user, signInWithGoogle, logOut } = useAuth();

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

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <motion.div
                  className="relative"
                  initial="closed"
                  whileHover="open"
                >
                  <Image
                    src={user.photoURL!}
                    alt={user.displayName!}
                    width={44}
                    height={44}
                    className="rounded-full cursor-pointer border-2 border-transparent group-hover:border-cyan-400 transition-all"
                  />

                  {/* The Dropdown Menu */}
                  <motion.div
                    variants={{
                      open: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        display: 'block' 
                      },
                      closed: { 
                        opacity: 0, 
                        y: -10, 
                        scale: 0.95, 
                        transitionEnd: { display: 'none' } 
                      }
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 w-56 bg-gray-800/90 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
                  >
                    <div className="p-2 flex flex-col space-y-1">
                      {/* Welcome Message */}
                      <div className="px-3 py-2 text-sm">
                        <p className="font-semibold text-white">
                          {user.displayName}
                        </p>
                        <p className="text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>

                      <hr className="border-white/10" />

                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-gray-200 rounded-md hover:bg-cyan-600 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>

                      <button
                        onClick={logOut}
                        className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm text-gray-200 rounded-md hover:bg-red-500 transition-colors"
                      >
                        <LogOutIcon className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <motion.button
                onClick={signInWithGoogle}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-100 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Sign In</span>
                <LogInIcon className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;