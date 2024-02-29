"use client"
import React, { useState } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const ReligiousPreferences = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
   
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






  return (
    <>
    <div className='w-full '>
    <div className='flex items-center mb-3'>
         <AutoStoriesIcon/>
         <h1 className='ml-5'>Religious Preferences</h1>
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
   
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        
          <div class="text-sm">
            <div class="font-medium text-gray-700">Religion</div>
            <div class="text-gray-400">Hindu</div>
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
    <label for="religion" class="block mb-1">Preferred Religion:</label>
    <select id="religion" name="religion" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Hindu">Hindu</option>
      <option value="Christian">Christian</option>
      <option value="Muslim">Muslim</option>

    </select>
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
            <div class="font-medium text-gray-700">Caste</div>
            <div class="text-gray-400">Agarwal</div>
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
    <label for="caste" class="block mb-1">Preferred Caste:</label>
    <select id="caste" name="caste" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Agarwal">Agarwal</option>
      <option value="Brahmin">Brahmin</option>
      <option value="Kshatriya">Kshatriya</option>

    </select>
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
            <div class="font-medium text-gray-700">Subcaste</div>
            <div class="text-gray-400">Any Subcaste</div>
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
    <label for="subcaste" class="block mb-1">Preferred Subcaste:</label>
    <select id="subcaste" name="subcaste" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
    <option value="Any Subcaste">Any Subcaste</option>
      <optgroup label="Search Subcaste">
        <option value="Agarwal">Agarwal</option>
        <option value="Bisa">Bisa</option>
        <option value="Others">Others</option>
        <option value="Gupta">Gupta</option>
   
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
            <div class="font-medium text-gray-700">Dosh</div>
            <div class="text-gray-400">Doesn't matter</div>
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
    <label for="dosh" class="block mb-1">Preferred Dosh:</label>
    <select id="dosh" name="dosh" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Doesn't matter">Doesn't matter</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
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
            <div class="font-medium text-gray-700">Star</div>
            <div class="text-gray-400">Any</div>
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
    <label for="star" class="block mb-1">Preferred Star:</label>
    <select id="star" name="star" class="w-full py-2 pl-3 pr-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <option value="Any">Any</option>
      <option value="Anuradha / Anusham / Anizham">Anuradha / Anusham / Anizham</option>
      <option value="Ardra / Thiruvathira">Ardra / Thiruvathira</option>
      <option value="Ashlesha / Ayilyam">Ashlesha / Ayilyam</option>
      <option value="Ashwini / Ashwathi">Ashwini / Ashwathi</option>
      <option value="Bharani">Bharani</option>
      <option value="Chitra / Chitha">Chitra / Chitha</option>
      <option value="Dhanista / Avittam">Dhanista / Avittam</option>
      <option value="Hastha / Atham">Hastha / Atham</option>
      <option value="Jyesta / Kettai / Thrikketa">Jyesta / Kettai / Thrikketa</option>
      <option value="Krithika / Karthika">Krithika / Karthika</option>
      <option value="Makha / Magam">Makha / Magam</option>
      <option value="Moolam / Moola">Moolam / Moola</option>
      <option value="Mrigasira / Makayiram">Mrigasira / Makayiram</option>
      <option value="Poorvabadrapada / Puratathi">Poorvabadrapada / Puratathi</option>
      <option value="Poorvapalguni / Puram / Pubbhe">Poorvapalguni / Puram / Pubbhe</option>
      <option value="Poorvashada / Pooradam">Poorvashada / Pooradam</option>
      <option value="Punarvasu / Punarpusam">Punarvasu / Punarpusam</option>
      <option value="Pushya / Poosam / Pooyam">Pushya / Poosam / Pooyam</option>
      <option value="Revathi">Revathi</option>
      <option value="Rohini">Rohini</option>
      <option value="Shatataraka / Sadayam / Satabishek">Shatataraka / Sadayam / Satabishek</option>
      <option value="Shravan / Thiruvonam">Shravan / Thiruvonam</option>
      <option value="Swati / Chothi">Swati / Chothi</option>
      <option value="Uttarabadrapada / Uthratadhi">Uttarabadrapada / Uthratadhi</option>
      <option value="Uttarapalguni / Uthram">Uttarapalguni / Uthram</option>
      <option value="Uttarashada / Uthradam">Uttarashada / Uthradam</option>
      <option value="Vishaka / Vishakam">Vishaka / Vishakam</option>
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

export default ReligiousPreferences;
