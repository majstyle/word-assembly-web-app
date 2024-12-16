import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <h1 className="text-center lg:mt-20 -mt-10 lg:text-4xl text-2xl font-bold text-gray-800">
        How we can serve you
      </h1>
      <p className="mt-1 text-gray-800 text-center px-5 lg:px-40 lg:text-lg ">
        Our dedicated counseling and prayer team is here to support you in every
        way possible. Whether you need guidance, encouragement, or someone to
        stand with you in prayer, we are committed to walking alongside you on
        your journey.
      </p>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-20 lg:py-8 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div>
              <Image
                className="bg-cover bg-center h-52 rounded-t-xl"
                src="/assets/counselling.png"
                alt="counselling"
                width={600}
                height={600}
              ></Image>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Counselling
              </h3>
              <p className="mt-3 text-gray-800">
                Find healing and guidance through counseling with our loving
                team aiding your emotional journey.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-es-xl rounded-ee-xl bg-yellow-400 text-gray-800 shadow-sm hover:bg-yellow-500 focus:outline-none focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
                href="https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q"
              >
                Book A Session
              </Link>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div>
              <Image
                className="bg-cover bg-center h-52 rounded-t-xl"
                src="/assets/PR.jpg"
                alt="counselling"
                width={600}
                height={600}
              ></Image>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Prayer Request
              </h3>
              <p className="mt-3 text-gray-800">
                Seek comfort, share your heart - submit a prayer request and we
                will be glad to pray with you.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-es-xl rounded-ee-xl bg-yellow-400 text-gray-800 shadow-sm hover:bg-yellow-500 focus:outline-none focus:focus:bg-red-500 disabled:opacity-50 disabled:pointer-events-none"
                href="https://chat.whatsapp.com/JxunmOOThqyCIQDskpqz5Q"
              >
                Submit Prayer Request
              </Link>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
}
