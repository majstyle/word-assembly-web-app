"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Users,
  BookOpen,
  Heart,
  Globe,
  Star,
  MapPin,
  Calendar,
  ArrowRight,
  Quote,
  ChevronLeft,
} from "lucide-react";

// Custom animated counter component
const Counter = ({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) =>
    latest.toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop ? () => controls.stop() : undefined;
  }, [count, to, duration]);

  return <motion.span>{displayValue}</motion.span>;
};

// Helper function for the counter
import { animate as framerAnimate } from "framer-motion";

const animate = (
  value: MotionValue,
  to: number,
  options: { duration: number }
) => {
  return framerAnimate(value, to, {
    duration: options.duration,
  });
};

// Particle component for decorative elements
const Particle = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      animate={{
        y: ["0%", "100%"],
        opacity: [0, 1, 0],
        scale: [0, 1, 0.5],
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  );
};

// Text reveal animation component
const AnimatedText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {text}
      </motion.div>
    </div>
  );
};

// Animated character component for letter-by-letter animations
const AnimatedCharacters = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const letters = Array.from(text);

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.5 + index * 0.04,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

// Testimonial component
const Testimonial = ({
  quote,
  author,
  role,
  image,
}: {
  quote: string;
  author: string;
  role: string;
  image: string;
}) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
            <Quote className="h-4 w-4 text-amber-500" />
          </div>
          <Image
            src={image || "/placeholder.svg"}
            alt={author}
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-amber-400 p-1"
          />
        </div>
        <div>
          <p className="text-gray-700 italic mb-4 leading-relaxed">{quote}</p>
          <div className="flex items-center">
            <div className="h-px w-8 bg-amber-300 mr-3"></div>
            <div>
              <p className="font-semibold text-gray-900">{author}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Leadership card component
