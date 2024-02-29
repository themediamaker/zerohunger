
"use client";
import React, { useState } from 'react';
// import Selectlist from '../../../Components/SelectList/SelectInput'
import Selectlist from '../../Components/SelectList/SelectInput'
import { DashboardContext } from '@/src/Context/dashboard';
import { useContext } from 'react';
import { getyear } from '@/src/Elements/getdateconverter';
import { makeRequest } from '@/src/Utils/Api';
import { profileregister } from '@/src/Utils/Allapiurl';
import { getuserid } from '@/src/Helper/usergetid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Profilepopover } from '../../Components/EditProfileToolTop/ToolTip';
const BasicDetails = () => {
  const userid = getuserid()
  const [showEdit, setShowEdit] = useState(false);
 
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(null);
  const [newDetailValue, setNewDetailValue] = useState('');
  const {userprofiledata,isuserprofileloading} = useContext(DashboardContext)
  const userData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
  console.log(userData)
  const [selectlist, setselectlist] = useState(userData.assignedTo)
  console.log(selectlist)
 
const [formData, setFormData] = useState({
  userid:userid.userid,
  assignedTo:selectlist,
  name: userData?.name,
  height: userData?.height,
  weight: userData?.weight,
  maritalStatus: userData?.meritalStatus,
  bodyType:userData?.bodyType,
  physicalStatus:userData?.physicalStatus,
  motherTongue:userData?.motherTongue,
  knowToRead:userData?.knowToRead,
  eatingHabits:userData?.eatinghabbit,
  drinkingHabits:userData?.drinkinghabbit,
  smokingHabits:userData?.smokinghabits,
  dateofBirth:userData?.dateofBirth
});
console.log(isuserprofileloading && formData)
  const details = [
    { label: 'Profile created for',value:userData?.assignedTo},
    { label: 'Name', value: userData?.name},
    { label: 'Body Type', value:userData?.bodyType},
    { label: 'Age', value: getyear(userData?.dateofBirth)},
    { label: 'Physical Status', value: userData?.physicalStatus },
    { label: 'Height', value: userData?.height },
    { label: 'Weight', value:userData?.weight },
    { label: 'Mother Tongue', value:userData?.motherTongue },
    { label: 'Marital Status', value: userData?.meritalStatus},
    { label: 'Eating Habits', value: userData?.eatinghabbit},
    { label: 'Drinking Habits', value: userData?.drinkinghabbit},
    { label: 'Smoking Habits', value: userData?.smokinghabits},
  ];
  console.log(isuserprofileloading && details)
  const handleSave = () => {
    formData.assignedTo = selectlist
    console.log(formData)
    try{

makeRequest('post',profileregister,{data:formData}).then(()=>{
alert('sucess')
setShowEdit(showEdit);
})

    }
    catch(e){
      console.log(e)
    }

  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center overflow-hidden bg-gray-50 p-3">
      <div className="bg-white  w-full rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-5 p-4">
            {showEdit ? (
              <>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                      Profile created for : *
                    </label>
                  </div>
                  <div className="ml-2">
                    <Selectlist
                      defaultValue={userData.assignedTo}
                      headlabel={'Create Profile For'}
                      options={['Self', 'Son', 'Daughter', 'Brother', 'Sister', 'Relative/Friend', 'Client-Marriage Bureau']}
                      name={'createprofilefor'}
                      setselectlist={setselectlist}
                      disabled={false}
                      
                    />
                  </div>
                </div>


                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                      Name
                    </label>
                  </div>
                  <div className="md:w-1/3">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      required
                     onChange={(e)=>handleInputChange(e)} 
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-height">
            Height: *
        </label>
    </div>
    <div className="md:w-1/3">
        <select
            id="height"
            name="height"
            onChange={(e)=>handleInputChange(e)} 
            required
            value={formData.height || ''}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
            <option value="">Select height</option>
            <option value="4.4">4.4</option>
            <option value="4.5">4.5</option>
            <option value="4.6">4.6</option>
           
            <option value="6.5">6.5</option>
            <option value="6.6">6.6</option>
        </select>
    </div>
</div>

<div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-weight">
            Weight: *
        </label>
    </div>
    <div className="md:w-1/3">
        <select
            id="weight"
            name="weight"
            value={formData.weight || ''}
            onChange={(e)=>handleInputChange(e)} 
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
            <option value="">Select weight</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>

            <option value="139">139</option>
            <option value="140">140</option>
        </select>
    </div>
</div>



<div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-marital-status">
            Marital Status:
        </label>
    </div>
    <div className="md:w-1/3">
        <select
            id="maritalStatus"
            name="maritalStatus"
            onChange={(e)=>handleInputChange(e)} 
            value={formData.maritalStatus || ''}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
            <option value="">Select marital status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
         
        </select>
    </div>
</div>

<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-body-type">
            Body Type:
        </label>
    </div>
    <div class="md:w-2/3 flex" >
        <div class=" items-center">
            <input type="radio" checked={formData.bodyType === "Slim"}  onChange={(e)=>handleInputChange(e)}  id="bodyTypeSlim" name="bodyType" value="Slim" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="bodyTypeSlim" class="ml-2" >Slim</label>
        </div>
        <div class=" items-center ml-6">
            <input type="radio" checked={formData.bodyType === "Athletic"}  onChange={(e)=>handleInputChange(e)}  id="bodyTypeAthletic" name="bodyType" value="Athletic" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="bodyTypeAthletic" class="ml-2">Athletic</label>
        </div>
        <div class=" items-center ml-6">
            <input type="radio" checked={formData.bodyType === "Average"}  onChange={(e)=>handleInputChange(e)}  id="bodyTypeAverage" name="bodyType" value="Average" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="bodyTypeAverage" class="ml-2">Average</label>
        </div>
        <div class=" items-center ml-6">
            <input type="radio" checked={formData.bodyType === "Curvy"}  onChange={(e)=>handleInputChange(e)}  id="bodyTypeCurvy" name="bodyType" value="Curvy" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="bodyTypeCurvy" class="ml-2">Curvy</label>
        </div>
        <div class=" items-center ml-6">
            <input type="radio" checked={formData.bodyType === "Heavyset"}  onChange={(e)=>handleInputChange(e)}  id="bodyTypeHeavyset" name="bodyType" value="Heavyset" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="bodyTypeHeavyset" class="ml-2">Heavyset</label>
        </div>
    </div>
</div>




<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-physical-status">
            Physical Status:
        </label>
    </div>
    <div class="md:w-2/3 flex">
        <div class="items-center">
            <input type="radio" checked={formData.physicalStatus === "Normal"}  onChange={(e)=>handleInputChange(e)}  id="physicalStatusNormal" name="physicalStatus" value="Normal" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="physicalStatusNormal" class="ml-2" >Normal</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio" checked={formData.physicalStatus === "Physically Challenged"}   onChange={(e)=>handleInputChange(e)}  id="physicalStatusChallenged" name="physicalStatus" value="Physically Challenged" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="physicalStatusChallenged" class="ml-2" >Physically Challenged</label>
        </div>
    </div>
</div>



<div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-mother-tongue">
            Mother Tongue: *
        </label>
    </div>
    <div className="md:w-1/3">
        <select
            id="motherTongue"
            name="motherTongue"
            required
            onChange={(e)=>handleInputChange(e)} 
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
            <option value="" disabled >Select your mother tongue</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Hindi">Hindi</option>

        </select>
    </div>
</div>

<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-know-to-read">
            Know to Read:
        </label>
    </div>
    <div class="md:w-2/3 flex ">
    <div class=" items-center">
        <input type="radio"  checked={formData.knowToRead === "Yes"}   onChange={(e)=>handleInputChange(e)}  id="knowToReadYes" name="knowToRead" value="Yes" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
        <label for="knowToReadYes" class="ml-2">Yes</label>
    </div>
    <div class=" items-center ml-6">
        <input type="radio" checked={formData.knowToRead === "No"}  onChange={(e)=>handleInputChange(e)}  id="knowToReadNo" name="knowToRead" value="No" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
        <label for="knowToReadNo" class="ml-2">No</label>
    </div>
</div>

</div>




<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-eating-habits">
            Eating Habits:
        </label>
    </div>
    <div class="md:w-2/3 flex">
        <div class="items-center">
            <input type="radio"  onChange={(e)=>handleInputChange(e)}  checked={userData.eatingHabit === "Vegetarian"} id="eatingHabitsVegetarian" name="eatingHabits" value="Vegetarian" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="eatingHabitsVegetarian" class="ml-2">Vegetarian</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.eatingHabit === "Non-Vegetarian"}  id="eatingHabitsNonVegetarian" name="eatingHabits" value="Non-Vegetarian" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="eatingHabitsNonVegetarian" class="ml-2">Non-Vegetarian</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.eatingHabit === "Eggetarian"} id="eatingHabitsEggetarian" name="eatingHabits" value="Eggetarian" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="eatingHabitsEggetarian" class="ml-2">Eggetarian</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.eatingHabit === "Vegan"} id="eatingHabitsVegan" name="eatingHabits" value="Vegan" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="eatingHabitsVegan" class="ml-2">Vegan</label>
        </div>
    </div>
</div>




<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-drinking-habits">
            Drinking Habits:
        </label>
    </div>
    <div class="md:w-2/3 flex">
        <div class="items-center">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.drinkingHabit === "Never"}  id="drinkingHabitsNever" name="drinkingHabits" value="Never" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="drinkingHabitsNever" class="ml-2">Never</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.drinkingHabit === "Occasionally"}  id="drinkingHabitsOccasionally" name="drinkingHabits" value="Occasionally" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="drinkingHabitsOccasionally" class="ml-2">Occasionally</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.drinkingHabit === "Socially"}  id="drinkingHabitsSocially" name="drinkingHabits" value="Socially" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="drinkingHabitsSocially" class="ml-2">Socially</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)}  checked={userData.drinkingHabits === "Regularly"} id="drinkingHabitsRegularly" name="drinkingHabits" value="Regularly" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="drinkingHabitsRegularly" class="ml-2">Regularly</label>
        </div>
    </div>
