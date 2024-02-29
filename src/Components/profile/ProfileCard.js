"use client"
import React from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { makeRequest } from '../../Utils/Api'
import { getuserid } from '../../Helper/usergetid'
import { allinone } from '@/src/Utils/Allapiurl';
import { getyear } from '@/src/Elements/getdateconverter';

const ProfileCard = ({ data }) => {









    console.log(data)
    // const [isshortlist,setshortlist]=useState(false)
    const getuser = getuserid()
    console.log(getuser)
    const onhandleShortList = (e) => {
        const agg = [
            {
                $match: {
                    userid: data.userid
                    // params.userprofile[2]

                }
            },
            {
                $addFields: {
                    ShortlistedByYou: {
                        $cond: {
                            if: {
                                $in: [
                                    // params.userprofile[2], 
                                    getuser.userid,
                                    // '123',
                                    { $ifNull: ["$ShortlistedByYou", []] }]
                            },
                            then: "$ShortlistedByYou",
                            else: {
                                $concatArrays: [{ $ifNull: ["$ShortlistedByYou", []] }, [
                                    // params.userprofile[2]
                                    getuser.userid,
                                    // '123',
                                ]]
                            }
                        }
                    }
                }
            },
            { $merge: { into: "users", whenMatched: "replace" } }
        ];
        console.log(agg)
        makeRequest('post', allinone, { agg }).then(data => { if (data.command == 1) { alert('shortlist sucessful') } })
    }
    return (
        <div>

            <div class="flex flex-col">
                <div class="w-80% bg-white-800 border border-white-800 shadow-lg  rounded-2xl p-3 py-4">
                    <div class="flex-none sm:flex">
                        <div class=" relative sm:mb-0 mb-3">

                            <img src="/images/a1.jpg"  class=" w-60 h-60 rounded-2xl" />
                            <p class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                1/4 <CropOriginalIcon />
                            </p>
                            <p class="absolute -right-1 top-2   -ml-3  text-white p-1 text-xs bg-yellow-400 hover:bg-green-500 font-medium tracking-wider rounded-[1xl] transition ease-in duration-300 cursor-pointer" onClick={(e) => { onhandleShortList(e) }} >
                                <StarOutlineIcon /> Short List
                            </p>
                        </div>

                        <div class="flex-auto sm:ml-5 justify-evenly">
                            <div class="flex items-center justify-between sm:mt-2">
                                <div class="flex items-center">
                                    <div class="flex flex-col">
                                        <div class="flex-none text-lg text-black-200 font-bold leading-none">{data.name}</div>
                                        <div class="flex-auto text-sm text-black-400 my-1">
                                            <span class="mr-3 ">{data._id}</span><span class="mr-3 border-r border-gray-600 max-h-0"></span><span>Last seen few days ago</span>
                                        </div>
                                        <div class="flex-auto text-sm text-black-400 my-1">
                                            <span class="mr-3 ">{getyear(data.dateofBirth)} Yrs, 5'2" </span><span class="mr-3 "> * {data.caste}(Caste No Bar)</span><span></span>
                                        </div>
                                        <div class="flex-auto text-sm text-black-400 my-1">
                                            <span class="mr-3 ">Higher Secondary School / High School,Student</span><span></span>
                                        </div>
                                        <div class="flex-auto text-sm text-black-400 my-1">
                                            <span class="mr-3 ">Not Working </span><span class="mr-3">* Agra</span><span></span>
                                        </div>
                      
                                    </div>
                                </div>
                            </div>
                            <hr style={{ border: "0.1px solid lightgrey", width: "100%" }} />
                            <div class="flex flex-row items-center p-4">
                                <div className='flex-auto text-sm text-black-400 my-1'>
                                    <span >Interested in her?</span>
                                    <div class="flex-auto text-sm text-black-400 my-1">
                                        <span >Connect Now</span>
                                    </div>
                                  
                                </div>

                                <div class="flex pt-2 text-sm text-gray-400">
                                        <button class="flex-no-shrink bg-lightgrey-400 hover:bg-lightgrey-300 px-2 ml-4  text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-black rounded-full transition ease-in duration-300">
                                            <CloseIcon />Don't Show
                                        </button>
                                        <button class="flex-no-shrink bg-yellow-500 hover:bg-yellow-700 px-2 ml-4  text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                                            <CheckIcon />Send Interest
                                        </button>
                                        {/* <a href="https://www.behance.net/ajeeshmon" target="_blank" class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">FOLLOW</a> */}
                                    </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard