"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MeetTheDevsSection() {
  return (
    <section className="pt-26 relative">
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
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DEVs
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The team who worked day and night (mostly night our sleep schedule
            is cooked) to create this amazing app to help motorcycle riders stay
            connected and share their journeys.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col items-center">
              <div>
                <Image
                  src="/sumit_pfp.jpg"
                  alt="Yathartha Aarush"
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Sumit Nair
              </h3>
              <p className="text-gray-300 mb-4">Some Important Role</p>
              <p className="text-gray-400 mb-8">Ig he did something</p>
              <Link
                href={"https://github.com/sumit-s-nair"}
                target="_blank"
                className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white p-3 rounded-lg text-lg font-semibold mb-4 flex items-center justify-center"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  fill="white"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub Profile</span>
              </Link>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col items-center">
              <div>
                <Image
                  src="/yathu_pfp.jpg"
                  alt="Yathartha Aarush"
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Yathartha Aarush
              </h3>
              <p className="text-gray-300 mb-4">Some Other Important Role</p>
              <p className="text-gray-400 mb-8">He is a cutiepie</p>
              <Link
                href={"https://github.com/Yathartha19"}
                target="_blank"
                className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white p-3 rounded-lg text-lg font-semibold mb-4 flex items-center justify-center"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  fill="white"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub Profile</span>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4"></div>
      </div>
    </section>
  );
}
