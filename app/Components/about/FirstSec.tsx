import Image from "next/image";
import Link from "next/link";

export default function FirstSec() {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-[80rem] mx-auto px-4 lg:px-24 mt-10 lg:mt-24 lg:mb-8">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-4xl lg:text-5xl">
              30 Years of God&apos;s{" "}
              <span className="text-yellow-500">Faithfulness</span>
            </h1>
            <p className="mt-3 text-sm text-gray-800 lg:text-lg">
              &apos;Word Assembly&apos;s history is a testament to God&apos;s
              faithfulness and the transformative power of His Word. Founded on
              July 31st, 1994, Word Assembly emerged from a divine mandate
              received by Pastor Philip Igbinijesu to proclaim the righteousness
              of God&apos;s Word. From its humble beginnings at Plot 133, Ahmadu
              Bello Way, Victoria Island, Lagos, Word Assembly has grown into a
              vibrant and influential ministry, impacting lives both locally and
              globally.
            </p>
            {/* <Link
              className="  hover:text-yellow-600 font-bold rounded-lg text-gray-800"
              href="#"
            >
              Read more
            </Link> */}
          </div>
          {/* End Text Column */}

          <div className=" mt-10 lg:mt-0">
            <Image
              className="w-full rounded-md h-64 lg:h-96"
              src="/assets/faithfulness.jpg"
              alt="Hero Image"
              width={600}
              height={600}
            />
          </div>
          {/* End Image Column */}
        </div>
        {/* End Grid Layout */}
      </div>
      {/* End Hero Section */}
    </>
  );
}
