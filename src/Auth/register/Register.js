"use client"
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import { useFormik } from 'formik'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import { Alert } from 'reactstrap';
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/navigation';
import { auth } from '../../../firebase';
import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import OtpVerificationForm from '../../Components/OTP/OtpModal';
import DialogDefault from '../../Elements/DialogBox/DialogBox';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { toastalert } from '../../Elements/ToastAlert/Toast'
import { makeRequest } from '@/src/Utils/Api';
import Selectlist from '../../Components/SelectList/SelectInput'
import { Spinner } from 'reactstrap';
import VerifiedIcon from '@mui/icons-material/Verified';
import { registerauth } from '@/src/Utils/Allapiurl';
// import sendOtp from '../../Utils/Otp'

const Register = () => {
    const router = useRouter();
    const [showOtpBox, setOtpBox] = useState(false)
    const [otpBoxcolor, setColorOtpBox] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [isDialogOpen, setDialogOpen] = useState(false);
    // const [confirmresult, setconfirmresult] = useState()
    const [otpsucess, setotpsucess] = useState(false)
    const [selectlist, setselectlist] = useState('self')
    // const [isSubmitting, setSubmitting] = usegettimeDifferencephoneNumberWithCodeState(false)
    const [isSubmitting, setSubmitting] = useState(false)
    const [isbuttonShow, setShowButton] = useState(true)

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleConfirmDialog = () => {
        // Add your logic for handling confirmation
        console.log('Dialog confirmed!');
        handleCloseDialog(); // Close the dialog after confirmation
    };

    const sendOtp = async () => {
        const phoneNumberWithCode = `+91${phoneNumber}`;
        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container');
try{
    if (typeof window !== 'undefined') {
        const recaptchaVerifier = new window.firebase.auth.RecaptchaVerifier(auth, 'recaptcha-container');
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumberWithCode, recaptchaVerifier)
        setConfirmationResult(confirmationResult)
        const msg = {
            message: 'send otp succesfully',
            command: 1
        }
        return msg
    } else {
        console.error('Window object is not defined. Unable to send OTP.');
    }
}catch(error){
    console.log('Error sending OTP:', error);
}




    };
    const handleVerifyOTP = async (verificationCode) => {
        try {
            if (!confirmationResult || !confirmationResult.verificationId) {
                console.error('Invalid confirmation result');
                return;
            }

            // Use the stored confirmationResult and verificationCode to confirm the OTP
            const credential = PhoneAuthProvider.credential(
                confirmationResult.verificationId,
                verificationCode
            );
            await signInWithCredential(auth, credential).then(() => {
                const command = {
                    message:'verification successful',
                    command:1
                }
                return command
                // handleCloseDialog()
                // setotpsucess(true)
                // setShowButton(true)
            });
            console.log('OTP verified successfully');

        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };





    const initialValues = {
        userName: '',
        Mobile: '',
        Email: '',
        password: '',
        createprofilefor: '',
        gender: ''

        // createprofilefor:''

    };
    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d{10}$/;
        const nameRegex = /^[a-zA-Z]*$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!nameRegex.test(values.userName)) {
            errors.name = 'Invalid name';

        }

        if (!mobileRegex.test(values.Mobile)) {
            errors.Mobile = 'Invalid mobile number';
            setColorOtpBox(false)
        }
        else if (!emailRegex.test(values.Email)) {
            errors.Email = 'Invalid Email Address';
        }
        else if (!passwordRegex.test(values.password)) {
            // errors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.';
            errors.password = 'Please Create Valid Password';
        }
        else if (!values.gender) {
            errors.gender = 'Please select a gender';
        }
        else {

            setColorOtpBox(true)
        }

        return errors;
    };
    const onSubmit = async (values) => {
        console.log(values)

        // if (!otpsucess) {
        //     return alert('mobile/email is not verified')
        // }
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const checker = emailRegex.test(values.email_Mobile) ? true : false
        values.createprofilefor = selectlist 
        try {
            makeRequest('post', registerauth,values).then((data) => {
                if (data['command'] == 0){
                    alert(data['message'])
                    // setloading(false)
                }
                else {
                    sessionStorage.setItem('userID', data['userid'])
                    sessionStorage.setItem('gender', data['gender'])
                    router.push('/user/dashboard')
                }
            })
        }
        catch (e) {
            console.log('error', e)

        }
    }
    const Formik = useFormik({
        initialValues,
        validate,
        onSubmit,

    });
    useEffect(() => {
        // console.log(Formik.values.Mobile.le>=10)
        if (Formik.values.Mobile.length >= 10 && Formik.values.Mobile.length > 0) {
            setPhoneNumber(Formik.values.Mobile)
        }
        else {
            setotpsucess(false)
        }
    }, [Formik.values.Mobile])

    const handleChange = (e) => {
        const { name, value } = e.target;
        Formik.setFieldTouched(name, true, false);
        Formik.setFieldValue(name, value);
        // const error = validate({...Formik.values, [name]:value})[name];
        // Formik.setFieldError(name, error);
    };
    const handlepasswordClick = () => {
        setIsPasswordVisible(!isPasswordVisible);

    };

    return (
        <>

            {/* {
                !otpsucess && (<div id="recaptcha-container"></div>)
            } */}

            <div className="flex flex-4 flex-col justify-center px-1 py-2 lg:px-3 bg-black bg-opacity-50 ">
                {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-15 w-auto"
                        src='/images/logo.png'
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register to your account
                    </h2>
                </div> */}

                <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" onSubmit={Formik.handleSubmit} >
                        {
                            !otpsucess && (<div id="recaptcha-container"></div>)
                        }
                        <div>

                            <div className="">
                                <Selectlist
                                    defultvalue={'Self'}
                                    headlabel={'Create Profile For'}
                                    options={['Self', 'Son', 'Daughter', 'Brother', 'Sister', 'Relative/Friend', 'Client-Marriage Bureau']}
                                    name={'createprofilefor'}
                                    setselectlist={setselectlist}
                                // onChange={Formik.handleChange}
                                />
                            </div>
                            {Formik.touched.name && Formik.errors.name ? (
                                <div style={{ color: 'red' }}>{Formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Full name
                            </label>
                            <div>
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    autoComplete="userName"
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}
                                    value={Formik.values.userName}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            {Formik.touched.name && Formik.errors.name ? (
                                <div style={{ color: 'red' }}>{Formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div>
                            <label className="block text-sm font-medium  text-white">
                                Gender
                            </label>
                            <div className="space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        onChange={Formik.handleChange}
                                        onBlur={Formik.handleBlur}
                                        checked={Formik.values.gender === 'male'}
                                        className="form-radio h-5 w-5 text-orange-500"
                                    />
                                    <span className="ml-2 text-white">Male</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        onChange={Formik.handleChange}
                                        onBlur={Formik.handleBlur}
                                        checked={Formik.values.gender === 'female'}
                                        className="form-radio h-5 w-5 text-orange-500"
                                    />
                                    <span className="ml-2 text-white">Female</span>
                                </label>
                                {/* Add more options if needed */}
                            </div>
                            {Formik.touched.gender && Formik.errors.gender ? (
                                <div style={{ color: 'red' }}>{Formik.errors.gender}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="Mobile" className="block text-sm font-medium  text-white">
                                Mobile No
                            </label>
                            <div className="">
                                <div className="relative">
                                    <div className="flex items-center">

                                        <input
                                            id="Mobile"
                                            name="Mobile"
                                            type="Mobile"
                                            autoComplete="Mobile"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.Mobile}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            {
                                                otpsucess && (
                                                    <Tooltip title={'Verified'}>
                                                        <VerifiedIcon
                                                            style={{ color: 'green' }}
                                                        />
                                                    </Tooltip>
                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                                {Formik.touched.Mobile && Formik.errors.Mobile ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.Mobile}</div>
                                ) : null}
                            </div><br></br>
                            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-white">
                                Email Address
                            </label>
                            <div className="">
                                <div className="relative">
                                    <div className="flex items-center">

                                        <input
                                            id="Email"
                                            name="Email"
                                            type="Email"
                                            autoComplete="Email"
                                            onChange={Formik.handleChange}
                                            onBlur={Formik.handleBlur}
                                            value={Formik.values.Email}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            {/* <Tooltip title={!otpBoxcolor ? 'Icon Disabled' : !otpsucess ? 'Click to Send OTP' : 'Verified'}>
                                                {
                                                    !otpsucess ?
                                                        <SendToMobileIcon onClick={() => sendOtp()} style={{
                                                            color: !otpBoxcolor ? 'red' : 'green',
                                                            cursor: !otpBoxcolor ? 'not-allowed' : 'pointer',
                                                            pointerEvents: !otpBoxcolor ? 'none' : 'auto',

                                                        }}

                                                        />
                                                        :
                                                        <MobileFriendlyIcon
                                                            style={{ color: 'green' }}
                                                        />
                                                }
                                            </Tooltip> */}
                                        </div>
                                    </div>
                                </div>
                                {Formik.touched.Email && Formik.errors.Email ? (
                                    <div style={{ color: 'red' }}>{Formik.errors.Email}</div>
                                ) : null}
                            </div><br></br>
                            {
                                isbuttonShow && (
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                            Create Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                name="password"
                                                type={isPasswordVisible ? "password" : "text"}

                                                autoComplete="password"
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events" onClick={handlepasswordClick} >
                                                <svg class="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" /></svg>
                                            </div>
                                        </div>
                                        {Formik.touched.password && Formik.errors.password ? (
                                            <div style={{ color: 'red' }}>{Formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                )
                            }
                        </div>
                        {
                            !isbuttonShow ?
                                <div>
                                    <button
                                        className="flex w-full justify-center rounded-md bg-orange-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        disabled={false}
                                        // type="submit"
                                        onClick={sendOtp}
                                    >
                                        Get OTP
                                    </button>
                                </div>
                                :
                                <div>
                                    <button
                                        type="submit"

                                        className="flex w-full justify-center rounded-md bg-orange-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        disabled={isSubmitting}
                                    >

                                        {
                                            // "Register Free"
                                            !isSubmitting ? 'Register Free' :
                                                <Spinner />
                                        }
                                    </button>
                                    {/* <div id="recaptcha-container"></div>     */}
                                </div>

                        }
                    </form>


                    {/* <div class="flex justify-evenly space-x-2 w-74 mt-10 text-center text-sm text-gray-500">
                        <span class="bg-gray-400 h-px flex-grow t-3 relative top-2"></span>
                        <span class="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
                        <span class="bg-gray-400 h-px flex-grow t-3 relative top-2"></span>
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-500 justify-evenly space-x-10">
                        <span class="text-xs text-blue-900 font-semibold"><FacebookIcon />Log in with Facebook</span>{' '}<span class="text-xs text-blue-900 font-semibold"><GoogleIcon />Log in with Google</span>
                    </p> */}

                </div>


            </div>
            {/* <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link href={"/auth/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    LOGIN</Link>
            </p> */}
            <DialogDefault
                isOpen={isDialogOpen}
                handleOpen={handleOpenDialog}
                handleClose={handleCloseDialog}
                handleConfirm={handleConfirmDialog}
                buttonRequired={false}
            // dialogTitle="Your Dialog Title"
            // contentClass="your-custom-content-class"
            >
                <OtpVerificationForm
                    headtitle={'Phone'}
                    userdata={'9971707395'}
                    onverify={(e) => handleVerifyOTP(e)}
                />
            </DialogDefault>

        </>
    )
}

export default Register