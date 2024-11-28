import Link from "next/link";

export default function Iframe() {
  return (
    <>
      <div className="bg-white -mt-2 lg:mt-6">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-24 lg:pb-10 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Iframe */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-50 lg:h-80 lg:rounded-md"
                src="https://www.youtube.com/embed/Vuve-6BKDOo?controls=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* End Iframe */}

            {/* Timeline */}
            <div className="pb-8 ml-1 lg:ml-5">
              <h1 className=" lg:text-8xl text-4xl font-medium text-gray-800 lg:leading-none -mt-8 lg:-mt-0 text-center lg:text-left">
                Sunday Service{" "}
              </h1>
              <p className="text-gray-800 lg:text-xl text-lg pb-2 lg:pb-5 lg:ml-2 text-center lg:text-left">
                Join us this Sunday Services.{" "}
              </p>
              <Link
                className="py-2 px-3 lg:py-3 lg:px-6 w-full lg:w-40 inline-flex justify-center items-center lg:ml-2 gap-x-0 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
                href="https://www.youtube.com/@WordAssembly"
              >
                Visit Youtube
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
            {/* End Timeline */}
          </div>

          {/* End Grid */}
        </div>
      </div>
      {/* End Approach */}
    </>
  );
}
