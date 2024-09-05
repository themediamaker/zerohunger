import React from 'react';
import Slider from 'react-slick'; // Import Slider component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ServiceArea from "../../Components/ServiceArea"
import CallToAction from "../../Components/CallToAction "
import ProgramsSection from "../../Components/ProgramsSection "
import MidDayMealsSection from "../../Components/MidDayMealsSection "
import ProcessOfNourishment from "../../Components/ProcessOfNourishment "
import Servicetext from "../../Components/Servicetext"
import ServiceHistory from "../../Components/ServiceHistory"
import ThreeCardsSection from "../../Components/ThreeCardsSection "
// Your Home component
const Home = () => {


    return (
        <>
            <div className="slider-container w-full h-screen relative">
            <img src="/images/slider3.webp" className="w-full h-full object-cover" />
            </div>

            <ProcessOfNourishment/>
            <ServiceArea/>
       
            <ServiceHistory/>
            <Servicetext/>
            <ThreeCardsSection/>
            {/* <MidDayMealsSection /> */}
      
            <ProgramsSection/>
     
            <CallToAction/>

        </>
    );
}

// Custom Next Arrow


export default Home;
