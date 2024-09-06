"use client";

import Header from "@/src/Layout/Comman/Header";
import React, { useState,useEffect  } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Footer from "@/src/Layout/Comman/Footer";
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaCheck } from 'react-icons/fa'; 
const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [phone, setPhone] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState('');
    const [captchaVerified, setCaptchaVerified] = useState(false);



  useEffect(() => {
    loadCaptchaEnginge(6); 
}, []);


  const handlePhoneChange = (value, country) => {
    setPhone(value);
    setPhoneCountryCode(country.dialCode); 
  };


  const onSubmit = (data) => {
  
    const phoneNumber = phone.startsWith(phoneCountryCode)
      ? phone.substring(phoneCountryCode.length)
      : phone;

    console.log({
      ...data,
      phoneCountryCode,
      phoneNumber
    });
    alert("Form Submitted!");
  };


  const handleCaptchaInputChange = (event) => {
    setCaptchaInput(event.target.value);
};

const validateCaptchaInput = () => {
  if (validateCaptcha(captchaInput)) {
      setCaptchaVerified(true);
      alert("CAPTCHA verified successfully!");
  } else {
      setCaptchaVerified(false);
      alert("CAPTCHA does not match. Please try again.");
      loadCaptchaEnginge(6);
  }
};



  return (
    <>
      <Header />

      <div className="flex justify-center mt-8">
        <img
          src="/images/children-banner.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-black">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  {...register("firstName", { required: "First name is required" })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
              </div>
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-black">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  {...register("lastName", { required: "Last name is required" })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
              </div>
            </div>
            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" }
                  })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
            </div>
            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-green-600">
                Phone number
              </label>
              <div className="mt-2.5">
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputClass="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
                {phone === "" && <span className="text-red-500 text-sm">Phone number is required</span>}
              </div>
            </div>
            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-green-600">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>
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
            className="border border-gray-300 rounded-md px-4 py-2 w-full pr-24" // Adjust padding-right to make space for the button and icon
        />
        <div className="flex items-center space-x-2 absolute right-0 top-0 h-full">
            <button
                type="button"
                onClick={validateCaptchaInput}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
            >
                Verify Captcha
            </button>
            {captchaVerified && (
                <FaCheck className="text-green-500 text-xl" />
            )}
        </div>
    </div>
</div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
