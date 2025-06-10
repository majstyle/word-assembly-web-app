"use client";

import { useState } from "react";
import ImageCarouselPopup from "./Components/image-carousel-popup";

import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Pastor from "./Components/Pastor";
import Testi from "./Components/Testi";
import Iframe from "./Components/Iframe";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  // Your images - replace with your actual image paths
  const carouselImages = ["/assets/maje.jpg", "/assets/ppbcImage.jpg"];
  return (
    <>
      <Hero />
      <Iframe />
      <Card />
      <Section1 />
      <Section2 />
      <Pastor />
      <Testi />

      {showPopup && (
        <ImageCarouselPopup
          images={carouselImages}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
