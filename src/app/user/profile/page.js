"use client"
import { EditProfile } from '../../../layout/profilepage/Profile'
import Personalinformation from '../../../layout/profilepage/Personalinformation'
import BasicDetails from '../../../layout/profilepage/BasicDetails'
import FamilyDetails from '../../../layout/profilepage/FamilyDetails'
import Location from '../../../layout/profilepage/Location'
import Professional from '../../../layout/profilepage/Professional'
import ReligionEdit from '../../../layout/profilepage/ReligionEdit'
import { makeRequest } from '../../../Utils/Api'
import { userstepperstatus } from '../../../Utils/Allapiurl'
import { useContext,useEffect } from 'react'
import { DashboardContext } from '../../../Context/dashboard'
import { getuserid } from '../../../Helper/usergetid'
import { decryptData } from '../../../Utils/SecretData'

const ProfilePage = () => {
    const userid = getuserid()
    const { setisuserprofileloading, setuserprofiledata,isuserprofileloading } = useContext(DashboardContext)
    useEffect(() => {
        try {
            makeRequest('post', userstepperstatus, { userid: userid.userid }).then((data) =>{
                setuserprofiledata(decryptData(data))
            }).then(()=>{
                setisuserprofileloading(true)
            })
        }
        catch (e) {
            console.log(e)
        }
    })
    return (
        <>
        {
            isuserprofileloading ?
            <div class=" bg-gray-50">
                <EditProfile />
                <div>
                    <h1 className='flex items-center justify-center overflow-hidden bg-gray-50 p-1'>Personal Information</h1>
                    <Personalinformation />
                </div>
                <div>
                    <h1 className='flex items-center justify-center overflow-hidden bg-gray-50 p-1'>Basic Details</h1>
                    <BasicDetails />
                </div>
                <div>
                    <h1 className='flex items-center justify-center overflow-hidden bg-gray-50 p-1'>Family Details</h1>
                    <FamilyDetails />
                </div>
                <div>
                    <h1 className='flex items-center justify-center overflow-hidden bg-gray-50 p-1'>Living Details</h1>
                    <Location />
                </div>
                <div>
                    <h1 className='flex items-center justify-center overflow-hidden bg-gray-50 p-1'>Professional Details</h1>
                    <Professional />
                </div>
                <div>
                    <h1 className='flex items-center justify-center overflow-hidden bg-gray-50 p-1'>Religion Details</h1>
                    <ReligionEdit />
                </div>
            </div>
            
        :'Please Wait....'
        }
         </>
    )
}
export default ProfilePage