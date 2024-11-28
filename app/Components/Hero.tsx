"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Worship",
  "Praise",
  "Fellowship",
  "Transformation",
  "Grow",
  "Serve",
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] lg:h-screen bg-cover bg-center text-yellow-200 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-screen object-cover lg:mt-16 bg-{fixed}"
      >
        <source src="/assets/10SECONDS.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-70">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              opacity: Math.random(),
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: ["0%", "100%"],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              fontWeight: "bold",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-7xl font-bold mb-6 text-center mt-12 lg:mt-16"
        >
          Welcome To Church
        </motion.h1>

        <div className="h-20 mb-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-semi-bold text-center"
            >
              {words[currentWord]}
            </motion.div>
          </AnimatePresence>
        </div>

        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-2 border border-yellow-200 text-yellow-200 rounded-lg font-semibold text-lg shadow-lg transition duration-300"
          >
            Explore
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
