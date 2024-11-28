import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Hero*/}
      <div className="bg-hero-pattern bg-cover bg-center h-72 lg:w-full lg:h-96 text-center leading-3 bg-fixed">
        <h1 className="text-4xl text-center lg:text-center lg:flex lg:items-center lg:flex-col lg:pt-40 pt-36 font-bold lg:text-5xl lg:leading-tight dark:text-slate-100">
          The Leaders Place{" "}
        </h1>

        <div className="flex flex-col gap-y-5 items-center mt-6 lg:flex-row lg:justify-center lg:gap-x-2 lg:mt-10"></div>
      </div>
      {/* Hero*/}

      {/* Section1 */}
      <div className="max-w-[70rem] mx-auto px-4 lg:px-8 mt-10 lg:mt-28">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              Become a part of our{" "}
              <span className="text-yellow-500">Family</span>
            </h1>
            <p className="mt-3 lg:mt-3 lg:text-lg text-gray-800">
              &quot;and let us consider one another in other to stir up love and
              good works, not forsaking the assembling of ourselves together, as
              is the manner of some, but extorting one another, and so much the
              more, as you see the day approaching&quot; (Hebrew 11:24-25 NKJV)
            </p>
          </div>

          <div className="relative ms-0">
            <Image
              className="lg:h-96 rounded-md"
              src="/assets/VisionHero.jpg"
              width={600}
              height={400}
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>

            {/* End SVG */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
      {/* Section1 */}

      {/* Testimonials */}
      <div className="w-full bg-white rounded-lg lg:-mb-16">
        <div
          data-hs-carousel='{
          "loadingClasses": "opacity-0",
          "isAutoPlay": true
        }'
          className="relative"
        >
          <div className="hs-carousel relative overflow-hidden w-full min-h-80 lg:min-h-96 bg-white rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              <div className="hs-carousel-slide">
                {/* Testimonials */}
                <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                  {/* Blockquote */}
                  <blockquote className="text-center lg:mx-auto lg:w-3/5">
                    <div className="mt-6 lg:mt-10">
                      <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                        <svg
                          className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24"
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="relative z-10 italic text-gray-800">
                          &apos;I just wanted to say that I&apos;m very happy
                          with my purchase of Preline so far. The documentation
                          is outstanding - clear and detailed.&apos;
                        </span>
                      </p>
                    </div>

                    <footer className="mt-6">
                      <div className="font-semibold text-gray-800">Philip</div>
                      <div className="text-sm text-gray-500">
                        Product Manager | Airbnb
                      </div>
                    </footer>
                  </blockquote>
                  {/* End Blockquote */}
                </div>
                {/* End Testimonials */}
              </div>
              <div className="hs-carousel-slide">
                {/* Testimonials */}
                <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                  {/* Blockquote */}
                  <blockquote className="text-center lg:mx-auto lg:w-3/5">
                    <div className="mt-6 lg:mt-10">
                      <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                        <svg
                          className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24"
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="relative z-10 italic text-gray-800">
                          &apos;I just wanted to say that I&apos;m very happy
                          with my purchase of Preline so far. The documentation
                          is outstanding - clear and detailed.&apos;
                        </span>
                      </p>
                    </div>

                    <footer className="mt-6">
                      <div className="font-semibold text-gray-800">Philip</div>
                      <div className="text-sm text-gray-500">
                        Product Manager | Airbnb
                      </div>
                    </footer>
                  </blockquote>
                  {/* End Blockquote */}
                </div>
                {/* End Testimonials */}
              </div>
              <div className="hs-carousel-slide">
                {/* Testimonials */}
                <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                  {/* Blockquote */}
                  <blockquote className="text-center lg:mx-auto lg:w-3/5">
                    <div className="mt-6 lg:mt-10">
                      <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                        <svg
                          className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24"
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="relative z-10 italic text-gray-800">
                          &apos;I just wanted to say that I&apos;m very happy
                          with my purchase of Preline so far. The documentation
                          is outstanding - clear and detailed.&apos;
                        </span>
                      </p>
                    </div>

                    <footer className="mt-6">
                      <div className="font-semibold text-gray-800">Philip</div>
                      <div className="text-sm text-gray-500">
                        Product Manager | Airbnb
                      </div>
                    </footer>
                  </blockquote>
                  {/* End Blockquote */}
                </div>
                {/* End Testimonials */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}

      {/* <!-- Contact --> */}
      <div className="max-w-7xl px-4 lg:px-8 lg:py-24 mx-auto mb-10 lg:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
          <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-lg">
            <Image
              src="/assets/VisionHero.jpg"
              alt="Vision"
              width={600}
              height={600}
            ></Image>
          </div>
          {/* <!-- End Col --> */}

          <div className="space-y-10 lg:space-y-6">
            <div>
              <h3 className="mb-5 font-semibold text-black">Our address</h3>

              {/* <!-- Grid --> */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                <div className="flex gap-4">
                  <svg
                    className="shrink-0 size-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600">Lagos State</p>
                    <address className="mt-1 text-black not-italic w-full">
                      7, Hitech Road, Beside Pan-Atlantic University (LBS),
                      Lekki-Epe Expressway, Lagos.
                    </address>
                  </div>
                </div>
              </div>
              {/* <!-- End Grid --> */}
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-black">Our contacts</h3>

              {/* <!-- Grid --> */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-2">
                <div className="flex gap-4">
                  <svg
                    className="shrink-0 size-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600">Email us</p>
                    <p>
                      <Link
                        className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-yellow-400 hover:before:bg-black focus:outline-none focus:before:bg-black"
                        href="mailto:example@site.so"
                      >
                        admin@wordassembly.org
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg
                    className="shrink-0 size-5 text-gray-500"
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>

                  <div className="grow">
                    <p className="text-sm text-gray-600">Call us</p>
                    <p>
                      <Link
                        className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-yellow-400 hover:before:bg-black focus:outline-none focus:before:bg-black"
                        href="mailto:example@site.so"
                      >
                        +234 805 888 1818
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Grid --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
      </div>
      {/* <!-- End Contact --> */}
    </>
  );
}
