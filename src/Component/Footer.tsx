
// import logo from "../assets/logo5.png"
import logo1 from "../assets/logo.png"
import { Phone } from "lucide-react"


export function Footer() {
  return (
    <div className="relative">

      {/* Wave SVG top */}
      <div className="w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full block">
  <path
    d="M0,20 C180,40 360,0 540,20 C720,40 900,0 1080,20 C1260,40 1380,10 1440,20 L1440,40 L0,40 Z"
    fill="#1e2a4a"
  />
</svg>
      </div>

      <div className="bg-[#1e2a4a] relative">
{/* <img src={logo} className="absolute top-[-15px] sm:top-[-8px] w-full text-[#243156]" /> */}

        {/* Main content */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 lg:gap-2 px-6 sm:px-12 lg:px-10 pt-8 pb-25">

          {/* Brand section */}
          <div className="w-full sm:w-[45%]">
            <img src={logo1} className="w-36 sm:w-44" />
            <p className="text-gray-300 mt-6 text-sm sm:text-base max-w-sm leading-relaxed">
              At the KLAR, our mission is to promote aquaculture practices.
              For over 30 years, Aqovo have demonstrated commitment to responsible aquaculture.
            </p>
          </div>

          {/* Quick contact card */}
          <div className="w-full sm:w-[40%] bg-[#243156] rounded p-6 sm:p-8 border-l-4 border-blue-400">
            <h1 className="text-white font-bold text-lg sm:text-xl mb-2">Quick Contacts</h1>
            <p className="text-gray-300 text-sm sm:text-base mb-4">If you have any questions or need help</p>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-blue-400 shrink-0" size={18} />
              <h2 className="text-white font-bold text-base sm:text-lg">+123 456 7890</h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              2307 Beverlay Rd Brooklyn, New York 11226 United States.
            </p>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 border-t border-gray-600 px-6 sm:px-12 lg:px-24 py-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            Copyright © 2025 <span className="text-cyan-300">KLAR</span> All rights reserved.
          </p>
          <ul className="flex gap-4 sm:gap-6 text-white text-xs sm:text-sm">
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="text-white">|</li>
            <li className="cursor-pointer hover:text-white">Services</li>
            <li className="text-white">|</li>
            <li className="cursor-pointer hover:text-white">Privacy</li>
          </ul>
        </div>

      </div>
    </div>
  )
}



   