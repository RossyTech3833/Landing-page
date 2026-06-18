import logo from "../assets/logo.png"
import { Phone, Mail, MapPin } from "lucide-react"
import rectangle from "../assets/Rectangle.png"
import { About } from "./About"
import { Services } from "./Services"
import { Project } from "./Project"
import { Partners } from "./Partners"
import { Footer } from "./Footer"

export function Home() {
  return (
    <div>

     
      {/* Header */}
      <div className="flex justify-center mx-2 my-4 sm:m-6 md:m-10">
        <div className="flex flex-row flex-wrap gap-3 sm:gap-6 md:gap-10 items-center justify-center w-full">

          <img src={logo} className="w-16 sm:w-24 md:w-auto md:mr-40" />

          <div className="flex items-center">
            <Phone className="text-blue-400 mr-1 sm:mr-3 shrink-0" size={16} />
            <div>
              <h1 className="font-bold text-black text-xs sm:text-sm md:text-lg capitalize">telephone</h1>
              <span className="text-gray-500 text-xs sm:text-sm">09287631102</span>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="text-blue-400 mr-1 sm:mr-3 shrink-0" size={16} />
            <div>
              <h1 className="font-bold text-black text-xs sm:text-sm md:text-lg capitalize">email us</h1>
              <span className="text-gray-500 text-xs sm:text-sm">info@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="text-blue-400 mr-1 sm:mr-3 shrink-0" size={16} />
            <div>
              <h1 className="font-bold text-black text-xs sm:text-sm md:text-lg capitalize">our location</h1>
              <span className="text-gray-500 text-xs sm:text-sm">enugu nigeria</span>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <img src={rectangle} className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <p className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center capitalize ">
            stability meets <br /> innovation in water <br /> management
          </p>
          <button className="bg-[#0090BC]
          text-base sm:text-xl md:text-2xl mt-6 sm:mt-10 px-4 py-2 sm:py-3
           capitalize text-white rounded border-white border-8">
            contact us
          </button>
        </div>
      


        {/* Cards — overlapping on lg+, hidden overlap on smaller screens */}
        <div className="hidden lg:flex absolute bottom-0 translate-y-1/2 w-full justify-center gap-6 px-10">

          {/* Card 1 */}
          <div className="bg-white border-b-4 border-cyan-300 p-10 w-[30%] shadow-md">
            <p className="text-gray-400 text-sm">Years of Experience</p>
            <h2 className="text-2xl font-bold">Proven</h2>
            <h2 className="text-2xl font-bold">Expertise</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0090BC] border-b-4 border-cyan-300 p-10 w-[30%] shadow-md sm:mt-4">
            <p className="text-black text-sm">New Improvements</p>
            <h2 className="text-2xl font-bold text-white">Cutting Edge Technology For Water Management</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-b-4 border-cyan-300 p-10 w-[30%] shadow-md mt-4">
            <p className="text-gray-400 text-sm">Quality Services</p>
            <h2 className="text-2xl font-bold">Sustainability Focus</h2>
            <h2 className="text-2xl font-bold">Proven Expertise</h2>
          </div>

        </div>
      </div>

      {/* Cards for mobile/tablet — shown below hero instead of overlapping */}
      <div className="flex lg:hidden flex-col sm:flex-row gap-4 px-4 sm:px-6 mt-6">

        <div className="bg-white border-b-4 border-blue-500 p-6 w-full sm:w-1/3 shadow-md">
          <p className="text-blue-400 text-sm">Years of Experience</p>
          <h2 className="text-xl font-bold">Proven</h2>
          <h2 className="text-xl font-bold">Expertise</h2>
        </div>

        <div className="bg-blue-500 border-b-4 border-cyan-300 p-6 w-full sm:w-1/3 shadow-md">
          <p className="text-cyan-300 text-sm">New Improvements</p>
          <h2 className="text-xl font-bold text-white">Cutting Edge Technology For Water Management</h2>
        </div>

        <div className="bg-white border-b-4 border-blue-500 p-6 w-full sm:w-1/3 shadow-md">
          <p className="text-blue-400 text-sm">Quality Services</p>
          <h2 className="text-xl font-bold">Sustainability Focus</h2>
          <h2 className="text-xl font-bold">Proven Expertise</h2>
        </div>

      </div>

      <div className="mt-16 sm:mt-24 lg:mt-40">
        <About />
      </div>

      <div className="mt-10 sm:mt-16 md:mt-20">
        <Services />
      </div>

      <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-48">
        <Project />
      </div>

      <div className="mt-10 sm:mt-16 md:mt-20">
        <Partners />
      </div>

      <div className="mt-10 sm:mt-16 md:mt-20">
        <Footer />
      </div>

    </div>
  )
}