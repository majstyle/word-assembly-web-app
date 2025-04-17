"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import clsx from "clsx";

type Testimony = {
  quote: string;
  author: string;
};

type TestimonialCarouselProps = {
  testimonies: Testimony[];
};

export default function TestimonialCarousel({
  testimonies,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonies.length]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length
      );
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonies.length]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative">
      <div className="overflow-hidden py-8">
        <div
          className={clsx(
            "transition-all duration-500 ease-in-out flex items-center justify-center",
            isAnimating &&
              direction === "right" &&
              "translate-x-[-100%] opacity-0",
            isAnimating &&
              direction === "left" &&
              "translate-x-[100%] opacity-0"
          )}
        >
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute top-6 left-6 text-yellow-500">
              <Quote className="h-12 w-12 opacity-20" />
            </div>
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 italic mb-8 relative z-10 pt-6">
                &quot;{testimonies[currentIndex].quote}&quot;
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
                <p className="font-semibold text-gray-900">
                  {testimonies[currentIndex].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        {/* Indicators */}
        <div className="flex items-center space-x-2">
          {testimonies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-yellow-500 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
