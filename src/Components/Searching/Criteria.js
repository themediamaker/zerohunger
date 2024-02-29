import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import LockIcon from '@mui/icons-material/Lock';
const Criteria = () => {

    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = (e) => {
        e.preventDefault();
        setExpanded(!isExpanded);

        console.log(isExpanded)
      };

 




    return (
        <>



            <h4 className="text-base font-semibold mb-2 text-black-600">Search profiles using the below criteria</h4>
            <h4 className="text-base font-semibold mb-2 pl-6 w-full text-black-600 pt-2 bg-gray-200 h-10">Basic Details</h4>

            <form className="w-auto">

                <div className="md:flex md:items-center mb-6 ">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Age
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div>
                        <span>to</span>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>


                <div className="md:flex md:items-center mb-6 ">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Height
                        </label>
                    </div>
                    <div className="md:w-1/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div>
                        <span>to</span>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Profile Created By
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

{
    isExpanded && (
        <>

<div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3" >
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="marital-status">
                            Marital Status
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="marital-status"
                            name="marital-status"
                            className="block w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">Option 1</option>
                            <option value="user2">Option 2</option>
                            <option value="user3">Option 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

                {/* Mother Tongue Section */}
                <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="mother-tongue">
                            Mother Tongue
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="mother-tongue"
                            name="mother-tongue"
                            className="block w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">Option 1</option>
                            <option value="user2">Option 2</option>
                            <option value="user3">Option 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

                {/* Physical Status Section */}
                <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="physical-status">
                            Physical Status
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="physical-status"
                            name="physical-status"
                            className="block w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">Option 1</option>
                            <option value="user2">Option 2</option>
                            <option value="user3">Option 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>


        </>
    )
}
              
           
                <button
                    className="text-blue-500 underline cursor-pointer flex items-center"
                    onClick={toggleExpansion}
                >
                    {isExpanded ? (
                        <>
                            View Less <FontAwesomeIcon icon={faCaretUp} className="ml-1" />
                        </>
                    ) : (
                        <>
                            View More <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </>
                    )}
                </button>




                {/* <span className="flex-shrink-0 text-base font-semibold mx-2 text-black-600 pt-4 ">To</span> */}


                <h4 className="text-base font-semibold pl-6 mb-3 mt-3 pt-2 w-full h-10 text-black-600 bg-gray-200">Religious Details</h4>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Religion
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Caste
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Subcaste
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>
  <div className="p-10 md:w-full md:mb-0 mb-6  flex flex-col">
    {/* <div className="pattern-dots-md gray-light shadow-md"> */}
        <div className="rounded bg-white p-4 transform translate-x-6 -translate-y-6 h-60 rounded-lg  border border-gray-300">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <LockIcon />
            </div>
            <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Star
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div style={{  fontWeight: 'bold', fontSize: '10px',paddingLeft:"7px", }}>
                To access these premium filters
    <button
    className="middle none center mr-3 ml-6 w-50 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Beacome a paid member
  </button>
</div>


        </div>
    </div>
    <h4 className="text-base font-semibold mb-3 mt-3  pl-6 pt-2 w-full h-10 text-black-600 bg-gray-200 border border-gray-200">
        Professional Details
    </h4>
{/* </div> */}


                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Occupation
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Annual Income
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Employment Type
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Education
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>


                <div className="p-10 md:w-full md:mb-0 mb-6  flex flex-col">
    {/* <div className="pattern-dots-md gray-light shadow-md"> */}
    <div className="rounded bg-white p-4 transform translate-x-6 -translate-y-6 h-130 rounded-lg border border-gray-300">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <LockIcon />
            </div>
            <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Institution Details
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Organisation Details
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div style={{  fontWeight: 'bold', fontSize: '10px',paddingLeft:"7px" }}>
                To access these premium filters
    <button
    className="middle none center mr-3 ml-6 w-50 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Beacome a paid member
  </button>
</div>


        </div>
    </div>






                <h4 className="text-base font-semibold mb-3 pl-6 mt-3 pt-2 w-full h-10 text-black-600 bg-gray-200">Location Details</h4>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Nearby Profiles
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <div className="inline-flex items-center">
                            <label


                                className="relative  flex cursor-pointer items-center rounded-full p-3"
                                for="checkbox-1"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                    id="checkbox-1"

                                />
                                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                   
                                <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '10px',paddingLeft:"7px" }}>
                                Matches near your location
</div>

                            </label>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Country
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>




                {
      isExpanded &&(
        <>
         <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Citizenship
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>

                <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Ancestral Origin
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>

        
        
        </>
      )
}
               

