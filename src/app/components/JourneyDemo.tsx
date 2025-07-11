"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Bike, Navigation, Clock } from "lucide-react";

const journeySteps = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Plan Your Route",
    description: "Set destination and waypoints",
    detail: "Create your route with multiple stops and share it with your riding group"
  },
  {
    icon: <Bike className="w-6 h-6" />,
    title: "Invite Your Crew",
    description: "Add friends to your ride",
    detail: "Invite your motorcycle friends and organize your group ride easily"
  },
  {
    icon: <Navigation className="w-6 h-6" />,
    title: "Track Each Other",
    description: "Real-time location sharing",
    detail: "See where everyone is on the map and stay connected throughout the ride"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Chat & Stay Safe",
    description: "Communicate and send SOS",
    detail: "Use in-ride chat and emergency features to ensure everyone's safety"
  }
];

export default function JourneyDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Plan Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Group Ride
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how easy it is to organize and stay connected during your motorcycle adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Steps */}
          <div className="space-y-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  currentStep === index
                    ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border-blue-400/50 shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
                onClick={() => setCurrentStep(index)}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-full transition-all duration-500 ${
                      currentStep === index
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                        currentStep === index ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`transition-colors duration-500 ${
                        currentStep === index ? "text-gray-200" : "text-gray-400"
                      }`}
                    >
                      {step.description}
                    </p>
                    <AnimatePresence>
                      {currentStep === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-blue-300 mt-2"
                        >
                          {step.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2.2rem] p-4 relative overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg p-4 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex flex-col items-center justify-center text-center"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mb-4">
                          {journeySteps[currentStep].icon}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {journeySteps[currentStep].title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {journeySteps[currentStep].detail}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around phone */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-300 rounded-full opacity-40"
              />
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {journeySteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentStep === index
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
