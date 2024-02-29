"use client"
import React, { createContext, useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, getAuth, FacebookAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import auth from "@/app/firebase";
import {auth} from "../../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [confirmationResult, setConfirmationResult] = useState(null)
  const [otpSend, SetOtpSend] = useState(false)

  // $$$$$$$$$$$$$$$$ Phone Verification $$$$$$$$$$$$$$$$$$$$$$$$$$$$

  // useEffect(()=>{
  //   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  //     'size': 'normal',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       // ...
  //     },
  //     'expired-callback': () => {
  //       // Response expired. Ask user to solve reCAPTCHA again.
  //       // ...
  //     }
  //   });
  // },[auth])

  // ****************** Phone Number Auth **********************************
  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+${PhoneNumber.replace(/\D/g, '')}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber);
      if (confirmation) {
        setConfirmationResult(confirmation);
        SetOtpSend(true);
        setPhoneNumber('');
        alert('send otp');
      } else {
        console.error('Confirmation result is undefined.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await confirmationResult.confirm(otp)
      setOtp('')
      alert('sucesss')
    }
    catch (error) {
      console.log(error)
    }
  }
  // ****************** FaceBook Auth **********************************

  const FacebookLogin = () => {
    const FacebookProvider = new FacebookAuthProvider()
    signInWithPopup(auth, FacebookProvider)
      .then((result) => {

        const user = result.user;


        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = FacebookAuthProvider.credentialFromError(error);


      });
  }

  // ****************** Google Auth **********************************
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }
  const lagout = () => {
    signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
    });
  }, [user])

  // **************************************************************************

  return (
    <AuthContext.Provider value={{ user, googleSignIn, lagout, FacebookLogin, setPhoneNumber, setOtp, handleSendOtp, handleOtpSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};


