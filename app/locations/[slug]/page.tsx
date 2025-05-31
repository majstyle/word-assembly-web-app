"use client";

import { notFound } from "next/navigation";
import { locations } from "../data";
import Image from "next/image";
import {
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Heart,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

// Add these styles at the top of the file, after the imports

// Add this style block right after the imports
const floatKeyframes = `
  @keyframes float {
    0% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-10px) translateX(10px); }
    50% { transform: translateY(0) translateX(20px); }
    75% { transform: translateY(10px) translateX(10px); }
    100% { transform: translateY(0) translateX(0); }
  }
  
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

type Params = {
  params: {
    slug: string;
  };
};

export default function LocationPage({ params }: Params) {
  const location = locations[params.slug as keyof typeof locations];
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add the style element
  useEffect(() => {
    if (!isClient) return;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = floatKeyframes;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [isClient]);

  // Auto-rotate testimonials
  const testimoniesLength = useMemo(
    () => location.testimonies.length,
    [location.testimonies]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimoniesLength - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimoniesLength]);

  // Now safe to check for notFound
  if (!location) return notFound();

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === location.testimonies.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? location.testimonies.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white overflow-hidden">
      {/* Hero Section with Enhanced Parallax Effect */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 z-10 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/40"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: `url(${location.heroImage})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full mix-blend-overlay animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-overlay animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up space-y-6 z-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-yellow-600 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300 border border-amber-300/20">
              Welcome to
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white animate-gradient-x">
                {location.name}
              </span>
            </h1>
            <div className="flex items-center justify-center text-white/90 space-x-3 mb-8">
              <MapPin className="h-6 w-6 text-yellow-400" />
              <p className="text-lg md:text-xl font-light">
                {location.address || "123 Faith Street, City, Country"}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center space-x-3 border border-white/10 shadow-xl hover:bg-white/20 transition-all duration-300 group">
                <Calendar className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white text-lg">Sundays</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center space-x-3 border border-white/10 shadow-xl hover:bg-white/20 transition-all duration-300 group">
                <Clock className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white text-lg">10:00 AM</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center space-x-3 border border-white/10 shadow-xl hover:bg-white/20 transition-all duration-300 group">
                <Users className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white text-lg">All Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Enhanced Design */}
      <section
        id="about"
        className="py-20 lg:mb-10 relative overflow-hidden bg:white"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-yellow-200 to-amber-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-yellow-200 to-amber-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/3"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5 -z-10"></div>

        <div className="max-w-6xl text-center lg:text-left mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className=" space-y-3 lg:space-y-10 order-2 md:order-1">
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-yellow-200 text-amber-800 rounded-full text-sm font-medium shadow-sm border border-amber-200">
                Our Community
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Become a part of our{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-amber-600 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-600">
                    Family
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200 -z-10 transform -rotate-1 rounded"></span>
                </span>
              </h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="text-lg leading-relaxed">
                  &quot;and let us consider one another in order to stir up love
                  and good works, not forsaking the assembling of ourselves
                  together, as is the manner of some, but exhorting one another,
                  and so much the more, as you see the day approaching&quot;{" "}
                  <span className="font-semibold">— Hebrews 10:24-25 NKJV</span>
                </p>
              </div>
            </div>

            <div className="relative order-1 md:order-2 transform hover:rotate-1 transition-all duration-700">
              {/* Decorative elements */}
              <div
                className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-500/30 to-yellow-500/20 rounded-full -z-10 animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tr from-amber-500/30 to-yellow-500/20 rounded-full -z-10 animate-pulse"
                style={{ animationDuration: "6s" }}
              ></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.03] duration-700 border-4 border-white">
                {/* Image overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent mix-blend-overlay z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-10"></div>

                <Image
                  className="w-full h-auto lg:h-[500px] object-cover aspect-[4/3]"
                  src={
                    location.heroImage ||
                    "/placeholder.svg?height=600&width=800" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  width={800}
                  height={600}
                  alt={`${location.name} community`}
                  priority
                />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow-500 to-transparent opacity-70"></div>
                  <Heart className="absolute top-4 right-4 h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Design */}
      <section
        id="testimonials"
        className="py-20 lg:-mt-16 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-amber-200 to-yellow-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-full text-sm font-medium mb-6 shadow-sm">
              Testimonials
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              <span className="relative inline-block">
                <span className="relative z-10">Transformed Lives</span>
                <span className="absolute left-0 w-full h-3 bg-yellow-200 -z-10 transform -rotate-1 rounded"></span>
              </span>
            </h3>
            <div className="mt-6 lg:-mt-6 max-w-2xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                Real stories from real people whose lives have been transformed
                through our community
              </p>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-6xl lg:-mt-8 mx-auto ">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-20 lg:left-10 top-[850px] lg:top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-14 h-14 rounded-full border border-yellow-500 shadow-lg flex items-center justify-center text-black hover:shadow-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-[300px] lg:right-10 top-[850px] lg:top-1/2 -translate-y-1/2 translate-x-12 z-10 w-14 h-14 rounded-full border border-yellow-500 shadow-lg flex items-center justify-center text-black hover:shadow-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Container */}
            <div className="relative overflow-hidden h-[800px] md:h-[500px] lg:h-[450px] ">
              {location.testimonies.map((testimony, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                    index === activeTestimonial
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-3xl p-10 w-full max-w-5xl mx-auto border border-amber-100 backdrop-filter backdrop-blur-sm bg-white/90">
                    <div className="absolute top-6 left-6 text-amber-300/20 text-9xl font-serif">
                      &quot;
                    </div>
                    <div className="mb-8 relative z-10">
                      <svg
                        className="h-12 w-12 text-amber-400 mb-6"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-700 italic leading-relaxed text-xl relative z-10">
                        &quot;{testimony.quote}&quot;
                      </p>
                    </div>
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                          {testimony.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900 text-lg">
                            {testimony.author}
                          </p>
                          <p className="text-sm text-gray-500">Member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Enhanced Design */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-10 -z-10"></div>

        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -z-10 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -z-10 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-bold text-black mb-10">
            Join us this Sunday
          </h3>
          <p className="text-xl lg:-mt-6 text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to welcome you to our community. Come experience the
            warmth, love, and transformation that awaits you.
          </p>
        </div>
        <div className="mt-20 lg:-mt-4 max-w-5xl mx-auto bg-white backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-xl">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Connect With Us
          </h3>

          {/* <!-- Contact Cards --> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-blue-600 backdrop-blur-md rounded-2xl py-6 lg:py-6 lg:p-6 shadow-lg border border-white/40 transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Email Us</p>
                  <p className="text-sm text-white/70">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>
              <Link
                className="relative inline-block font-medium text-white text-lg group"
                href={`mailto:${location.email}`}
              >
                <span className="relative z-10 transition-colors duration-300">
                  {location.email}
                </span>
                <span className="absolute bottom-0.5 left-0 w-full h-1 group-hover:h-full group-hover:rounded-md transition-all duration-300"></span>
              </Link>
            </div>

            <div className="bg-blue-600 backdrop-blur-md py-6 lg:py-6 rounded-2xl lg:p-6 shadow-lg border border-white/40 transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Call Us</p>
                  <p className="text-sm text-white/70">
                    Available 9am-5pm, Mon-Fri
                  </p>
                </div>
              </div>
              <Link
                className="relative inline-block font-medium text-white text-lg group"
                href={`tel:${location.phone}`}
              >
                <span className="relative z-10 transition-colors duration-300">
                  {location.phone}
                </span>
                <span className="absolute bottom-0.5 left-0 w-full h-1 group-hover:h-full group-hover:rounded-md transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
