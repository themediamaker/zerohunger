"use client"
import React, { useState } from 'react';
import BasicPreferences from "../EditPreferences/BasicPreferences"
import ReligiousPreferences from "../EditPreferences/ReligiousPreferences"
import ProfessionalPreferences from "../EditPreferences/ProfessionalPreferences"
import LocationPreferences from "../EditPreferences/LocationPreferences"
import Specified from "../EditPreferences/Specified"



LocationPreferences
function Preferences() {
    const scrollToContent = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <div className="flex flex-col  bg-gray-100">
          
            <div className="flex-1 flex flex-wrap">
                <div className="bg-white w-full md:w-60 flex flex-col md:flex  ">
                    {/* Side Navigation */}
                    <div>
                        <nav>
                            <a onClick={() => scrollToContent('basic')} className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                                <i className="fas fa-home mr-2"></i>Basic
                            </a>
                            <a onClick={() => scrollToContent('religious')} className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                                <i className="fas fa-file-alt mr-2"></i>Religious
                            </a>
                            <a onClick={() => scrollToContent('professional')} className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                                <i className="fas fa-users mr-2"></i>Professional
                            </a>
                            <a onClick={() => scrollToContent('location')} className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                                <i className="fas fa-store mr-2"></i>Location
                            </a>
                            <a onClick={() => scrollToContent('partner')} className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                                <i className="fas fa-exchange-alt mr-2"></i>About My Partner
                            </a>
                        </nav>

                 
                    </div>
                </div>

                <div className="flex-1 p-4 w-full md:w-1/2">
                <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold  ">Partner Preferences</h1>
    <p class="text-sm  text-gray-700">Matches recommended by us are based on Acceptable matches criteria and at times might go slightly beyond your preferences..</p>
    <p class="text-sm  text-gray-700">Turn on "Compulsory" to get matches exactly as per your preferences.
</p>
  </div>
                            {/* Search Field */}
                            <div className="relative  w-full">
                                <div id="basic">
<BasicPreferences/>
                                </div>
                                <div id="religious">
                            <ReligiousPreferences/>
                                </div>
                                <div id="professional">
                          <ProfessionalPreferences/>
                                </div>
                                <div id="location">
                             <LocationPreferences/>
                                </div>
                                <div id="partner">
                        <Specified/>
                                </div>

                            </div>
                        </div>


            </div>

     



        </div>
    );
}

export default Preferences;
