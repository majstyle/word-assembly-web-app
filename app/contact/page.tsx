"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  MessageSquare,
  Users,
  HelpCircle,
} from "lucide-react";

export default function Contact() {
  // Form state
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Refs for animations
  const formRef = useRef<HTMLFormElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const heroControls = useAnimation();

  // Handle scroll animations
  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    }
  }, [isHeroInView, heroControls]);

  // Form field validation
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${
        name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, " $1")
      } is required`;
    }

    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }

    if (
      name === "phone" &&
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)
    ) {
      return "Please enter a valid phone number";
    }

    return "";
  };

  // Handle input changes with validation
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Handle form step navigation
  const goToNextStep = () => {
    // Validate current step fields
    let hasErrors = false;
    const newErrors: Record<string, string> = {};

    if (formStep === 0) {
      ["fullName", "email", "phone"].forEach((field) => {
        const error = validateField(
          field,
          formData[field as keyof typeof formData]
        );
        if (error) {
          newErrors[field] = error;
          hasErrors = true;
        }
      });
    }

    setFieldErrors(newErrors);

    if (!hasErrors) {
      setFormStep((prev) => prev + 1);
    }
  };

  // Send the email when the form is submitted
  const send = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value as string);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setFieldErrors(newErrors);

    if (hasErrors) {
      return;
    }

    setStatus("loading");

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setFormStep(0);
      } else {
        setStatus("error");
        setErrorMessage(
          result.error || "Error sending message. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const fadeInUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 },
    },
  };

  const formStepVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
  };

  // FAQ data
  const faqs = [
    {
      question: "What time are your Sunday services?",
      answer:
        "Our Sunday services are held at 9:00 AM and 11:30 AM. We also have a Wednesday evening service at 7:00 PM.",
    },
    {
      question: "How can I get involved in the church?",
      answer:
        "There are many ways to get involved! You can join a small group, volunteer for one of our ministry teams, or participate in our community outreach programs. Fill out the contact form and mention your interests, and we'll help you find the perfect fit.",
    },
    {
      question: "Do you have programs for children?",
      answer:
        "Yes, we have age-appropriate programs for children from infants through high school. Our children's ministry runs during both Sunday services, and we have youth group meetings on Friday evenings.",
    },
    {
      question: "How can I schedule counseling?",
      answer:
        "For counseling requests, please select 'Counseling' in the subject dropdown of our contact form. One of our pastoral staff will reach out to schedule an appointment with you within 48 hours.",
    },
  ];

  // Contact method cards with enhanced data
  const contactMethods = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit us",
      description:
        "7, Hitech Road, Beside Pan-Atlantic University (LBS), Lekki-Epe Expressway, Lagos.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call us",
      description: "+234 805 888 1818",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email us",
      description: "admin@wordassembly.org",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Service Hours",
      description: "Sundays: 9:00 AM - 11:30 AM",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b  from-white via-gray-50 to-white min-h-screen overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full  bg-yellow-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25"></div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-20 w-24 h-24 border-4 border-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-blue-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-200 rounded-lg opacity-20 rotate-45"></div>
      </div>

      {/* Hero section */}
      <div ref={heroRef} className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroControls}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-block mb-3">
              <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                GET IN TOUCH
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              We'd Love to Hear{" "}
              <span className="relative">
                From You
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 opacity-40 -z-10"></span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Have questions about our church, services, or how to get involved?
              Reach out to us and our team will get back to you shortly.
            </motion.p>

            {/* Quick contact buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex  flex-wrap justify-center gap-4"
            >
              <a
                href="tel:+2348058881818"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all text-gray-700 gap-2"
              >
                <Phone size={16} className="text-yellow-500" />
                <span>Call Us</span>
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all text-gray-700 gap-2"
              >
                <MessageSquare size={16} className="text-yellow-500" />
                <span>Message Us</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="relative top-8  transform -translate-x-1/2 flex flex-col items-center justify-center"
        >
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <ChevronDown size={20} className="text-yellow-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Contact methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${method.color}`}></div>
              <div className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg ${method.bgColor} flex items-center justify-center mb-4`}
                >
                  <div className={`${method.textColor}`}>{method.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact form */}
          <motion.div
            id="contact-form"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 lg:order-2"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 py-8 px-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full"></div>
                <h2 className="text-2xl font-bold text-white relative z-10">
                  Send us a message
                </h2>
                <p className="text-yellow-50 mt-1 relative z-10">
                  We'll get back to you as soon as possible
                </p>

                {/* Form steps indicator */}
                {status !== "success" && (
                  <div className="flex items-center mt-6 relative z-10">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        formStep === 0
                          ? "bg-white text-yellow-500"
                          : "bg-yellow-100 text-yellow-700"
                      } font-medium`}
                    >
                      1
                    </div>
                    <div
                      className={`h-1 w-12 ${
                        formStep > 0 ? "bg-white" : "bg-yellow-100"
                      }`}
                    ></div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        formStep === 1
                          ? "bg-white text-yellow-500"
                          : "bg-yellow-100 text-yellow-700"
                      } font-medium`}
                    >
                      2
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12"
                  >
                    <div className="text-center">
                      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Thank you for reaching out to Word Assembly. Our team
                        will review your message and get back to you shortly.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          onClick={() => setStatus("idle")}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                        >
                          Send another message
                        </button>

                        <a
                          href="/"
                          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                        >
                          Return to homepage
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={send} className="space-y-6">
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start"
                      >
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="text-sm font-medium text-red-800">
                            There was an error sending your message
                          </h3>
                          <p className="mt-1 text-sm text-red-700">
                            {errorMessage}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    <AnimatePresence mode="wait">
                      {formStep === 0 && (
                        <motion.div
                          key="step1"
                          variants={formStepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Full Name{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="fullName"
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  required
                                  className={`block w-full rounded-lg shadow-sm sm:text-sm py-3 px-4 pl-10 ${
                                    fieldErrors.fullName
                                      ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                                      : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                  }`}
                                  placeholder="John Doe"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Users
                                    size={16}
                                    className={
                                      fieldErrors.fullName
                                        ? "text-red-400"
                                        : "text-gray-400"
                                    }
                                  />
                                </div>
                              </div>
                              {fieldErrors.fullName && (
                                <p className="mt-1 text-sm text-red-600">
                                  {fieldErrors.fullName}
                                </p>
                              )}
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Email Address{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className={`block w-full rounded-lg shadow-sm sm:text-sm py-3 px-4 pl-10 ${
                                    fieldErrors.email
                                      ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                                      : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                  }`}
                                  placeholder="john@example.com"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Mail
                                    size={16}
                                    className={
                                      fieldErrors.email
                                        ? "text-red-400"
                                        : "text-gray-400"
                                    }
                                  />
                                </div>
                              </div>
                              {fieldErrors.email && (
                                <p className="mt-1 text-sm text-red-600">
                                  {fieldErrors.email}
                                </p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone Number{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={`block w-full rounded-lg shadow-sm sm:text-sm py-3 px-4 pl-10 ${
                                  fieldErrors.phone
                                    ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                }`}
                                placeholder="+234 805 888 1818"
                              />
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone
                                  size={16}
                                  className={
                                    fieldErrors.phone
                                      ? "text-red-400"
                                      : "text-gray-400"
                                  }
                                />
                              </div>
                            </div>
                            {fieldErrors.phone && (
                              <p className="mt-1 text-sm text-red-600">
                                {fieldErrors.phone}
                              </p>
                            )}
                          </div>

                          <div>
                            <button
                              type="button"
                              onClick={goToNextStep}
                              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                            >
                              Continue
                              <ChevronDown className="ml-2 h-5 w-5 rotate-270" />
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {formStep === 1 && (
                        <motion.div
                          key="step2"
                          variants={formStepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="space-y-6"
                        >
                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Subject <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className={`block w-full rounded-lg shadow-sm sm:text-sm py-3 px-4 pl-10 ${
                                  fieldErrors.subject
                                    ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                }`}
                              >
                                <option value="">Select a subject</option>
                                <option value="General Inquiry">
                                  General Inquiry
                                </option>
                                <option value="Prayer Request">
                                  Prayer Request
                                </option>
                                <option value="Volunteer Opportunities">
                                  Volunteer Opportunities
                                </option>
                                <option value="Counseling">Counseling</option>
                                <option value="Other">Other</option>
                              </select>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <HelpCircle
                                  size={16}
                                  className={
                                    fieldErrors.subject
                                      ? "text-red-400"
                                      : "text-gray-400"
                                  }
                                />
                              </div>
                            </div>
                            {fieldErrors.subject && (
                              <p className="mt-1 text-sm text-red-600">
                                {fieldErrors.subject}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Message <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className={`block w-full rounded-lg shadow-sm sm:text-sm py-3 px-4 ${
                                  fieldErrors.message
                                    ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                }`}
                                placeholder="How can we help you?"
                              ></textarea>
                            </div>
                            {fieldErrors.message && (
                              <p className="mt-1 text-sm text-red-600">
                                {fieldErrors.message}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <button
                              type="button"
                              onClick={() => setFormStep(0)}
                              className="flex-1 flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                            >
                              Back
                            </button>

                            <button
                              type="submit"
                              disabled={status === "loading"}
                              className={`flex-1 flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors ${
                                status === "loading"
                                  ? "opacity-80 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              {status === "loading" ? (
                                <>
                                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  Send Message
                                  <Send className="ml-2 h-5 w-5" />
                                </>
                              )}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Sidebar with map and FAQs */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 lg:order-1 space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-80 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286255268573!2d3.5392!3d6.4389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9b12c9e3a!2sLekki-Epe%20Expy%2C%20Lekki%20Peninsula%20II%2C%20Lagos!5e0!3m2!1sen!2sng!4v1624012345678!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location"
                className="absolute inset-0"
              ></iframe>

              {/* Map overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="font-semibold">Word Assembly</h3>
                <p className="text-sm">
                  7, Hitech Road, Lekki-Epe Expressway, Lagos
                </p>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 px-8">
                <h2 className="text-xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-300 text-sm mt-1">
                  Quick answers to common questions
                </p>
              </div>

              <div className="p-6 space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <button
                      onClick={() =>
                        setActiveFaq(activeFaq === index ? null : index)
                      }
                      className="flex justify-between items-center w-full text-left focus:outline-none"
                    >
                      <h3 className="font-medium text-gray-900">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          activeFaq === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-gray-600 text-sm">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
