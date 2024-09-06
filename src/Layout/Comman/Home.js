import React from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ServiceArea from "../../Components/ServiceArea";
import ProgramsSection from "../../Components/ProgramsSection ";
import ProcessOfNourishment from "../../Components/ProcessOfNourishment ";
import Servicetext from "../../Components/Servicetext";
import ServiceHistory from "../../Components/ServiceHistory";
import ThreeCardsSection from "../../Components/ThreeCardsSection ";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Arrow = ({ direction, onClick }) => (
    <div
        className={`absolute top-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} transform -translate-y-1/2 bg-red-500  text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer z-10 shadow-lg transition-transform duration-300 ease-in-out hover:bg-gray-700 hover:scale-110`}
        onClick={onClick}
    >
        <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} className="text-xl" />
    </div>
);

const Home = () => {
    const settings = {
    
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <Arrow direction="left" />,
        nextArrow: <Arrow direction="right" />
    };

 

    return (
        <>
            <div className="relative overflow-hidden">
                <Slider {...settings} className="w-full h-full">
                    <div className="relative w-full h-full">
                        <img className="w-full h-auto max-w-full object-cover" src="/images/slider3.webp" alt="Slide 1" />
                    </div>
                    <div className="relative w-full h-full">
                        <img className="w-full h-auto max-w-full object-cover" src="/images/about.webp" alt="Slide 2" />
                    </div>
                    <div className="relative w-full h-full">
                        <img className="w-full h-auto max-w-full object-cover" src="/images/slider6.jpg" alt="Slide 3" />
                    </div>
                </Slider>
           
            </div>

            <ProcessOfNourishment />
            <ServiceArea />
            <ServiceHistory />
            <Servicetext />
            <ThreeCardsSection />
            <ProgramsSection />
        </>
    );

}

export default Home;
