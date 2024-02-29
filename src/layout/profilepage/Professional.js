"use client";
import React, { useState } from 'react';
import { useContext } from 'react';
import { DashboardContext } from '@/src/Context/dashboard';
import { makeRequest } from '@/src/Utils/Api';
import { profileregister } from '@/src/Utils/Allapiurl';
import { getuserid } from '@/src/Helper/usergetid';
const Professional = () => {
    const userid = getuserid()
    const { userprofiledata, isuserprofileloading } = useContext(DashboardContext)
    const ProfessionData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
    console.log(ProfessionData)
    const [formData, setFormData] = useState({
        userid: userid.userid,
        education:ProfessionData?.education,
        educationInDetails:ProfessionData?.educationInDetails===undefined ?'Not Specified':ProfessionData?.educationInDetails,
        college:ProfessionData?.collage===undefined ?'Not Specified':ProfessionData?.collage,
        employedId:ProfessionData?.employedId,
        occupation:ProfessionData?.occupation,
        occupationInDetail:ProfessionData?.occupationInDetail===undefined ?'Not Specified':ProfessionData?.occupationInDetail,
        organization:ProfessionData?.organization===undefined ?'Not Specified':ProfessionData?.organization,
        annualIncome:ProfessionData?.annualIncome,
    })
    console.log(formData)
    const [showEdit, setShowEdit] = useState(false);
    const [selectlist, setselectlist] = useState('self')

    const professionalInfoArray = [
        { key: "Education", value:formData?.education},
        { key: "Education in Detail", value: formData?.educationInDetails},
        { key: "College / Institution", value: formData?.college},
        { key: "Employed in", value: formData?.employedId},
        { key: "Occupation", value: formData?.occupation},
        { key: "Occupation in Detail", value: formData?.occupationInDetail},
        { key: "Organization", value: formData?.organization},
        { key: "Annual Income", value: formData?.annualIncome}
    ];
    const handleSave = () => {
       makeRequest('post',profileregister,{data:formData}).then(()=>{
        alert('sucesss')
        setShowEdit(false);
       })
   
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

                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p>Professional InformationClose</p>
                                </div>

                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="education">
                                            Highest Education: *
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select
                                            id="education"
                                            name="education"
                                            value={formData?.education}
                                            onChange={(e) => handleInputChange(e)}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Highest Education</option>
                                            <option value="bsc">B.Sc</option>
                                            <option value="mca">MCA</option>
                                            <option value="mtech">M.Tech</option>
                                            <option value="dr">Doctorate</option>
                                            <option value="bba">BBA</option>
                                            <option value="mba">MBA</option>
                                            <option value="ba">BA</option>
                                            <option value="llb">LLB</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="education">
                                        Education In Details: *
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <input
                                            id="educationInDetails"
                                            name="educationInDetails"
                                            type="text"
                                            value={formData?.educationInDetails}
                                            required
                                            onChange={(e) => handleInputChange(e)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter Highest Education"
                                        />
                                    </div>
                                </div>





                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="institution">
                                            College / Institution:
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <input
                                            id="institution"
                                            name="college"
                                            type="text"
                                            value={formData?.college}
                                            onChange={(e) => handleInputChange(e)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter College / Institution Name"
                                        />
                                    </div>
                                </div>

                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                            Employed in:
                                        </label>
                                    </div>
                                    <div class="md:w-2/3">
                                        <div class="flex items-center">
                                            <input onChange={(e) => handleInputChange(e)} checked={formData?.employedId==="employment"} type="radio" id="government" name="employment" value="Government/PSU" class="mr-2" />
                                            <label for="government" class="mr-4">Government/PSU</label>

                                            <input onChange={(e) => handleInputChange(e)} checked={formData?.employedId==="Private"} type="radio" id="private" name="employment" value="Private" class="mr-2" />
                                            <label for="private" class="mr-4">Private</label>

                                            <input onChange={(e) => handleInputChange(e)} checked={formData?.employedId==="Business"} type="radio" id="business" name="employment" value="Business" class="mr-2" />
                                            <label for="business" class="mr-4">Business</label>

                                            <input onChange={(e) => handleInputChange(e)} checked={formData?.employedId==="Defence"} type="radio" id="defence" name="employment" value="Defence" class="mr-2" />
                                            <label for="defence" class="mr-4">Defence</label>

                                            <input onChange={(e) => handleInputChange(e)} checked={formData?.employedId==="Self Employed"} type="radio" id="self-employed" name="employment" value="Self Employed" class="mr-2" />
                                            <label for="self-employed" class="mr-4">Self </label>

                                            <input onChange={(e) => handleInputChange(e)} checked={formData?.employedId==="Not Working"} type="radio" id="not-working" name="employment" value="Not Working" class="mr-2" />
                                            <label for="not-working">Not Working</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="occupation">
                                            Occupation:
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select onChange={(e) => handleInputChange(e)}  value={formData?.occupation} id="occupation" name="occupation" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option value="">Select Occupation</option>
                                            <option value="Student">Student</option>
                                            <option value="Employee">Employee</option>
                                            <option value="Entrepreneur">Entrepreneur</option>
                                            <option value="Homemaker">Homemaker</option>
                                            <option value="Freelancer">Freelancer</option>
                                            <option value="Unemployed">Unemployed</option>

                                        </select>
                                    </div>
                                </div>


                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="organization">
                                            Organization:
                                        </label>
                                    </div>
                                    <div class="md:w-1/3">
                                        <input
                                            onChange={(e) => handleInputChange(e)}
                                            id="organization"
                                            value={formData?.organization}
                                            name="organization"
                                            type="text"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter Organization Name"
                                        />
                                    </div>
                                </div>

                                <div class="md:flex md:items-center mb-6">
                                    <div class="md:w-1/3">
                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="annual_income">
                                            Annual Income:
                                        </label>
                                    </div>
                                    <div class="md:w-1/3">
                                        <select  value={formData?.annualIncome} onChange={(e) => handleInputChange(e)} id="annualIncome" name="annual_income" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <option value="">Select Annual Income</option>
                                            <optgroup label="India (INR)">
                                                <option value="0-200000">Below 2,00,000</option>
                                                <option value="200001-500000">2,00,001 - 5,00,000</option>
                                                <option value="500001-1000000">5,00,001 - 10,00,000</option>

                                            </optgroup>
                                            <optgroup label="United States (USD)">
                                                <option value="0-20000">Below $20,000</option>
                                                <option value="20001-50000">$20,001 - $50,000</option>
                                                <option value="50001-100000">$50,001 - $100,000</option>

                                            </optgroup>
                                            <optgroup label="United Kingdom (GBP)">
                                                <option value="0-15000">Below £15,000</option>
                                                <option value="15001-40000">£15,001 - £40,000</option>
                                                <option value="40001-80000">£40,001 - £80,000</option>
                                            </optgroup>

                                        </select>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div>
                                {professionalInfoArray.map((info, index) => (
                                    <div key={index} className="mb-4">
                                        <strong>{info.key}:</strong> {info.value}
                                    </div>
                                ))}
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

export default Professional;