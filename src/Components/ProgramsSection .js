import React from 'react';
import Link from 'next/link';

const ProgramsSection = () => {
  return (
    <div className="bg-[#0c4c8a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Our Programs */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="md:max-w-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                The Visionary Behind Mission
              </h2>
              <p className="text-sm md:text-base mb-4">
                Vinay Rai is a multifaceted individual - an industrialist, entrepreneur, author, philanthropist, and educationist. He authored "Think India: The Rise of the World's Next Superpower and What it Means for Every American," published by Penguin-Dutton in the United States in 2007.
              </p>
            </div>
            <Link href="/visionary" className="text-sm md:text-base font-bold underline">
              Know More
            </Link>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-white my-8" />

        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="md:max-w-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Connecting AMOHA with Mission Zero Hunger: Fusing Art with Philanthropy
              </h2>
              <p className="text-sm md:text-base mb-4">
                AMOHA – Adi Shakti Museum of Heritage & Arts is more than just a creative center, museum, and art gallery; it is a vibrant space that celebrates the rich tapestry of global heritage, arts, crafts, and cultures. With a deep commitment to fostering integration, love,
              </p>
            </div>
            <Link href="/amoha" className="text-sm md:text-base font-bold underline">
              Know More
            </Link>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-white my-8" />
      </div>
    </div>
  );
};

export default ProgramsSection;
