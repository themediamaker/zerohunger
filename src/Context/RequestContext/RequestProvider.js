"use client"
import { RequestContext } from ".";
import { useState } from "react";

import React from 'react'

const RequestProvider = ({ children }) => {
    const [requestdata, setRequest] = useState([])
    const [accdata, setaccdata] = useState([])
    const [candata, setcandata] = useState([])
/////////////////////////// Shortlist and viewed state///////////////////////////////////
    const [shortlistmedata,setshortlistmedata] = useState([])
    const [isloadingshortlistme,setisloadingshortlistme] = useState(false)
    const [shortlistyoudata,setshortlistyoudata] = useState([])
    const [isloadingshortlistedyou,setisloadingshortlistedyou] = useState(false)
    const [viewedyoudata,setviewedyoudata] = useState([])
    const [isloadingviewedyou,setisloadingviewedyou] = useState(false)
    const [viewedbymedata,setviewedbymedata] = useState([])
    const [isloadingviewedbyme,setisloadingviewedbyme] = useState(false)
//////////////////////////////////////////////////////////////////////////////
    const [isrequestloading, setisrequestloading] = useState(false)
    const [Pendingrequest,setpendingrequest]=useState([])
    return (
        <>
            <RequestContext.Provider value={{
                requestdata, setRequest, isrequestloading, 
                setisrequestloading,candata, setcandata,
                accdata, setaccdata,Pendingrequest,
                setpendingrequest,
                shortlistmedata,setshortlistmedata,
                isloadingshortlistme,setisloadingshortlistme,
                shortlistyoudata,setshortlistyoudata,
                isloadingshortlistedyou,setisloadingshortlistedyou,
                viewedyoudata,setviewedyoudata,
                isloadingviewedyou,setisloadingviewedyou,
                viewedbymedata,setviewedbymedata,
                isloadingviewedbyme,setisloadingviewedbyme
                }}>
                {children}
            </RequestContext.Provider>
        </>
    )
}

export default RequestProvider
