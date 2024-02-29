import React from 'react'

const EditEmail = () => {
  return (
    <>

<div class="flex items-center">
  <h2><b>Edit e-mail Address</b></h2>
</div>
......................................................................................................................................
<p class="text-sm mr-4">A valid e-mail id will be used to send you partner search mailers, member to member .</p>
<p class="text-sm mr-4">communication mailers, and special offers</p>

<div class="flex items-center">
  <div class="w-1/3 mr-4">
    <input type="email" id="emailInput" name="email" placeholder='admin @123gmail.com' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
  </div>

  <div class="flex">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Save</button>
    <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">Reset</button>
  </div>
</div>





    </>
  )
}

export default EditEmail