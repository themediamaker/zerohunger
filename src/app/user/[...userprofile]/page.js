"use client"
import React, { useState } from 'react'
// import ProfileView from '@/layout/ViewUserProfile/ProfileView'
import ProfileView from '../../../layout/ViewUserProfile/ProfileView'
import mongoose from 'mongoose'
import { useEffect } from 'react'
import { makeRequest } from '@/src/Utils/Api'
import { getuserid } from '../../../Helper/usergetid'
import { decryptData } from '@/src/Utils/SecretData'
import { useContext } from 'react'
import { ProfileContext } from '@/src/Context/profileContext'
import { allinone } from '@/src/Utils/Allapiurl'
import { getuserloginid } from '@/src/Utils/Allapiurl'
import { viewprofile } from '@/src/Utils/Allapiurl'
import PageNotFound from '../../../layout/Page-Not_Found/PageNotFound'



// import { ObjectId } from 'mongodb';
// import PageNotFound from '@/layout/Page-Not_Found/PageNotFound'
// import SortFilter from '@/Components/Filter/SortFilter'

const ProfilePage = ({ params }) => {
  const [pflid, setpflid] = useState()
  const [isprofilefind, setprofilefind] = useState(false)
  const [isloading, setisloading] = useState(false)
  const { setopenprofiledata, setisopenprofileloading } = useContext(ProfileContext)


  const { slug } = params;

  const parm = params.userprofile[2]
  console.log(parm)
  useEffect(() => {
    try {
      makeRequest('post', getuserloginid, { profileid: parm }).then((data) => {
        const ispassedprofiledata = JSON.parse(decryptData(data))
        if (ispassedprofiledata.command == 1) setprofilefind(true)
        else setprofilefind(false)
        setpflid(ispassedprofiledata.data)
      }).then(() => {
        setisloading(true)
      })
    }
    catch (e) {
      console.log(data)
    }
  }, [])

  const getuser = getuserid()
  // console.log(params.userprofile[2])
  const viewbyyouagg = [
    { $match: { _id: parm } },
    {
      $addFields: {
        viewedByYou: {
          $cond: {
            if: {
              $in: [
                // params.userprofile[2], 
                getuser.userid,
                { $ifNull: ["$viewedByYou", []] }]
            },
            then: "$viewedByYou",
            else: {
              $concatArrays: [{ $ifNull: ["$viewedByYou", []] }, [
                // params.userprofile[2]
                getuser.userid
              ]]
            }
          }
        }
      }
    },
    { $merge: { into: "users", whenMatched: "replace" } }
  ];
  const ViewedYouagg = [
    { $match: { _id: parm } },
    {
      $addFields: {
        ViewedYou: {
          $cond: {
            if: {
              $in: [
                // params.userprofile[2], 
                //params.userprofile[2],
                getuser.userid,
                { $ifNull: ["$ViewedYou", []] }]
            },
            then: "$ViewedYou",
            else: {
              $concatArrays: [{ $ifNull: ["$ViewedYou", []] }, [
                // params.userprofile[2]
                getuser.userid
              ]]
            }
          }
        }
      }
    },
    { $merge: { into: "users", whenMatched: "replace" } }
  ];
  useEffect(() => {
    makeRequest('post', allinone, { agg: viewbyyouagg }).then(data => console.log(data))
    makeRequest('post', allinone, { agg: ViewedYouagg }).then(data => console.log(data))
    makeRequest('post', viewprofile, { viewid: parm }).then(data => setopenprofiledata(JSON.parse(decryptData(data.viewdata)))).then(() => { setisopenprofileloading(true) })
  }, [])
  return (
    <div>
      {/* <PageNotFound/> */}
      {
        isloading ?
          isprofilefind ?
            <>

              <ProfileView />
            </>
            : <PageNotFound />
          : 'Please Wait....'
      }

      {/* <SortFilter/> */}
    </div>
  )
}

export default ProfilePage