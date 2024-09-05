"use client";
import React from 'react';
import Header from '../Layout/Comman/Header';
import Footer from '../Layout/Comman/Footer';

const Visionary = () => {
  return (
    <>
      <Header />
     
      <div className="bg-gray-100 mt-12">
        <div className="p-8 w-full">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 border-b-4 border-orange-600 pb-4">
            The Visionary Behind Mission
            </h1>
          <p className="text-base leading-relaxed">
            Vinay Rai is a multifaceted individual - an industrialist, entrepreneur, author, philanthropist, and educationist. He authored <span className="font-semibold">"Think India: The Rise of the World's Next Superpower and What it Means for Every American,"</span> published by Penguin-Dutton in the United States in 2007. An alumnus of the Massachusetts Institute of Technology (MIT), Vinay graduated in the classes of '70 and '72 with a bachelor's and master's degree, respectively. He was also a cross-transfer student at Harvard Business School (HBS). His academic excellence earned him membership in two prestigious honorary societies for engineers: <span className="font-semibold">Eta Kappa Nu</span> and <span className="font-semibold">Sigma Xi</span>. Additionally, he holds a BSc in Physics from the University of Delhi. Vinay is a deep thinker and spiritual seeker, constantly exploring a deeper connection with his inner self. As a radical reformer, pioneer, and visionary, he is an endless entrepreneur dedicated to philanthropy, particularly in education and empowerment. Through the Rai Foundation Annual Awards (RAIFAA), Vinay is committed to nurturing talent worldwide in diverse fields. He is an everlasting friend, always available, and an outstanding mentor offering inspiration, direction, and support to aspiring entrepreneurs seeking to grow their businesses. Vinay welcomes meeting new people and envisions a global family. On his 75th birthday, he announced the ambitious <span className="font-semibold">Mission Zero Hunger</span>, aiming to provide one wholesome free meal daily to 3 billion people. He hopes to inspire a million people to join this initiative in their own name. His family foundation targets one million meals daily by 2026. To fund his program, Vinay has established art residency camps at his son's hotels, where artists provide paintings or sculptures in exchange for their stay. These artworks will be sold through <span className="font-semibold">AMOHA art galleries</span>. Learn more about Mission Zero Hunger at <a href="http://missionzeros.com" className="text-blue-500 hover:underline">missionzeros.com</a> and Amoha Galleria at <a href="http://amohagalleria.com" className="text-blue-500 hover:underline">amohagalleria.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Visionary;
