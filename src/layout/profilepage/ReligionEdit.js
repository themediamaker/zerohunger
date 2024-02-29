"use client";
import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useContext } from 'react';
import { DashboardContext } from '@/src/Context/dashboard';
import { makeRequest } from '@/src/Utils/Api';
import { profileregister } from '@/src/Utils/Allapiurl';
import { getnumber } from '../../Elements/getnumber';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Profilepopover } from '../../Components/EditProfileToolTop/ToolTip'
import PageLoading from '../../Components/Loading/PageLoading'
const ReligionEdit = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [selectlist, setselectlist] = useState('self')
    const { userprofiledata, isuserprofileloading } = useContext(DashboardContext)
    // console.log(userprofiledata)
    const religionData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
    console.log(religionData)
    const [formData, setFormData] = useState({
        religion: religionData?.religion,
        dosh: religionData?.dosh,
        caste: religionData?.caste,
        subcaste: religionData?.sabcaste,
        marrySameCommunity: religionData?.marrySameCommunity,
        gothra: religionData?.gothra,
        star: religionData?.star,
        rashi: religionData?.rashi,
        birthhrs: religionData?.birthhrs,
        birthmins: religionData?.birthmins,
        birthtime: religionData?.birthtimes,
        birthcity: religionData?.birthcity,
        birthstate: religionData?.birthstate,
        birthcountry: religionData?.birthcountry
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
   
    const handleSave = () => {
      
        makeRequest('post', profileregister, { data: formData }).then(() => {
            alert('sucesss')
            setShowEdit(false);
        })
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    };

    const ReligionsDetails = [
        { key: "Religion", value: religionData?.religion },
        { key: "Caste / Sub Cast", value: religionData?.caste },
        { key: "Gothra(m)", value: religionData?.gothra == undefined ? '---' : religionData?.gothra },
        { key: "Star / Raasi", value: religionData?.star == undefined && religionData?.rashi == undefined ? '' : `${religionData?.star}/${religionData?.rashi} ` },
        { key: "Dosh", value: religionData?.dosh === undefined ? 'Not Specified' : religionData?.dosh },
        { key: "Time of Birth", value: religionData?.birthhrs == undefined && religionData?.birthmins == undefined && religionData?.birthtime == undefined ? '' : `${religionData?.birthhrs}:${religionData?.birthmins}-${religionData?.birthtime}` },
        { key: "Place of Birth", value: religionData?.birthcity == undefined && religionData?.birthstate == undefined && religionData?.birthcountry == undefined ? '' : `${religionData?.birthcity}/${religionData?.birthstate}-${religionData?.birthcountry}` },
    ];
    return (
        <div className="flex items-center justify-center overflow-hidden bg-gray-50 p-3">
            <div className="bg-white  w-full rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-6 gap-4">

                    <div className="col-span-5 p-4">
                        {showEdit ? (
                            <>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="religion">
                                            Religion : *
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select
                                            id="religion"
                                            onChange={(e) => { handleInputChange(e) }}
                                            name="religion"
                                            value={formData?.religion}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Religion</option>
                                            <option value="hindu">Hindu</option>
                                            <option value="christian">Christian</option>
                                            <option value="muslim">Muslim</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="caste">
                                            Caste : *
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select
                                            id="caste"
                                            onChange={(e) => { handleInputChange(e) }}
                                            name="caste"
                                            value={formData?.caste}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Caste</option>
                                            <option value="brahmin">Brahmin</option>
                                            <option value="kshatriya">Kshatriya</option>
                                            <option value="vaishya">Vaishya</option>
                                            <option value="shudra">Shudra</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>



                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="subCaste">
                                            Sub Caste : *
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select
                                            id="subcaste"
                                            value={formData?.subcaste}
                                            onChange={(e) => { handleInputChange(e) }}
                                            name="subcaste"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Sub Caste</option>
                                            <option value="subCaste1">Sub Caste 1</option>
                                            <option value="subCaste2">Sub Caste 2</option>
                                            <option value="subCaste3">Sub Caste 3</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>



                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <p className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Willing to marry from the same community :</p>
                                    </div>
                                    <div className="md:w-2/3 flex items-center">
                                        <input
                                            id="marrySameCommunityYes"
                                            checked={formData?.marrySameCommunity == 'Yes'}
                                            name="marrySameCommunity"
                                            onChange={(e) => { handleInputChange(e) }}
                                            type="radio"
                                            value="Yes"
                                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        />
                                        <label htmlFor="marrySameCommunityYes" className="ml-2">Yes</label>
                                        <input
                                            id="marrySameCommunityNo"
                                            checked={formData?.marrySameCommunity == 'No'}
                                            onChange={(e) => { handleInputChange(e) }}
                                            name="marrySameCommunity"
                                            type="radio"
                                            value="No"
                                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ml-8"
                                        />
                                        <label htmlFor="marrySameCommunityNo" className="ml-2">No</label>
                                    </div>
                                </div>



                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gothra">
                                            Gothra(m) :
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select
                                            value={formData?.gothra}
                                            id="gothra"
                                            onChange={(e) => { handleInputChange(e) }}
                                            name="gothra"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Gothra(m)</option>
                                            <option value="gothra1">Gothra 1</option>
                                            <option value="gothra2">Gothra 2</option>
                                            <option value="gothra3">Gothra 3</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>




                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="raasi">
                                            Raasi / Moon Sign :
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select
                                            id="raasi"
                                            value={formData?.rashi}
                                            onChange={(e) => { handleInputChange(e) }}
                                            name="rashi"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Raasi / Moon Sign</option>
                                            <option value="Aries">Aries</option>
                                            <option value="Taurus">Taurus</option>
                                            <option value="Gemini">Gemini</option>
                                            <option value="Cancer">Cancer</option>
                                            <option value="Leo">Leo</option>
                                            <option value="Virgo">Virgo</option>
                                            <option value="Libra">Libra</option>
                                            <option value="Scorpio">Scorpio</option>
                                            <option value="Sagittarius">Sagittarius</option>
                                            <option value="Capricorn">Capricorn</option>
                                            <option value="Aquarius">Aquarius</option>
                                            <option value="Pisces">Pisces</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="zodiac">
                                            Zodiac/Star Sign :
                                        </label>
                                    </div>
                                    <div className="md:w-1/3">
                                        <select
                                         value={formData?.star}
                                            id="zodiac"
                                            name="star"
                                            onChange={(e) => { handleInputChange(e) }}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Zodiac/Star Sign</option>
                                            <option value="Aries">Aries</option>
                                            <option value="Taurus">Taurus</option>
                                            <option value="Gemini">Gemini</option>
                                            <option value="Cancer">Cancer</option>
                                            <option value="Leo">Leo</option>
                                            <option value="Virgo">Virgo</option>
                                            <option value="Libra">Libra</option>
                                            <option value="Scorpio">Scorpio</option>
                                            <option value="Sagittarius">Sagittarius</option>
                                            <option value="Capricorn">Capricorn</option>
                                            <option value="Aquarius">Aquarius</option>
                                            <option value="Pisces">Pisces</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <p className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Have Dosh? :</p>
                                    </div>
                                    <div className="md:w-2/3 flex items-center">
                                        <input
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="haveDoshYes"
                                           checked={formData?.dosh=='Yes'}
                                            name="dosh"
                                            type="radio"
                                            value="Yes"
                                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        />
                                        <label htmlFor="haveDoshYes" className="ml-2">Yes</label>
                                        <input
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="haveDoshNo"
                                            checked={formData?.dosh=='No'}
                                            name="dosh"
                                            type="radio"
                                            value="No"
                                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ml-8"
                                        />
                                        <label htmlFor="haveDoshNo" className="ml-2">No</label>
                                        <input
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="haveDoshDontKnow"
                                            name="dosh"
                                            type="radio"
                                            checked={formData?.dosh=="Don't Know"}
                                            value="Don't Know"
                                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ml-8"
                                        />
                                        <label htmlFor="haveDoshDontKnow" className="ml-2">Don't Know</label>
                                    </div>
                                </div>








                                <div className="md:w-1/3">
                                    Horoscope Details

                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="hours">
                                            Time of Birth : *
                                        </label>
                                    </div>
                                    <div className="md:w-2/3 flex items-center">
                                        <select
                                            value={formData?.birthhrs}
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="hours"
                                            name="birthhrs"
                                            className="block mr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Hours</option>
                                            {getnumber(12).map((data) => {
                                                return <option value={data}>{data}</option>
                                            })}
                                        </select>
                                        <select
                                         value={formData?.birthmins}
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="minutes"
                                            name="birthmins"
                                            className="block mr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Minutes</option>
                                            {getnumber(59).map((data) => {
                                                return <option value={data}>{data}</option>
                                            })}
                                        </select>
                                        <select
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="ampm"
                                            name="birthtime"
                                            value={formData?.birthtime}
                                            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="AM">AM</option>
                                            <option value="PM">PM</option>
                                        </select>
                                    </div>
                                </div>



                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="placeOfBirth">
                                            Place of Birth : *
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <select
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="country"
                                            value={formData?.birthcountry}
                                            name="birthcountry"
                                            className="block mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select Country</option>
                                            <option value="india">India</option>
                                            {/* Populate country options */}
                                        </select>
                                        <select
                                            onChange={(e) => { handleInputChange(e) }}
                                            id="state"
                                            value={formData?.birthstate}
                                            name="birthstate"
                                            className="block mb-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select State</option>
                                            <option value="Haryana">Haryana</option>
                                            {/* Populate state options based on the selected country */}
                                        </select>
                                        <select
                                            onChange={(e) => { handleInputChange(e) }}
                                            value={formData?.birthcity}
                                            id="city"
                                            name="birthcity"
                                            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select City</option>
                                            <option value="Faridabad">Faridabad</option>
                                            {/* Populate city options based on the selected state */}
                                        </select>
                                    </div>
                                </div>

                            </>



                        ) : (
                            <div className="grid grid-cols-2 gap-4">
                                {/* First column */}
                                <div>
                                    {ReligionsDetails.slice(0, Math.ceil(ReligionsDetails.length / 2)).map((info, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="col-span-3">
                                                <strong>{info.key}:</strong> {info.value === '' ? (
                                                    <Profilepopover title={info.key} />
                                                ) : info.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {ReligionsDetails.slice(Math.ceil(ReligionsDetails.length / 2)).map((info, index) => (
                                        <div key={index} className="mb-4">
                                            <div className="col-span-3">
                                                <strong>{info.key}:</strong> {info.value === '' ? (
                                                    //    info.key === 'Dosh'
                                                    <Profilepopover title={info.key} />
                                                ) : info.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        )}
                        <PageLoading />
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

export default ReligionEdit;