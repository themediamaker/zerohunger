"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import { CardDefault } from '@/Elements/TailwindCard/TCard';
import { IconButton } from "@material-tailwind/react";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import CheckIcon from '@mui/icons-material/Check';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from 'next/navigation';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { useContext } from 'react';
import { ProfileContext } from '@/src/Context/profileContext';
import { ImageSkeleton } from '../../Components/Loading/Loading'
import { getyear } from '@/src/Elements/getdateconverter';
import { getMonthDifference } from '@/src/Elements/getdateconverter';
// import { getuserid } from '../'
import { makeRequest } from '../../Utils/Api'
import { getuserid } from '../../Helper/usergetid'
import { usersendinterest } from '../../Utils/Allapiurl'
import Notification from '../notification/Notification';
import { RequestContext } from '@/src/Context/RequestContext';
import NotificationToast from '../notification/NotificationToast';
import PendingIcon from '@mui/icons-material/Pending';
// import NotificationToast from '../notification/NotificationToast';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import { Spinner } from "@material-tailwind/react";
import { decryptData } from '@/src/Utils/SecretData';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import PixIcon from '@mui/icons-material/Pix';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import SchoolIcon from '@mui/icons-material/School';
import { viewrequest } from '../../Utils/Allapiurl';
import { shortlistedrequest } from '../../Utils/Allapiurl';
import BookIcon from '@mui/icons-material/Book';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ProfileNavbar from "../../Components/profile/ProfileNavbar"


