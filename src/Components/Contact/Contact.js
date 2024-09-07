"use client";

import Header from "@/src/Layout/Comman/Header";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Footer from "@/src/Layout/Comman/Footer";
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaCheck } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  const [phone, setPhone] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handlePhoneChange = (value, country) => {
    setPhone(value);
    setPhoneCountryCode(country.dialCode);
  };

  const validateCaptchaInput = async () => {
    const formIsValid = await trigger(); // Validate form fields
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

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                  disabled={formDisabled} // Disable fields after CAPTCHA verification
                />
                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
              </div>
            </div>

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
                  disabled={formDisabled} // Disable fields after CAPTCHA verification
                />
                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
              </div>
            </div>

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
                  disabled={formDisabled} // Disable fields after CAPTCHA verification
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
            </div>

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
                  disabled={formDisabled} // Disable fields after CAPTCHA verification
                />
                {phone === "" && <span className="text-red-500 text-sm">Phone number is required</span>}
              </div>
            </div>

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
                  disabled={formDisabled} // Disable fields after CAPTCHA verification
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <LoadCanvasTemplate />
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={captchaInput}
              onChange={handleCaptchaInputChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              disabled={formDisabled} // Disable fields after CAPTCHA verification
            />
            <button
              type="button"
              onClick={validateCaptchaInput}
              className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              disabled={formDisabled}
            >
              Verify CAPTCHA
            </button>
            {captchaVerified && <FaCheck className="text-green-500 mt-2" />}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-blue-600 hover:ring-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"

          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
