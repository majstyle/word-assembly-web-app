import Link from "next/link";

export default function Pastor() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col lg:flex-row">
        <div className="bg-gray-900 lg:mt-2 mt-10 w-full lg:w-9/10 lg:mb-4">
          <div className="max-w-5xl mx-auto px-4 pt-10 lg:pt-20 lg:pb-20 pb-10">
            <h1 className="font-semibold text-white text-5xl md:text-6xl px-4 lg:px-16 text-center lg:text-left">
              <span className="text-yellow-500 ">Meet Our Pastors</span>
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-white lg:text-lg px-4 lg:px-16 text-center lg:text-left">
                God will always use men to accomplish His purpose on earth. In
                Word Assembly, our set man is Philip Igbinijesu. A legal
                Practitioner by training, he has been pastoring since 1986 but
                has been in full-time pastoral work since 1994...
              </p>
              <div className="px-4 lg:px-16 mt-4 flex justify-center lg:flex lg:justify-start">
                <Link
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-0 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://wordassembly.org/blog/about-pastor-philip/"
                >
                  Learn more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="w-full lg:w-2/4 px-4 lg:h-[70.7vh] bg-cover bg-left lg:mt-2 mt-10"
          style={{ backgroundImage: "url('/assets/pastors.JPEG')" }}
        ></div>

        {/* End Carousel */}
      </div>
      {/* End Hero */}
    </>
  );
}
