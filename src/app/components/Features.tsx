"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Globe, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Real-Time Tracking",
    description: "Share your live location with your riding group and see where everyone is on the map"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Management",
    description: "Create and manage riding groups, invite friends, and organize your motorcycle adventures"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Route Planning",
    description: "Plan multi-stop routes with waypoints and share them with your riding crew"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "SOS & Safety",
    description: "Emergency SOS features and safety alerts to keep your group protected during rides"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "In-Ride Chat",
    description: "Communicate with your group through integrated chat without stopping your ride"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Trip Organization",
    description: "Organize trips with stops, meet-up points, and keep all ride discussions in one place"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Trailo?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the features that make Trailo the best choice for your transportation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300 border border-blue-400/20 group-hover:border-blue-400/40">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
