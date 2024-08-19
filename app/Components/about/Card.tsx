export default function Card() {
  return (
    <>
      <h1 className="text-center lg:mt-24 -mt-6 lg:text-4xl text-2xl font-bold text-gray-800">
        Who We Are
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-8 mb-6">
        <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-yellow-500 shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <h4 className="text-lg font-bold text-gray-800">Vision</h4>
            <p className="mt-2 text-gray-500">
              Raising leaders that are spiritually and socially relevant.
            </p>
          </div>
        </div>

        <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-yellow-500 shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800">Mission</h3>
            <p className="mt-2 text-gray-500">
              To thoroughly equip and inspire the believers to influence their
              generation and impact the Kingdom of God.
            </p>
          </div>
        </div>

        <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-yellow-500 shadow-sm rounded-xl">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800">Core Values</h3>
            <p className="mt-2 text-gray-500">
              <span className="font-bold">Availability</span> Phil. 2:19-23 <br />
            </p>
            <p className="mt-2 text-gray-500">
            Benevolence Matt. 25:34-40 <br />
            </p>
            <p className="mt-2 text-gray-500">
            Integrity Ps.78: 70-72 <br />
            </p>
            <p className="mt-2 text-gray-500">
            Diligence Prov. 22: 29, 2 Peter 1:10 <br />
            </p>
            <p className="mt-2 text-gray-500">
            Excellence Phil. 1:10, Dan. 6:3 <br />
            </p>
            <p className="mt-2 text-gray-500">
            (A B I D E)
            </p>
           
              
              
             
              
          </div>
        </div>
      </div>
    </>
  );
}
