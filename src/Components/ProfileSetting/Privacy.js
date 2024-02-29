import React, { useState } from 'react';

const Privacy = () => {


    const [openTab, setOpenTab] = useState(1);

  
    const contactDetails = [
        {
          label: "Whom to contact",
          value: "Not Specified"
        },
        {
          label: "Contact person's name",
          value: "raju"
        },
        {
          label: "Convenient time to call",
          value: "Not Specified"
        },
        {
          label: "Comments",
          value: "Not Specified"
        }
      ];
    return (
        <>
            <div className=" font-sans flex  items-center justify-center">
                <div className="p-8">
                    <div className="w-full">
                        <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                            <button onClick={() => setOpenTab(1)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-blue-600 text-white' : ''}`}>Mobile Privacy</button>
                            <button onClick={() => setOpenTab(2)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-blue-600 text-white' : ''}`}>Photo Privacy</button>
                            <button onClick={() => setOpenTab(3)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 3 ? 'bg-blue-600 text-white' : ''}`}>Horoscope Privacy</button>
                        </div>

                        {openTab === 1 && (
                            <div className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${openTab === 1 ? 'border-blue-600' : ''}`}>
                              <div class="m-2 space-y-2">
  <div class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white" tabindex="1">
    <div class="flex cursor-pointer items-center justify-between">
      <span> Verified Contact </span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180" />
    </div>
    <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
    <div class="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block  text-sm font-bold mb-2" for="countryCode">Country*</label>
    <div class="relative">
      <select class="block appearance-none w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="countryCode">
        <option value="+91">+91</option>
   
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>
      </div>
    </div>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="primaryMobile">Primary Mobile Number*</label>
    <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="primaryMobile" type="text" placeholder="Primary Mobile Number"/>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="parentsContact">Parents' Contact Number</label>
    <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="parentsContact" type="text" placeholder="Parents' Contact Number"/>
  </div>
  <div class="mb-4">
    <button class="text-blue-500 hover:text-blue-700" type="button">Edit</button>
  </div>
  <hr class="mb-4"/>
 
  <div class="mb-4">
      <h1>Contact Information</h1>
      <ul>
        {contactDetails.map((detail, index) => (
          <li key={index}>
            <strong>{detail.label}: </strong>
            {detail.value}
          </li>
        ))}
      </ul>
 </div>
  <div class="mb-4">
    <p class="text-gray-700 text-sm font-bold">By verifying your mobile number, members can contact you through mobile.</p>
  </div>
  <hr class="mb-4"/>

</div>

    </div>
  </div>

  <div class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white" tabindex="2">
    <div class="flex cursor-pointer items-center justify-between">
      <span> Mobile Privacy </span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180" />
    </div>
    <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
    <div class="m-4">
    <label class="flex items-center space-x-2 ">
        <input type="radio" name="visibility" value="paid_members" />
        <span>Show mobile number to paid members</span>
    </label>

    <span class="block">• Paid members can reach you directly or through SMS</span>
    <br/>
    <label class="flex items-center space-x-2 ">
        <input type="radio" name="visibility" value="paid_members_community" />
        <span>Show mobile number only to paid members from my community</span>
    </label>
    <span class="block">• 
  Paid members from your community can reach you directly or through SMS</span>
    <br/>
    <label class="flex items-center space-x-2 ">
        <input type="radio" name="visibility" value="paid_members_contacted" />
        <span>Show mobile number only to paid members whom I had contacted / responded</span>
    </label>
    <span class="block">• Paid members whom you have contacted / responded can reach you directly or through SMS</span>
    <br/>
    <label class="flex items-center space-x-2 ">
        <input type="radio" name="visibility" value="hide_number" />
        <span>Hide my mobile number</span>
    </label>
    <span class="block">•   Your mobile number will be hidden, however you can receive SMS from other paid members</span>
</div>

    </div>
  </div>

  <div class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white" tabindex="3">
    <div class="flex cursor-pointer items-center justify-between">
      <span> Mobile Alerts </span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180" />
    </div>
    <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
      <p>
      Choose if you want to receive Notifications through SMS.

      </p>
      <p>You will get SMS notifications to 7055146473, when</p>
      <div class="m-4">
    <p class="text-xs">
        <span class="block">• You receive a new message</span>
        <span class="block">• You get an interest</span>
        <span class="block">• You get a reply for your message</span>
        <span class="block">• Your interest gets accepted</span>
        <span class="block">• Member requests you to add Photo</span>
        <span class="block">• Member sends you a reminder for Interest</span>
    </p>
</div>

<div class="m-4">
    <p class="text-xs">
       ..............................................................................................................................................................................
    </p>
</div>


<div class="m-4">
    <p class="text-xs">
        As a member, you have the benefit of receiving mobile alerts. We recommend you to keep your mobile alerts on all the time for instant notifications. You may choose to turn off the alerts.
    </p>
</div>



<div class="m-4">
    <span class="text-xs">
        * Sent only to members registered with Indian Mobile number
    </span>
    <span class="text-xs block">
        * To turn off App notifications go to BharatMatrimony App settings
    </span>
</div>







      
    </div>
  </div>
</div>

                            </div>
                        )}

                        {openTab === 2 && (
                            <div className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${openTab === 2 ? 'border-blue-600' : ''}`}>
                                <div>
                                    <p class="font-semibold mb-2">Your Photo Privacy has been set to "Visible to All"</p>

                                    <div class="flex items-center mb-4">
                                        <input type="radio" id="visibleToAll" name="photoPrivacy" value="Visible to All" class="mr-2" />
                                        <label for="visibleToAll" class="mr-4 text-sm">Visible to All</label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input type="radio" id="visibleToMembers" name="photoPrivacy" value="Visible to members you have contacted/accepted and to all paid members" class="mr-2" />
                                        <label for="visibleToMembers" class="mr-4 text-sm">Visible to members you have contacted/accepted and to all paid members</label>
                                    </div>

                                    <div class="flex items-center mb-4">
                                        <input type="radio" id="visibleToSelected" name="photoPrivacy" value="Visible to members of your choice" class="mr-2" />
                                        <label for="visibleToSelected" class="mr-4 text-sm">Visible to members of your choice</label>
                                    </div>

                                    <div class="flex items-center mb-4">

                                        <label for="onRequest" class="mr-4 text-sm">When members request to view your photo, you can decide whether to allow or not</label>
                                    </div>

                                    <p class="text-gray-500">Upgrade to use this feature</p>
                                </div>

                            </div>
                        )}

                        {openTab === 3 && (
                            <div className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${openTab === 3 ? 'border-blue-600' : ''}`}>
                                <div>
                                    <p class="font-semibold mb-2">Your Photo Privacy has been set to "Visible to All"</p>

                                    <div class="flex items-center mb-4">
                                        <input type="radio" id="visibleToAll" name="photoPrivacy" value="Visible to All" class="mr-2" />
                                        <label for="visibleToAll" class="mr-4 text-sm">Visible to All</label>
                                    </div>
                                    <p className='text-sm'>Paid members can view an unlimited number of horoscopes, while free members have limited access to horoscopes.</p>


                                    <div class="flex items-center mb-4">
                                        <input type="radio" id="visibleToSelected" name="photoPrivacy" value="Visible to members of your choice" class="mr-2" />
                                        <label for="visibleToSelected" class="mr-4 ">Visible to members of your choice</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input type="radio" id="visibleToSelected" name="photoPrivacy" value="Visible to members of your choice" class="mr-2" />
                                        <label for="visibleToSelected" class="mr-4 ">Protect with Horoscope Password</label>
                                    </div>

                                    <p className='text-sm'>With this option you can</p>
                                    <p className='text-sm'>  Share your Horoscope Password to a member of your choice.</p>
                                    <p className='text-sm'>  Grant access to your Horoscope at the time of contacting.</p>




                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Privacy