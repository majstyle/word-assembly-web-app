import Image from "next/image";

export default function Section2() {
  return (
    <>
      {/* Features */}
      <div className="max-w-[70rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="mt-20 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-7">
            {/* Grid */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-6">
              <div className="col-span-4">
                <Image
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                  alt="Features Image"
                  width={50} 
                  height={40}
                />
              </div>
              {/* End Col */}

              <div className="col-span-3">
                <Image
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                  alt="Features Image"
                  width={50} 
                  height={40}
                />
              </div>
              {/* End Col */}

              <div className="col-span-5">
                <Image
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                  alt="Features Image"
                  width={50} 
                  height={40}
                />
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Col */}

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  Gain valuable knowledge
                </h2>
                <p className="text-gray-500">
                  Proof Producers Leadership Institute gives you access to
                  diverse courses in theology, leadership, family management,
                  business and other areas of life.
                </p>
                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <a
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-0 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Title */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
}
