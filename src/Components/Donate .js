"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../Layout/Comman/Header';
import Footer from '../Layout/Comman/Footer';
import { useForm } from 'react-hook-form';

const Donate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <>
            <Header />
            <section className="py-12 bg-gray-100 mt-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row">
                        {/* Main Content */}
                        <div className="lg:w-2/3 w-full lg:pr-4 mb-6 lg:mb-0">
                            {/* Donation Form */}
                            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-semibold mb-4">Enter Your Donation</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            className="form-input rounded-l-md border-gray-300 shadow-sm flex-1"
                                            placeholder="Amount"
                                            {...register('amount', { required: true })}
                                        />
                                        <span className="text-lg font-medium px-3">$</span>
                                        <span className="text-lg font-medium">.00</span>
                                    </div>
                                    {errors.amount && <p className="text-red-500">Amount is required</p>}
                                </form>
                            </div>
                            {/* Personal Info */}
                            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="First Name"
                                                {...register('firstName', { required: true })}
                                            />
                                            {errors.firstName && <p className="text-red-500">First Name is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="Last Name"
                                                {...register('lastName', { required: true })}
                                            />
                                            {errors.lastName && <p className="text-red-500">Last Name is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="Email Address"
                                                {...register('email', { required: true })}
                                            />
                                            {errors.email && <p className="text-red-500">Email Address is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="Phone Number"
                                                {...register('phoneNumber', { required: true })}
                                            />
                                            {errors.phoneNumber && <p className="text-red-500">Phone Number is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="Address"
                                                {...register('address', { required: true })}
                                            />
                                            {errors.address && <p className="text-red-500">Address is required</p>}
                                        </div>
                                        <div>
                                            <select className="form-select rounded-md border-gray-300 shadow-sm" {...register('country', { required: true })}>
                                                <option value="">Select Country</option>
                                                <option value="usa">USA</option>
                                                <option value="uk">UK</option>
                                                <option value="pakistan">Pakistan</option>
                                                <option value="bangladesh">Bangladesh</option>
                                                <option value="india">India</option>
                                            </select>
                                            {errors.country && <p className="text-red-500">Country is required</p>}
                                        </div>
                                        <div className="col-span-2">
                                            <textarea
                                                className="form-textarea rounded-md border-gray-300 shadow-sm w-full"
                                                placeholder="Leave a Comment"
                                                {...register('comment')}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                                        Submit Donation
                                    </button>
                                </form>
                            </div>
                            {/* Payment Info */}
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4">Payment Info</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="Card Number"
                                                {...register('cardNumber', { required: true })}
                                            />
                                            {errors.cardNumber && <p className="text-red-500">Card Number is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="MM/YY"
                                                {...register('expiryDate', { required: true })}
                                            />
                                            {errors.expiryDate && <p className="text-red-500">Expiry Date is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="Card Code (CVC)"
                                                {...register('cardCode', { required: true })}
                                            />
                                            {errors.cardCode && <p className="text-red-500">Card Code is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="Billing Address"
                                                {...register('billingAddress', { required: true })}
                                            />
                                            {errors.billingAddress && <p className="text-red-500">Billing Address is required</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm"
                                                placeholder="City"
                                                {...register('city', { required: true })}
                                            />
                                            {errors.city && <p className="text-red-500">City is required</p>}
                                        </div>
                                        <div>
                                            <select className="form-select rounded-md border-gray-300 shadow-sm" {...register('paymentCountry', { required: true })}>
                                                <option value="">Select Country</option>
                                                <option value="usa">USA</option>
                                                <option value="uk">UK</option>
                                                <option value="pakistan">Pakistan</option>
                                                <option value="bangladesh">Bangladesh</option>
                                                <option value="india">India</option>
                                            </select>
                                            {errors.paymentCountry && <p className="text-red-500">Country is required</p>}
                                        </div>
                                        <div className="col-span-2">
                                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                                                Donate Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Sidebar */}
                        <div className="lg:w-1/3 w-full lg:pl-4">
                            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                                <div className="mb-4">
                                    <img src="/images/school.jpg" alt="Cause" className="w-full rounded-lg" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    <Link href="/causes-detail">
                                        <span className="text-blue-600 hover:underline">They Want to Study</span>
                                    </Link>
                                </h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li>
                                        <i className="icon-target"></i> Goal: <span>$30,000</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-line-chart"></i> Raised: <span>$25,270</span>
                                    </li>
                                </ul>
                                <p className="text-gray-600">Raised by 25 donors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Donate;
