export default function Navv() {
  return (
    <>
      {/* HEADER */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 lg:px-10">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-1">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Brand"
            >
              Word Assembly
            </a>

            {/* Collapse Button */}
            <button
              type="button"
              className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-header-base-collapse"
              aria-expanded="false"
              aria-controls="hs-header-base"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-base"
            >
              <svg
                className="hs-collapse-open:hidden size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block shrink-0 hidden size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
            {/* End Collapse Button */}
          </div>

          {/* Collapse */}
          <div
            id="hs-header-base"
            className="hs-collapse hidden overflow-hidden transition-all duration-400 basis-full grow md:block "
            aria-labelledby="hs-header-base-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
              <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                <div className="grow">
                  <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                    <a
                      className="p-2 flex items-center text-sm bg-yellow-300 text-gray-800 hover:bg-yellow-400 rounded-lg focus:outline-none focus:bg-yellow-400 "
                      href="/"
                      aria-current="page"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      Home
                    </a>

                    <a
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="/about"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      About Us
                    </a>

                    {/* Mega Menu */}
                    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                      <a href="/locations">
                        <button
                          id="hs-header-base-mega-menu-medium"
                          type="button"
                          className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Mega Menu"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          Locations
                          <svg
                            className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                      </a>

                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-header-base-mega-menu-medium"
                      >
                        <div className="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md">
                          {/* Grid */}
                          <div className="pt-2 md:pt-0 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-0">
                            <div className="col-span-3 md:p-3">
                              {/* Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-1">
                                <div>
                                  <div className="flex flex-col">
                                    <div className="space-y-0.5">
                                      <h5 className="font-extrabold ml-2">
                                        Churches
                                      </h5>
                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Vision House
                                          </p>
                                        </div>
                                      </a>

                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Dominion House
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}

                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Bethel House
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}

                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Freedom House
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}

                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Light House
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}

                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Trinity House
                                          </p>
                                        </div>
                                      </a>

                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Mercy House
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}
                                    </div>
                                  </div>
                                </div>
                                {/* End Col */}

                                <div>
                                  <div className="flex flex-col">
                                    <div className="space-y-0.5">
                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800 mt-7">
                                            Potters House
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}

                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Wisdom House
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}

                                      {/* Link */}
                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Beulah House
                                          </p>
                                        </div>
                                      </a>

                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Grace House
                                          </p>
                                        </div>
                                      </a>

                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Liberty House
                                          </p>
                                        </div>
                                      </a>

                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            Peace House
                                          </p>
                                        </div>
                                      </a>

                                      <a
                                        className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                        href="#"
                                      >
                                        <div className="grow">
                                          <p className="text-sm text-gray-800">
                                            The Refuge
                                          </p>
                                        </div>
                                      </a>
                                      {/* End Link */}
                                    </div>
                                  </div>
                                </div>
                                {/* End Col */}
                              </div>
                              {/* End Grid */}
                            </div>
                            {/* End Col */}

                            <div className="md:col-span-2">
                              <div className="p-2 md:p-4 md:h-full md:flex-1 flex flex-col md:bg-gray-50   md:rounded-br-lg">
                                <h3 className="mb-2 ml-2 font-semibold text-sm text-gray-800">
                                  Campus Fellowships
                                </h3>

                                {/* Link */}
                                <a
                                  className="group flex flex-row items-center md:items-start md:flex-col gap-4 md:gap-2 focus:outline-none"
                                  href="#"
                                >
                                  <div className="grow">
                                    <a
                                      className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                      href="#"
                                    >
                                      <div className="grow">
                                        <p className="text-sm text-gray-800">
                                          Harvarde chapter
                                        </p>
                                      </div>
                                    </a>

                                    <a
                                      className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                      href="#"
                                    >
                                      <div className="grow">
                                        <p className="text-sm text-gray-800">
                                          Delsu chapter
                                        </p>
                                      </div>
                                    </a>

                                    <a
                                      className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                      href="#"
                                    >
                                      <div className="grow">
                                        <p className="text-sm text-gray-800">
                                          Fuoye chapter
                                        </p>
                                      </div>
                                    </a>

                                    <a
                                      className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                      href="#"
                                    >
                                      <div className="grow">
                                        <p className="text-sm text-gray-800">
                                          Tasued chapter
                                        </p>
                                      </div>
                                    </a>

                                    <a
                                      className="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                                      href="#"
                                    >
                                      <div className="grow">
                                        <p className="text-sm text-gray-800">
                                          Rivers State University
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                </a>
                                {/* End Link */}
                              </div>
                            </div>
                            {/* End Col */}
                          </div>
                          {/* End Grid */}
                        </div>
                      </div>
                    </div>
                    {/* End Mega Menu */}

                    {/* Dropdown */}
                    <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                      <button
                        id="hs-header-base-dropdown"
                        type="button"
                        className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-100"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        Schools
                        <svg
                          className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-header-base-dropdown"
                      >
                        <div className="py-1 md:px-1 space-y-0.5">
                          <a
                            className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:focus:text-neutral-300"
                            href="#"
                          >
                            Proof Producers Bible College
                          </a>

                          <a
                            className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:focus:text-neutral-300"
                            href="#"
                          >
                            Family First Academy
                          </a>

                          <a
                            className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:focus:text-neutral-300"
                            href="#"
                          >
                            Leadership Development College
                          </a>

                          <a
                            className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:focus:text-neutral-300"
                            href="#"
                          >
                            Surepace Business Academy
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Dropdown */}

                    <a
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M12 12h.01" />
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>
                      Media
                    </a>

                    <a
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                        <path d="M18 14h-8" />
                        <path d="M15 18h-5" />
                        <path d="M10 6h8v4h-8V6Z" />
                      </svg>
                      Contact Us
                    </a>
                  </div>
                </div>

                <div className="my-2 md:my-0 md:mx-2">
                  <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300"></div>
                </div>

                {/* Button Group */}
                <div className=" flex items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="placeholder:text-sm placeholder:text-center border border-gray-300 w-20 p-2 text-xl rounded-lg"
                  />
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
      {/* END HEADER */}
    </>
  );
}