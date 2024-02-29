"use client"
import { DashboardContext} from ".";
import React from 'react'
import { useState } from "react";


const DashboardProvider = ({children}) => {
  const name='sandeep'
  const[userdata,setuserdata]=useState([])
  const[isuserloading,setisuserloading]=useState(false)
  const[userprofiledata,setuserprofiledata]=useState([])
  const[isuserprofileloading,setisuserprofileloading]=useState(false)
  return (
    <div>
      <DashboardContext.Provider value={{userdata,setuserdata,isuserloading,setisuserloading,userprofiledata,setuserprofiledata,isuserprofileloading,setisuserprofileloading}}>
        {children}
      </DashboardContext.Provider>
    </div>
  )
}

export default DashboardProvider