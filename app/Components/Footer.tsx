import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="mt-auto bg-gray-900 w-full lg:px-16">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="col-span-full lg:col-span-1">
              <div className="w-32 h-14 bg-white flex justify-center items-center rounded-lg">
                <Link
                  className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
                  href="/"
                  aria-label="Brand"
                >
                  <Image
                    src="/assets/waLOGO.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  ></Image>
                </Link>
              </div>

              <p className="text-gray-400 lg:mt-6 mt-4 lg:text-base text-sm">
                Plan your visit to any of our locations and experience
                transformation.
                <br />
                <br />
                7, Hitech Road, Beside Pan-Atlantic University (LBS), Lekki-Epe
                Expressway, Lagos.
                <br />
                <br />
                +234 805 888 1818
                <br />
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                  href="mailto:admin@wordassembly.org"
                >
                  admin@wordassembly.org
                </Link>
              </p>
            </div>

            <div className="col-span-1 lg:ml-20">
              <h4 className="font-semibold text-gray-100">Quick Links</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                    href="/about"
                  >
                    About us
                  </Link>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                    href="https://www.youtube.com/@WordAssembly"
                  >
                    Sermons
                  </a>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                    href="https://www.leadershipdevotional.org/"
                  >
                    Leadership Devotional
                  </Link>{" "}
                </p>

                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                    href="https://proofproducersleadershipinstitute.org/"
                  >
                    Proof Producers Leadership Institute
                  </Link>{" "}
                </p>

                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                    href="https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q"
                  >
                    Counselling
                  </Link>
                </p>

                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                    href="https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q"
                  >
                    Prayer Request
                  </Link>
                </p>
              </div>
            </div>
            {/* End Col */}

            <div className="col-span-2 lg:ml-20">
              <h4 className="font-semibold text-gray-100">Hear From Us</h4>
              <p className=" text-gray-400 lg:mt-4">
                Subscribe to Our Newsletter! Receive updates, inspiring stories,
                and event highlights directly to your inbox. We promise not to
                spam you but only send relevant contents.
              </p>

              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Subscribe
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-transperent outline-none rounded-lg text-sm focus:border-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Link
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Subscribe
                  </Link>
                </div>
              </form>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-white">
                © 2024 Word Assembly. All rights reserved.
              </p>
            </div>
            {/* End Col */}

            {/* Social Brands */}
            <div>
              <Link
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-white hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 disabled:opacity-50 disabled:pointer-events-none mr-2"
                href="https://web.facebook.com/wordassemblyHQ/?_rdc=1&_rdr"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </Link>
              <Link
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-white hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 disabled:opacity-50 disabled:pointer-events-none mr-2"
                href="https://www.instagram.com/wordassemblyhq/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </Link>
              <Link
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-white hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 disabled:opacity-50 disabled:pointer-events-none mr-2"
                href="https://www.tiktok.com/@wordassemblyhq"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(0, 0, 0, 1)", transform: "" }}
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </Link>
              <Link
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white bg-white hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 disabled:opacity-50 disabled:pointer-events-none"
                href="https://www.youtube.com/channel/UCMYso2rgkc7yKG2giKi-3bw"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                </svg>
              </Link>
            </div>
            {/* End Social Brands */}
          </div>
        </div>
      </footer>
      {/* END FOOTER */}
    </>
  );
}
