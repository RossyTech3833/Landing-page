import image from '../assets/Image (2).png'
import { ArrowLeft, ArrowRight } from "lucide-react"
import image1 from "../assets/Image (1).png"
import logo1 from "../assets/logo2.png"
import logo2 from "../assets/logo1.png"
import logo3 from "../assets/logo3.png"

export function Project() {
  return (
    <div className="bg-[#1e2a4a] relative py-16 lg:py-0 lg:h-[900px]">

      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 px-4 sm:px-8">

        {/* Left image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <img src={image} className="w-full max-w-sm sm:max-w-md lg:absolute lg:top-[-40px] lg:w-[600px] object-cover" />
        </div>

        {/* Text content */}
        <div className="w-full lg:w-[40%] lg:mt-20 lg:ml-20">
          <h1 className="text-cyan-300 uppercase text-xl sm:text-2xl lg:text-3xl font-bold">// our project</h1>
          <p className="text-white capitalize text-3xl sm:text-4xl lg:text-5xl font-bold">transforming a</p>
          <p className="text-white capitalize text-3xl sm:text-4xl lg:text-5xl font-bold">waterless site</p>
          <p className="text-gray-300 mt-5 text-base sm:text-lg lg:text-2xl max-w-lg">
            Aqovo provide you with all the necessary information that is
            important for using our products. We constantly follow the dynamics
            of international exchanges and follow the "Best Practices" relating to
            the aquaculture sector.
          </p>

          <div className="flex mt-8 lg:mt-10 gap-3 sm:justify-center">
            <ArrowLeft className="bg-gray-500 opacity-50 text-white rounded px-2 font-bold" size={50} />
            <ArrowRight className="bg-white text-blue-300 rounded px-2  font-bold" size={50} />
          </div>
        </div>

        {/* Right image — hidden on mobile */}
        <div className="hidden lg:block">
          <img src={image1} className="absolute top-[-40px] h-[400px] object-cover" />
        </div>

      </div>

      {/* Stats section */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-12 lg:mt-30 px-4 sm:px-8 gap-6 sm:gap-0">

        <div className="flex items-center w-full sm:w-[30%] gap-3 px-4">
          <img src={logo1} className="w-12 sm:w-16 lg:w-20" />
          <div>
            <h1 className="font-bold text-white text-2xl lg:text-3xl capitalize">9467</h1>
            <span className="text-white text-xl lg:text-3xl">successful project</span>
            <p className="text-white text-sm lg:text-base">delivery deep insight, changing revolutionary strategy</p>
          </div>
        </div>

        <div className="hidden sm:block border h-24 lg:h-50 border-gray-500"></div>

        <div className="flex items-center w-full sm:w-[30%] gap-3 px-4 sm:px-8">
          <img src={logo2} className="w-12 sm:w-16 lg:w-20" />
          <div>
            <h1 className="font-bold text-white text-2xl lg:text-3xl capitalize">1589</h1>
            <span className="text-white text-xl lg:text-3xl">client worldwide</span>
            <p className="text-white text-sm lg:text-base">successful on delivering the best seafood worldwide</p>
          </div>
        </div>

        <div className="hidden sm:block border h-24 lg:h-50 border-gray-500"></div>

        <div className="flex items-center w-full sm:w-[30%] gap-3 px-4 sm:px-8">
          <img src={logo3} className="w-12 sm:w-16 lg:w-20" />
          <div>
            <h1 className="font-bold text-white text-2xl lg:text-3xl capitalize">56m</h1>
            <span className="text-white text-xl lg:text-3xl">delivered goods</span>
            <p className="text-white text-sm lg:text-base">our production for water installation have been the best</p>
          </div>
        </div>

      </div>
    </div>
  )
}