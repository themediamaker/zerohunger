import React from 'react';

const ProcessOfNourishment = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 border-b-4 border-orange-600 inline-block pb-2">
          Process Of Nourishment
        </h2>
       
        
        {/* Image Section */}
        <div className="w-full overflow-hidden mt-6">
          <img 
            src="/images/Nourishment-image.png" 
            alt="Nourishment Process" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessOfNourishment;