</div>


<div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-smoking-habits">
            Smoking Habits:
        </label>
    </div>
    <div class="md:w-2/3 flex">
        <div class="items-center">
            <input type="radio" checked={userData.smokingHabit === "Never"}  onChange={(e)=>handleInputChange(e)}  id="smokingHabitsNever" name="smokingHabits" value="Never" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="smokingHabitsNever" class="ml-2">Never</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.smokingHabit === "Occasionally"} id="smokingHabitsOccasionally" name="smokingHabits" value="Occasionally" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="smokingHabitsOccasionally" class="ml-2">Occasionally</label>
        </div>
        <div class="items-center ml-6">
            <input type="radio"  onChange={(e)=>handleInputChange(e)} checked={userData.smokingHabit === "Regularly"} id="smokingHabitsRegularly" name="smokingHabits" value="Regularly" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
            <label for="smokingHabitsRegularly" class="ml-2">Regularly</label>
        </div>
    </div>
</div>

              </>

            ) : ( 
              <div className="grid grid-cols-2 gap-4">
              {/* First column */}
              <div>
                  {details.slice(0, Math.ceil(details.length / 2)).map((info, index) => (
                      <div key={index} className="mb-4">
                          <div className="col-span-3">
                              <strong>{info.label}:</strong> {info.value === '' || info.value === undefined ? (
                                   <Profilepopover title={info.label}/>
                                  // <div className="relative">
                                  //     <button
                                  //         className="btn-small bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-1"
                                  //         onClick={() => handleAddDetail(index)}
                                  //     >
                                  //         Add {info.label} <PlayArrowIcon/>
                                  //     </button>
                                  // </div>
                              ) : info.value}
                          </div>
                      </div>
                  ))}
              </div>
              {/* Second column */}
              <div>
                  {details.slice(Math.ceil(details.length / 2)).map((info, index) => (
                      <div key={index} className="mb-4">
                          <div className="col-span-3">
                              <strong>{info.label}:</strong> {info.value === '' || info.value === undefined ? (
                                  <Profilepopover title={info.label}/>
                                 // <div className="relative">
                                  //     <button
                                  //         className="btn-small bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-1"
                                  //         onClick={() => handleAddDetail(index)}
                                  //     >
                                  //         Add {info.label} <PlayArrowIcon/>
                                  //     </button>
                                  // </div>
                              ) : info.value}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
          
            )}
          </div>
          <div className="col-span-1 p-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={handleEdit}>
              {!showEdit ? "Edit" : 'Close'}
            </button>
            {showEdit && (
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-2 py-2 px-4 rounded" onClick={()=>handleSave()}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;













// toottip show code


{/* {true && currentDetailIndex === index && (
                  <div className="tooltip absolute bg-gray-200 p-2 rounded mt-2 flex flex-col z-10">
                    <h1>{detail.label}:</h1>
                    <label className="block">
                      <input type="radio" name="bodyType" value="Slim" onChange={(e) => setNewDetailValue(e.target.value)} /> Slim
                    </label>
                    <label className="block">
                      <input type="radio" name="bodyType" value="Average" onChange={(e) => setNewDetailValue(e.target.value)} /> Average
                    </label>
                    <label className="block">
                      <input type="radio" name="bodyType" value="Athletic" onChange={(e) => setNewDetailValue(e.target.value)} /> Athletic
                    </label>
                    <div className="flex flex-row justify-between">
                      <button
                        className="btn-small bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                        onClick={handleSaveDetail}
                      >
                        Save
                      </button>
                      <button
                        className="btn-small bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => setShowTooltip(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )} */}

                // ///////////////////////////////////////////////////// close//////////////////


// import React from 'react'

// const BasicDetails = () => {
//     const [showEdit, setShowEdit] = useState(false);
//     const [formData, setFormData] = useState({
//         Profilecreatedfor: "Self",
//         BodyType:'',
        
//     });
  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
  //   const handleSave = () => {
  //  alert('hello')
  //     // Handle save logic
  //     // setShowEdit(false);
  //   };
  
//     const handleEdit = () => {
//       setShowEdit(!showEdit);
//     };
//     return (
//         <div className='flex items-center justify-center overflow-hidden bg-gray-50 p-3'>
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <div className="grid grid-cols-6 gap-4">
//               <div className="col-span-5 p-4">
//                 {showEdit ? (
//                   <div className="mb-4">
//                     <label htmlFor="Personalinformation" className="block text-gray-700 font-semibold mb-2">Personal Information:</label>
//                     <textarea
//                       id="Personalinformation"
//                       name="Personalinformation"
//                       value={formData.Personalinformation}
//                       onChange={handleInputChange}
//                       className="w-full border border-gray-300 rounded px-3 py-2 transition-all duration-300"
//                     />
//                   </div>
//                 ) : (
//                   <div>
//                     <h1>A few words about him</h1>
//                     <p className="text-sm text-gray-600">{formData.Personalinformation}</p>
//                   </div>
//                 )}
//               </div>
//               <div className="col-span-1 p-4 flex items-center justify-center flex-col">
//                 <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 `} onClick={handleEdit}>
//                   {!showEdit ? "Edit" : 'Close'}
//                 </button>
//                 {showEdit && (
//                   <button className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-2 transition-all duration-300`} onClick={handleSave}>
//                    {''} Save{''}
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default BasicDetails




