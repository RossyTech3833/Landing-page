import rectangle from "../assets/Rectangle2.png"
import icon from "../assets/Icon.png"
import bg from "../assets/Bg.png"
import icon1 from "../assets/Icon (1).png"

export function Services() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-40">

      <div>
        <h1 className="text-cyan-300 uppercase text-2xl">// what we do</h1>
        <p className="capitalize text-2xl sm:text-3xl lg:text-4xl font-bold">our services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">

        <div className="bg-gray-200 p-6 sm:p-10 rounded">
          <img src={icon} className="w-[40px]" />
          <h1 className="text-black uppercase font-bold">consulting</h1>
          <p className="text-gray-500 text-sm sm:text-base">We provide expert advisory services in water management,
            helping clients assess water resources, optimize infrastructure, and implement sustainable
            solutions. Our consulting services include hydrogeological surveys, feasibility studies,
            water quality analysis, regulatory compliance guidance, and infrastructure planning.
            We work with government agencies, businesses, and communities to design and implement
            tailored water solutions that align with environmental and economic goals.
          </p>
        </div>

        <div className="bg-gray-200 p-6 sm:p-10 rounded">
          <img src={icon} className="w-[40px]" />
          <h1 className="text-black uppercase font-bold">implementation</h1>
          <p className="text-gray-500 text-sm sm:text-base">From project design to execution, we deliver turnkey water solutions, integrating advanced drilling,
            filtration, and distribution technologies. Our implementation services cover borehole drilling, water
            treatment plant construction, pipeline installation, smart metering, and sustainable
            irrigation systems. We employ modern drilling techniques and water purification processes
            to ensure the highest efficiency and quality standards.</p>
        </div>

        <div className="bg-gray-200 p-6 sm:p-10 rounded">
          <img src={icon} className="w-[40px]" />
          <h1 className="text-black uppercase font-bold">operation</h1>
          <p className="text-gray-500 text-sm sm:text-base">We manage and maintain water supply systems to ensure long-term efficiency, sustainability,
            and compliance with regulatory standards. Our operational services include remote monitoring,
            predictive maintenance, leakage detection, pressure management,
            and water system optimization. We deploy advanced SCADA
            (Supervisory Control and Data Acquisition) systems for real-time monitoring and rapid
            response, ensuring seamless water supply operations with minimal downtime.</p>
        </div>

        <div className="hidden md:block md:row-span-2">
          <img src={rectangle} className="h-full w-full object-cover" />
        </div>

      </div>

      {/* Contact Us / Why Choose Us */}
      <div className="relative mt-10 md:mt-[-30px]">
        <img src={bg} className="absolute w-full h-full object-cover" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-10 justify-center items-start lg:items-center px-4 sm:px-8 lg:px-10 py-12 lg:py-0 lg:h-[800px]">

          <div className="w-full lg:w-[50%] text-start text-white">
            <h1 className="capitalize font-bold md:text-2xl lg:text-2xl text-2xl mb-4 text-black">Why Choose Us</h1>
            <p className="mb-6 text-gray-500 text-base sm:text-lg md:text-xl mt-12">At Klar Water Enugu, we are dedicated to solving water challenges with precision, expertise,
              and innovation. Contact us today to learn how we can transform water accessibility for
              your community or business.</p>
            <button className="py-2 px-3 bg-[#0090BC] mt-8 mb-8 text-white rounded border-white border-8">Contact Us</button>
          </div>

          <div className="w-full lg:w-[50%] text-white flex flex-col gap-4 lg:mt-40">

            <div className="flex items-start gap-3">
              <img src={icon1} className="w-[40px] sm:w-[60px] lg:w-[70px] mt-1" />
              <div>
                <h3 className="font-bold text-base sm:text-xl lg:text-3xl text-black capitalize">Proven Expertise</h3>
                <p className="text-sm sm:text-base lg:text-xl opacity-80 text-gray-500">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4 lg:mt-8">
              <img src={icon1} className="w-[40px] sm:w-[60px] lg:w-[70px] mt-1" />
              <div>
                <h3 className="font-bold text-base sm:text-xl lg:text-3xl text-black capitalize">Cutting Edge Technology</h3>
                <p className="text-sm sm:text-base lg:text-xl opacity-80 text-gray-500">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4 lg:mt-8">
              <img src={icon1} className="w-[40px] sm:w-[60px] lg:w-[70px] mt-1" />
              <div>
                <h3 className="font-bold text-base sm:text-xl lg:text-3xl text-black capitalize">Sustainability Focus</h3>
                <p className="text-sm sm:text-base lg:text-xl opacity-80 text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4 lg:mt-8">
              <img src={icon1} className="w-[40px] sm:w-[60px] lg:w-[70px] mt-1" />
              <div>
                <h3 className="font-bold text-base sm:text-xl lg:text-3xl text-black capitalize">Reliable Partners</h3>
                <p className="text-sm sm:text-base lg:text-xl opacity-80 text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}