import ProfilePhysical from '../../Auth/register/ProfilePhysical';
import RegisterProfile from '../../Auth/register/RegisterProfile';
import RegisterStatus from '../../Auth/register/RegisterStatus';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { makeRequest } from '@/src/Utils/Api';
import { profileregister } from '../../Utils/Allapiurl'
import { validateHeaderName } from 'http';
import { Uploadpicture } from '../../Auth/register/Uploadpicture'


const  Steper = (props) => {


  const formArray = [1, 2, 3, 4];
  const [formNo, setFormNo] = useState(formArray[0])

  const [formData, setFormData] = useState({});

  const [formProfile, setFromProfile] = useState({})
  const [status, setStatus] = useState({})


  const handleProfile = (data) => {
    try {
      makeRequest('post', profileregister, {data: data}).then((data)=>{
        console.log(data)
      })
    }
    catch (e) {
      console.log(e)
    }
    // console.log(data)
    setFromProfile((prevFromProfile) => ({ ...prevFromProfile, ...data }));
    next()
    props.page(formNo)

  }

  const profilehandle = (data) => {
    try {
      makeRequest('post', profileregister, { data })
    }
    catch (e) {
      console.log(e)
    }
    // console.log(data)
    setStatus((PreStatus) => ({ ...PreStatus, ...data}));
    const areAllFieldsFilled = Object.values({ ...status, ...data }).every(Boolean);
    props.hndlepage(4);

    if (areAllFieldsFilled) {
      toast.success('Form submitted successfully');
    } else {
      toast.error('Please fill in all input fields');
    }
    console.log(areAllFieldsFilled);
  }
  
  const handleFormSubmit = (data) => {
    try {

      makeRequest("post", profileregister, { data: data }).then((data) => {
        console.log(data)
      })
    }
    catch (e) {
      console.log(e)
    }
    console.log(data)
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    
    // Log the updated state
    next();
  };

  const next = () => {
    if (formNo < formArray.length) {
      setFormNo((prevFormNo) => prevFormNo + 1);
      props.page(formNo)
      // handlepage(formNo)
    }
  };





  const pre = () => {
    props.page(formNo)
    if (formNo > 1) {
      setFormNo((prevFormNo) => prevFormNo - 1);
    }
  };


  const skipp = () => {
    props.page(formNo)
    if (formNo < formArray.length) {
      setFormNo((prevFormNo) => prevFormNo + 1);
    } else {

      console.log('Skipping to the next page...');
    }
  };

  function handlestep(v) {
    // console.log(validateHeaderName)
    setFormNo(v)
    // props.handleapi(v)
  }


  return (
    <>
      <div className=" flex justify-center items-center">
        <ToastContainer />
        <div className="rounded-md  ">
          {/* <Circule formNo={formNo} formArray={formArray} next={next} /> */}
          <div className='flex justify-center items-center'>
            {

              formArray.map((v, i) => (
                <>
                  <div className={`w-[35px] my-3 text-white rounded-full ${formNo === i + 1 ? 'bg-blue-500 active-step scale-110' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
                    <span className='cursor-pointer' onClick={() => handlestep(v)}>{v}</span>
                  </div>
                  {i !== formArray.length - 1 &&
                    <div className={`w-[85px] h-[1px] ${formNo === i + 2 ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                  }
                </>
                
              ))
              
              // formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              //   <span className='cursor-pointer' onClick={() => {+handlestep(v)}}>{v}</span>
              // </div>
              //   {
              //     i !== formArray.length - 1 && <div className={`w-[85px] h-[1px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              //   }
              // </>)
            }
            
            <button
              className={`flex justify-end px-3 py-2 ml-20 text-lg rounded-md text-white ${formNo !== formArray.length ? 'bg-blue-500' : 'hidden'
                }`}
              onClick={skipp}
            >
             Skip
            </button>
          </div>

          {
            formNo === 1 && <div>
              <Uploadpicture next={() => next()} />
            </div>
          }
          {
            formNo === 2 && <div>
              <RegisterProfile handlesumbit={(e) => handleFormSubmit(e)} pre={() => pre()} />

            </div>
          }

          {
            formNo === 3 && <div>
              <ProfilePhysical profile={(e) => handleProfile(e)} pre={() => pre()} />

            </div>
          }

          {
            formNo === 4 && <div>

              <RegisterStatus statusprofile={(e) => profilehandle(e)} pre={() => pre()} />

            </div>
          }


        </div>
      </div>

    </>

  );
}

export default Steper;