"use client";

import React from "react";

const ServiceArea = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
          The Power of Collective Effort: Uniting a Billion People
        </h1>
        <p className="text-lg sm:text-xl mb-4">
          To achieve this monumental goal, we are calling upon one billion people to join our movement. Uniting a billion individuals is not just about numbers; it’s about harnessing diverse talents, resources, and networks to create a powerful force for change. Your support, whether through time, resources, or advocacy, is crucial in achieving our goal. Here’s how you can be a part of this transformative effort:
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="/images/prmg-img.png"
          alt="Food Distribution"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceArea;
