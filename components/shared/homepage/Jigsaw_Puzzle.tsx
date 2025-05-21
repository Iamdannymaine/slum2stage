"use client";

export function JigsawPuzzle() {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto lg:p-4 mt-8">
      <div className="grid grid-cols-2 gap-0 relative w-full max-w-[22rem] lg:max-w-2xl">
        {/* Top Left - Community */}
        <div className="relative">
          <div className="bg-[#4AAFC8] text-white p-4 lg:py-8 py-8
          lg:p-10 rounded-lg h-full border-2 border-white min-h-[200px] lg:min-h-[300px]">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4 font-serif">Community</h3>
              <p className="text-sm lg:text-base font-sans leading-normal lg:leading-[32px] font-medium flex-grow">
                Our program creates a sense of belonging and strong friendships, bridging social gaps and celebrating
                diversity through movement
              </p>
            </div>

            {/* Right connector */}
            <div className="absolute top-1/2 right-[-14px] transform translate-x-1/2 -translate-y-1/2 w-8 h-16
             bg-[#4AAFC8] border-r-4 border-t-4 border-b-4 border-white z-20 rounded-r-full"></div>

            {/* Bottom connector */}
            <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-10 bg-[#4AAFC8]
             border-b-4 border-r-4 border-l-4 border-white z-20 rounded-b-full"></div>
          </div>
        </div>

        {/* Top Right - Education */}
        <div className="relative">
          <div className="bg-[#F9B69C] text-white p-4 lg:p-8 py-8 rounded-lg h-full border-2 border-white min-h-[200px] lg:min-h-[300px]">
            <div className="relative z-10 h-full flex flex-col pl-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4 font-serif">Education</h3>
              <p className="text-sm lg:text-base font-sans leading-normal lg:leading-[32px] font-medium flex-grow ">
                We use choreography to enhance focus and concentration, leading to better academic performance
              </p>
            </div>

            {/* Left indent for connector */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0 bg-white z-0"></div>

            {/* Bottom connector */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-0"></div>
          </div>
        </div>

        {/* Bottom Left - Health */}
        <div className="relative">
          <div className="bg-[#F9B69C] text-white p-4 lg:p-8 py-8 rounded-lg h-full border-2 border-r-4 border-white min-h-[200px] lg:min-h-[300px]">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4 font-serif">Health</h3>
              <p className="text-sm lg:text-base font-sans leading-normal lg:leading-[32px] font-medium flex-grow">
                Our rigorous dance classes improve cardiovascular health, flexibility and strength, reduce stress and
                anxiety while enhancing mental/cognitive skills and promoting discipline
              </p>
            </div>

            {/* Top indent for connector */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-0 bg-white z-0"></div>

            {/* Right connector */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0 bg-[#4AAFC8] z-20"></div>
          </div>
        </div>

        {/* Bottom Right - Behaviors */}
        <div className="relative">
          <div className="bg-[#4AAFC8] text-white p-4 py-8 lg:px-10 lg:py-12 rounded-lg h-full 
          border-r-4 border-b-4 border-t-2 border-white min-h-[200px] lg:min-h-[300px]">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4 font-serif">Behaviors</h3>
              <p className="text-sm lg:text-base font-sans leading-normal lg:leading-[32px] font-medium flex-grow">
                Our students build confidence and self esteem by mastering new skills. We also encourage teamwork and
                cooperation in group performances
              </p>
            </div>

            {/* Left indent for connector */}
            <div className="absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-[#4AAFC8] z-0
            rounded-l-full border-l-4 border-b-4 border-t-4 border-white"></div>

            {/* Top indent for connector */}
            <div className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-[#4AAFC8] z-0
            rounded-t-full border-t-4 border-r-4 border-l-4 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}