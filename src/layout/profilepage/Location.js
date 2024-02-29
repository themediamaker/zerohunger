"use client";
import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useContext } from 'react';
import { DashboardContext } from '../../Context/dashboard'
import { getuserid } from '../../Helper/usergetid'
import { makeRequest } from '../../Utils/Api'
import { profileregister } from '../../Utils/Allapiurl'
// import Selectlist from '../../../Components/SelectList/SelectInput'
const Location = () => {
  const userid = getuserid()
  const [showEdit, setShowEdit] = useState(false);
  const [selectlist, setselectlist] = useState('self')
  const { userprofiledata, isuserprofileloading } = useContext(DashboardContext)
  const LocationData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
  console.log(LocationData)
  const [formData, setFormData] = useState({
    userid: userid.userid,
    cityLivingIn: LocationData?.cityLivingIn,
    countryLivingIn: LocationData?.countryLivingIn,
    stateLivingIn: LocationData?.stateLivingIn,
    citizenship: LocationData?.countryLivingIn,
    ancestralOrigin: LocationData?.stateLivingIn
  })
  console.log(formData)
  const data = {
    Country: formData?.countryLivingIn,
    City: formData?.cityLivingIn,
    State:formData?.stateLivingIn,
    Citizenship: formData?.citizenship,
    AncestralOrigin: formData?.ancestralOrigin
  };

  const dataArray =  Object.entries(data);
  console.log(dataArray)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSave = () => {
    // alert('hjjghfdcx')
    makeRequest('post',profileregister,{data:formData}).then(()=>{
      alert('sucesss')
      setShowEdit(false);
    })
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
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="country">
                      Country Living in *:
                    </label>
                  </div>
                  <div className="md:w-1/3">
                    <select
                      id="country"
                      name="countryLivingIn"
                      onChange={(e) => handleInputChange(e)}
                      required
                      value={data?.Country}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Country</option>
                      <option value="usa">USA</option>
                      <option value="canada">Canada</option>
                      <option value="uk">UK</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>






                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="citizenship">
                      Citizenship *:
                    </label>
                  </div>
                  <div className="md:w-1/3">
                    <select
                      id="citizenship"
                      name="citizenship"
                      onChange={(e) => handleInputChange(e)}
                      value={data?.Citizenship}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Citizenship</option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="au">Australia</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>



                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="residingState">
                      Residing State *:
                    </label>
                  </div>
                  <div className="md:w-1/3">
                    <select
                      id="residingState"
                      name="residingState"
                      onChange={(e) => handleInputChange(e)}
                      value={data?.State}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Residing State</option>
                      <option value="alabama">Alabama</option>
                      <option value="alaska">Alaska</option>
                      <option value="arizona">Arizona</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>




                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="ancestralOrigin">
                      Ancestral Origin *:
                    </label>
                  </div>
                  <div className="md:w-1/3">
                    <select
                      id="ancestralOrigin"
                      name="ancestralOrigin"
                      value={data?.AncestralOrigin}
                      onChange={(e) => handleInputChange(e)}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Ancestral Origin</option>
                      <option value="african">African</option>
                      <option value="asian">Asian</option>
                      <option value="european">European</option>
                      <option value="latin_american">Latin American</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="ancestralOrigin">
                      Residing City / District *:
                    </label>
                  </div>
                  <div className="md:w-1/3">
                    <select
                      id="residingCityDistrict"
                      onChange={(e) => handleInputChange(e)}
                      name="cityLivingIn"
                      value={data?.City}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Ancestral Origin</option>
                      <option value="african">African</option>
                      <option value="asian">Asian</option>
                      <option value="european">European</option>
                      <option value="latin_american">Latin American</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <div>
                {dataArray.map(([key, value], index) => (
                  <div key={key} className="mb-4">
                    <strong>{key}:</strong> {value === '' ? <div className="relative">
                      <button
                        className="btn-small bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-1"
                        onClick={() => handleAddDetail(index)}
                      >
                        Add {key} <PlayArrowIcon />
                      </button>
                    </div>
                      : value}
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

export default Location;