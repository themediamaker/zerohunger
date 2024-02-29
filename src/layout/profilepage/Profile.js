"use client"
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useContext } from 'react';
import { DashboardContext } from '@/src/Context/dashboard';
import {getyear} from '../../Elements/getdateconverter'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useRouter } from 'next/navigation';

export const EditProfile = () => {
    const router = useRouter()
    const {userprofiledata,isuserprofileloading} = useContext(DashboardContext)
    const userData = isuserprofileloading && JSON.parse(userprofiledata).userdata[0]
    const user = {
        name: userData?.name,
        assignedTo:userData?.assignedTo,
        DateofBirth:userData?.dateofBirth,
        Height:userData?.height,
        religion:userData?.religion,
        Caste:userData?.caste,
        City:userData?.cityLivingIn,
        State:userData?.stateLivingIn,
        Country:userData?.countryLivingIn,
        Education:userData?.education,
        EmployeedIn:userData?.Electrician,
        MobileNo:'9971707395',
        userID:userData._id,
    }
    console.log(userData)

    return (
        <div className='flex items-center justify-center overflow-hidden bg-gray-50 p-3'>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-6 gap-4 ">
                {/* Image Column */}
                <div className="col-span-2 p-4">
                    <img
                        src={"/images/userProfile.png"}
                        alt="User Photo"
                        className="h-40 w-40 rounded-full mx-auto"
                    /><br></br>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 px-4 rounded">
                        Add/Edit Profile
                    </button>
                </div>

                <div className="col-span-2 p-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-sm text-gray-600">Create Profile For {user.assignedTo}</p>
                        <p className="text-sm text-gray-600">{getyear(user.DateofBirth)} Yrs,{user.Height}</p>
                        <p className="text-sm text-gray-600">{user.religion}{','}{user.Caste}{' '}{'Caste No Bar'}</p>
                        <p className="text-sm text-gray-600">{user.City},{user.State},{user.Country}</p>
                        <p className="text-sm text-gray-600">{user.Education},{user.EmployeedIn}</p>
                        <p className="text-sm text-gray-600">{user.MobileNo}<span className="text-sm bold-500 text-green-800">(<DoneAllIcon /> Verified)</span> <span className="text-sm text-blue-800 cursor-pointer">Edit Mobile</span></p>
        
                    </div>
                </div>
                <div className="col-span-2 p-4">
                   <p>
                    How your profile looks
                    to others
                    </p> 

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={()=>{router.push(`/user/dashboard-Own-/viewprofile/${user.userID}`)}}>
                        <RemoveRedEyeIcon/> Profile Preview
                    </button>
                </div>
            </div>
        </div>
    );
}

