"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Music2, Mic2, Leaf, HeartHandshake } from "lucide-react";
import React from "react";

// Feature data with expanded content
const features = [
  {
    title: "Worship",
    icon: Music2,
    color: "from-purple-400 to-purple-600",
    description:
      "Experience powerful worship that connects you to something greater.",
  },
  {
    title: "Praise",
    icon: Mic2,
    color: "from-teal-400 to-teal-600",
    description: "Find your place in a diverse and welcoming community.",
  },
  {
    title: "Service",
    icon: Leaf,
    color: "from-emerald-400 to-emerald-600",
    description: "Discover resources to help you grow in your faith journey.",
  },
  {
    title: "Growth",
    icon: HeartHandshake,
    color: "from-rose-400 to-rose-600",
    description:
      "Join us in making a difference in our local and global community.",
  },
];

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  // const featureControls = useAnimation();

  // Sequential feature reveal animation
  useEffect(() => {
    const revealFeatures = async () => {
      // Wait for initial content to appear
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reveal each feature one by one
      for (let i = 0; i < features.length; i++) {
        setVisibleFeatures((prev) => [...prev, i]);

        // Highlight each feature briefly as it appears
        setActiveFeature(i);

        // Wait longer for each feature to be showcased
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      // Reset active feature after all are shown
      setActiveFeature(null);
    };

    revealFeatures();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true);
      });

      videoRef.current.load();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  // Card variants
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.6,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 1,
        duration: 0.7,
      },
    },
    active: {
      scale: 1.1,
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 5px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Icon animation variants
  const iconVariants: Variants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1,
        duration: 0.5,
      },
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  };

  // Title animation variants
  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
  };

  // Underline animation variants
  const underlineVariants: Variants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "50%",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
    active: {
      width: "80%",
      opacity: 1,
    },
  };

  return (
    <section className="relative w-full h-[100vh] md:h-[100vh] mt-16 bg-zinc-900 text-white overflow-hidden">
      {/* Video background with optimized loading */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
        >
          <source src="/assets/10SECONDS.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Loading placeholder */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
          <div className="w-12 h-12">
            <svg
              className="animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}

      {/* Modern overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 via-zinc-900/70 to-zinc-900/90"></div>

      {/* Subtle accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-teal-500/20"></div>

      {/* Main content - focused and impactful */}
      <div className="relative z-10 h-full -mt-12 lg:-mt-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Top navigation - simplified */}

        {/* Hero content - centered for impact */}
        <div className="flex-1 flex items-center justify-center mt-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 lg:-mt-10 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium tracking-wider"
            >
              SUNDAYS AND WEDNESDAYS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
            >
              Welcome To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-400">
                Church
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8"
            >
              We raise leader who are spiritually and socially relevant. Join us
              as we explore faith, build community, and make a difference
              together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/about" className="flex justify-center">
                <button className="lg:w-full mb-6 lg:mb-4 sm:w-auto px-4 py-3 lg:px-6 lg:py-2 bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium rounded-full hover:from-red-500 hover:to-amber-500 transition-all duration-300 flex items-center justify-center ">
                  Discover more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Feature highlights with sequential reveal */}
        <div className="pb-12 grid grid-cols-2 md:grid-cols-4 gap-4 perspective-1000">
          {features.map((feature, index) => (
            <AnimatePresence key={index}>
              {visibleFeatures.includes(index) && (
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={activeFeature === index ? "active" : "visible"}
                  whileHover="active"
                  whileTap="tap"
                  onClick={() =>
                    setActiveFeature(index === activeFeature ? null : index)
                  }
                  className={`bg-white/10 backdrop-blur-sm rounded-xl text-center relative overflow-hidden cursor-pointer transform-gpu transition-all duration-500 ${
                    activeFeature === index ? "z-10" : "z-0"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0`}
                    animate={{
                      opacity: activeFeature === index ? 0.3 : 0.1,
                      rotate: [0, 360],
                      scale: activeFeature === index ? 1.1 : 1,
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      rotate: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: { duration: 0.5, type: "spring" },
                    }}
                  />

                  {/* Icon with animation */}
                  <motion.div
                    className="text-4xl lg:mb-2 lg:mt-3 relative mx-auto flex items-center justify-center h-14 lg:h-4"
                    variants={iconVariants}
                    initial="hidden"
                    animate={activeFeature === index ? "pulse" : "visible"}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-full "
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                    {React.createElement(feature.icon)}
                  </motion.div>

                  {/* Title with animation */}
                  <motion.div
                    className="mb-2 text-xl font-bold"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                      {feature.title}
                    </span>
                  </motion.div>

                  {/* Animated underline */}
                  <motion.div
                    className={`h-0.5 bg-gradient-to-r ${feature.color} mx-auto mb-2`}
                    variants={underlineVariants}
                    initial="hidden"
                    animate={activeFeature === index ? "active" : "visible"}
                  />

                  {/* Description with reveal animation */}
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-sm text-zinc-300 overflow-hidden"
                      >
                        {feature.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="w-6 h-10 border border-white/20 rounded-full flex justify-center items-start p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-red-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
