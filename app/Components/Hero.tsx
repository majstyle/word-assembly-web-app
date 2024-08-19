export default function Hero() {
  return (
    <>
      {/* Slider */}
      <div className="bg-hero-pattern bg-cover bg-center w-full h-screen">
        <h1 className="text-3xl text-left flex items-center flex-col pt-40 text-gray-800 font-bold sm:text-5xl lg:text-7xl lg:leading-tight dark:text-slate-100">
          Welcome To Word Assembly{" "}
          <span className="text-slate-200 text-2xl">We raise leaders that are spiritually and socially relevant</span>
        </h1>
        <div className="flex justify-center lg:mt-10">
        <a
                    className="py-5 px-6 inline-flex justify-center items-center lg:ml-2 gap-x-0 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-gray-800 hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    View Locations
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
                  </a>

                  <a
                    className="py-5 px-6 inline-flex justify-center items-center lg:ml-2 gap-x-0 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-gray-800 hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Join online
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
                  </a>
        </div>
      </div>
    </>
  );
}
