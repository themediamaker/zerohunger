"use client";

import React from "react";

const ServiceArea = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-6">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
        <h1 className="text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
          The Power of Collective Effort: Uniting a Billion People
        </h1>
        <p className="text-lg mb-4">
          To achieve this monumental goal, we are calling upon one billion people to join our movement. Uniting a billion individuals is not just about numbers; it’s about harnessing diverse talents, resources, and networks to create a powerful force for change. Your support, whether through time, resources, or advocacy, is crucial in achieving our goal. Here’s how you can be a part of this transformative effort:
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="/images/prmg-img.png"
          alt="Food Distribution"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ServiceArea;
