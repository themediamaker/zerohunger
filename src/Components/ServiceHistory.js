"use client";

import React from 'react';

const ServiceHistory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="/images/history-in-the-making.png"
          alt="Food Distribution"
          className="w-full h-auto md:w-[530px] md:h-[363px] rounded-[20px]" 
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-6">
        <h1 className="text-xl md:text-2xl font-bold mb-4 relative after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-2">
          Join Us in Making History
        </h1>
        <p className="text-base md:text-lg mb-4">
          Mission Zero Hunger is more than an initiative or campaign; it’s a call to action. By uniting a billion people, we can turn our ambitious goal of 3 billion meals a day into a reality. Each contribution, whether big or small, is crucial in building a world where no one goes hungry.
          Together, we have the power to make a lasting difference. Join us in this vital mission to end hunger and to create a more equitable world.
        </p>
      </div>
    </div>
  );
};

export default ServiceHistory;
