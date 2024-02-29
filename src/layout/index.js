
import React, { useEffect } from 'react'
import UserProfile from './userProfile/UserProfile'
import { HomeLayout } from './Home/HomeLayout'
import { useContext } from 'react'
import { DashboardContext } from '../Context/dashboard'
import { makeRequest } from '../Utils/Api'
import { userstepperstatus } from '../Utils/Allapiurl'
import { getuserid } from '../Helper/usergetid'
import { decryptData } from '../Utils/SecretData'
import dynamic from 'next/dynamic'


const DashboardLayout = () => {
// const useProdfile = dynamic(()=>{import('./userProfile/UserProfile')},{ssr:false})
const[ispageloading,setispagela]=React.useState(false)
const { setuserdata, setisuserloading, setisuserprofileloading, setuserprofiledata, isuserprofileloading ,isuserloading} = useContext(DashboardContext)
//   React.useEffect(() => {
//     try {
//       makeRequest('post', userstepperstatus, getuserid().userid).then((data) => {
//         setuserprofiledata(decryptData(data)).then(()=>{
//           setisuserprofileloading(true)
//           setispagela(true)
//         })
//       })
//     }
//     catch (e) {
// console.log(e)
//     }
//   }, [])
  return (
    <div className="grid grid-cols-2 md:grid-cols-12 ">
      <div className="col-span-1 md:col-span-4">
       <UserProfile/>
      </div>
      <div className="col-span-1 md:col-span-8">
        <section>
          <HomeLayout />
        </section>
      </div>
    </div>
  )
}

export default DashboardLayout