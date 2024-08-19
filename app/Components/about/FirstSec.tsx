export default function FirstSec() {
  return (
    <>
      {/* Hero */}
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-24 lg:mt-24 lg:mb-24">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-4xl lg:text-5xl">
              30 Years of God's <span className="text-yellow-500">Faithfulness</span> 
            </h1>
            <p className="mt-3 text-sm text-gray-800">
              Word Assembly's history is a testament to God's faithfulness and
              the transformative power of His Word. Founded on July 31st, 1994,
              Word Assembly emerged from a divine mandate received by Pastor
              Philip Igbinijesu to proclaim the righteousness of God's Word.
              From its humble beginnings at Plot 133, Ahmadu Bello Way, Victoria
              Island, Lagos, Word Assembly has grown into a vibrant and
              influential ministry, impacting lives both locally and globally... <a className="text-gray-800 hover:text-yellow-600 font-extrabold" href="#">Read more</a>
            </p>
          </div>
          {/* End Col */}

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
              alt="Hero Image"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
