import React from 'react';

const Setting = () => {
  return (
    <>
      <div className="border border-t-0 rounded-b  px-4 py-3 text-green-700">
       
        Your Profile Privacy has been set as "Show my Profile to all including visitors"
      </div>
      <div className="border border-t-0  rounded-b px-4 py-3 text-green-700">
        <label className=" items-center">
          <input type="radio" className="form-radio " name="privacy" value="public" defaultChecked />
          <span className="ml-2">Show my Profile to all including visitors.</span>
        </label>


        <div class="text-sm">
  This will help prospects share your profile with their family members, who are not registered members. 
  <span class="text-xs">*</span>
</div>



        <label className=" items-center mt-2">
          <input type="radio" className="form-radio " name="privacy" value="registered" />
          <span className="ml-2">Show my Profile to registered members only.</span>
        </label>
      </div>
      <div class="flex items-center">
  <input type="checkbox" id="shortlisted" class="form-checkbox h-5 w-5 " checked/>
  <label for="shortlisted" class="ml-2 text-sm text-gray-700">Let others know that I shortlisted their profile.</label>
</div>
    </>
  );
}

export default Setting;
