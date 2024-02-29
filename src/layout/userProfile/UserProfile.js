import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
// import { DashboardContext } from '@/Context/DashboardContext'
// import { DashboardContext } from '../../Context/DashboardContext';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SecurityIcon from '@mui/icons-material/Security';
import FavoriteIcon from '@mui/icons-material/Favorite';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { DashboardContext } from '@/src/Context/dashboard';
import { getGreeting } from '@/src/Elements/getdateconverter';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getuserid } from '@/src/Helper/usergetid';
import { makeRequest } from '@/src/Utils/Api';
import { userstepperstatus } from '@/src/Utils/Allapiurl';



const UserProfile = () => {
    const userid = getuserid()
    const router = useRouter()
    useEffect(()=>{
        // alert(getuserid().userid)
    // makeRequest('post',userstepperstatus,getuserid().userid).then((data)=>{
    //     console.log(data)
    // })
    },[])
    const { userprofiledata,isuserprofileloading } = useContext(DashboardContext)
    // let data;
    let data = isuserprofileloading ? JSON.parse(userprofiledata)?.userdata:[]
    console.log(data);
 
    return (
        <div>





           {
            data.length>0 && isuserprofileloading ?
            <div class="text-gray-300 rounded-lg text-sm w-[300px] bg-[#161b22] border border-[#3f3f46]">
                <div class="w-full flex flex-row space-x-3 p-4 cursor-pointer" >
                    <img
                        class="rounded-1xl border-zinc-700 w-10 h-10"
                        alt="Sebastián Ríos"
                        src="/images/userProfile.png"
                    />
                    <div class="w-full text-gray-500">
                        <p class="w-[200px] text-lg space-x-1 inline-block overflow-hidden whitespace-nowrap text-ellipsis">
                            <span class="text-gray-100">Hy {data[0].name}</span>
                        </p>
                        <p>ID:{data[0]._id}</p>
                        <p>{getGreeting()}</p>
                        <p>MemberShip:Free</p>

                    </div>
                </div>
                <div class="w-full border-b border-[#CA786D]"></div>
                <div class="w-full flex flex-row space-x-4 p-4 text-gray-700 text-sm">
                    <p class="flex items-center space-x-1">
                        <a class="hover:text-blue-500 flex items-center space-x-1 bg-blue-100 px-2 py-1 rounded-md"
                            href="#">
                            <UpgradeIcon /> Upgrade Profile
                        </a>
                       
                    </p>
                </div>
                <div class="w-full border-b border-[#CA786D]"></div>
                <div class="w-full flex-col space-y-1 p-4 text-gray-500 text-sm">
                    <div v-if="infos.blog" class="flex items-center space-x-1">
                        <EditCalendarIcon />
                        <Link class="text-gray-100 hover:text-blue-500" href="/user/profile">Edit Profile</Link>
                    </div>
                    
                    <div v-if="infos.blog" class="flex items-center space-x-1">
                        <PublicIcon />
                        <a class="text-gray-100 hover:text-blue-500" href="#">Generate Horoscope</a>
                    </div>
                    <div v-if="infos.twitter_username" class="flex items-center space-x-1">
                        <VerifiedIcon />
                        <a class="text-gray-100 hover:text-blue-500" href="#">Verify Your Profile</a>
                    </div>
                    <div class="w-full border-b border-[#3f3f46]"></div>
                    <div v-if="infos.twitter_username" class="flex items-center space-x-1">
                        <SettingsIcon />
                        <Link class="text-gray-100 hover:text-blue-500" href="/user/profile/setting">Settings</Link>
                    </div>
                    <div v-if="infos.twitter_username" class="flex items-center space-x-1">
                        <ContactSupportIcon />
                        <a class="text-gray-100 hover:text-blue-500" href="#">Help</a>
                    </div>
                    <div v-if="infos.twitter_username" class="flex items-center space-x-1">
                        <SecurityIcon />
                        <Link class="text-gray-100 hover:text-blue-500" href="/user/safe">Safe Matrimony</Link>
                    </div>
                    <div v-if="infos.twitter_username" class="flex items-center space-x-1">
                        <FavoriteIcon />
                        <Link class="text-gray-100 hover:text-blue-500" href="/user/success">Success Stories</Link>
                    </div>
                </div>
            </div>:'Please Wait...'
           }










        </div>
    )
}

export default UserProfile