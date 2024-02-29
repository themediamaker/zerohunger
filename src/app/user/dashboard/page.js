"use client"
import React, { useState } from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CountryCode from '../../../Data/CountryCode';
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from 'next/navigation';
import { DashboardContextProvider } from '../../../Context/DashboardContext';
import DashboardLayout from '../../../layout/index';
import Stepper from '../../../Components/Stepper/Steper'
import Regular from '../../../Components/Regular/Regular'
import { makeRequest } from '@/src/Utils/Api';
import { useEffect } from 'react';
import { userdetails } from '@/src/Utils/Allapiurl';
import { getuserid } from '@/src/Helper/usergetid';
import mongoose from 'mongoose';
import { DashboardContext } from '@/src/Context/dashboard';
import { useContext } from 'react';
import { userstepperstatus } from '@/src/Utils/Allapiurl';
import { decryptData } from '@/src/Utils/SecretData';
import { Dashboardskeleton } from '../../../Components/Loading/Loading'


const DashboardPage = (loading) => {
  const router = useRouter()
  console.log(router)
  const [data, setData] = useState(true)
  const [pageno, setpage] = useState(false)
  const [handlepage, sethandlepage] = useState()
  const { setuserdata, setisuserloading, setisuserprofileloading, setuserprofiledata, isuserprofileloading ,isuserloading} = useContext(DashboardContext)
  const userid = getuserid()
  useEffect(() => {
    makeRequest('post', userdetails, { userid: userid.userid }).then((data) => {
      setuserdata(data)
      console.log(data)
    }).then(() => {
      setisuserloading(true)
    })
    makeRequest('post', userstepperstatus, { userid: userid.userid }).then((data) => {
      console.log(decryptData(data))
      const decrypt = decryptData(data)
      console.log(JSON.parse(decrypt))
      console.log(JSON.parse(decryptData(data))['checkdata'], JSON.parse(decryptData(data))['command'])
      if (JSON.parse(decryptData(data))['checkdata'] === 0 && JSON.parse(decryptData(data))['command'] == 0) {
        setpage(false)
      }
      else if (JSON.parse(decryptData(data))['checkdata'] === 0 && JSON.parse(decryptData(data))['command'] == 1) {
        setpage(true)
      }
      else {
        setpage(false)
      }
      setuserprofiledata(decryptData(data))
    }).then(() => {
        setisuserprofileloading(true)
      })
  }, [])
  
  const handlePageChange = (pageNumber) => {
    console.log(pageNumber)

    setData(pageNumber === 3);
  };
  const handleapi = (e) => {

    // console.log(e)
  }
  return (
    <>
    
    <DashboardContextProvider>
      {
        isuserprofileloading && isuserloading ? (
          !pageno ? (
            data ? (
              <Stepper hndlepage={handlePageChange} page={handleapi} />
            ) : (
              <>
                {/* <Regular /> */}
                {
                  isuserprofileloading && <DashboardLayout/>
                }
               
              </>
            )
          ) : (
            <>
              {/* <Regular /> */}
                {
                  isuserprofileloading && <DashboardLayout/>
                }
            </>
          )
        ) : <Dashboardskeleton/>
      }
    </DashboardContextProvider>
    </>
  );
}
export default DashboardPage