const ProfileHeader = () => {
    const userid = getuserid()
    const [showMore, setShowMore] = useState(false);
    const [isloading, setisloading] = useState(false);
    const [pre, setpre] = useState(false)
    const [isshortlist,setshortlist]=useState(0)
    const { openprofiledata, isopenprofileloading } = useContext(ProfileContext);
    const { requestdata, setRequest, isrequestloading, setisrequestloading, candata, setcandata, accdata, setaccdata, Pendingrequest, setpendingrequest } = useContext(RequestContext)
    // console.log(requestdata,candata,accdata)
    console.log(accdata.acc)
    console.log(accdata.req)
    console.log(accdata.can)

    const [handlebtn, sethandlebtn] = useState(-1)
    console.log(openprofiledata)

    console.log(openprofiledata.userid)
    const isOpenProfileUserIncluded = (acc, openprofiledata) => {
        if (!acc || !Array.isArray(acc)) {
            return false;
        }
        const isIncluded = acc.map((data) => {
            return data.profileid.includes(openprofiledata.userid);
        });
        return isIncluded.includes(true);
    };

    useEffect(() => {
        const data = {
            userid: userid.userid,
            profileid: openprofiledata.userid,
        }
        makeRequest('post', viewrequest, { data }).then((data) => {
            console.log(data)
        })
    }, [isopenprofileloading])

    useEffect(() => {
        const isUserIncluded = isOpenProfileUserIncluded(accdata.acc, openprofiledata);
        const ispendinginclud = isOpenProfileUserIncluded(accdata.can, openprofiledata);
        const ispendingacc = isOpenProfileUserIncluded(accdata.req, openprofiledata);
        console.log(isUserIncluded, ispendinginclud, ispendingacc)
        console.log(isUserIncluded);
        if (isUserIncluded) {
            sethandlebtn(1);
        } else if (ispendingacc) {
            sethandlebtn(0);
        }
        else {
            sethandlebtn(-1)
        }
        console.log(handlebtn);
        try {
            // makeRequest('post',)
        }
        catch (e) {
            console.log(e)
        }
    }, [isrequestloading, accdata.acc, openprofiledata])


    const createNotification = (type, msg) => {
        switch (type) {
            case 'info':
                NotificationManager.info(msg);
                break;
            case 'success':
                NotificationManager.success('Success message', msg);
                break;
            case 'warning':
                NotificationManager.warning('Warning', msg, 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                });
                break;
            default:
                break;
        }
    };


    const genderdetails = openprofiledata.gender == 'male' ? 'His' : 'Her'
    const router = useRouter()
    const iconsData = [
        { color: '#22C55E', icon: <MobileFriendlyIcon />, text: 'Mobile' },
        { color: '#ea4335', icon: <AssuredWorkloadIcon />, text: 'Govt. ID' },
        { color: '#ea4335', icon: <InsertPhotoIcon />, text: 'Photo' },
        { color: '#ea4335', icon: <SchoolIcon />, text: 'Education' },
        { color: '#ea4335', icon: <AccountBalanceWalletIcon />, text: 'Income' },
    ];
    const BasicDetails = [
        {
            ID: 1,
            Details: [
                { label: ' age', Data: `${getyear(openprofiledata.dateofBirth)} Years and ${Math.round(getMonthDifference(openprofiledata.dateofBirth) / 12 - getyear(openprofiledata.dateofBirth))} months`, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Physique', Data: `41 Kg  ${openprofiledata.height}  Slim  Normal`, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Spoken Languages', Data: openprofiledata.motherTongue == undefined ? "Hindi (Mother Tongue)" : openprofiledata.motherTongue + "Hindi (Mother Tongue)", icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Eating Habits', Data: openprofiledata.eatingHabits == undefined ? "Never" : openprofiledata.eatingHabits, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Smoking Habits', Data: openprofiledata.smokingHabits == undefined ? "Never" : openprofiledata.smokingHabits, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Drinking Habits', Data: openprofiledata.drinkingHabits == undefined ? "Never" : openprofiledata.drinkingHabits, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Profile Created By', Data: openprofiledata.assignedTo, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Marital Status', Data: openprofiledata.meritalStatus == undefined ? "Vegetarian" : openprofiledata.eatingHabits, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Lives In', Data: `${openprofiledata.cityLivingIn}/${openprofiledata.stateLivingIn}-${openprofiledata.countryLivingIn}`, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
                { label: ' Citizenship', Data: `${openprofiledata.countryLivingIn} Citizen`, icon: <AccountBalanceWalletIcon style={{ color: 'skyblue' }} /> },
            ]
        }
    ];
    const ProfileTable = ({ title, data }) => (
        <div className="container mr-5 mx-auto bg-white shadow-xl">
            {/* <h1>{title}</h1> */}
            <div className="w-11/12 mx-auto">
                <div className="bg-white my-6">
                    <table className="text-left w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">Basic Her Details</th>
                                <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((detail, index) => (
                                <tr key={index} className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light">{detail.icon}{''}{detail.label}</td>
                                    <td className="py-4 px-6 text-center border-b border-grey-light">
                                        {detail.Data}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    const handleSeeMore = () => {
        setShowMore(!showMore);
    };

 
    const handleinterest = () => {
        setisloading(true)
        const data = {
            userid: userid.userid,
            profileid: openprofiledata.userid,
            type: 'senddata'

        }
        console.log(data)
        try {
            makeRequest('post', usersendinterest, { data: data }).then((data) => {
                let resdata = JSON.parse(decryptData(data))
                if (resdata.command == 0) {
                    setisloading(false)
                    sethandlebtn(0)
                    createNotification('warning', resdata.msg)
                }
                else {
                    setisloading(false)
                    sethandlebtn(0)
                    createNotification('success', resdata.msg)
                }
                console.log(resdata)
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    const handlecancel = () => {
        alert('hello')
    }
    const handleshortlist = () =>{
       
        const data = {
            userid: userid.userid,
            profileid: openprofiledata.userid,

        }
        try{
            //alert('data',shortlistedrequest)
            
            makeRequest('post',shortlistedrequest,{data:data}).then((data)=>{
                console.log(data)
            })
        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <div>


            {
                isopenprofileloading ? <main className="profile-page">

                    <section className=" relative block h-500-px">
                        <div className="px-6">

                            <div class="flex flex-col">
                                <div class="bg-white-800 border border-white-800 shadow-lg  rounded-2xl p-10">
                                    <div class="flex-none sm:flex">
                                    <div class="relative h-80 w-80 sm:mb-0 mb-3">
                                            <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" w-80 h-80 rounded-2xl" />
                                            <p class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                                1/4 <CropOriginalIcon />
                                            </p>
                                            <p class="absolute -right-1 top-2   -ml-3  text-white p-1 text-xs bg-yellow-400 hover:bg-green-500 font-medium tracking-wider rounded-[1xl] transition ease-in duration-300 cursor-pointer" onClick={handleshortlist}>
                                            <StarOutlineIcon/> Short List
                                        </p>
                                        
                                            <p class="absolute -left-30 top-2   -ml-3  text-white p-1 text-xs bg-green-200 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                            <LocalActivityIcon/>
                                            </p>
                                        </div>
                                      
                                        <div class="flex-auto sm:ml-5 justify-evenly">
                                            <div class="flex items-center justify-between sm:mt-2">
                                                <div class="flex items-center">
                                                    <div class="flex flex-col">
                                                        <div class="w-full flex-none text-lg text-black-200 font-bold leading-none">{openprofiledata.name}</div>
                                                        <div class="flex-auto text-black-400 my-1">
                                                            <span class="mr-3 ">{openprofiledata._id}</span><span class="mr-3 border-r border-gray-600  max-h-0"></span><span>Last seen few days ago</span>
                                                        </div>
                                                        <div class="flex-auto text-black-400 my-1">
                                                            <span class="mr-3 "><PixIcon style={{ color: 'skyblue' }} />{getyear(openprofiledata.dateofBirth)}, {openprofiledata.height}</span>
                                                        </div>
                                                        <div class="flex-auto text-black-400 my-1">
                                                            <span class="mr-3 "><BookIcon style={{ color: 'skyblue' }} />{openprofiledata.caste}(Caste No Bar)</span>
                                                        </div>
                                                        <div class="flex-auto text-black-400 my-1">
                                                            <span class="mr-3 "><SchoolIcon style={{ color: 'skyblue' }} />{openprofiledata.education}</span>
                                                        </div>
                                                        <div class="flex-auto text-black-400 my-1">
                                                            <span class="mr-3 "><FmdGoodIcon style={{ color: 'skyblue' }} />{openprofiledata.stateLivingIn}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{ border: "0.1px solid lightgrey", width: "100%" }} />
                                            <div class="flex flex-row items-center p-4">
                                                {

                                                    isrequestloading && isopenprofileloading ?
                                                        <div className='flex-auto text-black-400 my-1'>
                                                            <span class="mr-3 ">You have sent an interest to her - 17 Jan 24</span>
                                                            <div class="flex-auto text-black-400 my-1">
                                                                <span class="mr-3  ">Greetings! We looked at your p...<span>Read More(+1)</span></span>
                                                            </div>
                                                            <div class="flex pt-2  text-sm text-gray-400">



                                                                {
                                                                    !isloading ?
                                                                        <>
                                                                            <button
                                                                                className={`flex-no-shrink bg-lightgrey-400 hover:bg-lightgrey-300 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-black rounded-full transition ease-in duration-300 cursor-pointer`}
                                                                                // disabled={handlebtn === 0 || handlebtn === 1}
                                                                                onClick={handlecancel}
                                                                            >
                                                                                {handlebtn === -1 ? <CloseIcon /> : handlebtn === 0 ? <CloseIcon /> : <MessageIcon />}
                                                                                {handlebtn === -1 ? "Don't Show" : handlebtn === 0 ? 'Cancel Request' : "Send Messages"}
                                                                            </button>

                                                                            <button
                                                                                className={`flex-no-shrink bg-${handlebtn === 0 ? 'yellow' : 'green'}-500 hover:bg-${handlebtn === 0 ? 'yellow' : 'green'}-700 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300 cursor-pointer`}
                                                                                disabled={handlebtn === 0 || handlebtn === 1}
                                                                                onClick={handleinterest}
                                                                            >
                                                                                {handlebtn === -1 ? <CheckIcon /> : handlebtn === 0 ? <PendingIcon /> : <CallIcon />}
                                                                                {handlebtn === -1 ? 'Send Interest' : handlebtn === 0 ? 'Pending Request' : 'Call Now'}
                                                                            </button>
                                                                        </> : <> Please Wait...<Spinner color="blue" /></>
                                                                }



                                                                {/* <a href="https://www.behance.net/ajeeshmon" target="_blank" class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">FOLLOW</a> */}
                                                            </div>
                                                        </div> :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           

                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            About {openprofiledata.name}
                                          
                                        </h3>
                                        <p className={`mb-4 text-lg leading-relaxed text-blueGray-700`}>
                                            {`I am creating this profile on behalf of my ${openprofiledata.assignedTo}. ${openprofiledata.gender == 'male' ? 'He' : 'She'} is currently working in the private sector as a software professional, after having completed his diploma. He comes from a middle class family with orthodox family values. He belongs to joint family currently living in ${openprofiledata.cityLivingIn}.`}
                                            {openprofiledata.message}
                                        </p>
                                        <div className={`mb-4 text-lg leading-relaxed text-blueGray-700 ${showMore ? 'block' : 'hidden'}`}>
                                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
                                          
                                            </div>



                                            <div>
                                                {BasicDetails.map((item) => (
                                                    <ProfileTable key={item.ID} title={`Basic ${openprofiledata.gender == 'male' ? 'His' : 'Her'} Details`} data={item.Details} />
                                                ))}
                                            </div>

                                         
                                            <section className="">
                                                <div className="max-w-6xl mx-auto px-5 py-24 ">
                                                    <div className="text-center mb-20">
                                                        <h1 className="title-font mb-4 text-xl font-extrabold leading-10 tracking-tight sm:text-xl sm:leading-none md:text-xl">
                                                            Upgrade to view {genderdetails} More Details
                                                            <button className="opacity-50 flex-shrink-0 ml-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10 shadow-md" disabled="" onClick={() => { router.push("/payment/paymentoptions") }}>
                                                                Upgrade Now
                                                            </button>
                                                        </h1>
                                                    </div>
                                                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                                                        <div className="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col">
                                                            <div className="pattern-dots-md gray-light shadow-md">
                                                                <div className="rounded bg-white p-4 transform translate-x-6 -translate-y-6  ">
                                                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0 p-2">
                                                                        <LockIcon /> </div>
                                                                    <div className="flex-grow ">
                                                                        <h2 className=" text-sm title-font font-medium mb-3">Contact Details|Mobile No Verified</h2>
                                                                        <h2 className="text-sm title-font font-medium mb-3">+91 {pre ? '' : <span className="inline-block blur" style={{ filter: 'blur(5px)' }}>+++++++++++++</span>}</h2>
                                                                        <button className="opacity-50 w-2/3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-md" disabled="">
                                                                            <CallIcon />Call Now
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col ">
                                                            <div className="pattern-dots-md gray-light shadow-md">
                                                                <div className="rounded  bg-white  p-4 transform translate-x-6 -translate-y-6 ">
                                                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                                                                        <LockIcon />
                                                                    </div>
                                                                    <div className="flex-grow">
                                                                        <h2 className=" text-sm title-font font-medium mb-3">Date of Birth <span>{pre ? '27-06-2000' : <span className="inline-block blur" style={{ filter: 'blur(5px)' }}>+++++++++++++</span>}</span></h2>
                                                                        <h2 className=" text-sm title-font font-medium mb-3">Time Of Birth <span>{pre ? '27-06-2000' : <span className="inline-block blur" style={{ filter: 'blur(5px)' }}>+++++++++++++</span>}</span></h2>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            {/* &&&& More Details */}
                                            <section className="">
                                                <div className="max-w-6xl mx-auto  ">
                                                    <div className="text-center">
                                                        <h1 className="title-font mb-4 text-2xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                                            {`${genderdetails} More Details`}
                                                        </h1>
                                                    </div>
                                                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                                                        <div className="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col">
                                                            <div className="pattern-dots-md gray-light shadow-md">
                                                                <div className="rounded bg-white p-4 transform translate-x-6 -translate-y-6  ">

                                                                    <div className="flex-grow ">
                                                                        <h2 className=" text-sm title-font font-medium mb-3"> <LockIcon />Employment</h2>
                                                                        <h2 className=" text-sm title-font font-medium mb-3">
                                                                            Currently Not Working
                                                                        </h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col ">
                                                            <div className="pattern-dots-md gray-light shadow-md">
                                                                <div className="rounded  bg-white  p-4 transform translate-x-6 -translate-y-6 ">
                                                                    <div className="flex-grow">
                                                                        <h2 className=" text-sm title-font font-medium mb-3"> <LockIcon />About {genderdetails} Family</h2>
                                                                        <h2 className=" text-sm title-font font-medium mb-3">Ancestral Origin</h2>
                                                                        <h2 className=" text-sm title-font font-medium mb-3 text-red-500 cursor-pointer">Family details requested </h2>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <div class="block w-full overflow-x-auto">
                                                <table class="items-center bg-transparent w-full border-collapse ">
                                                    <thead>
                                                        <tr>
                                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                <img src='/images/userProfile.png' height={80} width={80} />
                                                            </th>
                                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                You match 18/21 of {genderdetails} preferences
                                                            </th>
                                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                                <img src='/images/userProfile.png' height={80} width={80} />
                                                            </th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <th class="border-t-0 px-6 align-start border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                                Preferred {genderdetails == 'His' ? "Grom's" : 'Bride'} Age
                                                            </th>
                                                            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">

                                                                21-28 yrs
                                                            </td>

                                                            <td class="border-t-0 px-6 align-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                <TaskAltIcon style={{ color: 'green' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th class="border-t-0 px-6 align-start border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                                Preferred Height
                                                            </th>
                                                            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                                                5'2" - 6'2"
                                                            </td>

                                                            <td class="border-t-0 px-6 align-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                <TaskAltIcon style={{ color: 'green' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                                Preferred Marital Status
                                                            </th>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                                                Never Married
                                                            </td>

                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                <TaskAltIcon style={{ color: 'green' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                                Preferred Mother Tongue
                                                            </th>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                                                Awadhi, Bhojpuri, Brij, Bihari,
                                                            </td>

                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                <TaskAltIcon style={{ color: 'green' }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                                Preferred Physical Status
                                                            </th>
                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                                                Normal
                                                            </td>

                                                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                <TaskAltIcon style={{ color: 'green' }} />
                                                            </td>
                                                        </tr>
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>

                                        <p onClick={handleSeeMore} className="font-normal text-pink-500 cursor-pointer">
                                            {showMore ? 'Show less' : 'Show more'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        <NotificationContainer />
                    </section>
                </main> : <ImageSkeleton />
            }

        </div>
    )
}

export default ProfileHeader