const LeadershipCard = ({
  name,
  role,
  image,
  bio,
}: {
  name: string;
  role: string;
  image: string;
  bio: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group perspective-1000"
      whileHover={{ z: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden bg-white shadow-lg transform-gpu"
        animate={{
          rotateY: isHovered ? 15 : 0,
          rotateX: isHovered ? -10 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-amber-300">{role}</p>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-white/95 p-6 flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
              <p className="text-amber-600 mb-4">{role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Shadow effect */}
      <motion.div
        className="absolute -bottom-4 left-0 right-0 h-8 bg-black/20 blur-lg rounded-full mx-4 z-0"
        animate={{
          width: isHovered ? "80%" : "90%",
          x: isHovered ? 10 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};

// Animated divider component
const AnimatedDivider = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-px bg-amber-300 flex-grow"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="w-3 h-3 rounded-full bg-amber-500 mx-3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          delay: 0.5,
        }}
      />
      <motion.div
        className="h-px bg-amber-300 flex-grow"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
};

// Leadership Carousel component
const LeadershipCarousel = ({
  leaders,
  isInView,
}: {
  leaders: any[];
  isInView: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovering]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === leaders.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? leaders.length - cardsToShow : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Carousel container */}
      <div ref={carouselRef} className="overflow-hidden">
        <motion.div
          className="flex"
          initial={false}
          animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 px-4`}
              style={{ width: `${100 / cardsToShow}%` }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * Math.min(index, cardsToShow),
              }}
            >
              <LeadershipCard
                name={leader.name}
                role={leader.role}
                image={leader.image}
                bio={leader.bio}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-between items-center mt-8">
        <motion.button
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-amber-500 transition-colors border border-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        {/* Pagination dots */}
        <div className="flex space-x-2">
          {Array.from({ length: leaders.length - cardsToShow + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-amber-500 w-6"
                    : "bg-gray-300 hover:bg-amber-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>

        <motion.button
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-amber-500 transition-colors border border-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function About() {
  // State for accordion and other interactive elements
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Check if elements are in view
  const isHistoryInView = useInView(historyRef, {
    once: true,
    margin: "-100px",
  });
  const isWhoWeAreInView = useInView(whoWeAreRef, {
    once: true,
    margin: "-100px",
  });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });
  const isLeadershipInView = useInView(leadershipRef, {
    once: true,
    margin: "-100px",
  });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Spring animations for smoother effects
  const springHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });
  const springTitleY = useSpring(titleY, { stiffness: 100, damping: 30 });

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Accordion data
  const accordionData = [
    {
      title: "Vision",
      icon: <Star className="h-5 w-5 text-amber-500" />,
      content: "Raising leaders who are spiritually and socially relevant.",
    },
    {
      title: "Mission",
      icon: <Globe className="h-5 w-5 text-amber-500" />,
      content:
        "To thoroughly equip and inspire the believer to influence their generation and impact the Kingdom of God.",
    },
    {
      title: "Core Values",
      icon: <Heart className="h-5 w-5 text-amber-500" />,
      content: (
        <div>
          <p className="text-gray-800 font-semibold mb-3">(A-B-I-D-E)</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
              Availability (Phil. 2:19-23)
            </li>
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
              Benevolence (Matt. 25:34-40)
            </li>
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
              Integrity (Ps.78: 70-72)
            </li>
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
              Diligence (Prov. 22: 29, 2 Peter 1:10)
            </li>
            <li className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2"></span>
              Excellence (Phil. 1:10, Dan. 6:3)
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Campus Fellowship",
      icon: <Users className="h-5 w-5 text-amber-500" />,
      content:
        "Word Assembly extends its reach and impact beyond the confines of its local congregation through its vibrant campus fellowships, strategically distributed across university campuses. These campus fellowships serve as dynamic hubs of spiritual growth, community engagement, and leadership development for students.",
    },
  ];

  // Timeline data
  const timelineData = [
    {
      year: "1994",
      title: "Foundation",
      description:
        "Word Assembly was founded on July 31st, 1994 by Pastor Philip Igbinijesu following a divine mandate to proclaim God's Word.",
      image: "/assets/faithfulness.jpg",
    },
    {
      year: "2004",
      title: "Growth & Expansion",
      description:
        "The church expanded to multiple services and launched various outreach programs to serve the community.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2014",
      title: "Campus Ministry Launch",
      description:
        "Word Assembly launched campus fellowships across universities to nurture young leaders and expand its impact.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2024",
      title: "30th Anniversary",
      description:
        "Celebrating three decades of ministry, impact, and God's faithfulness to the Word Assembly community.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  // Leadership data
  const leadershipData = [
    {
      name: "Pastor Philip Igbinijesu",
      role: "Senior Pastor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Pastor Philip Igbinijesu founded Word Assembly in 1994 following a divine mandate. With over 30 years in ministry, he is passionate about raising leaders who are both spiritually and socially relevant.",
    },
    {
      name: "Pastor Sarah Igbinijesu",
      role: "Executive Pastor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Pastor Sarah oversees the day-to-day operations of the church and leads the women's ministry. Her heart for discipleship has impacted countless lives within the congregation.",
    },
    {
      name: "Pastor David Okonkwo",
      role: "Youth Pastor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Pastor David leads our vibrant youth ministry, creating programs that engage young people and help them discover their purpose and calling in Christ.",
    },
    {
      name: "Pastor Grace Adeyemi",
      role: "Worship Pastor",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Pastor Grace directs our worship ministry, cultivating an atmosphere of authentic worship and training worship leaders to serve with excellence.",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Word Assembly has been instrumental in my spiritual growth. The teachings are profound yet practical, and the community is truly like family.",
      author: "Michael Adebayo",
      role: "Member since 2010",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I found my purpose and calling through the leadership programs at Word Assembly. The mentorship I've received has transformed my life and career.",
      author: "Chioma Okafor",
      role: "Campus Fellowship Leader",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The emphasis on both spiritual growth and social impact at Word Assembly has helped me live out my faith in every area of my life.",
      author: "Emmanuel Nwachukwu",
      role: "Member since 2015",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  // Toggle accordion function
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <>
      {/* Hero Section with Advanced Parallax */}
      <motion.div
        ref={heroRef}
        className="relative w-full h-[70vh] lg:h-[90vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <Particle
              key={i}
              className={`
                w-${Math.floor(Math.random() * 4) + 2} 
                h-${Math.floor(Math.random() * 4) + 2} 
                bg-amber-${Math.floor(Math.random() * 3) * 100 + 300}
                left-[${Math.random() * 100}%]
              `}
            />
          ))}
        </div>

        {/* Background with parallax effect */}
        <motion.div
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
          style={{
            y: springHeroY,
            scale: heroScale,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-10"></div>
        </motion.div>

        {/* Content */}
        <div className="relative h-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col justify-center items-center">
          <motion.div className="text-center" style={{ y: springTitleY }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 text-sm font-medium rounded-full border border-amber-500/30">
                ESTABLISHED 1994
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <AnimatedCharacters
                text="Our Story"
                className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent"
              />
            </motion.h1>

            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-xl text-gray-200 leading-relaxed">
                Three decades of faith, community, and transformation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10"
            ></motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              className="w-1.5 h-3 bg-amber-400 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* History Section with 3D effects */}
      <div
        id="history"
        ref={historyRef}
        className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-amber-50"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-amber-300 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-amber-300 opacity-20 rotate-45"></div>

          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHistoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-4 border border-amber-200">
                  OUR JOURNEY
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                <AnimatedText
                  text="30 Years of"
                  className="inline-block overflow-hidden"
                />
                <br />
                <span className="relative inline-block mt-2">
                  <AnimatedText
                    text="God's Faithfulness"
                    className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent"
                    delay={0.2}
                  />
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-3 bg-amber-200 -z-10"
                    initial={{ width: 0 }}
                    animate={isHistoryInView ? { width: "100%" } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  ></motion.span>
                </span>
              </h2>

              <motion.p
                className="text-gray-700 lg:text-md leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Word Assembly&apos;s history is a testament to God&apos;s
                faithfulness and the transformative power of His Word. Founded
                on July 31st, 1994, Word Assembly emerged from a divine mandate
                received by Pastor Philip Igbinijesu to proclaim the
                righteousness of God&apos;s Word.
              </motion.p>

              <motion.p
                className="text-gray-700 lg:text-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                From its humble beginnings at Plot 133, Ahmadu Bello Way,
                Victoria Island, Lagos, Word Assembly has grown into a vibrant
                and influential ministry, impacting lives both locally and
                globally through its commitment to biblical teaching and
                community transformation.
              </motion.p>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isHistoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              ></motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 mb-10 lg:mb-0 perspective-1000"
              initial={{ opacity: 0 }}
              animate={isHistoryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Main image with 3D effect */}
                <motion.div
                  className="relative z-10"
                  initial={{ rotateY: 15, rotateX: -5 }}
                  animate={isHistoryInView ? { rotateY: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  whileHover={{ rotateY: 5, rotateX: -5 }}
                >
                  <motion.div
                    className="absolute -top-4 -right-4 w-full h-full border-2 border-amber-500 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={isHistoryInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  ></motion.div>
                  <Image
                    className="w-full rounded-lg h-64 md:h-80 lg:h-96 object-cover shadow-2xl"
                    src="/assets/faithfulness.jpg"
                    alt="30 Years of God's Faithfulness"
                    width={600}
                    height={600}
                  />

                  {/* Image frame details */}
                  <div className="absolute inset-0 border-[3px] border-white/20 rounded-lg pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg"></div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-lg z-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isHistoryInView ? { opacity: 0.6, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                ></motion.div>

                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 bg-amber-400 rounded-full z-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isHistoryInView ? { opacity: 0.2, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section with Animated Counters */}
      <div
        ref={statsRef}
        className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 lg:py-28 relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          {/* Light rays */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-amber-500/5 blur-3xl transform -rotate-45"></div>
          <div className="absolute top-0 right-1/4 w-1/2 h-full bg-amber-500/5 blur-3xl transform rotate-45"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full mb-4 border border-amber-500/30">
              OUR IMPACT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Making a Difference
            </h2>
            <AnimatedDivider className="w-32 mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: 5000,
                label: "Members",
                icon: <Users className="h-8 w-8" />,
              },
              {
                value: 12,
                label: "Campus Fellowships",
                icon: <BookOpen className="h-8 w-8" />,
              },
              {
                value: 30,
                label: "Years of Ministry",
                icon: <Calendar className="h-8 w-8" />,
              },
              {
                value: 120,
                label: "Community Projects",
                icon: <Heart className="h-8 w-8" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700/50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Highlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-full flex items-center justify-center mb-4 text-amber-400 relative">
                  {stat.icon}
                  <div className="absolute inset-0 rounded-full border border-amber-500/30"></div>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent mb-2">
                  {isStatsInView ? <Counter from={0} to={stat.value} /> : 0}
                </h3>
                <p className="text-amber-100/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section with Enhanced Accordion */}
      <div
        id="who-we-are"
        ref={whoWeAreRef}
        className="bg-gradient-to-b from-white to-amber-50 py-24 lg:py-32 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>

          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isWhoWeAreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-4 border border-amber-200">
              OUR IDENTITY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Our Vision, Mission, and Core Values define our identity and guide
              our journey as a church community.
            </p>
            <AnimatedDivider className="w-32 mx-auto mt-6" />
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isWhoWeAreInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {accordionData.map((item, index) => (
              <motion.div
                key={index}
                className={`mb-6 rounded-2xl overflow-hidden border ${
                  activeAccordion === index
                    ? "border-amber-500 shadow-xl"
                    : "border-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isWhoWeAreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
                    activeAccordion === index
                      ? "bg-gradient-to-r from-amber-50 to-amber-100"
                      : "hover:bg-amber-50"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`mr-4 ${
                        activeAccordion === index
                          ? "text-amber-600"
                          : "text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeAccordion === index
                        ? "bg-amber-500 text-white"
                        : "bg-amber-100 text-amber-500"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-white border-t border-amber-100">
                        {typeof item.content === "string" ? (
                          <p className="text-gray-700 leading-relaxed">
                            {item.content}
                          </p>
                        ) : (
                          item.content
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Timeline Section with Interactive Elements */}
      <div
        id="timeline"
        ref={timelineRef}
        className="py-24 lg:py-32 bg-white relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-4 border border-amber-200">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Milestones
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Key moments in our 30-year journey of faith and ministry
            </p>
            <AnimatedDivider className="w-32 mx-auto mt-6" />
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200"
              initial={{ height: 0 }}
              animate={isTimelineInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5 }}
            ></motion.div>

            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-24 last:mb-0 ${
                  index % 2 === 0
                    ? "flex-col lg:flex-row"
                    : "flex-col-reverse lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content */}
                <div
                  className={` lg:w-5/12 ${
                    index % 2 === 0
                      ? "pr-0 lg:pr-12 text-right"
                      : "pl-0 lg:pl-12 text-left"
                  }`}
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform-gpu"
                    whileHover={{
                      y: -10,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative h-48 lg:-60 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <span className="text-amber-300 font-bold text-3xl">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-4 border-white shadow-lg flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: index * 0.2 + 0.3,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </motion.div>

                {/* Empty space for layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div
        id="leadership"
        ref={leadershipRef}
        className="py-24 lg:py-32 bg-amber-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-200 rounded-full opacity-30 blur-3xl"></div>

          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b10_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isLeadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-4 border border-amber-200">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Meet the dedicated team guiding our church community
            </p>
            <AnimatedDivider className="w-32 mx-auto mt-6" />
          </motion.div>

          {/* Leadership Carousel */}
          <LeadershipCarousel
            leaders={leadershipData}
            isInView={isLeadershipInView}
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        id="testimonials"
        ref={testimonialsRef}
        className="py-24 lg:py-32 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-amber-300 rounded-full opacity-20"></div>

          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-4 border border-amber-200">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Community
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Hear from members of our church family
            </p>
            <AnimatedDivider className="w-32 mx-auto mt-6" />
          </motion.div>

          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  activeTestimonial === index && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="max-w-2xl mx-auto">
                        <Testimonial
                          quote={testimonial.quote}
                          author={testimonial.author}
                          role={testimonial.role}
                          image={testimonial.image}
                        />
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? "bg-amber-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="bg-gray-900 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-90"></div>

            {/* Decorative pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="mb-8 md:mb-0 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Us This Sunday
                </h2>
                <p className="text-white/90 max-w-lg leading-relaxed">
                  Experience the warmth of our community and the power of God's
                  Word. We'd love to welcome you to our services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-white text-gray-900 font-medium shadow-lg transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center group-hover:text-white transition-colors duration-300">
                    Plan Your Visit
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-amber-200/80">
              <MapPin className="inline-block h-4 w-4 mr-1 mb-1" />
              7, Hitech Road, Beside Pan-Atlantic University (LBS), Lekki-Epe
              Expressway, Lagos
            </p>
            <p className="text-amber-200/80 mt-2">
              <Calendar className="inline-block h-4 w-4 mr-1 mb-1" />
              Sunday Services: 9:00 AM & 11:30 AM
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
