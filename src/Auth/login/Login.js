"use client"
import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link'
import { AuthContext } from '../../Context/AuthContext'

import { useRouter } from 'next/navigation';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import { Alert } from 'reactstrap';
import Tooltip from '@mui/material/Tooltip';
import { useSelector, useDispatch } from 'react-redux';
// import { name } from '@/Redux/slice';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {


    const router = useRouter()

    const { googleSignIn, FacebookLogin, setPhoneNumber, setOtp, handleSendOtp, handleOtpSubmit } = useContext(AuthContext)
    const [showPassBox, setpassBox] = useState(true)
    const [otpBoxcolor, setColorOtpBox] = useState(false)
    const [ispasswordshow, setpasswordshow] = useState(true)

    const isfacebooklogin = async () => {
        try {
            await FacebookLogin()
        }
        catch (errors) {
            console.log(errors)
        }
    }


    const handleSubmit = async (value) => {
        // console.log(value)
        try {
            // const { data } = await axios.post("/api/userauth", {value})
            await axios.post("/api/userauth", { value }).then((data)=>{
                console.log(data.data)
                sessionStorage.setItem('userID',data.data['userid'])
                sessionStorage.setItem('gender',data.data['gender'])
            }).then(()=>{
                router.push("/user/dashboard")
            })
          
        }
        catch (e) {
            Swal.fire({
                icon: "error",
                text: `${e.response.data['message']}`,
            });

        }
    }


    const handlegoogleSignIn = async () => {
        try {
            await googleSignIn()
        }
        catch (errors) {
            console.log(errors)
        }
    }

    const initialValues = {
        email_Mobile: '',
        password: ''
    };
    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailRegex.test(values.email_Mobile) && !mobileRegex.test(values.email_Mobile)) {
            errors.email_Mobile = 'Invalid email or mobile number';
            setColorOtpBox(false)

        }
        else if (!passwordRegex.test(values.password) && ispasswordshow) {
            errors.password = 'Please enter Valid Password'
        }
        else {
            setColorOtpBox(true)
        }
        return errors;
    };
    const onSubmit = (values) => {
        // e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checker = emailRegex.test(values.email_Mobile) ? true : false
        // router.push("/user/dashboard")
        handleSubmit(values)

        // if(checker==false){
        //     handleOtpSubmit()
        // }
        // console.log(checker)
        // if (checker == false) {
        //     handleSendOtp()
        // }
    }
    const Formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });
    useEffect(() => {
        setPhoneNumber(Formik.values.email_Mobile)
        setOtp(Formik.values.Otp)
    }, [Formik.values])
    const onhandleOtpSend = () => {
        handleSendOtp()
    }



    
    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-15 w-auto"
                        src='/images/logo.png'
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={Formik.handleSubmit} >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile/Email address
                            </label>
                            <div className="mt-2">
                                <div className="relative">
                                    <div className="flex items-center">
                                        <input
                                            id="email_Mobile"
                                            name="email_Mobile"
                                            type="email_Mobile"
                                            autoComplete="email_Mobile"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.email_Mobile}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            !showPassBox && (
                                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                                    <Tooltip title={!otpBoxcolor ? 'Icon Disabled' : 'Click to Send OTP'}>
                                                        <SendToMobileIcon onClick={() => onhandleOtpSend()} style={{
                                                            color: !otpBoxcolor ? 'red' : 'green',
                                                            cursor: !otpBoxcolor ? 'not-allowed' : 'pointer',
                                                            pointerEvents: !otpBoxcolor ? 'none' : 'auto',

                                                        }}
                                                        />
                                                    </Tooltip>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                                {Formik.touched.email_Mobile && Formik.errors.email_Mobile ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.email_Mobile}</div>
                                ) : null}
                            </div>
                        </div>
                        {
                            showPassBox &&
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Enter Your Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        // type={ispasswordshow ? "password" : "text"}
                                        type={ispasswordshow ? "password" : "text"}
                                        autoComplete="password"
                                        onChange={Formik.handleChange}
                                        onBlur={Formik.handleBlur}
                                        value={Formik.values.password}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events cursor-pointer" onClick={() => {setpasswordshow((e)=>!e)}}>
                                        {ispasswordshow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                    </div>
                                </div>
                                {Formik.touched.password && Formik.errors.password ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.password}</div>
                                ) : null}
                            </div>
                        }
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            > Login
                            </button>
                        </div>
                    </form>


                    <div className="flex justify-evenly space-x-2 w-74 mt-10 text-center text-sm text-gray-500">
                        <span className="bg-gray-400 h-px flex-grow t-3 relative top-2"></span>
                        <span className="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
                        <span className="bg-gray-400 h-px flex-grow t-3 relative top-2"></span>
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-500 justify-evenly space-x-10">
                        <span className="text-xs text-blue-900 font-semibold" onClick={() => { isfacebooklogin() }}><FacebookIcon />Log in with Facebook</span>{' '}<span className="text-xs text-blue-900 font-semibold" onClick={() => handlegoogleSignIn()}><GoogleIcon />Log in with Google</span>
                    </p>

                </div>


            </div>
            <p className="text-center text-sm text-gray-500">
                <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={() => { setpassBox((e) => !e) }}>Login With {!showPassBox ? 'Password' : 'Otp'}</span>
            </p>
            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}

                <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" href={"/"}>Registration</Link>

            </p>
            {/* <button
                             
                                onClick={()=>{()=>sendOtpInMobile()}}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send Otp
                            </button><br></br> */}

        </>
    )
}

export default Login