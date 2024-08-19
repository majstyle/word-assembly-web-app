<div
        data-hs-carousel='{
    "loadingclassNamees": "opacity-0"
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-32 bg-white rounded-none">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div className="relative w-full h-screen overflow-hidden">
                {/* Video Element */}
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/assets/T.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black-700/90 to-black-700/70"></div>
                {/* Content */}
                <div className="relative z-10 flex justify-center items-center h-full">
                  <h1 className="text-white text-5xl font-extrabold">
                    Welcome Home
                  </h1>
                </div>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="relative w-full h-screen overflow-hidden">
                {/* Video Element */}
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/assets/g.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>
                {/* Content */}
                <div className="relative z-10 flex justify-center items-center h-full">
                  <h1 className="text-white text-4xl">Your Content Here</h1>
                </div>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="hs-carousel-slide">
                <div className="relative w-full h-screen overflow-hidden">
                  {/* Video Element */}
                  <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/assets/g.mp4" type="video/mp4" />
                  </video>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50"></div>
                  {/* Content */}
                  <div className="relative z-10 flex justify-center items-center h-full">
                    <h1 className="text-white text-4xl">Your Content Here</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-red-700 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-red-700 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-red-700 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div>
      {/* End Slider */}