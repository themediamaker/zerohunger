import React, { useState, useRef } from 'react';

const OtpVerificationForm = ({ headtitle, userdata, onverify }) => {
  const [Mobileotp, setMobileotp] = useState(['', '', '', '', '', '']);
  const inputRefMob = Array.from({ length: 6 }, () => useRef());
  const [emaileotp, setemaileotp] = useState(['', '', '', '', '', '']);
  const inputRefemail = Array.from({ length: 6 }, () => useRef());

  const handleMobOtpChange = (index, value) => {
    if (value.length === 1 && index < 5) {
      inputRefMob[index + 1].current.focus();
    }
    const newMobileotp = [...Mobileotp];
    newMobileotp[index] = value;
    setMobileotp(newMobileotp);
  };

  const handleVerifyAccount = () => {
    const otpString = Mobileotp.join('');
    onverify(otpString);
  };

  return (
    <div className="relative bg-white pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
      <div className="mx-auto flex flex-col space-y-6 p-6">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <div className="font-semibold text-2xl">
            <p>{headtitle} Verification</p>
          </div>
          <div className="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your {headtitle}{' '}{`XXXX-XX${userdata.slice(6, 10)}`}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-center">
          <div className="flex flex-row justify-center w-full max-w-xs mx-auto">
            {Mobileotp.map((value, index) => (
              <div key={index} className="w-12">
                <input
                  ref={inputRefMob[index]}
                  value={value}
                  onChange={(e) => handleMobOtpChange(index, e.target.value)}
                  className="w-full h-16 text-center px-3 outline-none rounded-md border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                  type="text"
                  name=""
                  maxLength="1"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4 w-full max-w-xs mx-auto">
            <div>
              <button
                onClick={handleVerifyAccount}
                className="w-full py-3 bg-blue-700 text-white text-sm rounded-md shadow-sm"
              >
                Verify Account
              </button>
            </div>

            <div className="flex flex-row items-center justify-center text-sm font-medium text-gray-500">
              <p>Didn't receive the code?</p>{' '}
              <a
                className="text-blue-600"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationForm;
