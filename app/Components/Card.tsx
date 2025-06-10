"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MessageCircleIcon as MessageCirclePrayer } from "lucide-react";

export default function Card() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative py-10 lg:py-20 overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 to-red-400/30 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>

      {/* Light Rays - Subtle divine light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 1000 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.07]"
        >
          <path
            d="M500 0L520 400M500 0L480 400M500 0L540 400M500 0L460 400M500 0L560 400M500 0L440 400M500 0L580 400M500 0L420 400M500 0L600 400M500 0L400 400M500 0L620 400M500 0L380 400M500 0L640 400M500 0L360 400M500 0L660 400M500 0L340 400M500 0L680 400M500 0L320 400M500 0L700 400M500 0L300 400"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="500"
              y1="0"
              x2="500"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D4A017" />
              <stop offset="1" stopColor="#D4A017" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="inline-block text-amber-600 font-medium mb-3 px-3 py-1 bg-amber-50 rounded-full text-sm">
            SPIRITUAL SUPPORT
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            How We Can <span className="text-red-700">Serve</span> You
          </h1>

          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Our dedicated counseling and prayer team is here to support you in
            every way possible. Whether you need guidance, encouragement, or
            someone to stand with you in prayer, we are committed to walking
            alongside you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Counseling Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <Image
                src="/assets/counselling.png"
                alt="Counseling Session"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Counseling</h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-6">
                Find healing and guidance through counseling with our loving
                team aiding your emotional and spiritual journey. Our trained
                counselors provide a safe space for you to share your struggles
                and find hope.
              </p>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center mr-4">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  <span>Available Online</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Confidential</span>
                </div>
              </div>

              <Link
                href="https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q"
                className="relative overflow-hidden inline-flex items-center justify-center w-full py-4 px-6 rounded-xl text-white font-medium bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10">Book A Session</span>
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </Link>
            </div>
          </motion.div>

          {/* Prayer Request Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <Image
                src="/assets/PR.jpg"
                alt="Prayer Request"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mr-3">
                    <MessageCirclePrayer className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Prayer Request
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-6">
                Seek comfort and share your heart - submit a prayer request and
                we will be glad to pray with you. Our prayer team is committed
                to lifting your needs before God with faith and compassion.
              </p>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center mr-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <span>24/7 Prayer Team</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Confidential</span>
                </div>
              </div>

              <Link
                href="https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q"
                className="relative overflow-hidden inline-flex items-center justify-center w-full py-4 px-6 rounded-xl text-white font-medium bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10">Submit Prayer Request</span>
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Cross */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-5 pointer-events-none">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 0V120M30 40H90"
              stroke="#000000"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
