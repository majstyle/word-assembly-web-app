import Image from "next/image";

export default function Section1() {
  return (
    <>
      {/* Section1 */}
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 lg:mt-28">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="hidden lg:block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight text-center lg:text-left mb-4 lg:mb-0">
              Become a part of our{" "}
              <span className="text-yellow-500">Family</span>
            </h1>
            <h1 className="block lg:hidden text-center text-3xl font-bold text-gray-800 mt-4 mb-3">
              Become a part of our{" "}
              <span className="text-yellow-500">Family</span>
            </h1>
            <p className="lg:mt-3 lg:text-lg text-gray-800 text-center lg:text-left mb-3 lg:mb-0">
              &quot;and let us consider one another in other to stir up love and
              good works, not forsaking the assembling of ourselves together, as
              is the manner of some, but extorting one another, and so much the
              more, as you see the day approaching&quot; (Hebrew 11:24-25 NKJV)
            </p>
          </div>

          <div className="relative ms-0">
            <Image
              className="rounded-md"
              src="/assets/family.jpg"
              width={600}
              height={600}
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
