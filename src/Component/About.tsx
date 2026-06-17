import image from "../assets/Image.png"

export function About() {
  return (
    <div className="mt-70 flex flex-col lg:flex-row justify-center w-full gap-8 lg:gap-20 px-4 sm:px-8 md:px-12">

      {/* Image with blue background accent */}
      <div className="relative w-full lg:w-[35%] mx-auto max-w-sm sm:max-w-md lg:max-w-none">
      <div className="absolute left-[25px] top-[50px] w-full h-[350px] sm:h-[400px] lg:h-[626px] bg-[#0090BC] z-0" />
        <img src={image} className="object-cover relative z-10 w-full h-[350px] sm:h-[450px] lg:h-[700px]" />
      </div>

      {/* About content */}
      <div className="w-full lg:w-[50%]">

        <div className="flex items-center gap-2 mb-4">
          <span className="text-cyan-300 font-bold text-2xl mt-20"> // ABOUT US</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Who We Are</h2>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Klar Water Enugu is a premier w smater management company dedicated to delivering
          innovative, sustainable, and technology-driven solutions for water accessibility. With decades of combined experience
          we specialise in consulting, implementation and operational services that ensure reliable and long term water supply
          for communities, industries, and government agencies.
        </p>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Our mission is to revolutionize water management through a combination of advanced
          engineering, scientific research, and strategic partnerships. We leverage modern hydrogeological assessment, smart
          water infrastructure, and environmentally responsible practice to address water scarcity and distribution inefficiency challenges.
        </p>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          At Klar Water Enugu, we take pride in our ability to transform seemingly impossible water projects into success stories, from
          identifying hidden water sources in water-scarce regions to executing large scale infrastructure projects that guarantee 24/7
          water availability. We are committed to delivering results that impact lives and support economic growth.
        </p>

        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          We collaborate with global industry leaders and technology firms to integrate state-of-the-art solutions, ensuring that
          our clients benefit from the most efficient, cost effective, and sustainable water management practices. Our team
          comprises highly skilled engineers, water scientists, and project managers who work tirelessly to develop and maintain
          water systems that stand the test of time.<br />
          Whether it's designing customised water solutions, implementing large-scale water treatment projects, or managing complex
          water supply networks, Klar Water Enugu remains at the forefront of innovation and reliability in the water sector.
        </p>

      </div>

    </div>
  )
}