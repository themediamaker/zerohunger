"use client"
import { useState } from 'react';

const AlertUpdate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);


  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };

  const toggleDropdowns = () => {
    setIsOpens(!isOpens);
  
  };



  return (







    <>


<span class="mr-2 font-bold">Alerts & Updates</span>
<div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">



</div>

      <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
      <div className={`w-10 border-r px-2 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-0 translate-y-0' : 'rotate-90 -translate-y-0.0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={toggleDropdown}>
          <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M19.5 8.25l-7.5 7.5-7.5-7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} />
        </svg>
      </div>
      <div className=" items-center px-2 py-3">
        <div className="mx-3">
          <button onClick={toggleDropdown} className="hover:underline">E-mail</button>
<p>
Choose what updates you receive on your e-mail

</p>
        </div>



      </div>



      {isOpen && (



        <>
          <div class="items-center">
            <span class="mr-2 font-bold">Member Activity</span>
          </div>
          <span class="mr-4 text-sm">If you turn these off, you won't get any mails about member activity on your profile</span>

          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>
          <div>
            <span class="mr-4 font-bold">Phone Number Views</span>
          </div>

          <span class="mr-4 text-sm">When members view your number</span>


          <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">



          </div>


          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>

          <div>
            <span class="mr-4 font-bold">Requests</span>
          </div>
          <span class="mr-4 text-sm">


            When members request for your information
          </span>

          <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>



          <div>
            <span class="mr-4 font-bold">Member Response</span>
          </div>
          <span class="mr-4 text-sm">


            If you turn these off, you will not know when members respond to you
          </span>



          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>

          <div>
            <span class="mr-4 font-bold">Accepts</span>
          </div>

          <span class="mr-4 text-sm">
            When members accept your interests or requests</span>


          <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>
          <div>
            <span class="mr-4 font-bold">Matches</span>
          </div>

          <span class="mr-4 text-sm">
            If you turn these off, you might miss out on our recommendations based on your preferences</span>

          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>

          <div>
            <span class="mr-4 font-bold">Horoscope Matches</span>
          </div>

          <span class="mr-4 text-sm">
            Weekly</span>

            <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>
          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>

          <div>
            <span class="mr-4 font-bold">Premium Matches</span>
          </div>

          <span class="mr-4 text-sm">
          Everyday</span>




          <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>
          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>
          <div>
            <span class="mr-4 font-bold">Matches with new photo</span>
          </div>

          <span class="mr-4 text-sm">
          Weekly</span>

          <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>

          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>
          <div>
            <span class="mr-4 font-bold">New Matches</span>
          </div>

          <span class="mr-4 text-sm">
          Everyday</span>

        </>

      )}


    </div>
    <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
      <div className={`w-10 border-r px-2 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-0 translate-y-0' : 'rotate-90 -translate-y-0.0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={toggleDropdowns}>
          <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M19.5 8.25l-7.5 7.5-7.5-7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} />
        </svg>
      </div>
      <div className=" items-center px-2 py-3">
        <div className="mx-3">
          <button onClick={toggleDropdowns} className="hover:underline">SMS</button>
          <p>Choose what updates you get via SMS

</p>

        </div>



      </div>



      {isOpens && (



        <>
    

            <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>
          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>

          <div>
            <span class="mr-4 font-bold">Phone Number Views</span>
          </div>

          <span class="mr-4 text-sm">
          When members view your number</span>




          <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>
          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>
          <div>
            <span class="mr-4 font-bold ">Express Interest</span>
          </div>

          <span class="mr-4 text-sm" >
          When members send an interest</span>

          <div className=" items-center text-gray-600 w-full border-b overflow-hidden mt-32 md:mt-0 mb-5 ">
          </div>

          <div
            className="relative md:w-14 md:h-7 w-12 h-6 flex items-center"
            style={{ marginLeft: "auto" }}
          >
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? " translate-x-6" : "")
                }
              ></div>
            </div>
          </div>
          <div>
            <span class="mr-4 font-bold ">Personalized Messages</span>
          </div>

          <span class="mr-4 text-sm">
          When premium members send messages</span>

        </>

      )}


    </div>
    
    </>
   
  );
};

export default AlertUpdate;
