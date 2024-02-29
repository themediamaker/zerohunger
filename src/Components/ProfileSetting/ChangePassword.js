import React from 'react'

const ChangePassword = () => {
  return (
    <>

<div class="w-full">
  <h2 class="text-2xl font-bold mb-4">Change Password</h2>

  <p class="text-sm text-gray-600 mb-4">Your password must have a minimum of 6 characters. We recommend you choose an alphanumeric password. E.g.: Matri123</p>

  <form className='flex'>
  <div class="md:w-1/2 mr-4">
    <label for="currentPassword" class="block text-sm text-gray-700 font-bold mb-2">Enter Current Password</label>
    <input type="password" id="currentPassword" name="currentPassword" placeholder="Enter your current password" class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
  </div>

  <div class="md:w-1/2 mr-4">
    <label for="newPassword" class="block text-sm text-gray-700 font-bold mb-2">Enter New Password</label>
    <input type="password" id="newPassword" name="newPassword" placeholder="Enter your new password" class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
  </div>

  <div class="md:w-1/2 mr-4">
    <label for="confirmPassword" class="block text-sm text-gray-700 font-bold mb-2">Confirm Password</label>
    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your new password" class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
  </div>
  <div class="flex items-end">
  <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
    ChangePassword
    <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
</div>
</form>


</div>




    </>
  )
}

export default ChangePassword