import React from 'react'
import { useState } from 'react';
import ProfileFilter from './ProfileFilter';
import SortFilter from './SortFilter';

const FilterTap = () => {
  const [selectedOption, setSelectedOption] = useState('yes');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (

<>
gel
</>




    // <div className="flex items-center justify-center pt-3">
    //   <ul className="mx-auto grid grid-cols-6 gap-2 w-full">
    //     {/* Filter Profile */}
    //     <li className="col-span-1">
    //       <input
    //         className="peer sr-only"
    //         type="radio"
    //         value="FilterProfile"
    //         name="answer"
    //         id="FilterProfile"
    //         checked={selectedOption === 'FilterProfile'}
    //         onChange={() => handleOptionChange('FilterProfile')}
    //       />
    //       <label
    //         className={`cursor-pointer hover:bg-gray-50 focus:outline-none ${
    //           selectedOption === 'FilterProfile' ? 'transition-all duration-500 ease-in-out' : ''
    //         }`}
    //         htmlFor="FilterProfile"
    //       >
    //         Filter profile
    //       </label>
    //     </li>

    //     {/* Content Section (20%) */}
    //     <div className={`col-span-2 ${selectedOption === 'FilterProfile' ? 'block' : 'hidden'}`}>
    //       <ProfileFilter />
    //     </div>

    //     {/* Sort Profile */}
    //     <li className="col-span-1">
    //       <input
    //         className="peer sr-only"
    //         type="radio"
    //         value="sortprofile"
    //         name="answer"
    //         id="sortprofile"
    //         checked={selectedOption === 'sortprofile'}
    //         onChange={() => handleOptionChange('sortprofile')}
    //       />
    //       <label
    //         className={`cursor-pointer hover:bg-gray-50 focus:outline-none ${
    //           selectedOption === 'sortprofile' ? 'transition-all duration-500 ease-in-out' : ''
    //         }`}
    //         htmlFor="sortprofile"
    //       >
    //         Sort profile
    //       </label>
    //     </li>

    //     {/* Content Section (80%) */}
    //     <div className={`col-span-4 ${selectedOption === 'sortprofile' ? 'block' : 'hidden'}`}>
    //     <ProfileFilter />
    //     </div>
    //   </ul>
    // </div>
  )
}

export default FilterTap