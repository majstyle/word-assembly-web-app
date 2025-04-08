import Image from "next/image";
import { QuoteIcon } from "lucide-react";

export default function Section1() {
  return (
    <section className="py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-white to-white">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5 hidden lg:block">
          <div className="w-40 h-40 rounded-full bg-yellow-500 blur-3xl"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 md:items-center relative">
          <div className="relative z-10">
            <div className="absolute -top-10 -left-10 text-yellow-500/10 hidden lg:block">
              <QuoteIcon size={80} />
            </div>

            <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl lg:leading-tight text-center lg:text-left mb-6">
              Become a part of our{" "}
              <span className="text-yellow-600 relative">
                Family
                <span className="absolute bottom-1 left-0 w-full h-1 bg-yellow-300 opacity-50"></span>
              </span>
            </h1>

            <div className="relative mt-6 mb-8 p-6 bg-white/80 rounded-lg shadow-sm border border-slate-100">
              <div className="absolute -top-3 -left-2 text-yellow-500">
                <QuoteIcon size={24} />
              </div>
              <p className="italic text-slate-700 leading-relaxed">
                &quot;And let us consider one another in order to stir up love
                and good works, not forsaking the assembling of ourselves
                together, as is the manner of some, but exhorting one another,
                and so much the more, as you see the day approaching&quot;
              </p>
              <p className="text-right mt-2 text-sm font-medium text-slate-600">
                — Hebrews 10:24-25 NKJV
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full opacity-70 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-70 blur-2xl"></div>

            {/* Image container with decorative border */}
            <div className="relative p-2 bg-white rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 via-white to-blue-100 rounded-lg opacity-50"></div>
              <div className="relative overflow-hidden rounded-md">
                <Image
                  className="w-full h-auto object-cover rounded-md transition-transform hover:scale-105 duration-700"
                  src="/assets/family.jpg"
                  width={600}
                  height={600}
                  alt="Church family gathering together in worship and fellowship"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
