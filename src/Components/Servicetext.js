"use client";

import React from 'react';

const Servicetext = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
        <h1 className="text-xl md:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
          Uniting a Billion People for 3 Billion Meals a Day
        </h1>
        <p className="text-base md:text-lg mb-4">
          At Mission Zero Hunger, we are driven by a singular, transformative goal: to eradicate hunger and ensure that everyone has access to nutritious food. Our byline, "Uniting a Billion People for 3 Billion Meals a Day," captures the scale and scope of our mission: mobilizing a global community to address one of the most pressing issues of our time and to create a world where hunger is a thing of the past.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/zeroo.webp"
          alt="Food Distribution"
          className="w-full md:w-[530px] h-auto rounded-[20px]" 
        />
      </div>
    </div>
  );
};

export default Servicetext;
