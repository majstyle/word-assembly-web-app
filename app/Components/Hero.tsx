export default function Hero() {
  return (
    <>
      {/* Slider */}
      <div className="bg-hero-pattern bg-cover bg-center h-96 lg:w-full lg:h-screen text-center leading-3">
        <h1 className="text-3xl text-center lg:text-center lg:flex lg:items-center lg:flex-col lg:pt-40 pt-10 text-gray-800 font-bold lg:text-7xl lg:leading-tight dark:text-slate-100">
          Welcome To Word Assembly{" "}
        </h1>
        <span className="text-slate-200 lg:text-2xl text-sm lg:flex lg:justify-center pt-4 lg:pt-0">
          We raise leaders that are spiritually and socially relevant
        </span>
        <div className="flex flex-col gap-y-5 items-center mt-6 lg:flex-row lg:justify-center lg:gap-x-2 lg:mt-10">
          <a
            className="py-3 px-6 inline-flex justify-center items-center text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-gray-800 hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            View Locations
            <svg
              className="ml-2 shrink-0"
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
            className="py-3 px-6 inline-flex justify-center items-center text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-gray-800 hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Join Online
            <svg
              className="ml-2 shrink-0"
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
