"use client"
import React, { useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SmsIcon from '@mui/icons-material/Sms';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PaymentOption = () => {
    const secureUrl = '/posts/first-post'; 
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = (plan) => {
        setModalOpen(true);
        setModalOpen(plan)
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const handleSelect = async (plan) => {
        setSelectedPlan(plan);


        const data = {
            name: plan.name,
            duration: plan.duration,
            amount: plan.amount
        };
        console.log(data)
        try {
            const response = await axios.post('/api/payment', data);
            console.log('Payment added successfully:', response.data);

        } catch (error) {
            console.error('Error adding payment:', error.message);

        }
    };
 








    return (
        <>
            <div className="w-full h-screen ">

                <header className="bg-teal-400">
                    <nav className="flex justify-between w-full h-22 bg-gray-800 text-white p-4">
                        <div>
                            <img src='/images/logo.png' />
                        </div>
                        <div className="md:items-center md:w-auto flex">
                            <div className="md:flex hidden">
                                <a className="block md:text-white mr-4" href="#">Need help in making payment?</a>
                                <a className="block md:text-white mr-4" href="#"><SmsIcon />Chat with us</a>
                                <a className="block md:text-white mr-4" href="#"><LocalPhoneIcon />7055146473</a>

                            </div>

                        </div>
                    </nav>
                </header>

     {/* <div style={{ cursor: 'pointer' }} onClick={() => window.location.href=secureUrl} onContextMenu={(e) => e.preventDefault()}>
      <span>this page!</span>
    </div> */}









                <div className="text-center mt-10">
                    <p className="font-bold text-xl">Membership Plans</p>
                    <p className="text-sm">Select from our multiple membership plans and find your best life partner with membership benefits.</p>

                </div>


                <div class=" min-h-screen py-12 flex items-center justify-center">
                    <div class="grid grid-cols-1  grid-cols-2 grid-cols-3 grid-cols-4 gap-6">
                        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div className="p-1" style={{ background: 'rgb(73, 146, 2)' }}>
                                <div className="p-4 flex flex-col items-center">
                                    <span className="text-sm text-white mb-2">Platinum Plan</span>
                                    <button
                                        onClick={() => openModal({
                                            name: "Platinum Plan",
                                            duration: "365 Days",
                                            amount: "Rs. 4999"
                                        })}


                                        className="group relative h-10 w-40 overflow-hidden rounded-2xl bg-tan-brown text-lg text-white"
                                        style={{ transition: 'background-color 0.3s' }}

                                    >
                                        Rs. 4999
                                        <div className="absolute inset-0 h-full w-full rounded-2xl bg-white/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                                    </button>
                                </div>

                            </div>
                            <div class="p-8 text-center">
                                <div class="hidden xs:hidden sm:hidden md:flex flex-col justify-center">
                                    <ul>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Duration</h3>
                                            <h5 id="planduration28" class="text-orange-500">365 Days</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3>Messages</h3>
                                            <h5 class="text-orange-500">5000</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Contact Views</h3>
                                            <h5 class="text-orange-500">2000</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Live Chat</h3>
                                            <h5 class="text-orange-500">Yes</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Profile Views</h3>
                                            <h5 class="text-orange-500">2000</h5>
                                        </li>
                                    </ul>
                                </div>

                                <div class="flex w-full items-center justify-center mt-10 ">

                                    <button
                                        style={{ background: 'rgba(228, 114, 3, 1)' }}
                                        className="group relative h-12 w-48 overflow-hidden bg-tan-brown text-lg font-bold text-white"
                                        onClick={() => handleSelect({
                                            name: "Platinum Plan",
                                            duration: "365 Days",
                                            amount: "Rs. 4999"
                                        })}
                                    >
                                        Select
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div className="p-1" style={{ background: 'rgba(228, 114, 3, 1)' }}>
                                <div className="p-4 flex flex-col items-center">
                                    <span className="text-sm text-white mb-2">Gold Plan</span>
                                    <button

                                        onClick={() => openModal({
                                            name: "Gold Plan",
                                            duration: "160 Days",
                                            amount: " Rs. 2999"
                                        })}





                                        className="group relative h-10 w-40 overflow-hidden rounded-2xl bg-tan-brown text-lg text-white"
                                        style={{ transition: 'background-color 0.3s' }}
                                    >
                                        Rs. 2999
                                        <div className="absolute inset-0 h-full w-full rounded-2xl bg-white/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                                    </button>
                                </div>
                            </div>
                            <div class="p-8 text-center">
                                <div class="hidden xs:hidden sm:hidden md:flex flex-col justify-center">
                                    <ul>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Duration</h3>
                                            <h5 id="planduration28" class="text-orange-500">160 Days</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Messages</h3>
                                            <h5 class="text-orange-500">2500</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Contact Views</h3>
                                            <h5 class="text-orange-500">1000</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Live Chat</h3>
                                            <h5 class="text-orange-500">Yes</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Profile Views</h3>
                                            <h5 class="text-orange-500">1000</h5>
                                        </li>
                                    </ul>
                                </div>

                                <div class="flex w-full items-center justify-center mt-10 ">

                                    <button
                                        style={{ background: 'rgba(228, 114, 3, 1)' }}
                                        className="group relative h-12 w-48 overflow-hidden bg-tan-brown text-lg font-bold text-white"
                                        onClick={() => handleSelect({
                                            name: "Gold Plan",
                                            duration: "160 Days",
                                            amount: " Rs. 2999"
                                        })}
                                    >
                                        Select
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div className="p-1" style={{ background: 'rgba(228, 114, 3, 1)' }}>
                                <div className="p-4 flex flex-col items-center">
                                    <span className="text-sm text-white mb-2">Silver Plan</span>
                                    <button

                                        onClick={() => openModal({
                                            name: "Silver Plan",
                                            duration: "90 Days",
                                            amount: "Rs. 1499"
                                        })}

                                        className="group relative h-10 w-40 overflow-hidden rounded-2xl bg-tan-brown text-lg text-white"
                                        style={{ transition: 'background-color 0.3s' }}
                                    >
                                        Rs. 1499
                                        <div className="absolute inset-0 h-full w-full rounded-2xl bg-white/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                                    </button>
                                </div>
                            </div>
                            <div class="p-8 text-center">
                                <div class="hidden xs:hidden sm:hidden md:flex flex-col justify-center">
                                    <ul>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Duration</h3>
                                            <h5 id="planduration28" class="text-orange-500">90 Days</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Messages</h3>
                                            <h5 class="text-orange-500">1250</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Contact Views</h3>
                                            <h5 class="text-orange-500">500</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Live Chat</h3>
                                            <h5 class="text-orange-500">Yes</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Profile Views</h3>
                                            <h5 class="text-orange-500">500</h5>
                                        </li>
                                    </ul>
                                </div>

                                <div class="flex w-full items-center justify-center mt-10 ">

                                    <button
                                        style={{ background: 'rgba(228, 114, 3, 1)' }}
                                        className="group relative h-12 w-48 overflow-hidden bg-tan-brown text-lg font-bold text-white"
                                        onClick={() => handleSelect({
                                            name: "Silver Plan",
                                            duration: "90 Days",
                                            amount: "Rs. 1499"
                                        })}
                                    >
                                        Select
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div className="p-1" style={{ background: 'rgba(228, 114, 3, 1)' }}>
                                <div className="p-4 flex flex-col items-center">
                                    <span className="text-sm text-white mb-2">Trial Plan</span>
                                    <button


                                        onClick={() => openModal({
                                            name: "Trial Plan",
                                            duration: "10 Days",
                                            amount: "Rs. 0"
                                        })}




                                        className="group relative h-10 w-40 overflow-hidden rounded-2xl bg-tan-brown text-lg text-white"
                                        style={{ transition: 'background-color 0.3s' }}
                                    >
                                        Rs. 0
                                        <div className="absolute inset-0 h-full w-full rounded-2xl bg-white/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                                    </button>
                                </div>
                            </div>
                            <div class="p-8 text-center">
                                <div class="hidden xs:hidden sm:hidden md:flex flex-col justify-center">
                                    <ul>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Duration</h3>
                                            <h5 id="planduration28" class="text-orange-500">10 Days</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Messages</h3>
                                            <h5 class="text-orange-500">0</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Contact Views</h3>
                                            <h5 class="text-orange-500">0</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Live Chat</h3>
                                            <h5 class="text-orange-500">0</h5>
                                        </li>
                                        <li class="border-b border-gray-300 py-2">
                                            <h3 >Profile Views</h3>
                                            <h5 class="text-orange-500">10</h5>
                                        </li>
                                    </ul>
                                </div>




                                <div class="flex w-full items-center justify-center mt-10 ">

                                    <button
                                        style={{ background: 'rgba(228, 114, 3, 1)' }}
                                        className="group relative h-12 w-48 overflow-hidden text-lg font-bold text-white"
                                        onClick={() => handleSelect({
                                            name: "Trial Plan",
                                            duration: "10 Days",
                                            amount: "Rs. 0"
                                        })}

                                    >
                                        Select
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>



                {selectedPlan && (

                    <div className="box p-2 m-10 rounded-lg shadow-md h-1/3">
                        <div className="h-12 pl-5 pt-2 w-full rounded-lg shadow-md text-white" style={{ background: 'rgb(73, 146, 2)' }}>You Have Selected</div>
                        <div className='flex flex-row justify-center mb-4'>
                            <div>
                                <h4>Plan Name</h4>
                                <h5 className="text-orange-500" >{selectedPlan.name}</h5>
                            </div>
                            <div className="ml-4">
                                <h4>Duration</h4>
                                <h5 className="text-orange-500" >{selectedPlan.duration}</h5>
                            </div>
                            <div className="ml-4">
                                <h4 className="mt-6 md:mt-0">Total Amount</h4>
                                <h5 className="mt-1 text-green-500" id="dis_plan_amount">{selectedPlan.amount}</h5>
                            </div>
                        </div>



                        <div className="text-center ">
                            <button
                                className="group relative h-10 w-40 overflow-hidden rounded-2xl bg-tan-brown text-lg text-white"
                                style={{ transition: 'background-color 0.3s', backgroundColor: 'rgba(228, 114, 3, 1)' }}
                            >
                                 Procure-to-Pay
                                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                            </button>
                        </div>
                        {/* <div className="text-right mt-6">
                            <p>Including all taxes</p>
                        </div> */}
                    </div>

                )}








                <footer class="footer footer-center mt-10  w-full p-4 bg-gray-300 text-gray-800">
                    <div class="text-center">
                        <p>
                            Copyright @ 2024 -
                            <a class="font-semibold" href="mailto:m.sohanemon@gmail.com"
                            >All rights reserved.</a
                            >
                        </p>
                    </div>
                </footer>


            </div>

            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
                    <div className="h-auto w-11/12 md:w-1/2 p-5 bg-white rounded-md">
                        <div className="flex w-full h-auto justify-center items-center">
                            <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
                                You Have Selected
                            </div>
                            <div
                                className="flex w-1/12 h-auto justify-center cursor-pointer"
                                onClick={closeModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-x"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                        </div>
                        <div className="box p-2 m-10 rounded-lg shadow-md h-1/2">
                            <div className="h-12 pl-5 pt-2 w-full rounded-lg shadow-md text-white" style={{ background: 'rgb(73, 146, 2)' }}>You Have Selected</div>
                            <div className='flex flex-row justify-center mb-4'>
                                <div>
                                    <h4>Plan Name</h4>
                                    <h5 className="text-orange-500" >{modalOpen.name}</h5>
                                </div>
                                <div className="ml-4">
                                    <h4>Duration</h4>
                                    <h5 className="text-orange-500" >{modalOpen.duration}</h5>
                                </div>
                                <div className="ml-4">
                                    <h4 className="mt-6 md:mt-0">Total Amount</h4>
                                    <h5 className="mt-1 text-green-500" id="dis_plan_amount">{modalOpen.amount}</h5>
                                </div>
                            </div>



                            <div className="text-center ">
                                <button
                                    className="group relative h-10 w-40 overflow-hidden rounded-2xl bg-tan-brown text-lg text-white"
                                    style={{ transition: 'background-color 0.3s', backgroundColor: 'rgba(228, 114, 3, 1)' }}
                                >
                                    Procure-to-Pay
                                    <div className="absolute inset-0 h-full w-full rounded-2xl bg-white/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                                </button>
                            </div>
                            <div className="text-right mt-6">
                                <p>Including all taxes</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}




        </>
    )
}

export default PaymentOption