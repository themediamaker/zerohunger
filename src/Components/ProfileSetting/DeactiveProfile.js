import React from 'react'

const DeactiveProfile = () => {
  return (
    <>
    
    
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Deactivate Profile</h2>
      <p className="mb-4">You can temporarily deactivate your profile if you do not want to delete it. On deactivation, your profile will be hidden from our members, and you will not be able to contact any member until you activate.</p>
      
      <p className="mb-4">Your profile status is currently active. If you would like to change your status, please select <span className="font-bold text-red-500">Deactivate Now</span>.</p>
      
      <div className="mb-4">
        <label htmlFor="deactivateDuration" className="block font-bold mb-2">Select the number of days / months you would like to keep your profile deactivated.</label>
        <select id="deactivateDuration" className="border rounded px-3 py-2">
          <option>--Select Days--</option>
          <option>15 days</option>
          <option>30 days</option>
          <option>45 days</option>
          {/* Add more options as needed */}
        </select>
        <p className="text-xs text-gray-500 mt-1">NOTE: Your profile will be activated after the selected time period elapses. E.G. If you select 15 days as the time period, your profile will be deactivated for 15 days and will be automatically activated on the 16th day. You will receive a mailer in this regard.</p>



      </div>
<div className='mb-4'>

    <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
    Deactivate Now
    <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
</div>





      <p className="text-sm">Note: Once you deactivate your profile you will not be able to contact any member either through Express Interest, Personalised Messages, or Chat, and your profile details will also not be visible to members.</p>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default DeactiveProfile