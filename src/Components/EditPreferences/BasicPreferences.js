"use client"
import React, { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const BasicPreferences = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
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
const handleModal3 = ()=>{
    setIsOpen4(!isOpen4)
}

const handleModal4 = ()=>{
    setIsOpen5(!isOpen5)
}


const handleModal5 = ()=>{
    setIsOpen6(!isOpen6)
}

const handleModal6 = ()=>{
    setIsOpen7(!isOpen7)
}




  return (
    <>
    <div className='w-full '>
    <div className='flex items-center mb-3'>
         <MenuBookIcon/>
         <h1 className='ml-5'>Basic Preferences</h1>
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
   
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        
          <div class="text-sm">
            <div class="font-medium text-gray-700">Bride's Age</div>
            <div class="text-gray-400">18 - 21 years</div>
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
    <label for="ageFrom" class="block mb-1">Preferred Age From:</label>
    <div class="relative">
      <input type="number" id="ageFrom" name="ageFrom" min="18" max="70" value="20" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </span>
    </div>
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
            <div class="font-medium text-gray-700">Height</div>
            <div class="text-gray-400">4 Ft 11 In- 5 Ft 11 In/150 Cms- 180 Cms</div>
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
    <label for="heightFrom" class="block mb-1">Preferred Height From:</label>
    <div class="relative">
      <select id="heightFrom" name="heightFrom" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
        <option value="4ft 11in">4ft 11in</option>
        <option value="5ft 0in">5ft 0in</option>
        <option value="5ft 1in">5ft 1in</option>

      </select>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </span>
    </div>
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
            <div class="font-medium text-gray-700">Marital Status</div>
            <div class="text-gray-400">Never Married</div>
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
    <label for="maritalStatus" class="block mb-1">Preferred Marital Status:</label>
    <select id="maritalStatus" name="maritalStatus" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Never Married">Never Married</option>
      <option value="Married">Married</option>
      <option value="Divorced">Divorced</option>
      <option value="Widowed">Widowed</option>
      <option value="Separated">Separated</option>

    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
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
            <div class="font-medium text-gray-700">Mother Tongue</div>
            <div class="text-gray-400">Hindi</div>
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
    <label for="motherTongue" class="block mb-1">Preferred Mother Tongue:</label>
    <select id="motherTongue" name="motherTongue" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Hindi">Hindi</option>
      <option value="English">English</option>
      <option value="Spanish">Spanish</option>

    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
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
            <div class="font-medium text-gray-700">Physical Status</div>
            <div class="text-gray-400">Normal</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
         
          <div>
      <a
        href="#"
        onClick={handleModal3}
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

      {isOpen4 && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleModal3} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

           <form class="max-w-md mx-auto">
           <div class="mb-4">
    <label for="physicalStatus" class="block mb-1">Preferred Physical Status:</label>
    <select id="physicalStatus" name="physicalStatus" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Normal">Normal</option>
      <option value="Physically challenged">Physically challenged</option>
      <option value="Doesn't matter">Doesn't matter</option>

    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
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
            <div class="font-medium text-gray-700">Eating Habits</div>
            <div class="text-gray-400">Doesn't matter</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
           
          <div>
      <a
        href="#"
        onClick={handleModal4}
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

      {isOpen5 && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleModal4} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

           <form class="max-w-md mx-auto">
           <div class="mb-4">
    <label for="eatingHabits" class="block mb-1">Preferred Eating Habits:</label>
    <select id="eatingHabits" name="eatingHabits" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Doesn't matter">Doesn't matter</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Non Vegetarian">Non Vegetarian</option>
      <option value="Eggetarian">Eggetarian</option>

    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
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
            <div class="font-medium text-gray-700">Drinking Habits</div>
            <div class="text-gray-400">Doesn't matter</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
         
          <div>
      <a
        href="#"
        onClick={handleModal5}
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

      {isOpen6 && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleModal5} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

           <form class="max-w-md mx-auto">
           <div class="mb-4">
    <label for="drinkingHabits" class="block mb-1">Preferred Drinking Habits:</label>
    <select id="drinkingHabits" name="drinkingHabits" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Doesn't matter">Doesn't matter</option>
      <option value="Never drinks">Never drinks</option>
      <option value="Drinks socially">Drinks socially</option>
      <option value="Drinks regularly">Drinks regularly</option>

    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
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
            <div class="font-medium text-gray-700">Smoking Habits</div>
            <div class="text-gray-400">Doesn't matter</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
         
          <div>
      <a
        href="#"
        onClick={handleModal6}
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

      {isOpen7 && (
       <div id="myModal" className="fixed inset-0 flex items-center justify-center">
         <div className=" w-1/2">
           <div className="flex   justify-center items-center">
          
             <div onClick={handleModal6} className="flex w-full h-auto justify-center cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </div>
           </div>

           <div className=" w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
         
      

           <form class="max-w-md mx-auto">
           <div class="mb-4">
    <label for="smokingHabits" class="block mb-1">Preferred Smoking Habits:</label>
    <select id="smokingHabits" name="smokingHabits" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Doesn't matter">Doesn't matter</option>
      <option value="Never smokes">Never smokes</option>
      <option value="Smokes occasionally">Smokes occasionally</option>
      <option value="Smokes regularly">Smokes regularly</option>

    </select>
  </div>
  <div class="mb-4">
    <input type="checkbox" id="compulsory" name="compulsory" class="mr-2"/>
    <label for="compulsory">
    Compulsory</label>
    <p>Mark as compulsory to get matches exactly as per the specified marital status criteria</p>
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


    </tbody>
  </table>
</div>
    </div>
    

    </>
  )
}

export default BasicPreferences;
