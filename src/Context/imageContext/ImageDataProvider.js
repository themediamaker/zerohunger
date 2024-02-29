import React from 'react'
import { imageContext } from './Index'
import { useState } from 'react'

export const ImageDataProvider = ({ children }) => {
   const[imagedata,setImagedata]=useState({
    userImage:null,
    galleryImages: [],
    userid:null
})
    return (

        <div>
            <imageContext.Provider value={{imagedata,setImagedata}}>
                {children}
            </imageContext.Provider>
        </div>
    )
}
