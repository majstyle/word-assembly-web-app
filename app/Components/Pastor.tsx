export default function Pastor() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col lg:flex-row">
        <div className="bg-gray-900 lg:mt-16 mt-10 w-full lg:w-3/4 lg:mb-20">
          <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-10 lg:pt-16 lg:pb-32 pb-10">
            <h1 className="font-semibold text-white text-5xl md:text-6xl px-4 lg:px-16">
              <span className="text-yellow-500 ">Meet Our Pastors:</span>
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-white lg:text-lg px-4 lg:px-16">
                God will always use men to accomplish His purpose on earth. In
                Word Assembly, our set man is Philip Igbinijesu. A legal
                Practitioner by training, he has been pastoring since 1986 but
                has been in full-time pastoral work since 1994...
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full lg:w-2/4 lg:mt-16 bg-white bg:rounded-lg">
          <div
            data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
            className="relative"
          >
            <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white">
              <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full bg-gray-100 p-6">
                    <span className="self-center text-4xl text-gray-800 transition duration-700">
                      First slide
                    </span>
                  </div>
                </div>
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full bg-gray-200 p-6">
                    <span className="self-center text-4xl text-gray-800 transition duration-700">
                      Second slide
                    </span>
                  </div>
                </div>
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full bg-gray-300 p-6">
                    <span className="self-center text-4xl text-gray-800 transition duration-700">
                      Third slide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
            ></button>
            <button
              type="button"
              className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
            ></button>

            <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
              <span className="hs-carousel-active:bg-yellow-400 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              <span className="hs-carousel-active:bg-yellow-400 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
              <span className="hs-carousel-active:bg-yellow-400 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
            </div>
          </div>
        </div>
        {/* End Carousel */}
      </div>
      {/* End Hero */}
    </>
  );
}
