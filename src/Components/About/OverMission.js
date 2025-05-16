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
     
      <div className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-start justify-center bg-gray-100 mt-16 overflow-hidden">
        <img
          src="/images/about.webp" // Replace with your image path
          alt="Mission Zero Hunger"
          className="w-full h-full object-cover"
        />
      </div>
    

<MidDayMealsSection />





      <ProgramsSection/>
      <Footer />
    </>
  );
};

export default OverMission;
