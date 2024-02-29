import React, { useState } from 'react';

const SuccessCoupleInterview = () => {
 
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      id: 1,
      imgSrc: '/images/a1.jpg',
      text1: 'We Fell in Love before We Even Met: Sneha and Anku',
      text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
    },
    {
        id: 2,
        imgSrc: '/images/aa1.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
      {
        id: 3,
        imgSrc: '/images/aa2.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
      {
        id: 4,
        imgSrc: '/images/aa3.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
      {
        id: 5,
        imgSrc: '/images/aa4.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
      {
        id: 6,
        imgSrc: '/images/aa5.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
      {
        id: 7,
        imgSrc: '/images/aa6.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
      {
        id: 8,
        imgSrc: '/images/aa9.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
      {
        id: 9,
        imgSrc: '/images/aa8.webp',
        text1: 'We Fell in Love before We Even Met: Sneha and Anku',
        text2: "MarathiMatrimony paved the way for. She tells us that  would find her soulmate on a digital platform. I always wanted to fall in love with before getting married to the person. But, never thought I would find my Mr. Right so soon. When I registered on the MarathiMatrimony app, I received quite a few interests. When Vedant's profile popped up... Read MorePremium Membership Helped Vishal Contact Anusha ImmediatelyVishal is an enthusiastic person and had a successful professional life but there was still something missing in his life. He didn’t have that one  it. I could find a lot of profiles as per my preferences. Vidyasagar's profile was the most interesting as he matched my two most important criteria and so I sent him a request. Since I was a premium member on KeralaMatrimony, I could easily access his contact details and get in touch with him, says Devika talking about her partner a life partner from Thiruvananthapuram and he was also",
      },
  ];
  const dataPerPage = 3; // Number of items per page
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };




  return (
    <div className='w-full'>
      <div className='border border-solid border-gray-300 m-4 p-4'>
   
        {currentData.map((item, index) => (
          <div key={item.id} className='flex' style={{ borderBottom: index !== data.length - 1 ? '1px solid #ccc' : 'none', paddingBottom: '20px', marginBottom: '20px' }}>
            <div className='w-1/2 flex items-center'>
              <img src={item.imgSrc} alt='Your Image' style={{ width: '80%', height: '100%', objectFit: 'cover', marginRight: '20px' }} />
            </div>
            <div className='w-1/2'>
              <p className='text-sm'>{item.text1}</p>
              <p className='text-sm'>{item.text2}</p>
              <p className='text-sm'>
                <a href='#' style={{ color: 'blue' }}>Read More</a>
              </p>
            </div>
          </div>
        ))}


<div className="flex justify-center">
          <nav className="flex space-x-2" aria-label="Pagination">
            <button onClick={prevPage} disabled={currentPage === 1} className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
              Previous
            </button>
            {[...Array(Math.ceil(data.length / dataPerPage)).keys()].map(number => (
              <button key={number} onClick={() => setCurrentPage(number + 1)} className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${currentPage === number + 1 ? 'text-white bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100' : 'text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200'} cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}>
                {number + 1}
              </button>
            ))}
            <button onClick={nextPage} disabled={indexOfLastData >= data.length} className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
              Next
            </button>
          </nav>
        </div>

    

      </div>
    </div>
  );
};

export default SuccessCoupleInterview;
