"use client"

export function JigsawPuzzle() {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-4 mt-8 lg:mt-0">
      <div className="grid grid-cols-2 gap-0 relative w-full max-w-2xl">
        {/* Top Left - Community */}
        <div className="relative">
          <div className="bg-[#4AAFC8] text-white p-6 rounded-tl-lg h-full">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-sm">
                Our program creates a sense of belonging and strong friendships, bridging social gaps and celebrating
                diversity through movement
              </p>
            </div>

            {/* Right connector */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-[#4AAFC8] z-20"></div>

            {/* Bottom connector */}
            <div className="absolute bottom-0 left-2/3 transform -translate-x-1/2 translate-y-1/2 h-8 w-16 bg-[#4AAFC8] rounded-t-full z-20"></div>
          </div>
        </div>

        {/* Top Right - Education */}
        <div className="relative">
          <div className="bg-[#F9B69C] text-white p-6 rounded-tr-lg h-full">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-sm">
                We use choreography to enhance focus and concentration, leading to better academic performance
              </p>
            </div>

            {/* Left indent for connector */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-white z-0"></div>

            {/* Bottom connector */}
            <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-1/2 h-8 w-16 bg-[#4AAFC8] rounded-t-full z-20"></div>
          </div>
        </div>

        {/* Bottom Left - Health */}
        <div className="relative">
          <div className="bg-[#F9B69C] text-white p-6 rounded-bl-lg h-full">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">Health</h3>
              <p className="text-sm">
                Our rigorous dance classes improve cardiovascular health, flexibility and strength, reduce stress and
                anxiety while enhancing mental/cognitive skills and promoting discipline
              </p>
            </div>

            {/* Top indent for connector */}
            <div className="absolute top-0 left-2/3 transform -translate-x-1/2 -translate-y-1/2 h-8 w-16 bg-white z-0"></div>

            {/* Right connector */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-[#4AAFC8] z-20"></div>
          </div>
        </div>

        {/* Bottom Right - Behaviors */}
        <div className="relative">
          <div className="bg-[#4AAFC8] text-white p-6 rounded-br-lg h-full">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">Behaviors</h3>
              <p className="text-sm">
                Our students build confidence and self esteem by mastering new skills. We also encourage teamwork and
                cooperation in group performances
              </p>
            </div>

            {/* Left indent for connector */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-white z-0"></div>

            {/* Top indent for connector */}
            <div className="absolute top-0 left-1/3 transform -translate-x-1/2 -translate-y-1/2 h-8 w-16 bg-white z-0"></div>
          </div>
        </div>
      </div>

      {/* Optional: Border around the entire puzzle */}
      <div className="absolute border border-purple-300 w-[calc(100%-32px)] h-[calc(100%-32px)] top-4 left-4 pointer-events-none"></div>
    </div>
  )
}
