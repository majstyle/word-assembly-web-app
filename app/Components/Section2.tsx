import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Briefcase,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Section2() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-white relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply opacity-70 blur-3xl"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOGZhZmMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTEydjEyaDEyeiIvPjxwYXRoIGQ9Ik0zMCAzNnYtMTJoLTEydjEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Proof Producers Leadership Institute</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Gain{" "}
            <span className="text-yellow-600 relative inline-block">
              valuable knowledge
              <span className="absolute bottom-1 left-0 w-full h-1 bg-yellow-300 opacity-50"></span>
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            Our umbrella training institute gives you access to diverse courses
            that will transform your life.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Course categories */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Family Management */}
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/assets/family1.png"
                    alt="Family Management"
                    width={200}
                    height={200}
                    className="object-cover transition-transform duration-700 group-hover:scale-110 lg:ml-8"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 mr-2 text-yellow-300" />
                    <h3 className="font-bold">Family Management</h3>
                  </div>
                  <p className="text-sm text-white/90 hidden group-hover:block">
                    Build stronger family relationships through biblical
                    principles.
                  </p>
                </div>
              </div>

              {/* Business */}
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/assets/Business.png"
                    alt="Business"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 mr-2 text-yellow-300" />
                    <h3 className="font-bold">Business</h3>
                  </div>
                  <p className="text-sm text-white/90 hidden group-hover:block">
                    Learn ethical business practices that honor God and serve
                    others.
                  </p>
                </div>
              </div>

              {/* Theology */}
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/assets/theology.png"
                    alt="Theology"
                    width={200}
                    height={200}
                    className="object-cover transition-transform duration-700 group-hover:scale-110 lg:ml-8"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-5 w-5 mr-2 text-yellow-300" />
                    <h3 className="font-bold">Theology</h3>
                  </div>
                  <p className="text-sm text-white/90 hidden group-hover:block">
                    Deepen your understanding of scripture and theological
                    concepts.
                  </p>
                </div>
              </div>

              {/* Leadership */}
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/assets/leadership.png"
                    alt="Leadership"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 mr-2 text-yellow-300" />
                    <h3 className="font-bold">Leadership</h3>
                  </div>
                  <p className="text-sm text-white/90 hidden group-hover:block">
                    Develop servant leadership skills to guide others
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-500/30 rounded-tl-lg -translate-x-2 -translate-y-2"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-500/30 rounded-br-lg translate-x-2 translate-y-2"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Transform Your Life Through Learning
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-4">
                    <BookOpen className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Comprehensive Curriculum
                    </h4>
                    <p className="text-slate-600">
                      Access diverse courses in theology, leadership, family
                      management, business and other areas of life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-4">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Community Learning
                    </h4>
                    <p className="text-slate-600">
                      Join a supportive community of believers committed to
                      growth and transformation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-4">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Expert Instruction
                    </h4>
                    <p className="text-slate-600">
                      Learn from experienced teachers who combine biblical
                      wisdom with practical application.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="https://proofproducersleadershipinstitute.org/"
                className="group inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-yellow-600 to-amber-600 px-5 py-3 text-base font-medium text-white shadow-lg shadow-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Our Courses
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gradient-to-r from-slate-50 to-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-100 rounded-full opacity-70 blur-xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/assets/family.jpg"
                alt="Student Testimonial"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div>
              <p className="italic text-slate-700 mb-4">
                &quot;he courses at Proof Producers Leadership Institute have
                transformed my understanding of scripture and equipped me to be
                a better leader in my family and community.&quot;
              </p>
              <p className="font-semibold text-slate-800">
                Dn. Tobi Adelerin, Program Graduate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