<button
                    className="text-blue-500 underline cursor-pointer flex items-center"
                    onClick={toggleExpansion}
                >
                    {isExpanded ? (
                        <>
                            View Less <FontAwesomeIcon icon={faCaretUp} className="ml-1" />
                        </>
                    ) : (
                        <>
                            View More <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </>
                    )}
                </button>



                <h4 className="text-base font-semibold mb-3 pl-6 mt-3 pt-2 w-full h-10 text-black-600 bg-gray-200">Lifestyle</h4>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Mutual Hobbies
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <div className="inline-flex items-center">
                            <label


                                className="relative  flex cursor-pointer items-center rounded-full p-3"
                                for="checkbox-1"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                    id="checkbox-1"

                                />
                                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                   
                                <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '10px',paddingLeft:"7px" }}>
    Matches who have similar hobbies as you
</div>

                            </label>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Eating Habits
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

               {
                isExpanded && (
                    <>
                     <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Smoking Habits
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>

                <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Drinking Habits
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>
                    
                    
                    
                    
                    </>
                )
               }


<button
                    className="text-blue-500 underline cursor-pointer flex items-center"
                    onClick={toggleExpansion}
                >
                    {isExpanded ? (
                        <>
                            View Less <FontAwesomeIcon icon={faCaretUp} className="ml-1" />
                        </>
                    ) : (
                        <>
                            View More <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </>
                    )}
                </button>
                <h4 className="text-base font-semibold mb-3 pl-6 mt-3 pt-2 w-full h-10 text-black-600 bg-gray-200">Family Details</h4>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Family Status
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>

            {

                isExpanded && (
                    <>
                        <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Family Value
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>

                <div className={`md:flex md:items-center mb-6 ${isExpanded ? '' : 'hidden'}`}>
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Family Type
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                </div>
                    
                    </>
                )
            }

<button
                    className="text-blue-500 underline cursor-pointer flex items-center"
                    onClick={toggleExpansion}
                >
                    {isExpanded ? (
                        <>
                            View Less <FontAwesomeIcon icon={faCaretUp} className="ml-1" />
                        </>
                    ) : (
                        <>
                            View More <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                        </>
                    )}
                </button>
                <h4 className="text-base font-semibold mb-3 mt-3 pt-2 pl-6 w-full h-10 text-black-600 bg-gray-200">Recently active profiles</h4>
                <h4 className="text-base font-semibold mb-2 text-black-600">Profile Created</h4>
                <h6 className="text-base font-semibold mb-2 text-black-200">Profiles based on created date</h6>

                <div className="flex">
 
                <button
    className="middle none center mr-3 w-15 h-10 rounded-lg border border-pink-500 py-3  px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
>
    All
</button>
  
  <button
    className="middle none center mr-3 w-20 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Today
  </button>
  
  <button
    className="middle none center mr-3 w-50 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Last3Days
  </button>
  
  <button
    className="middle none center mr-3  w-50 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    OneWeek
  </button>
  <button
    className="middle none center mr-3 rounded-lg  w-50 h-10 border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    OneMonth
  </button>
</div>
<h4 className="text-base font-semibold mb-3 mt-3 pt-2  pl-6 w-full h-10 text-black-600 bg-gray-200">Profile Type</h4>
<div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Profiles with Photo
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <div className="inline-flex items-center">
                            <label


                                className="relative  flex cursor-pointer items-center rounded-full p-3"
                                for="checkbox-1"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                    id="checkbox-1"

                                />
                                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                   
                                <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '10px',paddingLeft:"7px" }}>
                                Matches who have added photos
</div>

                            </label>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Don't show profiles
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <select
                            id="height"
                            name="height"
                            className="block  w-1/2 pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="user1">18</option>
                            <option value="user2">19</option>
                            <option value="user4">20</option>
                            <option value="user5">21</option>
                            <option value="user6">22</option>
                            <option value="user7">23</option>
                            <option value="user8">24</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>




                
    {/* <div className="pattern-dots-md gray-light shadow-md"> */}
        <div className=" w-full bg-white p-4 mr-5  bg-white shadow h-16 rounded-lg  border border-gray-300">
           
        
                <div className='flex' style={{  fontWeight: 'bold', fontSize: '11px', }}>
                    
                7 matches based on your search 
                <button
    className="middle none center mr-3 w-30 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Clear All
  </button>
  
  <button
    className="middle none center mr-3 w-50 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Save&Search
  </button>
  
  <button
    className="middle none center mr-3  w-50 h-10 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true"
  >
    Search
  </button>
</div>


        </div>


    


            </form>










        </>
    )
}

export default Criteria