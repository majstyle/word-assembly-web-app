import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";

export default function Pastor() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950/30 to-transparent"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0xMnYxMmgxMnoiLz48cGF0aCBkPSJNMzAgMzZ2LTEyaC0xMnYxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      {/* Light rays */}
      <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-gradient-radial from-yellow-500/10 to-transparent opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 text-yellow-500/10 hidden lg:block">
                <Quote size={80} />
              </div>

              {/* Section badge */}
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-slate-800/80 backdrop-blur-sm text-yellow-400 text-sm font-medium mb-6 border border-slate-700/80">
                <Star className="h-4 w-4 mr-2 fill-yellow-400" />
                <span>Leadership</span>
              </div>

              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Meet Our{" "}
                <span className="text-yellow-400 relative inline-block">
                  Pastors
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-yellow-500/30"></span>
                </span>
              </h1>

              <div className="relative mt-8 mb-10 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden group hover:bg-slate-800/70 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>

                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  God will always use men to accomplish His purpose on earth. In
                  Word Assembly, our set man is Philip Igbinijesu. A legal
                  Practitioner by training, he has been pastoring since 1986 but
                  has been in full-time pastoral work since 1994...
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500/50">
                    <Image
                      src="/assets/pastors.jpeg"
                      alt="Pastor Philip Igbinijesu"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Pastor Philip Igbinijesu
                    </h3>
                    <p className="text-yellow-400 text-sm">Senior Pastor</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wordassembly.org/blog/about-pastor-philip/"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More About Our Pastor
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Decorative light elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>

              {/* Main image with frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/50 border-2 border-slate-700/50 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30 z-10"></div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-500/50 rounded-tl-xl z-20"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-500/50 rounded-br-xl z-20"></div>

                <Image
                  src="/assets/pastors.JPEG"
                  alt="Our Pastors"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/5] transform scale-105 hover:scale-110 transition-transform duration-700"
                />

                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent z-20">
                  <div className="flex items-start">
                    <Quote className="h-8 w-8 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="italic text-white text-lg">
                      Our vision is to raise leaders who are spiritually and
                      socially relevant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-1/4 -right-4 w-8 h-8 bg-yellow-500/30 rounded-full blur-sm animate-pulse"></div>
              <div
                className="absolute bottom-1/3 -left-4 w-8 h-8 bg-yellow-500/20 rounded-full blur-sm animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
