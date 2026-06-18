import logo from "../assets/Logo4.png"

export function Partners() {
  return (
    <div className="bg-gray-100 rounded p-6 sm:p-10 mx-4 sm:mx-8 md:mx-12 lg:mx-0">
      <h1 className="text-sm md:text-4xl lg:text-5xl font-bold capitalize mt-6 sm:mt-10">
        our partners<span className="text-blue-100">___</span></h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 mt-10 sm:mt-16 lg:mt-24">

        <div className="bg-white rounded w-full sm:w-[32%] relative p-8 sm:p-10 lg:p-20">
          <div className="mt-8 sm:mt-16 lg:mt-24">
            <h1 className="capitalize text-xl sm:text-2xl lg:text-3xl text-black font-bold mt-5 mb-4 sm:mb-8">maliroso digital</h1>
            <p className="text-base sm:text-lg lg:text-2xl p-1 sm:p-2">A technology company specializing in innovative digital
              solutions for water management, infrastructure monitoring, and automation.
            </p>
          </div>
          <div className="absolute top-[-10px] right-0 p-4 sm:p-6 lg:p-10">
            <img src={logo} className="w-12 sm:w-16 lg:w-auto" />
          </div>
        </div>

        <div className="bg-white rounded w-full sm:w-[32%] relative p-8 sm:p-10 lg:p-20">
          <div className="mt-8 sm:mt-16 lg:mt-24">
            <h1 className="capitalize text-xl sm:text-2xl lg:text-3xl text-black font-bold mt-5 mb-4 sm:mb-8">maliroso digital</h1>
            <p className="text-base sm:text-lg lg:text-2xl p-1 sm:p-2">A technology company specializing in innovative digital solutions
              for water management, infrastructure monitoring, and automation.
            </p>
          </div>
          <div className="absolute top-[-10px] right-0 p-4 sm:p-6 lg:p-10">
            <img src={logo} className="w-12 sm:w-16 lg:w-auto" />
          </div>
        </div>

        <div className="bg-white rounded w-full sm:w-[32%] relative p-8 sm:p-10 lg:p-20">
          <div className="mt-8 sm:mt-16 lg:mt-24">
            <h1 className="capitalize text-xl sm:text-2xl lg:text-3xl text-black font-bold mt-5 mb-4 sm:mb-8">maliroso digital</h1>
            <p className="text-base sm:text-lg lg:text-2xl p-1 sm:p-2">A technology company specializing in innovative digital
              solutions for water management, infrastructure monitoring, and automation.
            </p>
          </div>
          <div className="absolute top-[-10px] right-0 p-4 sm:p-6 lg:p-10">
            <img src={logo} className="w-12 sm:w-16 lg:w-auto" />
          </div>
        </div>

      </div>
    </div>
  )
}