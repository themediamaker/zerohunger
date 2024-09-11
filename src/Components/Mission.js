"use client";

import React from 'react';
import Header from '../Layout/Comman/Header';
import Footer from '../Layout/Comman/Footer';
import ProgramsSection from "../Components/ProgramsSection "
const Mission = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-start justify-center bg-gray-100 mt-16 overflow-hidden">
        <img
          src="/images/about.webp" // Replace with your image path
          alt="Mission Zero Hunger"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-screen-lg mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[#0c4c8a] pb-2">
          Our Vision: 3 Billion Meals a Day
        </h2>
        <p className="text-lg leading-relaxed">
          Our target of providing 3 billion meals each day highlights the magnitude of our commitment to tackling hunger. The current global population is approximately 8 billion people, and a significant portion of this population faces food insecurity. By focusing on delivering 3 billion meals a day, Mission Zero Hunger aims to ensure that a substantial percentage of this need is met, providing immediate relief and laying the foundation for long-term food security.
        </p>
      </div>
      <div className="w-full">
                <ProgramsSection />
            </div>
      <Footer />
    </>
  );
};

export default Mission;
