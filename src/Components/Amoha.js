"use client";
import React from 'react';
import Header from '../Layout/Comman/Header';
import Footer from '../Layout/Comman/Footer';

const Amoha = () => {
  return (
    <>
      <Header />
      
      {/* Main content section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto p-6 max-w-6xl">
          
          {/* Page Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-orange-700 border-b-4 border-orange-600 pb-4">
            Connecting AMOHA with Mission Zero Hunger: Fusing Art with Philanthropy
          </h1>
          
          {/* Main paragraph */}
          <div className="space-y-8 text-gray-700">
            <p className="leading-relaxed text-lg sm:text-xl">
              AMOHA – Adi Shakti Museum of Heritage & Arts is more than just a creative center, museum, and art gallery; it is a vibrant space that celebrates the rich tapestry of global heritage, arts, crafts, and cultures. With a deep commitment to fostering integration, love, connection, inclusiveness, and humanity, AMOHA is perfectly positioned to play a pivotal role in supporting and advancing the goals of Mission Zero Hunger: Uniting a Billion People for 3 Billion Meals a Day.
            </p>
            
            {/* Section 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-orange-600">
              <h2 className="text-2xl font-semibold mb-4">1. AMOHA Invites Artists to Donate their Work</h2>
              <p className="text-base leading-relaxed">
                AMOHA invites artists to donate their works of art to its gallery, where they will be showcased and sold, with all proceeds directed towards funding this crucial initiative. Artists can donate their creations to AMOHA’s gallery, knowing that their art will not only be displayed in a space dedicated to celebrating global heritage and culture but also directly contribute to eradicating hunger. These donated pieces will be put up for sale, and the funds raised will be channeled into Mission Zero Hunger.
              </p>
            </div>
            
            {/* Section 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-orange-600">
              <h2 className="text-2xl font-semibold mb-4">2. Philanthropic Art Exhibitions and Auctions</h2>
              <p className="text-base leading-relaxed">
                AMOHA will host exhibitions where artists from around the world create and donate works for this cause, which can be auctioned off, with proceeds directly supporting Mission Zero Hunger. This not only raises funds but also spreads awareness about the mission through the powerful medium of art. 
              </p>
              <p className="text-base leading-relaxed mt-4">
                AMOHA will also organize traveling exhibitions under the banner of Mission Zero Hunger that can be displayed in different countries, bringing global attention to the cause and generating funds through sales and donations.
              </p>
            </div>
            
            {/* Section 3 - Retreats */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-orange-600">
              <h2 className="text-2xl font-semibold mb-4">3. AMOHA Art Residency Retreats</h2>
              <p className="text-base leading-relaxed">
                Another way for artists to participate in the noble cause is to join our AMOHA Art Residency Retreats in Rajasthan, India. The retreats are at our stunning Heritage Resort, the Six Senses Fort Barwara, a royal retreat in an ancient 14th-century fort hotel next to the Ranthambore Tiger Reserve. The artist needs to give us a painting or sculpture equivalent to their stay cost. We will be selling these works to fund our Mission Zero Hunger.
              </p>
            </div>

            {/* Gallery and website information */}
            <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-orange-600">
              <p className="text-base leading-relaxed">
                We shall also be displaying these works at our largest art gallery of 100,000 sq. ft in Delhi. Additionally, all artists will have their own page on our website to showcase their works and share their social media profiles.
              </p>
              <p className="mt-4 text-base leading-relaxed">
                Visit our AMOHA Galleria at: 
                <a href="https://amohagalleria.com" target="_blank" className="text-orange-600 font-semibold ml-2">amohagalleria.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Amoha;
