import Link from "next/link";

export default function Section2() {
  return (
    <>
      {/* Features */}
      <div className="max-w-[75rem] px-4 lg:px-14 lg:py-14 ">
        {/* Grid */}
        <div className="flex items-center justify-center">
          <div className="mt-20 lg:grid lg:grid-cols-2 lg:items-center">
            <div className=" hidden lg:block">
              {/* Grid */}
              <div className="lg:flex lg:gap-0">
                <div className="lg:flex lg:flex-col lg:gap-0">
                  <div className=" bg-[url(/assets/family1.png)] bg-contain bg-center w-64 h-44 rounded-xl bg-no-repeat" />
                  {/* End Col */}
                  <div className=" bg-[url(/assets/business.png)] bg-contain bg-center w-64 h-44 rounded-xl bg-no-repeat" />

                  {/* End Col */}
                </div>

                <div className="lg:flex lg:flex-col lg:gap-0">
                  <div className=" bg-[url(/assets/theology.png)] bg-contain bg-center w-64 h-44 rounded-xl bg-no-repeat" />
                  <div className=" bg-[url(/assets/leadership.png)] bg-contain bg-center w-64 h-44 rounded-xl bg-no-repeat" />
                  {/* End Col */}
                </div>
              </div>
              {/* End Grid */}
            </div>
            {/* End Col */}

            <div className=" sm:mt-10 -mt-12 lg:mt-0 px-0 lg:px-5">
              <div>
                {/* Title */}
                <div className="space-y-2 lg:space-y-4 ml-0 lg:ml-14 mb-0 lg:mb-10">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 text-center lg:text-left mb-3 lg:mb-2">
                    Gain valuable knowledge
                  </h2>
                  <p className="text-gray-800 lg:text-lg text-center lg:text-left mb-3 lg:mb-0 ">
                    Proof Producers Leadership Institute is our umbrella
                    training institute that gives you access to diverse courses
                    in theology, leadership, family management, business and
                    other areas of life.
                  </p>
                  <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                    <Link
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-0 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
                      href="https://proofproducersleadershipinstitute.org/"
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
                {/* End Title */}
              </div>
            </div>
            {/* End Col */}
          </div>
        </div>

        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
}
