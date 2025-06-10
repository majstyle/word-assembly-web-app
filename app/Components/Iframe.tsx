"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";

export default function Iframe() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoId = "Vuve-6BKDOo";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = "/assets/easter.jpg"; // fallback

  const loadVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-50 to-transparent opacity-70"></div>
      <div className="absolute -top-10 right-10 w-40 h-40 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-10 left-10 w-40 h-40 rounded-full bg-amber-100 opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
            <div
              className="aspect-w-16 aspect-h-9 w-full relative"
              style={{ paddingBottom: "56.25%" }}
            >
              {!videoLoaded ? (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={loadVideo}
                >
                  <Image
                    src={thumbnailUrl || fallbackThumbnailUrl}
                    alt="Sunday Service Thumbnail"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
                    <div className="w-20 h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <Play size={36} className="text-amber-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                      Click to play Sunday Service
                    </p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Sunday Service"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-amber-600 font-semibold mb-2 tracking-wide text-center lg:text-left">
                JOIN US IN WORSHIP
              </h2>
              <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold text-gray-800 leading-tight text-center lg:text-left">
                Sunday & Wednesday Services
              </h1>
              <div className="h-1 w-20 bg-amber-500 mt-4 rounded-full mx-auto md:ml-0"></div>
            </div>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-center lg:text-left">
              Experience the power of worship and the Word every Sunday. Our
              services are designed to inspire, uplift, and transform lives
              through praise and biblical teaching.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 font-semibold">1</span>
                </div>
                <p className="text-gray-700">
                  First Service: 8:00 AM - 10:00 AM
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 font-semibold">2</span>
                </div>
                <p className="text-gray-700">
                  Second Service: 10:00 AM - 12:00 PM
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-medium transition-all hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Plan Your Visit
              </Link>
              <Link
                href="https://www.youtube.com/@WordAssembly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-amber-600 text-amber-600 font-medium transition-all hover:bg-amber-50 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                YouTube Channel
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
