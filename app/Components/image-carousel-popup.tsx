"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageCarouselPopupProps {
  images: string[];
  onClose: () => void;
}

export default function ImageCarouselPopup({
  images = ["/assets/easter.jpg", "/assets/easter1.jpg"],
  onClose,
}: ImageCarouselPopupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to ensure it appears after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative lg:mt-8 w-full max-w-3xl p-2 rounded-lg bg-yellow-200/10 shadow-xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full text-white hover:text-black p-1 hover:bg-gray-100"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative mt-6 aspect-video overflow-hidden rounded-md hidden lg:block">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Carousel image ${currentIndex + 1}`}
            width={600}
            height={600}
            className="object-cover lg:ml-[80px]"
            priority
          />
        </div>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-md block lg:hidden">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Carousel image ${currentIndex + 1}`}
            width={310}
            height={310}
            className="object-cover ml-11"
            priority
          />
        </div>

        <div className=" flex items-center justify-between">
          <button
            onClick={handlePrevious}
            className="rounded-full px-16 lg:px-20 hover:bg-transperent text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="text-sm text-gray-500">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            onClick={handleNext}
            className="rounded-full px-16 lg:px-20 hover:bg-transperent text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
