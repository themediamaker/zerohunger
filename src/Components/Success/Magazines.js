import React, { useState } from 'react';

const Magazines = () => {
  const images = [
    { imgSrc: '/images/bb1.png' },
    { imgSrc: '/images/bb1.png' },
    { imgSrc: '/images/bb1.png' },
    { imgSrc: '/images/bb1.png' },
    { imgSrc: '/images/bb1.png' },
    { imgSrc: '/images/bb1.png' },
    { imgSrc: '/images/bb1.png' },
    { imgSrc: '/images/bb1.png' },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={index} className="w-full h-full relative">
          <img src={image.imgSrc} alt={`Image ${index}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
            <button onClick={openModal} className="text-white font-bold">View Details</button>
          </div>
        </div>
      ))}
      {modalOpen && (
        <div id="myModal" className="fixed inset-0 flex items-center justify-center">
          <div className="dialog">
            <div className="flex flex-col w-full">
              <div className="flex w-full  justify-center items-center">
             
                <div onClick={closeModal} className="flex w-1/12 h-auto justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
              </div>
              <div className="flex w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
              <img src="/images/bb3.jpg" alt="Description of the image" class="w-64 h-auto mx-auto"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Magazines;
