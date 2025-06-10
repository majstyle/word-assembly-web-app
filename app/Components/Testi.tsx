"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from "lucide-react";
import Link from "next/link";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote:
        "During the 40 Days of Glory, God answered our prayers—my missing brother called today from Portugal and plans to return next week. My mum and brother, once dependent on drugs, have not needed them since the prayers. God has also transformed my prayer life and given me clarity in my walk with Him. All glory to God!",
      author: "John Atime",
      image: "/placeholder.svg?height=80&width=80",
      theme: "reunion",
      highlight: "missing brother called today",
    },
    {
      id: 2,
      quote:
        "I'm over myself with joy this morning. We must learn not to ignore the prompting of the Holy Spirit. My brother and his wife woke up this morning and felt a strong nudge not to take the children to school. They literally dressed, undressed, and redressed the kids this morning. They had barely rode 5 minutes away from the house when my brother and all three kids were involved in an accident But God being faithful, they all came out UNHURT.",
      author: "Olivia",
      image: "/placeholder.svg?height=80&width=80",
      theme: "protection",
      highlight: "they all came out UNHURT",
    },
    {
      id: 3,
      quote:
        "God has been incredibly good to my family and me this year. We have experienced His divine help in every area of our lives. He has provided for us in remarkable ways, cared for our children, protected us every step of the way, and strengthened us through every challenge. His faithfulness has been our anchor, and we are deeply grateful for His unending love and grace.",
      author: "Minister E-Praise",
      image: "/placeholder.svg?height=80&width=80",
      theme: "provision",
      highlight: "His faithfulness has been our anchor",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, testimonials.length]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Helper function to highlight text
  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-yellow-600 font-semibold relative">
              {part}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300/40"></span>
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // Get theme-specific elements
  const getThemeElements = (theme: string) => {
    switch (theme) {
      case "reunion":
        return {
          icon: <Heart className="h-6 w-6 text-rose-500" />,
          color: "from-rose-500/20 to-yellow-500/20",
          accent: "bg-rose-100",
        };
      case "protection":
        return {
          icon: <Star className="h-6 w-6 text-blue-500" />,
          color: "from-blue-500/20 to-indigo-500/20",
          accent: "bg-blue-100",
        };
      case "provision":
        return {
          icon: <Star className="h-6 w-6 text-emerald-500" />,
          color: "from-emerald-500/20 to-teal-500/20",
          accent: "bg-emerald-100",
        };
      default:
        return {
          icon: <Star className="h-6 w-6 text-yellow-500" />,
          color: "from-yellow-500/20 to-amber-500/20",
          accent: "bg-yellow-100",
        };
    }
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOGZhZmMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTEydjEyaDEyeiIvPjxwYXRoIGQ9Ik0zMCAzNnYtMTJoLTEydjEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-4">
            <Quote className="h-4 w-4 mr-2" />
            <span>Testimonies of Faith</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Lives{" "}
            <span className="text-yellow-600 relative inline-block">
              Transformed
              <span className="absolute bottom-1 left-0 w-full h-1 bg-yellow-300 opacity-50"></span>
            </span>{" "}
            by God
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            Witness the incredible ways God is working in the lives of our
            church family
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div
            className={`absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gradient-radial ${
              getThemeElements(testimonials[currentSlide].theme).color
            } opacity-70 blur-3xl transition-all duration-700`}
          ></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-gradient-radial from-yellow-500/10 to-transparent opacity-70 blur-3xl"></div>

          {/* Main testimonial card */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-500/30 rounded-tl-lg"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-500/30 rounded-br-lg"></div>

            {/* Testimonial content */}
            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Author image and info */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg ${
                      getThemeElements(testimonials[currentSlide].theme).accent
                    }`}
                  ></div>
                  <div className="mt-4 text-center">
                    <div className="font-semibold text-slate-800">
                      {testimonials[currentSlide].author}
                    </div>
                    <div className="flex items-center justify-center mt-2">
                      {getThemeElements(testimonials[currentSlide].theme).icon}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-yellow-300/50" />
                    <Quote className="absolute -bottom-6 -right-2 h-8 w-8 text-yellow-300/50 transform rotate-180" />

                    <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic px-6 py-2">
                      {highlightText(
                        testimonials[currentSlide].quote,
                        testimonials[currentSlide].highlight
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative wave pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-yellow-50 via-slate-50 to-yellow-50 opacity-70"></div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg border border-slate-100 text-slate-700 hover:text-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 700);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-yellow-500 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg border border-slate-100 text-slate-700 hover:text-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Has God done something amazing in your life?
          </p>
          <Link
            href="/share-testimony"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            Send your Testimony{" "}
            <Link href="https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q"></Link>
          </Link>
        </div>
      </div>
    </section>
  );
}
