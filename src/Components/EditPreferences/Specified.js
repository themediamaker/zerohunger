"use client"
import React, { useState } from 'react';
import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';

const Specified = () => {

    const [isOpen, setIsOpen] = useState(false);
 
  
   
    const handleOpenModal = () => {
      setIsOpen(true);


    };
  
    const handleCloseModal = () => {
      setIsOpen(false);


    };








  return (
    <>
    <div className='w-full '>
    <div className='flex items-center mb-3'>
         <TextSnippetSharpIcon/>
         <h1 className='ml-5'>What we are looking for</h1>
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
   
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        
          <div class="text-sm">
            <div class="font-medium text-gray-700">Not Specified</div>

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
    <label for="ancestralOrigin" class="block mb-1">Preferred Ancestral Origin:</label>
    <textarea id="ancestralOrigin" name="ancestralOrigin" class="w-full h-24 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
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
      
     




    
    </tbody>
  </table>
</div>
    </div>
    

    </>
  )
}

export default Specified;
