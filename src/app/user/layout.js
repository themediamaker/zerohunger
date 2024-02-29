"use client"

import React from 'react'
import './main.css'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Link from 'next/link';
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';
import Image from 'next/image';
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import Footer from '@/layout/Footer/Footer';
import Footer from '../../layout/Footer/Footer';
// import ChatForm from '@/layout/chatBox/ChatBox';
import axios, { Axios, AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { makeRequest } from '../../Utils/Api'
import { useContext } from 'react';
import MatchesContext from '@/src/Context/matches/MatchesContext';
import { getuserid } from '../../Helper/usergetid'
import { deleteCookie } from '../../Helper/cookieremover'
import { allinone, pendingrequest } from '../../Utils/Allapiurl'
import { showinterest } from '../../Utils/Allapiurl'
import { decryptData } from '@/src/Utils/SecretData';
import { profilelogout } from '../../Utils/Allapiurl';
import { viewedbyme } from '../../Utils/Allapiurl';
import { viewedyou } from '../../Utils/Allapiurl';
import { shortlistedbyme } from '../../Utils/Allapiurl';
import { shortlistedyou } from '../../Utils/Allapiurl';
import UserProfile from '@/src/layout/userProfile/UserProfile';
// import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Notification from '../../Components/notification/Notification';

import { RequestContext } from '@/src/Context/RequestContext';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const layout = ({ children }) => {

    const getuserdetails = getuserid()
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 14);

    const { setallmatchesdata, setallloading, setnewmatchesdata, setnewloading, setviewedbyyoumatchesdata, setviewedbyyouloading, setshortlistdata, setshortloading } = useContext(MatchesContext)
    const { requestdata, setRequest, isrequestloading,
        setisrequestloading, candata, setcandata,
        accdata, setaccdata, Pendingrequest,
        setshortlistmedata,
        setisloadingshortlistme,
        setshortlistyoudata,
        setisloadingshortlistedyou,
        setviewedyoudata,
        setisloadingviewedyou,
        setviewedbymedata,
        setisloadingviewedbyme
    } = useContext(RequestContext)

    // console.log(candata)
    // console.log(accdata)
    const allagg = [
        {
            '$match': {
                'gender': getuserdetails.gender === 'male' ? 'female' : 'male'
            }
        }
    ];
    const newagg = [
        {
            '$match': {
                'registered': {
                    '$gte': sevenDaysAgo.toISOString()
                },
                'gender': 'female'
            }
        }
    ];
    const viewbyyouagg = [
        { $match: { viewedByYou: getuserdetails.userid } },
        // {
        //     $project: {
        //         _id: 1,
        //         name: 1,
        //         isActive: 1,
        //         registered: 1,
        //         age: 1,
        //         gender: 1,
        //         eyeColor: 1,
        //         favoriteFruit: 1,
        //         company: 1,
        //         tags: 1,
        //         viewedByYou: 1

        //     }
        // }
    ];
    const shortagg = [
        { $match: { ShortlistedByYou: getuserdetails.userid } },
        {
            $project: {
                _id: 1,
                name: 1,
                isActive: 1,
                registered: 1,
                age: 1,
                gender: 1,
                eyeColor: 1,
                favoriteFruit: 1,
                company: 1,
                tags: 1,
                viewedByYou: 1

            }
        }
    ];


    // const accagg = [
    //     {
    //         $match: {
    //             profileid: getuserdetails.userid,
    //             status: '1'
    //         }
    //     }
    // ]
    // const canagg = [
    //     {
    //         $match: {
    //             profileid: getuserdetails.userid,
    //             status: '0'
    //         }
    //     }
    // ]
    // const pendingagg = [
    //     {
    //         $match: {
    //             profileid: getuserdetails.userid,
    //         }
    //     }
    // ]
    // Notification //////////////


    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);

    };



    const router = useRouter()
    // const {pathname} = router
    // console.log(pathname)
    useEffect(() => {
        makeRequest('post', allinone, { agg: allagg }).then(data =>
            setallmatchesdata(JSON.parse(decryptData(data.data))))
            .then(() => {
                setallloading(true)
            })
        makeRequest('post', allinone, { agg: newagg }).then(data => setnewmatchesdata(JSON.parse(decryptData(data.data)))).then(() => {
            setnewloading(true)
        })
        makeRequest('post', allinone, { agg: viewbyyouagg }).then(data => setviewedbyyoumatchesdata(JSON.parse(decryptData(data.data)))).then(() => {
            setviewedbyyouloading(true)
        })
        makeRequest('post', allinone, { agg: shortagg }).then(data => setshortlistdata(JSON.parse(decryptData(data.data)))).then(() => {
            setshortloading(true)
        })


    }, [])
    useEffect(() => {
        makeRequest('post', showinterest, { userid: getuserdetails.userid }).then((data) => {
            console.log(JSON.parse(decryptData(data)))
            setRequest(JSON.parse(decryptData(data)))
            setcandata(JSON.parse(decryptData(data)))
            setaccdata(JSON.parse(decryptData(data)))
        }).then(() => {
            setisrequestloading(true)
        })
        makeRequest('post', pendingrequest, { userid: getuserdetails.userid }).then((pendingres) => {
            console.log(JSON.parse(decryptData(pendingres)))
        })
        makeRequest('post', viewedbyme, { userid: getuserdetails.userid }).then((viewdata) => {
            setviewedbymedata(JSON.parse(decryptData(viewdata)))
        }).then(() => {
            setisloadingviewedbyme(true)
        })
        makeRequest('post', viewedyou, { userid: getuserdetails.userid }).then((viewedyou) => {
            setviewedyoudata(JSON.parse(decryptData(viewedyou)))
        }).then(() => {
            setisloadingviewedyou(true)
        })
        makeRequest('post', shortlistedbyme, { userid: getuserdetails.userid }).then((shortlistdata) => {
            setshortlistmedata(JSON.parse(decryptData(shortlistdata)))
        }).then(() => {
            setisloadingshortlistme(true)
        })
        makeRequest('post', shortlistedyou, { userid: getuserdetails.userid }).then((shortlistedyoudata) => {
            setshortlistyoudata(JSON.parse(decryptData(shortlistedyoudata)))
        }).then(() => {
            setisloadingshortlistedyou(true)
        })
        // makeRequest('post', showinterest, { agg: accagg }).then((data) => {
        //     console.log(data)
        //     // setRequest(JSON.parse(decryptData(data)))
        // }).then(() => {
        //     setisrequestloading(true)
        // })
        // makeRequest('post', showinterest, { agg: accagg }).then((data) => {
        //     // setRequest(JSON.parse(decryptData(data)))
        //     console.log(data)
        // }).then(() => {
        //     // setisrequestloading(true)
        // })
    }, [])

    console.log(requestdata)
    console.log(candata)
    console.log(accdata)
    const user = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
            '/images/userProfile.png',
    }
    const navigation = [
        { name: 'Home', href: "/user/dashboard", current: true, icon: <HomeIcon /> },
        { name: 'Matches', href: "/user/matches/allmatches", current: false, icon: <PeopleAltIcon /> },
        // { name: 'Mailbox', href: '/user/inbox/received/all', current: false, icon: <MailOutlineIcon /> },
        { name: 'Chat', href: '/user/chatlist', current: false, icon: <ChatIcon /> },
        { name: 'Search', href: '/user/search', current: false, icon: <SearchIcon /> },
    ]
    const userNavigation = [
        { name: 'Profile', href: '/user/profile' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '/auth/login' },
    ]

    // const [subType, setSubType] = React.useState("monthly");
    // const [showUserProfile, setShowUserProfile] = useState(false)

    // const userprofilelogout = (item) => {
    //     // alert(item)
    //     if (item === 'Profile') {
    //         router.push('/user/profile')
    //     }


    //     if (item === 'Sign out') {
    //         try {
    //             makeRequest('post', profilelogout, { userid: getuserdetails.userid }).then((data) => {
    //                 if (data['command'] === 1) {
    //                     router.push('/auth/login')
    //                 }
    //             })
    //         }
    //         catch (e) {

    //         }
    //     }
    // }


    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                            <div className="flex h-20 items-center justify-between ">
                                <div className="flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-18 w-50"
                                            src="/images/logo.png"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden md:block ">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}

                                                >
                                                    {item.icon}{' '}{item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-6 flex items-center gap-2 md:ml-6">

                                        {/* <Button color="primary"  variant="gradient">
                                            <Badge badgeContent={4} color="secondary">
                                                <PersonAddAltIcon />
                                            </Badge>
                                        </Button> */}

                                        <Button color="primary">
                                            {' '}
                                            <Badge badgeContent={isrequestloading ? 0//requestdata.length
                                                : 0} color="secondary" overlap="circular" onClick={openNav}>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </Badge>
                                        </Button>


                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items style={{ marginRight: "100px" }} className="absolute right-0 z-10 mt-2  w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <UserProfile />
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.icon}{' '}{item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            // as="a"
                                            // href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            onClick={() => userprofilelogout(item.name)}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>


            <main>
                <div>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 relative">
                        {children}
                    </div>

                    <div className={`fixed inset-0 bg-black bg-opacity-90 overflow-hidden z-50 ${isOpen ? 'w-50%' : 'w-0'}`} style={{ transition: 'width 0.5s' }}>
                        <div className="absolute top-0 left-0 m-4">
                            {/* <button onClick={closeNav} className="text-white text-3xl focus:outline-none">&times;</button> */}
                        </div>
                        <div className="flex flex-col justify-center items-center h-full">
                            {/* <Notification close={closeNav} data={requestdata} /> */}
                            {isrequestloading ? <Notification close={closeNav} data={[requestdata, candata, accdata]} /> : 'please wait....'}


                        </div>
                    </div>
                </div>
                {/* <Dialog open={true} handler={handleOpen}>
                                            
                                            <DialogBody>
                                               <Notification/>
                                            </DialogBody>
                                        </Dialog> */}
            </main>

            <Footer />
        </div>

    )
}
export default layout

{/* <header className="bg-white shadow">
                <div className="mx-auto max-w-10xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        <Box sx={{ display: "flex" }}>
                            <Box className="mask-box">
                                <Box
                                    className="mask"
                                    style={{
                                        transform: `translateX(${subType === "monthly" ? 0 : "100px"})`
                                    }}
                                />
                                <Button
                                    disableRipple
                                    variant="text"
                                    sx={{ color: subType === "monthly" ? "#ffffff" : "#5316AE" }}
                                    onClick={() => { setSubType("monthly"), router.push("/user/dashboard") }}
                                >
                                    Regular
                                </Button>
                                <Button
                                    disableRipple
                                    variant="text"
                                    sx={{ color: subType === "yearly" ? "#ffffff" : "#5316AE" }}
                                    onClick={() => { setSubType("yearly"), router.push("/user/prime") }}
                                >
                                    Prime
                                </Button>
                            </Box>
                        </Box>

                    </h1>
                </div>
            </header> */}






// async function getuser() {
//     try {
//         const response = await axios.get("/api/me");
//         const data = response.data;
//         console.log(data)

//         return {
//             user: data,
//             error: null,
//         };
//     } catch (e) {
//         const error = e;

//         return {
//             user: null,
//             error: error,
//         };
//     }
// }