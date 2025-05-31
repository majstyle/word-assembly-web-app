"use client";

import type React from "react";

import { notFound } from "next/navigation";
import { campuses, type CampusSlug } from "../campus";
import Image from "next/image";
import {
  ChevronRight,
  Heart,
  ChevronLeft,
  ArrowRight,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Send,
  BookOpen,
  Music,
  Coffee,
  Star,
  Users,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function CampusPage({ params }: { params: { slug: string } }) {
  const campus = campuses[params.slug.toLowerCase() as CampusSlug];
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle not found case
  if (!campus) return notFound();
  const testimoniesLength = campus.testimonies.length;

  // Setup effects after mount
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${
          scrollPosition * 0.4
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isMounted && testimoniesLength > 1) {
      intervalId = setInterval(() => {
        setActiveTestimonial((prev) =>
          prev === testimoniesLength - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [testimoniesLength, isMounted]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimoniesLength - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimoniesLength - 1 : prev - 1
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        {/* Background image with overlay */}
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-blend-color bg-no-repeat bg-center scale-110"
          style={{ backgroundImage: `url(${campus.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full mix-blend-overlay blur-xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full mix-blend-overlay blur-xl" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 max-w-7xl lg:mt-8 mx-auto">
          <div className="space-y-8 z-20 max-w-2xl">
            <span className="inline-block px-6 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium mb-2 shadow-lg transform hover:translate-y-[-2px] transition-all duration-300">
              Word Assembly Campus Fellowship (WACF)
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4 tracking-tight leading-[1.1]">
              {campus.name}
            </h1>
            <p className="text-xl text-white/90 font-light max-w-xl lg:ml-1">
              A place to grow in faith, build lasting friendships, and discover
              your purpose.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="#about"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium shadow-lg flex items-center space-x-2 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full font-medium shadow-lg backdrop-blur-sm transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="pt-36 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-emerald-50 to-amber-50 rounded-full filter blur-3xl opacity-70 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100 rounded-full -z-10 opacity-50"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700">
                <Image
                  className="w-full h-auto object-cover aspect-[4/3]"
                  src={
                    campus.aboutImage || "/placeholder.svg?height=600&width=800"
                  }
                  width={800}
                  height={600}
                  alt={`${campus.name} community`}
                  priority
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-100 rounded-full -z-10 opacity-50"></div>
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                A place to belong & grow together
              </h2>
              <div className="text-gray-700">
                <p className="text-lg leading-relaxed">
                  Our campus fellowship is more than just a weekly
                  gathering—it's a family where you can find authentic
                  relationships, spiritual growth, and a sense of purpose.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  &quot;and let us consider one another in order to stir up love
                  and good works, not forsaking the assembling of ourselves
                  together, as is the manner of some, but exhorting one another,
                  and so much the more, as you see the day approaching&quot;{" "}
                  <span className="font-semibold">— Hebrews 10:24-25 NKJV</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#FFFAF5] rounded-t-[100%] opacity-50"></div>
        <div className="absolute top-0 right-0 w-full h-20 bg-[#FFFAF5] rounded-b-[100%] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              What We Offer
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Experience Community
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                Join us for these life-giving activities that help us grow
                together
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FFFAF5] rounded-3xl p-8 shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <BookOpen className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Bible Study
              </h4>
              <p className="text-gray-600 flex-grow">
                Dive deep into God's Word through interactive and engaging
                studies.
              </p>
            </div>

            <div className="bg-[#FFFAF5] rounded-3xl p-8 shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Music className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Worship Nights
              </h4>
              <p className="text-gray-600 flex-grow">
                Experience powerful moments of worship and prayer together.
              </p>
            </div>

            <div className="bg-[#FFFAF5] rounded-3xl p-8 shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Coffee className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Small Groups
              </h4>
              <p className="text-gray-600 flex-grow">
                Connect in smaller settings to build deeper relationships.
              </p>
            </div>

            <div className="bg-[#FFFAF5] rounded-3xl p-8 shadow-lg border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Service Projects
              </h4>
              <p className="text-gray-600 flex-grow">
                Make a difference in our community through outreach and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-emerald-900 text-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-[#FFFAF5] rounded-b-[100%] opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-full h-20 bg-[#FFFAF5] rounded-t-[100%] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-emerald-800 text-emerald-100 rounded-full text-sm font-medium mb-6">
              Testimonials
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Transformed Lives
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-emerald-100">
                Real stories from real people whose lives have been transformed
                through our community
              </p>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl bg-emerald-800 shadow-2xl">
              {campus.testimonies.map((testimony, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${
                    index === activeTestimonial
                      ? "opacity-100 translate-x-0"
                      : index < activeTestimonial
                      ? "opacity-0 -translate-x-full absolute inset-0"
                      : "opacity-0 translate-x-full absolute inset-0"
                  }`}
                >
                  <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-2 bg-emerald-700 p-8 md:p-12 flex items-center justify-center">
                      <div className="h-32 w-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-4xl shadow-lg">
                        {testimony.author.charAt(0)}
                      </div>
                    </div>

                    <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                      <svg
                        className="h-12 w-12 text-emerald-600 mb-6"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-xl italic leading-relaxed mb-8">
                        &quot;{testimony.quote}&quot;
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-xl">
                          {testimony.author}
                        </p>
                        <p className="text-emerald-300">Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-emerald-100/30 flex items-center justify-center hover:bg-emerald-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex space-x-3">
                {campus.testimonies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial
                        ? "bg-amber-400"
                        : "bg-emerald-700"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-emerald-100/30 flex items-center justify-center hover:bg-emerald-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-emerald-900 rounded-b-[100%] opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100 to-transparent opacity-70 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-100 to-transparent opacity-70 -z-10"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                  Join Us This Sunday
                </div>
                <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                  Your Journey Starts Here
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  We'd love to welcome you to our community. Come experience the
                  warmth, love, and transformation that awaits you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Star className="h-5 w-5" />
                    </div>
                    <p className="text-gray-700">
                      Inspiring worship and teaching
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Users className="h-5 w-5" />
                    </div>
                    <p className="text-gray-700">
                      Authentic community and friendships
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <Coffee className="h-5 w-5" />
                    </div>
                    <p className="text-gray-700">
                      Coffee and refreshments after service
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href="#contact"
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium shadow-lg inline-flex items-center space-x-2 transform hover:translate-y-[-2px] transition-all duration-300"
                  >
                    <span>Get Connected</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-amber-100 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-emerald-100 rounded-full"></div>

                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={
                      campus.call_to_action_image ||
                      "/placeholder.svg?height=600&width=800"
                    }
                    width={600}
                    height={800}
                    alt="Campus fellowship gathering"
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-amber-50 to-emerald-50 rounded-b-[100%]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-5 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                Get In Touch
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
                We'd Love to Hear From You
              </h3>
              <p className="text-lg text-gray-700 mb-12 max-w-xl">
                Whether you have questions about our fellowship or want to learn
                more about getting involved, we're here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mt-1 shadow-md">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Location
                    </h4>
                    <p className="text-gray-600">{campus.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mt-1 shadow-md">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Email
                    </h4>
                    <Link
                      href={`mailto:${campus.email}`}
                      className="text-emerald-600 hover:underline"
                    >
                      {campus.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mt-1 shadow-md">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      Phone
                    </h4>
                    <Link
                      href={`tel:${campus.phone}`}
                      className="text-emerald-600 hover:underline"
                    >
                      {campus.phone}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-medium text-gray-900 mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-50 to-transparent -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-50 to-transparent -z-10"></div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h4>

                {submitSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                      <Send className="h-7 w-7" />
                    </div>
                    <h5 className="text-xl font-medium text-gray-900 mb-2">
                      Message Sent!
                    </h5>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="I'd like to learn more about..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium shadow-lg transition-all duration-300 flex items-center justify-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
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
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#FFFAF5] rounded-t-[100%]"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#FFFAF5] text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {campus.name} Fellowship. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
