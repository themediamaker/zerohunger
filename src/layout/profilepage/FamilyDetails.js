"use client";
import React, { useState } from 'react';
import { useContext } from 'react';
import { DashboardContext } from '@/src/Context/dashboard';
import { getuserid } from '@/src/Helper/usergetid';
import { makeRequest } from '@/src/Utils/Api';
import { profileregister } from '@/src/Utils/Allapiurl';
// import 
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import Selectlist from '../../../Components/SelectList/SelectInput'
const FamilyDetails = () => {
    const userid = getuserid()
    const { userprofiledata, isuserprofileloading } = useContext(DashboardContext)
    const familydata = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
    console.log(familydata)
    const [showEdit, setShowEdit] = useState(false);
    const [formData, setFormData] = useState({
        userid:userid.userid,
        familyStatus:familydata?.familyStatus,
        familyType:familydata?.familyType,
        familyValues:familydata?.familyValues,
        fatherOccupation: familydata?.fatherOccupation,
        motherOccupation:familydata?.motherOccupation,
        noOfBrother:familydata?.noOfBrother,
        noOfBrotherMarried:familydata?.noOfBrotherMarried,
        noOfSister:familydata?.noOfSister,
        noOfSisterMarried:familydata?.noOfSisterMarried,
        familyLocation:familydata?.familyLocation
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      console.log(formData)
    const [selectlist, setselectlist] = useState('self')
    const familyDetails = [
        { key: "Family Values", value:familydata?.familyValues},
        { key: "Father's Occupation", value:familydata?.fatherOccupation },
        { key: "Family Type", value: familydata?.familyType },
        { key: "Mother's Occupation", value: familydata?.motherOccupation },
        { key: "No of Brother(s)", value:familydata?.noOfBrother},
        { key: "No of Sister(s)", value:familydata?.noOfSister },
        { key: "Family Location", value:familydata?.familyLocation },
        { key: "Family Status", value: familydata?.familyStatus }

    ];
    console.log(familyDetails)
    const handleSave = () => {
makeRequest('post',profileregister,{data:formData}).then(()=>{
    alert('sucess')
})
        setShowEdit(false);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
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
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Family Value:*
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className="flex items-center">
                                            <input
                                                id="orthodox"
                                                name="familyValues"
                                                type="radio"
                                                value="Orthodox"
                                                checked={formData.familyValues==="Orthodox"}
                                                required
                                                onChange={(e)=>handleInputChange(e)}
                                                className="mr-2"
                                            />
                                            <label htmlFor="orthodox" className="mr-4">Orthodox</label>

                                            <input
                                                id="traditional"
                                                name="familyValue"
                                                type="radio"
                                                checked={formData.familyValues==="Traditional"}
                                                value="Traditional"
                                                className="mr-2"
                                                onChange={(e)=>handleInputChange(e)}
                                            />
                                            <label htmlFor="traditional" className="mr-4">Traditional</label>

                                            <input
                                                id="moderate"
                                                name="familyValue"
                                                type="radio"
                                                checked={formData.familyValues==="Moderate"}
                                                value="Moderate"
                                                className="mr-2"
                                                onChange={(e)=>handleInputChange(e)}
                                            />
                                            <label htmlFor="moderate" className="mr-4">Moderate</label>

                                            <input
                                                id="liberal"
                                                name="familyValue"
                                                checked={formData.familyValues==="Liberal"}
                                                type="radio"
                                                value="Liberal"
                                                className="mr-2"
                                                onChange={(e)=>handleInputChange(e)}
                                            />
                                            <label htmlFor="liberal">Liberal</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Family Type: *
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className="flex items-center">
                                            <input
                                               onChange={(e)=>handleInputChange(e)}
                                                id="jointFamily"
                                                name="familyType"
                                                type="radio"
                                                value="Joint Family"
                                                required
                                                className="mr-2"
                                            />
                                            <label htmlFor="jointFamily" className="mr-4">Joint Family</label>

                                            <input
                                                id="nuclearFamily"
                                                name="familyType"
                                                onChange={(e)=>handleInputChange(e)}
                                                type="radio"
                                                value="Nuclear Family"
                                                className="mr-2"
                                            />
                                            <label htmlFor="nuclearFamily" className="mr-4">Nuclear Family</label>

                                            <input
                                                id="others"
                                                name="familyType"
                                                type="radio"
                                                onChange={(e)=>handleInputChange(e)}
                                                value="Others"
                                                className="mr-2"
                                            />
                                            <label htmlFor="others">Others</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Family Status: *
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className="flex items-center">
                                            <input
                                                id="middleClass"
                                                onChange={(e)=>handleInputChange(e)}
                                                name="familyStatus"
                                                type="radio"
                                                value="Middle Class"
                                                required
                                                className="mr-2"
                                            />
                                            <label htmlFor="middleClass" className="mr-4">Middle Class</label>

                                            <input
                                                id="upperMiddleClass"
                                                onChange={(e)=>handleInputChange(e)}
                                                name="familyStatus"
                                                type="radio"
                                                value="Upper Middle Class"
                                                className="mr-2"
                                            />
                                            <label htmlFor="upperMiddleClass" className="mr-4">Upper Middle Class</label>

                                            <input
                                                id="highClass"
                                                name="familyStatus"
                                                onChange={(e)=>handleInputChange(e)}
                                                type="radio"
                                                value="High Class"
                                                className="mr-2"
                                            />
                                            <label htmlFor="highClass" className="mr-4">High Class</label>

                                            <input
                                                id="richAffluent"
                                                name="familyStatus"
                                                onChange={(e)=>handleInputChange(e)}
                                                type="radio"
                                                value="Rich/Affluent"
                                                className="mr-2"
                                            />
                                            <label htmlFor="richAffluent">Rich/Affluent</label>
                                        </div>
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Father's Occupation:
                                        </label>
                                    </div>
                                    <div className="md:w-1/4 flex items-center">
                                        <select
                                        value={formData.fatherOccupation}
                                            id="fatherOccupation"
                                            onChange={(e)=>handleInputChange(e)}
                                            name="fatherOccupation"
                                            className="block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-4"
                                        >
                                            <option value="">- Select -</option>
                                            <option value="Tester">Tester</option>
                                            {/* Add father's occupation options here */}
                                        </select>
                                    </div>
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Mother's Occupation:
                                        </label>
                                    </div>
                                    <div className="md:w-1/4 flex items-center">
                                        <select
                                          value={formData.motherOccupation}
                                            id="motherOccupation"
                                            name="motherOccupation"
                                            onChange={(e)=>handleInputChange(e)}
                                            className="block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">- Select -</option>
                                            <option value="Tester">Tester</option>
                                            {/* Add mother's occupation options here */}
                                        </select>
                                    </div>
                                </div>






                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            No. of Brothers:
                                        </label>
                                    </div>
                                    <div className="md:w-1/4 flex items-center">
                                        <select
                                            value={formData.noOfBrother}
                                            id="noOfBrother"
                                            name="noOfBrother"
                                            onChange={(e)=>handleInputChange(e)}
                                            className="block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-4"
                                        >
                                            <option value="">- Select -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="3 More">3 More</option>
                                            {/* Add options here */}
                                        </select>
                                    </div>
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Brothers Married:
                                        </label>
                                    </div>
                                    <div className="md:w-1/4 flex items-center">
                                        <select
                                           value={formData.noOfBrotherMarried}
                                            id="noOfBrotherMarried"
                                            name="noOfBrotherMarried"
                                            onChange={(e)=>handleInputChange(e)}
                                            className="block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">- Select -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="3 More">3 More</option>
                                            {/* Add options here */}
                                        </select>
                                    </div>
                                </div>

                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            No. of Sisters:
                                        </label>
                                    </div>
                                    <div className="md:w-1/4 flex items-center">
                                        <select
                                            id="noOfSister"
                                            value={formData.noOfSister}
                                            name="noOfSister"
                                            onChange={(e)=>handleInputChange(e)}
                                            className="block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-4"
                                        >
                                            <option value="">- Select -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="3 More">3 More</option>
                                        </select>
                                    </div>
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Sisters Married:
                                        </label>
                                    </div>
                                    <div className="md:w-1/4 flex items-center">
                                        <select
                                            id="NoOfSisterMarried"
                                            value={formData.noOfSisterMarried}
                                            name="noOfSisterMarried"
                                            onChange={(e)=>handleInputChange(e)}
                                            className="block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="">- Select -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="3 More">3 More</option>
                                        </select>
                                    </div>
                                </div>



                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Family Location:
                                        </label>
                                    </div>
                                    <div className="md:w-3/4 flex items-center">
                                        <input
                                            id="sameLocation"
                                            onChange={(e)=>handleInputChange(e)}
                                            name="familyLocation"
                                            checked={formData.familyLocation==='Same as my Location'}
                                            type="radio"
                                            value="Same as my Location"
                                            required
                                            className="mr-2"
                                        />
                                        <label htmlFor="sameLocation" className="mr-4">Same as my Location</label>

                                        <input
                                            id="differentLocation"
                                            onChange={(e)=>handleInputChange(e)}
                                            name="familyLocation"
                                            checked={formData.familyLocation==='Different Location'}
                                            type="radio"
                                            value="Different Location"
                                            className="mr-2"
                                        />
                                        <label htmlFor="differentLocation">Different Location</label>
                                    </div>
                                </div>

                            </>

                        ) : (
                            <div className="grid grid-cols-2 gap-4">
                            {/* First column */}
                            <div>
                                {familyDetails.slice(0, Math.ceil(familyDetails.length / 2)).map((info, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="col-span-3">
                                            <strong>{info.key}:</strong> {info.value === '' ? (
                                                <div className="relative">
                                                    <button
                                                        className="btn-small bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-1"
                                                        onClick={() => handleAddDetail(index)}
                                                    >
                                                        Add {info.key} <PlayArrowIcon/>
                                                    </button>
                                                </div>
                                            ) : info.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Second column */}
                            <div>
                                {familyDetails.slice(Math.ceil(familyDetails.length / 2)).map((info, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="col-span-3">
                                            <strong>{info.key}:</strong> {info.value === '' ? (
                                                <div className="relative">
                                                    <button
                                                        className="btn-small bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-1"
                                                        onClick={() => handleAddDetail(index)}
                                                    >
                                                        Add {info.key} <PlayArrowIcon/>
                                                    </button>
                                                </div>
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
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-2 py-2 px-4 rounded" onClick={handleSave}>
                                Save
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FamilyDetails;