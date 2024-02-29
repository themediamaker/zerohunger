"use client"
import React, { useState } from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const ProfessionalPreferences = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
  
   
    const handleOpenModal = () => {
      setIsOpen(true);


    };
  
    const handleCloseModal = () => {
      setIsOpen(false);


    };

const handleModal = ()=>{
    setIsOpen1(!isOpen1)
}


const handleModal1 = ()=>{
    setIsOpen2(!isOpen2)
}

const handleModal2 = ()=>{
    setIsOpen3(!isOpen3)
}







  return (
    <>
    <div className='w-full '>
    <div className='flex items-center mb-3'>
         <BusinessCenterIcon/>
         <h1 className='ml-5'>Professional Preferences</h1>
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
   
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        
          <div class="text-sm">
            <div class="font-medium text-gray-700">Education</div>
            <div class="text-gray-400">Any</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
     
          <div>
      <a
        href="#"
        onClick={handleOpenModal}
        x-data="{ tooltip: 'Edite' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
          x-tooltip="tooltip"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </a>

      {isOpen && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleCloseModal} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

<form class="max-w-md mx-auto">
<div class="mb-4">
    <label for="education" class="block mb-1">Preferred Education:</label>
    <select id="education" name="education" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Any">Any</option>
      <optgroup label="Search Education">
        <option value="Any Bachelors in Engineering / Computers">Any Bachelors in Engineering / Computers</option>
        <option value="Any Masters in Engineering / Computers">Any Masters in Engineering / Computers</option>
        <option value="Any Bachelors in Arts / Science / Commerce">Any Bachelors in Arts / Science / Commerce</option>
        <option value="Any Masters in Arts / Science / Commerce">Any Masters in Arts / Science / Commerce</option>
        <option value="Any Bachelors in Management">Any Bachelors in Management</option>
        <option value="Any Masters in Management">Any Masters in Management</option>
        <option value="Any Bachelors in Medicine in General / Dental / Surgeon">Any Bachelors in Medicine in General / Dental / Surgeon</option>
        <option value="Any Masters in Medicine - General / Dental / Surgeon">Any Masters in Medicine - General / Dental / Surgeon</option>
        <option value="Any Bachelors in Medicine Others">Any Bachelors in Medicine Others</option>
        <option value="Any Masters in Medicine Others">Any Masters in Medicine Others</option>
        <option value="Any Bachelors in Legal">Any Bachelors in Legal</option>
        <option value="Any Masters in Legal">Any Masters in Legal</option>
        <option value="Any Financial Qualification - ICWAI / CA / CS/ CFA">Any Financial Qualification - ICWAI / CA / CS/ CFA</option>
        <option value="Service - IAS / IPS / IRS / IES / IFS">Service - IAS / IPS / IRS / IES / IFS</option>
        <option value="Doctorates">Doctorates</option>
        <option value="Diploma">Diploma</option>
        <option value="Higher Secondary">Higher Secondary</option>
    
      </optgroup>
    </select>
  </div>
  <div class="mb-4">
    <label for="ageTo" class="block mb-1">To:</label>
    <div class="relative">
      <input type="number" id="ageTo" name="ageTo" min="18" max="70" value="21" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </span>
    </div>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory"> Compulsory </label>
    <p>Mark as compulsory to get matches exactly as per the specified age criteria</p>
  </div>
  <div className="mt-6">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </div>
</form>






           </div>
         </div>

     </div>
      )}
    </div>
          </div>
        </td>

      </tr>
    

      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        
          <div class="text-sm">
            <div class="font-medium text-gray-700">Employed In</div>
            <div class="text-gray-400">Any</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
      
          <div>
      <a
        href="#"
        onClick={handleModal}
        x-data="{ tooltip: 'Edite' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
          x-tooltip="tooltip"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </a>

      {isOpen1 && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleModal} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

           <form class="max-w-md mx-auto">
           <div class="mb-4">
    <label for="employedIn" class="block mb-1">Preferred Employed In:</label>
    <select id="employedIn" name="employedIn" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Any">Any</option>
      <option value="Private">Private</option>
      <option value="Government/PSU">Government/PSU</option>
      <option value="Business">Business</option>
      <option value="Defence">Defence</option>
      <option value="Self Employed">Self Employed</option>
      <option value="Not Working">Not Working</option>
    </select>
  </div>
  <div class="mb-4">
    <label for="heightTo" class="block mb-1">To:</label>
    <div class="relative">
      <select id="heightTo" name="heightTo" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
        <option value="5ft 11in">5ft 11in</option>
        <option value="6ft 0in">6ft 0in</option>
        <option value="6ft 1in">6ft 1in</option>

      </select>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </span>
    </div>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory"> Compulsory </label>
    <p>Mark as compulsory to get matches exactly as per the specified age criteria</p>
  </div>
