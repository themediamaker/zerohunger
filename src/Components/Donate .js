"use client";

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Header from '../Layout/Comman/Header';
import Footer from '../Layout/Comman/Footer';
import { useForm } from 'react-hook-form';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaCheck } from 'react-icons/fa';

const Donate = () => {
    const { register, handleSubmit, formState: { errors }, setError, trigger, watch } = useForm();
    const [submitted, setSubmitted] = useState(false);
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [formDisabled, setFormDisabled] = useState(false); // State for disabling form after CAPTCHA verification

    useEffect(() => {
        loadCaptchaEnginge(6); // Load CAPTCHA on component mount
    }, []);

    // Watch for field changes
    const formData = watch();

    // Handle form submission
    const onSubmit = (data) => {
        if (captchaVerified) {
            console.log(data);
            setSubmitted(true);
            triggerConfetti();
            setFormDisabled(true); // Disable form after successful submission
        } else {
            alert("Please complete the CAPTCHA verification.");
        }
    };

    // Trigger confetti animation
    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#00ff00', '#0000ff'],
        });
    };

    // Handle CAPTCHA input changes
    const handleCaptchaInputChange = (event) => {
        setCaptchaInput(event.target.value);
    };

    // Validate CAPTCHA and disable form fields
    const validateCaptchaInput = async () => {
        const formIsValid = await trigger(); // Validate form fields first
        if (formIsValid) {
            if (validateCaptcha(captchaInput)) {
                setCaptchaVerified(true);
                alert("CAPTCHA verified successfully!");
                setFormDisabled(true); // Disable form fields after CAPTCHA verification
            } else {
                setCaptchaVerified(false);
                alert("CAPTCHA does not match. Please try again.");
                loadCaptchaEnginge(6); // Reload CAPTCHA on failure
            }
        } else {
            alert("Please fill out the form correctly before verifying CAPTCHA.");
        }
    };


    if (submitted) {
        return (
            <>
                <Header />
                <section className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Thank You for Your submission!</h2>
                        <p className="text-lg mb-6">We Have Received Your Donation Request Successfully. Our Team Will Get in Touch Shortly!</p>
                        <button className="text-red-500 hover:underline" onClick={triggerConfetti}>
                            Celebrate Again!
                        </button>
                    </div>
                </section>
                <Footer />
            </>
        );
    }




    return (
        <>
            <Header />
            <section className="py-12 bg-gray-100 mt-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 w-full lg:pr-4 mb-6 lg:mb-0">
                            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-semibold mb-4">Enter Your Donation</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="form-input rounded-md border-gray-300 shadow-sm w-full"
                                                placeholder="Full Name"
                                                {...register('name', {
                                                    required: 'Name is required',
                                                    minLength: {
                                                        value: 3,
                                                        message: 'Name must be at least 3 characters long',
                                                    }
                                                })}
                                                disabled={formDisabled} // Disable field after CAPTCHA verification
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="form-input rounded-md border-gray-300 shadow-sm w-full"
                                                placeholder="Email Address"
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: 'Invalid email address',
                                                    }
                                                })}
                                                disabled={formDisabled} // Disable field after CAPTCHA verification
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                className="form-input rounded-md border-gray-300 shadow-sm w-full"
                                                placeholder="Phone Number"
                                                {...register('phoneNumber', {
                                                    required: 'Phone Number is required',
                                                    pattern: {
                                                        value: /^[0-9]{10}$/,
                                                        message: 'Phone Number must be exactly 10 digits',
                                                    }
                                                })}
                                                disabled={formDisabled} // Disable field after CAPTCHA verification
                                            />
                                            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                className="form-input rounded-md border-gray-300 shadow-sm flex-1"
                                                placeholder="Amount"
                                                {...register('amount', { required: 'Amount is required' })}
                                                disabled={formDisabled} // Disable field after CAPTCHA verification
                                            />
                                            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
                                        </div>
                                    </div>

                                    {/* CAPTCHA */}
                                    <div className="mt-6 relative flex items-center">
                                        <LoadCanvasTemplate />
                                        <div className="relative w-full max-w-xs">
                                            <input
                                                type="text"
                                                value={captchaInput}
                                                onChange={handleCaptchaInputChange}
                                                placeholder="Enter Captcha Value"
                                                className="border border-gray-300 rounded-md px-4 py-2 w-full pr-12"
                                                disabled={formDisabled} // Disable CAPTCHA input after verification
                                            />
                                            <button
                                                type="button"
                                                onClick={validateCaptchaInput}
                                                className="absolute right-0 top-0 h-full bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
                                                disabled={captchaVerified} // Disable verify button after CAPTCHA verification
                                            >
                                                Verify Captcha
                                            </button>
                                            {captchaVerified && (
                                                <FaCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex items-center mt-6">
                                        <button
                                            type="submit"
                                            className="rounded-lg bg-red-500 py-2 px-4 font-bold text-white shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                           // Disable if CAPTCHA not verified or form already submitted
                                        >
                                            Submit Donation
                                        </button>
                                    </div>
                                </form>
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
