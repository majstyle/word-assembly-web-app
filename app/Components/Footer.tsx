"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <footer className="relative  bg-gradient-to-b from-gray-900 to-gray-950 w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute  top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[350px] -left-[100px] w-[600px] h-[600px] rounded-full bg-yellow-500/5 blur-3xl"></div>
        <div className="absolute -bottom-[350px] -right-[100px] w-[600px] h-[600px] rounded-full bg-yellow-500/5 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Logo and contact info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white backdrop-blur-md p-2 rounded-md inline-flex items-center justify-center"
            >
              <Link href="/" aria-label="Word Assembly">
                <Image
                  src="/assets/waLOGO.png"
                  alt="Word Assembly Logo"
                  width={120}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-gray-400 text-sm leading-relaxed"
            >
              Plan your visit to any of our locations and experience
              transformation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-start space-x-3"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                7, Hitech Road, Beside Pan-Atlantic University (LBS), Lekki-Epe
                Expressway, Lagos.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex items-start space-x-3"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm">+234 805 888 1818</p>
                <Link
                  className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-300 inline-flex items-center gap-1 mt-1"
                  href="mailto:admin@wordassembly.org"
                >
                  admin@wordassembly.org
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:ml-8">
            <h4 className="text-white text-lg font-semibold mb-6 flex items-center">
              <div className="w-8 h-0.5 bg-yellow-500 mr-3"></div>
              Quick Links
            </h4>

            <ul className="space-y-4">
              {[
                { name: "About us", href: "/about" },
                {
                  name: "Sermons",
                  href: "https://www.youtube.com/@WordAssembly",
                },
                {
                  name: "Leadership Devotional",
                  href: "https://www.leadershipdevotional.org/",
                },
                {
                  name: "Proof Producers Leadership Institute",
                  href: "https://proofproducersleadershipinstitute.org/",
                },
                {
                  name: "Counselling",
                  href: "https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q",
                },
                {
                  name: "Prayer Request",
                  href: "https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q",
                },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-4 flex items-center">
              <div className="w-8 h-0.5 bg-yellow-500 mr-3"></div>
              Hear From Us
            </h4>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm mb-6 leading-relaxed"
            >
              Subscribe to Our Newsletter! Receive updates, inspiring stories,
              and event highlights directly to your inbox. We promise not to
              spam you but only send relevant contents.
            </motion.p>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 p-1 focus-within:ring-2 focus-within:ring-yellow-500/50 transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-none text-white px-4 py-3 outline-none focus:outline-none text-sm"
                  disabled={isSubmitting || isSubmitted}
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`absolute right-1 top-1 bottom-1 px-4 rounded-md flex items-center justify-center transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  ) : isSubmitted ? (
                    "Subscribed!"
                  ) : (
                    <div className="flex items-center">
                      <span className="mr-2">Subscribe</span>
                      <Send size={16} />
                    </div>
                  )}
                </button>
              </div>
            </motion.form>

            {/* Social media links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 lg:mt-14 lg:ml-44"
            >
              <h5 className="text-white text-sm font-medium lg:ml-16 mb-4">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                {[
                  {
                    icon: <Facebook size={18} />,
                    href: "https://web.facebook.com/wordassemblyHQ/?_rdc=1&_rdr",
                    color: "bg-blue-600 hover:bg-blue-700",
                  },
                  {
                    icon: <Instagram size={18} />,
                    href: "https://www.instagram.com/wordassemblyhq/",
                    color:
                      "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                      </svg>
                    ),
                    href: "https://www.tiktok.com/@wordassemblyhq",
                    color: "bg-black hover:bg-gray-900",
                  },
                  {
                    icon: <Youtube size={18} />,
                    href: "https://www.youtube.com/channel/UCMYso2rgkc7yKG2giKi-3bw",
                    color: "bg-red-600 hover:bg-red-700",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p variants={itemVariants} className="text-gray-500 text-sm">
            © 2024 Word Assembly. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
