export default function Card() {
      return (
        <>
          <h1 className="text-center lg:mt-20 -mt-6 lg:text-4xl text-2xl font-bold text-gray-800">How we can serve you</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 lg:mt-16 mt-8 mb-14">
            <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-yellow-500 shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <h4 className="text-lg font-bold text-gray-800">Book a Session</h4>
                <p className="mt-2 text-gray-500">
                Find healing and guidance through counseling with our loving team to help your spritual and emotional journey.
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-yellow-600 decoration-2 hover:text-yellow-700 hover:underline focus:underline focus:outline-none focus:text-yellow-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
    
            <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-yellow-500 shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Messages</h3>
                <p className="mt-2 text-gray-500">
                God's word is a light to our path. Listen to the undiluted word of His power and watch your Christian faith grow tremendiously.
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-yellow-600 decoration-2 hover:text-yellow-700 hover:underline focus:underline focus:outline-none focus:text-yellow-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Listen now
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
    
            <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-yellow-500 shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Submit Prayer Request</h3>
                <p className="mt-2 text-gray-500">
                  Prayer is a major aspect of our Christian walk. We are here to trust God with you to see your desires come to live
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-yellow-600 decoration-2 hover:text-yellow-700 hover:underline focus:underline focus:outline-none focus:text-yellow-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Submit now
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
    