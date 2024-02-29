"use client"
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import { Checkbox, Typography } from "@material-tailwind/react";
import Search from './Search';
// import ShowModal from '@/Elements/Alerts&Modals/Modal';
// import DialogDefault from '@/Elements/DialogBox/DialogBox';
import DialogDefault from '../../Elements/DialogBox/DialogBox';
import SearchRange from './SearchRange';

// import { CheckBox } from '@mui/icons-material';


const ProfileFilter = () => {
    const [show, setshow] = useState(false)
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDialogRange, setDialogRange] = useState(false);
    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    }
    const handleDialogConfirm = () => {
        setDialogOpen(false);
    };
    const handleDialogOpenRange = () => {
        setDialogRange(true);
    };

    const handleDialogCloseRange = () => {
        setDialogRange(false);
    }
    const handleDialogConfirmRange = () => {
        setDialogRange(false);
    };

    return (
        <div>
            <DialogDefault
                dialogTitle="Select religion"
                isOpen={isDialogOpen}
                handleOpen={handleDialogOpen}
                handleClose={handleDialogClose}
                handleConfirm={handleDialogConfirm}
                contentClass="custom-content-class"
            >
                <Search />
            </DialogDefault>
            <DialogDefault
                dialogTitle="Select age"
                isOpen={isDialogRange}
                handleOpen={handleDialogOpenRange}
                handleClose={handleDialogCloseRange}
                handleConfirm={handleDialogConfirmRange}
                contentClass="custom-content-class"
            >
                <SearchRange />
            </DialogDefault>
            <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen ">
                <div class="max-w-screen-xl  grid divide-y divide-neutral-200 max-w-sm mx-auto mt-8">
                    <div class="py-5 ">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Basic Details</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>

                            <div class="mx-auto">

                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="border-b border-grey-light">age</td>
                                            <td class="border-b border-grey-light">18 Yrs - 23 Yrs</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" onClick={() => handleDialogOpenRange()} /></td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light">Height</td>
                                            <td class="border-b border-grey-light">4'6" - 5'5"</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>

                                        {
                                            show && (
                                                <>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Profile Created By</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" onClick={() => handleDialogOpen()} /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Marital Status</td>
                                                        <td class="border-b border-grey-light">Awadhi, Bhojpuri, Brij, Bihari... Read more</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>

                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class="border-b border-grey-light">Mother Tongue</td>
                                                        <td class="border-b border-grey-light">Awadhi, Bhojpuri, Brij, Bihari... Read more</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class="border-b border-grey-light">Physical Status</td>
                                                        <td class="border-b border-grey-light">Normal</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                </>
                                            )
                                        }


                                    </tbody>
                                </table>
                                <p onClick={() => setshow((e) => !e)} className="font-normal text-pink-500 cursor-pointer">
                                    {show ? 'View less' : 'View more'}
                                </p>
                            </div>
                        </details>
                    </div>
                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Religious Details</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div class="mx-auto">
                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="border-b border-grey-light">Religion</td>
                                            <td class="border-b border-grey-light">Hindu</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light">Caste</td>
                                            <td class="border-b border-grey-light">Yadav,G... read more</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>

                                        {
                                            show && (
                                                <>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light"> <div>
                                                            <Typography variant="normal" color="blue-gray" className="font-normal">
                                                                Profiles with horoscope
                                                            </Typography>
                                                            <Typography variant="small" color="gray" className="font-normal">
                                                                Matches who have added horoscope.
                                                            </Typography>
                                                        </div>
                                                        </td>
                                                        <td class="border-b border-grey-light"><Checkbox /></td>
                                                        <td class="border-b border-grey-light cursor-pointer"> <LockIcon className="text-red-700 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Subcaste</td>
                                                        <td class="border-b border-grey-light">Naidu: Yadava Naidu</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Marital Status</td>
                                                        <td class="border-b border-grey-light">Awadhi, Bhojpuri, Brij, Bihari... Read more</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>

                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class="border-b border-grey-light">Star</td>
                                                        <td class="border-b border-grey-light">Any
                                                        </td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class="border-b border-grey-light">Dosha(m)</td>
                                                        <td class="border-b border-grey-light">Doesn't Matter</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                </>
                                            )
                                        }


                                    </tbody>
                                </table>
                                <p onClick={() => setshow((e) => !e)} className="font-normal text-pink-500 cursor-pointer">
                                    {show ? 'View less' : 'View more'}
                                </p>
                            </div>
                        </details>
                    </div>
                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Professional Details</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div class="mx-auto">
                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="border-b border-grey-light">Occupation</td>
                                            <td class="border-b border-grey-light">Any</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light">Annual Income</td>
                                            <td class="border-b border-grey-light">Any</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>

                                        {
                                            show && (
                                                <>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Employment Type</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Education</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Institution Details</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer">
                                                            <LockIcon className="text-red-700 flex-shrink-0" /> </td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Organisation Details</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"> <LockIcon className="text-red-700 flex-shrink-0" /></td>
                                                    </tr>
                                                </>
                                            )
                                        }


                                    </tbody>
                                </table>
                                <p onClick={() => setshow((e) => !e)} className="font-normal text-pink-500 cursor-pointer">
                                    {show ? 'View less' : 'View more'}
                                </p>
                            </div>
                        </details>
                    </div>
                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Location Details</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div class="mx-auto">
                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="border-b border-grey-light"> <Typography variant="normal" color="blue-gray" className="font-normal">
                                                Nearby Profiles
                                            </Typography>
                                                <Typography variant="small" color="gray" className="font-normal">
                                                    Matches near your location
                                                </Typography></td>
                                            <td class="border-b border-grey-light"><Checkbox /></td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light">Country</td>
                                            <td class="border-b border-grey-light">Any</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>

                                        {
                                            show && (
                                                <>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Citizenship</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Ancestral Origin</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                </>
                                            )
                                        }


                                    </tbody>
                                </table>
                                <p onClick={() => setshow((e) => !e)} className="font-normal text-pink-500 cursor-pointer">
                                    {show ? 'View less' : 'View more'}
                                </p>
                            </div>
                        </details>
                    </div>
                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Lifestyle</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div class="mx-auto">
                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light"> <Typography variant="normal" color="blue-gray" className="font-normal">
                                                Mutual Hobbies
                                            </Typography>
                                                <Typography variant="small" color="gray" className="font-normal">
                                                    Matches who have similar hobbies as you
                                                </Typography></td>
                                            <td class="border-b border-grey-light"><Checkbox /></td>
                                            {/* <td class="border-b border-grey-light cursor-pointer"><EditIcon  className="text-green-500 flex-shrink-0"/></td> */}
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class="border-b border-grey-light">Eating Habits</td>
                                            <td class="border-b border-grey-light">Any</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>


                                        {
                                            show && (
                                                <>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Smoking Habits</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Drinking Habits</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                </>
                                            )
                                        }


                                    </tbody>
                                </table>
                                <p onClick={() => setshow((e) => !e)} className="font-normal text-pink-500 cursor-pointer">
                                    {show ? 'View less' : 'View more'}
                                </p>
                            </div>
                        </details>
                    </div>
                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Family Details</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div class="mx-auto">
                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light">Family Status</td>
                                            <td class="border-b border-grey-light">Any</td>
                                            <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                        </tr>

                                        {
                                            show && (
                                                <>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Family Type</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                    <tr class="hover:bg-grey-lighter">
                                                        <td class=" border-b border-grey-light">Family Value</td>
                                                        <td class="border-b border-grey-light">Any</td>
                                                        <td class="border-b border-grey-light cursor-pointer"><EditIcon className="text-green-500 flex-shrink-0" /></td>
                                                    </tr>
                                                </>
                                            )
                                        }


                                    </tbody>
                                </table>
                                <p onClick={() => setshow((e) => !e)} className="font-normal text-pink-500 cursor-pointer">
                                    {show ? 'View less' : 'View more'}
                                </p>
                            </div>
                        </details>
                    </div>
                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Recently active profiles</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div class="mx-auto">
                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light">
                                                <button class="flex px-3 py-2 bg-blue-300 mr-1 text-white font-semibold rounded">
                                                    <span class="ml-1">All</span>
                                                </button>
                                            </td>
                                            <td class="border-b border-grey-light cursor-pointer"><button class="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded">


                                                <span class="ml-1">Today</span>
                                            </button>
                                            </td>
                                            <td class="border-b border-grey-light"><button class="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded">


                                                <span class="ml-1">Last 3 Days</span>
                                            </button></td>
                                            {/* <td class="border-b border-grey-light cursor-pointer"><EditIcon  className="text-green-500 flex-shrink-0"/></td> */}
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">

                                            <td class="border-b border-grey-light"><button class="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded">

                                                <span class="ml-1">One Week</span>
                                            </button></td>
                                            <td class=" border-b border-grey-light"><button class="flex px-3 py-2 bg-red-400 mr-1 text-white font-semibold rounded">

                                                <span class="ml-1">One Month</span>
                                            </button>
                                            </td>
                                            {/* <td class="border-b border-grey-light cursor-pointer"><EditIcon  className="text-green-500 flex-shrink-0"/></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </details>
                    </div>
                    <div class="py-5">
                        <details class="group">
                            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span> Profile Type</span>
                                <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div class="mx-auto">
                                <table class="text-left w-full my-4">
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light"><Typography variant="normal" color="blue-gray" className="font-normal">
                                                Mutual Matches
                                            </Typography>
                                                <Typography variant="small" color="gray" className="font-normal">
                                                    Profiles matching your preferences & vice versa
                                                </Typography></td>
                                            <td class="border-b border-grey-light"><Checkbox /></td>
                                            {/* <td class="border-b border-grey-light cursor-pointer"><EditIcon  className="text-green-500 flex-shrink-0"/></td> */}
                                        </tr>
                                        <tr class="hover:bg-grey-lighter">
                                            <td class=" border-b border-grey-light"><Typography variant="normal" color="blue-gray" className="font-normal">
                                                Profiles with photo
                                            </Typography>
                                                <Typography variant="small" color="gray" className="font-normal">
                                                    Matches who have added photos
                                                </Typography></td>
                                            <td class="border-b border-grey-light"><Checkbox /></td>
                                            {/* <td class="border-b border-grey-light cursor-pointer"><EditIcon  className="text-green-500 flex-shrink-0"/></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </details>
                    </div>
                    <table >
                        <tbody>
                            <tr class="hover:bg-grey-lighter border-t border-grey-light ">
                                <td class=" border-t border-grey-light font-bold">1200 Matches{' '}</td>
                                <td class="border-t border-grey-light"><button class="flex px-3 py-2 bg-blue-600 mr-1 text-white font-semibold rounded">
                                    <span class="ml-1">Reset</span>
                                </button></td>
                                <td class="border-t border-grey-light"><button class="flex px-3 py-2 bg-red-500 mr-1 text-white font-semibold rounded">
                                    <span class="ml-1">Apply</span>
                                </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default ProfileFilter