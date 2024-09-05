"use client"

import React from "react";
import Header from "@/src/Layout/Comman/Header";
import ProgramsSection from "../../Components/ProgramsSection "
import MidDayMealsSection  from "../../Components/MidDayMealsSection "
import Footer from "@/src/Layout/Comman/Footer";
const OverMission = () => {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800 p-6 sm:p-10 lg:p-16 mt-10">
        <div className="w-full h-screen">
    
  <img
    src="/images/about.webp" // Replace with your image path
    alt="Mission Zero Hunger"
   className="w-full h-full object-cover"
  />
</div>
    

<MidDayMealsSection />

        </div>



      <ProgramsSection/>
      <Footer />
    </>
  );
};

export default OverMission;