</form>






           </div>
         </div>

     </div>
      )}
    </div>
          </div>
        </td>

      </tr>












      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        
          <div class="text-sm">
            <div class="font-medium text-gray-700">Occupation</div>
            <div class="text-gray-400">Any</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
     
          <div>
      <a
        href="#"
        onClick={handleModal1}
        x-data="{ tooltip: 'Edite' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
          x-tooltip="tooltip"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </a>

      {isOpen2 && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleModal1} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

           <form class="max-w-md mx-auto">
           <div class="mb-4">
    <label for="occupation" class="block mb-1">Preferred Occupation:</label>
    <select id="occupation" name="occupation" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Any">Any</option>
      <optgroup label="Search Occupation">
        <option value="Administration">Administration</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Airline">Airline</option>
        <option value="Architecture & design">Architecture & design</option>
        <option value="Banking & finance">Banking & finance</option>
        <option value="Beauty & fashion">Beauty & fashion</option>
        <option value="Bpo & customer service">Bpo & customer service</option>
        <option value="Civil services">Civil services</option>
        <option value="Corporate professionals">Corporate professionals</option>
        <option value="Defence">Defence</option>
        <option value="Doctor">Doctor</option>
        <option value="Education & training">Education & training</option>
        <option value="Engineering">Engineering</option>
        <option value="Hospitality">Hospitality</option>
        <option value="It & software">It & software</option>
        <option value="Legal">Legal</option>
        <option value="Media & entertainment">Media & entertainment</option>
        <option value="Medical & healthcare-others">Medical & healthcare-others</option>
        <option value="Merchant navy">Merchant navy</option>
        <option value="Others">Others</option>
        <option value="Police / law enforcement">Police / law enforcement</option>
        <option value="Scientist">Scientist</option>
        <option value="Senior management">Senior management</option>

      </optgroup>
    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
  </div>
</form>







           </div>
         </div>

     </div>
      )}
    </div>
          </div>
        </td>

      </tr>
    
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        
          <div class="text-sm">
            <div class="font-medium text-gray-700">Annual Income</div>
            <div class="text-gray-400">Any</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
        
          <div>
      <a
        href="#"
        onClick={handleModal2}
        x-data="{ tooltip: 'Edite' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
          x-tooltip="tooltip"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </a>

      {isOpen3 && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleModal2} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

           <form class="max-w-md mx-auto">
           <div class="mb-4">
    <label for="annualIncomeFrom" class="block mb-1">Preferred Annual Income From:</label>
    <select id="annualIncomeFrom" name="annualIncomeFrom" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Any">Any</option>
      <option value="Less than Rs.50 thousand">Less than Rs.50 thousand</option>
      <option value="Rs.50 thousand">Rs.50 thousand</option>
      <option value="Rs.1 Lakh">Rs.1 Lakh</option>
      <option value="Rs.2 Lakhs">Rs.2 Lakhs</option>
      <option value="Rs.3 Lakhs">Rs.3 Lakhs</option>
      <option value="Rs.4 Lakhs">Rs.4 Lakhs</option>
      <option value="Rs.5 Lakhs">Rs.5 Lakhs</option>
      <option value="Rs.6 Lakhs">Rs.6 Lakhs</option>
      <option value="Rs.7 Lakhs">Rs.7 Lakhs</option>
      <option value="Rs.8 Lakhs">Rs.8 Lakhs</option>
      <option value="Rs.9 Lakhs">Rs.9 Lakhs</option>
      <option value="Rs.10 Lakhs">Rs.10 Lakhs</option>
      <option value="Rs.12 Lakhs">Rs.12 Lakhs</option>
      <option value="Rs.14 Lakhs">Rs.14 Lakhs</option>
      <option value="Rs.16 Lakhs">Rs.16 Lakhs</option>
      <option value="Rs.18 Lakhs">Rs.18 Lakhs</option>
      <option value="Rs.20 Lakhs">Rs.20 Lakhs</option>
      <option value="Rs.25 Lakhs">Rs.25 Lakhs</option>
      <option value="Rs.30 Lakhs">Rs.30 Lakhs</option>
      <option value="Rs.35 Lakhs">Rs.35 Lakhs</option>
      <option value="Rs.40 Lakhs">Rs.40 Lakhs</option>
      <option value="Rs.45 Lakhs">Rs.45 Lakhs</option>
      <option value="Rs.50 Lakhs">Rs.50 Lakhs</option>
      <option value="Rs.60 Lakhs">Rs.60 Lakhs</option>
      <option value="Rs.70 Lakhs">Rs.70 Lakhs</option>
      <option value="Rs.80 Lakhs">Rs.80 Lakhs</option>
      <option value="Rs.90 Lakhs">Rs.90 Lakhs</option>
      <option value="Rs.1 Crore">Rs.1 Crore</option>
      <option value="Rs.1 Crore & Above">Rs.1 Crore & Above</option>
    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
  </div>
</form>
           </div>
         </div>

     </div>
      )}
    </div>
          </div>
        </td>

      </tr>





    
    </tbody>
  </table>
</div>
    </div>
    

    </>
  )
}

export default ProfessionalPreferences;
