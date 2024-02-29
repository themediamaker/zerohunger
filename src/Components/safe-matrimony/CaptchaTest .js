import React, { useState,useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import LoopIcon from '@mui/icons-material/Loop';
const CaptchaTest = () => {
    useEffect(() => {
        loadCaptchaEnginge(8);
    }, []);

    const [captchaInput, setCaptchaInput] = useState('');

    const handleInputChange = (event) => {
        setCaptchaInput(event.target.value);
    };

    const doSubmit = () => {
        if (validateCaptcha(captchaInput) === true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6);
            setCaptchaInput('');
        } else {
            alert('Captcha Does Not Match');
            setCaptchaInput('');
        }
    };



    return (
        <div>
            <div className="w-full">
                <div className="w-1/2 flex">
                    

               
                    <div className="flex">
                        <LoadCanvasTemplate reloadColor="red" />
                    </div>
                    </div>

                    <div className="w-1/2">
                        <div>
                        <input
                            type="text"
                            id="user_captcha_input"
                            name="user_captcha_input"
                            value={captchaInput}
                            onChange={handleInputChange}
                            placeholder="Enter Captcha Value"
                            className="border border-gray-300 rounded-md px-2 py-1 mb-2"
                        />

                        </div>
                    </div>


                    <div className="w-1/2">
                
                       <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={doSubmit}>Submit</button>
                    </div>
                
            </div>
        </div>
    );
};

export default CaptchaTest;
