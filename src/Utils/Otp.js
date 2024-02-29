import {signInWithPhoneNumber, RecaptchaVerifier} from 'firebase/auth';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
// import { auth } from '../../../firebase';
import {auth} from '../../firebase'
import { useState } from 'react';


export const sendOtp = async (phoneNumber) => {
    const [confirmationResult, setConfirmationResult] = useState(null);
    const phoneNumberWithCode = `+91${phoneNumber}`;
    // console.log(phoneNumberWithCode)
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container');
    try {
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumberWithCode, recaptchaVerifier)
        setConfirmationResult(confirmationResult)
        return confirmationResult
        handleOpenDialog() 
        // return const msg = 'true'
    } catch (error) {
        console.log('Error sending OTP:', error);
    }
    };


    export const handleVerifyOTP = async (verificationCode) => {
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
            await signInWithCredential(auth, credential);
            console.log('OTP verified successfully');
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
        };